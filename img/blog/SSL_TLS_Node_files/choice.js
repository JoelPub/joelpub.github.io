'use strict';(function(){(function(){var cmpScriptElement=document.createElement('script');var firstScript=document.getElementsByTagName('script')[0];cmpScriptElement.async=true;cmpScriptElement.type='text/javascript';var cmpVersion='https://quantcast.mgr.consensu.org/tcfv2/cmp2.js';cmpScriptElement.src=cmpVersion;window._qevents=window._qevents||[];(function(){var elem=document.createElement('script');elem.src=(document.location.protocol=="https:"?"https://secure":"http://edge")+".quantserve.com/quant.js";elem.async=true;elem.type="text/javascript";var scpt=document.getElementsByTagName('script')[0];scpt.parentNode.insertBefore(elem,scpt);})();var qcaccount='p-'+'DsckBJsAJpkVK';window._qevents.push({qacct:qcaccount,source:"choice"});var cmpNoScriptElement=document.createElement('noscript');var div=document.createElement('div');div.style.display="none;";var img=document.createElement('img');img.src='//pixel.quantserve.com/pixel/p-'+'DsckBJsAJpkVK'+'.gif';img.border='0';img.height='1';img.width='1';img.alt='Quantcast';div.appendChild(img);cmpNoScriptElement.appendChild(div);firstScript.parentNode.insertBefore(cmpNoScriptElement,firstScript);firstScript.parentNode.insertBefore(cmpScriptElement,firstScript);})();(function(){var css=""
+" .qc-cmp-button.qc-cmp-secondary-button:hover { "
+"   background-color: #368bd6 !important; "
+"   border-color: transparent !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button:hover { "
+"   color: #ffffff !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button { "
+"   color: #368bd6 !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button { "
+"   background-color: #eee !important; "
+"   border-color: transparent !important; "
+" } "
+""
+"";var stylesElement=document.createElement('style');var re=new RegExp('&quote;','g');css=css.replace(re,'"');stylesElement.type='text/css';if(stylesElement.styleSheet){stylesElement.styleSheet.cssText=css;}else{stylesElement.appendChild(document.createTextNode(css));}
var head=document.head||document.getElementsByTagName('head')[0];head.appendChild(stylesElement);})();var autoDetectedLanguage='en';function splitLang(lang){return lang.length>2?lang.split('-')[0]:lang;};function isSupported(lang){var langs=['en','fr','de','it','es','da','nl','el','hu','pt','ro','fi','pl','sk','sv','no','ru','bg','ca','cs','et','hr','lt','lv','mt','sl','tr','zh'];return langs.indexOf(lang)===-1?false:true;};if(isSupported(splitLang(document.documentElement.lang))){autoDetectedLanguage=splitLang(document.documentElement.lang);}else if(isSupported(splitLang(navigator.language))){autoDetectedLanguage=splitLang(navigator.language);};var choiceMilliSeconds=(new Date).getTime();window.__tcfapi('init',2,function(){},{'premiumProperties':{},'premiumUiLabels':{},'coreUiLabels':{},'theme':{},'coreConfig':{'quantcastAccountId':'DsckBJsAJpkVK','privacyMode':["GDPR"],'hashCode':'auy/DTWEF9YeS2zPlnfmBw','publisherCountryCode':'GB','publisherName':'SitePoint','vendorPurposeIds':[1,2,3,4,5,6,7,8,9,10],'vendorFeaturesIds':[1,2,3],'vendorPurposeLegitimateInterestIds':[2,3,4,5,6,7,8,9,10],'vendorSpecialFeaturesIds':[1,2],'vendorSpecialPurposesIds':[1,2],'googleEnabled':false,'consentScope':'service','thirdPartyStorageType':'iframe','consentIdentityEnabled':false,'initScreenBodyTextOption':1,'consentOnSafari':false,'lang_':'en','displayUi':'inEU','publisherConsentRestrictionIds':[],'publisherLIRestrictionIds':[],'softOptInEnabled':false,'showSummaryView':true,'persistentConsentLinkLocation':3,'uiLayout':'popup','publisherPurposeIds':[],'publisherPurposeLegitimateInterestIds':[],'publisherSpecialPurposesIds':[],'publisherFeaturesIds':[],'publisherSpecialFeaturesIds':[],'stacks':[1,42],'vendorListUpdateFreq':30,},'nonIabVendorsInfo':{}});})();