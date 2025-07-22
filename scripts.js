const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href === "#") {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
        navLinks.classList.remove('active');
    });
});

window.addEventListener('scroll', () => {
    const scrollIndicator = document.getElementById('scrollIndicator');
    const scrollTop = window.pageYOffset;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop / documentHeight) * 100;
    scrollIndicator.style.transform = `scaleX(${scrollPercentage / 100})`;
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 1s ease forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card, .timeline-item, .project-card, .contact-item').forEach(el => {
    observer.observe(el);
});

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.width = particle.style.height = Math.random() * 4 + 2 + 'px';
    particle.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 5000);
}

setInterval(createParticle, 300);

setInterval(() => {
    const typewriter = document.querySelector('.typewriter');
    typewriter.style.animation = 'none';
    setTimeout(() => {
        typewriter.style.animation = 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite';
    }, 100);
}, 10000);

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.');
});

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        shape.style.transform = `translateY(${scrollTop * speed}px) rotate(${scrollTop * 0.1}deg)`;
    });
});

const currentHour = new Date().getHours();
let greeting = "Welcome to My World";

if (currentHour < 12) {
    greeting = "Good Morning! Welcome to My World";
} else if (currentHour < 18) {
    greeting = "Good Afternoon! Welcome to My World";
} else {
    greeting = "Good Evening! Welcome to My World";
}

document.querySelector('.hero h1').textContent = greeting;

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);
});