/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/about.js":
/*!*************************!*\
  !*** ./src/js/about.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var aboutBtn = document.querySelector("#about-btn");
var content = document.querySelector(".content");

var about = function about() {
  aboutBtn.addEventListener("click", function () {
    content.innerHTML = "";
    var aboutContent = document.createElement("div");
    aboutContent.classList.add("aboutContent");
    var aboutMe = document.createElement("div");
    var aboutMeP = document.createElement("p");
    var divTitle = document.createElement("div");
    divTitle.classList.add("borderBot");
    var img = document.createElement('img');
    img.src = 'https://images.unsplash.com/photo-1538128844159-f08f41bfb169?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1744&q=80';
    img.alt = 'A ramen shop in Japan';
    img.classList.add('background-img');
    aboutMe.innerHTML = '<h3 class="about-me-title">About Us: <span>A Little History</span></h3>';
    aboutMeP.innerText = "Hello, everyone. My name is Matthew and welcome to my shop, Project: Ramen. We are focused on bringing to you the gold standard of the ramen shops of Japan. We have traveled around Japan visiting large chains and small shops all in an effort to give you the opportunity to experience these wonderful flavors. At least one of us goes back every year to maintain our excellent quality and to disover perhaps a new style of ramen to add to our specialty menus. So please check them out. Of course the staple menu, too, is our creation after years of experience.";
    aboutContent.append(aboutMe, divTitle, aboutMeP);
    return content.append(aboutContent, img);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);

/***/ }),

/***/ "./src/js/component.js":
/*!*****************************!*\
  !*** ./src/js/component.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/logo.svg */ "./src/assets/logo.svg");


