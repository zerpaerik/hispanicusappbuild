webpackJsonp([3],{

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["HttpLoaderFactory"] = HttpLoaderFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageModule", function() { return InfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__info__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function HttpLoaderFactory(httpClient) {
    return new __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](httpClient, "./assets/i18n/", ".json");
}
var InfoPageModule = (function () {
    function InfoPageModule() {
    }
    InfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__info__["a" /* InfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__info__["a" /* InfoPage */]),
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]]
                    }
                })
            ],
        })
    ], InfoPageModule);
    return InfoPageModule;
}());

//# sourceMappingURL=info.module.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InfoPage = (function () {
    function InfoPage(sanitizer, translate, navCtrl, navParams) {
        this.sanitizer = sanitizer;
        this.translate = translate;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = navParams.get('type');
    }
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"C:\Users\JM\hispanicusapp\src\pages\info\info.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>info</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content [ngSwitch]="type" padding>\n\n\n\n		<ion-item-group *ngSwitchCase="\'raiz\'">\n\n			<ion-item-divider>Raiz</ion-item-divider>\n\n			<ion-item>\n\n				<p class="info">La raiz bla bla bla bla bla</p>\n\n			</ion-item>\n\n		</ion-item-group>\n\n	\n\n		<ion-item-group *ngSwitchCase="\'desinencia\'">\n\n			<ion-item-divider>Desinencia</ion-item-divider>\n\n			<ion-item>\n\n				<p class="info">La desinencia bla bla bla bla</p>\n\n			</ion-item>\n\n		</ion-item-group>\n\n\n\n		<ion-item-group *ngSwitchCase="\'dedos\'">\n\n			<ion-item-divider>Negativo-Afirmativo</ion-item-divider>\n\n			<ion-item>\n\n				<ion-icon color="soft-blue" name="ios-thumbs-up-outline"></ion-icon>\n\n				<p item-end>Afirmativo informal</p>\n\n			</ion-item>\n\n			<ion-item>\n\n				<ion-icon color="soft-blue" name="ios-thumbs-down-outline"></ion-icon>\n\n				<p item-end>Negativo informal</p>\n\n			</ion-item>\n\n			<ion-item>\n\n				<ion-icon color="soft-blue" name="ios-thumbs-up"></ion-icon>\n\n				<p item-end>Afirmativo formal</p>\n\n			</ion-item>\n\n			<ion-item>\n\n				<ion-icon color="soft-blue" name="ios-thumbs-down"></ion-icon>\n\n				<p item-end>Negativo formal</p>\n\n			</ion-item>\n\n		</ion-item-group>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\JM\hispanicusapp\src\pages\info\info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ })

});
//# sourceMappingURL=3.js.map