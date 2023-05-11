function replaceElements() {
    const replaceBlocks = document.querySelectorAll('[data-replace]');
    if (replaceBlocks.length) {
        replaceBlocks.forEach(block => {
            const windowWidth = +block.dataset.replace
            const elem = block.querySelector('[data-replace-elem]')
            const oldPosition = block.querySelector('[data-replace-oldposition]')
            const newPosition = block.querySelector('[data-replace-newposition]')

            if (window.innerWidth <= windowWidth) {
                newPosition.after(elem)
            }
            else {
                oldPosition.after(elem)
            }
        })
    }
}

replaceElements()

window.addEventListener('resize', replaceElements)