"use strict";

$(function () {
  if (matchMedia("screen and (min-width: 1280px)").matches) {
    $('.gnb-vsl.v1').closest('li').removeClass('on');
    $('.gnb-bd >li >a').mouseover(function () {
      $(this).parent('li').siblings().removeClass('on');
      $('.header').addClass('on');
      $(this).parent('li').addClass('on');
    });
    $('.header').mouseleave(function () {
      $('.header').removeClass('on');
      $('.gnb-bd li').removeClass('on');
    });
  } else {
    $('.gnb-vsl.v1').closest('li').addClass('on');
    $('.gnb-bd >li >a').on('click', function () {
      $(this).parent('li').siblings().removeClass('on');
      $(this).parent('li').addClass('on');
    });
  }

  $('.btn-fullmenu a').on('click', function () {
    $('.m-gnb').addClass('on');
  });
  $('.ico-plus').parent('a').on('click', function () {
    $('.ico-plus').text('하위메뉴열기');
    $('.ico-plus').closest('li').removeClass('on');
    $(this).children('span').text('하위메뉴닫기');

    if ($(this).closest('li').hasClass('on')) {
      $(this).closest('li').removeClass('on');
    } else {
      $(this).closest('li').addClass('on');
    }
  });
  $('.close a').on('click', function () {
    $('.m-gnb').removeClass('on');
  });
});

function siblings(t, removeClass) {
  var children = t.parentElement.children;
  var tempArr = [];

  for (var i = 0; i < children.length; i++) {
    children[i].classList.remove(removeClass);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (matchMedia("screen and (min-width: 1280px)").matches) {//         document.querySelector('gnb-bd v1').closest('li').classList.remove("on");
    //
    //         $('.gnb-bd >li >a').mouseover(function () {
    //             this.parent('li').previousSibling.classList.remove("on");
    //             document.getElementByClassName("header").classList.add("on");
    //             this.parent('li').classList.add("on");
    //         })
    //
    //         document.getElementByClassName("header").mouseleave(function () {
    //             document.getElementByClassName("header").classList.remove("on");
    //             document.querySelectorAll(".gnb-bd li").classList.remove("on");
    //         })
  } else {//         document.querySelector('gnb-bd v1').closest('li').classList.add("on");
    //         $('.gnb-bd >li >a').addEventListener('click', (e) => {
    //             this.parent('li').siblings().classList.remove("on");
    //             this.parent('li').classList.add("on");
    //         });
  } //
  //     document.querySelectorAll(".btn-fullmenu a").addEventListener('click', (e) => {
  //         document.getElementByClassName("m-gnb").classList.add("on");
  //     });
  //
  //     document.getElementByClassName("dp2-tit").addEventListener('click', (e) => {
  //         document.getElementByClassName("dp2-tit").children('.ico-plus').innerText = '하위메뉴열기';
  //         document.getElementByClassName("dp2-tit").parent('li').classList.remove("on");
  //         this.children('.ico-plus').innerText = '하위메뉴닫기';
  //         if(this.parent('li').classList.contains("on")) {
  //             this.parent('li').classList.remove("on");
  //         }else{
  //             this.parent('li').classList.add("on");
  //         }
  //     });

});