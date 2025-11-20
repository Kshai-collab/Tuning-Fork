// Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    
    // Animate Links (Optional fade in)
    const links = document.querySelectorAll('.nav-links li');
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Hamburger Animation
    hamburger.classList.toggle('toggle');
});

// Add animation for nav links in CSS (insert this into style.css if you want the fade effect)
/* 
@keyframes navLinkFade {
    from { opacity: 0; transform: translateX(50px); }
    to { opacity: 1; transform: translateX(0); }
}
*/
// --- SPECIAL ORDERS FORM HANDLING ---

const specialForm = document.getElementById('special-order-form');
const modal = document.getElementById('success-modal');
const closeModalBtn = document.getElementById('close-modal-btn');

if (specialForm) {
    specialForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual submission

        // In a real backend, you would send the data here.
        // For now, we simulate a success message.
        
        // Show Modal
        modal.style.display = "flex";
        
        // Clear Form
        specialForm.reset();
    });
}

// Close Modal Actions
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });
}

// Close modal if clicking outside content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
