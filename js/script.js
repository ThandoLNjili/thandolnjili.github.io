// 1. Select elements
const menuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.desktop-nav');

// 2. Main Toggle Function
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Check if the menu is NOW open
    const isOpen = navLinks.classList.contains('active');
    
    // Swap the icon text based on state
    // '✕' is a multiplication sign (looks cleaner than letter X)
    menuBtn.textContent = isOpen ? '✕' : '☰';
});

// 3. Close Menu When Link Clicked (UX Improvement)
navLinks.addEventListener('click', () => {
    // If the menu is open, close it
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        
        // IMPORTANT: Reset the icon back to Hamburger!
        menuBtn.textContent = '☰';
    }
});

// 4. Dynamic Year in Footer
const yearSpan = document.getElementById('current-year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// 5. Theme Toggle Logic (Keep your existing dark mode logic below)
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeBtn.textContent = '🌙';
}

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLightMode = body.classList.contains('light-mode');
        
        if (isLightMode) {
            themeBtn.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        } else {
            themeBtn.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        }
    });
}