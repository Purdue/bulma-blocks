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

const { PanelBody, PanelRow, CheckboxControl, SelectControl } = wp.components
const { InnerBlocks, InspectorControls } = wp.blockEditor

// implement the bulma blocks category.

const { dispatch, select } = wp.data;

const category = {
  slug: 'bulma-blocks',
  title: __( 'Bulma Blocks' ),
};

const currentCategories = select( 'core/blocks' ).getCategories().filter( item => item.slug !== category.slug );
dispatch( 'core/blocks' ).setCategories( [ category, ...currentCategories ] );

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
registerBlockType( 'bulma-blocks/container', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __( 'Bulma - Container' ), // Block title.
  icon: <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="expand" className="svg-inline--fa fa-expand fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#00c4a7" d="M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z"></path></svg>, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
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
    fluidChecked: {
      type: 'boolean',
    },
    bgColor: { type: 'string', default: '' },
  },

  supports: {
    className: false,
  },

  description: __( 'Add a Container layout element that can contain any content. The Container aligns content in the center of the page on screens above tablet size.' ),

  edit: props => {
    const setChecked = () => {
      if ( props.attributes.fluidChecked ) {
        props.setAttributes( {
          fluidChecked: false,
        } )
      } else {
        props.setAttributes( {
          fluidChecked: true,
        } )
      }
    }

    const innerBlocks = select( 'core/block-editor' ).getBlock( props.clientId ).innerBlocks
    const hasChildBlocks = innerBlocks.length > 0

    return (
      [
        <InspectorControls>
          <PanelBody>
            <PanelRow>
              <CheckboxControl
                label="Fluid Full-width"
                help="Would you like the container to be full-width at all screen sizes with gutters?"
                checked={ props.attributes.fluidChecked }
                onChange={ setChecked }
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
          className={ `bulma-blocks-editor-container${
            props.isSelected || hasSelectedInnerBlock( props ) ?
              ' bulma-blocks-editor-container--selected' :
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
      <div className={ `container ${ props.attributes.fluidChecked ? ' is-fluid' : '' } ${ props.attributes.bgColor !== '' ? props.attributes.bgColor : '' }` } >
        <InnerBlocks.Content />
      </div>
    )
  },
} )

function hasSelectedInnerBlock( props ) {
  const selected = select( 'core/editor' ).getBlockSelectionStart()
  const inner = select( 'core/editor' ).getBlock( props.clientId ).innerBlocks
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
