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
// Tab functionality
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');

        // Remove active class from all buttons and panes
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(pane => {
            // Ensure all panes are hidden
            pane.classList.remove('active');
            pane.style.opacity = 0;
        });

        // Add active class to the clicked button and corresponding pane
        this.classList.add('active');
        const activePane = document.getElementById(tabId);
        activePane.classList.add('active');
        // Trigger reflow to apply opacity transition
        activePane.offsetHeight; // Trigger a reflow
        activePane.style.opacity = 1;
    });
});