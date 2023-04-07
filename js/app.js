let subscribeBtn = document.querySelectorAll('.subscribe__btn');

for(let i = 0; i < subscribeBtn.length; i++) {
    subscribeBtn[i].addEventListener('click', () => {
        for (let k = 0; k < subscribeBtn.length; k++) {
            subscribeBtn[k].classList.remove('active')
        }
        subscribeBtn[i].classList.add('active')
    })
}