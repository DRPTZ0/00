document.addEventListener('DOMContentLoaded', function() {
    const outputElement = document.getElementById('output');
    const progressBarFilled = document.getElementById('progressBarFilled');
    const quoteElement = document.getElementById('quote');
    const salutationElement = document.getElementById('salutation');
    const cursorElement = document.querySelector('.blinking-cursor');
    
    let progress = 0;
    
    // لیست آیات قرآن برای نمایش تصادفی
    const quranVerses = [
        "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
        "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
        "قُلْ هُوَ اللَّهُ أَحَدٌ",
        "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ"
    ];

    const salutationMessage = "صلوات بر پیامبر و اهل بیتش";

    // Function to simulate the hacking progress
    function simulateHacking() {
        let interval = setInterval(() => {
            progress += 1;
            progressBarFilled.style.width = `${progress}%`;
            outputElement.textContent = `Hacking in progress... ${progress}% completed`;

            if (progress === 100) {
                clearInterval(interval);
                setTimeout(showQuote, 2000);
            }
        }, 100);
    }

    // Function to show a random Quranic quote
    function showQuote() {
        outputElement.textContent = "";
        const randomIndex = Math.floor(Math.random() * quranVerses.length);
        const randomQuote = quranVerses[randomIndex];
        quoteElement.textContent = randomQuote;
        setTimeout(showSalutation, 5000);
    }

    // Function to show the salutation after the quote
    function showSalutation() {
        salutationElement.textContent = salutationMessage;
    }

    // Start the simulation
    simulateHacking();
});
