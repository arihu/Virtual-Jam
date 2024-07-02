const keys = document.querySelectorAll('.piano-key');

const pianoSound = new Audio('./piano-mp3/C4.mp3');

keys.forEach((key) => {
    key.addEventListener('mousedown', (e) => {
        const pressedKey = key.dataset.note;
        console.log("Pressed Piano Note: " + pressedKey);
        pianoSound.src = `./piano-mp3/${pressedKey}.mp3`;
        pianoSound.play();
    })
})
