webpackJsonp([5],{

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["HttpLoaderFactory"] = HttpLoaderFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictsPageModule", function() { return DictsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dicts__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_verbos_verbos__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_smart_audio_smart_audio__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_audio__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









function HttpLoaderFactory(httpClient) {
    return new __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](httpClient, "./assets/i18n/", ".json");
}
var DictsPageModule = (function () {
    function DictsPageModule() {
    }
    DictsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dicts__["a" /* DictsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dicts__["a" /* DictsPage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClient */]]
                    }
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_verbos_verbos__["a" /* VerbosProvider */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_7__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */]]
        })
    ], DictsPageModule);
    return DictsPageModule;
}());

//# sourceMappingURL=dicts.module.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DictsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modals_diccionario_diccionario__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_verbos_verbos__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_smart_audio_smart_audio__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config_config__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DictsPage = (function () {
    function DictsPage(smartAudio, configProvider, loadingCtrl, navCtrl, navParams, modalCtrl, vp) {
        this.smartAudio = smartAudio;
        this.configProvider = configProvider;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.vp = vp;
        this.myInput = '';
        smartAudio.preload('tapped', 'assets/audio/waterdroplet.mp3');
        smartAudio.preload('fav', 'assets/audio/fav.mp3');
    }
    DictsPage.prototype.onInput = function (e) {
        if (e.target.value && e.target.value != '') {
            this.sortedItems = this.getMatches(e.target.value);
        }
    };
    DictsPage.prototype.getMatches = function (val) {
        var ar = [];
        for (var _i = 0, _a = this.unsorted; _i < _a.length; _i++) {
            var item = _a[_i];
            if (this.contain(item["infinitivo"], val) || this.contain(item["def"], val)) {
                ar.push(item);
            }
        }
        return ar;
    };
    DictsPage.prototype.ionViewDidLoad = function () {
        this.initializeItems();
    };
    DictsPage.prototype.initializeItems = function () {
        var _this = this;
        var loader = this.presentLoading();
        loader.present();
        this.vp.listVerbs(0).subscribe(function (data) {
            _this.keys = Object.keys(data);
            _this.verbs = data;
        }, function (error) {
            console.log(error);
            loader.dismiss();
        }, function () {
            loader.dismiss();
            _this.unsorted = [];
            for (var i in _this.verbs) {
                for (var j in _this.verbs[i]) {
                    _this.unsorted.push(_this.verbs[i][j]);
                }
            }
        });
    };
    DictsPage.prototype.getKeys = function (o) {
        return Object.keys(o);
    };
    DictsPage.prototype.selectVerbo = function (xverbo) {
        this.smartAudio.play('tapped');
        this.navCtrl.push('VerboRegularPage', { verbo: xverbo });
    };
    DictsPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            spinner: 'crescent',
            showBackdrop: false
        });
        return loader;
    };
    DictsPage.prototype.openModal = function (data) {
        var _this = this;
        this.smartAudio.play('tapped');
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modals_diccionario_diccionario__["a" /* DiccionarioPage */], { data: this.keys });
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.goTo(data);
            }
        });
        modal.present();
    };
    DictsPage.prototype.type = function (l) {
        this.smartAudio.play('tapped');
        this.myInput += l;
        this.setFocus();
    };
    DictsPage.prototype.setFocus = function () {
        var search = document.getElementsByClassName('searchbar-input');
        search[0].setAttribute('id', "searchbar");
        document.getElementById('searchbar').focus();
    };
    DictsPage.prototype.delete = function () {
        if (this.myInput == '') {
            return;
        }
        this.myInput = this.myInput.slice(0, -1);
        this.setFocus();
    };
    DictsPage.prototype.goTo = function (value) {
        this.smartAudio.play('tapped');
        var val = value.toString();
        var el = document.getElementById(val.toLowerCase());
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        else {
            return;
        }
    };
    DictsPage.prototype.contain = function (s, m) {
        return (s.indexOf(m) >= 0);
    };
    DictsPage.prototype.isFav = function (item) {
        var f = JSON.parse(localStorage.getItem('favs'));
        if (this.myInclude(f, item)) {
            return true;
        }
        else {
            return false;
        }
    };
    DictsPage.prototype.addFav = function (item) {
        var f = JSON.parse(localStorage.getItem('favs'));
        this.smartAudio.play('fav');
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
    DictsPage.prototype.myInclude = function (a, v) {
        for (var i in a) {
            if (a[i] == v) {
                return true;
            }
        }
        return false;
    };
    DictsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dicts',template:/*ion-inline-start:"C:\Users\JM\hispanicusapp\src\pages\dicts\dicts.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{\'HOME.MENU.DICT\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n<ion-searchbar\n\n  mode="ios"\n\n  [(ngModel)]="myInput"\n\n  (ionInput)="onInput($event)"\n\n  animated="true"\n\n  debounce=200\n\n  placeholder="{{\'GENERAL.SEARCH\' | translate}}"\n\n  type="text"\n\n  id="search"\n\n  >\n\n</ion-searchbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div *ngIf="!myInput || myInput == \'\'; else normalList">\n\n  	<ion-list *ngFor="let i of keys">\n\n      <ion-item-divider color="light" (tap)="openModal()" id="{{i}}"><b>{{i}}</b></ion-item-divider>\n\n      <ion-item *ngFor="let it of verbs[i]">\n\n      	<h2 (click)="selectVerbo(it)"><b>{{it.infinitivo}}</b></h2>\n\n        <p style="color:gray;" (click)="selectVerbo(it)" >{{it.def}}</p>\n\n        <button ion-fab mini color="light" [ngClass]="{\'shine\': isFav(it.id)}" item-end (click)="addFav(it.id)">\n\n          <ion-icon name="star-outline"></ion-icon>\n\n        </button>        \n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n\n\n  <ng-template #normalList>\n\n    <ion-list>\n\n      <ion-item *ngFor="let item of sortedItems">\n\n        <h2 (click)="selectVerbo(item)"><b>{{item.infinitivo}}</b></h2>\n\n        <p style="color:gray;" (click)="selectVerbo(item)" >{{item.def}}</p>\n\n        <button ion-fab mini color="light" [ngClass]="{\'shine\': isFav(item.id)}" item-end (click)="addFav(item.id)">\n\n          <ion-icon name="star-outline"></ion-icon>\n\n        </button>                  \n\n      </ion-item>\n\n    </ion-list>\n\n  </ng-template>\n\n</ion-content>\n\n\n\n<ion-footer no-border>\n\n  <ion-toolbar block>\n\n    <ion-buttons align="center">\n\n      <button ion-button class="extrakeys" mode="ios" (click)="type(\'í\')"><b>í</b></button>\n\n      <button ion-button class="extrakeys" mode="ios" (click)="type(\'ñ\')"><b>ñ</b></button>\n\n      <button ion-button class="extrakeys" mode="ios" (click)="delete()"><b><ion-icon mode="md" name="arrow-back"></ion-icon></b></button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\JM\hispanicusapp\src\pages\dicts\dicts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_verbos_verbos__["a" /* VerbosProvider */]])
    ], DictsPage);
    return DictsPage;
}());

//# sourceMappingURL=dicts.js.map

/***/ })

});
//# sourceMappingURL=5.js.map