webpackJsonp([1],{

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["HttpLoaderFactory"] = HttpLoaderFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function() { return TutorialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutorial__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_verbos_verbos__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







function HttpLoaderFactory(httpClient) {
    return new __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](httpClient, "./assets/i18n/", ".json");
}
var TutorialPageModule = (function () {
    function TutorialPageModule() {
    }
    TutorialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClient */]]
                    }
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_verbos_verbos__["a" /* VerbosProvider */]]
        })
    ], TutorialPageModule);
    return TutorialPageModule;
}());

//# sourceMappingURL=tutorial.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_verbos_verbos__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TutorialPage = (function () {
    function TutorialPage(navCtrl, navParams, verbosProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.verbosProvider = verbosProvider;
        this.tutorial = "...";
        this.tenses = false;
        this.verbo = navParams.get('verbo');
        this.tenses = navParams.get('isReflex');
        this.verbosProvider.getTuto(this.verbo.id).subscribe(function (res) {
            _this.tutorial = res['tutorial'];
        });
    }
    TutorialPage.prototype.pro = function (t) {
        t = t.replace(/\[/g, '<b class="rc">');
        t = t.replace(/\]/g, '</b>');
        t = t.replace(/\{/g, '<b class="bc">');
        t = t.replace(/\}/g, '</b>');
        return t;
    };
    TutorialPage.prototype.appendSe = function () {
        var w = this.verbo.infinitivo;
        console.log(w);
        console.log(this.tenses);
        if (this.tenses) {
            if (w.indexOf(".") >= 0) {
                w = w.replace(/.[0-9]/g, "se");
                return w;
            }
            else {
                return w + "se";
            }
        }
        else {
            return this.verbo.infinitivo;
        }
    };
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"C:\Users\JM\hispanicusapp\src\pages\tutorial\tutorial.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{appendSe()}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<ion-card>\n\n	  <ion-card-header>\n\n	    {{\'GENERAL.TUTORIAL\' |  translate}}\n\n	  </ion-card-header>\n\n	  <ion-card-content>\n\n	    <p *ngIf="tutorial; else not_found" justify="justify" class="tuto" [innerHTML]="pro(tutorial)"></p>\n\n	    <ng-template #not_found class="tuto">{{\'ERROR.NO_TUTO\' | translate}}</ng-template>\n\n	  </ion-card-content>\n\n    <ion-row class="cardfooter">\n\n      <ion-col>\n\n      	<p id="def">{{verbo.def}}</p>\n\n      </ion-col>\n\n    </ion-row>\n\n	</ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\JM\hispanicusapp\src\pages\tutorial\tutorial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_verbos_verbos__["a" /* VerbosProvider */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ })

});
//# sourceMappingURL=1.js.map