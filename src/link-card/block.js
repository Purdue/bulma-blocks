/* eslint-disable react/jsx-key */
/* eslint-disable no-nested-ternary */

/**
 * BLOCK: Bulma Container
 *
 * Bulma container block: https://bulma.io/documentation/layout/container/.
 */

//  Import CSS.
// import './editor.scss';
// import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

const {
  PanelBody,
  PanelRow,
  CheckboxControl,
  TextareaControl,
  Button,
  RadioControl,
  TextControl,
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
registerBlockType("bulma-blocks/link-card", {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __("Link Card"), // Block title.
  icon: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="external-link-square-alt"
      className="svg-inline--fa fa-external-link-square-alt fa-w-14"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        fill="#00c4a7"
        d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"
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
    layout: { type: "string", default: "horizontal" },
    subText: { type: "string", default: "" },
    link: { type: "string", default: "" },
    linkText: { type: "string", default: "" },
    imgUrl: { type: "string", default: "" },
    altText: { type: "string", default: "" },
    external: { type: "boolean", default: false },
    optionalLink: { type: "boolean", default: false },
    squareTitle: { type: "string", default: "" },
    squareSubText: { type: "string", default: "" },
    verticalContent: { type: "string", default: "" },
    height: { type: "string", default: "100" },
  },

  supports: {
    className: false,
  },

  // Block description in side panel
  description: __(
    "Create a card that serves as a link with an image and text."
  ),

  edit: (props) => {
    const removeMedia = () => {
      props.setAttributes({
        imgUrl: ''
      });
    }
    return [
      <InspectorControls>
        <PanelBody>
          <PanelRow>
            <RadioControl
              label="Layout of the card"
              help="Horizontal: image on the left and text on the right; Vertical: image on the top and text on the bottom."
              selected={props.attributes.layout}
              options={[
                { label: "Horizontal", value: "horizontal" },
                { label: "Vertical", value: "vertical" },
                { label: "Square", value: "square" },
              ]}
              onChange={(option) => {
                props.setAttributes({ layout: option });
              }}
            />
          </PanelRow>
          <PanelRow>
            <RadioControl
              label="Height of the card"
              help="100%: the height of the link card will be 100% height of its parent container; Auto: the height of the link card will depend upon the height of its children."
              selected={props.attributes.height}
              options={[
                { label: "100%", value: "100" },
                { label: "Auto", value: "auto" },
              ]}
              onChange={(option) => {
                props.setAttributes({ height: option });
              }}
            />
          </PanelRow>
          {props.attributes.layout === "square" ? (
            <PanelRow>
              <CheckboxControl
                label="Add a link to this card?"
                checked={props.attributes.optionalLink}
                onChange={() =>
                  props.setAttributes({
                    optionalLink: !props.attributes.optionalLink,
                  })
                }
              />
            </PanelRow>
          ) : (
            ""
          )}

          {props.attributes.optionalLink ? (
            <PanelRow>
              <TextControl
                id="linkAddress"
                label="Link Address"
                type="string"
                value={props.attributes.link}
                onChange={(link) => props.setAttributes({ link })}
              />
            </PanelRow>
          ) : (
            ""
          )}

          <PanelRow>
            <TextareaControl
              label="Image Alt Text"
              value={props.attributes.altText}
              onChange={(altText) => props.setAttributes({ altText })}
            />
          </PanelRow>
          <PanelRow>
            <CheckboxControl
              label="Open link in new tab?"
              checked={props.attributes.external}
              onChange={() =>
                props.setAttributes({ external: !props.attributes.external })
              }
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>,

      <div className={"bulma-blocks-editor-link-card"}>
        <div className="content">
          <span>Choose an image.</span>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(img) => {
                props.setAttributes({
                  imgUrl: img.url,
                  altText:
                    props.attributes.altText !== ""
                      ? props.attributes.altText
                      : img.alt,
                });
              }}
              render={({ open }) => {
                return props.attributes.imgUrl !== "" ? (
                  <div className={"bulma-blocks-editor-link-card__preview"}>
                    <figure className={"image"}>
                      <img
                        alt={props.attributes.altText}
                        src={props.attributes.imgUrl}
                      />
                    </figure>
                    <Button
                      className={"bulma-blocks-editor-link-card__button"}
                      onClick={open}
                    >
                      Select a New Image
                    </Button>
                    <Button className={ 'bulma-blocks-editor-site-hero__button' } onClick={removeMedia}>
                        Remove image
                    </Button>
                  </div>
                ) : (
                  <div className={"bulma-blocks-editor-link-card__container"}>
                    <p className={"bulma-blocks-editor-link-card__description"}>
                      Pick an image from the media library.
                    </p>
                    <Button
                      className={"bulma-blocks-editor-link-card__button"}
                      onClick={open}
                    >
                      Open Media Library
                    </Button>
                  </div>
                );
              }}
            />
          </MediaUploadCheck>
        </div>
        {props.attributes.layout !== "square" ? (
          <div>
            <div className="content">
              <span>Add Link Card text.</span>
              <span class="footnote">*32 character limit</span>
              <div className="field">
                <div className="control">
                  <input
                    value={
                      props.attributes.subText !== ""
                        ? props.attributes.subText
                        : ""
                    }
                    className="input"
                    type="text"
                    placeholder="Card text..."
                    onChange={(e) => {
                      props.setAttributes({ subText: e.target.value });
                    }}
                  ></input>
                </div>
              </div>
            </div>
            {props.attributes.layout === "vertical"? (
              <div className="content">
                <span>Add Link Card subtext.</span>
                <div className="field">
                  <div className="control">
                    <textarea
                      value={
                        props.attributes.verticalContent !== ""
                          ? props.attributes.verticalContent
                          : ""
                      }
                      className="textarea"
                      type="text"
                      placeholder="Subtext text..."
                      onChange={(e) => {
                        props.setAttributes({ verticalContent: e.target.value });
                      }}
                      ></textarea>
                  </div>
                </div>
              </div>
              ) : (
                ""
              )}
            <div className="content">
              <span>
                Add the link address
                {props.attributes.layout === "horizontal"
                  ? " and link text"
                  : ""}
                .
              </span>
              <div className="field">
                <div className="control">
                  <input
                    value={
                      props.attributes.link !== "" ? props.attributes.link : ""
                    }
                    className="input"
                    type="text"
                    placeholder="Paste permalink or url..."
                    onChange={(e) => {
                      props.setAttributes({ link: e.target.value });
                    }}
                  ></input>
                </div>
              </div>
              {props.attributes.layout === "horizontal" ? (
                <div className="field">
                  <div className="control">
                    <input
                      value={
                        props.attributes.linkText !== ""
                          ? props.attributes.linkText
                          : ""
                      }
                      className="input"
                      type="text"
                      placeholder="Link text..."
                      onChange={(e) => {
                        props.setAttributes({ linkText: e.target.value });
                      }}
                    ></input>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          <div className="content">
            <span>Add card title.</span>
            <div className="field">
              <div className="control">
                <input
                  value={
                    props.attributes.squareTitle !== ""
                      ? props.attributes.squareTitle
                      : ""
                  }
                  className="input"
                  type="text"
                  placeholder="Card title..."
                  onChange={(e) => {
                    props.setAttributes({ squareTitle: e.target.value });
                  }}
                ></input>
              </div>
            </div>
            <span>Add card subtext.</span>
            <div className="field">
              <div className="control">
                <input
                  value={
                    props.attributes.squareSubText !== ""
                      ? props.attributes.squareSubText
                      : ""
                  }
                  className="input"
                  type="text"
                  placeholder="Card subtext..."
                  onChange={(e) => {
                    props.setAttributes({ squareSubText: e.target.value });
                  }}
                ></input>
              </div>
            </div>
          </div>
        )}
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
      props.attributes.layout === "horizontal" ? (
        <a
          href={props.attributes.link}
          target={props.attributes.external ? "_blank" : "_self"}
          className={`card media link-card-horizontal${props.attributes.height==="auto"?" link-card__height-auto":""}`}
          rel="noopener noreferrer"
        >
          <div className={"media-left"}>
            <figure className="image">
              <img
                src={props.attributes.imgUrl}
                alt={props.attributes.altText}
              />
            </figure>
          </div>
          <div className={"media-content"}>
            <p className={"title is-4"}>{props.attributes.subText}</p>
            <div className={"read-more-button"}>
              <span>
                {props.attributes.linkText !== ""
                  ? props.attributes.linkText
                  : "Read More"}
              </span>
            </div>
          </div>
        </a>
      ) : props.attributes.layout === "vertical" ? (
        props.attributes.link?
        <a
          href={props.attributes.link}
          target={props.attributes.external ? "_blank" : "_self"}
          className={`card media link-card${props.attributes.height==="auto"?" link-card__height-auto":""}`}
          rel="noopener noreferrer"
        >
          {props.attributes.imgUrl !== "" ? (
            <div
              className="image is-2by1 background-image"
              role="img"
              style={{ backgroundImage: `url(${props.attributes.imgUrl})` }}
              aria-label={props.attributes.altText}
            ></div>
          ) : (
            ""
          )}
          <div className={`media-content${props.attributes.verticalContent?" media-content__vertical-top":""}`}>
            <p className={"title is-4"}>{props.attributes.subText}</p>
            {props.attributes.verticalContent !== ""? (
              <p className={"vertical-subtext"}>{props.attributes.verticalContent}</p>
            ) : (
              ""
            )}
          </div>
        </a>:<div
          className={`card media link-card${props.attributes.height==="auto"?" link-card__height-auto":""}`}
          rel="noopener noreferrer"
        >
          {props.attributes.imgUrl !== "" ? (
            <div
              className="image is-2by1 background-image"
              role="img"
              style={{ backgroundImage: `url(${props.attributes.imgUrl})` }}
              aria-label={props.attributes.altText}
            ></div>
          ) : (
            ""
          )}
          <div className={`media-content${props.attributes.verticalContent?" media-content__vertical-top":""}`}>
            <p className={"title is-4"}>{props.attributes.subText}</p>
            {props.attributes.verticalContent !== ""? (
              <p className={"vertical-subtext"}>{props.attributes.verticalContent}</p>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : props.attributes.optionalLink ? (
        <a
          href={props.attributes.link}
          target={props.attributes.external ? "_blank" : "_self"}
          className={`card media link-card link-card--square${props.attributes.height==="auto"?" link-card__height-auto":""}`}
          rel="noopener noreferrer"
        >
          {props.attributes.imgUrl !== "" ? (
            <div
              className="image is-square background-image"
              role="img"
              style={{ backgroundImage: `url(${props.attributes.imgUrl})` }}
              aria-label={props.attributes.altText}
            ></div>
          ) : (
            ""
          )}
          <div className={`media-content${props.attributes.squareSubText?"":" media-content__vertical-center"}`}>
            <p className={"title is-4"}>{props.attributes.squareTitle}</p>
            <p>{props.attributes.squareSubText}</p>
          </div>
        </a>
      ) : (
        <div className={`card media link-card link-card--square${props.attributes.height==="auto"?" link-card__height-auto":""}`}>
          {props.attributes.imgUrl !== "" ? (
            <div
              className="image is-square background-image"
              role="img"
              style={{ backgroundImage: `url(${props.attributes.imgUrl})` }}
              aria-label={props.attributes.altText}
            ></div>
          ) : (
            ""
          )}
          <div className={`media-content${props.attributes.squareSubText?"":"media-content__vertical-center"}`}>
            <p className={"title is-4"}>{props.attributes.squareTitle}</p>
            <p>{props.attributes.squareSubText}</p>
          </div>
        </div>
      );
    return returned;
  },
});
