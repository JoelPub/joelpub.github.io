if (!vmfiveLogger) {
  var vmfiveLogger = {};
}

vmfiveLogger.CONVERSION_LIST = Object.freeze({
});

var urlQueryKeyVm5AdRequestId = 'vmfive_request_id';
// var urlQueryKeyVm5ClickId = 'vm5clid';

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)")
  let results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "))
}

vmfiveLogger.init = function(config) {
  const vm5AdPixelTrackingBase = 'https://pt0.vm5apis.com';

  if (vmfiveLogger.inited) {
    return;
  }
  vmfiveLogger.inited = true;
  vmfiveLogger.getBrowserId = function () {
    let browserId = window.VM5AD_BROWSER_ID;
    if (localStorage) {
      let stored = localStorage.getItem('VM5AD_BROWSER_ID');
      if (stored && stored !== '') {
        browserId = stored;
      }
    }
    return browserId;
  };
  vmfiveLogger.getRequestId = function () {
    // find AdRequestId from window href
    let requestId = getParameterByName(urlQueryKeyVm5AdRequestId, window.location.href);

    // find AdRequestId from document referer
    // (for the second page of landing page, but failed to get the AdRequestId in landing page
    if (requestId === null) {
      requestId = getParameterByName(urlQueryKeyVm5AdRequestId, document.location.referer);
    }

    if (requestId === null) {
      if (localStorage) {
        let stored = localStorage.getItem('VM5AD_LAST_REQUEST_ID');
        // let storedTime = localStorage.getItem('VM5AD_LAST_LANDING_TIMESTAMP');
        if (stored && stored !== '') {
          requestId = stored;
        }
      }
    } else {
      if (localStorage) {
        localStorage.setItem('VM5AD_LAST_REQUEST_ID', requestId);
        // localStorage.setItem('VM5AD_LAST_LANDING_TIMESTAMP', Date.now().toString());
      }
    }

    return requestId;
  };

  config = config ? config : {};
  vmfiveLogger.config = Object.assign({
    'inventoryCompany': 'thenewslens_com',
    'contentCatNielsen': '',
    'provider': '-',
    'loggerName': 'thenewslens_com',
    'loggerVer': '2021030401',
    // 'heartbeatInterval': 3, // seconds
    'heartbeatInterval': 0, // disabled
    'landingSessionExpiryPeriod': 15*60, // seconds
    'landing_timestamp': Date.now(),
    'base_tracking_url': vm5AdPixelTrackingBase+'/api/v2/pixel?',
  }, config);

  function addScript(attribute, text) {
    return new Promise(function(resolve, reject) {

        let script = document.createElement('script');
        for (let attr in attribute) {
            if (!attribute.hasOwnProperty(attr)) continue;
            let value = attribute[attr];
            if (value) {
              script.setAttribute(attr, value);
            }
        }
        script.innerHTML = text;
        script.onload = resolve;
        script.onerror = reject;

        document.head.appendChild(script);
    });
  }
  function initHeartbeat() {
    let heartbeatInterval = vmfiveLogger.config.heartbeatInterval;
    if (typeof heartbeatInterval !== "number") return;
    if (heartbeatInterval <= 0) return;

    let totalLiveTime = 0;

    let maxVisibleInterval = 400;
    let lastSeen = 0;
    raf(function tick() {
      lastSeen = Date.now();

      raf(tick);
    });

    vmfiveLogger.heartbeatTimer = setInterval(function () {
      let visibleInterval = Date.now() - lastSeen;
      if (visibleInterval > maxVisibleInterval) {
        vmfiveLogger.logMessage('INVISIBLE Interval:' + visibleInterval);
        return;
      }

      totalLiveTime += heartbeatInterval;

      vmfiveLogger.log('heartbeat', {
        eventValue: totalLiveTime,
        eventDetails: {
          'fingerprint': window.VMFIVE_FINGERPRINT,
        },
      });
    }, vmfiveLogger.config.heartbeatInterval * 1000);
  }
  function initToolkitIframe() {
      let toolkitIframe = document.createElement('iframe');
      toolkitIframe.height = 0;
      toolkitIframe.width = 0;
      toolkitIframe.style.display = 'none';
      toolkitIframe.src = 'https://man.vm5apis.com/dist/persistentID.html';
      let handler = function (event) {

          vmfiveLogger.logMessage(event.data);
          if (event.data.event === 'iframeReady') {
              window.removeEventListener("message", handler);
              if (localStorage) {
                  localStorage.setItem('VM5AD_BROWSER_ID', event.data.VM5AD_BROWSER_ID)

                  // vmfiveLogger.logMessage(`GET ${localStorage.getItem('VM5AD_BROWSER_ID')}`);
              }
          }
      };
      window.addEventListener("message", handler);
      document.body.appendChild(toolkitIframe);
  }
  function initFingerprint() {

      let ipAddrJsonResponseJsonObject = {};
      Promise.all([
        addScript({
          src: 'https://man.vm5apis.com/dist/fingerprintjs2/2.1.0/fingerprint2.min.js',
        }),
        addScript({
          src: 'https://man.vm5apis.com/dist/blueimp-md5/2.10.0/js/md5.min.js',
        }),
        Promise.resolve().then(()=>{
          if (window.fetch) {
            return Promise.resolve();
          }

          return addScript({
            src: 'https://unpkg.com/unfetch/dist/unfetch.umd.js',
          });
        }).then(()=>{
          return fetch('https://iptoweather.vm5apis.com/addr.json');
        }).then(response=>{
          return response.json();
        }).then((result)=>{
          ipAddrJsonResponseJsonObject = result;
        }),
      ]).then(function () {
        let options = {};
        Fingerprint2.get(options, function(components) {
          let values = components.map(function(component){ return component.value; });
          let fingerprint = Fingerprint2.x64hash128(values.join(''), 31);
          // console.log(fingerprint) // a hash, representing your device fingerprint
          // console.log(components) // an array of FP components

          let needsMD5 = ['webgl', 'canvas'];
          for (let item of components) {
            if (needsMD5.includes(item.key)) {
              item.value = md5(item.value);
            }
          }

          let totalInfo = {
            browser_id: vmfiveLogger.getBrowserId(),
            ip: ipAddrJsonResponseJsonObject.addr,
            fingerprint,
          };
          components.forEach(kv => {
            totalInfo['component_'+kv.key] = JSON.stringify(kv.value);
          });

          let url = vm5AdPixelTrackingBase+
            '/api/v2/pixel?event=fingerprint&provider=-&webBrowserId='+
            totalInfo.browser_id+
            '&eventDetails='+
            encodeURIComponent(JSON.stringify(totalInfo))
            ;
          let http = new XMLHttpRequest();

          /*
          http.open('POST', url);
          http.setRequestHeader('Content-type', 'application/json');
          http.send(JSON.stringify(totalInfo));
          */
          http.open('GET', url);
          http.send();

          http.onload = function() {
              // Do whatever with response
              // logMessage(http.responseText)
          }
          // logMessage(JSON.stringify(totalInfo));
        })
      });
  }

  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1666593263493412');
  fbq('trackSingleCustom', '1666593263493412', 'PageView');

  !function(w,d,n,s,t,p){if(w.gtag)return;;t=d.createElement(n);t.async=!0;t.src=s;p=d.getElementsByTagName(n)[0];p.parentNode.insertBefore(t,p)}(window,document,'script','https://www.googletagmanager.com/gtag/js?id=DC-10559160');
  window.dataLayer = window.dataLayer || [];
  window.gtag = function(){window.dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'DC-10559160');

  Promise.all([
    addScript({
      type: 'text/javascript',
      async: null,

      id: 'vm5ad-js-sdk',
      src: 'https://vawpro.vm5apis.com/man.js',
      'data-mode': 'fast',

    }, ""),
    addScript({
      type: 'text/javascript',
      src: 'https://man.vm5apis.com/dist/raf.js',
      'data-mode': 'fast',
    }, ""),
  ]).then(function () {
    initToolkitIframe();
    initFingerprint();
  }).then(function () {
    // Log logs before being initialized.
    if (vmfiveLogger.logList.length > 0) {
      vmfiveLogger.logList.forEach(function (item) {
        vmfiveLogger.log(item.name, item.config);
      });
    }
  });

  function startLandingProcess() {
    // send landing event after Fingerprint2 is ready
    let waitingInterval = setInterval(function() {
      if (window.Fingerprint2) {
        clearInterval(waitingInterval);
        let options = {};
        if (window.Fingerprint2.get && typeof(window.Fingerprint2.get) === 'function') {
          Fingerprint2.get(options, function(component) {
            fingerprint = Fingerprint2.x64hash128(component.join(''), 31);
            window.VMFIVE_FINGERPRINT = fingerprint;
          });
        }
        vmfiveLogger.log('landing', {
          eventDetails: {
            'fingerprint': window.VMFIVE_FINGERPRINT,
          },
        });
        initHeartbeat();
      }
    }, 100);
  }

  if (document.readyState === 'complete') {
    vmfiveLogger.log('DOMContentLoaded');
    startLandingProcess();
  } else {
    window.addEventListener('load', function () {
      startLandingProcess();
    });
    if (document.readyState === 'interactive') {
      vmfiveLogger.log('DOMContentLoaded');
    } else {
      window.addEventListener('DOMContentLoaded', function () {
        vmfiveLogger.log('DOMContentLoaded');
      })
    }
  }
};
vmfiveLogger.getAllData = function () {
  function JustifiedHostURL() {
    function isInSafeFrame() {
      return window.$sf && window.$sf.ext &&
        window.$sf.ext.supports && typeof window.$sf.ext.supports === 'function' &&
        typeof window.$sf.ext.supports() === 'object';
    }
    function isInAmpAd() {
      return window.context && window.context.location && window.context.location.href;
    }
    if (isInSafeFrame()) {
      return new URL(document.referrer);
    }
    if (isInAmpAd()) {
      return new URL(window.context.location.href);
    }

    return undefined;
  }

  let data = {};
  data.webBrowserId = vmfiveLogger.getBrowserId();
  data.webRef = document.referrer;
  data.webPage = window.location.href;
  // data.webHeaderUserAgent = window.navigator.userAgent;
  data.hostURL = encodeURIComponent(window.location.href);
  data.requestId = vmfiveLogger.getRequestId();
  data.landingId = getLandingId(data.webBrowserId, vmfiveLogger.config['landing_timestamp']);
  data.landingSessionId = getLandingSessionId(data.webBrowserId, vmfiveLogger.config['landing_timestamp']);

  return data;
};

