// DOM Elements
const startBreathing = document.getElementById('start-breathing');
const stopBreathing = document.getElementById('stop-breathing');
const breathingCircle = document.getElementById('breathing-circle');
const startMeditation = document.getElementById('start-meditation');
const pauseMeditation = document.getElementById('pause-meditation');
const resetMeditation = document.getElementById('reset-meditation');
const meditationTimer = document.getElementById('meditation-timer');
const meditationTime = document.getElementById('meditation-time');
const soundButtons = document.querySelectorAll('.sound-btn');

let breathingInterval;
let meditationInterval;
let meditationTimeLeft;

//Ambient sounds
const sounds = {
    rain: new Audio('../assests/sounds/rain.wav'),
    forest: new Audio('../assests/sounds/forest.wav'),
    ocean: new Audio('../assests/sounds/ocean.wav'),
    whitenoice: new Audio('../assests/sounds/whitenoice.wav')
};
// make all sounds loop
Object.values(sounds).forEach(sound => sound.loop = true);

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
});

//Breathing exercise
function startBreathingExercise() {
    let isInhaling = true;

    // Apply first state immediately
    breathingCircle.textContent = 'Breathe In';
    breathingCircle.style.transform = `scale(1.5)`;
    breathingCircle.style.backgroundColor = '#4CAF50';

    breathingInterval = setInterval(() => {
        if (isInhaling) {
            breathingCircle.textContent = 'Breathe Out';
            breathingCircle.style.transform = `scale(1)`;
            breathingCircle.style.backgroundColor = '#2196F3';
        } else {
            breathingCircle.textContent = 'Breathe In';
            breathingCircle.style.transform = `scale(1.5)`;
            breathingCircle.style.backgroundColor = '#4CAF50';
        }
        isInhaling = !isInhaling;
    }, 4000);
}

function stopBreathingExercise() {
    clearInterval(breathingInterval);
    breathingCircle.style.transform = `scale(1)`;
    breathingCircle.textContent = 'Breathe In';
    breathingCircle.style.backgroundColor = '#4CAF50';
}

//Meditation timer
function startMeditationTimer() {
    if (meditationInterval) clearInterval(meditationInterval);

    meditationInterval = setInterval(() => {
        meditationTimeLeft--;
        meditationTimer.textContent = formatTime(meditationTimeLeft);

        if (meditationTimeLeft <= 0) {
            clearInterval(meditationInterval);
            const audio = new Audio('../assests/sounds/bells.wav');
            audio.play();
            trackMeditationSession(parseInt(meditationTime.value));
        }
    }, 1000);
}

function pauseMeditationTimer() {
    clearInterval(meditationInterval);
}

function resetMeditationTimer() {
    clearInterval(meditationInterval);
    meditationTimeLeft = parseInt(meditationTime.value) * 60;
    meditationTimer.textContent = formatTime(meditationTimeLeft);
}

//Track meditation session
function trackMeditationSession(minutes) {
    let sessions = JSON.parse(localStorage.getItem('meditationSessions')) || [];
    sessions.push({
        date: new Date().toISOString(),
        duration: minutes
    });
    localStorage.setItem('meditationSessions', JSON.stringify(sessions));
}

//Helpers
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

//Event listeners
function setupEventListeners() {
    // Breathing
    if (startBreathing) startBreathing.addEventListener('click', startBreathingExercise);
    if (stopBreathing) stopBreathing.addEventListener('click', stopBreathingExercise);

    // Meditation
    if (meditationTime) {
        meditationTimeLeft = parseInt(meditationTime.value) * 60;
        meditationTimer.textContent = formatTime(meditationTimeLeft);

        meditationTime.addEventListener('change', () => {
            meditationTimeLeft = parseInt(meditationTime.value) * 60;
            meditationTimer.textContent = formatTime(meditationTimeLeft);
        });
    }
    if (startMeditation) startMeditation.addEventListener('click', startMeditationTimer);
    if (pauseMeditation) pauseMeditation.addEventListener('click', pauseMeditationTimer);
    if (resetMeditation) resetMeditation.addEventListener('click', resetMeditationTimer);

    //Ambient sounds
    if (soundButtons) {
        soundButtons.forEach(button => {
            button.addEventListener('click', function() {
                const sound = this.getAttribute('data-sound');
                if (sounds[sound].paused) {
                    // Pause all others before playing this one
                    Object.values(sounds).forEach(s => s.pause());
                    soundButtons.forEach(btn => btn.classList.remove('active'));

                    sounds[sound].currentTime = 0;
                    sounds[sound].play();
                    this.classList.add('active');
                } else {
                    sounds[sound].pause();
                    this.classList.remove('active');
                }
            });
        });
    }
}
