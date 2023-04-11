<?php
/**
 * page template
 *
 *
 * @package ua3dsthm
*/

get_header(); ?>
Its 'page.php'
<section class="page-wrap">
<div class="container">
    <h1 class="intro__tittle"><?php the_title(); ?></h1>
    <?php get_template_part('includes/section', 'content'); ?>
</div>
</section>
<?php get_footer(); ?>