(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1070cf09"],{"0e62":function(t){t.exports=JSON.parse('{"texts":["Immer unter dem Motto: „Don’t hesitate to say hello!“.","Falls ihr Fragen, Anliegen, Anregungen, Wünsche habt, dann könnt ihr uns jederzeit via Facebook und Instagram eine Nachricht zukommen lassen.","Ansonsten besteht die Möglichkeit unseren Jugendsekretär Patrick telefonisch unter +49 (0) 176 20424016, via Mail unter Patrick.Grabanyi@igmetall.de oder einfach im Nachrichtenfeld per mailto link zu kontaktieren. Die Geschäftsstelle der IG Metall Weilheim ist per Mail unter weilheim@igmetall.de oder unter Berücksichtigung der Öffnungszeiten persönlich zu erreichen."],"email":"quirinbrunner@t-online.de"}')},"159b":function(t,e,i){var a=i("da84"),n=i("fdbc"),r=i("17c2"),s=i("9112");for(var o in n){var c=a[o],l=c&&c.prototype;if(l&&l.forEach!==r)try{s(l,"forEach",r)}catch(u){l.forEach=r}}},"17c2":function(t,e,i){"use strict";var a=i("b727").forEach,n=i("a640"),r=i("ae40"),s=n("forEach"),o=r("forEach");t.exports=s&&o?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"27e3":function(t,e,i){},4160:function(t,e,i){"use strict";var a=i("23e7"),n=i("17c2");a({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},"65f0":function(t,e,i){var a=i("861d"),n=i("e8b5"),r=i("b622"),s=r("species");t.exports=function(t,e){var i;return n(t)&&(i=t.constructor,"function"!=typeof i||i!==Array&&!n(i.prototype)?a(i)&&(i=i[s],null===i&&(i=void 0)):i=void 0),new(void 0===i?Array:i)(0===e?0:e)}},"753c":function(t,e,i){"use strict";var a=i("27e3"),n=i.n(a);n.a},a434:function(t,e,i){"use strict";var a=i("23e7"),n=i("23cb"),r=i("a691"),s=i("50c4"),o=i("7b0b"),c=i("65f0"),l=i("8418"),u=i("1dde"),d=i("ae40"),f=u("splice"),h=d("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,m=Math.min,p=9007199254740991,k="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!f||!h},{splice:function(t,e){var i,a,u,d,f,h,g=o(this),x=s(g.length),S=n(t,x),C=arguments.length;if(0===C?i=a=0:1===C?(i=0,a=x-S):(i=C-2,a=m(v(r(e),0),x-S)),x+i-a>p)throw TypeError(k);for(u=c(g,a),d=0;d<a;d++)f=S+d,f in g&&l(u,d,g[f]);if(u.length=a,i<a){for(d=S;d<x-a;d++)f=d+a,h=d+i,f in g?g[h]=g[f]:delete g[h];for(d=x;d>x-a+i;d--)delete g[d-1]}else if(i>a)for(d=x-a;d>S;d--)f=d+a-1,h=d+i-1,f in g?g[h]=g[f]:delete g[h];for(d=0;d<i;d++)g[d+S]=arguments[d+2];return g.length=x-a+i,u}})},a479:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"kontaktEditor"},[t._m(0),i("div",{staticClass:"kontaktEditorFormContainer"},[i("div",{staticClass:"kontaktEditorTextContainer"},t._l(t.data.texts,(function(e,a){return i("div",{key:"kontaktEditor-text-"+a,staticClass:"kontaktEditorText"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data.texts[a],expression:"data.texts[index]"}],staticClass:"col-12",domProps:{value:t.data.texts[a]},on:{input:function(e){e.target.composing||t.$set(t.data.texts,a,e.target.value)}}}),i("div",{staticClass:"switches"},[i("a",{staticClass:"switch",on:{click:function(e){return t.moveDown(a)}}},[t._v("<")]),i("a",{staticClass:"switch center",on:{click:function(e){return t.deleteSection(a)}}},[t._v("Section Löschen")]),i("a",{staticClass:"switch right",on:{click:function(e){return t.moveUp(a)}}},[t._v(">")])])])})),0),i("div",{staticClass:"kontaktEditorTextContainer"},[i("div",{staticClass:"kontaktEditorText"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.data.email,expression:"data.email"}],staticClass:"col-12",domProps:{value:t.data.email},on:{input:function(e){e.target.composing||t.$set(t.data,"email",e.target.value)}}})])]),i("div",{staticClass:"row"},[i("div",{staticClass:"createButton col-6",on:{click:t.createSection}},[t._v(" Section hinzufügen ")]),i("div",{staticClass:"createButton col-6",on:{click:t.createJson}},[t._v(" Json generieren ")])])])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"kontaktEditorHeadingContainer"},[i("h1",{staticClass:"kontaktEditorHeading"},[t._v("kontaktEditor")])])}],r=(i("4160"),i("fb6a"),i("a434"),i("159b"),{name:"kontaktEditor",data:function(){return{data:{texts:[],email:""}}},methods:{moveUp:function(t){var e=this;if(t<this.data.texts.length-1){var i=this.data.texts.slice(0);i[t+1]=i[t],i[t]=this.data.texts[t+1],this.data.texts=[],i.forEach((function(t){e.data.texts.push(t)}))}},moveDown:function(t){var e=this;if(t>0){var i=this.data.texts.slice(0);i[t-1]=i[t],i[t]=this.data.texts[t-1],this.data.texts=[],i.forEach((function(t){e.data.texts.push(t)}))}},deleteSection:function(t){this.data.texts.splice(t,1)},createSection:function(){var t="";this.data.texts.push(t)},createJson:function(){var t=JSON.stringify(this.data);window.console.log(t)}},created:function(){this.data=i("0e62")}}),s=r,o=(i("753c"),i("2877")),c=Object(o["a"])(s,a,n,!1,null,null,null);e["default"]=c.exports},a640:function(t,e,i){"use strict";var a=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&a((function(){i.call(null,e||function(){throw 1},1)}))}},b727:function(t,e,i){var a=i("0366"),n=i("44ad"),r=i("7b0b"),s=i("50c4"),o=i("65f0"),c=[].push,l=function(t){var e=1==t,i=2==t,l=3==t,u=4==t,d=6==t,f=5==t||d;return function(h,v,m,p){for(var k,g,x=r(h),S=n(x),C=a(v,m,3),E=s(S.length),L=0,b=p||o,w=e?b(h,E):i?b(h,0):void 0;E>L;L++)if((f||L in S)&&(k=S[L],g=C(k,L,x),t))if(e)w[L]=g;else if(g)switch(t){case 3:return!0;case 5:return k;case 6:return L;case 2:c.call(w,k)}else if(u)return!1;return d?-1:l||u?u:w}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-1070cf09.cbac58ce.js.map