let progress = 0;
let terminalText = document.getElementById("terminalText");
let progressBar = document.getElementById("progress-bar");
let statusText = document.getElementById("status");

const terminalMessages = [
    "Initializing...\n",
    "Bypassing Firewalls...\n",
    "Decrypting Core...\n",
    "Connecting to Mainframe...\n",
    "Progress: 1%\n",
    "Running Protocols...\n",
    "Unlocking Key... Please Wait\n"
];

const randomMessages = [
    "Scanning network...\n",
    "Bypassing security measures...\n",
    "Hacking in progress...\n",
    "Decryption underway...\n",
    "Attempting to break through...\n"
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

function generateRandomMessage() {
    const randomIndex = Math.floor(Math.random() * randomMessages.length);
    terminalText.innerHTML += randomMessages[randomIndex];
}

setInterval(function() {
    updateProgress();
    updateTerminal();
    if (progress % 10 === 0 && progress < 100) {
        generateRandomMessage();
    }
}, 100);

setTimeout(function() {
    terminalText.innerHTML += "Drptz | System Override Complete.\n";
}, 4000);
