// Data for workouts
const exercises = {
    "arms": [
        { name: "Bicep Curls", duration: 30, description: "Hold weights at sides, palms facing forward. Curl weights toward shoulders, then lower slowly." },
        { name: "Tricep Dips", duration: 45, description: "Sit on edge of chair, hands next to hips. Lift off chair, lower body by bending elbows, then push back up." },
        { name: "Push-Ups", duration: 45, description: "Start in plank position, lower body until chest nearly touches floor, then push back up." }
    ],
    "legs": [
        { name: "Squats", duration: 45, description: "Stand with feet shoulder-width apart, lower as if sitting in a chair, then return to standing." },
        { name: "Lunges", duration: 60, description: "Step forward with one leg, lower until both knees are bent at 90 degrees, then push back to start." },
        { name: "Calf Raises", duration: 30, description: "Stand with feet hip-width apart, raise heels off floor, then lower slowly." }
    ],
    "core": [
        { name: "Plank", duration: 60, description: "Hold body in a straight line from head to heels, supported on forearms and toes." },
        { name: "Russian Twists", duration: 45, description: "Sit with knees bent, lean back slightly, and twist torso from side to side." },
        { name: "Leg Raises", duration: 45, description: "Lie on back, legs straight. Raise legs toward ceiling, then lower slowly without touching floor." }
    ],
    "chest": [
        { name: "Push-Ups", duration: 45, description: "Start in plank position, lower body until chest nearly touches floor, then push back up." },
        { name: "Chest Press", duration: 45, description: "Lie on back with knees bent, hold weights above chest, lower to sides, then press back up." }
    ],
    "back": [
        { name: "Superman", duration: 45, description: "Lie face down, extend arms forward. Lift arms, chest, and legs off floor, then lower." },
        { name: "Bent Over Rows", duration: 45, description: "Bend forward at hips, hold weights with arms extended. Pull weights toward chest, squeezing shoulder blades." }
    ],
    "full-body": [
        { name: "Burpees", duration: 60, description: "From standing, drop into squat, kick feet back to plank, return to squat, then jump up." },
        { name: "Mountain Climbers", duration: 45, description: "In plank position, alternate bringing knees toward chest in a running motion." },
        { name: "Jumping Jacks", duration: 45, description: "Stand with feet together, arms at sides. Jump feet out while raising arms overhead, then return." }
    ]
};

// DOM Elements
const workoutForm = document.getElementById('workout-form');
const workoutResult = document.getElementById('workout-result');
const exercisesContainer = document.getElementById('exercises-container');
const timerContainer = document.getElementById('timer-container');
const startTimer = document.getElementById('start-timer');
const pauseTimer = document.getElementById('pause-timer');
const resetTimer = document.getElementById('reset-timer');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
});

// Generate workout
function generateWorkout() {
    const selectedBodyParts = Array.from(document.querySelectorAll('input[name="body-parts"]:checked')).map(input => input.value);

    let workoutExercises = [];

    if (selectedBodyParts.includes('full-body')) {
        for (const category in exercises) {
            workoutExercises = workoutExercises.concat(exercises[category]);
        }
    } else {
        selectedBodyParts.forEach(part => {
            if (exercises[part]) {
                workoutExercises = workoutExercises.concat(exercises[part]);
            }
        });
    }

    // Shuffle and pick 5
    workoutExercises = shuffleArray(workoutExercises).slice(0, 5);

    // Display
    exercisesContainer.innerHTML = '';
    workoutExercises.forEach((exercise, index) => {
        const exerciseElement = document.createElement('div');
        exerciseElement.className = 'exercise-item';
        exerciseElement.innerHTML = `
            <h4 class="exercise-name">${index + 1}. ${exercise.name} (${exercise.duration} seconds)</h4>
            <p class="exercise-description">${exercise.description}</p>
        `;
        exerciseElement.addEventListener('click', () => {
            startExerciseTimer(exercise);
        });
        exercisesContainer.appendChild(exerciseElement);
    });

    workoutResult.style.display = 'block';
}

// Timer
function startExerciseTimer(exercise) {
    document.getElementById('current-exercise').textContent = `Exercise: ${exercise.name}`;
    document.getElementById('workout-timer').textContent = formatTime(exercise.duration);

    let timeLeft = exercise.duration;
    let timerInterval;

    const startTimerFunc = () => {
        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            timeLeft--;
            document.getElementById('workout-timer').textContent = formatTime(timeLeft);

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                const audio = new Audio('assests/sounds/bell.mp3');
                audio.play();
            }
        }, 1000);
    };

    startTimer.onclick = startTimerFunc;
    pauseTimer.onclick = () => clearInterval(timerInterval);
    resetTimer.onclick = () => {
        clearInterval(timerInterval);
        timeLeft = exercise.duration;
        document.getElementById('workout-timer').textContent = formatTime(timeLeft);
    };

    timerContainer.style.display = 'block';
    timerContainer.scrollIntoView({ behavior: 'smooth' });
}

// Helpers
function shuffleArray(array) {
    const newArray = array.slice();
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Event listeners
function setupEventListeners() {
    if (workoutForm) {
        workoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            generateWorkout();
        });
    }
}
