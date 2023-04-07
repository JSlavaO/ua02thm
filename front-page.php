<?php get_header(); ?>
Page 'front-page.php' 
<div class="container">
  <section class="page-wrap">
    <h1 class="intro__tittle"><?php the_title(); ?></h1>
    <?php get_template_part('includes/section', 'content'); ?>
  </section>
</div>
<?php get_footer(); ?>
