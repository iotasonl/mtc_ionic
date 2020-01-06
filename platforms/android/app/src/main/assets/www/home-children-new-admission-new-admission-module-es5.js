(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-children-new-admission-new-admission-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/children/new-admission/new-admission.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/children/new-admission/new-admission.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"header-bg\">\r\n    <ion-buttons slot=\"start\" menuToggle>\r\n      <ion-menu-button menu=\"navHome\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Admission\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container-fluid\">\r\n    <form #form=\"ngForm\" (ngSubmit)=\"login()\">\r\n      <ion-grid>\r\n        <ion-row color=\"primary\" justify-content-left>\r\n          <ion-col size-md=\"6\" size-lg=\"6\" size-xs=\"6\">\r\n            <ion-label>Sam No</ion-label>\r\n            <ion-input class=\"form-control\" name=\"sam_no\" type=\"text\" [(ngModel)]=\"sam_no\" required></ion-input>\r\n          </ion-col>\r\n          <ion-col size-md=\"6\" size-lg=\"6\" size-xs=\"6\">\r\n            <ion-label>Registration No</ion-label>\r\n            <ion-input class=\"form-control\" name=\"reg_no\" type=\"text\" [(ngModel)]=\"reg_no\" required></ion-input>\r\n          </ion-col>\r\n          <ion-col size-md=\"6\" size-lg=\"6\" size-xs=\"6\">\r\n            <ion-label>Page No</ion-label>\r\n            <ion-input class=\"form-control\" name=\"page_no\" type=\"text\" [(ngModel)]=\"page_no\" required></ion-input>\r\n          </ion-col>\r\n          <ion-col size-md=\"6\" size-lg=\"6\" size-xs=\"6\">\r\n            <ion-label>Child Name</ion-label>\r\n            <ion-input class=\"form-control\" name=\"child_name\" type=\"text\" [(ngModel)]=\"child_name\" required></ion-input>\r\n          </ion-col>\r\n          <ion-col size-md=\"6\" size-lg=\"6\" size-xs=\"6\">\r\n            <ion-label>Date of Birth</ion-label>\r\n            <ion-datetime #date displayFormat=\"MM/DD/YYYY\" class=\"form-control\" id=\"birthDate\" name=\"birthdate\" [(ngModel)]=\"birthdate\" (ionChange)=\"CalculateAge()\"></ion-datetime>\r\n          </ion-col>\r\n          <ion-col size-md=\"6\" size-lg=\"6\" size-xs=\"6\">\r\n            <ion-label>Gender</ion-label>\r\n            <ion-select interface=\"action-sheet\" class=\"form-control\">\r\n              <ion-select-option value=\"1\">Male</ion-select-option>\r\n              <ion-select-option value=\"2\">Female</ion-select-option>\r\n            </ion-select>\r\n          </ion-col>\r\n          <ion-col size-md=\"6\" size-lg=\"6\" size-xs=\"6\">\r\n            <ion-label>Caste</ion-label>\r\n            <ion-select interface=\"action-sheet\" class=\"form-control\">\r\n              <ion-select-option value=\"1\">ST</ion-select-option>\r\n              <ion-select-option value=\"2\">SC</ion-select-option>\r\n              <ion-select-option value=\"3\">OBC</ion-select-option>\r\n              <ion-select-option value=\"4\">Other</ion-select-option>\r\n            </ion-select>\r\n          </ion-col>\r\n          <ion-col size-md=\"6\" size-lg=\"6\" size-xs=\"6\">\r\n            <ion-label>Age</ion-label>\r\n            <ion-input class=\"form-control\" name=\"age\" type=\"text\" [(ngModel)]=\"age\" required></ion-input>\r\n          </ion-col>\r\n          <ion-col size-md=\"6\" size-lg=\"6\" size-xs=\"6\">\r\n            <ion-label>Parent Name</ion-label>\r\n            <ion-input class=\"form-control\" name=\"parent_name\" type=\"text\" [(ngModel)]=\"parent_name\" required></ion-input>\r\n          </ion-col>\r\n          <ion-col size-md=\"6\" size-lg=\"6\" size-xs=\"6\">\r\n            <ion-label>Contact Number</ion-label>\r\n            <ion-input class=\"form-control\" name=\"contact_number\" type=\"text\" [(ngModel)]=\"contact_number\" required></ion-input>\r\n          </ion-col>\r\n          <ion-col size-md=\"6\" size-lg=\"6\" size-xs=\"6\">\r\n            <ion-label>Address</ion-label>\r\n            <ion-input class=\"form-control\" name=\"address\" type=\"text\" [(ngModel)]=\"address\" required></ion-input>\r\n          </ion-col>\r\n          <ion-col size-md=\"6\" size-lg=\"6\" size-xs=\"6\">\r\n            <ion-label>Division</ion-label>\r\n            <ion-input class=\"form-control\" name=\"division\" type=\"text\" [(ngModel)]=\"division\" required></ion-input>\r\n          </ion-col>\r\n          <ion-col size-md=\"6\" size-lg=\"6\" size-xs=\"6\">\r\n            <ion-label>Block</ion-label>\r\n            <ion-select interface=\"action-sheet\" class=\"form-control\" name=\"block\" [(ngModel)]=\"block\">\r\n              <ion-select-option value=\"0\">block name</ion-select-option>\r\n            </ion-select>\r\n          </ion-col>\r\n          <ion-col size-md=\"6\" size-lg=\"6\" size-xs=\"6\">\r\n            <ion-label>Panchayat</ion-label>\r\n            <ion-select interface=\"action-sheet\" class=\"form-control\" name=\"panchayat\" [(ngModel)]=\"panchayat\">\r\n              <ion-select-option value=\"0\">panchayat name</ion-select-option>\r\n            </ion-select>\r\n          </ion-col>\r\n          <ion-col size-md=\"6\" size-lg=\"6\" size-xs=\"6\">\r\n            <ion-label>BPL</ion-label>\r\n            <ion-select interface=\"action-sheet\" class=\"form-control\" name=\"bpl\" [(ngModel)]=\"bpl\">\r\n              <ion-select-option value=\"1\">Yes</ion-select-option>\r\n              <ion-select-option value=\"2\">No</ion-select-option>\r\n            </ion-select>\r\n          </ion-col>\r\n          <ion-col size-md=\"6\" size-lg=\"6\" size-xs=\"6\">\r\n            <ion-label>BPL No</ion-label>\r\n            <ion-input class=\"form-control\" name=\"bpl_no\" type=\"text\" [(ngModel)]=\"bpl_no\" required></ion-input>\r\n          </ion-col>\r\n          <ion-col size-md=\"6\" size-lg=\"6\" size-xs=\"6\">\r\n            <ion-label>Referred By</ion-label>\r\n            <ion-select interface=\"action-sheet\" class=\"form-control\" name=\"referred_by\" [(ngModel)]=\"referred_by\">\r\n              <ion-select-option value=\"1\">AWW</ion-select-option>\r\n              <ion-select-option value=\"2\">Sahiya</ion-select-option>\r\n              <ion-select-option value=\"3\">OPD</ion-select-option>\r\n              <ion-select-option value=\"4\">Self</ion-select-option>\r\n              <ion-select-option value=\"5\">Other</ion-select-option>\r\n            </ion-select>\r\n          </ion-col>\r\n          <ion-col size-md=\"6\" size-lg=\"6\" size-xs=\"6\">\r\n            <ion-label>Referred Contact No</ion-label>\r\n            <ion-input class=\"form-control\" name=\"referred_contact\" type=\"text\" [(ngModel)]=\"referred_contact\" required></ion-input>\r\n          </ion-col>\r\n          <ion-col size-md=\"6\" size-lg=\"6\" size-xs=\"6\">\r\n            <ion-label>Breast Feeding</ion-label>\r\n            <ion-select interface=\"action-sheet\" class=\"form-control\" name=\"breast_feeding\" [(ngModel)]=\"breast_feeding\">\r\n              <ion-select-option value=\"1\">Yes</ion-select-option>\r\n              <ion-select-option value=\"2\">No</ion-select-option>\r\n            </ion-select>\r\n          </ion-col>\r\n          <ion-col size-md=\"6\" size-lg=\"6\" size-xs=\"6\">\r\n            <ion-label>Complementry Food</ion-label>\r\n            <ion-select interface=\"action-sheet\" class=\"form-control\" name=\"complementry_food\" [(ngModel)]=\"complementry_food\">\r\n              <ion-select-option value=\"1\">Yes</ion-select-option>\r\n              <ion-select-option value=\"2\">No</ion-select-option>\r\n            </ion-select>\r\n          </ion-col>\r\n          <ion-col size-md=\"6\" size-lg=\"6\" size-xs=\"6\">\r\n            <ion-label>Date</ion-label>\r\n            <ion-datetime #date displayFormat=\"MM/DD/YYYY\" class=\"form-control\" name=\"c_date\" [(ngModel)]=\"c_date\"></ion-datetime>\r\n          </ion-col>\r\n          <ion-col size-md=\"6\" size-lg=\"6\" size-xs=\"6\">\r\n            <ion-label>Time</ion-label>\r\n            <ion-datetime #date displayFormat=\"hh:m a\" class=\"form-control\" name=\"c_time\" [(ngModel)]=\"c_time\"></ion-datetime>\r\n          </ion-col>\r\n          <ion-col size-md=\"12\" size-lg=\"12\" size-xs=\"12\">\r\n            <ion-label>Image</ion-label>\r\n            <ion-input type=\"file\" accept=\"image/*\" (change)=\"changeListener($event)\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-button size=\"small\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\">Submit</ion-button>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/home/children/new-admission/new-admission-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/home/children/new-admission/new-admission-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: NewAdmissionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAdmissionPageRoutingModule", function() { return NewAdmissionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_admission_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-admission.page */ "./src/app/home/children/new-admission/new-admission.page.ts");




var routes = [
    {
        path: '',
        component: _new_admission_page__WEBPACK_IMPORTED_MODULE_3__["NewAdmissionPage"]
    }
];
var NewAdmissionPageRoutingModule = /** @class */ (function () {
    function NewAdmissionPageRoutingModule() {
    }
    NewAdmissionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], NewAdmissionPageRoutingModule);
    return NewAdmissionPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/children/new-admission/new-admission.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home/children/new-admission/new-admission.module.ts ***!
  \*********************************************************************/
/*! exports provided: NewAdmissionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAdmissionPageModule", function() { return NewAdmissionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_admission_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-admission-routing.module */ "./src/app/home/children/new-admission/new-admission-routing.module.ts");
/* harmony import */ var _new_admission_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-admission.page */ "./src/app/home/children/new-admission/new-admission.page.ts");







