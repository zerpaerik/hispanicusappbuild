webpackJsonp([3],{

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["HttpLoaderFactory"] = HttpLoaderFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageModule", function() { return InfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__info__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__ = __webpack_require__(218);
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

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_verbos_verbos__ = __webpack_require__(111);
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
    function InfoPage(plt, alertCtrl, vp, translate, navCtrl, navParams) {
        this.plt = plt;
        this.alertCtrl = alertCtrl;
        this.vp = vp;
        this.translate = translate;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.title = "...";
        this.type = navParams.get('type');
        if (this.type != 'dedos') {
            this.initializeItems();
        }
    }
    InfoPage.prototype.initializeItems = function () {
        var _this = this;
        this.vp.getInfo(this.type).subscribe(function (res) {
            _this.info = res["info"];
            _this.title = res["title"];
        }, function (error) {
            if (!(error.status == 404)) {
                _this.showAlert().present();
            }
        });
    };
    InfoPage.prototype.showAlert = function () {
        var _this = this;
        var errorTitle;
        var errorSubt;
        var errorTryAgain;
        var exit;
        this.translate.get('ERROR').subscribe(function (error) {
            errorTitle = error.TITLE;
            errorSubt = error.SUBTITLE;
            errorTryAgain = error.TRY_AGAIN;
        });
        this.translate.get('GENERAL').subscribe(function (general) {
            exit = general.EXIT;
        });
        var alert = this.alertCtrl.create({
            title: errorTitle,
            subTitle: errorSubt,
            buttons: [{
                    text: errorTryAgain,
                    handler: function () {
                        _this.initializeItems();
                    }
                },
                {
                    text: exit,
                    handler: function () {
                        _this.plt.exitApp();
                    }
                }
            ],
            enableBackdropDismiss: false
        });
        return alert;
    };
    InfoPage.prototype.pro = function (t) {
        if (!t)
            return "";
        t = t.replace(/\[/g, '<b class="rc">');
        t = t.replace(/\]/g, '</b>');
        t = t.replace(/\{/g, '<b class="bc">');
        t = t.replace(/\}/g, '</b>');
        return t;
    };
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"C:\Users\JM\hispanicusapp\src\pages\info\info.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{\'GENERAL.INFORMATION\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n<ion-content padding *ngIf="type != \'dedos\'">\n\n	<ion-card>\n\n	  <ion-card-header>\n\n	    {{title}}\n\n	  </ion-card-header>\n\n	  <ion-card-content>\n\n	    <p *ngIf="info; else not_found"class="info" [innerHTML]="pro(info)"></p>\n\n	    <ng-template #not_found class="tuto">☺☺☺</ng-template>\n\n	  </ion-card-content>\n\n	</ion-card>\n\n</ion-content>\n\n\n\n	<ion-item-group *ngIf="type == \'dedos\'">\n\n		<ion-item-divider>{{\'INFO.MODES\' | translate}}</ion-item-divider>\n\n		<ion-item>\n\n			<ion-icon color="soft-blue" name="ios-thumbs-up-outline"></ion-icon>\n\n			<p item-end>{{\'INFO.AFFIRMATIVE_INFORMAL\' | translate}}</p>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-icon color="soft-blue" name="ios-thumbs-down-outline"></ion-icon>\n\n			<p item-end>{{\'INFO.NEGATIVE_INFORMAL\' | translate}}</p>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-icon color="soft-blue" name="ios-thumbs-up"></ion-icon>\n\n			<p item-end>{{\'INFO.AFFIRMATIVE_FORMAL\' | translate}}</p>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-icon color="soft-blue" name="ios-thumbs-down"></ion-icon>\n\n			<p item-end>{{\'INFO.NEGATIVE_FORMAL\' | translate}}</p>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-toggle item-start checked="true" disabled color="info"></ion-toggle> \n\n			<p item-end>{{\'VERBS_MENU.REFLEX_PRONOUN\' | translate}}</p>\n\n		</ion-item>\n\n	</ion-item-group>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\JM\hispanicusapp\src\pages\info\info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_verbos_verbos__["a" /* VerbosProvider */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ })

});
//# sourceMappingURL=3.js.map