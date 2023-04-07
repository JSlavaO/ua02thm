<?php
/** 
 * Theme Functions
 * 
 * @package Ua02thm
 */

// git rm hello.txt and add to .gitignore
// git rm screenshot.png debug.log gulpfile.js wp01.ua3ds.com.code-workspace start.bat


if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}
$year = date( 'Y' );
define( 'UPLOADS', 'wp-content/uploads' );
global $iids;
global $tst;
global $cur_user;

use Carbon_Fields\Container;
use Carbon_Fields\Field;

// include_once (__DIR__ . '/inc/ua02thm-recent-posts.php');
require_once (__DIR__ . '/inc/ua02thm-post-meta.php');

// global $current_user;
// global $c_user;
// global $c_email;
// // $cur_user = _wp_get_current_user();
// $current_user = wp_get_current_user();
// $c_user = $current_user->user_login;
// $c_email = $current_user->user_email;
// echo 'c__user: '.$c_user;
// $c_user = json_encode($cur_user->name);
// $c_email = json_encode($cur_user->user_email);
// echo 'email:'.$c_email;
$fromemail = "noreplay@wp.ua3ds.com";
$toemail = "fromua@yahoo.com";
// function page_on_front() {
//     $options = get_option('theme_options');
//     return $options['page_on_front'];
// }
//add_filter('pre_option_page_for_posts', 'page_for_posts');
// function page_for_posts() {
//     $options = get_option('theme_options');
//     return $options['page_for_posts'];
// }

// echo '<pre>';
// print_r( get_template_directory_uri() );
// wp_die();

function ua3dsthm_scripts() {
  // get_template_directory_uri() . '/app/dist/css/main.min.css?dev=' . time(),
  wp_deregister_script( 'jquery' );
  wp_enqueue_style(
	'main.min',
	get_template_directory_uri() . '/app/dist/css/main.min.css',
	[],
	filemtime( get_template_directory() . '/app/dist/css/main.min.css'),
  'all'
	);
	wp_enqueue_script(
	'modernizrcustom', 
	get_template_directory_uri() . '/app/dist/js/modernizr-custom.js',
	null,
	null
	);
	wp_enqueue_script(
    'commonjs', 
    get_template_directory_uri() . '/app/dist/js/common.js',
    [],
    filemtime( get_template_directory() . '/app/dist/js/common.js'),
    true
  );
  wp_dequeue_style('classic-theme-styles');
  wp_dequeue_style('global-styles');
  // wp_dequeue_style('cdp-css-global');
  // wp_dequeue_style('cdp-css');
  // wp_dequeue_style('cdp-css-user');
  // wp_dequeue_style('cdp-tooltips-css');
  // wp_dequeue_style('cdp-css-select');
}
add_action( 'wp_enqueue_scripts', 'ua3dsthm_scripts' );
remove_action( 'wp_head', 'wp_generator' );

function remove_api () {
  remove_action( 'wp_head', 'rest_output_link_wp_head', 10 );
  remove_action( 'wp_head', 'wp_oembed_add_discovery_links', 10 );
}
add_action( 'after_setup_theme', 'remove_api' );

// .ua3dslog-button {
//   background-color:#eb5e28;
//   border:1px;
//   border-radius:3px;
//   -webkit-box-shadow:1px 1px 0px 0px #2f2f2f;
//   -moz-box-shadow:1px 1px 0px 0px #2f2f2f;
//   box-shadow:1px 1px 0px 0px #2f2f2f;
//   }
//   .ua3dslog-button a,  .ua3dslog-button a:hover, .menu-button a:active {
//   color:#fff !important;
//   }


