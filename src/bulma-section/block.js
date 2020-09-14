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

const { PanelBody, PanelRow, RadioControl, SelectControl } = wp.components
const { InnerBlocks, InspectorControls } = wp.blockEditor

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
registerBlockType( 'bulma-blocks/section', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __( 'Bulma - Section' ), // Block title.
  icon: <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="list-alt" className="svg-inline--fa fa-list-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#00c4a7" d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-42-92v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm-252 12c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36z"></path></svg>, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
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
    option: { type: 'string' },
    bgColor: { type: 'string', default: '' },
  },

  supports: {
    className: false,
  },

  // Block description in side panel
  description: __( 'Add a Section layout element that can contain any content.' ),

  edit: props => {
    if ( ! props.attributes.option ) {
      props.setAttributes( { option: 'sm' } )
    }

    const select = wp.data.select( 'core/block-editor' )
    const innerBlocks = select.getBlock( props.clientId ).innerBlocks
    const hasChildBlocks = innerBlocks.length > 0

    return (
      [
        <InspectorControls>
          <PanelBody>
            <PanelRow>
              <RadioControl
                label="Padding Size"
                help="Select the amount of spacing around the edges of the section."
                selected={ props.attributes.option }
                options={ [
                  { label: 'Small', value: 'sm' },
                  { label: 'Medium', value: 'is-medium' },
                  { label: 'Large', value: 'is-large' },
                ] }
                onChange={ ( option ) => {
                  props.setAttributes( { option } )
                } }
              />
            </PanelRow>
            <PanelRow>
              <SelectControl
                label="Background Color"
                value={ props.attributes.bgColor }
                options={
                  [
                    { value: '', label: 'None' },
                    { value: 'has-background-black', label: 'Black' },
                    { value: 'has-background-grey-lighter', label: 'Light Gray' },
                    { value: 'has-background-black-ter', label: 'Dark Gray' },
                    { value: 'has-background-boiler-gold', label: 'Boilermaker Gold' },
                  ]
                }
                onChange={ ( bgColor ) => {
                  props.setAttributes( { bgColor } )
                } }
              />
            </PanelRow>
          </PanelBody>
        </InspectorControls>,

        <div
          className={ `bulma-blocks-editor-section${
            props.isSelected || hasSelectedInnerBlock( props ) ?
              ' bulma-blocks-editor-section--selected' :
              ''
          }` }
        >
          <InnerBlocks renderAppender={ hasChildBlocks ? undefined : () => <InnerBlocks.ButtonBlockAppender /> } />
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
        className={ `section ${
          props.attributes.selectedOption === 'sm' ? '' : `${ props.attributes.option }`
        }  ${ props.attributes.bgColor !== '' ? props.attributes.bgColor : '' }` }
      >
        <InnerBlocks.Content />
      </div>
    )
  },
} )

function hasSelectedInnerBlock( props ) {
  const select = wp.data.select( 'core/block-editor' )
  const selected = select.getBlockSelectionStart()
  const inner = select.getBlock( props.clientId ).innerBlocks
  for ( let i = 0; i < inner.length; i++ ) {
    if (
      inner[ i ].clientId === selected ||
			( inner[ i ].innerBlocks.length && hasSelectedInnerBlock( inner[ i ] ) )
    ) {
      return true
    }
  }
  return false
}
