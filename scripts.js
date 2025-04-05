
const hoverBtn = document.getElementById('hover-btn');
const mouseMessage = document.getElementById('mouse-message');

hoverBtn.addEventListener('mouseover', () => {
    mouseMessage.textContent = 'You are hovering over the button!';
});

hoverBtn.addEventListener('mouseleave', () => {
    mouseMessage.textContent = 'You left the button!';
});

const keyboardInput = document.getElementById('keyboard-input');
const keyPressed = document.getElementById('key-pressed');

keyboardInput.addEventListener('keyup', (event) => {
    keyPressed.textContent = `Last key pressed: ${event.key}`;
});


const form = document.getElementById('submit-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    formMessage.textContent = `Form submitted! You entered: ${document.getElementById('form-input').value}`;
});


const focusInput = document.getElementById('focus-input');
const focusMessage = document.getElementById('focus-message');

focusInput.addEventListener('focus', () => {
    focusMessage.textContent = 'Input is focused!';
});

focusInput.addEventListener('blur', () => {
    focusMessage.textContent = 'Input lost focus!';
});


const buttonContainer = document.getElementById('button-container');
const delegationMessage = document.getElementById('delegation-message');

buttonContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        delegationMessage.textContent = `You clicked ${event.target.textContent}`;
    }
});