function flatupp() {
  $namet = htmlspecialchars($_POST['name']);
  $passt = htmlspecialchars($_POST['pass']);
  $infot = htmlspecialchars($_POST['info']);
  $sendt = 'problem';
  if ($infot === 'log') {
    $creds = array();
    $creds['user_login'] = $namet;
    $creds['user_password'] = $passt;
    $creds['remember'] = true;
    $user = wp_signon( $creds, false );
    if ( is_wp_error($user) ) {
      echo $user->get_error_message();
      die();
    } else {
      // include the wordpress files necessary to run its functions
      // include('../classpages/wp-config.php'); // this includes wp-settings.php, which includes wp-db.php, which makes the database connection
      // include(ABSPATH . WPINC . '/pluggable-functions.php');
      $user_login = $creds['user_login'];
      $user_pass = $creds['user_password'];

      // use wordpress's function to create the login cookies
      // this creates a cookie for the username and another for the hashed password, which wordpress reauthenticates each time we call its wp_get_current_user() function
      wp_setcookie($user_login, $user_pass, false, '', '', $user->ID);
      // wp_set_auth_cookie( $user->ID, 0, 0);
      echo 'Login OK';
    }
  } else if ($infot === 'reg') {

    if (isset( $_POST["vicode_user_login"] ) && wp_verify_nonce($_POST['vicode_csrf'], 'vicode-csrf')) {
      $user_login		= $_POST["vicode_user_login"];	
      $user_email		= $_POST["vicode_user_email"];
      $user_first 	    = $_POST["vicode_user_first"];
      $user_last	 	= $_POST["vicode_user_last"];
      $user_pass		= $_POST["vicode_user_pass"];
      $pass_confirm 	= $_POST["vicode_user_pass_confirm"];
      
      // this is required for username checks
      require_once(ABSPATH . WPINC . '/registration.php');
      
      if(username_exists($user_login)) {
          // Username already registered
          vicode_errors()->add('username_unavailable', __('Username already taken'));
      }
      if(!validate_username($user_login)) {
          // invalid username
          vicode_errors()->add('username_invalid', __('Invalid username'));
      }
      if($user_login == '') {
          // empty username
          vicode_errors()->add('username_empty', __('Please enter a username'));
      }
      if(!is_email($user_email)) {
          //invalid email
          vicode_errors()->add('email_invalid', __('Invalid email'));
      }
      if(email_exists($user_email)) {
          //Email address already registered
          vicode_errors()->add('email_used', __('Email already registered'));
      }
      if($user_pass == '') {
          // passwords do not match
          vicode_errors()->add('password_empty', __('Please enter a password'));
      }
      if($user_pass != $pass_confirm) {
          // passwords do not match
          vicode_errors()->add('password_mismatch', __('Passwords do not match'));
      }
      
      $errors = vicode_errors()->get_error_messages();
      
      // if no errors then cretate user
      if(empty($errors)) {
          
          $new_user_id = wp_insert_user(array(
                  'user_login'		=> $user_login,
                  'user_pass'	 		=> $user_pass,
                  'user_email'		=> $user_email,
                  'first_name'		=> $user_first,
                  'last_name'			=> $user_last,
                  'user_registered'	=> date('Y-m-d H:i:s'),
                  'role'				=> 'subscriber'
              )
          );
          if($new_user_id) {
              // send an email to the admin
              wp_new_user_notification($new_user_id);
              
              // log the new user in
              wp_setcookie($user_login, $user_pass, true);
              wp_set_current_user($new_user_id, $user_login);	
              do_action('wp_login', $user_login);
              
              // send the newly created user to the home page after logging them in
              wp_redirect(home_url()); exit;
          }
          
      }
  
  }



  }
  
  // echo 'name: '.$name.' | '.$pass;
  // echo "<script>alert('ok')</script>";

  // $data = [
  //   'post_type' => 'flatupp',
  //   'post_status' => 'publish',
  //   'post_title' => $name.' | '.$pass
  // ];
  // wp_insert_post( $data );

  // $fromemail = "noreplay@wp.ua3ds.com";
  // $toemail = "fromua@yahoo.com";
  
  // if ($fromemail != "") {
  //   $from = 'Links <'.$fromemail.'>';
  //   $headers  = "MIME-Version: 1.0\r\n";
  //   $headers .= "Content-type: text/html; charset=utf-8\r\n";
  //   $headers .= "Content-Transfer-Encoding: 8bit\r\n";
  //   $headers .= "From: ".$from."\r\n";

  //   $subj='subj= '.$name.' | '.$phone;
  //   $mess=$adata.'<br>'.$name.' | '.$phone.$fromfb;

  //   mail($toemail, $subj, $mess, $headers);
  // }
  wp_signon();

  $res = array(
    'name' => $name,
    'phone' => $pass
  );
  // echo json_encode($res);
  wp_die();
}


