// Loader functionality
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader-wrapper');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 300);
    }, 1000);
});

function sendToWhatsApp(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const formattedMessage = 
        `*DM from ${name} to your portfolio*%0A
        *From:* ${name}%0A
        *Email:* ${email}%0A
        *Subject:* ${subject}%0A
        *Message:* ${message}`
    const phoneNumber = '+918592020391';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${formattedMessage}`;
    window.open(whatsappURL, '_blank');
    document.getElementById('contactForm').reset();
}