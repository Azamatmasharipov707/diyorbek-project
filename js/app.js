let subscribeBtn = document.querySelectorAll('.subscribe__btn');

for(let i = 0; i < subscribeBtn.length; i++) {
    subscribeBtn[i].addEventListener('click', () => {
        for (let k = 0; k < subscribeBtn.length; k++) {
            subscribeBtn[k].classList.remove('active')
        }
        subscribeBtn[i].classList.add('active')
    })
}

let asideDropdown = document.querySelectorAll('.aside__dropdown');

for (let i = 0; i < asideDropdown.length; i++) {
    asideDropdown[i].addEventListener('click', function() {
        
        for (let k = 0; k < asideDropdown.length; k++) {
            asideDropdown[k].classList.remove('active')
        }
            asideDropdown[i].classList.add('active')
        
    })
}