/**
 * Utility functions for smooth scrolling
 */

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

    // Check if we're on mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        // Use a more reliable method for mobile
        const elementTop = element.offsetTop;
        const mobileOffset = offset !== 0 ? offset : -80; // Account for fixed headers on mobile
        
        window.scrollTo({
            top: elementTop + mobileOffset,
            behavior
        });
    } else {
        // Desktop behavior
        if (offset !== 0) {
            // Calculate position with offset
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const targetPosition = elementPosition + offset;

            window.scrollTo({
                top: targetPosition,
                behavior
            });
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
    const { behavior = 'smooth' } = options;

    window.scrollTo({
        top: 0,
        behavior
    });
};

/**
 * Scrolls to a specific position on the page
 * @param {number} position - The Y position to scroll to
 * @param {Object} options - Optional scroll behavior configuration
 */
export const scrollToPosition = (position, options = {}) => {
    const { behavior = 'smooth' } = options;

    window.scrollTo({
        top: position,
        behavior
    });
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
