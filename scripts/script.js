const swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 32,
    initialSlide: 1,

    // If we need pagination
    pagination: {
        el: '.custom-swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        prevEl: '.my-prev-button',
        nextEl: '.my-next-button',
    },
});