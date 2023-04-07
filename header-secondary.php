<!DOCTYPE html>
<?php 
global $iids;
$iids['upload']=wp_get_upload_dir()["baseurl"];
?>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<title>Wordpress Portfolio</title>
<?php wp_head(); ?>
</head>
<body>
<header>
  <div class="container">
    <?php wp_nav_menu( array(
      'theme_location' => 'top-menu',
      'menu_class' => 'top_bar'
      )
    ); ?>
  </div>
</header>