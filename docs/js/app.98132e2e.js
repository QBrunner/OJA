(function(t){function e(e){for(var a,i,r=e[0],c=e[1],u=e[2],l=0,h=[];l<r.length;l++)i=r[l],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&h.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(h.length)h.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var r=n[i];0!==s[r]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},i={app:0},s={app:0},o=[];function r(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-0aaadda5":"57f8399a","chunk-1070cf09":"afc3db53","chunk-1d3fb4cb":"fadd4fa3","chunk-32b38259":"e0e960f9","chunk-3e2e321f":"74ded230","chunk-42764304":"768f95e2","chunk-45b39e43":"e44ff187","chunk-0baa124e":"cea4fbeb","chunk-3b987119":"17888489","chunk-46789595":"9dddf30d","chunk-542ae095":"3794a9e6","chunk-6812f197":"ffe05d46","chunk-7a38733a":"2147e919","chunk-7ac210d7":"6fa271aa","chunk-7b9c4054":"4cd3898f","chunk-85703c7a":"d473b695","chunk-ada3d4ae":"abcdeb18","chunk-bd5f3246":"40435360","chunk-cf6ec89e":"7dfcf4b3"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-0aaadda5":1,"chunk-1070cf09":1,"chunk-1d3fb4cb":1,"chunk-32b38259":1,"chunk-3e2e321f":1,"chunk-42764304":1,"chunk-0baa124e":1,"chunk-3b987119":1,"chunk-46789595":1,"chunk-542ae095":1,"chunk-6812f197":1,"chunk-7a38733a":1,"chunk-7ac210d7":1,"chunk-7b9c4054":1,"chunk-85703c7a":1,"chunk-ada3d4ae":1,"chunk-bd5f3246":1,"chunk-cf6ec89e":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-0aaadda5":"960677c0","chunk-1070cf09":"c3ce93e7","chunk-1d3fb4cb":"4a40b820","chunk-32b38259":"ceb6f286","chunk-3e2e321f":"1361c3cc","chunk-42764304":"4517f47a","chunk-45b39e43":"31d6cfe0","chunk-0baa124e":"31892bfc","chunk-3b987119":"5dd2bde0","chunk-46789595":"960677c0","chunk-542ae095":"da7a3ada","chunk-6812f197":"4ae6c8a4","chunk-7a38733a":"a38171cb","chunk-7ac210d7":"df2dd8a0","chunk-7b9c4054":"0fdf83f8","chunk-85703c7a":"16267cc4","chunk-ada3d4ae":"4ae6c8a4","chunk-bd5f3246":"58d8c9ed","chunk-cf6ec89e":"2a4a5101"}[t]+".css",s=c.p+a,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var u=o[r],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===s))return e()}var h=document.getElementsByTagName("style");for(r=0;r<h.length;r++){u=h[r],l=u.getAttribute("data-href");if(l===a||l===s)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete i[t],d.parentNode.removeChild(d),n(o)},d.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){i[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=r(t);var h=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",h.name="ChunkLoadError",h.type=a,h.request=i,n[1](h)}s[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/OJA/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var h=0;h<u.length;h++)e(u[h]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"13c8":function(t,e,n){t.exports=n.p+"img/Ice2.131d2508.jpg"},"194f":function(t,e,n){"use strict";var a=n("7a3e"),i=n.n(a);i.a},"21bb":function(t,e,n){"use strict";var a=n("2dad"),i=n.n(a);i.a},"2d25":function(t,e,n){var a={"./1_Zeitungsartikel.jpg":"4425","./2_Zeitungsartikel.jpg":"4ffb","./3_Übergabe.jpg":"836f","./Ice.jpg":"4e53","./Ice1 (Kopie).jpg":"5a7a","./Ice1.jpg":"6b4a","./Ice2.jpg":"13c8","./Ice3.jpg":"2ded"};function i(t){var e=s(t);return n(e)}function s(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=s,t.exports=i,i.id="2d25"},"2dad":function(t,e,n){},"2ded":function(t,e,n){t.exports=n.p+"img/Ice3.6edb249d.jpg"},4140:function(t){t.exports=JSON.parse('{"elements":[{"image":"3_Übergabe.jpg","heading":"Azubi bowling","link":"azubi-bowling"},{"image":"1_Zeitungsartikel.jpg","heading":"OJA Treffen 16.03","link":"oja-treffen"},{"image":"2_Zeitungsartikel.jpg","heading":"Aktion Respekt","link":"respekt"}]}')},4425:function(t,e,n){t.exports=n.p+"img/1_Zeitungsartikel.e3411289.jpg"},4859:function(t,e,n){"use strict";var a=n("a429"),i=n.n(a);i.a},"4e53":function(t,e,n){t.exports=n.p+"img/Ice.87348a87.jpg"},"4ffb":function(t,e,n){t.exports=n.p+"img/2_Zeitungsartikel.d8527b63.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"page-content"},[n("router-view",{staticClass:"fading"})],1),n("Footer"),n("Navbar")],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"menu-icon-bar row no-gutters"},[a("div",{staticClass:"menu-icon col-auto",on:{click:function(e){t.toggleNavigation(),t.toggleLogoVisability()}}},[a("div"),a("div"),a("div")])]),a("div",{staticClass:"navigation",attrs:{id:"navigation"}},[a("div",{staticClass:"left"},[a("span",{staticClass:"close-button",on:{click:t.toggleNavigation}},[t._v("×")]),a("span",{staticClass:"linkNaviWrapper",attrs:{id:"news"}},[a("a",{staticClass:"linkNavi",on:{click:function(e){t.$router.push({name:"news"}).catch((function(t){})),t.toggleNavigation()}}},[t._v("News")])]),a("span",{staticClass:"linkNaviWrapper",attrs:{id:"termine"}},[a("a",{staticClass:"linkNavi",on:{click:function(e){t.$router.push({name:"termine"}).catch((function(t){})),t.toggleNavigation()}}},[t._v("Termine")])]),a("span",{staticClass:"linkNaviWrapper",attrs:{id:"mehrvonuns"}},[a("a",{staticClass:"linkNavi",on:{click:function(e){t.$router.push({name:"mehrvonuns"}).catch((function(t){})),t.toggleNavigation()}}},[t._v("Mehr von Uns")])])]),a("div",{staticClass:"right"},[a("span",{staticClass:"linkNaviWrapper",attrs:{id:"podcasts"}},[a("a",{staticClass:"linkNavi",on:{click:function(e){t.$router.push({name:"podcasts"}).catch((function(t){})),t.toggleNavigation()}}},[t._v("Podcasts")])]),a("span",{staticClass:"linkNaviWrapper",attrs:{id:"kontakt"}},[a("a",{staticClass:"linkNavi",on:{click:function(e){t.$router.push({name:"kontakt"}).catch((function(t){})),t.toggleNavigation()}}},[t._v("Kontakt")])])])]),a("div",{staticClass:"logo",style:[t.logoBackground?{"z-index":0}:{"z-index":2}],attrs:{id:"logo"},on:{click:function(e){t.$router.push({name:"home"}).catch((function(t){}))}}},[a("img",{attrs:{src:n("9e40")}})])])},r=[],c=(n("b0c0"),{name:"Navbar",data:function(){return{logoBackground:!0}},methods:{toggleNavigation:function(){document.getElementById("navigation").classList.toggle("expanded"),this.toggleLogoVisability},toggleLogoVisability:function(){document.getElementById("navigation").classList.contains("expanded")&&window.innerWidth<768?this.logoBackground=!0:this.logoBackground=!1},resize:function(){this.toggleLogoVisability()}},watch:{$route:function(t){var e={};e="newsName"===t.name?document.getElementById("news"):"termineName"===t.name?document.getElementById("termine"):"podcastsName"===t.name?document.getElementById("podcasts"):document.getElementById(t.name);for(var n=document.getElementsByClassName("linkNaviWrapper"),a=0;a<n.length;a++)n[a].classList.contains("active")&&n[a].classList.toggle("active");"home"!=t.name&&"impressum"!=t.name&&"datenschutz"!=t.name&&e&&e.classList.toggle("active")}},created:function(){window.addEventListener("resize",this.resize),requestAnimationFrame(this.toggleLogoVisability)},beforeDestroy:function(){window.removeEventListener("resize",this.resize)}}),u=c,l=(n("c540"),n("2877")),h=Object(l["a"])(u,o,r,!1,null,"59b7a1d3",null),d=h.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer row no-gutters"},[n("div",{staticClass:"col left"},[n("span",{staticClass:"link",on:{click:function(e){t.$router.push({name:"editor-overview"}).catch((function(t){}))}}},[t._v("Editor")])]),n("div",{staticClass:"right col-auto"},[n("span",{staticClass:"link",attrs:{id:"impressum"},on:{click:function(e){t.$router.push({name:"impressum"}).catch((function(t){}))}}},[t._v("Impressum")]),n("span",{staticClass:"link",attrs:{id:"datenschutz"},on:{click:function(e){t.$router.push({name:"datenschutz"}).catch((function(t){}))}}},[t._v("Datenschutz")])])])},f=[],g={name:"footerComponent",watch:{$route:function(t){for(var e=document.getElementById(t.name),n=document.getElementsByClassName("link"),a=0;a<n.length;a++)n[a].classList.contains("active")&&n[a].classList.toggle("active");e&&e.classList.toggle("active")}}},v=g,p=(n("194f"),Object(l["a"])(v,m,f,!1,null,"977e158a",null)),k=p.exports,b={name:"home",components:{Navbar:d,Footer:k}},w=b,y=(n("5c0b"),Object(l["a"])(w,i,s,!1,null,null,null)),C=y.exports,_=(n("d3b7"),n("8c4f")),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.showLanding?a("div",{staticClass:"landing",attrs:{id:"landing"}},[a("img",{staticClass:"arrowBottom",attrs:{id:"arrowBottom",src:n("f48d")}})]):t._e(),a("div",{staticClass:"content"},[a("termine"),a("news")],1)])},N=[],M=n("a2f9"),L=n("954a"),j={name:"Home",components:{news:M["default"],termine:L["default"]},data:function(){return{id:0,showLanding:!0}},methods:{animate:function(){this.resizeLogo(),this.toggleNaviActive(),this.positionSlogan(),this.id=requestAnimationFrame(this.animate)},resizeLogo:function(){var t=document.getElementById("logo");t&&(window.pageYOffset<=.4*(window.innerHeight-60)&&window.innerHeight>400?(t.style.top=.4*window.innerHeight-window.pageYOffset+"px",t.style.transform="translate(-50%, 0%) scale("+(.0114*window.innerWidth+3.2)*(1/(.0114*window.innerWidth+3.2)+(.4*(window.innerHeight-60)-window.pageYOffset)/(window.innerHeight-60))+")",this.showLanding=!0):(t.style.transform="scale(1) translate(-50%, 50%)",t.style.top="0px",window.innerHeight<=400?this.showLanding=!1:this.showLanding=!0))},resetLogo:function(){var t=document.getElementById("logo");t.style.transform="scale(1) translate(-50%, 50%)",t.style.top="0px"},positionSlogan:function(){var t=document.getElementById("logo"),e=(.0114*window.innerWidth+3.2)*(1/(.0114*window.innerWidth+3.2)+.4*(window.innerHeight-60)/(window.innerHeight-60)),n=.4*window.innerHeight,a=t.clientHeight*e*.5+n+25-60-20,i=document.getElementById("slogan");i&&(i.style.paddingTop=a+"px")},toggleNaviActive:function(){var t=document.getElementById("news"),e=document.getElementById("termine");window.pageYOffset>document.getElementsByClassName("termine")[0].getBoundingClientRect().bottom?(t.classList.contains("active")||t.classList.toggle("active"),e.classList.contains("active")&&e.classList.toggle("active")):window.pageYOffset>0?(e.classList.contains("active")||e.classList.toggle("active"),t.classList.contains("active")&&t.classList.toggle("active")):(t.classList.contains("active")&&t.classList.toggle("active"),e.classList.contains("active")&&e.classList.toggle("active"))}},created:function(){this.id=requestAnimationFrame(this.animate)},beforeDestroy:function(){cancelAnimationFrame(this.id),requestAnimationFrame(this.resetLogo)}},D=j,x=(n("21bb"),Object(l["a"])(D,E,N,!1,null,null,null)),F=x.exports;a["a"].use(_["a"]);var O=[{path:"/",name:"home",component:F},{path:"/news",name:"news",component:function(){return Promise.resolve().then(n.bind(null,"a2f9"))}},{path:"/news/:name",name:"newsName",component:function(){return n.e("chunk-46789595").then(n.bind(null,"0d77"))}},{path:"/termine",name:"termine",component:function(){return Promise.resolve().then(n.bind(null,"954a"))}},{path:"/termine/:name",name:"termineName",component:function(){return n.e("chunk-0aaadda5").then(n.bind(null,"d636"))}},{path:"/podcasts",name:"podcasts",component:function(){return n.e("chunk-7b9c4054").then(n.bind(null,"2459"))}},{path:"/podcasts/:name",name:"podcastsName",component:function(){return n.e("chunk-42764304").then(n.bind(null,"e59d"))}},{path:"/mehrvonuns",name:"mehrvonuns",component:function(){return Promise.all([n.e("chunk-45b39e43"),n.e("chunk-3b987119")]).then(n.bind(null,"834b"))}},{path:"/kontakt",name:"kontakt",component:function(){return n.e("chunk-7a38733a").then(n.bind(null,"8fad"))}},{path:"/datenschutz",name:"datenschutz",component:function(){return n.e("chunk-32b38259").then(n.bind(null,"e1639"))}},{path:"/impressum",name:"impressum",component:function(){return n.e("chunk-1d3fb4cb").then(n.bind(null,"761a"))}},{path:"/editor-overview",name:"editor-overview",component:function(){return n.e("chunk-bd5f3246").then(n.bind(null,"f8ca"))}},{path:"/editor-rechtliches/:name",name:"editor-rechtliches",component:function(){return n.e("chunk-3e2e321f").then(n.bind(null,"957c"))}},{path:"/editor-podcasts/:name",name:"editor-podcast",component:function(){return n.e("chunk-cf6ec89e").then(n.bind(null,"249a"))}},{path:"/editor-podcasts",name:"editor-podcasts",component:function(){return n.e("chunk-542ae095").then(n.bind(null,"ee03"))}},{path:"/editor-kontakt",name:"editor-kontakt",component:function(){return n.e("chunk-1070cf09").then(n.bind(null,"a479"))}},{path:"/editor-news",name:"editor-news",component:function(){return n.e("chunk-85703c7a").then(n.bind(null,"4162"))}},{path:"/editor-gallery/:name",name:"editor-gallery",component:function(){return n.e("chunk-ada3d4ae").then(n.bind(null,"bed6"))}},{path:"/editor-termine",name:"editor-termine",component:function(){return n.e("chunk-7ac210d7").then(n.bind(null,"8c58"))}},{path:"/editor-termine/:name",name:"editor-termineName",component:function(){return n.e("chunk-6812f197").then(n.bind(null,"542a"))}},{path:"*",component:F},{path:"/editor-mehrvonuns",name:"editor-mehrvonuns",component:function(){return Promise.all([n.e("chunk-45b39e43"),n.e("chunk-0baa124e")]).then(n.bind(null,"60f3"))}}],S=new _["a"]({mode:"history",base:"/OJA/",routes:O,scrollBehavior:function(){return{x:0,y:0}}}),A=S,z=n("2f62");a["a"].use(z["a"]);var B=new z["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:A,store:B,render:function(t){return t(C)}}).$mount("#app")},"5a7a":function(t,e,n){t.exports=n.p+"img/Ice1 (Kopie).4a840fb4.jpg"},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),i=n.n(a);i.a},"637e":function(t){t.exports=JSON.parse('[{"year":2020,"month":9,"day":24,"title":"tesfsadf","isOJA":true,"link":"1234"},{"year":2020,"month":9,"day":10,"title":"Test","isOJA":false,"link":"TestLink1"}]')},6538:function(t,e,n){t.exports=n.p+"img/Pfeil_nach_rechts.442641a0.svg"},"6b4a":function(t,e,n){t.exports=n.p+"img/Ice1.be825e25.jpg"},"7a3e":function(t,e,n){},"836f":function(t,e,n){t.exports=n.p+"img/3_Übergabe.f8d769bc.jpg"},"954a":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"termine"},[a("div",{staticClass:"calendarWrapper"},[a("div",{staticClass:"calendarMonth"},[a("div",{staticClass:"monthPrevious",on:{click:t.previous}},[t._v("<")]),a("div",{staticClass:"monthCurrent"},[t._v(t._s(t.months[t.month])+" "+t._s(t.year))]),a("div",{staticClass:"monthNext",on:{click:t.next}},[t._v(">")])]),a("div",{staticClass:"calendarHead"},t._l(t.days,(function(e,n){return a("div",{key:"month"+Math.random()+n,staticClass:"headDay"},[t._v(" "+t._s(e)+" ")])})),0),a("div",{staticClass:"calendarBody"},t._l(t.visualMonth,(function(e,n){return a("div",{key:"week"+n,staticClass:"bodyWeek"},t._l(e,(function(e,i){return a("div",{key:"day"+i,staticClass:"bodyDay",class:[e.curMonth==t.month?"bodyDayCurrentMonth":"",t.currentDate.getFullYear()==t.year&&t.currentDate.getMonth()==e.curMonth&&t.currentDate.getDate()==e.num?"bodyDayToday":"",t.daySelected.getFullYear()==e.curYear&&t.daySelected.getMonth()==e.curMonth&&t.daySelected.getDate()==e.num?"bodyDaySelected":"",-1!=t.currentEvents[n][i].year?"bodyDayEvent":""],on:{click:function(n){return t.select(e.num,e.curMonth)}}},[t._v(" "+t._s(e.num)+" ")])})),0)})),0),a("div",{staticClass:"row"},[a("div",{staticClass:"oja-button col-6",on:{click:t.showAllOJA}},[t._v(" Alle OJA-Treffen anzeigen ")]),a("div",{staticClass:"oja-button col-6",on:{click:t.showAll}},[t._v(" Alle Termine anzeigen ")])])]),a("div",{staticClass:"eventWrapper"},t._l(t.shownEvents,(function(e,i){return a("div",{key:"event-"+i,staticClass:"event",on:{click:function(n){t.$router.push({name:"termineName",params:{name:e.link}}).catch((function(t){}))}}},[a("img",{staticClass:"eventArrow",attrs:{src:n("6538")}}),a("div",{staticClass:"eventSection"},[a("h2",{staticClass:"eventHeading"},[t._v(t._s(e.day)+". "+t._s(t.months[e.month])+" "+t._s(e.year))]),a("h3",{staticClass:"eventTitle"},[t._v(t._s(e.title))])])])})),0)])},i=[],s=(n("fb6a"),{name:"termines",data:function(){return{year:0,month:0,daySelected:0,currentDate:{},date:{},visualMonth:[],days:["Mo","Di","Mi","Do","Fr","Sa","So"],months:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],events:[],currentEvents:[],shownEvents:[]}},methods:{resetDate:function(){this.date=new Date,this.currentDate=new Date,this.year=this.date.getFullYear(),this.month=this.date.getMonth(),this.daySelected=new Date(this.year,this.month,this.date.getDate()),this.events=n("637e"),this.calculateMonths(),this.calculateAllShownEvents()},calculateMonths:function(){var t=[],e=new Date(this.date.getFullYear(),this.date.getMonth(),1).getDay();e+=6,e%=7;var n=this.date.getMonth()+1,a=this.date.getFullYear();12==n&&(a++,n=0);var i=this.date.getMonth()-1,s=this.date.getFullYear();-1==i&&(i=11,s--);for(var o=new Date(a,n,0).getDate(),r=new Date(this.date.getFullYear(),this.date.getMonth(),0).getDate(),c=0;c<e;c++)t.push({num:r+1-(e-c),curMonth:i,curYear:s});for(var u=0;u<o;u++)t.push({num:u+1,curMonth:this.date.getMonth(),curYear:this.date.getFullYear()});var l=t.length;l%=7,l=7-l,7==l&&(l=0);for(var h=0;h<l;h++)t.push({num:h+1,curMonth:n,curYear:a});this.visualMonth=[[]],this.currentEvents=[[]];for(var d=t.length/7,m=0;m<d;m++){for(var f=[],g=[],v=0;v<7;v++){f.push(t[7*m+v]),g.push({year:-1,month:0,day:0});for(var p=0;p<this.events.length;p++)t[7*m+v].num==this.events[p].day&&t[7*m+v].curMonth==this.events[p].month&&t[7*m+v].curYear==this.events[p].year&&(g[v]=this.events[p])}this.visualMonth.push(f),this.currentEvents.push(g)}this.currentEvents=this.currentEvents.slice(1,this.currentEvents.length),this.visualMonth=this.visualMonth.slice(1,this.visualMonth.length)},previous:function(){0==this.month?this.date=new Date(this.year-1,11):this.date=new Date(this.year,this.month-1),this.year=this.date.getFullYear(),this.month=this.date.getMonth(),this.calculateMonths(),this.calculateAllShownEvents()},next:function(){11==this.month?this.date=new Date(this.year+1,0):this.date=new Date(this.year,this.month+1),this.year=this.date.getFullYear(),this.month=this.date.getMonth(),this.calculateMonths(),this.calculateAllShownEvents()},calculateAllShownEvents:function(){this.shownEvents=[];for(var t=0;t<this.events.length;t++)this.events[t].year==this.year&&this.events[t].month==this.month&&this.shownEvents.push(this.events[t]);this.shownEvents.sort((function(t,e){return parseFloat(t.day)-parseFloat(e.day)}))},calculateShownEvents:function(t){this.shownEvents=[];for(var e=0;e<this.events.length;e++)this.events[e].year==this.daySelected.getFullYear()&&this.events[e].month==this.daySelected.getMonth()&&this.events[e].day==t&&this.shownEvents.push(this.events[e]);window.console.log(this.daySelected.getFullYear())},showAllOJA:function(){for(var t=[],e=0;e<this.events.length;e++)this.events[e].isOJA&&t.push(this.events[e]);t.sort((function(t,e){return parseFloat(t.day)-parseFloat(e.day)})),t.sort((function(t,e){return parseFloat(t.month)-parseFloat(e.month)})),t.sort((function(t,e){return parseFloat(t.year)-parseFloat(e.year)})),this.shownEvents=t},showAll:function(){var t=this.events;t.sort((function(t,e){return parseFloat(t.day)-parseFloat(e.day)})),t.sort((function(t,e){return parseFloat(t.month)-parseFloat(e.month)})),t.sort((function(t,e){return parseFloat(t.year)-parseFloat(e.year)})),this.shownEvents=t,this.allVisible=!0,this.ojaVisible=!1},select:function(t,e){var n=this.date.getFullYear(),a=this.date.getMonth();0==a?11==e&&n--:11==a&&0==e&&n++,this.daySelected=new Date(n,e,t),this.calculateShownEvents(t)}},created:function(){this.resetDate()}}),o=s,r=(n("e915"),n("2877")),c=Object(r["a"])(o,a,i,!1,null,null,null);e["default"]=c.exports},"9c0c":function(t,e,n){},"9e40":function(t,e,n){t.exports=n.p+"img/Logo.be19c16b.svg"},a2f9:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"news"},t._l(t.data.elements,(function(e,i){return a("div",{key:"news-"+i,staticClass:"newsImage-Container",on:{click:function(n){t.$router.push({name:"newsName",params:{name:e.link}}).catch((function(t){}))}}},[a("div",[a("img",{attrs:{src:n("2d25")("./"+e.image)}}),a("div",{staticClass:"overlay"}),a("h3",{staticClass:"newsHeading"},[t._v(t._s(e.heading))]),t._m(0,!0)])])})),0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"newsShowMoreContainer"},[a("span",{staticClass:"newsShowMore"},[t._v("Mehr anzeigen"),a("img",{attrs:{src:n("6538")}})])])}],s={name:"news",data:function(){return{lastSize:1e4,data:{elements:[]}}},methods:{resize:function(){window.innerWidth<992?this.resetHeading():this.lastSize<992&&this.randomizeHeading(),this.lastSize=window.innerWidth},randomizeHeading:function(){for(var t=document.getElementsByClassName("newsHeading"),e=0;e<t.length;e++)t[e].style.top=30*Math.random()+"%"},resetHeading:function(){for(var t=document.getElementsByClassName("newsHeading"),e=0;e<t.length;e++)t[e].style.top="10%"}},created:function(){this.data=n("4140"),requestAnimationFrame(this.randomizeHeading),window.addEventListener("resize",this.resize)},beforeDestroy:function(){window.removeEventListener("resize",this.resize)}},o=s,r=(n("4859"),n("2877")),c=Object(r["a"])(o,a,i,!1,null,null,null);e["default"]=c.exports},a429:function(t,e,n){},c540:function(t,e,n){"use strict";var a=n("d0390"),i=n.n(a);i.a},c574:function(t,e,n){},d0390:function(t,e,n){},e915:function(t,e,n){"use strict";var a=n("c574"),i=n.n(a);i.a},f48d:function(t,e,n){t.exports=n.p+"img/Pfeil_nach_unten.1ed399c0.svg"}});
//# sourceMappingURL=app.98132e2e.js.map