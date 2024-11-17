function turnOn() {
    const video = document.getElementById('tvVideo');
    video.style.display = 'block';
    video.play();
}

function turnOff() {
    const video = document.getElementById('tvVideo');
    video.pause();
    video.style.display = 'none';
}

// fan
function on(){
    document.getElementById("fan").className="onfan";
}
function off(){
    document.getElementById("fan").className="offan";
}
function mid(){
    document.getElementById("fan").className="onfan1";
}
function fast(){
    document.getElementById("fan").className="onfan2";
}

// bulb

const lightbulb = document.getElementById('lightbulb');
const turnOnButton = document.getElementById('turnOnButton');
const turnOffButton = document.getElementById('turnOffButton');
const brightnessSlider = document.getElementById('brightnessSlider');


let isLightOn = false; 


turnOnButton.addEventListener('click', () => {
    isLightOn = true;
    lightbulb.style.backgroundColor = 'yellow';
    lightbulb.style.opacity = brightnessSlider.value / 100; 
});


turnOffButton.addEventListener('click', () => {
    isLightOn = false;
    lightbulb.style.backgroundColor = 'gray'; 
    lightbulb.style.opacity = 0; 
});


brightnessSlider.addEventListener('input', (event) => {
    const brightness = event.target.value;
    if (isLightOn) {
        lightbulb.style.opacity = brightness / 100; 
    }
});

// AC

const toggleACButton = document.getElementById('toggleAC');
const increaseSpeedButton = document.getElementById('increaseSpeed');
const decreaseSpeedButton = document.getElementById('decreaseSpeed');
const acStatusText = document.getElementById('ac-status');
const acSpeedText = document.getElementById('ac-speed');

let acStatus = false; 
let acSpeed = 0;      


toggleACButton.addEventListener('click', () => {
    acStatus = !acStatus;
    if (acStatus) {
        acStatusText.textContent = 'AC ON';
        toggleACButton.textContent = 'Turn Off';
        increaseSpeedButton.disabled = false;
        decreaseSpeedButton.disabled = false;
    } else {
        acStatusText.textContent = 'AC OFF';
        toggleACButton.textContent = 'Turn On';
        increaseSpeedButton.disabled = true;
        decreaseSpeedButton.disabled = true;
        acSpeedText.textContent = 'Speed: 0';
        acSpeed = 0;
    }
});


increaseSpeedButton.addEventListener('click', () => {
    if (acSpeed < 100) {
        acSpeed++;
        acSpeedText.textContent = `Speed: ${acSpeed}`;
    }
});

decreaseSpeedButton.addEventListener('click', () => {
    if (acSpeed > 0) {
        acSpeed--;
        acSpeedText.textContent = `Speed: ${acSpeed}`;
    }
});

