// Quantum Animation JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Create quantum particles
    const particlesContainer = document.querySelector('.quantum-particles-container');
    if (particlesContainer) {
        createQuantumParticles(particlesContainer, 30);
    }
    
    // Initialize animations
    initializeQuantumAnimations();
});

// Create random quantum particles
function createQuantumParticles(container, count) {
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.classList.add('quantum-particle');
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 5 + 3;
        
        // Random animation
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        particle.style.animation = `wave ${duration}s ease-in-out ${delay}s infinite alternate`;
        
        container.appendChild(particle);
    }
}

// Initialize quantum animations
function initializeQuantumAnimations() {
    // Add any dynamic animation behavior here
    const heroLogo = document.querySelector('.hero-image img');
    if (heroLogo) {
        heroLogo.addEventListener('mouseover', function() {
            this.style.animationDuration = '1.5s';
        });
        
        heroLogo.addEventListener('mouseout', function() {
            this.style.animationDuration = '3s';
        });
    }
}
