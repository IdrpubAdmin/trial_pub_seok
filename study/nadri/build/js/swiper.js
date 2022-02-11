//main-menu-slide 스와이퍼 동작 구현
const MainSwiper = new Swiper('.main-menu-slide', {
    slidesPerView: 2.2,
    spaceBetween: 20,
    centeredSlides: false,
    loop: true,
    navigation: {
        nextEl: '.btn-menu-next',
        prevEl: '.btn-menu-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 2.2,
            spaceBetween: 20,
            autoheight: true
        },
        641: {
            slidesPerView: 3.2,
            spaceBetween: 20,
            autoheight: true
        },
        1199: {
            slidesPerView: 4.2,
            spaceBetween: 20,
        },
    }
});


//main-franchise-issue-contents 스와이퍼 동작구현
const MainFranchiseSwiper = new Swiper('.main-franchise-issue-contents', {
    slidesPerView: 2,
    spaceBetween: 5,
    direction: 'vertical',
    // autoheight: false,
    // centeredSlides: false,
    // loop: false,
    navigation: {
        nextEl: '.btn-franchise-next',
        prevEl: '.btn-franchise-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 5,

        },
        641: {
            slidesPerView: 2,
            spaceBetween: 5,
        },
        1199: {
            slidesPerView: 2,
            spaceBetween: 5
        },
    }
});


//main-store-list 스와이퍼 동작 구현
const MainStoreSwiper = new Swiper('.main-store-list', {
    slidesPerView: 1.25,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: '.btn-store-next',
        prevEl: '.btn-store-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.25,
            spaceBetween: 0,
            autoheight: true
        },
        641: {
            slidesPerView: 1.5,
            spaceBetween: 0,
            autoheight: true
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 0
        },
    }
});

//news-contents 스와이퍼 동작 구현
const NewsSwiper = new Swiper('.section-main-slide-news', {
    slidesPerView: 2,
    spaceBetween: 5,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 5
        },
        641: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        1199: {
            slidesPerView: 5,
            spaceBetween: 10
        },
    }
});

//menu-contents 스와이퍼 동작 구현
const MenuSwiper = new Swiper('.section-main-slide-menu', {
    slidesPerView: 1.4,
    spaceBetween: 5,
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