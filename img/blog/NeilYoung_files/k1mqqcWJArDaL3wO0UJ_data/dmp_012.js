(this.dmpJsonp=this.dmpJsonp||[]).push([["dynamic_quality_switcher"],{"6xEa":function(t,e,r){var s,a=function(){function t(t,e){if(!a[t]){a[t]={};for(var r=0;r<t.length;r++)a[t][t.charAt(r)]=r}return a[t][e]}var e=String.fromCharCode,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",a={},i={compressToBase64:function(t){if(null==t)return"";var e=i._compress(t,6,function(t){return r.charAt(t)});switch(e.length%4){default:case 0:return e;case 1:return e+"===";case 2:return e+"==";case 3:return e+"="}},decompressFromBase64:function(e){return null==e?"":""==e?null:i._decompress(e.length,32,function(s){return t(r,e.charAt(s))})},compressToUTF16:function(t){return null==t?"":i._compress(t,15,function(t){return e(t+32)})+" "},decompressFromUTF16:function(t){return null==t?"":""==t?null:i._decompress(t.length,16384,function(e){return t.charCodeAt(e)-32})},compressToUint8Array:function(t){for(var e=i.compress(t),r=new Uint8Array(2*e.length),s=0,a=e.length;s<a;s++){var o=e.charCodeAt(s);r[2*s]=o>>>8,r[2*s+1]=o%256}return r},decompressFromUint8Array:function(t){if(null==t)return i.decompress(t);for(var r=new Array(t.length/2),s=0,a=r.length;s<a;s++)r[s]=256*t[2*s]+t[2*s+1];var o=[];return r.forEach(function(t){o.push(e(t))}),i.decompress(o.join(""))},compressToEncodedURIComponent:function(t){return null==t?"":i._compress(t,6,function(t){return s.charAt(t)})},decompressFromEncodedURIComponent:function(e){return null==e?"":""==e?null:(e=e.replace(/ /g,"+"),i._decompress(e.length,32,function(r){return t(s,e.charAt(r))}))},compress:function(t){return i._compress(t,16,function(t){return e(t)})},_compress:function(t,e,r){if(null==t)return"";var s,a,i={},o={},n="",h="",l="",u=2,d=3,c=2,f=[],v=0,g=0,p;for(p=0;p<t.length;p+=1)if(n=t.charAt(p),Object.prototype.hasOwnProperty.call(i,n)||(i[n]=d++,o[n]=!0),h=l+n,Object.prototype.hasOwnProperty.call(i,h))l=h;else{if(Object.prototype.hasOwnProperty.call(o,l)){if(l.charCodeAt(0)<256){for(s=0;s<c;s++)v<<=1,g==e-1?(g=0,f.push(r(v)),v=0):g++;for(a=l.charCodeAt(0),s=0;s<8;s++)v=v<<1|1&a,g==e-1?(g=0,f.push(r(v)),v=0):g++,a>>=1}else{for(a=1,s=0;s<c;s++)v=v<<1|a,g==e-1?(g=0,f.push(r(v)),v=0):g++,a=0;for(a=l.charCodeAt(0),s=0;s<16;s++)v=v<<1|1&a,g==e-1?(g=0,f.push(r(v)),v=0):g++,a>>=1}u--,0==u&&(u=Math.pow(2,c),c++),delete o[l]}else for(a=i[l],s=0;s<c;s++)v=v<<1|1&a,g==e-1?(g=0,f.push(r(v)),v=0):g++,a>>=1;u--,0==u&&(u=Math.pow(2,c),c++),i[h]=d++,l=String(n)}if(""!==l){if(Object.prototype.hasOwnProperty.call(o,l)){if(l.charCodeAt(0)<256){for(s=0;s<c;s++)v<<=1,g==e-1?(g=0,f.push(r(v)),v=0):g++;for(a=l.charCodeAt(0),s=0;s<8;s++)v=v<<1|1&a,g==e-1?(g=0,f.push(r(v)),v=0):g++,a>>=1}else{for(a=1,s=0;s<c;s++)v=v<<1|a,g==e-1?(g=0,f.push(r(v)),v=0):g++,a=0;for(a=l.charCodeAt(0),s=0;s<16;s++)v=v<<1|1&a,g==e-1?(g=0,f.push(r(v)),v=0):g++,a>>=1}u--,0==u&&(u=Math.pow(2,c),c++),delete o[l]}else for(a=i[l],s=0;s<c;s++)v=v<<1|1&a,g==e-1?(g=0,f.push(r(v)),v=0):g++,a>>=1;u--,0==u&&(u=Math.pow(2,c),c++)}for(a=2,s=0;s<c;s++)v=v<<1|1&a,g==e-1?(g=0,f.push(r(v)),v=0):g++,a>>=1;for(;;){if(v<<=1,g==e-1){f.push(r(v));break}g++}return f.join("")},decompress:function(t){return null==t?"":""==t?null:i._decompress(t.length,32768,function(e){return t.charCodeAt(e)})},_decompress:function(t,r,s){var a=[],i,o=4,n=4,h=3,l="",u=[],d,c,f,v,g,p,E,m={val:s(0),position:r,index:1};for(d=0;d<3;d+=1)a[d]=d;for(f=0,g=Math.pow(2,2),p=1;p!=g;)v=m.val&m.position,m.position>>=1,0==m.position&&(m.position=r,m.val=s(m.index++)),f|=(v>0?1:0)*p,p<<=1;switch(i=f){case 0:for(f=0,g=Math.pow(2,8),p=1;p!=g;)v=m.val&m.position,m.position>>=1,0==m.position&&(m.position=r,m.val=s(m.index++)),f|=(v>0?1:0)*p,p<<=1;E=e(f);break;case 1:for(f=0,g=Math.pow(2,16),p=1;p!=g;)v=m.val&m.position,m.position>>=1,0==m.position&&(m.position=r,m.val=s(m.index++)),f|=(v>0?1:0)*p,p<<=1;E=e(f);break;case 2:return""}for(a[3]=E,c=E,u.push(E);;){if(m.index>t)return"";for(f=0,g=Math.pow(2,h),p=1;p!=g;)v=m.val&m.position,m.position>>=1,0==m.position&&(m.position=r,m.val=s(m.index++)),f|=(v>0?1:0)*p,p<<=1;switch(E=f){case 0:for(f=0,g=Math.pow(2,8),p=1;p!=g;)v=m.val&m.position,m.position>>=1,0==m.position&&(m.position=r,m.val=s(m.index++)),f|=(v>0?1:0)*p,p<<=1;a[n++]=e(f),E=n-1,o--;break;case 1:for(f=0,g=Math.pow(2,16),p=1;p!=g;)v=m.val&m.position,m.position>>=1,0==m.position&&(m.position=r,m.val=s(m.index++)),f|=(v>0?1:0)*p,p<<=1;a[n++]=e(f),E=n-1,o--;break;case 2:return u.join("")}if(0==o&&(o=Math.pow(2,h),h++),a[E])l=a[E];else{if(E!==n)return null;l=c+c.charAt(0)}u.push(l),a[n++]=c+l.charAt(0),o--,c=l,0==o&&(o=Math.pow(2,h),h++)}}};return i}();s=function(){return a}.call(e,r,e,t),void 0===s||(t.exports=s)},DqVu:function(t,e,r){"use strict";function s(){this.attributes({resource:null,autoplay:!1,autoplayAllowed:!1,dependencies:null}),this.currentSource=null,this.decodeErrorCount=0,this.freezeErrorCount=0,this.decodeErrorDate=[null,null,null],this.pendingRecovery=!1,this._createHlsSource=function(t){null!==this.currentSource&&(this.currentSource.destroy(),this._unbindSourceEvents()),this.currentSource=A.createNew(this.videoTag,t,this.attr.dependencies.Hlsjs),this.currentSource.disableLevelCapping=f.a.isVR360Enabled(),this._bindSourceEvents()},this._bindSourceEvents=function(){this.currentSource.disableLevelCapping||(this.computeAutoLevelCapping=this.currentSource.computeAutoLevelCapping.bind(this.currentSource),this.on(i.a.PLAYER_SIZE_CHANGED,this.computeAutoLevelCapping),"function"==typeof window.matchMedia&&(this.mediaQuery=window.matchMedia("screen and (min-resolution: 2dppx)"),this.mediaQuery&&this.mediaQuery.addListener(this.computeAutoLevelCapping))),this.currentSource.on("level_state_change",this._onSourceLevelStateChange,this),this.currentSource.on("level_state_changed",this._onSourceLevelStateChanged,this),this.currentSource.on("fatal_error",this._onSourceFatalError,this)},this._unbindSourceEvents=function(){this.currentSource.disableLevelCapping||(this.off(i.a.PLAYER_SIZE_CHANGED,this.computeAutoLevelCapping),this.mediaQuery&&(this.mediaQuery.removeListener(this.computeAutoLevelCapping),this.mediaQuery=null),this.computeAutoLevelCapping=null),this.currentSource.off("level_state_change",this._onSourceLevelStateChange),this.currentSource.off("level_state_changed",this._onSourceLevelStateChanged),this.currentSource.off("fatal_error",this._onSourceFatalError,this)},this._onSourceLevelStateChange=function(t){var e={adaptive:t.adaptive,quality:this.qualityList.getQualityForLevel(t.levelIndex)};this.notifyQualityChangeConfirmed(e)},this._onSourceLevelStateChanged=function(t){var e=this.currentSource.getLiveEdgeDelay();e>0&&this.liveEdgeDelay!==e&&(this.liveEdgeDelay=e,this.trigger(i.a.LIVE_EDGE_DELAY_CHANGED,{delay:this.liveEdgeDelay}));var r={adaptive:t.adaptive,quality:this.qualityList.getQualityForLevel(t.levelIndex)};this.decodeErrorDate=[null,null,null],this.notifyQualityChanged(r)},this._onSourceFatalError=function(t){this.videoSlotStarted&&this._handleError(t.error)},this.waitForQualityList=function(){var t=this.attr.resource||this.attr.qualities.auto.find(t=>{var e=t.type;return e===C.a.HLS});return new Promise((e,r)=>{if(null!=t)this._createHlsSource(t),this.currentSource.waitForManifest().then(t=>{var r=t.manifestData.levels,s=t.resource,a=_.a.createFromLevels(r,s);if(this.trigger(i.a.DEBUG_UPDATE_REQUESTED,{type:"stream_origin",payload:{url:s.url,cell:this.currentSource.streamCell()}}),"videogames"===f.a.metadata("channel")&&"live"===f.a.metadata("stream_type")){var o=a.getHighestQuality();null!==o&&(o.tag="Source")}e(this.setQualityList(a))}).catch(t=>r(t));else{var s=new _.a;e(this.setQualityList(s))}})},this.getStats=function(t,e){if(!this.currentSource)return{};var r={decodeError:this.decodeErrorCount,freezeError:this.freezeErrorCount},s=this.currentSource.streamComment();if(s&&(r.comment=s),this.videoTag)if("function"==typeof this.videoTag.getVideoPlaybackQuality){var a=this.videoTag.getVideoPlaybackQuality();r.droppedVideoFrames=a.droppedVideoFrames,r.corruptedVideoFrames=a.corruptedVideoFrames}else{var o=this.videoTag.webkitDroppedFrameCount;o&&(r.droppedVideoFrames=o)}var n=this.currentSource.streamStats(e,this.qualityList);n&&(r.stream=n),this.trigger(i.a.QUALITY_STATS_RESPONDED,r)},this.changeQuality=function(t,e){var r=e.isStartup,s=e.isReplay,a=e.isRecovering,i=e.prefetch,o=null;o=a?"recover":s?"replay":r?"start":"current";var n=t.quality,h=this.qualityList.getLevelForQualityName(n.name),l={prefetch:i,heuristic:!1};r&&this.qualityChosenFromPlayerSize&&(l.heuristic=!0),this.pendingRecovery=a,this.currentSource.setLevel(h,t.adaptive,o,l).then(()=>{r&&!i&&this.videoTag&&this.videoTag.play()})},this.handleFirstSequenceStarted=function(){this.off(i.a.SEQUENCE_STARTED,this.handleFirstSequenceStarted),this.setup()},this.handleInitialQualitySet=function(t){this.changeQuality(t,{isStartup:!0,isReplay:!1,isRecovering:!1,prefetch:!0})},this.handleLoadedmetadataEvent=function(){if(this.trigger(i.a.VIDEO_LOADED_METADATA,{videoTagSelector:this.attr.videoTagSelector}),this.pendingRecovery){this.pendingRecovery=!1;var t={adaptive:this.currentSource.hls.autoLevelEnabled,quality:this.qualityList.getQualityForLevel(this.currentSource.hls.loadLevel)};this.notifyQualityChangeConfirmed(t,!0),this.notifyQualityChanged(t)}},this.handleErrorEvent=function(t){var e=t.target.error||{},r=null;switch(e.code){case e.MEDIA_ERR_ABORTED:r=a.f;break;case e.MEDIA_ERR_NETWORK:r=a.h;break;case e.MEDIA_ERR_DECODE:r=a.g;break;case e.MEDIA_ERR_SRC_NOT_SUPPORTED:r=a.i;break;default:r=a.m}this._handleError(r)},this._handleError=function(t){if(T.warn("error received:",t),t===a.g||"mediaErrorbufferAppendError"===t){var e=Date.now(),r=(this.decodeErrorCount+2)%3,s=this.decodeErrorDate[r];if(!s||e-s>3e3)return this.decodeErrorCount%2&&this.swapAudioCodec(),this.decodeErrorCount++,this.decodeErrorDate[r]=e,this.recoverDecodingError()}if("mediaErrorbufferStalledError"===t){var i=Date.now(),o=++this.freezeErrorCount,n=this.freezeErrorDate;if(this.freezeErrorDate=i,o<3&&(!n||i-n>1e4))return this.recoverDecodingError()}this.triggerQualitySwitcherError(t)},this.recoverDecodingError=function(){T.log("try to recover video decoding error"),this.currentSource.recoverDecodingError()},this.swapAudioCodec=function(){T.log("try to swap audio codec"),this.currentSource.swapAudioCodec()},this.streamCell=function(){return this.currentSource.streamCell()},this.streamTech=function(){return"hls.js"},this.after("initialize",function(){T.log("Initialized"),this.attr.autoplay&&this.attr.autoplayAllowed?this.handleFirstSequenceStarted():this.on(i.a.SEQUENCE_STARTED,this.handleFirstSequenceStarted),this.trigger(i.a.CAN_PLAY_ONE_SOURCE,{ok:!0}),this.on(i.a.VIDEO_ENDED,function(){this.currentSource.detachVideo()}),this.on(i.a.AD_LINEAR_WILL_START,function(t,e){var r=e.position;r!==R.a.MIDROLL&&r!==R.a.LIVEADBREAK||this.currentSource.detachVideo()}),this.on(i.a.CHROMECAST_REMOTE_ENABLED,function(){this.unbindMediaEvents(),this.currentSource.detachVideo()}),this.on(i.a.CHROMECAST_SESSION_STOPPED,function(){this.resetQualityState(),this.bindMediaEvents()}),this.on(i.a.LOAD_VIDEO,function(){this.teardown()})}),this.after("teardown",function(){T.log("Torn down"),this.currentSource&&(this._unbindSourceEvents(),this.currentSource.destroy(),this.currentSource=null)})}r.r(e);var a=r("XE2b"),i=r("znKg"),o=r("J4zp"),n=r.n(o),h=r("LwNu"),l=r("l/t8"),u=r("0oA5"),d=r("hHG0"),c=r("Zrx9"),f=r("i/kS"),v=r("6xEa"),g=r.n(v),p=c.default.get("Hls"),E="start",m="current",L="replay",S="recover",y=null;class b extends u.a{static createNew(t,e,r){return new b(t,e,r)}constructor(t,e,r){super(),y=r,this.hlsVersion=y.version||"stable",this.videoTag=t,this.resource=e,this.boundListeners=null,this.hls=null,this.manifestData=null,this.hashParams=null,this.mseAttached=!1,this.disableLevelCapping=!1,this.startLoad=!1,this.cumDownload=0,this.cumLatency=0,this.cumMux=0,this.cumBuffer=0,this.fragNb=0,this.fragDetailsNb=0,this.logArray=[],this.logMsg=null,this.resetStats(),this.logForwarder={log:function(t){this.appendMsg("log",t)}.bind(this),warn:function(t){this.appendMsg("warn",t)}.bind(this),error:function(t){this.appendMsg("error",t)}.bind(this),debug(t){p.debug(t)},info(t){p.info(t)}},this.hlsConfig={abrBandWidthFactor:.95,abrBandWidthUpFactor:.7,autoStartLoad:!1,debug:this.logForwarder,fragLoadingMaxRetry:2,fragLoadingTimeOut:2e4,highBufferWatchdogPeriod:4,levelLoadingMaxRetry:2,levelLoadingTimeOut:15e3,liveSyncDuration:24,manifestLoadingMaxRetry:2,manifestLoadingTimeOut:3e4,maxLoadingDelay:4,maxMaxBufferLength:30,maxStarvationDelay:4,maxSeekHole:4,nudgeMaxRetry:2,nudgeOffset:.3,startFragPrefetch:"recorded"===f.a.metadata("stream_type")}}appendMsg(t,e){if(e){if(!this.logMsg){var r=this.logArray,s=this.stats.maxLogs||100,a=performance.now(),i=this.t0=this.t0||a,o=Math.round(a-i);r.length>=s&&r.shift(),r.push("".concat(o,",").concat(t,": ").concat(e))}p[t](e)}}waitForManifest(){return new Promise((t,e)=>{if(this.hls||(p.log("create hls.js (".concat(this.hlsVersion,")")),this.hls=new y(this.hlsConfig),this.bindListeners()),this.manifestData)t(this);else{var r=(t,a)=>{a.fatal&&(p.error("catch fatal error at startup",a),this.hls.off(y.Events.ERROR,r),this.hls.off(y.Events.MANIFEST_PARSED,s),e(a))},s=(e,a)=>{d.M.saveEnd(d.o),p.log("succeed to parse manifest",a),this.hls.off(y.Events.ERROR,r),this.hls.off(y.Events.MANIFEST_PARSED,s),this.manifestData=a;var i=a.levels[a.firstLevel];this.parseHashParams(i.url[i.urlId]),t(this)};d.M.save(d.o),this.hls.on(y.Events.ERROR,r),this.hls.on(y.Events.MANIFEST_PARSED,s),this.hls.loadSource(this.resource.url)}})}attachVideo(){this.mseAttached||(p.log("Attach video to hls source"),this.hls.attachMedia(this.videoTag),this.mseAttached=!0,this.tvideo=performance.now())}setLevel(t,e,r){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=s.prefetch,i=void 0!==a&&a,o=s.heuristic,n=void 0!==o&&o;return i||this.attachVideo(),this.waitForManifest().then(()=>{var s=this.hls,a=!i,o=!1;r===E?(e?(n&&(t=-1),p.log("set hls.startLevel=".concat(t)),s.startLevel=t,this.stats.startLevel=t):(p.log("set hls.loadLevel=".concat(t)),s.loadLevel=t),this.startLoad||(d.M.save(d.p),p.log("call hls.startLoad()"),s.startLoad(),this.computeAutoLevelCapping(),this.startLoad=!0)):r===m?e?(p.log("set hls.nextLevel=".concat(-1)),s.nextLevel=-1,o=!0):s.autoLevelEnabled&&s.currentLevel===t||h.m()?(p.log("set hls.nextLevel=".concat(t)),s.nextLevel=t,o=!0):(p.log("set hls.currentLevel=".concat(t)),s.currentLevel=t):(s.startLoad(r===L?0:-1),a=!1),a&&this.notifyLevelStateChange(this.hls.autoLevelEnabled,t),o&&this.notifyLevelStateChanged(this.hls.autoLevelEnabled,t)})}getMaxLevelIndex(){var t=Math.max(160,this.videoTag.clientWidth)*Math.max(120,this.videoTag.clientHeight),e=window.devicePixelRatio;null!=e&&(t*=e*e);var r=this.hls.levels||[],s=r.length;if(0===s)return-1;for(var a=0;a<s;a++){var i=r[a],o=i.width*i.height;if(o>=.85*t)break}var n=Math.min(a,s-1);return n}notifyLevelStateChange(t,e){this.trigger("level_state_change",{adaptive:t,levelIndex:e})}notifyLevelStateChanged(t,e){this.trigger("level_state_changed",{adaptive:t,levelIndex:e})}computeAutoLevelCapping(){if(this.hls&&this.videoTag&&!this.disableLevelCapping){var t=this.getMaxLevelIndex(),e=this.hls.autoLevelCapping;t!==e&&(p.log("new capping index:".concat(t)),this.hls.autoLevelCapping=t,this.hls.autoLevelEnabled&&e>=0&&t>e&&(p.log("smooth switch up"),this.hls.nextLevel=-1))}}detachVideo(){p.log("Detach video from hls source");var t=this.hls;t&&null!==t.media&&t.detachMedia(),this.tvideo=void 0,this.mseAttached=!1}onHlsError(t,e){switch(e.details){case y.ErrorDetails.BUFFER_NUDGE_ON_STALL:var r=this.stats;r.nudgeNb=(r.nudgeNb||0)+1;break;case y.ErrorDetails.BUFFER_SEEK_OVER_HOLE:this.stats.maxBufferHole=this.stats.maxBufferHole>0?Math.max(this.stats.maxBufferHole,e.hole):e.hole;break;case y.ErrorDetails.INTERNAL_EXCEPTION:this.stats.exceptionNb++,this.stats.exception={event:e.event,stack:e.err.stack?JSON.stringify(e.err.stack).substr(0,1e3):e.err.message}}if(e.fatal){p.error("Received fatal HLS error:",t,e);var s=this.getHTTPStats(e);null!==s&&(this.stats.http=s),this.trigger("fatal_error",{error:e.type+e.details})}else p.warn("Received non-fatal HLS error:",t,e)}getHTTPStats(t){if(!t||!t.response)return null;var e={},r=t.response,s=t.frag||t.context;return r&&(e.code=parseInt(r.code||0),e.msg=(r.text||"").toLowerCase()),s&&(e.url=s.url||""),e}onLevelLoaded(t,e){d.M.hasSavedStart(d.p)&&d.M.saveEnd(d.p);var r=this.hls.config,s=this.hls.levels[e.level];s.details.live&&(this._liveEdgeDelay=r.liveSyncDuration>0?r.liveSyncDuration:r.liveSyncDurationCount*e.details.targetduration),s.urlId>0&&(this.stats.redundant=!0)}onCurrentFragmentChanged(t,e){this.notifyLevelStateChanged(this.hls.autoLevelEnabled,e.frag.level)}onFragBuffered(t,e){var r=this.stats,s=e.stats,a=s.tparsed,i=this.tvideo,o=i?Math.max(a,i):a,n=s.tload-s.trequest,h=s.tfirst-s.trequest,l=a-s.tload,u=s.tbuffered-o,d=n+l+u,c=r.minMs=r.minMs||{},f=r.maxMs=r.maxMs||{},v=this.cumDownload+=n,g=this.cumLatency+=h,p=this.cumMux+=l,E=this.cumBuffer+=u,m=v+p+E,L=++this.fragNb;r.HTTPDL+=s.loaded;var S=8*r.HTTPDL;this.appendFragDetails(e.frag,s),r.latency=Math.round(g/L),r.avgKbps={total:Math.round(S/m),dl:Math.round(S/v),mux:Math.round(S/p),buffer:Math.round(S/E)},r.avgMs={total:Math.round(m/L),dl:Math.round(v/L),mux:Math.round(p/L),buffer:Math.round(E/L)},d&&(c.total=Math.round(c.total?Math.min(c.total,d):d),f.total=Math.round(f.total?Math.max(f.total,d):d)),n&&(c.dl=Math.round(c.dl?Math.min(c.dl,n):n),f.dl=Math.round(f.dl?Math.max(f.dl,n):n)),l&&(c.mux=Math.round(c.mux?Math.min(c.mux,l):l),f.mux=Math.round(f.mux?Math.max(f.mux,l):l)),u&&(c.buffer=Math.round(c.buffer?Math.min(c.buffer,u):u),f.buffer=Math.round(f.buffer?Math.max(f.buffer,u):u))}onFragLoadEmergencyAborted(t,e){this.appendFragDetails(e.frag,e.stats),this.stats.emergencyNb++}appendFragDetails(t,e){if(this.fragDetailsNb<5){var r=this.videoTag,s=e.tparsed,a=this.tvideo,i=a?Math.max(s,a):s,o=e.tload-e.trequest,n=e.tfirst-e.trequest,h=e.loaded,l=s-e.tload,u=e.tbuffered-i,d=t.duration,c={start:Math.round(1e3*t.start),end:Math.round(1e3*(t.start+d)),l:t.level,pos:r?Math.round(1e3*r.currentTime):-1};n>0&&(c.lat=Math.round(n)),o>0&&(c.DLdur=Math.round(o)),h>0&&(c.len=h),h>0&&(c.kbps=Math.round(8*h/(o+l+u))),e.aborted&&(c.aborted=!0),l>0&&(c.mux=Math.round(l)),u>0&&(c.buffer=Math.round(u));var f=this.stats,v=f.frags=f.frags||{},g=v.minDuration;v.minDuration=g?Math.min(Math.round(d),g):Math.round(d),v["f".concat(this.fragDetailsNb)]=c,this.fragDetailsNb++}}recoverDecodingError(){var t=!this.videoTag.paused;p.log("playing state before recovery:",t);var e=()=>{this.hls.off(y.Events.MEDIA_ATTACHED,e),this.hls.startLoad(),t&&(p.log("video was playing before recovery, relaunch playback"),this.videoTag.play())};this.hls.recoverMediaError(),this.hls.on(y.Events.MEDIA_ATTACHED,e)}swapAudioCodec(){this.hls.swapAudioCodec()}bindListeners(){null==this.boundListeners&&(this.boundListeners={onCurrentFragmentChanged:this.onCurrentFragmentChanged.bind(this),onFragBuffered:this.onFragBuffered.bind(this),onFragLoadEmergencyAborted:this.onFragLoadEmergencyAborted.bind(this),onHlsError:this.onHlsError.bind(this),onLevelLoaded:this.onLevelLoaded.bind(this)},this.hls.on(y.Events.FRAG_CHANGED,this.boundListeners.onCurrentFragmentChanged),this.hls.on(y.Events.FRAG_BUFFERED,this.boundListeners.onFragBuffered),this.hls.on(y.Events.FRAG_LOAD_EMERGENCY_ABORTED,this.boundListeners.onFragLoadEmergencyAborted),this.hls.on(y.Events.ERROR,this.boundListeners.onHlsError),this.hls.on(y.Events.LEVEL_LOADED,this.boundListeners.onLevelLoaded))}unbindListeners(){null!=this.boundListeners&&(this.hls.off(y.Events.FRAG_CHANGED,this.boundListeners.onCurrentFragmentChanged),this.hls.off(y.Events.FRAG_BUFFERED,this.boundListeners.onFragBuffered),this.hls.off(y.Events.FRAG_LOAD_EMERGENCY_ABORTED,this.boundListeners.onFragLoadEmergencyAborted),this.hls.off(y.Events.ERROR,this.boundListeners.onHlsError),this.hls.off(y.Events.LEVEL_LOADED,this.boundListeners.onLevelLoaded),this.boundListeners=null)}streamCell(){return this.getHashParam("cell")}streamComment(){return this.getHashParam("comment")}getHashParam(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=this.hashParams;if(r){var s=null!==e&&r[e]?r[e]:r;return s[t]?s[t]:null}return null}parseHashParams(t){if(!this.hashParams){var e=Object(l.e)(t),r=e.hash,s=void 0===r?null:r;if(s){var a=this.hashParams={},i=this.onHashParamParsed.bind(this),o=Object(l.d)(s,!0);for(var h in o){var u=h.split("_"),d=n()(u,2),c=d[0],f=d[1],v=void 0===f?null:f;null===v?(a[h]=o[h],i(h,o[h])):(a[c]||(a[c]={}),a[c][v]=o[h],i(v,o[h],c))}p.log("Parsed hash-params:",a)}}}onHashParamParsed(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;switch(r){case"hls":this.updateHLSConfigParam(t,e,!0);break;case"ab":case"qos":this.stats[t]=e}}updateHLSConfigParams(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t)for(var r in t){var s=t[r];this.updateHLSConfigParam(r,s,e)}}updateHLSConfigParam(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];"function"==typeof e?p.log("update hlsjs config param: ".concat(t,"=function(){}")):p.log("update hlsjs config param: ".concat(t,"=").concat(e));var s=this.hls?this.hls.config:this.hlsConfig;isNaN(e)||"boolean"==typeof e||(e=parseFloat(e)),s[t]=e,r&&(this.stats[t]=e)}streamStats(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,r=t.verbose||!1;if(r&&(this.logMsg||(this.logMsg=g.a.compressToBase64(this.logArray.join("\n")),this.logArray=[]),this.stats.logs=this.logMsg),e){var s=this.hls;if(s&&s.autoLevelCapping>-1){var a=e.getQualityForLevel(s.autoLevelCapping),i=null!==a?a.height:0;i>0&&(this.stats.autoLevelCapping=i)}}return this.stats}getLiveEdgeDelay(){return this._liveEdgeDelay||0}resetStats(){this.stats={version:this.hlsVersion,HTTPDL:0,emergencyNb:0,exceptionNb:0,latency:0}}destroy(){p.log("Destroy hls source"),this.resetStats(),this.detachVideo(),this.unbindListeners();var t=this.hls;t&&(t.destroy(),this.hls=null),y=null,this.hlsVersion=null,this.manifestData=null,this.hashParams=null,this.hlsConfig=null,this.startLoad=!1}}var A=b,C=r("z/W+"),_=r("Bau3"),M=r("yTBV"),D=r("zC0q"),R=r("G1FZ"),T=c.default.get("DynamicQuality"),w=e.default=Object(M.a)(D.a,s)}}]);