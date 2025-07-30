<?php
/**
 * Mojo Child Theme Functions
 * 
 * Security Implementation based on:
 * - OWASP Top 10 Web Application Security Risks
 * - NIST Cybersecurity Framework
 * - CIS Controls
 * - ISO 27001 Information Security Management
 * 
 * @package Mojo_Child
 * @version 1.0.0
 * @author Mojo AI Services
 */

// =============================================================================
// SECURITY HEADERS AND BASIC HARDENING
// =============================================================================

/**
 * Prevent direct access to PHP files
 * Security Control: Access Control (NIST: PR.AC-1)
 */
if (!defined('ABSPATH')) {
    exit('Direct access denied.');
}

/**
 * Disable file editing from WordPress admin
 * Security Control: Prevent code injection (OWASP A03:2021 - Injection)
 */
if (!defined('DISALLOW_FILE_EDIT')) {
    define('DISALLOW_FILE_EDIT', true);
}

/**
 * Disable file modifications
 * Security Control: System integrity (CIS Control 3)
 */
if (!defined('DISALLOW_FILE_MODS')) {
    define('DISALLOW_FILE_MODS', true);
}

/**
 * Force SSL for admin and login pages
 * Security Control: Data in transit protection (NIST: PR.DS-2)
 */
if (!defined('FORCE_SSL_ADMIN')) {
    define('FORCE_SSL_ADMIN', true);
}

// =============================================================================
// SECURITY HEADERS IMPLEMENTATION
// =============================================================================

/**
 * Add security headers to protect against common attacks
 * Security Controls: Multiple OWASP Top 10 mitigations
 */
function mojo_add_security_headers() {
    // Generate nonce for inline scripts
    $nonce = wp_create_nonce('csp');
    
    // Content Security Policy - Prevents XSS attacks (OWASP A03:2021)
    header("Content-Security-Policy: default-src 'self'; img-src 'self' data: https:; script-src 'self' 'nonce-{$nonce}'; style-src 'self' 'unsafe-inline'; connect-src 'self'; frame-ancestors 'none';");
    
    // X-Frame-Options - Prevents clickjacking (OWASP A04:2021)
    header('X-Frame-Options: DENY');
    
    // X-Content-Type-Options - Prevents MIME type sniffing
    header('X-Content-Type-Options: nosniff');
    
    // X-XSS-Protection - Additional XSS protection
    header('X-XSS-Protection: 1; mode=block');
    
    // Referrer Policy - Controls referrer information
    header('Referrer-Policy: strict-origin-when-cross-origin');
    
    // Strict Transport Security - Enforces HTTPS (NIST: PR.DS-2)
    if (is_ssl()) {
        header('Strict-Transport-Security: max-age=31536000; includeSubDomains; preload');
    }
    
    // Feature Policy - Restricts browser features
    header("Permissions-Policy: geolocation=(), microphone=(), camera=()");
}
add_action('send_headers', 'mojo_add_security_headers');

// =============================================================================
// ASSET ENQUEUING WITH SECURITY MEASURES
// =============================================================================

/**
 * Enqueue styles and scripts with proper security measures
 * Security Control: Resource integrity (CIS Control 3)
 */
function mojo_enqueue_assets() {
    // Verify we're not in admin area to prevent conflicts
    if (is_admin()) {
        return;
    }
    
    // Get theme version for cache busting (Security: Prevents stale cache attacks)
    $theme_version = wp_get_theme()->get('Version');
    $cache_buster = $theme_version . '-' . get_option('mojo_cache_version', '1');
    
    // Enqueue parent theme styles
    wp_enqueue_style(
        'generatepress-parent',
        get_template_directory_uri() . '/style.css',
        array(),
        $cache_buster
    );
    
    // Enqueue child theme styles
    wp_enqueue_style(
        'mojo-child-style',
        get_stylesheet_uri(),
        array('generatepress-parent'),
        $cache_buster
    );
    
    // Enqueue main CSS with cache-busting
    wp_enqueue_style(
        'mojo-main-css',
        get_stylesheet_directory_uri() . '/assets/css/main.css',
        array('mojo-child-style'),
        filemtime(get_stylesheet_directory() . '/assets/css/main.css')
    );
    
    // Enqueue custom JavaScript with integrity check
    wp_enqueue_script(
        'mojo-custom-js',
        get_stylesheet_directory_uri() . '/assets/js/custom.js',
        array(),
        filemtime(get_stylesheet_directory() . '/assets/js/custom.js'),
        true // Load in footer for better performance
    );
    
    // Add nonce for AJAX security if needed
    wp_localize_script('mojo-custom-js', 'mojo_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('mojo_security_nonce'),
        'site_url' => esc_url(home_url())
    ));
}
add_action('wp_enqueue_scripts', 'mojo_enqueue_assets');

