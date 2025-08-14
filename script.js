 // Smooth scrolling for navigation links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(26, 26, 26, 0.98)';
    } else {
        header.style.background = 'rgba(26, 26, 26, 0.95)';
    }
});

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animated');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// Shopping cart functionality
let cartCount = 0;
const cartBtn = document.querySelector('.cart-btn');
const addToCartBtns = document.querySelectorAll('.add-to-cart');

addToCartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        cartCount++;
        cartBtn.textContent = `🛒 Carrinho (${cartCount})`;
        
        // Add animation feedback
        btn.textContent = 'Adicionado!';
        btn.style.background = '#4CAF50';
        
        setTimeout(() => {
            btn.textContent = 'Adicionar ao Carrinho';
            btn.style.background = 'var(--primary-green)';
        }, 1000);
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Initialize animations
animateOnScroll();