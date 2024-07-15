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

// Add a user gesture listener to resume the audio context
document.addEventListener('click', () => {
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
});
document.addEventListener('keydown', () => {
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
});

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
var T0 = parseInt(((60 / bpmSlider.value) * 1000) / 4);

bpmText.innerHTML = bpmSlider.value + " BPM";

bpmSlider.oninput = function () {
    bpmText.innerHTML = this.value + " BPM";
    T0 = parseInt(((60 / bpmSlider.value) * 1000) / 4);
}

// SWING slider
const swingSlider = document.getElementById("swing-slider");
const swingText = document.getElementById("swing");
var swing = 1;

const firstclasses = ["d1", "d5", "d9", "d13"];
const first = firstclasses.flatMap(className => Array.from(document.getElementsByClassName(className)));
const secondclasses = ["d2", "d6", "d10", "d14"];
const second = secondclasses.flatMap(className => Array.from(document.getElementsByClassName(className)));
const thirdclasses = ["d3", "d7", "d11", "d15"];
const third = thirdclasses.flatMap(className => Array.from(document.getElementsByClassName(className)));
const fourthclasses = ["d4", "d8", "d12", "d16"];
const fourth = fourthclasses.flatMap(className => Array.from(document.getElementsByClassName(className)));

swingText.innerHTML = "off"
swingSlider.oninput = function() {
  swing = parseFloat(swingSlider.value);

  if (this.value == 1) {
    swingText.innerHTML = "off"

    for (var k = 0; k<4;k++) {
      second[k].style.width="25%";
      third[k].style.width="25%";
    }
  } else {
    swingText.innerHTML = "1/"+this.value;

    for (var k = 0; k<4;k++) {
      second[k].style.width = 25*(1+1/swing)+"%";
      third[k].style.width = 25*(1-1/swing)+"%";
    }
  }
  audioContext.resume();
}

function playSound(audio) {
    audioContext.resume().then(() => {
        const source = audioContext.createBufferSource();
        source.buffer = audio.buffer;
        source.connect(audioContext.destination);
        source.start();
    });
}

function highlightRow(i) {
    document.querySelector(".d" + (i + 1)).childNodes[1].classList.add("row-highlight");
    document.querySelector(".d" + (i + 1)).childNodes[3].classList.add("row-highlight");
    document.querySelector(".d" + (i + 1)).childNodes[5].classList.add("row-highlight");
    document.querySelector(".d" + (i + 1)).childNodes[7].classList.add("row-highlight");

    if (i > 0) {
        document.querySelector(".d" + i).childNodes[1].classList.remove("row-highlight");
        document.querySelector(".d" + i).childNodes[3].classList.remove("row-highlight");
        document.querySelector(".d" + i).childNodes[5].classList.remove("row-highlight");
        document.querySelector(".d" + i).childNodes[7].classList.remove("row-highlight");
    } else {
        document.querySelector(".d16").childNodes[1].classList.remove("row-highlight");
        document.querySelector(".d16").childNodes[3].classList.remove("row-highlight");
        document.querySelector(".d16").childNodes[5].classList.remove("row-highlight");
        document.querySelector(".d16").childNodes[7].classList.remove("row-highlight");
    }
}

function scheduleSounds(currentRow, currentTime) {
    document.querySelectorAll(".d" + (currentRow + 1)).forEach(function (bruh) {
        if (bruh.childNodes[1].classList.contains("row-highlight") && bruh.childNodes[1].classList.contains("item-selected")) {
            playSound(kick);
        }

        if (bruh.childNodes[3].classList.contains("row-highlight") && bruh.childNodes[3].classList.contains("item-selected")) {
            playSound(clap);
        }

        if (bruh.childNodes[5].classList.contains("row-highlight") && bruh.childNodes[5].classList.contains("item-selected")) {
            playSound(hihat);
        }

        if (bruh.childNodes[7].classList.contains("row-highlight") && bruh.childNodes[7].classList.contains("item-selected")) {
            playSound(rim);
        }
    });
}

var currentTime = audioContext.currentTime;
let currentRow = 0;
let j = 0;

function loop() {
    highlightRow(currentRow);
    scheduleSounds(currentRow, currentTime);

    let interval = T0 / 1000;

    j++;
    if (swing !== 1) {
        if (j === 2) {
            interval += 2*T0/swing;
        }
        if (j === 3) {
            interval -= 2*T0/swing;
        }
    }
    if (j === 4) {
      j=0;
    }

    currentTime += interval;
    currentRow = (currentRow + 1) % rows.length;

    setTimeout(loop, interval * 1000);
}

// Convert audio to buffer for scheduling
function convertToBuffer(audioElement, callback) {
    const request = new XMLHttpRequest();
    request.open('GET', audioElement.src, true);
    request.responseType = 'arraybuffer';
    request.onload = function () {
        audioContext.decodeAudioData(request.response, function (buffer) {
            audioElement.buffer = buffer;
            if (callback) callback();
        });
    }
    request.send();
}

// Load all audio buffers
function loadAllBuffers(callback) {
    let loadedCount = 0;
    const audioElements = [kick, clap, hihat, rim, Q, W, E, R];
    audioElements.forEach(audio => {
        convertToBuffer(audio, () => {
            loadedCount++;
            if (loadedCount === audioElements.length) {
                callback();
            }
        });
    });
}

// Start the loop after all buffers are loaded
loadAllBuffers(loop);
