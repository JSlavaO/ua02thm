<?php

/**
 * Bootstraps the theme
 * 
 * @package Ua02thm
 */

 namespace UA02THMSI_THEME\Inc;

 use UA02THMSI_THEME\Inc\Traits\Singleton;

class Ua02t_Theme {
  use Singleton;

  protected function __construct() {
    Menus::get_instance();
    Assets::get_instance();
    $this->set_hooks();
  }
  protected function set_hooks() {
    // actions and filters
    add_action('after_setup_theme', [$this, 'setup_theme'] );
  }
  public function setup_theme() {
    // actions and filters
    add_theme_support('title-tag');
    add_theme_support('menus');
    add_theme_support('post-thumbnails');
    add_theme_support('widgets');
  }
}


