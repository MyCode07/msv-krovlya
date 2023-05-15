const popupOpenBtns = document.querySelectorAll('[data-openpopup]');

if (popupOpenBtns.length) {
    popupOpenBtns.forEach(btn => {
        const id = btn.dataset.id

        btn.addEventListener('click', function (e) {
            e.preventDefault();
            
            const popup = document.querySelector(`.popup#${id}`);
            const popupClose = popup.querySelector(`.popup__close`);

            popup.classList.add('_open');
            document.body.classList.add('_noscroll');

            popupClose.addEventListener('click', function () {
                popup.classList.remove('_open');
                document.body.classList.remove('_noscroll');
            })

            popup.addEventListener('click', function (e) {
                if (e.target.classList.contains('popup')) {
                    popup.classList.remove('_open')
                    document.body.classList.remove('_noscroll');
                }
            })
        })
    })
}