(function(t){function e(e){for(var a,i,r=e[0],c=e[1],l=e[2],u=0,d=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);h&&h(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var r=n[i];0!==s[r]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},i={app:0},s={app:0},o=[];function r(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-028d1c14":"814faa92","chunk-6d3fd33d":"dbddcabd","chunk-c22a313c":"1f5efa96"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-028d1c14":1,"chunk-6d3fd33d":1,"chunk-c22a313c":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-028d1c14":"4284158e","chunk-6d3fd33d":"05d6fce8","chunk-c22a313c":"d518c87b"}[t]+".css",s=c.p+a,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var l=o[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===s))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){l=d[r],u=l.getAttribute("data-href");if(u===a||u===s)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var a=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete i[t],h.parentNode.removeChild(h),n(o)},h.href=s;var v=document.getElementsByTagName("head")[0];v.appendChild(h)})).then((function(){i[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=r(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(h);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}s[t]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/OJA/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var h=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"106e":function(t,e,n){},"195e":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"aktionen"},[a("div",{staticClass:"aktionenImage-Container",on:{click:function(e){return t.$router.push({name:"aktionenName",params:{name:"oja-treffen"}})}}},[t._m(0)]),a("div",{staticClass:"aktionenImage-Container",on:{click:function(e){return t.$router.push({name:"aktionenName",params:{name:"respekt"}})}}},[a("img",{attrs:{src:n("4110")}}),a("div",{staticClass:"overlay"}),a("h3",{staticClass:"aktionenHeading"},[t._v("Aktion Respekt")]),t._m(1)]),a("div",{staticClass:"aktionenImage-Container",on:{click:function(e){return t.$router.push({name:"aktionenName",params:{name:"azubi-bowling"}})}}},[a("img",{attrs:{src:n("bf1a")}}),a("div",{staticClass:"overlay"}),a("h3",{staticClass:"aktionenHeading"},[t._v("Azubi bowling")]),t._m(2)])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("img",{attrs:{src:n("413c")}}),a("div",{staticClass:"overlay"}),a("h3",{staticClass:"aktionenHeading"},[t._v("OJA Treffen 16.03")]),a("div",{staticClass:"aktionenShowMoreContainer"},[a("span",{staticClass:"aktionenShowMore"},[t._v("Mehr anzeigen"),a("img",{attrs:{src:n("6538")}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"aktionenShowMoreContainer"},[a("span",{staticClass:"aktionenShowMore"},[t._v("Mehr anzeigen"),a("img",{attrs:{src:n("6538")}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"aktionenShowMoreContainer"},[a("span",{staticClass:"aktionenShowMore"},[t._v("Mehr anzeigen"),a("img",{attrs:{src:n("6538")}})])])}],s={name:"aktionen",data:function(){return{lastSize:1e4}},methods:{resize:function(){window.innerWidth<992?this.resetHeading():this.lastSize<992&&this.randomizeHeading(),this.lastSize=window.innerWidth},randomizeHeading:function(){for(var t=document.getElementsByClassName("aktionenHeading"),e=0;e<t.length;e++)t[e].style.top=30*Math.random()+"%"},resetHeading:function(){for(var t=document.getElementsByClassName("aktionenHeading"),e=0;e<t.length;e++)t[e].style.top="10%"}},created:function(){requestAnimationFrame(this.randomizeHeading),window.addEventListener("resize",this.resize)},beforeDestroy:function(){window.removeEventListener("resize",this.resize)}},o=s,r=(n("b522"),n("2877")),c=Object(r["a"])(o,a,i,!1,null,null,null);e["default"]=c.exports},"21bb":function(t,e,n){"use strict";var a=n("2dad"),i=n.n(a);i.a},"2dad":function(t,e,n){},4110:function(t,e,n){t.exports=n.p+"img/Ice1.be825e25.jpg"},"413c":function(t,e,n){t.exports=n.p+"img/Ice.87348a87.jpg"},5572:function(t,e,n){"use strict";var a=n("a2d2"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"page-content"},[n("router-view",{staticClass:"fading"})],1),n("Footer"),n("Navbar")],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"menu-icon-bar row no-gutters"},[a("div",{staticClass:"menu-icon col-auto",on:{click:function(e){t.toggleNavigation(),t.toggleLogoVisability()}}},[a("div"),a("div"),a("div")])]),a("div",{staticClass:"navigation",attrs:{id:"navigation"}},[a("div",{staticClass:"left"},[a("span",{staticClass:"close-button",on:{click:t.toggleNavigation}},[t._v("×")]),a("span",{staticClass:"linkNaviWrapper",attrs:{id:"aktionen"}},[a("a",{staticClass:"linkNavi",on:{click:function(e){t.$router.push({name:"aktionen"}),t.toggleNavigation()}}},[t._v("Aktionen")])]),a("span",{staticClass:"linkNaviWrapper",attrs:{id:"kalender"}},[a("a",{staticClass:"linkNavi",on:{click:function(e){t.$router.push({name:"kalender"}),t.toggleNavigation()}}},[t._v("Kalender")])])]),a("div",{staticClass:"right"},[a("span",{staticClass:"linkNaviWrapper",attrs:{id:"podcasts"}},[a("a",{staticClass:"linkNavi",on:{click:function(e){t.$router.push({name:"podcasts"}),t.toggleNavigation()}}},[t._v("Podcasts")])]),a("span",{staticClass:"linkNaviWrapper",attrs:{id:"kontakt"}},[a("a",{staticClass:"linkNavi",on:{click:function(e){t.$router.push({name:"kontakt"}),t.toggleNavigation()}}},[t._v("Kontakt")])])])]),a("div",{staticClass:"logo",style:[t.logoBackground?{"z-index":0}:{"z-index":2}],attrs:{id:"logo"},on:{click:function(e){return t.$router.push({name:"home"})}}},[a("img",{attrs:{src:n("a51d")}})])])},r=[],c=(n("b0c0"),{name:"Navbar",data:function(){return{logoBackground:!0}},methods:{toggleNavigation:function(){document.getElementById("navigation").classList.toggle("expanded"),this.toggleLogoVisability},toggleLogoVisability:function(){document.getElementById("navigation").classList.contains("expanded")&&window.innerWidth<768?this.logoBackground=!0:this.logoBackground=!1},resize:function(){this.toggleLogoVisability()}},watch:{$route:function(t){var e={};e="aktionenName"===t.name?document.getElementById("aktionen"):document.getElementById(t.name);for(var n=document.getElementsByClassName("linkNaviWrapper"),a=0;a<n.length;a++)n[a].classList.contains("active")&&n[a].classList.toggle("active");"home"!=t.name&&e.classList.toggle("active")}},created:function(){window.addEventListener("resize",this.resize),requestAnimationFrame(this.toggleLogoVisability)},beforeDestroy:function(){window.removeEventListener("resize",this.resize)}}),l=c,u=(n("cb2b"),n("2877")),d=Object(u["a"])(l,o,r,!1,null,"c976d456",null),h=d.exports,v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer row no-gutters"},[n("div",{staticClass:"col"}),n("div",{staticClass:"right col-auto"},[n("span",{staticClass:"link"},[t._v("Impressum")]),n("span",{staticClass:"link"},[t._v("Datenschutz")])])])}],m={name:"Navbar"},f=m,p=(n("f0b1"),Object(u["a"])(f,v,g,!1,null,"7ca6416a",null)),y=p.exports,w={name:"home",components:{Navbar:h,Footer:y}},k=w,b=(n("5c0b"),Object(u["a"])(k,i,s,!1,null,null,null)),C=b.exports,_=(n("d3b7"),n("8c4f")),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.showLanding?a("div",{staticClass:"landing",attrs:{id:"landing"}},[a("img",{staticClass:"arrowBottom",attrs:{id:"arrowBottom",src:n("f48d")}})]):t._e(),a("div",{staticClass:"content"},[a("kalender"),a("aktionen")],1)])},M=[],L=n("195e"),D=n("9c5f"),N={name:"Home",components:{aktionen:L["default"],kalender:D["default"]},data:function(){return{id:0,showLanding:!0}},methods:{animate:function(){this.resizeLogo(),this.toggleNaviActive(),this.positionSlogan(),this.id=requestAnimationFrame(this.animate)},resizeLogo:function(){var t=document.getElementById("logo");t&&(window.pageYOffset<=.4*(window.innerHeight-60)&&window.innerHeight>400?(t.style.top=.4*window.innerHeight-window.pageYOffset+"px",t.style.transform="translate(-50%, 0%) scale("+(.0114*window.innerWidth+3.2)*(1/(.0114*window.innerWidth+3.2)+(.4*(window.innerHeight-60)-window.pageYOffset)/(window.innerHeight-60))+")",this.showLanding=!0):(t.style.transform="scale(1) translate(-50%, 50%)",t.style.top="0px",window.innerHeight<=400?this.showLanding=!1:this.showLanding=!0))},resetLogo:function(){var t=document.getElementById("logo");t.style.transform="scale(1) translate(-50%, 50%)",t.style.top="0px"},positionSlogan:function(){var t=document.getElementById("logo"),e=(.0114*window.innerWidth+3.2)*(1/(.0114*window.innerWidth+3.2)+.4*(window.innerHeight-60)/(window.innerHeight-60)),n=.4*window.innerHeight,a=t.clientHeight*e*.5+n+25-60-20,i=document.getElementById("slogan");i&&(i.style.paddingTop=a+"px")},toggleNaviActive:function(){var t=document.getElementById("aktionen"),e=document.getElementById("kalender");window.pageYOffset>document.getElementsByClassName("kalender")[0].getBoundingClientRect().bottom?(t.classList.contains("active")||t.classList.toggle("active"),e.classList.contains("active")&&e.classList.toggle("active")):window.pageYOffset>0?(e.classList.contains("active")||e.classList.toggle("active"),t.classList.contains("active")&&t.classList.toggle("active")):(t.classList.contains("active")&&t.classList.toggle("active"),e.classList.contains("active")&&e.classList.toggle("active"))}},created:function(){this.id=requestAnimationFrame(this.animate)},beforeDestroy:function(){cancelAnimationFrame(this.id),requestAnimationFrame(this.resetLogo)}},S=N,x=(n("21bb"),Object(u["a"])(S,E,M,!1,null,null,null)),A=x.exports;a["a"].use(_["a"]);var z=[{path:"/",name:"home",component:A},{path:"/kontakt",name:"kontakt",component:function(){return n.e("chunk-028d1c14").then(n.bind(null,"8fad"))}},{path:"/kalender",name:"kalender",component:function(){return Promise.resolve().then(n.bind(null,"9c5f"))}},{path:"/podcasts",name:"podcasts",component:function(){return n.e("chunk-6d3fd33d").then(n.bind(null,"2459"))}},{path:"/aktionen",name:"aktionen",component:function(){return Promise.resolve().then(n.bind(null,"195e"))}},{path:"/aktionen/:name",name:"aktionenName",component:function(){return n.e("chunk-c22a313c").then(n.bind(null,"0d77"))}}],B=new _["a"]({mode:"history",base:"/OJA/",routes:z,scrollBehavior:function(){return{x:0,y:0}}}),O=B,F=n("2f62");a["a"].use(F["a"]);var H=new F["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:O,store:H,render:function(t){return t(C)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),i=n.n(a);i.a},6538:function(t,e,n){t.exports=n.p+"img/Pfeil_nach_rechts.2e119268.svg"},"6bae":function(t,e,n){},"8c37":function(t,e,n){},"9c0c":function(t,e,n){},"9c5f":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"kalender"},[a("div",{staticClass:"calendarWrapper"},[a("div",{staticClass:"calendarMonth"},[a("div",{staticClass:"monthPrevious",on:{click:t.previous}},[t._v("<")]),a("div",{staticClass:"monthCurrent"},[t._v(t._s(t.months[t.month])+" "+t._s(t.year))]),a("div",{staticClass:"monthNext",on:{click:t.next}},[t._v(">")])]),a("div",{staticClass:"calendarHead"},t._l(t.days,(function(e,n){return a("div",{key:"month"+Math.random()+n,staticClass:"headDay"},[t._v(" "+t._s(e)+" ")])})),0),a("div",{staticClass:"calendarBody"},t._l(t.visualMonth,(function(e,n){return a("div",{key:"week"+n,staticClass:"bodyWeek"},t._l(e,(function(e,i){return a("div",{key:"day"+i,staticClass:"bodyDay",class:[e.curMonth==t.month?"bodyDayCurrentMonth":"",t.currentDate.getFullYear()==t.year&&t.currentDate.getMonth()==t.month&&t.currentDate.getDate()==e.num?"bodyDayToday":"",t.daySelected.getFullYear()==e.curYear&&t.daySelected.getMonth()==e.curMonth&&t.daySelected.getDate()==e.num?"bodyDaySelected":"",-1!=t.currentEvents[n][i].year?"bodyDayEvent":""],on:{click:function(n){return t.select(e.num,e.curMonth)}}},[t._v(" "+t._s(e.num)+" ")])})),0)})),0)]),a("div",{staticClass:"eventWrapper"},t._l(t.shownEvents,(function(e,i){return a("div",{key:"event-"+i,staticClass:"event"},[a("img",{staticClass:"eventArrow",attrs:{src:n("6538")}}),a("div",{staticClass:"eventSection"},[a("h2",{staticClass:"eventHeading"},[t._v(t._s(e.day)+". "+t._s(t.months[e.month])+" "+t._s(e.year))]),a("h3",{staticClass:"eventTitle"},[t._v(t._s(e.title))])])])})),0)])},i=[],s=(n("fb6a"),{name:"aktionen",data:function(){return{year:0,month:0,daySelected:0,currentDate:{},date:{},visualMonth:[],days:["Mo","Di","Mi","Do","Fr","Sa","So"],months:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],events:[{year:2020,month:2,day:22,title:"Birthday",link:"asdf"},{year:2020,month:2,day:31,title:"End of the Month",link:"asdf"},{year:2020,month:2,day:31,title:"End",link:"asdf"},{year:2019,month:8,day:31,title:"End of the Month",link:"asdf"},{year:2020,month:2,day:2,title:"End of the Month",link:"asdf"}],currentEvents:[],shownEvents:[],showAll:!0}},methods:{resetDate:function(){this.date=new Date,this.currentDate=new Date,this.year=this.date.getFullYear(),this.month=this.date.getMonth(),this.daySelected=new Date(this.year,this.month,this.date.getDate()),this.calculateMonths(),this.showAll=!0,this.calculateShownEvents()},calculateMonths:function(){var t=[],e=new Date(this.date.getFullYear(),this.date.getMonth(),1).getDay();e+=6,e%=7;var n=this.date.getMonth()+1,a=this.date.getFullYear();12==n&&(a++,n=0);var i=this.date.getMonth()-1,s=this.date.getFullYear();-1==i&&(i=11,s--);for(var o=new Date(a,n,0).getDate(),r=new Date(this.date.getFullYear(),this.date.getMonth(),0).getDate(),c=0;c<e;c++)t.push({num:r+1-(e-c),curMonth:i,curYear:s});for(var l=0;l<o;l++)t.push({num:l+1,curMonth:this.date.getMonth(),curYear:this.date.getFullYear()});var u=t.length;u%=7,u=7-u,7==u&&(u=0);for(var d=0;d<u;d++)t.push({num:d+1,curMonth:n,curYear:a});this.visualMonth=[[]],this.currentEvents=[[]];for(var h=t.length/7,v=0;v<h;v++){for(var g=[],m=[],f=0;f<7;f++){g.push(t[7*v+f]),m.push({year:-1,month:0,day:0});for(var p=0;p<this.events.length;p++)t[7*v+f].num==this.events[p].day&&t[7*v+f].curMonth==this.events[p].month&&t[7*v+f].curYear==this.events[p].year&&(m[f]=this.events[p])}this.visualMonth.push(g),this.currentEvents.push(m)}this.currentEvents=this.currentEvents.slice(1,this.currentEvents.length),this.visualMonth=this.visualMonth.slice(1,this.visualMonth.length)},previous:function(){0==this.month?this.date=new Date(this.year-1,11):this.date=new Date(this.year,this.month-1),this.year=this.date.getFullYear(),this.month=this.date.getMonth(),this.calculateMonths(),this.showAll=!0,this.calculateShownEvents()},next:function(){11==this.month?this.date=new Date(this.year+1,0):this.date=new Date(this.year,this.month+1),this.year=this.date.getFullYear(),this.month=this.date.getMonth(),this.calculateMonths(),this.showAll=!0,this.calculateShownEvents()},calculateShownEvents:function(t){if(this.showAll){this.shownEvents=[];for(var e=0;e<this.events.length;e++)this.events[e].year==this.year&&this.events[e].month==this.month&&this.shownEvents.push(this.events[e]);this.shownEvents.sort((function(t,e){return parseFloat(t.day)-parseFloat(e.day)}))}else{this.shownEvents=[];for(var n=0;n<this.events.length;n++)this.events[n].month==this.daySelected.getMonth()&&this.events[n].day==t&&this.shownEvents.push(this.events[n])}},select:function(t,e){var n=this.date.getFullYear(),a=this.date.getMonth();0==a?11==e&&n--:11==a&&0==e&&n++,this.daySelected=new Date(n,e,t),this.showAll=!1,this.calculateShownEvents(t,a)}},created:function(){this.resetDate()}}),o=s,r=(n("5572"),n("2877")),c=Object(r["a"])(o,a,i,!1,null,null,null);e["default"]=c.exports},a2d2:function(t,e,n){},a51d:function(t,e,n){t.exports=n.p+"img/mainPageWhite.bc1907c7.png"},b522:function(t,e,n){"use strict";var a=n("6bae"),i=n.n(a);i.a},bf1a:function(t,e,n){t.exports=n.p+"img/Ice2.131d2508.jpg"},cb2b:function(t,e,n){"use strict";var a=n("8c37"),i=n.n(a);i.a},f0b1:function(t,e,n){"use strict";var a=n("106e"),i=n.n(a);i.a},f48d:function(t,e,n){t.exports=n.p+"img/Pfeil_nach_unten.4814952a.svg"}});
//# sourceMappingURL=app.cc204915.js.map