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


// =================================lesson===================

let topic = document.querySelector('.lesson__card-topic')
let readers = document.querySelector('.lesson__card-readers')
let evaluation = document.querySelector('.lesson__card-evaluation')

let lessonImg = document.querySelector('.lesson__img')
let lessonComment = document.querySelector('.lesson__comment')
let lessonCommentRetings = document.querySelector('.lesson__comment-retings')


evaluation.addEventListener('click', function () {
    lessonImg.classList.remove('active')
    lessonComment.classList.remove('active')
    lessonCommentRetings.classList.add('active')
})


readers.addEventListener('click', function() {
lessonImg.classList.remove('active')
lessonCommentRetings.classList.remove('active')
lessonComment.classList.add('active')
})



topic.addEventListener('click',function() {
    lessonComment.classList.remove('active')
    lessonCommentRetings.classList.remove('active')
    lessonImg.classList.add('active')
})


console.log(topic);