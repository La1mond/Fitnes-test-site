document.addEventListener("DOMContentLoaded", function() {
    // Плавная прокрутка
    document.querySelectorAll('.nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Анимация при прокрутке
    const sections = document.querySelectorAll('.about, .services, .contact');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
            }
        });
    });
    sections.forEach(section => {
        observer.observe(section);
    });

    // Изменение фона header при прокрутке
    const header = document.querySelector(".header");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
            }
        });
    });
    sections.forEach(section => {
        observer.observe(section);
    });

    // Изменение фона header при прокрутке
    const header = document.querySelector(".header");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});