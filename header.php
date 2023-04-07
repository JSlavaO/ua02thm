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
?>
<html lang="<?php language_attributes(); ?>">

<head>
  <meta charset="<?php bloginfo( 'charset' )?>" />
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

  <title>Wordpress Portfolio</title>
  <noscript>
    This page needs JavaScript activated to work.
    <style>
      /* .ua3dslog-button { display:none; } */
      .comment-respond {
        display: none;
      }
    </style>
  </noscript>
  <?php wp_head(); ?>
</head>

<body>
  <?php
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
  <header>
    <div class="container">
      <script>
        let _img_url = '<?php echo wp_upload_dir()['baseurl']; ?>'
        let _c_user = '<?php echo $c_user; ?>';
        let _c_email = '<?php echo $c_email; ?>';
      </script>
      <?php wp_nav_menu(
        array(
          'theme_location' => 'top-menu',
          'menu_class' => 'top_bar'
        )
      ); ?>
    </div>
    <!-- <?php echo 'blog:' . $iids['blog'] . '|' . $iids['blog1'] . '|' . $iids['blog2']; ?> -->
  </header>