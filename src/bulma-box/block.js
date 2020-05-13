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

const { InnerBlocks } = wp.blockEditor

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
registerBlockType( 'bulma-blocks/box', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __( 'Bulma - Box' ), // Block title.
  icon: <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="box-open" className="svg-inline--fa fa-box-open fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#00c4a7" d="M425.7 256c-16.9 0-32.8-9-41.4-23.4L320 126l-64.2 106.6c-8.7 14.5-24.6 23.5-41.5 23.5-4.5 0-9-.6-13.3-1.9L64 215v178c0 14.7 10 27.5 24.2 31l216.2 54.1c10.2 2.5 20.9 2.5 31 0L551.8 424c14.2-3.6 24.2-16.4 24.2-31V215l-137 39.1c-4.3 1.3-8.8 1.9-13.3 1.9zm212.6-112.2L586.8 41c-3.1-6.2-9.8-9.8-16.7-8.9L320 64l91.7 152.1c3.8 6.3 11.4 9.3 18.5 7.3l197.9-56.5c9.9-2.9 14.7-13.9 10.2-23.1zM53.2 41L1.7 143.8c-4.6 9.2.3 20.2 10.1 23l197.9 56.5c7.1 2 14.7-1 18.5-7.3L320 64 69.8 32.1c-6.9-.8-13.5 2.7-16.6 8.9z"></path></svg>, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
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
  },

  supports: {
    className: false,
  },

  // Block description in side panel
  description: __( 'Add a Box layout element that can contain any content and has rounded corners and a drop shadow.' ),

  edit: props => {
    const select = wp.data.select( 'core/block-editor' )
    const innerBlocks = select.getBlock( props.clientId ).innerBlocks
    const hasChildBlocks = innerBlocks.length > 0

    return (
      [
        <div
          className={ `bulma-blocks-editor-box${
            props.isSelected || hasSelectedInnerBlock( props ) ?
              ' bulma-blocks-editor-box--selected' :
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
        className={ 'box' }
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
