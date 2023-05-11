import { isMobile } from './isMobile.js'

const listServices = document.querySelectorAll('.home-services__list li');

if (listServices.length) {
    const listControls = document.querySelectorAll('.home-services__control li');

    for (let i = 0; i < listServices.length; i++) {
        const li = listServices[i];
        const controlLi = listControls[i];

        if (!isMobile.any()) {
            controlLi.addEventListener('mouseenter', function () {
                listServices.forEach(item => {
                    item.classList.remove('_active')
                })
                listControls.forEach(item => {
                    item.classList.remove('_active')
                })

                controlLi.classList.add('_active')
                li.classList.add('_active')
            })

        }

        if (isMobile.any() && window.innerWidth > 768) {
            controlLi.addEventListener('click', function () {

                listServices.forEach(item => {
                    item.classList.remove('_active')
                })
                listControls.forEach(item => {
                    item.classList.remove('_active')
                })

                controlLi.classList.add('_active')
                li.classList.add('_active')
            })
        }
    }
}