vmfiveLogger.log = function(name, config) {
  function doTracking(url) {
    url = url.replace('[timestamp]', Date.now());
    let req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.send();
  }
  config = config ? config : {};
  config['eventDetails'] = config['eventDetails'] ? config['eventDetails'] : {};

  let data = vmfiveLogger.getAllData();
  if (data.webBrowserId) {
    // TODO Send Tracking Events
    vmfiveLogger.logMessage('EVENT ' + name);

    data.event = name;
    data['inventoryCompany'] = vmfiveLogger.config['inventoryCompany'];
    data['contentCatNielsen'] = vmfiveLogger.config['contentCatNielsen'];
    data['provider'] = vmfiveLogger.config['provider'];
    data['loggerName'] = vmfiveLogger.config['loggerName'];
    data['loggerVer'] = vmfiveLogger.config['loggerVer'];

    vmfiveLogger.logMessage(data);

    let url = vmfiveLogger.config['base_tracking_url'];
    if (! (url.indexOf('?') > -1)) {
      url += '?';
    }
    url += '&eventValue=' + encodeURIComponent(config['eventValue'] ? config['eventValue'] : null);
    url += '&eventSubtype=' + encodeURIComponent(config['eventSubtype'] ? config['eventSubtype'] : null);
    config['eventDetails'].landingSessionId = data.landingSessionId;
    url += '&eventDetails=' + encodeURIComponent(JSON.stringify(config['eventDetails'] ? config['eventDetails'] : null));
    Object.keys(data).forEach(function (key) {
      url += '&'+key+'=' + encodeURIComponent(data[key]);
    });

    // NOTE For form checking.
    if (name === 'click:submit') {
    }

    // url = url.split('').join('');
    vmfiveLogger.logMessage(url);
    doTracking(url);

    if (typeof(fbq) == 'function' && name != 'heartbeat') {
      fbq('trackSingleCustom', '1666593263493412', name, {...data, ...config, ...{'FromVMFiveAds': vmfiveLogger.getRequestId() != null}});
    }

    if (typeof(gtag) == 'function' && name != 'heartbeat') {
      gtag('event', 'conversion', {
        'allow_custom_scripts': true,
        'u1': data['loggerName'],
        'u2': data['loggerVer'],
        'u3': name,
        'u4': JSON.stringify(config),
        'u5': vmfiveLogger.getRequestId() != null,
        'send_to': 'DC-10559160/invmedia/logge0+standard'
      });

      // 如果有 action 或 click 開頭的，發對應的 floodlight pixel
      if ((name.indexOf('action:') == 0 || name.indexOf('click:') == 0) && vmfiveLogger.CONVERSION_LIST && vmfiveLogger.CONVERSION_LIST[name]) {
        gtag('event', 'conversion', {
          'allow_custom_scripts': true,
          'send_to': vmfiveLogger.CONVERSION_LIST[name]
        });
      }
    }
  }
  else {
    vmfiveLogger.logList.push({
      name: name,
      config: config,
    });
  }

  // 以目前的使用，所有發 log 情境都代表這個頁面是 active 的，所以直接延長 landing session
  renewLandingSession(data.webBrowserId, Date.now());
};

