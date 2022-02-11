const quickMenu = document.querySelector('.quick'),
    showItem = document.querySelectorAll('.quick-item-wrap'),
    showTop = document.querySelector('.quick-top-btn');


for (let i = 0; i < showItem.length; i++) {
    showItem[i].addEventListener('mouseover', function () {
        showItem[i].classList.add('show-info-btn');
    })
    showItem[i].addEventListener('mouseleave', function () {
        showItem[i].classList.remove('show-info-btn');
    })
};


quickMenu.addEventListener('mouseover', function () {
    showTop.classList.add('show-top-btn');
})

quickMenu.addEventListener('mouseleave', function () {
    showTop.classList.remove('show-top-btn');
});