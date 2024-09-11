//CAROUSEL SCRIPT
const images = [
    './images/CP1.jpg',
    './images/CP2.jpg',
    './images/CP3.jpg'
];

let currentIndex = 0;
const section = document.querySelector('.carousel-section');

// Function to change the background image
function changeBackground(index) {
    section.style.backgroundImage = `url(${images[index]})`;
}

// Initial background setup
changeBackground(currentIndex);

// Handle Next Button Click
document.querySelector('.next-button').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length; // Increment index
    changeBackground(currentIndex);
});

// Handle Previous Button Click
document.querySelector('.prev-button').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Decrement index
    changeBackground(currentIndex);
});

// Auto-Slide (Change image every 5 seconds)
setInterval(function() {
    currentIndex = (currentIndex + 1) % images.length;
    changeBackground(currentIndex);
}, 5000);
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


// Toggle the dropdown menu
document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('header');
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '&#9776;'; // Hamburger icon
    header.insertBefore(menuToggle, header.firstChild);

    menuToggle.addEventListener('click', function () {
        header.classList.toggle('nav-active');
    });
});