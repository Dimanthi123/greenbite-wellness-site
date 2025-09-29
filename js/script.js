// Health tips for different days
const healthTips = [
    "Start your day with a glass of warm water and lemon to boost metabolism and aid digestion.",
    "Aim for at least 30 minutes of physical activity daily - it's great for both physical and mental health.",
    "Include a source of protein in every meal to help maintain muscle mass and keep you feeling full.",
    "Practice mindful eating by paying attention to your food without distractions like TV or phones.",
    "Stay hydrated! Water is essential for nearly every function in your body.",
    "Get 7-9 hours of quality sleep each night - it's crucial for recovery and overall health.",
    "Incorporate strength training at least twice a week to maintain bone density and muscle mass."
];

// Slogans for the hero section
const slogans = [
    "Eat well. Live well. Be well.",
    "Nourish your body, fuel your life.",
    "Wellness starts with what you eat.",
    "Your journey to health begins here.",
    "Simple choices for a healthier you."
];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const dailyTip = document.getElementById('daily-tip');
const sloganContainer = document.querySelector('.slogan-container');
const newsletterForm = document.getElementById('newsletter-form');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Set up navigation
    setupNavigation();
    
    // Initialize slogan rotation
    initSlogans();
    
    // Set daily health tip
    setDailyTip();
    
    // Set up event listeners
    setupEventListeners();
});

// Set up navigation
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

// Initialize slogan rotation
function initSlogans() {
    const sloganElement = document.querySelector('.slogan');
    if (!sloganElement) return;
    
    let currentSlogan = 0;
    
    // Set initial slogan
    sloganElement.textContent = slogans[currentSlogan];
    
    // Rotate slogans every 5 seconds
    setInterval(() => {
        currentSlogan = (currentSlogan + 1) % slogans.length;
        sloganElement.style.opacity = 0;
        
        setTimeout(() => {
            sloganElement.textContent = slogans[currentSlogan];
            sloganElement.style.opacity = 1;
        }, 500);
    }, 5000);
}

// Set daily health tip based on day of week
function setDailyTip() {
    if (!dailyTip) return;
    
    const dayOfWeek = new Date().getDay();
    dailyTip.textContent = healthTips[dayOfWeek];
}

// Subscribe to newsletter
function subscribeNewsletter() {
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const email = emailInput.value;
    
    if (email && /\S+@\S+\.\S+/.test(email)) {
        // Store email in localStorage
        let subscribers = JSON.parse(localStorage.getItem('newsletterSubscribers')) || [];
        if (!subscribers.includes(email)) {
            subscribers.push(email);
            localStorage.setItem('newsletterSubscribers', JSON.stringify(subscribers));
        }
        
        // Show confirmation
        alert('Thank you for subscribing to our newsletter!');
        
        // Reset form
        newsletterForm.reset();
    } else {
        alert('Please enter a valid email address.');
    }
    
    return false;
}

// Set up all event listeners
function setupEventListeners() {
    // Newsletter form
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            subscribeNewsletter();
        });
    }
}

// Format time as MM:SS
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Animate value counters
function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    if (!obj) return;
    
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Shuffle array (for randomizing workouts)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}