(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b04fde3"],{"0d77":function(e,a,t){"use strict";t.r(a);var l=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticClass:"gallery",attrs:{id:"gallery"}},[l("div",{staticClass:"galleryNameCompleteOverlay",on:{click:e.closeModal}}),l("div",{staticClass:"galleryNamePartialOverlay"}),l("div",{staticClass:"galleryNameHeadingContainer"},[l("h1",{staticClass:"galleryNameHeading"},[e._v(e._s(e.$route.params.name))])]),l("div",{staticClass:"galleryNameGalleryContainer"},[l("p",[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]),l("div",{staticClass:"galleryNameImage-Container row no-gutters"},e._l(e.images,(function(a,s){return l("div",{key:"galleryNameContainer-"+s,staticClass:"col-12 col-lg-6 col-xl-4 galleryNameImage-ContainerInner",attrs:{id:"galleryNameContainer-"+s},on:{click:function(a){return e.openModal(s)}}},[l("img",{staticClass:"galleryNameImage",attrs:{src:t("cfb7")("./"+a)}}),e._m(0,!0)])})),0),l("div",{staticClass:"galleryNameImage-Container row no-gutters"},e._l(e.images,(function(a,s){return l("div",{key:"Modal-"+s,staticClass:"col-12 col-lg-6 col-xl-4 galleryNameImage-ContainerInner galleryNameImageModal",attrs:{id:"Modal-"+s}},[l("img",{staticClass:"galleryNameImage",attrs:{src:t("cfb7")("./"+a)}}),l("img",{staticClass:"galleryNameCloseIcon",attrs:{src:t("203b")},on:{click:e.closeModal}}),l("div",{staticClass:"galleryNameImageModalRight",on:{click:e.next}}),l("img",{staticClass:"galleryNameArrowRight",attrs:{src:t("6538")},on:{click:e.next}}),l("div",{staticClass:"galleryNameImageModalLeft",on:{click:e.previous}}),l("img",{staticClass:"galleryNameArrowLeft",attrs:{src:t("80f1")},on:{click:e.previous}})])})),0)])])},s=[function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticClass:"galleryNameOverlay"},[l("img",{staticClass:"galleryNamePfeilQuadrat",attrs:{src:t("4887")}})])}],i={name:"galleryName",data:function(){return{lastId:"",closing:!1,images:["Ice3.jpg","Ice1.jpg","Ice2.jpg","Ice.jpg"]}},methods:{openModal:function(e){this.lastId=e,document.getElementById("Modal-"+this.lastId).classList.toggle("galleryNameImage-ContainerInner-Modal"),document.getElementById("gallery").classList.toggle("galleryNameCompleteOverlayActive")},closeModal:function(){document.getElementById("Modal-"+this.lastId).classList.toggle("galleryNameImage-ContainerInner-Modal"),document.getElementById("gallery").classList.toggle("galleryNameCompleteOverlayActive")},next:function(){document.getElementById("Modal-"+this.lastId).classList.toggle("galleryNameImage-ContainerInner-Modal"),this.lastId++,this.lastId>this.images.length-1&&(this.lastId=0),document.getElementById("Modal-"+this.lastId).classList.toggle("galleryNameImage-ContainerInner-Modal")},previous:function(){document.getElementById("Modal-"+this.lastId).classList.toggle("galleryNameImage-ContainerInner-Modal"),this.lastId--,this.lastId<0&&(this.lastId=this.images.length-1),document.getElementById("Modal-"+this.lastId).classList.toggle("galleryNameImage-ContainerInner-Modal")}}},n=i,o=(t("b9d2"),t("2877")),r=Object(o["a"])(n,l,s,!1,null,null,null);a["default"]=r.exports},"203b":function(e,a,t){e.exports=t.p+"img/Kreuz.25616179.svg"},4887:function(e,a,t){e.exports=t.p+"img/Pfeil_Quadrat.f8274a58.svg"},"80f1":function(e,a,t){e.exports=t.p+"img/Pfeil_nach_links.fcbfb1eb.svg"},a6b5:function(e,a,t){},ac3b:function(e,a,t){e.exports=t.p+"img/Ice3.6edb249d.jpg"},b9d2:function(e,a,t){"use strict";var l=t("a6b5"),s=t.n(l);s.a},cd99:function(e,a,t){e.exports=t.p+"img/Ice1 (Kopie).4a840fb4.jpg"},cfb7:function(e,a,t){var l={"./Ice.jpg":"413c","./Ice1 (Kopie).jpg":"cd99","./Ice1.jpg":"4110","./Ice2.jpg":"bf1a","./Ice3.jpg":"ac3b"};function s(e){var a=i(e);return t(a)}function i(e){if(!t.o(l,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return l[e]}s.keys=function(){return Object.keys(l)},s.resolve=i,e.exports=s,s.id="cfb7"}}]);
//# sourceMappingURL=chunk-0b04fde3.4813272f.js.map