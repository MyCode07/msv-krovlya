const paymentPercentElems = document.querySelectorAll('[data-payment-percent]');

if (paymentPercentElems.length) {
    paymentPercentElems.forEach(item => {
        const percent = +item.querySelector('[data-percent]').dataset.percent;
        const svg = item.querySelector('svg');
        const progressBar = svg.querySelector('.progress-bar');
        const totalLength = progressBar.getTotalLength();

        progressBar.style.strokeDasharray = totalLength;
        progressBar.style.strokeDashoffset = totalLength;

        const newpercent = totalLength - (totalLength * percent / 100);
        progressBar.style.strokeDashoffset = newpercent;
    })
}
