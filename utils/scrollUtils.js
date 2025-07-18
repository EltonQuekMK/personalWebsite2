/**
 * Utility functions for smooth scrolling
 */

/**
 * Internal function to handle smooth scrolling with mobile optimizations
 * @param {number} targetY - The Y position to scroll to
 * @param {Object} options - Optional scroll behavior configuration
 */
const smoothScrollTo = (targetY, options = {}) => {
    const { behavior = 'smooth' } = options;

    // Check if we're on mobile (more comprehensive detection)
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                     (window.innerWidth <= 768 && window.innerHeight <= 1024);
    
    if (isMobile) {
        // For iOS Safari, we need to disable smooth scrolling sometimes
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        
        if (isIOS) {
            // iOS Safari has issues with smooth scrolling, use requestAnimationFrame
            const startY = window.pageYOffset;
            const distance = targetY - startY;
            const duration = 600; // 600ms animation
            let startTime = null;
            
            const animation = (currentTime) => {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const progress = Math.min(timeElapsed / duration, 1);
                
                // Easing function
                const ease = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
                
                window.scrollTo(0, startY + distance * ease);
                
                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                }
            };
            
            requestAnimationFrame(animation);
        } else {
            // Android and other mobile browsers
            window.scrollTo({
                top: targetY,
                behavior: 'smooth'
            });
        }
    } else {
        // Desktop behavior
        window.scrollTo({
            top: targetY,
            behavior
        });
    }
};

/**
 * Smoothly scrolls to an element with the given ID
 * @param {string} elementId - The ID of the element to scroll to
 * @param {Object} options - Optional scroll behavior configuration
 * @param {string} options.behavior - Scroll behavior ('smooth', 'auto', 'instant')
 * @param {string} options.block - Vertical alignment ('start', 'center', 'end', 'nearest')
 * @param {string} options.inline - Horizontal alignment ('start', 'center', 'end', 'nearest')
 * @param {number} options.offset - Additional offset in pixels (negative for above element)
 */
export const scrollToElement = (elementId, options = {}) => {
    const {
        behavior = 'smooth',
        block = 'start',
        inline = 'nearest',
        offset = 0
    } = options;

    const element = document.getElementById(elementId);
    if (!element) {
        console.warn(`Element with ID "${elementId}" not found`);
        return false;
    }

    // Check if we're on mobile for fallback handling
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                     (window.innerWidth <= 768 && window.innerHeight <= 1024);
    
    if (isMobile) {
        // Mobile fallback with error handling
        try {
            // Calculate target position
            const rect = element.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const targetY = rect.top + scrollTop + offset;
            
            smoothScrollTo(targetY, options);
        } catch (error) {
            console.warn('Mobile scroll fallback failed:', error);
            // Ultimate fallback - instant scroll
            element.scrollIntoView({ behavior: 'auto', block: 'start' });
        }
    } else {
        // Desktop behavior
        if (offset !== 0) {
            // Calculate position with offset
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const targetPosition = elementPosition + offset;

            smoothScrollTo(targetPosition, options);
        } else {
            // Use standard scrollIntoView
            element.scrollIntoView({
                behavior,
                block,
                inline
            });
        }
    }

    return true;
};

/**
 * Scrolls to the top of the page
 * @param {Object} options - Optional scroll behavior configuration
 */
export const scrollToTop = (options = {}) => {
    smoothScrollTo(0, options);
};

/**
 * Scrolls to a specific position on the page
 * @param {number} position - The Y position to scroll to
 * @param {Object} options - Optional scroll behavior configuration
 */
export const scrollToPosition = (position, options = {}) => {
    smoothScrollTo(position, options);
};

/**
 * Common scroll targets for the website
 */
export const SCROLL_TARGETS = {
    SKILLS: 'skills',
    JOURNEY: 'journey',
    PROJECTS: 'projects',
    CONTACT: 'contact'
};

/**
 * Convenience functions for common scroll actions
 */
export const scrollToSkills = () => scrollToElement(SCROLL_TARGETS.SKILLS);
export const scrollToJourney = () => scrollToElement(SCROLL_TARGETS.JOURNEY);
export const scrollToProjects = () => scrollToElement(SCROLL_TARGETS.PROJECTS);
export const scrollToContact = () => scrollToElement(SCROLL_TARGETS.CONTACT);
