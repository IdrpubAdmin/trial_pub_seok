const gnb = document.querySelector(".gnb"),
    gnbMain = document.querySelectorAll(".gnb-main"),
    gnbSub = document.querySelectorAll(".gnb-sub"),
    gnbBtn = document.querySelector(".gnb-hamburger-btn");


//pc sub menu 활성화
gnb.addEventListener('mouseover', function () {
    gnb.classList.add('gnb-down');
});
gnb.addEventListener('mouseout', function () {
    gnb.classList.remove('gnb-down');
});


//mobile 메뉴 활성화, button 모양 변경
gnbBtn.addEventListener('click', function () {
    gnbBtn.classList.toggle('gnb-close-btn');
    gnb.classList.toggle('gnb-activate');
    for (let j = 0; j <gnbSub.length; j++) {
        gnbSub[j].classList.remove('gnb-sub-activate');
    }
});


//mobile sub 메뉴 활성화
for (let i = 0; i < gnbMain.length; i++) {
    gnbMain[i].addEventListener('click', function () {
        for (let n = 0; n < gnbMain.length; n++) {
            gnbMain[n].nextElementSibling.classList.remove('gnb-sub-activate');
        }
        gnbMain[i].nextElementSibling.classList.toggle('gnb-sub-activate');
    });
}