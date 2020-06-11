/**
 * Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */

import './bulma-container/block.js';
import './bulma-section/block.js';
import './bulma-hero/block.js';
import './bulma-box/block.js';
import './bulma-icon/block.js';
import './bulma-image/block.js';
import './bulma-columns/block.js';
import './bulma-columns/bulma-column/block.js';
import './link-card/block.js';

const { updateCategory } = wp.blocks;
const { SVG, Path } = wp.components;

( function() {
  updateCategory( 'bulma-blocks', {
    icon: (
      <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <Path
          fill="#00c4a7"
          d="M11.38 2L6.38 7L5.13 15.75L11.38 22L18.88 17L13.88 12L17.63 8.25L11.38 2Z"
        />
      </SVG>
    ),
  } );
}() );

