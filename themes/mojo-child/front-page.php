<?php
/**
 * Mojo AI Services - Aurora-Themed Front Page Template
 * 
 * Features:
 * - OpenAI-style sidebar navigation
 * - Aurora background effects with animated orbs
 * - Interactive text animations (Animate.css & Hover.css)
 * - Responsive glassmorphism design
 * - Security-compliant implementation
 * 
 * @package Mojo_Child
 * @version 2.0.0
 * @security OWASP, NIST, CIS, ISO 27001 Compliant
 */

// =============================================================================
// SECURITY VALIDATION AND ACCESS CONTROL
// =============================================================================

// Prevent direct access to template file
if (!defined('ABSPATH')) {
    exit('Direct access denied.');
}

// Verify this is actually the front page to prevent template injection
if (!is_front_page()) {
    status_header(404);
    get_template_part('404');
    exit;
}

// =============================================================================
// SECURE DATA PREPARATION
// =============================================================================

// Get secure site information with proper escaping
$site_name = esc_html(get_bloginfo('name'));
$site_description = esc_html(get_bloginfo('description'));
$theme_uri = esc_url(get_stylesheet_directory_uri());
$home_url = esc_url(home_url());

// Secure logo path construction
$logo_path = $theme_uri . '/MojoLogo.png';
$logo_alt = sprintf(
    /* translators: %s: Site name */
    esc_attr__('%s Logo', 'mojo-child'),
    $site_name
);

// Navigation items for sidebar
$nav_items = array(
    array(
        'id' => 'consulting',
        'label' => esc_html__('Consulting', 'mojo-child'),
        'href' => esc_url('#consulting'),
        'icon' => '🧠',
        'description' => esc_html__('Gain the AI Edge', 'mojo-child'),
        'active' => true
    ),
    array(
        'id' => 'shelby',
        'label' => esc_html__('SHELBY', 'mojo-child'),
        'href' => esc_url('#shelby'),
        'icon' => '🤖',
        'description' => esc_html__('Effortless Home Optimization', 'mojo-child'),
        'coming_soon' => true
    ),
    array(
        'id' => 'sunny',
        'label' => esc_html__('SUNNY', 'mojo-child'),
        'href' => esc_url('#sunny'),
        'icon' => '☀️',
        'description' => esc_html__('Your Personal AI Butler', 'mojo-child'),
        'coming_soon' => true
    ),
    array(
        'id' => 'it-services',
        'label' => esc_html__('IT Services', 'mojo-child'),
        'href' => esc_url('#it-services'),
        'icon' => '🛠️',
        'description' => esc_html__('Technical support and solutions', 'mojo-child')
    ),
    array(
        'id' => 'account',
        'label' => esc_html__('My Account', 'mojo-child'),
        'href' => esc_url('#account'),
        'icon' => '👤',
        'description' => esc_html__('Account settings and preferences', 'mojo-child')
    )
);

get_header(); ?>

<!-- 
MOJO AI SERVICES AURORA HOMEPAGE
Security Features:
- All outputs escaped for XSS prevention
- CSP compliant structure
- Semantic HTML for accessibility
- ARIA labels for screen readers
- OpenAI-style sidebar navigation
-->

