(self.webpackChunklite=self.webpackChunklite||[]).push([[7526],{32523:(e,n,t)=>{"use strict";t.d(n,{g:()=>o});var r=t(67294),a=t(98462),o=function(e){var n=e.children,t=e.className,o=void 0===t?"":t,i=e.href,l=e.onClick;return i?r.createElement(a.P,{className:o,href:i,onClick:l},n):n}},78415:(e,n,t)=>{"use strict";t.d(n,{CV:()=>C,zJ:()=>I,KI:()=>_});var r=t(28655),a=t.n(r),o=t(71439),i=t(67294),l=t(19692),c=t(48537),u=t(86244),s=t(98462),f=t(42933),p=t(98024),m=t(6688),d=t(14391),h=t(81162),g=t(14349),v=t(27390),E=t(83024),x=t(27952);function y(){var e=a()(["\n  fragment InResponseToPostPreview_mediaResource on Post {\n    inResponseToMediaResource {\n      mediumQuote {\n        ...Quote_quote\n      }\n    }\n  }\n  ","\n"]);return y=function(){return e},e}function R(){var e=a()(["\n  fragment InResponseToPostPreview_postResult on PostResult {\n    __typename\n    ... on Post {\n      id\n      title\n      mediumUrl\n      creator {\n        id\n        name\n      }\n      clapCount\n      responsesCount\n      visibility\n    }\n  }\n"]);return R=function(){return e},e}var P=function(e){return{fill:e.baseColor.fill.lighter}},C=function(e){var n,t=e.inResponseToPostResult,r=e.inResponseToMediaResource,a=e.padding,o=e.postPreviewMarginBottom,c=(0,m.I)();if(t)switch(t.__typename){case"Post":n=t}if(!n||n.visibility===d.Wn.UNLISTED)return null;var y=n.title,R=n.creator&&n.creator.name,C=parseInt(n.clapCount,10),I=n.responsesCount||0,_=r&&r.mediumQuote&&(0,E.Gj)(r.mediumQuote),T=_&&_.type;if(T===d.NJ.IMG||T===d.NJ.IFRAME||T===d.NJ.COVER_TITLE||T===d.NJ.HR||T===d.NJ.MIXTAPE_EMBED||T===d.NJ.SECTION_CAPTION)return null;var b=i.createElement(s.P,{href:(0,x.jVf)(n)},i.createElement(u.Z,{marginBottom:o},i.createElement(f.x,{paddingLeft:"20px",paddingRight:"20px"},_&&T&&i.createElement(f.x,{paddingBottom:"20px"},i.createElement(l.Do,{paragraph:_,paragraphStyle:T,spaceTop:10,richTextStyle:"STREAM"})),i.createElement(f.x,{display:"flex"},i.createElement(f.x,{display:"flex",flexGrow:"1",flexShrink:"1",alignItems:"center"},i.createElement(p.F,{scale:"M",color:"DARKER",clamp:1,tag:"span"},y)),i.createElement(f.x,{display:"flex",flexGrow:"0",alignItems:"center"},C>0?i.createElement(f.x,{display:"flex",alignItems:"center"},i.createElement("span",{className:c(P)},i.createElement(f.x,{tag:h.Z,marginRight:"4px"})),i.createElement(p.F,{scale:"M",tag:"div"},(0,v.pY)(C))):null,I>0?i.createElement(f.x,{display:"flex",alignItems:"center"},i.createElement("span",{className:c(P)},i.createElement(f.x,{tag:g.Z,marginLeft:"8px",marginRight:"4px"})),i.createElement(p.F,{scale:"M",tag:"div"},(0,v.pY)(I))):null)),i.createElement(p.F,{scale:"M"},R))));return a?i.createElement(f.x,{padding:a},b):b},I=(0,o.Ps)(R()),_=(0,o.Ps)(y(),c.Q)},4743:(e,n,t)=>{"use strict";t.d(n,{LI:()=>f,k:()=>p,ZV:()=>m});var r=t(28655),a=t.n(r),o=t(71439),i=t(14391),l=t(50993);function c(){var e=a()(["\n  fragment GetDigestReferredCreatorPromoIndex_bodyModel on RichText {\n    paragraphs {\n      type\n      text\n    }\n  }\n"]);return c=function(){return e},e}function u(){var e=a()(["\n  fragment GetFeaturedImageIndex_bodyModel on RichText {\n    paragraphs {\n      type\n      text\n      metadata {\n        isFeatured\n      }\n    }\n  }\n"]);return u=function(){return e},e}function s(){var e=a()(["\n  fragment GetTitleIndexMap_bodyModel on RichText {\n    paragraphs {\n      type\n      text\n    }\n  }\n"]);return s=function(){return e},e}var f=function(e){for(var n=null,t=null,r=null,a=null,o=0;o<=e.length;o++){var i=e[o];if(!i)break;if(null!=n){"H4"===i.type&&(t=o),null===r&&"IMG"===i.type&&(r=o);break}if("H3"===i.type||"H2"===i.type)n=o;else{if(null!=a)break;if("H4"!==i.type){if("IMG"===i.type){null===r&&(r=o);continue}if("IFRAME"===i.type||"P"===i.type&&"string"==typeof i.text&&(0,l.vV)(i.text))continue;break}a=o}}return{titleIndex:n,subtitleIndex:t,bannerImageIndex:r}},p=(0,o.Ps)(s()),m=((0,o.Ps)(u()),function(e){for(var n=null,t=[],r=0;r<e.length;r++)d(e[r])&&(n||(n=r),r<e.length-1&&d(e[r+1])&&t.push(r));return 0===t.length?{index:n,ordering:"before"}:{index:t[Math.min(t.length-1,1)],ordering:"after"}}),d=function(e){return e.type===i.NJ.P&&"string"==typeof e.text&&!(0,l.vV)(e.text)};(0,o.Ps)(c())},50077:(e,n,t)=>{"use strict";t.d(n,{u_:()=>w,yu:()=>F,br:()=>G,We:()=>L,Gk:()=>O});var r=t(28655),a=t.n(r),o=t(63038),i=t.n(o),l=t(71439),c=t(67294),u=t(10734),s=t(32523),f=t(95482),p=t(92013),m=t(31635),d=t(9292),h=t(41832),g=t(52862),v=t(98024),E=t(98701),x=t(77180),y=t(6688),R=t(67297),P=t(7650),C=t(27952);function I(){var e=a()(["\n  fragment CardByline_publisher on Publisher {\n    __typename\n    ... on User {\n      id\n      ...CardByline_user\n    }\n    ... on Collection {\n      id\n      ...CardByline_collection\n    }\n  }\n  ","\n  ","\n"]);return I=function(){return e},e}function _(){var e=a()(["\n  fragment CardByline_collection on Collection {\n    __typename\n    id\n    name\n    ...collectionUrl_collection\n  }\n  ","\n"]);return _=function(){return e},e}function T(){var e=a()(["\n  fragment CardByline_user on User {\n    __typename\n    id\n    name\n    username\n    mediumMemberAt\n    socialStats {\n      followerCount\n    }\n    ...userUrl_user\n    ...UserMentionTooltip_user\n  }\n  ","\n  ","\n"]);return T=function(){return e},e}function b(){var e=a()(["\n  fragment CardByline_post on Post {\n    ...DraftStatus_post\n  }\n  ","\n"]);return b=function(){return e},e}var M=function(e){return{fill:e.baseColor.fill.light,marginTop:"-2px",paddingLeft:"4px"}};function N(e,n){return n&&(0,E.nE)(e)?e[n]:e}var S=function(e){var n=e.author,t=e.forceSize,r=e.scale,a=void 0===r?"M":r,o=(0,R.v9)((function(e){return e.config.authDomain})),l=c.useState(0),u=i()(l,2),f=u[0],p=u[1],m=(0,x.F)();if(c.useEffect((function(){f||p(window.innerWidth)}),[]),!n||!n.name)return null;var d=f<=m.breakpoints.sm,E=c.createElement(s.g,{href:(0,C.AWr)(n,o)},c.createElement(v.F,{color:"ACCENT",scale:N(a,t)},n.name));return d?E:c.createElement(g.$,{placement:"right",targetDistance:15,mouseLeaveDelay:200,popoverRenderFn:function(){return c.createElement(h.K$,{user:n})}},E)},D=function(e){var n=e.collection,t=e.forceSize,r=e.scale,a=void 0===r?"M":r,o=(0,R.v9)((function(e){return e.config.authDomain})),i=(0,R.v9)((function(e){return e.navigation.currentLocation}));if(!n)return null;var l=(0,C.WGd)(n,i,o);return c.createElement(s.g,{href:l},c.createElement(v.F,{scale:N(a,t),color:"DARKER"},"Published in ",c.createElement(u.t,{collection:n})))},A=function(e){var n=e.small,t=void 0!==n&&n,r=e.hideDot,a=void 0!==r&&r,o=(0,y.I)();return c.createElement("span",{className:o({margin:"0 ".concat(t?4:7,"px")})},a?null:"·")},k=function(e){var n=e.datePrefix,t=void 0===n?"":n,r=e.forceSize,a=e.isOneLine,o=e.withMidDot,i=void 0===o||o,l=e.href,u=e.onClick,d=e.publishedAt,h=e.scale,g=void 0===h?"M":h,E=e.showStar,x=void 0!==E&&E,R=e.showPinned,C=void 0!==R&&R,I=e.timeColor,_=void 0===I?"LIGHTER":I,T=e.timeToRead,b=e.post,S=(0,y.I)();if(!d&&!T)return null;var D=a?p.h:f.E;return c.createElement(s.g,{href:l,onClick:u},c.createElement(v.F,{color:_,scale:N(g,r)},a&&i&&c.createElement(A,{small:!0,hideDot:!!T&&!!d}),d&&!C?c.createElement(c.Fragment,null,t,c.createElement(D,{hasPrefix:!(!a||!t)||void 0,timestamp:d})):null,C?c.createElement("span",null,"Pinned"):null,d&&T?c.createElement(A,null):null,T||null,!d&&c.createElement(c.Fragment,null,c.createElement(A,{small:a}),c.createElement(v.F,{color:"DARKER",scale:N(g,r),tag:"span"},c.createElement(m.FV,{post:b}))),x&&c.createElement(P.Z,{className:S(M)})))},w=function(e){var n=e.avatar,t=void 0===n?null:n,r=e.datePrefix,a=e.forceSize,o=e.hideAuthor,i=void 0!==o&&o,l=e.href,u=e.onClick,s=e.isOneLine,f=void 0!==s&&s,p=e.publisher,m=e.publishedAt,h=e.scale,g=e.showStar,v=void 0!==g&&g,E=e.showPinned,x=void 0!==E&&E,y=e.timeColor,R=e.timeToRead,P=e.post,C="Collection"===p.__typename?c.createElement(D,{collection:p,forceSize:a,scale:h}):i?null:c.createElement(S,{author:p,forceSize:a,scale:h}),I="Collection"===p.__typename||!i;return c.createElement(d.Y,{avatar:i?null:t,isOneLine:f,title:C,description:c.createElement(k,{datePrefix:r,publishedAt:m,timeToRead:R,withMidDot:I,href:l,onClick:u,showStar:v,showPinned:x,forceSize:a,scale:h,timeColor:y,isOneLine:f,post:P})})},F=(0,l.Ps)(b(),m.tV),G=(0,l.Ps)(T(),C.$mN,h.OJ),L=(0,l.Ps)(_(),C.nfI),O=(0,l.Ps)(I(),G,L)},48537:(e,n,t)=>{"use strict";t.d(n,{p:()=>M,Q:()=>N});var r=t(28655),a=t.n(r),o=t(34575),i=t.n(o),l=t(93913),c=t.n(l),u=t(2205),s=t.n(u),f=t(78585),p=t.n(f),m=t(29754),d=t.n(m),h=t(71439),g=t(67294),v=t(12291),E=t(19692),x=t(42933),y=t(82318),R=t(98462),P=t(98024),C=t(14391),I=t(83024),_=t(27952);function T(){var e=a()(["\n  fragment Quote_quote on Quote {\n    quoteId\n    userId\n    post {\n      id\n      title\n      mediumUrl\n      creator {\n        id\n        username\n        name\n        ...userUrl_user\n      }\n    }\n    startOffset\n    endOffset\n    paragraphs {\n      text\n      type\n      markups {\n        anchorType\n        end\n        href\n        rel\n        start\n        title\n        type\n        userId\n      }\n      ...TextParagraph_paragraph\n    }\n    ...buildQuotePreviewParagraph_quote\n  }\n  ","\n  ","\n  ","\n"]);return T=function(){return e},e}var b=function(e){s()(a,e);var n,t,r=(n=a,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=d()(n);if(t){var a=d()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return p()(this,e)});function a(){return i()(this,a),r.apply(this,arguments)}return c()(a,[{key:"render",value:function(){var e=this.props,n=e.quote,t=e.authDomain;if(!n||null==n.startOffset||null==n.endOffset||!n.post||!n.post.id)return null;var r=n.post.title,a=n.post.creator&&n.post.creator.name,o=n.post.creator&&n.post.creator.username;if(!a||!o)return null;var i=(0,I.Gj)(n),l=i&&i.type;return i&&l?l===C.NJ.IMG||l===C.NJ.IFRAME||l===C.NJ.COVER_TITLE||l===C.NJ.HR||l===C.NJ.MIXTAPE_EMBED||l===C.NJ.SECTION_CAPTION?null:g.createElement(x.x,{paddingLeft:"20px",paddingRight:"20px"},g.createElement(P.F,{scale:"M",tag:"span"},"From"," ",g.createElement(y.r,{href:(0,_.jVf)(n.post),inline:!0},r)," ","by"," ",g.createElement(y.r,{href:(0,_.AWr)(n.post.creator,t),inline:!0},a)),g.createElement(R.P,{href:(0,_.jVf)(n.post)},g.createElement(E.Do,{paragraph:i,paragraphStyle:l,spaceTop:30,richTextStyle:"STREAM"}))):null}}]),a}(g.Component),M=(0,v.$j)((function(e){return{authDomain:e.config.authDomain}}))(b),N=(0,h.Ps)(T(),E.Rg,I.Sz,_.$mN)},86244:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});var r=t(67294),a=t(42933),o=t(77180),i=function(e){var n=e.children,t=e.marginBottom,i=void 0===t?24:t,l=(0,o.F)();return r.createElement(a.x,{backgroundColor:"BACKGROUND",border:"BASE_LIGHTER",borderRadius:"5px",boxShadow:"0 1px 4px ".concat(l.baseColor.border.lighter),marginBottom:"".concat(i,"px"),padding:"23px 0"},n)}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/7526.c9184585.chunk.js.map