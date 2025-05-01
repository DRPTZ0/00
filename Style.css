let progress = 0;
let terminalText = document.getElementById("terminalText");
let progressBar = document.getElementById("progress-bar");
let statusText = document.getElementById("status");

const terminalMessages = [
    "Initializing...\n",
    "Scanning...\n",
    "Bypassing security...\n",
    "Decrypting data...\n",
    "Progress: 1%\n"
];

function updateTerminal() {
    if (progress < terminalMessages.length) {
        terminalText.innerHTML += terminalMessages[progress];
    }
}

function updateProgress() {
    if (progress < 100) {
        progress++;
        progressBar.style.width = progress + "%";
        if (progress === 100) {
            statusText.textContent = "Hack Complete.";
        }
    }
}

setInterval(function() {
    updateProgress();
    updateTerminal();
}, 100);

setTimeout(function() {
    terminalText.innerHTML += "Drptz | System Override Complete.\n";
}, 3000);
