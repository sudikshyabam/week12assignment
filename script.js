// --- Week 10: Prompts & Time-based Greeting ---
const currentHour = new Date().getHours();
let timeGreeting;

if (currentHour < 12) {
    timeGreeting = "Good morning";
} else if (currentHour < 18) {
    timeGreeting = "Good afternoon";
} else {
    timeGreeting = "Good evening";
}

let userName = prompt("What is your name?");
console.log(`${timeGreeting}, ${userName}!`);

let birthYear = prompt("What is your birth year?");
let age = 2026 - Number(birthYear);
let daysLived = age * 365;
console.log(`You have lived for approximately ${daysLived} days!`);

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// --- Week 11: DOM Selection & Dynamic Event Handling ---
const themeToggleBtn = document.querySelector("#theme-toggle");

if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeToggleBtn.textContent = "🌙 Dark Mode";
        } else {
            themeToggleBtn.textContent = "☀️ Light Mode";
        }
    });
}

// --- Week 12: Step 1 - Hobby List Rendering (Required) ---
const hobbies = ['Photography', 'Skiing', 'Piano', 'Cooking'];
const listContainer = document.getElementById('hobby-list');

if (listContainer) {
    const ul = document.createElement('ul');

    for (let i = 0; i < hobbies.length; i++) {
        const li = document.createElement('li');
        li.textContent = hobbies[i];
        ul.appendChild(li);
    }

    listContainer.appendChild(ul);
}

// --- Week 12: Step 2 - Hobby Gallery (Extension) ---
const galleryImages = [
    'https://picsum.photos/id/1015/300/200',
    'https://picsum.photos/id/1025/300/200',
    'https://picsum.photos/id/1069/300/200'
];

let currentIndex = 0;

const galleryImg = document.getElementById('gallery-img');
const nextBtn = document.getElementById('next-btn');

if (nextBtn && galleryImg) {
    nextBtn.addEventListener('click', function () {
        currentIndex++;

        // Reset to index 0 when reaching the end to prevent undefined errors
        if (currentIndex >= galleryImages.length) {
            currentIndex = 0;
        }

        galleryImg.src = galleryImages[currentIndex];
    });
}