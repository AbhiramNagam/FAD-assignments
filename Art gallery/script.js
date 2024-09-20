// JavaScript for dynamic typing effect
const messages = ["Discover Art", "Explore Creativity", "Unleash Your Imagination"];
let index = 0;
let charIndex = 0;

function type() {
    if (charIndex < messages[index].length) {
        document.getElementById("dynamic-text").innerHTML += messages[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Adjust typing speed here
    } else {
        setTimeout(() => {
            erase();
        }, 2000); // Time before erasing
    }
}

function erase() {
    if (charIndex > 0) {
        document.getElementById("dynamic-text").innerHTML = messages[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 100); // Adjust erasing speed here
    } else {
        index = (index + 1) % messages.length; // Cycle through messages
        setTimeout(type, 500); // Time before starting to type again
    }
}

document.addEventListener("DOMContentLoaded", type); // Start typing when DOM is loaded
