// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Animate hamburger to X
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans.forEach(span => {
                span.classList.toggle('active');
            });
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.mobile-menu-btn') && !event.target.closest('.nav-links')) {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                
                // Reset hamburger icon
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans.forEach(span => {
                    span.classList.remove('active');
                });
            }
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    
                    // Reset hamburger icon
                    const spans = mobileMenuBtn.querySelectorAll('span');
                    spans.forEach(span => {
                        span.classList.remove('active');
                    });
                }
            }
        });
    });
    
    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navItems = document.querySelectorAll('.nav-links a');
    
    navItems.forEach(item => {
        const itemHref = item.getAttribute('href');
        if (itemHref === currentPage || (currentPage === '' && itemHref === 'index.html')) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // Lazy load images for better performance
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
    
    // Add animation on scroll
    if ('IntersectionObserver' in window) {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        const animationObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    animationObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        animatedElements.forEach(element => {
            animationObserver.observe(element);
        });
    }
});
