<?php

/**
 * Header template
 * 
 * @package Ua02thm
 */
?>
<!DOCTYPE html>
<?php
global $iids;
global $c_user;
global $c_email;
global $post;
$id;
$current_user = wp_get_current_user();
$c_user = $current_user->user_login;
$c_email = $current_user->user_email;
$iids['upload'] = wp_get_upload_dir()["baseurl"];
$menu_class = \UA02THMSI_THEME\Inc\Menus::get_instance();
$heder_menu_id = $menu_class->get_menu_id('ua02thm-top-menu');
$heder_menus = wp_get_nav_menu_items($heder_menu_id);
// echo 'id:'.$heder_menu_id.'|'.$heder_menus[1]->title;
?>
<html lang="<?php language_attributes(); ?>">

<head>
  <meta charset="<?php bloginfo('charset') ?>" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />

  <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
  <meta name="msapplication-TileColor" content="#da532c">
  <meta name="theme-color" content="#ffffff">
  <meta http-equiv="cache-control" content="no-cache, no-store, must-revalidate" />
  <meta http-equiv="cache-control" content="no-store" />
  <meta http-equiv="cache-control" content="max-age=1" />
  <meta http-equiv="expires" content="0" />
  <meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
  <meta http-equiv="pragma" content="no-cache" />
  <?php wp_head(); ?>
  <noscript>
    This page needs JavaScript activated to work.
    <style>.comment-respond {display: none;}</style>
  </noscript>

</head>

<body <?php body_class(); ?>>
  <?php
  if (function_exists('wp_body_open')) {
    wp_body_open();
  }
  global $post;
  $id;
  $id1;
  $menutop = [];
  global $menubottom;
  $menubottom = [];
  if ($post = get_page_by_path('single', OBJECT, 'post'))
    $id = $post->ID;
  else
    $id = 0;
  $iids['blog'] = $id;
  wp_reset_postdata();
  if ($post = get_page_by_path('category-blog', OBJECT, 'post'))
    $id1 = $post->ID;
  else
    $id1 = 0;
  $iids['blog1'] = $id1;
  wp_reset_postdata();
  if ($post = get_page_by_path('test-blog-1-4', OBJECT, 'post'))
    $id = $post->ID;
  else
    $id = 0;
  $iids['blog2'] = $id;
  wp_reset_postdata();
?>
<?php
if (UA02THM_USE_BUTSTAP) {
?>

  <header class="headerbs">
    <div class="containerbs">
<?php
} else {
?>
  
  <header class="header">
    <div class="container">
<?php
}
?>
      <script>
        let _img_url = '<?php echo wp_upload_dir()['baseurl']; ?>'
        let _c_user = '<?php echo $c_user; ?>';
        let _c_email = '<?php echo $c_email; ?>';
      </script>
<?php
if (!empty($heder_menus) && is_array($heder_menus)) {
  if (!UA02THM_USE_BUTSTAP) {
wp_nav_menu(
  [
    'theme_location' => 'ua02thm-top-menu',
    'menu_class' => 'top_bar'
  ]
);
  }
}
?>
<?php
if (UA02THM_USE_BUTSTAP) {
?>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
<?php
  if (!empty($heder_menus) && is_array($heder_menus)) {
?>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
<?php
    foreach ($heder_menus as $menu_item) {
      if (!$menu_item->menu_item_parent) {
        $child_menu_items = $menu_class->get_child_menu_items($heder_menus, $menu_item->ID);
        $has_children =  !empty($child_menu_items) && is_array($child_menu_items);
        if (!$has_children) {
?>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="<?php echo esc_url($menu_item->url); ?>"><?php echo esc_html($menu_item->title); ?></a>
              </li>
<?php
        } else {
?>
              <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="<?php echo esc_url($menu_item->url); ?>" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><?php echo esc_html($menu_item->title); ?></a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
<?php
          foreach ($child_menu_items as $child_menu_item) {
?>
<?php
            if (esc_html($child_menu_item->title) === 'Login') {
echo '                <li class="ua3dslog-loginbs menu-item">';
            } else if (esc_html($child_menu_item->title) === 'Register') {
echo '                <li class="ua3dslog-regisbs menu-item">';
            }
?>
                  
                  <a class="dropdown-item" href="<?php echo esc_url($child_menu_item->url); ?>"><?php echo esc_html($child_menu_item->title); ?></a>
                </li>
<?php
          }
?>
              </ul>
            </li>
<?php
        }
      }
    }
?>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
<?php
  }
?>
          </div>
        </div>
      </nav>
<?php
}
?>
      <!-- <?php echo 'blog:' . $iids['blog'] . '|' . $iids['blog1'] . '|' . $iids['blog2']; ?> -->
    </div>
  </header>