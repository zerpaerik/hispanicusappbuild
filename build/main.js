webpackJsonp([5],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_verbo_menu_verbo__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_config_config__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_smart_audio_smart_audio__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(smartAudio, navCtrl, modalCtrl, plt) {
        this.smartAudio = smartAudio;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.plt = plt;
    }
    HomePage.prototype.ionViewCanEnter = function () {
        if (!localStorage.getItem('token')) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        }
        return true;
    };
    HomePage.prototype.goFavs = function () {
        this.smartAudio.play('tapped');
        this.navCtrl.push('FavoritesPage');
    };
    HomePage.prototype.goDict = function () {
        this.smartAudio.play('tapped');
        this.navCtrl.push('DictsPage');
    };
    HomePage.prototype.next = function () {
        this.smartAudio.play('tapped');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__menu_verbo_menu_verbo__["a" /* MenuVerboPage */]);
    };
    HomePage.prototype.exit = function () {
        this.plt.exitApp();
    };
    HomePage.prototype.openModal = function () {
        this.smartAudio.play('tapped');
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modals_config_config__["a" /* ConfigPage */]);
        modal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\JM\Documents\hispanicusapp\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title translate>{{\'HOME.MENU.TITLE\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  \n\n  <ion-fab top right edge (click)="openModal()">\n\n    <button ion-fab class="grdnt"><ion-icon name="settings" ></ion-icon></button>\n\n  </ion-fab>\n\n  \n\n  <br><br>\n\n\n\n<div class="titleicon">\n\n   <img src="assets/imgs/logo.png" width="250px" height="220px" />\n\n</div>\n\n  \n\n  \n\n  <button class="grdnt" ion-button icon-start block (tap)="next()" translate>\n\n    <ion-icon name="create"></ion-icon>\n\n    {{\'HOME.MENU.COMBINE_BUTTON\' | translate}}\n\n  </button>\n\n\n\n  <button class="grdnt" ion-button icon-start block (tap)="goDict()" translate>\n\n    <ion-icon name="bookmarks"></ion-icon>\n\n    {{\'HOME.MENU.DICT\' | translate}}\n\n  </button>  \n\n\n\n  <button class="grdnt" ion-button icon-start block (tap)="goFavs()" translate>\n\n    <ion-icon name="star"></ion-icon>\n\n    {{\'HOME.MENU.FAVS\' | translate}}\n\n  </button>  \n\n  \n\n  <br>\n\n\n\n  <button class="grdnt" ion-button icon-start block (tap)="exit()" translate>\n\n    <ion-icon name="exit"></ion-icon>\n\n    {{\'GENERAL.EXIT\' | translate}}\n\n  </button>  \n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\JM\Documents\hispanicusapp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerbosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VerbosProvider = (function () {
    function VerbosProvider(http) {
        this.http = http;
    }
    VerbosProvider.prototype.getFavs = function () {
        return this.http.get('http://localhost:8000/api/v1/favoritos', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Accept': 'application/json'
            }
        });
    };
    VerbosProvider.prototype.getTuto = function (id) {
        return this.http.get('http://localhost:8000/api/v1/tutorial/' + id, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Accept': 'application/json'
            }
        });
    };
    VerbosProvider.prototype.listVerbs = function (tipo) {
        return this.http.get('http://localhost:8000/api/v1/verbos/' + tipo);
    };
    VerbosProvider.prototype.getVerb = function (id) {
        var reg = localStorage.getItem('region') || JSON.stringify([0, 2, 4]);
        var m = localStorage.getItem('rmode') || 1;
        var l = localStorage.getItem('lang') || "es";
        return this.http.post('http://localhost:8000/api/v1/verbo/' + id, { region: reg, lang: l, modo: m }, {
            headers: { 'Accept': 'appliacation/json' }
        });
    };
    VerbosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], VerbosProvider);
    return VerbosProvider;
}());

