let subscribeBtn = document.querySelectorAll('.subscribe__btn');

for (let i = 0; i < subscribeBtn.length; i++) {
    subscribeBtn[i].addEventListener('click', () => {
        for (let k = 0; k < subscribeBtn.length; k++) {
            subscribeBtn[k].classList.remove('active')
        }
        subscribeBtn[i].classList.add('active')
    })
}

let asideDropdown = document.querySelectorAll('.aside__dropdown');

for (let i = 0; i < asideDropdown.length; i++) {
    asideDropdown[i].addEventListener('click', function () {

        for (let k = 0; k < asideDropdown.length; k++) {
            asideDropdown[k].classList.remove('active')
        }
        asideDropdown[i].classList.add('active')

    })
}


// =================================lesson===================

let lessonBtn = document.querySelectorAll('.lesson__btn');
let lessonContent = document.querySelectorAll('.lesson__content');

console.log(lessonContent)


<<<<<<< HEAD

topic.addEventListener('click',function() {
    lessonComment.classList.remove('active')
    lessonCommentRetings.classList.remove('active')
    lessonImg.classList.add('active')
})


// ====================================
=======
for(let i = 0; i < lessonBtn.length; i++) {
    lessonBtn[i].addEventListener('click', ()=> {
        for (let k = 0; k < lessonBtn.length; k++) {
            lessonBtn[k].classList.remove('active')
            lessonContent[k].classList.remove('active')
        }
        lessonBtn[i].classList.add('active')
        lessonContent[i].classList.add('active')
    })
}
>>>>>>> e5087723606df8006da37e3b820ce8afba3ad09b
