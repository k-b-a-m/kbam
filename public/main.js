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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/classes/Engine.js":
/*!**********************************!*\
  !*** ./client/classes/Engine.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Engine; });\nconst canvas = document.getElementById(\"canvas\");\nconst ctx = canvas.getContext(\"2d\");\n\nfunction percentX(percent) {\n  return Math.round(percent / 100 * window.innerWidth);\n}\nfunction percentY(percent) {\n  return Math.round(percent / 100 * window.innerHeight);\n}\n\nclass Engine {\n  constructor() {\n    this.newGame = world => {\n      this.createWorld(world);\n    };\n\n    this.createWorld = world => {\n      // ctx.strokeRect(percentX(50), percentY(50), world.size.w, world.size.h);\n      ctx.fillRect(150, 10, 1000, 1000);\n      ctx.beginPath();\n      ctx.arc(100, 100, 75, 0, 2 * Math.PI);\n      ctx.lineWidth = 5;\n      ctx.stroke();\n    };\n\n    this.gameOver = () => {};\n\n    this.worldState = {};\n    this.playersState = [];\n    this.weaponsState = [];\n    this.obstaclesState = [];\n    this.buildingsState = [];\n  }\n};\n\n//# sourceURL=webpack:///./client/classes/Engine.js?");

/***/ }),

/***/ "./client/classes/Player.js":
/*!**********************************!*\
  !*** ./client/classes/Player.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\nclass Player {\n    constructor(x, y, health = 100) {\n        this.shoot = coordinates => {};\n\n        this.move = input => {};\n\n        this.getPosition = () => {\n            return [this.x, this.y];\n        };\n\n        this.health = health;\n        this.x = x;\n        this.y = y;\n        this.height = 30;\n        this.width = 30;\n    }\n\n}\n\n//# sourceURL=webpack:///./client/classes/Player.js?");

/***/ }),

/***/ "./client/classes/World.js":
/*!*********************************!*\
  !*** ./client/classes/World.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return World; });\nclass World {\n  constructor(size = { w: window.innerWidth, h: window.innerHeight }, buildings, obstacles, weapons) {\n    this.size = size;\n    this.buildings = buildings || [];\n    this.obstacles = obstacles || [];\n    this.weapons = weapons || [];\n  }\n};\n\n//# sourceURL=webpack:///./client/classes/World.js?");

/***/ }),

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Player */ \"./client/classes/Player.js\");\n/* harmony import */ var _classes_Engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Engine */ \"./client/classes/Engine.js\");\n/* harmony import */ var _classes_World__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/World */ \"./client/classes/World.js\");\n\n\n\nconst canvas = document.getElementById(\"canvas\");\nconst ctx = canvas.getContext(\"2d\");\n\nconst world = new _classes_World__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nconst engine = new _classes_Engine__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nengine.newGame(world);\n\n//io is already declared from socket.io/socket.io.js in index.html\nconst socket = io(window.location.origin);\n\nsocket.on(\"connect\", function () {\n  console.log(\"I have made a connection to the server!\");\n});\n\n// //Make new player at random position\n// const player = new Player(Math.random() * 500, Math.random() * 500);\n\n// //move\n// let move = {\n//   up: false,\n//   down: false,\n//   right: false,\n//   left: false\n// };\n\n// //Key down event listener to continue moving\n// document.addEventListener(\"keydown\", event => {\n//   switch (event.keyCode) {\n//     case 38: //Up Arrow\n//     case 87: //W\n//       move.up = true;\n//       break;\n//     case 40: //Down Arrow\n//     case 83: // S\n//       move.down = true;\n//       break;\n//     case 39: //Right Arrow\n//     case 68: // D\n//       move.right = true;\n//       break;\n//     case 37: //Left Arrow\n//     case 65: // A\n//       move.left = true;\n//       break;\n//   }\n// });\n\n// //Key up event listener to stop moving\n// document.addEventListener(\"keyup\", (event) => {\n//   switch (event.keyCode) {\n//     case 38: //Up Arrow\n//     case 87: //W\n//       move.up = false;\n//       break;\n//     case 40: //Down Arrow\n//     case 83: // S\n//       move.down = false;\n//       break;\n//     case 39: //Right Arrow\n//     case 68: // D\n//       move.right = false;\n//       break;\n//     case 37: //Left Arrow\n//     case 65: // A\n//       move.left = false;\n//       break;\n//   }\n// });\n\n// //Send new player to socket\n// socket.emit(\"player\", player);\n\n// //Emit move to server\n// // setInterval(() => socket.emit(\"move\", move), 1000/60)\n\n// //Listen for updates on other players\n// socket.on(\"player\", player => {\n//   draw(player);\n// });\n\n// //Draw positions of all players\n// socket.on(\"allPlayers\", allPlayers => {\n//   console.log(allPlayers);\n\n//   //Clear canvas before drawing\n//   // ctx.clearRect(0, 0, 1000, 1000)\n//   for (let p in allPlayers){\n//     draw(allPlayers[p])\n//   }\n// });\n\n// //This function need to be rewritten in a game function\n// const draw = obj => {\n//   ctx.fillStyle = \"#000000\";\n//   ctx.fillRect(obj.x, obj.y, obj.height, obj.width);\n// };\n\n//# sourceURL=webpack:///./client/index.js?");

/***/ })

/******/ });