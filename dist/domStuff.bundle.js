"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["domStuff"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Quicksand-VariableFont_wght.ttf */ "./src/Quicksand-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./cloud-background.jpg */ "./src/cloud-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: Quicksand;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n* {\n    margin: 0;\n    box-sizing: border-box;\n    font-family: monospace;\n}\n\nbody,\nhtml {\n    min-height: 100dvh;\n}\n\nhtml {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center center fixed; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n}\nbody {\n    display: flex;\n}\n\n.main {\n    flex: 1;\n    font-size: 30px;\n}\n\n/* Search form -------------------------------------------------- */\n\n.form-div {\n    width: 400px;\n    height: 40px;\n    display: flex;\n    position: relative;\n    margin: auto;\n    margin-top: 3rem;\n}\n\n    form {\n        height: fit-content;\n        display: flex;\n    }\n\n    .form-div input {\n        border: none;\n        border-radius: 6px;\n        height: 40px;\n        width: 400px;\n        font-size: 20px;\n        padding: 0 0 0 15px;\n    }\n\n    form button {\n        position: absolute;\n        right: 0;\n        border-radius: 6px;\n        border: 1px solid blue;\n        background-color: #c8ffe6;\n        cursor: pointer;\n        height: 100%;\n        width: 100px;\n        padding: 0;\n        font-size: 18px;\n        z-index: 1;\n    }\n\n    input:active,\n    input:focus {\n        outline: none;\n    }\n\nul {\n    width: fit-content;\n    margin: auto;\n    padding: 0;\n    position: absolute;\n    top: 40px;\n}\n\nli {\n    list-style: none;\n    background-color: #EEE;\n    width: 400px;\n    padding: 20px 10px;\n    font-size: 18px;\n    display: grid;\n    grid: auto / 3fr 2fr;\n    position: relative;\n}\n\nli.search-item:hover {\n    background-color: #e9e9e9;\n}\n\n/* ------------------------------------------------------------- */\n\n\n/* Weather card -------------------------------------------------------- */\n\n.weather-card {\n    gap: 2rem;\n    width: 500px;\n    max-width: 90dvw;\n    min-height: fit-content;\n    margin: auto;\n    margin-top: 2rem;\n    padding: 1rem 3rem;\n    font-size: 24px;\n    text-align: center;\n    transition: all 2s ease-in-out;\n    /*  */\n\n    border: 1px solid #c8ffe6;\n    border-radius: 4px;\n    background-color: #c8ffe6ac;\n}\n\n    .weather-card p {\n        font-family: Quicksand;\n    }\n\n    .main-info {\n        display: grid;\n        grid-template-rows: auto 2fr 1fr 1fr;\n        font-size: 32px;\n        place-items: center;\n    }\n\n        .city-name,\n        .main-temp {\n            font-size: 50px;\n            font-weight: bold;\n        }\n\n        .main-temp {\n            padding: 10px;\n        }\n\n    .additional-info {\n        display: grid;\n        grid: 1fr 1fr / 1fr 1fr 1fr;\n        padding: 3rem 0;\n    }\n        .additional-info div {\n            padding: 1rem;\n        }\n        .sunset-container {\n            grid-area: 2 / 1 / 3 / 2;\n        }\n\n        .description-container {\n            grid-area: 1 / 2 / 3 / 3;\n            display: grid;\n            grid-template-rows: 1fr 1fr;\n        }\n\n\n.hide-card {\n    opacity: 0;\n}\n\n\n\n\n\n\n\n\n\n\n\n.hidden {\n    position: absolute;\n    height: 0;\n    width: 0;\n    padding: 0;\n    margin: 0;\n    opacity: 0;\n    visibility: hidden;\n}\n\nspan.hidden {\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    z-index: 2;\n    visibility: visible;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,4CAA6C;AACjD;;AAEA;IACI,SAAS;IACT,sBAAsB;IACtB,sBAAsB;AAC1B;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;IACI,iFAAqE;IACrE,8BAA8B;IAC9B,2BAA2B;IAC3B,yBAAyB;IACzB,sBAAsB;AAC1B;AACA;IACI,aAAa;AACjB;;AAEA;IACI,OAAO;IACP,eAAe;AACnB;;AAEA,mEAAmE;;AAEnE;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,gBAAgB;AACpB;;IAEI;QACI,mBAAmB;QACnB,aAAa;IACjB;;IAEA;QACI,YAAY;QACZ,kBAAkB;QAClB,YAAY;QACZ,YAAY;QACZ,eAAe;QACf,mBAAmB;IACvB;;IAEA;QACI,kBAAkB;QAClB,QAAQ;QACR,kBAAkB;QAClB,sBAAsB;QACtB,yBAAyB;QACzB,eAAe;QACf,YAAY;QACZ,YAAY;QACZ,UAAU;QACV,eAAe;QACf,UAAU;IACd;;IAEA;;QAEI,aAAa;IACjB;;AAEJ;IACI,kBAAkB;IAClB,YAAY;IACZ,UAAU;IACV,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA,kEAAkE;;;AAGlE,0EAA0E;;AAE1E;IACI,SAAS;IACT,YAAY;IACZ,gBAAgB;IAChB,uBAAuB;IACvB,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,8BAA8B;IAC9B,KAAK;;IAEL,yBAAyB;IACzB,kBAAkB;IAClB,2BAA2B;AAC/B;;IAEI;QACI,sBAAsB;IAC1B;;IAEA;QACI,aAAa;QACb,oCAAoC;QACpC,eAAe;QACf,mBAAmB;IACvB;;QAEI;;YAEI,eAAe;YACf,iBAAiB;QACrB;;QAEA;YACI,aAAa;QACjB;;IAEJ;QACI,aAAa;QACb,2BAA2B;QAC3B,eAAe;IACnB;QACI;YACI,aAAa;QACjB;QACA;YACI,wBAAwB;QAC5B;;QAEA;YACI,wBAAwB;YACxB,aAAa;YACb,2BAA2B;QAC/B;;;AAGR;IACI,UAAU;AACd;;;;;;;;;;;;AAYA;IACI,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,UAAU;IACV,SAAS;IACT,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,MAAM;IACN,SAAS;IACT,QAAQ;IACR,OAAO;IACP,YAAY;IACZ,WAAW;IACX,UAAU;IACV,mBAAmB;AACvB","sourcesContent":["@font-face {\n    font-family: Quicksand;\n    src: url('./Quicksand-VariableFont_wght.ttf');\n}\n\n* {\n    margin: 0;\n    box-sizing: border-box;\n    font-family: monospace;\n}\n\nbody,\nhtml {\n    min-height: 100dvh;\n}\n\nhtml {\n    background: url(./cloud-background.jpg) no-repeat center center fixed; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n}\nbody {\n    display: flex;\n}\n\n.main {\n    flex: 1;\n    font-size: 30px;\n}\n\n/* Search form -------------------------------------------------- */\n\n.form-div {\n    width: 400px;\n    height: 40px;\n    display: flex;\n    position: relative;\n    margin: auto;\n    margin-top: 3rem;\n}\n\n    form {\n        height: fit-content;\n        display: flex;\n    }\n\n    .form-div input {\n        border: none;\n        border-radius: 6px;\n        height: 40px;\n        width: 400px;\n        font-size: 20px;\n        padding: 0 0 0 15px;\n    }\n\n    form button {\n        position: absolute;\n        right: 0;\n        border-radius: 6px;\n        border: 1px solid blue;\n        background-color: #c8ffe6;\n        cursor: pointer;\n        height: 100%;\n        width: 100px;\n        padding: 0;\n        font-size: 18px;\n        z-index: 1;\n    }\n\n    input:active,\n    input:focus {\n        outline: none;\n    }\n\nul {\n    width: fit-content;\n    margin: auto;\n    padding: 0;\n    position: absolute;\n    top: 40px;\n}\n\nli {\n    list-style: none;\n    background-color: #EEE;\n    width: 400px;\n    padding: 20px 10px;\n    font-size: 18px;\n    display: grid;\n    grid: auto / 3fr 2fr;\n    position: relative;\n}\n\nli.search-item:hover {\n    background-color: #e9e9e9;\n}\n\n/* ------------------------------------------------------------- */\n\n\n/* Weather card -------------------------------------------------------- */\n\n.weather-card {\n    gap: 2rem;\n    width: 500px;\n    max-width: 90dvw;\n    min-height: fit-content;\n    margin: auto;\n    margin-top: 2rem;\n    padding: 1rem 3rem;\n    font-size: 24px;\n    text-align: center;\n    transition: all 2s ease-in-out;\n    /*  */\n\n    border: 1px solid #c8ffe6;\n    border-radius: 4px;\n    background-color: #c8ffe6ac;\n}\n\n    .weather-card p {\n        font-family: Quicksand;\n    }\n\n    .main-info {\n        display: grid;\n        grid-template-rows: auto 2fr 1fr 1fr;\n        font-size: 32px;\n        place-items: center;\n    }\n\n        .city-name,\n        .main-temp {\n            font-size: 50px;\n            font-weight: bold;\n        }\n\n        .main-temp {\n            padding: 10px;\n        }\n\n    .additional-info {\n        display: grid;\n        grid: 1fr 1fr / 1fr 1fr 1fr;\n        padding: 3rem 0;\n    }\n        .additional-info div {\n            padding: 1rem;\n        }\n        .sunset-container {\n            grid-area: 2 / 1 / 3 / 2;\n        }\n\n        .description-container {\n            grid-area: 1 / 2 / 3 / 3;\n            display: grid;\n            grid-template-rows: 1fr 1fr;\n        }\n\n\n.hide-card {\n    opacity: 0;\n}\n\n\n\n\n\n\n\n\n\n\n\n.hidden {\n    position: absolute;\n    height: 0;\n    width: 0;\n    padding: 0;\n    margin: 0;\n    opacity: 0;\n    visibility: hidden;\n}\n\nspan.hidden {\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    z-index: 2;\n    visibility: visible;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom-stuff.js":
/*!**************************!*\
  !*** ./src/dom-stuff.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


    // function to create element and add classes in  one line
const createClassedElement = (type, classes) => {
    let element = document.createElement(type);
    element.className = classes;
    return element;
}

    // main div to wrap all content
let main = createClassedElement('div', 'main');
document.body.append(main);

    //div to wrap form and eventual dropdown menu
let formDiv = createClassedElement('div', 'form-div');

    // create form to search for city
let form = document.createElement('form');
let searchBar = document.createElement('input');
    searchBar.placeholder = 'Enter city';
    searchBar.maxLength = 20;
let searchButton = document.createElement('button');
    searchButton.textContent = 'Search'

    // append form to wrapper and append wrapper to main
formDiv.appendChild(form)
form.append(searchBar, searchButton);
main.append(formDiv);












    // if search dropdown exists empty it
const emptyDropdownMenu = () => {
    if (document.querySelector('.search-dropdown')) {
        document.querySelector('.search-dropdown').remove();
    };
    let element = createClassedElement('ul', 'search-dropdown');
    // formDiv.appendChild(element);
    document.querySelector('form').after(element);
}

    // function to create each list item for search dropdown
const createListItem = (name, state, hiddenInfo) => {
    let element = createClassedElement('li', 'search-item')

    let cityName = createClassedElement('p', 'city-name');
        cityName.textContent = name;
    let stateName = createClassedElement('p', 'state');
        stateName.textContent = state;

    // add lat/long info for API weather call and hide it w css;
    let hidden = createClassedElement('span', 'hidden');
        hidden.textContent = hiddenInfo;
    
    element.append(cityName, stateName, hidden)

        // before returning element, add event listener to 
        // fill page with data if clicked and empty dropdown
    element.addEventListener('click', (e) => {
        //
        //
        // check if item is only item in dropdown, if only item them search weather based by 
        // name so that api doesn't confuse coordinates with a different city?
        //
        //
        let coords = hiddenInfo.split(', ');
        let lat = coords[0]
        let lon = coords[1]
        populateWeatherCard(getWeather(lat, lon));
        emptyDropdownMenu();
    })
    return element
}

const createWeatherCard = () => {
    let element = createClassedElement('div', 'weather-card')

    let mainInfo = createClassedElement('div', 'main-info');
        let dateTime = createClassedElement('p', 'date-time');
            dateTime.textContent = 'DATETIME'
        let cityName = createClassedElement('p', 'city-name');
            cityName.textContent = 'CITYNAME'
        let mainTemp = createClassedElement('p', 'main-temp');
            mainTemp.textContent = '20°C'
        let feelsLike = createClassedElement('p', 'feels-like');
            feelsLike.textContent = 'FEELS LIKE 22°C'

    mainInfo.append(dateTime, cityName, mainTemp, feelsLike);

    let additionalInfo = createClassedElement('div', 'additional-info');
        let sunriseContainer = createClassedElement('div', 'sunrise-container');
            let sunrise = createClassedElement('p');
                sunrise.textContent = 'Sunrise'
            let riseTime = createClassedElement('p', 'sunrise-time');
            sunriseContainer.append(sunrise, riseTime);

        let sunsetContainer = createClassedElement('div', 'sunset-container');
            let sunset = createClassedElement('p');
                sunset.textContent = 'Sunset'
            let sunsetTime = createClassedElement('p', 'sunset-time');
            sunsetContainer.append(sunset, sunsetTime);

        let descriptionContainer = createClassedElement('div', 'description-container');
            let description = createClassedElement('p', 'description');
            let descriptionImg = createClassedElement('div', 'description-img');
            descriptionContainer.append(description, descriptionImg);

        let humidityContainer = createClassedElement('div', 'humidity-container');
            let humidity = createClassedElement('p');
                humidity.textContent = 'Humidity'
            let humidityValue = createClassedElement('p', 'humidity-value');
            humidityContainer.append(humidity, humidityValue);

        let windContainer = createClassedElement('div', 'wind-container');
            let wind = createClassedElement('p');
                wind.textContent = 'Wind'
            let windValue = createClassedElement('p', 'wind-value');
            windContainer.append(wind, windValue);

    additionalInfo.append(sunriseContainer, sunsetContainer, descriptionContainer, humidityContainer, windContainer)

    element.append(mainInfo, additionalInfo);
    main.appendChild(element);
}

createWeatherCard();


async function populateSearchDropdown() {
    let dropdown = document.querySelector('.search-dropdown');
    let results = await _index__WEBPACK_IMPORTED_MODULE_0__.getCities(searchBar.value)
        .then(results => {
            results.forEach(city => {
                let name = city.name;
                let state = city.state;
                let lat = city.lat;
                let lon = city.lon;
                let item = createListItem(name, state, `${lat}, ${lon}`)
                document.querySelector('.search-dropdown').appendChild(item)
            })
        })
}

async function getWeather (lat, lon) {
    let weather = await _index__WEBPACK_IMPORTED_MODULE_0__.getWeatherByCoords(lat, lon)
    return weather
}

const twelveHour = (time) => {
    let timeArr = time.split(':')
    let hour = timeArr[0];
    hour = parseFloat(hour);

    if ( hour > 12) {
        hour -= 12;
        timeArr[0] = hour;
        return timeArr.join(':');
    }


    return timeArr.join(':');
}

async function populateWeatherCard (weather) {
    let weatherData = await weather;

    let day = new Date().toString().split(' ').slice(0, 4).join(' ');
    let time = new Date().toString().split(' ').slice(4, 5).join('');
    time = twelveHour(time);
    console.log(time)
    
    // document.querySelector('.date-time').textContent = 


    document.querySelector('.city-name').textContent = weatherData.name;



    console.log(weatherData);
}





// EVENT LISTENERS ------------------------------------------------------------

searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    emptyDropdownMenu();
    populateSearchDropdown();
    searchBar.value = '';
})

main.addEventListener('click', (e) => {
    if (e.target == main) {
        emptyDropdownMenu();
    }
})









/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCities": () => (/* binding */ getCities),
/* harmony export */   "getIcon": () => (/* binding */ getIcon),
/* harmony export */   "getWeatherByCoords": () => (/* binding */ getWeatherByCoords)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


    // OpenWeather API
