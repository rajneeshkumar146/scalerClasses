/** 
 *  Must have features 
        * Pass time i hours, minutes and seconds.
        * play and pause button.
        * phase 1: Validation check and print timer on console.
        * phase 2: All button should work and UI update.
        * phase 3: Validation so that if user enters any timer greater than 60, then it should move to left bit.
        * 
 *  JavaScript:
           a. We have to listen to five event listners -> H,M,S, Start, Pause, reset, continue
           b. Validation check
           c. Update UI
           
        Edge Case:
           Reset Option.
 */

// Buttons.
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const continueBtn = document.getElementById("continue");
const resetBtn = document.getElementById("reset");


// Input Elements.
const hoursInput = document.getElementById("hr");
const minutesInput = document.getElementById("min");
const secondsInput = document.getElementById("sec");


let SECONDS_IN_HOUR = 3600;
let SECONDS_IN_MINUTE = 60;

let counterId;
let saveTimeLeft;

resetSetup();


// Event Listners
startBtn.addEventListener("click", (e) => {
    // 1. take inputs and validate it.
    let hours = getValidInput(hoursInput.value);
    let minutes = getValidInput(minutesInput.value);
    let seconds = getValidInput(secondsInput.value);


    if (!validateInputTime(hours, minutes, seconds)) {
        return;
    }

    let countDownTime = hours * SECONDS_IN_HOUR + minutes * SECONDS_IN_MINUTE + seconds;
    runTimer(countDownTime)

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
    resetBtn.style.display = "block";
});

pauseBtn.addEventListener("click", (e) => {
    // Pause the process.
    clearInterval(counterId);

    // No change in UI.

    pauseBtn.style.display = "none";
    continueBtn.style.display = "block";
});

continueBtn.addEventListener("click", (e) => {
     // continue the timer.
     runTimer(saveTimeLeft);

     // No change in UI.
 
     pauseBtn.style.display = "block";
     continueBtn.style.display = "none";
     resetBtn.style.display = "block";
});

resetBtn.addEventListener("click", (e) => {
    resetSetup();
});



// Helper methods.
function resetSetup() {
    // Change is UIL: reset UI.
    hoursInput.value = "00";
    minutesInput.value = "00";
    secondsInput.value = "00";

    // reset Process.
    saveTimeLeft = 0;
    clearInterval(counterId);

    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
    continueBtn.style.display = "none";
    resetBtn.style.display = "none";
}

function runTimer(countDownTime) {
    counterId = setInterval(() => {
        // console.log("Timer: ", countDownTime);

        saveTimeLeft = countDownTime--;

        updateUiEverySecond(countDownTime);
        if (countDownTime < 0) {
            clearInterval(counterId);
            return;
        }
    }, 1000);

}

function updateUiEverySecond(countDownTime) {
    let hour = Math.floor(countDownTime / 3600);
    let minute = Math.floor((countDownTime % 3600) / 60);
    let second = Math.floor(countDownTime % 60);

    // console.log(hour + ":" + minute + ":" + second);
    updateUI_Hour_Min_Sec(hour, minute, second);
}

function updateUI_Hour_Min_Sec(hour, minute, second) {
    hoursInput.value = hour < 10 ? `0${hour}` : hour;
    minutesInput.value = minute < 10 ? `0${minute}` : minute;
    secondsInput.value = second < 10 ? `0${second}` : second;
}

function getValidInput(value) {
    return parseInt(!value ? 0 : value);
}

function validateInputTime(hours, minutes, seconds) {
    if (hours < 0 || minutes < 0 || seconds < 0) {
        alert("Negative value's are not allowed.");
        return false;
    } else if (hours > 24) {
        alert("Hour is greater than 24 which is not a valid hour.");
        return false;
    } else if (minutes > 60) {
        alert("Minute is greater than 60 which is not a valid minute.");
        return false;
    } else if (seconds > 60) {
        alert("Second is greater than 60 which is not a valid second.");
        return false;
    }

    return true;
}