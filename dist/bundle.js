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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("/* MAIN FILE : ALL ACTIONS TO CONNECT VIEW WITH SERVER */\nconst config = {\n    apiKey: \"AIzaSyBo9ND2NmHSGXpLb6-CRp8Epyn9lRQJbP8\",\n    authDomain: \"slideshow-dc259.firebaseapp.com\",\n    databaseURL: \"https://slideshow-dc259.firebaseio.com\",\n    projectId: \"slideshow-dc259\",\n    storageBucket: \"slideshow-dc259.appspot.com\",\n    messagingSenderId: \"104655350834\"\n};\nfirebase.initializeApp(config);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcz8zNDc5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNQUlOIEZJTEUgOiBBTEwgQUNUSU9OUyBUTyBDT05ORUNUIFZJRVcgV0lUSCBTRVJWRVIgKi9cbmNvbnN0IGNvbmZpZyA9IHtcbiAgICBhcGlLZXk6IFwiQUl6YVN5Qm85TkQyTm1IU0dYcExiNi1DUnA4RXB5bjlsUlFKYlA4XCIsXG4gICAgYXV0aERvbWFpbjogXCJzbGlkZXNob3ctZGMyNTkuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9zbGlkZXNob3ctZGMyNTkuZmlyZWJhc2Vpby5jb21cIixcbiAgICBwcm9qZWN0SWQ6IFwic2xpZGVzaG93LWRjMjU5XCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJzbGlkZXNob3ctZGMyNTkuYXBwc3BvdC5jb21cIixcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCIxMDQ2NTUzNTA4MzRcIlxufTtcbmZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);