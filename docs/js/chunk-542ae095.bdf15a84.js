(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-542ae095"],{"159b":function(t,e,a){var i=a("da84"),s=a("fdbc"),n=a("17c2"),o=a("9112");for(var r in s){var c=i[r],d=c&&c.prototype;if(d&&d.forEach!==n)try{o(d,"forEach",n)}catch(l){d.forEach=n}}},"17c2":function(t,e,a){"use strict";var i=a("b727").forEach,s=a("a640"),n=a("ae40"),o=s("forEach"),r=n("forEach");t.exports=o&&r?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"234a":function(t){t.exports=JSON.parse('{"texts":["Du bist ein junges und engagiertes Mitglied bei der IG Metall? Momentan bist du in unserem wundervollen Bildungszentrum der IG Metall am Schliersee in einer der Seminarpausen und musst als Teamer etwas vorbereiten oder willst Dir schlichtweg die Zeit vertreiben? Wir geben Dir was auf die Ohren...","Hier ein paar Tipps von uns zum Zeit vertreiben – hör‘ unseren Podcast!"],"podcasts":[{"title":"Radiobeitrag ,Aktion Respekt!\'","text":"Hier geht\'s zum Radiobeitrag.","link":"radiobeitrag"}]}')},"346da":function(t,e,a){},4160:function(t,e,a){"use strict";var i=a("23e7"),s=a("17c2");i({target:"Array",proto:!0,forced:[].forEach!=s},{forEach:s})},"607f":function(t,e,a){"use strict";var i=a("346da"),s=a.n(i);s.a},"65f0":function(t,e,a){var i=a("861d"),s=a("e8b5"),n=a("b622"),o=n("species");t.exports=function(t,e){var a;return s(t)&&(a=t.constructor,"function"!=typeof a||a!==Array&&!s(a.prototype)?i(a)&&(a=a[o],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===e?0:e)}},"857a":function(t,e,a){var i=a("1d80"),s=/"/g;t.exports=function(t,e,a,n){var o=String(i(t)),r="<"+e;return""!==a&&(r+=" "+a+'="'+String(n).replace(s,"&quot;")+'"'),r+">"+o+"</"+e+">"}},9911:function(t,e,a){"use strict";var i=a("23e7"),s=a("857a"),n=a("af03");i({target:"String",proto:!0,forced:n("link")},{link:function(t){return s(this,"a","href",t)}})},a434:function(t,e,a){"use strict";var i=a("23e7"),s=a("23cb"),n=a("a691"),o=a("50c4"),r=a("7b0b"),c=a("65f0"),d=a("8418"),l=a("1dde"),u=a("ae40"),f=l("splice"),p=u("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,v=Math.min,m=9007199254740991,g="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!f||!p},{splice:function(t,e){var a,i,l,u,f,p,x=r(this),C=o(x.length),S=s(t,C),k=arguments.length;if(0===k?a=i=0:1===k?(a=0,i=C-S):(a=k-2,i=v(h(n(e),0),C-S)),C+a-i>m)throw TypeError(g);for(l=c(x,i),u=0;u<i;u++)f=S+u,f in x&&d(l,u,x[f]);if(l.length=i,a<i){for(u=S;u<C-i;u++)f=u+i,p=u+a,f in x?x[p]=x[f]:delete x[p];for(u=C;u>C-i+a;u--)delete x[u-1]}else if(a>i)for(u=C-i;u>S;u--)f=u+i-1,p=u+a-1,f in x?x[p]=x[f]:delete x[p];for(u=0;u<a;u++)x[u+S]=arguments[u+2];return x.length=C-i+a,l}})},a640:function(t,e,a){"use strict";var i=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&i((function(){a.call(null,e||function(){throw 1},1)}))}},af03:function(t,e,a){var i=a("d039");t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b727:function(t,e,a){var i=a("0366"),s=a("44ad"),n=a("7b0b"),o=a("50c4"),r=a("65f0"),c=[].push,d=function(t){var e=1==t,a=2==t,d=3==t,l=4==t,u=6==t,f=5==t||u;return function(p,h,v,m){for(var g,x,C=n(p),S=s(C),k=i(h,v,3),w=o(S.length),b=0,E=m||r,L=e?E(p,w):a?E(p,0):void 0;w>b;b++)if((f||b in S)&&(g=S[b],x=k(g,b,C),t))if(e)L[b]=x;else if(x)switch(t){case 3:return!0;case 5:return g;case 6:return b;case 2:c.call(L,g)}else if(l)return!1;return u?-1:d||l?l:L}};t.exports={forEach:d(0),map:d(1),filter:d(2),some:d(3),every:d(4),find:d(5),findIndex:d(6)}},b877:function(t){t.exports=JSON.parse('[{"title":"Radiobeitrag","link":"radiobeitrag","descriptions":[],"audios":["Rassismus Schilder 1.mp3","Rassismus Schilder 2.mp3"]}]')},ee03:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"podcastsEditor"},[t._m(0),a("div",{staticClass:"podcastsEditorTextWrapper"},[a("div",{staticClass:"podcastsEditorTextContainer"},[t._l(t.data.texts,(function(e,i){return a("div",{key:"kontakt-text-"+i,staticClass:"podcastsEditorText"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data.texts[i],expression:"data.texts[index]"}],staticClass:"col-12",domProps:{value:t.data.texts[i]},on:{input:function(e){e.target.composing||t.$set(t.data.texts,i,e.target.value)}}}),a("div",{staticClass:"switches"},[a("a",{staticClass:"switch",on:{click:function(e){return t.moveMainDown(i)}}},[t._v("<")]),a("a",{staticClass:"switch center",on:{click:function(e){return t.deleteMainSection(i)}}},[t._v("Section Löschen")]),a("a",{staticClass:"switch right",on:{click:function(e){return t.moveMainUp(i)}}},[t._v(">")])])])})),a("div",{staticClass:"createButton col-6",on:{click:t.createMainSection}},[t._v(" Section hinzufügen ")])],2)]),a("div",{staticClass:"podcastsEditorContainer row"},[t._l(t.data.podcasts,(function(e,i){return a("div",{key:"podcast-"+i,staticClass:"col podcastsEditorOverview"},[a("div",{staticClass:"col-12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.podcasts[i].title,expression:"data.podcasts[index].title"}],staticClass:"col-12 heading",attrs:{placeholder:"Title"},domProps:{value:t.data.podcasts[i].title},on:{input:function(e){e.target.composing||t.$set(t.data.podcasts[i],"title",e.target.value)}}})]),a("div",{staticClass:"col-12"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data.podcasts[i].text,expression:"data.podcasts[index].text"}],staticClass:"col-12",attrs:{placeholder:"Beschreibung"},domProps:{value:t.data.podcasts[i].text},on:{input:function(e){e.target.composing||t.$set(t.data.podcasts[i],"text",e.target.value)}}})]),a("div",{staticClass:"col-12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.podcasts[i].link,expression:"data.podcasts[index].link"}],staticClass:"col-12 heading",attrs:{placeholder:"link"},domProps:{value:t.data.podcasts[i].link},on:{input:function(e){e.target.composing||t.$set(t.data.podcasts[i],"link",e.target.value)}}})]),a("div",{staticClass:"switches"},[a("a",{staticClass:"switch",on:{click:function(e){return t.moveDown(i)}}},[t._v("<")]),a("a",{staticClass:"switch center",on:{click:function(e){return t.deleteSection(i)}}},[t._v("Section Löschen")]),a("a",{staticClass:"switch right",on:{click:function(e){return t.moveUp(i)}}},[t._v(">")])]),a("div",{staticClass:"createButton col-6",on:{click:function(a){t.$router.push({name:"editor-podcast",params:{name:e.link}}).catch((function(t){}))}}},[t._v(" Link folgen ")])])})),a("div",{staticClass:"createButton col-6",on:{click:t.createSection}},[t._v(" Section hinzufügen ")])],2),a("div",{staticClass:"podcastsEditorContainer row"},[a("textarea",{staticClass:"jsonContainer",attrs:{id:"finishedJson"}}),a("div",{staticClass:"createButton col-6",on:{click:t.createJson}},[t._v(" Json generieren ")]),a("div",{staticClass:"col-12"},t._l(t.existingRoutes,(function(e,i){return a("p",{key:"existingRoutes-"+i},[t._v(" "+t._s(e.title)+" --- "+t._s(e.link)+" ")])})),0)])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"podcastsEditorHeadingContainer"},[a("h1",{staticClass:"podcastsEditorHeading"},[t._v("Podcasts Editor")])])}],n=(a("4160"),a("fb6a"),a("a434"),a("9911"),a("159b"),{name:"podcasts",data:function(){return{data:{texts:[],podcasts:[{title:"",text:"",link:""}]},existingRoutes:[]}},methods:{moveMainUp:function(t){var e=this;if(t<this.data.texts.length-1){var a=this.data.texts.slice(0);a[t+1]=a[t],a[t]=this.data.texts[t+1],this.data.texts=[],a.forEach((function(t){e.data.texts.push(t)}))}},moveMainDown:function(t){var e=this;if(t>0){var a=this.data.texts.slice(0);a[t-1]=a[t],a[t]=this.data.texts[t-1],this.data.texts=[],a.forEach((function(t){e.data.texts.push(t)}))}},deleteMainSection:function(t){this.data.texts.splice(t,1)},createMainSection:function(){var t="";this.data.texts.push(t)},moveUp:function(t){var e=this;if(t<this.data.podcasts.length-1){var a=this.data.podcasts.slice(0);a[t+1]=a[t],a[t]=this.data.podcasts[t+1],this.data.podcasts=[],a.forEach((function(t){e.data.podcasts.push(t)}))}},moveDown:function(t){var e=this;if(t>0){var a=this.data.podcasts.slice(0);a[t-1]=a[t],a[t]=this.data.podcasts[t-1],this.data.podcasts=[],a.forEach((function(t){e.data.podcasts.push(t)}))}},deleteSection:function(t){this.data.podcasts.splice(t,1)},createSection:function(){var t={title:"",text:"",link:""};this.data.podcasts.push(t)},createJson:function(){var t=document.getElementById("finishedJson"),e=JSON.stringify(this.data);t.value=e,t.select(),document.execCommand("copy")}},created:function(){this.data=a("234a");for(var t=a("b877"),e=[],i=0;i!=t.length;++i){var s={link:t[i].link,title:t[i].title};e.push(s)}this.existingRoutes=e}}),o=n,r=(a("607f"),a("2877")),c=Object(r["a"])(o,i,s,!1,null,null,null);e["default"]=c.exports},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-542ae095.bdf15a84.js.map