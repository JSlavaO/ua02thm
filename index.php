<?php
/**
 * Index template file
 * 
 * @package Ua02thm
 */

get_header(); ?>
Index template file
 <section class="page-wrap">
   <div class="container">
   Page 'category-blog.php'
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
       <h3><br>Categories: <?php echo single_cat_title().'</h3><br>';
     ?>
   </div>
 </section>
 <?php get_footer(); ?>