// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: w2GXN278dkQ2gQTVQnPehW
// Component: yN9xaawDlts

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web";
import CopilotCodePrompt from "../../components/CopilotCodePrompt"; // plasmic-import: SdMPiPjcB9G/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_plasmic_kit_data_binding.module.css"; // plasmic-import: w2GXN278dkQ2gQTVQnPehW/projectcss
import sty from "./PlasmicDataPickerCodeEditorLayout.module.css"; // plasmic-import: yN9xaawDlts/css

import ChevronDownsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: xZrB9_0ir/icon
import Code3SvgIcon from "../plasmic_kit_icons/icons/PlasmicIcon__Code3Svg"; // plasmic-import: nLt6_YN8G/icon

createPlasmicElementProxy;

export type PlasmicDataPickerCodeEditorLayout__VariantMembers = {
  hidePreview: "hidePreview";
  envPanel: "hidden" | "collapsed";
  copilot: "copilot";
};
export type PlasmicDataPickerCodeEditorLayout__VariantsArgs = {
  hidePreview?: SingleBooleanChoiceArg<"hidePreview">;
  envPanel?: SingleChoiceArg<"hidden" | "collapsed">;
  copilot?: SingleBooleanChoiceArg<"copilot">;
};
type VariantPropType = keyof PlasmicDataPickerCodeEditorLayout__VariantsArgs;
export const PlasmicDataPickerCodeEditorLayout__VariantProps =
  new Array<VariantPropType>("hidePreview", "envPanel", "copilot");

export type PlasmicDataPickerCodeEditorLayout__ArgsType = {
  codeEditor?: React.ReactNode;
  codePreview?: React.ReactNode;
  env?: React.ReactNode;
};
type ArgPropType = keyof PlasmicDataPickerCodeEditorLayout__ArgsType;
export const PlasmicDataPickerCodeEditorLayout__ArgProps =
  new Array<ArgPropType>("codeEditor", "codePreview", "env");

export type PlasmicDataPickerCodeEditorLayout__OverridesType = {
  root?: p.Flex<"div">;
  envLabel?: p.Flex<"div">;
  envLabelText?: p.Flex<"div">;
  envPanelContainer?: p.Flex<"div">;
  envToggleButton?: p.Flex<"button">;
  envPreviewContainer?: p.Flex<"div">;
  codePanel?: p.Flex<"div">;
  copilotCodePrompt?: p.Flex<typeof CopilotCodePrompt>;
  previewPanel?: p.Flex<"div">;
};

export interface DefaultDataPickerCodeEditorLayoutProps {
  codeEditor?: React.ReactNode;
  codePreview?: React.ReactNode;
  env?: React.ReactNode;
  hidePreview?: SingleBooleanChoiceArg<"hidePreview">;
  envPanel?: SingleChoiceArg<"hidden" | "collapsed">;
  copilot?: SingleBooleanChoiceArg<"copilot">;
  className?: string;
}

const $$ = {};

