document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Mensagem enviada com sucesso!');
        contactForm.reset();
    });
});
