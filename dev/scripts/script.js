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
  const listHolder = document.querySelector('.list-holder');
  let isNavOpen = false; // Track whether the navigation is open or closed
  let prevWindowWidth = window.innerWidth; // Track the previous window width

  navOpener.addEventListener('click', function () {
    isNavOpen = !isNavOpen; // Toggle the navigation state
    updateNavState();
  });

  // Close the dropdown when clicking outside
  document.addEventListener('click', function (event) {
    if (!nav.contains(event.target) && !navOpener.contains(event.target) && !listHolder.contains(event.target)) {
      isNavOpen = false;
      updateNavState();
    }
  });

  // Prevent the dropdown from closing when clicking inside
  nav.addEventListener('click', function (event) {
    event.stopPropagation();
  });

  // Update the navigation state based on window width
  function updateNavState() {
    const windowWidth = window.innerWidth;
    if (windowWidth < 768 && prevWindowWidth >= 768) {
      // Disable transition when transitioning from tablet to mobile
      nav.style.transition = 'none';
    } else {
      // Enable transition in all other cases
      nav.style.transition = 'transform 0.5s ease';
    }

    if (windowWidth < 768 && isNavOpen) {
      nav.style.transform = 'translateY(0)'; // Open the navigation
    } else if (windowWidth >= 768 && isNavOpen) {
      nav.style.transform = 'translateY(0)'; // Keep navigation open in tablet view
    } else {
      nav.style.transform = 'translateY(-240px)'; // Close the navigation
    }

    prevWindowWidth = windowWidth; // Update the previous window width
  }

  // Call the function initially and on window resize
  updateNavState();
  window.addEventListener('resize', updateNavState);
});
