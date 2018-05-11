webpackJsonp([4],{

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["HttpLoaderFactory"] = HttpLoaderFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPageModule", function() { return FavoritesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorites__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_verbos_verbos__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_smart_audio_smart_audio__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_audio__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










function HttpLoaderFactory(httpClient) {
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](httpClient, "./assets/i18n/", ".json");
}
var FavoritesPageModule = (function () {
    function FavoritesPageModule() {
    }
    FavoritesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__favorites__["a" /* FavoritesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__favorites__["a" /* FavoritesPage */]),
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forChild({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClient */]]
                    }
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_verbos_verbos__["a" /* VerbosProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_8__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */]]
        })
    ], FavoritesPageModule);
    return FavoritesPageModule;
}());

//# sourceMappingURL=favorites.module.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_verbos_verbos__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_smart_audio_smart_audio__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FavoritesPage = (function () {
    function FavoritesPage(loadingCtrl, smartAudio, navCtrl, navParams, verbosProvider, configProvider) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.smartAudio = smartAudio;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.verbosProvider = verbosProvider;
        this.configProvider = configProvider;
        var load = this.presentLoading();
        load.present();
        this.verbosProvider.getFavs().subscribe(function (res) {
            _this.verbs = res;
            load.dismiss();
        }, function (error) {
            load.dismiss();
        });
        smartAudio.preload('tapped', 'assets/audio/waterdroplet.mp3');
        smartAudio.preload('fav', 'assets/audio/fav.mp3');
    }
    FavoritesPage.prototype.selectVerbo = function (xverbo) {
        this.smartAudio.play('tapped');
        this.navCtrl.push('VerboRegularPage', { verbo: xverbo });
    };
    FavoritesPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            spinner: 'crescent',
            showBackdrop: false
        });
        return loader;
    };
    FavoritesPage.prototype.isFav = function (item) {
        var f = JSON.parse(localStorage.getItem('favs'));
        if (this.myInclude(f, item)) {
            return true;
        }
        else {
            return false;
        }
    };
    FavoritesPage.prototype.addFav = function (item) {
        this.smartAudio.play('fav');
        var f = JSON.parse(localStorage.getItem('favs'));
        if (this.myInclude(f, item)) {
            var i = f.indexOf(item);
            f.splice(i, 1);
        }
        else {
            f.push(item);
        }
        localStorage.setItem('favs', JSON.stringify(f));
        this.configProvider.setFavs(f).subscribe(function (res) {
            console.log(res);
        });
    };
    FavoritesPage.prototype.myInclude = function (a, v) {
        for (var i in a) {
            if (a[i] == v) {
                return true;
            }
        }
        return false;
    };
    FavoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorites',template:/*ion-inline-start:"C:\Users\JM\Documents\hispanicusapp\src\pages\favorites\favorites.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{\'HOME.MENU.FAVS\' | translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content block>\n	<ion-list>\n    <ion-item *ngFor="let verb of verbs">\n    	<h2 (click)="selectVerbo(verb)"><b>{{verb.infinitivo}}</b></h2>\n      <p style="color:gray;" (click)="selectVerbo(verb)" >{{verb.def}}</p>\n      <button ion-fab mini color="light" [ngClass]="{\'shine\': isFav(verb.id)}" item-end (click)="addFav(verb.id)">\n        <ion-icon name="star-outline"></ion-icon>\n      </button>  \n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\JM\Documents\hispanicusapp\src\pages\favorites\favorites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_verbos_verbos__["a" /* VerbosProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], FavoritesPage);
    return FavoritesPage;
}());

//# sourceMappingURL=favorites.js.map

/***/ })

});
//# sourceMappingURL=4.js.map