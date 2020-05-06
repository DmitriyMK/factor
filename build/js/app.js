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

eval("function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// import sayHello from './lib/sayHello.js';\n$(document).ready(function () {\n  var _$$slick;\n\n  $('.hero__slider').slick((_$$slick = {\n    dots: true,\n    arrow: false,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    fade: true,\n    infinite: true,\n    autoplaySpeed: 3500,\n    autoplay: true\n  }, _defineProperty(_$$slick, \"infinite\", true), _defineProperty(_$$slick, \"cssEase\", 'cubic-bezier(0.7, 0, 0.3, 1)'), _$$slick));\n  $('.client__slider').slick({\n    speed: 6000,\n    autoplay: true,\n    autoplaySpeed: 0,\n    centerMode: true,\n    cssEase: 'linear',\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    variableWidth: true,\n    infinite: true,\n    initialSlide: 1,\n    arrows: false,\n    buttons: false\n  });\n  $('.partner__slider').slick({\n    speed: 6000,\n    autoplay: true,\n    autoplaySpeed: 0,\n    centerMode: true,\n    cssEase: 'linear',\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    variableWidth: true,\n    infinite: true,\n    initialSlide: 1,\n    arrows: false,\n    buttons: false,\n    rtl: true\n  });\n  $('.scrolling__link').on('click', function (event) {\n    event.preventDefault();\n    var id = $(this).attr('href'),\n        top = $(id).offset().top;\n    $('body,html').animate({\n      scrollTop: top\n    }, 1000);\n  });\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuanM/OWE3OCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgc2F5SGVsbG8gZnJvbSAnLi9saWIvc2F5SGVsbG8uanMnO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuICAkKCcuaGVyb19fc2xpZGVyJykuc2xpY2soe1xuXG4gICAgZG90czogdHJ1ZSxcbiAgICBhcnJvdzogZmFsc2UsXG4gICAgc2xpZGVzVG9TaG93OiAxLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIGZhZGU6IHRydWUsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgYXV0b3BsYXlTcGVlZDogMzUwMCxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBjc3NFYXNlOiAnY3ViaWMtYmV6aWVyKDAuNywgMCwgMC4zLCAxKScsXG4gICAgLy8gdG91Y2hUaHJlc2hvbGQ6IDEwMFxuICB9KTtcblxuICAkKCcuY2xpZW50X19zbGlkZXInKS5zbGljayh7XG4gICAgc3BlZWQ6IDYwMDAsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgYXV0b3BsYXlTcGVlZDogMCxcbiAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIGluaXRpYWxTbGlkZTogMSxcbiAgICBhcnJvd3M6IGZhbHNlLFxuICAgIGJ1dHRvbnM6IGZhbHNlXG4gIH0pO1xuXG4gICQoJy5wYXJ0bmVyX19zbGlkZXInKS5zbGljayh7XG4gICAgc3BlZWQ6IDYwMDAsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgYXV0b3BsYXlTcGVlZDogMCxcbiAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIGluaXRpYWxTbGlkZTogMSxcbiAgICBhcnJvd3M6IGZhbHNlLFxuICAgIGJ1dHRvbnM6IGZhbHNlLFxuICAgIHJ0bDogdHJ1ZVxuICB9KTtcblxuXG4gICQoJy5zY3JvbGxpbmdfX2xpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdocmVmJyksXG5cbiAgICAgIHRvcCA9ICQoaWQpLm9mZnNldCgpLnRvcDtcblxuICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe1xuICAgICAgc2Nyb2xsVG9wOiB0b3BcbiAgICB9LCAxMDAwKTtcbiAgfSk7XG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQWlCQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ })

/******/ });