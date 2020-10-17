(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/T/O":function(t,e,n){},"2rMq":function(t,e,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(r=function(){return i}.call(e,n,e,t))||(t.exports=r)}()},"8+s/":function(t,e,n){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t.default:t}var o=n("q1tI"),i=r(o),a=r(n("2rMq")),s=r(n("Gytx"));function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l=[],p=void 0;function f(){p=t(l.map((function(t){return t.props}))),d.canUseDOM?e(p):n&&(p=n(p))}var d=function(t){function e(){return u(this,e),c(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.peek=function(){return p},e.rewind=function(){if(e.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=p;return p=void 0,l=[],t},e.prototype.shouldComponentUpdate=function(t){return!s(t,this.props)},e.prototype.componentWillMount=function(){l.push(this),f()},e.prototype.componentDidUpdate=function(){f()},e.prototype.componentWillUnmount=function(){var t=l.indexOf(this);l.splice(t,1),f()},e.prototype.render=function(){return i.createElement(r,this.props)},e}(o.Component);return d.displayName="SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")",d.canUseDOM=a.canUseDOM,d}}},"8k0H":function(t,e,n){"use strict";var r=n("9Hrx"),o=n("q1tI"),i=n.n(o),a=(n("DL4o"),n("EgAo"),n("ELNm")),s=n.n(a),u=(n("/T/O"),function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).text="Modern web development tutorials using",e}Object(r.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){var t={strings:["JavaScript.","React.","AWS Amplify.","React Native."],typeSpeed:50,backSpeed:50,backDelay:1200,loop:!0};this.typed=new s.a(this.el,t)},n.componentWillUnmount=function(){this.typed.destroy()},n.render=function(){var t=this;return i.a.createElement("div",{className:"hero-wrap"},i.a.createElement("h1",{className:"hero-title"},"boorje.com"),i.a.createElement("div",{className:"hero-text"},i.a.createElement("h2",null,this.text,i.a.createElement("span",{className:"typed",ref:function(e){t.el=e},style:{color:"#ffff00"}}))))},e}(i.a.Component)),c=n("Wbzz"),l=(n("bCwN"),function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).state={scrollingUp:!1,yScroll:0},e.handleScroll=function(){e.setState({scrollingUp:e.state.yScroll>=window.scrollY,yScroll:window.scrollY})},e.toggleMenu=function(){return!e.state.scrollingUp&&e.state.yScroll>200?"menu-wrapper menu-hide":"menu-wrapper"},e}Object(r.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},n.render=function(){return i.a.createElement("div",{className:this.toggleMenu()},i.a.createElement("h3",{className:"menu-logo"},i.a.createElement(c.Link,{to:"/"},"boorje.com")))},e}(i.a.Component)),p=n("ma3e");n("HDCr");function f(){return i.a.createElement("div",null,i.a.createElement("p",null,i.a.createElement("b",null,"Hi, I'm Eric!")),i.a.createElement("p",null,"I'm a self-learned web developer writing about modern web development. I started this website to document everything I learn and to help other developers."),i.a.createElement("a",{className:"github",href:"https://github.com/boorje/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(p.b,{className:"github-icon"}),"Follow"),i.a.createElement("div",{className:"subscribe"},i.a.createElement(c.Link,{to:"/newsletter"},"Sign up to the newsletter to receive the latest tutorials.")),i.a.createElement("div",{className:"footer"},i.a.createElement("p",null,"Built with ",i.a.createElement(p.c,{className:"icon-heart"})," &"," ",i.a.createElement(p.d,{className:"icon-mug"})),i.a.createElement("p",null,"© 2019 boorje.com")))}var d=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).state={pathname:null},e}Object(r.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this.props.location;t&&this.setState({pathname:t.pathname})},n.render=function(){var t=this.props.children,e=this.state.pathname;return i.a.createElement("div",{className:"wrapper"},e&&"/"===e?i.a.createElement(u,null):i.a.createElement(l,null),i.a.createElement("div",{className:"container"},i.a.createElement("article",{className:"post-container"},t),e&&"/"===e&&i.a.createElement("aside",{className:"sidebar"},i.a.createElement(f,null))))},e}(i.a.Component);e.a=d},DL4o:function(t,e,n){},ELNm:function(t,e,n){var r;r=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}return n.m=t,n.c=e,n.p="",n(0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(1),i=n(3),a=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),o.initializer.load(this,n,e),this.begin()}return r(t,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){t.currentElContent&&0!==t.currentElContent.length?t.backspace(t.currentElContent,t.currentElContent.length):t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)}),this.startDelay)}},{key:"typewrite",value:function(t,e){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var r=this.humanizer(this.typeSpeed),o=1;!0!==this.pause.status?this.timeout=setTimeout((function(){e=i.htmlParser.typeHtmlChars(t,e,n);var r=0,a=t.substr(e);if("^"===a.charAt(0)&&/^\^\d+/.test(a)){var s=1;s+=(a=/\d+/.exec(a)[0]).length,r=parseInt(a),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),t=t.substring(0,e)+t.substring(e+s),n.toggleBlinking(!0)}if("`"===a.charAt(0)){for(;"`"!==t.substr(e+o).charAt(0)&&(o++,!(e+o>t.length)););var u=t.substring(0,e),c=t.substring(u.length+1,e+o),l=t.substring(e+o+1);t=u+c+l,o--}n.timeout=setTimeout((function(){n.toggleBlinking(!1),e>=t.length?n.doneTyping(t,e):n.keepTyping(t,e,o),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))}),r)}),r):this.setPauseStatus(t,e,!0)}},{key:"keepTyping",value:function(t,e,n){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),e+=n;var r=t.substr(0,e);this.replaceText(r),this.typewrite(t,e)}},{key:"doneTyping",value:function(t,e){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){n.backspace(t,e)}),this.backDelay))}},{key:"backspace",value:function(t,e){var n=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var r=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){e=i.htmlParser.backSpaceHtmlChars(t,e,n);var r=t.substr(0,e);if(n.replaceText(r),n.smartBackspace){var o=n.strings[n.arrayPos+1];o&&r===o.substr(0,e)?n.stopNum=e:n.stopNum=0}e>n.stopNum?(e--,n.backspace(t,e)):e<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],e))}),r)}else this.setPauseStatus(t,e,!0)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(t,e,n){this.pause.typewrite=n,this.pause.curString=t,this.pause.curStrPos=e}},{key:"toggleBlinking",value:function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(t){return Math.round(Math.random()*t/2)+t}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))}},{key:"initFadeOut",value:function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)}),this.fadeOutDelay)}},{key:"replaceText",value:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t}},{key:"bindFocusEvents",value:function(){var t=this;this.isInput&&(this.el.addEventListener("focus",(function(e){t.stop()})),this.el.addEventListener("blur",(function(e){t.el.value&&0!==t.el.value.length||t.start()})))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),t}();e.default=a,t.exports=e.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=n(2),s=(r=a)&&r.__esModule?r:{default:r},u=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return i(t,[{key:"load",value:function(t,e,n){if(t.el="string"==typeof n?document.querySelector(n):n,t.options=o({},s.default,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map((function(t){return t.trim()})),"string"==typeof t.options.stringsElement?t.stringsElement=document.querySelector(t.options.stringsElement):t.stringsElement=t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var r=Array.prototype.slice.apply(t.stringsElement.children),i=r.length;if(i)for(var a=0;a<i;a+=1){var u=r[a];t.strings.push(u.innerHTML.trim())}}for(var a in t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.strings)t.sequence[a]=a;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent}},{key:"appendAnimationCss",value:function(t){if(t.autoInsertCss&&(t.showCursor||t.fadeOut)&&!document.querySelector("[data-typed-js-css]")){var e=document.createElement("style");e.type="text/css",e.setAttribute("data-typed-js-css",!0);var n="";t.showCursor&&(n+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),t.fadeOut&&(n+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==e.length&&(e.innerHTML=n,document.body.appendChild(e))}}}]),t}();e.default=u;var c=new u;e.initializer=c},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}};e.default=n,t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),r=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return n(t,[{key:"typeHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;var r=t.substr(e).charAt(0);if("<"===r||"&"===r){var o="";for(o="<"===r?">":";";t.substr(e+1).charAt(0)!==o&&!(1+ ++e>t.length););e++}return e}},{key:"backSpaceHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;var r=t.substr(e).charAt(0);if(">"===r||";"===r){var o="";for(o=">"===r?"<":"&";t.substr(e-1).charAt(0)!==o&&!(--e<0););e--}return e}}]),t}();e.default=r;var o=new r;e.htmlParser=o}])},t.exports=r()},EgAo:function(t,e,n){},Gytx:function(t,e){t.exports=function(t,e,n,r){var o=n?n.call(r,t,e):void 0;if(void 0!==o)return!!o;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var i=Object.keys(t),a=Object.keys(e);if(i.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(e),u=0;u<i.length;u++){var c=i[u];if(!s(c))return!1;var l=t[c],p=e[c];if(!1===(o=n?n.call(r,l,p,c):void 0)||void 0===o&&l!==p)return!1}return!0}},HDCr:function(t,e,n){},JOti:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"boorje.com","description":"boorje.com provides you with in-depth tutorials of real-world applications using React"}}}}')},Lnxd:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("q1tI"),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return(a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},s=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]])}return n};function u(t){return function(e){return r.createElement(c,a({attr:a({},t.attr)},e),function t(e){return e&&e.map((function(e,n){return r.createElement(e.tag,a({key:n},e.attr),t(e.child))}))}(t.child))}}function c(t){var e=function(e){var n,o=t.size||e.size||"1em";e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className);var i=t.attr,u=t.title,c=s(t,["attr","title"]);return r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,i,c,{className:n,style:a({color:t.color||e.color},e.style,t.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),t.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(t){return e(t)})):e(o)}},TJpk:function(t,e,n){e.__esModule=!0,e.Helmet=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=p(n("q1tI")),a=p(n("17x9")),s=p(n("8+s/")),u=p(n("bmMU")),c=n("v1p5"),l=n("hFT/");function p(t){return t&&t.__esModule?t:{default:t}}function f(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var T,y,E,m=(0,s.default)(c.reducePropsToState,c.handleClientStateChange,c.mapStateOnServer)((function(){return null})),v=(T=m,E=y=function(t){function e(){return d(this,e),h(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!(0,u.default)(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:e};case l.TAG_NAMES.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,o=t.arrayTypeChildren,i=t.newChildProps,a=t.nestedChildren;return r({},o,((e={})[n.type]=[].concat(o[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,a))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,o=t.child,i=t.newProps,a=t.newChildProps,s=t.nestedChildren;switch(o.type){case l.TAG_NAMES.TITLE:return r({},i,((e={})[o.type]=s,e.titleAttributes=r({},a),e));case l.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},a)});case l.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},a)})}return r({},i,((n={})[o.type]=r({},a),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=r({},e);return Object.keys(t).forEach((function(e){var o;n=r({},n,((o={})[e]=t[e],o))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return i.default.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=f(o,["children"]),s=(0,c.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(t,i),t.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:s,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:s,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=f(t,["children"]),o=r({},n);return e&&(o=this.mapChildrenToProps(e,o)),i.default.createElement(T,o)},o(e,null,[{key:"canUseDOM",set:function(t){T.canUseDOM=t}}]),e}(i.default.Component),y.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},y.defaultProps={defer:!0,encodeSpecialCharacters:!0},y.peek=T.peek,y.rewind=function(){var t=T.rewind();return t||(t=(0,c.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},E);v.renderStatic=v.rewind,e.Helmet=v,e.default=v},bCwN:function(t,e,n){},bmMU:function(t,e,n){"use strict";var r=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;t.exports=function(t,e){try{return function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){var s,u,c,l=r(e),p=r(n);if(l&&p){if((u=e.length)!=n.length)return!1;for(s=u;0!=s--;)if(!t(e[s],n[s]))return!1;return!0}if(l!=p)return!1;var f=e instanceof Date,d=n instanceof Date;if(f!=d)return!1;if(f&&d)return e.getTime()==n.getTime();var h=e instanceof RegExp,T=n instanceof RegExp;if(h!=T)return!1;if(h&&T)return e.toString()==n.toString();var y=o(e);if((u=y.length)!==o(n).length)return!1;for(s=u;0!=s--;)if(!i.call(n,y[s]))return!1;if(a&&e instanceof Element&&n instanceof Element)return e===n;for(s=u;0!=s--;)if(!("_owner"===(c=y[s])&&e.$$typeof||t(e[c],n[c])))return!1;return!0}return e!=e&&n!=n}(t,e)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(t,e){e.__esModule=!0;e.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=e.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(e.VALID_TAG_NAMES=Object.keys(n).map((function(t){return n[t]})),e.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},e.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});e.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},e.HTML_TAG_MAP=Object.keys(r).reduce((function(t,e){return t[r[e]]=e,t}),{}),e.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],e.HELMET_ATTRIBUTE="data-react-helmet"},v1p5:function(t,e,n){(function(t){e.__esModule=!0,e.warn=e.requestAnimationFrame=e.reducePropsToState=e.mapStateOnServer=e.handleClientStateChange=e.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=u(n("q1tI")),a=u(n("6qGY")),s=n("hFT/");function u(t){return t&&t.__esModule?t:{default:t}}var c,l=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},p=function(t){var e=y(t,s.TAG_NAMES.TITLE),n=y(t,s.HELMET_PROPS.TITLE_TEMPLATE);if(n&&e)return n.replace(/%s/g,(function(){return e}));var r=y(t,s.HELMET_PROPS.DEFAULT_TITLE);return e||r||void 0},f=function(t){return y(t,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},d=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return o({},t,e)}),{})},h=function(t,e){return e.filter((function(t){return void 0!==t[s.TAG_NAMES.BASE]})).map((function(t){return t[s.TAG_NAMES.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},T=function(t,e,n){var o={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&A("Helmet: "+t+' should be of type "Array". Instead found type "'+r(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var r={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();-1===e.indexOf(c)||n===s.TAG_PROPERTIES.REL&&"canonical"===t[n].toLowerCase()||c===s.TAG_PROPERTIES.REL&&"stylesheet"===t[c].toLowerCase()||(n=c),-1===e.indexOf(u)||u!==s.TAG_PROPERTIES.INNER_HTML&&u!==s.TAG_PROPERTIES.CSS_TEXT&&u!==s.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!t[n])return!1;var l=t[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][l]&&(r[n][l]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(r),u=0;u<i.length;u++){var c=i[u],l=(0,a.default)({},o[c],r[c]);o[c]=l}return t}),[]).reverse()},y=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},E=(c=Date.now(),function(t){var e=Date.now();e-c>16?(c=e,t(e)):setTimeout((function(){E(t)}),0)}),m=function(t){return clearTimeout(t)},v="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||E:t.requestAnimationFrame||E,g="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||m:t.cancelAnimationFrame||m,A=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},b=null,S=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,u=t.noscriptTags,c=t.onChangeClientState,l=t.scriptTags,p=t.styleTags,f=t.title,d=t.titleAttributes;C(s.TAG_NAMES.BODY,r),C(s.TAG_NAMES.HTML,o),P(f,d);var h={baseTag:O(s.TAG_NAMES.BASE,n),linkTags:O(s.TAG_NAMES.LINK,i),metaTags:O(s.TAG_NAMES.META,a),noscriptTags:O(s.TAG_NAMES.NOSCRIPT,u),scriptTags:O(s.TAG_NAMES.SCRIPT,l),styleTags:O(s.TAG_NAMES.STYLE,p)},T={},y={};Object.keys(h).forEach((function(t){var e=h[t],n=e.newTags,r=e.oldTags;n.length&&(T[t]=n),r.length&&(y[t]=h[t].oldTags)})),e&&e(),c(t,T,y)},w=function(t){return Array.isArray(t)?t.join(""):t},P=function(t,e){void 0!==t&&document.title!==t&&(document.title=w(t)),C(s.TAG_NAMES.TITLE,e)},C=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(s.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),u=0;u<a.length;u++){var c=a[u],l=e[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),-1===o.indexOf(c)&&o.push(c);var p=i.indexOf(c);-1!==p&&i.splice(p,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(s.HELMET_ATTRIBUTE):n.getAttribute(s.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(s.HELMET_ATTRIBUTE,a.join(","))}},O=function(t,e){var n=document.head||document.querySelector(s.TAG_NAMES.HEAD),r=n.querySelectorAll(t+"["+s.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===s.TAG_PROPERTIES.INNER_HTML)n.innerHTML=e.innerHTML;else if(r===s.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var u=void 0===e[r]?"":e[r];n.setAttribute(r,u)}n.setAttribute(s.HELMET_ATTRIBUTE,"true"),o.some((function(t,e){return a=e,n.isEqualNode(t)}))?o.splice(a,1):i.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:i}},_=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},M=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[s.REACT_TAG_MAP[n]||n]=t[n],e}),e)},N=function(t,e,n){switch(t){case s.TAG_NAMES.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[s.HELMET_ATTRIBUTE]=!0,o=M(n,r),[i.default.createElement(s.TAG_NAMES.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=_(n),i=w(e);return o?"<"+t+" "+s.HELMET_ATTRIBUTE+'="true" '+o+">"+l(i,r)+"</"+t+">":"<"+t+" "+s.HELMET_ATTRIBUTE+'="true">'+l(i,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(e)},toString:function(){return _(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})[s.HELMET_ATTRIBUTE]=!0,r);return Object.keys(e).forEach((function(t){var n=s.REACT_TAG_MAP[t]||t;if(n===s.TAG_PROPERTIES.INNER_HTML||n===s.TAG_PROPERTIES.CSS_TEXT){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),i.default.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===s.TAG_PROPERTIES.INNER_HTML||t===s.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+l(r[e],n)+'"';return t?t+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===s.SELF_CLOSING_TAGS.indexOf(t);return e+"<"+t+" "+s.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}};e.convertReactPropstoHtmlAttributes=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[s.HTML_TAG_MAP[n]||n]=t[n],e}),e)},e.handleClientStateChange=function(t){b&&g(b),t.defer?b=v((function(){S(t,(function(){b=null}))})):(S(t),b=null)},e.mapStateOnServer=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,u=t.noscriptTags,c=t.scriptTags,l=t.styleTags,p=t.title,f=void 0===p?"":p,d=t.titleAttributes;return{base:N(s.TAG_NAMES.BASE,e,r),bodyAttributes:N(s.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:N(s.ATTRIBUTE_NAMES.HTML,o,r),link:N(s.TAG_NAMES.LINK,i,r),meta:N(s.TAG_NAMES.META,a,r),noscript:N(s.TAG_NAMES.NOSCRIPT,u,r),script:N(s.TAG_NAMES.SCRIPT,c,r),style:N(s.TAG_NAMES.STYLE,l,r),title:N(s.TAG_NAMES.TITLE,{title:f,titleAttributes:d},r)}},e.reducePropsToState=function(t){return{baseTag:h([s.TAG_PROPERTIES.HREF],t),bodyAttributes:d(s.ATTRIBUTE_NAMES.BODY,t),defer:y(t,s.HELMET_PROPS.DEFER),encode:y(t,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:d(s.ATTRIBUTE_NAMES.HTML,t),linkTags:T(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],t),metaTags:T(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],t),noscriptTags:T(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],t),onChangeClientState:f(t),scriptTags:T(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],t),styleTags:T(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],t),title:p(t),titleAttributes:d(s.ATTRIBUTE_NAMES.TITLE,t)}},e.requestAnimationFrame=v,e.warn=A}).call(this,n("yLpj"))},vrFN:function(t,e,n){"use strict";var r=n("JOti"),o=n("q1tI"),i=n.n(o),a=n("TJpk"),s=n.n(a);function u(t){var e=t.description,n=t.lang,o=t.meta,a=t.title,u=r.data.site,c=e||u.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:a,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:a},{property:"og:description",content:c},{property:"og:type",content:"website"}].concat(o)})}u.defaultProps={lang:"en",meta:[],description:""},e.a=u},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}t.exports=n}}]);
//# sourceMappingURL=4d54d37eab4a7134ebd9629ce963c23f53f16ae6-3d21186fcd8454291434.js.map