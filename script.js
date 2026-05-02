// Basic JavaScript Script

// DOM ready function
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded!');
    
    // Your code here

const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

});
const cursor = document.getElementById('custom-cursor');
const cursorDefault = document.getElementById('cursor-default');
const cursorHover = document.getElementById('cursor-hover');
const prodFrames = document.querySelectorAll('.prodFrame');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

prodFrames.forEach(frame => {
    frame.addEventListener('mouseenter', () => {
        cursorDefault.style.display = 'none';
        cursorHover.textContent = frame.dataset.cursor;
        cursorHover.style.display = 'block';
        setTimeout(() => cursorHover.style.opacity = '1', 10);
    });

    frame.addEventListener('mouseleave', () => {
        cursorHover.style.opacity = '0';
        setTimeout(() => {
            cursorHover.style.display = 'none';
            cursorDefault.style.display = 'block';
        }, 200);
    });
});
const track = document.querySelector('.carouselTrack');
const slides = document.querySelectorAll('.carouselSlide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let startY = 0;

function goToSlide(index) {
    if (index < 0 || index >= slides.length) return;
    currentIndex = index;
    const h = slides[0].offsetHeight;
    track.style.transform = `translateY(-${currentIndex * h}px)`;
    dots.forEach(d => d.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

track.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
});

track.addEventListener('touchend', (e) => {
    const diff = startY - e.changedTouches[0].clientY;
    if (diff > 50) goToSlide(currentIndex + 1);
    if (diff < -50) goToSlide(currentIndex - 1);
});

document.getElementById('aboutCarousel').addEventListener('wheel', (e) => {
    e.preventDefault();
    if (e.deltaY > 0) goToSlide(currentIndex + 1);
    if (e.deltaY < 0) goToSlide(currentIndex - 1);
}, { passive: false });

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => goToSlide(i));
});
let isScrolling = false;

document.getElementById('aboutCarousel').addEventListener('wheel', (e) => {
    e.preventDefault();
    if (isScrolling) return;
    isScrolling = true;

    if (e.deltaY > 0) goToSlide(currentIndex + 1);
    if (e.deltaY < 0) goToSlide(currentIndex - 1);

    setTimeout(() => {
        isScrolling = false;
    }, 600); // matches the transition duration
}, { passive: false });

// Example usage
greet('Developer');