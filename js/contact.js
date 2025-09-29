// DOM Elements
const feedbackForm = document.getElementById('feedback-form');
const contactSuccess = document.getElementById('contact-success');
const faqItems = document.querySelectorAll('.faq-item');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Set up event listeners
    setupEventListeners();
    
    // Set up FAQ accordion
    setupFAQ();
});

// Validate and submit contact form
function submitContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    let isValid = true;
    
    // Reset error messages
    document.getElementById('name-error').style.display = 'none';
    document.getElementById('email-error').style.display = 'none';
    document.getElementById('message-error').style.display = 'none';
    
    // Validate name
    if (!name) {
        document.getElementById('name-error').style.display = 'block';
        isValid = false;
    }
    
    // Validate email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
    }
    
    // Validate message
    if (!message) {
        document.getElementById('message-error').style.display = 'block';
        isValid = false;
    }
    
    if (isValid) {
        // Store feedback in localStorage
        const feedback = {
            name,
            email,
            message,
            date: new Date().toISOString()
        };
        
        let feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
        feedbacks.push(feedback);
        localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
        
        // Show success message
        contactSuccess.style.display = 'block';
        
        // Reset form
        feedbackForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            contactSuccess.style.display = 'none';
        }, 5000);
    }
    
    return false;
}

// Set up FAQ accordion
function setupFAQ() {
    if (faqItems) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        });
    }
}

// Set up all event listeners
function setupEventListeners() {
    // Contact form
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (e) => {
            e.preventDefault();
            submitContactForm();
        });
    }
}