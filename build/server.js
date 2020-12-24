(()=>{"use strict";var e={693:e=>{e.exports=require("greenlock-express")},990:e=>{e.exports=require("http-proxy")}},n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{const e=require("react-router-config"),n=require("@babel/runtime/regenerator");var r=t.n(n);const a=require("@babel/runtime/helpers/asyncToGenerator");var o=t.n(a);const i=require("@babel/runtime/helpers/slicedToArray");var c=t.n(i);const u=require("react");var l=t.n(u);const s=require("@babel/runtime/helpers/taggedTemplateLiteral");var p=t.n(s);const f=require("styled-components");var d=t.n(f);const m=require("@fortawesome/react-fontawesome");function h(){var e=p()(['\n\n  body {\n    margin: 0;\n  }\n\n  h1 {\n    font-family: "Lato", sans-serif;\n    font-weight: 300;\n    letter-spacing: 2px;\n    font-size: 48px;\n  }\n  p {\n    font-family: "Lato", sans-serif;\n    letter-spacing: 1px;\n    font-size: 14px;\n    color: #333333;\n  }\n\n  .header {\n    position: relative;\n    text-align: center;\n    background: linear-gradient(\n      60deg,\n      rgba(84, 58, 183, 1) 0%,\n      rgba(0, 172, 193, 1) 100%\n    );\n    color: white;\n  }\n  .logo {\n    width: 50px;\n    fill: white;\n    padding-right: 15px;\n    display: inline-block;\n    vertical-align: middle;\n  }\n\n  .inner-header {\n    height: 65vh;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n  }\n\n  .flex {\n    /*Flexbox for containers*/\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n  }\n\n  .waves {\n    position: relative;\n    width: 100%;\n    height: 15vh;\n    margin-bottom: -7px; /*Fix for safari gap*/\n    min-height: 100px;\n    max-height: 150px;\n  }\n\n  .content {\n    position: relative;\n    height: 20vh;\n    text-align: center;\n    background-color: white;\n  }\n\n  /* Animation */\n\n  .parallax > use {\n    animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;\n  }\n  .parallax > use:nth-child(1) {\n    animation-delay: -2s;\n    animation-duration: 7s;\n  }\n  .parallax > use:nth-child(2) {\n    animation-delay: -3s;\n    animation-duration: 10s;\n  }\n  .parallax > use:nth-child(3) {\n    animation-delay: -4s;\n    animation-duration: 13s;\n  }\n  .parallax > use:nth-child(4) {\n    animation-delay: -5s;\n    animation-duration: 20s;\n  }\n  @keyframes move-forever {\n    0% {\n      transform: translate3d(-90px, 0, 0);\n    }\n    100% {\n      transform: translate3d(85px, 0, 0);\n    }\n  }\n  /*Shrinking for mobile*/\n  @media (max-width: 768px) {\n    .waves {\n      height: 40px;\n      min-height: 40px;\n    }\n    .content {\n      height: 30vh;\n    }\n    h1 {\n      font-size: 24px;\n    }\n  }\n']);return h=function(){return e},e}var v=d().div(h()),g=function(){return l().createElement(v,null,l().createElement("div",{className:"header"},l().createElement("div",{className:"inner-header flex"},l().createElement("h1",null,"Loading")),l().createElement("div",null,l().createElement("svg",{className:"waves",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 24 150 28",preserveAspectRatio:"none",shapeRendering:"auto"},l().createElement("defs",null,l().createElement("path",{id:"gentle-wave",d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"})),l().createElement("g",{className:"parallax"},l().createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"0",fill:"rgba(255,255,255,0.7"}),l().createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"3",fill:"rgba(255,255,255,0.5)"}),l().createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"5",fill:"rgba(255,255,255,0.3)"}),l().createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"7",fill:"#fff"}))))),l().createElement("div",{className:"content flex"},l().createElement("p",null,"powerd by | nolotus | Free to use")))},b=function(){return l().createElement("div",{className:"loadding-box"},l().createElement(m.FontAwesomeIcon,{className:"loading",icon:["fas","spinner"]}))},y=function(){m.FontAwesomeIcon};const x=require("@babel/runtime/helpers/defineProperty");var w=t.n(x);function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(Object(t),!0).forEach((function(n){w()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var O=function(){var e=o()(r().mark((function e(n){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.allDocs({include_docs:!0});case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),S=function(){var e=o()(r().mark((function e(n,t,a){var o;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.get(t,a||{attachments:!0});case 3:return o=e.sent,e.abrupt("return",o);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t,r){return e.apply(this,arguments)}}(),D=function(e,n){try{return e.post(k({},n))}catch(e){}},j=function(){var e=o()(r().mark((function e(n,t){var a,o;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(n,t._id);case 2:return a=e.sent,e.prev=3,e.next=6,n.put(k(k({},t),{},{_rev:a._rev,_attachments:a._attachments}));case 6:return o=e.sent,e.abrupt("return",o);case 10:e.prev=10,e.t0=e.catch(3);case 12:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(n,t){return e.apply(this,arguments)}}();const P=require("pouchdb");var q=t.n(P);const C=require("pouchdb-authentication");var N=t.n(C);const T=require("pouchdb-find");var I=t.n(T),_=(new Map([["dark",{"button-color":"#FFF"}],["light",{primaryColor:"#03a9f4",backgroundColor:"#fff",borderRadius:" 6px",neutralShade3:"#d1d3d4",neutralShade4:"#babdbf"}]]),function(e){for(var n="",t=0;t<e.length;t++)n+=e.charCodeAt(t).toString(16);return n}),F=["tw.db.nolotus.com"];q().plugin(N()).plugin(I());var R=function(e){var n="userdb-"+_(e),t="http://".concat(F[0],"/").concat(n,"/"),r=new(q())(t),a=new(q())(e);return a.sync(r,{live:!0,retry:!0}).on("change",(function(e){})).on("complete",(function(e){})).on("paused",(function(e){})).on("active",(function(e){})).on("error",(function(e){})),{remote:r,local:a}},L=R("admin"),A=new(q())("localDb"),H=R("_users");const z=require("react-router-dom"),B=require("slate-hyperscript"),U=require("slate"),M=require("slate-history"),X=require("slate-react");var V=[{type:"paragraph",children:[{text:"In addition to nodes that contain editable text, you can also create other types of nodes, like images or videos."}]},{type:"image",url:"https://source.unsplash.com/kFrdX5IeQzI",children:[{text:""}]},{type:"paragraph",children:[{text:"This example shows images in action. It features two ways to add images. You can either add an image via the toolbar icon above, or if you want in on a little secret, copy an image URL to your keyboard and paste it anywhere in the editor!"}]},{children:[{text:"This example shows how you can make a hovering menu appear above your content, which you can use to make text "},{text:"bold",bold:!0},{text:", "},{text:"italic",italic:!0},{text:", or anything else you might want to do!"}]},{children:[{text:"Try it out yourself! Just "},{text:"select any piece of text and the menu will appear",bold:!0},{text:"."}]},{type:"paragraph",children:[{text:"This is editable "},{text:"rich",bold:!0},{text:" text, "},{text:"much",italic:!0},{text:" better than a "},{text:"<textarea>",code:!0},{text:"!"}]},{type:"paragraph",children:[{text:"Since it's rich text, you can do things like turn a selection of text "},{text:"bold",bold:!0},{text:", or add a semantically rendered block quote in the middle of the page, like this:"}]},{type:"block-quote",children:[{text:"A wise quote."}]},{type:"paragraph",children:[{text:"Try it out for yourself!"}]}];const G=require("@babel/runtime/helpers/extends");var Y=t.n(G);const Q=require("emotion");function J(){var e=p()(["\n          display: block;\n          max-width: 100%;\n          max-height: 20em;\n          box-shadow: ",";\n        "]);return J=function(){return e},e}var K=function(e){var n=e.attributes,t=e.children,r=e.element,a=(0,X.useSelected)(),o=(0,X.useFocused)();return l().createElement("div",n,t,l().createElement("img",{src:r.url,className:(0,Q.css)(J(),a&&o?"0 0 0 2px blue;":"none")}))};const W=function(e){var n=e.attributes,t=e.children,r=e.element;switch(r.type){default:return l().createElement("p",n,t);case"block-quote":case"quote":return l().createElement("blockquote",n,t);case"code":return l().createElement("pre",null,l().createElement("code",n,t));case"bulleted-list":return l().createElement("ul",n,t);case"title":case"heading-one":return l().createElement("h1",n,t);case"heading-two":return l().createElement("h2",n,t);case"heading-three":return l().createElement("h3",n,t);case"heading-four":return l().createElement("h4",n,t);case"heading-five":return l().createElement("h5",n,t);case"heading-six":return l().createElement("h6",n,t);case"list-item":return l().createElement("li",n,t);case"numbered-list":return l().createElement("ol",n,t);case"link":return l().createElement("a",Y()({href:r.url},n),t);case"image":return l().createElement(K,e)}};var Z={A:function(e){return{type:"link",url:e.getAttribute("href")}},BLOCKQUOTE:function(){return{type:"quote"}},H1:function(){return{type:"heading-one"}},H2:function(){return{type:"heading-two"}},H3:function(){return{type:"heading-three"}},H4:function(){return{type:"heading-four"}},H5:function(){return{type:"heading-five"}},H6:function(){return{type:"heading-six"}},IMG:function(e){return{type:"image",url:e.getAttribute("src")}},LI:function(){return{type:"list-item"}},OL:function(){return{type:"numbered-list"}},P:function(){return{type:"paragraph"}},PRE:function(){return{type:"code"}},UL:function(){return{type:"bulleted-list"}}},$={CODE:function(){return{code:!0}},DEL:function(){return{strikethrough:!0}},EM:function(){return{italic:!0}},I:function(){return{italic:!0}},S:function(){return{strikethrough:!0}},STRONG:function(){return{bold:!0}},U:function(){return{underline:!0}}},ee=function e(n){if(3===n.nodeType)return n.textContent;if(1!==n.nodeType)return null;if("BR"===n.nodeName)return"\n";var t=n.nodeName,r=n;"PRE"===t&&n.childNodes[0]&&"CODE"===n.childNodes[0].nodeName&&(r=n.childNodes[0]);var a=Array.from(r.childNodes).map(e).flat();if("BODY"===n.nodeName)return(0,B.jsx)("fragment",{},a);if(Z[t]){var o=Z[t](n);return(0,B.jsx)("element",o,a)}if($[t]){var i=$[t](n);return a.map((function(e){return(0,B.jsx)("text",i,e)}))}return a},ne={"*":"list-item","-":"list-item","+":"list-item",">":"block-quote","#":"heading-one","##":"heading-two","###":"heading-three","####":"heading-four","#####":"heading-five","######":"heading-six"},te=function(e){var n=e.insertData,t=e.isInline,r=e.isVoid;return e.isInline=function(e){return"link"===e.type||t(e)},e.isVoid=function(e){return"image"===e.type||r(e)},e.insertData=function(t){var r=t.getData("text/html");if(r){var a=(new DOMParser).parseFromString(r,"text/html"),o=ee(a.body);U.Transforms.insertFragment(e,o)}else n(t)},e},re=function(e){var n=e.attributes,t=e.children,r=e.leaf;return r.bold&&(t=l().createElement("strong",null,t)),r.code&&(t=l().createElement("code",null,t)),r.italic&&(t=l().createElement("em",null,t)),r.underline&&(t=l().createElement("u",null,t)),r.strikethrough&&(t=l().createElement("del",null,t)),l().createElement("span",n,t)};const ae=function(e){var n=(0,u.useState)(e.value||V),t=c()(n,2),r=t[0],a=t[1],o=(0,u.useCallback)((function(e){return l().createElement(W,e)}),[]),i=(0,u.useCallback)((function(e){return l().createElement(re,e)}),[]),s=(0,u.useMemo)((function(){return te(function(e){var n=e.deleteBackward,t=e.insertText;return e.insertText=function(n){var r=e.selection;if(" "===n&&r&&U.Range.isCollapsed(r)){var a=r.anchor,o=U.Editor.above(e,{match:function(n){return U.Editor.isBlock(e,n)}}),i=o?o[1]:[],c={anchor:a,focus:U.Editor.start(e,i)},u=U.Editor.string(e,c),l=ne[u];if(l)return U.Transforms.select(e,c),U.Transforms.delete(e),U.Transforms.setNodes(e,{type:l},{match:function(n){return U.Editor.isBlock(e,n)}}),void("list-item"===l&&U.Transforms.wrapNodes(e,{type:"bulleted-list",children:[]},{match:function(e){return"list-item"===e.type}}))}t(n)},e.deleteBackward=function(){var t=e.selection;if(t&&U.Range.isCollapsed(t)){var r=U.Editor.above(e,{match:function(n){return U.Editor.isBlock(e,n)}});if(r){var a=c()(r,2),o=a[0],i=a[1],u=U.Editor.start(e,i);if("paragraph"!==o.type&&U.Point.equals(t.anchor,u))return U.Transforms.setNodes(e,{type:"paragraph"}),void("list-item"===o.type&&U.Transforms.unwrapNodes(e,{match:function(e){return"bulleted-list"===e.type},split:!0}))}n.apply(void 0,arguments)}},e}((0,X.withReact)((0,M.withHistory)((0,U.createEditor)()))))}),[]);return l().createElement(X.Slate,{editor:s,value:r,onChange:function(n){console.log("value",n);var t=n.filter((function(e){return"heading-one"===e.type}))||[],r={title:t[0]&&t[0].children[0].text,content:n};e.onChange(r),a(n)}},l().createElement(X.Editable,{renderElement:o,renderLeaf:i,placeholder:"Write some markdown...",spellCheck:!0,autoFocus:!0}))};require("react-dom");const oe=require("prop-types");var ie=t.n(oe);function ce(){var e=p()(["\n  width: 90%;\n  max-width: 1050px;\n  margin: 3em auto 0;\n"]);return ce=function(){return e},e}var ue=d().div(ce()),le=function(e){var n=e.doc;return console.log("doc",n),l().createElement(ue,null,l().createElement(ae,{value:n.content}))};le.propTypes={doc:ie().object};const se=require("react-redux");var pe=function(e){return e.userInfo};function fe(){var e=p()(["\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  margin-right: 10px;\n  width: calc(100% / 6);\n"]);return fe=function(){return e},e}function de(){var e=p()(["\n  height: 100%;\n  display: flex;\n  a {\n    display: flex;\n    transition: color 0.2s ease-out;\n    align-items: center;\n    padding-left: 20px;\n    padding-right: 20px;\n    font-size: 18px;\n    color: #ffffff;\n    font-weight: 300;\n    :hover {\n      color: var(--primaryColor);\n    }\n  }\n"]);return de=function(){return e},e}function me(){var e=p()(["\n  display: flex;\n  height: 60px;\n  width: 90%;\n  max-width: 1260px;\n  margin: auto;\n"]);return me=function(){return e},e}function he(){var e=p()(["\n  background-color: #20232a;\n    display: flex;\n    width: 100%;\n"]);return he=function(){return e},e}var ve=d().header(he()),ge=d().div(me()),be=d().nav(de()),ye=d().a(fe());const xe=function(){var e=(0,u.useState)([{title:"加载中",path:""}]),n=c()(e,2),t=n[0],a=n[1],i=(0,se.useSelector)(pe);return(0,u.useEffect)((function(){return function(){var e=o()(r().mark((function e(){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(L.remote,"menu");case 2:(n=e.sent)&&n.result&&a(n.result);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){}}),[]),l().createElement(ve,null,l().createElement(ge,null,l().createElement(ye,{href:"/"},"Nolotus"),l().createElement(be,null,t.map((function(e,n){return l().createElement(z.Link,{key:n,to:"/".concat(e.path)},"self"===e.path&&i.name?i.name:e.title)})))))};function we(){var e=p()(['\n body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n']);return we=function(){return e},e}var Ee=(0,f.createGlobalStyle)(we());const ke=function(e){var n=e.children;return l().createElement(l().Fragment,null,l().createElement(Ee,null),l().createElement(xe,null),n)};function Oe(){return(Oe=o()(r().mark((function e(){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.remote.getSession();case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log("err",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}const Se=function(e){var n=(0,se.useSelector)((function(e){return e.templateName})),t=(0,se.useDispatch)();switch((0,u.useEffect)((function(){return function(){return Oe.apply(this,arguments)}().then((function(e){if(null!==e.userCtx.name){var n=R(e.userCtx.name),r=e.userCtx;t({type:"loginSuccess",payload:{userInfo:r,userDb:n}})}})),function(){}}),[]),n){case"simple":default:return l().createElement(ke,e)}};var De=function(e){var n=(0,z.useParams)().id||e._id,t=(0,u.useState)(),a=c()(t,2),i=a[0],s=a[1];return(0,u.useEffect)((function(){return function(){var e=o()(r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(L.remote,n);case 2:void 0!==(t=e.sent)&&s(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){}}),[n]),l().createElement(Se,null,i?l().createElement(le,{doc:i}):l().createElement(b,null))};const je=require("lodash");var Pe=t.n(je);function qe(){var e=p()(["\n  display: flex;\n  margin-top: 5px;\n  color: #1a1a1a;\n  a{\n   color:#1a1a1a;\n   :hover{\n    color: #6d6d6d;\n   }\n  }\n"]);return qe=function(){return e},e}var Ce=d().div(qe()),Ne=function(e){var n=e.children;return l().createElement(Ce,null,n)};Ne.propTypes={};const Te=Ne;function Ie(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _e(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Ie(Object(t),!0).forEach((function(n){w()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ie(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function Fe(){var e=p()(["\n  width: 90%;\n  max-width: 1050px;\n  margin: 3em auto 0;\n"]);return Fe=function(){return e},e}var Re=d().div(Fe());var Le=function(e){var n=e.name;return(0,u.useEffect)((function(){return function(){var e=o()(r().mark((function e(){var t,a,o;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getData"),e.prev=1,e.next=4,S(H.remote,"org.couchdb.user:"+n);case 4:return t=e.sent,console.log("result",t),a=R("userdb-"+_(n)),console.log("userDb",a),e.next=10,a.remote.allDocs({include_docs:!0});case 10:o=e.sent,console.log("list",o),console.log("result",t),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(){return e.apply(this,arguments)}}()(),function(){}}),[n]),l().createElement("div",null,n)};const Ae=Le;Le.propTypes={name:ie().string.isRequired};function He(){var e=p()(["\nform {\n    width: 280px;\n    margin:auto;\n}\n\n"]);return He=function(){return e},e}var ze=d().div(He());function Be(){var e=p()(['\noutline: none;\nwidth: 100%;\ntext-align: center;\ndisplay: inline-block;\nborder: none;\nfont: 500 16px/1 "Poppins", sans-serif;\npadding: 20px;\ncursor: pointer;\nborder-radius: var(--borderRadius);\nbackground: var(--primaryColor);\ncolor: var(--backgroundColor);\nposition: relative;\ntop: 0;\ntransition: 0.2s ease;\n:hover{\n  top: -3px;\nbox-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);\n}\n']);return Be=function(){return e},e}var Ue=d().div(Be()),Me=function(e){e.type;var n=e.loading,t=void 0!==n&&n,r=e.children,a=e.preIcon;return l().createElement(l().Fragment,null,l().createElement(Ue,Y()({type:"button"},e),a?l().createElement(l().Fragment,null,t?l().createElement(y,null):l().createElement("div",null,"icon placeholder"),r):l().createElement(l().Fragment,null,t?l().createElement(y,null):r)))};Me.propTypes={type:ie().string,children:ie().node,onClick:ie().func,loading:ie().bool,className:ie().string,disable:ie().bool,size:ie().object,preIcon:ie().string};const Xe=Me;function Ve(){var e=p()(["\n  display: block;\n  margin: 20px auto;\n  position: relative;\n  width: 100%;\n  max-width: 280px;\n  * {\n    box-sizing: border-box;\n  }\n  .label {\n    position: absolute;\n    top: 1.1rem;\n    left: 0;\n    font-size: 1.1rem;\n    color: var(--neutralShade4);\n    opacity: 1;\n    font-weight: 500;\n    transform-origin: 0 0;\n    transition: all 0.2s ease;\n  }\n  .border {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    height: 2px;\n    width: 100%;\n    background: var(--primaryColor);\n    transform: scaleX(0);\n    transform-origin: 0 0;\n    transition: all 0.15s ease;\n  }\n  input {\n    -webkit-appearance: none;\n    width: 100%;\n    border: 0;\n    font-family: inherit;\n    padding: 12px 0;\n    height: 48px;\n    font-size: 1.1rem;\n    font-weight: 500;\n    border-bottom: 2px solid var(--neutralShade3);\n\n    background: none;\n    border-radius: 0;\n    color: #223254;\n    transition: all 0.15s ease;\n  }\n  input:hover {\n    background: rgba(34, 50, 84, 0.03);\n  }\n  input:not(:placeholder-shown) + span {\n    color: #5a667f;\n    transform: translateY(-28px) scale(1);\n  }\n  input:focus {\n    background: none;\n    outline: none;\n  }\n  ","\n  input:focus + span {\n    color: var(--primaryColor);\n    transform: translateY(-28px) scale(0.9);\n  }\n  input:focus + span + .border {\n    transform: scaleX(1);\n  }\n"]);return Ve=function(){return e},e}var Ge=d().label(Ve(),"");const Ye=function(e){var n=e.name;return l().createElement(Ge,{htmlFor:n},l().createElement("input",Y()({type:"text"},e,{id:n,placeholder:" "})),l().createElement("span",{className:"label"},e.label),l().createElement("span",{className:"border"}))};function Qe(){var e=p()(["\n  color: red;\n  margin: 0 auto;\n  width: 15vw;\n"]);return Qe=function(){return e},e}var Je=d().div(Qe());const Ke=function(e){var n=e.children;return l().createElement(Je,null,n)};function We(){var e=p()(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 10vw;\n  padding: 10px ;\n  border-bottom: ",";\n"]);return We=function(){return e},e}function Ze(){var e=p()(["\n  display: flex;\n  margin: 0 auto;\n  width: 20vw;\n"]);return Ze=function(){return e},e}var $e=d().div(Ze()),en=d().div(We(),(function(e){return e.active?"2px solid var(--primaryColor)":"none"})),nn=function(e){var n=e.children;return l().createElement($e,e,n)},tn=function(e){var n=e.children;return l().createElement(en,e,n)};function rn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function an(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?rn(Object(t),!0).forEach((function(n){w()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):rn(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}const on=[{exact:!0,path:"/",component:function(){var e=(0,u.useState)(!0),n=c()(e,2),t=n[0],a=n[1],i=(0,se.useDispatch)(),s=(0,se.useSelector)((function(e){return e.setting})).home;return(0,u.useEffect)((function(){return function(){var e=o()(r().mark((function e(){var n,t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(L.remote,"menu").result;case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0=[];case 5:return n=e.t0,e.next=8,S(L.remote,"setting");case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1={};case 11:t=e.t1,i({type:"initSuccess",payload:{menu:n,setting:t}}),a(!1);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){}}),[i]),l().createElement(l().Fragment,null,t?l().createElement(g,null):l().createElement(De,{_id:s}))}},{path:"/create",component:function(){var e=(0,u.useState)(),n=c()(e,2),t=n[0],a=n[1],i=(0,u.useState)(),s=c()(i,2),p=s[0],f=s[1],d=function(){var e=o()(r().mark((function e(n){var o,i,c,u,l,s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=n.title,i=n.content,Pe().isEqual(i,V)){e.next=20;break}if(!t){e.next=14;break}return c={title:o,type:"article",content:i,_id:t},e.next=8,j(A,c);case 8:u=e.sent,console.log("update",u),u&&f(u.rev),console.log("result",u),e.next=20;break;case 14:return l={title:o,type:"article",content:i,status:"draft"},e.next=17,D(A,l);case 17:s=e.sent,console.log("res",s),a(s.id);case 20:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return l().createElement(Se,null,p,l().createElement(ae,{onChange:d}))}},{path:"/life",component:function(){var e=(0,u.useState)([]),n=c()(e,2),t=n[0],a=n[1],i=(0,u.useState)(L.remote),s=c()(i,2),p=s[0],f=(s[1],(0,se.useDispatch)()),d=function(e){p.get(e).then(function(){var e=o()(r().mark((function e(n){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.remove(n);case 2:t=e.sent,console.log("handleDetele",t),O(p).then((function(e){e&&(console.log("result",e),a(e.rows))})),h();case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}))},h=function(){return f({type:"modal",modalInfo:{isVisible:!1}})};(0,u.useEffect)((function(){return O(p).then((function(e){e&&(console.log("result",e),a(e.rows))})),function(){}}),[]);var v=function(){var e=o()(r().mark((function e(n){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f({type:"modal",modalInfo:_e(_e({},{modalType:"warning",title:"确认删除？",content:"删除内容不可恢复！",buttons:[{text:"取消",className:"button-warning-cancel",onClick:h},{text:"确认",className:"button-warning-blue",onClick:function(){d(n)}}]}),{},{isVisible:!0})});case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return l().createElement(Se,null,l().createElement(Re,null,t.map((function(e){return l().createElement(Te,{key:e.id},l().createElement("div",null,l().createElement(z.Link,{to:{pathname:e.doc._id}},e.doc.title||e.doc._id)),l().createElement("div",{className:"delete-button",onClick:function(){return v(e.doc._id)}},l().createElement(m.FontAwesomeIcon,{icon:["fas","times"]})))}))))}},{path:"/find",component:function(){var e=(0,u.useState)([]),n=c()(e,2),t=n[0],a=n[1];return(0,u.useEffect)((function(){return function(){var e=o()(r().mark((function e(){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getData"),e.prev=1,e.next=4,S(L.remote,"friends");case 4:n=e.sent,console.log("result",n),n&&a(n.list),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()(),function(){}}),[]),l().createElement(Se,null,l().createElement("div",null," 住在本站的站点"),l().createElement("div",null,t.map((function(e){return l().createElement(Ae,{name:e,key:e})}))),l().createElement("div",null," 添加你的个人网站，让更多人看到你（暂未开放）"),l().createElement("div",null,"推荐的网站"),l().createElement("div",null,"推荐的内容"))}},{path:"/self",component:function(e){var n=(0,z.useHistory)(),t=(0,se.useDispatch)(),a=(0,u.useState)("signin"),i=c()(a,2),s=i[0],p=i[1],f=(0,u.useState)(),d=c()(f,2),m=d[0],h=d[1],v=(0,se.useSelector)((function(e){return e.authData})).isLogin,g=function(){var e=o()(r().mark((function e(a,o){var i,c,u;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("hostDb",L),e.next=4,L.remote.login(a,o);case 4:return i=e.sent,console.log("logininfo",i),i.ok&&(c={name:i.name,roles:i.roles},u=R(i.name),t({type:"loginSuccess",payload:{userInfo:c,userDb:u}}),n.push("/setting")),e.abrupt("return",i);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n,t){return e.apply(this,arguments)}}(),b=function(){var e=o()(r().mark((function e(n,t){var a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.remote.signUp(n,t);case 3:return a=e.sent,console.log("signUpinfo",a),a.ok&&(alert("注册成功"),g(n,t)),e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n,t){return e.apply(this,arguments)}}();v&&n.push("/setting");var y=(0,u.useState)({username:"",password:""}),x=c()(y,2),E=x[0],k=x[1],O=function(){var e=o()(r().mark((function e(){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(E.username,E.password);case 2:n=e.sent,console.log("loginresult",n),n.error&&h(n.message);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=o()(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(E.username,E.password);case 2:"conflict"===e.sent.error&&h("此用户名已被注册");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(e,n){console.log(e,n),k(an(an({},E),{},w()({},e,n)))};return l().createElement(Se,null,l().createElement(ze,null,l().createElement("div",null,l().createElement(nn,null,l().createElement(tn,{active:"signin"===s,onClick:function(){p("signin")}},"登录"),l().createElement(tn,{active:"signup"===s,onClick:function(){p("signup")}},"注册")),l().createElement("form",null,l().createElement(Ke,null,m),l().createElement(Ye,{label:"名字",onChange:function(e){return D("username",e.target.value)},name:"name",type:"text",id:"inp",placeholder:" "}),l().createElement(Ye,{label:"密码",onChange:function(e){return D("password",e.target.value)},name:"password",type:"password",placeholder:" "}),l().createElement(Xe,{onClick:function(e){e.preventDefault(),"signin"===s?O():S()}},"提交")))))}},{path:"/setting",component:function(){var e=(0,se.useDispatch)()({type:"logout"});return l().createElement(Se,null,l().createElement("div",{onClick:e},"退出登录"))}},{path:"/:id",component:De}],cn=require("redux");function un(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ln(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?un(Object(t),!0).forEach((function(n){w()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):un(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var sn={templateName:"simple",userInfo:{},menu:[],setting:{},authData:{isLogin:!1},userDb:{}};const pn=require("global");var fn=t.n(pn);const dn=(0,cn.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:sn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"fetch":return ln(ln({},e),{},{users:n.payload});case"loginSuccess":return ln(ln({},e),{},{authData:{isLogin:!0},userInfo:n.payload.userInfo,userDb:n.payload.userDb});case"logout":return ln(ln({},e),{},{authData:{isLogin:!1},userInfo:{}});case"initSuccess":return ln(ln({},e),{},{menu:n.payload.menu,setting:n.payload.setting});default:return e}}),fn().__REDUX_DEVTOOLS_EXTENSION__&&fn().__REDUX_DEVTOOLS_EXTENSION__()),mn=require("react-helmet");var hn=t.n(mn);const vn=require("react-dom/server");t(693).init((function(){return{packageRoot:process.cwd(),configDir:"./greenlock.d",maintainerEmail:"s@nolotus.com",cluster:!1}})).ready((function(n){var r=n.httpsServer(),a=t(990).createProxyServer({xfwd:!0});a.on("error",(function(e,n,t){console.error(e),t.statusCode=500,t.end()})),r.on("upgrade",(function(e,n,t){a.ws(e,n,t,{ws:!0,target:"ws://localhost:3000"})})),n.serveApp((function(n,t){if("tw.db.nolotus.com"===n.hostname)a.web(n,t,{target:"http://localhost:5984"});else{var r=(0,e.matchRoutes)(on,n.path).map((function(e){var n=e.route.component;return n.getInitialData?n.getInitialData(dn):null}));Promise.all(r).then((function(){var r=function(n,t){var r=(0,vn.renderToString)(l().createElement(se.Provider,{store:t},l().createElement(z.StaticRouter,{location:n.path},(0,e.renderRoutes)(on)))),a=hn().renderStatic();return"\n    <html ".concat(a.htmlAttributes.toString(),'>\n      <head>\n    <link rel="stylesheet" href="/common.css" type="text/css" />\n\n      ').concat(a.title.toString(),"\n      ").concat(a.meta.toString(),"\n      ").concat(a.link.toString(),"\n      </head>\n      <body ").concat(a.bodyAttributes.toString(),'>\n        <div id="root">').concat(r,'</div>\n        <script src="bundle.js"><\/script>\n      </body>\n    </html>\n  ')}(n,dn);t.send(r)}))}}))}))})()})();