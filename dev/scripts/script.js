// Write your JavaScript here...
// Initialize Slick slider
$(document).ready(function(){
  $('.slideset').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false,  // Hide arrows
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Set autoplay speed to 5000 milliseconds (5 seconds)
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navOpener = document.querySelector('.nav-opener');
  const nav = document.getElementById('nav');
  const listHolder = document.querySelector('.list-holder'); // Add this line

  navOpener.addEventListener('click', function () {
    this.classList.toggle('open'); // Add a class for hamburger animation
    nav.classList.toggle('nav-active');
    listHolder.classList.toggle('active'); // Add this line
  });

  // Close the dropdown when clicking outside
  document.addEventListener('click', function (event) {
    if (!nav.contains(event.target) && !navOpener.contains(event.target)) {
      nav.classList.remove('nav-active');
      navOpener.classList.remove('open');
      listHolder.classList.remove('active'); // Add this line
    }
  });

  // Prevent the dropdown from closing when clicking inside
  nav.addEventListener('click', function (event) {
    event.stopPropagation();
  });
});
