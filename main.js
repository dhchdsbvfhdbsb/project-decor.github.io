flatpickr("#period", {
    mode: "range",
    dateFormat: "d.m.Y",
    locale: "ru",
    static: true, // Статический календарь
    theme: "airbnb" // Тема Airbnb для современного вида
});

document.getElementById('submitForm').addEventListener('click', function() {
    const form = document.getElementById('orderForm');
    if (form.checkValidity()) {
        Swal.fire({
            title: 'Форма отправлена!',
            text: 'Ваш запрос был успешно отправлен.',
            icon: 'success',
            confirmButtonText: 'Ок'
        });
        $('#orderModal').modal('hide');
    } else {
        form.reportValidity();
    }
});


document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetElement = document.querySelector(this.getAttribute('href'));
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        
        anime({
            targets: [document.documentElement, document.body],
            scrollTop: targetPosition,
            duration: 4000, // Длительность анимации в миллисекундах
            easing: 'easeInOutQuad' // Тип анимации
        });
    });
});


AOS.init();

new WOW().init();

////jd



