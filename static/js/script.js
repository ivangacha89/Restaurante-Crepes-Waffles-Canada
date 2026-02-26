/*
 * script.js
 * Contiene la lógica de interacción del lado del cliente:
 *  - animaciones cuando los elementos aparecen en pantalla
 *  - utilidades de efectos visuales
 */

// Animación de elementos al desplazarse
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Aplicar observador a elementos específicos
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.feature-card, .menu-item, .info-item, .hours');
    elements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
});

// Agregar animación fadeInUp al CSS si no existe
if (!document.querySelector('style[data-fade]')) {
    const style = document.createElement('style');
    style.setAttribute('data-fade', 'true');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

