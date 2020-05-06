// import sayHello from './lib/sayHello.js';

$(document).ready(function() {

  $('.hero__slider').slick({

    dots: true,
    arrow: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    infinite: true,
    autoplaySpeed: 3500,
    autoplay: true,
    infinite: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    // touchThreshold: 100
  });

  $('.client__slider').slick({
    speed: 6000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false
  });

  $('.partner__slider').slick({
    speed: 6000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    rtl: true
  });


  $('.scrolling__link').on('click', function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),

      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top
    }, 1000);
  });
});
