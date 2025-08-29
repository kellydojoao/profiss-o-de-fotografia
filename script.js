document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Obtém os valores do formulário
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Exibe uma mensagem de confirmação no console
        console.log('Formulário enviado com sucesso!');
        console.log('Nome:', name);
        console.log('E-mail:', email);
        console.log('Mensagem:', message);

        alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');

        // Limpa o formulário após o envio
        contactForm.reset();
    });
});