// Your API key is e94982487f044be7ccc7b3ba2a88955d;
//
    // Example of API call for weather from city name :
// http://api.openweathermap.org/data/2.5/weather?q=London&APPID=e94982487f044be7ccc7b3ba2a88955d
//

    // Example of API call to get city coords :
//http://api.openweathermap.org/geo/1.0/direct?q=Oshawa&limit=5&appid=e94982487f044be7ccc7b3ba2a88955d
//

    // Example of API call for weather from coords (lat/lon) :
//https://api.openweathermap.org/data/2.5/weather?lat=43.89&lon=-78.86&appid=e94982487f044be7ccc7b3ba2a88955d
//





async function getCities(city) {
    if (!city) {
        city = 'toronto'
    }
    try {
        let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=3&appid=e94982487f044be7ccc7b3ba2a88955d`, 
        {mode: 'cors'});
        let data = await response.json();
        return data;
    } catch (e) {
        console.log(e)
    }  
}


async function getWeatherByCoords(lat, lon) {

    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}1&units=metric&appid=e94982487f044be7ccc7b3ba2a88955d`, 
        {mode: 'cors'})
    let data = await response.json();

    if (response.status == 200) {
        return data;
    } else {
        throw new Error('No such data');
    }
}


const getIcon = (code) => {
    let element = new Image();
    element.src = `https://openweathermap.org/img/wn/${code}@2x.png`;
    return element;
}




