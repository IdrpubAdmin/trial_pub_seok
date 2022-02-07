const gnb = document.querySelector(".gnb"),
  gnbMain = document.querySelector(".gnb_main");


  gnb.addEventListener('mouseover', function() {
      gnb.style.height = '29.5rem';
  });
  gnb.addEventListener('mouseout', function() {
    gnb.style.height = '5.2rem';
});