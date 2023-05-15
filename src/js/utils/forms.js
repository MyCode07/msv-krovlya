const popupForm = document.querySelector('.popup-form');
const popupClose = document.querySelector('.popup-form__close');
const popupFormOpen = document.querySelectorAll('._open-popup-form');

if (popupFormOpen.length) {
    popupFormOpen.forEach(popupOpen => {
        popupOpen.addEventListener('click', function (e) {
            popupForm.classList.add('_open');
            document.body.classList.add('_noscroll');
        })

        popupClose.addEventListener('click', function () {
            popupForm.classList.remove('_open');
            document.body.classList.remove('_noscroll');
        })

        popupForm.addEventListener('click', function (e) {
            if (e.target.classList.contains('popup-form')) {
                popupForm.classList.remove('_open')
                document.body.classList.remove('_noscroll');
            }
        })
    })
}



const forms = document.querySelectorAll('[data-form]');
if (forms.length) {
    forms.forEach(form => {
        const submit = form.querySelector('[data-submit]');
        submit.addEventListener('click', function (e) {
            let error = validateForm(form);

            if (error === 0) {
                const name = form.querySelector('[data-name]').value
                const text = submit.dataset.text.replace('$', name)

                if (submit.closest('.product')) {
                    const productName = document.querySelector('.product h1').textContent

                    const addons = getCeckBoxAddons(form.querySelectorAll('.more-services input[type="checkbox"]'))

                    submit.href += text.replace('%', productName) + addons;
                }
                else {
                    submit.href += text;
                }

                setTimeout(() => {
                    submit.href = submit.dataset.href;
                }, 1000);
            }
            else {
                e.preventDefault();
                alert('Заполните обязательные поля');
            }
        })
    })

    function validateForm(form) {
        let error = 0;
        const reqInputs = form.querySelectorAll('input[data-req]');

        for (let i = 0; i < reqInputs.length; i++) {
            const input = reqInputs[i];
            formRemoveError(input);
            validateInput()

            input.addEventListener('input', function () {
                formRemoveError(input);
                validateInput()
            })


            function validateInput() {
                if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                    if (input.value.length < 2) {
                        formAddError(input);
                        error++;
                    }
                    formAddError(input);
                    error++;
                }
                else {
                    if (input.value.length < 2) {
                        formAddError(input);
                        error++;
                    }
                }
            }
        }

        return error;
    }

    function formAddError(input) {
    }

    function formRemoveError(input) {
    }

    function getCeckBoxAddons(checkboxes) {
        let text = '';
        if (checkboxes.length) {
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    text += ', ' + checkbox.value;
                }
            })
        }

        return text;
    }
}