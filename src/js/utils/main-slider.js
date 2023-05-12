import { Swiper, Navigation } from "swiper";

const sliders = document.querySelectorAll('.main .swiper');
if (sliders.length) {
    new Swiper('.main .swiper', {
        loop: true,
        modules: [Navigation],
        navigation: {
            prevEl: '.swiper__controls-prev',
            nextEl: '.swiper__controls-next'
        },
        slidesPerView: 'auto'
    })
}