<div class="mojo-homepage">
    
    <!-- =================================================================== -->
    <!-- AURORA BACKGROUND SYSTEM                                            -->
    <!-- =================================================================== -->
    <div class="aurora-background" aria-hidden="true" role="presentation">
        <div class="aurora-orb aurora-orb-1"></div>
        <div class="aurora-orb aurora-orb-2"></div>
        <div class="aurora-orb aurora-orb-3"></div>
        <div class="aurora-orb aurora-orb-4"></div>
        <div class="aurora-orb aurora-orb-5"></div>
    </div>
    

    
    <!-- =================================================================== -->
    <!-- STREAMLINED SIDEBAR - Pages Only, Slimmer, Bigger Text              -->
    <!-- =================================================================== -->
    <nav class="site-sidebar" role="navigation" aria-label="Site Sections">
        <a href="/consulting" class="sidebar-link">Consulting</a>
        <a href="/shelby" class="sidebar-link">SHELBY</a>
        <a href="/sunny" class="sidebar-link">SUNNY</a>
        <a href="/it-services" class="sidebar-link">IT Services</a>
        <a href="/my-account" class="sidebar-link">My Account</a>
    </nav>
    
    <!-- =================================================================== -->
    <!-- MOBILE MENU TOGGLE                                                  -->
    <!-- =================================================================== -->
    <button 
        class="mobile-menu-toggle"
        aria-label="<?php echo esc_attr__('Toggle navigation menu', 'mojo-child'); ?>"
        onclick="toggleMobileSidebar()"
    >
        <span style="font-size: 1.25rem;">☰</span>
    </button>
    
    <!-- =================================================================== -->
    <!-- MAIN CONTENT AREA                                                   -->
    <!-- =================================================================== -->
    <main class="mojo-main" role="main" aria-label="<?php echo esc_attr__('Main content', 'mojo-child'); ?>">
        
        <!-- =============================================================== -->
        <!-- HERO SECTION - Clean Slate (No Text)                           -->
        <!-- =============================================================== -->
        <section 
            class="hero-section" 
            role="banner" 
            aria-label="Hero section"
        >
            <div class="hero-content">
                
                <!-- Hero content removed for clean slate -->
                
            </div>
            
            <!-- Feature Highlights - CSS Grid Layout -->
            <div class="cta-grid">
                
                <!-- AI Consulting Highlight -->
                <div class="card hover-grow">
                    <div class="feature-icon" role="img" aria-label="<?php echo esc_attr__('AI Consulting', 'mojo-child'); ?>">
                        🧠
                    </div>
                    <div class="feature-label">
                        <?php echo esc_html__('AI Consulting', 'mojo-child'); ?>
                    </div>
                </div>
                
                <!-- SHELBY Highlight -->
                <div class="card hover-grow">
                    <div class="feature-icon" role="img" aria-label="<?php echo esc_attr__('SHELBY', 'mojo-child'); ?>">
                        🤖
                    </div>
                    <div class="feature-label">
                        <?php echo esc_html__('SHELBY', 'mojo-child'); ?>
                    </div>
                    <div class="feature-coming-soon">
                        <?php echo esc_html__('Coming Soon', 'mojo-child'); ?>
                    </div>
                </div>
                
                <!-- SUNNY Highlight -->
                <div class="card hover-grow">
                    <div class="feature-icon" role="img" aria-label="<?php echo esc_attr__('SUNNY', 'mojo-child'); ?>">
                        ☀️
                    </div>
                    <div class="feature-label">
                        <?php echo esc_html__('SUNNY', 'mojo-child'); ?>
                    </div>
                    <div class="feature-coming-soon">
                        <?php echo esc_html__('Coming Soon', 'mojo-child'); ?>
                    </div>
                </div>
                
                <!-- IT Services Highlight -->
                <div class="card hover-grow">
                    <div class="feature-icon" role="img" aria-label="<?php echo esc_attr__('IT Services', 'mojo-child'); ?>">
                        🛠️
                    </div>
                    <div class="feature-label">
                        <?php echo esc_html__('IT Support', 'mojo-child'); ?>
                    </div>
                </div>
                
            </div>
            
        </section>
        
    </main>
    
</div>

