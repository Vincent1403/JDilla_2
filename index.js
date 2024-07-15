const rows = document.querySelector(".sequencer").children;

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const kick = new Audio("https://raw.githubusercontent.com/kucerajacob/DRUM-SEQUENCER/master/audio/kick.mp3"),
    clap = new Audio("https://raw.githubusercontent.com/kucerajacob/DRUM-SEQUENCER/master/audio/clap.mp3"),
    hihat = new Audio("https://raw.githubusercontent.com/kucerajacob/DRUM-SEQUENCER/master/audio/hihat.mp3"),
    rim = new Audio("https://raw.githubusercontent.com/kucerajacob/DRUM-SEQUENCER/master/audio/rim.mp3"),
    Q = new Audio("https://raw.githubusercontent.com/kucerajacob/DRUM-SEQUENCER/master/audio/Q.mp3"),
    W = new Audio("https://raw.githubusercontent.com/kucerajacob/DRUM-SEQUENCER/master/audio/W.mp3"),
    E = new Audio("https://raw.githubusercontent.com/kucerajacob/DRUM-SEQUENCER/master/audio/E.mp3"),
    R = new Audio("https://raw.githubusercontent.com/kucerajacob/DRUM-SEQUENCER/master/audio/R.mp3");

const item = document.querySelectorAll(".sample");

// Add Start and Pause button functionality
const startButton = document.getElementById("start-button");
const pauseButton = document.getElementById("pause-button");

let isPlaying = false;
let loopInterval = null;

startButton.onclick = function() {
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
    if (!isPlaying) {
        startLoop();
        isPlaying = true;
    }
};

pauseButton.onclick = function() {
    if (audioContext.state === 'running') {
        audioContext.suspend();
        clearInterval(loopInterval);
        isPlaying = false;
    }
};

function startLoop() {
    let step = 0;
    loopInterval = setInterval(() => {
        playStep(step);
        step = (step + 1) % 16;
    }, 60000 / document.getElementById("bpm-slider").value / 4);
}

function playStep(step) {
    for (let i = 0; i < rows.length; i++) {
        const sample = rows[i].children[step];
        if (sample.classList.contains("item-selected")) {
            playSound(getSampleAudio(sample.dataset.sample));
        }
    }
}

function getSampleAudio(sample) {
    switch (sample) {
        case "kick.wav": return kick;
        case "clap.wav": return clap;
        case "hihat.wav": return hihat;
        case "rim.wav": return rim;
    }
}

function playSound(audio) {
    const clone = audio.cloneNode();
    clone.play();
}

// Checkbox toggle functionality
item.forEach(function (el) {
    el.onclick = function () {
        if (el.classList.contains("item-selected")) {
            el.classList.remove("item-selected");
        } else {
            el.classList.add("item-selected");
        }
    }
});

// Clear button functionality
document.getElementById("clear-track").onclick = function () {
    [].forEach.call(item, function (el) {
        el.classList.remove("item-selected");
    });
}

// Sample pad key press functionality
document.onkeydown = function (e) {
    e = e || window.event;

    switch (e.key) {
        case "q":
            playSound(Q);
            document.getElementById("sampler1").classList.add("pressed");
            break;
        case "w":
            playSound(W);
            document.getElementById("sampler2").classList.add("pressed");
            break;
        case "e":
            playSound(E);
            document.getElementById("sampler3").classList.add("pressed");
            break;
        case "r":
            playSound(R);
            document.getElementById("sampler4").classList.add("pressed");
            break;    
    }
}

document.onkeyup = function (e) {
    e = e || window.event;

    switch (e.key) {
        case "q":
            document.getElementById("sampler1").classList.remove("pressed");
            break;
        case "w":
            document.getElementById("sampler2").classList.remove("pressed");
            break;
        case "e":
            document.getElementById("sampler3").classList.remove("pressed");
            break;
        case "r":
            document.getElementById("sampler4").classList.remove("pressed");
            break;    
    }
}

// BPM slider
const bpmSlider = document.getElementById("bpm-slider");
const bpmText = document.getElementById("bpm");

bpmText.innerHTML = bpmSlider.value + " BPM";

bpmSlider.oninput = function () {
    bpmText.innerHTML = this.value + " BPM";
    if (isPlaying) {
        clearInterval(loopInterval);
        startLoop();
    }
}
