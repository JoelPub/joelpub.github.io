!function(t,n,a){var e=!0,r={isInSight:function(a){const e=a.parentNode,r=this.getDataset(e).pid;if(-1!=n.cookie.indexOf("c_adb="))return!1;if(t.innerWidth<1720&&(479==r||476==r))return!1;if("indexSuperise_"+r in localStorage)return!1;var c=a.getBoundingClientRect(),i=t.innerHeight;return c.top<=i+100},loadImg:function(t){var n=this;if(!t.src){var a=n.getDataset(t).src;t.src=a}},getDataset:function(t){if(t.dataset)return t.dataset;var n=t.attributes,a={};name,matchStr;for(var e=0;e<n.length;e++)matchStr=n[e].name.match(/^data-(.+)/),matchStr=n[e].name.match(/^data-(.+)/),matchStr&&(name=matchStr[1].replace(/-([\da-z])/gi,function(t,n){return n.toUpperCase()}),a[name]=n[e].value);return a},throttle:function(t){var n=null;return function(){var a=new Date,e=this,r=arguments;n||(n=a),a-n>=500&&(t.apply(e,r),n=a)}},checkImgs:function(){for(var t=this,n=a(".pre-img-lasy"),r=0;r<n.length;r++)t.isInSight(n[r])&&t.loadImg(n[r]);e=!0}};void 0===t.csdn&&(t.csdn={}),t.csdn.trackad=r,a(function(){csdn.trackad.checkImgs(),a(t).on("scroll",function(){e&&(e=!1,csdn.trackad.throttle(csdn.trackad.checkImgs()))}),a(t).on("resize",function(){var t=a(this).width(),n=a(this).height();console.log(t,n),e&&(e=!1,csdn.trackad.throttle(csdn.trackad.checkImgs()))})})}(window,document,jQuery);