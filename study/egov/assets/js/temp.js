"use strict";

var _this = void 0;

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
document.addEventListener("DOMContentLoaded", function () {
  if (matchMedia("screen and (min-width: 1280px)").matches) {
    document.querySelector('v1').parentElement('li').classList.remove("on");
    $('.gnb-bd >li >a').addEventListener('mouseenter', function () {
      this.parent('li').previousSibling.classList.remove("on");
      document.getElementByClassName("header").classList.add("on");
      this.parent('li').classList.add("on");
    });
    document.getElementByClassName("header").addEventListener('mouseleave', function () {
      document.getElementByClassName("header").classList.remove("on");
      document.querySelectorAll(".gnb-bd li").classList.remove("on");
    });
  } else {
    document.querySelector('v1').parentElement('li').classList.add("on");
    $('.gnb-bd >li >a').addEventListener('click', function (e) {
      _this.parentElement('li').siblings().classList.remove("on");

      _this.parentElement('li').classList.add("on");
    });
  }

  document.querySelectorAll(".btn-fullmenu a").addEventListener('click', function (e) {
    document.getElementByClassName("m-gnb").classList.add("on");
  });
  document.getElementByClassName("dp2-tit").addEventListener('click', function (e) {
    document.getElementByClassName("dp2-tit").children('.ico-plus').innerText = '하위메뉴열기';
    document.getElementByClassName("dp2-tit").parent('li').classList.remove("on");
    _this.children('.ico-plus').innerText = '하위메뉴닫기';

    if (_this.parentElement('li').classList.contains("on")) {
      _this.parentElement('li').classList.remove("on");
    } else {
      _this.parent('li').classList.add("on");
    }
  });
});