#!/bin/bash

# 🚀 WordPress Theme Deployment Script
# This script helps deploy the updated mojo-child theme to your WordPress site

echo "🚀 Starting WordPress Theme Deployment..."

# Check if required files exist
echo "📋 Checking required files..."

REQUIRED_FILES=(
    "themes/mojo-child/front-page.php"
    "themes/mojo-child/header.php"
    "themes/mojo-child/style.css"
    "themes/mojo-child/assets/css/main.css"
    "themes/mojo-child/components/MojoLogo.png"
)

for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ Missing: $file"
        exit 1
    fi
done

echo ""
echo "📦 Files ready for deployment!"
echo ""
echo "🎯 Next Steps:"
echo "1. Upload the 'themes/mojo-child/' directory to your WordPress site"
echo "2. Clear any caching plugins"
echo "3. Test the site on different devices"
echo ""
echo "📁 Files to upload:"
echo "   - themes/mojo-child/front-page.php"
echo "   - themes/mojo-child/header.php"
echo "   - themes/mojo-child/style.css"
echo "   - themes/mojo-child/assets/css/main.css"
echo "   - themes/mojo-child/components/MojoLogo.png"
echo ""
echo "🔧 If using FTP/SFTP:"
echo "   - Upload to: /wp-content/themes/mojo-child/"
echo "   - Set file permissions: 644 for files, 755 for directories"
echo ""
echo "✅ Deployment script completed!" 