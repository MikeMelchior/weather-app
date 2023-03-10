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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: Quicksand;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n* {\n    margin: 0;\n    box-sizing: border-box;\n    font-family: monospace;\n}\n\nbody,\nhtml {\n    min-height: 100dvh;\n}\n\nhtml {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center center fixed; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n}\nbody {\n    display: flex;\n}\n\n.main {\n    flex: 1;\n    font-size: 30px;\n}\n\n/* Search form -------------------------------------------------- */\n\n.form-div {\n    width: 400px;\n    height: 40px;\n    display: flex;\n    position: relative;\n    margin: auto;\n    margin-top: 3rem;\n}\n\n    form {\n        height: fit-content;\n        display: flex;\n    }\n\n    .form-div input {\n        border: none;\n        border-radius: 6px;\n        height: 40px;\n        width: 400px;\n        font-size: 20px;\n        padding: 0 0 0 15px;\n    }\n\n    form button {\n        position: absolute;\n        right: 0;\n        border-radius: 6px;\n        border: 1px solid blue;\n        background-color: #c8ffe6;\n        cursor: pointer;\n        height: 100%;\n        width: 100px;\n        padding: 0;\n        font-size: 18px;\n        z-index: 1;\n    }\n\n    input:active,\n    input:focus {\n        outline: none;\n    }\n\nul {\n    width: fit-content;\n    margin: auto;\n    padding: 0;\n    position: absolute;\n    top: 40px;\n}\n\nli {\n    list-style: none;\n    background-color: #EEE;\n    width: 400px;\n    padding: 20px 10px;\n    font-size: 18px;\n    display: grid;\n    grid: auto / 3fr 2fr;\n    position: relative;\n}\n\nli.search-item:hover {\n    background-color: #e9e9e9;\n}\n\n/* ------------------------------------------------------------- */\n\n\n/* Weather card -------------------------------------------------------- */\n\n.weather-card {\n    gap: 2rem;\n    width: 500px;\n    max-width: 90dvw;\n    min-height: fit-content;\n    margin: auto;\n    margin-top: 2rem;\n    padding: 1rem 1rem;\n    font-size: 24px;\n    text-align: center;\n    transition: all 1s ease-in-out;\n\n    border: 1px solid #c8ffe6;\n    border-radius: 4px;\n    background-color: #c8ffe6ac;\n}\n\n    .weather-card p {\n        font-family: Quicksand;\n    }\n\n    .main-info {\n        display: grid;\n        grid-template-rows: auto 120px 1fr 1fr;\n        padding-top: 1rem;\n        font-size: 32px;\n        place-items: center;\n    }\n        /* size time smaller */\n        .date-time {\n            font-size: 26px;\n            line-height: 45px;\n        }\n        .date-time::first-line {\n            font-size: 32px;\n        }\n\n        .main-info p:nth-child(2),\n        .main-info p:nth-child(3) {\n            font-size: 50px;\n            font-weight: bold;\n        }\n\n        .main-temp {\n            margin-top: -10px;\n            margin-bottom: 10px;\n        }\n\n    .additional-info {\n        display: grid;\n        grid: 1fr 1fr / 1fr 1fr 1fr;\n        padding: 2rem 0;\n        font-size: 20px;\n    }\n        .additional-info div {\n            padding: 0.5rem;\n        }\n        .sunset-container {\n            grid-area: 2 / 1 / 3 / 2;\n        }\n\n        .description-container {\n            grid-area: 1 / 2 / 3 / 3;\n        }\n        .description {\n            margin-top: 20px;\n        }\n        div.description-img {\n            padding-top: 0;\n        }\n\n.hidden {\n    position: absolute;\n    height: 0;\n    width: 0;\n    padding: 0;\n    margin: 0;\n    opacity: 0;\n    visibility: hidden;\n}\n\nspan.hidden {\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    z-index: 2;\n    visibility: visible;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,4CAA6C;AACjD;;AAEA;IACI,SAAS;IACT,sBAAsB;IACtB,sBAAsB;AAC1B;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;IACI,iFAAqE;IACrE,8BAA8B;IAC9B,2BAA2B;IAC3B,yBAAyB;IACzB,sBAAsB;AAC1B;AACA;IACI,aAAa;AACjB;;AAEA;IACI,OAAO;IACP,eAAe;AACnB;;AAEA,mEAAmE;;AAEnE;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,gBAAgB;AACpB;;IAEI;QACI,mBAAmB;QACnB,aAAa;IACjB;;IAEA;QACI,YAAY;QACZ,kBAAkB;QAClB,YAAY;QACZ,YAAY;QACZ,eAAe;QACf,mBAAmB;IACvB;;IAEA;QACI,kBAAkB;QAClB,QAAQ;QACR,kBAAkB;QAClB,sBAAsB;QACtB,yBAAyB;QACzB,eAAe;QACf,YAAY;QACZ,YAAY;QACZ,UAAU;QACV,eAAe;QACf,UAAU;IACd;;IAEA;;QAEI,aAAa;IACjB;;AAEJ;IACI,kBAAkB;IAClB,YAAY;IACZ,UAAU;IACV,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA,kEAAkE;;;AAGlE,0EAA0E;;AAE1E;IACI,SAAS;IACT,YAAY;IACZ,gBAAgB;IAChB,uBAAuB;IACvB,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,8BAA8B;;IAE9B,yBAAyB;IACzB,kBAAkB;IAClB,2BAA2B;AAC/B;;IAEI;QACI,sBAAsB;IAC1B;;IAEA;QACI,aAAa;QACb,sCAAsC;QACtC,iBAAiB;QACjB,eAAe;QACf,mBAAmB;IACvB;QACI,sBAAsB;QACtB;YACI,eAAe;YACf,iBAAiB;QACrB;QACA;YACI,eAAe;QACnB;;QAEA;;YAEI,eAAe;YACf,iBAAiB;QACrB;;QAEA;YACI,iBAAiB;YACjB,mBAAmB;QACvB;;IAEJ;QACI,aAAa;QACb,2BAA2B;QAC3B,eAAe;QACf,eAAe;IACnB;QACI;YACI,eAAe;QACnB;QACA;YACI,wBAAwB;QAC5B;;QAEA;YACI,wBAAwB;QAC5B;QACA;YACI,gBAAgB;QACpB;QACA;YACI,cAAc;QAClB;;AAER;IACI,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,UAAU;IACV,SAAS;IACT,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,MAAM;IACN,SAAS;IACT,QAAQ;IACR,OAAO;IACP,YAAY;IACZ,WAAW;IACX,UAAU;IACV,mBAAmB;AACvB","sourcesContent":["@font-face {\n    font-family: Quicksand;\n    src: url('./Quicksand-VariableFont_wght.ttf');\n}\n\n* {\n    margin: 0;\n    box-sizing: border-box;\n    font-family: monospace;\n}\n\nbody,\nhtml {\n    min-height: 100dvh;\n}\n\nhtml {\n    background: url(./cloud-background.jpg) no-repeat center center fixed; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n}\nbody {\n    display: flex;\n}\n\n.main {\n    flex: 1;\n    font-size: 30px;\n}\n\n/* Search form -------------------------------------------------- */\n\n.form-div {\n    width: 400px;\n    height: 40px;\n    display: flex;\n    position: relative;\n    margin: auto;\n    margin-top: 3rem;\n}\n\n    form {\n        height: fit-content;\n        display: flex;\n    }\n\n    .form-div input {\n        border: none;\n        border-radius: 6px;\n        height: 40px;\n        width: 400px;\n        font-size: 20px;\n        padding: 0 0 0 15px;\n    }\n\n    form button {\n        position: absolute;\n        right: 0;\n        border-radius: 6px;\n        border: 1px solid blue;\n        background-color: #c8ffe6;\n        cursor: pointer;\n        height: 100%;\n        width: 100px;\n        padding: 0;\n        font-size: 18px;\n        z-index: 1;\n    }\n\n    input:active,\n    input:focus {\n        outline: none;\n    }\n\nul {\n    width: fit-content;\n    margin: auto;\n    padding: 0;\n    position: absolute;\n    top: 40px;\n}\n\nli {\n    list-style: none;\n    background-color: #EEE;\n    width: 400px;\n    padding: 20px 10px;\n    font-size: 18px;\n    display: grid;\n    grid: auto / 3fr 2fr;\n    position: relative;\n}\n\nli.search-item:hover {\n    background-color: #e9e9e9;\n}\n\n/* ------------------------------------------------------------- */\n\n\n/* Weather card -------------------------------------------------------- */\n\n.weather-card {\n    gap: 2rem;\n    width: 500px;\n    max-width: 90dvw;\n    min-height: fit-content;\n    margin: auto;\n    margin-top: 2rem;\n    padding: 1rem 1rem;\n    font-size: 24px;\n    text-align: center;\n    transition: all 1s ease-in-out;\n\n    border: 1px solid #c8ffe6;\n    border-radius: 4px;\n    background-color: #c8ffe6ac;\n}\n\n    .weather-card p {\n        font-family: Quicksand;\n    }\n\n    .main-info {\n        display: grid;\n        grid-template-rows: auto 120px 1fr 1fr;\n        padding-top: 1rem;\n        font-size: 32px;\n        place-items: center;\n    }\n        /* size time smaller */\n        .date-time {\n            font-size: 26px;\n            line-height: 45px;\n        }\n        .date-time::first-line {\n            font-size: 32px;\n        }\n\n        .main-info p:nth-child(2),\n        .main-info p:nth-child(3) {\n            font-size: 50px;\n            font-weight: bold;\n        }\n\n        .main-temp {\n            margin-top: -10px;\n            margin-bottom: 10px;\n        }\n\n    .additional-info {\n        display: grid;\n        grid: 1fr 1fr / 1fr 1fr 1fr;\n        padding: 2rem 0;\n        font-size: 20px;\n    }\n        .additional-info div {\n            padding: 0.5rem;\n        }\n        .sunset-container {\n            grid-area: 2 / 1 / 3 / 2;\n        }\n\n        .description-container {\n            grid-area: 1 / 2 / 3 / 3;\n        }\n        .description {\n            margin-top: 20px;\n        }\n        div.description-img {\n            padding-top: 0;\n        }\n\n.hidden {\n    position: absolute;\n    height: 0;\n    width: 0;\n    padding: 0;\n    margin: 0;\n    opacity: 0;\n    visibility: hidden;\n}\n\nspan.hidden {\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    z-index: 2;\n    visibility: visible;\n}"],"sourceRoot":""}]);
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
    if (!classes) return element;
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
        // fill page with data if clicked
    element.addEventListener('click', () => {
        let coords = hiddenInfo.split(', ');
        let lat = coords[0]
        let lon = coords[1]
        populateWeatherCard(_index__WEBPACK_IMPORTED_MODULE_0__.getWeatherByCoords(lat, lon));
    })
    return element
}

