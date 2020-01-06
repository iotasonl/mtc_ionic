(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-follow-up-follow-up-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/follow-up/follow-up.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/follow-up/follow-up.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>follow_up</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-tabs>\r\n\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button tab=\"tab1\">\r\n        <ion-icon name=\"home\"></ion-icon>\r\n        <ion-label>Home</ion-label>\r\n      </ion-tab-button>\r\n  \r\n      <ion-tab-button tab=\"tab2\">\r\n        <ion-icon name=\"apps\"></ion-icon>\r\n        <ion-label>Feed</ion-label>\r\n      </ion-tab-button>\r\n  \r\n      <ion-tab-button tab=\"tab3\">\r\n        <ion-icon name=\"settings\"></ion-icon>\r\n        <ion-label>Settings</ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button tab=\"tab3\">\r\n        <ion-icon name=\"settings\"></ion-icon>\r\n        <ion-label>Settings</ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button tab=\"tab3\">\r\n        <ion-icon name=\"settings\"></ion-icon>\r\n        <ion-label>Settings</ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button tab=\"tab3\">\r\n        <ion-icon name=\"settings\"></ion-icon>\r\n        <ion-label>Settings</ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button tab=\"tab3\">\r\n        <ion-icon name=\"settings\"></ion-icon>\r\n        <ion-label>Settings</ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button tab=\"tab3\">\r\n        <ion-icon name=\"settings\"></ion-icon>\r\n        <ion-label>Settings</ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button tab=\"tab3\">\r\n        <ion-icon name=\"settings\"></ion-icon>\r\n        <ion-label>Settings</ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  \r\n  </ion-tabs>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/home/follow-up/follow-up-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/home/follow-up/follow-up-routing.module.ts ***!
  \************************************************************/
/*! exports provided: FollowUpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowUpPageRoutingModule", function() { return FollowUpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _follow_up_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./follow-up.page */ "./src/app/home/follow-up/follow-up.page.ts");




const routes = [
    {
        path: '',
        component: _follow_up_page__WEBPACK_IMPORTED_MODULE_3__["FollowUpPage"]
    }
];
let FollowUpPageRoutingModule = class FollowUpPageRoutingModule {
};
FollowUpPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FollowUpPageRoutingModule);



/***/ }),

/***/ "./src/app/home/follow-up/follow-up.module.ts":
/*!****************************************************!*\
  !*** ./src/app/home/follow-up/follow-up.module.ts ***!
  \****************************************************/
/*! exports provided: FollowUpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowUpPageModule", function() { return FollowUpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _follow_up_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./follow-up-routing.module */ "./src/app/home/follow-up/follow-up-routing.module.ts");
/* harmony import */ var _follow_up_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./follow-up.page */ "./src/app/home/follow-up/follow-up.page.ts");







let FollowUpPageModule = class FollowUpPageModule {
};
FollowUpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _follow_up_routing_module__WEBPACK_IMPORTED_MODULE_5__["FollowUpPageRoutingModule"]
        ],
        declarations: [_follow_up_page__WEBPACK_IMPORTED_MODULE_6__["FollowUpPage"]]
    })
], FollowUpPageModule);



/***/ }),

/***/ "./src/app/home/follow-up/follow-up.page.scss":
/*!****************************************************!*\
  !*** ./src/app/home/follow-up/follow-up.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZm9sbG93LXVwL2ZvbGxvdy11cC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/follow-up/follow-up.page.ts":
/*!**************************************************!*\
  !*** ./src/app/home/follow-up/follow-up.page.ts ***!
  \**************************************************/
/*! exports provided: FollowUpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowUpPage", function() { return FollowUpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FollowUpPage = class FollowUpPage {
    constructor() { }
    ngOnInit() {
    }
};
FollowUpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-follow-up',
        template: __webpack_require__(/*! raw-loader!./follow-up.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/follow-up/follow-up.page.html"),
        styles: [__webpack_require__(/*! ./follow-up.page.scss */ "./src/app/home/follow-up/follow-up.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FollowUpPage);



/***/ })

}]);
//# sourceMappingURL=home-follow-up-follow-up-module-es2015.js.map