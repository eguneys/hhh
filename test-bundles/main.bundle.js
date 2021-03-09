/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/src/h.js":
/*!***********************!*\
  !*** ./dist/src/h.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"h\": () => (/* binding */ h)\n/* harmony export */ });\n/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is.js */ \"./dist/src/is.js\");\n/* harmony import */ var _vnode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vnode.js */ \"./dist/src/vnode.js\");\n\n\nfunction h(sel, b, c) {\n  var data = {};\n  var children;\n  var text;\n  var i;\n\n  if (c !== undefined) {\n    if (b !== null) {\n      data = b;\n    }\n\n    if (_is_js__WEBPACK_IMPORTED_MODULE_0__.array(c)) {\n      children = c;\n    } else if (_is_js__WEBPACK_IMPORTED_MODULE_0__.primitive(c)) {\n      text = c;\n    } else if (c && c.sel) {\n      children = [c];\n    }\n  } else if (b !== undefined && b !== null) {\n    if (_is_js__WEBPACK_IMPORTED_MODULE_0__.array(b)) {\n      children = b;\n    } else if (_is_js__WEBPACK_IMPORTED_MODULE_0__.primitive(b)) {\n      text = b;\n    } else if (b && b.sel) {\n      children = [b];\n    } else {\n      data = b;\n    }\n  }\n\n  if (children !== undefined) {\n    for (i = 0; i < children.length; i++) {\n      if (_is_js__WEBPACK_IMPORTED_MODULE_0__.primitive(children[i])) {\n        children[i] = (0,_vnode_js__WEBPACK_IMPORTED_MODULE_1__.vnode)(undefined, undefined, undefined, children[i]);\n      }\n    }\n  }\n\n  return (0,_vnode_js__WEBPACK_IMPORTED_MODULE_1__.vnode)(sel, data, children, text);\n}\n\n//# sourceURL=webpack://hhh/./dist/src/h.js?");

/***/ }),

/***/ "./dist/src/htmldomapi.js":
/*!********************************!*\
  !*** ./dist/src/htmldomapi.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"htmlDomApi\": () => (/* binding */ htmlDomApi)\n/* harmony export */ });\nfunction createElement(tagName, options) {\n  return document.createElement(tagName, options);\n}\n\nfunction createTextNode(text) {\n  return document.createTextNode(text);\n}\n\nfunction appendChild(node, child) {\n  node.appendChild(child);\n}\n\nvar htmlDomApi = {\n  createElement: createElement,\n  createTextNode: createTextNode,\n  appendChild: appendChild\n};\n\n//# sourceURL=webpack://hhh/./dist/src/htmldomapi.js?");

/***/ }),

/***/ "./dist/src/init.js":
/*!**************************!*\
  !*** ./dist/src/init.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _htmldomapi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmldomapi.js */ \"./dist/src/htmldomapi.js\");\n\nfunction init() {\n  return function reconcile(vnode) {\n    var api = _htmldomapi_js__WEBPACK_IMPORTED_MODULE_0__.htmlDomApi;\n    var sel = vnode.sel,\n        data = vnode.data,\n        children = vnode.children,\n        text = vnode.text;\n    var $d, $dc;\n\n    if (!sel) {\n      $d = api.createTextNode(text ? text : '');\n      return $d;\n    }\n\n    var _a = sel.split('.'),\n        tagname = _a[0],\n        klass = _a.slice(1);\n\n    $d = api.createElement(tagname, data);\n    klass.forEach(function (_) {\n      var elm = $d;\n      elm.classList.add(_);\n    });\n\n    if (children) {\n      for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {\n        var vc = children_1[_i];\n        $dc = reconcile(vc);\n        api.appendChild($d, $dc);\n      }\n    }\n\n    return $d;\n  };\n}\n\n//# sourceURL=webpack://hhh/./dist/src/init.js?");

/***/ }),

