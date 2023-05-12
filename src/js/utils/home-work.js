const steplist = document.querySelectorAll('.home-work li');
const image = document.querySelector('.home-work__image img');

if (steplist.length) {
    steplist.forEach(li => {
        li.addEventListener('mouseenter', function () {
            const imagesrc = li.dataset.src;
            if (imagesrc) {
                image.src = imagesrc
            }
        })
    })
}