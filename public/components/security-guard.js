/**
 * MOJO AI SERVICES - CLIENT-SIDE SECURITY GUARD
 * 
 * Implements security baseline aligned with OWASP ASVS, NIST CSF, ISO 27001, and CIS Controls v8
 * This script detects and blocks potentially dangerous content and behaviors
 * 
 * RULES FOR ALL FUTURE COMMITS:
 * 1. No inline event handlers (onclick, onerror, etc.).
 * 2. Any new external script URL must be reviewed and added to the CSP allow-list.
 * 3. All user inputs must be sanitized before DOM insertion.
 * 4. Regular security scans required before production deployment.
 */

/* ---------- [MOJO SECURITY BASELINE] ---------- */

// Security configuration
const SECURITY_CONFIG = {
  // Allowed external script domains
  allowedScriptDomains: [
    'img1.wsimg.com',
    'fonts.googleapis.com',
    'fonts.gstatic.com'
  ],
  
  // Dangerous patterns to detect
  dangerousPatterns: [
    /eval\s*\(/gi,
    /new\s+Function\s*\(/gi,
    /onerror\s*=/gi,
    /onload\s*=/gi,
    /onclick\s*=/gi,
    /onmouseover\s*=/gi,
    /javascript\s*:/gi,
    /vbscript\s*:/gi,
    /data\s*:\s*text\/html/gi,
    /<script[^>]*src\s*=\s*["']?data:/gi,
    /document\.write\s*\(/gi,
    /innerHTML\s*=/gi,
    /outerHTML\s*=/gi
  ],
  
  // Allowed inline script patterns (whitelist)
  allowedInlinePatterns: [
    /gtag\(/gi,
    /dataLayer/gi
  ]
}

// Security violation counter
let securityViolations = 0
const MAX_VIOLATIONS = 10

/**
 * Initialize security monitoring when DOM is ready
 */
function initializeSecurityGuard() {
  console.log('[SECURITY] Mojo Security Guard initialized')
  
  // Block dangerous links
  blockDangerousLinks()
  
  // Scan existing scripts
  scanExistingScripts()
  
  // Set up mutation observer for dynamic content
  setupMutationObserver()
  
  // Block dangerous form submissions
  blockDangerousFormSubmissions()
  
  // Set up CSP violation reporting
  setupCSPViolationReporting()
  
  // Periodic security health check
  setInterval(performSecurityHealthCheck, 30000) // Every 30 seconds
}

/**
 * Block dangerous links (javascript: URIs, inline handlers)
 */
function blockDangerousLinks() {
  document.querySelectorAll('a').forEach(link => {
    const href = link.getAttribute('href') || ''
    const onclickAttr = link.getAttribute('onclick')
    
    // Check for javascript: URIs
    if (href.toLowerCase().startsWith('javascript:')) {
      console.warn('[SECURITY] Blocked dangerous javascript: URI', link)
      link.removeAttribute('href')
      link.style.cursor = 'not-allowed'
      link.title = 'Link blocked for security'
      recordSecurityViolation('dangerous-href', href)
    }
    
    // Check for inline onclick handlers
    if (onclickAttr) {
      console.warn('[SECURITY] Blocked inline onclick handler', link)
      link.removeAttribute('onclick')
      recordSecurityViolation('inline-onclick', onclickAttr)
    }
  })
}

/**
 * Scan existing scripts for security issues
 */
function scanExistingScripts() {
  document.querySelectorAll('script').forEach(script => {
    const src = script.src || ''
    const content = script.textContent || script.innerText || ''
    
    // Check external scripts
    if (src) {
      const isAllowed = SECURITY_CONFIG.allowedScriptDomains.some(domain => 
        src.includes(domain)
      )
      
      if (!isAllowed && !src.startsWith(window.location.origin)) {
        console.warn('[SECURITY] Suspicious external script detected', src)
        recordSecurityViolation('suspicious-external-script', src)
      }
    }
    
    // Check inline scripts
    if (content) {
      const isDangerous = SECURITY_CONFIG.dangerousPatterns.some(pattern => 
        pattern.test(content)
      )
      
      const isAllowed = SECURITY_CONFIG.allowedInlinePatterns.some(pattern => 
        pattern.test(content)
      )
      
      if (isDangerous && !isAllowed) {
        console.warn('[SECURITY] Blocked suspicious inline script')
        console.warn('[SECURITY] Script content:', content.substring(0, 100) + '...')
        script.parentNode?.removeChild(script)
        recordSecurityViolation('dangerous-inline-script', content.substring(0, 100))
      }
    }
  })
}

/**
 * Set up mutation observer to monitor dynamic content changes
 */
function setupMutationObserver() {
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      // Check for added nodes
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          scanElementForSecurity(node)
        }
      })
      
      // Check for attribute changes
      if (mutation.type === 'attributes') {
        const element = mutation.target
        const attributeName = mutation.attributeName
        
        if (attributeName && attributeName.startsWith('on')) {
          console.warn('[SECURITY] Inline event handler detected', element, attributeName)
          element.removeAttribute(attributeName)
          recordSecurityViolation('dynamic-inline-handler', attributeName)
        }
      }
    })
  })
  
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['onclick', 'onload', 'onerror', 'onmouseover', 'onsubmit']
  })
}