//# sourceMappingURL=verbos.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiccionarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DiccionarioPage = (function () {
    function DiccionarioPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.letras = this.navParams.get('data');
        console.log(this.letras);
    }
    DiccionarioPage.prototype.close = function (e) {
        var callbackData = (e.target.innerText != 'Volver') ? e.target.innerText : false;
        this.viewCtrl.dismiss(callbackData);
    };
    DiccionarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-diccionario',template:/*ion-inline-start:"C:\Users\JM\Documents\hispanicusapp\src\modals\diccionario\diccionario.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button icon-left color="primary" clear small (click)="close($event)">\n\n        <ion-icon name="cancel"></ion-icon>\n\n        <div>{{\'GENERAL.BACK\' | translate}}</div>\n\n      </button>  	\n\n    <ion-title>Diccionario</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<ion-grid>\n\n	  <ion-row>\n\n	    <ion-col col-2 *ngFor="let l of letras">\n\n	    	<button (click)="close($event)" ion-button block><b>{{l}}</b></button>\n\n	    </ion-col>\n\n	  </ion-row>\n\n	</ion-grid>	\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\JM\Documents\hispanicusapp\src\modals\diccionario\diccionario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], DiccionarioPage);
    return DiccionarioPage;
}());

//# sourceMappingURL=diccionario.js.map

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/dicts/dicts.module": [
		300,
		4
	],
	"../pages/favorites/favorites.module": [
		301,
		3
	],
	"../pages/info/info.module": [
		302,
		2
	],
	"../pages/tutorial/tutorial.module": [
		303,
		1
	],
	"../pages/verbo-regular/verbo-regular.module": [
		304,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 168;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuVerboPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_verbos_list_verbos__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_smart_audio_smart_audio__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuVerboPage = (function () {
    function MenuVerboPage(translate, smartAudio, navCtrl, navParams) {
        var _this = this;
        this.translate = translate;
        this.smartAudio = smartAudio;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate.get('VERBS_MENU').subscribe(function (res) {
            _this.spelling = res.ORTH_CHANGE;
        });
    }
    MenuVerboPage.prototype.next = function (t) {
        this.smartAudio.play('tapped');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__list_verbos_list_verbos__["a" /* ListVerbosPage */], { type: t });
    };
    MenuVerboPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu-verbo',template:/*ion-inline-start:"C:\Users\JM\Documents\hispanicusapp\src\pages\menu-verbo\menu-verbo.html"*/'<!--\n\n  Generated template for the MenuVerboPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{\'VERBS_MENU.TITLE\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<ion-card>\n\n  <ion-card-header>\n\n    <h2 class="header-title" align=center>{{\'VERBS_MENU.REGULAR\' | translate}}</h2>\n\n  </ion-card-header>\n\n  <ion-card-content>\n\n  </ion-card-content>\n\n\n\n  <ion-row class="rows grdnt">\n\n    <ion-col>\n\n      <button ion-button icon-left color="light" clear small (tap)="next(1)">\n\n        <ion-icon name="paper"></ion-icon>\n\n        <div class="foot-text">{{\'VERBS_MENU.START\' | translate}}</div>\n\n      </button>\n\n    </ion-col>\n\n    <ion-col center text-center>\n\n      <button ion-button icon-left color="info" clear small>\n\n        <ion-icon name="alert" style="font-size: 25px;"></ion-icon>\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-card>\n\n\n\n<ion-card>\n\n  <ion-card-header>\n\n    <h2 class="header-title" align=center [innerHTML]="spelling"></h2>\n\n  </ion-card-header>\n\n  <ion-card-content>\n\n  </ion-card-content>\n\n\n\n  <ion-row class="rows grdnt">\n\n    <ion-col>\n\n      <button ion-button icon-left color="light" clear small (tap)="next(2)">\n\n        <ion-icon name="paper"></ion-icon>\n\n        <div class="foot-text">{{\'VERBS_MENU.START\' | translate}}</div>\n\n      </button>\n\n    </ion-col>\n\n    <ion-col center text-center>\n\n      <button ion-button icon-left color="info" clear small>\n\n        <ion-icon name="alert" style="font-size: 25px;"></ion-icon>\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-card>\n\n\n\n<ion-card>\n\n  <ion-card-header>\n\n    <h2 class="header-title" align="center">{{\'VERBS_MENU.IRREGULAR\' | translate}}</h2>\n\n  </ion-card-header>\n\n  <ion-card-content>\n\n  </ion-card-content>\n\n\n\n  <ion-row class="rows grdnt">\n\n    <ion-col>\n\n      <button ion-button icon-left color="light" clear small (tap)="next(3)">\n\n        <ion-icon name="paper"></ion-icon>\n\n        <div class="foot-text">{{\'VERBS_MENU.START\' | translate}}</div>\n\n      </button>\n\n    </ion-col>\n\n    <ion-col center text-center>\n\n      <button ion-button icon-left color="info" clear small>\n\n        <ion-icon name="alert" style="font-size: 25px;"></ion-icon>\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-card>  \n\n\n\n<ion-card>\n\n  <ion-card-header>\n\n    <h2 class="header-title" align="center">{{\'VERBS_MENU.ALL\' | translate}}</h2>\n\n  </ion-card-header>\n\n  <ion-card-content>\n\n  </ion-card-content>\n\n\n\n  <ion-row class="rows grdnt">\n\n    <ion-col>\n\n      <button ion-button icon-left color="light" clear small block (tap)="next(0)">\n\n        <ion-icon name="paper"></ion-icon>\n\n        <div class="foot-text">{{\'VERBS_MENU.START\' | translate}}</div>\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-card>  \n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\JM\Documents\hispanicusapp\src\pages\menu-verbo\menu-verbo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MenuVerboPage);
    return MenuVerboPage;
}());

//# sourceMappingURL=menu-verbo.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListVerbosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modals_diccionario_diccionario__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_verbos_verbos__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_smart_audio_smart_audio__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ListVerbosPage = (function () {
    function ListVerbosPage(plt, alertCtrl, translateServ, smartAudio, configProvider, loadingCtrl, navCtrl, navParams, modalCtrl, vp) {
        this.plt = plt;
        this.alertCtrl = alertCtrl;
        this.translateServ = translateServ;
        this.smartAudio = smartAudio;
        this.configProvider = configProvider;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.vp = vp;
        this.isLoading = false;
        this.myInput = '';
        this.items = [];
        this.types = navParams.get('type');
        this.initializeItems();
        switch (this.types) {
            case 1:
                this.title = "Regular";
                break;
            case 2:
                this.title = "Regular (cambio ortografico)";
                break;
            case 3:
                this.title = "Irregular";
                break;
            default:
                this.title = "Todos";
                break;
        }
    }
    ListVerbosPage.prototype.onInput = function (e) {
        if (e.target.value && e.target.value != '') {
            this.sortedItems = this.getMatches(e.target.value);
        }
    };
    ListVerbosPage.prototype.getMatches = function (val) {
        var ar = [];
        for (var _i = 0, _a = this.unsorted; _i < _a.length; _i++) {
            var item = _a[_i];
            if (this.contain(item["infinitivo"], val) || this.contain(item["def"], val)) {
                ar.push(item);
            }
        }
        return ar;
    };
    ListVerbosPage.prototype.contain = function (s, m) {
        return (s.indexOf(m) >= 0);
    };
    ListVerbosPage.prototype.isFav = function (item) {
        var f = JSON.parse(localStorage.getItem('favs'));
        if (this.myInclude(f, item)) {
            return true;
        }
        else {
            return false;
        }
    };
    ListVerbosPage.prototype.addFav = function (item) {
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
    ListVerbosPage.prototype.myInclude = function (a, v) {
        for (var i in a) {
            if (a[i] == v) {
                return true;
            }
        }
        return false;
    };
    ListVerbosPage.prototype.initializeItems = function () {
        var _this = this;
        var loader = this.presentLoading();
        loader.present();
        this.vp.listVerbs(this.types).subscribe(function (data) {
            _this.keys = Object.keys(data);
            _this.verbs = data;
            console.log(data);
        }, function (error) {
            _this.showAlert();
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
    ListVerbosPage.prototype.initItems = function (data) {
        for (var i in data) {
            for (var j in data[i]) {
                this.items.push(data[i][j]["infinitivo"]);
            }
        }
    };
    ListVerbosPage.prototype.selectVerbo = function (xverbo) {
        this.smartAudio.play('tapped');
        this.navCtrl.push('VerboRegularPage', { verbo: xverbo });
    };
    ListVerbosPage.prototype.openModal = function (data) {
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
    ListVerbosPage.prototype.goTo = function (value) {
        var val = value.toString();
        var el = document.getElementById(val.toLowerCase());
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        else {
            return;
        }
    };
    ListVerbosPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            spinner: 'crescent',
            showBackdrop: false
        });
        return loader;
    };
    ListVerbosPage.prototype.showAlert = function () {
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
    ListVerbosPage.prototype.type = function (l) {
        this.smartAudio.play('tapped');
        this.myInput += l;
        this.setFocus();
    };
    ListVerbosPage.prototype.setFocus = function () {
        var search = document.getElementsByClassName('searchbar-input');
        search[0].setAttribute('id', "searchbar");
        document.getElementById('searchbar').focus();
    };
    ListVerbosPage.prototype.delete = function () {
        if (this.myInput == '') {
            return;
        }
        this.myInput = this.myInput.slice(0, -1);
        this.setFocus();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], ListVerbosPage.prototype, "content", void 0);
    ListVerbosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-verbos',template:/*ion-inline-start:"C:\Users\JM\Documents\hispanicusapp\src\pages\list-verbos\list-verbos.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>    \n\n    <ion-buttons right>\n\n      <button ion-button icon-only><ion-icon name="book" ></ion-icon></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n<ion-searchbar\n\n  mode="ios"\n\n  [(ngModel)]="myInput"\n\n  (ionInput)="onInput($event)"\n\n  animated="true"\n\n  debounce=200\n\n  placeholder="{{\'GENERAL.SEARCH\' | translate}}"\n\n  type="text"\n\n  id="search"\n\n  >\n\n</ion-searchbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div *ngIf="!myInput || myInput == \'\'; else normalList">\n\n  	<ion-list *ngFor="let i of keys" >\n\n      <ion-item-divider color="light" (tap)="openModal()" id="{{i}}"><b>{{i}}</b></ion-item-divider>\n\n      <ion-item *ngFor="let it of verbs[i]">\n\n      	<h2 (click)="selectVerbo(it)"><b>{{it.infinitivo}}</b></h2>\n\n        <p style="color:gray;" (click)="selectVerbo(it)" >{{it.def}}</p>\n\n        <button ion-fab mini color="light" [ngClass]="{\'shine\': isFav(it.id)}" item-end (click)="addFav(it.id)">\n\n          <ion-icon name="star-outline"></ion-icon>\n\n        </button>  \n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n\n\n  <ng-template #normalList>\n\n    <ion-list>\n\n      <ion-item *ngFor="let item of sortedItems">\n\n        <h2 (click)="selectVerbo(item)"><b>{{item.infinitivo}}</b></h2>\n\n        <p style="color:gray;" (click)="selectVerbo(item)" >{{item.def}}</p>\n\n        <button ion-fab mini color="light" [ngClass]="{\'shine\': isFav(item.id)}" item-end (click)="addFav(item.id)">\n\n          <ion-icon name="star-outline"></ion-icon>\n\n        </button>                  \n\n      </ion-item>\n\n    </ion-list>\n\n  </ng-template>\n\n\n\n</ion-content>\n\n\n\n<ion-footer no-border>\n\n  <ion-toolbar block>\n\n    <ion-buttons align="center">\n\n      <button ion-button class="extrakeys" mode="ios" (click)="type(\'í\')"><b>í</b></button>\n\n      <button ion-button class="extrakeys" mode="ios" (click)="type(\'ñ\')"><b>ñ</b></button>\n\n      <button ion-button class="extrakeys" mode="ios" (click)="delete()"><b><ion-icon mode="md" name="arrow-back"></ion-icon></b></button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\JM\Documents\hispanicusapp\src\pages\list-verbos\list-verbos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_5__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_verbos_verbos__["a" /* VerbosProvider */]])
    ], ListVerbosPage);
    return ListVerbosPage;
}());

