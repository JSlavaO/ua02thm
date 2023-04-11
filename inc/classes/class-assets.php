<?php

/**
 * Assets sets
 * 
 * @package Ua02thm
 */

 namespace UA02THMSI_THEME\Inc;
 use UA02THMSI_THEME\Inc\Traits\Singleton;

 class Assets {
  use Singleton;
  protected function __construct() {
    $this->set_hooks();
  }
  protected function set_hooks() {
    // actions and filters
    add_action('wp_enqueue_scripts', [$this, 'register_styles'] );
    add_action('wp_enqueue_scripts', [$this, 'register_scripts'] );
  }
  public function register_styles() {
    wp_register_style(
      'main.min',
      UA02THM_DIR_URI . '/app/dist/css/main.min.css',
      [],
      filemtime( UA02THM_DIR_PATH . '/app/dist/css/main.min.css'),
      'all'
    );
    wp_register_style(
      'bootstrapcss',
      UA02THM_DIR_URI . '/app/dist/library/css/bootstrap.min.css',
      [],
      false,
      'all'
    );

    wp_enqueue_style('main.min');
    if (UA02THM_USE_BUTSTAP) {
      wp_enqueue_style('bootstrapcss');
    }
    wp_dequeue_style('classic-theme-styles');
    wp_dequeue_style('global-styles');
  }

  public function register_scripts() {
  // get_template_directory_uri() . '/app/dist/css/main.min.css?dev=' . time(),
  // wp_deregister_script( 'jquery' );
	  wp_register_script(
      'modernizrcustom', 
      UA02THM_DIR_URI . '/app/dist/js/modernizr-custom.js',
      [],
      false,
      true
    );
    wp_register_script(
      'commonjs', 
      UA02THM_DIR_URI . '/app/dist/js/common.js',
      [],
      filemtime( UA02THM_DIR_PATH . '/app/dist/js/common.js'),
      true
    );
    wp_register_script(
      'bootstrapjs', 
      UA02THM_DIR_URI . '/app/dist/library/js/bootstrap.min.js',
      ['jquery'],
      false,
      true
    );
    wp_enqueue_script('modernizrcustom');
    wp_enqueue_script('commonjs');
    if (UA02THM_USE_BUTSTAP) {
      wp_enqueue_script('bootstrapjs');
    }
  }
}


