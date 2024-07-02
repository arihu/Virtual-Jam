const socket = io('http://localhost:3000', {transports: ['websocket']});

socket.on('connect', () =>{
    console.log("Connected to backend");
});

socket.on('disconnect', () => {
    console.log("Disconnected from backend");
});


const keys = document.querySelectorAll('.piano-key');

const Instrument = Object.freeze({
    Piano: 0,
})

keys.forEach((key) => {
    key.addEventListener('mousedown', (e) => {
        const pressedKey = key.dataset.note;
        console.log("Pressed Piano Note: " + pressedKey);
        // playSound(pressedKey, Instrument.Piano);
        socket.emit('notePress', {note: pressedKey, instrument: Instrument.Piano});
    });
});

socket.on('notePress', data => {
    console.log("Received Note from server: " + data.note + ", " + data.instrument);
    playSound(data.note, data.instrument);
})

function playSound(note, instrument){
    if(instrument == Instrument.Piano)
        audio = new Audio(`./piano-mp3/${note}.mp3`);
    audio.play();
}
