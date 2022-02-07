const quickMenu = document.querySelector('.quick'),
showItem = document.querySelectorAll('.show_item'),
showTop = document.querySelector('.show_top');

// .quick hover 동작 구현
function activate() {
    for (i=0; i<showItem.length; i++) {
    showItem[i].classList.add('quick_btn_info');}
    showTop.classList.add('show_top_btn');
};

function deactivate() {
    for (i=0; i<showItem.length; i++) {
        showItem[i].classList.remove('quick_btn_info');}
    showTop.classList.remove('show_top_btn');
};

quickMenu.addEventListener("mouseover", activate);
quickMenu.addEventListener("mouseleave", deactivate);