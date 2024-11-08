"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const contactForm = document.getElementById('contactForm');
const message = document.getElementById('message');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    message.textContent = `Thank you, ${name}! We will contact you at ${email}.`;
});
