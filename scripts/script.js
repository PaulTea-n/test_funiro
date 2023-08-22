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

// -----------------------

const swiper_rooms = new Swiper(".swiper_rooms", {
    slidesPerView: "auto",
    centeredSlides: true,
    initialSlide: 1,
    spaceBetween: 32,


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.my-button-next',
    },
});
//---------------------------


const swiperList = new Swiper('.swiper-list', {
    slidesPerView: 3, // Визначте, скільки слайдів буде видно одночасно
    spaceBetween: 32, // Відстань між слайдами
    navigation: {
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// ------------------

const photoItems = document.querySelectorAll('.photo-item');
const orderValues = Array.from(photoItems).map((_, index) => index);

orderValues.sort(() => Math.random() - 0.5);

photoItems.forEach((item, index) => {
    item.style.setProperty('--order', orderValues[index]);
});