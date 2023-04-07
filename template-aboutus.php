<?php 
/* 
Template Name: About Us
*/
?>
<?php get_header('secondary'); ?>
<div class="container">
  <h1 class="intro__tittle"><?php the_title(); ?></h1>
  <div class="row">
    <div class="cols">
      this is about us template
    </div>
    <div class="cols">
      <?php get_template_part('includes/section', 'content'); ?>
    </div>
  </div>
<?php get_footer('second'); ?>
</div>