/***/ }),

/***/ "./src/Quicksand-VariableFont_wght.ttf":
/*!*********************************************!*\
  !*** ./src/Quicksand-VariableFont_wght.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf52df73d8529b4815ed.ttf";

/***/ }),

/***/ "./src/cloud-background.jpg":
/*!**********************************!*\
  !*** ./src/cloud-background.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "efa9144e44f14a58dded.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/dom-stuff.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSx3QkFBd0IsNkNBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELElBQUksSUFBSSxJQUFJO0FBQ3RFO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBLHdCQUF3QixzREFBd0I7QUFDaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7OztBQUlBO0FBQ0E7Ozs7OztBQU1BOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9NcUI7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUZBQXFGLEtBQUs7QUFDMUYsU0FBUyxhQUFhO0FBQ3RCO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOzs7QUFHQTs7QUFFQSxzRkFBc0YsSUFBSSxPQUFPLElBQUk7QUFDckcsU0FBUyxhQUFhO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsdURBQXVELEtBQUs7QUFDNUQ7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbS1zdHVmZi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9RdWlja3NhbmQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9jbG91ZC1iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgICBtaW4taGVpZ2h0OiAxMDBkdmg7XFxufVxcblxcbmh0bWwge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLyogU2VhcmNoIGZvcm0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4uZm9ybS1kaXYge1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxufVxcblxcbiAgICBmb3JtIHtcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuXFxuICAgIC5mb3JtLWRpdiBpbnB1dCB7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICB3aWR0aDogNDAwcHg7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBwYWRkaW5nOiAwIDAgMCAxNXB4O1xcbiAgICB9XFxuXFxuICAgIGZvcm0gYnV0dG9uIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjOGZmZTY7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgfVxcblxcbiAgICBpbnB1dDphY3RpdmUsXFxuICAgIGlucHV0OmZvY3VzIHtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIH1cXG5cXG51bCB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNDBweDtcXG59XFxuXFxubGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkOiBhdXRvIC8gM2ZyIDJmcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5saS5zZWFyY2gtaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5cXG4vKiBXZWF0aGVyIGNhcmQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4ud2VhdGhlci1jYXJkIHtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIG1heC13aWR0aDogOTBkdnc7XFxuICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIHBhZGRpbmc6IDFyZW0gM3JlbTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAycyBlYXNlLWluLW91dDtcXG4gICAgLyogICovXFxuXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGZmZTY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZmZlNmFjO1xcbn1cXG5cXG4gICAgLndlYXRoZXItY2FyZCBwIHtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XFxuICAgIH1cXG5cXG4gICAgLm1haW4taW5mbyB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDJmciAxZnIgMWZyO1xcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAgICAgLmNpdHktbmFtZSxcXG4gICAgICAgIC5tYWluLXRlbXAge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5tYWluLXRlbXAge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICB9XFxuXFxuICAgIC5hZGRpdGlvbmFsLWluZm8ge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQ6IDFmciAxZnIgLyAxZnIgMWZyIDFmcjtcXG4gICAgICAgIHBhZGRpbmc6IDNyZW0gMDtcXG4gICAgfVxcbiAgICAgICAgLmFkZGl0aW9uYWwtaW5mbyBkaXYge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgICB9XFxuICAgICAgICAuc3Vuc2V0LWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDMgLyAzO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICAgICAgfVxcblxcblxcbi5oaWRlLWNhcmQge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4uaGlkZGVuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuc3Bhbi5oaWRkZW4ge1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLDRDQUE2QztBQUNqRDs7QUFFQTtJQUNJLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlGQUFxRTtJQUNyRSw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsZUFBZTtBQUNuQjs7QUFFQSxtRUFBbUU7O0FBRW5FO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0lBRUk7UUFDSSxtQkFBbUI7UUFDbkIsYUFBYTtJQUNqQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFlBQVk7UUFDWixlQUFlO1FBQ2YsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixrQkFBa0I7UUFDbEIsc0JBQXNCO1FBQ3RCLHlCQUF5QjtRQUN6QixlQUFlO1FBQ2YsWUFBWTtRQUNaLFlBQVk7UUFDWixVQUFVO1FBQ1YsZUFBZTtRQUNmLFVBQVU7SUFDZDs7SUFFQTs7UUFFSSxhQUFhO0lBQ2pCOztBQUVKO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUEsa0VBQWtFOzs7QUFHbEUsMEVBQTBFOztBQUUxRTtJQUNJLFNBQVM7SUFDVCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixLQUFLOztJQUVMLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsMkJBQTJCO0FBQy9COztJQUVJO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLG9DQUFvQztRQUNwQyxlQUFlO1FBQ2YsbUJBQW1CO0lBQ3ZCOztRQUVJOztZQUVJLGVBQWU7WUFDZixpQkFBaUI7UUFDckI7O1FBRUE7WUFDSSxhQUFhO1FBQ2pCOztJQUVKO1FBQ0ksYUFBYTtRQUNiLDJCQUEyQjtRQUMzQixlQUFlO0lBQ25CO1FBQ0k7WUFDSSxhQUFhO1FBQ2pCO1FBQ0E7WUFDSSx3QkFBd0I7UUFDNUI7O1FBRUE7WUFDSSx3QkFBd0I7WUFDeEIsYUFBYTtZQUNiLDJCQUEyQjtRQUMvQjs7O0FBR1I7SUFDSSxVQUFVO0FBQ2Q7Ozs7Ozs7Ozs7OztBQVlBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksTUFBTTtJQUNOLFNBQVM7SUFDVCxRQUFRO0lBQ1IsT0FBTztJQUNQLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVTtJQUNWLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcXG4gICAgc3JjOiB1cmwoJy4vUXVpY2tzYW5kLVZhcmlhYmxlRm9udF93Z2h0LnR0ZicpO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgICBtaW4taGVpZ2h0OiAxMDBkdmg7XFxufVxcblxcbmh0bWwge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9jbG91ZC1iYWNrZ3JvdW5kLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZmxleDogMTtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4vKiBTZWFyY2ggZm9ybSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5mb3JtLWRpdiB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG59XFxuXFxuICAgIGZvcm0ge1xcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgLmZvcm0tZGl2IGlucHV0IHtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgIHdpZHRoOiA0MDBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIHBhZGRpbmc6IDAgMCAwIDE1cHg7XFxuICAgIH1cXG5cXG4gICAgZm9ybSBidXR0b24ge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZmZlNjtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICB9XFxuXFxuICAgIGlucHV0OmFjdGl2ZSxcXG4gICAgaW5wdXQ6Zm9jdXMge1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgfVxcblxcbnVsIHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA0MHB4O1xcbn1cXG5cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQ6IGF1dG8gLyAzZnIgMmZyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmxpLnNlYXJjaC1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcblxcbi8qIFdlYXRoZXIgY2FyZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi53ZWF0aGVyLWNhcmQge1xcbiAgICBnYXA6IDJyZW07XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgbWF4LXdpZHRoOiA5MGR2dztcXG4gICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgcGFkZGluZzogMXJlbSAzcmVtO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UtaW4tb3V0O1xcbiAgICAvKiAgKi9cXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M4ZmZlNjtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhmZmU2YWM7XFxufVxcblxcbiAgICAud2VhdGhlci1jYXJkIHAge1xcbiAgICAgICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcXG4gICAgfVxcblxcbiAgICAubWFpbi1pbmZvIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMmZyIDFmciAxZnI7XFxuICAgICAgICBmb250LXNpemU6IDMycHg7XFxuICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICAgICAuY2l0eS1uYW1lLFxcbiAgICAgICAgLm1haW4tdGVtcCB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm1haW4tdGVtcCB7XFxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgLmFkZGl0aW9uYWwtaW5mbyB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZDogMWZyIDFmciAvIDFmciAxZnIgMWZyO1xcbiAgICAgICAgcGFkZGluZzogM3JlbSAwO1xcbiAgICB9XFxuICAgICAgICAuYWRkaXRpb25hbC1pbmZvIGRpdiB7XFxuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgIH1cXG4gICAgICAgIC5zdW5zZXQtY29udGFpbmVyIHtcXG4gICAgICAgICAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZGVzY3JpcHRpb24tY29udGFpbmVyIHtcXG4gICAgICAgICAgICBncmlkLWFyZWE6IDEgLyAyIC8gMyAvIDM7XFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgICAgICB9XFxuXFxuXFxuLmhpZGUtY2FyZCB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi5oaWRkZW4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG5zcGFuLmhpZGRlbiB7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICogYXMgaW5kZXggZnJvbSAnLi9pbmRleCdcblxuICAgIC8vIGZ1bmN0aW9uIHRvIGNyZWF0ZSBlbGVtZW50IGFuZCBhZGQgY2xhc3NlcyBpbiAgb25lIGxpbmVcbmNvbnN0IGNyZWF0ZUNsYXNzZWRFbGVtZW50ID0gKHR5cGUsIGNsYXNzZXMpID0+IHtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc2VzO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG4gICAgLy8gbWFpbiBkaXYgdG8gd3JhcCBhbGwgY29udGVudFxubGV0IG1haW4gPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnZGl2JywgJ21haW4nKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kKG1haW4pO1xuXG4gICAgLy9kaXYgdG8gd3JhcCBmb3JtIGFuZCBldmVudHVhbCBkcm9wZG93biBtZW51XG5sZXQgZm9ybURpdiA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdkaXYnLCAnZm9ybS1kaXYnKTtcblxuICAgIC8vIGNyZWF0ZSBmb3JtIHRvIHNlYXJjaCBmb3IgY2l0eVxubGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5sZXQgc2VhcmNoQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzZWFyY2hCYXIucGxhY2Vob2xkZXIgPSAnRW50ZXIgY2l0eSc7XG4gICAgc2VhcmNoQmFyLm1heExlbmd0aCA9IDIwO1xubGV0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNlYXJjaEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTZWFyY2gnXG5cbiAgICAvLyBhcHBlbmQgZm9ybSB0byB3cmFwcGVyIGFuZCBhcHBlbmQgd3JhcHBlciB0byBtYWluXG5mb3JtRGl2LmFwcGVuZENoaWxkKGZvcm0pXG5mb3JtLmFwcGVuZChzZWFyY2hCYXIsIHNlYXJjaEJ1dHRvbik7XG5tYWluLmFwcGVuZChmb3JtRGl2KTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICAvLyBpZiBzZWFyY2ggZHJvcGRvd24gZXhpc3RzIGVtcHR5IGl0XG5jb25zdCBlbXB0eURyb3Bkb3duTWVudSA9ICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1kcm9wZG93bicpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtZHJvcGRvd24nKS5yZW1vdmUoKTtcbiAgICB9O1xuICAgIGxldCBlbGVtZW50ID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ3VsJywgJ3NlYXJjaC1kcm9wZG93bicpO1xuICAgIC8vIGZvcm1EaXYuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpLmFmdGVyKGVsZW1lbnQpO1xufVxuXG4gICAgLy8gZnVuY3Rpb24gdG8gY3JlYXRlIGVhY2ggbGlzdCBpdGVtIGZvciBzZWFyY2ggZHJvcGRvd25cbmNvbnN0IGNyZWF0ZUxpc3RJdGVtID0gKG5hbWUsIHN0YXRlLCBoaWRkZW5JbmZvKSA9PiB7XG4gICAgbGV0IGVsZW1lbnQgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnbGknLCAnc2VhcmNoLWl0ZW0nKVxuXG4gICAgbGV0IGNpdHlOYW1lID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ3AnLCAnY2l0eS1uYW1lJyk7XG4gICAgICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBsZXQgc3RhdGVOYW1lID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ3AnLCAnc3RhdGUnKTtcbiAgICAgICAgc3RhdGVOYW1lLnRleHRDb250ZW50ID0gc3RhdGU7XG5cbiAgICAvLyBhZGQgbGF0L2xvbmcgaW5mbyBmb3IgQVBJIHdlYXRoZXIgY2FsbCBhbmQgaGlkZSBpdCB3IGNzcztcbiAgICBsZXQgaGlkZGVuID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ3NwYW4nLCAnaGlkZGVuJyk7XG4gICAgICAgIGhpZGRlbi50ZXh0Q29udGVudCA9IGhpZGRlbkluZm87XG4gICAgXG4gICAgZWxlbWVudC5hcHBlbmQoY2l0eU5hbWUsIHN0YXRlTmFtZSwgaGlkZGVuKVxuXG4gICAgICAgIC8vIGJlZm9yZSByZXR1cm5pbmcgZWxlbWVudCwgYWRkIGV2ZW50IGxpc3RlbmVyIHRvIFxuICAgICAgICAvLyBmaWxsIHBhZ2Ugd2l0aCBkYXRhIGlmIGNsaWNrZWQgYW5kIGVtcHR5IGRyb3Bkb3duXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIC8vXG4gICAgICAgIC8vXG4gICAgICAgIC8vIGNoZWNrIGlmIGl0ZW0gaXMgb25seSBpdGVtIGluIGRyb3Bkb3duLCBpZiBvbmx5IGl0ZW0gdGhlbSBzZWFyY2ggd2VhdGhlciBiYXNlZCBieSBcbiAgICAgICAgLy8gbmFtZSBzbyB0aGF0IGFwaSBkb2Vzbid0IGNvbmZ1c2UgY29vcmRpbmF0ZXMgd2l0aCBhIGRpZmZlcmVudCBjaXR5P1xuICAgICAgICAvL1xuICAgICAgICAvL1xuICAgICAgICBsZXQgY29vcmRzID0gaGlkZGVuSW5mby5zcGxpdCgnLCAnKTtcbiAgICAgICAgbGV0IGxhdCA9IGNvb3Jkc1swXVxuICAgICAgICBsZXQgbG9uID0gY29vcmRzWzFdXG4gICAgICAgIHBvcHVsYXRlV2VhdGhlckNhcmQoZ2V0V2VhdGhlcihsYXQsIGxvbikpO1xuICAgICAgICBlbXB0eURyb3Bkb3duTWVudSgpO1xuICAgIH0pXG4gICAgcmV0dXJuIGVsZW1lbnRcbn1cblxuY29uc3QgY3JlYXRlV2VhdGhlckNhcmQgPSAoKSA9PiB7XG4gICAgbGV0IGVsZW1lbnQgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnZGl2JywgJ3dlYXRoZXItY2FyZCcpXG5cbiAgICBsZXQgbWFpbkluZm8gPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnZGl2JywgJ21haW4taW5mbycpO1xuICAgICAgICBsZXQgZGF0ZVRpbWUgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgncCcsICdkYXRlLXRpbWUnKTtcbiAgICAgICAgICAgIGRhdGVUaW1lLnRleHRDb250ZW50ID0gJ0RBVEVUSU1FJ1xuICAgICAgICBsZXQgY2l0eU5hbWUgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgncCcsICdjaXR5LW5hbWUnKTtcbiAgICAgICAgICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gJ0NJVFlOQU1FJ1xuICAgICAgICBsZXQgbWFpblRlbXAgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgncCcsICdtYWluLXRlbXAnKTtcbiAgICAgICAgICAgIG1haW5UZW1wLnRleHRDb250ZW50ID0gJzIwwrBDJ1xuICAgICAgICBsZXQgZmVlbHNMaWtlID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ3AnLCAnZmVlbHMtbGlrZScpO1xuICAgICAgICAgICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gJ0ZFRUxTIExJS0UgMjLCsEMnXG5cbiAgICBtYWluSW5mby5hcHBlbmQoZGF0ZVRpbWUsIGNpdHlOYW1lLCBtYWluVGVtcCwgZmVlbHNMaWtlKTtcblxuICAgIGxldCBhZGRpdGlvbmFsSW5mbyA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdkaXYnLCAnYWRkaXRpb25hbC1pbmZvJyk7XG4gICAgICAgIGxldCBzdW5yaXNlQ29udGFpbmVyID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICdzdW5yaXNlLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgbGV0IHN1bnJpc2UgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgIHN1bnJpc2UudGV4dENvbnRlbnQgPSAnU3VucmlzZSdcbiAgICAgICAgICAgIGxldCByaXNlVGltZSA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdwJywgJ3N1bnJpc2UtdGltZScpO1xuICAgICAgICAgICAgc3VucmlzZUNvbnRhaW5lci5hcHBlbmQoc3VucmlzZSwgcmlzZVRpbWUpO1xuXG4gICAgICAgIGxldCBzdW5zZXRDb250YWluZXIgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnZGl2JywgJ3N1bnNldC1jb250YWluZXInKTtcbiAgICAgICAgICAgIGxldCBzdW5zZXQgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgIHN1bnNldC50ZXh0Q29udGVudCA9ICdTdW5zZXQnXG4gICAgICAgICAgICBsZXQgc3Vuc2V0VGltZSA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdwJywgJ3N1bnNldC10aW1lJyk7XG4gICAgICAgICAgICBzdW5zZXRDb250YWluZXIuYXBwZW5kKHN1bnNldCwgc3Vuc2V0VGltZSk7XG5cbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICdkZXNjcmlwdGlvbi1jb250YWluZXInKTtcbiAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdwJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBsZXQgZGVzY3JpcHRpb25JbWcgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnZGl2JywgJ2Rlc2NyaXB0aW9uLWltZycpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kKGRlc2NyaXB0aW9uLCBkZXNjcmlwdGlvbkltZyk7XG5cbiAgICAgICAgbGV0IGh1bWlkaXR5Q29udGFpbmVyID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICdodW1pZGl0eS1jb250YWluZXInKTtcbiAgICAgICAgICAgIGxldCBodW1pZGl0eSA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSAnSHVtaWRpdHknXG4gICAgICAgICAgICBsZXQgaHVtaWRpdHlWYWx1ZSA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdwJywgJ2h1bWlkaXR5LXZhbHVlJyk7XG4gICAgICAgICAgICBodW1pZGl0eUNvbnRhaW5lci5hcHBlbmQoaHVtaWRpdHksIGh1bWlkaXR5VmFsdWUpO1xuXG4gICAgICAgIGxldCB3aW5kQ29udGFpbmVyID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICd3aW5kLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgbGV0IHdpbmQgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgIHdpbmQudGV4dENvbnRlbnQgPSAnV2luZCdcbiAgICAgICAgICAgIGxldCB3aW5kVmFsdWUgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgncCcsICd3aW5kLXZhbHVlJyk7XG4gICAgICAgICAgICB3aW5kQ29udGFpbmVyLmFwcGVuZCh3aW5kLCB3aW5kVmFsdWUpO1xuXG4gICAgYWRkaXRpb25hbEluZm8uYXBwZW5kKHN1bnJpc2VDb250YWluZXIsIHN1bnNldENvbnRhaW5lciwgZGVzY3JpcHRpb25Db250YWluZXIsIGh1bWlkaXR5Q29udGFpbmVyLCB3aW5kQ29udGFpbmVyKVxuXG4gICAgZWxlbWVudC5hcHBlbmQobWFpbkluZm8sIGFkZGl0aW9uYWxJbmZvKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xufVxuXG5jcmVhdGVXZWF0aGVyQ2FyZCgpO1xuXG5cbmFzeW5jIGZ1bmN0aW9uIHBvcHVsYXRlU2VhcmNoRHJvcGRvd24oKSB7XG4gICAgbGV0IGRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1kcm9wZG93bicpO1xuICAgIGxldCByZXN1bHRzID0gYXdhaXQgaW5kZXguZ2V0Q2l0aWVzKHNlYXJjaEJhci52YWx1ZSlcbiAgICAgICAgLnRoZW4ocmVzdWx0cyA9PiB7XG4gICAgICAgICAgICByZXN1bHRzLmZvckVhY2goY2l0eSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBjaXR5Lm5hbWU7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXRlID0gY2l0eS5zdGF0ZTtcbiAgICAgICAgICAgICAgICBsZXQgbGF0ID0gY2l0eS5sYXQ7XG4gICAgICAgICAgICAgICAgbGV0IGxvbiA9IGNpdHkubG9uO1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gY3JlYXRlTGlzdEl0ZW0obmFtZSwgc3RhdGUsIGAke2xhdH0sICR7bG9ufWApXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1kcm9wZG93bicpLmFwcGVuZENoaWxkKGl0ZW0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyIChsYXQsIGxvbikge1xuICAgIGxldCB3ZWF0aGVyID0gYXdhaXQgaW5kZXguZ2V0V2VhdGhlckJ5Q29vcmRzKGxhdCwgbG9uKVxuICAgIHJldHVybiB3ZWF0aGVyXG59XG5cbmNvbnN0IHR3ZWx2ZUhvdXIgPSAodGltZSkgPT4ge1xuICAgIGxldCB0aW1lQXJyID0gdGltZS5zcGxpdCgnOicpXG4gICAgbGV0IGhvdXIgPSB0aW1lQXJyWzBdO1xuICAgIGhvdXIgPSBwYXJzZUZsb2F0KGhvdXIpO1xuXG4gICAgaWYgKCBob3VyID4gMTIpIHtcbiAgICAgICAgaG91ciAtPSAxMjtcbiAgICAgICAgdGltZUFyclswXSA9IGhvdXI7XG4gICAgICAgIHJldHVybiB0aW1lQXJyLmpvaW4oJzonKTtcbiAgICB9XG5cblxuICAgIHJldHVybiB0aW1lQXJyLmpvaW4oJzonKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcG9wdWxhdGVXZWF0aGVyQ2FyZCAod2VhdGhlcikge1xuICAgIGxldCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHdlYXRoZXI7XG5cbiAgICBsZXQgZGF5ID0gbmV3IERhdGUoKS50b1N0cmluZygpLnNwbGl0KCcgJykuc2xpY2UoMCwgNCkuam9pbignICcpO1xuICAgIGxldCB0aW1lID0gbmV3IERhdGUoKS50b1N0cmluZygpLnNwbGl0KCcgJykuc2xpY2UoNCwgNSkuam9pbignJyk7XG4gICAgdGltZSA9IHR3ZWx2ZUhvdXIodGltZSk7XG4gICAgY29uc29sZS5sb2codGltZSlcbiAgICBcbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS10aW1lJykudGV4dENvbnRlbnQgPSBcblxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktbmFtZScpLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEubmFtZTtcblxuXG5cbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG59XG5cblxuXG5cblxuLy8gRVZFTlQgTElTVEVORVJTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlbXB0eURyb3Bkb3duTWVudSgpO1xuICAgIHBvcHVsYXRlU2VhcmNoRHJvcGRvd24oKTtcbiAgICBzZWFyY2hCYXIudmFsdWUgPSAnJztcbn0pXG5cbm1haW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PSBtYWluKSB7XG4gICAgICAgIGVtcHR5RHJvcGRvd25NZW51KCk7XG4gICAgfVxufSlcblxuXG5cblxuXG5cblxuIiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG4gICAgLy8gT3BlbldlYXRoZXIgQVBJXG4vLyBZb3VyIEFQSSBrZXkgaXMgZTk0OTgyNDg3ZjA0NGJlN2NjYzdiM2JhMmE4ODk1NWQ7XG4vL1xuICAgIC8vIEV4YW1wbGUgb2YgQVBJIGNhbGwgZm9yIHdlYXRoZXIgZnJvbSBjaXR5IG5hbWUgOlxuLy8gaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPUxvbmRvbiZBUFBJRD1lOTQ5ODI0ODdmMDQ0YmU3Y2NjN2IzYmEyYTg4OTU1ZFxuLy9cblxuICAgIC8vIEV4YW1wbGUgb2YgQVBJIGNhbGwgdG8gZ2V0IGNpdHkgY29vcmRzIDpcbi8vaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT1Pc2hhd2EmbGltaXQ9NSZhcHBpZD1lOTQ5ODI0ODdmMDQ0YmU3Y2NjN2IzYmEyYTg4OTU1ZFxuLy9cblxuICAgIC8vIEV4YW1wbGUgb2YgQVBJIGNhbGwgZm9yIHdlYXRoZXIgZnJvbSBjb29yZHMgKGxhdC9sb24pIDpcbi8vaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PTQzLjg5Jmxvbj0tNzguODYmYXBwaWQ9ZTk0OTgyNDg3ZjA0NGJlN2NjYzdiM2JhMmE4ODk1NWRcbi8vXG5cblxuXG5cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q2l0aWVzKGNpdHkpIHtcbiAgICBpZiAoIWNpdHkpIHtcbiAgICAgICAgY2l0eSA9ICd0b3JvbnRvJ1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2NpdHl9JmxpbWl0PTMmYXBwaWQ9ZTk0OTgyNDg3ZjA0NGJlN2NjYzdiM2JhMmE4ODk1NWRgLCBcbiAgICAgICAge21vZGU6ICdjb3JzJ30pO1xuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgIH0gIFxufVxuXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJCeUNvb3JkcyhsYXQsIGxvbikge1xuXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdH0mbG9uPSR7bG9ufTEmdW5pdHM9bWV0cmljJmFwcGlkPWU5NDk4MjQ4N2YwNDRiZTdjY2M3YjNiYTJhODg5NTVkYCwgXG4gICAgICAgIHttb2RlOiAnY29ycyd9KVxuICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBzdWNoIGRhdGEnKTtcbiAgICB9XG59XG5cblxuY29uc3QgZ2V0SWNvbiA9IChjb2RlKSA9PiB7XG4gICAgbGV0IGVsZW1lbnQgPSBuZXcgSW1hZ2UoKTtcbiAgICBlbGVtZW50LnNyYyA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtjb2RlfUAyeC5wbmdgO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5cbmV4cG9ydCB7Z2V0Q2l0aWVzLCBnZXRXZWF0aGVyQnlDb29yZHMsIGdldEljb259Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9