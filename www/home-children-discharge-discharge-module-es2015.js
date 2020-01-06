(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-children-discharge-discharge-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/children/discharge/discharge.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/children/discharge/discharge.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"header-bg\">\r\n    <ion-buttons slot=\"start\" menuToggle>\r\n      <ion-menu-button menu=\"navHome\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Discharge\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container-fluid\">\r\n    <form #form=\"ngForm\" (ngSubmit)=\"login()\">\r\n      <ion-grid>\r\n        <ion-row color=\"primary\" justify-content-left>\r\n          <ion-col size-md=\"12\" size-lg=\"12\" size-xs=\"12\">\r\n            <ion-searchbar primary name=\"reg_no\" [(ngModel)]=\"reg_no\" placeholder=\"Reg No\"></ion-searchbar>\r\n          </ion-col>\r\n          <ion-col size-md=\"12\" size-lg=\"12\" size-xs=\"12\">\r\n            <ion-searchbar primary name=\"contact_no\" [(ngModel)]=\"contact_no\" placeholder=\"Contact No\"></ion-searchbar>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size-md=\"12\" size-lg=\"12\" size-xs=\"12\">\r\n            <ion-button size=\"small\" type=\"submit\" [disabled]=\"form.invalid\" (click) = \"search_child()\" expand=\"block\">search</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/home/children/discharge/discharge-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home/children/discharge/discharge-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: DischargePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DischargePageRoutingModule", function() { return DischargePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _discharge_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./discharge.page */ "./src/app/home/children/discharge/discharge.page.ts");




const routes = [
    {
        path: '',
        component: _discharge_page__WEBPACK_IMPORTED_MODULE_3__["DischargePage"]
    }
];
let DischargePageRoutingModule = class DischargePageRoutingModule {
};
DischargePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DischargePageRoutingModule);



/***/ }),

/***/ "./src/app/home/children/discharge/discharge.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/children/discharge/discharge.module.ts ***!
  \*************************************************************/
/*! exports provided: DischargePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DischargePageModule", function() { return DischargePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _discharge_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discharge-routing.module */ "./src/app/home/children/discharge/discharge-routing.module.ts");
/* harmony import */ var _discharge_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discharge.page */ "./src/app/home/children/discharge/discharge.page.ts");







let DischargePageModule = class DischargePageModule {
};
DischargePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _discharge_routing_module__WEBPACK_IMPORTED_MODULE_5__["DischargePageRoutingModule"]
        ],
        declarations: [_discharge_page__WEBPACK_IMPORTED_MODULE_6__["DischargePage"]]
    })
], DischargePageModule);



/***/ }),

/***/ "./src/app/home/children/discharge/discharge.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/home/children/discharge/discharge.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY2hpbGRyZW4vZGlzY2hhcmdlL2Rpc2NoYXJnZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/children/discharge/discharge.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/children/discharge/discharge.page.ts ***!
  \***********************************************************/
/*! exports provided: DischargePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DischargePage", function() { return DischargePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DischargePage = class DischargePage {
    constructor() { }
    ngOnInit() {
    }
    search_child() {
        alert(12);
    }
};
DischargePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-discharge',
        template: __webpack_require__(/*! raw-loader!./discharge.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/children/discharge/discharge.page.html"),
        styles: [__webpack_require__(/*! ./discharge.page.scss */ "./src/app/home/children/discharge/discharge.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DischargePage);



/***/ })

}]);
//# sourceMappingURL=home-children-discharge-discharge-module-es2015.js.map