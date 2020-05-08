/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nwindow.onload = function () {\n  var timeline = new TimelineMax();\n  timeline.fromTo('.hero__title', 0.6, {\n    opacity: 0,\n    visibility: 'hidden',\n    x: '-400px'\n  }, {\n    opacity: 1,\n    x: '0',\n    visibility: 'visible',\n    ease: Power2.easeOut\n  }, 0.1).fromTo('.hero__subtitle', 0.7, {\n    visibility: 'hidden',\n    opacity: 0,\n    x: '-400px'\n  }, {\n    visibility: 'visible',\n    opacity: 1,\n    x: '0px',\n    ease: Power2.easeOut\n  }, 0.3);\n}; // Scrollmagic\n\n\nvar controller = new ScrollMagic.Controller();\n$('section').each(function () {\n  var titles = $(this).find('.section__title');\n  var subtitles = $(this).find('.section__backTitle');\n  var story = $(this).find('.about__story p');\n  var advantages = $(this).find('.advantages__item');\n  var tl1 = new TimelineMax({\n    pause: true\n  });\n  tl1.add('start').fromTo(titles, 0.35, {\n    y: '100px',\n    opacity: 0,\n    skewY: 10,\n    skewX: 35\n  }, {\n    y: '0px',\n    opacity: 1,\n    skewY: 0,\n    skewX: 0,\n    ease: Elastic.easeOut.slow\n  }, 'start');\n  tl1.to(subtitles, 4, {\n    x: '-500px',\n    ease: Elastic.easeOut.slow\n  });\n  tl1.add('story').fromTo(story, 0.45, {\n    y: '40px',\n    opacity: 0,\n    scale: 1.05\n  }, {\n    y: 0,\n    opacity: 1,\n    scale: 1,\n    ease: Elastic.easeOut.slow\n  }, 'start');\n  tl1.add('advantages').fromTo(advantages, 0.45, {\n    y: '40px',\n    opacity: 0,\n    scale: 1.05\n  }, {\n    y: 0,\n    opacity: 1,\n    scale: 1,\n    ease: Elastic.easeOut.slow\n  }, 'start');\n  var scene = new ScrollMagic.Scene({\n    triggerElement: this,\n    triggerHook: 0.6,\n    reverse: true\n  }).setTween(tl1).addIndicators().addTo(controller);\n});\n\nif (document.documentElement.clientWidth > 1024) {\n  $(document).ready(function () {\n    $(window).scroll(function () {\n      var scrollTop = $(window).scrollTop();\n\n      if (scrollTop > 49) {\n        $('body').addClass('header-fixed');\n      } else {\n        $('body').removeClass('header-fixed');\n      }\n    });\n  });\n}\n\n;\n$(document).ready(function () {\n  var _$$slick;\n\n  $('.hero__slider').slick((_$$slick = {\n    dots: true,\n    arrow: false,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    fade: true,\n    infinite: true,\n    autoplaySpeed: 3500,\n    autoplay: true\n  }, _defineProperty(_$$slick, \"infinite\", true), _defineProperty(_$$slick, \"cssEase\", 'cubic-bezier(0.7, 0, 0.3, 1)'), _defineProperty(_$$slick, \"touchThreshold\", 100), _$$slick));\n  $('.client__slider').slick({\n    speed: 1500,\n    autoplay: true,\n    autoplaySpeed: 0,\n    centerMode: true,\n    cssEase: 'linear',\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    variableWidth: true,\n    infinite: true,\n    initialSlide: 1,\n    arrows: false,\n    buttons: false,\n    responsive: [{\n      breakpoint: 1024,\n      settings: {\n        speed: 3000\n      }\n    }]\n  });\n  $('.partner__slider').slick({\n    speed: 1500,\n    autoplay: true,\n    autoplaySpeed: 0,\n    centerMode: true,\n    cssEase: 'linear',\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    variableWidth: true,\n    infinite: true,\n    initialSlide: 1,\n    arrows: false,\n    buttons: false,\n    rtl: true,\n    responsive: [{\n      breakpoint: 1024,\n      settings: {\n        speed: 3000\n      }\n    }]\n  });\n  $('.scrolling__link').on('click', function (event) {\n    event.preventDefault();\n    var id = $(this).attr('href'),\n        top = $(id).offset().top;\n    $('body,html').animate({\n      scrollTop: top\n    }, 1000);\n  });\n}); // TweenLite.set('.hero__title, .hero__title span',{x:'-101%'})\n// var lines = new TimelineMax({repeat:5, repeatDelay:1})\n// .from('.hero__content',0.4,{x:100})\n// .to('.hero__title',1,{x:'0%',ease: Linear.easeNone})\n// .to('.hero__title span',0.6,{x:'0%',ease: Linear.easeNone})\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuanM/OWE3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgbGV0IHRpbWVsaW5lID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgdGltZWxpbmVcbiAgICAuZnJvbVRvKCcuaGVyb19fdGl0bGUnLCAwLjYsXG4gICAgICB7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgICB4OiAnLTQwMHB4JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHg6ICcwJyxcbiAgICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZU91dFxuICAgICAgfSxcbiAgICAgIDAuMVxuICAgIClcbiAgICAuZnJvbVRvKCcuaGVyb19fc3VidGl0bGUnLCAwLjcsXG4gICAgICB7XG4gICAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB4OiAnLTQwMHB4JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgeDogJzBweCcsXG4gICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlT3V0XG4gICAgICB9LFxuICAgICAgMC4zXG4gICAgKTtcbn07XG5cblxuXG4vLyBTY3JvbGxtYWdpY1xubGV0IGNvbnRyb2xsZXIgPSBuZXcgU2Nyb2xsTWFnaWMuQ29udHJvbGxlcigpO1xuXG4kKCdzZWN0aW9uJykuZWFjaChmdW5jdGlvbigpIHtcbiAgbGV0IHRpdGxlcyA9ICQodGhpcykuZmluZCgnLnNlY3Rpb25fX3RpdGxlJyk7XG4gIGxldCBzdWJ0aXRsZXMgPSAkKHRoaXMpLmZpbmQoJy5zZWN0aW9uX19iYWNrVGl0bGUnKTtcbiAgbGV0IHN0b3J5ID0gJCh0aGlzKS5maW5kKCcuYWJvdXRfX3N0b3J5IHAnKTtcbiAgbGV0IGFkdmFudGFnZXMgPSAkKHRoaXMpLmZpbmQoJy5hZHZhbnRhZ2VzX19pdGVtJyk7XG5cbiAgbGV0IHRsMSA9IG5ldyBUaW1lbGluZU1heCh7XG4gICAgcGF1c2U6IHRydWVcbiAgfSk7XG5cblxuICB0bDEuYWRkKCdzdGFydCcpXG4gICAgLmZyb21Ubyh0aXRsZXMsIDAuMzUsXG4gICAgICB7XG4gICAgICAgIHk6ICcxMDBweCcsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHNrZXdZOiAxMCxcbiAgICAgICAgc2tld1g6IDM1XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB5OiAnMHB4JyxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgc2tld1k6IDAsXG4gICAgICAgIHNrZXdYOiAwLFxuICAgICAgICBlYXNlOiBFbGFzdGljLmVhc2VPdXQuc2xvd1xuICAgICAgfSxcbiAgICAgICdzdGFydCdcbiAgICApO1xuXG5cbiAgdGwxLnRvKHN1YnRpdGxlcywgNCwge1xuICAgIHg6ICctNTAwcHgnLFxuICAgIGVhc2U6IEVsYXN0aWMuZWFzZU91dC5zbG93XG4gIH0pO1xuXG5cbiAgdGwxLmFkZCgnc3RvcnknKVxuICAgIC5mcm9tVG8oc3RvcnksIDAuNDUsXG4gICAgICB7XG4gICAgICAgIHk6ICc0MHB4JyxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgc2NhbGU6IDEuMDVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHk6IDAsXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHNjYWxlOiAxLFxuICAgICAgICBlYXNlOiBFbGFzdGljLmVhc2VPdXQuc2xvd1xuICAgICAgfSxcbiAgICAgICdzdGFydCdcbiAgICApO1xuXG5cbiAgdGwxLmFkZCgnYWR2YW50YWdlcycpXG4gICAgLmZyb21UbyhhZHZhbnRhZ2VzLCAwLjQ1LFxuICAgICAge1xuICAgICAgICB5OiAnNDBweCcsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHNjYWxlOiAxLjA1XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB5OiAwLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgZWFzZTogRWxhc3RpYy5lYXNlT3V0LnNsb3dcbiAgICAgIH0sXG4gICAgICAnc3RhcnQnXG4gICAgKTtcblxuXG4gIGxldCBzY2VuZSA9IG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7XG4gICAgdHJpZ2dlckVsZW1lbnQ6IHRoaXMsXG4gICAgdHJpZ2dlckhvb2s6IDAuNixcbiAgICByZXZlcnNlOiB0cnVlXG4gIH0pXG4gICAgLnNldFR3ZWVuKHRsMSlcbiAgICAuYWRkSW5kaWNhdG9ycygpXG4gICAgLmFkZFRvKGNvbnRyb2xsZXIpO1xufSk7XG5cblxuXG5cbmlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPiAxMDI0KSB7XG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgaWYgKHNjcm9sbFRvcCA+IDQ5KSB7XG4gICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaGVhZGVyLWZpeGVkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2hlYWRlci1maXhlZCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cblxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuICAkKCcuaGVyb19fc2xpZGVyJykuc2xpY2soe1xuXG4gICAgZG90czogdHJ1ZSxcbiAgICBhcnJvdzogZmFsc2UsXG4gICAgc2xpZGVzVG9TaG93OiAxLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIGZhZGU6IHRydWUsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgYXV0b3BsYXlTcGVlZDogMzUwMCxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBjc3NFYXNlOiAnY3ViaWMtYmV6aWVyKDAuNywgMCwgMC4zLCAxKScsXG4gICAgdG91Y2hUaHJlc2hvbGQ6IDEwMFxuICB9KTtcblxuICAkKCcuY2xpZW50X19zbGlkZXInKS5zbGljayh7XG4gICAgc3BlZWQ6IDE1MDAsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgYXV0b3BsYXlTcGVlZDogMCxcbiAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIGluaXRpYWxTbGlkZTogMSxcbiAgICBhcnJvd3M6IGZhbHNlLFxuICAgIGJ1dHRvbnM6IGZhbHNlLFxuICAgIHJlc3BvbnNpdmU6IFtcblxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNwZWVkOiAzMDAwLFxuICAgICAgICB9XG4gICAgICB9LFxuICAgIF1cbiAgfSk7XG5cbiAgJCgnLnBhcnRuZXJfX3NsaWRlcicpLnNsaWNrKHtcbiAgICBzcGVlZDogMTUwMCxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBhdXRvcGxheVNwZWVkOiAwLFxuICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgY3NzRWFzZTogJ2xpbmVhcicsXG4gICAgc2xpZGVzVG9TaG93OiAxLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgaW5pdGlhbFNsaWRlOiAxLFxuICAgIGFycm93czogZmFsc2UsXG4gICAgYnV0dG9uczogZmFsc2UsXG4gICAgcnRsOiB0cnVlLFxuICAgIHJlc3BvbnNpdmU6IFtcblxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNwZWVkOiAzMDAwLFxuICAgICAgICB9XG4gICAgICB9LFxuICAgIF1cbiAgfSk7XG5cblxuICAkKCcuc2Nyb2xsaW5nX19saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBpZCA9ICQodGhpcykuYXR0cignaHJlZicpLFxuXG4gICAgICB0b3AgPSAkKGlkKS5vZmZzZXQoKS50b3A7XG5cbiAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtcbiAgICAgIHNjcm9sbFRvcDogdG9wXG4gICAgfSwgMTAwMCk7XG4gIH0pO1xufSk7XG5cblxuXG4vLyBUd2VlbkxpdGUuc2V0KCcuaGVyb19fdGl0bGUsIC5oZXJvX190aXRsZSBzcGFuJyx7eDonLTEwMSUnfSlcblxuLy8gdmFyIGxpbmVzID0gbmV3IFRpbWVsaW5lTWF4KHtyZXBlYXQ6NSwgcmVwZWF0RGVsYXk6MX0pXG4vLyAuZnJvbSgnLmhlcm9fX2NvbnRlbnQnLDAuNCx7eDoxMDB9KVxuLy8gLnRvKCcuaGVyb19fdGl0bGUnLDEse3g6JzAlJyxlYXNlOiBMaW5lYXIuZWFzZU5vbmV9KVxuLy8gLnRvKCcuaGVyb19fdGl0bGUgc3BhbicsMC42LHt4OicwJScsZWFzZTogTGluZWFyLmVhc2VOb25lfSlcblxuIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUtBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVdBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFVQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFRQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQWZBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFoQkE7QUEwQkE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ })

/******/ });