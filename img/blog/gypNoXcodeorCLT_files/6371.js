(self.webpackChunklite=self.webpackChunklite||[]).push([[6371],{42440:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(67294);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=r.createElement("g",{fillRule:"evenodd"},r.createElement("path",{d:"M4.13 12.21a15.4 15.4 0 0 1-2.54-2.28 6.61 6.61 0 0 1-.16-.2l-.25-.3.25-.3a13.08 13.08 0 0 1 .63-.7 15.4 15.4 0 0 1 1.7-1.51C5.55 5.54 7.5 4.7 9.51 4.7c.62 0 1.28.13 1.98.37l-.8.78a4.54 4.54 0 0 0-1.18-.18c-1.76 0-3.52.76-5.18 2.02-.58.45-1.12.93-1.58 1.41-.28.3-.28.36 0 .65a14.43 14.43 0 0 0 2.08 1.77l-.71.7zm3.05 1.57a6.32 6.32 0 0 0 4.61-.11c1-.38 2.04-.98 3.1-1.72a25.27 25.27 0 0 0 2.68-2.17l.37-.35-.37-.36a23.05 23.05 0 0 0-.76-.68 25.26 25.26 0 0 0-2.28-1.73l-.72.7a24.05 24.05 0 0 1 2.37 1.77c.2.17.2.42 0 .59-.57.49-1.2.97-1.84 1.43-1.01.7-2 1.26-2.9 1.61a5.4 5.4 0 0 1-1.92.42A6.6 6.6 0 0 1 8 13l-.81.78z"}),r.createElement("path",{d:"M12.05 9.06a2.68 2.68 0 0 1-2.7 3A2.74 2.74 0 0 1 9 12l3.06-2.96zM9.72 6.79a2.83 2.83 0 0 0-.37-.02 2.68 2.68 0 0 0-2.7 3l3.07-2.98zM3.6 14.3l-.35.34.68.7.35-.34 10.4-10.08.36-.34-.68-.7-.35.34z"}));const a=function(e){return r.createElement("svg",o({width:19,height:19,viewBox:"0 0 19 19"},e),i)}},94093:(e,t,n)=>{"use strict";n.d(t,{I:()=>d});var r,o=n(59713),i=n.n(o),a=n(67294);!function(e){e.S="S",e.L="L"}(r||(r={}));var l=n(42933),s=n(98024),c=n(6688),u=n(80637),m=n(67122),d=function(e){var t=e.children,n=e.scale,o=void 0===n?r.L:n,d=e.alpha,p=void 0===d?.05:d,f=e.verticalMargins,E=void 0===f?{normal:"24px",small:"24px"}:f,v=(0,c.I)();return a.createElement("div",{className:v((function(e){return i()({background:(0,m.Uy)(p),borderRadius:"4px",margin:"".concat(E.normal," -16px"),position:"relative"},u.sm(e),{margin:"".concat(E.small," -12px 0")})}))},a.createElement(l.x,{display:"flex",justifyContent:"space-between",maxWidth:"740px",padding:"16px",sm:{padding:"12px"}},a.createElement(s.F,{scale:o,color:"DARKER"},t)))}},66371:(e,t,n)=>{"use strict";n.d(t,{Cs:()=>X,Dj:()=>$});var r=n(28655),o=n.n(r),i=n(71439),a=n(67294),l=n(28859),s=n(63038),c=n.n(s),u=n(46829),m=n(94093),d=n(64235),p=n(32589),f=n(82318),E=n(95760),v=n(51512),g=n(6688),h=n(27108);function x(){var e=o()(["\n  fragment DigestReferredPostBodyCreatorPromo_user on User {\n    id\n    name\n  }\n"]);return x=function(){return e},e}var y=(0,i.Ps)(x()),_=function(e){var t=e.creator,n=e.postId,r=a.useRef(null),o=(0,g.I)(),i=(0,p.P)(t.id),l=i.viewerEdge,s=i.loading,x=(0,u.useMutation)(d.L,{variables:{targetUserId:t.id}}),y=c()(x,1)[0],_=(0,u.useMutation)(d.g,{variables:{targetUserId:t.id}}),b=c()(_,1)[0],I=(0,E.Av)(),R="post_body_cta",P=a.useCallback((function(){return I.event("user.followed",{targetUserId:t.id,followSource:R}),y()}),[t.id,R,y]),w=a.useCallback((function(){return I.event("user.unfollowed",{targetUserId:t.id,followSource:R}),b()}),[t.id,R,b]),S=(0,v.pK)(),T=!1,B=function(){!T&&L()&&(I.event("post.digestReferredFollowCreatorPromoViewed",{postId:n,targetUserId:t.id,source:S}),T=!0)},L=function(){var e;if(!r.current)return!1;var t=null===(e=r.current)||void 0===e?void 0:e.getBoundingClientRect(),n=t.top+t.height/2;return n>=0&&n<=window.innerHeight};return a.useEffect((function(){return B(),window&&h.V6.on("scroll",B),function(){h.V6.off("scroll",B)}}),[]),s?null:a.createElement("div",{ref:r},a.createElement(m.I,{alpha:.02,verticalMargins:{normal:"42px",small:"28px"}},null!=l&&l.isFollowing?a.createElement(a.Fragment,null,"You’re now following ",t.name,"."," ",a.createElement(f.r,{onClick:w,inline:!0,linkStyle:"OBVIOUS"},"Unfollow")):a.createElement(a.Fragment,null,"You've read a few stories by this writer."," ",a.createElement("span",{className:o({fontWeight:"bold"})},a.createElement(f.r,{onClick:P,linkStyle:"OBVIOUS"},"Follow ",t.name))," ","to see more of their stories across Medium.")))},b=n(78415),I=n(4743),R=n(47875),P=n(50493),w=n(86753),S=n(47713),T=n(7883),B=n(85828),L=n(50077),C=n(49925),M=n(47552),k=n(53976),D=n(55077),O=n(98281),N=n(41832),F=n(30027),A=n(42933),U=n(19464),G=n(27390);function V(){var e=o()(["\n  fragment PostBodyInserts_post on Post {\n    collection {\n      ...auroraHooks_publisher\n    }\n    creator {\n      ...auroraHooks_publisher\n      ...DigestReferredPostBodyCreatorPromo_user\n      ...UserMentionTooltip_user\n    }\n    isPublished\n    isShortform\n    # please note that postMeteringOptions is defined in PostHandler, which uses PostBodyInserts\n    content(postMeteringOptions: $postMeteringOptions) {\n      bodyModel {\n        paragraphs {\n          name\n          text\n          type\n        }\n      }\n    }\n    ...CardByline_post\n    ...PostByline_post\n    ...PostFooterSocialPopover_post\n    ...ShareButtons_post\n    ...BookmarkButton_post\n    ...CreatorActionOverflowPopover_post\n  }\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return V=function(){return e},e}var W=function(){return null};function K(e){var t=e.post,n=(0,g.I)(),r=(0,C.GT)(t.collection||t.creator),o={marginTop:"32px"},i={post:t,source:{name:"post_actions_header"}},s=(0,k.V)({name:"enable_updated_three_dot_menu",placeholder:!1});return a.createElement(l.TA,{className:n(o),name:"byline",type:"byline",offset:{left:-600}},a.createElement(A.x,{display:"flex",justifyContent:"space-between",xs:{marginTop:o.marginTop},sm:{flexDirection:"column-reverse",marginTop:o.marginTop}},r&&t.creator?a.createElement(L.u_,{avatar:a.createElement(O.Yt,{user:t.creator,scale:"XXS",link:!0,withHalo:!0}),publisher:t.creator,href:t.mediumUrl||void 0,isOneLine:!0,publishedAt:t.firstPublishedAt,showStar:!!t.isLocked,timeToRead:!t.isShortform&&t.readingTime?"".concat((0,G.Vd)(t.readingTime)," min read"):void 0,post:t}):a.createElement(R.G,{scale:"M",post:t,showBio:!1,hideCollection:!0}),a.createElement(A.x,{display:"flex",alignItems:"flex-end",print:{display:"none"},xs:{marginLeft:"0px",marginBottom:"30px"},sm:{marginLeft:"0px",marginBottom:"30px"},md:{marginLeft:"30px"},lg:{marginLeft:"30px"},xl:{marginLeft:"30px"}},a.createElement(A.x,{display:"flex",alignItems:"center"},t.isPublished&&(!r||!t.isShortform)&&a.createElement(a.Fragment,null,r?a.createElement(A.x,{paddingRight:"8px"},a.createElement(B.$,i)):a.createElement(D.n,i),a.createElement(A.x,{marginRight:"8px"},a.createElement(v.cW,{source:{name:"post_actions_header"}},a.createElement(S.o,{post:t,susiEntry:"bookmark_preview"}))),t&&a.createElement(A.x,{flexGrow:"1"},a.createElement(U.B,null,(function(e){var n=e.show;return a.createElement(T.Z,{creator:null==t?void 0:t.creator,post:t,collection:null==t?void 0:t.collection,showLoadingIndicator:n,isDismissDisabled:!!s})}))))))))}function z(e,t){return"".concat(t,"_").concat(e[t]?e[t].length:0)}function j(e,t,n,r,o){e[t]||(e[t]=[]),e[t].push({order:n,component:r,insertType:o})}function H(e,t,n){return function(r){var o="number"==typeof n.titleIndex,i=n.subtitleIndex||n.titleIndex||0,l=t[i]&&t[i].name,s=!(!e.inResponseToPostResult&&!e.inResponseToMediaResource);if(l&&0===i&&!o){var c=a.createElement(A.x,null,a.createElement(K,{post:e,key:"insert_postBylineGroupComponent_".concat(z(r,"first"))}),s&&a.createElement(b.CV,{inResponseToPostResult:e.inResponseToPostResult,inResponseToMediaResource:e.inResponseToMediaResource,padding:"32px 0 0"}));j(r,"first","before",a.createElement(F.P,{size:"inset",key:"insert_MaxWidth_PostBylineGroupComponent_".concat(z(r,"first"))},c),"BYLINE")}else if(l&&(j(r,l,"after",a.createElement(K,{post:e,key:"insert_PostBylineGroupComponent_".concat(z(r,l))}),"BYLINE"),s)){var u=a.createElement(b.CV,{inResponseToPostResult:e.inResponseToPostResult,inResponseToMediaResource:e.inResponseToMediaResource,padding:"42px 0 0"});j(r,"first","before",a.createElement(F.P,{size:"inset",key:"insert_MaxWidth_ResponseMixtapeComponent_".concat(z(r,"first"))},u),"RESPONSE_MIXTAPE")}return r}}function Y(e,t,n){return(0,P.tE)(e)?function(r){var o="number"==typeof n.titleIndex,i=Math.max(n.bannerImageIndex||n.subtitleIndex||n.titleIndex||0,n.subtitleIndex||n.titleIndex||0),l=t[i]&&t[i].name;if(l&&0===i&&!o){var s=a.createElement(P.o5,{post:e,mode:"INLINE",key:"insert_TOC_".concat(z(r,"first"))});j(r,"first","before",a.createElement(F.P,{size:"inset",key:"insert_MaxWidth_TableOfContents_".concat(z(r,"first"))},s),"TABLE_OF_CONTENTS")}else l&&j(r,l,"after",a.createElement(P.o5,{post:e,mode:"INLINE",key:"insert_TableOfContents_".concat(z(r,l))}),"TABLE_OF_CONTENTS");return r}:function(e){return e}}function Z(e,t,n){var r=(0,I.ZV)(t),o=r.index,i=r.ordering;return"number"==typeof o&&n?function(n){var r=t[o]&&t[o].name,l=a.createElement(_,{creator:e.creator,postId:e.id,key:"insert_DigestReferredPostBodyCreatorPromo_".concat(z(n,r))}),s=a.createElement(M.b,{name:"enable_digest_referred_follow_cta",placeholder:W,key:"insert_WithClientFlag_DigestReferredPostBodyCreatorPromo_".concat(z(n,r))},(function(e){return e?l:null}));return j(n,r,i,s,"DIGEST_REFERRED_CREATOR_PROMO"),n}:function(e){return e}}function $(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e&&e.content&&e.content.bodyModel&&e.content.bodyModel.paragraphs||void 0;if(n){var r=(0,I.LI)(n);return[H(e,n,r),Y(e,n,r),Z(e,n,t)].reduce((function(e,t){return t(e)}),{})}}var X=(0,i.Ps)(V(),C.C5,y,L.yu,R.H,B.u,D.$,w.z,T.G,N.OJ)},47875:(e,t,n)=>{"use strict";n.d(t,{H:()=>A,G:()=>U});var r=n(28655),o=n.n(r),i=n(34575),a=n.n(i),l=n(93913),s=n.n(l),c=n(2205),u=n.n(c),m=n(78585),d=n.n(m),p=n(29754),f=n.n(p),E=n(59713),v=n.n(E),g=n(71439),h=n(67294),x=n(12291),y=n(95482),_=n(9292),b=n(98281),I=n(31001),R=n(79296),P=n(41707),w=n(82318),S=n(42933),T=n(98024),B=n(80637),L=n(7650),C=n(42440),M=n(27390),k=n(27952);function D(){var e=o()(["\n  fragment PostByline_post on Post {\n    id\n    isPublished\n    firstPublishedAt\n    readingTime\n    statusForCollection\n    isLocked\n    visibility\n    collection {\n      name\n      id\n      ...collectionUrl_collection\n    }\n    creator {\n      id\n      name\n      username\n      bio\n      ...UserAvatar_user\n      ...UserFollowButton_user\n      ...userUrl_user\n    }\n  }\n  ","\n  ","\n  ","\n  ","\n"]);return D=function(){return e},e}var O={XS:{showFollowButton:!1,avatarScale:"XS"},S:{showFollowButton:!1,avatarScale:"S"},M:{showFollowButton:!0,avatarScale:"M"}},N=function(e,t){return v()({marginBottom:e?"2px":"0px",display:"flex",alignItems:"center"},B.xs(t),{marginBottom:"0px"})},F=function(e){u()(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=f()(t);if(n){var o=f()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return d()(this,e)});function o(){return a()(this,o),r.apply(this,arguments)}return s()(o,[{key:"render",value:function(){var e=this.props,t=e.authDomain,n=e.currentLocation,r=e.post,o=e.showBio,i=e.scale,a=void 0===i?"M":i,l=e.detailScale,s=void 0===l?"M":l,c=e.showStar,u=void 0===c?r.isLocked:c,m=e.hideCollection,d=void 0!==m&&m,p=e.hideAvatar,f=void 0!==p&&p,E=e.hideDescription,v=void 0!==E&&E,g=e.noClamp,x=void 0!==g&&g,B=r.id,D=r.creator,F=r.collection,A=r.statusForCollection,U=r.visibility,G=r.isPublished,V=O[a];if(!r||!B||!D)return null;var W=r.firstPublishedAt,K=D.username,z=D.name;if(!z||!K)return null;var j=h.createElement(b.Yt,{user:D,scale:V.avatarScale,link:!0}),H=o?h.createElement("div",null,D.bio):null,Y="APPROVED"===A,Z=V.showFollowButton?h.createElement(S.x,{marginLeft:"8px",xs:{display:"none"},flexShrink:"0"},h.createElement(I.Bv,{user:D,buttonSize:"COMPACT",susiEntry:"follow_byline"})):null,$=h.createElement(R.h,null,(function(e){return h.createElement(P.Z,null,(function(r){return h.createElement("div",{className:e(N(V.showFollowButton,r))},h.createElement(T.F,{scale:s,tag:"span",color:"DARKER",clamp:x?void 0:1},h.createElement(w.r,{href:(0,k.AWr)(D,t),inline:!0},z),F&&Y&&!d?h.createElement("span",null," ","in"," ",h.createElement(w.r,{href:(0,k.WGd)(F,n,t),inline:!0},F.name)):null),Z)}))})),X=h.createElement(T.F,{scale:s,tag:"span",clamp:1},H,h.createElement("div",null,G?h.createElement(w.r,{href:(0,k.jVf)(r),inline:!0},W&&h.createElement(y.E,{timestamp:W})):h.createElement("span",null,"Draft")," ","·"," ","UNLISTED"===U?h.createElement(T.F,{scale:"S",tag:"span"},h.createElement(C.Z,null)," Unlisted"):h.createElement(h.Fragment,null,(0,M.Vd)(r.readingTime||0)," min read"),u&&h.createElement("span",{style:{paddingLeft:"4px"}},h.createElement(L.Z,{style:{marginTop:"-2px"}}))));return h.createElement(_.Y,{avatar:!f&&j,title:$,description:!v&&X})}}]),o}(h.Component),A=(0,g.Ps)(D(),k.nfI,b.WQ,I.sj,k.$mN),U=(0,x.$j)((function(e){return{currentLocation:e.navigation.currentLocation,authDomain:e.config.authDomain}}))(F)},55077:(e,t,n)=>{"use strict";n.d(t,{$:()=>m,n:()=>d});var r=n(28655),o=n.n(r),i=n(71439),a=n(67294),l=n(51607),s=n(42933),c=n(51512);function u(){var e=o()(["\n  fragment ShareButtons_post on Post {\n    id\n    isLimitedState\n    visibility\n    ...ShareButton_post\n  }\n  ","\n"]);return u=function(){return e},e}var m=(0,i.Ps)(u(),l.M);function d(e){var t=e.post,n=e.source,r="UNLISTED"===t.visibility;return a.createElement(c.cW,{source:n},a.createElement(s.x,{flexGrow:"0",paddingRight:"6px"},!r&&a.createElement(l.T,{socialPlatform:"TWITTER",buttonStyle:t.isLimitedState?"LINK_DISABLED":"LINK",post:t})),a.createElement(s.x,{flexGrow:"0",paddingRight:"6px"},!r&&a.createElement(l.T,{socialPlatform:"LINKEDIN",buttonStyle:t.isLimitedState?"LINK_DISABLED":"LINK",post:t})),a.createElement(s.x,{flexGrow:"0",paddingRight:"6px"},!r&&a.createElement(l.T,{socialPlatform:"FACEBOOK",buttonStyle:t.isLimitedState?"LINK_DISABLED":"LINK",post:t})))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/6371.aedc6e7e.chunk.js.map