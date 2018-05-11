webpackJsonp([0],{

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["HttpLoaderFactory"] = HttpLoaderFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPageModule", function() { return FavoritesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verbo_regular__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_verbos_verbos__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_smart_audio_smart_audio__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_audio__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//import { ScreenOrientation } from '@ionic-native/screen-orientation';
function HttpLoaderFactory(httpClient) {
    return new __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](httpClient, "./assets/i18n/", ".json");
}
var FavoritesPageModule = (function () {
    function FavoritesPageModule() {
    }
    FavoritesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__verbo_regular__["a" /* VerboRegularPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__verbo_regular__["a" /* VerboRegularPage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClient */]]
                    }
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_verbos_verbos__["a" /* VerbosProvider */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_7__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */]] //ScreenOrientation
        })
    ], FavoritesPageModule);
    return FavoritesPageModule;
}());

//# sourceMappingURL=verbo-regular.module.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerboRegularPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_verbos_verbos__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(26);
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








//import { ScreenOrientation } from '@ionic-native/screen-orientation';
var VerboRegularPage = (function () {
    function VerboRegularPage(/*private screenOrientation: ScreenOrientation, */ smartAudio, plt, translateServ, alertCtrl, loadingCtrl, navCtrl, navParams, vp) {
        var _this = this;
        this.smartAudio = smartAudio;
        this.plt = plt;
        this.translateServ = translateServ;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vp = vp;
        this.informal = true;
        this.afirmativo = true;
        this.hsitem = false;
        this.forma = 'Afirmativo informal';
        this.formaVerbal = 'todos';
        this.tenses = false;
        this.verbo = navParams.get('verbo');
        this.tenseMsgs = [];
        this.translateServ.get('VERBS_MENU').subscribe(function (verb) {
            _this.tenseMsgs = [verb.SIMPLE_TENSES, verb.COMPOUND_TENSES];
            _this.tense = verb.SIMPLE_TENSES;
        });
        smartAudio.preload('tapped', 'assets/audio/waterdroplet.mp3');
    }
    /*
      ionViewWillLeave(){
        if (this.plt.is('cordova')) {
          this.screenOrientation.unlock();
        }
      }
    */
    VerboRegularPage.prototype.setVerbalTime = function () {
        var _this = this;
        this.smartAudio.play('tapped');
        switch (this.formaVerbal) {
            case "fnp":
                document.getElementById("F.N.P.")['hidden'] = false;
                document.getElementById("indicativo")['hidden'] = true;
                document.getElementById("subjuntivo")['hidden'] = true;
                document.getElementById("imperativo")['hidden'] = true;
                break;
            case "indicativo":
                document.getElementById("F.N.P.")['hidden'] = true;
                document.getElementById("indicativo")['hidden'] = false;
                document.getElementById("subjuntivo")['hidden'] = true;
                document.getElementById("imperativo")['hidden'] = true;
                break;
            case "subjuntivo":
                document.getElementById("F.N.P.")['hidden'] = true;
                document.getElementById("indicativo")['hidden'] = true;
                document.getElementById("subjuntivo")['hidden'] = false;
                document.getElementById("imperativo")['hidden'] = true;
                break;
            case "imperativo":
                document.getElementById("F.N.P.")['hidden'] = true;
                document.getElementById("indicativo")['hidden'] = true;
                document.getElementById("subjuntivo")['hidden'] = true;
                document.getElementById("imperativo")['hidden'] = false;
                break;
            default:
                document.getElementById("F.N.P.")['hidden'] = false;
                document.getElementById("indicativo")['hidden'] = false;
                document.getElementById("subjuntivo")['hidden'] = false;
                document.getElementById("imperativo")['hidden'] = false;
                break;
        }
        setTimeout(function () {
            _this.hideEmpty();
            _this.showNotEmpty();
        }, 1);
    };
    VerboRegularPage.prototype.myInclude = function (a, v) {
        if (a == undefined) {
            return;
        }
        if (a[0] == '*') {
            return true;
        }
        for (var i in a) {
            if (a[i] == v) {
                return true;
            }
        }
        return false;
    };
    VerboRegularPage.prototype.goTuto = function (xverbo) {
        this.navCtrl.push('TutorialPage', { verbo: xverbo });
    };
    VerboRegularPage.prototype.setTense = function () {
        var _this = this;
        if (this.tenses) {
            this.tense = this.tenseMsgs[1];
            if (this.forma == 'Afirmativo informal') {
                this.forma = 'Afirmativo reflexivo informal';
            }
            else if (this.forma == 'Afirmativo formal') {
                this.forma = 'Afirmativo reflexivo formal';
            }
            else if (this.forma == 'Negativo informal') {
                this.forma = 'Negativo reflexivo informal';
            }
            else if (this.forma == 'Negativo formal') {
                this.forma = 'Negativo reflexivo formal';
            }
        }
        else {
            this.tense = this.tenseMsgs[0];
            if (this.forma == 'Afirmativo reflexivo informal') {
                this.forma = 'Afirmativo informal';
            }
            else if (this.forma == 'Negativo reflexivo informal') {
                this.forma = 'Negativo informal';
            }
            else if (this.forma == 'Afirmativo reflexivo formal') {
                this.forma = 'Afirmativo formal';
            }
            else if (this.forma == 'Negativo reflexivo formal') {
                this.forma = 'Negativo formal';
            }
        }
        setTimeout(function () {
            _this.hideEmpty();
            _this.showNotEmpty();
        }, 1);
    };
    VerboRegularPage.prototype.ionViewDidLoad = function () {
        this.initData();
    };
    VerboRegularPage.prototype.initData = function () {
        var _this = this;
        var loader = this.presentLoading();
        var alert = this.showAlert();
        loader.present();
        this.vp.getVerb(this.verbo.id)
            .subscribe(function (data) {
            _this.rules = data["reglas"];
            _this.verboData = data["data"];
            console.log(_this.verboData);
            _this.verboKeys = Object.keys(_this.verboData);
            loader.dismiss();
        }, function (error) {
            loader.dismiss();
            alert.present();
        }, function () {
            setTimeout(function () {
                _this.hideEmpty();
            }, 1);
        });
    };
    VerboRegularPage.prototype.getKeys = function (o) {
        return Object.keys(o);
    };
    VerboRegularPage.prototype.showNotEmpty = function () {
        var items = document.getElementsByClassName('verbitem');
        for (var i = 0; i < items.length; i++) {
            var empty = true;
            for (var j = 0; j < items[i].children.length - 1; j++) {
                if (items[i].children[j].childElementCount > 0) {
                    empty = false;
                    break;
                }
            }
            if (!empty) {
                items[i]['hidden'] = false;
            }
        }
    };
    VerboRegularPage.prototype.hideEmpty = function () {
        this.smartAudio.play('tapped');
        var items = document.getElementsByClassName('verbitem');
        for (var i = 0; i < items.length; i++) {
            var empty = false;
            for (var j = 0; j < items[i].children.length - 1; j++) {
                if (items[i].children[j].childElementCount > 0) {
                    empty = false;
                    break;
                }
                else {
                    empty = true;
                }
            }
            if (empty) {
                items[i]['hidden'] = true;
            }
        }
    };
    VerboRegularPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            spinner: 'crescent',
            showBackdrop: false
        });
        return loader;
    };
    VerboRegularPage.prototype.showAlert = function () {
        var _this = this;
        var errorTitle;
        var errorSubt;
        var errorTryAgain;
        var exit;
        this.translateServ.get('ERROR').subscribe(function (error) {
            errorTitle = error.TITLE;
            errorSubt = error.SUBTITLE;
            errorTryAgain = error.TRY_AGAIN;
        });
        this.translateServ.get('GENERAL').subscribe(function (general) {
            exit = general.EXIT;
        });
        var alert = this.alertCtrl.create({
            title: errorTitle,
            subTitle: errorSubt,
            buttons: [{
                    text: errorTryAgain,
                    handler: function () {
                        _this.initData();
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
    VerboRegularPage.prototype.goTop = function () {
        var el = document.getElementById('tense');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        else {
            return;
        }
    };
    VerboRegularPage.prototype.informalNeg = function () {
        var _this = this;
        this.informal = true;
        this.afirmativo = false;
        if (!this.tenses) {
            this.forma = 'Negativo informal';
        }
        else {
            this.forma = 'Negativo reflexivo informal';
        }
        setTimeout(function () {
            _this.hideEmpty();
            _this.showNotEmpty();
        }, 1);
    };
    VerboRegularPage.prototype.informalAfmt = function () {
        var _this = this;
        this.informal = true;
        this.afirmativo = true;
        if (!this.tenses) {
            this.forma = 'Afirmativo informal';
        }
        else {
            this.forma = 'Afirmativo reflexivo informal';
        }
        setTimeout(function () {
            _this.hideEmpty();
            _this.showNotEmpty();
        }, 1);
    };
    VerboRegularPage.prototype.capit = function (w) {
        return w[0].toUpperCase() + w.substring(1);
    };
    VerboRegularPage.prototype.formalAfmt = function () {
        var _this = this;
        this.informal = false;
        this.afirmativo = true;
        if (!this.tenses) {
            this.forma = 'Afirmativo formal';
        }
        else {
            this.forma = 'Afirmativo reflexivo formal';
        }
        setTimeout(function () {
            _this.hideEmpty();
            _this.showNotEmpty();
        }, 1);
    };
    VerboRegularPage.prototype.formalNeg = function () {
        var _this = this;
        this.informal = false;
        this.afirmativo = false;
        if (!this.tenses) {
            this.forma = 'Negativo formal';
        }
        else {
            this.forma = 'Negativo reflexivo formal';
        }
        setTimeout(function () {
            _this.hideEmpty();
            _this.showNotEmpty();
        }, 1);
    };
    VerboRegularPage.prototype.getGramatical = function (value) {
        switch (value) {
            case 1:
                if (localStorage.getItem("lang") == "en") {
                    return (value + "st");
                }
                return (value + "ª");
            case 2:
                if (localStorage.getItem("lang") == "en") {
                    return (value + "nd");
                }
                return (value + "ª");
            case 3:
                if (localStorage.getItem("lang") == "en") {
                    return (value + "rd");
                }
                return (value + "ª");
            default:
                return (value + "ª");
        }
    };
    VerboRegularPage.prototype.goInfo = function (t) {
        this.navCtrl.push('InfoPage', { type: t });
    };
    VerboRegularPage.prototype.goRule = function (rule, forma) {
        this.navCtrl.push('RulePage', { rules: rule, forma: forma });
    };
    VerboRegularPage.prototype.representar = function (v) {
        if (v != null) {
            console.log(v);
            return !(v.indexOf('*') >= 0);
        }
        return false;
    };
    VerboRegularPage.prototype.shouldShowRule = function (rules) {
        var r = false;
        for (var r_1 in rules) {
            if (rules[r_1].forma == this.forma) {
                return true;
            }
        }
        return r;
    };
    VerboRegularPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verbo-regular',template:/*ion-inline-start:"C:\Users\JM\Documents\hispanicusapp\src\pages\verbo-regular\verbo-regular.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{verbo.infinitivo}}<span *ngIf="tenses">se</span></ion-title>\n\n    <ion-buttons right>\n\n      <button tappable ion-button icon-only (click)="goTuto(verbo)"><ion-icon name="alert" color="info"></ion-icon></button>\n\n    </ion-buttons>    \n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content block>\n\n\n\n<ion-item id="tense">\n\n  <ion-label>{{\'VERBS_MENU.REFLEX_PRONOUN\' | translate}}</ion-label>\n\n  <ion-toggle checked="true" [(ngModel)]="tenses" (ionChange)="setTense()" color="info"></ion-toggle>  \n\n</ion-item>\n\n\n\n<div block>\n\n  <ion-segment [(ngModel)]="formaVerbal" mode="ios" color="danger" (ionChange)="setVerbalTime()">\n\n    <ion-segment-button tappable value="indicativo">\n\n      Indicativo\n\n    </ion-segment-button>\n\n    <ion-segment-button tappable value="subjuntivo">\n\n      Subjuntivo\n\n    </ion-segment-button>\n\n    <ion-segment-button tappable value="imperativo">\n\n      Imperativo\n\n    </ion-segment-button>\n\n    <ion-segment-button tappable value="fnp">\n\n      F.N.P.\n\n    </ion-segment-button>\n\n    <ion-segment-button tappable value="todos">\n\n      {{\'VERBS_MENU.ALL\' | translate}}\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n</div>\n\n\n\n  <ion-item-group *ngFor="let key of verboKeys;  let idx = index " id="{{key}}">\n\n    <ion-item-divider class="fdivider" color="primary">\n\n      <b>{{capit(key)}}</b> \n\n      <ion-icon name="alert" item-end (click)="goInfo(1)" color="info"></ion-icon>\n\n    </ion-item-divider>\n\n    <div *ngFor="let t of getKeys(verboData[key])">\n\n    \n\n    <ion-item-divider *ngIf="idx < 2" color="primary">\n\n      <b style="color:#ff592b;">{{capit(t)}}</b> \n\n      <ion-icon name="alert" item-end (click)="goTuto(verbo)" color="info"></ion-icon>\n\n    </ion-item-divider>\n\n\n\n    <div *ngFor="let f of getKeys(verboData[key][t]); let ff = first " class="verbitem {{key}}">\n\n    \n\n    <ion-item-divider color="primary">\n\n      <b>{{capit(f)}}</b>\n\n      <ion-icon name="school" item-end *ngIf="myInclude(getKeys(rules), capit(f)) && shouldShowRule(rules[capit(f)])" (click)="goRule(rules[capit(f)], forma)" color="info"></ion-icon>\n\n      <ion-icon name="alert" item-end (click)="goTuto(verbo)" color="info"></ion-icon>\n\n    </ion-item-divider>\n\n    <div *ngFor="let item of verboData[key][t][f]; let first = first ">\n\n    \n\n    <ion-item *ngIf="first && item.raiz && first!=last" no-padding >\n\n      <ion-row no-margin>\n\n\n\n        <ion-col col-3 align="left">\n\n          <ion-icon (click)="goInfo(\'p_informal\')" tappable name="alert" color="info" *ngIf="item.pronombre && capit(key) != \'Imperativo\' || representar(item.pronombre)"></ion-icon>\n\n          <ion-icon (click)="goInfo(\'p_formal\')" tappable name="alert" color="info" *ngIf="item.pronombre_formal_id && capit(key) != \'Imperativo\' || representar(item.pronombre_formal_id)"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-1 align="left">\n\n          <ion-icon (click)="goInfo(\'negacion\')" tappable name="alert" color="info" *ngIf="!afirmativo"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-1>\n\n          <ion-icon (click)="goInfo(\'reflex\')" tappable name="alert" color="info" *ngIf="tenses"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-2 align="left">\n\n          <ion-icon (click)="goInfo(\'auxiliar\')" tappable name="alert" color="info" *ngIf="item.verbo_auxiliar"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-4 align="right">\n\n          <ion-icon *ngIf="item.raiz != \'nulo\'" (click)="goInfo(\'raiz\')" class="mover" tappable name="alert" color="info"></ion-icon>\n\n          <ion-icon (click)="goInfo(\'desinencia\')" tappable name="alert" color="info"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-1 align="right">\n\n          <ion-icon (click)="goInfo(\'p_gramatical\')" tappable name="alert" color="info" *ngIf="item.pg"></ion-icon>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n  \n\n    <ion-item *ngIf="(item.forma_verbal == forma)" no-padding>\n\n      <ion-row>\n\n        <ion-col col-3 align="left">\n\n          <div *ngIf="representar(item.pronombre)"><span *ngIf="capit(key) != \'Imperativo\'" [innerHTML]="item.pronombre"></span></div> \n\n          <div *ngIf="representar(item.pronombre_formal_id)"><span *ngIf="capit(key) != \'Imperativo\'" [innerHTML]="item.pronombre_formal_id"></span></div>\n\n        </ion-col>\n\n        <ion-col col-1 ><span *ngIf="item.negativo != \'0\'">no</span></ion-col>\n\n        <ion-col col-1 ><span [innerHTML]="item.pronombre_reflex"></span></ion-col>\n\n        <ion-col col-2 align="left"><span [innerHTML]="item.verbo_auxiliar"></span></ion-col>\n\n\n\n        <ion-col col-4 align="right"><span [innerHTML]="item.raiz" *ngIf="item.raiz != item.desinencia"></span><span class="desinencia" *ngIf="item.desinencia" [innerHTML]="item.desinencia"></span></ion-col>\n\n\n\n        <ion-col col-1 align="right">\n\n          <span *ngIf="!item.plural && item.pg" class="pgramatical2">{{getGramatical(item.pg)}}</span>\n\n          <span *ngIf="item.plural && item.pg" class="pgramatical">{{getGramatical(item.pg)}}</span>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n    </div>\n\n  </div>\n\n\n\n  </div>\n\n  </ion-item-group>	\n\n\n\n</ion-content>\n\n<ion-footer no-border>\n\n  <ion-toolbar  block>\n\n    <ion-segment color="light" mode="md">\n\n      <ion-segment-button tappable value="" (ionSelect)="informalAfmt()">\n\n        <ion-icon name="ios-thumbs-up-outline"></ion-icon>\n\n      </ion-segment-button>\n\n      <ion-segment-button tappable value="" (ionSelect)="informalNeg()">\n\n        <ion-icon name="ios-thumbs-down-outline"></ion-icon>\n\n      </ion-segment-button>\n\n      <ion-segment-button tappable value="" (ionSelect)="formalAfmt()">\n\n        <ion-icon name="ios-thumbs-up"></ion-icon>\n\n      </ion-segment-button>\n\n      <ion-segment-button tappable value="" (ionSelect)="formalNeg()">\n\n        <ion-icon name="ios-thumbs-down"></ion-icon>\n\n      </ion-segment-button>\n\n    <ion-segment-button tappable value="">\n\n      <ion-icon (click)="goInfo(\'dedos\')" color="info" name="alert"></ion-icon>\n\n    </ion-segment-button>    \n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\JM\Documents\hispanicusapp\src\pages\verbo-regular\verbo-regular.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_verbos_verbos__["a" /* VerbosProvider */]])
    ], VerboRegularPage);
    return VerboRegularPage;
}());

//# sourceMappingURL=verbo-regular.js.map

/***/ })

});
//# sourceMappingURL=0.js.map