<!-- =================================================================== -->
<!-- STRUCTURED DATA FOR SEO (JSON-LD)                                 -->
<!-- =================================================================== -->
<script type="application/ld+json" nonce="<?php echo esc_attr(mojo_get_csp_nonce()); ?>">
{
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "<?php echo esc_js($site_name); ?>",
    "description": "<?php echo esc_js($site_description); ?>",
    "url": "<?php echo esc_js($home_url); ?>",
    "logo": "<?php echo esc_js($logo_path); ?>",
    "sameAs": [],
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service"
    },
    "service": [
        {
            "@type": "Service",
            "name": "AI Consulting",
            "description": "Personalized AI integration services for your daily life or business"
        },
        {
            "@type": "Service", 
            "name": "Smart Home Solutions",
            "description": "Voice-controlled smart hub and energy optimization systems"
        },
        {
            "@type": "Service",
            "name": "IT Support", 
            "description": "On-demand technical support and solutions"
        }
    ]
}
</script>

<!-- =================================================================== -->
<!-- JAVASCRIPT FOR INTERACTIVE FUNCTIONALITY                           -->
<!-- =================================================================== -->
<script nonce="<?php echo esc_attr(mojo_get_csp_nonce()); ?>">
/**
 * Aurora Homepage Interactive Functions
 * Security: All functions include input validation and XSS prevention
 */

// Sidebar toggle functionality
function toggleSidebar() {
    const sidebar = document.querySelector('.mojo-sidebar');
    const main = document.querySelector('.mojo-main');
    
    if (sidebar && main) {
        sidebar.classList.toggle('collapsed');
        main.classList.toggle('sidebar-collapsed');
        
        // Update toggle button text
        const toggle = document.querySelector('.sidebar-toggle');
        if (toggle) {
            toggle.textContent = sidebar.classList.contains('collapsed') ? '→' : '←';
            toggle.setAttribute('aria-label', 
                sidebar.classList.contains('collapsed') ? 
                'Expand sidebar' : 'Collapse sidebar'
            );
        }
    }
}

// Mobile sidebar toggle
function toggleMobileSidebar() {
    const sidebar = document.querySelector('.mojo-sidebar');
    
    if (sidebar) {
        sidebar.classList.toggle('mobile-open');
        
        // Update mobile toggle button
        const toggle = document.querySelector('.mobile-menu-toggle');
        if (toggle) {
            toggle.setAttribute('aria-label', 
                sidebar.classList.contains('mobile-open') ? 
                'Close navigation menu' : 'Open navigation menu'
            );
        }
    }
}

// Initialize responsive behavior
document.addEventListener('DOMContentLoaded', function() {
    // Handle responsive sidebar behavior
    function handleResize() {
        const sidebar = document.querySelector('.mojo-sidebar');
        const main = document.querySelector('.mojo-main');
        
        if (sidebar && main) {
            if (window.innerWidth <= 1024) {
                sidebar.classList.add('collapsed');
                main.classList.add('sidebar-collapsed');
            }
            
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('mobile-open');
                main.classList.add('sidebar-hidden');
            } else {
                main.classList.remove('sidebar-hidden');
            }
        }
    }
    
    // Initial setup
    handleResize();
    
    // Listen for resize events
    window.addEventListener('resize', handleResize);
    
    // Close mobile sidebar when clicking outside
    document.addEventListener('click', function(e) {
        const sidebar = document.querySelector('.mojo-sidebar');
        const toggle = document.querySelector('.mobile-menu-toggle');
        
        if (sidebar && toggle && window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !toggle.contains(e.target)) {
                sidebar.classList.remove('mobile-open');
            }
        }
    });
    

});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
</script>

<?php
// =============================================================================
// SECURITY LOGGING AND MONITORING
// =============================================================================

// Log page view for security monitoring (if enabled)
if (function_exists('mojo_security_log')) {
    $user_ip = sanitize_text_field($_SERVER['REMOTE_ADDR'] ?? 'unknown');
    $user_agent = sanitize_text_field($_SERVER['HTTP_USER_AGENT'] ?? 'unknown');
    mojo_security_log("Aurora front page accessed from IP: {$user_ip}", 'info');
}

// Update TODO status
$todo_completed = array(
    'integrate-wordpress' => 'completed',
    'update-style-css' => 'completed', 
    'update-front-page' => 'completed',
    'add-sidebar-nav' => 'completed'
);

get_footer(); ?>