function setCookie(name, value, secToExpire, path, domain, isSecure) {
	if (secToExpire) {
		let date = new Date();
		date.setTime(date.getTime()+(secToExpire*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path="+(path || '/') +
  (domain ? ';domain=' + domain : '') +
  (isSecure ? ';secure' : '');
}

function getCookie(cookieName) {
  let cookiePattern = new RegExp('(^|;)[ ]*' + cookieName + '=([^;]*)'), cookieMatch = cookiePattern.exec(document.cookie);
  return cookieMatch ? cookieMatch[2] : null;
}

function eraseCookie(name) {
	setCookie(name, "", -1);
}

function getLandingId(webBrowserId, landingTimestamp) {
  if (typeof window.vmfiveLandingId == 'undefined') {
    window.vmfiveLandingId = webBrowserId + landingTimestamp;
  }
  return window.vmfiveLandingId;
}

function getLandingSessionInfo(webBrowserId, landingTimestamp) {
  let landingSession = null;
  let landingSessionInfo = null;

  // if the expiry period is not a valid number, update landing session
  let landingSessionExpiryPeriod = vmfiveLogger.config.landingSessionExpiryPeriod;
  if (typeof landingSessionExpiryPeriod !== "number") {
    landingSessionExpiryPeriod = 0;
  }
  if (landingSessionExpiryPeriod > 0) {
    landingSession = getCookie("vmfive_landing_session_info");
  }

  if (landingSession) {
    try {
      landingSessionInfo = JSON.parse(landingSession);
    } catch(e) {
      landingSessionInfo = null;
    }
  }

  if (!landingSessionInfo || !landingSessionInfo.id
    || (getRequestId() !== null && landingSessionInfo.requestId !== getRequestId())
    || (getUtmSource() !== null && landingSessionInfo.utm_source !== getUtmSource())) {
    landingSessionInfo = {
      id: getLandingId(webBrowserId, vmfiveLogger.config['landing_timestamp']),
      requestId: getRequestId(),
      utm_source: getUtmSource(),
    };

    setCookie("vmfive_landing_session_info", JSON.stringify(landingSessionInfo), landingSessionExpiryPeriod);
    // console.log("update landing session info", landingSessionInfo);
  }

  return landingSessionInfo;
}

function getLandingSessionId(webBrowserId, landingTimestamp) {
  return getLandingSessionInfo(webBrowserId, landingTimestamp).id;
}

function renewLandingSession(webBrowserId, landingTimestamp) {
  let landingSessionInfo = getLandingSessionInfo(webBrowserId, landingTimestamp);
  let landingSessionExpiryPeriod = vmfiveLogger.config.landingSessionExpiryPeriod;
  setCookie("vmfive_landing_session_info", JSON.stringify(landingSessionInfo), landingSessionExpiryPeriod);
}

function findGetParameter(parameterName) {
  let result = null,
      tmp = [];
  location.search
      .substr(1)
      .split("&")
      .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
      });
  return result;
}

function getUtmSource() {
  if (!window.vmfiveUtmSource) {
    window.vmfiveUtmSource = getParameterByName('utm_source', window.location.href);
  }
  return window.vmfiveUtmSource;
}

function getRequestId() {
  if (!window.vmfiveRequestId) {
    window.vmfiveRequestId = getParameterByName(urlQueryKeyVm5AdRequestId, window.location.href);
  }
  return window.vmfiveRequestId;
}

vmfiveLogger.logList = [];
vmfiveLogger.debug = window.location.href.indexOf('enable-log') > -1;
vmfiveLogger.logMessage = function (msg) {
  // NOTE This is for DEBUG
  if (vmfiveLogger.debug) {
    function isObject (item) {
      return (typeof item === "object" && !Array.isArray(item) && item !== null);
    }

    console.log("VMFIVE_LOG: " + (isObject(msg) ? JSON.stringify(msg) : msg));
  }
};

// NOTE Init the SDK
vmfiveLogger.init();
