webpackJsonp([6],{

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["HttpLoaderFactory"] = HttpLoaderFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_smart_audio_smart_audio__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_audio__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









function HttpLoaderFactory(httpClient) {
    return new __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](httpClient, "./assets/i18n/", ".json");
}
var ContactPageModule = (function () {
    function ContactPageModule() {
    }
    ContactPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */]]
                    }
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_6__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__["a" /* AuthProvider */]]
        })
    ], ContactPageModule);
    return ContactPageModule;
}());

//# sourceMappingURL=contact.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactPage = (function () {
    function ContactPage(loadCtrl, translate, toastCtrl, authProvider, navCtrl, navParams) {
        this.loadCtrl = loadCtrl;
        this.translate = translate;
        this.toastCtrl = toastCtrl;
        this.authProvider = authProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactPage.prototype.sendMessage = function () {
        var _this = this;
        if (this.msg.length > 10) {
            var load_1 = this.presentLoading();
            load_1.present();
            this.authProvider.sendMessage(this.msg)
                .subscribe(function (res) {
                _this.msg = "";
                _this.presentToast();
                _this.navCtrl.pop();
                load_1.dismiss();
            }, function (error) {
                load_1.dismiss();
                console.log(error);
            });
        }
    };
    ContactPage.prototype.presentLoading = function () {
        var msg = "";
        this.translate.get('HOME.CONTACT').subscribe(function (res) {
            msg = res.SENDING;
        }, function (error) {
            msg = "Enviando";
        });
        var loader = this.loadCtrl.create({
            spinner: 'crescent',
            content: msg,
            showBackdrop: false
        });
        return loader;
    };
    ContactPage.prototype.presentToast = function () {
        var msg = "";
        this.translate.get('HOME.CONTACT').subscribe(function (res) {
            msg = res.SENT;
        }, function (error) {
            msg = "Su mensaje ha sido enviado";
        });
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\JM\Documents\hispanicusapp\src\pages\contact\contact.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{\'HOME.MENU.CONTACT\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<ion-label stacked>{{\'HOME.CONTACT.MESSAGE\' | translate}}</ion-label>\n\n	<ion-textarea [(ngModel)]="msg" rows="4" autofocus style="background-color:rgba(255,255,255,0.4);"></ion-textarea>\n\n\n\n	<br>\n\n\n\n  <button class="grdnt" ion-button tappable icon-start block (click)="sendMessage()">\n\n    <ion-icon name="send" mode="ios"></ion-icon>\n\n    {{\'HOME.CONTACT.SEND\' | translate}}\n\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\JM\Documents\hispanicusapp\src\pages\contact\contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ })

});
//# sourceMappingURL=6.js.map