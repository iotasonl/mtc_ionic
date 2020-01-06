(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-children-childcaredashboard-childcaredashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/children/childcaredashboard/childcaredashboard.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/children/childcaredashboard/childcaredashboard.page.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar primary>\n    <ion-buttons slot=\"start\" menuToggle>\n      <ion-menu-button menu=\"navHome\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Child Care Dashboard\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-grid>\n    <ion-row *ngFor=\"let d of dashboardItems\">\n\n        <ion-col col-6 (click)=\"openPage(d)\">\n          <ion-card text-center padding color=\"primary\">\n            <ion-icon [name]=\"d.icon\"></ion-icon>\n            <h4>{{d.title}}</h4>\n          </ion-card>\n        </ion-col>\n\n    </ion-row>\n  </ion-grid>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/children/childcaredashboard/childcaredashboard-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/home/children/childcaredashboard/childcaredashboard-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ChildcaredashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildcaredashboardPageRoutingModule", function() { return ChildcaredashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _childcaredashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./childcaredashboard.page */ "./src/app/home/children/childcaredashboard/childcaredashboard.page.ts");




var routes = [
    {
        path: '',
        component: _childcaredashboard_page__WEBPACK_IMPORTED_MODULE_3__["ChildcaredashboardPage"]
    }
];
var ChildcaredashboardPageRoutingModule = /** @class */ (function () {
    function ChildcaredashboardPageRoutingModule() {
    }
    ChildcaredashboardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ChildcaredashboardPageRoutingModule);
    return ChildcaredashboardPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/children/childcaredashboard/childcaredashboard.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/home/children/childcaredashboard/childcaredashboard.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ChildcaredashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildcaredashboardPageModule", function() { return ChildcaredashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _childcaredashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./childcaredashboard-routing.module */ "./src/app/home/children/childcaredashboard/childcaredashboard-routing.module.ts");
/* harmony import */ var _childcaredashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./childcaredashboard.page */ "./src/app/home/children/childcaredashboard/childcaredashboard.page.ts");







var ChildcaredashboardPageModule = /** @class */ (function () {
    function ChildcaredashboardPageModule() {
    }
    ChildcaredashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _childcaredashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChildcaredashboardPageRoutingModule"]
            ],
            declarations: [_childcaredashboard_page__WEBPACK_IMPORTED_MODULE_6__["ChildcaredashboardPage"]]
        })
    ], ChildcaredashboardPageModule);
    return ChildcaredashboardPageModule;
}());



/***/ }),

/***/ "./src/app/home/children/childcaredashboard/childcaredashboard.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/home/children/childcaredashboard/childcaredashboard.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY2hpbGRyZW4vY2hpbGRjYXJlZGFzaGJvYXJkL2NoaWxkY2FyZWRhc2hib2FyZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/children/childcaredashboard/childcaredashboard.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/home/children/childcaredashboard/childcaredashboard.page.ts ***!
  \*****************************************************************************/
/*! exports provided: ChildcaredashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildcaredashboardPage", function() { return ChildcaredashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ChildcaredashboardPage = /** @class */ (function () {
    function ChildcaredashboardPage(router) {
        this.router = router;
        this.dashboardItems = [
            { title: 'Admission', link: 'new-admission', icon: 'person' },
            { title: 'Re-Admission', link: 'childcaredashboard', icon: 'person' },
            { title: 'Discharge', link: 'discharge', icon: 'person' },
            { title: 'Followup', link: 'follow-up', icon: 'person' },
            { title: 'Docto\'s Followup', link: '#', icon: 'person' },
        ];
    }
    ChildcaredashboardPage.prototype.openPage = function (page) {
        this.router.navigateByUrl(page.link);
    };
    ChildcaredashboardPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    ChildcaredashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-childcaredashboard',
            template: __webpack_require__(/*! raw-loader!./childcaredashboard.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/children/childcaredashboard/childcaredashboard.page.html"),
            styles: [__webpack_require__(/*! ./childcaredashboard.page.scss */ "./src/app/home/children/childcaredashboard/childcaredashboard.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ChildcaredashboardPage);
    return ChildcaredashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=home-children-childcaredashboard-childcaredashboard-module-es5.js.map