(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e2e321f"],{"070c":function(t,e,i){},"159b":function(t,e,i){var n=i("da84"),s=i("fdbc"),a=i("17c2"),o=i("9112");for(var r in s){var c=n[r],u=c&&c.prototype;if(u&&u.forEach!==a)try{o(u,"forEach",a)}catch(l){u.forEach=a}}},"17c2":function(t,e,i){"use strict";var n=i("b727").forEach,s=i("a640"),a=i("ae40"),o=s("forEach"),r=a("forEach");t.exports=o&&r?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},1956:function(t,e,i){"use strict";var n=i("070c"),s=i.n(n);s.a},"364d":function(t){t.exports=JSON.parse('"[{\\"heading\\":\\"Datenschutz\\",\\"text\\":\\"This is a test paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\\"},{\\"heading\\":\\"This is a test heading\\",\\"text\\":\\"This is a test paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\\"}]"')},4160:function(t,e,i){"use strict";var n=i("23e7"),s=i("17c2");n({target:"Array",proto:!0,forced:[].forEach!=s},{forEach:s})},"65f0":function(t,e,i){var n=i("861d"),s=i("e8b5"),a=i("b622"),o=a("species");t.exports=function(t,e){var i;return s(t)&&(i=t.constructor,"function"!=typeof i||i!==Array&&!s(i.prototype)?n(i)&&(i=i[o],null===i&&(i=void 0)):i=void 0),new(void 0===i?Array:i)(0===e?0:e)}},"957c":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rechtliches"},[i("div",{staticClass:"rechtlichesWrapper"},[t._l(t.sections,(function(e,n){return i("div",{key:"rechtliches"+n,staticClass:"rechtlichesSection"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.heading,expression:"section.heading"}],staticClass:"heading",domProps:{value:e.heading},on:{input:function(i){i.target.composing||t.$set(e,"heading",i.target.value)}}}),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"section.text"}],domProps:{value:e.text},on:{input:function(i){i.target.composing||t.$set(e,"text",i.target.value)}}}),i("div",{staticClass:"switches"},[i("a",{staticClass:"switch",on:{click:function(e){return t.moveDown(n)}}},[t._v("<")]),i("a",{staticClass:"switch center",on:{click:function(e){return t.deleteSection(n)}}},[t._v("Section Löschen")]),i("a",{staticClass:"switch right",on:{click:function(e){return t.moveUp(n)}}},[t._v(">")])])])})),i("div",{staticClass:"row"},[i("div",{staticClass:"createButton col-6",on:{click:t.createJson}},[t._v(" Json generieren ")]),i("div",{staticClass:"createButton col-6",on:{click:t.createSection}},[t._v(" Section hinzufügen ")])]),i("textarea",{attrs:{id:"finishedJson"}})],2)])},s=[],a=(i("4160"),i("fb6a"),i("a434"),i("b0c0"),i("159b"),{name:"rechtliches",data:function(){return{sections:[]}},methods:{createJson:function(){var t=document.getElementById("finishedJson"),e=JSON.stringify(this.sections);t.value=JSON.stringify(e),t.select(),document.execCommand("copy")},moveUp:function(t){var e=this;if(t<this.sections.length-1){var i=this.sections.slice(0);i[t+1]=i[t],i[t]=this.sections[t+1],this.sections=[],i.forEach((function(t){e.sections.push(t)}))}},moveDown:function(t){var e=this;if(t>0){var i=this.sections.slice(0);i[t-1]=i[t],i[t]=this.sections[t-1],this.sections=[],i.forEach((function(t){e.sections.push(t)}))}},deleteSection:function(t){this.sections.splice(t,1)},createSection:function(){var t={heading:"",text:""};this.sections.push(t)}},created:function(){var t=JSON.parse(i("bda7")),e=JSON.parse(i("364d"));"impressum"===this.$route.params.name?this.sections=t:this.sections=e}}),o=a,r=(i("1956"),i("2877")),c=Object(r["a"])(o,n,s,!1,null,null,null);e["default"]=c.exports},a434:function(t,e,i){"use strict";var n=i("23e7"),s=i("23cb"),a=i("a691"),o=i("50c4"),r=i("7b0b"),c=i("65f0"),u=i("8418"),l=i("1dde"),d=i("ae40"),h=l("splice"),m=d("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,p=Math.min,v=9007199254740991,g="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!h||!m},{splice:function(t,e){var i,n,l,d,h,m,x=r(this),S=o(x.length),L=s(t,S),b=arguments.length;if(0===b?i=n=0:1===b?(i=0,n=S-L):(i=b-2,n=p(f(a(e),0),S-L)),S+i-n>v)throw TypeError(g);for(l=c(x,n),d=0;d<n;d++)h=L+d,h in x&&u(l,d,x[h]);if(l.length=n,i<n){for(d=L;d<S-n;d++)h=d+n,m=d+i,h in x?x[m]=x[h]:delete x[m];for(d=S;d>S-n+i;d--)delete x[d-1]}else if(i>n)for(d=S-n;d>L;d--)h=d+n-1,m=d+i-1,h in x?x[m]=x[h]:delete x[m];for(d=0;d<i;d++)x[d+L]=arguments[d+2];return x.length=S-n+i,l}})},a640:function(t,e,i){"use strict";var n=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&n((function(){i.call(null,e||function(){throw 1},1)}))}},b727:function(t,e,i){var n=i("0366"),s=i("44ad"),a=i("7b0b"),o=i("50c4"),r=i("65f0"),c=[].push,u=function(t){var e=1==t,i=2==t,u=3==t,l=4==t,d=6==t,h=5==t||d;return function(m,f,p,v){for(var g,x,S=a(m),L=s(S),b=n(f,p,3),C=o(L.length),w=0,y=v||r,T=e?y(m,C):i?y(m,0):void 0;C>w;w++)if((h||w in L)&&(g=L[w],x=b(g,w,S),t))if(e)T[w]=x;else if(x)switch(t){case 3:return!0;case 5:return g;case 6:return w;case 2:c.call(T,g)}else if(l)return!1;return d?-1:u||l?l:T}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},bda7:function(t){t.exports=JSON.parse('"[{\\"heading\\":\\"Impressum\\",\\"text\\":\\"This is a test paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\\"},{\\"heading\\":\\"This is a test heading\\",\\"text\\":\\"This is a test paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\\"},{\\"heading\\":\\"Yet another Section\\",\\"text\\":\\"Some text\\"}]"')},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-3e2e321f.c09a4e37.js.map