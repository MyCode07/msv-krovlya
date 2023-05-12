const feedBackItems = document.querySelectorAll('.feedback-item');
if (feedBackItems.length) {
    feedBackItems.forEach(item => {
        const icon = item.querySelector('.feedback-item__icon')
        const name = item.querySelector('.feedback-item__name')

        icon.textContent = name.textContent[0]
    })
}