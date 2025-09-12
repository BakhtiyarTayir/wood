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
    
    // Функция для обновления времени (демонстрация динамического контента)
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('ru-RU');
        console.log('Текущее время:', timeString);
    }
    
    // Обновляем время каждую секунду
    setInterval(updateTime, 1000);
    
    console.log('JavaScript инициализирован успешно!');
});