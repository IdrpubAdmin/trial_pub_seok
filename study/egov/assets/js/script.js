"use strict";

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
var btnDp1 = document.getElementsByClassName('btn-dp1');
var dp1 = document.querySelectorAll('.gnb-bd li');

if (matchMedia("screen and (min-width: 1280px)").matches) {
  // 모바일 화면에서 1번 메뉴 dp2 자동 노출 되어있던 것 원상복귀
  document.querySelector('.gnb-vsl.v1').closest('li').classList.remove("on");

  var _loop = function _loop(i) {
    // pc mouse event
    btnDp1[i].addEventListener('mouseover', function (e) {
      for (var j = 0; j < dp1.length; j++) {
        dp1[j].classList.remove("on");
      }

      document.querySelector('.header').classList.add('on');
      btnDp1[i].parentElement.classList.add('on');
    });
    document.querySelector('.header').addEventListener('mouseleave', function (e) {
      var dp1 = document.querySelectorAll('.gnb-bd li');

      for (var j = 0; j < dp1.length; j++) {
        dp1[j].classList.remove("on");
      }

      document.querySelector('.header').classList.remove('on');
    });
  };

  for (var i = 0; i < btnDp1.length; i++) {
    _loop(i);
  }
} else {
  // 모바일 전체메뉴 노출 시 1번 메뉴 열림 상태 만들기
  document.querySelector('.gnb-vsl.v1').closest('li').classList.add("on");

  var _loop2 = function _loop2(k) {
    // mobile mouse event
    btnDp1[k].addEventListener('click', function (e) {
      for (var l = 0; l < dp1.length; l++) {
        dp1[l].classList.remove("on");
      }

      btnDp1[k].parentElement.classList.add('on');
    });
  };

  for (var k = 0; k < btnDp1.length; k++) {
    _loop2(k);
  }
}

window.addEventListener('resize', function () {
  if (matchMedia("screen and (min-width: 1280px)").matches) {
    // 모바일 화면에서 1번 메뉴 dp2 자동 노출 되어있던 것 원상복귀
    document.querySelector('.gnb-vsl.v1').closest('li').classList.remove("on");
  } else {
    // 모바일 전체메뉴 노출 시 1번 메뉴 열림 상태 만들기
    document.querySelector('.gnb-vsl.v1').closest('li').classList.add("on");
  }
});
var btnFull = document.querySelectorAll(".btn-fullmenu a");

for (var _i = 0; _i < btnFull.length; _i++) {
  btnFull[_i].addEventListener('click', function (e) {
    document.querySelector(".m-gnb").classList.add("on");
  });
}

var btnCls = document.querySelector(".close a");
btnCls.addEventListener('click', function (e) {
  document.querySelector(".m-gnb").classList.remove("on");
});
var btnPls = document.getElementsByClassName("ico-plus");

var _loop3 = function _loop3(_i2) {
  btnPls[_i2].parentElement.addEventListener('click', function (e) {
    for (var j = 0; j < btnPls.length; j++) {
      btnPls[j].innerText = '하위메뉴닫기';
    }

    ;

    for (var _k = 0; _k < btnPls.length; _k++) {
      btnPls[_k].closest('li').classList.remove('on');
    }

    btnPls[_i2].innerText = '하위메뉴열기';

    if (btnPls[_i2].closest('li').classList.contains('on')) {
      btnPls[_i2].closest('li').classList.remove('on');
    } else {
      btnPls[_i2].closest('li').classList.add('on');
    }
  });
};

for (var _i2 = 0; _i2 < btnPls.length; _i2++) {
  _loop3(_i2);
}