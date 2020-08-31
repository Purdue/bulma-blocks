/* eslint-disable react/jsx-key */

/**
 * BLOCK: Bulma Container
 *
 * Bulma container block: https://bulma.io/documentation/layout/container/.
 */

//  Import CSS.
import "./editor.scss";
import "./style.scss";

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

const {
  PanelBody,
  PanelRow,
  RangeControl,
  CheckboxControl,
  SelectControl,
} = wp.components;
const { InnerBlocks, InspectorControls } = wp.blockEditor;
import { createBlock } from "@wordpress/blocks";

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType("bulma-blocks/columns", {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __("Bulma - Columns"), // Block title.
  icon: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="columns"
      className="svg-inline--fa fa-columns fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="#00c4a7"
        d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z"
      ></path>
    </svg>
  ), // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: "bulma-blocks", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [],

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * The "edit" property must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   *
   * @param {Object} props Props.
   * @returns {Mixed} JSX Component.
   */

  attributes: {
    numColumns: { type: "number", default: 1 },
    isCentered: { type: "boolean" },
    dividers: { type: "boolean", default: false },
    collapse: { type: "string", default: "" },
    bgColor: { type: "string", default: "" },
  },

  supports: {
    className: false,
  },

  // Block description in side panel
  description: __(
    "Add the columns container element that uses individual column elements to layout content on the page."
  ),

  edit: (props) => {
    if (props.attributes.numColumns === 1) {
      updateColumns(props, 1, 1);
    }
    if (!props.attributes.isCentered) {
      props.setAttributes({ isCentered: false });
    }

    return [
      <InspectorControls>
        <PanelBody>
          <PanelRow>
            <RangeControl
              className={"bulma-columns-range-control"}
              label="Number of Columns"
              value={props.attributes.numColumns || 1}
              min={1}
              max={6}
              onChange={(numColumns) => {
                updateColumns(props, props.attributes.numColumns, numColumns);
                props.setAttributes({ numColumns });
              }}
            />
          </PanelRow>
          <PanelRow>
            <CheckboxControl
              label="Center Columns?"
              checked={props.attributes.isCentered}
              onChange={(checked) =>
                props.setAttributes({ isCentered: checked })
              }
            />
          </PanelRow>
          <PanelRow>
            <CheckboxControl
              label="Include dividers between columns?"
              checked={props.attributes.dividers}
              onChange={(checked) => props.setAttributes({ dividers: checked })}
            />
          </PanelRow>
          <PanelRow>
            <SelectControl
              label="Columns Collapse"
              help="Choose at which screen size the columns collapse to a single column."
              value={props.attributes.collapse}
              options={[
                { value: "is-mobile", label: "Never Collapse" },
                { value: "", label: "Tablet (768px and down)" },
                { value: "is-desktop", label: "Desktop (1024px and down)" },
              ]}
              onChange={(collapse) => {
                props.setAttributes({ collapse });
              }}
            />
          </PanelRow>
        </PanelBody>
        <PanelBody>
          <PanelRow>
            <SelectControl
              label="Background Color"
              value={props.attributes.bgColor}
              options={[
                { value: "", label: "None" },
                { value: "has-background-black", label: "Black" },
                { value: "has-background-grey-lighter", label: "Light Gray" },
                { value: "has-background-black-ter", label: "Dark Gray" },
              ]}
              onChange={(bgColor) => {
                props.setAttributes({ bgColor });
              }}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>,

      <div
        className={`bulma-blocks-editor-columns${
          props.isSelected || hasSelectedInnerBlock(props)
            ? " bulma-blocks-editor-columns--selected"
            : ""
        }`}
      >
        <InnerBlocks templateLock="all" />
      </div>,
    ];
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by Gutenberg into post_content.
   *
   * The "save" property must be specified and must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   *
   * @param {Object} props Props.
   * @returns {Mixed} JSX Frontend HTML.
   */
  save: (props) => {
    return (
      <div
        className={`columns${
          props.attributes.isCentered ? " is-centered" : ""
        } is-multiline ${props.attributes.collapse || ""} ${
          props.attributes.bgColor !== "" ? props.attributes.bgColor : ""
        } ${props.attributes.dividers ? "has-dividers" : ""}`}
      >
        <InnerBlocks.Content />
      </div>
    );
  },
});

const hasSelectedInnerBlock = (props) => {
  const select = wp.data.select("core/block-editor");
  const selected = select.getBlockSelectionStart();
  const inner = select.getBlock(props.clientId).innerBlocks;
  for (let i = 0; i < inner.length; i++) {
    if (
      inner[i].clientId === selected ||
      (inner[i].innerBlocks.length && hasSelectedInnerBlock(inner[i]))
    ) {
      return true;
    }
  }
  return false;
};

const updateColumns = (props, oldNum, newNum) => {
  const select = wp.data.select("core/block-editor");
  let innerBlocks = select.getBlock(props.clientId).innerBlocks;

  const adding = newNum > oldNum;
  const triedZero = newNum === 0

  if (oldNum === 1 && oldNum === newNum) {
    const firstBlock = createBlock("bulma-blocks/column");
    innerBlocks = [firstBlock];
    wp.data
      .dispatch("core/block-editor")
      .replaceInnerBlocks(props.clientId, innerBlocks, false);
  } else if (adding && !triedZero) {
    const newToAdd = newNum - oldNum

    for(let i = 0; i < newToAdd; i++) {
      const newColumn = createBlock('bulma-blocks/column')
      innerBlocks.push(newColumn)
    }

    wp.data
      .dispatch("core/block-editor")
      .replaceInnerBlocks(props.clientId, innerBlocks, false);
  } else if(!adding && !triedZero) {
    const removingNum = oldNum - newNum

    for(let i = 0; i < removingNum; i++) {
      innerBlocks.pop();
    }
    wp.data
      .dispatch("core/block-editor")
      .replaceInnerBlocks(props.clientId, innerBlocks, false);
  }
};
