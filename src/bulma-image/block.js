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
  SelectControl,
  TextareaControl,
  TextControl,
  Button,
  CheckboxControl,
} = wp.components;
const { InspectorControls, MediaUploadCheck, MediaUpload } = wp.blockEditor;

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
registerBlockType("bulma-blocks/image", {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __("Bulma - Image"), // Block title.
  icon: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="file-image"
      className="svg-inline--fa fa-file-image fa-w-12"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
    >
      <path
        fill="#00c4a7"
        d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm32-48h224V288l-23.5-23.5c-4.7-4.7-12.3-4.7-17 0L176 352l-39.5-39.5c-4.7-4.7-12.3-4.7-17 0L80 352v64zm48-240c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z"
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
    size: { type: "string" },
    imgUrl: { type: "string" },
    imgW: { type: "number" },
    imgH: { type: "number" },
    altText: { type: "string" },
    caption: { type: "string" },
    captionCredit: { type: "string" },
    align: { type: "string" },
    fullWidthMo: { type: "boolean", default: false },
  },

  supports: {
    className: false,
  },

  // Block description in side panel
  description: __(
    "Add an image that uses a container with a specific aspect ratio to preserve space in order to avoid the content from shifting while the page is loading."
  ),

  edit: (props) => {
    const setChecked = () => {
      if (props.attributes.fullWidthMo) {
        props.setAttributes({
          fullWidthMo: false,
        });
      } else {
        props.setAttributes({
          fullWidthMo: true,
        });
      }
    };

    if (!props.attributes.size) {
      props.setAttributes({ size: "" });
    }
    if (!props.attributes.align) {
      props.setAttributes({ align: "" });
    }
    if (!props.attributes.imgUrl) {
      props.setAttributes({ imgUrl: "" });
    }
    if (!props.attributes.imgW) {
      props.setAttributes({ imgW: "" });
    }
    if (!props.attributes.imgH) {
      props.setAttributes({ imgH: "" });
    }
    if (!props.attributes.altText) {
      props.setAttributes({ altText: "" });
    }
    if (!props.attributes.caption) {
      props.setAttributes({ caption: "" });
    }
    if (!props.attributes.captionCredit) {
      props.setAttributes({ captionCredit: "" });
    }

    return [
      <InspectorControls>
        <PanelBody>
          <PanelRow>
            <SelectControl
              label="Image Aspect Ratio"
              help="'Auto' will use the original pixel dimensions of the image. Use 'Auto' when adding your image into main content. Picking an aspect ratio will make the image fill it's container."
              value={props.attributes.size}
              options={[
                { label: "Auto", value: "" },
                { label: "Square (1:1)", value: "is-square" },
                { label: "5:4", value: "is-5by4" },
                { label: "4:3", value: "is-4by3" },
                { label: "3:2", value: "is-3by2" },
                { label: "5:3", value: "is-5by3" },
                { label: "16:9", value: "is-16by9" },
                { label: "2:1", value: "is-2by1" },
                { label: "3:1", value: "is-3by1" },
                { label: "4:5", value: "is-4by5" },
                { label: "3:4", value: "is-3by4" },
                { label: "2:3", value: "is-2by3" },
                { label: "3:5", value: "is-3by5" },
                { label: "9:16", value: "is-9by16" },
                { label: "1:2", value: "is-1by2" },
                { label: "1:3", value: "is-1by3" },
              ]}
              onChange={(size) => {
                props.setAttributes({ size });
              }}
            />
          </PanelRow>
          <PanelRow>
            <SelectControl
              label="Alignment"
              help="Choose how the image should be aligned. Left and right will have text wrap."
              value={props.attributes.align}
              options={[
                { label: "Full", value: "" },
                { label: "Center", value: "center" },
                { label: "Left", value: "left" },
                { label: "Right", value: "right" },
              ]}
              onChange={(align) => {
                props.setAttributes({ align });
              }}
            />
          </PanelRow>
          <PanelRow>
            <CheckboxControl
              label="Full Width on Mobile?"
              help="Should the image stretch the full width of the page on mobile screen size (767px and lower screen width)."
              checked={props.attributes.fullWidthMo}
              onChange={setChecked}
            />
          </PanelRow>
          <PanelRow>Set the width and height of the image</PanelRow>
          <PanelRow>
            <TextControl
              label="Width"
              type="number"
              value={props.attributes.imgW}
              onChange={(imgW) => props.setAttributes({ imgW })}
            />
          </PanelRow>
          <PanelRow>
            <TextControl
              label="Height"
              type="number"
              value={props.attributes.imgH}
              onChange={(imgH) => props.setAttributes({ imgH })}
            />
          </PanelRow>
          <PanelRow>
            <TextareaControl
              label="Alt Text"
              value={props.attributes.altText}
              onChange={(altText) => props.setAttributes({ altText })}
            />
          </PanelRow>
          <PanelRow>
            <TextareaControl
              label="Image Caption"
              value={props.attributes.caption}
              onChange={(caption) => props.setAttributes({ caption })}
            />
          </PanelRow>
          <PanelRow>
            <TextControl
              label="Caption - Photo Credit"
              value={props.attributes.captionCredit}
              onChange={(captionCredit) =>
                props.setAttributes({ captionCredit })
              }
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>,

      <div className={"bulma-blocks-editor-image"}>
        <MediaUploadCheck>
          <MediaUpload
            onSelect={(img) => {
              props.setAttributes({
                imgUrl: img.sizes.full.url,
                imgW:
                  props.attributes.imgW !== ""
                    ? props.attributes.imgW
                    : img.width,
                imgH:
                  props.attributes.imgH !== ""
                    ? props.attributes.imgH
                    : img.height,
                altText:
                  props.attributes.altText !== ""
                    ? props.attributes.altText
                    : img.alt,
              });
            }}
            render={({ open }) => {
              return props.attributes.imgUrl !== "" ? (
                <div className={"bulma-blocks-editor-image__preview"}>
                  <figure className={`image ${props.attributes.size}`}>
                    <img
                      alt={props.attributes.altText}
                      src={props.attributes.imgUrl}
                    />
                  </figure>
                  <Button
                    className={"bulma-blocks-editor-site-hero__button"}
                    onClick={open}
                  >
                    Select a New Image
                  </Button>
                </div>
              ) : (
                <div className={"bulma-blocks-editor-image__container"}>
                  <span className={"bulma-blocks-editor-image__heading"}>
                    <span className="dashicons dashicons-format-image"></span>
                    <span>Upload Image</span>
                  </span>
                  <p className={"bulma-blocks-editor-image__description"}>
                    Pick an image from the media library.
                  </p>
                  <Button
                    className={"bulma-blocks-editor-image__button"}
                    onClick={open}
                  >
                    Open Media Library
                  </Button>
                </div>
              );
            }}
          />
        </MediaUploadCheck>
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
    const returned =
      props.attributes.size !== "" ? (
        <div>
          <figure
            className={`image ${props.attributes.size} ${
              props.attributes.align === "" ? "full" : ""
            } ${props.attributes.fullWidthMo ? "full-width-mo" : ""}`}
            style={
              props.attributes.caption === ""
                ? { marginBottom: "3rem !important" }
                : {}
            }
          >
            <img
              alt={props.attributes.altText}
              src={props.attributes.imgUrl}
              className={props.attributes.fullWidthMo ? "full-width-mo" : ""}
            />
          </figure>
          {props.attributes.align !== "" ? (
            <div className={"clearfix"}></div>
          ) : (
            ""
          )}
          {props.attributes.caption !== "" ? (
            <div className={"bulma-blocks-image__caption"}>
              <p>
                {props.attributes.caption}
                {props.attributes.captionCredit !== "" ? (
                  <span>{props.attributes.captionCredit}</span>
                ) : (
                  ""
                )}
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (

          <figure
            className={`image ${props.attributes.size} ${
              props.attributes.align
            } ${props.attributes.align === "" ? "full" : ""} ${
              props.attributes.fullWidthMo ? "full-width-mo" : ""
            }`}
            style={
              props.attributes.align !== ""
                ? { marginBottom: "0.5rem !important" }
                : { marginBottom: "3rem !important" }
            }
          >
            <img
              alt={props.attributes.altText}
              src={props.attributes.imgUrl}
              style={
                props.attributes.align !== ""
                  ? {
                      maxWidth: `${props.attributes.imgW}px`,
                      maxHeight: `${props.attributes.imgH}px`,
                    }
                  : {}
              }
              class={props.attributes.fullWidthMo ? "full-width-mo" : ""}
            />
            {props.attributes.caption !== "" ? (
              <div
                className={"bulma-blocks-image__caption"}
                style={
                  props.attributes.align !== ""
                    ? { maxWidth: `${props.attributes.imgW}px` }
                    : {}
                }
              >
                <p>
                  {props.attributes.caption}
                  {props.attributes.captionCredit !== "" ? (
                    <span>{props.attributes.captionCredit}</span>
                  ) : (
                    ""
                  )}
                </p>
              </div>
            ) : (
              ""
            )}
          </figure>

      );

    return returned;
  },
});
