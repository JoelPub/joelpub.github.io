function AnchorJS(A) {
    "use strict";
    this.options = A || {}, this._applyRemainingDefaultOptions = function(A) {
        this.options.icon = this.options.hasOwnProperty("icon") ? A.icon : "", this.options.visible = this.options.hasOwnProperty("visible") ? A.visible : "hover", this.options.placement = this.options.hasOwnProperty("placement") ? A.placement : "right", this.options["class"] = this.options.hasOwnProperty("class") ? A["class"] : ""
    }, this._applyRemainingDefaultOptions(A), this.add = function(A) {
        var e, t, o, n, i, s, a, l, r, h, c, g;
        if (this._applyRemainingDefaultOptions(this.options), A) {
            if ("string" != typeof A) throw new Error("The selector provided to AnchorJS was invalid.")
        } else A = "h1, h2, h3, h4, h5, h6";
        if (e = document.querySelectorAll(A), 0 === e.length) return !1;
        for (this._addBaselineStyles(), t = document.querySelectorAll("[id]"), o = [].map.call(t, function(A) {
            return A.id
        }), i = 0; i < e.length; i++) {
            if (e[i].hasAttribute("id")) n = e[i].getAttribute("id");
            else {
                s = e[i].textContent, a = s.replace(/[^\w\s-]/gi, "").replace(/\s+/g, "-").replace(/-{2,}/g, "-").substring(0, 64).replace(/^-+|-+$/gm, "").toLowerCase(), h = a, r = 0;
                do void 0 !== l && (h = a + "-" + r), l = o.indexOf(h), r += 1;
                while (-1 !== l);
                l = void 0, o.push(h), e[i].setAttribute("id", h), n = h
            }
       //     c = n.replace(/-/g, " "), g = document.createElement("a"), g.className = "anchorjs-link " + this.options["class"], g.href = "#" + n, g.setAttribute("aria-label", "Anchor link for: " + c), g.setAttribute("data-anchorjs-icon", this.options.icon), "always" === this.options.visible && (g.style.opacity = "1"), "" === this.options.icon && (g.style.fontFamily = "anchorjs-icons", g.style.fontStyle = "normal", g.style.fontVariant = "normal", g.style.fontWeight = "normal", g.style.lineHeight = 1), "left" === this.options.placement ? (g.style.position = "absolute", g.style.marginLeft = "-1em",g.style.paddingRight = "0.5em", e[i].insertBefore(g, e[i].firstChild)) : (g.style.paddingLeft = "0.375em", e[i].appendChild(g))
        }
        return this
    }, this.remove = function(A) {
        for (var e, t = document.querySelectorAll(A), o = 0; o < t.length; o++) e = t[o].querySelector(".anchorjs-link"), e && t[o].removeChild(e);
        return this
    }, this._addBaselineStyles = function() {
        if (null === document.head.querySelector("style.anchorjs")) {
            var A, e = document.createElement("style"),
                t = " .anchorjs-link {   opacity: 0;   text-decoration: none;   -webkit-font-smoothing: antialiased;   -moz-osx-font-smoothing: grayscale; }",
               o = " *:hover > .anchorjs-link, .anchorjs-link:focus  {  opacity: 1;color: #FF7F23; }",
                n = ' @font-face {   font-family: "anchorjs-icons";   font-style: normal;   font-weight: normal;   src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBTUAAAC8AAAAYGNtYXAWi9QdAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5Zgq29TcAAAF4AAABNGhlYWQEZM3pAAACrAAAADZoaGVhBhUDxgAAAuQAAAAkaG10eASAADEAAAMIAAAAFGxvY2EAKACuAAADHAAAAAxtYXhwAAgAVwAAAygAAAAgbmFtZQ5yJ3cAAANIAAAB2nBvc3QAAwAAAAAFJAAAACAAAwJAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpywPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6cv//f//AAAAAAAg6cv//f//AAH/4xY5AAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAACADEARAJTAsAAKwBUAAABIiYnJjQ/AT4BMzIWFxYUDwEGIicmND8BNjQnLgEjIgYPAQYUFxYUBw4BIwciJicmND8BNjIXFhQPAQYUFx4BMzI2PwE2NCcmNDc2MhcWFA8BDgEjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAEAAAABAACiToc1Xw889QALBAAAAAAA0XnFFgAAAADRecUWAAAAAAJTAsAAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAAlMAAQAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAACAAAAAoAAMQAAAAAACgAUAB4AmgABAAAABQBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADgAAAAEAAAAAAAIABwCfAAEAAAAAAAMADgBLAAEAAAAAAAQADgC0AAEAAAAAAAUACwAqAAEAAAAAAAYADgB1AAEAAAAAAAoAGgDeAAMAAQQJAAEAHAAOAAMAAQQJAAIADgCmAAMAAQQJAAMAHABZAAMAAQQJAAQAHADCAAMAAQQJAAUAFgA1AAMAAQQJAAYAHACDAAMAAQQJAAoANAD4YW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format("truetype"); }',
                i = " [data-anchorjs-icon]::after {   content: attr(data-anchorjs-icon); }";
            e.className = "anchorjs", e.appendChild(document.createTextNode("")), A = document.head.querySelector('[rel="stylesheet"], style'), void 0 === A ? document.head.appendChild(e) : document.head.insertBefore(e, A), e.sheet.insertRule(t, e.sheet.cssRules.length), e.sheet.insertRule(o, e.sheet.cssRules.length), e.sheet.insertRule(i, e.sheet.cssRules.length), e.sheet.insertRule(n, e.sheet.cssRules.length)
        }
    }
}
var anchors = new AnchorJS;

