const likeBtn = document.querySelectorAll('.like__btn');

likeBtn.forEach(e => {
    e.addEventListener('click', (event) => {
        event.preventDefault;
        const likeNumEl = document.querySelector('.counter__num');
        const likeNum = +likeNumEl.textContent;
        if (e.classList.contains("active")) {
            likeNumEl.textContent = likeNum - 1;
            e.classList.remove('active')
        }
        else {
            likeNumEl.textContent = likeNum + 1;
            e.classList.add('active')
        }
    })
})
