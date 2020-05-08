// window.onload = function() {

//   let timeline = new TimelineMax();

//   timeline
//     .fromTo('.hero__title', 0.6,
//       {
//         opacity: 0,
//         visibility: 'hidden',
//         x: '-400px',
//       },
//       {
//         opacity: 1,
//         x: '0',
//         visibility: 'visible',
//         ease: Power2.easeOut
//       },
//       0.1
//     )
//     .fromTo('.hero__subtitle', 0.7,
//       {
//         visibility: 'hidden',
//         opacity: 0,
//         x: '-400px',
//       },
//       {
//         visibility: 'visible',
//         opacity: 1,
//         x: '0px',
//         ease: Power2.easeOut
//       },
//       0.3
//     );
// };


// Scrollmagic
let controller = new ScrollMagic.Controller();

$('section').each(function() {
  let titles = $(this).find('.section__title');
  let subtitles = $(this).find('.section__backTitle');
  let story1 = $(this).find('.story1');
  let story2 = $(this).find('.story2');
  let story3 = $(this).find('.story3');
  let story4 = $(this).find('.story4');
  let story5 = $(this).find('.story5');
  let story6 = $(this).find('.story6');
  let story7 = $(this).find('.story7');
  let item1= $(this).find('.item1');
  let item2= $(this).find('.item2');
  let item3= $(this).find('.item3');
  let item4= $(this).find('.item4');
  let col1= $(this).find('.col1');
  let col2= $(this).find('.col2');
  let col3= $(this).find('.col3');
  let col4= $(this).find('.col4');

  let photo = $(this).find('.about__photo img');

  let tl1 = new TimelineMax({
    pause: true
  });

  let tl2 = new TimelineMax();


  tl1.add('start')
    .fromTo(titles, 0.35,
      {
        y: '100px',
        opacity: 0,
        skewY: 10,
        skewX: 35
      },
      {
        y: '0px',
        opacity: 1,
        skewY: 0,
        skewX: 0,
        ease: Elastic.easeOut.slow
      },
      'start'
    );


  tl1.to(subtitles, 4, {
    x: '-500px',
    ease: Elastic.easeOut.slow
  });


  tl1.add('story')
    .fromTo(story1, 1,{
      y: '60px',
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: Expo.easeOut,
    },
    1
    )
    .fromTo(story7, 1,{
      y: '60px',
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: Expo.easeOut,
    },
    1.2
    )
    .fromTo(story2, 1,{
      y: '60px',
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: Expo.easeOut,
    },
    1.4
    )
    .fromTo(story3, 1,{
      y: '60px',
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: Expo.easeOut,
    },
    1.4
    )
    .fromTo(story4, 1,{
      y: '60px',
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: Expo.easeOut,
    },
    1.7
    )
    .fromTo(story5, 1,{
      y: '60px',
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: Expo.easeOut,
    },
    2
    )
    .fromTo(story6, 1,{
      y: '60px',
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: Expo.easeOut,
    },
    2.2
    )
    .fromTo(item1, 1.2,{
      y: '60px',
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: Expo.easeOut,
    },
    1.2
    )
    .fromTo(item2, 1.4,{
      y: '60px',
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: Expo.easeOut,
    },
    1.6
    )
    .fromTo(item3, 1.4,{
      y: '60px',
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: Expo.easeOut,
    },
    1.6
    )
    .fromTo(item4, 1,{
      y: '60px',
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: Expo.easeOut,
    },
    1.7
    )
    .fromTo(col1, 1.2,{
      y: '60px',
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: Expo.easeOut,
    },
    1.2
    )
    .fromTo(col2, 1.4,{
      y: '60px',
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: Expo.easeOut,
    },
    1.6
    )
    .fromTo(col3, 1.4,{
      y: '60px',
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: Expo.easeOut,
    },
    1.6
    )
    .fromTo(col4, 1,{
      y: '60px',
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: Expo.easeOut,
    },
    1.7
    );

  tl2.to(photo, 1, {
    scaleX: 1.2,
    scaleY: 1.2,
    transformOrigin: '50% 50%',
    ease: Elastic.easeOut.slow
  });

  let scene = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.7,
    reverse: true
  })
    .setTween(tl1)
    // .addIndicators()
    .addTo(controller);

  let scene2 = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.5,
    duration: '1000'
  })
    .setTween(tl2)
    .addTo(controller);
});

gsap.config({nullTargetWarn: false});


if (document.documentElement.clientWidth > 1024) {
  $(document).ready(function() {
    $(window).scroll(function() {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > 49) {
        $('body').addClass('header-fixed');
      } else {
        $('body').removeClass('header-fixed');
      }
    });
  });
};



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
    touchThreshold: 100
  });

  $('.client__slider').slick({
    speed: 1500,
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
    responsive: [

      {
        breakpoint: 1024,
        settings: {
          speed: 3000,
        }
      },
    ]
  });

  $('.partner__slider').slick({
    speed: 1500,
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
    rtl: true,
    responsive: [

      {
        breakpoint: 1024,
        settings: {
          speed: 3000,
        }
      },
    ]
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



// TweenLite.set('.hero__title, .hero__title span',{x:'-101%'})

// var lines = new TimelineMax({repeat:5, repeatDelay:1})
// .from('.hero__content',0.4,{x:100})
// .to('.hero__title',1,{x:'0%',ease: Linear.easeNone})
// .to('.hero__title span',0.6,{x:'0%',ease: Linear.easeNone})

