import { ifTs } from "../utils/file-utils";
import { JsOrTs, SchemeType } from "../utils/types";

export const makeNextjsInitPage = (
  projectId: string,
  projectApiToken: string
): string =>
  `import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "${projectId}",
      token: "${projectApiToken}",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);
`;

export function makeNextjsCatchallPage(jsOrTs: JsOrTs): string {
  return `import * as React from "react";
import {
  PlasmicComponent,
  extractPlasmicQueryData,
  ComponentRenderData,
  PlasmicRootProvider,
} from "@plasmicapp/loader-nextjs";
${ifTs(jsOrTs, `import type { GetStaticPaths, GetStaticProps } from "next";\n`)}
import Error from "next/error";
import { useRouter } from "next/router";
import { PLASMIC } from "plasmic-init";

export default function PlasmicLoaderPage(props${ifTs(
    jsOrTs,
    `: {
  plasmicData?: ComponentRenderData;
  queryCache?: Record<string, any>;
}`
  )}) {
  const { plasmicData, queryCache } = props;
  const router = useRouter();
  if (!plasmicData || plasmicData.entryCompMetas.length === 0) {
    return <Error statusCode={404} />;
  }
  const pageMeta = plasmicData.entryCompMetas[0];
  return (
    <PlasmicRootProvider
      loader={PLASMIC}
      prefetchedData={plasmicData}
      prefetchedQueryData={queryCache}
      pageParams={pageMeta.params}
      pageQuery={router.query}
    >
      <PlasmicComponent component={pageMeta.displayName} />
    </PlasmicRootProvider>
  );
}

export const getStaticProps${ifTs(
    jsOrTs,
    `: GetStaticProps`
  )} = async (context) => {
  const { catchall } = context.params ?? {};
  const plasmicPath = typeof catchall === 'string' ? catchall : Array.isArray(catchall) ? \`/\${catchall.join('/')}\` : '/';
  const plasmicData = await PLASMIC.maybeFetchComponentData(plasmicPath);
  if (!plasmicData) {
    // non-Plasmic catch-all
    return { props: {} };
  }
  const pageMeta = plasmicData.entryCompMetas[0];
  // Cache the necessary data fetched for the page
  const queryCache = await extractPlasmicQueryData(
    <PlasmicRootProvider
      loader={PLASMIC}
      prefetchedData={plasmicData}
      pageParams={pageMeta.params}
    >
      <PlasmicComponent component={pageMeta.displayName} />
    </PlasmicRootProvider>
  );
  // Use revalidate if you want incremental static regeneration
  return { props: { plasmicData, queryCache }, revalidate: 60 };
}

export const getStaticPaths${ifTs(jsOrTs, `: GetStaticPaths`)} = async () => {
  const pageModules = await PLASMIC.fetchPages();
  return {
    paths: pageModules.map((mod) => ({
      params: {
        catchall: mod.path.substring(1).split("/"),
      },
    })),
    fallback: "blocking",
  };
}
`;
}

export function makeNextjsHostPage(scheme: SchemeType): string {
  if (scheme === "loader") {
    return `import * as React from 'react';
import { PlasmicCanvasHost } from '@plasmicapp/loader-nextjs';
import { PLASMIC } from 'plasmic-init';

export default function PlasmicHost() {
  return PLASMIC && <PlasmicCanvasHost />;
}
`;
  } else {
    return `import * as React from 'react';
import { PlasmicCanvasHost, registerComponent } from '@plasmicapp/host';

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// registerComponent(...)

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
`;
  }
}

export function wrapAppRootForCodegen(jsOrTs: JsOrTs): string {
  return `import 'styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import { AppProps } from "next/app";
import Head from "next/head";

export default function MyApp({ Component, pageProps }${ifTs(
    jsOrTs,
    `: AppProps`
  )}) {
  return (
    <PlasmicRootProvider Head={Head}>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}
`;
}