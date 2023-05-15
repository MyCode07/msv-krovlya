import { Swiper, Navigation, Pagination } from "swiper";

const slider = document.querySelector('.product .swiper');
const productmainImage = document.querySelector('.product__images-main img');

if (slider) {
    new Swiper(slider, {
        loop: true,
        modules: [Navigation, Pagination],
        navigation: {
            prevEl: '.product__images-slider-prev',
            nextEl: '.product__images-slider-next'
        },
        pagination: {
            el: '.product__pagination',
            clickable: true
        },
        slidesPerView: 4,
        breakpoints: {
            300: {
                direction: "horizontal",
                spaceBetween: 30,
            },

            769: {
                spaceBetween: 16,
                direction: "vertical",
            },
        },
        on: {
            slideChange: (swiper) => {
                const image = swiper.slides[swiper.activeIndex].querySelector('img');
                productmainImage.src = image.src
            }
        }
    })
}

const productTabs = document.querySelectorAll('.product-tab');
const productTabsContent = document.querySelectorAll('.product-tabs__item');

if (productTabs.length) {
    productTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const id = tab.dataset.id;

            if (!tab.closest('.product-tabs__item')) {
                productTabs.forEach(item => {
                    item.classList.remove('_active')
                })

                productTabsContent.forEach(content => {
                    if (content.id == id) {
                        content.classList.add('_active')
                    }
                    else {
                        content.classList.remove('_active')
                    }
                })

                tab.classList.add('_active')
            }
            else {
                tab.classList.toggle('_active')
                tab.closest('.product-tabs__item').classList.toggle('_active')
            }
        })
    })
}