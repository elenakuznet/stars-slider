const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    effect: 'coverflow', // cards, coverflow, flip, fade, cube, slider - по умолчанию
    // initialSlide: 2, // Начинаем со 2 слайдера
    // freeMode: true, // можно перетаскивать как ленту
    slidesPerView: 2, // кол-во активных слайдов
    centeredSlides: true, // центрирование слайдов

    // Пагинация
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },

    // Навигация
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

    // autoplay: {
    //     delay: 1000, //Задержка перед перелистыванием 1с = 1000мл/с
    // },

    breakpoints: {
            320: {
            slidesPerView: 1,
            spaceBetween: 10
            },
            // when window width is >= 480px
            480: {
            slidesPerView: 2,
            spaceBetween: 10
            },
            // when window width is >= 640px
            768: {
            slidesPerView: 2,
            spaceBetween: 20
            }
        },
});