(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"8iFL":function(e,t,a){"use strict";var n=a("q1tI"),r=a("NsN6");t.a=function(e,t,a){void 0===t&&(t=""),void 0===a&&(a="");var l=Object(n.useState)(!1),c=l[0],o=l[1],s=Object(r.a)();return Object(n.useEffect)((function(){if(e&&!s){if(document.getElementById("properSP")){if(!window||!window.ProperMedia)return;window.special_ops&&(window.special_ops.tags=[t.toLowerCase()]),o(!0),window.properInfNewPage()}else{var a=document.createElement("script");a.textContent='\n        var special_ops = special_ops || {};\n        special_ops.tags =\n          [\n            "'+t.toLowerCase()+'"\n          ]\n      ',document.head.appendChild(a);var n=document.createElement("script");n.src="https://global.proper.io/sitepoint.min.js",n.id="properSP",n.defer=!0,document.body.appendChild(n),n.onload=function(){o(!0)}}return function(){var e,t,a;if(window&&window.ProperMedia&&window.propertag&&window.googletag&&window.googletag.destroySlots){var n=(null===(e=window)||void 0===e||null===(t=e.ProperMedia)||void 0===t||null===(a=t.ad_project)||void 0===a?void 0:a.getAdSlots())||[];document.querySelectorAll(".proper-ad-unit").forEach((function(e){if(e.children.length){var t=(e.children[0].hasAttribute("id")?e.children[0].getAttribute("id"):"").slice("proper-ad-".length);n.indexOf(t)<0&&n.push(t)}})),n.forEach((function(e){window.properDestroyDfpSlot&&window.properDestroyDfpSlot(e)}))}}}}),[e,s,t,a]),c}},NsN6:function(e,t,a){"use strict";var n=a("q1tI"),r="undefined"!=typeof window&&window.matchMedia("(max-width: 623px)");t.a=function(){var e=Object(n.useState)(!0),t=e[0],a=e[1],l=Object(n.useCallback)((function(e){a(e.matches)}),[a]);return Object(n.useEffect)((function(){return l({matches:r.matches}),r.addListener(l),function(){r.removeListener(l)}}),[l]),t}},OoBC:function(e,t,a){var n=a("IvzW"),r=a("1RYp"),l=a("a0vn"),c=a("6Zah").f,o=function(e){return function(t){for(var a,o=l(t),s=r(o),i=s.length,u=0,d=[];i>u;)a=s[u++],n&&!c.call(o,a)||d.push(e?[a,o[a]]:o[a]);return d}};e.exports={entries:o(!0),values:o(!1)}},Pw7m:function(e,t,a){var n=a("ZS3K"),r=a("OoBC").entries;n({target:"Object",stat:!0},{entries:function(e){return r(e)}})},"RjI+":function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return c})),a.d(t,"c",(function(){return o}));var n=a("QNf7"),r=a("Aw06"),l=(a("C+fU"),Object(n.styled)("ul")({name:"PaginationList",class:"pg2pojl"})),c=Object(n.styled)("li")({name:"PaginationItem",class:"p1q14x1v",vars:{"p1q14x1v-0":[function(e){return"next"===e.type?"auto":"0"}]}}),o=Object(n.styled)(r.a)({name:"PaginationNumber",class:"psmqk2r"});a("0hLI")},SEOL:function(e,t,a){"use strict";a.d(t,"g",(function(){return l})),a.d(t,"d",(function(){return c})),a.d(t,"e",(function(){return o})),a.d(t,"f",(function(){return s})),a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a("QNf7"),r=a("C+fU"),l=Object(n.styled)("h3")({name:"Title",class:"t12xxw3g"}),c=Object(n.styled)("div")({name:"FeaturedImage",class:"f13hvvvv"}),o=Object(n.styled)("div")({name:"Meta",class:"ms9srjd"}),s=Object(n.styled)("p")({name:"MetaContent",class:"m11jemzk"}),i=Object(n.styled)("span")({name:"Category",class:"ctub9nm",vars:{"ctub9nm-4":[function(e){var t=e.slug;return r.b.colors.category[t]||r.b.colors.category.default}]}}),u=Object(n.styled)("p")({name:"Excerpt",class:"ejt0qrr"}),d=Object(n.styled)("article")({name:"StyledPostEntry",class:"s1ym2p63"}),m=Object(n.styled)("div")({name:"Content",class:"c16injma"});t.h=d,a("Ad6m")},X8Ct:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("q1tI"),r=a.n(n),l=a("IP2g"),c=a("4Bjl"),o=a("8tEE"),s=function(e){var t="";switch(e){case"codepen":t=o.a;break;case"flickr":t=o.d;break;case"linkedin":t=o.g;break;case"medium":t=o.h;break;case"googleplus":t=o.f;break;case"dribbble":t=o.b;break;case"twitter":t=o.l;break;case"github":t=o.e;break;case"youtube":t=o.m;break;case"reddit":t=o.j;break;case"facebook":t=o.c;break;default:t=c.g}return r.a.createElement(l.a,{icon:t,size:"lg",className:"share-icon"})}},"g/rH":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return P}));a("VSsl");var n=a("q1tI"),r=a.n(n),l=a("Bl7J"),c=a("vrFN"),o=(a("KNqU"),a("ER96"),a("K6vE"),a("Pw7m"),a("X8Ct")),s=a("j8Va"),i=a("8iFL"),u=a("QNf7"),d=(a("C+fU"),Object(u.styled)("section")({name:"StyledHeader",class:"suhqeno",vars:{"suhqeno-0":[function(e){return"url("+e.headerBG+")"}]}})),m=Object(u.styled)("div")({name:"Wrapper",class:"wcqh0z5"}),p=Object(u.styled)("header")({name:"Info",class:"im6tdkb"}),f=Object(u.styled)("div")({name:"Metabox1",class:"m6bjvs0"}),b=Object(u.styled)("h1")({name:"Title",class:"td3jbbo"}),g=Object(u.styled)("div")({name:"ContactWrapper",class:"cxli7a9"}),v=Object(u.styled)("a")({name:"Contact",class:"c14zotb4"}),h=Object(u.styled)("div")({name:"Metabox2",class:"m1odfayv"}),y=Object(u.styled)("img")({name:"Avatar",class:"ajqjnq"}),E=Object(u.styled)("p")({name:"Description",class:"d17w3rty"});a("IrAA");var w=function(e){var t=e.author,a=Object(s.b)(),l=Object(i.a)();return Object(n.useEffect)((function(){a({type:"SET_PROPER_READY",payload:l})}),[l,a]),r.a.createElement(d,{headerBG:"https://d1nlfd9mjn1pae.cloudfront.net/wp-content/uploads/2020/04/1586298076bg_header.svg#authors"},r.a.createElement(m,null,r.a.createElement(p,null,r.a.createElement(f,null,r.a.createElement("div",null,r.a.createElement(b,null,t.name),r.a.createElement(g,null,Object.entries(t.contactInfo).map((function(e,a){return!!e[1].length&&r.a.createElement(v,{key:a,href:e[1],rel:"noreferrer noopener",target:"_blank","aria-label":t.name+"'s "+e[0]+" account"},Object(o.a)(e[0]))}))))),r.a.createElement(h,null,r.a.createElement("div",null,r.a.createElement(y,{src:t.photo,alt:t.name,loading:"lazy"}),r.a.createElement(E,{dangerouslySetInnerHTML:{__html:t.description}}))))))},j=(a("IGiI"),a("pQkK")),O=Object(u.styled)("section")({name:"Section",class:"sprezz4"}),I=Object(u.styled)("h2")({name:"SectionHeader",class:"s7dxtzg"});a("hK3d");var k=a("RjI+"),S=function(e){var t=e.author,a=e.posts,n=e.pageNumber,l=void 0===n?1:n,c=e.totalPage,o=void 0===c?1:c,s=e.slug,i=1===l,u=l===o,d=l-1==1?"/author/"+s+"/":"/author/"+s+"/page/"+(l-1).toString()+"/",m="/author/"+s+"/page/"+(l+1).toString()+"/";return r.a.createElement(O,null,r.a.createElement(I,null,t+"'s article"+(a.length>1?"s":"")),a.length>0?r.a.createElement(r.a.Fragment,null,a.map((function(e){var t=e.id,a=e.authors,n=e.date,l=e.categories,c=e.featuredImage,o=e.title,s=e.seo,i=e.uri;return r.a.createElement(j.a,{key:t,title:o,date:n,authors:a,categories:l,featuredImage:c||{},excerpt:s.metaDesc,link:i})})),o>1&&r.a.createElement("nav",{"aria-label":"Page Navigation"},r.a.createElement(k.b,null,!i&&r.a.createElement(k.a,{type:"prev"},r.a.createElement(k.c,{to:d,rel:"prev"},"← Previous")),!u&&r.a.createElement(k.a,{type:"next"},r.a.createElement(k.c,{to:m,rel:"next"},"Next →"))))):r.a.createElement("p",null,"No posts found."))},P="1540081335";t.default=function(e){var t,a,n=e.data,o=e.pageContext,s=o.author,i=o.totalPosts,u=o.pageNumber,d=void 0===u?1:u,m=o.totalPage,p=void 0===m?1:m,f=(null==n||null===(t=n.wpgraphql)||void 0===t||null===(a=t.posts)||void 0===a?void 0:a.nodes)||[],b=s.name+", Author at SitePoint"+(d>1?" - Page "+d:"");return s.description=s.description?s.description:s.name+" has written for SitePoint\n        and have written "+i+" article"+(i>1?"s":"")+".",r.a.createElement(l.a,{layout:"full-width"},r.a.createElement(c.a,{title:b,description:s.description+(d>1?" - Page "+d:"")}),r.a.createElement("article",{"aria-label":"Article title: "+s.name},r.a.createElement(w,{author:s}),r.a.createElement(S,{author:s.firstName||s.name,posts:f,pageNumber:d,totalPage:p,slug:s.slug})))}},pQkK:function(e,t,a){"use strict";a("VSsl"),a("JM9Q");var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),c=a("sWYD"),o=a("FMNI"),s=a("SEOL");t.a=function(e){var t=e.title,a=e.date,n=e.categories,i=e.authors,u=e.featuredImage,d=e.excerpt,m=e.link,p=u&&u.mediaItemUrl?u.mediaItemUrl:"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2016/06/1466567385sp.svg",f=n&&n.nodes?n.nodes[0]:null;return r.a.createElement(s.h,null,r.a.createElement(l.Link,{to:"/"+m},r.a.createElement(s.d,{"data-bg":p,className:"lazyload"}),r.a.createElement(s.b,null,r.a.createElement(s.g,{dangerouslySetInnerHTML:{__html:t}}),r.a.createElement(s.e,null,f&&r.a.createElement(s.a,{slug:f.slug,dangerouslySetInnerHTML:{__html:f.name}}),r.a.createElement(s.f,null,r.a.createElement("span",null,"By ",Object(o.a)(i)),", ",r.a.createElement("time",{dateTime:a},Object(c.a)(new Date(a),"LLLL dd, yyyy")))),d&&r.a.createElement(s.c,{dangerouslySetInnerHTML:{__html:d}}))))}}}]);
//# sourceMappingURL=component---src-templates-author-index-js-86f6d4dab890570184a7.js.map