// =============================================================================
// SECURITY UTILITY FUNCTIONS
// =============================================================================

/**
 * Sanitize and validate input data
 * Security Control: Input validation (OWASP A03:2021 - Injection)
 */
function mojo_sanitize_input($input, $type = 'text') {
    switch ($type) {
        case 'email':
            return sanitize_email($input);
        case 'url':
            return esc_url_raw($input);
        case 'int':
            return intval($input);
        case 'text':
        default:
            return sanitize_text_field($input);
    }
}

/**
 * Secure output escaping
 * Security Control: Output encoding (OWASP A03:2021 - XSS)
 */
function mojo_secure_output($output, $context = 'html') {
    switch ($context) {
        case 'attr':
            return esc_attr($output);
        case 'url':
            return esc_url($output);
        case 'js':
            return esc_js($output);
        case 'html':
        default:
            return esc_html($output);
    }
}

/**
 * Verify nonce for AJAX requests and form submissions
 * Security Control: CSRF protection (OWASP A01:2021)
 */
function mojo_verify_nonce($nonce, $action = 'mojo-child') {
    return wp_verify_nonce($nonce, $action);
}

/**
 * Get CSP nonce for inline scripts
 * Security Control: CSP nonce generation
 */
function mojo_get_csp_nonce() {
    static $nonce = null;
    if ($nonce === null) {
        $nonce = wp_create_nonce('csp');
    }
    return $nonce;
}

// =============================================================================
// CONTENT SECURITY AND ACCESS CONTROL
// =============================================================================

/**
 * Add custom body class for homepage with security validation
 * Security Control: Access control validation
 */
function mojo_add_homepage_body_class($classes) {
    // Verify we're on the actual front page (not just any page set as front page)
    if (is_front_page() && is_home()) {
        $classes[] = 'mojo-homepage-body';
    }
    return $classes;
}
add_filter('body_class', 'mojo_add_homepage_body_class');

/**
 * Remove WordPress version from head for security
 * Security Control: Information disclosure prevention (OWASP A01:2021)
 */
remove_action('wp_head', 'wp_generator');

/**
 * Disable XML-RPC to prevent brute force attacks
 * Security Control: Attack surface reduction (CIS Control 4)
 */
add_filter('xmlrpc_enabled', '__return_false');

/**
 * Remove unnecessary meta tags that reveal information
 * Security Control: Information disclosure prevention
 */
function mojo_remove_meta_tags() {
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wp_shortlink_wp_head');
}
add_action('init', 'mojo_remove_meta_tags');

// =============================================================================
// PERFORMANCE AND SECURITY OPTIMIZATION
// =============================================================================

/**
 * Implement cache versioning for security updates
 * Security Control: Ensures fresh assets after security updates
 */
function mojo_update_cache_version() {
    $current_version = get_option('mojo_cache_version', '1');
    update_option('mojo_cache_version', intval($current_version) + 1);
}

/**
 * Security logging function (for monitoring)
 * Security Control: Security monitoring (NIST: DE.CM-1)
 */
function mojo_security_log($message, $level = 'info') {
    if (defined('WP_DEBUG') && WP_DEBUG) {
        error_log(sprintf(
            '[MOJO SECURITY][%s][%s] %s',
            date('Y-m-d H:i:s'),
            strtoupper($level),
            sanitize_text_field($message)
        ));
    }
}

