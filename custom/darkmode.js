! function() {
    "use strict";

    function t(e) {
        return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } :
            function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
        )(e)
    }

    function e(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value" in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o)
        }
    }

    function n(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
    }

    function o(t) {
        return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function r(t, e) {
        return (r = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
                t
        })(t, e)
    }

    function i() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ("function" == typeof Proxy)
            return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
        } catch (t) {
            return !1
        }
    }

    function a(t, e, n) {
        return (a = i() ? Reflect.construct : function(t, e, n) {
            var o = [null];
            o.push.apply(o, e);
            var i = new(Function.bind.apply(t, o));
            return n && r(i, n.prototype),
                i
        }).apply(null, arguments)
    }

    function c(t) {
        var e = "function" == typeof Map ? new Map : void 0;
        return (c = function(t) {
            if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]")))
                return t;
            var n;
            if ("function" != typeof t)
                throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== e) {
                if (e.has(t))
                    return e.get(t);
                e.set(t, i)
            }

            function i() {
                return a(t, arguments, o(this).constructor)
            }
            return i.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: i,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                r(i, t)
        })(t)
    }

    function u(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function l(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? u(t) : e
    }
    var d = function(e) {
            var n = t(e);
            return null != e && ("object" == n || "function" == n)
        },
        f = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        s = "object" == t(f) && f && f.Object === Object && f,
        p = "object" == ("undefined" == typeof self ? "undefined" : t(self)) && self && self.Object === Object && self,
        b = s || p || Function("return this")(),
        h = function() {
            return b.Date.now()
        },
        v = b.Symbol,
        y = Object.prototype,
        m = y.hasOwnProperty,
        g = y.toString,
        x = v ? v.toStringTag : void 0;
    var k = function(t) {
            var e = m.call(t, x),
                n = t[x];
            try {
                t[x] = void 0;
                var o = !0
            } catch (t) {}
            var r = g.call(t);
            return o && (e ? t[x] = n : delete t[x]),
                r
        },
        w = Object.prototype.toString;
    var j = function(t) {
            return w.call(t)
        },
        O = v ? v.toStringTag : void 0;
    var _ = function(t) {
        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : O && O in Object(t) ? k(t) : j(t)
    };
    var S = function(e) {
        return null != e && "object" == t(e)
    };
    var T = function(e) {
            return "symbol" == t(e) || S(e) && "[object Symbol]" == _(e)
        },
        E = /^\s+|\s+$/g,
        C = /^[-+]0x[0-9a-f]+$/i,
        P = /^0b[01]+$/i,
        N = /^0o[0-7]+$/i,
        R = parseInt;
    var M = function(t) {
            if ("number" == typeof t)
                return t;
            if (T(t))
                return NaN;
            if (d(t)) {
                var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = d(e) ? e + "" : e
            }
            if ("string" != typeof t)
                return 0 === t ? t : +t;
            t = t.replace(E, "");
            var n = P.test(t);
            return n || N.test(t) ? R(t.slice(2), n ? 2 : 8) : C.test(t) ? NaN : +t
        },
        $ = Math.max,
        z = Math.min;
    var I = function(t, e, n) {
        var o, r, i, a, c, u, l = 0,
            f = !1,
            s = !1,
            p = !0;
        if ("function" != typeof t)
            throw new TypeError("Expected a function");

        function b(e) {
            var n = o,
                i = r;
            return o = r = void 0,
                l = e,
                a = t.apply(i, n)
        }

        function v(t) {
            return l = t,
                c = setTimeout(m, e),
                f ? b(t) : a
        }

        function y(t) {
            var n = t - u;
            return void 0 === u || n >= e || n < 0 || s && t - l >= i
        }

        function m() {
            var t = h();
            if (y(t))
                return g(t);
            c = setTimeout(m, function(t) {
                var n = e - (t - u);
                return s ? z(n, i - (t - l)) : n
            }(t))
        }

        function g(t) {
            return c = void 0,
                p && o ? b(t) : (o = r = void 0,
                    a)
        }

        function x() {
            var t = h(),
                n = y(t);
            if (o = arguments,
                r = this,
                u = t,
                n) {
                if (void 0 === c)
                    return v(u);
                if (s)
                    return clearTimeout(c),
                        c = setTimeout(m, e),
                        b(u)
            }
            return void 0 === c && (c = setTimeout(m, e)),
                a
        }
        return e = M(e) || 0,
            d(n) && (f = !!n.leading,
                i = (s = "maxWait" in n) ? $(M(n.maxWait) || 0, e) : i,
                p = "trailing" in n ? !!n.trailing : p),
            x.cancel = function() {
                void 0 !== c && clearTimeout(c),
                    l = 0,
                    o = u = r = c = void 0
            },
            x.flush = function() {
                return void 0 === c ? a : g(h())
            },
            x
    };

    function D(t, e, n) {
        var o = document.createElement(t);
        return e.class && o.classList.add(e.class),
            n && n.forEach((function(t) {
                o.appendChild(t)
            })),
            o
    }
    var F = "x4fd98",
        L = "x8bd0e";
    ! function(t, e) {
        void 0 === e && (e = {});
        var n = e.insertAt;
        if (t && "undefined" != typeof document) {
            var o = document.head || document.getElementsByTagName("head")[0],
                r = document.createElement("style");
            r.type = "text/css",
                "top" === n && o.firstChild ? o.insertBefore(r, o.firstChild) : o.appendChild(r),
                r.styleSheet ? r.styleSheet.cssText = t : r.appendChild(document.createTextNode(t))
        }
    }('is-darkmode{cursor:pointer;user-select:none}is-darkmode[data-color-mode=dark] .x4fd98:after{box-shadow:inset 0 0 0 3px var(--inside-accent-color-04);background-color:var(--inside-accent-color-04)}is-darkmode[data-color-mode=dark] .x8bd0e{background-color:var(--inside-accent-color);transform:translateX(18px)}is-darkmode:not([block]){display:inline-block}is-darkmode[block]{display:block;margin:auto;width:fit-content}.x4fd98{position:relative;display:inline-block;vertical-align:middle;width:42px;height:24px;border:3px solid transparent;box-sizing:content-box;z-index:1}.x4fd98:after{position:absolute;z-index:-1;content:"";left:0;right:0;top:0;bottom:0;border-radius:24px;box-shadow:inset 0 0 0 3px #d1d5da}.x8bd0e{position:absolute;top:-2px;left:-2px;width:28px;height:28px;border-radius:50%;background-color:#2f363d;transition:transform .3s cubic-bezier(.4,.03,0,1)}.x8bd0e:before{content:"";position:absolute;top:8px;left:8px;width:12px;height:12px;background-color:#ffdf5d;border-radius:50%}.x8bd0e:after{content:"";position:absolute;top:6px;left:6px;width:10px;height:10px;background-color:inherit;border-radius:50%}');
    var A = "__theme_inside_darkmode__",
        B = {
            default: {
                foreground_color: "#363636",
                border_color: "#e0e0e0",
                background: "#f3f6f7",
                sidebar_background: "#6699CC linear-gradient(to bottom,#66CCCC 0%,#6699CC 100%)",
                card_background: "#fff",
                highlight: ['#263238', '#2c393f', '#37474f', '#707880', '#c9ccd3', '#cdd3de', '#d5dbe5', '#ffffff', '#ec5f67', '#ea9560', '#ffcc00', '#8bd649', '#80cbc4', '#89ddff', '#82aaff', '#ec5f67'],
                color: ["#607d8b", "#f3f6f7"]
            },
            dark: {
                foreground_color: "#d8d8d8",
                border_color: "#444",
                background: "#202020",
                sidebar_background: "#262626",
                card_background: "#252525",
                highlight: ["#252525", "#444", "#939393", "#585858", "#b8b8b8", "#d8d8d8", "#e8e8e8", "#f8f8f8", "#ab4642", "#dc9656", "#f7ca88", "#a1b56c", "#b8b8b8", "#7cafc2", "#ba8baf", "#a16946"],
                color: ["#262626", "#202020"]
            }
        };
    customElements.define("is-darkmode", function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && r(t, e)
        }(b, t);
        var a, c, d, f, s, p = (a = b,
            c = i(),
            function() {
                var t, e = o(a);
                if (c) {
                    var n = o(this).constructor;
                    t = Reflect.construct(e, arguments, n)
                } else
                    t = e.apply(this, arguments);
                return l(this, t)
            }
        );

        function b() {
            var t;
            return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, b),
                n(u(t = p.call(this)), "dark", !!localStorage.getItem(A)),
                n(u(t), "$el", D("span", {
                    class: F
                }, [D("span", {
                    class: L
                })])),
                t.addEventListener("click", I((function() {
                    t.toggle()
                }), 100)),
                t
        }
        return d = b,
            (f = [{
                key: "toggle",
                value: function(t) {
                    t || (this.dark = !this.dark,
                            document.dispatchEvent(new CustomEvent("inside", {
                                detail: {
                                    type: "theme",
                                    data: B[this.dark ? "dark" : "default"]
                                }
                            }))),
                        this.dark ? (this.dataset.colorMode = "dark",
                            this.title = "dark mode",
                            localStorage.setItem(A, String(+this.dark))) : (this.removeAttribute("data-color-mode"),
                            this.title = "light mode",
                            localStorage.removeItem(A))
                }
            }, {
                key: "connectedCallback",
                value: function() {
                    this.toggle(!0),
                        this.appendChild(this.$el),
                        window.dispatchEvent(new Event("resize"))
                }
            }]) && e(d.prototype, f),
            s && e(d, s),
            b
    }(c(HTMLElement)))
}();