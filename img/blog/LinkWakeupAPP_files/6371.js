(self.webpackChunklite=self.webpackChunklite||[]).push([[6371],{66443:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(67294);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.47 9.95h17v-3h-17v3zm16 1h1a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-17a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1v9a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-9zm-1 0h-13v9h13v-9z"}),a=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.47 12.45c0-.28.21-.5.48-.5h6.04c.27 0 .48.22.48.5 0 .27-.21.5-.48.5H9.95a.49.49 0 0 1-.48-.5z"});const l=function(e){return r.createElement("svg",o({width:25,height:25,viewBox:"0 1 25 25",fill:"#757575"},e),i,a)}},17298:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(67294);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.48 7.45H3.46v10.13H16a.47.47 0 1 1 0 .94H3.46c-.54 0-.99-.42-.99-.94V7.45c0-.52.45-.93 1-.93h17c.55 0 1 .41 1 .93v5.57a.5.5 0 0 1-1 0V7.45zM5.47 10.02c0-.28.22-.5.5-.5h9.11a.5.5 0 1 1 0 1H5.97a.5.5 0 0 1-.5-.5zm.51 2.5a.5.5 0 0 0-.51.5c0 .27.23.5.51.5h5.98a.5.5 0 0 0 .51-.5.5.5 0 0 0-.51-.5H5.98zm12.52 3.02c.2-.2.5-.2.7 0l1.77 1.77 1.77-1.77a.5.5 0 1 1 .7.7l-1.76 1.78 1.76 1.76a.5.5 0 1 1-.7.71l-1.77-1.77-1.77 1.77a.5.5 0 0 1-.7-.7l1.76-1.77-1.76-1.77a.5.5 0 0 1 0-.7z"});const a=function(e){return r.createElement("svg",o({width:25,height:25,viewBox:"0 0 25 25",fill:"#757575"},e),i)}},94093:(e,t,n)=>{"use strict";n.d(t,{I:()=>f});var r,o=n(59713),i=n.n(o),a=n(67294),l=n(7530),c=n(64504);!function(e){e.S="S",e.L="L"}(r||(r={}));var s=n(28309),u=n(80637),d=n(67122),f=function(e){var t=e.children,n=e.scale,o=void 0===n?r.L:n,f=e.alpha,m=void 0===f?.05:f,p=e.verticalMargins,v=void 0===p?{normal:"24px",small:"24px"}:p,E=(0,s.Iq)();return a.createElement("div",{className:E((function(e){return i()({background:(0,d.Uy)(m),borderRadius:"4px",margin:"".concat(v.normal," -16px"),position:"relative"},u.sm(e),{margin:"".concat(v.small," -12px 0")})}))},a.createElement(l.xu,{display:"flex",justifyContent:"space-between",maxWidth:"740px",padding:"16px",sm:{padding:"12px"}},a.createElement(c.F,{scale:o,color:"DARKER"},t)))}},66371:(e,t,n)=>{"use strict";n.d(t,{Cs:()=>K,Dj:()=>W});var r=n(28655),o=n.n(r),i=n(71439),a=n(67294),l=n(28859),c=n(63038),s=n.n(c),u=n(46829),d=n(94093),f=n(64235),m=n(7530),p=n(62630),v=n(27572),E=n(28309),h=n(72955);function g(){var e=o()(["\n  fragment DigestReferredPostBodyCreatorPromo_user on User {\n    id\n    name\n    isFollowing\n  }\n"]);return g=function(){return e},e}var x=(0,i.Ps)(g()),I=function(e){var t=e.creator,n=e.postId,r=a.useRef(null),o=(0,E.Iq)(),i=(0,u.useMutation)(f.L,{variables:{targetUserId:t.id}}),l=s()(i,1)[0],c=(0,u.useMutation)(f.g,{variables:{targetUserId:t.id}}),g=s()(c,1)[0],x=(0,p.Av)(),I="post_body_cta",b=a.useCallback((function(){return x.event("user.followed",{targetUserId:t.id,followSource:I}),l()}),[t.id,I,l]),w=a.useCallback((function(){return x.event("user.unfollowed",{targetUserId:t.id,followSource:I}),g()}),[t.id,I,g]),_=(0,v.pK)(),y=!1,R=function(){!y&&L()&&(x.event("post.digestReferredFollowCreatorPromoViewed",{postId:n,targetUserId:t.id,source:_}),y=!0)},L=function(){var e;if(!r.current)return!1;var t=null===(e=r.current)||void 0===e?void 0:e.getBoundingClientRect(),n=t.top+t.height/2;return n>=0&&n<=window.innerHeight};a.useEffect((function(){return R(),window&&h.V6.on("scroll",R),function(){h.V6.off("scroll",R)}}),[]);var N=t.isFollowing;return a.createElement("div",{ref:r},a.createElement(d.I,{alpha:.02,verticalMargins:{normal:"42px",small:"28px"}},N?a.createElement(a.Fragment,null,"You’re now following ",t.name,"."," ",a.createElement(m.rU,{onClick:w,inline:!0,linkStyle:"OBVIOUS"},"Unfollow")):a.createElement(a.Fragment,null,"You've read a few stories by this writer."," ",a.createElement("span",{className:o({fontWeight:"bold"})},a.createElement(m.rU,{onClick:b,linkStyle:"OBVIOUS"},"Follow ",t.name))," ","to see more of their stories across Medium.")))},b=n(4743),w=n(47875),_=n(50493),y=n(88065),R=n(47713),L=n(57131),N=n(85828),T=n(50077),S=n(49925),C=n(85740),A=n(55077),k=n(98281),B=n(41832),P=n(22091),D=n(6688),O=n(27390);function M(){var e=o()(["\n  fragment PostBodyInserts_post on Post {\n    collection {\n      ...auroraHooks_publisher\n    }\n    creator {\n      ...auroraHooks_publisher\n      ...DigestReferredPostBodyCreatorPromo_user\n      ...UserMentionTooltip_user\n    }\n    isPublished\n    isShortform\n    # please note that postMeteringOptions is defined in PostHandler, which uses PostBodyInserts\n    content(postMeteringOptions: $postMeteringOptions) {\n      bodyModel {\n        paragraphs {\n          name\n          text\n          type\n        }\n      }\n    }\n    ...CardByline_post\n    ...PostByline_post\n    ...PostFooterSocialPopover_post\n    ...ShareButtons_post\n    ...BookmarkButton_post\n    ...CreatorActionOverflowPopover_post\n  }\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return M=function(){return e},e}var F=function(){return null};function H(e){var t=e.post,n=(0,D.I)(),r=(0,S.GT)(t.collection||t.creator),o={marginTop:"32px"},i={post:t,source:{name:"post_actions_header"}};return a.createElement(l.TA,{className:n(o),name:"byline",type:"byline",offset:{left:-600}},a.createElement(m.xu,{display:"flex",justifyContent:"space-between",xs:{marginTop:o.marginTop},sm:{flexDirection:"column-reverse",marginTop:o.marginTop}},r&&t.creator?a.createElement(T.u_,{avatar:a.createElement(k.ZP,{user:t.creator,scale:"XXS",link:!0,withHalo:!0}),publisher:t.creator,href:t.mediumUrl||void 0,isOneLine:!0,publishedAt:t.firstPublishedAt,showStar:!!t.isLocked,timeToRead:!t.isShortform&&t.readingTime?"".concat((0,O.Vd)(t.readingTime)," min read"):void 0,post:t}):a.createElement(w.Z,{scale:"M",post:t,showBio:!1,hideCollection:!0}),a.createElement(m.xu,{display:"flex",alignItems:"flex-end",print:{display:"none"},xs:{marginLeft:"0px",marginBottom:"30px"},sm:{marginLeft:"0px",marginBottom:"30px"},md:{marginLeft:"30px"},lg:{marginLeft:"30px"},xl:{marginLeft:"30px"}},a.createElement(m.xu,{display:"flex",alignItems:"center"},t.isPublished&&(!r||!t.isShortform)&&a.createElement(a.Fragment,null,r?a.createElement(m.xu,{paddingRight:"8px"},a.createElement(N.$,i)):a.createElement(A.n,i),a.createElement(m.xu,{marginRight:"8px"},a.createElement(v.cW,{source:{name:"post_actions_header"}},a.createElement(R.o,{post:t,susiEntry:"bookmark_preview"}))),t&&a.createElement(m.xu,{flexGrow:"1"},a.createElement(m.Bn,null,(function(e){var n=e.show;return a.createElement(L.Z,{creator:null==t?void 0:t.creator,post:t,collection:null==t?void 0:t.collection,showLoadingIndicator:n})}))))))))}function U(e,t){return"".concat(t,"_").concat(e[t]?e[t].length:0)}function G(e,t,n,r,o){e[t]||(e[t]=[]),e[t].push({order:n,component:r,insertType:o})}function Z(e,t,n){return function(r){var o="number"==typeof n.titleIndex,i=n.subtitleIndex||n.titleIndex||0,l=t[i]&&t[i].name;if(l&&0===i&&!o){var c=a.createElement(H,{post:e,key:"insert_postBylineGroupComponent_".concat(U(r,"first"))});G(r,"first","before",a.createElement(P.Pm,{size:"inset",key:"insert_MaxWidth_PostBylineGroupComponent_".concat(U(r,"first"))},c),"BYLINE")}else l&&G(r,l,"after",a.createElement(H,{post:e,key:"insert_PostBylineGroupComponent_".concat(U(r,l))}),"BYLINE");return r}}function V(e,t,n){return(0,_.tE)(e)?function(r){var o="number"==typeof n.titleIndex,i=Math.max(n.bannerImageIndex||n.subtitleIndex||n.titleIndex||0,n.subtitleIndex||n.titleIndex||0),l=t[i]&&t[i].name;if(l&&0===i&&!o){var c=a.createElement(_.ZP,{post:e,mode:"INLINE",key:"insert_TOC_".concat(U(r,"first"))});G(r,"first","before",a.createElement(P.Pm,{size:"inset",key:"insert_MaxWidth_TableOfContents_".concat(U(r,"first"))},c),"TABLE_OF_CONTENTS")}else l&&G(r,l,"after",a.createElement(_.ZP,{post:e,mode:"INLINE",key:"insert_TableOfContents_".concat(U(r,l))}),"TABLE_OF_CONTENTS");return r}:function(e){return e}}function z(e,t,n){var r=(0,b.ZV)(t),o=r.index,i=r.ordering;return"number"==typeof o&&n?function(n){var r=t[o]&&t[o].name,l=a.createElement(I,{creator:e.creator,postId:e.id,key:"insert_DigestReferredPostBodyCreatorPromo_".concat(U(n,r))}),c=a.createElement(C.bZ,{name:"enable_digest_referred_follow_cta",placeholder:F,key:"insert_WithClientFlag_DigestReferredPostBodyCreatorPromo_".concat(U(n,r))},(function(e){return e?l:null}));return G(n,r,i,c,"DIGEST_REFERRED_CREATOR_PROMO"),n}:function(e){return e}}function W(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e&&e.content&&e.content.bodyModel&&e.content.bodyModel.paragraphs||void 0;if(n){var r=(0,b.LI)(n);return[Z(e,n,r),V(e,n,r),z(e,n,t)].reduce((function(e,t){return t(e)}),{})}}var K=(0,i.Ps)(M(),S.C5,x,T.yu,w.H,N.u,A.$,y.z,L.G,B.OJ)},50493:(e,t,n)=>{"use strict";n.d(t,{tA:()=>b,ZP:()=>y,tE:()=>w});var r=n(28655),o=n.n(r),i=n(71439),a=n(67294),l=n(4743),c=n(51684),s=n(82318),u=n(98024),d=n(28309),f={INLINE:{padding:"8px 0",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},SIDEBAR:{padding:"8px 0",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",width:"".concat(c.ZR,"px"),":hover":{width:"200px"}}};function m(e){var t=(0,d.Iq)();return a.createElement("li",{className:t({overflow:"hidden"})},a.createElement(u.F,{scale:"M",color:"DARKER"},a.createElement(s.Z,{href:"#".concat(e.destination),onClick:function(t){t.preventDefault(),function(e){var t=document.getElementById(e);if(t){var n=t.offsetTop-56;window.scrollTo({left:0,top:n,behavior:"smooth"}),window.history.pushState({},"","#".concat(e))}}(e.destination)},disableSourceParam:!0,noFollow:!0,inline:!0},a.createElement("div",{className:t(f[e.mode]),title:e.text},e.text))))}var p=n(7654),v=n(42933),E=n(86021),h=n(14391),g=n(67122),x=n(25885);function I(){var e=o()(["\n  fragment TableOfContents_post on Post {\n    id\n    collection {\n      id\n    }\n    content(postMeteringOptions: $postMeteringOptions) {\n      bodyModel {\n        paragraphs {\n          id\n          name\n          type\n          text\n        }\n      }\n    }\n  }\n"]);return I=function(){return e},e}var b=(0,i.Ps)(I()),w=function(e){return!!(e.collection&&e.collection.id&&["3ec9f38ac0bd","3f6ecf56618","8d6b8a439e32"].includes(e.collection.id))||["8135e6744d59","21f0e9818b3a"].includes(e.id)},_={INLINE:{display:{xs:"block",sm:"block",md:"block",lg:"block",xl:"none"},marginTop:"35px"},SIDEBAR:{display:{xs:"none",sm:"none",md:"none",lg:"none",xl:"block"},margin:"50px 0",fontSize:"16px",":hover":{width:"200px"}}};const y=function(e){var t=e.post,n=e.mode,r=e.heightRef,o=(0,d.Iq)(),i=(0,d.Fg)().backgroundColor,c=function(e){var t=(e||{content:{bodyModel:{paragraphs:null}}}).content.bodyModel.paragraphs;if(!t)throw new Error("Expected post to have paragraphs.");var n=(0,l.LI)(t),r=t.filter((function(e){return function(e){switch(e){case h.NJ.H1:case h.NJ.H2:case h.NJ.H3:return!0}return!1}(e.type)}));return null!==n.titleIndex&&r.splice(0,1),r.length>1?r:[]}(t);if(!w(t)||null==c||!c.length)return null;var s,u,f=a.createElement(v.Z,{overflow:"hidden",marginTop:"16px"},a.createElement("ol",{className:o({marginTop:"5px"})},c.map((function(e){return a.createElement(m,{key:"toc_".concat(e.name),text:e.text||"",destination:e.name||"",mode:n})})))),I=(0,x.n2)(i),b=function(e){return"rgba(".concat(I[0],", ").concat(I[1],", ").concat(I[2],", ").concat(e,")")};switch(n){case"INLINE":var y=a.createElement(E.Lh,{scale:"M",color:"LIGHTER"},a.createElement("div",{className:o({marginRight:"7px"})},"Jump To Section"));return a.createElement("div",{className:o(_[n])},a.createElement(v.Z,{borderBottom:"BASE_LIGHTER",paddingBottom:"10px"},a.createElement(p.$,{titleComponent:y,width:"auto",arrowFill:(0,g.Uy)(.54)},f)));case"SIDEBAR":return a.createElement("div",{className:o(_[n])},a.createElement(E.Lh,{scale:"S",color:"LIGHTER"},a.createElement("div",{className:o({whiteSpace:"nowrap"})},"Table of Contents")),a.createElement(v.Z,{position:"relative"},a.createElement("div",{className:o((function(){return{background:"linear-gradient(".concat(b(1),",\n      ").concat(b(.5),",\n      ").concat(b(0),")"),width:"100%",height:"".concat(35,"px")}}))}),a.createElement("div",{className:o({overflowY:"scroll",scrollbarWidth:"none","-ms-overflow-style":"none","::-webkit-scrollbar":{display:"none"},height:(s=null!=r&&r.current?r.current.offsetHeight:0,u=Math.max("undefined"!=typeof window?window.innerHeight-s-106-100:150,150),"".concat(u,"px")),paddingBottom:"".concat(35,"px"),position:"relative",top:"-".concat(35,"px")})},f),a.createElement("div",{className:o((function(){return{background:"linear-gradient(".concat(b(0),",\n      ").concat(b(.5),",\n      ").concat(b(1),")"),position:"relative",width:"100%",height:"".concat(35,"px"),top:"-".concat(35,"px")}}))})));default:return null}}},47713:(e,t,n)=>{"use strict";n.d(t,{o:()=>R});var r=n(63038),o=n.n(r),i=n(67294),a=n(86753),l=n(9482),c=n(3021),s=n(17771),u=n(62181),d=n(7530),f=n(33914),m=n(62630),p=n(27572),v=n(28309),E=n(14391),h=n(67297),g=n(71254),x=n(66443),I=n(17298),b=n(27952),w=function(e,t){return e&&{READING_LIST_QUEUE:"READING_LIST_ARCHIVE",READING_LIST_ARCHIVE:"READING_LIST_NONE"}[t]},_=function(e){return{fill:e.baseColor.fill.lighter}},y=function(e){var t=e.currentReadingListType,n=(0,v.Iq)();return{READING_LIST_QUEUE:i.createElement(x.Z,{className:n(_)}),READING_LIST_ARCHIVE:i.createElement(I.Z,{className:n(_)})}[t]},R=function(e){var t=e.post,n=e.withTooltip,r=void 0===n||n,x=e.susiEntry,I=t.id,R=t.readingList,L=(0,v.Iq)(),N=(0,h.v9)((function(e){return e.config.authDomain})),T=(0,m.Av)(),S=(0,p.pK)(),C=i.useContext(l.Q),A=C.isFirstLoadAndInReadingList,k=C.setIsFirstLoadAndInReadingList,B=i.useState(r),P=o()(B,2),D=P[0],O=P[1],M=i.useCallback((function(e,t){if(R){if(T.event({READING_LIST_QUEUE:"post.addedArchive",READING_LIST_ARCHIVE:"post.removedBookmark"}[R],{postId:I,source:S}),t(w(e,R))(),w(e,R)===E.sx.READING_LIST_NONE)return void k(!1);r&&O(!1)}}),[I,R,A,k,r,S]),F=i.useCallback((function(){r&&O(!0)}),[r]);return i.createElement(s.Q_,null,(function(e){return e?R&&i.createElement("div",null,!A||R!==E.sx.READING_LIST_QUEUE&&R!==E.sx.READING_LIST_ARCHIVE?i.createElement(a.Z,{post:t,susiEntry:x}):i.createElement(c.sN,{post:t},(function(t){return i.createElement(f._,{isVisible:D,targetDistance:10,tooltipText:(n=R,{READING_LIST_QUEUE:"Archive Story",READING_LIST_ARCHIVE:"Remove story from reading list"}[n]),onMouseLeave:F},i.createElement(d.rU,{onClick:function(){return M(e,t)}},i.createElement(y,{currentReadingListType:R})));var n}))):i.createElement("div",{className:L(_)},i.createElement(u.R9,{post:t,operation:"register",actionUrl:(0,b.XET)(N,I),susiEntry:x},i.createElement(g.Z,null)))}))}},9482:(e,t,n)=>{"use strict";n.d(t,{Q:()=>o});var r={isFirstLoadAndInReadingList:!0,setIsFirstLoadAndInReadingList:function(){return null}},o=n(67294).createContext(r)},7654:(e,t,n)=>{"use strict";n.d(t,{$:()=>m});var r=n(63038),o=n.n(r),i=n(67294),a=n(7530),l=n(64504),c=n(28309),s=n(8403),u=n(73004),d=n(51064),f=300,m=function(e){var t,n=e.children,r=e.title,m=e.titleComponent,p=e.width,v=e.arrowFill,E=null===(t=(0,s.Wd)("unfold"))||void 0===t?void 0:t.toLowerCase(),h=!!r&&E===r.toLowerCase(),g=(0,c.Iq)(),x=(0,d.O)(!1),I=o()(x,4),b=I[0],w=I[3],_=function(e){var t=i.useRef(null),n=i.useState("0px"),r=o()(n,2),a=r[0],l=r[1],c=i.useState(!1),s=o()(c,2),u=s[0],d=s[1];return i.useEffect((function(){var n=t.current;n&&(e?(l("".concat(n.getBoundingClientRect().height,"px")),d(!0),setTimeout((function(){l("auto"),d(!1)}),f)):"auto"===a&&(l("".concat(n.getBoundingClientRect().height,"px")),d(!0),setTimeout((function(){return l("0px")}),50),setTimeout((function(){return d(!1)}),f)))}),[e]),{height:a,isAnimating:u,ref:t}}(b),y=_.ref,R=_.height,L=_.isAnimating;return i.useEffect((function(){h&&w()}),[]),i.createElement(i.Fragment,null,i.createElement("button",{className:g({width:p||"100%",height:"100%",border:"none",textAlign:"left",outline:"none",cursor:"pointer",padding:"0px"}),onClick:w,disabled:L},i.createElement(a.xu,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},m||i.createElement(l.X6,{scale:"XS"},r||""),i.createElement(u.Z,{className:g((function(e){return{transition:"".concat(f,"ms transform"),transform:b?"rotate(180deg)":"rotate(0)",fill:v||e.baseColor.fill.normal}}))}))),i.createElement("div",{className:g({transition:"".concat(f,"ms height"),height:R,overflow:!b||L?"hidden":"visible",opacity:b?1:0})},i.createElement("div",{ref:y,className:g({opacity:b?1:0,transition:"".concat(f,"ms opacity"),display:"flex",justifyContent:"space-between",flexDirection:"column",flexFlow:"wrap"})},n)))}},51684:(e,t,n)=>{"use strict";n.d(t,{ZR:()=>m,HX:()=>v,b2:()=>E,hE:()=>h});var r=n(59713),o=n.n(r),i=n(67294),a=n(28859),l=n(43689),c=n(7530),s=n(28309),u=n(27108),d=n(89349),f=n(21146),m=131,p=function(e){return{pointerEvents:e?"auto":"none"}},v=function(e){var t=e.children,n=e.disableTransition,r=e.isFixed,u=e.scrollableRef,f=e.sidebarRef,v=e.testId,E=e.topOffset,h=e.visible,g=e.fixedWidth,x=e.extraWide,I=void 0!==x&&x,b=(0,s.Iq)(),w=function(e){var t,n,r,c=e.isFixed,s=void 0===c||c,u=e.disableTransition,f=void 0!==u&&u,m=e.scrollableRef,p=e.topOffset,v=e.visible,E=e.fixedWidth,h=(r=null===(t=i.useContext(a.u6).watchedBounds.get("header"))||void 0===t||null===(n=t.ref)||void 0===n?void 0:n.current)?r.offsetTop+r.offsetHeight+64:l.Je+54+40;return function(e){return function(t){var n,r=(0,d.uc)(t,e,t.grid.xStep*t.grid.marginSteps.lg,m&&"current"in m?m.current:null),i=void 0===p?h:p;return n={opacity:v?1:0,pointerEvents:"none",position:s?"fixed":"absolute",willChange:"opacity, transform",width:E?"".concat(E,"px"):"100%",transform:"translateY(".concat(i,"px)"),top:0},o()(n,(0,d.nk)("no-preference"),{transition:f?"opacity 0s":"opacity 200ms"}),o()(n,r,{display:"none"}),n}}}({isFixed:r,scrollableRef:u,topOffset:E,visible:h,disableTransition:n,fixedWidth:g}),_=I?197:m;return i.createElement("div",{className:b(w(_)),"data-test-id":v},i.createElement(c.Pm,{size:"outset"},i.createElement(c.xu,{display:"flex",flexDirection:"column",width:"".concat(_,"px"),ref:f},i.createElement("div",{className:b(p(h))},t))))},E=function(e,t,n,r){var o=e.current;if(!o)return!1;var i=r.threshold||10,a=Array.from(t.values()).filter((function(e){var t,r=e.ref,o=e.opts;return n.includes(null!==(t=o.type)&&void 0!==t?t:"")&&!!r.current})).map((function(e){var t=e.ref,n=e.opts,r=n&&n.offset,o=(0,f.L6)(t.current);return(0,f.Dd)(o,r)})),l=(0,f.L6)(o);return!a.some((function(e){return(0,f.kK)(e,l,i)}))},h=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=n?"scroll_throttled":"scroll";return function(){var n=(0,u.jC)(null!=t?t:void 0);return n.on(r,e),n.on("scroll_end",e),n.on("resize_throttled",e),function(){n.off(r,e),n.off("scroll_end",e),n.off("resize_throttled",e)}}}},55077:(e,t,n)=>{"use strict";n.d(t,{$:()=>d,n:()=>f});var r=n(28655),o=n.n(r),i=n(71439),a=n(67294),l=n(51607),c=n(7530),s=n(27572);function u(){var e=o()(["\n  fragment ShareButtons_post on Post {\n    id\n    isLimitedState\n    visibility\n    ...ShareButton_post\n  }\n  ","\n"]);return u=function(){return e},e}var d=(0,i.Ps)(u(),l.M);function f(e){var t=e.post,n=e.source,r="UNLISTED"===t.visibility;return a.createElement(s.cW,{source:n},a.createElement(c.xu,{flexGrow:"0",paddingRight:"6px"},!r&&a.createElement(l.T,{socialPlatform:"TWITTER",buttonStyle:t.isLimitedState?"LINK_DISABLED":"LINK",post:t})),a.createElement(c.xu,{flexGrow:"0",paddingRight:"6px"},!r&&a.createElement(l.T,{socialPlatform:"LINKEDIN",buttonStyle:t.isLimitedState?"LINK_DISABLED":"LINK",post:t})),a.createElement(c.xu,{flexGrow:"0",paddingRight:"6px"},!r&&a.createElement(l.T,{socialPlatform:"FACEBOOK",buttonStyle:t.isLimitedState?"LINK_DISABLED":"LINK",post:t})))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/6371.e219583c.chunk.js.map