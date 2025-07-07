// Мобильное меню
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

// Плавная прокрутка с учетом шапки
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if(this.getAttribute('href') !== '#') {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if(target) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                
                window.scrollTo({
                    top: targetPosition - headerHeight - 20, // Дополнительный отступ
                    behavior: 'smooth'
                });
                
                // Закрываем мобильное меню после клика
                document.querySelector('nav').classList.remove('active');
            }
        }
    });
});

// Инициализация карточек ароматов
document.addEventListener('DOMContentLoaded', function() {
    const scentCards = document.querySelectorAll('.scent-card');
    
    // Добавляем задержку для анимации появления
    setTimeout(() => {
        scentCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 200 * index);
        });
    }, 300);
});

// Инициализация карточек ароматов
document.addEventListener('DOMContentLoaded', function() {
    const scentCards = document.querySelectorAll('.scent-card');
    
    // Добавляем задержку для анимации появления
    setTimeout(() => {
        scentCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 200 * index);
        });
    }, 300);
});

// Параллакс эффект для героя
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        heroBg.style.transform = `translateY(${scrollY * 0.3}px)`;
    }
});