/***/ "./dist/src/is.js":
/*!************************!*\
  !*** ./dist/src/is.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"array\": () => (/* binding */ array),\n/* harmony export */   \"primitive\": () => (/* binding */ primitive)\n/* harmony export */ });\nvar array = Array.isArray;\nfunction primitive(s) {\n  return typeof s === 'string' || typeof s === 'number';\n}\n\n//# sourceURL=webpack://hhh/./dist/src/is.js?");

/***/ }),

/***/ "./dist/src/vnode.js":
/*!***************************!*\
  !*** ./dist/src/vnode.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"vnode\": () => (/* binding */ vnode)\n/* harmony export */ });\nfunction vnode(sel, data, children, text) {\n  return {\n    sel: sel,\n    data: data,\n    children: children,\n    text: text\n  };\n}\n\n//# sourceURL=webpack://hhh/./dist/src/vnode.js?");

/***/ }),

/***/ "./dist/test/core.js":
/*!***************************!*\
  !*** ./dist/test/core.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ core)\n/* harmony export */ });\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ \"./dist/test/util.js\");\n/* harmony import */ var _src_h_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/h.js */ \"./dist/src/h.js\");\n/* harmony import */ var _src_init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/init.js */ \"./dist/src/init.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\n\n\nfunction deep(o, o2) {\n  for (var key in o) {\n    if (o[key] !== o2[key]) {\n      return false;\n    }\n  }\n\n  for (var key in o2) {\n    if (o2[key] !== o[key]) {\n      return false;\n    }\n  }\n\n  return true;\n}\n\nfunction cry(msg, a) {\n  console.log(\"\\u274C \" + msg + \" \" + (a ? a : ''));\n}\n\nfunction na(msg, a, b) {\n  if (!b) {\n    if (!a) {\n      cry(msg);\n    }\n  } else if (_typeof(a) === 'object' && _typeof(b) === 'object') {\n    if (!deep(a, b)) {\n      cry(msg, a);\n    }\n  } else if (a !== b) {\n    cry(msg, a);\n  }\n}\n\nfunction jss(a) {\n  console.log(JSON.stringify(a));\n}\n\nfunction log(msg) {\n  console.log(msg);\n}\n\nfunction core() {\n  var reconcile = (0,_src_init_js__WEBPACK_IMPORTED_MODULE_2__.init)();\n  var elm;\n  (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.it)('tag', function () {\n    na('div', (0,_src_h_js__WEBPACK_IMPORTED_MODULE_1__.h)('div').sel, 'div');\n    na('a', (0,_src_h_js__WEBPACK_IMPORTED_MODULE_1__.h)('a').sel, 'a');\n    jss((0,_src_h_js__WEBPACK_IMPORTED_MODULE_1__.h)('div'));\n  });\n  (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.it)('children', function () {\n    var vnode = (0,_src_h_js__WEBPACK_IMPORTED_MODULE_1__.h)('div', [(0,_src_h_js__WEBPACK_IMPORTED_MODULE_1__.h)('span.hello'), (0,_src_h_js__WEBPACK_IMPORTED_MODULE_1__.h)('b.world')]);\n    na('tag', vnode.sel, 'div');\n    var children = vnode.children;\n    na('c0', children[0].sel, 'span.hello');\n    na('c1', children[1].sel, 'b.world');\n    jss(vnode);\n  });\n  (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.it)('props', function () {\n    var vnode = (0,_src_h_js__WEBPACK_IMPORTED_MODULE_1__.h)('div', {}, (0,_src_h_js__WEBPACK_IMPORTED_MODULE_1__.h)('span.hello'));\n    na('tag', vnode.sel, 'div');\n    var children = vnode.children;\n    na('c0', children[0].sel, 'span.hello');\n  });\n  (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.it)('textcontent children', function () {\n    var vnode = (0,_src_h_js__WEBPACK_IMPORTED_MODULE_1__.h)('div', ['Im a string']);\n    var children = vnode.children;\n    na('c0', children[0].text, 'Im a string');\n  });\n  (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.it)('textcontent', function () {\n    var vnode = (0,_src_h_js__WEBPACK_IMPORTED_MODULE_1__.h)('a', 'Im a string');\n    na('text', vnode.text, 'Im a string');\n  });\n  (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.it)('props+text', function () {\n    var vnode = (0,_src_h_js__WEBPACK_IMPORTED_MODULE_1__.h)('a', {}, 'Im a string');\n    na('text', vnode.text, 'Im a string');\n  });\n  (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.it)('\"null\" props', function () {\n    var vnode = (0,_src_h_js__WEBPACK_IMPORTED_MODULE_1__.h)('a', null);\n    na('data', vnode.data, {});\n    vnode = (0,_src_h_js__WEBPACK_IMPORTED_MODULE_1__.h)('a', null, ['Im a string']);\n    var children = vnode.children;\n    na('c0', children[0].text, 'Im a string');\n  });\n  (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.it)('has tag', function () {\n    elm = reconcile((0,_src_h_js__WEBPACK_IMPORTED_MODULE_1__.h)('div'));\n    na('tag', elm.tagName, 'DIV');\n  });\n  (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.it)('receives classes in selector', function () {\n    elm = reconcile((0,_src_h_js__WEBPACK_IMPORTED_MODULE_1__.h)('div', [(0,_src_h_js__WEBPACK_IMPORTED_MODULE_1__.h)('i.am.a.class')]));\n    na('t1', elm.firstChild.tagName, 'I');\n    na('c1', elm.firstChild.classList.contains('am'));\n    na('c2', elm.firstChild.classList.contains('a'));\n    na('c3', elm.firstChild.classList.contains('class'));\n  });\n  (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.it)('can create elements with text content', function () {\n    elm = reconcile((0,_src_h_js__WEBPACK_IMPORTED_MODULE_1__.h)('div', ['I am a string']));\n    na('text', elm.innerHTML, 'I am a string');\n  });\n  (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.it)('can create elements with span and text', function () {\n    elm = reconcile((0,_src_h_js__WEBPACK_IMPORTED_MODULE_1__.h)('a', [(0,_src_h_js__WEBPACK_IMPORTED_MODULE_1__.h)('span'), 'I am a string']));\n    na('span', elm.childNodes[0].tagName, 'SPAN');\n    na('text', elm.childNodes[1].textContent, 'I am a string');\n  });\n}\n\n//# sourceURL=webpack://hhh/./dist/test/core.js?");

