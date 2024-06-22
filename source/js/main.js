document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.progbtns__btn');
    const windows = document.querySelectorAll('.programwindow__info');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Удаляем класс active у всех кнопок
            buttons.forEach(btn => btn.classList.remove('active'));

            // Добавляем класс active на нажатую кнопку
            button.classList.add('active');

            // Скрываем все окна
            windows.forEach(window => window.classList.remove('active'));

            // Показываем соответствующее окно
            windows[index].classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const consultBtn = document.querySelector('.questbtns__consultbtn');
    const therapyBtn = document.querySelector('.questbtns__manualtherapybtn');
    const buttons = document.querySelectorAll('button');

    consultBtn.addEventListener('click', function () {
        filterItems('consultation');
        setActiveButton(consultBtn);
    });

    therapyBtn.addEventListener('click', function () {
        filterItems('manual-therapy');
        setActiveButton(therapyBtn);
    });

    function filterItems(category) {
        const items = document.querySelectorAll('.questionlist__item');
        items.forEach(item => {
            if (item.classList.contains(category)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    }

    function setActiveButton(activeButton) {
        buttons.forEach(button => {
            button.classList.remove('active');
        });
        activeButton.classList.add('active');
    }
});

function toggleText(element) {
    element.classList.toggle('expanded');
    if (element.classList.contains('expanded')) {
        let extraText = element.querySelector('.extra-text');
        let newHeight = element.scrollHeight + extraText.scrollHeight + 'px';
        element.style.maxHeight = newHeight;
    } else {
        element.style.maxHeight = '3em';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: '3',
        centeredSlides: true, // отцентрировать слайды
        spaceBetween: 30,
        loop: true, // включаем зацикливание
        loopAdditionalSlides: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // breakpoints: {
        //     768: {
        //         slidesPerView: 3,
        //         spaceBetween: 30,
        //     }
        // }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const tripbuttons = document.querySelectorAll('.tripbuttons-btn');
    const windows = document.querySelectorAll('.tripwindow__info');

    tripbuttons.forEach((tripbutton, index) => {
        tripbutton.addEventListener('click', () => {
            // Удаляем класс active у всех кнопок
            tripbuttons.forEach(btn => btn.classList.remove('active'));

            // Добавляем класс active на нажатую кнопку
            tripbutton.classList.add('active');

            // Скрываем все окна
            windows.forEach(window => window.classList.remove('active'));

            // Показываем соответствующее окно
            windows[index].classList.add('active');
        });
    });
});