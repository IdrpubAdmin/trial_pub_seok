//main_menu_slide 스와이퍼 동작 구현
const MainSwiper = new Swiper('.main_menu_slide', {
    slidesPerView: 2.2,
    spaceBetween: 20,
    centeredSlides: false,
    loop: true,
    navigation: {
        nextEl: '.btn_menu_next',
        prevEl: '.btn_menu_prev',
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


//main_franchise_issue_contents 스와이퍼 동작구현
const MainFranchiseSwiper = new Swiper('.main_franchise_issue_contents', {
    slidesPerView: 2,
    spaceBetween: 5,
    direction: 'vertical',
    // autoheight: false,
    // centeredSlides: false,
    // loop: false,
    navigation: {
        nextEl: '.btn_franchise_next',
        prevEl: '.btn_franchise_prev',
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


//main_store_list 스와이퍼 동작 구현
const MainStoreSwiper = new Swiper('.main_store_list', {
    slidesPerView: 1.25,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: '.btn_store_next',
        prevEl: '.btn_store_prev',
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



//news_contents 스와이퍼 동작 구현
const NewsSwiper = new Swiper('.news_swiper', {
    slidesPerView: 2.4,
    spaceBetween: 5,

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