function PlasmicDataPickerCodeEditorLayout__RenderFunc(props: {
  variants: PlasmicDataPickerCodeEditorLayout__VariantsArgs;
  args: PlasmicDataPickerCodeEditorLayout__ArgsType;
  overrides: PlasmicDataPickerCodeEditorLayout__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants,
  };

  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "hidePreview",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.hidePreview,
      },
      {
        path: "envPanel",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.envPanel,
      },
      {
        path: "copilot",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.copilot,
      },
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs,
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootcopilot]: hasVariant($state, "copilot", "copilot"),
          [sty.rootcopilot_envPanel_collapsed]:
            hasVariant($state, "copilot", "copilot") &&
            hasVariant($state, "envPanel", "collapsed"),
        }
      )}
    >
      {(hasVariant($state, "envPanel", "hidden") ? false : true) ? (
        <div
          data-plasmic-name={"envLabel"}
          data-plasmic-override={overrides.envLabel}
          className={classNames(projectcss.all, sty.envLabel, {
            [sty.envLabelenvPanel_collapsed]: hasVariant(
              $state,
              "envPanel",
              "collapsed"
            ),
            [sty.envLabelenvPanel_hidden]: hasVariant(
              $state,
              "envPanel",
              "hidden"
            ),
            [sty.envLabelhidePreview]: hasVariant(
              $state,
              "hidePreview",
              "hidePreview"
            ),
          })}
        >
          <ChevronDownsvgIcon
            className={classNames(projectcss.all, sty.svg__xgwk8, {
              [sty.svgenvPanel_collapsed__xgwk8Xz9Ol]: hasVariant(
                $state,
                "envPanel",
                "collapsed"
              ),
            })}
            role={"img"}
          />

          <Code3SvgIcon
            className={classNames(projectcss.all, sty.svg__ckpYw, {
              [sty.svghidePreview__ckpYwjDbmv]: hasVariant(
                $state,
                "hidePreview",
                "hidePreview"
              ),
            })}
            role={"img"}
          />

          <div
            data-plasmic-name={"envLabelText"}
            data-plasmic-override={overrides.envLabelText}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.envLabelText,
              {
                [sty.envLabelTextenvPanel_hidden]: hasVariant(
                  $state,
                  "envPanel",
                  "hidden"
                ),
              }
            )}
          >
            {"Data context"}
          </div>
        </div>
      ) : null}
      {(hasVariant($state, "envPanel", "hidden") ? false : true) ? (
        <div
          data-plasmic-name={"envPanelContainer"}
          data-plasmic-override={overrides.envPanelContainer}
          className={classNames(projectcss.all, sty.envPanelContainer, {
            [sty.envPanelContainerenvPanel_collapsed]: hasVariant(
              $state,
              "envPanel",
              "collapsed"
            ),
            [sty.envPanelContainerenvPanel_hidden]: hasVariant(
              $state,
              "envPanel",
              "hidden"
            ),
            [sty.envPanelContainerhidePreview]: hasVariant(
              $state,
              "hidePreview",
              "hidePreview"
            ),
          })}
        >
          <button
            data-plasmic-name={"envToggleButton"}
            data-plasmic-override={overrides.envToggleButton}
            aria-label={"Toggle data context preview"}
            className={classNames(
              projectcss.all,
              projectcss.button,
              sty.envToggleButton,
              {
                [sty.envToggleButtonenvPanel_collapsed]: hasVariant(
                  $state,
                  "envPanel",
                  "collapsed"
                ),
              }
            )}
            ref={(ref) => {
              $refs["envToggleButton"] = ref;
            }}
          />

          {(hasVariant($state, "envPanel", "collapsed") ? false : true) ? (
            <div
              data-plasmic-name={"envPreviewContainer"}
              data-plasmic-override={overrides.envPreviewContainer}
              className={classNames(projectcss.all, sty.envPreviewContainer, {
                [sty.envPreviewContainercopilot]: hasVariant(
                  $state,
                  "copilot",
                  "copilot"
                ),
                [sty.envPreviewContainerenvPanel_collapsed]: hasVariant(
                  $state,
                  "envPanel",
                  "collapsed"
                ),
                [sty.envPreviewContainerhidePreview]: hasVariant(
                  $state,
                  "hidePreview",
                  "hidePreview"
                ),
              })}
            >
              {p.renderPlasmicSlot({
                defaultContents: (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__veFdy
                    )}
                  >
                    {"Env preview here..."}
                  </div>
                ),
                value: args.env,
              })}
            </div>
          ) : null}
        </div>
      ) : null}
      <div
        data-plasmic-name={"codePanel"}
        data-plasmic-override={overrides.codePanel}
        className={classNames(projectcss.all, sty.codePanel, {
          [sty.codePanelcopilot]: hasVariant($state, "copilot", "copilot"),
          [sty.codePanelcopilot_envPanel_collapsed]:
            hasVariant($state, "copilot", "copilot") &&
            hasVariant($state, "envPanel", "collapsed"),
          [sty.codePanelhidePreview]: hasVariant(
            $state,
            "hidePreview",
            "hidePreview"
          ),
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__lFlPj
              )}
            >
              {"Monaco Editor here"}
            </div>
          ),
          value: args.codeEditor,
        })}
        {(hasVariant($state, "copilot", "copilot") ? true : false) ? (
          <CopilotCodePrompt
            data-plasmic-name={"copilotCodePrompt"}
            data-plasmic-override={overrides.copilotCodePrompt}
            className={classNames("__wab_instance", sty.copilotCodePrompt, {
              [sty.copilotCodePromptcopilot]: hasVariant(
                $state,
                "copilot",
                "copilot"
              ),
              [sty.copilotCodePromptcopilot_envPanel_collapsed]:
                hasVariant($state, "copilot", "copilot") &&
                hasVariant($state, "envPanel", "collapsed"),
            })}
          />
        ) : null}
      </div>
      {(hasVariant($state, "hidePreview", "hidePreview") ? false : true) ? (
        <div
          data-plasmic-name={"previewPanel"}
          data-plasmic-override={overrides.previewPanel}
          className={classNames(projectcss.all, sty.previewPanel, {
            [sty.previewPanelcopilot]: hasVariant($state, "copilot", "copilot"),
            [sty.previewPanelcopilot_envPanel_collapsed]:
              hasVariant($state, "copilot", "copilot") &&
              hasVariant($state, "envPanel", "collapsed"),
            [sty.previewPanelhidePreview]: hasVariant(
              $state,
              "hidePreview",
              "hidePreview"
            ),
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___4Pwuo
                )}
              >
                {'"Value Preview Here..."'}
              </div>
            ),
            value: args.codePreview,
          })}
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "envLabel",
    "envLabelText",
    "envPanelContainer",
    "envToggleButton",
    "envPreviewContainer",
    "codePanel",
    "copilotCodePrompt",
    "previewPanel",
  ],
  envLabel: ["envLabel", "envLabelText"],
  envLabelText: ["envLabelText"],
  envPanelContainer: [
    "envPanelContainer",
    "envToggleButton",
    "envPreviewContainer",
  ],
  envToggleButton: ["envToggleButton"],
  envPreviewContainer: ["envPreviewContainer"],
  codePanel: ["codePanel", "copilotCodePrompt"],
  copilotCodePrompt: ["copilotCodePrompt"],
  previewPanel: ["previewPanel"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  envLabel: "div";
  envLabelText: "div";
  envPanelContainer: "div";
  envToggleButton: "button";
  envPreviewContainer: "div";
  codePanel: "div";
  copilotCodePrompt: typeof CopilotCodePrompt;
  previewPanel: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDataPickerCodeEditorLayout__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDataPickerCodeEditorLayout__VariantsArgs;
    args?: PlasmicDataPickerCodeEditorLayout__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDataPickerCodeEditorLayout__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDataPickerCodeEditorLayout__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicDataPickerCodeEditorLayout__ArgProps,
          internalVariantPropNames:
            PlasmicDataPickerCodeEditorLayout__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicDataPickerCodeEditorLayout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDataPickerCodeEditorLayout";
  } else {
    func.displayName = `PlasmicDataPickerCodeEditorLayout.${nodeName}`;
  }
  return func;
}

export const PlasmicDataPickerCodeEditorLayout = Object.assign(
  // Top-level PlasmicDataPickerCodeEditorLayout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    envLabel: makeNodeComponent("envLabel"),
    envLabelText: makeNodeComponent("envLabelText"),
    envPanelContainer: makeNodeComponent("envPanelContainer"),
    envToggleButton: makeNodeComponent("envToggleButton"),
    envPreviewContainer: makeNodeComponent("envPreviewContainer"),
    codePanel: makeNodeComponent("codePanel"),
    copilotCodePrompt: makeNodeComponent("copilotCodePrompt"),
    previewPanel: makeNodeComponent("previewPanel"),

    // Metadata about props expected for PlasmicDataPickerCodeEditorLayout
    internalVariantProps: PlasmicDataPickerCodeEditorLayout__VariantProps,
    internalArgProps: PlasmicDataPickerCodeEditorLayout__ArgProps,
  }
);

export default PlasmicDataPickerCodeEditorLayout;
/* prettier-ignore-end */