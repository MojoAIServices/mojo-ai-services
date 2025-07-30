<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<!-- Minimal corner logo (like ChatGPT) -->
<a id="corner-logo" href="<?php echo esc_url(home_url('/')); ?>">
  <img src="<?php echo esc_url(get_stylesheet_directory_uri()); ?>/components/MojoLogo.png"
       alt="Mojo AI Services" loading="lazy" width="24" height="24">
</a>

<!-- Centered brand badge -->
<a id="brand-badge" href="<?php echo esc_url(home_url('/')); ?>">
  <img src="<?php echo esc_url(get_stylesheet_directory_uri()); ?>/components/MojoLogo.png"
       alt="Mojo AI Services logo" loading="lazy">
  <span>Mojo&nbsp;AI&nbsp;Services</span>
</a>
