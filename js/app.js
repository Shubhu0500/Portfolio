// $(document).ready(function () {
//   $('.slider').slick({
//     arrows: false,
//     dots: true,
//     appendDots: '.slider-dots',
//     dotsClass: 'dots',
//   });

const hamberger = document.querySelector('.hamberger');
const times = document.querySelector('.times');
const mobileNav = document.querySelector('.mobile-nav');
const navLinks = document.querySelectorAll('.nav-link');

hamberger.addEventListener('click', function () {
  mobileNav.classList.add('open');
});

times.addEventListener('click', function () {
  mobileNav.classList.remove('open');
});
// });
// function openMobileNav() {
//   mobileNav.style.display = 'block';
// }

// function closeMobileNav() {
//   mobileNav.style.display = 'none'; // Hide the mobile navigation
// }

// closeButton.addEventListener('click', closeMobileNav);

// // Add event listeners to each link to close the mobile nav when clicked
// navLinks.forEach((link) => {
//   link.addEventListener('click', function (event) {
//     closeMobileNav(); // Close the navigation when a link is clicked
//   });
// });