/***/ }),

/***/ "./dist/test/test.js":
/*!***************************!*\
  !*** ./dist/test/test.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ \"./dist/test/util.js\");\n/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core.js */ \"./dist/test/core.js\");\n\n\n\n(function () {\n  (0,_core_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n  (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.run)();\n})();\n\n//# sourceURL=webpack://hhh/./dist/test/test.js?");

/***/ }),

/***/ "./dist/test/util.js":
/*!***************************!*\
  !*** ./dist/test/util.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"run\": () => (/* binding */ run),\n/* harmony export */   \"it\": () => (/* binding */ it)\n/* harmony export */ });\nfunction testThrowed(t) {\n  console.log(\"\\uD83D\\uDC80 \" + t.msg + \" \" + t.err);\n}\n\nfunction testBegin(t) {\n  console.log(\"\" + t.msg);\n}\n\nvar stset = [];\nfunction run() {\n  var errs = [];\n  stset.forEach(function (_) {\n    try {\n      testBegin(_);\n\n      _.fn();\n    } catch (e) {\n      _.err = e;\n    }\n  });\n  stset.filter(function (_) {\n    return !!_.err;\n  }).forEach(testThrowed);\n}\nfunction it(msg, fn) {\n  var test = {\n    msg: msg,\n    fn: fn\n  };\n  stset.push(test);\n}\n\n//# sourceURL=webpack://hhh/./dist/test/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./dist/test/test.js");
/******/ 	
/******/ })()
;