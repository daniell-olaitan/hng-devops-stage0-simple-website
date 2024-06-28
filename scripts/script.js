// DOM elements
const nameInput = document.getElementById('name-input');
const greetButton = document.getElementById('greet-button');
const greetingDisplay = document.getElementById('greeting-display');
const footerParagraph = document.getElementById('footer')

const currentYear = new Date().getFullYear();

// Display the current year
document.getElementById('current-year').textContent = currentYear;

// Event listener for the greet button
greetButton.addEventListener('click', () => {
    const name = nameInput.value.trim();

    if (name) {
        const greeting = `Hello, ${name}! Welcome to my website.`;
        greetingDisplay.textContent = greeting;
    } else {
        greetingDisplay.textContent = 'Please enter your name.';
    }
});
