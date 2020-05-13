/* eslint-disable react/jsx-key */

/**
 * BLOCK: Bulma Container
 *
 * Bulma container block: https://bulma.io/documentation/layout/container/.
 */

//  Import CSS.
import './editor.scss'
import './style.scss'

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
registerBlockType( 'bulma-blocks/hero', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __( 'Bulma - Hero' ), // Block title.
  icon: <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pager" className="svg-inline--fa fa-pager fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#00c4a7" d="M448 64H64a64 64 0 0 0-64 64v256a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V128a64 64 0 0 0-64-64zM160 368H80a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h80zm128-16a16 16 0 0 1-16 16h-80v-48h80a16 16 0 0 1 16 16zm160-128a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32v-64a32 32 0 0 1 32-32h320a32 32 0 0 1 32 32z"></path></svg>, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
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
  description: __( 'Add a Hero layout element that can contain any content.' ),

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
                help="Select the amount of spacing around the edges of the hero body."
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
              ' bulma-blocks-editor-hero--selected' :
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
      <div className={ `hero ${ props.attributes.selectedOption === 'sm' ? '' : `${ props.attributes.option }` } ${ props.attributes.bgColor !== '' ? props.attributes.bgColor : '' }` } >
        <div className={ 'hero-body' }>
          <InnerBlocks.Content />
        </div>
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
