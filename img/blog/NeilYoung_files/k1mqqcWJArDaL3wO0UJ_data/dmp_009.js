(this.dmpJsonp=this.dmpJsonp||[]).push([["interaction"],{"/8ZD":function(e,t,n){"use strict";n.r(t),n.d(t,"__EXPORTED_CSS__",function(){return Ue}),n.d(t,"InteractionTypeTracking",function(){return y}),n.d(t,"ActiveElementTracking",function(){return I}),n.d(t,"RLCursorHandler",function(){return F}),n.d(t,"GestureManager",function(){return Re}),n.d(t,"DialogShortcutsLoader",function(){return qe});var r=n("2mXy"),o=n("/MKj"),s=n("fLyS"),a=()=>({type:s.c}),i=()=>({type:s.b}),c=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.tabKey,r=t.shiftKey;return{type:s.a,tabKey:n,shiftKey:r}},p=e=>({type:s.d,value:e}),u=e=>({type:s.e,value:e}),l=e=>{var t=e.onTouchActivation,n=e.onMouseActivation,r=e.onKeyboardActivation,o=e=>{e.defaultPrevented||t()},s=e=>{e.defaultPrevented||n()},a=e=>{e.defaultPrevented||r({tabKey:d(e),shiftKey:e.shiftKey})};document.addEventListener("touchstart",o),document.addEventListener("mousedown",s),document.addEventListener("keydown",a);var i=()=>{document.removeEventListener("touchstart",o),document.removeEventListener("mousedown",s),document.removeEventListener("keydown",a)};return{stop:i}},d=e=>9===v(e),v=e=>e.keyCode?e.keyCode:e.which,h=()=>({}),b=e=>({onTouchActivation:()=>{e(a())},onMouseActivation:()=>{e(i())},onKeyboardActivation:function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=n.tabKey,o=n.shiftKey;e(c({tabKey:r,shiftKey:o}))}});class g extends r.Component{componentDidMount(){var e=this.props,t=e.onTouchActivation,n=e.onMouseActivation,r=e.onKeyboardActivation;this.interactionTracking=l({onTouchActivation:t,onMouseActivation:n,onKeyboardActivation:r})}componentWillUnmount(){this.interactionTracking.stop()}}var y=Object(o.connect)(h,b)(g),T=n("BY5m"),m=e=>{var t=e.onActiveElementChanged,n=null,r=()=>{},o=()=>{var e=document,s=e.activeElement;if(n!==s){t({previousActiveElement:n,activeElement:s}),n=s;var a=e=>{r(),e.relatedTarget||o(e)};s.addEventListener("blur",a),r=()=>s.removeEventListener("blur",a)}},s=()=>{o()};return document.addEventListener("focus",s,!0),o(),()=>{document.removeEventListener("focus",s,!0),r()}},P=e=>e===document.body?"body":Object.keys(f).find(t=>Object(T.l)(e,e=>1===e.nodeType&&f[t](e)))||"other",f={mute:e=>e.className.indexOf("np_ButtonMute")>-1,"volume-slider":e=>e.className.indexOf("np_SliderVolume")>-1,"queue-skip":e=>e.className.indexOf("np_skip")>-1,"seek-slider":e=>"ProgressBarVideo"===e.id,queue:e=>{var t=document.querySelector(".np_DialogQueue");return t&&t.contains(e)}},E=()=>({}),k=e=>({changeActiveElementIdentifier:t=>{e(p(t))},changeActiveElementIsAControl:t=>{e(u(t))}});class C extends r.Component{componentDidMount(){var e=this.props,t=e.changeActiveElementIdentifier,n=e.changeActiveElementIsAControl;this.activeElementTracking=m({onActiveElementChanged:e=>{var r=e.activeElement;t(P(r)),n(Boolean(Object(T.f)(r)))}})}componentWillUnmount(){this.activeElementTracking.stop()}}var I=Object(o.connect)(E,k)(C),O=n("VIO4"),S=n("lLiM"),A=n("XgKk"),D=n("sNI+"),j=n("bwe7"),w=n("odYG"),H=n("61Dg"),R=n("Zrx9"),M=n("nAhJ"),L=3e3,x=5e3,K={behaviour:null,reason:null,delay:null},q=e=>{var t=e.props,n=e.prevProps,r=t.pointerIsOnPlayer,o=t.playbackIsPlaying;return t.settingsControls?_({props:t,prevProps:n})?{behaviour:"hide",reason:"controls-hidden-because-entered-fullscreen"}:G({props:t,prevProps:n})?{behaviour:"hide",reason:"controls-hidden-because-pointer-inactive"}:z({props:t,prevProps:n})?{behaviour:"show",reason:"controls-shown"}:K:B({props:t,prevProps:n})&&r?{behaviour:"showThenDelayHide",reason:"playback-stops-playing",delay:5e3}:W({props:t,prevProps:n})&&r?{behaviour:"delayHide",reason:"playback-starts-playing",delay:3e3}:Object(M.r)({prevProps:n,props:t})?o?{behaviour:"showThenDelayHide",reason:"pointer-moved-on-player-while-playing",delay:3e3}:{behaviour:"showThenDelayHide",reason:"pointer-moved-on-player-while-paused",delay:5e3}:K},_=e=>{var t=e.props,n=e.prevProps;return U({props:t,prevProps:n})&&"presentation-entered-fullscreen"===t.controlsAbsenceReason},G=e=>{var t=e.props,n=e.prevProps;return!!U({props:t,prevProps:n})&&("auto-hide-after-pointer-is-on-player-stops-matching"===t.controlsAbsenceReason||"auto-hide-after-pointer-moved-on-player-stops-matching"===t.controlsAbsenceReason)},U=e=>{var t=e.props,n=e.prevProps;return n.controlsPresent&&!t.controlsPresent},z=e=>{var t=e.props,n=e.prevProps;return!n.controlsPresent&&t.controlsPresent},B=e=>{var t=e.props,n=e.prevProps;return n.playbackIsPlaying&&!t.playbackIsPlaying},W=e=>{var t=e.props,n=e.prevProps;return!n.playbackIsPlaying&&t.playbackIsPlaying},N=R.default.get("pointer"),V="cursor_auto_hide",X=Object(j.a)({settingsControls:D.g,controlsAbsenceReason:O.a,controlsPresent:O.f,controlsPresenceReason:O.d,playbackIsPlaying:A.m,pointerIsOnPlayer:S.c,pointerPageX:S.f,pointerPageY:S.g}),Y=e=>({show:t=>{H.a.stop(V),N.log("show because ".concat(t)),e({type:w.n})},hide:t=>{H.a.stop(V),N.log("hide because ".concat(t)),e({type:w.m})},delayHide:(t,n)=>{H.a.stop(V),N.log("delayHide after ".concat(n,"ms after ").concat(t)),H.a.start(V,n,()=>{e((e,r)=>{Object(S.c)(r())&&(N.log("hide because ".concat(n,"ms elapsed after ").concat(t," and nothing else happened")),e({type:w.m}))})})}});class J extends r.Component{componentDidUpdate(e){var t=this.props,n=t.show,r=t.hide,o=t.delayHide,s=q({props:t,prevProps:e}),a=s.behaviour,i=s.reason,c=s.delay;"show"===a&&n(i),"hide"===a&&r(i),"delayHide"===a&&o(i,c),"showThenDelayHide"===a&&(n(i),o(i,c))}}var F=Object(o.connect)(X,Y)(J),Q=n("peh1"),Z=n("D71v"),$=n("Zw0V"),ee=n("hrlh"),te=n("eN2K"),ne=n("vGkh"),re=n("QK3A"),oe=n("lmov"),se=n("oz1E"),ae=3,ie=e=>{var t=e.element,n=e.onPreciseClick,r=null,o=e=>{var n=3===e.which;n||(r=Object(T.h)(e),t.addEventListener("mouseup",s))},s=e=>{t.removeEventListener("mouseup",s);var o=Object(T.h)(e);ce({previousPosition:r,currentPosition:o})&&n(e)};t.addEventListener("mousedown",o);var a=()=>{t.removeEventListener("mousedown",o),t.removeEventListener("mouseup",s)};return a},ce=e=>{var t=e.previousPosition,n=e.currentPosition,r=n.x-t.x;if(Math.abs(r)>3)return!1;var o=n.y-t.y;return!(Math.abs(o)>3)},pe=(e,t)=>{var n=e.startEvent,r=e.endEvent,o=Object(T.h)(n),s=Object(T.h)(r),a=s.x-o.x;if(Math.abs(a)>t)return!1;var i=s.y-o.y;return!(Math.abs(i)>t)},ue=(e,t)=>{var n=e.startEvent,r=e.endEvent,o=n.timeStamp,s=r.timeStamp,a=s-o;return a<t},le=1e3,de=350,ve=e=>{var t=e.element,n=e.onSingleTap,r=e.doubleTapEnabled,o=e.onDoubleTap,s,a=()=>{s=be({element:t,onCancel:()=>{a()},onEnd:e=>{if(he(e))return r()?void(s=be({element:t,onCancel:()=>{a()},msAllocatedToTap:350,onTimeout:()=>{n(e),a()},onEnd:e=>{o(e),a()}})):(n(e),void a());a()}})};a();var i=()=>{s.stop()};return i},he=e=>!!pe(e,9)&&!!ue(e,1e3),be=e=>{var t=e.element,n=e.onStart,r=void 0===n?()=>{}:n,o=e.onTimeout,s=e.onEnd,a=e.msAllocatedToTap,i=ge(),c=ye(t,"mousedown",e=>{r(e);var n=ye(t,"mouseup",t=>{i.cleanup(),s({startEvent:e,endEvent:t})});i.registerCleanupCallback(n.unregister)}),p=Te(a,()=>{i.cleanup(),o()});return i.registerCleanupCallback(c.unregister),i.registerCleanupCallback(p.unregister),{stop:i.cleanup}},ge=()=>{var e=[],t=t=>{e.push(t)},n=()=>{var t=e.slice();e.length=0,t.forEach(e=>e())};return{registerCleanupCallback:t,cleanup:n}},ye=(e,t,n)=>{var r=o=>{e.removeEventListener(t,r),n(o)};return e.addEventListener(t,r),{unregister:()=>{e.removeEventListener(t,r)}}},Te=(e,t)=>{var n=e?setTimeout(t,e):-1;return{unregister:()=>{clearTimeout(n)}}},me=n("pSfM"),Pe=Object(Q.createSelector)([Z.b,se.a],(e,t)=>!e&&!t),fe=Object(Q.createSelector)([$.d,Z.b,D.g,se.a],(e,t,n,r)=>!!t&&(!r&&!(!e&&n))),Ee=Object(Q.createSelector)([$.d,Z.b,D.g,O.f],(e,t,n,r)=>!e&&(!!t&&(!!n&&!r))),ke=Object(Q.createSelector)([$.d,Z.b,D.g,O.f,se.a],(e,t,n,r,o)=>!e&&(!!t&&(!!n&&(!!r&&!o)))),Ce=Object(Q.createSelector)([ee.a],e=>e),Ie=Object(Q.createStructuredSelector)({interactionModeCurrentIsTouch:Z.b,pointerEventsRequiredByAdvertising:se.a,isPreciseClickInteractionEnabled:Pe,isTapToTogglePlaybackEnabled:fe,isTapToShowControlsEnabled:Ee,isTapToHideControlsEnabled:ke,isTapToSeekEnabled:Ce,vr360InteractionEnabled:oe.a,controlsCursorHidden:O.c,controlsPresent:O.f,isReplayScreen:$.c,isSeekingInteractionEnabled:ee.c,playShouldRedirectOnsite:te.b,onsiteUrlWithUTMParams:te.a}),Oe=e=>({onPreciseClickToTogglePlayback:()=>{e(Object(ne.R)())},onPreciseClickToReloadVideo:()=>{e(Object(ne.E)())},onTapToTogglePlayback:()=>{e(Object(ne.R)())},onTapToShowControls:()=>{e(Object(ne.G)())},onTapToHideControls:()=>{e(Object(ne.F)())},onDoubleTapToQuickSeek:t=>{e(Object(ne.F)("tap-to-seek")),e(Object(re.e)()),e(Object(re.b)({direction:t}))}});class Se extends r.Component{constructor(e){super(e),this.setGestureDivRef=this.setGestureDivRef.bind(this)}bookHorizontalTouchAction(){this.gestureDivEl.style.touchAction="pan-y"}freeHorizontalTouchAction(){this.gestureDivEl.style.touchAction="auto"}startPreciseClickDetection(){var e=this.props,t=e.onPreciseClickToTogglePlayback,n=e.onPreciseClickToReloadVideo;this.stopPreciseClickDetection=ie({element:this.base,onPreciseClick:()=>{this.props.playShouldRedirectOnsite?window.open(this.props.onsiteUrlWithUTMParams):this.props.isReplayScreen?n():t()}})}startTapDetection(){this.stopTapDetection=ve({element:this.base,onSingleTap:()=>{var e=this.props;e.isTapToTogglePlaybackEnabled&&(e.playShouldRedirectOnsite?window.open(e.onsiteUrlWithUTMParams):e.onTapToTogglePlayback()),e.isTapToShowControlsEnabled&&e.onTapToShowControls(),e.isTapToHideControlsEnabled&&e.onTapToHideControls()},doubleTapEnabled:()=>this.props.isTapToSeekEnabled,onDoubleTap:e=>{var t=this.props;t.isTapToSeekEnabled&&(e.endEvent.preventDefault(),t.onDoubleTapToQuickSeek(Object(me.c)(e)))}})}componentDidMount(){this.props.isPreciseClickInteractionEnabled&&this.startPreciseClickDetection(),je(this.props)&&this.startTapDetection(),this.props.interactionModeCurrentIsTouch&&(this.props.isSeekingInteractionEnabled?this.bookHorizontalTouchAction():this.freeHorizontalTouchAction())}componentDidUpdate(e){var t=this.props;Ae(e,t)&&this.startPreciseClickDetection(),De(e,t)&&this.stopPreciseClickDetection(),we(e,t)&&this.startTapDetection(),He(e,t)&&this.stopTapDetection(),this.props.interactionModeCurrentIsTouch&&(!e.isSeekingInteractionEnabled&&this.props.isSeekingInteractionEnabled?this.bookHorizontalTouchAction():e.isSeekingInteractionEnabled&&!this.props.isSeekingInteractionEnabled&&this.freeHorizontalTouchAction())}componentWillUnmount(){this.stopPreciseClickDetection&&this.stopPreciseClickDetection(),this.stopTapDetection&&this.stopTapDetection()}setGestureDivRef(e){return this.gestureDivEl=e}render(e){var t=e.interactionModeCurrentIsTouch,n=e.isPreciseClickInteractionEnabled,o=e.isTapToTogglePlaybackEnabled,s=e.isTapToShowControlsEnabled,a=e.isTapToHideControlsEnabled,i=e.vr360InteractionEnabled,c=e.controlsCursorHidden;return Object(r.h)("div",{className:"np_Gesture np_Gesture-".concat(t?"tap":"click"),style:{height:"100%",cursor:c?"none":"auto","pointer-events":n||je({isTapToTogglePlaybackEnabled:o,isTapToShowControlsEnabled:s,isTapToHideControlsEnabled:a})?"auto":"none"},ref:this.setGestureDivRef},Object(r.h)("div",{className:"np_Gesture np_Gesture-vr360",style:{height:"100%",cursor:c?"none":"move","pointer-events":i?"auto":"none"}}))}}var Ae=(e,t)=>!e.isPreciseClickInteractionEnabled&&t.isPreciseClickInteractionEnabled,De=(e,t)=>e.isPreciseClickInteractionEnabled&&!t.isPreciseClickInteractionEnabled,je=e=>{var t=e.isTapToTogglePlaybackEnabled,n=e.isTapToHideControlsEnabled,r=e.isTapToShowControlsEnabled;return t||n||r},we=(e,t)=>!je(e)&&je(t),He=(e,t)=>je(e)&&!je(t),Re=Object(o.connect)(Ie,Oe)(Se),Me=n("sWkS"),Le=n("dpp8"),xe=n("7e/9"),Ke=e=>{var t=e.chunk;if(t.loaded){var n=t.value.DialogShortcuts;return Object(r.h)(n,null)}return null},qe=Object(xe.a)(Ke,{loadRequestedSelector:Le.f,load:Me.loadDialogChunk}),_e=n("vWbH"),Ge=n.n(_e),Ue=[{cssText:Ge.a,styleId:"dmp-async-style-gesture-manager"}]},lmov:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n("peh1"),o=n.n(r),s=n("D71v"),a=n("VIO4"),i=n("XB4t"),c=n("idq+"),p=n("FrIh"),u=n("oz1E"),l=Object(r.createSelector)([i.c,u.a,s.b,a.f,c.j,p.c],(e,t,n,r,o,s)=>!!e&&(!t&&(!o&&((!n||!r)&&!s))))},nAhJ:function(e,t,n){"use strict";n.d(t,"f",function(){return o}),n.d(t,"k",function(){return s}),n.d(t,"c",function(){return a}),n.d(t,"h",function(){return i}),n.d(t,"b",function(){return c}),n.d(t,"n",function(){return p}),n.d(t,"z",function(){return l}),n.d(t,"C",function(){return v}),n.d(t,"m",function(){return h}),n.d(t,"l",function(){return b}),n.d(t,"g",function(){return g}),n.d(t,"e",function(){return y}),n.d(t,"u",function(){return T}),n.d(t,"v",function(){return m}),n.d(t,"q",function(){return P}),n.d(t,"d",function(){return k}),n.d(t,"j",function(){return C}),n.d(t,"a",function(){return I}),n.d(t,"o",function(){return O}),n.d(t,"A",function(){return A}),n.d(t,"p",function(){return D}),n.d(t,"B",function(){return j}),n.d(t,"x",function(){return w}),n.d(t,"y",function(){return H}),n.d(t,"w",function(){return R}),n.d(t,"t",function(){return M}),n.d(t,"r",function(){return x}),n.d(t,"s",function(){return K}),n.d(t,"i",function(){return q});var r=n("zmjU"),o=e=>{var t=e.props;return!1===t.settingsControls},s=e=>{var t=e.props;return!1===t.metadataHasMetadata},a=e=>{var t=e.props;return t.isAlertDialogDisplayed},i=e=>{var t=e.prevProps,n=e.props;return!t.settingsControls&&n.settingsControls},c=e=>{var t=e.props;return t.menuSettingsIsOpened||t.shareIsOpened||t.shortcutsIsOpened},p=e=>{var t=e.props;return t.passwordRequired},u=e=>{var t=e.queueIsExpanding,n=e.queueIsExpanded,r=e.queueIsCollapsing;return!!t||!r&&!!n},l=e=>{var t=e.props;return u(t)},d=e=>{var t=e.shopListIsHovered,n=e.isShopDialogActive;return!!t||n},v=e=>{var t=e.props;return d(t)},h=e=>{var t=e.props;return t.isStartScreen},b=e=>{var t=e.props;return t.isOnEndscreen},g=e=>{var t=e.props;return t.controlsPresenceRequested},y=e=>{var t=e.props;return t.controlsAbsenceRequested},T=e=>{var t=e.props;return t.pointerIsOnPlayer},m=e=>{var t=e.props;return!t.pointerIsOnPlayer},P=e=>{var t=e.prevProps,n=e.props;return!0===t.pointerIsOnPlayer&&!1===n.pointerIsOnPlayer},f=e=>{var t=e.props;return t.controlsPresent},E=e=>{var t=e.prevProps,n=e.props;return!1===t.controlsPresent&&!0===n.controlsPresent},k=e=>{var t=e.props;return t.chromecastStatusIsActive},C=e=>{var t=e.props;return t.controlsFocusInsideProxy},I=e=>{var t=e.props;return t.activeElementIsAControl&&t.activeInteractionIsKeyboard},O=e=>{var t=e.prevProps,n=e.props;return!1===t.playbackIsPaused&&!0===n.playbackIsPaused},S=e=>{var t=e.prevProps,n=e.props;return!0===t.playbackIsPaused&&!1===n.playbackIsPaused},A=e=>{var t=e.props;return t.sequenceIsPreparingNext},D=e=>{var t=e.prevProps,n=e.props;return n.sequenceStep===r.a&&!1===t.playbackHasPlayedOnce&&n.videoSettingsAutoplay},j=e=>{var t=e.props;return t.sequenceStep===r.a},w=e=>{var t=e.props;return t.seekIsDragging},H=e=>{var t=e.props;return t.pointerIsSlidingVolume},R=e=>{var t=e.props;return t.pointerIsPanning360},M=e=>{var t=e.props;return t.pointerIsOnAControl},L=e=>{var t=e.prevProps,n=e.props;return t.pointerPageX!==n.pointerPageX||t.pointerPageY!==n.pointerPageY},x=e=>{var t=e.prevProps,n=e.props;return L({prevProps:t,props:n})&&n.pointerIsOnPlayer},K=e=>{var t=e.prevProps,n=e.props;return L({prevProps:t,props:n})&&!n.pointerIsOnPlayer},q=e=>{var t=e.prevProps,n=e.props;return!1===t.fullscreenIsOpened&&!0===n.fullscreenIsOpened}},pSfM:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return a});var r=n("BY5m"),o="backward",s="forward",a=e=>{var t=Object(r.h)(e.endEvent),n=e.startEvent.target,a=Object(r.i)({globalX:t.x,globalY:t.y},n),i=n.getBoundingClientRect().width,c=i/2;return a.x<c?o:s}},vWbH:function(e,t,n){var r=n("JPst");t=r(!1),t.push([e.i,".np_Gesture{bottom:0;position:absolute;width:100%}\n",""]),e.exports=t}}]);