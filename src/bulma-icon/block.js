/* eslint-disable react/jsx-key */

/**
 * BLOCK: Bulma Container
 *
 * Bulma container block: https://bulma.io/documentation/layout/container/.
 */

//  Import CSS.
// import './editor.scss'
// import './style.scss'

const { __ } = wp.i18n // Import __() from wp.i18n
const { registerBlockType } = wp.blocks // Import registerBlockType() from wp.blocks

const { PanelBody, PanelRow, RadioControl, TextControl } = wp.components
const { InspectorControls } = wp.blockEditor

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
registerBlockType( 'bulma-blocks/icon', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __( 'Bulma - Icon' ), // Block title.
  icon: <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="icons" className="svg-inline--fa fa-icons fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#00c4a7" d="M116.65 219.35a15.68 15.68 0 0 0 22.65 0l96.75-99.83c28.15-29 26.5-77.1-4.91-103.88C203.75-7.7 163-3.5 137.86 22.44L128 32.58l-9.85-10.14C93.05-3.5 52.25-7.7 24.86 15.64c-31.41 26.78-33 74.85-5 103.88zm143.92 100.49h-48l-7.08-14.24a27.39 27.39 0 0 0-25.66-17.78h-71.71a27.39 27.39 0 0 0-25.66 17.78l-7 14.24h-48A27.45 27.45 0 0 0 0 347.3v137.25A27.44 27.44 0 0 0 27.43 512h233.14A27.45 27.45 0 0 0 288 484.55V347.3a27.45 27.45 0 0 0-27.43-27.46zM144 468a52 52 0 1 1 52-52 52 52 0 0 1-52 52zm355.4-115.9h-60.58l22.36-50.75c2.1-6.65-3.93-13.21-12.18-13.21h-75.59c-6.3 0-11.66 3.9-12.5 9.1l-16.8 106.93c-1 6.3 4.88 11.89 12.5 11.89h62.31l-24.2 83c-1.89 6.65 4.2 12.9 12.23 12.9a13.26 13.26 0 0 0 10.92-5.25l92.4-138.91c4.88-6.91-1.16-15.7-10.87-15.7zM478.08.33L329.51 23.17C314.87 25.42 304 38.92 304 54.83V161.6a83.25 83.25 0 0 0-16-1.7c-35.35 0-64 21.48-64 48s28.65 48 64 48c35.2 0 63.73-21.32 64-47.66V99.66l112-17.22v47.18a83.25 83.25 0 0 0-16-1.7c-35.35 0-64 21.48-64 48s28.65 48 64 48c35.2 0 63.73-21.32 64-47.66V32c0-19.48-16-34.42-33.92-31.67z"></path></svg>, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'bulma-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
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
    icon: { type: 'string' },
    container: { type: 'string' },
    faClass: { type: 'string' },
    link: { type: 'string' },
  },

  supports: {
    className: false,
  },

  // Block description in side panel
  description: __( 'Add a Font Awesome Icon.' ),

  edit: props => {
    if ( ! props.attributes.container ) {
      props.setAttributes( { container: 'sm' } )
    }
    if ( ! props.attributes.icon ) {
      props.setAttributes( { icon: 'sm' } )
    }

    return (
      [
        <InspectorControls>
          <PanelBody>
            <PanelRow>
              <RadioControl
                label="Icon Container Size"
                help="Select the size of the icon container."
                selected={ props.attributes.container }
                options={ [
                  { label: 'Small 16px', value: 'is-small' },
                  { label: 'Regular 24px', value: 'sm' },
                  { label: 'Medium 32px', value: 'is-medium' },
                  { label: 'Large 48px', value: 'is-large' },
                ] }
                onChange={ ( option ) => {
                  props.setAttributes( { container: option } )
                } }
              />
            </PanelRow>
            <PanelRow>
              <RadioControl
                label="Icon Size"
                help="Select the size of the icon."
                selected={ props.attributes.icon }
                options={ [
                  { label: 'Small 16px', value: 'sm' },
                  { label: 'Regular 24px', value: 'fa-lg' },
                  { label: 'Medium 32px', value: 'fa-2x' },
                  { label: 'Large 48px', value: 'fa-3x' },
                ] }
                onChange={ ( option ) => {
                  props.setAttributes( { icon: option } )
                } }
              />
            </PanelRow>
            <p className="editor-extra-note">Note: The chosen icon size should not be larger than the chosen container size.</p>
            <PanelRow>
              <TextControl
                label="Font Awesome Icon Name"
                value={ props.attributes.faClass }
                onChange={ ( className ) => props.setAttributes( { faClass: className } ) }
              />
            </PanelRow>
            <PanelRow>
              <TextControl
                label="Link (Optional)"
                value={ props.attributes.link }
                onChange={ ( link ) => props.setAttributes( { link: link } ) }
              />
            </PanelRow>
          </PanelBody>
        </InspectorControls>,

        <div className={ `bulma-blocks-editor-${ props.attributes.faClass !== '' ? 'icon' : 'text' }` }>

          { props.attributes.faClass !== '' ? (
            <div
              className={ `icon${
                props.attributes.container === 'sm' ? '' : ` ${ props.attributes.container }`
              }` }
            >
              <i className={ `fas${
                props.attributes.icon === 'sm' ? '' : ` ${ props.attributes.icon }`
              } fa-${ props.attributes.faClass }` } aria-hidden="true"></i>
            </div>
          ) : (
            <p>Select your icon settings in the side panel!</p>
          ) }
        </div>,
      ]
    )
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
  save: props => {
    return (
      <div
        className={ `icon${
          props.attributes.container === 'sm' ? '' : ` ${ props.attributes.container }`
        }` }
      >
        { props.attributes.link === '' ? (
          <i className={ `fas${
            props.attributes.icon === 'sm' ? '' : ` ${ props.attributes.icon }`
          } fa-${ props.attributes.faClass }` } aria-hidden="true"></i>
        ) : (
          <a href={ props.attributes.link }>
            <i className={ `fas${
              props.attributes.icon === 'sm' ? '' : ` ${ props.attributes.icon }`
            } fa-${ props.attributes.faClass }` } aria-hidden="true"></i>
          </a>
        ) }
      </div>
    )
  },
} )

// function hasSelectedInnerBlock( props ) {
//   const select = wp.data.select( 'core/block-editor' )
//   const selected = select.getBlockSelectionStart()
//   const inner = select.getBlock( props.clientId ).innerBlocks
//   for ( let i = 0; i < inner.length; i++ ) {
//     if (
//       inner[ i ].clientId === selected ||
// 			( inner[ i ].innerBlocks.length && hasSelectedInnerBlock( inner[ i ] ) )
//     ) {
//       return true
//     }
//   }
//   return false
// }
