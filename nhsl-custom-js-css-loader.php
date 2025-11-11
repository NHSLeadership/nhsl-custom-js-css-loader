<?php
/**
 * Plugin Name: NHSL Custom JS & CSS Loader
 * Description: A simple plugin to load custom JavaScript and CSS.
 * Version: 1.1
 * Author: Chris Witham
 *
 * @package nhsl-custom-js-css-loader
 */

defined( 'ABSPATH' ) || die( 'Error!' );

/**
 * Enqueue custom JavaScript and CSS files for the plugin.
 */
function nhsl_enqueue_scripts() {
	$plugin_url = plugin_dir_url( __FILE__ );

	// Enqueue CSS.
	wp_enqueue_style( 'nhsl-custom-css', $plugin_url . 'assets/custom.css' );

	// Enqueue JS.
	wp_enqueue_script( 'nhsl-custom-js', $plugin_url . 'assets/custom.js', array(), false, true );
}
add_action( 'wp_enqueue_scripts', 'nhsl_enqueue_scripts' );
