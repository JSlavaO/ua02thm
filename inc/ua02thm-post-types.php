<?php

function ua3wthm_post_types() {
  register_post_type('sectio-1', [
    'labels' => [
      'name'               => 'Header Section',
      'singular_name'      => 'section1',
      'add_new'            => 'Add new',
      'add_new_item'       => 'Add Sections Info',
      'edit_item'          => 'Edit section',
      'new_item'           => 'New info',
      'view_item'          => null,
      'search_items'       => 'Search items',
      'not_found'          => 'not found',
      'not_found_in_trash' => 'not found in trash',
      'parent_item_colon'  => '',
      'menu_name'          => 'Header', // название меню
    ],
    'capability_type'    => 'post',
    'capabilities'       => array( 'create_posts' => true ),       
    'map_meta_cap'       => true,
    
    'public'              => true,
    'menu_position'       => 5,
    'menu_icon'           => 'dashicons-performance', 
    'hierarchical'        => false,
    'supports'            => array('title')
    ]
  );

  register_post_type( 'sectio-2',
    array(
      'labels' => array(
      'name' => __( 'Footer Section' ),
      'singular_name' => __( 'section2' ),
      'add_new_item'       => 'Add Sections Info',
      'edit_item'          => 'Edit section',
      'new_item'           => 'New info',
      'view_item'          => 'View item',
      'search_items'       => 'Search items',
      'not_found'          => 'not found',
      'not_found_in_trash' => 'not found in trash', // если не было найдено в корзине
      'parent_item_colon'  => '', // для родителей (у древовидных типов)
      'menu_name'          => 'Footer', // название меню
      ),    
      'capability_type'    => 'post',
      'capabilities'       => array( 'create_posts' => true ),       
      'map_meta_cap'       => true,
      
      'public'              => true,
      'menu_position'       => 6,
      'menu_icon'           => 'dashicons-index-card', 
      'hierarchical'        => false,
      'supports'            => array('title')
    )
  );

  register_post_type('flatupp',
    [
      'labels' => [
        'name'               => 'Application',
        'menu_name'          => 'Application', // название меню
      ],
      'capability_type'    => 'post',
      'capabilities'       => array( 'create_posts' => false ),       
      'map_meta_cap'       => true,
      
      'public'              => true,
      'menu_position'       => 13,
      'menu_icon'           => 'dashicons-phone', 
      'hierarchical'        => false,
      'supports'            => array('title')
    ]
  );
}
add_action('init', 'ua3wthm_post_types');

// = edit or delete Section site
function wpds_custom_admin_post_css() {
    global $post_type;
    global $pagenow;
    if ($pagenow == 'post.php' && substr($post_type,0,6) == 'sectio') {
        echo "<style>#wp-admin-bar-view {display:none;}</style>";
        echo "<style>#preview-action {display:none;}</style>";
    }
    if ($pagenow == 'post.php' && get_post_type() == 'flatupp') {
        echo "<style>#wp-admin-bar-view {display:none;}</style>";
        echo "<style>#preview-action {display:none;}</style>";
    }
}
// add_action('admin_head', 'wpds_custom_admin_post_css');

// = Add New Section site (if allow)
function disable_create_newpost() {
    global $wp_post_types;
    $wp_post_types['sectio-1']->cap->create_posts = 'do_not_allow';  // or true  => add new 
    $wp_post_types['sectio-2']->cap->create_posts = 'do_not_allow';  // true, or false or 'do_not_allow'
}
add_action('init','disable_create_newpost');

add_filter( 'post_row_actions', 'remove_row_actions', 10, 1 );
function remove_row_actions( $actions )
{
    if( get_post_type() === 'sectio-1' || get_post_type() === 'sectio-2') {
// unset( $actions['edit'] );
//unset( $actions['view'] );

        // unset( $actions['delete'] );
        unset( $actions['trash'] );
        unset( $actions['inline hide-if-no-js'] );
        $style = '';
        $style .= '<style type="text/css">';
        $style .= '#delete-action, .bulkactions';
        $style .= '{display: none; }';
        $style .= '</style>';
        echo $style;

        }
        return $actions;
}
add_filter( 'post_row_actions', 'remove_row_flatupp', 10, 1 );
function remove_row_flatupp( $actions )
{
    if( get_post_type() === 'flatupp') {
// unset( $actions['edit'] );
//unset( $actions['view'] );

        unset( $actions['edit'] );
        unset( $actions['view'] );
        unset( $actions['inline hide-if-no-js'] );
        $style = '';
        $style .= '<style type="text/css">';
        $style .= '#delete-action, .bulkactions';
        $style .= '{display: none; }';
        $style .= '</style>';
        echo $style;

        }
        return $actions;
}
    
add_filter( 'page_row_actions', 'remove_row_actions_page', 10, 1 );
function remove_row_actions_page( $actions )
{
    if( get_post_type() === 'page' )
    {
        unset( $actions['delete'] );
        unset( $actions['trash'] );
        unset( $actions['inline hide-if-no-js'] );
        $style = '';
        $style .= '<style type="text/css">';
        $style .= '#delete-action, .bulkactions';
        $style .= '{display: none; }';
        $style .= '</style>';

        echo $style;
        return $actions;
    }
}