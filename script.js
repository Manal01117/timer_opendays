// Timer function
function startTimer(duration) {
    var timer = duration * 3600;
    var hours, minutes, seconds;

    var interval = setInterval(function() {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        var timerDisplay;
        if (timer > 0) {
            timerDisplay = hours + ":" + minutes + ":" + seconds;
        } else {
            timerDisplay = "End of Hackathon";
            clearInterval(interval);
            // Play the alarm sound
            playAlarm();
            document.getElementById("timer").classList.add('end-of-hackathon');
        }

        document.getElementById("timer").textContent = timerDisplay;

        if (--timer < 0) {
            clearInterval(interval);
        }
    }, 1000);
}


// Play the alarm sound
function playAlarm() {
    var alarm = document.getElementById('alarm');
    alarm.play();
}

// Check if the timer has one minute left
function checkTimeLeft() {
    var timer = document.getElementById('timer');
    var time = timer.innerHTML.split(':');
    var secondsLeft = parseInt(time[2]);

    if (secondsLeft === 20) { // If only one minute is left
        timer.classList.add('blink'); // Apply blinking effect
    } else {
        timer.classList.remove('blink'); // Remove blinking effect
    }
}

// Call the function periodically to check time left
setInterval(checkTimeLeft, 1000); // Check every second

// Start the timer when the page loads
window.onload = function() {
    // Set the duration in hours
    var hours = 0.005; // Change this to your desired duration
    startTimer(hours);
};
