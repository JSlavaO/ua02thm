<?php
/**
 * Home template file
 * 
 * @package Ua02thm
 */

get_header(); ?>
<?php
if (UA02THM_USE_BUTSTAP) {
?>

  <div class="primary">
    <main id="main" class="site-main mt-1" role="main">
<?php
  if ( have_posts() ) {
?>
      <div class="container">
<?php
    if ( is_home() && ! is_front_page() ) {
?>
        <header class="mb-4">
          <h1 class="page-title screen-reader-text">
            <?php echo single_post_title(); ?>
          </h1>
        </header>
<?php
    }
?>    
        <div class="row">
<?php
    $index = 0;
    $no_of_columns = UA02THM_PAGES_BUTSTAP;
    if (UA02THM_PAGES_BUTSTAP === 2) {
      $no_of_columns = 6;
    } else if (UA02THM_PAGES_BUTSTAP === 3) {
      $no_of_columns = 4;
    } else if (UA02THM_PAGES_BUTSTAP === 4) {
      $no_of_columns = 3;
    } else if (UA02THM_PAGES_BUTSTAP === 6) {
      $no_of_columns = 2;
    } else {
      $no_of_columns = 6;
    }
    while( have_posts() ): the_post();
?>
          <div class="col-lg-<?php echo $no_of_columns;?> col-md-6 col-sm-12 p-2">       
<?php
?>
            <div class="stycky_div">
              <h3><?php the_title(); ?></h3>
              <?php the_excerpt(); ?>
              <div class="stycky_footer">
                <a href="<?php the_permalink(); ?>" class="btn btn-success">Read more</a>
              </div>
            </div>
            <br>
          </div> 
<?php
        
?>
<?php
    endwhile;
?>
        </div>
      </div>
<?php
  }
?>
    </main>
  </div>
<?php
} else {
?>

  <section class="page-wrap">
    <div class="container">
      <?php 
        get_template_part('includes/section', 'archive');
        // previous_posts_link();
        // next_posts_link();

        global $wp_query;
        $big = 999999999;
        echo paginate_links( array(
          'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
          'format' => '?paged=%#%',
          'current' => max( 1, get_query_var('paged') ),
          'total' => $wp_query->max_num_pages
        ) );
        ?>
        <!-- <h3><br>Categories: -->
        <!-- <?php echo single_cat_title();?> -->
        <!-- </h3><br> -->
    </div>
  </section>
  <?php
}
get_footer(); ?>