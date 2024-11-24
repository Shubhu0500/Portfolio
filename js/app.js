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

document.addEventListener('DOMContentLoaded', () => {
  const skillRings = document.querySelectorAll('.circle');

  skillRings.forEach((ring) => {
    const percentage = parseInt(ring.querySelector('span').innerText, 10); // Get percentage from span text
    let currentPercent = 0; // Start from 0
    const interval = setInterval(() => {
      if (currentPercent <= percentage) {
        ring.style.background = `conic-gradient(
          var(--primary) ${currentPercent}%,
          var(--light) ${currentPercent}% 100%
        )`;
        currentPercent++;
      } else {
        clearInterval(interval); // Stop the animation when it reaches the percentage
      }
    }, 10); // Speed of the animation (adjust as needed)
  });
});

document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.mobile-nav').classList.remove('open');
  });
});

document.querySelector('.times').addEventListener('click', () => {
  document.querySelector('.mobile-nav').classList.remove('open');
});

document.querySelector('.hamberger').addEventListener('click', () => {
  document.querySelector('.mobile-nav').classList.add('open');
});
