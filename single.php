<?php
/**
 * Single post template
 *
 *
 * @package ua3dsthm
*/
// the_terms( $post->ID, 'location', 'Locations: ', ', ', ' ' );

get_header();
?>
<section class="page-wrap">
<div class="container">
  <!-- this is single.php -->
    <h1 class="intro__tittle"><?php the_title(); ?></h1>
    <?php get_template_part('includes/section', 'blogcontent'); ?>

    <br><br>
    <?php
    // $page_id = get_queried_object_id();
    // $custom_fields = get_post_custom($page_id);
    $custom_fields = get_post_custom(get_queried_object_id());
    foreach ( $custom_fields as $key => $value ) {
      if ($key === '_crb_titletext') {
        echo ' titletext:  '.$value[0].'|';
      } else if ($key === '_crb_subtitletext') {
        echo ' subtitletext:  '.$value[0];
      }
    };
    if ( comments_open() || get_comments_number() ) {
      echo comments_template();
    }
    ?>
</div>
</section>
<?php get_footer(); ?>