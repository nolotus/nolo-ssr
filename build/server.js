(()=>{"use strict";var e={693:e=>{e.exports=require("greenlock-express")},650:e=>{e.exports=require("http-proxy-middleware")}},n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{const e=require("express");var n=t.n(e);const r=require("react");var a=t.n(r);const o=require("react-helmet");var i=t.n(o);const c=require("react-dom/server"),u=require("react-router-dom"),l=require("react-redux"),s=require("react-router-config"),p=require("@babel/runtime/regenerator");var f=t.n(p);const d=require("@babel/runtime/helpers/asyncToGenerator");var m=t.n(d);const h=require("@babel/runtime/helpers/slicedToArray");var g=t.n(h);const v=require("@babel/runtime/helpers/taggedTemplateLiteral");var b=t.n(v);const y=require("styled-components");var x=t.n(y);const w=require("@fortawesome/react-fontawesome");function E(){var e=b()(['\n\n  body {\n    margin: 0;\n  }\n\n  h1 {\n    font-family: "Lato", sans-serif;\n    font-weight: 300;\n    letter-spacing: 2px;\n    font-size: 48px;\n  }\n  p {\n    font-family: "Lato", sans-serif;\n    letter-spacing: 1px;\n    font-size: 14px;\n    color: #333333;\n  }\n\n  .header {\n    position: relative;\n    text-align: center;\n    background: linear-gradient(\n      60deg,\n      rgba(84, 58, 183, 1) 0%,\n      rgba(0, 172, 193, 1) 100%\n    );\n    color: white;\n  }\n  .logo {\n    width: 50px;\n    fill: white;\n    padding-right: 15px;\n    display: inline-block;\n    vertical-align: middle;\n  }\n\n  .inner-header {\n    height: 65vh;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n  }\n\n  .flex {\n    /*Flexbox for containers*/\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n  }\n\n  .waves {\n    position: relative;\n    width: 100%;\n    height: 15vh;\n    margin-bottom: -7px; /*Fix for safari gap*/\n    min-height: 100px;\n    max-height: 150px;\n  }\n\n  .content {\n    position: relative;\n    height: 20vh;\n    text-align: center;\n    background-color: white;\n  }\n\n  /* Animation */\n\n  .parallax > use {\n    animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;\n  }\n  .parallax > use:nth-child(1) {\n    animation-delay: -2s;\n    animation-duration: 7s;\n  }\n  .parallax > use:nth-child(2) {\n    animation-delay: -3s;\n    animation-duration: 10s;\n  }\n  .parallax > use:nth-child(3) {\n    animation-delay: -4s;\n    animation-duration: 13s;\n  }\n  .parallax > use:nth-child(4) {\n    animation-delay: -5s;\n    animation-duration: 20s;\n  }\n  @keyframes move-forever {\n    0% {\n      transform: translate3d(-90px, 0, 0);\n    }\n    100% {\n      transform: translate3d(85px, 0, 0);\n    }\n  }\n  /*Shrinking for mobile*/\n  @media (max-width: 768px) {\n    .waves {\n      height: 40px;\n      min-height: 40px;\n    }\n    .content {\n      height: 30vh;\n    }\n    h1 {\n      font-size: 24px;\n    }\n  }\n']);return E=function(){return e},e}var k=x().div(E()),O=function(){return a().createElement(k,null,a().createElement("div",{className:"header"},a().createElement("div",{className:"inner-header flex"},a().createElement("h1",null,"Loading")),a().createElement("div",null,a().createElement("svg",{className:"waves",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 24 150 28",preserveAspectRatio:"none",shapeRendering:"auto"},a().createElement("defs",null,a().createElement("path",{id:"gentle-wave",d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"})),a().createElement("g",{className:"parallax"},a().createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"0",fill:"rgba(255,255,255,0.7"}),a().createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"3",fill:"rgba(255,255,255,0.5)"}),a().createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"5",fill:"rgba(255,255,255,0.3)"}),a().createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"7",fill:"#fff"}))))),a().createElement("div",{className:"content flex"},a().createElement("p",null,"powerd by | nolotus | Free to use")))},S=function(){return a().createElement("div",{className:"loadding-box"},a().createElement(w.FontAwesomeIcon,{className:"loading",icon:["fas","spinner"]}))},D=function(){w.FontAwesomeIcon};const j=require("@babel/runtime/helpers/defineProperty");var P=t.n(j);function q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?q(Object(t),!0).forEach((function(n){P()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var N=function(){var e=m()(f().mark((function e(n){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.allDocs({include_docs:!0});case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),T=function(){var e=m()(f().mark((function e(n,t,r){var a;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.get(t,r||{attachments:!0});case 3:return a=e.sent,e.abrupt("return",a);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t,r){return e.apply(this,arguments)}}(),I=function(e,n){try{return e.post(C({},n))}catch(e){}},_=function(){var e=m()(f().mark((function e(n,t){var r,a;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(n,t._id);case 2:return r=e.sent,e.prev=3,e.next=6,n.put(C(C({},t),{},{_rev:r._rev,_attachments:r._attachments}));case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(3);case 12:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(n,t){return e.apply(this,arguments)}}();const F=require("pouchdb");var R=t.n(F);const L=require("pouchdb-authentication");var A=t.n(L);const H=require("pouchdb-find");var z=t.n(H),B=(new Map([["dark",{"button-color":"#FFF"}],["light",{primaryColor:"#03a9f4",backgroundColor:"#fff",borderRadius:" 6px",neutralShade3:"#d1d3d4",neutralShade4:"#babdbf"}]]),function(e){for(var n="",t=0;t<e.length;t++)n+=e.charCodeAt(t).toString(16);return n}),U=["tw.db.nolotus.com"];R().plugin(A()).plugin(z());var M=function(e){var n="userdb-"+B(e),t="https://".concat(U[0],"/").concat(n,"/"),r=new(R())(t),a=new(R())(e);return a.sync(r,{live:!0,retry:!0}).on("change",(function(e){})).on("complete",(function(e){})).on("paused",(function(e){})).on("active",(function(e){})).on("error",(function(e){})),{remote:r,local:a}},X=M("admin"),V=new(R())("localDb"),G=M("_users");const Y=require("slate-hyperscript"),Q=require("slate"),J=require("slate-history"),K=require("slate-react");var W=[{type:"paragraph",children:[{text:"In addition to nodes that contain editable text, you can also create other types of nodes, like images or videos."}]},{type:"image",url:"https://source.unsplash.com/kFrdX5IeQzI",children:[{text:""}]},{type:"paragraph",children:[{text:"This example shows images in action. It features two ways to add images. You can either add an image via the toolbar icon above, or if you want in on a little secret, copy an image URL to your keyboard and paste it anywhere in the editor!"}]},{children:[{text:"This example shows how you can make a hovering menu appear above your content, which you can use to make text "},{text:"bold",bold:!0},{text:", "},{text:"italic",italic:!0},{text:", or anything else you might want to do!"}]},{children:[{text:"Try it out yourself! Just "},{text:"select any piece of text and the menu will appear",bold:!0},{text:"."}]},{type:"paragraph",children:[{text:"This is editable "},{text:"rich",bold:!0},{text:" text, "},{text:"much",italic:!0},{text:" better than a "},{text:"<textarea>",code:!0},{text:"!"}]},{type:"paragraph",children:[{text:"Since it's rich text, you can do things like turn a selection of text "},{text:"bold",bold:!0},{text:", or add a semantically rendered block quote in the middle of the page, like this:"}]},{type:"block-quote",children:[{text:"A wise quote."}]},{type:"paragraph",children:[{text:"Try it out for yourself!"}]}];const Z=require("@babel/runtime/helpers/extends");var $=t.n(Z);const ee=require("emotion");function ne(){var e=b()(["\n          display: block;\n          max-width: 100%;\n          max-height: 20em;\n          box-shadow: ",";\n        "]);return ne=function(){return e},e}var te=function(e){var n=e.attributes,t=e.children,r=e.element,o=(0,K.useSelected)(),i=(0,K.useFocused)();return a().createElement("div",n,t,a().createElement("img",{src:r.url,className:(0,ee.css)(ne(),o&&i?"0 0 0 2px blue;":"none")}))};const re=function(e){var n=e.attributes,t=e.children,r=e.element;switch(r.type){default:return a().createElement("p",n,t);case"block-quote":case"quote":return a().createElement("blockquote",n,t);case"code":return a().createElement("pre",null,a().createElement("code",n,t));case"bulleted-list":return a().createElement("ul",n,t);case"title":case"heading-one":return a().createElement("h1",n,t);case"heading-two":return a().createElement("h2",n,t);case"heading-three":return a().createElement("h3",n,t);case"heading-four":return a().createElement("h4",n,t);case"heading-five":return a().createElement("h5",n,t);case"heading-six":return a().createElement("h6",n,t);case"list-item":return a().createElement("li",n,t);case"numbered-list":return a().createElement("ol",n,t);case"link":return a().createElement("a",$()({href:r.url},n),t);case"image":return a().createElement(te,e)}};var ae={A:function(e){return{type:"link",url:e.getAttribute("href")}},BLOCKQUOTE:function(){return{type:"quote"}},H1:function(){return{type:"heading-one"}},H2:function(){return{type:"heading-two"}},H3:function(){return{type:"heading-three"}},H4:function(){return{type:"heading-four"}},H5:function(){return{type:"heading-five"}},H6:function(){return{type:"heading-six"}},IMG:function(e){return{type:"image",url:e.getAttribute("src")}},LI:function(){return{type:"list-item"}},OL:function(){return{type:"numbered-list"}},P:function(){return{type:"paragraph"}},PRE:function(){return{type:"code"}},UL:function(){return{type:"bulleted-list"}}},oe={CODE:function(){return{code:!0}},DEL:function(){return{strikethrough:!0}},EM:function(){return{italic:!0}},I:function(){return{italic:!0}},S:function(){return{strikethrough:!0}},STRONG:function(){return{bold:!0}},U:function(){return{underline:!0}}},ie=function e(n){if(3===n.nodeType)return n.textContent;if(1!==n.nodeType)return null;if("BR"===n.nodeName)return"\n";var t=n.nodeName,r=n;"PRE"===t&&n.childNodes[0]&&"CODE"===n.childNodes[0].nodeName&&(r=n.childNodes[0]);var a=Array.from(r.childNodes).map(e).flat();if("BODY"===n.nodeName)return(0,Y.jsx)("fragment",{},a);if(ae[t]){var o=ae[t](n);return(0,Y.jsx)("element",o,a)}if(oe[t]){var i=oe[t](n);return a.map((function(e){return(0,Y.jsx)("text",i,e)}))}return a},ce={"*":"list-item","-":"list-item","+":"list-item",">":"block-quote","#":"heading-one","##":"heading-two","###":"heading-three","####":"heading-four","#####":"heading-five","######":"heading-six"},ue=function(e){var n=e.insertData,t=e.isInline,r=e.isVoid;return e.isInline=function(e){return"link"===e.type||t(e)},e.isVoid=function(e){return"image"===e.type||r(e)},e.insertData=function(t){var r=t.getData("text/html");if(r){var a=(new DOMParser).parseFromString(r,"text/html"),o=ie(a.body);Q.Transforms.insertFragment(e,o)}else n(t)},e},le=function(e){var n=e.attributes,t=e.children,r=e.leaf;return r.bold&&(t=a().createElement("strong",null,t)),r.code&&(t=a().createElement("code",null,t)),r.italic&&(t=a().createElement("em",null,t)),r.underline&&(t=a().createElement("u",null,t)),r.strikethrough&&(t=a().createElement("del",null,t)),a().createElement("span",n,t)};const se=function(e){var n=(0,r.useState)(e.value||W),t=g()(n,2),o=t[0],i=t[1],c=(0,r.useCallback)((function(e){return a().createElement(re,e)}),[]),u=(0,r.useCallback)((function(e){return a().createElement(le,e)}),[]),l=(0,r.useMemo)((function(){return ue(function(e){var n=e.deleteBackward,t=e.insertText;return e.insertText=function(n){var r=e.selection;if(" "===n&&r&&Q.Range.isCollapsed(r)){var a=r.anchor,o=Q.Editor.above(e,{match:function(n){return Q.Editor.isBlock(e,n)}}),i=o?o[1]:[],c={anchor:a,focus:Q.Editor.start(e,i)},u=Q.Editor.string(e,c),l=ce[u];if(l)return Q.Transforms.select(e,c),Q.Transforms.delete(e),Q.Transforms.setNodes(e,{type:l},{match:function(n){return Q.Editor.isBlock(e,n)}}),void("list-item"===l&&Q.Transforms.wrapNodes(e,{type:"bulleted-list",children:[]},{match:function(e){return"list-item"===e.type}}))}t(n)},e.deleteBackward=function(){var t=e.selection;if(t&&Q.Range.isCollapsed(t)){var r=Q.Editor.above(e,{match:function(n){return Q.Editor.isBlock(e,n)}});if(r){var a=g()(r,2),o=a[0],i=a[1],c=Q.Editor.start(e,i);if("paragraph"!==o.type&&Q.Point.equals(t.anchor,c))return Q.Transforms.setNodes(e,{type:"paragraph"}),void("list-item"===o.type&&Q.Transforms.unwrapNodes(e,{match:function(e){return"bulleted-list"===e.type},split:!0}))}n.apply(void 0,arguments)}},e}((0,K.withReact)((0,J.withHistory)((0,Q.createEditor)()))))}),[]);return a().createElement(K.Slate,{editor:l,value:o,onChange:function(n){console.log("value",n);var t=n.filter((function(e){return"heading-one"===e.type}))||[],r={title:t[0]&&t[0].children[0].text,content:n};e.onChange(r),i(n)}},a().createElement(K.Editable,{renderElement:c,renderLeaf:u,placeholder:"Write some markdown...",spellCheck:!0,autoFocus:!0}))};require("react-dom");const pe=require("prop-types");var fe=t.n(pe);function de(){var e=b()(["\n  width: 90%;\n  max-width: 1050px;\n  margin: 3em auto 0;\n"]);return de=function(){return e},e}var me=x().div(de()),he=function(e){var n=e.doc;return console.log("doc",n),a().createElement(me,null,a().createElement(se,{value:n.content}))};he.propTypes={doc:fe().object};var ge=function(e){return e.userInfo};function ve(){var e=b()(["\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  margin-right: 10px;\n  width: calc(100% / 6);\n"]);return ve=function(){return e},e}function be(){var e=b()(["\n  height: 100%;\n  display: flex;\n  a {\n    display: flex;\n    transition: color 0.2s ease-out;\n    align-items: center;\n    padding-left: 20px;\n    padding-right: 20px;\n    font-size: 18px;\n    color: #ffffff;\n    font-weight: 300;\n    :hover {\n      color: var(--primaryColor);\n    }\n  }\n"]);return be=function(){return e},e}function ye(){var e=b()(["\n  display: flex;\n  height: 60px;\n  width: 90%;\n  max-width: 1260px;\n  margin: auto;\n"]);return ye=function(){return e},e}function xe(){var e=b()(["\n  background-color: #20232a;\n    display: flex;\n    width: 100%;\n"]);return xe=function(){return e},e}var we=x().header(xe()),Ee=x().div(ye()),ke=x().nav(be()),Oe=x().a(ve());const Se=function(){var e=(0,r.useState)([{title:"加载中",path:""}]),n=g()(e,2),t=n[0],o=n[1],i=(0,l.useSelector)(ge);return(0,r.useEffect)((function(){return function(){var e=m()(f().mark((function e(){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(X.remote,"menu");case 2:(n=e.sent)&&n.result&&o(n.result);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){}}),[]),a().createElement(we,null,a().createElement(Ee,null,a().createElement(Oe,{href:"/"},"Nolotus"),a().createElement(ke,null,t.map((function(e,n){return a().createElement(u.Link,{key:n,to:"/".concat(e.path)},"self"===e.path&&i.name?i.name:e.title)})))))};function De(){var e=b()(['\n body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n']);return De=function(){return e},e}var je=(0,y.createGlobalStyle)(De());const Pe=function(e){var n=e.children;return a().createElement(a().Fragment,null,a().createElement(je,null),a().createElement(Se,null),n)};function qe(){return(qe=m()(f().mark((function e(){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,X.remote.getSession();case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log("err",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}const Ce=function(e){var n=(0,l.useSelector)((function(e){return e.templateName})),t=(0,l.useDispatch)();switch((0,r.useEffect)((function(){return function(){return qe.apply(this,arguments)}().then((function(e){if(null!==e.userCtx.name){var n=M(e.userCtx.name),r=e.userCtx;t({type:"loginSuccess",payload:{userInfo:r,userDb:n}})}})),function(){}}),[]),n){case"simple":default:return a().createElement(Pe,e)}};var Ne=function(e){var n=(0,u.useParams)().id||e._id,t=(0,r.useState)(),o=g()(t,2),i=o[0],c=o[1];return(0,r.useEffect)((function(){return function(){var e=m()(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(X.remote,n);case 2:void 0!==(t=e.sent)&&c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){}}),[n]),a().createElement(Ce,null,i?a().createElement(he,{doc:i}):a().createElement(S,null))};const Te=require("lodash");var Ie=t.n(Te);function _e(){var e=b()(["\n  display: flex;\n  margin-top: 5px;\n  color: #1a1a1a;\n  a{\n   color:#1a1a1a;\n   :hover{\n    color: #6d6d6d;\n   }\n  }\n"]);return _e=function(){return e},e}var Fe=x().div(_e()),Re=function(e){var n=e.children;return a().createElement(Fe,null,n)};Re.propTypes={};const Le=Re;function Ae(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function He(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Ae(Object(t),!0).forEach((function(n){P()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ae(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function ze(){var e=b()(["\n  width: 90%;\n  max-width: 1050px;\n  margin: 3em auto 0;\n"]);return ze=function(){return e},e}var Be=x().div(ze());var Ue=function(e){var n=e.name;return(0,r.useEffect)((function(){return function(){var e=m()(f().mark((function e(){var t,r,a;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getData"),e.prev=1,e.next=4,T(G.remote,"org.couchdb.user:"+n);case 4:return t=e.sent,console.log("result",t),r=M("userdb-"+B(n)),console.log("userDb",r),e.next=10,r.remote.allDocs({include_docs:!0});case 10:a=e.sent,console.log("list",a),console.log("result",t),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(){return e.apply(this,arguments)}}()(),function(){}}),[n]),a().createElement("div",null,n)};const Me=Ue;Ue.propTypes={name:fe().string.isRequired};function Xe(){var e=b()(["\nform {\n    width: 280px;\n    margin:auto;\n}\n\n"]);return Xe=function(){return e},e}var Ve=x().div(Xe());function Ge(){var e=b()(['\noutline: none;\nwidth: 100%;\ntext-align: center;\ndisplay: inline-block;\nborder: none;\nfont: 500 16px/1 "Poppins", sans-serif;\npadding: 20px;\ncursor: pointer;\nborder-radius: var(--borderRadius);\nbackground: var(--primaryColor);\ncolor: var(--backgroundColor);\nposition: relative;\ntop: 0;\ntransition: 0.2s ease;\n:hover{\n  top: -3px;\nbox-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);\n}\n']);return Ge=function(){return e},e}var Ye=x().div(Ge()),Qe=function(e){e.type;var n=e.loading,t=void 0!==n&&n,r=e.children,o=e.preIcon;return a().createElement(a().Fragment,null,a().createElement(Ye,$()({type:"button"},e),o?a().createElement(a().Fragment,null,t?a().createElement(D,null):a().createElement("div",null,"icon placeholder"),r):a().createElement(a().Fragment,null,t?a().createElement(D,null):r)))};Qe.propTypes={type:fe().string,children:fe().node,onClick:fe().func,loading:fe().bool,className:fe().string,disable:fe().bool,size:fe().object,preIcon:fe().string};const Je=Qe;function Ke(){var e=b()(["\n  display: block;\n  margin: 20px auto;\n  position: relative;\n  width: 100%;\n  max-width: 280px;\n  * {\n    box-sizing: border-box;\n  }\n  .label {\n    position: absolute;\n    top: 1.1rem;\n    left: 0;\n    font-size: 1.1rem;\n    color: var(--neutralShade4);\n    opacity: 1;\n    font-weight: 500;\n    transform-origin: 0 0;\n    transition: all 0.2s ease;\n  }\n  .border {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    height: 2px;\n    width: 100%;\n    background: var(--primaryColor);\n    transform: scaleX(0);\n    transform-origin: 0 0;\n    transition: all 0.15s ease;\n  }\n  input {\n    -webkit-appearance: none;\n    width: 100%;\n    border: 0;\n    font-family: inherit;\n    padding: 12px 0;\n    height: 48px;\n    font-size: 1.1rem;\n    font-weight: 500;\n    border-bottom: 2px solid var(--neutralShade3);\n\n    background: none;\n    border-radius: 0;\n    color: #223254;\n    transition: all 0.15s ease;\n  }\n  input:hover {\n    background: rgba(34, 50, 84, 0.03);\n  }\n  input:not(:placeholder-shown) + span {\n    color: #5a667f;\n    transform: translateY(-28px) scale(1);\n  }\n  input:focus {\n    background: none;\n    outline: none;\n  }\n  ","\n  input:focus + span {\n    color: var(--primaryColor);\n    transform: translateY(-28px) scale(0.9);\n  }\n  input:focus + span + .border {\n    transform: scaleX(1);\n  }\n"]);return Ke=function(){return e},e}var We=x().label(Ke(),"");const Ze=function(e){var n=e.name;return a().createElement(We,{htmlFor:n},a().createElement("input",$()({type:"text"},e,{id:n,placeholder:" "})),a().createElement("span",{className:"label"},e.label),a().createElement("span",{className:"border"}))};function $e(){var e=b()(["\n  color: red;\n  margin: 0 auto;\n  width: 15vw;\n"]);return $e=function(){return e},e}var en=x().div($e());const nn=function(e){var n=e.children;return a().createElement(en,null,n)};function tn(){var e=b()(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 10vw;\n  padding: 10px ;\n  border-bottom: ",";\n"]);return tn=function(){return e},e}function rn(){var e=b()(["\n  display: flex;\n  margin: 0 auto;\n  width: 20vw;\n"]);return rn=function(){return e},e}var an=x().div(rn()),on=x().div(tn(),(function(e){return e.active?"2px solid var(--primaryColor)":"none"})),cn=function(e){var n=e.children;return a().createElement(an,e,n)},un=function(e){var n=e.children;return a().createElement(on,e,n)};function ln(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function sn(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ln(Object(t),!0).forEach((function(n){P()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ln(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}const pn=[{exact:!0,path:"/",component:function(){var e=(0,r.useState)(!0),n=g()(e,2),t=n[0],o=n[1],i=(0,l.useDispatch)(),c=(0,l.useSelector)((function(e){return e.setting})).home;return(0,r.useEffect)((function(){return function(){var e=m()(f().mark((function e(){var n,t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(X.remote,"menu").result;case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0=[];case 5:return n=e.t0,e.next=8,T(X.remote,"setting");case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1={};case 11:t=e.t1,i({type:"initSuccess",payload:{menu:n,setting:t}}),o(!1);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){}}),[i]),a().createElement(a().Fragment,null,t?a().createElement(O,null):a().createElement(Ne,{_id:c}))}},{path:"/create",component:function(){var e=(0,r.useState)(),n=g()(e,2),t=n[0],o=n[1],i=(0,r.useState)(),c=g()(i,2),u=c[0],l=c[1],s=function(){var e=m()(f().mark((function e(n){var r,a,i,c,u,s;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.title,a=n.content,Ie().isEqual(a,W)){e.next=20;break}if(!t){e.next=14;break}return i={title:r,type:"article",content:a,_id:t},e.next=8,_(V,i);case 8:c=e.sent,console.log("update",c),c&&l(c.rev),console.log("result",c),e.next=20;break;case 14:return u={title:r,type:"article",content:a,status:"draft"},e.next=17,I(V,u);case 17:s=e.sent,console.log("res",s),o(s.id);case 20:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return a().createElement(Ce,null,u,a().createElement(se,{onChange:s}))}},{path:"/life",component:function(){var e=(0,r.useState)([]),n=g()(e,2),t=n[0],o=n[1],i=(0,r.useState)(X.remote),c=g()(i,2),s=c[0],p=(c[1],(0,l.useDispatch)()),d=function(e){s.get(e).then(function(){var e=m()(f().mark((function e(n){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.remove(n);case 2:t=e.sent,console.log("handleDetele",t),N(s).then((function(e){e&&(console.log("result",e),o(e.rows))})),h();case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}))},h=function(){return p({type:"modal",modalInfo:{isVisible:!1}})};(0,r.useEffect)((function(){return N(s).then((function(e){e&&(console.log("result",e),o(e.rows))})),function(){}}),[]);var v=function(){var e=m()(f().mark((function e(n){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p({type:"modal",modalInfo:He(He({},{modalType:"warning",title:"确认删除？",content:"删除内容不可恢复！",buttons:[{text:"取消",className:"button-warning-cancel",onClick:h},{text:"确认",className:"button-warning-blue",onClick:function(){d(n)}}]}),{},{isVisible:!0})});case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return a().createElement(Ce,null,a().createElement(Be,null,t.map((function(e){return a().createElement(Le,{key:e.id},a().createElement("div",null,a().createElement(u.Link,{to:{pathname:e.doc._id}},e.doc.title||e.doc._id)),a().createElement("div",{className:"delete-button",onClick:function(){return v(e.doc._id)}},a().createElement(w.FontAwesomeIcon,{icon:["fas","times"]})))}))))}},{path:"/find",component:function(){var e=(0,r.useState)([]),n=g()(e,2),t=n[0],o=n[1];return(0,r.useEffect)((function(){return function(){var e=m()(f().mark((function e(){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getData"),e.prev=1,e.next=4,T(X.remote,"friends");case 4:n=e.sent,console.log("result",n),n&&o(n.list),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()(),function(){}}),[]),a().createElement(Ce,null,a().createElement("div",null," 住在本站的站点"),a().createElement("div",null,t.map((function(e){return a().createElement(Me,{name:e,key:e})}))),a().createElement("div",null," 添加你的个人网站，让更多人看到你（暂未开放）"),a().createElement("div",null,"推荐的网站"),a().createElement("div",null,"推荐的内容"))}},{path:"/self",component:function(e){var n=(0,u.useHistory)(),t=(0,l.useDispatch)(),o=(0,r.useState)("signin"),i=g()(o,2),c=i[0],s=i[1],p=(0,r.useState)(),d=g()(p,2),h=d[0],v=d[1],b=(0,l.useSelector)((function(e){return e.authData})).isLogin,y=function(){var e=m()(f().mark((function e(r,a){var o,i,c;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("hostDb",X),e.next=4,X.remote.login(r,a);case 4:return o=e.sent,console.log("logininfo",o),o.ok&&(i={name:o.name,roles:o.roles},c=M(o.name),t({type:"loginSuccess",payload:{userInfo:i,userDb:c}}),n.push("/setting")),e.abrupt("return",o);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n,t){return e.apply(this,arguments)}}(),x=function(){var e=m()(f().mark((function e(n,t){var r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,X.remote.signUp(n,t);case 3:return r=e.sent,console.log("signUpinfo",r),r.ok&&(alert("注册成功"),y(n,t)),e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n,t){return e.apply(this,arguments)}}();b&&n.push("/setting");var w=(0,r.useState)({username:"",password:""}),E=g()(w,2),k=E[0],O=E[1],S=function(){var e=m()(f().mark((function e(){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(k.username,k.password);case 2:n=e.sent,console.log("loginresult",n),n.error&&v(n.message);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=m()(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(k.username,k.password);case 2:"conflict"===e.sent.error&&v("此用户名已被注册");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(e,n){console.log(e,n),O(sn(sn({},k),{},P()({},e,n)))};return a().createElement(Ce,null,a().createElement(Ve,null,a().createElement("div",null,a().createElement(cn,null,a().createElement(un,{active:"signin"===c,onClick:function(){s("signin")}},"登录"),a().createElement(un,{active:"signup"===c,onClick:function(){s("signup")}},"注册")),a().createElement("form",null,a().createElement(nn,null,h),a().createElement(Ze,{label:"名字",onChange:function(e){return j("username",e.target.value)},name:"name",type:"text",id:"inp",placeholder:" "}),a().createElement(Ze,{label:"密码",onChange:function(e){return j("password",e.target.value)},name:"password",type:"password",placeholder:" "}),a().createElement(Je,{onClick:function(e){e.preventDefault(),"signin"===c?S():D()}},"提交")))))}},{path:"/setting",component:function(){var e=(0,l.useDispatch)();return a().createElement(Ce,null,a().createElement("div",{onClick:function(){X.remote.logOut((function(n,t){e({type:"logout"}),history.push("/")}))}},"退出登录"))}},{path:"/:id",component:Ne}],fn=require("redux");function dn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function mn(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?dn(Object(t),!0).forEach((function(n){P()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):dn(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var hn={templateName:"simple",userInfo:{},menu:[],setting:{},authData:{isLogin:!1},userDb:{}};const gn=require("global");var vn=t.n(gn);const bn=(0,fn.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:hn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"fetch":return mn(mn({},e),{},{users:n.payload});case"loginSuccess":return mn(mn({},e),{},{authData:{isLogin:!0},userInfo:n.payload.userInfo,userDb:n.payload.userDb});case"logout":return mn(mn({},e),{},{authData:{isLogin:!1},userInfo:{}});case"initSuccess":return mn(mn({},e),{},{menu:n.payload.menu,setting:n.payload.setting});default:return e}}),vn().__REDUX_DEVTOOLS_EXTENSION__&&vn().__REDUX_DEVTOOLS_EXTENSION__());var yn=n()(),xn=(0,t(650).createProxyMiddleware)((function(e,n){return"tw.db.nolotus.com"===n.hostname}),{target:"http://localhost:5984",changeOrigin:!0});yn.use("/",xn),yn.use(n().static("public")),yn.get("*",(function(e,n){var t=(0,s.matchRoutes)(pn,e.path).map((function(e){var n=e.route.component;return n.getInitialData?n.getInitialData(bn):null}));Promise.all(t).then((function(){var t=function(e,n){var t=(0,c.renderToString)(a().createElement(l.Provider,{store:n},a().createElement(u.StaticRouter,{location:e.path},(0,s.renderRoutes)(pn)))),r=i().renderStatic();return"\n    <html ".concat(r.htmlAttributes.toString(),'>\n      <head>\n    <link rel="stylesheet" href="/common.css" type="text/css" />\n\n      ').concat(r.title.toString(),"\n      ").concat(r.meta.toString(),"\n      ").concat(r.link.toString(),"\n      </head>\n      <body ").concat(r.bodyAttributes.toString(),'>\n        <div id="root">').concat(t,'</div>\n        <script src="bundle.js"><\/script>\n      </body>\n    </html>\n  ')}(e,bn);n.send(t)}))})),console.log("isProdEnv",!0),console.log("env","production"),t(693).init({packageRoot:process.cwd(),configDir:"./greenlock.d",maintainerEmail:"s@nolotus.com",cluster:!1}).serve(yn)})()})();