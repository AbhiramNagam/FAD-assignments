const container = document.getElementById('mainContainer');
const button = document.getElementById('toggleButton');
const stateText = document.getElementById('stateText');
let isActive = false;

function toggleState() {
    isActive = !isActive;
    if (isActive) {
        container.classList.replace('initial', 'active');
        button.classList.replace('button-initial', 'button-active');
        button.textContent = 'Deactivate';
        stateText.textContent = 'Active State';
    }
    else {
        container.classList.replace('active', 'initial');
        button.classList.replace('button-active', 'button-initial');
        button.textContent = 'Activate';
        stateText.textContent = 'Initial State';
    }
}

button.addEventListener('click', toggleState);
