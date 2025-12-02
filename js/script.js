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
        const isXmas = body.classList.contains('xmas-mode');

        // Save preference
        localStorage.setItem('theme', isLightMode ? 'light' : 'dark');

        // Update Icon (Check if Santa mode is active first!)
        if (isXmas) {
            themeBtn.textContent = '🎅';
        } else {
            themeBtn.textContent = isLightMode ? '🌙' : '☀️';
        }
    });
}

/* =========================================
   4. EASTER EGG (SOUTH HEMISPHERE XMAS)
   ========================================= */
// We select the CONTAINER to ensure clicks register easily
const giftContainer = document.querySelector('.gift-container');

if (giftContainer) {
    giftContainer.addEventListener('click', () => {
        
        // A. Hide the "Click Me" hint permanently for this session
        giftContainer.classList.add('clicked');

        // B. Toggle the Red Theme
        document.body.classList.toggle('xmas-mode');
        
        // C. Update the Main Theme Icon
        const isXmas = document.body.classList.contains('xmas-mode');
        const isLight = document.body.classList.contains('light-mode');
        
        if (isXmas) {
            // If Xmas is ON, show Santa and start rain
            if (themeBtn) themeBtn.textContent = '🎅';
            createSummerRain(); 
        } else {
            // If Xmas is OFF, revert to standard Sun/Moon
            if (themeBtn) themeBtn.textContent = isLight ? '🌙' : '☀️';
        }
    });
}

// Function to generate falling emojis
function createSummerRain() {
    const emojis = ['☀️', '🕶️', '🍦', '🏄', '🎄', '🎁'];
    
    // Create 50 falling elements
    for (let i = 0; i < 50; i++) {
        const drop = document.createElement('div');
        drop.classList.add('summer-rain');
        drop.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Randomize position (0-100vw) and speed (2-5s)
        drop.style.left = Math.random() * 100 + 'vw';
        drop.style.animationDuration = Math.random() * 2 + 3 + 's'; 
        drop.style.fontSize = Math.random() * 1.5 + 1 + 'rem';
        
        document.body.appendChild(drop);
        
        // Cleanup: Remove element from DOM after animation finishes
        setTimeout(() => {
            drop.remove();
        }, 5000);
    }
}