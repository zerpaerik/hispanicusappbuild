webpackJsonp([4],{273:function(l,n,u){"use strict";function a(l){return new f.a(l,"./assets/i18n/",".json")}function t(l){return e._25(0,[(l()(),e._3(0,0,null,null,22,"ion-item",[["class","item item-block"]],null,null,null,D.b,D.a)),e._2(1,1097728,null,3,O.a,[S.a,C.a,e.k,e.D,[2,I.a]],null,null),e._21(335544320,1,{contentLabel:0}),e._21(603979776,2,{_buttons:1}),e._21(603979776,3,{_icons:1}),e._2(5,16384,null,0,$.a,[],null,null),(l()(),e._23(-1,2,["\n    \t"])),(l()(),e._3(7,0,null,2,2,"h2",[],null,[[null,"click"]],function(l,n,u){var a=!0;if("click"===n){a=!1!==l.component.selectVerbo(l.context.$implicit)&&a}return a},null,null)),(l()(),e._3(8,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e._23(9,null,["",""])),(l()(),e._23(-1,2,["\n      "])),(l()(),e._3(11,0,null,2,1,"p",[["style","color:gray;"]],null,[[null,"click"]],function(l,n,u){var a=!0;if("click"===n){a=!1!==l.component.selectVerbo(l.context.$implicit)&&a}return a},null,null)),(l()(),e._23(12,null,["",""])),(l()(),e._23(-1,2,["\n      "])),(l()(),e._3(14,0,null,4,7,"button",[["color","light"],["ion-fab",""],["item-end",""],["mini",""]],null,[[null,"click"]],function(l,n,u){var a=!0;if("click"===n){a=!1!==l.component.addFav(l.context.$implicit.id)&&a}return a},J.b,J.a)),e._2(15,278528,null,0,M.g,[e.s,e.t,e.k,e.E],{ngClass:[0,"ngClass"]},null),e._19(16,{shine:0}),e._2(17,49152,null,0,N.a,[C.a,e.k,e.D],{color:[0,"color"]},null),(l()(),e._23(-1,0,["\n        "])),(l()(),e._3(19,0,null,0,1,"ion-icon",[["name","star-outline"],["role","img"]],[[2,"hide",null]],null,null,null,null)),e._2(20,147456,null,0,V.a,[C.a,e.k,e.D],{name:[0,"name"]},null),(l()(),e._23(-1,0,["\n      "])),(l()(),e._23(-1,2,["  \n    "]))],function(l,n){l(n,15,0,l(n,16,0,n.component.isFav(n.context.$implicit.id)));l(n,17,0,"light");l(n,20,0,"star-outline")},function(l,n){l(n,9,0,n.context.$implicit.infinitivo);l(n,12,0,n.context.$implicit.def);l(n,19,0,e._17(n,20)._hidden)})}function i(l){return e._25(0,[(l()(),e._3(0,0,null,null,11,"ion-header",[],null,null,null,null,null)),e._2(1,16384,null,0,j.a,[C.a,e.k,e.D,[2,w.a]],null,null),(l()(),e._23(-1,null,["\n\n  "])),(l()(),e._3(3,0,null,null,7,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,A.b,A.a)),e._2(4,49152,null,0,E.a,[L.a,[2,w.a],[2,q.a],C.a,e.k,e.D],null,null),(l()(),e._23(-1,3,["\n    "])),(l()(),e._3(6,0,null,3,3,"ion-title",[],null,null,null,R.b,R.a)),e._2(7,49152,null,0,B.a,[C.a,e.k,e.D,[2,H.a],[2,E.a]],null,null),(l()(),e._23(8,0,["",""])),e._18(131072,_.j,[_.k,e.g]),(l()(),e._23(-1,3,["\n  "])),(l()(),e._23(-1,null,["\n\n"])),(l()(),e._23(-1,null,["\n\n\n"])),(l()(),e._3(13,0,null,null,9,"ion-content",[["block",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,U.b,U.a)),e._2(14,4374528,null,0,W.a,[C.a,Y.a,Z.a,e.k,e.D,L.a,z.a,e.x,[2,w.a],[2,q.a]],null,null),(l()(),e._23(-1,1,["\n\t"])),(l()(),e._3(16,0,null,1,5,"ion-list",[],null,null,null,null,null)),e._2(17,16384,null,0,G.a,[C.a,e.k,e.D,Y.a,K.l,Z.a],null,null),(l()(),e._23(-1,null,["\n    "])),(l()(),e.Y(16777216,null,null,1,null,t)),e._2(20,802816,null,0,M.h,[e.M,e.J,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e._23(-1,null,["\n  "])),(l()(),e._23(-1,1,["\n"])),(l()(),e._23(-1,null,["\n"]))],function(l,n){l(n,20,0,n.component.verbs)},function(l,n){l(n,3,0,e._17(n,4)._hidden,e._17(n,4)._sbPadding);l(n,8,0,e._24(n,8,0,e._17(n,9).transform("HOME.MENU.FAVS")));l(n,13,0,e._17(n,14).statusbarPadding,e._17(n,14)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var e=u(0),o=(u(2),u(13),u(71)),r=u(56),s=u(29),c=function(){function l(l,n,u,a,t,i){var e=this;this.loadingCtrl=l,this.smartAudio=n,this.navCtrl=u,this.navParams=a,this.verbosProvider=t,this.configProvider=i;var o=this.presentLoading();o.present(),this.verbosProvider.getFavs().subscribe(function(l){e.verbs=l,o.dismiss()},function(l){o.dismiss()}),n.preload("tapped","assets/audio/waterdroplet.mp3"),n.preload("fav","assets/audio/fav.mp3")}return l.prototype.selectVerbo=function(l){this.smartAudio.play("tapped"),this.navCtrl.push("VerboRegularPage",{verbo:l})},l.prototype.presentLoading=function(){return this.loadingCtrl.create({spinner:"crescent",showBackdrop:!1})},l.prototype.isFav=function(l){var n=JSON.parse(localStorage.getItem("favs"));return!!this.myInclude(n,l)},l.prototype.addFav=function(l){this.smartAudio.play("fav");var n=JSON.parse(localStorage.getItem("favs"));if(this.myInclude(n,l)){var u=n.indexOf(l);n.splice(u,1)}else n.push(l);localStorage.setItem("favs",JSON.stringify(n)),this.configProvider.setFavs(n).subscribe(function(l){console.log(l)})},l.prototype.myInclude=function(l,n){for(var u in l)if(l[u]==n)return!0;return!1},l}(),_=u(21),d=u(52),f=u(208),p=u(98),v=function(){return function(){}}(),b=u(209),m=u(210),g=u(211),h=u(212),k=u(213),y=u(214),F=u(215),P=u(216),x=u(217),D=u(61),O=u(17),S=u(15),C=u(1),I=u(32),$=u(46),J=u(145),M=u(14),N=u(48),V=u(24),j=u(35),w=u(5),A=u(54),E=u(27),L=u(6),q=u(16),R=u(55),B=u(31),H=u(30),U=u(45),W=u(19),Y=u(4),Z=u(7),z=u(25),G=u(39),K=u(8),Q=u(57),T=u(10),X=e._1({encapsulation:2,styles:[],data:{}}),ll=e.Z("page-favorites",c,function(l){return e._25(0,[(l()(),e._3(0,0,null,null,1,"page-favorites",[],null,null,null,i,X)),e._2(1,49152,null,0,c,[Q.a,s.a,q.a,T.a,o.a,r.a],null,null)],null,null)},{},{},[]),nl=u(11),ul=u(142),al=u(53);u.d(n,"FavoritesPageModuleNgFactory",function(){return tl});var tl=e._0(v,[],function(l){return e._14([e._15(512,e.i,e.W,[[8,[b.a,m.a,g.a,h.a,k.a,y.a,F.a,P.a,x.a,ll]],[3,e.i],e.v]),e._15(4608,M.k,M.j,[e.u,[2,M.s]]),e._15(4608,nl.q,nl.q,[]),e._15(4608,nl.d,nl.d,[]),e._15(5120,_.g,a,[d.c]),e._15(4608,_.c,_.f,[]),e._15(4608,_.i,_.d,[]),e._15(4608,_.b,_.a,[]),e._15(4608,_.k,_.k,[_.n,_.g,_.c,_.i,_.b,_.l,_.m]),e._15(4608,o.a,o.a,[d.c]),e._15(4608,r.a,r.a,[d.c]),e._15(4608,p.a,p.a,[]),e._15(4608,s.a,s.a,[p.a,Y.a]),e._15(512,M.b,M.b,[]),e._15(512,nl.o,nl.o,[]),e._15(512,nl.g,nl.g,[]),e._15(512,nl.m,nl.m,[]),e._15(512,ul.a,ul.a,[]),e._15(512,ul.b,ul.b,[]),e._15(512,_.h,_.h,[]),e._15(512,v,v,[]),e._15(256,al.a,c,[]),e._15(256,_.m,void 0,[]),e._15(256,_.l,void 0,[])])})}});