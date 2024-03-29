<?php
/**
 * Plugin Name: Bulma Blocks
 * Plugin URI: https://github.com/Purdue/bulma-blocks
 * Description: Bulma Blocks is a Gutenberg Block plugin allowing users to create Bulma elements as blocks.
 * Author: Purdue Marketing and Communications
 * Author URI: https://marcom.purdue.edu/
 * Version: 1.4.13
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