//# sourceMappingURL=list-verbos.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config_config__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_smart_audio_smart_audio__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ConfigPage = (function () {
    function ConfigPage(smartAudio, toastCtrl, configProvider, authProvider, navCtrl, navParams, translate, viewCtrl) {
        this.smartAudio = smartAudio;
        this.toastCtrl = toastCtrl;
        this.configProvider = configProvider;
        this.authProvider = authProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.viewCtrl = viewCtrl;
        this.mode = localStorage.getItem("rmode") || '1';
        this.lang = localStorage.getItem("lang") || 'en';
        this.region = localStorage.getItem("region") || [0, 2, 4];
    }
    ConfigPage.prototype.changeLang = function () {
        var _this = this;
        var xlang = this.lang || 'en';
        localStorage.setItem('lang', xlang);
        this.translate.use(xlang);
        this.configProvider.setLang(xlang).subscribe(function (res) {
            console.log(res);
            if (res['success']) {
                _this.presentToast(true);
            }
            else {
                _this.presentToast(false);
            }
        }, function (error) {
            _this.presentToast(false);
        });
    };
    ConfigPage.prototype.changeMode = function () {
        var _this = this;
        var xmode = this.mode || 1;
        switch (xmode) {
            case '1':
                localStorage.setItem('rmode', '1');
                localStorage.setItem("region", JSON.stringify([0, 2, 4]));
                break;
            case '2':
                localStorage.setItem('rmode', '2');
                localStorage.setItem("region", JSON.stringify([0, 1, 4]));
                break;
            case '3':
                localStorage.setItem('rmode', '3');
                localStorage.setItem("region", JSON.stringify([0, 1, 3]));
                break;
            default:
                localStorage.setItem('rmode', '1');
                localStorage.setItem("region", JSON.stringify([0, 2, 4]));
                break;
        }
        this.configProvider.setRegion(xmode).subscribe(function (res) {
            console.log(res);
            if (res['success']) {
                _this.presentToast(true);
            }
            else {
                _this.presentToast(false);
            }
        }, function (error) {
            _this.presentToast(false);
        });
    };
    ConfigPage.prototype.logout = function () {
        var _this = this;
        this.authProvider.logout().subscribe(function (res) {
            localStorage.clear();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
        }, function (error) {
            localStorage.clear();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
        }, function () {
            localStorage.clear();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
        });
    };
    ConfigPage.prototype.close = function (e) {
        this.smartAudio.play('tapped');
        var callbackData = (e.target.innerText != 'Volver') ? e.target.innerText : false;
        this.viewCtrl.dismiss(callbackData);
    };
    ConfigPage.prototype.presentToast = function (type) {
        var msg;
        this.translate.get('GENERAL').subscribe(function (general) {
            if (type) {
                msg = general.CHANGE_SUCCESS;
            }
            else {
                msg = general.CHANGE_FAIL;
            }
        });
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    ConfigPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-config',template:/*ion-inline-start:"C:\Users\JM\Documents\hispanicusapp\src\modals\config\config.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n  	<button ion-button icon-left color="primary" clear small (click)="close($event)">\n\n        <ion-icon name="cancel"></ion-icon>\n\n        {{\'GENERAL.BACK\' | translate}}\n\n      </button>\n\n    <ion-title> <ion-icon name="cog"></ion-icon> {{\'GENERAL.SETTINGS\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	\n\n	<span><h4><ion-icon name="flag"></ion-icon> {{\'LANG.LANG\' | translate}}</h4></span>\n\n	<ion-list>\n\n	  <ion-item>\n\n	  	<ion-label>{{\'GENERAL.SELECT\' | translate}}</ion-label>\n\n			<ion-select okText="{{\'GENERAL.OK\' | translate}}" cancelText="{{\'GENERAL.CANCEL\' | translate}}" [(ngModel)]="lang" (ngModelChange)="changeLang()" block>\n\n	      <ion-option value="en">{{\'LANG.EN\' | translate}}</ion-option>\n\n	      <ion-option value="es">{{\'LANG.ES\' | translate}}</ion-option>\n\n	      <!--<ion-option value="pt" disabled>{{\'LANG.PT\' | translate}}</ion-option>\n\n	      <ion-option value="cn" disabled>{{\'LANG.CN\' | translate}}</ion-option>-->\n\n	    </ion-select>	  	\n\n	  </ion-item> \n\n	</ion-list>\n\n\n\n\n\n	<span><h4> <ion-icon name="globe" left></ion-icon> {{\'GENERAL.MODE\' | translate}}</h4> </span>\n\n	<ion-list>\n\n	  <ion-item>\n\n	  	<ion-label>{{\'GENERAL.SELECT\' | translate}}</ion-label>\n\n			<ion-select okText="{{\'GENERAL.OK\' | translate}}" cancelText="{{\'GENERAL.CANCEL\' | translate}}" [(ngModel)]="mode" (ngModelChange)="changeMode()" block>\n\n	      <ion-option value="1">{{\'LANG.SP\' | translate}}</ion-option>\n\n	      <ion-option value="2">{{\'LANG.LAN\' | translate}}</ion-option>\n\n	      <ion-option value="3">{{\'LANG.LAS\' | translate}}</ion-option>\n\n	    </ion-select>\n\n	    <button ion-button icon-only item-end>\n\n      <ion-icon color="info" name="alert"></ion-icon>\n\n    </button>\n\n	  </ion-item> \n\n	</ion-list>	\n\n\n\n	<span> <h4><ion-icon name="contact"></ion-icon> {{\'GENERAL.ACCOUNT\' | translate}}</h4></span>\n\n	<ion-list>\n\n\n\n	   <button class="grdnt" ion-button icon-start block (tap)="logout()"><ion-icon name="key"></ion-icon> {{\'GENERAL.CHANGE_PSW\' | translate}}</button>\n\n\n\n		 <button class="grdnt" ion-button icon-start block (tap)="logout()"><ion-icon name="exit"></ion-icon> {{\'GENERAL.LOG_OUT\' | translate}}</button>\n\n\n\n	</ion-list>		\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\JM\Documents\hispanicusapp\src\modals\config\config.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], ConfigPage);
    return ConfigPage;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegisterPage = (function () {
    function RegisterPage(loadingCtrl, translateServ, toastCtrl, navCtrl, navParams, formBuilder, authProvider) {
        this.loadingCtrl = loadingCtrl;
        this.translateServ = translateServ;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.authProvider = authProvider;
        this.registerFormGroup = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z0-9]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z0-9]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            cpassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z0-9]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    RegisterPage.prototype.register = function () {
        var _this = this;
        var email = this.registerFormGroup.get('email').value;
        var name = this.registerFormGroup.get('name').value;
        var password = this.registerFormGroup.get('password').value;
        var cpassword = this.registerFormGroup.get('cpassword').value;
        var loader = this.presentLoading();
        loader.present();
        this.authProvider.register(name, email, password, cpassword).subscribe(function (res) {
            loader.dismiss();
            localStorage.setItem('token', res['token']);
            localStorage.setItem('user', JSON.stringify(res['user']));
            localStorage.setItem('lang', res['lang']);
            localStorage.setItem('rmode', res['modo']);
            localStorage.setItem('favs', JSON.stringify(res['favs']));
            _this.translateServ.setDefaultLang(res['lang']);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }, function (data) {
            loader.dismiss();
            var err;
            for (var d in data.error) {
                err = data.error[d];
            }
            if (err.confirm_password) {
                _this.presentToast('pass', 'bottom');
            }
            if (err.email) {
                _this.presentToast('email', 'middle');
            }
        });
    };
    RegisterPage.prototype.presentToast = function (type, pos) {
        var msg;
        this.translateServ.get('ERROR').subscribe(function (error) {
            if (type == 'email') {
                msg = error.EMAIL_TAKEN;
            }
            else if (type == 'pass') {
                msg = error.PASS_MISMATCH;
            }
            else {
                msg = error.UNKNOW;
            }
        });
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: pos
        });
        toast.present();
    };
    RegisterPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            spinner: 'crescent',
            showBackdrop: false
        });
        return loader;
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\JM\Documents\hispanicusapp\src\pages\register\register.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{\'GENERAL.CREATE_USER\' | translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n<div class="titleicon">\n   <img src="assets/imgs/logo.png" width="150px" height="120px" />\n</div>\n\n<form [formGroup]="registerFormGroup">\n\n	<ion-list style="margin-top: 20%;">\n\n	<ion-item>\n		<ion-label><ion-icon name="mail"></ion-icon></ion-label>\n    <ion-input formControlName="email" placeholder="{{\'GENERAL.EMAIL\' | translate}}" type="email" value=""></ion-input>\n  </ion-item>\n	\n	<br>\n  <ion-item>\n  	<ion-label><ion-icon name="person"></ion-icon></ion-label>\n    <ion-input formControlName="name" placeholder="{{\'GENERAL.NAME\' | translate}}" type="text" value=""></ion-input>\n  </ion-item>\n	\n	<br>\n  <ion-item>\n    <ion-label><ion-icon name="key"></ion-icon></ion-label>\n    <ion-input formControlName="password" placeholder="{{\'GENERAL.PASSWORD\' | translate}}" type="password"></ion-input>\n  </ion-item>\n\n  <br>\n  <ion-item>\n    <ion-label><ion-icon name="key"></ion-icon><ion-icon name="key"></ion-icon></ion-label>\n    <ion-input formControlName="cpassword" placeholder="{{\'GENERAL.CPASSWORD\' | translate}}" type="password"></ion-input>\n  </ion-item>\n\n</ion-list>	\n\n	<button class="grdnt" [disabled]="!registerFormGroup.valid" ion-button block (tap)="register()">{{\'GENERAL.SIGN_UP\' | translate}}</button>\n\n</form>	\n</ion-content>\n'/*ion-inline-end:"C:\Users\JM\Documents\hispanicusapp\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_globalization__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_menu_verbo_menu_verbo__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_list_verbos_list_verbos__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modals_diccionario_diccionario__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modals_config_config__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_verbos_verbos__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_auth_auth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_config_config__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_smart_audio_smart_audio__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_native_audio__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//NATIVES



//PAGES





//MODALS




//PROVIDERS





function HttpLoaderFactory(httpClient) {
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](httpClient, "./assets/i18n/", ".json");
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_menu_verbo_menu_verbo__["a" /* MenuVerboPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_list_verbos_list_verbos__["a" /* ListVerbosPage */],
                __WEBPACK_IMPORTED_MODULE_13__modals_diccionario_diccionario__["a" /* DiccionarioPage */],
                __WEBPACK_IMPORTED_MODULE_14__modals_config_config__["a" /* ConfigPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                    pageTransition: 'ios-transition',
                    backButtonText: '',
                }, {
                    links: [
                        { loadChildren: '../pages/dicts/dicts.module#DictsPageModule', name: 'DictsPage', segment: 'dicts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorites/favorites.module#FavoritesPageModule', name: 'FavoritesPage', segment: 'favorites', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info/info.module#InfoPageModule', name: 'InfoPage', segment: 'info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verbo-regular/verbo-regular.module#FavoritesPageModule', name: 'VerboRegularPage', segment: 'verbo-regular', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_menu_verbo_menu_verbo__["a" /* MenuVerboPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_list_verbos_list_verbos__["a" /* ListVerbosPage */],
                __WEBPACK_IMPORTED_MODULE_13__modals_diccionario_diccionario__["a" /* DiccionarioPage */],
                __WEBPACK_IMPORTED_MODULE_14__modals_config_config__["a" /* ConfigPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_globalization__["a" /* Globalization */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_verbos_verbos__["a" /* VerbosProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_native_audio__["a" /* NativeAudio */],
                __WEBPACK_IMPORTED_MODULE_19__providers_config_config__["a" /* ConfigProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_smart_audio_smart_audio__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(smartAudio, platform, statusBar, splashScreen, translate) {
        this.translate = translate;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        var lang = localStorage.getItem('lang') || 'en';
        translate.setDefaultLang(lang);
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            smartAudio.preload('tapped', 'assets/audio/waterdroplet.mp3');
            smartAudio.preload('fav', 'assets/audio/fav.mp3');
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\JM\Documents\hispanicusapp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\JM\Documents\hispanicusapp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartAudioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SmartAudioProvider = (function () {
    function SmartAudioProvider(nativeAudio, platform) {
        this.nativeAudio = nativeAudio;
        this.audioType = 'html5';
        this.sounds = [];
        if (platform.is('cordova')) {
            this.audioType = 'native';
        }
    }
    SmartAudioProvider.prototype.preload = function (key, asset) {
        if (this.audioType === 'html5') {
            var audio = {
                key: key,
                asset: asset,
                type: 'html5'
            };
            this.sounds.push(audio);
        }
        else {
            this.nativeAudio.preloadSimple(key, asset);
            var audio = {
                key: key,
                asset: asset,
                type: 'native'
            };
            this.sounds.push(audio);
        }
    };
    SmartAudioProvider.prototype.play = function (key) {
        var audio = this.sounds.find(function (sound) {
            return sound.key === key;
        });
        if (audio.type === 'html5') {
            var audioAsset = new Audio(audio.asset);
            audioAsset.play();
        }
        else {
            this.nativeAudio.play(audio.asset).then(function (res) {
                console.log(res);
            }, function (err) {
                console.log(err);
            });
        }
    };
    SmartAudioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], SmartAudioProvider);
    return SmartAudioProvider;
}());

//# sourceMappingURL=smart-audio.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_globalization__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LoginPage = (function () {
    function LoginPage(translateServ, toastCtrl, loadingCtrl, navCtrl, navParams, globalization, formBuilder, authProvider) {
        this.translateServ = translateServ;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalization = globalization;
        this.formBuilder = formBuilder;
        this.authProvider = authProvider;
        this.loginFormGroup = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('[a-zA-Z0-9]*'), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])]
        });
        this.globalization.getPreferredLanguage()
            .then(function (res) { return console.log(res); })
            .catch(function (e) { return console.log(e); });
    }
    LoginPage.prototype.ionViewCanEnter = function () {
        if (localStorage.getItem('token')) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
        return true;
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var email = this.loginFormGroup.get('email').value;
        var password = this.loginFormGroup.get('password').value;
        var loader = this.presentLoading();
        loader.present();
        this.authProvider.login(email, password).subscribe(function (res) {
            loader.dismiss();
            localStorage.setItem('token', res['token']);
            localStorage.setItem('user', JSON.stringify(res['user']));
            localStorage.setItem('lang', res['lang']);
            localStorage.setItem('rmode', res['modo']);
            localStorage.setItem('favs', JSON.stringify(res['favs']));
            _this.translateServ.setDefaultLang(res['lang']);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }, function (error) {
            loader.dismiss();
            if (error.status == 401) {
                _this.presentToast(true);
            }
            else {
                _this.presentToast(false);
            }
        });
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            spinner: 'crescent',
            showBackdrop: false
        });
        return loader;
    };
    LoginPage.prototype.presentToast = function (type) {
        var msg;
        this.translateServ.get('ERROR').subscribe(function (error) {
            if (type) {
                msg = error.CHECK_CREDS;
            }
            else {
                msg = error.SUBTITLE;
            }
        });
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\JM\Documents\hispanicusapp\src\pages\login\login.html"*/'<ion-content padding>\n\n\n\n<div class="titleicon">\n\n   <img src="assets/imgs/logo.png" width="150px" height="120px" />\n\n</div>\n\n\n\n<ion-list style="margin-top: 20%;">\n\n\n\n<form [formGroup]="loginFormGroup">\n\n  <ion-item>\n\n    <ion-label><ion-icon name="person"></ion-icon></ion-label>\n\n    <ion-input formControlName="email" placeholder="{{ \'GENERAL.EMAIL\' | translate}}" type="text" value=""></ion-input>\n\n  </ion-item>\n\n  <br>\n\n  <ion-item>\n\n    <ion-label><ion-icon name="key"></ion-icon></ion-label>\n\n    <ion-input formControlName="password" placeholder="{{ \'GENERAL.PASSWORD\' | translate}}" type="password"></ion-input>\n\n  </ion-item>\n\n</form>\n\n\n\n</ion-list>	\n\n\n\n	<button class="grdnt" ion-button block (tap)="login()">{{\'GENERAL.SIGN_IN\' | translate}}</button>\n\n  <br><br>\n\n  <button class="grdnt" ion-button block (tap)="register()">{{\'GENERAL.SIGN_UP\' | translate}}</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\JM\Documents\hispanicusapp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_globalization__["a" /* Globalization */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthProvider = (function () {
    function AuthProvider(http) {
        this.http = http;
    }
    AuthProvider.prototype.login = function (xemail, xpasword) {
        var authData = { 'email': xemail, 'password': xpasword };
        return this.http.post('http://localhost:8000/api/v1/login', authData, {
            headers: { 'Accept': 'application/json' }
        });
    };
    AuthProvider.prototype.register = function (xname, xemail, xpassword, xconfirm) {
        var regData = { 'name': xname, 'email': xemail, 'password': xpassword, 'confirm_password': xconfirm };
        return this.http.post('http://localhost:8000/api/v1/register', regData, {
            headers: { 'Accept': 'application/json' }
        });
    };
    AuthProvider.prototype.logout = function () {
        var token = localStorage.getItem('token');
        if (!token) {
            return;
        }
        return this.http.post('http://localhost:8000/api/v1/logout', {}, {
            headers: {
                'Authorization': "Bearer " + token,
                'Accept': 'application/json'
            }
        });
    };
    AuthProvider.prototype.checkEmailNotTaken = function (xemail) {
        var email = { 'email': xemail };
        return this.http.post('http://localhost:8000/api/v1/checkemail', email, {
            headers: {
                'Accept': 'application/json'
            }
        });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigProvider = (function () {
    function ConfigProvider(http) {
        this.http = http;
    }
    ConfigProvider.prototype.setLang = function (xlang) {
        var lang = { 'lang': xlang };
        return this.http.post('http://localhost:8000/api/v1/lang', lang, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
    };
    ConfigProvider.prototype.getLang = function () {
        return this.http.get('http://localhost:8000/api/v1/lang', {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
    };
    ConfigProvider.prototype.setFavs = function (xfavs) {
        var favs = { 'favs': xfavs };
        return this.http.post('http://localhost:8000/api/v1/favs', favs, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
    };
    ConfigProvider.prototype.getFavs = function () {
        return this.http.get('http://localhost:8000/api/v1/favs', {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
    };
    ConfigProvider.prototype.setRegion = function (xregion) {
        var region = { 'modo': xregion };
        return this.http.post('http://localhost:8000/api/v1/region', region, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
    };
    ConfigProvider.prototype.getRegion = function () {
        return this.http.get('http://localhost:8000/api/v1/region', {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
    };
    ConfigProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ConfigProvider);
    return ConfigProvider;
}());

//# sourceMappingURL=config.js.map

/***/ })

},[218]);
//# sourceMappingURL=main.js.map