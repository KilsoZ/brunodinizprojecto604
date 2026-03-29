document.addEventListener("DOMContentLoaded", () => {

    // Seleciona elementos animáveis em todas as páginas que quero que tenham animação de scroll
    const items = document.querySelectorAll(
        ".card, .timeline-item, .tech-grid span, .cert-link, .projeto"
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.5 });

    items.forEach(item => observer.observe(item));
});
