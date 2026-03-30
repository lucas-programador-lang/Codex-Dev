// Inicializar Ícones Lucide
lucide.createIcons();

// Função de Reveal Scroll
const observerOptions = { threshold: 0.1 };

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.section-reveal').forEach(el => revealObserver.observe(el));

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if(targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