function ua3wthm_post_types() {
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

function ua02thm_widgets(){
	// unregister_widget('WP_Widget_Pages'); // ??
    unregister_widget('WP_Widget_Media_Audio');
    unregister_widget('WP_Widget_Media_Video');
    unregister_widget('WP_Widget_Media_Gallery');
    unregister_widget('WP_Widget_Calendar');
    unregister_widget('WP_Widget_Archives');
    //unregister_widget('WP_Widget_Links'); // ??
    unregister_widget('WP_Widget_Meta');
    //unregister_widget('WP_Widget_Search');
    //unregister_widget('WP_Widget_Text');
    //unregister_widget('WP_Widget_Categories');
    //unregister_widget('WP_Wid get_Recent_Posts');
    unregister_widget('WP_Widget_Recent_Comments');
    unregister_widget('WP_Widget_RSS');
    //unregister_widget('WP_Widget_Tag_Cloud');
    //unregister_widget('WP_Nav_Menu_Widget');
    //unregister_widget('Twenty_Eleven_Ephemera_Widget');

		register_widget( 'ua02thm_Recent_Posts' );
}
// new vers
// add_action('widgets_init', 'ua02thm_widgets');
// register_widget( 'ua02thm_widgets' );


/**
 * Add custom taxonomies
 *
 * Additional custom taxonomies can be defined here
 * https://developer.wordpress.org/reference/functions/register_taxonomy/
 */
function add_custom_taxonomies() {
  // Add new "Locations" taxonomy to Posts
  register_taxonomy('location', 'post', array(
    // Hierarchical taxonomy (like categories)
    'hierarchical' => true,
    // This array of options controls the labels displayed in the WordPress Admin UI
    'labels' => array(
      'name' => _x( 'Locations', 'taxonomy general name' ),
      'singular_name' => _x( 'Location', 'taxonomy singular name' ),
      'search_items' =>  __( 'Search Locations' ),
      'all_items' => __( 'All Locations' ),
      'parent_item' => __( 'Parent Location' ),
      'parent_item_colon' => __( 'Parent Location:' ),
      'edit_item' => __( 'Edit Location' ),
      'update_item' => __( 'Update Location' ),
      'add_new_item' => __( 'Add New Location' ),
      'new_item_name' => __( 'New Location Name' ),
      'menu_name' => __( 'Locations' ),
    ),
    // Control the slugs used for this taxonomy
    'show_ui'           => true,
    'show_admin_column' => true,
    'query_var'         => true,
    'rewrite' => false,
  ));
}
add_action( 'init', 'add_custom_taxonomies', 0 );

add_action('init', function () {
  $taxonomyName = 'location';

  $states = [
      "AK" => "Alaska",
      "AL" => "Alabama",
  ];
  // foreach ($states as $slug => $name) {
  //     wp_insert_term($name, $taxonomyName, [
  //         'slug' => $slug,
  //     ]);
  // }
  foreach ($states as $slug => $name) {
    if (empty(term_exists($slug, $taxonomyName))) {
        wp_insert_term($name, $taxonomyName, [
            'slug' => $slug,
        ]);
    }
  }
}, 999);


function se_inspect_styles(){
  global $wp_styles;
  echo "<h2> All css styles</h2><ul>";
  foreach($wp_styles->queue as $handle):
    echo "<li>".$handle."</li>";
  endforeach;
  echo "</ul>";
}
// add_action('wp_print_styles', 'se_inspect_styles');

// Theme options
add_theme_support('menus');
add_theme_support('post-thumbnails');
add_theme_support('widgets');

add_image_size('blog-large', 800, 600, false);
add_image_size('blog-small', 300, 200, true);

function my_sidebars()
{
  register_sidebar( 
    array(
      'name' => 'Page Sidebar',
      'id' => 'page-sidebar',
      'before_title' => '<h4 class="widget-title"',
      'after_title' => '</h4>'
    )
  );
  register_sidebar( 
    array(
      'name' => 'Blog Sidebar',
      'id' => 'blog-sidebar',
      'before_title' => '<h4 class="widget-title"',
      'after_title' => '</h4>'
    )
  );
}

remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
remove_action( 'admin_print_styles', 'print_emoji_styles' );
function dm_remove_wp_block_library_css(){
	wp_dequeue_style( 'wp-block-library' );
}
add_action( 'wp_enqueue_scripts', 'dm_remove_wp_block_library_css' );
remove_action( 'rest_api_init', 'wp_oembed_register_route' );
// Turn off oEmbed auto discovery.
add_filter( 'embed_oembed_discover', '__return_false' );
// Don't filter oEmbed results.
remove_filter( 'oembed_dataparse', 'wp_filter_oembed_result', 10 );
// Remove oEmbed discovery links.
remove_action( 'wp_head', 'wp_oembed_add_discovery_links' );
// Remove oEmbed-specific JavaScript from the front-end and back-end.
remove_action( 'wp_head', 'wp_oembed_add_host_js' );
// Remove all embeds rewrite rules.
// add_filter( 'rewrite_rules_array', 'disable_embeds_rewrites' );

function remove_wp_logo( $wp_admin_bar ) {
  $wp_admin_bar->remove_node( 'wp-logo' );
  $wp_admin_bar->remove_node( 'comments' );  
  $wp_admin_bar->remove_node( 'new-content' ); 
  //$wp_admin_bar->remove_node( 'my-account' ); 
  //$wp_admin_bar->remove_node( 'site-name' );
  $args = array(
    'id' => 'addua3wlink',
    'title' => 'ua3ds.com',
    'href' => 'http://ua3ds.com/',
    'parent' => false,
    'group' => false,
    'meta' => array(
    'class' => 'true',
    'target' => 'blank',
    'title' => 'Go site'
    )
  );
  if(!current_user_can('administrator')) {
      $wp_admin_bar->add_node( $args );
  }
  // remove_post_type_support('page', 'permalink');
}
add_action( 'admin_bar_menu', 'remove_wp_logo', 999 );

function hide_permalink() {
    return '';
}
add_filter( 'get_sample_permalink_html', 'hide_permalink' );

function wpb_remove_screen_options() { 
  if(!current_user_can('manage_option')) {
    return false;
  }
  return true; 
}
add_filter('screen_options_show_screen', 'wpb_remove_screen_options');

function add_file_types_to_uploads($file_types) {
	$new_filetypes = array();
	$new_filetypes['svg'] = 'image/svg+xml';
	$file_types = array_merge($file_types, $new_filetypes );
	return $file_types;
}
add_action('upload_mimes', 'add_file_types_to_uploads');

function webp_upload_mimes($existing_mimes) {
  $existing_mimes['webp'] = 'image/webp';
  return $existing_mimes;
}
add_filter('mime_types', 'webp_upload_mimes');

register_nav_menus( array(
  'top-menu' => 'Top Menu Location',
  'mobile-menu' => 'Mobile Menu Location'
));

add_filter( 'locale', function($locale) {
  if ( !is_admin() ) 
      $locale = "uk_UA";
  return $locale;
});

add_action('wp', 'my_locale_implemention');
function my_locale_implemention()
{
    $my_locale = get_locale();  //get_user_locale
    if ( !empty($my_locale) && !in_array( $my_locale, get_available_languages() ) ) {
        require_once( ABSPATH . 'wp-admin/includes/file.php' );
        require_once( ABSPATH . 'wp-admin/includes/translation-install.php' );
        $language = wp_download_language_pack( $my_locale );
        if ( $language ) {
            if(empty($_POST)) header("location: ".$_SERVER['REQUEST_URI']); exit; //reload page
        }
    }
}

function mytheme_comment($comment, $args, $depth) {
  if ( 'div' === $args['style'] ) {
      $tag       = 'div';
      $add_below = 'comment';
  } else {
      $tag       = 'li';
      $add_below = 'div-comment';
  }
  ?>
  <<?php echo $tag ?> <?php comment_class( empty( $args['has_children'] ) ? '' : 'parent' ) ?> id="comment-<?php comment_ID() ?>">
  <?php if ( 'div' != $args['style'] ) : ?>
      <div id="div-comment-<?php comment_ID() ?>" class="comment-body">
  <?php endif; ?>
  <div class="comment-author vcard">
      <?php /* this is where avatar is displayed */ ?>
      <!-- <?php if ( $args['avatar_size'] != 0 ) echo get_avatar( $comment, $args['avatar_size'] ); ?> -->
      <?php /* remove the above and add something like this */ ?>
      <?php echo "<img src='" . get_template_directory_uri() . '/dist/img/avatar_wp.png'."' class='user-avatar' />" ?>

      <?php printf( __( '<cite class="fn">%s</cite> <span class="says">says:</span>' ), get_comment_author_link() ); ?>
  </div>
  <?php if ( $comment->comment_approved == '0' ) : ?>
       <em class="comment-awaiting-moderation"><?php _e( 'Your comment is awaiting moderation.' ); ?></em>
        <br />
  <?php endif; ?>

  <div class="comment-meta commentmetadata"><a href="<?php echo htmlspecialchars( get_comment_link( $comment->comment_ID ) ); ?>">
      <?php
      /* translators: 1: date, 2: time */
      printf( __('%1$s at %2$s'), get_comment_date(),  get_comment_time() ); ?></a><?php edit_comment_link( __( '(Edit)' ), '  ', '' );
      ?>
  </div>

  <?php comment_text(); ?>

  <div class="reply">
      <?php comment_reply_link( array_merge( $args, array( 'add_below' => $add_below, 'depth' => $depth, 'max_depth' => $args['max_depth'] ) ) ); ?>
  </div>
  <?php if ( 'div' != $args['style'] ) : ?>
  </div>
  <?php endif; ?>
  <?php
}

function ua3dsthm_js_wars() {
  $vars = array(
     'ajaxurl' => admin_url( 'admin-ajax.php' )
  );
  echo "<script>window.wp = " . json_encode($vars) . "</script>";
}
add_action( 'wp_head', 'ua3dsthm_js_wars' );

add_action( 'wp_ajax_flatupp', 'flatupp' );
add_action( 'wp_ajax_nopriv_flatupp', 'flatupp' );


