(this.dmpJsonp=this.dmpJsonp||[]).push([["dialog"],{"0Ztb":function(e,t,n){var a=n("JPst");t=a(!1),t.push([e.i,".np_DialogShortcuts{align-items:center;color:#fff;justify-content:center;left:0;z-index:2}.np_DialogShortcuts-close{position:absolute;right:0;top:0}.np_DialogShortcuts-col{columns:2;flex:1}.np_DialogShortcuts-list--secondary{display:none}.np_DialogShortcuts-key,.np_DialogShortcuts-val{display:inline-block;padding:0 1px;position:relative;vertical-align:middle}.np_DialogShortcuts-key{font-size:.625em;text-align:right;width:40%}.np_DialogShortcuts-val{font-size:.6875em;padding-left:5px;width:60%}.np_DialogShortcuts-kbd{background:none;border:1px solid #fff;border-radius:0;display:inline-block;font-size:100%;height:20px;line-height:18px;margin:3px 5px;min-width:20px;text-align:center}.np_DialogShortcuts-kbd--word{padding:0 5px}.dmp_h-min-m .np_DialogShortcuts-close{top:0}.dmp_h-min-m .np_DialogShortcuts-list{padding:15px 0 0}.dmp_h-min-m .np_DialogShortcuts-list--secondary{display:block}.dmp_h-min-l .np_DialogShortcuts-key{font-size:.6875em}.dmp_h-min-l .np_DialogShortcuts-val{font-size:.875em}.dmp_h-min-l .np_DialogShortcuts-kbd{box-shadow:-1px 1px;height:30px;line-height:30px;margin:5px;min-width:30px;position:relative}.dmp_h-min-l .np_DialogShortcuts-kbd--word{padding:0 10px}\n",""]),e.exports=t},"3+Mv":function(e,t,n){var a=n("JPst");t=a(!1),t.push([e.i,".np_menu{background:rgba(0,0,0,0.7);bottom:0;display:flex;flex-direction:column;overflow:hidden;right:0;z-index:2}.np_MainNeon--highlight .np_menu{background:rgba(var(--npHighlightColourRGB), 0.9);color:var(--npContrastColour)}.np_menu .np_dialog-body{overflow-x:hidden}.np_menu-back{padding:15px}.dmp_h-min-s .np_menu-back{padding:15px 15px 15px 20px}.dmp_h-min-m .np_menu-back{padding:20px 0 20px 20px}.dmp_h-min-ll .np_menu{width:375px}.np_menu-item{align-items:center;border-bottom:1px solid rgba(255,255,255,0.2);cursor:pointer;display:flex;min-height:38px;padding:0 15px}.np_menu-item:last-child{border-bottom:0 none}.dmp_Player-keyboard-focus .np_menu-item:focus{outline:2px dotted #56c7ff;outline-offset:-2px}.dmp_h-min-s .np_menu-item{min-height:48px;padding:0 20px}.dmp_h-min-m .np_menu-item{min-height:68px;padding:0 25px}.np_menu-icon{display:none;flex:0 0 auto;height:20px;margin-right:10px;width:20px}.np_menu-item .np_icon--next{margin-left:auto}.np_menu-item .np_icon--Checkmark{display:block;margin-left:15px;order:1}.dmp_h-min-xs .np_menu-item .np_icon--next{margin-left:10px}.dmp_h-min-s .np_menu-icon{display:block}.dmp_h-min-m .np_menu-icon{margin-right:15px}.dmp_h-min-m .np_menu-item .np_icon--Checkmark{margin-right:0}.np_menu-text{display:block;font-size:14px;line-height:1;padding-right:10px}.np_menu-list--lvl-1>.np_menu-item--highlighted>.np_menu-text{font-weight:500}.dmp_h-min-l .np_menu-text{padding:25px 0}.np_menu-value{color:var(--npContrastColour);display:none;font-size:14px;margin-left:auto;opacity:0.7}.dmp_h-min-xs .np_menu-value{display:block}.np_menu-value--nosubmenu{display:block;margin-right:28px}.np_menu-item--highlighted .np_menu-value--nosubmenu{opacity:1}.dmp_h-min-m .np_menu-value--nosubmenu{margin-right:34px}.np_MainNeon--highlight .np_menu-item{border-bottom-color:rgba(var(--npContrastColourRGB), 0.1)}.dmp_Player-keyboard-focus .np_MainNeon--highlight .np_menu-item:focus{outline-color:var(--npContrastColour)}.np_MainNeon--highlight .np_menu-item--highlighted>.np_menu-text{color:var(--npContrastColour)}.np_menu-list{left:0;list-style:none;margin:0;padding:0;position:relative;transition:all 0.3s}.np_menu-list .np_menu-list{left:100%;position:absolute;top:0;width:100%}\n",""]),e.exports=t},V9fO:function(e,t,n){"use strict";function a(e){var t=document.createElement("textarea");t.style.position="fixed",t.style.top=0,t.style.left=0,t.style.opacity=0,t.value=e,document.body.appendChild(t),t.select();var n=document.execCommand("copy");return document.body.removeChild(t),n}n.d(t,"a",function(){return a})},c1HI:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n("peh1"),i=n.n(a),o=n("Zw0V"),l=n("sNI+"),c=n("VfPQ"),r=n("qxOG"),s=Object(a.createSelector)([l.s,r.b,c.L],(e,t,n)=>n.length>0&&Object(o.h)(e,t))},"s+wg":function(e,t,n){"use strict";function a(e){return{isAttached:Object(Re.b)(e),highlighted:!1,Icon:Ee.a,id:"collections",label:z.a.__("neon:::Add to playlist"),selected:!1}}function i(){return Object(E.a)()}function o(){var e=!Object(ze.c)()&&Object(Ve.b)()&&!Le.a.isOnsite();return{isAttached:e,highlighted:!1,Icon:Fe.a,id:"consent",label:z.a.__("consent:::Manage cookies"),selected:!1}}function l(){return()=>{Object(le.a)("/legal/consent#purposes")}}function c(e){return{isAttached:Object(ze.g)(e),highlighted:!1,Icon:Fe.a,id:Be,label:z.a.__("consent:::Do Not Sell My Personal Info"),selected:!1,value:"/legal/usprivacy"}}function r(e){return()=>{Object(le.a)(e)}}function s(e){return{isAttached:Object(ze.g)(e),highlighted:!1,Icon:Ue.a,id:Ge,label:z.a.__("consent:::Privacy policy"),selected:!1,value:"/legal/privacy#ccpa"}}function u(e){return()=>{Object(le.a)(e)}}function d(e,t,n,a){return[{name:"Auto",label:"Auto"},...t].map(t=>{var i=n===t.name,o="Auto"!==t.name;return{highlighted:i&&o,Icon:i?Xe.a:null,className:"np_icon--Checkmark",id:t.name,isAttached:o||e,label:o||!a?t.label:"".concat(t.label," (").concat(a,")"),selected:i,value:{adaptive:"Auto"===t.name,qualityName:t.name}}})}function p(e){return Object(E.C)(e)}function h(e){return[.5,.75,1,1.25,1.5,2].map(function(t){var n=e===t;return{highlighted:n&&1!==t,Icon:n?Xe.a:null,className:"np_icon--Checkmark",id:"".concat(t),isAttached:!0,label:1!==t?"".concat(t,"x"):z.a.__("neon:::Normal"),selected:n,value:t}})}function m(e){return Object(E.N)(e)}function b(e){return{type:nt.b,code:e}}function g(e,t){return e.map(function(e){var n=e.code===t;return{highlighted:n&&-1!==t,Icon:n?Xe.a:null,className:"np_icon--Checkmark",id:-1===e.code?"none":e.code,isAttached:!0,label:e.label,selected:n,value:e.code}})}function _(e){return e?Object(st.a)({from:"menu"}):Object(st.b)({from:"menu"})}function f(e){return Object(E.t)({mode:!e,from:"menu"})}function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach(function(t){Te()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach(function(t){Te()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Et.b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Rt.d:return j({},e,{request:"open"});case Rt.c:return j({},e,{request:"",opened:!0});case Rt.a:return j({},e,{request:"close"});case Rt.b:return j({},e,{request:"",opened:!1});default:return e}}n.r(t),n.d(t,"__EXPORTED_CSS__",function(){return Vt}),n.d(t,"DialogShare",function(){return De}),n.d(t,"DialogShortcuts",function(){return Ce}),n.d(t,"MenuSettings",function(){return Tt}),n.d(t,"menuSettingsReducer",function(){return k});var y={};n.r(y),n.d(y,"menuItemId",function(){return qe}),n.d(y,"getMenuItemList",function(){return a}),n.d(y,"actionForItem",function(){return i});var D={};n.r(D),n.d(D,"menuItemId",function(){return Je}),n.d(D,"getMenuItemList",function(){return o}),n.d(D,"actionForItem",function(){return l});var x={};n.r(x),n.d(x,"menuItemId",function(){return Be}),n.d(x,"getMenuItemList",function(){return c}),n.d(x,"actionForItem",function(){return r});var N={};n.r(N),n.d(N,"menuItemId",function(){return Ge}),n.d(N,"getMenuItemList",function(){return s}),n.d(N,"actionForItem",function(){return u});var I={};n.r(I),n.d(I,"menuItemId",function(){return We}),n.d(I,"getMenuItemList",function(){return Ze}),n.d(I,"actionForItem",function(){return p});var w={};n.r(w),n.d(w,"menuItemId",function(){return et}),n.d(w,"getMenuItemList",function(){return tt}),n.d(w,"actionForItem",function(){return m});var C={};n.r(C),n.d(C,"menuItemId",function(){return ot}),n.d(C,"getMenuItemList",function(){return rt}),n.d(C,"actionForItem",function(){return b});var M={};n.r(M),n.d(M,"menuItemId",function(){return mt}),n.d(M,"getMenuItemList",function(){return bt}),n.d(M,"actionForItem",function(){return _});var P={};n.r(P),n.d(P,"menuItemId",function(){return St}),n.d(P,"getMenuItemList",function(){return vt}),n.d(P,"actionForItem",function(){return f});var A=n("pVnL"),T=n.n(A),R=n("2mXy"),E=n("vGkh"),q=n("VfPQ"),L=n("iErd"),V=n("+kBE"),z=n("iiVM"),F=n("6kjv"),J=n("/MKj"),B=n("V9fO"),U=n("bJx/"),G={triggerShareItemActionEvent:E.U,showNotificationRequested:E.L,closeDialogShare:E.i},Q=e=>{var t=e.service,n=e.url,a=e.showNotificationRequested,i=e.triggerShareItemActionEvent,o=e.closeDialogShare;return Object(R.h)(V.a,{"aria-labelledby":"np_DialogShare-".concat(t),className:"np_DialogShare-link",onClick:e=>{i(t);var l=Object(B.a)(n);a(l?"Copied link":"Sorry, could not copy link"),o(e)}},Object(R.h)("div",{className:"np_force-flexbox"},Object(R.h)("div",{className:"np_DialogShare-icon"},Object(R.h)(F.a,{Icon:U.a})),Object(R.h)("div",{id:"np_DialogShare-".concat(t),className:"np_DialogShare-label"},z.a.__("neon:::Copy link"))))},X=Object(J.connect)(null,G)(Q),H=n("Zrx9"),W=n("kLdi"),Z=n("peh1"),K=H.default.get("UI"),Y=Object(Z.createStructuredSelector)({metadataURL:q.ab}),$={triggerShareItemActionEvent:E.U,showNotificationRequested:E.L,closeDialogShare:E.i},ee=e=>{navigator.share({title:z.a.__("neon:::Share"),url:e}).then(()=>K.log("Shared via Web Share API")).catch(e=>K.log("Error sharing via Web Share API",e))},te=e=>{var t=e.service,n=e.metadataURL;return Object(R.h)(V.a,{className:"np_DialogShare-link",onClick:()=>ee(n)},Object(R.h)("div",{className:"np_force-flexbox"},Object(R.h)("div",{className:"np_DialogShare-icon"},Object(R.h)(F.a,{Icon:W.a,height:20,width:20})),Object(R.h)("div",{id:"np_DialogShare-".concat(t),className:"np_DialogShare-label",style:{textTransform:"none"}},z.a.__("neon:::Send via..."))))},ne=Object(J.connect)(Y,$)(te),ae=n("qF6C"),ie=n("+Da9"),oe=n("E6zV"),le=n("S2l0"),ce=n("6C1J"),re=n("ijQ1"),se=n("0V7D"),ue=n("rMKf"),de=n("NTiN"),pe=Object(Z.createStructuredSelector)({contextOnsite:re.w}),he=(e,t)=>n=>{n(Object(ce.b)()).then(()=>{Object(le.b)(e,t)})},me={triggerShareItemActionEvent:E.U,exitFullScreenAndOpenPopup:he,triggerEmbedRequestedEvent:E.S,pauseOnOpenLink:E.z},be=e=>{switch(e){case"embed":return se.a;case"permalink":return U.a;case"twitter":return de.a;case"facebook":return ue.a}},ge=e=>{var t=e.service,n=e.url,a=e.contextOnsite,i=e.triggerShareItemActionEvent,o=e.exitFullScreenAndOpenPopup,l=e.triggerEmbedRequestedEvent,c=e.pauseOnOpenLink;return Object(R.h)(oe.a,{"aria-label":z.a.__("neon:::%service% (opens in a new window)",{service:t}),className:"np_DialogShare-link",href:n,onClick:e=>{i(t),"embed"===t?a?(e.preventDefault(),l()):c():(e.preventDefault(),o(n,t))},target:"_blank"},Object(R.h)("div",{className:"np_DialogShare-icon"},Object(R.h)(F.a,{Icon:be(t)})),Object(R.h)("div",{id:"np_DialogShare-".concat(t),className:"np_DialogShare-label"},t))},_e=Object(J.connect)(pe,me)(ge),fe=n("fvjX"),Se=n("c1HI"),ve=n("wipR"),Oe=n("VgT9"),je=n("w0Tu"),ke=e=>({services:Object(q.L)(e)});class ye extends R.Component{render(e){var t=e.services,n=e.close,a=e.onRef,i=e.fadingStyle;return Object(R.h)(ae.a,{dialogContentClassName:"np_DialogShare",id:"np_DialogShare",labelId:"np_DialogShare-title",onRef:a,style:i},Object(R.h)("div",{className:"np_header np_dialog-header"},Object(R.h)("div",{id:"np_DialogShare-title",className:"np_dialog-title"},z.a.__("neon:::Share")),Object(R.h)(V.a,{"aria-label":z.a.__("neon:::Close"),title:z.a.__("neon:::Close"),className:"np_button np_close",onClick:n},Object(R.h)(F.a,{Icon:je.a}))),Object(R.h)("div",{className:"np_dialog-body np_DialogShare-body"},Object(ve.j)()?Object(R.h)(ne,null):"",t.map(e=>"permalink"===e.service&&Object(ve.g)()?Object(R.h)(X,T()({key:e.service},e)):Object(R.h)(_e,T()({key:e.service},e)))))}}var De=Object(fe.compose)(Object(J.connect)(ke),e=>Object(ie.a)(e,{selectors:{isOpened:L.d,isEnabled:Se.a,isOpenRequested:L.c,isCloseRequested:L.b},actions:{opened:E.n,closed:E.m,close:E.i}}),Oe.a)(ye),xe=n("wG4q"),Ne=n.n(xe),Ie=n("7LgJ");class we extends R.Component{render(e){var t=e.close,n=e.onRef;return Object(R.h)(ae.a,{dialogContentClassName:"np_DialogShortcuts",ariaLabel:z.a.__("neon:::Shortcuts help panel"),onRef:n},Object(R.h)("button",{"aria-label":z.a.__("neon:::Close the shortcuts panel"),title:"close",className:"np_DialogShortcuts-close np_button np_close",onClick:t},Object(R.h)(F.a,{Icon:je.a})),Object(R.h)("div",{className:"np_DialogShortcuts-col"},Object(R.h)("dl",{className:"np_DialogShortcuts-list"},Object(R.h)("dt",{className:"np_DialogShortcuts-key"},Object(R.h)("kbd",{className:"np_DialogShortcuts-kbd np_DialogShortcuts-kbd--word"},"Space")),Object(R.h)("dd",{className:"np_DialogShortcuts-val"},z.a.__("neon:::Play/Pause"))),Object(R.h)("dl",{className:"np_DialogShortcuts-list"},Object(R.h)("dt",{className:"np_DialogShortcuts-key"},Object(R.h)("kbd",{className:"np_DialogShortcuts-kbd"},"↑")),Object(R.h)("dd",{className:"np_DialogShortcuts-val"},z.a.__("neon:::Increase volume")),Object(R.h)("dt",{className:"np_DialogShortcuts-key"},Object(R.h)("kbd",{className:"np_DialogShortcuts-kbd"},"↓")),Object(R.h)("dd",{className:"np_DialogShortcuts-val"},z.a.__("neon:::Decrease volume")),Object(R.h)("dt",{className:"np_DialogShortcuts-key"},Object(R.h)("kbd",{className:"np_DialogShortcuts-kbd"},"m")),Object(R.h)("dd",{className:"np_DialogShortcuts-val"},z.a.__("neon:::Mute sound"))),Object(R.h)("dl",{className:"np_DialogShortcuts-list"},Object(R.h)("dt",{className:"np_DialogShortcuts-key"},Object(R.h)("kbd",{className:"np_DialogShortcuts-kbd"},"f")),Object(R.h)("dd",{className:"np_DialogShortcuts-val"},z.a.__("neon:::Enter fullscreen")),Object(R.h)("dt",{className:"np_DialogShortcuts-key"},Object(R.h)("kbd",{className:"np_DialogShortcuts-kbd np_DialogShortcuts-kbd--word"},"Esc")),Object(R.h)("dd",{className:"np_DialogShortcuts-val"},z.a.__("neon:::Exit fullscreen"))),Object(R.h)("dl",{className:"np_DialogShortcuts-list np_DialogShortcuts-list--secondary"},Object(R.h)("dt",{className:"np_DialogShortcuts-key"},Object(R.h)("kbd",{className:"np_DialogShortcuts-kbd"},"→")),Object(R.h)("dd",{className:"np_DialogShortcuts-val"},z.a.__("neon:::Skip forward 5s")),Object(R.h)("dt",{className:"np_DialogShortcuts-key"},Object(R.h)("kbd",{className:"np_DialogShortcuts-kbd"},"←")),Object(R.h)("dd",{className:"np_DialogShortcuts-val"},z.a.__("neon:::Skip back 5s")),Object(R.h)("dt",{className:"np_DialogShortcuts-key"},Object(R.h)("kbd",{className:"np_DialogShortcuts-kbd np_DialogShortcuts-kbd--word"},"Shift"),Object(R.h)("kbd",{className:"np_DialogShortcuts-kbd"},"→")),Object(R.h)("dd",{className:"np_DialogShortcuts-val"},z.a.__("neon:::Skip forward 10s")),Object(R.h)("dt",{className:"np_DialogShortcuts-key"},Object(R.h)("kbd",{className:"np_DialogShortcuts-kbd np_DialogShortcuts-kbd--word"},"Shift"),Object(R.h)("kbd",{className:"np_DialogShortcuts-kbd"},"←")),Object(R.h)("dd",{className:"np_DialogShortcuts-val"},z.a.__("neon:::Skip back 10s")),Object(R.h)("dt",{className:"np_DialogShortcuts-key"},Object(R.h)("kbd",{className:"np_DialogShortcuts-kbd"},"0"),Object(R.h)("span",null,"-"),Object(R.h)("kbd",{className:"np_DialogShortcuts-kbd"},"9")),Object(R.h)("dd",{className:"np_DialogShortcuts-val"},z.a.__("neon:::Skip to 0%-90%")))))}}var Ce=Object(ie.a)(we,{selectors:{isOpened:Ie.d,isOpenRequested:Ie.c,isCloseRequested:Ie.b},actions:{opened:E.p,closed:E.o,close:E.j}}),Me=n("0Ztb"),Pe=n.n(Me),Ae=n("lSNA"),Te=n.n(Ae),Re=n("Zw0V"),Ee=n("HU0/"),qe="collections",Le=n("i/kS"),Ve=n("D15q"),ze=n("+V5D"),Fe=n("QJgX"),Je="consent",Be="do-no-sell-my-personal-info",Ue=n("OJ2E"),Ge="privacy-policy",Qe=n("XANi"),Xe=n("mC+a"),He=n("bJS/"),We="quality",Ze=Object(Z.createSelector)([q.y,Qe.b,Qe.c,Qe.f,Qe.e],(e,t,n,a,i)=>{var o=[];return"audio"!==e&&(o=d(t,n,a,i)),{highlighted:a&&"Auto"!==a,Icon:He.a,id:We,isAttached:o.length>0,items:o,label:z.a.__("neon:::Quality"),currentValue:a,title:z.a.__("neon:::Quality")}}),Ke=n("4bgk"),Ye=n("XgKk"),$e=n("3fN8"),et="speed",tt=Object(Z.createSelector)([Ke.b,q.O,Ye.q],(e,t,n)=>{var a=!t&&!e;return{highlighted:1!==n,Icon:$e.a,id:"speed",isAttached:a,items:a?h(n):[],label:z.a.__("neon:::Speed"),currentValue:1===n?z.a.__("neon:::Normal"):n,title:z.a.__("neon:::Speed")}}),nt=n("1dbn"),at=n("I2B8"),it=n("wM/W"),ot="subtitles",lt=Object(Z.createSelector)([q.R],e=>(e=Object.keys(e).sort().map(t=>({label:e[t].label,code:t})),e.unshift({label:z.a.__("neon:::None"),code:-1}),e)),ct=e=>Object(q.S)(e),rt=Object(Z.createSelector)([lt,ct,at.b],(e,t,n)=>{var a=e.find(e=>e.code===n).label;return{highlighted:-1!==n,Icon:it.a,id:ot,isAttached:t,items:t?g(e,n):[],label:z.a.__("neon:::Subtitles"),currentValue:1!==n?a:"Off",title:z.a.__("neon:::Subtitles")}}),st=n("eeF7"),ut=n("idq+"),dt=n("s9Tm"),pt=n("YBhn"),ht=n("OQ6W"),mt="autoplay_next",bt=Object(Z.createSelector)([dt.a,ut.c,pt.a],(e,t,n)=>({currentValue:t?z.a.__("neon:::On"):z.a.__("neon:::Off"),highlighted:t,Icon:ht.a,id:mt,isAttached:e||n,label:z.a.__("neon:::Autoplay next"),selected:t,value:t})),gt=n("D71v"),_t=n("YFYB"),ft=n("kzUF"),St="interaction_mode",vt=Object(Z.createSelector)([gt.b],e=>({currentValue:e?"On":"Off",highlighted:e,Icon:ft.a,id:St,isAttached:Object(_t.a)(),label:z.a.__("neon:::Touch mode"),selected:e,value:e})),Ot=n("+Tp8"),jt=n("Ag2v"),kt=n("UHYq"),yt=(e,t)=>{if("string"!=typeof t)return"";var n=t.replace(/\W/g,"-").toLowerCase();return 1===e.length?"np_".concat(n,"-menu-item"):"np_".concat(e[1].id,"-menu-item--").concat(n)},Dt=e=>{var t=e.closeSubMenu,n=e.onItemSelected,a=e.openSubMenu,i=e.level,o=e.isAttached,l=e.highlighted,c=e.id,r=e.label,s=e.currentValue,u=e.value,d=e.selected,p=e.Icon,h=void 0===p?null:p,m=e.className,b=void 0===m?"":m,g=e.items,_=void 0===g?null:g,f=e.title,S=void 0===f?null:f,v=e.parents,O=e.visibleTree,j=e=>{e.stopPropagation(),_?a([...v,{id:c,value:u,title:S}]):(n([...v,{id:c,value:u}]),i>0&&t())},k=e=>{"Enter"!==e.key&&" "!==e.key||j(e)},y=null;h&&(y=Object(R.h)(F.a,{Icon:h,className:"np_menu-icon ".concat(b)}));var D=null,x=null,N={},I=i+1,w=O[I]&&O[I].id===c;return _&&(D=Object(R.h)(It,{itemId:c,itemValue:u,parents:v,closeSubMenu:t,level:I,onItemSelected:n,openSubMenu:a,style:{display:w?"block":"none"},visibleTree:O},_),x=Object(R.h)(F.a,{Icon:kt.a,className:"np_icon--next"})),N={"aria-label":r,"aria-checked":_?null:d?"true":"false","aria-haspopup":_?"true":null,"aria-expanded":_?w?"true":"false":null},o?Object(R.h)("li",T()({id:yt(v,c)},N,{className:"np_menu-item np_menu-item--lvl-".concat(i," ").concat(l?"np_menu-item--highlighted":""),onClick:j,onKeyPress:k,role:_?"menuitem":"menuitemradio",tabIndex:"0"}),y,Object(R.h)("span",{className:"np_menu-text"},r),Object(R.h)("span",{className:"np_menu-value np_menu-value--".concat(x?"withsubmenu":"nosubmenu")},s),x,D):null},xt=Dt,Nt=e=>{var t=e.children,n=e.closeSubMenu,a=e.itemId,i=void 0===a?"root":a,o=e.itemValue,l=void 0===o?null:o,c=e.level,r=void 0===c?0:c,s=e.onItemSelected,u=e.openSubMenu,d=e.parents,p=void 0===d?[]:d,h=e.style,m=void 0===h?null:h,b=e.visibleTree;return Object(R.h)("ul",{className:"np_menu-list np_menu-list--lvl-".concat(r),style:m,role:"menu","aria-labelledby":"np_MenuSettings-title"},t.map(e=>Object(R.h)(xt,T()({},e,{closeSubMenu:n,level:r,onItemSelected:s,openSubMenu:u,parents:[...p,{id:i,value:l}],visibleTree:b}))))},It=Nt,wt=[y,I,C,w,D,M,N,x,P],Ct=e=>({isAttached:Object(jt.c)(e),items:wt.map(t=>t.getMenuItemList(e))}),Mt=e=>({onItemSelected(t){var n=wt.find(e=>e.menuItemId===t[1].id);e(n.actionForItem(t[t.length-1].value))}}),Pt={visibleTree:[{id:"root"}],isTransitioning:!1};class At extends R.Component{constructor(){super(),this.state=v({},Pt)}componentWillReceiveProps(e){this.props.isAttached&&!e.isAttached&&this.setState(Pt)}openSubMenu(e){this.state.isTransitioning||(this.setState({visibleTree:e,isTransitioning:!0}),setTimeout(()=>{this.setState({isTransitioning:!1})},300))}closeSubMenu(){if(!this.state.isTransitioning){var e=[...this.state.visibleTree];e.pop(),this.setState({visibleTree:e,isTransitioning:!0}),setTimeout(()=>{this.setState({isTransitioning:!1})},300)}}render(e){var t=e.items,n=e.onItemSelected,a=e.close,i=e.onRef,o=e.fadingStyle,l=this.state.visibleTree.length;return Object(R.h)(ae.a,{dialogContentClassName:"np_menu np_MenuSettings",onRef:i,style:o},Object(R.h)("div",{className:"np_dialog-header np_menu-header"},l>1?Object(R.h)(V.a,{"aria-label":z.a.__("neon:::Back"),className:"np_button np_menu-back",onClick:this.closeSubMenu.bind(this)},Object(R.h)(F.a,{Icon:kt.a,className:"np_icon--back"})):null,Object(R.h)("div",{className:"np_dialog-title","aria-live":"polite",id:"np_MenuSettings-title"},l>1?this.state.visibleTree[l-1].title:z.a.__("neon:::Settings")),Object(R.h)(V.a,{"aria-label":z.a.__("neon:::Close"),className:"np_button np_close np_menu-close",onClick:a},Object(R.h)(F.a,{Icon:je.a}))),Object(R.h)("div",{className:"np_dialog-body np_menu-body"},Object(R.h)(It,{closeSubMenu:this.closeSubMenu.bind(this),onItemSelected:n,openSubMenu:this.openSubMenu.bind(this),style:{transform:"translateX( ".concat(-100*(l-1),"%)")},visibleTree:this.state.visibleTree},t)))}}var Tt=Object(fe.compose)(Object(J.connect)(Ct,Mt),e=>Object(ie.a)(e,{selectors:{isOpened:jt.c,isOpenRequested:jt.b,isCloseRequested:jt.a},actions:{opened:Ot.c,closed:Ot.b,close:Ot.a},focusLeaveBehaviour:"close"}),Oe.a)(At),Rt=n("22zM"),Et=n("1vZ8"),qt=n("3+Mv"),Lt=n.n(qt),Vt=[{cssText:Ne.a,styleId:"dmp-async-style-dialog-share"},{cssText:Pe.a,styleId:"dmp-async-style-dialog-shortcuts"},{cssText:Lt.a,styleId:"dmp-async-style-menu-settings"}]},wG4q:function(e,t,n){var a=n("JPst");t=a(!1),t.push([e.i,".np_DialogShare{background:rgba(0,0,0,0.7);display:flex;flex-flow:column nowrap;z-index:2}.np_MainNeon--highlight .np_DialogShare{background:rgba(var(--npHighlightColourRGB), 0.9);color:var(--npContrastColour)}.np_DialogShare-body{align-items:center;display:flex;flex:1 1 0;flex-flow:row nowrap;flex-direction:column;justify-content:flex-start}.dmp_h-min-ll .np_DialogShare{position:absolute;right:0;top:0;width:375px}.np_DialogShare-link{background:none;border:0 none;border-bottom:1px solid rgba(255,255,255,0.2);color:inherit;cursor:pointer;font-size:14px;min-height:38px;padding:0 15px;width:100%}.np_DialogShare-link:last-child{border-bottom:0 none}.np_DialogShare-link,.np_DialogShare-link .np_force-flexbox{align-items:center;display:flex}.np_DialogShare-link:link,.np_DialogShare-link:visited,.np_DialogShare-link:hover{color:#fff;text-decoration:none}.np_MainNeon--highlight .np_DialogShare-link:link,.np_MainNeon--highlight .np_DialogShare-link:visited,.np_MainNeon--highlight .np_DialogShare-link:hover{color:var(--npContrastColour);border-bottom-color:rgba(var(--npContrastColourRGB), 0.1)}.dmp_Player-keyboard-focus .np_DialogShare-link:focus{outline-color:#56c7ff}.dmp_Player-keyboard-focus .np_MainNeon--highlight .np_DialogShare-link:focus{outline-color:var(--npContrastColour)}.dmp_h-min-s .np_DialogShare-link{min-height:48px;padding:0 20px}.dmp_h-min-m .np_DialogShare-link{min-height:68px;padding:0 25px}.np_DialogShare-icon{height:20px;width:20px}.dmp_h-min-m .np_DialogShare-icon{height:24px;width:24px}.np_DialogShare-icon svg{height:100%;width:100%}.np_DialogShare-label{display:block;font-weight:100;padding-left:10px;text-transform:capitalize}.dmp_h-min-m .np_DialogShare-label{padding-left:15px}\n",""]),e.exports=t}}]);