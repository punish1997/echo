function initializeSwiper() {
    var swiper1 = new Swiper(".mySwiper1", {
        slidesPerView: 'auto',
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        effect: 'slide',
        speed: 1500,
        breakpoints: {
            425: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }
    });
}

initializeSwiper();