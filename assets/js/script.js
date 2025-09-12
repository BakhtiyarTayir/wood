// Простая интерактивность для демонстрации
document.addEventListener('DOMContentLoaded', function() {
    console.log('Страница загружена!');
    
    // Обработчик для кнопки
    const button = document.querySelector('.btn');
    if (button) {
        button.addEventListener('click', function() {
            alert('Кнопка нажата! Здесь будет ваша логика.');
        });
    }
    
    // Плавная прокрутка для навигации
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Клик по навигации:', this.textContent);
        });
    });
    
    // Простая анимация при загрузке
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '0';
        hero.style.transform = 'translateY(20px)';
        hero.style.transition = 'all 0.8s ease';
        
        setTimeout(() => {
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        }, 100);
    }
    

    
    // Добавление класса bg-color к header при скролле
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 0) {
                header.classList.add('bg-color');
            } else {
                header.classList.remove('bg-color');
            }
        });
    }
    
    // Мобильное меню
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', function() {
            // Переключаем класс active для кнопки (анимация гамбургера)
            mobileMenuToggle.classList.toggle('active');
            // Переключаем класс active для навигации (показать/скрыть меню)
            nav.classList.toggle('active');
            
            // Изменяем aria-label для доступности
            const isOpen = nav.classList.contains('active');
            mobileMenuToggle.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
        });
        
        // Закрытие меню при клике на ссылку навигации
        const navLinks = document.querySelectorAll('.nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                nav.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-label', 'Открыть меню');
            });
        });
        
        // Закрытие меню при изменении размера окна (если переходим на десктоп)
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                mobileMenuToggle.classList.remove('active');
                nav.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-label', 'Открыть меню');
            }
        });
    }
    
    console.log('JavaScript инициализирован успешно!');
});