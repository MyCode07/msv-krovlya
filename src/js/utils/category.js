const openCategoryList = document.querySelector('.product-category__open');
if (openCategoryList && window.innerWidth <= 768) {
    const categoryList = openCategoryList.nextElementSibling;

    openCategoryList.addEventListener('click', function () {
        openCategoryList.classList.toggle('_active')

        if (categoryList) {
            categoryList.classList.toggle('_active')
        }
    })
}