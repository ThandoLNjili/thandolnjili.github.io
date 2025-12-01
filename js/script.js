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

/* --- THEME TOGGLE LOGIC --- */
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

// 1. Check if user already has a saved preference
const savedTheme = localStorage.getItem('theme');

// If they saved 'light', apply it immediately on load
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeBtn.textContent = '🌙'; // Change icon to moon
}

// 2. Listen for click
themeBtn.addEventListener('click', () => {
    // Toggle the class
    body.classList.toggle('light-mode');
    
    // Check if we are now in light mode
    const isLightMode = body.classList.contains('light-mode');
    
    // Update the icon and save to memory
    if (isLightMode) {
        themeBtn.textContent = '⏾'; // Show Moon (to switch back to dark)
        localStorage.setItem('theme', 'light');
    } else {
        themeBtn.textContent = '☀︎'; // Show Sun (to switch to light)
        localStorage.setItem('theme', 'dark');
    }
});