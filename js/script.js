$(function(){
    $('.main_banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1200,
        arrows: true,
        fade: true,
        nextArrow: '<i class="fa-solid fa-circle-arrow-left next_arrow"></i>',
        prevArrow: '<i class="fa-solid fa-circle-arrow-right prev_arrow"></i>',
      });

      $('.main_service_part').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1200,
        arrows: true,
        vertical: true,
        centerMode: true,
        centerPadding: '0px',
        prevArrow: '<i class="fa-solid fa-angle-up top_arrow"></i>',
        nextArrow: '<i class="fa-solid fa-angle-down bottom_arrow"></i>'
      });

      $('.test_all_text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        vertical: true,
        asNavFor: '.test_all_img',
      });

      $('.test_all_img').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: true,
        vertical: true,
        prevArrow: '<i class="fa-solid fa-angle-up test_up"></i>',
        nextArrow: '<i class="fa-solid fa-angle-down test_down"></i>',
        centerMode: true,
        centerPadding: '0px',
        asNavFor: '.test_all_text',
      });

      $('.counter').counterUp({
        delay: 10,
        time: 1000
      });
      
      $('.all_team_part').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
      });

      $('.pricing_all_part').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
      });
});


var navoff = $(".navbar").offset().top;

$(window).scroll(function(){
  var scrolling = $(this).scrollTop();

  if(scrolling > navoff){
    $(".navbar").addClass("menu_fixed");
  }

  else{
    $(".navbar").removeClass("menu_fixed");
  }
  
});