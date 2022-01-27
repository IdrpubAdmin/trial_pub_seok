
// init Swiper:
const swiper = new Swiper('.news_swiper', {
    slidesPerView: 5.68,
    spaceBetween: 10,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.25,
            spaceBetween: 10,
            centeredSlides: true,
        },
        641: {
            slidesPerView: 3.5,
            spaceBetween: 10
        },
        1199: {
            slidesPerView: 5.68,
            spaceBetween: 10
        },
    }
});