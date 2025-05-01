
let progress = 0;
let terminalText = document.getElementById("terminalText");
let progressBar = document.getElementById("progress-bar");
let statusText = document.getElementById("status");

const terminalMessages = [
    "Initializing system...\n",
    "Bypassing security protocols...\n",
    "Decrypting files...\n",
    "Hacking mainframe...\n",
    "Unlocking resources...\n",
    "Running diagnostic tests...\n",
    "System breach imminent...\n"
];

const randomMessages = [
    "Scanning network...\n",
    "Bypassing security firewalls...\n",
    "Hacking in progress...\n",
    "Attempting to break through...\n",
    "Decrypting data...\n"
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
            document.getElementById("skull-img").src = "skull-hacked.png"; // Change skull image once hack is complete
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
