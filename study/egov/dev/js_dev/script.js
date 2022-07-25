// function siblings(t, removeClass) {
//     const children = t.parentElement.children;
//     const tempArr = [];
//
//     for (var i = 0; i < children.length; i++) {
//         tempArr.push(children[i]);
//     }
//
//     return tempArr.filter(function (e) {
//         return e != t;
//     });
//
//     for (var i = 0; i < children.length; i++) {
//         children[i].classList.remove(removeClass)
//     }
// }

const btnDp1 = document.getElementsByClassName('btn-dp1');
const dp1 = document.querySelectorAll('.gnb-bd li');

if (matchMedia("screen and (min-width: 1280px)").matches) {
    // 모바일 화면에서 1번 메뉴 dp2 자동 노출 되어있던 것 원상복귀
    document.querySelector('.gnb-vsl.v1').closest('li').classList.remove("on");

    for(let i=0;i<btnDp1.length;i++) {
        // pc mouse event
        btnDp1[i].addEventListener('mouseover', (e)=> {
            for(let j=0;j<dp1.length;j++) {
                dp1[j].classList.remove("on");
            }
            document.querySelector('.header').classList.add('on');
            btnDp1[i].parentElement.classList.add('on');
        })

        document.querySelector('.header').addEventListener('mouseleave', (e)=> {

            const dp1 = document.querySelectorAll('.gnb-bd li');
            for(let j=0;j<dp1.length;j++) {
                dp1[j].classList.remove("on");
            }
            document.querySelector('.header').classList.remove('on');
        })

    }


} else {
    // 모바일 전체메뉴 노출 시 1번 메뉴 열림 상태 만들기
    document.querySelector('.gnb-vsl.v1').closest('li').classList.add("on");
    for(let k=0;k<btnDp1.length;k++) {
        // mobile mouse event
        btnDp1[k].addEventListener('click', (e)=> {
            for(let l=0;l<dp1.length;l++) {
                dp1[l].classList.remove("on");
            }
            btnDp1[k].parentElement.classList.add('on');
        })
    }
}

window.addEventListener('resize', () => {
    if (matchMedia("screen and (min-width: 1280px)").matches) {
        // 모바일 화면에서 1번 메뉴 dp2 자동 노출 되어있던 것 원상복귀
        document.querySelector('.gnb-vsl.v1').closest('li').classList.remove("on");
    } else {
        // 모바일 전체메뉴 노출 시 1번 메뉴 열림 상태 만들기
        document.querySelector('.gnb-vsl.v1').closest('li').classList.add("on");
    }
})


const btnFull = document.querySelectorAll(".btn-fullmenu a");
for (let i = 0; i < btnFull.length; i++) {
    btnFull[i].addEventListener('click', (e) => {
        document.querySelector(".m-gnb").classList.add("on");
    });
}

const btnCls = document.querySelector(".close a");
btnCls.addEventListener('click', (e) => {
    document.querySelector(".m-gnb").classList.remove("on");
});


const btnPls = document.getElementsByClassName("ico-plus");
for (let i = 0; i < btnPls.length; i++) {
    btnPls[i].parentElement.addEventListener('click', (e) => {
       for (let j = 0; j < btnPls.length; j++) {
           btnPls[j].innerText = '하위메뉴닫기';
       };
       for (let k = 0; k < btnPls.length; k++) {
           btnPls[k].closest('li').classList.remove('on');
       }
       btnPls[i].innerText = '하위메뉴열기';
       if (btnPls[i].closest('li').classList.contains('on')) {
           btnPls[i].closest('li').classList.remove('on');
       }else{
           btnPls[i].closest('li').classList.add('on');
       }

    });
}

