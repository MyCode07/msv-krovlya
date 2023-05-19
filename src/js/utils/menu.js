const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header nav');
const body = document.body;
if (burger) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('_active');
        menu.classList.toggle('_open');
        body.classList.toggle('_noscroll');
    })
}


const svg = `
   <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L8 8L14 2"   stroke-linecap="round"/>
    </svg>
`;

const submenuArrow = `<img src="/wp-content/themes/krovlya/assets/img/svg/sub-menu-arrow.svg" alt="">`


const headerMenuLinks = document.querySelectorAll('.header nav li');
addSvgToMenuItem(headerMenuLinks);


function addSvgToMenuItem(menuItems) {
    menuItems.forEach(link => {
        const submenu = link.querySelector('ul');
        if (submenu) {
            submenu.insertAdjacentHTML('beforebegin', svg);

            const submenuList = submenu.querySelectorAll('li a');
            if (submenuList.length) {
                submenuList.forEach(li => {
                    li.insertAdjacentHTML('afterbegin', submenuArrow);
                })
            }
        }
        const arrow = link.querySelector('svg');

        if (arrow) {
            arrow.addEventListener('click', () => {
                arrow.closest('li').classList.toggle('_active');
            })
        }
    });
}

const headerLinks = document.querySelectorAll('.header nav a');
if (headerLinks.length) {
    headerLinks.forEach(link => {

        link.addEventListener('click', () => {
            if (menu.classList.contains('_open')) {
                burger.classList.remove('_active');
                menu.classList.remove('_open');
                body.classList.remove('_noscroll');
            }
        })
    })
}
