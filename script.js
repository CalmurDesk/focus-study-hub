let time = 1500;
let timerInterval;
let isRunning = false;

function updateDisplay() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    document.getElementById("timer").innerText =
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(() => {
            if (time > 0) {
                time--;
                updateDisplay();
            } else {
                clearInterval(timerInterval);
                alert("Time's up! Take a break.");
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    time = 1500;
    updateDisplay();
}

function playSound(id) {
    stopSound();
    document.getElementById(id).play();
}

function stopSound() {
    document.getElementById("rain").pause();
    document.getElementById("lofi").pause();
}

const quotes = [
    "Small steps daily lead to big results.",
    "Discipline beats motivation.",
    "Focus now, shine later.",
    "Your future is created by what you do today."
];

document.getElementById("quote").innerText =
    quotes[Math.floor(Math.random() * quotes.length)];

updateDisplay();