const createWeatherCard = () => {
    let element = createClassedElement('div', 'weather-card')
    element.style.opacity = 0;

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
    let results = await _index__WEBPACK_IMPORTED_MODULE_0__.getCities(searchBar.value);
        results.forEach(city => {
            let name = city.name;
            let state = city.state;
            let lat = city.lat;
            let lon = city.lon;
            let item = createListItem(name, state, `${lat}, ${lon}`)
            document.querySelector('.search-dropdown').appendChild(item);
        })

}

async function populateWeatherCard (weather) {
    let weatherData = await weather;

    let weatherCard = document.querySelector('.weather-card');

        // transition card out of view if one already in view
    weatherCard.style.opacity = 0;

        // set timeout so info displays after card transitions out of view
    setTimeout(() => {

            // get date and time to display at top of card
        let day = new Date().toString().split(' ').slice(0, 4).join(' ');
        let dateTime = document.querySelector('.date-time');

            // display date and time
        dateTime.innerHTML = `${day} </br>${_index__WEBPACK_IMPORTED_MODULE_0__.twelveHour()}`

            // display city name;
        document.querySelector('div p.city-name').textContent = weatherData.name;

            // display temp;
        let temp = Math.round(weatherData.main.temp)
        document.querySelector('.main-temp').textContent = `${temp}°C`;

            // display feels like;
        let feelsLike = Math.round(weatherData.main.feels_like)
        document.querySelector('.feels-like').textContent = `Feels like ${feelsLike}°C`;

            // display sunrise time
        let sunriseTime = _index__WEBPACK_IMPORTED_MODULE_0__.twelveHour(weatherData.sys.sunrise);
        document.querySelector('.sunrise-time').textContent = `${sunriseTime}`;

            // display sunset time
        let sunsetTime = _index__WEBPACK_IMPORTED_MODULE_0__.twelveHour(weatherData.sys.sunset);
        document.querySelector('.sunset-time').textContent = `${sunsetTime}`

            // display description
        let description = weatherData.weather[0].description;
        document.querySelector('.description').textContent = _index__WEBPACK_IMPORTED_MODULE_0__.capitalizeWords(description);

            // if existing img, remove img
        try {
            document.querySelector('.description-img img').remove();
        } catch (e) {
            console.log(e)
        }
            // display corresponding description image;
        let icon = _index__WEBPACK_IMPORTED_MODULE_0__.getIcon(weatherData.weather[0].icon);
        document.querySelector('.description-img').appendChild(icon);

            // display humidity value
        let humidity = weatherData.main.humidity;
        document.querySelector('.humidity-value').textContent = `${humidity}%`;

            // display wind speed value
        let windSpeed = Math.round(weatherData.wind.speed * 3.6);
        document.querySelector('.wind-value').textContent = `${windSpeed} km/h`

    weatherCard.style.opacity = 1;
    }, 1000);
    
}


