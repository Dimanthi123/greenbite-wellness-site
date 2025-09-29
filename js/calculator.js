// DOM Elements
const calculatorForm = document.getElementById('calculator-form');
const resultsSection = document.getElementById('results-section');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Set up event listeners
    setupEventListeners();
});

// Calculate BMR, TDEE and macros
function calculateNutrition() {
    const age = parseInt(document.getElementById('age').value);
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const activityFactor = parseFloat(document.getElementById('activity').value);
    
    // Calculate BMR
    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    
    // Calculate TDEE
    const tdee = bmr * activityFactor;
    
    // Calculate macros
    const carbsGrams = (tdee * 0.50) / 4;
    const proteinGrams = (tdee * 0.20) / 4;
    const fatGrams = (tdee * 0.30) / 9;
    
    // Display results with animation
    function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

    animateValue('bmr-result', 0, Math.round(bmr), 1000);
    animateValue('tdee-result', 0, Math.round(tdee), 1000);
    animateValue('carbs-grams', 0, Math.round(carbsGrams), 1000);
    animateValue('protein-grams', 0, Math.round(proteinGrams), 1000);
    animateValue('fat-grams', 0, Math.round(fatGrams), 1000);
    
    // Show results section
    resultsSection.style.display = 'block';
    
    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// Set up all event listeners
function setupEventListeners() {
    // Calculate nutrition
    if (calculatorForm) {
        calculatorForm.addEventListener('submit', (e) => {
            e.preventDefault();
            calculateNutrition();
        });
    }
}