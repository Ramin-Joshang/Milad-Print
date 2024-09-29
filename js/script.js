const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
});

const swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    loop: true,
    slidesPerView: 6,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: ".next-1",
        prevEl: ".prev-1",
    },
});