function component() {
  var main = document.createElement('main');
  var p = document.createElement('p');
  var img = document.createElement('img');
  main.append(p);
  p.append(img);
  img.src = _assets_logo_svg__WEBPACK_IMPORTED_MODULE_0__;
  img.alt = 'default logo';
  return main;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component);

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var homePage = function homePage() {
  var homeBtn = document.querySelector('#home-btn');
  homeBtn.addEventListener('click', function () {
    return location.reload();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var menuBtn = document.querySelector("#menu-btn");
var content = document.querySelector(".content");

var Menu = function Menu() {
  menuBtn.addEventListener("click", function () {
    content.innerHTML = "";
    var menuContent = document.createElement('div');
    menuContent.classList.add('menuContent');
    var specialtyItem = document.createElement('div');
    specialtyItem.innerHTML = '<h3 class="specialty-item-title">Our current special: <span>Spicy Red-Pork Ramen</span></h3>';
    var div1 = document.createElement('div');
    var div2 = document.createElement('div');
    var div3 = document.createElement('div');
    var div4 = document.createElement('div');
    var div5 = document.createElement('div');
    var divTitle = document.createElement('div');
    var img1 = document.createElement('img');
    var img2 = document.createElement('img');
    var img3 = document.createElement('img');
    var img4 = document.createElement('img');
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');
    var p3 = document.createElement('p');
    var p4 = document.createElement('p');
    p1.innerText = 'Miso Ramen';
    p2.innerText = 'Shio Ramen';
    p3.innerText = 'Pork Ramen';
    p4.innerText = 'Sweet Ramen';
    img1.src = 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80';
    img1.alt = 'Specialty Ramen';
    img2.src = 'https://images.unsplash.com/photo-1591325418441-ff678baf78ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80';
    img2.alt = 'Specialty Ramen';
    img3.src = 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1731&q=80';
    img3.alt = 'Specialty Ramen';
    img4.src = 'https://images.unsplash.com/photo-1618889482923-38250401a84e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80';
    img4.alt = 'Specialty Ramen';
    div1.append(img1);
    div1.append(p1);
    div2.append(img2);
    div2.append(p2);
    div3.append(img3);
    div3.append(p3);
    div4.append(img4);
    div4.append(p4);
    divTitle.classList.add('theSpecial');
    divTitle.append(specialtyItem, div5);
    div1.classList.add('specialty');
    div2.classList.add('specialty');
    div3.classList.add('specialty');
    div4.classList.add('specialty');
    div5.classList.add('borderBot');
    menuContent.append(divTitle, div1, div2, div3, div4);
    return content.append(menuContent);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);
{
  /* <div class="specialty item-one">
            <img src="https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="specialty ramen">
            <p>This is our famous miso ramen.</p>
        </div>
        <div class="specialty item-two">
            <img src="https://images.unsplash.com/photo-1591325418441-ff678baf78ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80" alt="specialty ramen">
            <p>This is our famous shio ramen.</p>
        </div>
        <div class="specialty item-three">
            <img src="https://images.unsplash.com/photo-1557872943-16a5ac26437e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1731&q=80" alt="specialty ramen">
            <p>This is our famous pork ramen.</p>
        </div>
        <div class="specialty item-four">
            <img src="https://images.unsplash.com/photo-1618889482923-38250401a84e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80" alt="specialty ramen">
            <p>This is our famous sweet ramen.</p>
        </div> */
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/Ramen-Resize.jpg */ "./src/assets/Ramen-Resize.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  font-family: 'Roboto', sans-serif;\n  font-size: 1.2rem;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background-color: #e0fbfc;\n}\n\nheader {\n  font-size: 1rem;\n  font-weight: bold;\n  width: 100%;\n  height: 6rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  background-color: #293241;\n  color: #E0FBFC;\n}\n\n.title {\n  color: #E0FBFC;\n  cursor: pointer;\n}\n\n.content {\n  width: 100%;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n  background-color: #e0fbfc;\n}\n\n.background-image {\n  width: 100%;\n  height: 93vh;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.home {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 50%;\n  height: auto;\n  text-align: center;\n  border: 1px solid #3D5A80;\n  border-radius: 10px;\n  padding: 1rem;\n  margin: 1rem;\n}\n\n@media (max-width: 1050px){\n  .background-image {\n    width: 100%;\n    height: 50vh;\n    background-size: cover;\n  }\n  .home {\n    width: 85%;\n  }\n}\n\n@media (max-width: 700px){\n  .background-image {\n    width: 100%;\n    height: 40vh;\n    background-size: cover;\n  }\n  .home {\n    width: 85%;\n  }\n}\n\n.borderBot::after {\n  content: '';\n  display: block;\n  width: 4rem;\n  height: 1px;\n  margin: 3rem auto 1rem;\n  background-color: black;\n  opacity: .2;\n}\n\n/* Menu Items */\n.menuContent { \n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  width: 80%;\n  border: 1px solid black;\n  border-radius: 10px;\n  margin: 2rem;\n}\n\n.theSpecial {\n  width: 80%;\n  text-align: center;\n  margin-bottom: 3rem;\n}\n\n.specialty {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  width: 45%;\n  padding: .5rem;\n}\n\n.specialty p {\n  font-size: 1.5rem;\n}\n\n.specialty-item-title {\n  font-size: 2.5rem;\n}\n\nimg {\n  width: 80%;\n  height: 80%;\n  border-radius: 10px;\n}\n\n/* About content */\n.aboutContent { \n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #3D5A80;\n  border-radius: 10px;\n  padding: 1rem;\n  margin: 1rem;\n  font-size: 1.5rem;\n}\n\n.background-img {\n  margin-bottom: 1rem;\n}\n\n@media (min-width: 1300px) {\n  .aboutContent {\n    width: 50%;\n  }\n}\n\nfooter {\n  font-size: 1rem;\n  font-weight: bold;\n  width: 100%;\n  height: 5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #293241;\n  color: #E0FBFC;\n  margin-top: auto;\n}\n\n.social {\n  display: flex;\n}\n\n.social p {\n  margin: .2rem;\n  padding: .2rem;\n}\n\n.options {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\nspan { \n  font-weight: bold;\n  color: #ee6c4d;\n}\n\nh2 {\n  margin: 1rem;\n  padding: .5rem;\n  border: 1px solid #98C1D9;\n  border-radius: 10px;\n}\n\n\n\n\n", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,iCAAiC;EACjC,iBAAiB;EACjB,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,yDAAmD;EACnD,4BAA4B;EAC5B,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,mBAAmB;EACnB,aAAa;EACb,YAAY;AACd;;AAEA;EACE;IACE,WAAW;IACX,YAAY;IACZ,sBAAsB;EACxB;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,WAAW;IACX,YAAY;IACZ,sBAAsB;EACxB;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE,WAAW;EACX,cAAc;EACd,WAAW;EACX,WAAW;EACX,sBAAsB;EACtB,uBAAuB;EACvB,WAAW;AACb;;AAEA,eAAe;AACf;EACE,aAAa;EACb,6BAA6B;EAC7B,eAAe;EACf,UAAU;EACV,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,mBAAmB;AACrB;;AAEA,kBAAkB;AAClB;EACE,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;EACzB,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE;IACE,UAAU;EACZ;AACF;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;EACzB,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,yBAAyB;EACzB,mBAAmB;AACrB","sourcesContent":["body {\n  margin: 0;\n  font-family: 'Roboto', sans-serif;\n  font-size: 1.2rem;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background-color: #e0fbfc;\n}\n\nheader {\n  font-size: 1rem;\n  font-weight: bold;\n  width: 100%;\n  height: 6rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  background-color: #293241;\n  color: #E0FBFC;\n}\n\n.title {\n  color: #E0FBFC;\n  cursor: pointer;\n}\n\n.content {\n  width: 100%;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n  background-color: #e0fbfc;\n}\n\n.background-image {\n  width: 100%;\n  height: 93vh;\n  background-image: url('../assets/Ramen-Resize.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.home {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 50%;\n  height: auto;\n  text-align: center;\n  border: 1px solid #3D5A80;\n  border-radius: 10px;\n  padding: 1rem;\n  margin: 1rem;\n}\n\n@media (max-width: 1050px){\n  .background-image {\n    width: 100%;\n    height: 50vh;\n    background-size: cover;\n  }\n  .home {\n    width: 85%;\n  }\n}\n\n@media (max-width: 700px){\n  .background-image {\n    width: 100%;\n    height: 40vh;\n    background-size: cover;\n  }\n  .home {\n    width: 85%;\n  }\n}\n\n.borderBot::after {\n  content: '';\n  display: block;\n  width: 4rem;\n  height: 1px;\n  margin: 3rem auto 1rem;\n  background-color: black;\n  opacity: .2;\n}\n\n/* Menu Items */\n.menuContent { \n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  width: 80%;\n  border: 1px solid black;\n  border-radius: 10px;\n  margin: 2rem;\n}\n\n.theSpecial {\n  width: 80%;\n  text-align: center;\n  margin-bottom: 3rem;\n}\n\n.specialty {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  width: 45%;\n  padding: .5rem;\n}\n\n.specialty p {\n  font-size: 1.5rem;\n}\n\n.specialty-item-title {\n  font-size: 2.5rem;\n}\n\nimg {\n  width: 80%;\n  height: 80%;\n  border-radius: 10px;\n}\n\n/* About content */\n.aboutContent { \n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #3D5A80;\n  border-radius: 10px;\n  padding: 1rem;\n  margin: 1rem;\n  font-size: 1.5rem;\n}\n\n.background-img {\n  margin-bottom: 1rem;\n}\n\n@media (min-width: 1300px) {\n  .aboutContent {\n    width: 50%;\n  }\n}\n\nfooter {\n  font-size: 1rem;\n  font-weight: bold;\n  width: 100%;\n  height: 5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #293241;\n  color: #E0FBFC;\n  margin-top: auto;\n}\n\n.social {\n  display: flex;\n}\n\n.social p {\n  margin: .2rem;\n  padding: .2rem;\n}\n\n.options {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\nspan { \n  font-weight: bold;\n  color: #ee6c4d;\n}\n\nh2 {\n  margin: 1rem;\n  padding: .5rem;\n  border: 1px solid #98C1D9;\n  border-radius: 10px;\n}\n\n\n\n\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/assets/Ramen-Resize.jpg":
/*!*************************************!*\
  !*** ./src/assets/Ramen-Resize.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Ramen-Resize.jpg";

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/Project-Webpack/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.css */ "./src/css/styles.css");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component.js */ "./src/js/component.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/js/menu.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.js */ "./src/js/home.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.js */ "./src/js/about.js");





(0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_home_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_about_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztXQ0FBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLG9EQUFJO0FBQ0pMLG9EQUFRO0FBQ1JuQixxREFBSyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9qcy9hYm91dC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL2pzL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL2pzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9qcy9tZW51LmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvY3NzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvY3NzL3N0eWxlcy5jc3M/OTlhMyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL2pzL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhYm91dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWJvdXQtYnRuXCIpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuY29uc3QgYWJvdXQgPSAoKSA9PiB7XG4gIGFib3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnN0IGFib3V0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWJvdXRDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJhYm91dENvbnRlbnRcIik7XG4gICAgY29uc3QgYWJvdXRNZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYWJvdXRNZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBkaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2VGl0bGUuY2xhc3NMaXN0LmFkZChcImJvcmRlckJvdFwiKTtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcuc3JjID0gJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTM4MTI4ODQ0MTU5LWYwOGY0MWJmYjE2OT9peGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4Jml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTc0NCZxPTgwJztcbiAgICBpbWcuYWx0ID0gJ0EgcmFtZW4gc2hvcCBpbiBKYXBhbic7XG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmQtaW1nJyk7XG4gICAgYWJvdXRNZS5pbm5lckhUTUwgPVxuICAgICAgJzxoMyBjbGFzcz1cImFib3V0LW1lLXRpdGxlXCI+QWJvdXQgVXM6IDxzcGFuPkEgTGl0dGxlIEhpc3Rvcnk8L3NwYW4+PC9oMz4nO1xuICAgIGFib3V0TWVQLmlubmVyVGV4dCA9XG4gICAgICBcIkhlbGxvLCBldmVyeW9uZS4gTXkgbmFtZSBpcyBNYXR0aGV3IGFuZCB3ZWxjb21lIHRvIG15IHNob3AsIFByb2plY3Q6IFJhbWVuLiBXZSBhcmUgZm9jdXNlZCBvbiBicmluZ2luZyB0byB5b3UgdGhlIGdvbGQgc3RhbmRhcmQgb2YgdGhlIHJhbWVuIHNob3BzIG9mIEphcGFuLiBXZSBoYXZlIHRyYXZlbGVkIGFyb3VuZCBKYXBhbiB2aXNpdGluZyBsYXJnZSBjaGFpbnMgYW5kIHNtYWxsIHNob3BzIGFsbCBpbiBhbiBlZmZvcnQgdG8gZ2l2ZSB5b3UgdGhlIG9wcG9ydHVuaXR5IHRvIGV4cGVyaWVuY2UgdGhlc2Ugd29uZGVyZnVsIGZsYXZvcnMuIEF0IGxlYXN0IG9uZSBvZiB1cyBnb2VzIGJhY2sgZXZlcnkgeWVhciB0byBtYWludGFpbiBvdXIgZXhjZWxsZW50IHF1YWxpdHkgYW5kIHRvIGRpc292ZXIgcGVyaGFwcyBhIG5ldyBzdHlsZSBvZiByYW1lbiB0byBhZGQgdG8gb3VyIHNwZWNpYWx0eSBtZW51cy4gU28gcGxlYXNlIGNoZWNrIHRoZW0gb3V0LiBPZiBjb3Vyc2UgdGhlIHN0YXBsZSBtZW51LCB0b28sIGlzIG91ciBjcmVhdGlvbiBhZnRlciB5ZWFycyBvZiBleHBlcmllbmNlLlwiO1xuICAgIGFib3V0Q29udGVudC5hcHBlbmQoYWJvdXRNZSwgZGl2VGl0bGUsIGFib3V0TWVQKTtcbiAgICByZXR1cm4gY29udGVudC5hcHBlbmQoYWJvdXRDb250ZW50LCBpbWcpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFib3V0O1xuIiwiaW1wb3J0IExvZ28gZnJvbSAnLi4vYXNzZXRzL2xvZ28uc3ZnJztcblxuXG5mdW5jdGlvbiBjb21wb25lbnQoKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbWFpbi5hcHBlbmQocClcbiAgICBwLmFwcGVuZChpbWcpXG4gICAgaW1nLnNyYyA9IExvZ287XG4gICAgaW1nLmFsdCA9ICdkZWZhdWx0IGxvZ28nO1xuICAgIHJldHVybiBtYWluO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQ7IiwiY29uc3QgaG9tZVBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lLWJ0bicpO1xuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSlcbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWVQYWdlOyIsImNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtYnRuXCIpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuY29uc3QgTWVudSA9ICgpID0+IHtcbiAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ21lbnVDb250ZW50Jyk7XG4gICAgY29uc3Qgc3BlY2lhbHR5SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNwZWNpYWx0eUl0ZW0uaW5uZXJIVE1MID0gJzxoMyBjbGFzcz1cInNwZWNpYWx0eS1pdGVtLXRpdGxlXCI+T3VyIGN1cnJlbnQgc3BlY2lhbDogPHNwYW4+U3BpY3kgUmVkLVBvcmsgUmFtZW48L3NwYW4+PC9oMz4nXG4gICAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGl2NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRpdjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBpbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgaW1nMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IGltZzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwMS5pbm5lclRleHQgPSAnTWlzbyBSYW1lbic7XG4gICAgcDIuaW5uZXJUZXh0ID0gJ1NoaW8gUmFtZW4nO1xuICAgIHAzLmlubmVyVGV4dCA9ICdQb3JrIFJhbWVuJztcbiAgICBwNC5pbm5lclRleHQgPSAnU3dlZXQgUmFtZW4nO1xuICAgIGltZzEuc3JjID0gJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjIzMzQxMjE0ODI1LTlmNGY5NjM3MjdkYT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTc3MCZxPTgwJztcbiAgICBpbWcxLmFsdCA9ICdTcGVjaWFsdHkgUmFtZW4nO1xuICAgIGltZzIuc3JjID0gJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTkxMzI1NDE4NDQxLWZmNjc4YmFmNzhlZj9peGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4Jml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTM3NCZxPTgwJztcbiAgICBpbWcyLmFsdCA9ICdTcGVjaWFsdHkgUmFtZW4nO1xuICAgIGltZzMuc3JjID0gJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTU3ODcyOTQzLTE2YTVhYzI2NDM3ZT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTczMSZxPTgwJztcbiAgICBpbWczLmFsdCA9ICdTcGVjaWFsdHkgUmFtZW4nO1xuICAgIGltZzQuc3JjID0gJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjE4ODg5NDgyOTIzLTM4MjUwNDAxYTg0ZT9peGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4Jml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTc3MCZxPTgwJztcbiAgICBpbWc0LmFsdCA9ICdTcGVjaWFsdHkgUmFtZW4nO1xuICAgIGRpdjEuYXBwZW5kKGltZzEpXG4gICAgZGl2MS5hcHBlbmQocDEpXG4gICAgZGl2Mi5hcHBlbmQoaW1nMilcbiAgICBkaXYyLmFwcGVuZChwMilcbiAgICBkaXYzLmFwcGVuZChpbWczKVxuICAgIGRpdjMuYXBwZW5kKHAzKVxuICAgIGRpdjQuYXBwZW5kKGltZzQpXG4gICAgZGl2NC5hcHBlbmQocDQpXG4gICAgZGl2VGl0bGUuY2xhc3NMaXN0LmFkZCgndGhlU3BlY2lhbCcpO1xuICAgIGRpdlRpdGxlLmFwcGVuZChzcGVjaWFsdHlJdGVtLCBkaXY1KVxuICAgIGRpdjEuY2xhc3NMaXN0LmFkZCgnc3BlY2lhbHR5Jyk7XG4gICAgZGl2Mi5jbGFzc0xpc3QuYWRkKCdzcGVjaWFsdHknKTtcbiAgICBkaXYzLmNsYXNzTGlzdC5hZGQoJ3NwZWNpYWx0eScpO1xuICAgIGRpdjQuY2xhc3NMaXN0LmFkZCgnc3BlY2lhbHR5Jyk7XG4gICAgZGl2NS5jbGFzc0xpc3QuYWRkKCdib3JkZXJCb3QnKVxuICAgIG1lbnVDb250ZW50LmFwcGVuZChkaXZUaXRsZSwgZGl2MSwgZGl2MiwgZGl2MywgZGl2NCk7XG4gICAgcmV0dXJuIGNvbnRlbnQuYXBwZW5kKG1lbnVDb250ZW50KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51O1xuXG57XG4gIC8qIDxkaXYgY2xhc3M9XCJzcGVjaWFsdHkgaXRlbS1vbmVcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MjMzNDEyMTQ4MjUtOWY0Zjk2MzcyN2RhP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNzcwJnE9ODBcIiBhbHQ9XCJzcGVjaWFsdHkgcmFtZW5cIj5cbiAgICAgICAgICAgIDxwPlRoaXMgaXMgb3VyIGZhbW91cyBtaXNvIHJhbWVuLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGVjaWFsdHkgaXRlbS10d29cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1OTEzMjU0MTg0NDEtZmY2NzhiYWY3OGVmP2l4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmaXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMzc0JnE9ODBcIiBhbHQ9XCJzcGVjaWFsdHkgcmFtZW5cIj5cbiAgICAgICAgICAgIDxwPlRoaXMgaXMgb3VyIGZhbW91cyBzaGlvIHJhbWVuLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGVjaWFsdHkgaXRlbS10aHJlZVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU1Nzg3Mjk0My0xNmE1YWMyNjQzN2U/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE3MzEmcT04MFwiIGFsdD1cInNwZWNpYWx0eSByYW1lblwiPlxuICAgICAgICAgICAgPHA+VGhpcyBpcyBvdXIgZmFtb3VzIHBvcmsgcmFtZW4uPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNwZWNpYWx0eSBpdGVtLWZvdXJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MTg4ODk0ODI5MjMtMzgyNTA0MDFhODRlP2l4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmaXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNzcwJnE9ODBcIiBhbHQ9XCJzcGVjaWFsdHkgcmFtZW5cIj5cbiAgICAgICAgICAgIDxwPlRoaXMgaXMgb3VyIGZhbW91cyBzd2VldCByYW1lbi48L3A+XG4gICAgICAgIDwvZGl2PiAqL1xufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9SYW1lbi1SZXNpemUuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBmYmZjO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkzMjQxO1xcbiAgY29sb3I6ICNFMEZCRkM7XFxufVxcblxcbi50aXRsZSB7XFxuICBjb2xvcjogI0UwRkJGQztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGZiZmM7XFxufVxcblxcbi5iYWNrZ3JvdW5kLWltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA5M3ZoO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4uaG9tZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzRDVBODA7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwNTBweCl7XFxuICAuYmFja2dyb3VuZC1pbWFnZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwdmg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB9XFxuICAuaG9tZSB7XFxuICAgIHdpZHRoOiA4NSU7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCl7XFxuICAuYmFja2dyb3VuZC1pbWFnZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDQwdmg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB9XFxuICAuaG9tZSB7XFxuICAgIHdpZHRoOiA4NSU7XFxuICB9XFxufVxcblxcbi5ib3JkZXJCb3Q6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogNHJlbTtcXG4gIGhlaWdodDogMXB4O1xcbiAgbWFyZ2luOiAzcmVtIGF1dG8gMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgb3BhY2l0eTogLjI7XFxufVxcblxcbi8qIE1lbnUgSXRlbXMgKi9cXG4ubWVudUNvbnRlbnQgeyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHdpZHRoOiA4MCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBtYXJnaW46IDJyZW07XFxufVxcblxcbi50aGVTcGVjaWFsIHtcXG4gIHdpZHRoOiA4MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG4uc3BlY2lhbHR5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDQ1JTtcXG4gIHBhZGRpbmc6IC41cmVtO1xcbn1cXG5cXG4uc3BlY2lhbHR5IHAge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5zcGVjaWFsdHktaXRlbS10aXRsZSB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuaW1nIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi8qIEFib3V0IGNvbnRlbnQgKi9cXG4uYWJvdXRDb250ZW50IHsgXFxuICB3aWR0aDogNzAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjM0Q1QTgwO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW46IDFyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmJhY2tncm91bmQtaW1nIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxMzAwcHgpIHtcXG4gIC5hYm91dENvbnRlbnQge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcbn1cXG5cXG5mb290ZXIge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkzMjQxO1xcbiAgY29sb3I6ICNFMEZCRkM7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4uc29jaWFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zb2NpYWwgcCB7XFxuICBtYXJnaW46IC4ycmVtO1xcbiAgcGFkZGluZzogLjJyZW07XFxufVxcblxcbi5vcHRpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5zcGFuIHsgXFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjZWU2YzRkO1xcbn1cXG5cXG5oMiB7XFxuICBtYXJnaW46IDFyZW07XFxuICBwYWRkaW5nOiAuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OEMxRDk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsaUNBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlEQUFtRDtFQUNuRCw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7RUFDWCxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUEsZUFBZTtBQUNmO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZmJmYztcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDZyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MzI0MTtcXG4gIGNvbG9yOiAjRTBGQkZDO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgY29sb3I6ICNFMEZCRkM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBmYmZjO1xcbn1cXG5cXG4uYmFja2dyb3VuZC1pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogOTN2aDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL1JhbWVuLVJlc2l6ZS5qcGcnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4uaG9tZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzRDVBODA7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwNTBweCl7XFxuICAuYmFja2dyb3VuZC1pbWFnZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwdmg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB9XFxuICAuaG9tZSB7XFxuICAgIHdpZHRoOiA4NSU7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCl7XFxuICAuYmFja2dyb3VuZC1pbWFnZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDQwdmg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB9XFxuICAuaG9tZSB7XFxuICAgIHdpZHRoOiA4NSU7XFxuICB9XFxufVxcblxcbi5ib3JkZXJCb3Q6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogNHJlbTtcXG4gIGhlaWdodDogMXB4O1xcbiAgbWFyZ2luOiAzcmVtIGF1dG8gMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgb3BhY2l0eTogLjI7XFxufVxcblxcbi8qIE1lbnUgSXRlbXMgKi9cXG4ubWVudUNvbnRlbnQgeyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHdpZHRoOiA4MCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBtYXJnaW46IDJyZW07XFxufVxcblxcbi50aGVTcGVjaWFsIHtcXG4gIHdpZHRoOiA4MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG4uc3BlY2lhbHR5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDQ1JTtcXG4gIHBhZGRpbmc6IC41cmVtO1xcbn1cXG5cXG4uc3BlY2lhbHR5IHAge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5zcGVjaWFsdHktaXRlbS10aXRsZSB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuaW1nIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi8qIEFib3V0IGNvbnRlbnQgKi9cXG4uYWJvdXRDb250ZW50IHsgXFxuICB3aWR0aDogNzAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjM0Q1QTgwO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW46IDFyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmJhY2tncm91bmQtaW1nIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxMzAwcHgpIHtcXG4gIC5hYm91dENvbnRlbnQge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcbn1cXG5cXG5mb290ZXIge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkzMjQxO1xcbiAgY29sb3I6ICNFMEZCRkM7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4uc29jaWFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zb2NpYWwgcCB7XFxuICBtYXJnaW46IC4ycmVtO1xcbiAgcGFkZGluZzogLjJyZW07XFxufVxcblxcbi5vcHRpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5zcGFuIHsgXFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjZWU2YzRkO1xcbn1cXG5cXG5oMiB7XFxuICBtYXJnaW46IDFyZW07XFxuICBwYWRkaW5nOiAuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OEMxRDk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1Byb2plY3QtV2VicGFjay9cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vY3NzL3N0eWxlcy5jc3MnO1xuaW1wb3J0IGNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgTWVudSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IGhvbWVQYWdlIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgYWJvdXQgZnJvbSAnLi9hYm91dC5qcyc7XG5cbk1lbnUoKVxuaG9tZVBhZ2UoKVxuYWJvdXQoKVxuXG5cblxuXG5cbiJdLCJuYW1lcyI6WyJhYm91dEJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJhYm91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbm5lckhUTUwiLCJhYm91dENvbnRlbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYWJvdXRNZSIsImFib3V0TWVQIiwiZGl2VGl0bGUiLCJpbWciLCJzcmMiLCJhbHQiLCJpbm5lclRleHQiLCJhcHBlbmQiLCJMb2dvIiwiY29tcG9uZW50IiwibWFpbiIsInAiLCJob21lUGFnZSIsImhvbWVCdG4iLCJsb2NhdGlvbiIsInJlbG9hZCIsIm1lbnVCdG4iLCJNZW51IiwibWVudUNvbnRlbnQiLCJzcGVjaWFsdHlJdGVtIiwiZGl2MSIsImRpdjIiLCJkaXYzIiwiZGl2NCIsImRpdjUiLCJpbWcxIiwiaW1nMiIsImltZzMiLCJpbWc0IiwicDEiLCJwMiIsInAzIiwicDQiLCJzdHlsZXMiXSwic291cmNlUm9vdCI6IiJ9