

//news_contents 스와이퍼 동작 구현
const NewsSwiper = new Swiper('.news_swiper', {
    slidesPerView: 5.68,
    spaceBetween: 10,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 2.4,
            spaceBetween: 5,
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

//menu_contents 스와이퍼 동작 구현

const MenuSwiper = new Swiper('.menu_contents_slide', {
    slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.4,
            spaceBetween: 5,
            autoheight: true
        },
        641: {
            slidesPerView: 3,
            spaceBetween: 20,
            autoheight: true
        },
        1199: {
            slidesPerView: 5,
            spaceBetween: 30
        },
    }
});