// Common functionality for all pages
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

function setupNavigation() {
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (hamburger && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
}

// Initialize common functionality
document.addEventListener('DOMContentLoaded', function() {
    setupNavigation();
});