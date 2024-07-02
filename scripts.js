// const socket = io();
const keys = document.querySelectorAll('.piano-key');

// const pianoSound = new Audio('./piano-mp3/C4.mp3');

keys.forEach((key) => {
    key.addEventListener('mousedown', (e) => {
        const pressedKey = key.dataset.note;
        console.log("Pressed Piano Note: " + pressedKey);
        playSound(pressedKey);
    });
});

function playSound(note){
    const audio = new Audio(`./piano-mp3/${note}.mp3`)
    audio.play();
}
