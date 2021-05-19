(self.webpackChunklite=self.webpackChunklite||[]).push([[8751],{90194:(e,t,n)=>{"use strict";n.d(t,{w:()=>s});var r=n(67294),i=n(7530),o=n(62630),a=n(27572),l=n(28309),c=n(16139),s=function(e){var t=e.buttonSize,n=void 0===t?"LARGE":t,s=e.buttonStyle,u=void 0===s?"STRONG":s,d=e.newsletterV3Id,m=e.showMailIcon,b=void 0===m||m,f=e.onClick,p=e.width,w=e.buttonText,E=void 0===w?"Get this newsletter":w,g=e.redirectUrl,h=(0,a.Qi)(),v=(0,o.Av)(),S=(0,l.Iq)();return r.createElement(i.zx,{buttonStyle:u,onClick:function(){v.event("newsletterV3.subscribeClicked",{newsletterV3Id:d,source:h}),f()},size:n,width:p,href:g},b&&r.createElement("span",{className:S((function(){return{marginRight:"8px"}})),"aria-hidden":"true"},r.createElement(c.Z,null)),E)}},31429:(e,t,n)=>{"use strict";n.d(t,{x:()=>U,B:()=>M});var r=n(63038),i=n.n(r),o=n(28655),a=n.n(o),l=n(71439),c=n(67294),s=n(9972),u=n(90194),d=n(59713),m=n.n(d),b=n(46829),f=n(62630),p=n(85277);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){m()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(){var e=a()(["\n  mutation unsubscribeNewsletterV3($newsletterV3Id: ID!) {\n    unsubscribeNewsletterV3(newsletterV3Id: $newsletterV3Id)\n  }\n"]);return g=function(){return e},e}function h(){var e=a()(["\n  mutation subscribeNewsletterV3($newsletterV3Id: ID!, $shouldRecordConsent: Boolean) {\n    subscribeNewsletterV3(\n      newsletterV3Id: $newsletterV3Id\n      shouldRecordConsent: $shouldRecordConsent\n    )\n  }\n"]);return h=function(){return e},e}function v(){var e=a()(["\n  fragment useNewsletterV3Subscription_newsletterV3 on NewsletterV3 {\n    id\n    isSubscribed\n  }\n"]);return v=function(){return e},e}var S=(0,l.Ps)(v()),y=(0,l.Ps)(h()),x=(0,l.Ps)(g()),V=n(17771),O=n(62181),N=n(7530),T=n(25597),C=n(64504),R=n(27572),I=n(51512),k=n(14391),P=n(8403),_=n(67297),L=n(51064),A=n(27952),j=n(534);function B(){var e=a()(["\n  fragment NewsletterV3SubscribeButton_newsletterV3 on NewsletterV3 {\n    id\n    name\n    isSubscribed\n    type\n    user {\n      name\n    }\n    collection {\n      ...CollectionMetabar_collection\n      ...SusiClickable_collection\n      ...collectionDefaultBackgroundTheme_collection\n    }\n    ...SusiClickable_newsletterV3\n    ...useNewsletterV3Subscription_newsletterV3\n  }\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return B=function(){return e},e}var D="newsletter_v3_promo",M=(0,l.Ps)(B(),s.JE,O.Os,O.GB,j.Gi,S),U=function(e){var t,n,r,o=e.newsletterV3,a=e.buttonLayout,l=void 0===a?"MULTI-LINE":a,s=e.helperTextColor,d=void 0===s?"LIGHTER":s,m=e.showHelperText,w=void 0===m||m,g=e.showMailIcon,h=void 0===g||g,v=e.buttonSize,B=void 0===v?"LARGE":v,M=e.buttonStyle,U=void 0===M?"STRONG":M,F=e.redirectUrl,W=(0,V.Hk)().value,$=o.id,G=o.collection?o.collection:void 0,z=o.user?o.user:void 0,Y=(0,p.w)(),q=(0,P.PM)(),H=(0,_.v9)((function(e){return e.config.productName})),Q=(0,L.O)(!1),Z=i()(Q,3),K=Z[0],X=Z[1],J=Z[2];switch(o.type){case k.Rr.NEWSLETTER_TYPE_COLLECTION:t=o.name,n="You’re signed up for ".concat(t,".");break;case k.Rr.NEWSLETTER_TYPE_AUTHOR:t=null==z?void 0:z.name,n="You’re subscribed to ".concat(t)}F?(r="Learn more",h=!1):o.type===k.Rr.NEWSLETTER_TYPE_COLLECTION?r="Get this newsletter":o.type===k.Rr.NEWSLETTER_TYPE_AUTHOR&&(r="Subscribe");var ee=function(e,t,n){var r=c.useState(n),o=i()(r,2),a=o[0],l=o[1],s=c.useState(!1),u=i()(s,2),d=u[0],m=u[1],w=(0,f.Av)(),g=(0,p.w)();d&&w.event("newsletterV3.subscribe.error",{newsletterV3Id:e});var h=(0,b.useMutation)(y,{variables:{newsletterV3Id:e,shouldRecordConsent:!1},onCompleted:function(e){var t=e.subscribeNewsletterV3;m(!t),t&&l(!0)},update:function(t,n){var r,i={id:"NewsletterV3:".concat(e),fragment:S,fragmentName:"useNewsletterV3Subscription_newsletterV3"},o=t.readFragment(i);t.writeFragment(E(E({},i),{},{data:E(E({},o),{},{isSubscribed:null===(r=n.data)||void 0===r?void 0:r.subscribeNewsletterV3})}))}}),v=i()(h,1)[0],V=(0,b.useMutation)(x,{variables:{newsletterV3Id:e},onCompleted:function(e){var n=e.unsubscribeNewsletterV3;m(!n),n&&(l(!1),g({duration:"NEXTPAGE",message:"",toastStyle:"NEWSLETTER_UNSUBSCRIBE",extraParams:{newsletterName:t}}))},update:function(t,n){var r,i={id:"NewsletterV3:".concat(e),fragment:S,fragmentName:"useNewsletterV3Subscription_newsletterV3"},o=t.readFragment(i);t.writeFragment(E(E({},i),{},{data:E(E({},o),{},{isSubscribed:!(null!==(r=n.data)&&void 0!==r&&r.unsubscribeNewsletterV3)})}))}}),O=i()(V,1)[0];return{isSubscribed:a,hasError:d,setSubscribe:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];m(!1),t?v({variables:{newsletterV3Id:e,shouldRecordConsent:n}}):O()}}}(o.id,t,o.isSubscribed),te=ee.isSubscribed,ne=ee.hasError,re=ee.setSubscribe;c.useEffect((function(){if(q){var e=(0,I.P7)(q||"").susiEntry;["collection_newsletter_v3_landing","newsletter_v3_promo"].includes(void 0===e?"":e)&&te&&Y({duration:"NEXTPAGE",message:"",toastStyle:"NEWSLETTER_SUBSCRIBE",extraParams:{newsletterName:null==o?void 0:o.name,unsubscribeFn:function(){return re(!1)}}})}}),[q]);var ie=function(e){var t=e.children;return c.createElement(N.xu,{margin:"COMPACT"===l?"10px 20px 10px 0":"",xs:{margin:"10px 0 0 0"}},t)},oe=function(e){var t=e.children;return c.createElement(N.xu,{maxWidth:"COMPACT"===l?"380px":"",margin:"COMPACT"===l?"10px 0 10px 0":"10px 0 0 0"},c.createElement(C.F,{scale:"S",color:d},t))},ae=function(){var e=(0,A.Zul)($),n={buttonSize:B,buttonStyle:U,newsletterV3Id:o.id,onClick:function(){F||(W&&W.allowEmailAddressSharingEditorWriter?re(!0,!1):X())},showMailIcon:h,buttonText:r,redirectUrl:F};return c.createElement(ie,null,W?c.createElement(c.Fragment,null,c.createElement(u.w,n),c.createElement(N.QH,{onConfirm:function(){return re(!0,!0)},isVisible:K,hide:J,titleText:"Confirm your subscription to ".concat(t),confirmText:"Confirm now",buttonStyle:"STRONG",buttonSize:"LARGE",showCancelButton:!1,withCloseButton:!1,isDestructiveAction:!1},"By confirming, you agree to share your email address with the editors of newsletters and writers you've subscribed to so they can stay in contact with you outside of ".concat(H,". You can opt out of sharing your email address by unsubscribing in your Settings."))):c.createElement(O.R9,{operation:"register",newsletterV3:o,collection:G,actionUrl:e,susiEntry:D},c.createElement(u.w,n)))},le=function(){return!w||F?c.createElement(c.Fragment,null):W?c.createElement(oe,null,"Emails will be sent to ",W.email,".",c.createElement(N.xu,null,c.createElement(O.R9,{operation:"login",newsletterV3:o,collection:G,susiEntry:D},c.createElement(N.rU,{onClick:function(){},linkStyle:"OBVIOUS",inline:!0,target:"_blank"},"Not you?")))):c.createElement(oe,null,"Create a free Medium account to get ",o.name," in your inbox.")};return c.createElement(c.Fragment,null,c.createElement(N.Yi,null,(function(e){return c.createElement(N.f6,{theme:(0,j.jN)(G,e)},te?c.createElement(c.Fragment,null,c.createElement(ie,null,c.createElement(N.zx,{buttonStyle:"SUBTLE",size:"SMALL",onClick:function(){return re(!1)}},"Unsubscribe")),w&&c.createElement(oe,null,n)):c.createElement(R.cW,{source:{newsletterV3Id:o.id},extendSource:!0},c.createElement(ae,null),c.createElement(le,null)))})),ne&&c.createElement(T.Z,{toastStyle:"RETRYABLE_ERROR",isVisible:ne,hide:function(){}}))}},55346:(e,t,n)=>{"use strict";n.d(t,{QL:()=>L,Lh:()=>j});var r=n(28655),i=n.n(r),o=n(59713),a=n.n(o),l=n(63038),c=n.n(l),s=n(46829),u=n(71439),d=n(67294),m=n(90194),b=n(7530),f=n(28309),p={from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},w=function(e){return function(t){return{width:"20px",height:"20px",borderRadius:"50%",borderWidth:"1px",borderStyle:"solid",borderColor:"".concat(t.baseColor.border.light," transparent ").concat(t.baseColor.border.light," ").concat(t.baseColor.border.light),animation:"".concat(e," 1s infinite linear;")}}},E=function(e){var t=e.buttonSize,n=void 0===t?"LARGE":t,r=e.buttonStyle,i=void 0===r?"STRONG":r,o=(0,f.Iq)(),a=function(){var e=(0,f.om)({keyframesName:p}).keyframesName;return d.createElement("div",{className:o(w(e))})},l=function(){return d.createElement(b.xu,null,d.createElement(b.xu,{display:"inline-block",float:"left",marginRight:"8px"},d.createElement(a,null)),d.createElement(b.xu,{float:"left"},"Loading.."))};return d.createElement("div",{style:{cursor:"wait"}},d.createElement(b.zx,{buttonStyle:i,onClick:function(){return null},size:n,width:"207px",disabled:!0},d.createElement(l,null)))},g=n(90738),h=n(14414),v=n(31285),S=n(7462),y=n(64504),x=n(27572),V=n(37581),O=n(67297),N=n(49456),T=n(51299),C=n(27952),R=n(534);function I(){var e=i()(["\n  fragment NewsletterV3SubscribeByEmail_newsletterV3 on NewsletterV3 {\n    id\n    slug\n    collection {\n      ...collectionDefaultBackgroundTheme_collection\n      ...collectionUrl_collection\n    }\n  }\n  ","\n  ","\n"]);return I=function(){return e},e}function k(){var e=i()(["\n  mutation SendNewsletterSubscriptionAcctAuthEmail(\n    $newsletterV3Id: String!\n    $email: String!\n    $redirect: String\n    $captchaValue: String\n    $operation: String\n  ) {\n    sendNewsletterSubscriptionAcctAuthEmail(\n      newsletterV3Id: $newsletterV3Id\n      email: $email\n      redirect: $redirect\n      captchaValue: $captchaValue\n      operation: $operation\n    ) {\n      ... on SusiMethod {\n        value\n      }\n      ... on BadRequest {\n        message\n      }\n      ... on FailedChallenge {\n        message\n      }\n      ... on NotFound {\n        message\n      }\n    }\n  }\n"]);return k=function(){return e},e}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L=function(e){var t=e.centerContent,n=void 0!==t&&t,r=e.newsletterV3,i=(0,f.Fg)(),o=(0,x.pK)(),a=(0,x.hp)(),l=(0,O.v9)((function(e){return e.config.authDomain})),u=(0,O.v9)((function(e){return e.navigation.currentLocation})),p=(0,O.v9)((function(e){return e.config.productName})),w=d.useState(""),I=c()(w,2),k=I[0],P=I[1],L=d.useState(""),j=c()(L,2),B=j[0],D=j[1],M=d.useState(!1),U=c()(M,2),F=U[0],W=U[1],$=d.useState(!1),G=c()($,2),z=G[0],Y=G[1],q=d.useState(!1),H=c()(q,2),Q=H[0],Z=H[1],K=d.useState(!1),X=c()(K,2),J=X[0],ee=X[1],te=d.useState(""),ne=c()(te,2),re=ne[0],ie=ne[1],oe="register",ae=null==u.match("http[s]?://[^/]*".concat(l)),le=r.collection,ce=r.id,se=r.slug,ue=(0,C.Zul)(ce),de=le?(0,C.iBn)(se,l,le):u;(0,s.useQuery)(v.qz,{fetchPolicy:"no-cache",skip:!ue||ae,onCompleted:function(e){var t=e.accountToken;return t&&ie((0,h.hQ)(de,o,a,ue,t))}});var me=function(e){P(e),W(!0),setTimeout((function(){return W(!1)}),S.zn),Y(!1),Z(!1)},be=function(){(0,N.J)(B)?(Z(!0),Y(!0)):me("Enter a valid email address.")},fe=function(){me("We couldn't process your request. Try again, or contact our support team.")},pe=(0,s.useMutation)(A,{onCompleted:function(e){switch(e.sendNewsletterSubscriptionAcctAuthEmail.__typename){case"SusiMethod":D(B),ee(!0);break;case"BadRequest":me("Enter a valid email address.");break;case"FailedChallenge":case"NotFound":default:fe()}},onError:fe}),we=c()(pe,1)[0],Ee={newsletterV3Id:ce,email:B,operation:oe,redirect:re},ge=(0,T.U)();return d.createElement(b.f6,{theme:(0,R.jN)(le,i)},d.createElement(b.xu,{alignItems:n?"center":"flex-start",display:"flex",flexDirection:"column",justifyContent:n?"center":"flex-start"},d.createElement(g.k,{callback:function(e){we({variables:_({captchaValue:e},Ee)})},shouldExecuteRecaptcha:z}),d.createElement(b.xu,{display:J?"none":"inline"},d.createElement(b.xu,{alignItems:"center",display:"flex",justifyContent:"space-between",sm:{alignItems:n?"center":"flex-start",flexDirection:"column",height:"130px",paddingTop:"16px"},height:"56px"},d.createElement(b.xu,{marginTop:k&&"25px",sm:{marginTop:"0"}},d.createElement(S.II,{errorMessage:k,handleInputChange:function(e){D(e.target.value.trim())},handleSubmit:be,input:B,inputType:S.n$.EMAIL,isAnimating:F,textAlign:"start",placeholder:"Your email",width:"".concat({xl:375,lg:375,md:325,sm:450,xs:200,"":200}[ge],"px")})),d.createElement(b.xu,{marginBottom:"auto",marginLeft:"15px",sm:{marginLeft:"0px",marginTop:"15px"}},Q?d.createElement(E,{newsletterV3Id:ce}):d.createElement(V.$,{eventData:{operation:oe}},d.createElement(m.w,{newsletterV3Id:ce,onClick:be})))),d.createElement(b.xu,{paddingTop:k&&"20px",marginTop:"10px",sm:{marginTop:"0"}},d.createElement(y.F,{color:"DARKER",scale:"XS"},"By signing up, you will create a ",p," account if you don’t already have one. Review our"," ",d.createElement(b.rU,{href:(0,C.wob)(),linkStyle:"OBVIOUS",inline:!0,target:"_blank"},"Privacy Policy")," ","for more information about our privacy practices."))),d.createElement(b.xu,{display:J?"inline":"none",marginBottom:"15px",marginTop:"5px"},d.createElement(y.F,{color:"DARKER",scale:"M"},d.createElement("b",null,"Check your inbox"),d.createElement("br",null),p," sent you an email at ",B," to complete your subscription."))))},A=(0,u.Ps)(k()),j=(0,u.Ps)(I(),R.Gi,C.nfI)},51299:(e,t,n)=>{"use strict";n.d(t,{U:()=>c});var r=n(63038),i=n.n(r),o=n(67294),a=n(28309),l=n(72955),c=function(){var e=(0,a.Fg)(),t=o.useState("lg"),n=i()(t,2),r=n[0],c=n[1],s=function(){window.innerWidth>=e.breakpoints.xl?c("xl"):e.breakpoints.lg<=window.innerWidth&&window.innerWidth<e.breakpoints.xl?c("lg"):e.breakpoints.md<=window.innerWidth&&window.innerWidth<e.breakpoints.lg?c("md"):e.breakpoints.sm<=window.innerWidth&&window.innerWidth<e.breakpoints.md?c("sm"):c("xs")};return o.useEffect((function(){return s(),l.V6.on("resize",s),function(){return l.V6.off("resize",s)}}),[]),r}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/8751.7541205c.chunk.js.map