// EVENT LISTENERS ------------------------------------------------------------

searchButton.addEventListener('click', (e) => {
    e.preventDefault();
        // create dropdown if doesnt exist, empty if does
    emptyDropdownMenu();
    populateSearchDropdown();
        // empty search bar
    searchBar.value = '';
})

    // allow click off of search menu to hide menu
main.addEventListener('click', (e) => {
    emptyDropdownMenu();
})









/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capitalizeWords": () => (/* binding */ capitalizeWords),
/* harmony export */   "getCities": () => (/* binding */ getCities),
/* harmony export */   "getIcon": () => (/* binding */ getIcon),
/* harmony export */   "getWeatherByCoords": () => (/* binding */ getWeatherByCoords),
/* harmony export */   "twelveHour": () => (/* binding */ twelveHour)
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
        let response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=6&appid=e94982487f044be7ccc7b3ba2a88955d`, 
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

const twelveHour = (time) => {
    let timeArr;
    if (!time) {
        let newTime = new Date().toString().split(' ').slice(4, 5).join('');
        timeArr = newTime.split(':').slice(0, 2);
    } else {
        let newTime = new Date(time*1000).toString().split(' ').slice(4, 5).join('');
        timeArr = newTime.split(':').slice(0, 2)
    }
    
    let hour = timeArr[0];
    let ampm = 'AM';

    hour = parseFloat(hour);
    if ( hour > 12) {
        ampm = 'PM'
        hour -= 12;
        timeArr[0] = hour;
        return timeArr.join(':').concat(` ${ampm}`);
    }
    timeArr[0] = hour;
    return timeArr.join(':').concat(` ${ampm}`);
}

const capitalizeWords = (words) => {
    let wordArr = words.split(' ')
    let result = [];
    wordArr.forEach(word => {
        let letters = word.split('');
        letters[0] = letters[0].toUpperCase();
        result.push(letters.join(''));
    })
    return result.join(' ')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbS1zdHVmZi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9RdWlja3NhbmQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9jbG91ZC1iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgICBtaW4taGVpZ2h0OiAxMDBkdmg7XFxufVxcblxcbmh0bWwge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLyogU2VhcmNoIGZvcm0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4uZm9ybS1kaXYge1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxufVxcblxcbiAgICBmb3JtIHtcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuXFxuICAgIC5mb3JtLWRpdiBpbnB1dCB7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICB3aWR0aDogNDAwcHg7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBwYWRkaW5nOiAwIDAgMCAxNXB4O1xcbiAgICB9XFxuXFxuICAgIGZvcm0gYnV0dG9uIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjOGZmZTY7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgfVxcblxcbiAgICBpbnB1dDphY3RpdmUsXFxuICAgIGlucHV0OmZvY3VzIHtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIH1cXG5cXG51bCB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNDBweDtcXG59XFxuXFxubGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkOiBhdXRvIC8gM2ZyIDJmcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5saS5zZWFyY2gtaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5cXG4vKiBXZWF0aGVyIGNhcmQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4ud2VhdGhlci1jYXJkIHtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIG1heC13aWR0aDogOTBkdnc7XFxuICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M4ZmZlNjtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhmZmU2YWM7XFxufVxcblxcbiAgICAud2VhdGhlci1jYXJkIHAge1xcbiAgICAgICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcXG4gICAgfVxcblxcbiAgICAubWFpbi1pbmZvIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMTIwcHggMWZyIDFmcjtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbiAgICAgICAgLyogc2l6ZSB0aW1lIHNtYWxsZXIgKi9cXG4gICAgICAgIC5kYXRlLXRpbWUge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDVweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5kYXRlLXRpbWU6OmZpcnN0LWxpbmUge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5tYWluLWluZm8gcDpudGgtY2hpbGQoMiksXFxuICAgICAgICAubWFpbi1pbmZvIHA6bnRoLWNoaWxkKDMpIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAubWFpbi10ZW1wIHtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAuYWRkaXRpb25hbC1pbmZvIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkOiAxZnIgMWZyIC8gMWZyIDFmciAxZnI7XFxuICAgICAgICBwYWRkaW5nOiAycmVtIDA7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIH1cXG4gICAgICAgIC5hZGRpdGlvbmFsLWluZm8gZGl2IHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgICAgICB9XFxuICAgICAgICAuc3Vuc2V0LWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDMgLyAzO1xcbiAgICAgICAgfVxcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgZGl2LmRlc2NyaXB0aW9uLWltZyB7XFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XFxuICAgICAgICB9XFxuXFxuLmhpZGRlbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbnNwYW4uaGlkZGVuIHtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0Qiw0Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpRkFBcUU7SUFDckUsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksT0FBTztJQUNQLGVBQWU7QUFDbkI7O0FBRUEsbUVBQW1FOztBQUVuRTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztJQUVJO1FBQ0ksbUJBQW1CO1FBQ25CLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixZQUFZO1FBQ1osZUFBZTtRQUNmLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1Isa0JBQWtCO1FBQ2xCLHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIsZUFBZTtRQUNmLFlBQVk7UUFDWixZQUFZO1FBQ1osVUFBVTtRQUNWLGVBQWU7UUFDZixVQUFVO0lBQ2Q7O0lBRUE7O1FBRUksYUFBYTtJQUNqQjs7QUFFSjtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBLGtFQUFrRTs7O0FBR2xFLDBFQUEwRTs7QUFFMUU7SUFDSSxTQUFTO0lBQ1QsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiw4QkFBOEI7O0lBRTlCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsMkJBQTJCO0FBQy9COztJQUVJO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHNDQUFzQztRQUN0QyxpQkFBaUI7UUFDakIsZUFBZTtRQUNmLG1CQUFtQjtJQUN2QjtRQUNJLHNCQUFzQjtRQUN0QjtZQUNJLGVBQWU7WUFDZixpQkFBaUI7UUFDckI7UUFDQTtZQUNJLGVBQWU7UUFDbkI7O1FBRUE7O1lBRUksZUFBZTtZQUNmLGlCQUFpQjtRQUNyQjs7UUFFQTtZQUNJLGlCQUFpQjtZQUNqQixtQkFBbUI7UUFDdkI7O0lBRUo7UUFDSSxhQUFhO1FBQ2IsMkJBQTJCO1FBQzNCLGVBQWU7UUFDZixlQUFlO0lBQ25CO1FBQ0k7WUFDSSxlQUFlO1FBQ25CO1FBQ0E7WUFDSSx3QkFBd0I7UUFDNUI7O1FBRUE7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLGdCQUFnQjtRQUNwQjtRQUNBO1lBQ0ksY0FBYztRQUNsQjs7QUFFUjtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFVBQVU7SUFDVixTQUFTO0lBQ1QsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLE1BQU07SUFDTixTQUFTO0lBQ1QsUUFBUTtJQUNSLE9BQU87SUFDUCxZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7SUFDVixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XFxuICAgIHNyYzogdXJsKCcuL1F1aWNrc2FuZC1WYXJpYWJsZUZvbnRfd2dodC50dGYnKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG59XFxuXFxuYm9keSxcXG5odG1sIHtcXG4gICAgbWluLWhlaWdodDogMTAwZHZoO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKC4vY2xvdWQtYmFja2dyb3VuZC5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLyogU2VhcmNoIGZvcm0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4uZm9ybS1kaXYge1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxufVxcblxcbiAgICBmb3JtIHtcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuXFxuICAgIC5mb3JtLWRpdiBpbnB1dCB7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICB3aWR0aDogNDAwcHg7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBwYWRkaW5nOiAwIDAgMCAxNXB4O1xcbiAgICB9XFxuXFxuICAgIGZvcm0gYnV0dG9uIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjOGZmZTY7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgfVxcblxcbiAgICBpbnB1dDphY3RpdmUsXFxuICAgIGlucHV0OmZvY3VzIHtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIH1cXG5cXG51bCB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNDBweDtcXG59XFxuXFxubGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkOiBhdXRvIC8gM2ZyIDJmcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5saS5zZWFyY2gtaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5cXG4vKiBXZWF0aGVyIGNhcmQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4ud2VhdGhlci1jYXJkIHtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIG1heC13aWR0aDogOTBkdnc7XFxuICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M4ZmZlNjtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhmZmU2YWM7XFxufVxcblxcbiAgICAud2VhdGhlci1jYXJkIHAge1xcbiAgICAgICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcXG4gICAgfVxcblxcbiAgICAubWFpbi1pbmZvIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMTIwcHggMWZyIDFmcjtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbiAgICAgICAgLyogc2l6ZSB0aW1lIHNtYWxsZXIgKi9cXG4gICAgICAgIC5kYXRlLXRpbWUge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDVweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5kYXRlLXRpbWU6OmZpcnN0LWxpbmUge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5tYWluLWluZm8gcDpudGgtY2hpbGQoMiksXFxuICAgICAgICAubWFpbi1pbmZvIHA6bnRoLWNoaWxkKDMpIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAubWFpbi10ZW1wIHtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAuYWRkaXRpb25hbC1pbmZvIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkOiAxZnIgMWZyIC8gMWZyIDFmciAxZnI7XFxuICAgICAgICBwYWRkaW5nOiAycmVtIDA7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIH1cXG4gICAgICAgIC5hZGRpdGlvbmFsLWluZm8gZGl2IHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgICAgICB9XFxuICAgICAgICAuc3Vuc2V0LWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDMgLyAzO1xcbiAgICAgICAgfVxcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgZGl2LmRlc2NyaXB0aW9uLWltZyB7XFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XFxuICAgICAgICB9XFxuXFxuLmhpZGRlbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbnNwYW4uaGlkZGVuIHtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgKiBhcyBpbmRleCBmcm9tICcuL2luZGV4J1xuXG4gICAgLy8gZnVuY3Rpb24gdG8gY3JlYXRlIGVsZW1lbnQgYW5kIGFkZCBjbGFzc2VzIGluICBvbmUgbGluZVxuY29uc3QgY3JlYXRlQ2xhc3NlZEVsZW1lbnQgPSAodHlwZSwgY2xhc3NlcykgPT4ge1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBpZiAoIWNsYXNzZXMpIHJldHVybiBlbGVtZW50O1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NlcztcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuICAgIC8vIG1haW4gZGl2IHRvIHdyYXAgYWxsIGNvbnRlbnRcbmxldCBtYWluID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICdtYWluJyk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZChtYWluKTtcblxuICAgIC8vZGl2IHRvIHdyYXAgZm9ybSBhbmQgZXZlbnR1YWwgZHJvcGRvd24gbWVudVxubGV0IGZvcm1EaXYgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnZGl2JywgJ2Zvcm0tZGl2Jyk7XG5cbiAgICAvLyBjcmVhdGUgZm9ybSB0byBzZWFyY2ggZm9yIGNpdHlcbmxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xubGV0IHNlYXJjaEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc2VhcmNoQmFyLnBsYWNlaG9sZGVyID0gJ0VudGVyIGNpdHknO1xuICAgIHNlYXJjaEJhci5tYXhMZW5ndGggPSAyMDtcbmxldCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzZWFyY2hCdXR0b24udGV4dENvbnRlbnQgPSAnU2VhcmNoJ1xuXG4gICAgLy8gYXBwZW5kIGZvcm0gdG8gd3JhcHBlciBhbmQgYXBwZW5kIHdyYXBwZXIgdG8gbWFpblxuZm9ybURpdi5hcHBlbmRDaGlsZChmb3JtKVxuZm9ybS5hcHBlbmQoc2VhcmNoQmFyLCBzZWFyY2hCdXR0b24pO1xubWFpbi5hcHBlbmQoZm9ybURpdik7XG5cblxuXG5cbiAgICAvLyBpZiBzZWFyY2ggZHJvcGRvd24gZXhpc3RzIGVtcHR5IGl0XG5jb25zdCBlbXB0eURyb3Bkb3duTWVudSA9ICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1kcm9wZG93bicpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtZHJvcGRvd24nKS5yZW1vdmUoKTtcbiAgICB9O1xuICAgIGxldCBlbGVtZW50ID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ3VsJywgJ3NlYXJjaC1kcm9wZG93bicpO1xuICAgIC8vIGZvcm1EaXYuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpLmFmdGVyKGVsZW1lbnQpO1xufVxuXG4gICAgLy8gZnVuY3Rpb24gdG8gY3JlYXRlIGVhY2ggbGlzdCBpdGVtIGZvciBzZWFyY2ggZHJvcGRvd25cbmNvbnN0IGNyZWF0ZUxpc3RJdGVtID0gKG5hbWUsIHN0YXRlLCBoaWRkZW5JbmZvKSA9PiB7XG4gICAgbGV0IGVsZW1lbnQgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnbGknLCAnc2VhcmNoLWl0ZW0nKVxuXG4gICAgbGV0IGNpdHlOYW1lID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ3AnLCAnY2l0eS1uYW1lJyk7XG4gICAgICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBsZXQgc3RhdGVOYW1lID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ3AnLCAnc3RhdGUnKTtcbiAgICAgICAgc3RhdGVOYW1lLnRleHRDb250ZW50ID0gc3RhdGU7XG5cbiAgICAvLyBhZGQgbGF0L2xvbmcgaW5mbyBmb3IgQVBJIHdlYXRoZXIgY2FsbCBhbmQgaGlkZSBpdCB3IGNzcztcbiAgICBsZXQgaGlkZGVuID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ3NwYW4nLCAnaGlkZGVuJyk7XG4gICAgICAgIGhpZGRlbi50ZXh0Q29udGVudCA9IGhpZGRlbkluZm87XG4gICAgXG4gICAgZWxlbWVudC5hcHBlbmQoY2l0eU5hbWUsIHN0YXRlTmFtZSwgaGlkZGVuKVxuXG4gICAgICAgIC8vIGJlZm9yZSByZXR1cm5pbmcgZWxlbWVudCwgYWRkIGV2ZW50IGxpc3RlbmVyIHRvIFxuICAgICAgICAvLyBmaWxsIHBhZ2Ugd2l0aCBkYXRhIGlmIGNsaWNrZWRcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsZXQgY29vcmRzID0gaGlkZGVuSW5mby5zcGxpdCgnLCAnKTtcbiAgICAgICAgbGV0IGxhdCA9IGNvb3Jkc1swXVxuICAgICAgICBsZXQgbG9uID0gY29vcmRzWzFdXG4gICAgICAgIHBvcHVsYXRlV2VhdGhlckNhcmQoaW5kZXguZ2V0V2VhdGhlckJ5Q29vcmRzKGxhdCwgbG9uKSk7XG4gICAgfSlcbiAgICByZXR1cm4gZWxlbWVudFxufVxuXG5jb25zdCBjcmVhdGVXZWF0aGVyQ2FyZCA9ICgpID0+IHtcbiAgICBsZXQgZWxlbWVudCA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdkaXYnLCAnd2VhdGhlci1jYXJkJylcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xuXG4gICAgbGV0IG1haW5JbmZvID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICdtYWluLWluZm8nKTtcbiAgICAgICAgbGV0IGRhdGVUaW1lID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ3AnLCAnZGF0ZS10aW1lJyk7XG4gICAgICAgICAgICBkYXRlVGltZS50ZXh0Q29udGVudCA9ICdEQVRFVElNRSdcbiAgICAgICAgbGV0IGNpdHlOYW1lID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ3AnLCAnY2l0eS1uYW1lJyk7XG4gICAgICAgICAgICBjaXR5TmFtZS50ZXh0Q29udGVudCA9ICdDSVRZTkFNRSdcbiAgICAgICAgbGV0IG1haW5UZW1wID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ3AnLCAnbWFpbi10ZW1wJyk7XG4gICAgICAgICAgICBtYWluVGVtcC50ZXh0Q29udGVudCA9ICcyMMKwQydcbiAgICAgICAgbGV0IGZlZWxzTGlrZSA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdwJywgJ2ZlZWxzLWxpa2UnKTtcbiAgICAgICAgICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9ICdGRUVMUyBMSUtFIDIywrBDJ1xuXG4gICAgbWFpbkluZm8uYXBwZW5kKGRhdGVUaW1lLCBjaXR5TmFtZSwgbWFpblRlbXAsIGZlZWxzTGlrZSk7XG5cbiAgICBsZXQgYWRkaXRpb25hbEluZm8gPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnZGl2JywgJ2FkZGl0aW9uYWwtaW5mbycpO1xuXG4gICAgICAgIGxldCBzdW5yaXNlQ29udGFpbmVyID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICdzdW5yaXNlLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgbGV0IHN1bnJpc2UgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgIHN1bnJpc2UudGV4dENvbnRlbnQgPSAnU3VucmlzZSdcbiAgICAgICAgICAgIGxldCByaXNlVGltZSA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdwJywgJ3N1bnJpc2UtdGltZScpO1xuICAgICAgICAgICAgc3VucmlzZUNvbnRhaW5lci5hcHBlbmQoc3VucmlzZSwgcmlzZVRpbWUpO1xuXG4gICAgICAgIGxldCBzdW5zZXRDb250YWluZXIgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnZGl2JywgJ3N1bnNldC1jb250YWluZXInKTtcbiAgICAgICAgICAgIGxldCBzdW5zZXQgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgIHN1bnNldC50ZXh0Q29udGVudCA9ICdTdW5zZXQnXG4gICAgICAgICAgICBsZXQgc3Vuc2V0VGltZSA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdwJywgJ3N1bnNldC10aW1lJyk7XG4gICAgICAgICAgICBzdW5zZXRDb250YWluZXIuYXBwZW5kKHN1bnNldCwgc3Vuc2V0VGltZSk7XG5cbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICdkZXNjcmlwdGlvbi1jb250YWluZXInKTtcbiAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdwJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBsZXQgZGVzY3JpcHRpb25JbWcgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnZGl2JywgJ2Rlc2NyaXB0aW9uLWltZycpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kKGRlc2NyaXB0aW9uLCBkZXNjcmlwdGlvbkltZyk7XG5cbiAgICAgICAgbGV0IGh1bWlkaXR5Q29udGFpbmVyID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICdodW1pZGl0eS1jb250YWluZXInKTtcbiAgICAgICAgICAgIGxldCBodW1pZGl0eSA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSAnSHVtaWRpdHknXG4gICAgICAgICAgICBsZXQgaHVtaWRpdHlWYWx1ZSA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdwJywgJ2h1bWlkaXR5LXZhbHVlJyk7XG4gICAgICAgICAgICBodW1pZGl0eUNvbnRhaW5lci5hcHBlbmQoaHVtaWRpdHksIGh1bWlkaXR5VmFsdWUpO1xuXG4gICAgICAgIGxldCB3aW5kQ29udGFpbmVyID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICd3aW5kLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgbGV0IHdpbmQgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgIHdpbmQudGV4dENvbnRlbnQgPSAnV2luZCdcbiAgICAgICAgICAgIGxldCB3aW5kVmFsdWUgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgncCcsICd3aW5kLXZhbHVlJyk7XG4gICAgICAgICAgICB3aW5kQ29udGFpbmVyLmFwcGVuZCh3aW5kLCB3aW5kVmFsdWUpO1xuXG4gICAgYWRkaXRpb25hbEluZm8uYXBwZW5kKHN1bnJpc2VDb250YWluZXIsIHN1bnNldENvbnRhaW5lciwgZGVzY3JpcHRpb25Db250YWluZXIsIGh1bWlkaXR5Q29udGFpbmVyLCB3aW5kQ29udGFpbmVyKVxuXG4gICAgZWxlbWVudC5hcHBlbmQobWFpbkluZm8sIGFkZGl0aW9uYWxJbmZvKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xufVxuXG5jcmVhdGVXZWF0aGVyQ2FyZCgpO1xuXG5cbmFzeW5jIGZ1bmN0aW9uIHBvcHVsYXRlU2VhcmNoRHJvcGRvd24oKSB7XG4gICAgbGV0IHJlc3VsdHMgPSBhd2FpdCBpbmRleC5nZXRDaXRpZXMoc2VhcmNoQmFyLnZhbHVlKTtcbiAgICAgICAgcmVzdWx0cy5mb3JFYWNoKGNpdHkgPT4ge1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBjaXR5Lm5hbWU7XG4gICAgICAgICAgICBsZXQgc3RhdGUgPSBjaXR5LnN0YXRlO1xuICAgICAgICAgICAgbGV0IGxhdCA9IGNpdHkubGF0O1xuICAgICAgICAgICAgbGV0IGxvbiA9IGNpdHkubG9uO1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBjcmVhdGVMaXN0SXRlbShuYW1lLCBzdGF0ZSwgYCR7bGF0fSwgJHtsb259YClcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtZHJvcGRvd24nKS5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgfSlcblxufVxuXG5hc3luYyBmdW5jdGlvbiBwb3B1bGF0ZVdlYXRoZXJDYXJkICh3ZWF0aGVyKSB7XG4gICAgbGV0IHdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlcjtcblxuICAgIGxldCB3ZWF0aGVyQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWNhcmQnKTtcblxuICAgICAgICAvLyB0cmFuc2l0aW9uIGNhcmQgb3V0IG9mIHZpZXcgaWYgb25lIGFscmVhZHkgaW4gdmlld1xuICAgIHdlYXRoZXJDYXJkLnN0eWxlLm9wYWNpdHkgPSAwO1xuXG4gICAgICAgIC8vIHNldCB0aW1lb3V0IHNvIGluZm8gZGlzcGxheXMgYWZ0ZXIgY2FyZCB0cmFuc2l0aW9ucyBvdXQgb2Ygdmlld1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgICAgICAvLyBnZXQgZGF0ZSBhbmQgdGltZSB0byBkaXNwbGF5IGF0IHRvcCBvZiBjYXJkXG4gICAgICAgIGxldCBkYXkgPSBuZXcgRGF0ZSgpLnRvU3RyaW5nKCkuc3BsaXQoJyAnKS5zbGljZSgwLCA0KS5qb2luKCcgJyk7XG4gICAgICAgIGxldCBkYXRlVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLXRpbWUnKTtcblxuICAgICAgICAgICAgLy8gZGlzcGxheSBkYXRlIGFuZCB0aW1lXG4gICAgICAgIGRhdGVUaW1lLmlubmVySFRNTCA9IGAke2RheX0gPC9icj4ke2luZGV4LnR3ZWx2ZUhvdXIoKX1gXG5cbiAgICAgICAgICAgIC8vIGRpc3BsYXkgY2l0eSBuYW1lO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYgcC5jaXR5LW5hbWUnKS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLm5hbWU7XG5cbiAgICAgICAgICAgIC8vIGRpc3BsYXkgdGVtcDtcbiAgICAgICAgbGV0IHRlbXAgPSBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4udGVtcClcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tdGVtcCcpLnRleHRDb250ZW50ID0gYCR7dGVtcH3CsENgO1xuXG4gICAgICAgICAgICAvLyBkaXNwbGF5IGZlZWxzIGxpa2U7XG4gICAgICAgIGxldCBmZWVsc0xpa2UgPSBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4uZmVlbHNfbGlrZSlcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWxzLWxpa2UnKS50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlICR7ZmVlbHNMaWtlfcKwQ2A7XG5cbiAgICAgICAgICAgIC8vIGRpc3BsYXkgc3VucmlzZSB0aW1lXG4gICAgICAgIGxldCBzdW5yaXNlVGltZSA9IGluZGV4LnR3ZWx2ZUhvdXIod2VhdGhlckRhdGEuc3lzLnN1bnJpc2UpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VucmlzZS10aW1lJykudGV4dENvbnRlbnQgPSBgJHtzdW5yaXNlVGltZX1gO1xuXG4gICAgICAgICAgICAvLyBkaXNwbGF5IHN1bnNldCB0aW1lXG4gICAgICAgIGxldCBzdW5zZXRUaW1lID0gaW5kZXgudHdlbHZlSG91cih3ZWF0aGVyRGF0YS5zeXMuc3Vuc2V0KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1bnNldC10aW1lJykudGV4dENvbnRlbnQgPSBgJHtzdW5zZXRUaW1lfWBcblxuICAgICAgICAgICAgLy8gZGlzcGxheSBkZXNjcmlwdGlvblxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24nKS50ZXh0Q29udGVudCA9IGluZGV4LmNhcGl0YWxpemVXb3JkcyhkZXNjcmlwdGlvbik7XG5cbiAgICAgICAgICAgIC8vIGlmIGV4aXN0aW5nIGltZywgcmVtb3ZlIGltZ1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uLWltZyBpbWcnKS5yZW1vdmUoKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgfVxuICAgICAgICAgICAgLy8gZGlzcGxheSBjb3JyZXNwb25kaW5nIGRlc2NyaXB0aW9uIGltYWdlO1xuICAgICAgICBsZXQgaWNvbiA9IGluZGV4LmdldEljb24od2VhdGhlckRhdGEud2VhdGhlclswXS5pY29uKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uLWltZycpLmFwcGVuZENoaWxkKGljb24pO1xuXG4gICAgICAgICAgICAvLyBkaXNwbGF5IGh1bWlkaXR5IHZhbHVlXG4gICAgICAgIGxldCBodW1pZGl0eSA9IHdlYXRoZXJEYXRhLm1haW4uaHVtaWRpdHk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eS12YWx1ZScpLnRleHRDb250ZW50ID0gYCR7aHVtaWRpdHl9JWA7XG5cbiAgICAgICAgICAgIC8vIGRpc3BsYXkgd2luZCBzcGVlZCB2YWx1ZVxuICAgICAgICBsZXQgd2luZFNwZWVkID0gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS53aW5kLnNwZWVkICogMy42KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQtdmFsdWUnKS50ZXh0Q29udGVudCA9IGAke3dpbmRTcGVlZH0ga20vaGBcblxuICAgIHdlYXRoZXJDYXJkLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIH0sIDEwMDApO1xuICAgIFxufVxuXG5cbi8vIEVWRU5UIExJU1RFTkVSUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIGNyZWF0ZSBkcm9wZG93biBpZiBkb2VzbnQgZXhpc3QsIGVtcHR5IGlmIGRvZXNcbiAgICBlbXB0eURyb3Bkb3duTWVudSgpO1xuICAgIHBvcHVsYXRlU2VhcmNoRHJvcGRvd24oKTtcbiAgICAgICAgLy8gZW1wdHkgc2VhcmNoIGJhclxuICAgIHNlYXJjaEJhci52YWx1ZSA9ICcnO1xufSlcblxuICAgIC8vIGFsbG93IGNsaWNrIG9mZiBvZiBzZWFyY2ggbWVudSB0byBoaWRlIG1lbnVcbm1haW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGVtcHR5RHJvcGRvd25NZW51KCk7XG59KVxuXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbiAgICAvLyBPcGVuV2VhdGhlciBBUElcbi8vIFlvdXIgQVBJIGtleSBpcyBlOTQ5ODI0ODdmMDQ0YmU3Y2NjN2IzYmEyYTg4OTU1ZDtcbi8vXG4gICAgLy8gRXhhbXBsZSBvZiBBUEkgY2FsbCBmb3Igd2VhdGhlciBmcm9tIGNpdHkgbmFtZSA6XG4vLyBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9TG9uZG9uJkFQUElEPWU5NDk4MjQ4N2YwNDRiZTdjY2M3YjNiYTJhODg5NTVkXG4vL1xuXG4gICAgLy8gRXhhbXBsZSBvZiBBUEkgY2FsbCB0byBnZXQgY2l0eSBjb29yZHMgOlxuLy9odHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPU9zaGF3YSZsaW1pdD01JmFwcGlkPWU5NDk4MjQ4N2YwNDRiZTdjY2M3YjNiYTJhODg5NTVkXG4vL1xuXG4gICAgLy8gRXhhbXBsZSBvZiBBUEkgY2FsbCBmb3Igd2VhdGhlciBmcm9tIGNvb3JkcyAobGF0L2xvbikgOlxuLy9odHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9NDMuODkmbG9uPS03OC44NiZhcHBpZD1lOTQ5ODI0ODdmMDQ0YmU3Y2NjN2IzYmEyYTg4OTU1ZFxuLy9cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q2l0aWVzKGNpdHkpIHtcbiAgICBpZiAoIWNpdHkpIHtcbiAgICAgICAgY2l0eSA9ICd0b3JvbnRvJ1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtjaXR5fSZsaW1pdD02JmFwcGlkPWU5NDk4MjQ4N2YwNDRiZTdjY2M3YjNiYTJhODg5NTVkYCwgXG4gICAgICAgIHttb2RlOiAnY29ycyd9KTtcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICB9ICBcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckJ5Q29vcmRzKGxhdCwgbG9uKSB7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdH0mbG9uPSR7bG9ufTEmdW5pdHM9bWV0cmljJmFwcGlkPWU5NDk4MjQ4N2YwNDRiZTdjY2M3YjNiYTJhODg5NTVkYCwgXG4gICAgICAgIHttb2RlOiAnY29ycyd9KVxuICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBzdWNoIGRhdGEnKTtcbiAgICB9XG59XG5cbmNvbnN0IGdldEljb24gPSAoY29kZSkgPT4ge1xuICAgIGxldCBlbGVtZW50ID0gbmV3IEltYWdlKCk7XG4gICAgZWxlbWVudC5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7Y29kZX1AMngucG5nYDtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgdHdlbHZlSG91ciA9ICh0aW1lKSA9PiB7XG4gICAgbGV0IHRpbWVBcnI7XG4gICAgaWYgKCF0aW1lKSB7XG4gICAgICAgIGxldCBuZXdUaW1lID0gbmV3IERhdGUoKS50b1N0cmluZygpLnNwbGl0KCcgJykuc2xpY2UoNCwgNSkuam9pbignJyk7XG4gICAgICAgIHRpbWVBcnIgPSBuZXdUaW1lLnNwbGl0KCc6Jykuc2xpY2UoMCwgMik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IG5ld1RpbWUgPSBuZXcgRGF0ZSh0aW1lKjEwMDApLnRvU3RyaW5nKCkuc3BsaXQoJyAnKS5zbGljZSg0LCA1KS5qb2luKCcnKTtcbiAgICAgICAgdGltZUFyciA9IG5ld1RpbWUuc3BsaXQoJzonKS5zbGljZSgwLCAyKVxuICAgIH1cbiAgICBcbiAgICBsZXQgaG91ciA9IHRpbWVBcnJbMF07XG4gICAgbGV0IGFtcG0gPSAnQU0nO1xuXG4gICAgaG91ciA9IHBhcnNlRmxvYXQoaG91cik7XG4gICAgaWYgKCBob3VyID4gMTIpIHtcbiAgICAgICAgYW1wbSA9ICdQTSdcbiAgICAgICAgaG91ciAtPSAxMjtcbiAgICAgICAgdGltZUFyclswXSA9IGhvdXI7XG4gICAgICAgIHJldHVybiB0aW1lQXJyLmpvaW4oJzonKS5jb25jYXQoYCAke2FtcG19YCk7XG4gICAgfVxuICAgIHRpbWVBcnJbMF0gPSBob3VyO1xuICAgIHJldHVybiB0aW1lQXJyLmpvaW4oJzonKS5jb25jYXQoYCAke2FtcG19YCk7XG59XG5cbmNvbnN0IGNhcGl0YWxpemVXb3JkcyA9ICh3b3JkcykgPT4ge1xuICAgIGxldCB3b3JkQXJyID0gd29yZHMuc3BsaXQoJyAnKVxuICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICB3b3JkQXJyLmZvckVhY2god29yZCA9PiB7XG4gICAgICAgIGxldCBsZXR0ZXJzID0gd29yZC5zcGxpdCgnJyk7XG4gICAgICAgIGxldHRlcnNbMF0gPSBsZXR0ZXJzWzBdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIHJlc3VsdC5wdXNoKGxldHRlcnMuam9pbignJykpO1xuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdC5qb2luKCcgJylcbn1cblxuZXhwb3J0IHtnZXRDaXRpZXMsIGdldFdlYXRoZXJCeUNvb3JkcywgdHdlbHZlSG91ciwgZ2V0SWNvbiwgY2FwaXRhbGl6ZVdvcmRzfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==