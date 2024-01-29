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