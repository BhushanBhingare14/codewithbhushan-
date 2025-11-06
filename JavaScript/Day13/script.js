/**
const countdownElement = document.getElementById("countdown");
const btn = document.getElementById("btn")
const btn1 = document.getElementById("btn1");
let countdown = 10; 

const updateCountdown = () => {
    countdownElement.textContent = countdown;
    if (countdown > 0) {
        countdown--;
    } 
   else if(countdown == 0){
        countdown =""
    }
    else {       
        clearInterval(countdownInterval);
    }
};
btn.addEventListener('click', function(e){
      clearInterval(countdownInterval);
})
btn1.addEventListener("click", function (e) {
 countdownInterval = setInterval(updateCountdown, 1000);
});

countdownInterval;
*/


let lightState = "red";
let totalTime = 0;
let intervalId;
let nextDelay;

function turnoffAllLights() {
  red.style.backgroundColor = "gray";
  yellow.style.backgroundColor = "gray";
  green.style.backgroundColor = "gray";
}

function changeLight() {
  turnoffAllLights();
  if (lightState === "red") {
    red.style.backgroundColor = "red";
    nextDelay = 3000;
    lightState = "yellow";
  } else if (lightState === "yellow") {
    yellow.style.backgroundColor = "yellow";
    nextDelay = 2000;
    lightState = "green";
  } else {
    green.style.backgroundColor = "green";
    nextDelay = 4000;
    lightState = "red";
  }
  totalTime += nextDelay;
  if (totalTime >= 15000) {
    clearTimeout(intervalId);
  } else {
    intervalId = setTimeout(changeLight, nextDelay);
  }
}

intervalId = setTimeout(changeLight, nextDelay);
