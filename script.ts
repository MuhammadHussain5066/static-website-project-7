const contactForm = document.getElementById('contactForm') as HTMLFormElement;
const message = document.getElementById('message') as HTMLParagraphElement;

contactForm.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;

    message.textContent = `Thank you, ${name}! We will contact you at ${email}.`;
});