//
function backToTop(o) {
    $(window).scroll(function() {
        $(this).scrollTop() > 300 ? $(o).addClass("scrolled") : $(o).removeClass("scrolled")
    }), $(o).click(function() {
        return $("body,html").animate({
            scrollTop: 0
        }, 200), !1
    })
}
/*! jQuery UI - v1.11.4 - 2015-10-10
 * http://jqueryui.com
 * Includes: widget.js
 * Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */! function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(t) {
    /*!
     * jQuery UI Widget 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/jQuery.widget/
     */
    var e = 0,
        i = Array.prototype.slice;
    t.cleanData = function(e) {
        return function(i) {
            var n, s, o;
            for (o = 0; null != (s = i[o]); o++) try {
                n = t._data(s, "events"), n && n.remove && t(s).triggerHandler("remove")
            } catch (r) {}
            e(i)
        }
    }(t.cleanData), t.widget = function(e, i, n) {
        var s, o, r, a, u = {}, d = e.split(".")[0];
        return e = e.split(".")[1], s = d + "-" + e, n || (n = i, i = t.Widget), t.expr[":"][s.toLowerCase()] = function(e) {
            return !!t.data(e, s)
        }, t[d] = t[d] || {}, o = t[d][e], r = t[d][e] = function(t, e) {
            return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new r(t, e)
        }, t.extend(r, o, {
            version: n.version,
            _proto: t.extend({}, n),
            _childConstructors: []
        }), a = new i, a.options = t.widget.extend({}, a.options), t.each(n, function(e, n) {
            return t.isFunction(n) ? void(u[e] = function() {
                var t = function() {
                    return i.prototype[e].apply(this, arguments)
                }, s = function(t) {
                    return i.prototype[e].apply(this, t)
                };
                return function() {
                    var e, i = this._super,
                        o = this._superApply;
                    return this._super = t, this._superApply = s, e = n.apply(this, arguments), this._super = i, this._superApply = o, e
                }
            }()) : void(u[e] = n)
        }), r.prototype = t.widget.extend(a, {
            widgetEventPrefix: o ? a.widgetEventPrefix || e : e
        }, u, {
            constructor: r,
            namespace: d,
            widgetName: e,
            widgetFullName: s
        }), o ? (t.each(o._childConstructors, function(e, i) {
            var n = i.prototype;
            t.widget(n.namespace + "." + n.widgetName, r, i._proto)
        }), delete o._childConstructors) : i._childConstructors.push(r), t.widget.bridge(e, r), r
    }, t.widget.extend = function(e) {
        for (var n, s, o = i.call(arguments, 1), r = 0, a = o.length; a > r; r++) for (n in o[r]) s = o[r][n], o[r].hasOwnProperty(n) && void 0 !== s && (t.isPlainObject(s) ? e[n] = t.isPlainObject(e[n]) ? t.widget.extend({}, e[n], s) : t.widget.extend({}, s) : e[n] = s);
        return e
    }, t.widget.bridge = function(e, n) {
        var s = n.prototype.widgetFullName || e;
        t.fn[e] = function(o) {
            var r = "string" == typeof o,
                a = i.call(arguments, 1),
                u = this;
            return r ? this.each(function() {
                var i, n = t.data(this, s);
                return "instance" === o ? (u = n, !1) : n ? t.isFunction(n[o]) && "_" !== o.charAt(0) ? (i = n[o].apply(n, a), i !== n && void 0 !== i ? (u = i && i.jquery ? u.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + o + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + o + "'")
            }) : (a.length && (o = t.widget.extend.apply(null, [o].concat(a))), this.each(function() {
                var e = t.data(this, s);
                e ? (e.option(o || {}), e._init && e._init()) : t.data(this, s, new n(o, this))
            })), u
        }
    }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(i, n) {
            n = t(n || this.defaultElement || this)[0], this.element = t(n), this.uuid = e++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), n !== this && (t.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === n && this.destroy()
                }
            }), this.document = t(n.style ? n.ownerDocument : n.document || n), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), i), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: t.noop,
        widget: function() {
            return this.element
        },
        option: function(e, i) {
            var n, s, o, r = e;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof e) if (r = {}, n = e.split("."), e = n.shift(), n.length) {
                for (s = r[e] = t.widget.extend({}, this.options[e]), o = 0; o < n.length - 1; o++) s[n[o]] = s[n[o]] || {}, s = s[n[o]];
                if (e = n.pop(), 1 === arguments.length) return void 0 === s[e] ? null : s[e];
                s[e] = i
            } else {
                if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                r[e] = i
            }
            return this._setOptions(r), this
        },
        _setOptions: function(t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !! e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(e, i, n) {
            var s, o = this;
            "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = s = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()), t.each(n, function(n, r) {
                function a() {
                    return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? o[r] : r).apply(o, arguments) : void 0
                }
                "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
                var u = n.match(/^([\w:-]*)\s*(.*)$/),
                    d = u[1] + o.eventNamespace,
                    h = u[2];
                h ? s.delegate(h, d, a) : i.bind(d, a)
            })
        },
        _off: function(e, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(i).undelegate(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
        },
        _delay: function(t, e) {
            function i() {
                return ("string" == typeof t ? n[t] : t).apply(n, arguments)
            }
            var n = this;
            return setTimeout(i, e || 0)
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function(e) {
                    t(e.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(e) {
                    t(e.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function(e) {
                    t(e.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(e) {
                    t(e.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(e, i, n) {
            var s, o, r = this.options[e];
            if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent) for (s in o) s in i || (i[s] = o[s]);
            return this.element.trigger(i, n), !(t.isFunction(r) && r.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
        }
    }, t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, i) {
        t.Widget.prototype["_" + e] = function(n, s, o) {
            "string" == typeof s && (s = {
                effect: s
            });
            var r, a = s ? s === !0 || "number" == typeof s ? i : s.effect || i : e;
            s = s || {}, "number" == typeof s && (s = {
                duration: s
            }), r = !t.isEmptyObject(s), s.complete = o, s.delay && n.delay(s.delay), r && t.effects && t.effects.effect[a] ? n[e](s) : a !== e && n[a] ? n[a](s.duration, s.easing, o) : n.queue(function(i) {
                t(this)[e](), o && o.call(n[0]), i()
            })
        }
    });
    t.widget
});
/*! jquery Tocify - v1.9.0 - 2013-10-01
 * http://www.gregfranko.com/jquery.tocify.js/
 * Copyright (c) 2013 Greg Franko; Licensed MIT */
! function(e) {
    "use strict";
    e(window.jQuery, window, document)
}(function(e, t, s, i) {
    "use strict";
    var o = "tocify",
        n = "tocify-focus",
        a = "tocify-hover",
        l = "tocify-hide",
        h = "tocify-header",
        r = "." + h,
        d = "tocify-subheader",
        c = "." + d,
        f = "tocify-item",
        u = "." + f,
        p = "tocify-extend-page",
        g = "." + p;
    e.widget("toc.tocify", {
        version: "1.9.0",
        options: {
            context: "article",
            ignoreSelector: null,
            selectors: "h2, h3",
            showAndHide: !0,
            showEffect: "slideDown",
            showEffectSpeed: "medium",
            hideEffect: "slideUp",
            hideEffectSpeed: "medium",
            smoothScroll: !0,
            smoothScrollSpeed: "medium",
            scrollTo: 45, //点击锚链接定位到位置，默认为0
            showAndHideOnScroll: !0,
            highlightOnScroll: !0,
            highlightOffset: 40,
            theme: "bootstrap",
            extendPage: !0,
            extendPageOffset: 100,
            history: !0,
            scrollHistory: !1,
            hashGenerator: "compact",
            highlightDefault: !0
        },
        _create: function() {
            var s = this;
            s.extendPageScroll = !0, s.items = [], s._generateToc(), s._addCSSClasses(), s.webkit = function() {
                for (var e in t) if (e && -1 !== e.toLowerCase().indexOf("webkit")) return !0;
                return !1
            }(), s._setEventHandlers(), e(t).load(function() {
                s._setActiveElement(!0), e("html, body").promise().done(function() {
                    setTimeout(function() {
                        s.extendPageScroll = !1
                    }, 0)
                })
            })
        },
        _generateToc: function() {
            var t, s, i = this,
                n = i.options.ignoreSelector;
            return t = -1 !== this.options.selectors.indexOf(",") ? e(this.options.context).find(this.options.selectors.replace(/ /g, "").substr(0, this.options.selectors.indexOf(","))) : e(this.options.context).find(this.options.selectors.replace(/ /g, "")), t.length ? (i.element.addClass(o), void t.each(function(t) {
                e(this).is(n) || (s = e("<ul/>", {
                    id: h + t,
                    "class": h
                }).append(i._nestElements(e(this), t)), i.element.append(s), e(this).nextUntil(this.nodeName.toLowerCase()).each(function() {
                    0 === e(this).find(i.options.selectors).length ? e(this).filter(i.options.selectors).each(function() {
                        e(this).is(n) || i._appendSubheaders.call(this, i, s)
                    }) : e(this).find(i.options.selectors).each(function() {
                        e(this).is(n) || i._appendSubheaders.call(this, i, s)
                    })
                }))
            })) : void i.element.addClass(l)
        },
        _setActiveElement: function(e) {
            var s = this,
                i = t.location.hash.substring(1),
                o = s.element.find('li[data-unique="' + i + '"]');
            return i.length ? (s.element.find("." + s.focusClass).removeClass(s.focusClass), o.addClass(s.focusClass), s.options.showAndHide && o.click()) : (s.element.find("." + s.focusClass).removeClass(s.focusClass), !i.length && e && s.options.highlightDefault && s.element.find(u).first().addClass(s.focusClass)), s
        },
        _nestElements: function(t, s) {
            var i, o, n;
            return i = e.grep(this.items, function(e) {
                return e === t.text()
            }), i.length ? this.items.push(t.text() + s) : this.items.push(t.text()), n = this._generateHashValue(i, t, s), o = e("<li/>", {
                "class": f,
                "data-unique": n
            }).append(e("<a/>", {
                text: t.text()
            })), t.before(e("<div/>", {
                name: n,
                "data-unique": n
            })), o
        },
        _generateHashValue: function(e, t, s) {
            var i = "",
                o = this.options.hashGenerator;
            if ("pretty" === o) {
                for (i = t.text().toLowerCase().replace(/\s/g, "-"); i.indexOf("--") > -1;) i = i.replace(/--/g, "-");
                for (; i.indexOf(":-") > -1;) i = i.replace(/:-/g, "-")
            } else i = "function" == typeof o ? o(t.text(), t) : t.text().replace(/\s/g, "");
            return e.length && (i += "" + s), i
        },
        _appendSubheaders: function(t, s) {
            var i = e(this).index(t.options.selectors),
                o = e(t.options.selectors).eq(i - 1),
                n = +e(this).prop("tagName").charAt(1),
                a = +o.prop("tagName").charAt(1);
            a > n ? t.element.find(c + "[data-tag=" + n + "]").last().append(t._nestElements(e(this), i)) : n === a ? s.find(u).last().after(t._nestElements(e(this), i)) : s.find(u).last().after(e("<ul/>", {
                "class": d,
                "data-tag": n
            })).next(c).append(t._nestElements(e(this), i))
        },
        _setEventHandlers: function() {
            var i = this;
            this.element.on("click.tocify", "li", function(s) {
                if (i.options.history && (t.location.hash = e(this).attr("data-unique")), i.element.find("." + i.focusClass).removeClass(i.focusClass), e(this).addClass(i.focusClass), i.options.showAndHide) {
                    var o = e('li[data-unique="' + e(this).attr("data-unique") + '"]');
                    i._triggerShow(o)
                }
                i._scrollTo(e(this))
            }), this.element.find("li").on({
                "mouseenter.tocify": function() {
                    e(this).addClass(i.hoverClass), e(this).css("cursor", "pointer")
                },
                "mouseleave.tocify": function() {
                    "bootstrap" !== i.options.theme && e(this).removeClass(i.hoverClass)
                }
            }), (i.options.extendPage || i.options.highlightOnScroll || i.options.scrollHistory || i.options.showAndHideOnScroll) && e(t).on("scroll.tocify", function() {
                e("html, body").promise().done(function() {
                    var o, n, a, l, h = e(t).scrollTop(),
                        r = e(t).height(),
                        d = e(s).height(),
                        c = e("body")[0].scrollHeight;
                    if (i.options.extendPage && (i.webkit && h >= c - r - i.options.extendPageOffset || !i.webkit && r + h > d - i.options.extendPageOffset) && !e(g).length) {
                        if (n = e('div[data-unique="' + e(u).last().attr("data-unique") + '"]'), !n.length) return;
                        a = n.offset().top, e(i.options.context).append(e("<div />", {
                            "class": p,
                            height: Math.abs(a - h) + "px",
                            "data-unique": p
                        })), i.extendPageScroll && (l = i.element.find("li.active"), i._scrollTo(e('div[data-unique="' + l.attr("data-unique") + '"]')))
                    }
                    setTimeout(function() {
                        var s, n = null,
                            a = null,
                            l = e(i.options.context).find("div[data-unique]");
                        l.each(function(t) {
                            var s = Math.abs((e(this).next().length ? e(this).next() : e(this)).offset().top - h - i.options.highlightOffset);
                            return null == n || n > s ? (n = s, void(a = t)) : !1
                        }), s = e(l[a]).attr("data-unique"), o = e('li[data-unique="' + s + '"]'), i.options.highlightOnScroll && o.length && (i.element.find("." + i.focusClass).removeClass(i.focusClass), o.addClass(i.focusClass)), i.options.scrollHistory && t.location.hash !== "#" + s && t.location.replace("#" + s), i.options.showAndHideOnScroll && i.options.showAndHide && i._triggerShow(o, !0)
                    }, 0)
                })
            })
        },
        show: function(t, s) {
            var i = this;
            if (!t.is(":visible")) switch (t.find(c).length || t.parent().is(r) || t.parent().is(":visible") ? t.children(c).length || t.parent().is(r) || (t = t.closest(c)) : t = t.parents(c).add(t), i.options.showEffect) {
                case "none":
                    t.show();
                    break;
                case "show":
                    t.show(i.options.showEffectSpeed);
                    break;
                case "slideDown":
                    t.slideDown(i.options.showEffectSpeed);
                    break;
                case "fadeIn":
                    t.fadeIn(i.options.showEffectSpeed);
                    break;
                default:
                    t.show()
            }
            return t.parent().is(r) ? i.hide(e(c).not(t)) : i.hide(e(c).not(t.closest(r).find(c).not(t.siblings()))), i
        },
        hide: function(e) {
            var t = this;
            switch (t.options.hideEffect) {
                case "none":
                    e.hide();
                    break;
                case "hide":
                    e.hide(t.options.hideEffectSpeed);
                    break;
                case "slideUp":
                    e.slideUp(t.options.hideEffectSpeed);
                    break;
                case "fadeOut":
                    e.fadeOut(t.options.hideEffectSpeed);
                    break;
                default:
                    e.hide()
            }
            return t
        },
        _triggerShow: function(e, t) {
            var s = this;
            return e.parent().is(r) || e.next().is(c) ? s.show(e.next(c), t) : e.parent().is(c) && s.show(e.parent(), t), s
        },
        _addCSSClasses: function() {
            return "jqueryui" === this.options.theme ? (this.focusClass = "ui-state-default", this.hoverClass = "ui-state-hover", this.element.addClass("ui-widget").find(".toc-title").addClass("ui-widget-header").end().find("li").addClass("ui-widget-content")) : "bootstrap" === this.options.theme ? (this.element.find(r + "," + c).addClass("nav nav-list"), this.focusClass = "active") : (this.focusClass = n, this.hoverClass = a), this
        },
        setOption: function() {
            e.Widget.prototype._setOption.apply(this, arguments)
        },
        setOptions: function() {
            e.Widget.prototype._setOptions.apply(this, arguments)
        },
        _scrollTo: function(t) {
            var s = this,
                i = s.options.smoothScroll || 0,
                o = s.options.scrollTo,
                n = e('div[data-unique="' + t.attr("data-unique") + '"]');
            return n.length ? (e("html, body").promise().done(function() {
                e("html, body").animate({
                    scrollTop: n.offset().top - (e.isFunction(o) ? o.call() : o) + "px"
                }, {
                    duration: i
                })
            }), s) : s
        }
    })
});


/*!
 * site application js
 * http://herechen.github.io
 * Copyright (c) 2015 陈磊; Licensed MIT
 */! function() {
    "use strict";

    function n(n, o) {
        $(window).bind("scroll", function() {
            $(window).scrollTop() > o ? $(n).addClass("fixed") : $(n).removeClass("fixed")
        })
    }
    function o(o) {
        if ($(o)) {
            var i = $("#toc").tocify({
                selectors: d.heading,
                extendPage: !1,
                hideEffect: "slidUp"
            });
            n(d.postNavClass, 150), i.find("li").length || $(d.postNavClass).hide()
        }
    }
    function i(n, o) {
        function i() {
            document.hidden ? document.title = o : document.title = n
        }("undefined" != typeof document.addEventListener || "undefined" != typeof document.hidden) && document.addEventListener("visibilitychange", i, !1)
    }
    function t(n) {
        var o = window.onload;
        "function" != typeof window.onload ? window.onload = n : window.onload = function() {
            o(), n()
        }
    }
    var d = {
        backtopId: "#back-top",
        heading: "h2,h3,h4,h5",
        tocid: "#toc",
        postNavClass: ".post-nav",
        hiddenTitle: "華人百科",
        visibTitle: document.title
    };
    t(backToTop(d.backtopId)), anchors.options = {
        placement: "right",
        icon: "#"
    }, anchors.add(d.heading), o(d.tocid)//, i(d.visibTitle, d.hiddenTitle) //注释部分禁止不在当前窗口的时候显示hiddenTitle
}();