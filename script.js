<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hacking Simulation</title>
    <style>
        body {
            background-color: #111;
            color: #00FF00;
            font-family: 'Courier New', monospace;
            margin: 0;
            padding: 0;
            overflow: hidden;
            position: relative;
        }

        .message {
            position: absolute;
            color: #00FF00;
            font-size: 16px;
            animation: blink 1s linear infinite;
        }

        .shapes {
            position: absolute;
            animation: moveShapes 5s linear infinite;
        }

        @keyframes blink {
            50% {
                opacity: 0;
            }
        }

        @keyframes moveShapes {
            0% {
                transform: translate(0, 0);
            }
            50% {
                transform: translate(50px, 50px);
            }
            100% {
                transform: translate(0, 0);
            }
        }

        .circle {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #00FF00;
            position: absolute;
        }

        .square {
            width: 20px;
            height: 20px;
            background-color: #00FF00;
            position: absolute;
        }

        .triangle {
            width: 0;
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 20px solid #00FF00;
            position: absolute;
        }

        .message-area {
            position: absolute;
            top: 10px;
            left: 10px;
            width: 100%;
        }

    </style>
</head>
<body>
    <div id="message-area" class="message-area"></div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const messageArea = document.getElementById('message-area');
            const messages = [
                "Hacking system files...",
                "Bypassing encryption...",
                "Accessing camera feed...",
                "Disabling firewall...",
                "Cracking passwords...",
                "Hijacking network traffic...",
                "Decrypting data packets...",
                "Overriding security protocols...",
                "Extracting sensitive data...",
                "Accessing microphone...",
                "Hacking GPS location...",
                "Interfering with wireless signals...",
                "Modifying system settings...",
                "Spoofing IP address...",
                "Injecting malicious code...",
                "Manipulating user credentials...",
                "Overriding admin privileges...",
                "Injecting rootkit...",
                "Disabling antivirus...",
                "Cracking user authentication...",
                "Gaining root access...",
                "Hacking social media accounts...",
                "Infiltrating cloud storage...",
                "Uploading ransomware...",
                "Overwriting system memory...",
                "Deactivating alarms...",
                "Injecting spyware...",
                "Accessing private messages...",
                "Hacking email account...",
                "Breaching database...",
            ];

            // Display messages on the screen
            function displayMessages() {
                for (let i = 0; i < 30; i++) {
                    let message = document.createElement('div');
                    message.classList.add('message');
                    message.style.top = `${Math.random() * window.innerHeight}px`;
                    message.style.left = `${Math.random() * window.innerWidth}px`;
                    message.textContent = messages[Math.floor(Math.random() * messages.length)];
                    messageArea.appendChild(message);
                }
            }

            // Generate random geometric shapes
            function generateShapes() {
                for (let i = 0; i < 30; i++) {
                    let shape = document.createElement('div');
                    let randShape = Math.floor(Math.random() * 3);
                    let randX = Math.random() * window.innerWidth;
                    let randY = Math.random() * window.innerHeight;

                    switch (randShape) {
                        case 0:
                            shape.classList.add('circle');
                            break;
                        case 1:
                            shape.classList.add('square');
                            break;
                        case 2:
                            shape.classList.add('triangle');
                            break;
                    }

                    shape.style.top = `${randY}px`;
                    shape.style.left = `${randX}px`;
                    document.body.appendChild(shape);
                }
            }

            // Run both functions
            displayMessages();
            generateShapes();
        });
    </script>
</body>
</html>
function updateDateTime() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  const date = now.toLocaleDateString();
  document.getElementById("datetime").textContent = `${date} | ${time}`;
}
setInterval(updateDateTime, 1000);
updateDateTime();
