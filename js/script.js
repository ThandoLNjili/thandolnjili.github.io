// 1. Mobile Menu Logic
const menuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.desktop-nav');

// Toggle the 'active' class when the hamburger is clicked
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close the menu when a link is clicked (UX improvement)
navLinks.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});

// 2. Dynamic Year in Footer
const yearSpan = document.getElementById('current-year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}