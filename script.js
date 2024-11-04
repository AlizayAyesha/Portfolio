function toggleMenu() {
    const navbar = document.querySelector(".dropdown");
    navbar.classList.toggle("show"); // Toggle the 'show' class
}

const text = [
    'Web Developer',
    'Frontend Developer',
    'Blogger'
];
const speed = 100;
const textElement = document.querySelector(".typewriter-text");

let textIndex = 0;
let characterIndex = 0;

function typeWriter() {
    if (characterIndex < text[textIndex].length) {
        textElement.innerHTML += text[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(() => {
            characterIndex = 0;
            textElement.innerHTML = ''; // Clear text before showing the next one
            textIndex = (textIndex + 1) % text.length; // Cycle to the next text
            typeWriter();
        }, 1500); // Delay before switching to the next text
    }
}

typeWriter(); // Call the function to start typing

(function() {
    emailjs.init("NcWH8KyRxy4Wjxzsc"); // Replace with your EmailJS user ID
})();

function sendEmail(event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target; // Get the form
    const successMessage = document.getElementById('success-message'); // Get the success message div

    emailjs.sendForm('service_akf1q8c', 'template_17slffu', form)
        .then(function() {
            successMessage.innerHTML = 'Email sent successfully!'; // Set success message
            successMessage.style.display = 'block'; // Show the message
            form.reset(); // Reset form after successful submission
        }, function(error) {
            successMessage.innerHTML = 'Failed to send email. Please try again.'; // Set error message
            successMessage.style.display = 'block'; // Show the message
        });
}
