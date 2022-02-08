const quickMenu = document.querySelector('.quick'),
showItem = document.querySelectorAll('.show-item'),
showTop = document.querySelector('.show-top');

// .quick hover 동작 구현
function activate() {
    for (i=0; i<showItem.length; i++) {
    showItem[i].classList.add('quick-btn-info');}
    showTop.classList.add('show-top-btn');
};

function deactivate() {
    for (i=0; i<showItem.length; i++) {
        showItem[i].classList.remove('quick-btn-info');}
    showTop.classList.remove('show-top-btn');
};

quickMenu.addEventListener("mouseover", activate);
quickMenu.addEventListener("mouseleave", deactivate);