/**
 * Scan individual element for security issues
 */
function scanElementForSecurity(element) {
  // Check for script elements
  if (element.tagName === 'SCRIPT') {
    scanExistingScripts()
  }
  
  // Check for inline event handlers
  const attributes = element.attributes
  if (attributes) {
    for (let i = 0; i < attributes.length; i++) {
      const attr = attributes[i]
      if (attr.name.startsWith('on')) {
        console.warn('[SECURITY] Removed inline event handler', attr.name, element)
        element.removeAttribute(attr.name)
        recordSecurityViolation('dynamic-inline-handler', attr.name)
      }
    }
  }
  
  // Recursively check child elements
  element.querySelectorAll('*').forEach(child => {
    scanElementForSecurity(child)
  })
}

/**
 * Block dangerous form submissions
 */
function blockDangerousFormSubmissions() {
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (event) => {
      const formData = new FormData(form)
      
      for (let [key, value] of formData.entries()) {
        const isDangerous = SECURITY_CONFIG.dangerousPatterns.some(pattern => 
          pattern.test(value.toString())
        )
        
        if (isDangerous) {
          console.warn('[SECURITY] Blocked dangerous form submission', key, value)
          event.preventDefault()
          recordSecurityViolation('dangerous-form-data', key)
          
          // Show user-friendly error
          alert('Form submission blocked for security reasons. Please contact support if this is an error.')
          return false
        }
      }
    })
  })
}

/**
 * Set up CSP violation reporting
 */
function setupCSPViolationReporting() {
  document.addEventListener('securitypolicyviolation', (event) => {
    console.warn('[SECURITY] CSP Violation:', {
      directive: event.violatedDirective,
      blockedURI: event.blockedURI,
      lineNumber: event.lineNumber,
      sourceFile: event.sourceFile
    })
    
    recordSecurityViolation('csp-violation', event.violatedDirective)
  })
}

/**
 * Record security violation
 */
function recordSecurityViolation(type, details) {
  securityViolations++
  
  const violation = {
    type,
    details,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    url: window.location.href
  }
  
  // Store in sessionStorage for debugging
  const violations = JSON.parse(sessionStorage.getItem('securityViolations') || '[]')
  violations.push(violation)
  sessionStorage.setItem('securityViolations', JSON.stringify(violations))
  
  // If too many violations, disable dynamic content
  if (securityViolations > MAX_VIOLATIONS) {
    console.error('[SECURITY] Too many violations detected, entering lockdown mode')
    document.body.style.pointerEvents = 'none'
    document.body.innerHTML = '<div style="text-align:center;padding:50px;color:red;font-size:24px;">Security lockdown activated. Please refresh the page.</div>'
  }
}

/**
 * Perform periodic security health check
 */
function performSecurityHealthCheck() {
  // Check for suspicious global variables
  const suspiciousGlobals = ['eval', 'Function', 'setTimeout', 'setInterval']
  const originalGlobals = {}
  
  suspiciousGlobals.forEach(globalName => {
    if (window[globalName] && typeof window[globalName] === 'function') {
      if (!originalGlobals[globalName]) {
        originalGlobals[globalName] = window[globalName]
      }
      
      // Check if function has been tampered with
      if (window[globalName].toString().includes('native code') === false) {
        console.warn(`[SECURITY] Global function ${globalName} may have been tampered with`)
        recordSecurityViolation('global-tampering', globalName)
      }
    }
  })
  
  // Check for DOM clobbering
  const criticalDOMElements = ['document', 'window', 'location']
  criticalDOMElements.forEach(elementName => {
    if (document.getElementById(elementName) || document.getElementsByName(elementName).length > 0) {
      console.warn(`[SECURITY] Potential DOM clobbering attempt detected: ${elementName}`)
      recordSecurityViolation('dom-clobbering', elementName)
    }
  })
}

/**
 * Initialize when DOM is ready
 */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeSecurityGuard)
} else {
  initializeSecurityGuard()
}

/* ---------------------------------------------- */ 