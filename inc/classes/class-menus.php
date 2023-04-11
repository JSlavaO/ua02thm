<?php

/**
 * Register Menus
 * 
 * @package Ua02thm
 */

 namespace UA02THMSI_THEME\Inc;

 use UA02THMSI_THEME\Inc\Traits\Singleton;

class Menus {
  use Singleton;

  protected function __construct() {
    Assets::get_instance();
    $this->set_hooks();
  }
  protected function set_hooks() {
    // actions and filters
    add_action('init', [$this, 'register_menus'] );
  }
  public function register_menus() {
    // unregister_nav_menu( 'top-menu' );
    // unregister menu complete
    // $location = 'ua02thm-top-menu';
    // $locations = get_theme_mod('nav_menu_locations');
		// if (is_array($locations) && array_key_exists($location, $locations)) {
		// 	unset($locations[$location]);
		// 	set_theme_mod('nav_menu_locations', $locations);
		// 	return true;
		// }
    // return false;
    register_nav_menus( [
      'ua02thm-header-menu' => esc_html__('Top Menu Location', 'ua02thm'),
      'ua02thm-mobile-menu' => esc_html__('Mob Menu Location', 'ua02thm'),
      'ua02thm-top-menu' => esc_html__('Top Bar', 'ua02thm'),
    ]);
  }
  public function get_menu_id($location) {
    $locations = get_nav_menu_locations();
    $menu_id = $locations[$location];
    return ! empty( $menu_id ) ? $menu_id : '';
  }
  public function get_child_menu_items($menu_array, $parent_id) {
    $child_menus = [];
    
    if ( ! empty($menu_array) && is_array($menu_array) ) {
      foreach($menu_array as $menu) {
        if (intval($menu->menu_item_parent) === $parent_id) {
          array_push($child_menus, $menu);
        }
      }
    }
    return $child_menus;
  }
}


