/* Licensing info */
"use strict";

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
}

window.onload = function() {
    // monitior: 1519 - 723
    // find: ms"><!--  replace: ms _anim-nohide"><!--  
    var e = document.querySelector(".scroll-up"), t = document.querySelector(".scroll-up__svg-path"), n = t.getTotalLength(), r = [ "about", "service", "work", "blog", "contact" ], a = [], l = [ 0 ], i = [], o = 0, s = 0, c = [], d = "about", u = document.querySelector(".header"), m = document.querySelector(".intro"), p = u.offsetHeight;
    p += parseInt(window.getComputedStyle(u).getPropertyValue("margin-top")), p += parseInt(window.getComputedStyle(u).getPropertyValue("margin-bottom"));
    var f = m.offsetHeight;
    f += parseInt(window.getComputedStyle(m).getPropertyValue("margin-top")), f += parseInt(window.getComputedStyle(m).getPropertyValue("margin-bottom")), 
    t.style.strokeDasharray = n.toString() + " " + n.toString(), t.style.transition = "stroke-dashoffset 20ms";
    var g = function() {
        var e = document.documentElement.scrollTop || window.pageYOffset;
        return parseInt(e);
    };
    if (r.length > 0) {
        for (var v = r.length, b = 0; b < v; b++) {
            var h = document.getElementById(r[b]).offsetTop;
            a.push(h), b > 0 && (i.push(h - 21), l.push(h - 20)), 1 === b && (s = h - 21), c.push(r[b]);
        }
        i.push(1e7), c.push(v);
    }
    //console.log("length= "+menuSStart.length+" - "+menuSEnd.length);
    //for (let i = 0; i < menuSStart.length; i++) {
    // console.log("i= "+menuSStart[i]+" - "+menuSEnd[i]+" ? "+menuScrllName[i]);
    //}
    var y = document.querySelector(".header");
    window.addEventListener("scroll", (function() {
        var r, m;
        r = document.documentElement.scrollHeight - window.innerHeight, m = n - g() * n / r, 
        t.style.strokeDashoffset = m;
        var v = g();
        if (v > 600 ? e.classList.add("scroll-up--active") : e.classList.remove("scroll-up--active"), 
        v > f - p ? u.classList.contains("fixed") || (u.classList.add("fixed"), (y = document.querySelector(".header.fixed")).style.transform = "translatey(-100px)") : u.classList.contains("fixed") && ((y = document.querySelector(".header.fixed")).style.transform = "translatey(0)", 
        u.classList.remove("fixed")), v > f) {
            u.classList.contains("in-view") || (u.classList.add("in-view"), y = document.querySelector(".header.in-view"));
            var b = -1 * p + (v - f);
            b > 0 && (b = 0), b <= 0 && (y.style.transform = "translatey(" + b + "px)");
        } else u.classList.contains("in-view") && (y = document.querySelector(".header"), 
        u.classList.remove("in-view"));
        !function(e) {
            if (a.length > 0 && e > a[0]) {
                var t = document.querySelectorAll(".header.fixed .nav__link");
                if (t.length > 1 && (e < o || e > s)) {
                    var n = document.querySelector(".nav__link.active");
                    document.querySelector("[data-cl=" + d + "]"), null !== n && n.classList.contains("active") && n.classList.remove("active");
                    for (var r = 0; r < l.length; r++) if (e >= l[r] && e <= i[r]) {
                        // console.log("i: "+i+" gt="+gt+" = "+menuSStart[i]+" || "+menuSEnd[i]);
                        // console.log("find: "+menuScrllName[i]);
                        o = l[r], s = i[r], d = c[r], Array.prototype.slice.call(t).forEach((function(e) {
                            // console.log(t.dataset.cl);
                            e.dataset.cl === d && (e.classList.contains("active") || e.classList.add("active"));
                        }));
                        break;
                    }
                }
            }
        }(v);
    })), e.addEventListener("click", (function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }));
    document.querySelector(".btn"), document.querySelector(".special");
    var _ = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? "touchstart" : "mousedown", E = document.getElementById("menubartest"), A = document.getElementById("menubarhead");
    function w(e) {
        var t;
        null != (t = document.querySelector("#menubartest")) && (t.classList.contains("menuchange") ? (t.classList.remove("menuchange"), 
        t.classList.add("menubartest")) : (t.classList.remove("menubartest"), t.classList.add("menuchange"))), 
        document.getElementById("menu").classList.toggle("change"), e.cancelable && (e.preventDefault(), 
        e.stopPropagation());
    }
    var L = function(e, t, n) {
        var r = new Date;
        r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3);
        var a = "expires=" + r.toUTCString();
        document.cookie = e + "=" + t + ";" + a + ";path=/";
    };
    A.style.right = "50px";
    var q = document.createElement("DIV");
    q.setAttribute("id", "menu");
    var S = document.createElement("DIV");
    S.style.width = "270px", S.style.height = "100px", S.style.position = "relative", 
    S.overflow = "auto";
    var C = document.createElement("DIV");
    C.setAttribute("id", "bar1"), C.setAttribute("class", "bar");
    var x = document.createElement("DIV");
    x.setAttribute("id", "bar2"), x.setAttribute("class", "bar");
    var z = document.createElement("DIV");
    z.setAttribute("id", "bar3"), z.setAttribute("class", "bar"), q.appendChild(C), 
    q.appendChild(x), q.appendChild(z);
    var k = document.createElement("UL");
    k.setAttribute("id", "navmob"), k.setAttribute("class", "navmob");
    var T = document.createElement("LI");
    T.setAttribute("class", "lii");
    var H = document.createElement("A");
    H.setAttribute("class", "lia"), H.innerHTML = "About", H.setAttribute("href", "#"), 
    H.setAttribute("data-content", "gos"), H.setAttribute("data-cl", "about"), T.appendChild(H), 
    [ _ ].forEach((function(e) {
        H.addEventListener(e, (function(e) {
            w(e);
        }), !1);
    })), k.appendChild(T), (T = document.createElement("LI")).setAttribute("class", "lii"), 
    (H = document.createElement("A")).textContent = "Service", H.setAttribute("class", "lia"), 
    H.setAttribute("href", "#"), H.setAttribute("data-content", "gos"), H.setAttribute("data-cl", "service"), 
    T.appendChild(H), [ _ ].forEach((function(e) {
        H.addEventListener(e, (function(e) {
            w(e);
        }), !1);
    })), k.appendChild(T), (T = document.createElement("LI")).setAttribute("class", "lii"), 
    (H = document.createElement("A")).textContent = "Work", H.setAttribute("class", "lia"), 
    H.setAttribute("href", "#"), H.setAttribute("data-content", "gos"), H.setAttribute("data-cl", "work"), 
    T.appendChild(H), [ _ ].forEach((function(e) {
        H.addEventListener(e, (function(e) {
            w(e);
        }), !1);
    })), k.appendChild(T), (T = document.createElement("LI")).setAttribute("class", "lii"), 
    (H = document.createElement("A")).textContent = "Blog", H.setAttribute("class", "lia"), 
    H.setAttribute("href", "#"), H.setAttribute("data-content", "gos"), H.setAttribute("data-cl", "blog"), 
    T.appendChild(H), [ _ ].forEach((function(e) {
        H.addEventListener(e, (function(e) {
            w(e);
        }), !1);
    })), k.appendChild(T), (T = document.createElement("LI")).setAttribute("class", "lii"), 
    (H = document.createElement("A")).textContent = "Contact", H.setAttribute("class", "lia"), 
    H.setAttribute("href", "#"), H.setAttribute("data-content", "gos"), H.setAttribute("data-cl", "contact"), 
    T.appendChild(H);
    [ "touchstart" ].forEach((function(e) {
        H.addEventListener(e, (function(e) {
            w(e);
        }), !1);
    })), k.appendChild(T), A.appendChild(q), E.appendChild(k), [ "mousedown", "touchstart" ].forEach((function(e) {
        A.addEventListener(e, (function(e) {
            w(e);
        }), !1);
    })), function() {
        if ("undefined" != typeof window && window.addEventListener) {
            var e, t, n, r = Object.create(null), a = function() {
                clearTimeout(t), t = setTimeout(e, 100);
            }, l = function() {}, i = function(e) {
                // In IE 9, cross origin requests can only be sent using XDomainRequest.
                // XDomainRequest would fail if CORS headers are not set.
                // Therefore, XDomainRequest should only be used with cross origin requests.
                function t(e) {
                    var t;
                    return void 0 !== e.protocol ? t = e : (t = document.createElement("a")).href = e, 
                    t.protocol.replace(/:/g, "") + t.host;
                }
                var n, r, a;
                return window.XMLHttpRequest && (n = new XMLHttpRequest, r = t(location), a = t(e), 
                n = void 0 === n.withCredentials && "" !== a && a !== r ? XDomainRequest || void 0 : XMLHttpRequest), 
                n;
            }, o = "http://www.w3.org/1999/xlink";
 // holds xhr objects to prevent multiple requests
                        e = function() {
                var e, t, n, s, c, d, u, m, p, f, g = 0;
                function v() {
                    var e;
                    0 === (
                    // If done with making changes, start watching for chagnes in DOM again
                    g -= 1) && (
                    // if all xhrs were resolved
                    l(), window.addEventListener("resize", a, !1), window.addEventListener("orientationchange", a, !1), 
                    window.MutationObserver ? ((e = new MutationObserver(a)).observe(document.documentElement, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0
                    }), l = function() {
                        try {
                            e.disconnect(), window.removeEventListener("resize", a, !1), window.removeEventListener("orientationchange", a, !1);
                        } catch (e) {}
                    }) : (document.documentElement.addEventListener("DOMSubtreeModified", a, !1), l = function() {
                        document.documentElement.removeEventListener("DOMSubtreeModified", a, !1), window.removeEventListener("resize", a, !1), 
                        window.removeEventListener("orientationchange", a, !1);
                    }));
                }
                function b(e) {
                    return function() {
                        !0 !== r[e.base] && (e.useEl.setAttributeNS(o, "xlink:href", "#" + e.hash), e.useEl.hasAttribute("href") && e.useEl.setAttribute("href", "#" + e.hash));
                    };
                }
                function h(e) {
                    return function() {
                        var t, n = document.body, r = document.createElement("x");
                        e.onload = null, r.innerHTML = e.responseText, (t = r.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), 
                        t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", 
                        n.insertBefore(t, n.firstChild)), v();
                    };
                }
                function y(e) {
                    return function() {
                        e.onerror = null, e.ontimeout = null, v();
                    };
                }
                for (l(), // stop watching for changes to DOM
                // find all use elements
                p = document.getElementsByTagName("use"), c = 0; c < p.length; c += 1) {
                    try {
                        t = p[c].getBoundingClientRect();
                    } catch (e) {
                        // failed to get bounding rectangle of the use element
                        t = !1;
                    }
                    e = (m = (s = p[c].getAttribute("href") || p[c].getAttributeNS(o, "href") || p[c].getAttribute("xlink:href")) && s.split ? s.split("#") : [ "", "" ])[0], 
                    n = m[1], d = t && 0 === t.left && 0 === t.right && 0 === t.top && 0 === t.bottom, 
                    t && 0 === t.width && 0 === t.height && !d ? (p[c].hasAttribute("href") && p[c].setAttributeNS(o, "xlink:href", s), 
                    e.length && (
                    // schedule updating xlink:href
                    !0 !== (f = r[e]) && 
                    // true signifies that prepending the SVG was not required
                    setTimeout(b({
                        useEl: p[c],
                        base: e,
                        hash: n
                    }), 0), void 0 === f && void 0 !== (u = i(e)) && (f = new u, r[e] = f, f.onload = h(f), 
                    f.onerror = y(f), f.ontimeout = y(f), f.open("GET", e), f.send(), g += 1))) : d ? e.length && r[e] && setTimeout(b({
                        useEl: p[c],
                        base: e,
                        hash: n
                    }), 0) : void 0 === r[e] ? 
                    // remember this URL if the use element was not empty and no request was sent
                    r[e] = !0 : r[e].onload && (
                    // if it turns out that prepending the SVG is not necessary,
                    // abort the in-progress xhr.
                    r[e].abort(), delete r[e].onload, r[e] = !0);
                }
                p = "", g += 1, v();
            }, n = function() {
                window.removeEventListener("load", n, !1), // to prevent memory leaks
                t = setTimeout(e, 0);
            }, "complete" !== document.readyState ? 
            // The load event fires when all resources have finished loading, which allows detecting whether SVG use elements are empty.
            window.addEventListener("load", n, !1) : 
            // No need to add a listener if the document is already loaded, initialize immediately.
            n();
        }
    }();
    var M = function(e, t) {
        var n = 0, r = 0, a = 0, l = 1, i = 0, o = 1, s = !0, c = !1, d = 1e3, u = null, m = null, p = 1, f = [ 251, 235, 235, 1 ], g = "", v = .4, b = "", h = 0, y = 0, _ = 576, E = 50, A = "", w = 0, L = !1, q = 0, S = 0, C = [], x = [ 576, 768, 992, 1200, 1400 ], z = !0, k = !0, T = document.querySelector(e), H = T.querySelectorAll(".slider__item"), M = T.querySelectorAll(".slider__scroll"), I = T.querySelector(".slider__wrapper"), P = T.querySelector(".slider__item"), F = T.querySelector(".slider__points"), R = T.querySelector(".slider__control_left"), N = T.querySelector(".slider__control_right"), D = I.clientWidth, W = D / l, U = o * W, B = 0, O = document.documentElement.clientWidth || document.body.clientWidth, j = function() {
            O = document.documentElement.clientWidth || document.body.clientWidth, y = O >= 1400 ? 1400 : O >= 1200 ? 1200 : O >= 992 ? 992 : O >= 768 ? 768 : 576;
        }, G = function() {
            _ = y;
            // if (scrsize.length > 0 && szname != "") {
            var e = document.documentElement.clientWidth || document.body.clientWidth;
            if (S = 0, C.length > 0) for (var t = 0; t < C.length && (C[t][0] != _ && 576 != _ || "break" !== function() {
                h = C[t][3];
                var i = T.querySelector(".slider__container");
                576 == _ && (h = e), i.style.maxWidth = h + "px", l = +C[t][1], o = +C[t][2];
                var c = T.querySelectorAll(".slider__item"), d = Array.prototype.slice.call(c), u = 2 * E;
                L && (u = 0);
                var m = (h - u) / l;
                return d.forEach((function(e) {
                    e.style.minWidth = m + "px";
                })), J(), s ? (n = P.offsetWidth * -H.length, r = a = H.length) : (n = 0, r = a = 0), 
                ee(), s || de("m"), "break";
            }()); t++) ; else if (L && s) n = P.offsetWidth * -H.length, r = a = H.length, ee(); else if (0 != C.length || L) 0 == C.length && L && (J(), 
            s ? (n = P.offsetWidth * -H.length, r = a = H.length) : (n = 0, r = a = 0), ee(), 
            de("p")); else {
                var c = h;
                h > e && (c = e), T.querySelector(".slider__container").style.maxWidth = c + "px";
                var d = T.querySelectorAll(".slider__item"), u = Array.prototype.slice.call(d), m = 2 * E;
                L && (m = 0);
                var p = (c - m) / l;
                u.forEach((function(e) {
                    e.style.minWidth = p + "px";
                })), J(), s ? (n = P.offsetWidth * -H.length, r = a = H.length) : (n = 0, r = a = 0), 
                ee(), s || de("m");
            }
            z && (z = !1, T.querySelector(".slider").style.transform = "translateY(100px)", 
            setTimeout((function() {
                var e = T.querySelector(".slider");
                e.style.opacity = 1, e.style.transform = "translateY(0px)";
            }), 1e3 * v)), i > l && null !== F && oe();
        };
        if (t) {
            for (var Y in t) if ("slidesToScroll" === Y) o = +t[Y]; else if ("slidesToShow" === Y) l = t[Y]; else if ("non-stop" === Y) s = t[Y]; else if ("sz" === Y) C = t[Y]; else if ("szname" === Y) b = t[Y]; else if ("container--max-width" === Y) h = t[Y]; else if ("bgcols" === Y) A = t[Y]; else if ("bgcols-n" === Y) w = t[Y]; else if ("transitionDuration" === Y) I.style.transitionDuration = t[Y], 
            v = t[Y]; else if ("leftright-width" === Y) {
                null != R && (R.style.minWidth = t[Y] + "px"), null != R && (N.style.minWidth = t[Y] + "px");
                var Q = T.querySelector(".slider__btn--l");
                null != Q && (Q.style.left = t[Y] / 2 + "%"), null != (Q = T.querySelector(".slider__btn--r")) && (Q.style.right = t[Y] / 2 + "%"), 
                E = t[Y];
            } else "arrow-color" === Y ? g = t[Y] : "arrow-opacity" === Y ? p = t[Y] : "full-screen" === Y ? L = !0 : "auto-slide" === Y ? c = t[Y] : "auto-time" === Y ? d = t[Y] : "left-to-right" === Y && (k = t[Y]);
            if (L) {
                var V = document.querySelector(".slider__container");
                V.style.display = "block", 0 === (V = T.querySelectorAll(".slider__item.slider__i100tem")).length && (V = T.querySelectorAll(".slider__item"), 
                Array.prototype.slice.call(V).forEach((function(e) {
                    e.classList.add("slider__i100tem");
                })), V = T.querySelectorAll(".slider__item.slider__i100tem"));
                var X = Array.prototype.slice.call(V);
                X.forEach((function(e) {
                    e.style.minWidth = "100%";
                })), null != R && null != N && (null === (V = T.querySelector(".slider__control.slider__control_left.s100c")) && ((V = T.querySelector(".slider__control.slider__control_left")).classList.add("s100c"), 
                (V = T.querySelector(".slider__control.slider__control_right")).classList.add("s100c"), 
                V = T.querySelector(".slider__control.slider__control_left.s100c")), V.style.position = "absolute", 
                V.style.top = "50%", V.style.zIndex = "10", V.style.left = 0, (V = T.querySelector(".slider__control.slider__control_right.s100c")).style.position = "absolute", 
                V.style.top = "50%", V.style.zIndex = "10", V.style.right = 0), 0 === (V = T.querySelectorAll(".slider__content.slider__content-i100mg")).length && (V = T.querySelectorAll(".slider__content"), 
                Array.prototype.slice.call(V).forEach((function(e) {
                    e.classList.add("slider__content-i100mg");
                }))), V = T.querySelectorAll(".slider__content.slider__content-i100mg"), (X = Array.prototype.slice.call(V)).forEach((function(e) {
                    e.style.overflow = "hidden", e.style.display = "flex";
                }));
            } else if (null != R && null != N) {
                var Z = T.querySelector(".slider__control.slider__control_left.s50c");
                null === Z && ((Z = T.querySelector(".slider__control.slider__control_left")).classList.add("s50c"), 
                (Z = T.querySelector(".slider__control.slider__control_right")).classList.add("s50c"), 
                Z = T.querySelector(".slider__control.slider__control_left.s50c")), Z.style.position = "relative", 
                (Z = T.querySelector(".slider__control.slider__control_right.s50c")).style.position = "relative";
            }
            if (document.querySelector(".slider--plan4"), 0 != h) {
                T.querySelector(".slider__container").style.maxWidth = h + 2 * E + "px";
                var $ = T.querySelectorAll(".slider__item"), K = (h - 2 * E) / l;
                Array.prototype.slice.call($).forEach((function(e) {
                    e.style.minWidth = K + "px";
                }));
            }
        }
        var J = function() {
            D = I.clientWidth, U = o * (W = D / l);
        };
        i = H.length;
        var ee = function() {
            I.style.transform = "translate(" + n + "px)";
        };
        if (s) {
            var te = Array.prototype.slice.call(H);
            if (te.forEach((function(e) {
                var t = e.cloneNode(!0);
                I.appendChild(t);
            })), te.forEach((function(e) {
                var t = e.cloneNode(!0);
                I.appendChild(t);
            })), n = P.offsetWidth * -H.length, r = a = H.length, "" != A && 0 != w) {
                var ne = T.querySelectorAll(".slider__item"), re = 0;
                Array.prototype.slice.call(ne).forEach((function(e) {
                    (re += 1) % i === w && (e.style.backgroundColor = A);
                }));
            }
            S = i, q = 2 * i;
        } else {
            if ("" != A && 0 != w) {
                var ae = T.querySelectorAll(".slider__item" + b), le = 0;
                Array.prototype.slice.call(ae).forEach((function(e) {
                    (le += 1) === w && (e.style.backgroundColor = A);
                }));
            }
            q = i;
        }
        var ie = function() {
            var e = 0, t = T.querySelectorAll(".itpoints");
            Array.prototype.slice.call(t).forEach((function(t) {
                e !== S && t.classList.contains("itpoints-activ") && t.classList.remove("itpoints-activ"), 
                e != S || t.classList.contains("itpoints-activ") || t.classList.add("itpoints-activ"), 
                e += 1;
            }));
        }, oe = function() {
            var e = T.querySelectorAll(".itpoints");
            if (e.length > 0) {
                for (var t = 0; t < e.length; t++) Array.prototype.slice.call(e).forEach((function(e) {
                    e.removeEventListener("click", (function(e) {}), !1);
                }));
                for (;F.firstChild; ) F.removeChild(F.lastChild);
            }
            var n = 1, r = i - l;
            //alert(icount % slidesToShow);
            if (0 !== r) for (;n += 1, !((r -= o) <= 0); ) ;
            for (var a = 0; a < n; a++) a == S ? F.insertAdjacentHTML("beforeEnd", '<div class="itpoints itpoints-activ" data-content="scrlip" data-cl="' + a + '"></div>') : F.insertAdjacentHTML("beforeEnd", '<div class="itpoints" data-content="scrlip" data-cl="' + a + '"></div>'), 
            F.addEventListener("click", (function(e) {
                e.preventDefault();
                var t = e.target.dataset.content;
                if (t && "scrlip" === t) {
                    var n = +e.target.dataset.cl - S;
                    alert(n), n > 0 ? 
                    // lefttoright
                    ue(n) : me(n *= -1), S = +e.target.dataset.cl;
                }
            }), !1);
        };
        if (i > 1) {
            if (M.length > 1 && M.length == i) {
                var se = 0;
                s && (M = T.querySelectorAll(".slider__scroll")), Array.prototype.slice.call(M).forEach((function(e) {
                    for (var t = 0; t < i; t++) s ? se == t ? e.insertAdjacentHTML("beforeEnd", '<div class="iscroll iscroll-activ"></div>') : e.insertAdjacentHTML("beforeEnd", '<div class="iscroll" data-content="scrl" data-cl="' + (t + M.length / 3) + '"></div>') : se == t ? e.insertAdjacentHTML("beforeEnd", '<div class="iscroll iscroll-activ"></div>') : e.insertAdjacentHTML("beforeEnd", '<div class="iscroll" data-content="scrl" data-cl="' + t + '"></div>'), 
                    e.addEventListener("click", (function(e) {
                        e.preventDefault();
                        var t = e.target.dataset.content;
                        if (t && "scrl" === t) {
                            var n = +e.target.dataset.cl - S;
                            n > 0 ? ue(n) : me(n *= -1), S = +e.target.dataset.cl;
                        }
                    }));
                    se += 1, s && se >= M.length / 3 && (se = 0);
                }));
            }
            T.addEventListener("touchstart", (function(e) {
                B = e.changedTouches[0].clientX;
            })), T.addEventListener("touchend", (function(e) {
                var t = e.changedTouches[0].clientX - B;
                s ? t > 50 ? me(1) : t < -50 && ue(1) : (t > 50 || t < -50) && (t > 50 ? me(1) : ue(1));
            }));
        }
        var ce = function(e, t, n) {
            "btnNext" === e ? (N.style.background = "rgba(" + f[0] + "," + f[1] + "," + f[2] + "," + t + ")", 
            N.style.cursor = n) : (R.style.background = "rgba(" + f[0] + "," + f[1] + "," + f[2] + "," + p + ")", 
            R.style.cursor = n);
        }, de = function(e) {
            null === N || s || (R.style.opacity = 1, N.style.opacity = 1, ("m" == e && !k || "p" == e && k) && (
            // alert("step == "m" && ! lefttoright")
            ce("btnNext", p, "pointer"), k ? n + W <= 0 ? ce("btnPrev", p, "pointer") : (R.style.opacity = 0, 
            ce("btnPrev", 0, "auto")) : -1 * n + D + W > W * H.length ? (R.style.opacity = 0, 
            ce("btnPrev", 0, "auto")) : ce("btnPrev", p, "pointer")), ("p" == e && !k || "m" == e && k) && (
            // if (step == "p") {
            ce("btnPrev", p, "pointer"), k ? -1 * n + D + W > W * H.length ? (N.style.opacity = 0, 
            ce("btnNext", 0, "auto")) : ce("btnNext", p, "pointer") : n + W <= 0 ? ce("btnNext", p, "pointer") : (N.style.opacity = 0, 
            ce("btnNext", 0, "auto"))), l === H.length && (ce("btnPrev", 0, "auto"), ce("btnNext", 0, "auto"), 
            R.style.opacity = 0, N.style.opacity = 0));
        }, ue = function(e) {
            J();
            var t = o;
            e > 1 && (t = 1);
            for (var c = 0; c < e; c++) if (S += t, s) S >= q && (S = i + (S - i)), r > a ? (r -= H.length, 
            n += W * H.length, I.style.transitionDuration = "0s", ee(), setTimeout((function() {
                I.style.transitionDuration = v + "s", r += t, n += -1 * U, ee();
            }), 10)) : (r += t, n += -1 * U, ee()); else if (-1 * n + W * l < D / l * H.length) if (-1 * n + D + U > W * H.length) {
                // position += movePosition;
                S -= t;
                for (var d = t - 1; -1 * n + D + d * W > W * H.length && !((d -= 1) <= 0); ) ;
                d > 0 && (S += d, r -= d, n -= d * W, ee(), de("m"));
            } else r -= t, n -= U, ee(), de("m");
            i > l && null !== F && ie();
        }, me = function(e) {
            //alert("goPlus");
            J();
            var t = o;
            e > 1 && (t = 1);
            for (var c = 0; c < e; c++) if (S -= t, s) S < i && (S = q - (i - S)), r <= a ? (r += H.length, 
            n -= W * H.length, I.style.transitionDuration = "0s", ee(), setTimeout((function() {
                I.style.transitionDuration = v + "s", r -= t, n -= -1 * U, ee();
            }), 10)) : (r -= t, n -= -1 * U, ee()); else if (n + U <= 0) r += t, n += U, ee(), 
            de("p"); else {
                S += t;
                for (var d = t - 1; n + d * W > 0 && !((d -= 1) <= 0); ) ;
                d > 0 && (S -= d, r += d, n += d * W, ee(), de("p"));
            }
            i > l && null !== F && ie();
        };
        window.addEventListener("resize", (function() {
            if (O = document.documentElement.clientWidth || document.body.clientWidth, C.length > 0 || L) j(), 
            (_ != y || 576 == _ || L) && (G(), s || (de("m"), de("p"))); else if (0 == C.length) {
                if (i > l && null !== F) for (;F.firstChild; ) F.removeChild(F.lastChild);
                G(), s || (de("m"), de("p"));
            }
        })), null !== N && N.addEventListener("click", (function() {
            k ? ue(1) : me(1);
        })), null !== R && R.addEventListener("click", (function() {
            // alert("click")
            // lefttoright
            k ? me(1) : ue(1);
        }));
        var pe = function() {
            m = setInterval((function() {
                me(1);
            }), d);
        };
        if (document.addEventListener("keydown", (function(e) {
            c && "Escape" === e.key && (null != m ? (clearInterval(m), m = null) : pe());
        })), document.addEventListener("touchstart", (function(e) {
            c && function() {
                if (c) if (null === u) u = (new Date).getTime(); else {
                    var e = (new Date).getTime() - u;
                    e < 600 && e > 0 && (null != m ? (clearInterval(m), m = null) : pe()), u = null;
                }
            }();
        })), "" != g && (f = function(e) {
            if ("" !== e) {
                if ("transparent" === e.toLowerCase()) return [ 0, 0, 0, 0 ];
                if ("#" === e[0]) return e.length < 7 && (
                // convert #RGB and #RGBA to #RRGGBB and #RRGGBBAA
                e = "#" + e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + (e.length > 4 ? e[4] + e[4] : "")), 
                [ parseInt(e.substr(1, 2), 16), parseInt(e.substr(3, 2), 16), parseInt(e.substr(5, 2), 16), e.length > 7 ? parseInt(e.substr(7, 2), 16) / 255 : 1 ];
                if (-1 === e.indexOf("rgb")) {
                    // convert named colors
                    var t = document.body.appendChild(document.createElement("fictum")), n = "rgb(1, 2, 3)";
 // intentionally use unknown tag to lower chances of css rule override with !important
                                        if (// this flag tested on chrome 59, ff 53, ie9, ie10, ie11, edge 14
                    t.style.color = n, t.style.color !== n) return;
 // color set failed - some monstrous css rule is probably taking over the color of our object
                                        if (t.style.color = e, t.style.color === n || "" === t.style.color) return;
 // color parse failed
                                        e = getComputedStyle(t).color, document.body.removeChild(t);
                }
                return 0 === e.indexOf("rgb") ? (-1 === e.indexOf("rgba") && (e += ",1"), e.match(/[\.\d]+/g).map((function(e) {
                    return +e;
                }))) : void 0;
            }
        }(g)), null !== N && (N.style.background = "rgba(" + f[0] + "," + f[1] + "," + f[2] + "," + p + ")", 
        R.style.background = "rgba(" + f[0] + "," + f[1] + "," + f[2] + "," + p + ")"), 
        j(), _ = 576, C.length > 0) for (var fe = 0; fe < C.length; fe++) (-1 === x.indexOf(C[fe][0]) || 4 != C[fe].length || C[fe][0] < C[fe][3]) && (-1 === x.indexOf(C[fe][0]) ? alert("no correct setings (" + e + " ? " + C[fe][0] + ") -> sz:[576,768,992,1200,1400]") : 4 != C[fe].length ? alert("no correct setings (" + e + " ? [[" + C[fe] + "]])") : alert("no correct setings (" + e + " ? ) -> sz:[[1,2,3,4]]=>1<4"), 
        C = []);
        return G(), s || (de("m"), de("p")), c && pe(), "";
    }, I = (M("#slider-2", {
        slidesToScroll: 2,
        slidesToShow: 2,
        "non-stop": !1,
        szname: "",
        "container--max-width": 842,
        transitionDuration: .4,
        "leftright-width": 30,
        "arrow-opacity": 0,
        sz: [ [ 576, 1, 1, 576 ], [ 768, 1, 1, 700 ], [ 992, 1, 1, 842 ], [ 1200, 1, 1, 942 ], [ 1400, 1, 1, 1e3 ] ]
    }), M("#slider-3", {
        slidesToScroll: 1,
        slidesToShow: 1,
        "non-stop": !0,
        szname: "",
        "container--max-width": 842,
        transitionDuration: .4,
        "leftright-width": 30,
        "arrow-opacity": 0,
        sz: [ [ 576, 1, 1, 576 ], [ 768, 1, 1, 700 ], [ 992, 1, 1, 842 ], [ 1200, 1, 1, 942 ], [ 1400, 1, 1, 1e3 ] ]
    }), function(e, t) {
        var n = document.querySelector(e), r = (n.querySelector(".accordion-wrapper"), n.querySelectorAll(".accordion__header")), a = (n.querySelectorAll(".accordion__body"), 
        n.querySelectorAll(".accordion__section"));
        if (t) for (var l in t) "slidesToScroll" === l && (slidesToScroll = t[l]);
        var i = Array.prototype.slice.call(r);
        i.forEach((function(e) {
            e.addEventListener("click", (function(t) {
                !function(e) {
                    var t = e.parentNode;
                    if (t.classList.contains("opened")) t.classList.remove("opened"), t.querySelector(".accordion__body").style.maxHeight = "0px", 
                    // parent.querySelector(".accordion__btn-t").style.transform = "rotate(0deg)";
                    t.querySelector(".accordion__set-r").style.transform = "rotate3d(1,0,0,0deg)"; else {
                        Array.prototype.slice.call(a).forEach((function(e) {
                            e.classList.remove("opened"), e.querySelector(".accordion__body").style.maxHeight = "0px", 
                            e.querySelector(".accordion__set-r").style.transform = "rotate3d(1,0,0,0deg)";
                        })), t.classList.add("opened");
                        var n = t.querySelector(".accordion__body > *").clientHeight;
                        t.querySelector(".accordion__body").style.maxHeight = n + "px", t.querySelector(".accordion__set-r").style.transform = "rotate3d(1,0,0,180deg)";
                    }
                }(e);
            }));
        })), (i = Array.prototype.slice.call(a)).forEach((function(e) {
            var t = e.querySelector(".accordion__body");
            t.style.overflow = "hidden", t.style.display = "block", t.style.maxHeight = "0px";
        }));
        var o = n.querySelector(".accordion__section.opened");
        if (null !== o) {
            var s = o.querySelector(".accordion__body > *").clientHeight;
            o.querySelector(".accordion__body").style.maxHeight = s + "px", o.querySelector(".accordion__set-r").style.transform = "rotate3d(1,0,0,180deg)";
        }
        return document.documentElement.clientWidth || document.body.clientWidth, "";
    });
    null !== document.querySelector("#accordeo-1") && I("#accordeo-1");
    var P = function(e, t) {
        var n, r = !1, a = "", l = "", i = "", o = "", s = "", c = "", d = "", u = "", m = "", p = "", f = "", g = "", v = "", b = "Send Form", h = !1, y = "1", _ = "0", E = "Request", A = [], w = !1, q = "90%", S = "90%", C = "5%", x = document.createElement("div"), z = (document.documentElement.clientWidth || document.body.clientWidth, 
        function(e) {
            for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
                for (var a = n[r]; " " == a.charAt(0); ) a = a.substring(1);
                if (0 == a.indexOf(t)) return a.substring(t.length, a.length);
            }
            return "";
        }("lognm"));
        // alert(_logcooki)
        if ("" != z && z.length >= 4 && (w = !0), t) {
            for (var k in t) "tabstittle" === k ? c = t[k] : "tabsloggs" === k ? d = t[k] : "tabseml" === k ? u = t[k] : "galldir" === k ? m = t[k] : "svgdir" === k ? p = t[k] : "gallitems" === k ? A = t[k].split(",") : "thetittle" === k ? f = t[k] : "modalwidth" === k ? q = t[k] : "modalheight" === k ? S = t[k] : "modaltop" === k ? C = t[k] : "calltittle" === k ? g = t[k] : "calltxt" === k ? v = t[k] : "callfrom" === k ? b = t[k] : "calladdIToDb" === k ? h = t[k] : "calltowordpress" === k ? y = t[k] : "callprice" === k ? _ = t[k] : "request" === k && (E = t[k]);
            for (var T in t) if ("tabs" === T || "tabsf" === T || "tabplans0" === T || "tabplans00" === T || "tabplans19" === T || "tabplearnmore" === T || "tabsubscribe" === T) {
                s = T;
                var H = document.createElement("div");
                H.setAttribute("class", "tabm-wrapper_js");
                var M = document.createElement("div");
                M.setAttribute("class", "tabm"), H.appendChild(M);
                var I = document.createElement("div");
                I.setAttribute("class", "tabm-triggers"), M.appendChild(I);
                var P = document.createElement("a");
                P.setAttribute("href", "#tab-1"), P.setAttribute("class", "tabm-triggers__item"), 
                P.innerHTML = w ? "Logout" : "Login";
                var F = document.createElement("a");
                // alert(_logcooki)
                if (F.setAttribute("href", "#tab-2"), F.setAttribute("class", "tabm-triggers__item"), 
                F.innerHTML = "Register", I.appendChild(P), I.appendChild(F), w) {
                    var R = document.createElement("div");
                    R.setAttribute("class", "tabm-content"), M.appendChild(R);
                    var N = document.createElement("div");
                    N.setAttribute("id", "tab-1"), N.setAttribute("class", "tabm-content__item"), R.appendChild(N);
                    var D = document.createElement("div");
                    D.setAttribute("class", "tabm1-form"), N.appendChild(D);
                    var W = document.createElement("form");
                    W.setAttribute("action", "#"), W.setAttribute("name", "myFormLgout"), W.addEventListener("submit", (function(e) {
                        dt(e);
                    })), D.appendChild(W);
                    var U = document.createElement("div");
                    U.setAttribute("class", "tabm-wrapper_form"), W.appendChild(U);
                    var B = document.createElement("div");
                    B.setAttribute("class", "tabm-wrapper_form-button"), U.appendChild(B);
                    var O = document.createElement("button");
                    O.setAttribute("class", "btnm-out"), O.setAttribute("id", "goLgout"), O.setAttribute("disabled", !1), 
                    O.innerHTML = "Logout", B.appendChild(O);
                } else {
                    //alert("_logcooki")
                    var j = document.createElement("div");
                    j.setAttribute("class", "tabm-content"), M.appendChild(j);
                    var G = document.createElement("div");
                    G.setAttribute("id", "tab-1"), G.setAttribute("class", "tabm-content__item"), j.appendChild(G);
                    var Y = document.createElement("div");
                    Y.setAttribute("class", "tabm1-form"), G.appendChild(Y);
                    var Q = document.createElement("form");
                    Q.setAttribute("action", "#"), Q.setAttribute("name", "myFormLg"), Q.addEventListener("submit", (function(e) {
                        ct(e);
                    })), Y.appendChild(Q);
                    var V = document.createElement("div");
                    V.setAttribute("class", "tabm-wrapper_form"), Q.appendChild(V);
                    var X = document.createElement("div");
                    X.setAttribute("class", "tabm-1wrapper"), V.appendChild(X);
                    var Z = document.createElement("div");
                    Z.setAttribute("class", "tabm-wrapper_form-input"), X.appendChild(Z);
                    var $ = document.createElement("input");
                    $.setAttribute("placeholder", "Your Name"), $.type = "text", $.value = "", $.setAttribute("class", "div-inpt"), 
                    $.setAttribute("id", "goUText"), $.addEventListener("input", (function() {
                        pt("l", "u");
                    })), Z.appendChild($);
                    var K = document.createElement("div");
                    K.setAttribute("class", "tabm-wrapper_form-input"), X.appendChild(K);
                    var J = document.createElement("input");
                    J.setAttribute("placeholder", "Your Password"), J.type = "password", J.value = "", 
                    J.setAttribute("class", "div-inpt"), J.setAttribute("id", "goUPass"), J.addEventListener("input", (function() {
                        pt("l", "p");
                    })), K.appendChild(J);
                    var ee = document.createElement("div");
                    ee.setAttribute("class", "tabm-wrapper_form-blogin"), V.appendChild(ee);
                    var te = document.createElement("button");
                    te.setAttribute("class", "btnm-tabm"), te.setAttribute("id", "goLgs"), te.setAttribute("disabled", !0), 
                    te.innerHTML = "Login", ee.appendChild(te);
                    var ne = document.createElement("div");
                    ne.setAttribute("class", "tabm1-div"), G.appendChild(ne);
                    var re = document.createElement("form");
                    re.setAttribute("action", "#"), re.setAttribute("name", "myFormPf"), re.addEventListener("submit", (function(e) {
                        ut(e);
                    })), ne.appendChild(re);
                    var ae = document.createElement("div");
                    ae.setAttribute("class", "tabm-wrapper_form"), re.appendChild(ae);
                    var le = document.createElement("div");
                    le.setAttribute("class", "tabm-wrapper_form-button"), ae.appendChild(le);
                    var ie = document.createElement("button");
                    ie.setAttribute("class", "btnm-sendpsw"), ie.setAttribute("id", "goPfs"), ie.setAttribute("disabled", !0), 
                    ie.innerHTML = "ReSend Password", le.appendChild(ie), le.appendChild(document.createTextNode("   =>>   "));
                    var oe = document.createElement("input");
                    le.appendChild(oe), oe.setAttribute("placeholder", "Your Email"), oe.type = "email", 
                    oe.value = "", oe.setAttribute("class", "div-inpt-resend"), oe.setAttribute("id", "goUPf"), 
                    oe.addEventListener("input", (function() {
                        pt("s", "m");
                    }));
                    var se = document.createElement("div");
                    se.setAttribute("id", "tab-2"), se.setAttribute("class", "tabm-content__item item2");
                    var ce = document.createElement("form");
                    ce.setAttribute("action", "#"), ce.setAttribute("name", "myFormReg"), ce.addEventListener("submit", (function(e) {
                        mt(e);
                    })), se.appendChild(ce);
                    var de = document.createElement("div");
                    de.setAttribute("class", "tabm-wrapper_form"), ce.appendChild(de);
                    var ue = document.createElement("div");
                    ue.setAttribute("class", "tabm0-1wrapper_form"), de.appendChild(ue);
                    var me = document.createElement("div");
                    me.setAttribute("class", "tabm-wrapper_form-input"), ue.appendChild(me);
                    var pe = document.createElement("input");
                    pe.setAttribute("placeholder", "Name (a-z,1-9,A-Z,_ [4-10])"), pe.type = "text", 
                    pe.value = d, pe.setAttribute("class", "div-inpt"), pe.setAttribute("id", "goUReg"), 
                    pe.addEventListener("input", (function() {
                        pt("r", "u");
                    })), me.appendChild(pe);
                    var fe = document.createElement("div");
                    fe.setAttribute("class", "tabm-wrapper_form-input"), ue.appendChild(fe);
                    var ge = document.createElement("input");
                    ge.setAttribute("type", "text"), ge.setAttribute("placeholder", "Your Email"), ge.type = "email", 
                    ge.value = u, ge.setAttribute("class", "div-inpt"), ge.setAttribute("id", "goUEm"), 
                    ge.addEventListener("input", (function() {
                        pt("r", "m");
                    })), fe.appendChild(ge);
                    var ve = document.createElement("div");
                    ve.setAttribute("class", "tabm-wrapper_form-button"), de.appendChild(ve);
                    var be = document.createElement("button");
                    be.setAttribute("class", "btnm-treg"), be.setAttribute("id", "goRegs"), be.setAttribute("disabled", !0), 
                    be.innerHTML = "Register", ve.appendChild(be), j.appendChild(se);
                }
                x.appendChild(H);
            } else if ("gallery" === T || "certyficates" === T || "showimg" === T) {
                s = T;
                var he = document.createElement("div");
                he.setAttribute("class", "tabm-wrapper_js");
                var ye = document.createElement("div");
                "gallery" === T || "certyficates" === T ? ye.setAttribute("id", "slider-4") : ye.setAttribute("id", "slider-5"), 
                he.appendChild(ye);
                var _e = document.createElement("div");
                if (_e.setAttribute("class", "slider__container"), ye.appendChild(_e), "gallery" === T || "certyficates" === T) {
                    var Ee = document.createElement("div");
                    Ee.setAttribute("class", "slider__control slider__control_left"), _e.appendChild(Ee);
                    var Ae = document.createElement("div");
                    Ae.setAttribute("class", "slider__btn--l"), Ee.appendChild(Ae);
                    var we = document.createElementNS("http://www.w3.org/2000/svg", "svg"), Le = document.createElementNS("http://www.w3.org/2000/svg", "use");
                    Le.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", p + "icons.svg#arrow50lft"), 
                    we.setAttribute("class", "slider__btn"), we.setAttribute("href", "#"), we.setAttribute("width", "48px"), 
                    we.setAttribute("height", "48px"), we.appendChild(Le), Ae.appendChild(we);
                }
                var qe = document.createElement("div");
                qe.setAttribute("class", "slider"), _e.appendChild(qe);
                var Se = document.createElement("div");
                Se.setAttribute("class", "slider__wrapper"), qe.appendChild(Se);
                for (var Ce = void 0, xe = void 0, ze = void 0, ke = void 0, Te = void 0, He = void 0, Me = 0; Me < A.length; Me++) {
                    (Ce = document.createElement("div")).setAttribute("class", "slider__item"), Se.appendChild(Ce), 
                    (xe = document.createElement("div")).setAttribute("class", "slider__content"), Ce.appendChild(xe);
                    var Ie = document.createElement("div");
                    Ie.setAttribute("class", "slider__modal"), xe.appendChild(Ie), ze = document.createElement("PICTURE"), 
                    ke = document.createElement("SOURCE"), Te = document.createElement("SOURCE"), He = document.createElement("IMG"), 
                    ke.srcset = m + A[Me] + ".webp", ke.type = "image/webp", Te.srcset = m + A[Me] + ".jpg", 
                    Te.type = "image/jpeg", He.src = m + A[Me] + ".jpg", He.alt = "Alt Text!", He.setAttribute("class", "slider__contentimg"), 
                    //slider__item slider__i100tem
                    ze.appendChild(ke), ze.appendChild(Te), ze.appendChild(He), Ie.appendChild(ze);
                }
                if ("gallery" === T || "certyficates" === T) {
                    var Pe = document.createElement("div");
                    Pe.setAttribute("class", "slider__control slider__control_right"), _e.appendChild(Pe);
                    var Fe = document.createElement("div");
                    Fe.setAttribute("class", "slider__btn--r"), Pe.appendChild(Fe);
                    var Re = document.createElementNS("http://www.w3.org/2000/svg", "svg"), Ne = document.createElementNS("http://www.w3.org/2000/svg", "use");
                    Ne.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", p + "icons.svg#arrow50rght"), 
                    Re.setAttribute("class", "slider__btn"), Re.setAttribute("href", "#"), Re.setAttribute("width", "48px"), 
                    Re.setAttribute("height", "48px"), Re.appendChild(Ne), Fe.appendChild(Re);
                }
                x.appendChild(he);
            } else if ("callback" === T) {
                // alert()
                s = T;
                var De = document.createElement("div");
                De.setAttribute("class", "tabm-wrapper_js");
                var We = document.createElement("div");
                We.setAttribute("class", "m-c"), De.appendChild(We);
                var Ue = document.createElement("div");
                Ue.setAttribute("class", "m-c-tittle"), Ue.innerHTML = g, We.appendChild(Ue);
                var Be = document.createElement("div");
                Be.setAttribute("class", "m-c-txt"), Be.innerHTML = v, We.appendChild(Be);
                var Oe = document.createElement("form");
                Oe.setAttribute("action", "#callback"), Oe.setAttribute("class", "contact-form form-callback"), 
                Oe.setAttribute("name", "myFormCallBa"), Oe.setAttribute("id", "callback"), Oe.addEventListener("submit", (function(e) {
                    st(e);
                })), We.appendChild(Oe);
                var je = document.createElement("div");
                je.setAttribute("class", "m-c-wrapper_form"), Oe.appendChild(je);
                var Ge = document.createElement("div");
                Ge.setAttribute("class", "m-c-input"), je.appendChild(Ge);
                var Ye = document.createElement("div");
                Ye.setAttribute("class", "m-c-name"), Ye.innerHTML = "Ім'я та Прізвище:", Ge.appendChild(Ye);
                var Qe = document.createElement("input");
                Qe.type = "hidden", Qe.name = "m_c_wp-data", Qe.value = y, Ge.appendChild(Qe);
                var Ve = document.createElement("input");
                Ve.type = "hidden", Ve.name = "m_c_price", Ve.value = _, Ge.appendChild(Ve);
                var Xe = document.createElement("input");
                Xe.type = "hidden", Xe.name = "m_c_tittle", Xe.value = g, Ge.appendChild(Xe);
                var Ze = document.createElement("input");
                Ze.type = "hidden", Ze.name = "m_c_admin-data", Ze.value = "Send Form From Top", 
                Ge.appendChild(Ze);
                var $e = document.createElement("input");
                $e.type = "hidden", $e.name = "m_c_memail", $e.value = "null", Ge.appendChild($e);
                var Ke = document.createElement("input");
                Ke.type = "hidden", Ke.name = "m_c_froms", Ke.value = b, Ge.appendChild(Ke);
                var Je = document.createElement("input");
                Je.setAttribute("placeholder", "Ім'я та Прізвище .."), Je.type = "text", Je.name = "m_c_nm_tp", 
                Je.value = "", h && (Je.disabled = !0), Je.setAttribute("class", "m-c-name-input"), 
                Je.setAttribute("id", "goUText"), Je.addEventListener("input", (function() {
                    pt("w", "u");
                })), Ge.appendChild(Je);
                var et = document.createElement("div");
                et.setAttribute("class", "m-c-phone"), et.innerHTML = "Телефон: (+38066...)", Ge.appendChild(et);
                var tt = document.createElement("input");
                tt.setAttribute("placeholder", "380660000000"), tt.type = "text", tt.name = "m_c_ph_tp", 
                tt.value = "+380", h && (tt.disabled = !0), tt.setAttribute("class", "m-c-phone-input"), 
                tt.setAttribute("id", "goUPhon"), tt.addEventListener("input", (function() {
                    pt("w", "t");
                })), Ge.appendChild(tt);
                var nt = document.createElement("div");
                nt.setAttribute("class", "m-c-wrapper-button"), je.appendChild(nt);
                var rt = document.createElement("button");
                rt.setAttribute("class", "m-c-butt m_c_button-small-send"), h && rt.setAttribute("class", "m-c-butt m_c_button-small-send dsplnone"), 
                rt.setAttribute("id", "goBtnCallBa"), // m_c_butt.setAttribute('disabled', true);
                rt.innerHTML = E, rt.disabled = !0, nt.appendChild(rt), x.appendChild(De);
            }
        }
        var at = function(e, t) {
            return new Promise((function(n, r) {
                var a = new XMLHttpRequest;
                a.open(e, t), a.onload = n, a.onerror = r, a.send();
            }));
        }, lt = function() {
            return !(-1 !== navigator.userAgent.indexOf("MSIE") || navigator.appVersion.indexOf("Trident/") > -1 || navigator.appVersion.indexOf("Edge/") > -1);
        }, it = function(e, t, n) {
            e.disabled = "true", e.value = "", e.style.backgroundColor = "#fff", t.disabled = "true", 
            t.style.background = "#fff", t.innerHTML = "Login Error", null != n && (n.style.backgroundColor = "#fff", 
            n.disabled = "true", n.value = "");
            var r = document.querySelectorAll(".tabm-triggers__item");
            Array.prototype.slice.call(r).forEach((function(e) {
                e.onclick = !1, e.style.pointerEvents = "none";
            }));
        };
        window.addEventListener("resize", (function() {
            "gallery" !== s && "certyficates" !== s && "showimg" !== s || ot();
        }));
        var ot = function() {
            var e = parseInt(document.documentElement.clientWidth || document.body.clientWidth), t = document.documentElement.clientHeight || document.body.clientHeight, n = document.querySelectorAll(".slider__contentimg"), r = Array.prototype.slice.call(n), a = document.querySelector(".slider__modal picture img");
            if (null !== a) {
                var l = parseInt(a.naturalWidth), i = parseInt(a.naturalHeight), o = 0 + Math.round(l / i * t - 25), c = document.querySelector("#slider-4");
                e < 550 && "gallery" == s ? c.style.transform = "translateY(50%)" : null !== c && (c.style.transform = "translateY(1%)"), 
                r.forEach((function(n) {
                    if (e >= o) {
                        var r = t / 100 * 90 - 30;
                        n.style.height = r + "px", n.style.width = "auto";
                    } else {
                        var a = e / 100 * 98 - 25;
                        n.style.width = a + "px", n.style.height = "auto";
                    }
                }));
            }
        }, st = function(e) {// alert("contact")
        }, ct = function(e) {
            if (e.preventDefault(), lt()) {
                var t = !0, n = window.location.hostname, r = document.forms.myFormLg.goUText, a = document.forms.myFormLg.goUPass, l = document.forms.myFormLg.goLgs;
                ("" == r.value || r.value.length < 4) && (r.style.background = "#FFA8B5", t = !1), 
                ("" == a.value || a.value.length < 4) && (a.style.background = "#FFA8B5", t = !1), 
                // a = false;
                // alert(h+"|"+l.value+"|"+p.value+"|")
                t ? at("GET", "https://" + n + "/sqtt.php?name=" + r.value + "&psw=" + a.value).then((function(e) {
                    "no info" != e.target.response ? (parseInt(e.target.response), console.log(e.target.response), 
                    L("lognm", r.value, 100), l.style.background = "#a1df9c", l.innerHTML = "Login OK", 
                    it(r, a, l), setTimeout((function() {
                        ft();
                    }), 2e3)) : (it(r, a, l), l.style.background = "#f58677", l.innerHTML = "Login Error");
                }), (function(e) {
                    it(r, a, l);
                })) : (alert(e.target.response), it(r, a, l));
            } else alert("Not for IE");
        }, dt = function(e) {
            L("lognm", "", {
                expires: -1
            }), setTimeout((function() {
                ft();
            }), 20);
        }, ut = function(e) {
            if (e.preventDefault(), lt()) {
                var t = !0, n = window.location.hostname, r = document.forms.myFormPf.goUPf, a = document.forms.myFormPf.goPfs;
                ("" == r.value || r.value.length < 4) && (r.style.background = "#FFA8B5", t = !1), 
                t ? at("GET", "https://" + n + "/sqtt.php?loggs=" + r.value + "&name=getonemail").then((function(e) {
                    "no send" != e.target.response ? (it(r, a), a.style.background = "#a1df9c", a.innerHTML = "Email send") : (it(r, a), 
                    a.style.color = "#fff", a.style.background = "#f58677", a.innerHTML = "Email Error");
                }), (function(e) {
                    it(r, a), a.style.color = "#fff", a.style.background = "#f58677", a.innerHTML = "Email Error";
                })) : (
                // alert(l)
                it(r, a), a.style.color = "#fff", a.style.background = "#f58677", a.innerHTML = "Email Error");
            } else alert("Not for IE");
        }, mt = function(e) {
            if (e.preventDefault(), lt()) {
                var t = !0, n = window.location.hostname, r = document.forms.myFormReg.goUReg, a = document.forms.myFormReg.goUEm, l = document.forms.myFormReg.goRegs;
                ("" == r.value || r.value.length < 4) && (r.style.background = "#FFA8B5", t = !1), 
                ("" == a.value || a.value.length < 4) && (a.style.background = "#FFA8B5", t = !1), 
                t ? at("GET", "https://" + n + "/sqtt.php?un=" + r.value + "&em=" + a.value + "&users=regs").then((function(e) {
                    "username problem" == e.target.response ? (
                    // slavi1@gmail.com
                    it(r, a, l), l.style.background = "#f58677", l.innerHTML = "No Users") : "user exists" == e.target.response ? (l.style.background = "#f58677", 
                    l.innerHTML = "User Exists", it(r, a, l)) : "email problem" == e.target.response ? (it(r, a, l), 
                    l.style.background = "#f58677", l.innerHTML = "No Email") : "email exists" == e.target.response ? (it(r, a, l), 
                    l.style.background = "#f58677", l.innerHTML = "Email Exists") : "add new user problem" == e.target.response ? (it(r, a, l), 
                    l.style.background = "#f58677", l.innerHTML = "No Registration") : "reg ok" == e.target.response ? (it(r, a, l), 
                    l.style.background = "#196430", l.style.color = "#fff", l.innerHTML = "Registration ok. Check email") : (it(r, a, l), 
                    l.style.background = "#f58677", l.innerHTML = "No Registration");
                }), (function(e) {
                    it(r, a, l), l.style.background = "#f58677", l.innerHTML = "Some errors!";
                })) : (it(r, a, l), l.style.background = "#f58677", l.innerHTML = "Some errors??");
            } else alert("Not for IE");
        }, pt = function(e, t) {
            var n = /^[a-zA-Z0-9_]*$/, r = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, s = [ "-o-", "-ms-", "-moz-", "-webkit-" ];
            if ("l" == e) {
                var c = document.forms.myFormLg.goUText.value, d = document.forms.myFormLg.goUPass.value, u = document.forms.myFormLg.goLgs;
                if ("u" == t) {
                    if (n.test(c) && c.length <= 10) {
                        if (a = c, c.length > 3 && n.test(d) && d.length > 3 && d.length <= 10) {
                            u.disabled = !1;
                            for (var m = 0; m < s.length; m++) u.style.background = s[m] + "linear-gradient(90deg,#2b2e4a 0%,#e7e8ec 50%,#2b2e4a 100%)";
                            u.style.backgroundSize = "200%", u.style.backgroundPosition = "100% 0", u.style.transition = "all 0.4s ease-in";
                        } else u.disabled = !0, u.style.background = "#fff", u.style.transition = "all 0.4s ease-out";
                        return !0;
                    }
                    return void 0 === c && (c = ""), document.forms.myFormLg.goUText.value = a, !1;
                }
                if (n.test(d) && d.length <= 10) {
                    if (l = d, d.length > 3 && n.test(c) && c.length > 3 && c.length <= 10) {
                        for (u.disabled = !1, m = 0; m < s.length; m++) u.style.background = s[m] + "linear-gradient(90deg,#2b2e4a 0%,#e7e8ec 50%,#2b2e4a 100%)";
                        u.style.backgroundSize = "200%", u.style.backgroundPosition = "100% 0", u.style.transition = "all 0.4s ease-in";
                    } else u.disabled = !0, u.style.background = "#fff", u.style.transition = "all 0.4s ease-out";
                    return !0;
                }
                return void 0 === d && (d = ""), document.forms.myFormLg.goUPass.value = l, !1;
            }
            if ("s" == e) {
                var p = document.forms.myFormPf.goUPf.value, f = document.forms.myFormPf.goPfs;
                if (r.test(p)) {
                    for (f.disabled = !1, m = 0; m < s.length; m++) f.style.background = s[m] + "linear-gradient(90deg,#2b2e4a 0%,#e7e8ec 50%,#2b2e4a 100%)";
                    f.style.backgroundSize = "200%", f.style.backgroundPosition = "100% 0", f.style.transition = "all 0.4s ease-in";
                } else f.disabled = !0, f.style.background = "#fff", f.style.transition = "all 0.4s ease-out";
                return !0;
            }
            if ("r" == e) {
                var g = document.forms.myFormReg.goUReg.value, v = document.forms.myFormReg.goUEm.value, b = document.forms.myFormReg.goRegs;
                if ("u" == t) {
                    if (n.test(g) && g.length <= 10) {
                        if (i = g, g.length > 3 && r.test(v)) {
                            for (b.disabled = !1, m = 0; m < s.length; m++) b.style.background = s[m] + "linear-gradient(90deg,#2b2e4a 0%,#e7e8ec 50%,#2b2e4a 100%)";
                            b.style.backgroundSize = "200%", b.style.backgroundPosition = "100% 0", b.style.transition = "all 0.4s ease-in";
                        } else b.disabled = !0, b.style.background = "#fff", b.style.transition = "all 0.4s ease-out";
                        return !0;
                    }
                    return void 0 === g && (g = ""), document.forms.myFormReg.goUReg.value = i, !1;
                }
                if (r.test(v)) {
                    if (n.test(g) && g.length > 3 && g.length <= 10) {
                        for (b.disabled = !1, m = 0; m < s.length; m++) b.style.background = s[m] + "linear-gradient(90deg,#2b2e4a 0%,#e7e8ec 50%,#2b2e4a 100%)";
                        b.style.backgroundSize = "200%", b.style.backgroundPosition = "100% 0", b.style.transition = "all 0.4s ease-in";
                    } else b.disabled = !0, b.style.background = "#fff", b.style.transition = "all 0.4s ease-out";
                    return !0;
                }
            } else if ("w" == e) {
                var h = document.forms.myFormCallBa.goUText.value, y = document.forms.myFormCallBa.goUPhon.value, _ = document.forms.myFormCallBa.goBtnCallBa, E = document.querySelector(".m-c-butt");
                return "u" == t ? (h.length > 5 && 13 == y.length ? (
                // .m-c-butt
                // alert("okk")
                E.style.background = "#ecb124", E.disabled = !1, E.style.cursor = "pointer") : (E.style.background = "#acb6be", 
                E.disabled = !0, E.style.cursor = "none"), !0) : !/^[+0-9]*$/.test(y) || y.length > 13 || y.length > 0 && "+" !== y.substring(0, 1) || y.length > 1 && "3" !== y.substring(1, 2) || y.length > 2 && "8" !== y.substring(2, 3) || y.length > 3 && "0" !== y.substring(3, 4) ? (document.forms.myFormCallBa.goUPhon.value = o, 
                !1) : (o = y, h.length > 5 && 13 == y.length ? (_.style.background = "#ecb124", 
                _.disabled = !1, E.style.cursor = "pointer") : (_.style.background = "#acb6be", 
                _.disabled = !0, E.style.cursor = "none"), !0);
            }
        };
        function ft() {
            var e = document.querySelectorAll(".tabm-triggers__item");
            if (e.length > 0) {
                Array.prototype.slice.call(e).forEach((function(e) {
                    e.removeEventListener("click", (function(e) {}));
                }));
                var t = document.querySelector(".tabm-wrapper_js");
                void 0 !== t && t.parentNode.removeChild(t);
            }
            r = !0, n.classList.remove("open"), n.classList.add("hide"), setTimeout((function() {
                r = !1, n.classList.remove("hide"), n.parentNode.removeChild(n), n.removeEventListener("click", vt);
            }), 200);
        }
        n = function(e) {
            var t = document.createElement("div");
            t.setAttribute("id", e), t.setAttribute("class", e);
            var r = document.createElement("div");
            r.setAttribute("class", "modal-overlay"), t.appendChild(r);
            var a = document.createElement("div");
            a.setAttribute("class", "modal-window"), a.style.width = q, a.style.height = S, 
            r.appendChild(a);
            var l = document.createElement("div");
            l.setAttribute("class", "modal-header");
            var i = document.createElement("span");
            i.setAttribute("class", "modal-title"), i.innerHTML = c, i.innerHTML = f;
            var o = document.createElement("span");
            o.setAttribute("class", "modal-close"), o.setAttribute("data-close", "close"), o.innerHTML = "&times;", 
            l.appendChild(i), l.appendChild(o), a.appendChild(l), a.appendChild(x), document.body.appendChild(t);
            var d = document.querySelectorAll(".tabm-triggers__item");
 //alert(tbs.length)
                        d.length > 0 && (Array.prototype.slice.call(d).forEach((function(e) {
                e.addEventListener("click", (function(t) {
                    t.preventDefault();
                    var r = t.target.getAttribute("href").replace("#", ""), a = document.querySelectorAll(".tabm-triggers__item"), l = Array.prototype.slice.call(a);
                    l.forEach((function(e) {
                        e.classList.remove("tabm-triggers__item--active");
                    })), a = document.querySelectorAll(".tabm-content__item"), (l = Array.prototype.slice.call(a)).forEach((function(e) {
                        e.style.display = "none", e.classList.remove("tabm-content__item--active");
                    })), e.classList.add("tabm-triggers__item--active"), document.getElementById(r).classList.add("tabm-content__item--active"), 
                    (a = document.querySelector(".tabm-content__item--active")).style.transform = "translateY(-100px) scale(0.9)", 
                    // tbs.style.transform = "scale(0.9)";
                    a.style.opacity = 0, a.style.display = "block", setTimeout((function() {
                        n.querySelector(".slider"), a.style.opacity = 1, a.style.transform = "translateY(0px) scale(1)";
                    }), 10);
                }));
            })), document.querySelector(".tabm-triggers__item").click());
 //alert(window.screen.width+" | "+window.devicePixelRatio)
                        var u = document.documentElement.clientWidth || document.body.clientWidth, m = document.documentElement.clientHeight || document.body.clientHeight;
            // alert(screen.width+" | "+iw)
            if (u < 1200) {
                var p = document.querySelector(".modal-window");
                null !== p && (u < 450 ? p.style.width = "95%" : u < 600 ? p.style.width = "90%" : u < 740 ? p.style.width = "80%" : u < 900 && (p.style.width = "70%")), 
                null !== (p = document.querySelector(".m-c-name-input")) && (p.style.width = "75%"), 
                null !== (p = document.querySelector(".m-c-phone-input")) && (p.style.width = "75%");
            }
 // alert(ih)
                        if (m < 400) {
                var g = document.querySelector(".modal-window");
                null !== g && (g.style.height = "250px"), null !== (g = document.querySelector(".m-c-tittle")) && (g.style.paddingBottom = "5px"), 
                null !== (g = document.querySelector(".m-c-txt")) && (g.style.paddingBottom = "10px"), 
                null !== (g = document.querySelector(".m-c-name-input")) && (g.style.height = "30px"), 
                null !== (g = document.querySelector(".m-c-phone-input")) && (g.style.height = "30px");
            } else if ("callback" === s) {
                var v = document.querySelector(".m-c");
                null !== v && (v.style.paddingBottom = "44px");
            }
            if (m < 750) {
                var b = document.querySelector(".modal-title");
                null !== b && (b.style.fontSize = "10px");
            }
            if ("gallery" === s || "certyficates" === s || "showimg" === s) {
                var h = document.querySelector(".modal-window");
                null !== h && (h.style.width = "98%", h.style.height = "90%"), ot();
            }
            var y = document.querySelector(".m-c-butt.m_c_button-small-send");
 // alert(iw+" | "+ih)
            /*
        if (mobile) {
          let itemz = document.querySelector('.modal-window');
          itemz.style.width = '90%';
          itemz.style.height = '80%';
        }
        */            return null !== y && y.addEventListener("click", (function(e) {
                e.preventDefault();
                var t = window.location.hostname, n = document.querySelector('[name="m_c_nm_tp"]'), r = document.querySelector('[name="m_c_ph_tp"]'), a = document.querySelector('[name="m_c_price"]'), l = document.querySelector('[name="m_c_tittle"]'), i = (document.querySelector('[name="m_c_memail"]').value, 
                document.querySelector('[name="m_c_admin-data"]').value, document.querySelector('[name="m_c_wp-data"]').value);
                if (n.value.length >= 4 && r.value.length >= 4) if ("1" === i) {
                    var o = "name=" + n.value + "&phone=" + r.value + "&selep=null&froms=top&adata=top&email=null&action=flatupp";
                    getPData("POST", window.wp.ajaxurl, o).then((function(e) {
                        setTimeout((function() {
                            addIToDb = !0, n.value = "", n.disabled = !0, r.value = "", r.disabled = !0;
                            var e = document.querySelectorAll(".m-c-butt.m_c_button-small-send");
                            if (e.length > 0) for (var t = 0; t < e.length; t++) e[t].classList.contains("dsplnone") || e[t].classList.add("dsplnone");
                        }), 100);
                    }), (function(e) {
                        alert("no internet");
                    }));
                } else at("GET", "https://" + t + "/sqtt.php?name=" + n.value + "&phons=" + r.value + "&price=" + a.value + "&tittl=" + l.value).then((function(e) {
                    if ("no info" != e.target.response) {
                        addIToDb = !0, n.value = "", n.disabled = !0, r.value = "", r.disabled = !0;
                        var t = document.querySelectorAll(".m-c-butt.m_c_button-small-send");
                        if (t.length > 0) for (var a = 0; a < t.length; a++) t[a].classList.contains("dsplnone") || t[a].classList.add("dsplnone");
                    } else alert("no internet");
                }), (function(e) {
                    alert("no internet");
                })); else alert("no info");
            })), t;
        }(e);
        var gt = setTimeout((function() {
            if (!r) {
                n.classList.add("open");
                var e = document.querySelector(".vmodal.open .modal-window");
                null !== e && (e.style.transform = "translateY(" + C + ")"), clearTimeout(gt);
            }
        }), 10);
        n.querySelector(".modal-overlay").dataset.close = "close";
        var vt = function(e) {
            e.target.dataset.close && ft();
        };
        if (n.addEventListener("click", vt), w) {
            var bt = document.querySelectorAll(".tabm-triggers__item");
            Array.prototype.slice.call(bt).forEach((function(e) {
                e.onclick = !1, e.style.pointerEvents = "none";
            })), document.getElementById("goLgout").disabled = !1;
        }
        return "";
    };
    document.addEventListener("click", (function(e) {
        var t = e.target.dataset.content;
        if (t && "gos" === t) {
            e.preventDefault();
            var n = c.indexOf(e.target.dataset.cl);
            window.scrollTo({
                top: a[n],
                behavior: "smooth"
            });
        }
        if (!t || "btnred" !== t || "topmodal" !== e.target.dataset.cl && "downmodal" !== e.target.dataset.cl && "tabs" !== e.target.dataset.cl || (e.preventDefault(), 
        "tabs" === e.target.dataset.cl ? modal.open("tabs") : modal.open("Modal item content.")), 
        t && "btnnew" === t && ("tabsf" === e.target.dataset.cl || "tabplans0" === e.target.dataset.cl || "tabplans00" === e.target.dataset.cl || "tabplans19" === e.target.dataset.cl || "tabplearnmore" === e.target.dataset.cl || "tabsubscribe" === e.target.dataset.cl || "callback" === e.target.dataset.cl || "gallery" === e.target.dataset.cl || "certyficates" === e.target.dataset.cl || "showimg" === e.target.dataset.cl || "tabs" === e.target.dataset.cl)) {
            e.preventDefault();
            var r = document.documentElement.clientHeight || document.body.clientHeight, l = document.documentElement.clientWidth || document.body.clientWidth, i = "25%";
            r < 600 ? i = "5%" : r < 700 && (i = "15%");
            var o = "";
            if (void 0 !== e.target.dataset.cltitle && (o = e.target.dataset.cltitle), "tabsf" === e.target.dataset.cl) P("vmodal", {
                tabsf: !0,
                tabstittle: 'Login or Register <span class="modal-title_span">(and Download Here)</span>'
            }); else if ("tabs" === e.target.dataset.cl) P("vmodal", {
                tabs: !0,
                thetittle: o,
                modalwidth: "50%",
                modalheight: "250px",
                modaltop: i,
                tabstittle: 'Login or Register <span class="modal-title_span">(and Find Out More)</span>'
            }); else if ("tabplans0" === e.target.dataset.cl) P("vmodal", {
                tabplans0: !0,
                tabstittle: 'Login or Register <span class="modal-title_span">(and Get Free plan)</span>',
                tabsloggs: document.forms.myFormGSmain.myFormGSname.value,
                tabseml: document.forms.myFormGSmain.myFormGSemail.value
            }); else if ("tabplans00" === e.target.dataset.cl) P("vmodal", {
                tabplans00: !0,
                tabstittle: 'Login or Register <span class="modal-title_span">(and Get Free plan)</span>'
            }); else if ("tabplans19" === e.target.dataset.cl) P("vmodal", {
                tabplans19: !0,
                tabstittle: 'Login or Register <span class="modal-title_span">(and Get $19 PREMIUM plan)</span>'
            }); else if ("tabplearnmore" === e.target.dataset.cl) P("vmodal", {
                tabplearnmore: !0,
                tabstittle: 'Login or Register <span class="modal-title_span">(and Learn more)</span>'
            }); else if ("tabsubscribe" === e.target.dataset.cl) P("vmodal", {
                tabsubscribe: !0,
                tabstittle: 'Login or Register <span class="modal-title_span">(and Subscribe)</span>',
                tabseml: document.forms.myFormGSmain.name.value
            }); else if ("callback" === e.target.dataset.cl) {
                var s = "REQUEST A CALL.", d = "Leave the request and we will contact you within 20 minutes.", u = "1", m = "0", p = "", f = "50%", g = "320px";
                void 0 !== e.target.dataset.cltittle && (s = e.target.dataset.cltittle), void 0 !== e.target.dataset.cltxt && (d = e.target.dataset.cltxt), 
                void 0 !== e.target.dataset.thetittle && (p = e.target.dataset.thetittle), void 0 !== e.target.dataset.clwp && (u = e.target.dataset.clwp, 
                m = e.target.dataset.clprice, f = "95%", g = "320px", "0" === u && (d = "Залиште Ваші контакти і ми зв'яжимось з Вами найближчим часом."), 
                l > 1400 ? f = "40%" : l > 1e3 ? f = "60%" : l > 700 ? f = "80%" : l > 400 && (f = "90%"));
                P("vmodal", {
                    callback: !0,
                    thetittle: p,
                    modalwidth: f,
                    modalheight: g,
                    modaltop: i,
                    calltittle: s,
                    calltxt: d,
                    callfrom: e.target.dataset.clfrom,
                    calladdIToDb: addIToDb,
                    calltowordpress: u,
                    callprice: m,
                    request: e.target.dataset.clbtn
                });
            } else if ("gallery" === e.target.dataset.cl) {
                var v = new Image;
                v.onload = function() {
                    P("vmodal", {
                        gallery: !0,
                        galldir: e.target.dataset.cgdir,
                        svgdir: e.target.dataset.cgsvg,
                        gallitems: e.target.dataset.cgimg,
                        thetittle: "Gallery"
                    }), M("#slider-4", {
                        "non-stop": !0,
                        "leftright-width": 150,
                        "full-screen": "yes"
                    });
                }, v.src = e.target.dataset.cgdir + "gallery0.jpg";
            } else if ("certyficates" === e.target.dataset.cl) {
                var b = new Image;
                b.onload = function() {
                    P("vmodal", {
                        certyficates: !0,
                        galldir: e.target.dataset.cgdir,
                        svgdir: e.target.dataset.cgsvg,
                        gallitems: e.target.dataset.cgimg,
                        thetittle: "Our Certyficates"
                    }), M("#slider-4", {
                        "non-stop": !0,
                        "leftright-width": 150,
                        "full-screen": "yes"
                    });
                }, b.src = e.target.dataset.cgdir + "certificate01.jpg";
            } else if ("showimg" === e.target.dataset.cl) {
                var h = new Image;
                h.onload = function() {
                    P("vmodal", {
                        showimg: !0,
                        galldir: e.target.dataset.cgdir,
                        gallitems: e.target.dataset.climg,
                        thetittle: e.target.dataset.ttlimg
                    }), M("#slider-5", {
                        "non-stop": !1,
                        "leftright-width": 50,
                        "full-screen": "yes"
                    });
                }, h.src = e.target.dataset.cgdir + e.target.dataset.climg + ".jpg";
            }
        }
    }));
    var F = document.querySelectorAll("._anim-items");
 // console.log("animItems.length "+animItems.length)
        if (F.length > 0) {
        var R = function(e) {
            for (var t = 0; t < F.length; t++) {
                var n = F[t], r = n.offsetHeight, a = N(n).top, l = window.innerHeight - r / 4;
                r > window.innerHeight && (l = window.innerHeight - window.innerHeight / 4), pageYOffset > a - l && pageYOffset < a + l ? n.classList.add("_active") : n.classList.contains("_anim-nohide") || n.classList.remove("_active");
            }
        }, N = function(e) {
            var t = e.getBoundingClientRect(), n = window.pageXOffset || document.documentElement.scrollLeft, r = window.pageYOffset || document.documentElement.scrollTop;
            return {
                top: t.top + r,
                left: t.left + n
            };
        };
        window.addEventListener("scroll", R), R();
    }
    !function() {
        function e(e, t) {
            var n;
            for (n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            return e;
        }
        window.QuizzPlugin = function() {
            var t = {
                data: [],
                parentSelector: null
            };
            arguments[0] && "object" === _typeof(arguments[0]) && (this.options = e(t, arguments[0]));
            this.init();
        }, QuizzPlugin.prototype.renderWrapper = function() {
            var e = this.options.parentSelector;
            e.innerHTML = '<div class="quizz"><div class="quizz-questio"></div><div class="quizz-indicator"></div><div class="quizz-results"></div><div class="quizz-controls">    <button class="quizz-btn-next" disabled>Next</button>    <button class="quizz-btn-restart">Start again</button></div></div>', 
            this.options.selector = {
                quizz: e.querySelector(".quizz"),
                questio: e.querySelector(".quizz-questio"),
                indicator: e.querySelector(".quizz-indicator"),
                results: e.querySelector(".quizz-results"),
                btnNext: e.querySelector(".quizz-btn-next"),
                btnRestart: e.querySelector(".quizz-btn-restart")
            };
        }, QuizzPlugin.prototype.renderQuestions = function(e) {
            this.renderIndicator(e + 1), this.options.selector.questio.dataset.curStep = e;
            var t = '<div class="quizz-questio-item">';
            t += '<div class="quizz-questio-item__question">', t += this.options.data[e].question, 
            t += '<ul class="quizz-questio-item__answers">', t += function(t) {
                var n = Array.prototype.slice.call(t), r = "";
                return n.forEach((function(t) {
                    r += '<li><label><input class="quizz-answer_input" type="radio" name="' + e + '" value="' + t.id + '" /> &nbsp;', 
                    r += t.value, r += "</label></li>";
                })), r;
            }(this.options.data[e].answers), t += "</ul></div></div>", this.options.selector.questio.innerHTML = t;
        }, QuizzPlugin.prototype.renderResults = function() {
            var e = "", t = this.options.localResults, n = this.options.data, r = function(e) {
                var r = Array.prototype.slice.call(n[e].answers), a = "";
                return console.log("questioIndex"), console.log(e), console.log(r), r.forEach((function(n) {
                    a += '<li class="' + function(e, n) {
                        var r = "";
                        return e.correct || e.id !== t[n] ? e.correct && (r = "quizz-answer--valid") : r = "quizz-answer--invalid", 
                        r;
                    }(n, e) + '">' + n.value + "</li>";
                })), a;
            };
            Array.prototype.slice.call(n).forEach((function(t, n) {
                e += '<div class="quizz-results-item">', e += '<div class="quizz-results-item__question">', 
                e += t.question, e += '</div><ul class="quizz-results-item__answers">', e += r(n), 
                e += "</ul></div>";
            })), this.options.selector.results.innerHTML = e;
        }, QuizzPlugin.prototype.renderIndicator = function(e) {
            this.options.selector.indicator.innerHTML = e + "/" + this.options.data.length;
        }, QuizzPlugin.prototype.addListeners = function() {
            var e = this.options.selector, t = this.options.localResults, n = this.options.data, r = this;
            this.options.selector.quizz.addEventListener("click", (function(t) {
                if (t.target.classList.contains("quizz-btn-next")) {
                    var a = Number(e.questio.dataset.curStep) + 1;
                    a === n.length ? (e.questio.classList.add("quizz-questio--hidden"), e.indicator.classList.add("quizz-indicator--hidden"), 
                    e.results.classList.add("quizz-results--visible"), e.btnNext.classList.add("quizz-btn-next--hidden"), 
                    e.btnRestart.classList.add("quizz-btn-restart--visible"), r.renderResults()) : r.renderQuestions(a), 
                    e.btnNext.disabled = !0;
                } else t.target.classList.contains("quizz-btn-restart") && (e.results.innerHTML = "", 
                e.questio.classList.remove("quizz-questio--hidden"), e.indicator.classList.remove("quizz-indicator--hidden"), 
                e.results.classList.remove("quizz-results--visible"), e.btnNext.classList.remove("quizz-btn-next--hidden"), 
                e.btnRestart.classList.remove("quizz-btn-restart--visible"), r.renderQuestions(0));
            })), this.options.selector.quizz.addEventListener("change", (function(n) {
                n.target.classList.contains("quizz-answer_input") && (t[n.target.name] = n.target.value, 
                e.btnNext.disabled = !1);
            }));
        }, QuizzPlugin.prototype.init = function() {
            this.options.data.length > 0 && this.options.parentSelector && (this.options.localResults = {}, 
            this.renderWrapper(), this.addListeners(), this.renderQuestions(0));
        };
    }();
};