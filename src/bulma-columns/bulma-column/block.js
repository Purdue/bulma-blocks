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

const { PanelBody, PanelRow, SelectControl } = wp.components
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
registerBlockType( 'bulma-blocks/column', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __( 'Bulma - Column' ), // Block title.
  icon: 'welcome-add-page', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'bulma-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [],
  parent: [ 'bulma-blocks/columns' ],

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
    size: { type: 'string' },
    bgColor: { type: 'string', default: '' },
  },

  supports: {
    className: false,
  },

  // Block description in side panel
  description: __( 'Edit an individual column that contain any content.' ),

  edit: props => {
    if ( ! props.attributes.size ) {
      props.setAttributes( { size: '' } )
    }

    const select = wp.data.select( 'core/block-editor' )
    const innerBlocks = select.getBlock( props.clientId ).innerBlocks
    const hasChildBlocks = innerBlocks.length > 0

    return (
      [
        <InspectorControls>
          <PanelBody>
            <PanelRow>
              <SelectControl
                label="Column Size"
                value={ props.attributes.size }
                options={
                  [
                    { value: '', label: 'Auto' },
                    { value: 'is-half', label: 'Half' },
                    { value: 'is-one-third', label: 'One Third (1/3)' },
                    { value: 'is-two-thirds', label: 'Two Thirds (2/3)' },
                    { value: 'is-one-quarter', label: 'One Quarter (1/4)' },
                    { value: 'is-three-quarters', label: 'Three Quarters (3/4)' },
                    { value: 'is-one-fifth', label: 'One Fifth (1/5)' },
                    { value: 'is-two-fifths', label: 'Two Fifths (2/5)' },
                    { value: 'is-three-fifths', label: 'Three Fifths (3/5)' },
                    { value: 'is-four-fifths', label: 'Four Fifths (4/5)' },
                  ]
                }
                onChange={ ( size ) => {
                  props.setAttributes( { size } )
                  wp.hooks.addFilter(
                    'editor.BlockListBlock',
                    'bulma-blocks/column/modify-element-edit',
                    modifyBlockListBlockColumn
                  )
                } }
              />
            </PanelRow>
            <p className="editor-extra-note">Note: Columns with chosen size of auto will automatically split the remaining space of the container evenly.</p>
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
          className={ `bulma-blocks-editor-column${
            props.isSelected || hasSelectedInnerBlock( props ) ?
              ' bulma-blocks-editor-column--selected' :
              ''
          }` }
        >
          <InnerBlocks templateLock={ false } renderAppender={ hasChildBlocks ? undefined : () => <InnerBlocks.ButtonBlockAppender /> } />
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
      <div className={ `column ${ props.attributes.size === '' ? '' : `${ props.attributes.size }` } ${ props.attributes.bgColor !== '' ? props.attributes.bgColor : '' }` } >
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

const {
  createHigherOrderComponent,
} = wp.compose;

const modifyBlockListBlockColumn = createHigherOrderComponent( ( BlockListBlock ) => {
  return ( props ) => {
    if ( props.block.name === 'bulma-blocks/column' ) {
      props.className = [ props.block.attributes.className, 'column', `${ props.attributes.size }` ].join( ' ' );
    }
    return <BlockListBlock { ...props } />;
  };
}, 'modifyBlockListBlockColumn' );

wp.hooks.addFilter(
  'editor.BlockListBlock',
  'bulma-blocks/column/modify-element-edit',
  modifyBlockListBlockColumn
);
