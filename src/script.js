document.addEventListener('DOMContentLoaded', () => {

  // AOS Initialization
  AOS.init();

  // Typing Effect
  const typedTextSpan = document.querySelector("#typed-name");
  const textArray = ["Bashar Matar"];
  const typingDelay = 200;
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
      if (charIndex < textArray[textArrayIndex].length) {
          typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
          charIndex++;
          setTimeout(type, typingDelay);
      }
  }
  setTimeout(type, typingDelay + 250);

  // Mobile Menu Toggle
  const menuButton = document.querySelector('header button');
  const mobileMenu = document.getElementById('mobile-menu');

  menuButton.addEventListener('click', () => {
      const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', !isExpanded);

      if (!isExpanded) {
          mobileMenu.classList.remove('hidden'); // Ensure menu is visible
          mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px";
          mobileMenu.classList.add('open'); // Trigger the opening animation
      } else {
          mobileMenu.style.maxHeight = '0'; // Begin closing animation by setting max-height to 0
          mobileMenu.addEventListener('transitionend', () => {
              mobileMenu.classList.add('hidden'); // Hide the menu after the transition completes
          }, { once: true });
          mobileMenu.classList.remove('open'); // Remove 'open' class to reverse the animation
      }
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (mobileMenu.classList.contains('open') && e.target !== menuButton && !menuButton.contains(e.target) && e.target !== mobileMenu && !mobileMenu.contains(e.target)) {
        mobileMenu.style.maxHeight = '0';
        mobileMenu.addEventListener('transitionend', () => {
            mobileMenu.classList.add('hidden');
        }, { once: true });
        mobileMenu.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
    }
});

  // Dynamic Year Update
  document.getElementById('year').textContent = new Date().getFullYear();
});

// Header Background Change on Scroll
window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  // Change background color when scrolled
  if (window.scrollY > 0) {
      header.classList.add('bg-black');
      header.classList.remove('bg-transparent');
      header.style.transition = 'background-color 0.6s'; // Smooth transition for the background color
  } else {
      header.classList.add('bg-transparent');
      header.classList.remove('bg-black');
  }
});
