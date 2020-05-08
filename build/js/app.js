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

eval("function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nif (document.documentElement.clientWidth > 1024) {\n  $(document).ready(function () {\n    $(window).scroll(function () {\n      var scrollTop = $(window).scrollTop();\n\n      if (scrollTop > 49) {\n        $('body').addClass('header-fixed');\n      } else {\n        $('body').removeClass('header-fixed');\n      }\n    });\n  });\n}\n\n;\n$(document).ready(function () {\n  var _$$slick;\n\n  $('.hero__slider').slick((_$$slick = {\n    dots: true,\n    arrow: false,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    fade: true,\n    infinite: true,\n    autoplaySpeed: 3500,\n    autoplay: true\n  }, _defineProperty(_$$slick, \"infinite\", true), _defineProperty(_$$slick, \"cssEase\", 'cubic-bezier(0.7, 0, 0.3, 1)'), _defineProperty(_$$slick, \"touchThreshold\", 100), _$$slick));\n  $('.client__slider').slick({\n    speed: 1500,\n    autoplay: true,\n    autoplaySpeed: 0,\n    centerMode: true,\n    cssEase: 'linear',\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    variableWidth: true,\n    infinite: true,\n    initialSlide: 1,\n    arrows: false,\n    buttons: false,\n    responsive: [{\n      breakpoint: 1024,\n      settings: {\n        speed: 3000\n      }\n    }]\n  });\n  $('.partner__slider').slick({\n    speed: 1500,\n    autoplay: true,\n    autoplaySpeed: 0,\n    centerMode: true,\n    cssEase: 'linear',\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    variableWidth: true,\n    infinite: true,\n    initialSlide: 1,\n    arrows: false,\n    buttons: false,\n    rtl: true,\n    responsive: [{\n      breakpoint: 1024,\n      settings: {\n        speed: 3000\n      }\n    }]\n  });\n  $('.scrolling__link').on('click', function (event) {\n    event.preventDefault();\n    var id = $(this).attr('href'),\n        top = $(id).offset().top;\n    $('body,html').animate({\n      scrollTop: top\n    }, 1000);\n  });\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuanM/OWE3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoID4gMTAyNCkge1xuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgIGlmIChzY3JvbGxUb3AgPiA0OSkge1xuICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2hlYWRlci1maXhlZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdoZWFkZXItZml4ZWQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgJCgnLmhlcm9fX3NsaWRlcicpLnNsaWNrKHtcblxuICAgIGRvdHM6IHRydWUsXG4gICAgYXJyb3c6IGZhbHNlLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBmYWRlOiB0cnVlLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIGF1dG9wbGF5U3BlZWQ6IDM1MDAsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgY3NzRWFzZTogJ2N1YmljLWJlemllcigwLjcsIDAsIDAuMywgMSknLFxuICAgIHRvdWNoVGhyZXNob2xkOiAxMDBcbiAgfSk7XG5cbiAgJCgnLmNsaWVudF9fc2xpZGVyJykuc2xpY2soe1xuICAgIHNwZWVkOiAxNTAwLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGF1dG9wbGF5U3BlZWQ6IDAsXG4gICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICBjc3NFYXNlOiAnbGluZWFyJyxcbiAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBpbml0aWFsU2xpZGU6IDEsXG4gICAgYXJyb3dzOiBmYWxzZSxcbiAgICBidXR0b25zOiBmYWxzZSxcbiAgICByZXNwb25zaXZlOiBbXG5cbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzcGVlZDogMzAwMCxcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICBdXG4gIH0pO1xuXG4gICQoJy5wYXJ0bmVyX19zbGlkZXInKS5zbGljayh7XG4gICAgc3BlZWQ6IDE1MDAsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgYXV0b3BsYXlTcGVlZDogMCxcbiAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIGluaXRpYWxTbGlkZTogMSxcbiAgICBhcnJvd3M6IGZhbHNlLFxuICAgIGJ1dHRvbnM6IGZhbHNlLFxuICAgIHJ0bDogdHJ1ZSxcbiAgICByZXNwb25zaXZlOiBbXG5cbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzcGVlZDogMzAwMCxcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICBdXG4gIH0pO1xuXG5cbiAgJCgnLnNjcm9sbGluZ19fbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKSxcblxuICAgICAgdG9wID0gJChpZCkub2Zmc2V0KCkudG9wO1xuXG4gICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7XG4gICAgICBzY3JvbGxUb3A6IHRvcFxuICAgIH0sIDEwMDApO1xuICB9KTtcbn0pO1xuIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFmQTtBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBaEJBO0FBMEJBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ })

/******/ });