// Navigation functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Navbar height
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling
const signupForm = document.getElementById('signupForm');
const successMessage = document.getElementById('successMessage');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        company: document.getElementById('company').value,
        industry: document.getElementById('industry').value,
        idea: document.getElementById('idea').value,
        timestamp: new Date().toISOString()
    };

    // Validate form
    if (!formData.name || !formData.email || !formData.industry || !formData.idea) {
        alert('Please fill in all required fields');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Disable submit button
    const submitButton = signupForm.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.innerHTML = '<span>Submitting...</span><span class="btn-icon">⏳</span>';

    // Simulate form submission (in production, this would be an API call)
    try {
        // Simulating API call with timeout
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Log form data to console (in production, send to backend)
        console.log('Form submitted:', formData);

        // Store in localStorage as a simple demo
        const submissions = JSON.parse(localStorage.getItem('atlantis-submissions') || '[]');
        submissions.push(formData);
        localStorage.setItem('atlantis-submissions', JSON.stringify(submissions));

        // Show success message
        signupForm.style.display = 'none';
        successMessage.style.display = 'block';

        // Confetti effect (simple celebration)
        createConfetti();

        // Track conversion (in production, integrate with analytics)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'conversion', {
                'event_category': 'signup',
                'event_label': 'free_mvp_signup'
            });
        }

    } catch (error) {
        console.error('Form submission error:', error);
        alert('There was an error submitting the form. Please try again.');
        submitButton.disabled = false;
        submitButton.innerHTML = '<span>Submit Application</span><span class="btn-icon">✨</span>';
    }
});

// Simple confetti effect
function createConfetti() {
    const colors = ['#667eea', '#764ba2', '#00f2fe', '#f5576c', '#43e97b'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.opacity = '1';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        document.body.appendChild(confetti);

        const duration = Math.random() * 3 + 2;
        const fallDistance = Math.random() * 100 + window.innerHeight;
        const rotation = Math.random() * 360;
        const horizontalMovement = (Math.random() - 0.5) * 200;

        confetti.animate([
            {
                transform: `translate(0, 0) rotate(0deg)`,
                opacity: 1
            },
            {
                transform: `translate(${horizontalMovement}px, ${fallDistance}px) rotate(${rotation}deg)`,
                opacity: 0
            }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });

        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .step, .offer-card, .benefit');
    animatedElements.forEach(el => observer.observe(el));
});

// Counter animation for stats (if you want to add stats later)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = Math.round(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.round(start);
        }
    }, 16);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
        heroVisual.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add dynamic greeting based on time of day
function setDynamicGreeting() {
    const hour = new Date().getHours();
    let greeting = 'Ready to Transform Your Idea?';

    if (hour < 12) {
        greeting = 'Good Morning! Ready to Transform Your Idea?';
    } else if (hour < 18) {
        greeting = 'Good Afternoon! Ready to Transform Your Idea?';
    } else {
        greeting = 'Good Evening! Ready to Transform Your Idea?';
    }

    const signupTitle = document.querySelector('.signup-title');
    if (signupTitle && window.innerWidth > 768) {
        signupTitle.textContent = greeting;
    }
}

// Call on page load
setDynamicGreeting();

// Add cursor trail effect (optional, can be removed if too much)
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Smooth cursor trail
function animateCursor() {
    const speed = 0.1;
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;
    requestAnimationFrame(animateCursor);
}

// Only run cursor trail on desktop
if (window.innerWidth > 768) {
    animateCursor();
}

// Add hover effect to cards
const cards = document.querySelectorAll('.feature-card, .floating-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Countdown timer for urgency (optional)
function startCountdown() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7); // 7 days from now

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        // Update urgency text if element exists
        const urgencyElement = document.querySelector('.offer-urgency');
        if (urgencyElement && days >= 0) {
            urgencyElement.textContent = `⏰ Offer ends in ${days}d ${hours}h ${minutes}m`;
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 60000); // Update every minute
}

// Start countdown
startCountdown();

// Performance optimization - Lazy load images (if you add images later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
}

// Handle form input animations
const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
});

// Add to localStorage for demo purposes - view submissions
window.viewSubmissions = function() {
    const submissions = JSON.parse(localStorage.getItem('atlantis-submissions') || '[]');
    console.table(submissions);
    return submissions;
};

// Clear submissions (for demo)
window.clearSubmissions = function() {
    localStorage.removeItem('atlantis-submissions');
    console.log('Submissions cleared');
};

console.log('%c🌊 Atlantis.AI Website Loaded Successfully!', 'color: #667eea; font-size: 16px; font-weight: bold;');
console.log('%cTo view form submissions, type: viewSubmissions()', 'color: #764ba2; font-size: 12px;');
console.log('%cTo clear submissions, type: clearSubmissions()', 'color: #764ba2; font-size: 12px;');
