<?php

use Carbon_Fields\Container;
use Carbon_Fields\Field;

// add_filter( 'carbon_fields_map_field_api_key', 'crb_get_gmaps_api_key' );
function crb_get_gmaps_api_key( $current_key ) {
    return 'AIzaSyCShMLqP_u7Yi7V8kp5O-QxFsULQWIP9AU';
}

function crb_attach_post_meta() {
  Container::make( 'post_meta', __( 'Blog Page Settings','crb' ) )
  // ->where( 'post_type', '=', 'post' )
  // ->show_on_post_type('post')
  // ->show_on_page(35)
  // ->show_on_page('35')
  // ->show_on_post_type('page')
  // ->show_on_template('template-aboutus.php')
  // ->where( 'post_id', '=', '35' )
  // ->where( 'post_id', '>', '34' )
  // ->show_on_category('news')
  // ->show_on_taxonomy_term('news', 'category')
  // ->show_on_taxonomy_term('al', 'location')
  // ->where( 'post_term', '=', 'location')
  ->where( 'post_term', '=', array(
    'field' => 'slug',
    'value' => 'al',
    'taxonomy' => 'location'
) )
  ->or_where( 'post_term', '=', array(
    'field' => 'slug',
    'value' => 'ak',
    'taxonomy' => 'location'
) )
  ->add_tab( __( 'Page Header Section','crb' ), array(
      Field::make( 'text', 'crb_titletext', __( 'Title','crb' ) )->set_width( 100 ),
      Field::make( 'text', 'crb_subtitletext', __( 'Sub Title','crb' ) )->set_width( 100 ),
  ) );
}
add_action( 'carbon_fields_register_fields', 'crb_attach_post_meta' );



