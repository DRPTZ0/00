// Calendar Code
function generateCalendar() {
    let date = new Date();
    let month = date.getMonth(); // current month
    let year = date.getFullYear(); // current year

    // Days of the week array
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Set the first day of the month
    date.setDate(1);

    // Get the first day of the month (0 - 6)
    let firstDay = date.getDay();

    // Get the number of days in the month
    let daysInMonth = new Date(year, month + 1, 0).getDate();

    // Create the calendar HTML structure
    let calendarHTML = "<h3>" + date.toLocaleString('default', { month: 'long' }) + " " + year + "</h3>";
    calendarHTML += "<table><thead><tr>";

    // Add days of the week to the header
    for (let i = 0; i < 7; i++) {
        calendarHTML += "<th>" + daysOfWeek[i] + "</th>";
    }
    calendarHTML += "</tr></thead><tbody><tr>";

    // Add blank cells for the first row if the month doesn't start on Sunday
    for (let i = 0; i < firstDay; i++) {
        calendarHTML += "<td></td>";
    }

    // Fill in the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        if ((firstDay + day - 1) % 7 === 0 && day !== 1) {
            calendarHTML += "</tr><tr>";
        }
        calendarHTML += "<td>" + day + "</td>";
    }

    // Close the calendar table
    calendarHTML += "</tr></tbody></table>";

    // Display the calendar on the page
    document.getElementById('calendar').innerHTML = calendarHTML;
}

// Call the function to generate the calendar when the page loads
generateCalendar();
// Terminal typing simulation
const terminal = document.getElementById("terminalText");
const status = document.getElementById("status");
const progressBar = document.getElementById("progress-bar");

let lines = [
  "Initializing hack protocol...",
  "Bypassing firewall...",
  "Accessing secure server...",
  "Extracting data...",
  "Upload complete. Logging out..."
];

let i = 0;
function typeLine() {
    if (i < lines.length) {
        terminal.textContent += lines[i] + "\n";
        status.textContent = lines[i];
        i++;
        setTimeout(typeLine, 1000);
    }
}
typeLine();

// Animate Progress Bar
let progress = 0;
function animateProgress() {
    if (progress <= 100) {
        progressBar.style.width = progress + "%";
        progress++;
        setTimeout(animateProgress, 100);
    }
}
animateProgress();