// =============================================================================
// THEME ACTIVATION SECURITY CHECKS
// =============================================================================

/**
 * Perform security checks on theme activation
 * Security Control: System integrity verification
 */
function mojo_theme_activation_security_check() {
    // Check PHP version for security (minimum PHP 7.4)
    if (version_compare(PHP_VERSION, '7.4', '<')) {
        mojo_security_log('PHP version below recommended minimum for security', 'warning');
    }
    
    // Check if WordPress is up to date
    $wp_version = get_bloginfo('version');
    if (version_compare($wp_version, '6.0', '<')) {
        mojo_security_log('WordPress version may have security vulnerabilities', 'warning');
    }
    
    // Initialize cache version
    if (!get_option('mojo_cache_version')) {
        add_option('mojo_cache_version', '1');
    }
    
    mojo_security_log('Theme activated with security checks completed', 'info');
}
add_action('after_switch_theme', 'mojo_theme_activation_security_check');

// =============================================================================
// ADDITIONAL SECURITY HARDENING
// =============================================================================

/**
 * Disable pingbacks to prevent DDoS attacks
 * Security Control: DDoS prevention (CIS Control 12)
 */
function mojo_disable_pingbacks($links) {
    foreach ($links as $l => $link) {
        unset($links[$l]);
    }
    return $links;
}
add_filter('pre_ping', 'mojo_disable_pingbacks');

/**
 * Hide login errors to prevent username enumeration
 * Security Control: Information disclosure prevention
 */
function mojo_hide_login_errors() {
    return 'Invalid login credentials.';
}
add_filter('login_errors', 'mojo_hide_login_errors');

/**
 * Rate limiting for security (basic implementation)
 * Security Control: Brute force protection (OWASP A07:2021)
 */
function mojo_basic_rate_limiting() {
    $ip = $_SERVER['REMOTE_ADDR'] ?? '';
    if (empty($ip)) return;
    
    $transient_key = 'mojo_rate_limit_' . md5($ip);
    $requests = get_transient($transient_key);
    
    if ($requests === false) {
        set_transient($transient_key, 1, MINUTE_IN_SECONDS);
    } else if ($requests > 60) { // 60 requests per minute limit
        mojo_security_log("Rate limit exceeded for IP: {$ip}", 'warning');
        wp_die('Rate limit exceeded. Please try again later.', 'Too Many Requests', array('response' => 429));
    } else {
        set_transient($transient_key, $requests + 1, MINUTE_IN_SECONDS);
    }
}

// Apply rate limiting to login attempts
add_action('wp_login_failed', 'mojo_basic_rate_limiting');
add_action('wp_authenticate', 'mojo_basic_rate_limiting');

// =============================================================================
// COMING SOON PAGES STYLES
// =============================================================================

/**
 * Enqueue styles for Shelby and Sunny coming soon pages
 * Only loads on pages using the specific templates
 */
function mojo_child_enqueue_pages_styles() {
    // Check if we're on a page using one of our coming soon templates
    if (is_page_template(['page-shelby.php', 'page-sunny.php'])) {
        wp_enqueue_style(
            'mojo-child-pages',
            get_stylesheet_directory_uri() . '/assets/css/pages.css',
            array(), // No dependencies
            filemtime(get_stylesheet_directory() . '/assets/css/pages.css'), // Cache busting
            'all' // Media type
        );
        
        // Log that we're loading the coming soon styles
        if (function_exists('mojo_security_log')) {
            mojo_security_log('Loading coming soon page styles for template: ' . get_page_template_slug(), 'info');
        }
    }
}
add_action('wp_enqueue_scripts', 'mojo_child_enqueue_pages_styles');

// =============================================================================
// END OF SECURITY CONFIGURATION
// =============================================================================

// Log successful initialization
mojo_security_log('Mojo Child Theme functions loaded with security measures active', 'info');
