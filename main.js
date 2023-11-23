// Your custom JavaScript code can go here
// You can use this file to add interactivity to your webpage
// For example, handling user interactions, making AJAX requests, etc.

// Toggle mobile menu
document.getElementById('menu').addEventListener('click', function () {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
});

// Initialize Swiper for the review section
var swiper = new Swiper('.review-slider', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
