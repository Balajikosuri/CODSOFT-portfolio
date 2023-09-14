const textToType = "I'm a Software Web Developer";
let charIndex = 0;
const typingTextElement = document.getElementById("typing-text");

function typeText() {
    if (charIndex < textToType.length) {
        typingTextElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100); // Add a new letter every 100 milliseconds (0.1 seconds)
    } else {
        // Typing effect completed, reset and start again
        setTimeout(resetAndType, 2000); // Wait for 2 seconds before resetting
    }
}

function resetAndType() {
    charIndex = 0;
    typingTextElement.textContent = "";
    typeText(); // Start the typing effect again
}

// Start the typing effect when the page loads
window.onload = function() {
    typeText();
};