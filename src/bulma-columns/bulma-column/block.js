/* eslint-disable react/jsx-key */

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

const { PanelBody, PanelRow, SelectControl, CheckboxControl } = wp.components;
const { InnerBlocks, InspectorControls } = wp.blockEditor;

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
    sizeWide: { type: 'string', default: '' },
    sizeDesk: { type: 'string', default: '' },
    sizeTab: { type: 'string', default: '' },
    sizeMo: { type: 'string', default: '' },
    size: { type: 'string', default: '' },
    useExact: { type: 'boolean', default: 'false' },
    bgColor: { type: 'string', default: '' },
  },

  supports: {
    className: false,
  },

  // Block description in side panel
  description: __( 'Edit an individual column that contain any content.' ),

  edit: ( props ) => {
    const setChecked = () => {
      if ( props.attributes.useExact ) {
        props.setAttributes( {
          useExact: false,
        } );
      } else {
        props.setAttributes( {
          useExact: true,
        } );
      }
    };

    // if (!props.attributes.size) {
    //   props.setAttributes({ size: "" });
    // }

    const select = wp.data.select( 'core/block-editor' );
    const innerBlocks = select.getBlock( props.clientId ).innerBlocks;
    const hasChildBlocks = innerBlocks.length > 0;

    return [
      <InspectorControls>
        <PanelBody>
          <PanelRow>
            <CheckboxControl
              label="Advanced Size Settings"
              help="Select the size for this column at each individual screen size."
              checked={ props.attributes.useExact }
              onChange={ setChecked }
            />
          </PanelRow>
        </PanelBody>
        { props.attributes.useExact ? (
          <PanelBody>
            <PanelRow>
              <SelectControl
                label="Widescreen Column Size"
                value={ props.attributes.sizeWide }
                help="Screen width of 1216px and up."
                options={ [
                  { value: '', label: 'Auto' },
                  { value: 'is-half-widescreen', label: 'Half' },
                  {
                    value: 'is-one-third-widescreen',
                    label: 'One Third (1/3)',
                  },
                  {
                    value: 'is-two-thirds-widescreen',
                    label: 'Two Thirds (2/3)',
                  },
                  {
                    value: 'is-one-quarter-widescreen',
                    label: 'One Quarter (1/4)',
                  },
                  {
                    value: 'is-three-quarters-widescreen',
                    label: 'Three Quarters (3/4)',
                  },
                  {
                    value: 'is-one-fifth-widescreen',
                    label: 'One Fifth (1/5)',
                  },
                  {
                    value: 'is-two-fifths-widescreen',
                    label: 'Two Fifths (2/5)',
                  },
                  {
                    value: 'is-three-fifths-widescreen',
                    label: 'Three Fifths (3/5)',
                  },
                  {
                    value: 'is-four-fifths-widescreen',
                    label: 'Four Fifths (4/5)',
                  },
                ] }
                onChange={ ( sizeWide ) => {
                  props.setAttributes( { sizeWide } );
                  wp.hooks.addFilter(
                    'editor.BlockListBlock',
                    'bulma-blocks/column/modify-element-edit',
                    modifyBlockListBlockColumn
                  );
                } }
              />
            </PanelRow>
            <PanelRow>
              <SelectControl
                label="Desktop Column Size"
                value={ props.attributes.sizeDesk }
                help="Screen width between 1024px to 1215px."
                options={ [
                  { value: '', label: 'Auto' },
                  { value: 'is-half-desktop', label: 'Half' },
                  { value: 'is-one-third-desktop', label: 'One Third (1/3)' },
                  { value: 'is-two-thirds-desktop', label: 'Two Thirds (2/3)' },
                  {
                    value: 'is-one-quarter-desktop',
                    label: 'One Quarter (1/4)',
                  },
                  {
                    value: 'is-three-quarters-desktop',
                    label: 'Three Quarters (3/4)',
                  },
                  { value: 'is-one-fifth-desktop', label: 'One Fifth (1/5)' },
                  { value: 'is-two-fifths-desktop', label: 'Two Fifths (2/5)' },
                  {
                    value: 'is-three-fifths-desktop',
                    label: 'Three Fifths (3/5)',
                  },
                  {
                    value: 'is-four-fifths-desktop',
                    label: 'Four Fifths (4/5)',
                  },
                ] }
                onChange={ ( sizeDesk ) => {
                  props.setAttributes( { sizeDesk } );
                  wp.hooks.addFilter(
                    'editor.BlockListBlock',
                    'bulma-blocks/column/modify-element-edit',
                    modifyBlockListBlockColumn
                  );
                } }
              />
            </PanelRow>
            <PanelRow>
              <SelectControl
                label="Tablet Column Size"
                value={ props.attributes.sizeTab }
                help="Screen width between 768px to 1023px."
                options={ [
                  { value: '', label: 'Auto' },
                  { value: 'is-half-tablet', label: 'Half' },
                  { value: 'is-one-third-tablet', label: 'One Third (1/3)' },
                  { value: 'is-two-thirds-tablet', label: 'Two Thirds (2/3)' },
                  {
                    value: 'is-one-quarter-tablet',
                    label: 'One Quarter (1/4)',
                  },
                  {
                    value: 'is-three-quarters-tablet',
                    label: 'Three Quarters (3/4)',
                  },
                  { value: 'is-one-fifth-tablet', label: 'One Fifth (1/5)' },
                  { value: 'is-two-fifths-tablet', label: 'Two Fifths (2/5)' },
                  {
                    value: 'is-three-fifths-tablet',
                    label: 'Three Fifths (3/5)',
                  },
                  {
                    value: 'is-four-fifths-tablet',
                    label: 'Four Fifths (4/5)',
                  },
                ] }
                onChange={ ( sizeTab ) => {
                  props.setAttributes( { sizeTab } );
                  wp.hooks.addFilter(
                    'editor.BlockListBlock',
                    'bulma-blocks/column/modify-element-edit',
                    modifyBlockListBlockColumn
                  );
                } }
              />
            </PanelRow>
            <PanelRow>
              <SelectControl
                label="Mobile Column Size"
                value={ props.attributes.sizeMo }
                options={ [
                  { value: '', label: 'Auto' },
                  { value: 'is-half-mobile', label: 'Half' },
                  { value: 'is-one-third-mobile', label: 'One Third (1/3)' },
                  { value: 'is-two-thirds-mobile', label: 'Two Thirds (2/3)' },
                  {
                    value: 'is-one-quarter-mobile',
                    label: 'One Quarter (1/4)',
                  },
                  {
                    value: 'is-three-quarters-mobile',
                    label: 'Three Quarters (3/4)',
                  },
                  { value: 'is-one-fifth-mobile', label: 'One Fifth (1/5)' },
                  { value: 'is-two-fifths-mobile', label: 'Two Fifths (2/5)' },
                  {
                    value: 'is-three-fifths-mobile',
                    label: 'Three Fifths (3/5)',
                  },
                  {
                    value: 'is-four-fifths-mobile',
                    label: 'Four Fifths (4/5)',
                  },
                ] }
                onChange={ ( sizeMo ) => {
                  props.setAttributes( { sizeMo } );
                  wp.hooks.addFilter(
                    'editor.BlockListBlock',
                    'bulma-blocks/column/modify-element-edit',
                    modifyBlockListBlockColumn
                  );
                } }
              />
            </PanelRow>
            <p className="editor-extra-note">
              Note: Columns with chosen size of auto will automatically split
              the remaining space of the container evenly.
            </p>
          </PanelBody>
        ) : (
          <PanelBody>
            <PanelRow>
              <SelectControl
                label="Column Size"
                value={ props.attributes.size }
                options={ [
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
                ] }
                onChange={ ( size ) => {
                  props.setAttributes( { size } );
                  wp.hooks.addFilter(
                    'editor.BlockListBlock',
                    'bulma-blocks/column/modify-element-edit',
                    modifyBlockListBlockColumn
                  );
                } }
              />
            </PanelRow>
            <p className="editor-extra-note">
              Note: Columns with chosen size of auto will automatically split
              the remaining space of the container evenly.
            </p>
          </PanelBody>
        ) }
        <PanelBody>
          <PanelRow>
            <SelectControl
              label="Background Color"
              value={ props.attributes.bgColor }
              options={ [
                { value: '', label: 'None' },
                { value: 'has-background-black', label: 'Black' },
                { value: 'has-background-grey-lighter', label: 'Light Gray' },
                { value: 'has-background-black-ter', label: 'Dark Gray' },
              ] }
              onChange={ ( bgColor ) => {
                props.setAttributes( { bgColor } );
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
        <InnerBlocks
          templateLock={ false }
          renderAppender={
            hasChildBlocks ?
              undefined :
              () => <InnerBlocks.ButtonBlockAppender />
          }
        />
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
  save: ( props ) => {
    return (
      <div
        className={ `column ${
          props.attributes.useExact ?
            [
              props.attributes.sizeMo,
              props.attributes.sizeTab,
              props.attributes.sizeDesk,
              props.attributes.sizeWide,
            ].join( ' ' ) :
            props.attributes.size
        } ${ props.attributes.bgColor !== '' ? props.attributes.bgColor : '' }` }
      >
        <InnerBlocks.Content />
      </div>
    );
  },
} );

function hasSelectedInnerBlock( props ) {
  const select = wp.data.select( 'core/block-editor' );
  const selected = select.getBlockSelectionStart();
  const inner = select.getBlock( props.clientId ).innerBlocks;
  for ( let i = 0; i < inner.length; i++ ) {
    if (
      inner[ i ].clientId === selected ||
      ( inner[ i ].innerBlocks.length && hasSelectedInnerBlock( inner[ i ] ) )
    ) {
      return true;
    }
  }
  return false;
}

const { createHigherOrderComponent } = wp.compose;

const modifyBlockListBlockColumn = createHigherOrderComponent(
  ( BlockListBlock ) => {
    return ( props ) => {
      if ( props.block.name === 'bulma-blocks/column' ) {
        props.className = [
          props.block.attributes.className,
          'column',
          `${
            props.attributes.useExact ?
              [
                props.attributes.sizeMo,
                props.attributes.sizeTab,
                props.attributes.sizeDesk,
                props.attributes.sizeWide,
              ].join( ' ' ) :
              props.attributes.size
          }`,
        ].join( ' ' );
      }
      return <BlockListBlock { ...props } />;
    };
  },
  'modifyBlockListBlockColumn'
);

wp.hooks.addFilter(
  'editor.BlockListBlock',
  'bulma-blocks/column/modify-element-edit',
  modifyBlockListBlockColumn
);
