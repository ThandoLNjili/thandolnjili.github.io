/* =========================================
   1. MOBILE NAVIGATION LOGIC
   ========================================= */
const menuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.desktop-nav');

// Toggle Menu on Hamburger Click
if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Check if open to swap icon
        const isOpen = navLinks.classList.contains('active');
        // Swap between Hamburger (☰) and Close (✕)
        menuBtn.textContent = isOpen ? '✕' : '☰';
    });
}

// Close Menu when a Link is clicked (UX Improvement)
if (navLinks) {
    navLinks.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            // Reset icon back to Hamburger
            menuBtn.textContent = '☰';
        }
    });
}

/* =========================================
   2. DYNAMIC FOOTER YEAR
   ========================================= */
const yearSpan = document.getElementById('current-year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

/* =========================================
   3. THEME TOGGLE (DARK / LIGHT MODE)
   ========================================= */
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check LocalStorage for saved preference
const savedTheme = localStorage.getItem('theme');

// Apply saved theme on load
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    if (themeBtn) themeBtn.textContent = '🌙'; // Switch icon to Moon
}

// Toggle Logic
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        const isLightMode = body.classList.contains('light-mode');

        // Save preference
        localStorage.setItem('theme', isLightMode ? 'light' : 'dark');

        // Update Icon
        themeBtn.textContent = isLightMode ? '🌙' : '☀️';
    });
}

