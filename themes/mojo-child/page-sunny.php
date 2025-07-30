<?php
/**
 * Template Name: Sunny Page
 * Template Post Type: page
 */

get_header();
?>

<main class="coming-soon-page">
    <div class="coming-soon-container">
        <h1 class="coming-soon-title">Great Things Coming Soon…</h1>
        <div class="construction-animation">
            <img src="<?php echo esc_url( get_stylesheet_directory_uri() ); ?>/assets/images/stick-figure-construction.gif"
                 alt="Construction animation - SUNNY AI system under development"
                 loading="lazy"
                 width="200"
                 height="150">
        </div>
        <p class="coming-soon-subtitle">SUNNY - Smart Unified Network for Natural energy Yield</p>
    </div>
</main>

<?php
get_footer();
?> 