var NewAdmissionPageModule = /** @class */ (function () {
    function NewAdmissionPageModule() {
    }
    NewAdmissionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _new_admission_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewAdmissionPageRoutingModule"]
            ],
            declarations: [_new_admission_page__WEBPACK_IMPORTED_MODULE_6__["NewAdmissionPage"]]
        })
    ], NewAdmissionPageModule);
    return NewAdmissionPageModule;
}());



/***/ }),

/***/ "./src/app/home/children/new-admission/new-admission.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/home/children/new-admission/new-admission.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-bg {\n  --background: linear-gradient(#8459f9, #4c3196);\n  color: #ffffff;\n}\n\n.form-group {\n  position: relative;\n  margin-bottom: 1.5rem;\n}\n\n.form-control-placeholder {\n  position: absolute;\n  top: 0;\n  padding: 7px 0 0 13px;\n  -webkit-transition: all 200ms;\n  transition: all 200ms;\n  opacity: 0.5;\n}\n\n.form-control:focus + .form-control-placeholder,\n.form-control:valid + .form-control-placeholder {\n  font-size: 75%;\n  -webkit-transform: translate3d(0, -100%, 0);\n          transform: translate3d(0, -100%, 0);\n  opacity: 1;\n}\n\nion-label {\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jaGlsZHJlbi9uZXctYWRtaXNzaW9uL0Q6XFxQcm9qZWN0c1xcaW9uaWNcXE1UQ1xcbXRjX2lvbmljL3NyY1xcYXBwXFxob21lXFxjaGlsZHJlblxcbmV3LWFkbWlzc2lvblxcbmV3LWFkbWlzc2lvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvY2hpbGRyZW4vbmV3LWFkbWlzc2lvbi9uZXctYWRtaXNzaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtDQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUFBLHFCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVFOztFQUVFLGNBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVFO0VBQ0ksZUFBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jaGlsZHJlbi9uZXctYWRtaXNzaW9uL25ldy1hZG1pc3Npb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1iZyB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjODQ1OWY5LCAjNGMzMTk2KTtcclxuICAgIGNvbG9yOiAjZmZmZmZmXHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tY29udHJvbC1wbGFjZWhvbGRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwYWRkaW5nOiA3cHggMCAwIDEzcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWNvbnRyb2w6Zm9jdXMgKyAuZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyLFxyXG4gIC5mb3JtLWNvbnRyb2w6dmFsaWQgKyAuZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogNzUlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgaW9uLWxhYmVse1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfSIsIi5oZWFkZXItYmcge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjODQ1OWY5LCAjNGMzMTk2KTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5mb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcGFkZGluZzogN3B4IDAgMCAxM3B4O1xuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cyArIC5mb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXIsXG4uZm9ybS1jb250cm9sOnZhbGlkICsgLmZvcm0tY29udHJvbC1wbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/children/new-admission/new-admission.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/children/new-admission/new-admission.page.ts ***!
  \*******************************************************************/
/*! exports provided: NewAdmissionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAdmissionPage", function() { return NewAdmissionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewAdmissionPage = /** @class */ (function () {
    function NewAdmissionPage() {
    }
    // birthDate = Date.now();
    NewAdmissionPage.prototype.ngOnInit = function () {
    };
    NewAdmissionPage.prototype.CalculateAge = function () {
        debugger;
        var a = Date.parse(this.birthdate);
        //  d = Date.now()
        if (this.birthdate) {
            var timeDiff = Math.abs(Date.now() - a);
            // document.getElementById('age').value = timeDiff;
        }
    };
    NewAdmissionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-admission',
            template: __webpack_require__(/*! raw-loader!./new-admission.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/children/new-admission/new-admission.page.html"),
            styles: [__webpack_require__(/*! ./new-admission.page.scss */ "./src/app/home/children/new-admission/new-admission.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewAdmissionPage);
    return NewAdmissionPage;
}());



/***/ })

}]);
//# sourceMappingURL=home-children-new-admission-new-admission-module-es5.js.map