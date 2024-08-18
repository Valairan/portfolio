// scripts.js

document.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Calculate the target scroll position
        const targetRect = targetSection.getBoundingClientRect();
        const offset = window.pageYOffset || document.documentElement.scrollTop;
        const targetPosition = targetRect.top + offset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

window.addEventListener("scroll", function() {
    const sections = document.querySelectorAll(".section");
    const dots = document.querySelectorAll(".dot");

    let currentIndex = -1;

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentIndex = index;
        }
    });

    if (currentIndex !== -1) {
        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentIndex].classList.add("active");
    }
});
