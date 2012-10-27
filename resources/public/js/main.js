function e(a) {
  throw a;
}
var g = void 0, j = !0, l = null, o = !1;
function aa() {
  return function(a) {
    return a
  }
}
function ba() {
  return function() {
  }
}
function ca(a) {
  return function(b) {
    this[a] = b
  }
}
function q(a) {
  return function() {
    return this[a]
  }
}
function s(a) {
  return function() {
    return a
  }
}
var t, u = this;
function da(a, b) {
  var c = a.split("."), d = u;
  !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
  for(var f;c.length && (f = c.shift());) {
    !c.length && fa(b) ? d[f] = b : d = d[f] ? d[f] : d[f] = {}
  }
}
function ga(a) {
  for(var a = a.split("."), b = u, c;c = a.shift();) {
    if(b[c] != l) {
      b = b[c]
    }else {
      return l
    }
  }
  return b
}
function ha() {
}
function ia(a) {
  a.ca = function() {
    return a.Dk || (a.Dk = new a)
  }
}
function w(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
function fa(a) {
  return a !== g
}
function ja(a) {
  return"array" == w(a)
}
function ka(a) {
  var b = w(a);
  return"array" == b || "object" == b && "number" == typeof a.length
}
function y(a) {
  return"string" == typeof a
}
function la(a) {
  return"number" == typeof a
}
function ma(a) {
  return"function" == w(a)
}
function oa(a) {
  a = w(a);
  return"object" == a || "array" == a || "function" == a
}
function pa(a) {
  return a[qa] || (a[qa] = ++ra)
}
var qa = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), ra = 0;
function sa(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function ta(a, b, c) {
  var d = b || u;
  if(2 < arguments.length) {
    var f = Array.prototype.slice.call(arguments, 2);
    return function() {
      var b = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(b, f);
      return a.apply(d, b)
    }
  }
  return function() {
    return a.apply(d, arguments)
  }
}
function ua(a, b, c) {
  ua = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? sa : ta;
  return ua.apply(l, arguments)
}
function va(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b)
  }
}
var wa = Date.now || function() {
  return+new Date
};
function z(a, b) {
  var c = b || {}, d;
  for(d in c) {
    var f = ("" + c[d]).replace(/\$/g, "$$$$"), a = a.replace(RegExp("\\{\\$" + d + "\\}", "gi"), f)
  }
  return a
}
function A(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.c = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function xa(a) {
  this.stack = Error().stack || "";
  if(a) {
    this.message = "" + a
  }
}
A(xa, Error);
xa.prototype.name = "CustomError";
function ya(a, b) {
  var c = a.length - b.length;
  return 0 <= c && a.indexOf(b, c) == c
}
function za(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = ("" + arguments[c]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
}
function Aa(a) {
  return!/[^\t\n\r ]/.test(a)
}
function Ba(a) {
  return a.replace(/(\r\n|\r|\n)+/g, " ")
}
function Ca(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
function Da(a) {
  return a.replace(/^[\s\xa0]+/, "")
}
function Ea(a) {
  if(!Fa.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(Ga, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(Ha, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(Ia, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Ja, "&quot;"));
  return a
}
var Ga = /&/g, Ha = /</g, Ia = />/g, Ja = /\"/g, Fa = /[&<>\"]/;
function Ka(a) {
  var b;
  if(b) {
    48 < b && (b = 48), a = a.substring(0, 48 - b) + "..." + a.substring(a.length - b)
  }else {
    if(48 < a.length) {
      b = Math.floor(24);
      var c = a.length - b, a = a.substring(0, b + 0) + "..." + a.substring(c)
    }
  }
  return a
}
var La = {"\x00":"\\0", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\u000b":"\\x0B", '"':'\\"', "\\":"\\\\"}, Ma = {"'":"\\'"};
function Na(a) {
  var m;
  a = "" + a;
  if(a.quote) {
    return a.quote()
  }
  for(var b = ['"'], c = 0;c < a.length;c++) {
    var d = a.charAt(c), f = d.charCodeAt(0), h = b, i = c + 1, k;
    if(!(k = La[d])) {
      if(!(31 < f && 127 > f)) {
        if(d in Ma) {
          d = Ma[d]
        }else {
          if(d in La) {
            m = Ma[d] = La[d], d = m
          }else {
            f = d;
            k = d.charCodeAt(0);
            if(31 < k && 127 > k) {
              f = d
            }else {
              if(256 > k) {
                if(f = "\\x", 16 > k || 256 < k) {
                  f += "0"
                }
              }else {
                f = "\\u", 4096 > k && (f += "0")
              }
              f += k.toString(16).toUpperCase()
            }
            d = Ma[d] = f
          }
        }
      }
      k = d
    }
    h[i] = k
  }
  b.push('"');
  return b.join("")
}
function Oa(a, b) {
  for(var c = 0, d = Ca("" + a).split("."), f = Ca("" + b).split("."), h = Math.max(d.length, f.length), i = 0;0 == c && i < h;i++) {
    var k = d[i] || "", m = f[i] || "", n = RegExp("(\\d*)(\\D*)", "g"), p = RegExp("(\\d*)(\\D*)", "g");
    do {
      var r = n.exec(k) || ["", "", ""], x = p.exec(m) || ["", "", ""];
      if(0 == r[0].length && 0 == x[0].length) {
        break
      }
      c = ((0 == r[1].length ? 0 : parseInt(r[1], 10)) < (0 == x[1].length ? 0 : parseInt(x[1], 10)) ? -1 : (0 == r[1].length ? 0 : parseInt(r[1], 10)) > (0 == x[1].length ? 0 : parseInt(x[1], 10)) ? 1 : 0) || ((0 == r[2].length) < (0 == x[2].length) ? -1 : (0 == r[2].length) > (0 == x[2].length) ? 1 : 0) || (r[2] < x[2] ? -1 : r[2] > x[2] ? 1 : 0)
    }while(0 == c)
  }
  return c
}
function Pa(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296
  }
  return b
}
var Ra = 2147483648 * Math.random() | 0;
function Sa() {
  return"goog_" + Ra++
}
var Ta = {};
function Ua(a) {
  return Ta[a] || (Ta[a] = ("" + a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  }))
}
;function Va(a, b) {
  b.unshift(a);
  xa.call(this, za.apply(l, b));
  b.shift();
  this.tm = a
}
A(Va, xa);
Va.prototype.name = "AssertionError";
function Wa(a, b) {
  e(new Va("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;function Xa(a) {
  return a[a.length - 1]
}
var Ya = Array.prototype, Za = Ya.indexOf ? function(a, b, c) {
  return Ya.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == l ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(y(a)) {
    return!y(b) || 1 != b.length ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, $a = Ya.lastIndexOf ? function(a, b, c) {
  return Ya.lastIndexOf.call(a, b, c == l ? a.length - 1 : c)
} : function(a, b, c) {
  c = c == l ? a.length - 1 : c;
  0 > c && (c = Math.max(0, a.length + c));
  if(y(a)) {
    return!y(b) || 1 != b.length ? -1 : a.lastIndexOf(b, c)
  }
  for(;0 <= c;c--) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, ab = Ya.forEach ? function(a, b, c) {
  Ya.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = y(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in f && b.call(c, f[h], h, a)
  }
}, bb = Ya.filter ? function(a, b, c) {
  return Ya.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = [], h = 0, i = y(a) ? a.split("") : a, k = 0;k < d;k++) {
    if(k in i) {
      var m = i[k];
      b.call(c, m, k, a) && (f[h++] = m)
    }
  }
  return f
}, cb = Ya.map ? function(a, b, c) {
  return Ya.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = Array(d), h = y(a) ? a.split("") : a, i = 0;i < d;i++) {
    i in h && (f[i] = b.call(c, h[i], i, a))
  }
  return f
}, db = Ya.some ? function(a, b, c) {
  return Ya.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = y(a) ? a.split("") : a, h = 0;h < d;h++) {
    if(h in f && b.call(c, f[h], h, a)) {
      return j
    }
  }
  return o
}, eb = Ya.every ? function(a, b, c) {
  return Ya.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = y(a) ? a.split("") : a, h = 0;h < d;h++) {
    if(h in f && !b.call(c, f[h], h, a)) {
      return o
    }
  }
  return j
};
function fb(a, b) {
  var c;
  a: {
    c = a.length;
    for(var d = y(a) ? a.split("") : a, f = 0;f < c;f++) {
      if(f in d && b.call(g, d[f], f, a)) {
        c = f;
        break a
      }
    }
    c = -1
  }
  return 0 > c ? l : y(a) ? a.charAt(c) : a[c]
}
function hb(a, b) {
  return 0 <= Za(a, b)
}
function ib(a, b) {
  var c = Za(a, b);
  0 <= c && Ya.splice.call(a, c, 1)
}
function jb(a) {
  return Ya.concat.apply(Ya, arguments)
}
function kb(a) {
  if(ja(a)) {
    return jb(a)
  }
  for(var b = [], c = 0, d = a.length;c < d;c++) {
    b[c] = a[c]
  }
  return b
}
function lb(a) {
  return ja(a) ? jb(a) : kb(a)
}
function mb(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = arguments[c], f;
    if(ja(d) || (f = ka(d)) && d.hasOwnProperty("callee")) {
      a.push.apply(a, d)
    }else {
      if(f) {
        for(var h = a.length, i = d.length, k = 0;k < i;k++) {
          a[h + k] = d[k]
        }
      }else {
        a.push(d)
      }
    }
  }
}
function nb(a, b, c, d) {
  Ya.splice.apply(a, ob(arguments, 1))
}
function ob(a, b, c) {
  return 2 >= arguments.length ? Ya.slice.call(a, b) : Ya.slice.call(a, b, c)
}
function pb(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;var qb, rb, sb, tb, ub, vb, wb;
function xb() {
  return u.navigator ? u.navigator.userAgent : l
}
function yb() {
  return u.navigator
}
ub = tb = sb = rb = qb = o;
var zb;
if(zb = xb()) {
  var Ab = yb();
  qb = 0 == zb.indexOf("Opera");
  rb = !qb && -1 != zb.indexOf("MSIE");
  tb = (sb = !qb && -1 != zb.indexOf("WebKit")) && -1 != zb.indexOf("Mobile");
  ub = !qb && !sb && "Gecko" == Ab.product
}
var B = qb, C = rb, D = ub, E = sb, Bb = tb, Cb, Db = yb();
Cb = Db && Db.platform || "";
vb = -1 != Cb.indexOf("Mac");
wb = -1 != Cb.indexOf("Win");
var Eb = !!yb() && -1 != (yb().appVersion || "").indexOf("X11"), Fb;
a: {
  var Gb = "", Hb;
  if(B && u.opera) {
    var Ib = u.opera.version, Gb = "function" == typeof Ib ? Ib() : Ib
  }else {
    if(D ? Hb = /rv\:([^\);]+)(\)|;)/ : C ? Hb = /MSIE\s+([^\);]+)(\)|;)/ : E && (Hb = /WebKit\/(\S+)/), Hb) {
      var Jb = Hb.exec(xb()), Gb = Jb ? Jb[1] : ""
    }
  }
  if(C) {
    var Kb, Lb = u.document;
    Kb = Lb ? Lb.documentMode : g;
    if(Kb > parseFloat(Gb)) {
      Fb = "" + Kb;
      break a
    }
  }
  Fb = Gb
}
var Mb = {};
function G(a) {
  return Mb[a] || (Mb[a] = 0 <= Oa(Fb, a))
}
;var Nb, Ob = !C || G("9");
!D && !C || C && G("9") || D && G("1.9.1");
var Pb = C && !G("9");
function Qb(a) {
  return(a = a.className) && "function" == typeof a.split ? a.split(/\s+/) : []
}
function Rb(a, b) {
  var c = Qb(a), d = ob(arguments, 1), f;
  f = c;
  for(var h = 0, i = 0;i < d.length;i++) {
    hb(f, d[i]) || (f.push(d[i]), h++)
  }
  f = h == d.length;
  a.className = c.join(" ");
  return f
}
function Sb(a, b) {
  var c = Qb(a), d = ob(arguments, 1), f;
  f = c;
  for(var h = 0, i = 0;i < f.length;i++) {
    hb(d, f[i]) && (nb(f, i--, 1), h++)
  }
  f = h == d.length;
  a.className = c.join(" ");
  return f
}
function Tb(a, b, c) {
  c ? Rb(a, b) : Sb(a, b)
}
;function Ub(a, b) {
  this.x = fa(a) ? a : 0;
  this.y = fa(b) ? b : 0
}
Ub.prototype.Ra = function() {
  return new Ub(this.x, this.y)
};
Ub.prototype.toString = function() {
  return"(" + this.x + ", " + this.y + ")"
};
function Vb(a, b) {
  return new Ub(a.x - b.x, a.y - b.y)
}
;function Wb(a, b) {
  this.width = a;
  this.height = b
}
function Xb(a, b) {
  return a == b ? j : !a || !b ? o : a.width == b.width && a.height == b.height
}
t = Wb.prototype;
t.Ra = function() {
  return new Wb(this.width, this.height)
};
t.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
t.vi = function() {
  return!(this.width * this.height)
};
t.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
};
t.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
t.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
function Yb(a, b) {
  for(var c in a) {
    b.call(g, a[c], c, a)
  }
}
function Zb(a, b) {
  for(var c in a) {
    if(b.call(g, a[c], c, a)) {
      return j
    }
  }
  return o
}
function $b(a) {
  var b = 0, c;
  for(c in a) {
    b++
  }
  return b
}
function ac(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function bc(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
function cc(a, b) {
  b in a && delete a[b]
}
function dc(a, b, c) {
  b in a && e(Error('The object already contains the key "' + b + '"'));
  a[b] = c
}
function ec(a) {
  var b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  return b
}
function fc(a) {
  var b = {}, c;
  for(c in a) {
    b[a[c]] = c
  }
  return b
}
var gc = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
function hc(a, b) {
  for(var c, d, f = 1;f < arguments.length;f++) {
    d = arguments[f];
    for(c in d) {
      a[c] = d[c]
    }
    for(var h = 0;h < gc.length;h++) {
      c = gc[h], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
function ic(a) {
  var b = arguments.length;
  if(1 == b && ja(arguments[0])) {
    return ic.apply(l, arguments[0])
  }
  b % 2 && e(Error("Uneven number of arguments"));
  for(var c = {}, d = 0;d < b;d += 2) {
    c[arguments[d]] = arguments[d + 1]
  }
  return c
}
function jc(a) {
  var b = arguments.length;
  if(1 == b && ja(arguments[0])) {
    return jc.apply(l, arguments[0])
  }
  for(var c = {}, d = 0;d < b;d++) {
    c[arguments[d]] = j
  }
  return c
}
;function H(a) {
  return a ? new kc(I(a)) : Nb || (Nb = new kc)
}
function lc(a) {
  return y(a) ? document.getElementById(a) : a
}
function mc(a, b, c, d) {
  a = d || a;
  b = b && "*" != b ? b.toUpperCase() : "";
  if(a.querySelectorAll && a.querySelector && (!E || nc(document) || G("528")) && (b || c)) {
    return a.querySelectorAll(b + (c ? "." + c : ""))
  }
  if(c && a.getElementsByClassName) {
    a = a.getElementsByClassName(c);
    if(b) {
      for(var d = {}, f = 0, h = 0, i;i = a[h];h++) {
        b == i.nodeName && (d[f++] = i)
      }
      d.length = f;
      return d
    }
    return a
  }
  a = a.getElementsByTagName(b || "*");
  if(c) {
    d = {};
    for(h = f = 0;i = a[h];h++) {
      b = i.className, "function" == typeof b.split && hb(b.split(/\s+/), c) && (d[f++] = i)
    }
    d.length = f;
    return d
  }
  return a
}
function oc(a, b) {
  Yb(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in pc ? a.setAttribute(pc[d], b) : a[d] = b
  })
}
var pc = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function qc(a) {
  var a = a || window, b = a.document;
  if(E && !G("500") && !Bb) {
    "undefined" == typeof a.innerHeight && (a = window);
    var b = a.innerHeight, c = a.document.documentElement.scrollHeight;
    a == a.top && c < b && (b -= 15);
    a = new Wb(a.innerWidth, b)
  }else {
    a = nc(b) ? b.documentElement : b.body, a = new Wb(a.clientWidth, a.clientHeight)
  }
  return a
}
function rc(a) {
  return a ? a.parentWindow || a.defaultView : window
}
function sc(a, b, c, d) {
  function f(c) {
    c && b.appendChild(y(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var h = c[d];
    ka(h) && !(oa(h) && 0 < h.nodeType) ? ab(tc(h) ? kb(h) : h, f) : f(h)
  }
}
function nc(a) {
  return"CSS1Compat" == a.compatMode
}
function uc(a, b) {
  sc(I(a), a, arguments, 1)
}
function vc(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
}
function wc(a, b) {
  b.parentNode && b.parentNode.insertBefore(a, b)
}
function xc(a, b) {
  b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
}
function J(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : l
}
function yc(a, b) {
  var c = b.parentNode;
  c && c.replaceChild(a, b)
}
function zc(a) {
  var b, c = a.parentNode;
  if(c && 11 != c.nodeType) {
    if(a.removeNode) {
      return a.removeNode(o)
    }
    for(;b = a.firstChild;) {
      c.insertBefore(b, a)
    }
    return J(a)
  }
}
function Ac(a, b) {
  for(;a && 1 != a.nodeType;) {
    a = b ? a.nextSibling : a.previousSibling
  }
  return a
}
function Bc(a, b) {
  if(a.contains && 1 == b.nodeType) {
    return a == b || a.contains(b)
  }
  if("undefined" != typeof a.compareDocumentPosition) {
    return a == b || Boolean(a.compareDocumentPosition(b) & 16)
  }
  for(;b && a != b;) {
    b = b.parentNode
  }
  return b == a
}
function Cc(a, b) {
  if(a == b) {
    return 0
  }
  if(a.compareDocumentPosition) {
    return a.compareDocumentPosition(b) & 2 ? 1 : -1
  }
  if("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
    var c = 1 == a.nodeType, d = 1 == b.nodeType;
    if(c && d) {
      return a.sourceIndex - b.sourceIndex
    }
    var f = a.parentNode, h = b.parentNode;
    return f == h ? Dc(a, b) : !c && Bc(f, b) ? -1 * Ec(a, b) : !d && Bc(h, a) ? Ec(b, a) : (c ? a.sourceIndex : f.sourceIndex) - (d ? b.sourceIndex : h.sourceIndex)
  }
  d = I(a);
  c = d.createRange();
  c.selectNode(a);
  c.collapse(j);
  d = d.createRange();
  d.selectNode(b);
  d.collapse(j);
  return c.compareBoundaryPoints(u.Range.START_TO_END, d)
}
function Ec(a, b) {
  var c = a.parentNode;
  if(c == b) {
    return-1
  }
  for(var d = b;d.parentNode != c;) {
    d = d.parentNode
  }
  return Dc(d, a)
}
function Dc(a, b) {
  for(var c = b;c = c.previousSibling;) {
    if(c == a) {
      return-1
    }
  }
  return 1
}
function Fc(a) {
  var b, c = arguments.length;
  if(c) {
    if(1 == c) {
      return arguments[0]
    }
  }else {
    return l
  }
  var d = [], f = Infinity;
  for(b = 0;b < c;b++) {
    for(var h = [], i = arguments[b];i;) {
      h.unshift(i), i = i.parentNode
    }
    d.push(h);
    f = Math.min(f, h.length)
  }
  h = l;
  for(b = 0;b < f;b++) {
    for(var i = d[0][b], k = 1;k < c;k++) {
      if(i != d[k][b]) {
        return h
      }
    }
    h = i
  }
  return h
}
function I(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function Gc(a) {
  return E ? a.document || a.contentWindow.document : a.contentDocument || a.contentWindow.document
}
function Hc(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && 3 == a.firstChild.nodeType) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      vc(a), a.appendChild(I(a).createTextNode(b))
    }
  }
}
var Ic = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Jc = {IMG:" ", BR:"\n"};
function Kc(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, la(a) && 0 <= a) : o
}
function Lc(a) {
  if(Pb && "innerText" in a) {
    a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
  }else {
    var b = [];
    Mc(a, b, j);
    a = b.join("")
  }
  a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  a = a.replace(/\u200B/g, "");
  C || (a = a.replace(/ +/g, " "));
  " " != a && (a = a.replace(/^\s*/, ""));
  return a
}
function Nc(a) {
  var b = [];
  Mc(a, b, o);
  return b.join("")
}
function Mc(a, b, c) {
  if(!(a.nodeName in Ic)) {
    if(3 == a.nodeType) {
      c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in Jc) {
        b.push(Jc[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          Mc(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function tc(a) {
  if(a && "number" == typeof a.length) {
    if(oa(a)) {
      return"function" == typeof a.item || "string" == typeof a.item
    }
    if(ma(a)) {
      return"function" == typeof a.item
    }
  }
  return o
}
function Oc(a, b) {
  var c = b ? b.toUpperCase() : l;
  return Pc(a, function(a) {
    return(!c || a.nodeName == c) && j
  }, j)
}
function Pc(a, b, c) {
  if(!c) {
    a = a.parentNode
  }
  for(c = 0;a;) {
    if(b(a)) {
      return a
    }
    a = a.parentNode;
    c++
  }
  return l
}
function kc(a) {
  this.la = a || u.document || document
}
t = kc.prototype;
t.R = H;
t.ba = q("la");
t.b = function(a) {
  return y(a) ? this.la.getElementById(a) : a
};
t.e = function(a, b, c) {
  var d = this.la, f = arguments, h = f[0], i = f[1];
  if(!Ob && i && (i.name || i.type)) {
    h = ["<", h];
    i.name && h.push(' name="', Ea(i.name), '"');
    if(i.type) {
      h.push(' type="', Ea(i.type), '"');
      var k = {};
      hc(k, i);
      i = k;
      delete i.type
    }
    h.push(">");
    h = h.join("")
  }
  h = d.createElement(h);
  if(i) {
    y(i) ? h.className = i : ja(i) ? Rb.apply(l, [h].concat(i)) : oc(h, i)
  }
  2 < f.length && sc(d, h, f, 2);
  return h
};
t.createElement = function(a) {
  return this.la.createElement(a)
};
t.createTextNode = function(a) {
  return this.la.createTextNode(a)
};
t.tg = function(a, b, c) {
  for(var d = this.la, f = !!c, c = ["<tr>"], h = 0;h < b;h++) {
    c.push(f ? "<td>&nbsp;</td>" : "<td></td>")
  }
  c.push("</tr>");
  c = c.join("");
  b = ["<table>"];
  for(h = 0;h < a;h++) {
    b.push(c)
  }
  b.push("</table>");
  a = d.createElement("DIV");
  a.innerHTML = b.join("");
  return a.removeChild(a.firstChild)
};
function Qc(a) {
  return nc(a.la)
}
t.Da = function() {
  return this.la.parentWindow || this.la.defaultView
};
function Rc(a) {
  var b = a.la, a = !E && nc(b) ? b.documentElement : b.body, b = b.parentWindow || b.defaultView;
  return new Ub(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
}
t.appendChild = function(a, b) {
  a.appendChild(b)
};
t.append = uc;
t.ui = wc;
t.removeNode = J;
t.Qj = zc;
t.contains = Bc;
var Sc, Tc = (Sc = "ScriptEngine" in u && "JScript" == u.ScriptEngine()) ? u.ScriptEngineMajorVersion() + "." + u.ScriptEngineMinorVersion() + "." + u.ScriptEngineBuildVersion() : "0";
function Uc(a, b) {
  this.sb = Sc ? [] : "";
  a != l && this.append.apply(this, arguments)
}
Uc.prototype.set = function(a) {
  this.clear();
  this.append(a)
};
Sc ? (Uc.prototype.fg = 0, Uc.prototype.append = function(a, b, c) {
  b == l ? this.sb[this.fg++] = a : (this.sb.push.apply(this.sb, arguments), this.fg = this.sb.length);
  return this
}) : Uc.prototype.append = function(a, b, c) {
  this.sb += a;
  if(b != l) {
    for(var d = 1;d < arguments.length;d++) {
      this.sb += arguments[d]
    }
  }
  return this
};
Uc.prototype.clear = function() {
  Sc ? this.fg = this.sb.length = 0 : this.sb = ""
};
Uc.prototype.toString = function() {
  if(Sc) {
    var a = this.sb.join("");
    this.clear();
    a && this.append(a);
    return a
  }
  return this.sb
};
function Vc(a, b, c, d) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = d
}
Vc.prototype.Ra = function() {
  return new Vc(this.top, this.right, this.bottom, this.left)
};
Vc.prototype.toString = function() {
  return"(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
};
Vc.prototype.contains = function(a) {
  return!this || !a ? o : a instanceof Vc ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom
};
function Wc(a, b, c, d) {
  this.left = a;
  this.top = b;
  this.width = c;
  this.height = d
}
Wc.prototype.Ra = function() {
  return new Wc(this.left, this.top, this.width, this.height)
};
Wc.prototype.toString = function() {
  return"(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
};
Wc.prototype.contains = function(a) {
  return a instanceof Wc ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
Wc.prototype.Fg = function() {
  return new Wb(this.width, this.height)
};
function Xc(a, b, c) {
  y(b) ? Yc(a, c, b) : Yb(b, va(Yc, a))
}
function Yc(a, b, c) {
  a.style[Ua(c)] = b
}
function Zc(a, b) {
  var c = I(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, l)) ? c[b] || c.getPropertyValue(b) : ""
}
function $c(a, b) {
  return Zc(a, b) || (a.currentStyle ? a.currentStyle[b] : l) || a.style[b]
}
function ad(a, b, c) {
  var d, f = D && (vb || Eb) && G("1.9");
  b instanceof Ub ? (d = b.x, b = b.y) : (d = b, b = c);
  a.style.left = bd(d, f);
  a.style.top = bd(b, f)
}
function cd(a) {
  var b = a.getBoundingClientRect();
  if(C) {
    a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop
  }
  return b
}
function dd(a) {
  if(C) {
    return a.offsetParent
  }
  for(var b = I(a), c = $c(a, "position"), d = "fixed" == c || "absolute" == c, a = a.parentNode;a && a != b;a = a.parentNode) {
    if(c = $c(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c)) {
      return a
    }
  }
  return l
}
function ed(a) {
  for(var b = new Vc(0, Infinity, Infinity, 0), c = H(a), d = c.ba().body, f = !E && nc(c.la) ? c.la.documentElement : c.la.body, h;a = dd(a);) {
    if((!C || 0 != a.clientWidth) && (!E || 0 != a.clientHeight || a != d) && (a.scrollWidth != a.clientWidth || a.scrollHeight != a.clientHeight) && "visible" != $c(a, "overflow")) {
      var i = fd(a), k;
      k = a;
      if(D && !G("1.9")) {
        var m = parseFloat(Zc(k, "borderLeftWidth"));
        if(gd(k)) {
          var n = k.offsetWidth - k.clientWidth - m - parseFloat(Zc(k, "borderRightWidth")), m = m + n
        }
        k = new Ub(m, parseFloat(Zc(k, "borderTopWidth")))
      }else {
        k = new Ub(k.clientLeft, k.clientTop)
      }
      i.x += k.x;
      i.y += k.y;
      b.top = Math.max(b.top, i.y);
      b.right = Math.min(b.right, i.x + a.clientWidth);
      b.bottom = Math.min(b.bottom, i.y + a.clientHeight);
      b.left = Math.max(b.left, i.x);
      h = h || a != f
    }
  }
  d = f.scrollLeft;
  f = f.scrollTop;
  E ? (b.left += d, b.top += f) : (b.left = Math.max(b.left, d), b.top = Math.max(b.top, f));
  if(!h || E) {
    b.right += d, b.bottom += f
  }
  c = qc(c.Da());
  b.right = Math.min(b.right, d + c.width);
  b.bottom = Math.min(b.bottom, f + c.height);
  return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : l
}
function fd(a) {
  var b, c = I(a), d = $c(a, "position"), f = D && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY), h = new Ub(0, 0), i;
  b = c ? 9 == c.nodeType ? c : I(c) : document;
  i = C && !G(9) && !Qc(H(b)) ? b.body : b.documentElement;
  if(a == i) {
    return h
  }
  if(a.getBoundingClientRect) {
    b = cd(a), a = Rc(H(c)), h.x = b.left + a.x, h.y = b.top + a.y
  }else {
    if(c.getBoxObjectFor && !f) {
      b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(i), h.x = b.screenX - a.screenX, h.y = b.screenY - a.screenY
    }else {
      b = a;
      do {
        h.x += b.offsetLeft;
        h.y += b.offsetTop;
        b != a && (h.x += b.clientLeft || 0, h.y += b.clientTop || 0);
        if(E && "fixed" == $c(b, "position")) {
          h.x += c.body.scrollLeft;
          h.y += c.body.scrollTop;
          break
        }
        b = b.offsetParent
      }while(b && b != a);
      if(B || E && "absolute" == d) {
        h.y -= c.body.offsetTop
      }
      for(b = a;(b = dd(b)) && b != c.body && b != i;) {
        if(h.x -= b.scrollLeft, !B || "TR" != b.tagName) {
          h.y -= b.scrollTop
        }
      }
    }
  }
  return h
}
function hd(a, b, c) {
  b instanceof Wb ? (c = b.height, b = b.width) : c == g && e(Error("missing height argument"));
  a.style.width = bd(b, j);
  a.style.height = bd(c, j)
}
function bd(a, b) {
  "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
  return a
}
function id(a) {
  if("none" != $c(a, "display")) {
    return new Wb(a.offsetWidth, a.offsetHeight)
  }
  var b = a.style, c = b.display, d = b.visibility, f = b.position;
  b.visibility = "hidden";
  b.position = "absolute";
  b.display = "inline";
  var h = a.offsetWidth, a = a.offsetHeight;
  b.display = c;
  b.position = f;
  b.visibility = d;
  return new Wb(h, a)
}
function jd(a) {
  var b = fd(a), a = id(a);
  return new Wc(b.x, b.y, a.width, a.height)
}
function kd(a, b) {
  var c = a.style;
  if("opacity" in c) {
    c.opacity = b
  }else {
    if("MozOpacity" in c) {
      c.MozOpacity = b
    }else {
      if("filter" in c) {
        c.filter = "" === b ? "" : "alpha(opacity=" + 100 * b + ")"
      }
    }
  }
}
function ld(a, b) {
  a.style.display = b ? "" : "none"
}
function md(a, b) {
  C ? a.cssText = b : a[E ? "innerText" : "innerHTML"] = b
}
function gd(a) {
  return"rtl" == $c(a, "direction")
}
var nd = D ? "MozUserSelect" : E ? "WebkitUserSelect" : l;
function od(a, b, c) {
  c = !c ? a.getElementsByTagName("*") : l;
  if(nd) {
    if(b = b ? "none" : "", a.style[nd] = b, c) {
      for(var a = 0, d;d = c[a];a++) {
        d.style[nd] = b
      }
    }
  }else {
    if(C || B) {
      if(b = b ? "on" : "", a.setAttribute("unselectable", b), c) {
        for(a = 0;d = c[a];a++) {
          d.setAttribute("unselectable", b)
        }
      }
    }
  }
}
var pd = /[^\d]+$/;
var qd, rd = !C || G("9"), sd = C && !G("8");
function td() {
}
td.prototype.hf = o;
td.prototype.C = function() {
  if(!this.hf) {
    this.hf = j, this.l()
  }
};
td.prototype.l = ba();
function ud(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
A(ud, td);
t = ud.prototype;
t.l = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
t.ld = o;
t.Ee = j;
t.stopPropagation = function() {
  this.ld = j
};
t.preventDefault = function() {
  this.Ee = o
};
function vd(a) {
  a.preventDefault()
}
;var wd = C ? "focusin" : "DOMFocusIn";
var xd = new Function("a", "return a");
function yd(a, b) {
  a && this.hd(a, b)
}
A(yd, ud);
var zd = [1, 4, 2];
t = yd.prototype;
t.target = l;
t.relatedTarget = l;
t.offsetX = 0;
t.offsetY = 0;
t.clientX = 0;
t.clientY = 0;
t.screenX = 0;
t.screenY = 0;
t.button = 0;
t.keyCode = 0;
t.charCode = 0;
t.ctrlKey = o;
t.altKey = o;
t.shiftKey = o;
t.metaKey = o;
t.cl = o;
t.Aa = l;
t.hd = function(a, b) {
  var c = this.type = a.type;
  ud.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(D) {
      try {
        xd(d.nodeName)
      }catch(f) {
        d = l
      }
    }
  }else {
    if("mouseover" == c) {
      d = a.fromElement
    }else {
      if("mouseout" == c) {
        d = a.toElement
      }
    }
  }
  this.relatedTarget = d;
  this.offsetX = a.offsetX !== g ? a.offsetX : a.layerX;
  this.offsetY = a.offsetY !== g ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== g ? a.clientX : a.pageX;
  this.clientY = a.clientY !== g ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.cl = vb ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Aa = a;
  delete this.Ee;
  delete this.ld
};
function Ad(a) {
  return(rd ? 0 == a.Aa.button : "click" == a.type ? j : !!(a.Aa.button & zd[0])) && !(E && vb && a.ctrlKey)
}
t.stopPropagation = function() {
  yd.c.stopPropagation.call(this);
  this.Aa.stopPropagation ? this.Aa.stopPropagation() : this.Aa.cancelBubble = j
};
t.preventDefault = function() {
  yd.c.preventDefault.call(this);
  var a = this.Aa;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = o, sd) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
t.ei = q("Aa");
t.l = function() {
  yd.c.l.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.Aa = l
};
function Bd() {
}
var Cd = 0;
t = Bd.prototype;
t.key = 0;
t.Td = o;
t.gg = o;
t.hd = function(a, b, c, d, f, h) {
  ma(a) ? this.wi = j : a && a.handleEvent && ma(a.handleEvent) ? this.wi = o : e(Error("Invalid listener argument"));
  this.Qd = a;
  this.Li = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.uf = h;
  this.gg = o;
  this.key = ++Cd;
  this.Td = o
};
t.handleEvent = function(a) {
  return this.wi ? this.Qd.call(this.uf || this.src, a) : this.Qd.handleEvent.call(this.Qd, a)
};
function Dd(a, b) {
  this.yi = b;
  this.cd = [];
  a > this.yi && e(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.cd.push(this.mc ? this.mc() : {})
  }
}
A(Dd, td);
Dd.prototype.mc = l;
Dd.prototype.Wh = l;
function Ed(a) {
  return a.cd.length ? a.cd.pop() : a.mc ? a.mc() : {}
}
function Fd(a, b) {
  a.cd.length < a.yi ? a.cd.push(b) : Gd(a, b)
}
function Gd(a, b) {
  if(a.Wh) {
    a.Wh(b)
  }else {
    if(oa(b)) {
      if(ma(b.C)) {
        b.C()
      }else {
        for(var c in b) {
          delete b[c]
        }
      }
    }
  }
}
Dd.prototype.l = function() {
  Dd.c.l.call(this);
  for(var a = this.cd;a.length;) {
    Gd(this, a.pop())
  }
  delete this.cd
};
var Hd, Id, Jd, Kd, Ld, Md, Nd, Od, Pd, Qd, Rd;
(function() {
  function a() {
    return{Sa:0, Ub:0}
  }
  function b() {
    return[]
  }
  function c() {
    function a(b) {
      return i.call(a.src, a.key, b)
    }
    return a
  }
  function d() {
    return new Bd
  }
  function f() {
    return new yd
  }
  var h = Sc && !(0 <= Oa(Tc, "5.7")), i;
  Md = function(a) {
    i = a
  };
  if(h) {
    Hd = function() {
      return Ed(k)
    };
    Id = function(a) {
      Fd(k, a)
    };
    Jd = function() {
      return Ed(m)
    };
    Kd = function(a) {
      Fd(m, a)
    };
    Ld = function() {
      return Ed(n)
    };
    Nd = function() {
      Fd(n, c())
    };
    Od = function() {
      return Ed(p)
    };
    Pd = function(a) {
      Fd(p, a)
    };
    Qd = function() {
      return Ed(r)
    };
    Rd = function(a) {
      Fd(r, a)
    };
    var k = new Dd(0, 600);
    k.mc = a;
    var m = new Dd(0, 600);
    m.mc = b;
    var n = new Dd(0, 600);
    n.mc = c;
    var p = new Dd(0, 600);
    p.mc = d;
    var r = new Dd(0, 600);
    r.mc = f
  }else {
    Hd = a, Id = ha, Jd = b, Kd = ha, Ld = c, Nd = ha, Od = d, Pd = ha, Qd = f, Rd = ha
  }
})();
var Sd = {}, Td = {}, Ud = {}, Vd = {};
function Wd(a, b, c, d, f) {
  if(b) {
    if(ja(b)) {
      for(var h = 0;h < b.length;h++) {
        Wd(a, b[h], c, d, f)
      }
      return l
    }
    var d = !!d, i = Td;
    b in i || (i[b] = Hd());
    i = i[b];
    d in i || (i[d] = Hd(), i.Sa++);
    var i = i[d], k = pa(a), m;
    i.Ub++;
    if(i[k]) {
      m = i[k];
      for(h = 0;h < m.length;h++) {
        if(i = m[h], i.Qd == c && i.uf == f) {
          if(i.Td) {
            break
          }
          return m[h].key
        }
      }
    }else {
      m = i[k] = Jd(), i.Sa++
    }
    h = Ld();
    h.src = a;
    i = Od();
    i.hd(c, h, a, b, d, f);
    c = i.key;
    h.key = c;
    m.push(i);
    Sd[c] = i;
    Ud[k] || (Ud[k] = Jd());
    Ud[k].push(i);
    a.addEventListener ? (a == u || !a.Rh) && a.addEventListener(b, h, d) : a.attachEvent(b in Vd ? Vd[b] : Vd[b] = "on" + b, h);
    return c
  }
  e(Error("Invalid event type"))
}
function Xd(a, b, c, d, f) {
  if(ja(b)) {
    for(var h = 0;h < b.length;h++) {
      Xd(a, b[h], c, d, f)
    }
  }else {
    a = Wd(a, b, c, d, f), Sd[a].gg = j
  }
}
function Yd(a, b, c, d, f) {
  if(ja(b)) {
    for(var h = 0;h < b.length;h++) {
      Yd(a, b[h], c, d, f)
    }
  }else {
    if(d = !!d, a = Zd(a, b, d)) {
      for(h = 0;h < a.length;h++) {
        if(a[h].Qd == c && a[h].capture == d && a[h].uf == f) {
          $d(a[h].key);
          break
        }
      }
    }
  }
}
function $d(a) {
  if(Sd[a]) {
    var b = Sd[a];
    if(!b.Td) {
      var c = b.src, d = b.type, f = b.Li, h = b.capture;
      c.removeEventListener ? (c == u || !c.Rh) && c.removeEventListener(d, f, h) : c.detachEvent && c.detachEvent(d in Vd ? Vd[d] : Vd[d] = "on" + d, f);
      c = pa(c);
      f = Td[d][h][c];
      if(Ud[c]) {
        var i = Ud[c];
        ib(i, b);
        0 == i.length && delete Ud[c]
      }
      b.Td = j;
      f.Bi = j;
      ae(d, h, c, f);
      delete Sd[a]
    }
  }
}
function ae(a, b, c, d) {
  if(!d.Cf && d.Bi) {
    for(var f = 0, h = 0;f < d.length;f++) {
      if(d[f].Td) {
        var i = d[f].Li;
        i.src = l;
        Nd(i);
        Pd(d[f])
      }else {
        f != h && (d[h] = d[f]), h++
      }
    }
    d.length = h;
    d.Bi = o;
    0 == h && (Kd(d), delete Td[a][b][c], Td[a][b].Sa--, 0 == Td[a][b].Sa && (Id(Td[a][b]), delete Td[a][b], Td[a].Sa--), 0 == Td[a].Sa && (Id(Td[a]), delete Td[a]))
  }
}
function be(a) {
  var b, c = 0, d = b == l;
  b = !!b;
  if(a == l) {
    Yb(Ud, function(a) {
      for(var f = a.length - 1;0 <= f;f--) {
        var h = a[f];
        if(d || b == h.capture) {
          $d(h.key), c++
        }
      }
    })
  }else {
    if(a = pa(a), Ud[a]) {
      for(var a = Ud[a], f = a.length - 1;0 <= f;f--) {
        var h = a[f];
        if(d || b == h.capture) {
          $d(h.key), c++
        }
      }
    }
  }
}
function Zd(a, b, c) {
  var d = Td;
  return b in d && (d = d[b], c in d && (d = d[c], a = pa(a), d[a])) ? d[a] : l
}
function ce(a, b, c, d, f) {
  var h = 1, b = pa(b);
  if(a[b]) {
    a.Ub--;
    a = a[b];
    a.Cf ? a.Cf++ : a.Cf = 1;
    try {
      for(var i = a.length, k = 0;k < i;k++) {
        var m = a[k];
        m && !m.Td && (h &= de(m, f) !== o)
      }
    }finally {
      a.Cf--, ae(c, d, b, a)
    }
  }
  return Boolean(h)
}
function de(a, b) {
  var c = a.handleEvent(b);
  a.gg && $d(a.key);
  return c
}
Md(function(a, b) {
  if(!Sd[a]) {
    return j
  }
  var c = Sd[a], d = c.type, f = Td;
  if(!(d in f)) {
    return j
  }
  var f = f[d], h, i;
  qd === g && (qd = C && !u.addEventListener);
  if(qd) {
    h = b || ga("window.event");
    var k = j in f, m = o in f;
    if(k) {
      if(0 > h.keyCode || h.returnValue != g) {
        return j
      }
      a: {
        var n = o;
        if(0 == h.keyCode) {
          try {
            h.keyCode = -1;
            break a
          }catch(p) {
            n = j
          }
        }
        if(n || h.returnValue == g) {
          h.returnValue = j
        }
      }
    }
    n = Qd();
    n.hd(h, this);
    h = j;
    try {
      if(k) {
        for(var r = Jd(), x = n.currentTarget;x;x = x.parentNode) {
          r.push(x)
        }
        i = f[j];
        i.Ub = i.Sa;
        for(var v = r.length - 1;!n.ld && 0 <= v && i.Ub;v--) {
          n.currentTarget = r[v], h &= ce(i, r[v], d, j, n)
        }
        if(m) {
          i = f[o];
          i.Ub = i.Sa;
          for(v = 0;!n.ld && v < r.length && i.Ub;v++) {
            n.currentTarget = r[v], h &= ce(i, r[v], d, o, n)
          }
        }
      }else {
        h = de(c, n)
      }
    }finally {
      if(r) {
        r.length = 0, Kd(r)
      }
      n.C();
      Rd(n)
    }
    return h
  }
  d = new yd(b, this);
  try {
    h = de(c, d)
  }finally {
    d.C()
  }
  return h
});
function ee(a) {
  this.na = a
}
A(ee, td);
var fe = new Dd(0, 100), ge = [];
ee.prototype.m = function(a, b, c, d, f) {
  ja(b) || (ge[0] = b, b = ge);
  for(var h = 0;h < b.length;h++) {
    var i = Wd(a, b[h], c || this, d || o, f || this.na || this);
    this.Y ? this.Y[i] = j : this.Jc ? (this.Y = Ed(fe), this.Y[this.Jc] = j, this.Jc = l, this.Y[i] = j) : this.Jc = i
  }
  return this
};
ee.prototype.bb = function(a, b, c, d, f) {
  if(this.Jc || this.Y) {
    if(ja(b)) {
      for(var h = 0;h < b.length;h++) {
        this.bb(a, b[h], c, d, f)
      }
    }else {
      a: {
        c = c || this;
        f = f || this.na || this;
        d = !!d;
        if(a = Zd(a, b, d)) {
          for(b = 0;b < a.length;b++) {
            if(a[b].Qd == c && a[b].capture == d && a[b].uf == f) {
              a = a[b];
              break a
            }
          }
        }
        a = l
      }
      if(a) {
        if(a = a.key, $d(a), this.Y) {
          cc(this.Y, a)
        }else {
          if(this.Jc == a) {
            this.Jc = l
          }
        }
      }
    }
  }
  return this
};
function he(a) {
  if(a.Y) {
    for(var b in a.Y) {
      $d(b), delete a.Y[b]
    }
    Fd(fe, a.Y);
    a.Y = l
  }else {
    a.Jc && $d(a.Jc)
  }
}
ee.prototype.l = function() {
  ee.c.l.call(this);
  he(this)
};
ee.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function ie() {
}
A(ie, td);
t = ie.prototype;
t.Rh = j;
t.Jf = l;
t.kh = ca("Jf");
t.addEventListener = function(a, b, c, d) {
  Wd(this, a, b, c, d)
};
t.removeEventListener = function(a, b, c, d) {
  Yd(this, a, b, c, d)
};
t.dispatchEvent = function(a) {
  var b = a.type || a, c = Td;
  if(b in c) {
    if(y(a)) {
      a = new ud(a, this)
    }else {
      if(a instanceof ud) {
        a.target = a.target || this
      }else {
        var d = a, a = new ud(b, this);
        hc(a, d)
      }
    }
    var d = 1, f, c = c[b], b = j in c, h;
    if(b) {
      f = [];
      for(h = this;h;h = h.Jf) {
        f.push(h)
      }
      h = c[j];
      h.Ub = h.Sa;
      for(var i = f.length - 1;!a.ld && 0 <= i && h.Ub;i--) {
        a.currentTarget = f[i], d &= ce(h, f[i], a.type, j, a) && a.Ee != o
      }
    }
    if(o in c) {
      if(h = c[o], h.Ub = h.Sa, b) {
        for(i = 0;!a.ld && i < f.length && h.Ub;i++) {
          a.currentTarget = f[i], d &= ce(h, f[i], a.type, o, a) && a.Ee != o
        }
      }else {
        for(f = this;!a.ld && f && h.Ub;f = f.Jf) {
          a.currentTarget = f, d &= ce(h, f, a.type, o, a) && a.Ee != o
        }
      }
    }
    a = Boolean(d)
  }else {
    a = j
  }
  return a
};
t.l = function() {
  ie.c.l.call(this);
  be(this);
  this.Jf = l
};
function je() {
}
ia(je);
je.prototype.Pk = 0;
je.ca();
function ke(a) {
  this.z = a || H();
  this.Fe = le
}
A(ke, ie);
ke.prototype.Bk = je.ca();
var le = l;
function me(a, b) {
  switch(a) {
    case 1:
      return b ? "disable" : "enable";
    case 2:
      return b ? "highlight" : "unhighlight";
    case 4:
      return b ? "activate" : "deactivate";
    case 8:
      return b ? "select" : "unselect";
    case 16:
      return b ? "check" : "uncheck";
    case 32:
      return b ? "focus" : "blur";
    case 64:
      return b ? "open" : "close"
  }
  e(Error("Invalid component state"))
}
t = ke.prototype;
t.Cb = l;
t.V = o;
t.p = l;
t.Fe = l;
t.$g = l;
t.xa = l;
t.za = l;
t.vb = l;
t.ul = o;
function ne(a) {
  return a.Cb || (a.Cb = ":" + (a.Bk.Pk++).toString(36))
}
function oe(a, b) {
  a.xa && a.xa.vb && (cc(a.xa.vb, a.Cb), dc(a.xa.vb, b, a));
  a.Cb = b
}
t.b = q("p");
t.Ba = function() {
  return this.Kd || (this.Kd = new ee(this))
};
function pe(a, b) {
  a == b && e(Error("Unable to set parent component"));
  b && a.xa && a.Cb && qe(a.xa, a.Cb) && a.xa != b && e(Error("Unable to set parent component"));
  a.xa = b;
  ke.c.kh.call(a, b)
}
t.getParent = q("xa");
t.kh = function(a) {
  this.xa && this.xa != a && e(Error("Method not supported"));
  ke.c.kh.call(this, a)
};
t.R = q("z");
t.e = function() {
  this.p = this.z.createElement("div")
};
t.$a = function(a) {
  re(this, a)
};
function re(a, b, c) {
  a.V && e(Error("Component already rendered"));
  a.p || a.e();
  b ? b.insertBefore(a.p, c || l) : a.z.ba().body.appendChild(a.p);
  (!a.xa || a.xa.V) && a.ea()
}
t.ea = function() {
  this.V = j;
  se(this, function(a) {
    !a.V && a.b() && a.ea()
  })
};
t.zb = function() {
  se(this, function(a) {
    a.V && a.zb()
  });
  this.Kd && he(this.Kd);
  this.V = o
};
t.l = function() {
  ke.c.l.call(this);
  this.V && this.zb();
  this.Kd && (this.Kd.C(), delete this.Kd);
  se(this, function(a) {
    a.C()
  });
  !this.ul && this.p && J(this.p);
  this.xa = this.$g = this.p = this.vb = this.za = l
};
t.gc = function(a, b) {
  this.ce(a, te(this), b)
};
t.ce = function(a, b, c) {
  a.V && (c || !this.V) && e(Error("Component already rendered"));
  (0 > b || b > te(this)) && e(Error("Child component index out of bounds"));
  if(!this.vb || !this.za) {
    this.vb = {}, this.za = []
  }
  a.getParent() == this ? (this.vb[ne(a)] = a, ib(this.za, a)) : dc(this.vb, ne(a), a);
  pe(a, this);
  nb(this.za, b, 0, a);
  a.V && this.V && a.getParent() == this ? (c = this.T(), c.insertBefore(a.b(), c.childNodes[b] || l)) : c ? (this.p || this.e(), b = ue(this, b + 1), re(a, this.T(), b ? b.p : l)) : this.V && !a.V && a.p && a.ea()
};
t.T = q("p");
function ve(a) {
  if(a.Fe == l) {
    a.Fe = gd(a.V ? a.p : a.z.ba().body)
  }
  return a.Fe
}
t.Rc = function(a) {
  this.V && e(Error("Component already rendered"));
  this.Fe = a
};
function te(a) {
  return a.za ? a.za.length : 0
}
function qe(a, b) {
  return a.vb && b ? (b in a.vb ? a.vb[b] : g) || l : l
}
function ue(a, b) {
  return a.za ? a.za[b] || l : l
}
function se(a, b, c) {
  a.za && ab(a.za, b, c)
}
function we(a, b) {
  return a.za && b ? Za(a.za, b) : -1
}
t.removeChild = function(a, b) {
  if(a) {
    var c = y(a) ? a : ne(a), a = qe(this, c);
    c && a && (cc(this.vb, c), ib(this.za, a), b && (a.zb(), a.p && J(a.p)), pe(a, l))
  }
  a || e(Error("Child is not in parent component"));
  return a
};
function xe(a, b) {
  a.setAttribute("role", b);
  a.vm = b
}
function ye(a, b, c) {
  a.setAttribute("aria-" + b, c)
}
;function ze(a, b, c, d, f) {
  if(!C && (!E || !G("525"))) {
    return j
  }
  if(vb && f) {
    return Ae(a)
  }
  if(f && !d || !c && (17 == b || 18 == b) || C && d && b == a) {
    return o
  }
  switch(a) {
    case 13:
      return j;
    case 27:
      return!E
  }
  return Ae(a)
}
function Ae(a) {
  if(48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || E && 0 == a) {
    return j
  }
  switch(a) {
    case 32:
    ;
    case 63:
    ;
    case 107:
    ;
    case 109:
    ;
    case 110:
    ;
    case 111:
    ;
    case 186:
    ;
    case 189:
    ;
    case 187:
    ;
    case 188:
    ;
    case 190:
    ;
    case 191:
    ;
    case 192:
    ;
    case 222:
    ;
    case 219:
    ;
    case 220:
    ;
    case 221:
      return j;
    default:
      return o
  }
}
;function Be(a, b) {
  a && Ce(this, a, b)
}
A(Be, ie);
t = Be.prototype;
t.p = l;
t.zf = l;
t.Ug = l;
t.Af = l;
t.Kc = -1;
t.Ic = -1;
var De = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Ee = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Fe = {61:187, 
59:186}, Ge = C || E && G("525");
t = Be.prototype;
t.Lg = function(a) {
  if(E && (17 == this.Kc && !a.ctrlKey || 18 == this.Kc && !a.altKey)) {
    this.Ic = this.Kc = -1
  }
  Ge && !ze(a.keyCode, this.Kc, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Ic = D && a.keyCode in Fe ? Fe[a.keyCode] : a.keyCode
};
t.ik = function() {
  this.Ic = this.Kc = -1
};
t.handleEvent = function(a) {
  var b = a.Aa, c, d;
  C && "keypress" == a.type ? (c = this.Ic, d = 13 != c && 27 != c ? b.keyCode : 0) : E && "keypress" == a.type ? (c = this.Ic, d = 0 <= b.charCode && 63232 > b.charCode && Ae(c) ? b.charCode : 0) : B ? (c = this.Ic, d = Ae(c) ? b.keyCode : 0) : (c = b.keyCode || this.Ic, d = b.charCode || 0, vb && 63 == d && !c && (c = 191));
  var f = c, h = b.keyIdentifier;
  c ? 63232 <= c && c in De ? f = De[c] : 25 == c && a.shiftKey && (f = 9) : h && h in Ee && (f = Ee[h]);
  a = f == this.Kc;
  this.Kc = f;
  b = new He(f, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.C()
  }
};
t.b = q("p");
function Ce(a, b, c) {
  a.Af && a.detach();
  a.p = b;
  a.zf = Wd(a.p, "keypress", a, c);
  a.Ug = Wd(a.p, "keydown", a.Lg, c, a);
  a.Af = Wd(a.p, "keyup", a.ik, c, a)
}
t.detach = function() {
  if(this.zf) {
    $d(this.zf), $d(this.Ug), $d(this.Af), this.Af = this.Ug = this.zf = l
  }
  this.p = l;
  this.Ic = this.Kc = -1
};
t.l = function() {
  Be.c.l.call(this);
  this.detach()
};
function He(a, b, c, d) {
  d && this.hd(d, g);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
A(He, yd);
function Ie() {
}
var Je;
ia(Ie);
t = Ie.prototype;
t.nb = ba();
t.e = function(a) {
  return a.R().e("div", this.bc(a).join(" "), a.ta)
};
t.T = aa();
t.ne = function(a, b, c) {
  if(a = a.b ? a.b() : a) {
    if(C && !G("7")) {
      var d = Ke(Qb(a), b);
      d.push(b);
      va(c ? Rb : Sb, a).apply(l, d)
    }else {
      Tb(a, b, c)
    }
  }
};
t.dc = function(a) {
  ve(a) && this.Rc(a.b(), j);
  a.isEnabled() && this.Gb(a, a.W())
};
t.Pf = function(a, b) {
  od(a, !b, !C && !B)
};
t.Rc = function(a, b) {
  this.ne(a, this.s() + "-rtl", b)
};
t.Fc = function(a) {
  var b;
  return a.La & 32 && (b = a.ma()) ? Kc(b) : o
};
t.Gb = function(a, b) {
  var c;
  if(a.La & 32 && (c = a.ma())) {
    if(!b && a.Fa & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.Fa & 32 && a.Cc(l)
    }
    if(Kc(c) != b) {
      b ? c.tabIndex = 0 : c.removeAttribute("tabIndex")
    }
  }
};
t.Z = function(a, b) {
  ld(a, b)
};
t.pb = function(a, b, c) {
  var d = a.b();
  if(d) {
    var f = this.pf(b);
    f && this.ne(a, f, c);
    this.Qe(d, b, c)
  }
};
t.Qe = function(a, b, c) {
  Je || (Je = {1:"disabled", 4:"pressed", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Je[b]) && ye(a, b, c)
};
t.hb = function(a, b) {
  var c = this.T(a);
  if(c && (vc(c), b)) {
    if(y(b)) {
      Hc(c, b)
    }else {
      var d = function(a) {
        if(a) {
          var b = I(c);
          c.appendChild(y(a) ? b.createTextNode(a) : a)
        }
      };
      ja(b) ? ab(b, d) : ka(b) && !("nodeType" in b) ? ab(kb(b), d) : d(b)
    }
  }
};
t.ma = function(a) {
  return a.b()
};
t.s = s("goog-control");
t.bc = function(a) {
  var b = this.s(), c = [b], d = this.s();
  d != b && c.push(d);
  b = a.Fa;
  for(d = [];b;) {
    var f = b & -b;
    d.push(this.pf(f));
    b &= ~f
  }
  c.push.apply(c, d);
  (a = a.ac) && c.push.apply(c, a);
  C && !G("7") && c.push.apply(c, Ke(c));
  return c
};
function Ke(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  ab([], function(d) {
    eb(d, va(hb, a)) && (!b || hb(d, b)) && c.push(d.join("_"))
  });
  return c
}
t.pf = function(a) {
  if(!this.Jh) {
    var b = this.s();
    this.Jh = {1:b + "-disabled", 2:b + "-hover", 4:b + "-active", 8:b + "-selected", 16:b + "-checked", 32:b + "-focused", 64:b + "-open"}
  }
  return this.Jh[a]
};
function Le(a, b) {
  a || e(Error("Invalid class name " + a));
  ma(b) || e(Error("Invalid decorator function " + b))
}
var Me = {};
function Ne(a, b, c) {
  ke.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = pa(b);
      if(d = Me[d]) {
        break
      }
      b = b.c ? b.c.constructor : l
    }
    b = d ? ma(d.ca) ? d.ca() : new d : l
  }
  this.w = b;
  this.Qf(a)
}
A(Ne, ke);
t = Ne.prototype;
t.ta = l;
t.Fa = 0;
t.La = 39;
t.ag = 255;
t.md = 0;
t.Ua = j;
t.ac = l;
t.Mg = j;
t.$f = o;
function Oe(a, b) {
  a.V && b != a.Mg && Pe(a, b);
  a.Mg = b
}
t.ma = function() {
  return this.w.ma(this)
};
t.oe = function() {
  return this.Db || (this.Db = new Be)
};
t.rd = function(a) {
  if(a) {
    this.ac ? hb(this.ac, a) || this.ac.push(a) : this.ac = [a], this.w.ne(this, a, j)
  }
};
t.ne = function(a, b) {
  if(b) {
    this.rd(a)
  }else {
    if(a && this.ac) {
      ib(this.ac, a);
      if(0 == this.ac.length) {
        this.ac = l
      }
      this.w.ne(this, a, o)
    }
  }
};
t.e = function() {
  var a = this.w.e(this);
  this.p = a;
  var b = this.w.nb();
  b && xe(a, b);
  this.$f || this.w.Pf(a, o);
  this.W() || this.w.Z(a, o)
};
t.T = function() {
  return this.w.T(this.b())
};
t.ea = function() {
  Ne.c.ea.call(this);
  this.w.dc(this);
  if(this.La & -2 && (this.Mg && Pe(this, j), this.La & 32)) {
    var a = this.ma();
    if(a) {
      var b = this.oe();
      Ce(b, a);
      this.Ba().m(b, "key", this.Bb).m(a, "focus", this.pe).m(a, "blur", this.Cc)
    }
  }
};
function Pe(a, b) {
  var c = a.Ba(), d = a.b();
  b ? (c.m(d, "mouseover", a.se).m(d, "mousedown", a.nc).m(d, "mouseup", a.fd).m(d, "mouseout", a.re), C && c.m(d, "dblclick", a.ii)) : (c.bb(d, "mouseover", a.se).bb(d, "mousedown", a.nc).bb(d, "mouseup", a.fd).bb(d, "mouseout", a.re), C && c.bb(d, "dblclick", a.ii))
}
t.zb = function() {
  Ne.c.zb.call(this);
  this.Db && this.Db.detach();
  this.W() && this.isEnabled() && this.w.Gb(this, o)
};
t.l = function() {
  Ne.c.l.call(this);
  this.Db && (this.Db.C(), delete this.Db);
  delete this.w;
  this.ac = this.ta = l
};
t.hb = function(a) {
  this.w.hb(this.b(), a);
  this.Qf(a)
};
t.Qf = ca("ta");
t.zc = function() {
  var a = this.ta;
  if(!a) {
    return""
  }
  if(y(a)) {
    return a
  }
  a = ja(a) ? cb(a, Lc).join("") : Lc(a);
  return Ca(a)
};
t.Rc = function(a) {
  Ne.c.Rc.call(this, a);
  var b = this.b();
  b && this.w.Rc(b, a)
};
t.Pf = function(a) {
  this.$f = a;
  var b = this.b();
  b && this.w.Pf(b, a)
};
t.W = q("Ua");
t.Z = function(a, b) {
  if(b || this.Ua != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.b();
    c && this.w.Z(c, a);
    this.isEnabled() && this.w.Gb(this, a);
    this.Ua = a;
    return j
  }
  return o
};
t.isEnabled = function() {
  return!(this.Fa & 1)
};
t.fc = function(a) {
  var b = this.getParent();
  if((!b || "function" != typeof b.isEnabled || b.isEnabled()) && Qe(this, 1, !a)) {
    a || (this.setActive(o), this.Vb(o)), this.W() && this.w.Gb(this, a), this.pb(1, !a)
  }
};
t.Vb = function(a) {
  Qe(this, 2, a) && this.pb(2, a)
};
t.Ec = function() {
  return!!(this.Fa & 4)
};
t.setActive = function(a) {
  Qe(this, 4, a) && this.pb(4, a)
};
t.Xd = function(a) {
  Qe(this, 8, a) && this.pb(8, a)
};
function Re(a, b) {
  Qe(a, 16, b) && a.pb(16, b)
}
t.we = function() {
  return!!(this.Fa & 64)
};
t.fa = function(a) {
  Qe(this, 64, a) && this.pb(64, a)
};
t.pb = function(a, b) {
  if(this.La & a && b != !!(this.Fa & a)) {
    this.w.pb(this, a, b), this.Fa = b ? this.Fa | a : this.Fa & ~a
  }
};
function Se(a, b, c) {
  a.V && a.Fa & b && !c && e(Error("Component already rendered"));
  !c && a.Fa & b && a.pb(b, o);
  a.La = c ? a.La | b : a.La & ~b
}
function Te(a, b) {
  return!!(a.ag & b) && !!(a.La & b)
}
function Qe(a, b, c) {
  return!!(a.La & b) && !!(a.Fa & b) != c && (!(a.md & b) || a.dispatchEvent(me(b, c))) && !a.hf
}
t.se = function(a) {
  (!a.relatedTarget || !Bc(this.b(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && Te(this, 2) && this.Vb(j)
};
t.re = function(a) {
  if((!a.relatedTarget || !Bc(this.b(), a.relatedTarget)) && this.dispatchEvent("leave")) {
    Te(this, 4) && this.setActive(o), Te(this, 2) && this.Vb(o)
  }
};
t.nc = function(a) {
  this.isEnabled() && (Te(this, 2) && this.Vb(j), Ad(a) && (Te(this, 4) && this.setActive(j), this.w.Fc(this) && this.ma().focus()));
  !this.$f && Ad(a) && a.preventDefault()
};
t.fd = function(a) {
  this.isEnabled() && (Te(this, 2) && this.Vb(j), this.Ec() && this.rc(a) && Te(this, 4) && this.setActive(o))
};
t.ii = function(a) {
  this.isEnabled() && this.rc(a)
};
t.rc = function(a) {
  Te(this, 16) && Re(this, !(this.Fa & 16));
  Te(this, 8) && this.Xd(j);
  Te(this, 64) && this.fa(!this.we());
  var b = new ud("action", this);
  if(a) {
    for(var c = ["altKey", "ctrlKey", "metaKey", "shiftKey", "platformModifierKey"], d, f = 0;d = c[f];f++) {
      b[d] = a[d]
    }
  }
  return this.dispatchEvent(b)
};
t.pe = function() {
  Te(this, 32) && Qe(this, 32, j) && this.pb(32, j)
};
t.Cc = function() {
  Te(this, 4) && this.setActive(o);
  Te(this, 32) && Qe(this, 32, o) && this.pb(32, o)
};
t.Bb = function(a) {
  return this.W() && this.isEnabled() && this.Ld(a) ? (a.preventDefault(), a.stopPropagation(), j) : o
};
t.Ld = function(a) {
  return 13 == a.keyCode && this.rc(a)
};
ma(Ne) || e(Error("Invalid component class " + Ne));
ma(Ie) || e(Error("Invalid renderer class " + Ie));
var Ue = pa(Ne);
Me[Ue] = Ie;
Le("goog-control", function() {
  return new Ne(l)
});
function Ve() {
}
A(Ve, Ie);
ia(Ve);
Ve.prototype.e = function(a) {
  return a.R().e("div", this.s())
};
Ve.prototype.hb = ba();
Ve.prototype.s = s("goog-menuseparator");
function We(a, b) {
  Ne.call(this, l, a || Ve.ca(), b);
  Se(this, 1, o);
  Se(this, 2, o);
  Se(this, 4, o);
  Se(this, 32, o);
  this.Fa = 1
}
A(We, Ne);
We.prototype.ea = function() {
  We.c.ea.call(this);
  xe(this.b(), "separator")
};
Le("goog-menuseparator", function() {
  return new We
});
function Xe() {
}
ia(Xe);
t = Xe.prototype;
t.nb = ba();
function Ye(a, b) {
  if(a) {
    a.tabIndex = b ? 0 : -1
  }
}
t.e = function(a) {
  return a.R().e("div", this.bc(a).join(" "))
};
t.T = aa();
t.dc = function(a) {
  a = a.b();
  od(a, j, D);
  if(C) {
    a.hideFocus = j
  }
  var b = this.nb();
  b && xe(a, b)
};
t.ma = function(a) {
  return a.b()
};
t.s = s("goog-container");
t.bc = function(a) {
  var b = this.s(), c = [b, a.Nc == Ze ? b + "-horizontal" : b + "-vertical"];
  a.isEnabled() || c.push(b + "-disabled");
  return c
};
t.hi = function() {
  return $e
};
function af(a, b, c) {
  ke.call(this, c);
  this.w = b || Xe.ca();
  this.Nc = a || this.w.hi()
}
A(af, ke);
var Ze = "horizontal", $e = "vertical";
t = af.prototype;
t.xe = l;
t.Db = l;
t.w = l;
t.Nc = l;
t.Ua = j;
t.Ya = j;
t.of = j;
t.pa = -1;
t.wa = l;
t.pc = o;
t.hj = o;
t.$k = j;
t.uc = l;
t.ma = function() {
  return this.xe || this.w.ma(this)
};
t.oe = function() {
  return this.Db || (this.Db = new Be(this.ma()))
};
t.e = function() {
  this.p = this.w.e(this)
};
t.T = function() {
  return this.w.T(this.b())
};
t.ea = function() {
  af.c.ea.call(this);
  se(this, function(a) {
    a.V && bf(this, a)
  }, this);
  var a = this.b();
  this.w.dc(this);
  this.Z(this.Ua, j);
  this.Ba().m(this, "enter", this.Jg).m(this, "highlight", this.Kg).m(this, "unhighlight", this.Og).m(this, "open", this.qk).m(this, "close", this.$j).m(a, "mousedown", this.nc).m(I(a), "mouseup", this.bk).m(a, ["mousedown", "mouseup", "mouseover", "mouseout"], this.Zj);
  this.Fc() && cf(this, j)
};
function cf(a, b) {
  var c = a.Ba(), d = a.ma();
  b ? c.m(d, "focus", a.pe).m(d, "blur", a.Cc).m(a.oe(), "key", a.Bb) : c.bb(d, "focus", a.pe).bb(d, "blur", a.Cc).bb(a.oe(), "key", a.Bb)
}
t.zb = function() {
  this.Ea(-1);
  this.wa && this.wa.fa(o);
  this.pc = o;
  af.c.zb.call(this)
};
t.l = function() {
  af.c.l.call(this);
  if(this.Db) {
    this.Db.C(), this.Db = l
  }
  this.w = this.wa = this.uc = l
};
t.Jg = s(j);
t.Kg = function(a) {
  var b = we(this, a.target);
  if(-1 < b && b != this.pa) {
    var c = df(this);
    c && c.Vb(o);
    this.pa = b;
    c = df(this);
    this.pc && c.setActive(j);
    this.$k && this.wa && c != this.wa && (c.La & 64 ? c.fa(j) : this.wa.fa(o))
  }
  ye(this.b(), "activedescendant", a.target.b().id)
};
t.Og = function(a) {
  if(a.target == df(this)) {
    this.pa = -1
  }
  ye(this.b(), "activedescendant", "")
};
t.qk = function(a) {
  if((a = a.target) && a != this.wa && a.getParent() == this) {
    this.wa && this.wa.fa(o), this.wa = a
  }
};
t.$j = function(a) {
  if(a.target == this.wa) {
    this.wa = l
  }
};
t.nc = function(a) {
  if(this.Ya) {
    this.pc = j
  }
  var b = this.ma();
  b && Kc(b) ? b.focus() : a.preventDefault()
};
t.bk = function() {
  this.pc = o
};
t.Zj = function(a) {
  var b;
  a: {
    b = a.target;
    if(this.uc) {
      for(var c = this.b();b && b !== c;) {
        var d = b.id;
        if(d in this.uc) {
          b = this.uc[d];
          break a
        }
        b = b.parentNode
      }
    }
    b = l
  }
  if(b) {
    switch(a.type) {
      case "mousedown":
        b.nc(a);
        break;
      case "mouseup":
        b.fd(a);
        break;
      case "mouseover":
        b.se(a);
        break;
      case "mouseout":
        b.re(a)
    }
  }
};
t.pe = ba();
t.Cc = function() {
  this.Ea(-1);
  this.pc = o;
  this.wa && this.wa.fa(o)
};
t.Bb = function(a) {
  return this.isEnabled() && this.W() && (0 != te(this) || this.xe) && this.Ld(a) ? (a.preventDefault(), a.stopPropagation(), j) : o
};
t.Ld = function(a) {
  var b = df(this);
  if(b && "function" == typeof b.Bb && b.Bb(a) || this.wa && this.wa != b && "function" == typeof this.wa.Bb && this.wa.Bb(a)) {
    return j
  }
  if(a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) {
    return o
  }
  switch(a.keyCode) {
    case 27:
      if(this.Fc()) {
        this.ma().blur()
      }else {
        return o
      }
      break;
    case 36:
      ef(this);
      break;
    case 35:
      ff(this);
      break;
    case 38:
      if(this.Nc == $e) {
        gf(this)
      }else {
        return o
      }
      break;
    case 37:
      if(this.Nc == Ze) {
        ve(this) ? hf(this) : gf(this)
      }else {
        return o
      }
      break;
    case 40:
      if(this.Nc == $e) {
        hf(this)
      }else {
        return o
      }
      break;
    case 39:
      if(this.Nc == Ze) {
        ve(this) ? gf(this) : hf(this)
      }else {
        return o
      }
      break;
    default:
      return o
  }
  return j
};
function bf(a, b) {
  var c = b.b(), c = c.id || (c.id = ne(b));
  if(!a.uc) {
    a.uc = {}
  }
  a.uc[c] = b
}
t.gc = function(a, b) {
  af.c.gc.call(this, a, b)
};
t.ce = function(a, b, c) {
  a.md |= 2;
  a.md |= 64;
  (this.Fc() || !this.hj) && Se(a, 32, o);
  Oe(a, o);
  af.c.ce.call(this, a, b, c);
  c && this.V && bf(this, a);
  b <= this.pa && this.pa++
};
t.removeChild = function(a, b) {
  if(a = y(a) ? qe(this, a) : a) {
    var c = we(this, a);
    -1 != c && (c == this.pa ? a.Vb(o) : c < this.pa && this.pa--);
    (c = a.b()) && c.id && cc(this.uc, c.id)
  }
  a = af.c.removeChild.call(this, a, b);
  Oe(a, j);
  return a
};
t.W = q("Ua");
t.Z = function(a, b) {
  if(b || this.Ua != a && this.dispatchEvent(a ? "show" : "hide")) {
    this.Ua = a;
    var c = this.b();
    c && (ld(c, a), this.Fc() && Ye(this.ma(), this.Ya && this.Ua), b || this.dispatchEvent(this.Ua ? "aftershow" : "afterhide"));
    return j
  }
  return o
};
t.isEnabled = q("Ya");
t.fc = function(a) {
  if(this.Ya != a && this.dispatchEvent(a ? "enable" : "disable")) {
    a ? (this.Ya = j, se(this, function(a) {
      a.ej ? delete a.ej : a.fc(j)
    })) : (se(this, function(a) {
      a.isEnabled() ? a.fc(o) : a.ej = j
    }), this.pc = this.Ya = o), this.Fc() && Ye(this.ma(), a && this.Ua)
  }
};
t.Fc = q("of");
t.Gb = function(a) {
  a != this.of && this.V && cf(this, a);
  this.of = a;
  this.Ya && this.Ua && Ye(this.ma(), a)
};
t.Ea = function(a) {
  (a = ue(this, a)) ? a.Vb(j) : -1 < this.pa && df(this).Vb(o)
};
t.Vb = function(a) {
  this.Ea(we(this, a))
};
function df(a) {
  return ue(a, a.pa)
}
function ef(a) {
  jf(a, function(a, c) {
    return(a + 1) % c
  }, te(a) - 1)
}
function ff(a) {
  jf(a, function(a, c) {
    a--;
    return 0 > a ? c - 1 : a
  }, 0)
}
function hf(a) {
  jf(a, function(a, c) {
    return(a + 1) % c
  }, a.pa)
}
function gf(a) {
  jf(a, function(a, c) {
    a--;
    return 0 > a ? c - 1 : a
  }, a.pa)
}
function jf(a, b, c) {
  for(var c = 0 > c ? we(a, a.wa) : c, d = te(a), c = b.call(a, c, d), f = 0;f <= d;) {
    var h = ue(a, c);
    if(h && a.Gh(h)) {
      a.jh(c);
      break
    }
    f++;
    c = b.call(a, c, d)
  }
}
t.Gh = function(a) {
  return a.W() && a.isEnabled() && !!(a.La & 2)
};
t.jh = function(a) {
  this.Ea(a)
};
function kf() {
  this.ig = []
}
A(kf, Ie);
ia(kf);
function lf(a, b) {
  var c = a.ig[b];
  if(!c) {
    switch(b) {
      case 0:
        c = a.s() + "-highlight";
        break;
      case 1:
        c = a.s() + "-checkbox";
        break;
      case 2:
        c = a.s() + "-content"
    }
    a.ig[b] = c
  }
  return c
}
t = kf.prototype;
t.nb = s("menuitem");
t.e = function(a) {
  var b = a.R().e("div", this.bc(a).join(" "), mf(this, a.ta, a.R()));
  nf(this, a, b, !!(a.La & 8) || !!(a.La & 16));
  return b
};
t.T = function(a) {
  return a && a.firstChild
};
t.hb = function(a, b) {
  var c = this.T(a), d = of(this, a) ? c.firstChild : l;
  kf.c.hb.call(this, a, b);
  d && !of(this, a) && c.insertBefore(d, c.firstChild || l)
};
function mf(a, b, c) {
  a = lf(a, 2);
  return c.e("div", a, b)
}
t.lh = function(a, b, c) {
  b && (xe(b, c ? "menuitemradio" : this.nb()), nf(this, a, b, c))
};
function of(a, b) {
  var c = a.T(b);
  if(c) {
    var c = c.firstChild, d = lf(a, 1);
    return!!c && !!c.className && -1 != c.className.indexOf(d)
  }
  return o
}
function nf(a, b, c, d) {
  d != of(a, c) && (Tb(c, "goog-option", d), c = a.T(c), d ? (a = lf(a, 1), c.insertBefore(b.R().e("div", a), c.firstChild || l)) : c.removeChild(c.firstChild))
}
t.pf = function(a) {
  switch(a) {
    case 2:
      return lf(this, 0);
    case 16:
    ;
    case 8:
      return"goog-option-selected";
    default:
      return kf.c.pf.call(this, a)
  }
};
t.s = s("goog-menuitem");
function pf(a, b, c, d) {
  Ne.call(this, a, d || kf.ca(), c);
  this.oa(b)
}
A(pf, Ne);
t = pf.prototype;
t.Ca = function() {
  var a = this.$g;
  return a != l ? a : this.zc()
};
t.oa = ca("$g");
t.lh = function(a) {
  Se(this, 8, a);
  this.Fa & 16 && !a && Re(this, o);
  var b = this.b();
  b && this.w.lh(this, b, a)
};
t.zc = function() {
  var a = this.ta;
  return ja(a) ? cb(a, function(a) {
    return hb(Qb(a), "goog-menuitem-accel") ? "" : Lc(a)
  }).join("") : pf.c.zc.call(this)
};
t.fd = function(a) {
  var b = this.getParent();
  if(b) {
    var c = b.Ji;
    b.Ji = l;
    if(b = c && la(a.clientX)) {
      b = new Ub(a.clientX, a.clientY), b = c == b ? j : !c || !b ? o : c.x == b.x && c.y == b.y
    }
    if(b) {
      return
    }
  }
  pf.c.fd.call(this, a)
};
Le("goog-menuitem", function() {
  return new pf(l)
});
function qf(a, b, c) {
  pf.call(this, a, b, c);
  this.lh(j)
}
A(qf, pf);
qf.prototype.rc = function() {
  return this.dispatchEvent("action")
};
Le("goog-option", function() {
  return new qf(l)
});
function rf() {
}
A(rf, Xe);
ia(rf);
rf.prototype.nb = s("toolbar");
rf.prototype.s = s("goog-toolbar");
rf.prototype.hi = function() {
  return Ze
};
function sf(a, b, c) {
  af.call(this, b, a || rf.ca(), c)
}
A(sf, af);
function tf() {
}
A(tf, Ie);
ia(tf);
t = tf.prototype;
t.nb = s("button");
t.Qe = function(a, b, c) {
  16 == b ? ye(a, "pressed", c) : tf.c.Qe.call(this, a, b, c)
};
t.e = function(a) {
  var b = tf.c.e.call(this, a), c = a.Bc();
  c && this.Xb(b, c);
  (c = a.Ca()) && this.oa(b, c);
  a.La & 16 && this.Qe(b, 16, o);
  return b
};
t.Ca = ha;
t.oa = ha;
t.Bc = function(a) {
  return a.title
};
t.Xb = function(a, b) {
  if(a) {
    a.title = b || ""
  }
};
t.s = s("goog-button");
function uf() {
}
A(uf, tf);
ia(uf);
t = uf.prototype;
t.nb = ba();
t.e = function(a) {
  Oe(a, o);
  a.ag &= -256;
  Se(a, 32, o);
  return a.R().e("button", {"class":this.bc(a).join(" "), disabled:!a.isEnabled(), title:a.Bc() || "", value:a.Ca() || ""}, a.zc() || "")
};
t.dc = function(a) {
  a.Ba().m(a.b(), "click", a.rc)
};
t.Pf = ha;
t.Rc = ha;
t.Fc = function(a) {
  return a.isEnabled()
};
t.Gb = ha;
t.pb = function(a, b, c) {
  uf.c.pb.call(this, a, b, c);
  if((a = a.b()) && 1 == b) {
    a.disabled = c
  }
};
t.Ca = function(a) {
  return a.value
};
t.oa = function(a, b) {
  if(a) {
    a.value = b
  }
};
t.Qe = ha;
function vf(a, b, c) {
  Ne.call(this, a, b || uf.ca(), c)
}
A(vf, Ne);
t = vf.prototype;
t.Ca = q("cj");
t.oa = function(a) {
  this.cj = a;
  this.w.oa(this.b(), a)
};
t.Bc = q("Oe");
t.Xb = function(a) {
  this.Oe = a;
  this.w.Xb(this.b(), a)
};
t.Ti = ca("Oe");
t.l = function() {
  vf.c.l.call(this);
  delete this.cj;
  delete this.Oe
};
t.ea = function() {
  vf.c.ea.call(this);
  if(this.La & 32) {
    var a = this.ma();
    a && this.Ba().m(a, "keyup", this.Ld)
  }
};
t.Ld = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.rc(a) : 32 == a.keyCode
};
Le("goog-button", function() {
  return new vf(l)
});
function wf() {
}
A(wf, tf);
ia(wf);
t = wf.prototype;
t.e = function(a) {
  var b = {"class":"goog-inline-block " + this.bc(a).join(" "), title:a.Bc() || ""};
  return a.R().e("div", b, this.sg(a.ta, a.R()))
};
t.nb = s("button");
t.T = function(a) {
  return a && a.firstChild.firstChild
};
t.sg = function(a, b) {
  return b.e("div", "goog-inline-block " + (this.s() + "-outer-box"), b.e("div", "goog-inline-block " + (this.s() + "-inner-box"), a))
};
t.s = s("goog-custom-button");
function xf() {
}
A(xf, wf);
ia(xf);
xf.prototype.s = s("goog-toolbar-button");
function yf(a, b, c) {
  vf.call(this, a, b || xf.ca(), c)
}
A(yf, vf);
Le("goog-toolbar-button", function() {
  return new yf(l)
});
var zf = {aliceblue:"#f0f8ff", antiquewhite:"#faebd7", aqua:"#00ffff", aquamarine:"#7fffd4", azure:"#f0ffff", beige:"#f5f5dc", bisque:"#ffe4c4", black:"#000000", blanchedalmond:"#ffebcd", blue:"#0000ff", blueviolet:"#8a2be2", brown:"#a52a2a", burlywood:"#deb887", cadetblue:"#5f9ea0", chartreuse:"#7fff00", chocolate:"#d2691e", coral:"#ff7f50", cornflowerblue:"#6495ed", cornsilk:"#fff8dc", crimson:"#dc143c", cyan:"#00ffff", darkblue:"#00008b", darkcyan:"#008b8b", darkgoldenrod:"#b8860b", darkgray:"#a9a9a9", 
darkgreen:"#006400", darkgrey:"#a9a9a9", darkkhaki:"#bdb76b", darkmagenta:"#8b008b", darkolivegreen:"#556b2f", darkorange:"#ff8c00", darkorchid:"#9932cc", darkred:"#8b0000", darksalmon:"#e9967a", darkseagreen:"#8fbc8f", darkslateblue:"#483d8b", darkslategray:"#2f4f4f", darkslategrey:"#2f4f4f", darkturquoise:"#00ced1", darkviolet:"#9400d3", deeppink:"#ff1493", deepskyblue:"#00bfff", dimgray:"#696969", dimgrey:"#696969", dodgerblue:"#1e90ff", firebrick:"#b22222", floralwhite:"#fffaf0", forestgreen:"#228b22", 
fuchsia:"#ff00ff", gainsboro:"#dcdcdc", ghostwhite:"#f8f8ff", gold:"#ffd700", goldenrod:"#daa520", gray:"#808080", green:"#008000", greenyellow:"#adff2f", grey:"#808080", honeydew:"#f0fff0", hotpink:"#ff69b4", indianred:"#cd5c5c", indigo:"#4b0082", ivory:"#fffff0", khaki:"#f0e68c", lavender:"#e6e6fa", lavenderblush:"#fff0f5", lawngreen:"#7cfc00", lemonchiffon:"#fffacd", lightblue:"#add8e6", lightcoral:"#f08080", lightcyan:"#e0ffff", lightgoldenrodyellow:"#fafad2", lightgray:"#d3d3d3", lightgreen:"#90ee90", 
lightgrey:"#d3d3d3", lightpink:"#ffb6c1", lightsalmon:"#ffa07a", lightseagreen:"#20b2aa", lightskyblue:"#87cefa", lightslategray:"#778899", lightslategrey:"#778899", lightsteelblue:"#b0c4de", lightyellow:"#ffffe0", lime:"#00ff00", limegreen:"#32cd32", linen:"#faf0e6", magenta:"#ff00ff", maroon:"#800000", mediumaquamarine:"#66cdaa", mediumblue:"#0000cd", mediumorchid:"#ba55d3", mediumpurple:"#9370d8", mediumseagreen:"#3cb371", mediumslateblue:"#7b68ee", mediumspringgreen:"#00fa9a", mediumturquoise:"#48d1cc", 
mediumvioletred:"#c71585", midnightblue:"#191970", mintcream:"#f5fffa", mistyrose:"#ffe4e1", moccasin:"#ffe4b5", navajowhite:"#ffdead", navy:"#000080", oldlace:"#fdf5e6", olive:"#808000", olivedrab:"#6b8e23", orange:"#ffa500", orangered:"#ff4500", orchid:"#da70d6", palegoldenrod:"#eee8aa", palegreen:"#98fb98", paleturquoise:"#afeeee", palevioletred:"#d87093", papayawhip:"#ffefd5", peachpuff:"#ffdab9", peru:"#cd853f", pink:"#ffc0cb", plum:"#dda0dd", powderblue:"#b0e0e6", purple:"#800080", red:"#ff0000", 
rosybrown:"#bc8f8f", royalblue:"#4169e1", saddlebrown:"#8b4513", salmon:"#fa8072", sandybrown:"#f4a460", seagreen:"#2e8b57", seashell:"#fff5ee", sienna:"#a0522d", silver:"#c0c0c0", skyblue:"#87ceeb", slateblue:"#6a5acd", slategray:"#708090", slategrey:"#708090", snow:"#fffafa", springgreen:"#00ff7f", steelblue:"#4682b4", tan:"#d2b48c", teal:"#008080", thistle:"#d8bfd8", tomato:"#ff6347", turquoise:"#40e0d0", violet:"#ee82ee", wheat:"#f5deb3", white:"#ffffff", whitesmoke:"#f5f5f5", yellow:"#ffff00", 
yellowgreen:"#9acd32"};
function Af(a) {
  var b = {}, a = "" + a, c = "#" == a.charAt(0) ? a : "#" + a;
  if(Bf.test(c)) {
    return b.vf = Cf(c), b.type = "hex", b
  }
  a: {
    var d = a.match(Df);
    if(d) {
      var c = Number(d[1]), f = Number(d[2]), d = Number(d[3]);
      if(0 <= c && 255 >= c && 0 <= f && 255 >= f && 0 <= d && 255 >= d) {
        c = [c, f, d];
        break a
      }
    }
    c = []
  }
  if(c.length) {
    return f = c[0], a = c[1], c = c[2], f = Number(f), a = Number(a), c = Number(c), (isNaN(f) || 0 > f || 255 < f || isNaN(a) || 0 > a || 255 < a || isNaN(c) || 0 > c || 255 < c) && e(Error('"(' + f + "," + a + "," + c + '") is not a valid RGB color')), f = Ef(f.toString(16)), a = Ef(a.toString(16)), c = Ef(c.toString(16)), b.vf = "#" + f + a + c, b.type = "rgb", b
  }
  if(zf && (c = zf[a.toLowerCase()])) {
    return b.vf = c, b.type = "named", b
  }
  e(Error(a + " is not a valid color string"))
}
var Ff = /#(.)(.)(.)/;
function Cf(a) {
  Bf.test(a) || e(Error("'" + a + "' is not a valid hex color"));
  4 == a.length && (a = a.replace(Ff, "#$1$1$2$2$3$3"));
  return a.toLowerCase()
}
var Bf = /^#(?:[0-9a-f]{3}){1,2}$/i, Df = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
function Ef(a) {
  return 1 == a.length ? "0" + a : a
}
;function Gf() {
}
A(Gf, Ie);
ia(Gf);
Gf.prototype.s = s("goog-menuheader");
function Hf(a, b, c) {
  Ne.call(this, a, c || Gf.ca(), b);
  Se(this, 1, o);
  Se(this, 2, o);
  Se(this, 4, o);
  Se(this, 32, o);
  this.Fa = 1
}
A(Hf, Ne);
Le("goog-menuheader", function() {
  return new Hf(l)
});
function If() {
}
A(If, Xe);
ia(If);
If.prototype.nb = s("menu");
If.prototype.ad = function(a, b) {
  return Bc(a.b(), b)
};
If.prototype.s = s("goog-menu");
If.prototype.dc = function(a) {
  If.c.dc.call(this, a);
  ye(a.b(), "haspopup", "true")
};
Le("goog-menuseparator", function() {
  return new We
});
function Jf(a, b) {
  af.call(this, $e, b || If.ca(), a);
  this.Gb(o)
}
A(Jf, af);
t = Jf.prototype;
t.Zf = j;
t.ij = o;
t.s = function() {
  return this.w.s()
};
t.ad = function(a) {
  if(this.w.ad(this, a)) {
    return j
  }
  for(var b = 0, c = te(this);b < c;b++) {
    var d = ue(this, b);
    if("function" == typeof d.ad && d.ad(a)) {
      return j
    }
  }
  return o
};
t.Hb = function(a) {
  this.gc(a, j)
};
t.sd = function(a, b) {
  this.ce(a, b, j)
};
t.Id = function(a) {
  return ue(this, a)
};
t.qf = function() {
  return te(this)
};
t.Qc = function(a, b) {
  var c = this.W();
  c || ld(this.b(), j);
  var d = this.b(), f = a, h = b, i = fd(d);
  if(f instanceof Ub) {
    h = f.y, f = f.x
  }
  ad(d, d.offsetLeft + (f - i.x), d.offsetTop + (h - i.y));
  c || ld(this.b(), o)
};
t.Z = function(a, b, c) {
  (b = Jf.c.Z.call(this, a, b)) && a && this.V && this.Zf && this.ma().focus();
  this.Ji = a && c && la(c.clientX) ? new Ub(c.clientX, c.clientY) : l;
  return b
};
t.Jg = function(a) {
  this.Zf && this.ma().focus();
  return Jf.c.Jg.call(this, a)
};
t.Gh = function(a) {
  return(this.ij || a.isEnabled()) && a.W() && !!(a.La & 2)
};
function Kf() {
}
A(Kf, wf);
ia(Kf);
if(D) {
  Kf.prototype.hb = function(a, b) {
    var c = Kf.c.T.call(this, a && a.firstChild);
    c && yc(this.createCaption(b, H(a)), c)
  }
}
Kf.prototype.T = function(a) {
  a = Kf.c.T.call(this, a && a.firstChild);
  if(D && a && a.__goog_wrapper_div) {
    a = a.firstChild
  }
  return a
};
Kf.prototype.sg = function(a, b) {
  return Kf.c.sg.call(this, [this.createCaption(a, b), b.e("div", "goog-inline-block " + (this.s() + "-dropdown"), "\u00a0")], b)
};
Kf.prototype.createCaption = function(a, b) {
  return Lf(a, this.s(), b)
};
function Lf(a, b, c) {
  return c.e("div", "goog-inline-block " + (b + "-caption"), a)
}
Kf.prototype.s = s("goog-menu-button");
function Mf() {
}
A(Mf, Kf);
ia(Mf);
Mf.prototype.createCaption = function(a, b) {
  return Mf.c.createCaption.call(this, Nf(a, b), b)
};
function Nf(a, b) {
  return b.e("div", "goog-color-menu-button-indicator", a)
}
Mf.prototype.oa = function(a, b) {
  a && Of(this.T(a), b)
};
function Of(a, b) {
  if(a && a.firstChild) {
    var c;
    try {
      c = Af(b).vf
    }catch(d) {
      c = l
    }
    a.firstChild.style.borderBottomColor = c || (C ? "" : "transparent")
  }
}
Mf.prototype.dc = function(a) {
  this.oa(a.b(), a.Ca());
  Rb(a.b(), "goog-color-menu-button");
  Mf.c.dc.call(this, a)
};
function Pf() {
}
A(Pf, Ie);
ia(Pf);
var Qf = 0;
Pf.prototype.e = function(a) {
  var b = this.bc(a);
  return a.R().e("div", b ? b.join(" ") : l, Rf(this, a.ta, a.Fg(), a.R()))
};
function Rf(a, b, c, d) {
  for(var f = [], h = 0, i = 0;h < c.height;h++) {
    for(var k = [], m = 0;m < c.width;m++) {
      var n = b && b[i++];
      k.push(Sf(a, n, d))
    }
    f.push(d.e("tr", a.s() + "-row", k))
  }
  return a.tg(f, d)
}
Pf.prototype.tg = function(a, b) {
  var c = b.e("table", this.s() + "-table", b.e("tbody", this.s() + "-body", a));
  c.cellSpacing = 0;
  c.cellPadding = 0;
  xe(c, "grid");
  return c
};
function Sf(a, b, c) {
  a = c.e("td", {"class":a.s() + "-cell", id:a.s() + "-cell-" + Qf++}, b);
  xe(a, "gridcell");
  return a
}
Pf.prototype.hb = function(a, b) {
  if(a) {
    var c = mc(document, "tbody", this.s() + "-body", a)[0];
    if(c) {
      var d = 0;
      ab(c.rows, function(a) {
        ab(a.cells, function(a) {
          vc(a);
          if(b) {
            var c = b[d++];
            c && a.appendChild(c)
          }
        })
      });
      if(d < b.length) {
        for(var f = [], h = H(a), i = c.rows[0].cells.length;d < b.length;) {
          var k = b[d++];
          f.push(Sf(this, k, h));
          if(f.length == i) {
            k = h.e("tr", this.s() + "-row", f), c.appendChild(k), f.length = 0
          }
        }
        if(0 < f.length) {
          for(;f.length < i;) {
            f.push(Sf(this, "", h))
          }
          k = h.e("tr", this.s() + "-row", f);
          c.appendChild(k)
        }
      }
    }
    od(a, j, D)
  }
};
function Tf(a, b, c) {
  for(b = b.b();c && 1 == c.nodeType && c != b;) {
    if("TD" == c.tagName && hb(Qb(c), a.s() + "-cell")) {
      return c.firstChild
    }
    c = c.parentNode
  }
  return l
}
function Uf(a, b, c, d) {
  if(c) {
    c = c.parentNode, Tb(c, a.s() + "-cell-hover", d), ye(b.b().firstChild, "activedescendent", c.id)
  }
}
Pf.prototype.s = s("goog-palette");
function Vf(a) {
  this.kd = [];
  Wf(this, a)
}
A(Vf, ie);
t = Vf.prototype;
t.Pc = l;
t.ih = l;
t.qf = function() {
  return this.kd.length
};
t.Id = function(a) {
  return this.kd[a] || l
};
function Wf(a, b) {
  b && (ab(b, function(a) {
    this.Wd(a, o)
  }, a), mb(a.kd, b))
}
t.Hb = function(a) {
  this.sd(a, this.qf())
};
t.sd = function(a, b) {
  a && (this.Wd(a, o), nb(this.kd, b, 0, a))
};
t.Ac = q("Pc");
t.Wb = function(a) {
  if(a != this.Pc) {
    this.Wd(this.Pc, o), this.Pc = a, this.Wd(a, j)
  }
  this.dispatchEvent("select")
};
t.Jd = function() {
  return this.Pc ? Za(this.kd, this.Pc) : -1
};
t.Rf = function(a) {
  this.Wb(this.Id(a))
};
t.clear = function() {
  var a = this.kd;
  if(!ja(a)) {
    for(var b = a.length - 1;0 <= b;b--) {
      delete a[b]
    }
  }
  a.length = 0;
  this.Pc = l
};
t.l = function() {
  Vf.c.l.call(this);
  delete this.kd;
  this.Pc = l
};
t.Wd = function(a, b) {
  a && ("function" == typeof this.ih ? this.ih(a, b) : "function" == typeof a.Xd && a.Xd(b))
};
function Xf(a, b, c) {
  Ne.call(this, a, b || Pf.ca(), c)
}
A(Xf, Ne);
t = Xf.prototype;
t.ya = l;
t.pa = -1;
t.u = l;
t.l = function() {
  Xf.c.l.call(this);
  if(this.u) {
    this.u.C(), this.u = l
  }
  this.ya = l
};
t.Qf = function(a) {
  Xf.c.Qf.call(this, a);
  Yf(this);
  this.u ? (this.u.clear(), Wf(this.u, a)) : (this.u = new Vf(a), this.u.ih = ua(this.Wd, this), this.Ba().m(this.u, "select", this.Md));
  this.pa = -1
};
t.zc = s(l);
t.se = function(a) {
  Xf.c.se.call(this, a);
  var b = Tf(this.w, this, a.target);
  if((!b || !a.relatedTarget || !Bc(b, a.relatedTarget)) && b != Zf(this)) {
    a = this.ta, this.Ea(a ? Za(a, b) : -1)
  }
};
t.re = function(a) {
  Xf.c.re.call(this, a);
  var b = Tf(this.w, this, a.target);
  (!b || !a.relatedTarget || !Bc(b, a.relatedTarget)) && b == Zf(this) && Uf(this.w, this, b, o)
};
t.nc = function(a) {
  Xf.c.nc.call(this, a);
  if(this.Ec() && (a = Tf(this.w, this, a.target), a != Zf(this))) {
    var b = this.ta;
    this.Ea(b ? Za(b, a) : -1)
  }
};
t.rc = function() {
  var a = Zf(this);
  return a ? (this.Wb(a), this.dispatchEvent("action")) : o
};
t.Bb = function(a) {
  var b = this.ta, b = b ? b.length : 0, c = this.ya.width;
  if(0 == b || !this.isEnabled()) {
    return o
  }
  if(13 == a.keyCode || 32 == a.keyCode) {
    return this.rc(a)
  }
  if(36 == a.keyCode) {
    return this.Ea(0), j
  }
  if(35 == a.keyCode) {
    return this.Ea(b - 1), j
  }
  var d = 0 > this.pa ? this.Jd() : this.pa;
  switch(a.keyCode) {
    case 37:
      -1 == d && (d = b);
      if(0 < d) {
        return this.Ea(d - 1), a.preventDefault(), j
      }
      break;
    case 39:
      if(d < b - 1) {
        return this.Ea(d + 1), a.preventDefault(), j
      }
      break;
    case 38:
      -1 == d && (d = b + c - 1);
      if(d >= c) {
        return this.Ea(d - c), a.preventDefault(), j
      }
      break;
    case 40:
      if(-1 == d && (d = -c), d < b - c) {
        return this.Ea(d + c), a.preventDefault(), j
      }
  }
  return o
};
t.Md = ba();
t.Fg = q("ya");
function Zf(a) {
  var b = a.ta;
  return b && b[a.pa]
}
t.Ea = function(a) {
  if(a != this.pa) {
    $f(this, this.pa, o), this.pa = a, $f(this, a, j)
  }
};
t.Jd = function() {
  return this.u ? this.u.Jd() : -1
};
t.Ac = function() {
  return this.u ? this.u.Ac() : l
};
t.Rf = function(a) {
  this.u && this.u.Rf(a)
};
t.Wb = function(a) {
  this.u && this.u.Wb(a)
};
function $f(a, b, c) {
  if(a.b()) {
    var d = a.ta;
    d && 0 <= b && b < d.length && Uf(a.w, a, d[b], c)
  }
}
t.Wd = function(a, b) {
  this.b() && a && Tb(a.parentNode, this.w.s() + "-cell-selected", b)
};
function Yf(a) {
  var b = a.ta;
  if(b) {
    if(a.ya && a.ya.width) {
      if(b = Math.ceil(b.length / a.ya.width), !la(a.ya.height) || a.ya.height < b) {
        a.ya.height = b
      }
    }else {
      b = Math.ceil(Math.sqrt(b.length)), a.ya = new Wb(b, b)
    }
  }else {
    a.ya = new Wb(0, 0)
  }
}
;function ag(a, b, c) {
  this.$e = a || [];
  Xf.call(this, l, b || Pf.ca(), c);
  this.$e = this.$e;
  this.Ef = l;
  this.hb(bg(this))
}
A(ag, Xf);
ag.prototype.Ef = l;
ag.prototype.Eg = function() {
  var a = this.Ac();
  return a ? (a = a.style[Ua("background-color")] || "", cg(a)) : l
};
ag.prototype.He = function(a) {
  a = cg(a);
  if(!this.Ef) {
    this.Ef = cb(this.$e, function(a) {
      return cg(a)
    })
  }
  this.Rf(a ? Za(this.Ef, a) : -1)
};
function bg(a) {
  return cb(a.$e, function(a) {
    var c = this.R().e("div", {"class":this.w.s() + "-colorswatch", style:"background-color:" + a});
    "#" == a.charAt(0) && (a = Cf(a), a = "RGB (" + [parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)].join(", ") + ")");
    c.title = a;
    return c
  }, a)
}
function cg(a) {
  if(a) {
    try {
      return Af(a).vf
    }catch(b) {
    }
  }
  return l
}
;function dg(a, b) {
  this.jd = a || 1;
  this.Me = b || eg;
  this.eg = ua(this.rl, this);
  this.Xg = wa()
}
A(dg, ie);
dg.prototype.enabled = o;
var eg = u.window;
t = dg.prototype;
t.qa = l;
t.setInterval = function(a) {
  this.jd = a;
  this.qa && this.enabled ? (this.stop(), this.start()) : this.qa && this.stop()
};
t.rl = function() {
  if(this.enabled) {
    var a = wa() - this.Xg;
    if(0 < a && a < 0.8 * this.jd) {
      this.qa = this.Me.setTimeout(this.eg, this.jd - a)
    }else {
      if(this.dispatchEvent(fg), this.enabled) {
        this.qa = this.Me.setTimeout(this.eg, this.jd), this.Xg = wa()
      }
    }
  }
};
t.start = function() {
  this.enabled = j;
  if(!this.qa) {
    this.qa = this.Me.setTimeout(this.eg, this.jd), this.Xg = wa()
  }
};
t.stop = function() {
  this.enabled = o;
  if(this.qa) {
    this.Me.clearTimeout(this.qa), this.qa = l
  }
};
t.l = function() {
  dg.c.l.call(this);
  this.stop();
  delete this.Me
};
var fg = "tick";
function gg(a, b, c) {
  ma(a) ? c && (a = ua(a, c)) : a && "function" == typeof a.handleEvent ? a = ua(a.handleEvent, a) : e(Error("Invalid listener argument"));
  return 2147483647 < b ? -1 : eg.setTimeout(a, b || 0)
}
;function hg(a, b, c, d, f, h, i, k) {
  var m, n = c.offsetParent;
  if(n) {
    var p = "HTML" == n.tagName || "BODY" == n.tagName;
    if(!p || "static" != $c(n, "position")) {
      m = fd(n), p || (m = Vb(m, new Ub(n.scrollLeft, n.scrollTop)))
    }
  }
  n = jd(a);
  if(p = ed(a)) {
    var r = new Wc(p.left, p.top, p.right - p.left, p.bottom - p.top), p = Math.max(n.left, r.left), x = Math.min(n.left + n.width, r.left + r.width);
    if(p <= x) {
      var v = Math.max(n.top, r.top), r = Math.min(n.top + n.height, r.top + r.height);
      if(v <= r) {
        n.left = p, n.top = v, n.width = x - p, n.height = r - v
      }
    }
  }
  p = H(a);
  v = H(c);
  if(p.ba() != v.ba()) {
    var x = p.ba().body, v = v.Da(), r = new Ub(0, 0), F = rc(I(x)), na = x;
    do {
      var ea;
      if(F == v) {
        ea = fd(na)
      }else {
        var V = na;
        ea = new Ub;
        if(1 == V.nodeType) {
          if(V.getBoundingClientRect) {
            V = cd(V), ea.x = V.left, ea.y = V.top
          }else {
            var Qa = Rc(H(V)), V = fd(V);
            ea.x = V.x - Qa.x;
            ea.y = V.y - Qa.y
          }
        }else {
          var Qa = ma(V.ei), gb = V;
          V.targetTouches ? gb = V.targetTouches[0] : Qa && V.Aa.targetTouches && (gb = V.Aa.targetTouches[0]);
          ea.x = gb.clientX;
          ea.y = gb.clientY
        }
      }
      r.x += ea.x;
      r.y += ea.y
    }while(F && F != v && (na = F.frameElement) && (F = F.parent));
    x = Vb(r, fd(x));
    C && !Qc(p) && (x = Vb(x, Rc(p)));
    n.left += x.x;
    n.top += x.y
  }
  a = (b & 4 && gd(a) ? b ^ 2 : b) & -5;
  b = new Ub(a & 2 ? n.left + n.width : n.left, a & 1 ? n.top + n.height : n.top);
  m && (b = Vb(b, m));
  f && (b.x += (a & 2 ? -1 : 1) * f.x, b.y += (a & 1 ? -1 : 1) * f.y);
  var K;
  if(i && (K = ed(c)) && m) {
    K.top = Math.max(0, K.top - m.y), K.right -= m.x, K.bottom -= m.y, K.left = Math.max(0, K.left - m.x)
  }
  a: {
    m = K;
    f = b.Ra();
    K = 0;
    a = (d & 4 && gd(c) ? d ^ 2 : d) & -5;
    d = id(c);
    k = k ? k.Ra() : d;
    if(h || 0 != a) {
      a & 2 ? f.x -= k.width + (h ? h.right : 0) : h && (f.x += h.left), a & 1 ? f.y -= k.height + (h ? h.bottom : 0) : h && (f.y += h.top)
    }
    if(i) {
      if(m) {
        h = f;
        K = 0;
        if(h.x < m.left && i & 1) {
          h.x = m.left, K |= 1
        }
        h.x < m.left && h.x + k.width > m.right && i & 16 && (k.width -= h.x + k.width - m.right, K |= 4);
        if(h.x + k.width > m.right && i & 1) {
          h.x = Math.max(m.right - k.width, m.left), K |= 1
        }
        i & 2 && (K |= (h.x < m.left ? 16 : 0) | (h.x + k.width > m.right ? 32 : 0));
        if(h.y < m.top && i & 4) {
          h.y = m.top, K |= 2
        }
        h.y >= m.top && h.y + k.height > m.bottom && i & 32 && (k.height -= h.y + k.height - m.bottom, K |= 8);
        if(h.y + k.height > m.bottom && i & 4) {
          h.y = Math.max(m.bottom - k.height, m.top), K |= 2
        }
        i & 8 && (K |= (h.y < m.top ? 64 : 0) | (h.y + k.height > m.bottom ? 128 : 0));
        i = K
      }else {
        i = 256
      }
      K = i;
      if(K & 496) {
        c = K;
        break a
      }
    }
    ad(c, f);
    Xb(d, k) || hd(c, k);
    c = K
  }
  return c
}
;function ig() {
}
ig.prototype.Ja = ba();
function jg(a, b) {
  this.element = a;
  this.zd = b
}
A(jg, ig);
jg.prototype.Ja = function(a, b, c) {
  hg(this.element, this.zd, a, b, g, c)
};
function kg(a, b, c) {
  jg.call(this, a, b);
  this.gj = c
}
A(kg, jg);
kg.prototype.Ja = function(a, b, c, d) {
  var f = hg(this.element, this.zd, a, b, l, c, 10, d);
  if(f & 496) {
    var h = this.zd, i = b;
    f & 48 && (h ^= 2, i ^= 2);
    f & 192 && (h ^= 1, i ^= 1);
    f = hg(this.element, h, a, i, l, c, 10, d);
    f & 496 && (this.gj ? hg(this.element, this.zd, a, b, l, c, 5, d) : hg(this.element, this.zd, a, b, l, c, 0, d))
  }
};
function lg(a, b, c, d) {
  kg.call(this, a, b, c);
  this.gl = d
}
A(lg, kg);
lg.prototype.Ja = function(a, b, c, d) {
  this.gl ? hg(this.element, this.zd, a, b, l, c, 33, d) : lg.c.Ja.call(this, a, b, c, d)
};
function mg(a, b, c, d) {
  vf.call(this, a, c || Kf.ca(), d);
  Se(this, 64, j);
  b && this.Ge(b);
  this.qa = new dg(500)
}
A(mg, vf);
t = mg.prototype;
t.zh = j;
t.hh = o;
t.Sg = o;
t.fl = o;
t.ea = function() {
  mg.c.ea.call(this);
  this.v && ng(this, this.v, j);
  ye(this.b(), "haspopup", "true")
};
t.zb = function() {
  mg.c.zb.call(this);
  if(this.v) {
    this.fa(o);
    this.v.zb();
    ng(this, this.v, o);
    var a = this.v.b();
    a && J(a)
  }
};
t.l = function() {
  mg.c.l.call(this);
  this.v && (this.v.C(), delete this.v);
  delete this.dl;
  this.qa.C()
};
t.nc = function(a) {
  mg.c.nc.call(this, a);
  if(this.Ec() && (this.fa(!this.we(), a), this.v)) {
    this.v.pc = this.we()
  }
};
t.fd = function(a) {
  mg.c.fd.call(this, a);
  if(this.v && !this.Ec()) {
    this.v.pc = o
  }
};
t.rc = function() {
  this.setActive(o);
  return j
};
t.ak = function(a) {
  this.v && this.v.W() && !this.ad(a.target) && this.fa(o)
};
t.ad = function(a) {
  return a && Bc(this.b(), a) || this.v && this.v.ad(a) || o
};
t.Ld = function(a) {
  if(32 == a.keyCode) {
    if(a.preventDefault(), "keyup" != a.type) {
      return o
    }
  }else {
    if("key" != a.type) {
      return o
    }
  }
  if(this.v && this.v.W()) {
    var b = this.v.Bb(a);
    return 27 == a.keyCode ? (this.fa(o), j) : b
  }
  return 40 == a.keyCode || 38 == a.keyCode || 32 == a.keyCode ? (this.fa(j), j) : o
};
t.qe = function() {
  this.fa(o)
};
t.jk = function() {
  this.Ec() || this.fa(o)
};
t.Cc = function(a) {
  this.Sg || this.fa(o);
  mg.c.Cc.call(this, a)
};
function og(a) {
  a.v || a.Ge(new Jf(a.R()));
  return a.v || l
}
t.Ge = function(a) {
  var b = this.v;
  if(a != b && (b && (this.fa(o), this.V && ng(this, b, o), delete this.v), a)) {
    this.v = a;
    pe(a, this);
    a.Z(o);
    var c = this.Sg;
    (a.Zf = c) && a.Gb(j);
    this.V && ng(this, a, j)
  }
  return b
};
t.Hb = function(a) {
  og(this).gc(a, j)
};
t.sd = function(a, b) {
  og(this).ce(a, b, j)
};
t.Id = function(a) {
  return this.v ? ue(this.v, a) : l
};
t.qf = function() {
  return this.v ? te(this.v) : 0
};
t.Z = function(a, b) {
  var c = mg.c.Z.call(this, a, b);
  c && !this.W() && this.fa(o);
  return c
};
t.fc = function(a) {
  mg.c.fc.call(this, a);
  this.isEnabled() || this.fa(o)
};
t.fa = function(a, b) {
  mg.c.fa.call(this, a);
  if(this.v && !!(this.Fa & 64) == a) {
    if(a) {
      this.v.V || (this.fl ? this.v.$a(this.b().parentNode) : this.v.$a()), this.pd = ed(this.b()), this.Yc = jd(this.b()), pg(this), this.v.Ea(-1)
    }else {
      if(this.setActive(o), this.v.pc = o, this.b() && ye(this.b(), "activedescendant", ""), this.If != l) {
        this.If = g;
        var c = this.v.b();
        c && hd(c, "", "")
      }
    }
    this.v.Z(a, o, b);
    var c = this.Ba(), d = a ? c.m : c.bb;
    d.call(c, this.R().ba(), "mousedown", this.ak, j);
    this.Sg && d.call(c, this.v, "blur", this.jk);
    d.call(c, this.qa, fg, this.Xk);
    a ? this.qa.start() : this.qa.stop()
  }
};
function pg(a) {
  if(a.v.V) {
    var b = new lg(a.dl || a.b(), a.zh ? 5 : 7, !a.hh, a.hh), c = a.v.b();
    if(!a.v.W()) {
      c.style.visibility = "hidden", ld(c, j)
    }
    if(!a.If && a.hh) {
      a.If = id(c)
    }
    b.Ja(c, a.zh ? 4 : 6, l, a.If);
    if(!a.v.W()) {
      ld(c, o), c.style.visibility = "visible"
    }
  }
}
t.Xk = function() {
  var a = jd(this.b()), b = ed(this.b());
  if(!(this.Yc == a || (!this.Yc || !a ? 0 : this.Yc.left == a.left && this.Yc.width == a.width && this.Yc.top == a.top && this.Yc.height == a.height)) || !(this.pd == b || (!this.pd || !b ? 0 : this.pd.top == b.top && this.pd.right == b.right && this.pd.bottom == b.bottom && this.pd.left == b.left))) {
    this.Yc = a, this.pd = b, pg(this)
  }
};
function ng(a, b, c) {
  var d = a.Ba(), c = c ? d.m : d.bb;
  c.call(d, b, "action", a.qe);
  c.call(d, b, "highlight", a.Kg);
  c.call(d, b, "unhighlight", a.Og)
}
t.Kg = function(a) {
  ye(this.b(), "activedescendant", a.target.b().id)
};
t.Og = function() {
  df(this.v) || ye(this.b(), "activedescendant", "")
};
Le("goog-menu-button", function() {
  return new mg(l)
});
function qg(a, b, c, d) {
  mg.call(this, a, b, c || Mf.ca(), d)
}
A(qg, mg);
var rg = {Ll:"#000,#444,#666,#999,#ccc,#eee,#f3f3f3,#fff".split(","), Zl:"#f00,#f90,#ff0,#0f0,#0ff,#00f,#90f,#f0f".split(","), Xl:"#f4cccc,#fce5cd,#fff2cc,#d9ead3,#d0e0e3,#cfe2f3,#d9d2e9,#ead1dc,#ea9999,#f9cb9c,#ffe599,#b6d7a8,#a2c4c9,#9fc5e8,#b4a7d6,#d5a6bd,#e06666,#f6b26b,#ffd966,#93c47d,#76a5af,#6fa8dc,#8e7cc3,#c27ba0,#cc0000,#e69138,#f1c232,#6aa84f,#45818e,#3d85c6,#674ea7,#a64d79,#990000,#b45f06,#bf9000,#38761d,#134f5c,#0b5394,#351c75,#741b47,#660000,#783f04,#7f6000,#274e13,#0c343d,#073763,#20124d,#4c1130".split(",")};
function sg(a) {
  var b = new Jf(a);
  Yb(rg, function(c) {
    c = new ag(c, l, a);
    c.b() && e(Error("Component already rendered"));
    c.ya = la(8) ? new Wb(8, g) : 8;
    Yf(c);
    b.gc(c, j)
  });
  return b
}
t = qg.prototype;
t.Eg = function() {
  return this.Ca()
};
t.He = function(a) {
  this.oa(a)
};
t.oa = function(a) {
  for(var b = 0, c;c = this.Id(b);b++) {
    "function" == typeof c.He && c.He(a)
  }
  qg.c.oa.call(this, a)
};
t.qe = function(a) {
  "function" == typeof a.target.Eg ? this.oa(a.target.Eg()) : "none" == a.target.Ca() && this.oa(l);
  qg.c.qe.call(this, a);
  a.stopPropagation();
  this.dispatchEvent("action")
};
t.fa = function(a, b) {
  a && 0 == this.qf() && (this.Ge(sg(this.R())), this.oa(this.Ca()));
  qg.c.fa.call(this, a, b)
};
Le("goog-color-menu-button", function() {
  return new qg(l)
});
function tg() {
}
A(tg, Kf);
ia(tg);
tg.prototype.s = s("goog-toolbar-menu-button");
function ug() {
}
A(ug, tg);
ia(ug);
ug.prototype.createCaption = function(a, b) {
  return Lf(Nf(a, b), this.s(), b)
};
ug.prototype.oa = function(a, b) {
  a && Of(this.T(a), b)
};
ug.prototype.dc = function(a) {
  this.oa(a.b(), a.Ca());
  Rb(a.b(), "goog-toolbar-color-menu-button");
  ug.c.dc.call(this, a)
};
function vg(a, b, c, d) {
  qg.call(this, a, b, c || ug.ca(), d)
}
A(vg, qg);
Le("goog-toolbar-color-menu-button", function() {
  return new vg(l)
});
function wg(a, b, c, d) {
  mg.call(this, a, b, c || tg.ca(), d)
}
A(wg, mg);
Le("goog-toolbar-menu-button", function() {
  return new wg(l)
});
function xg(a, b, c, d) {
  mg.call(this, a, b, c, d);
  yg(this, a)
}
A(xg, mg);
t = xg.prototype;
t.u = l;
t.vg = l;
t.ea = function() {
  xg.c.ea.call(this);
  zg(this);
  Ag(this)
};
t.l = function() {
  xg.c.l.call(this);
  if(this.u) {
    this.u.C(), this.u = l
  }
  this.vg = l
};
t.qe = function(a) {
  this.Wb(a.target);
  xg.c.qe.call(this, a);
  a.stopPropagation();
  this.dispatchEvent("action")
};
t.Md = function() {
  var a = this.Ac();
  xg.c.oa.call(this, a && a.Ca());
  zg(this)
};
t.Ge = function(a) {
  var b = xg.c.Ge.call(this, a);
  a != b && (this.u && this.u.clear(), a && (this.u ? se(a, function(a) {
    this.u.Hb(a)
  }, this) : Bg(this, a)));
  return b
};
function yg(a, b) {
  a.vg = b;
  zg(a)
}
t.Hb = function(a) {
  xg.c.Hb.call(this, a);
  this.u ? this.u.Hb(a) : Bg(this, og(this))
};
t.sd = function(a, b) {
  xg.c.sd.call(this, a, b);
  this.u ? this.u.sd(a, b) : Bg(this, og(this))
};
t.Wb = function(a) {
  this.u && this.u.Wb(a)
};
t.Rf = function(a) {
  this.u && this.Wb(this.u.Id(a))
};
t.oa = function(a) {
  if(a != l && this.u) {
    for(var b = 0, c;c = this.u.Id(b);b++) {
      if(c && "function" == typeof c.Ca && c.Ca() == a) {
        this.Wb(c);
        return
      }
    }
  }
  this.Wb(l)
};
t.Ac = function() {
  return this.u ? this.u.Ac() : l
};
t.Jd = function() {
  return this.u ? this.u.Jd() : -1
};
function Bg(a, b) {
  a.u = new Vf;
  b && se(b, function(a) {
    this.u.Hb(a)
  }, a);
  Ag(a)
}
function Ag(a) {
  a.u && a.Ba().m(a.u, "select", a.Md)
}
function zg(a) {
  var b = a.Ac();
  a.hb(b ? b.zc() : a.vg)
}
t.fa = function(a, b) {
  xg.c.fa.call(this, a, b);
  this.we() && og(this).Ea(this.Jd())
};
Le("goog-select", function() {
  return new xg(l)
});
function Cg(a, b, c, d) {
  xg.call(this, a, b, c || tg.ca(), d)
}
A(Cg, xg);
Le("goog-toolbar-select", function() {
  return new Cg(l)
});
function Dg(a) {
  var b = a.indexOf(",");
  a: {
    a = (-1 != b ? a.substring(0, b) : a).toLowerCase();
    for(b = 0;2 > b;b++) {
      var c = "\"'".charAt(b);
      if(a.charAt(0) == c && a.charAt(a.length - 1) == c) {
        a = a.substring(1, a.length - 1);
        break a
      }
    }
  }
  return a
}
function Eg(a, b) {
  ab(b, function(b) {
    var d = b.value, f = Dg(d), b = new qf(b.caption, d, a.z);
    oe(b, f);
    a.Hb(b);
    b.T().style.fontFamily = d
  })
}
function Fg(a) {
  ab(Gg, function(b) {
    var c = b.value, b = new qf(b.caption, c, a.z);
    a.Hb(b);
    b = b.T();
    b.style.fontSize = (Hg[c] || 10) + "px";
    b.firstChild.style.height = "1.1em"
  })
}
var Hg = [10, 10, 13, 16, 18, 24, 32, 48];
function Ig(a) {
  ab(Jg, function(b) {
    var c = b.N, b = new qf(a.z.e("DIV", l, b.caption), c, a.z);
    oe(b, c);
    a.Hb(b)
  })
}
function Kg(a, b, c, d, f, h) {
  c = new yf(Lg(c, d, h), f, h);
  oe(c, a);
  c.Xb(b);
  return c
}
function Mg(a, b, c, d, f, h) {
  a = Kg(a, b, c, d, f, h);
  Se(a, 16, j);
  return a
}
function Ng(a, b, c, d, f, h) {
  f = new Cg(l, l, f, h);
  d && ab(d.split(/\s+/), f.rd, f);
  f.rd("goog-toolbar-select");
  yg(f, c);
  oe(f, a);
  f.Xb(b);
  return f
}
function Og(a, b, c, d, f, h) {
  c = new vg(Lg(c, d, h), l, f, h);
  oe(c, a);
  c.Xb(b);
  return c
}
function Lg(a, b, c) {
  if((!a || "" == a) && D && !G("1.9a")) {
    a = "\u00a0"
  }
  return(c || H()).e("DIV", b ? {"class":b} : l, a)
}
;var Pg = z("Link"), Qg = z("Edit Link"), Rg = z("Text to display:"), Sg = z("Link to:"), Tg = z("Web address"), Ug = z("Link to a page or file somewhere else on the web"), Vg = z("Test this link"), Wg = z("{$startBold}Not sure what to put in the box?{$endBold} First, find the page on the web that you want to link to. (A {$searchEngineLink}search engine{$endLink} might be useful.) Then, copy the web address from the box in your browser's address bar, and paste it into the box above.", {startBold:"<b>", 
endBold:"</b>", searchEngineLink:"<a href='http://www.google.com/' target='_new'>", endLink:"</a>"}), Xg = z("To what URL should this link go?"), Yg = z("Email address"), Zg = z("Link to an email address"), $g = z("Invalid email address"), ah = z("To what email address should this link?");
z("{$preb}Be careful.{$postb} Remember that any time you include an email address on a web page, nasty spammers can find it too.", {preb:"<b>", postb:"</b>"});
z("Image");
var bh = {}, ch = z("Normal"), dh = z("Normal / serif"), eh = [{caption:ch, value:"arial,sans-serif"}, {caption:dh, value:"times new roman,serif"}, {caption:"Courier New", value:"courier new,monospace"}, {caption:"Georgia", value:"georgia,serif"}, {caption:"Trebuchet", value:"trebuchet ms,sans-serif"}, {caption:"Verdana", value:"verdana,sans-serif"}], fh = {ja:[{caption:"\uff2d\uff33 \uff30\u30b4\u30b7\u30c3\u30af", value:"ms pgothic,sans-serif"}, {caption:"\uff2d\uff33 \uff30\u660e\u671d", value:"ms pmincho,serif"}, 
{caption:"\uff2d\uff33 \u30b4\u30b7\u30c3\u30af", value:"ms gothic,monospace"}], ko:[{caption:"\uad74\ub9bc", value:"gulim,sans-serif"}, {caption:"\ubc14\ud0d5", value:"batang,serif"}, {caption:"\uad74\ub9bc\uccb4", value:"gulimche,monospace"}], "zh-tw":[{caption:"\u65b0\u7d30\u660e\u9ad4", value:"pmingliu,serif"}, {caption:"\u7d30\u660e\u9ad4", value:"mingliu,serif"}], "zh-cn":[{caption:"\u5b8b\u4f53", value:"simsun,serif"}, {caption:"\u9ed1\u4f53", value:"simhei,sans-serif"}, {caption:"MS Song", 
value:"ms song,monospace"}]};
function gh(a) {
  var b = "en-us".replace(/_/, "-").toLowerCase(), c = [];
  b in fh && (c = fh[b]);
  c.length && Eg(a, c);
  Eg(a, eh)
}
var hh = z("Small"), ih = z("Normal"), jh = z("Large"), kh = z("Huge"), Gg = [{caption:hh, value:1}, {caption:ih, value:2}, {caption:jh, value:4}, {caption:kh, value:6}], lh = z("Heading"), mh = z("Subheading"), nh = z("Minor heading"), oh = z("Normal"), Jg = [{caption:lh, N:"H2"}, {caption:mh, N:"H3"}, {caption:nh, N:"H4"}, {caption:oh, N:"P"}];
function ph(a, b, c) {
  for(var d = H(b), f = [], h = 0, i;i = a[h];h++) {
    if(y(i)) {
      var k = g;
      if(i = qh[i]) {
        var k = i.factory || Mg, m = i.N, n = i.aa, p = i.caption, r = i.$, x = d || H(), k = k(m, n, p, r, l, x);
        if(i.da) {
          k.da = j
        }
      }
      i = k
    }
    i && f.push(i)
  }
  a = H(b);
  a = new sf(rf.ca(), Ze, a);
  c = c || gd(b);
  a.Rc(c);
  a.Gb(o);
  for(d = 0;h = f[d];d++) {
    Se(h, 32, o), h.Rc(c), a.gc(h, j)
  }
  a.$a(b);
  return a
}
function rh(a, b, c, d, f, h) {
  var i = Kg(a, b, c, d, f, h);
  i.Tc = function(a) {
    i.fc(a)
  };
  return i
}
function sh(a, b) {
  try {
    if(C) {
      var c = "000000" + b.toString(16), d = c.substr(c.length - 6, 6), b = (new Uc("#", d.substring(4, 6), d.substring(2, 4), d.substring(0, 2))).toString()
    }
    b != a.Ca() && a.oa(b)
  }catch(f) {
  }
}
var th = z("Format"), uh = z("Format"), vh = z("Undo"), wh = z("Redo"), xh = z("Font"), yh = z("Font size"), zh = z("Text color"), Ah = z("Bold"), Bh = z("Italic"), Ch = z("Underline"), Dh = z("Text background color"), Eh = z("Add or remove link"), Fh = z("Numbered list"), Gh = z("Bullet list"), Hh = z("Decrease indent"), Ih = z("Increase indent"), Jh = z("Align left"), Kh = z("Align center"), Lh = z("Align right"), Mh = z("Justify"), Nh = z("Remove formatting"), Oh = z("Insert image"), Ph = z("Strikethrough"), 
Qh = z("Left-to-right"), Rh = z("Right-to-left"), Sh = z("Quote"), Th = z("Edit HTML source"), Uh = z("Subscript"), Vh = z("Superscript"), Wh = z("Edit HTML"), qh = {};
bh.wh = [{N:"+undo", aa:vh, $:"tr-icon tr-undo", factory:rh, da:j}, {N:"+redo", aa:wh, $:"tr-icon tr-redo", factory:rh, da:j}, {N:"+fontName", aa:xh, $:"tr-fontName", factory:function(a, b, c, d, f, h) {
  var i = Ng(a, b, c, d, f, h);
  gh(i);
  yg(i, ch);
  Rb(og(i).T(), "goog-menu-noaccel");
  i.Tc = function(a) {
    var b = l;
    a && 0 < a.length && (b = qe(og(i), Dg(a)));
    b != i.Ac() && i.Wb(b)
  };
  return i
}, da:j}, {N:"+fontSize", aa:yh, $:"tr-fontSize", factory:function(a, b, c, d, f, h) {
  var i = Ng(a, b, c, d, f, h);
  Fg(i);
  yg(i, ih);
  Rb(og(i).T(), "goog-menu-noaccel");
  i.Tc = function(a) {
    var b;
    if(b = y(a)) {
      b = a.match(pd), b = "px" == (b && b[0] || l)
    }
    b && (a = $a(Hg, parseInt(a, 10)));
    a = 0 < a ? a : l;
    a != i.Ca() && i.oa(a)
  };
  return i
}, da:j}, {N:"+bold", aa:Ah, $:"tr-icon tr-bold", da:j}, {N:"+italic", aa:Bh, $:"tr-icon tr-italic", da:j}, {N:"+underline", aa:Ch, $:"tr-icon tr-underline", da:j}, {N:"+foreColor", aa:zh, $:"tr-icon tr-foreColor", factory:function(a, b, c, d, f, h) {
  a = Og(a, b, c, d, f, h);
  a.He("#000");
  a.Tc = va(sh, a);
  return a
}, da:j}, {N:"+backColor", aa:Dh, $:"tr-icon tr-backColor", factory:function(a, b, c, d, f, h) {
  a = Og(a, b, c, d, f, h);
  a.He("#FFF");
  a.Tc = va(sh, a);
  return a
}, da:j}, {N:"+link", aa:Eh, caption:Pg, $:"tr-link", da:j}, {N:"+insertOrderedList", aa:Fh, $:"tr-icon tr-insertOrderedList", da:j}, {N:"+insertUnorderedList", aa:Gh, $:"tr-icon tr-insertUnorderedList", da:j}, {N:"+outdent", aa:Hh, $:"tr-icon tr-outdent", factory:Kg}, {N:"+indent", aa:Ih, $:"tr-icon tr-indent", factory:Kg}, {N:"+justifyLeft", aa:Jh, $:"tr-icon tr-justifyLeft", da:j}, {N:"+justifyCenter", aa:Kh, $:"tr-icon tr-justifyCenter", da:j}, {N:"+justifyRight", aa:Lh, $:"tr-icon tr-justifyRight", 
da:j}, {N:"+justifyFull", aa:Mh, $:"tr-icon tr-justifyFull", da:j}, {N:"+removeFormat", aa:Nh, $:"tr-icon tr-removeFormat", factory:Kg}, {N:"image", aa:Oh, $:"tr-icon tr-image", factory:Kg}, {N:"+strikeThrough", aa:Ph, $:"tr-icon tr-strikeThrough", da:j}, {N:"+subscript", aa:Uh, $:"tr-icon tr-subscript", da:j}, {N:"+superscript", aa:Vh, $:"tr-icon tr-superscript", da:j}, {N:"ltr", aa:Qh, $:"tr-icon tr-ltr", da:j}, {N:"rtl", aa:Rh, $:"tr-icon tr-rtl", factory:function(a, b, c, d, f, h) {
  var i = Mg(a, b, c, d, f, h);
  i.Tc = function(a) {
    a = !!a;
    Tb(i.getParent().b(), "tr-rtl-mode", a);
    Re(i, a)
  };
  return i
}, da:j}, {N:"+BLOCKQUOTE", aa:Sh, $:"tr-icon tr-BLOCKQUOTE", da:j}, {N:"+formatBlock", aa:th, caption:uh, $:"tr-formatBlock", factory:function(a, b, c, d, f, h) {
  var i = Ng(a, b, c, d, f, h);
  Ig(i);
  yg(i, oh);
  Rb(og(i).T(), "goog-menu-noaccel");
  i.Tc = function(a) {
    a = a && 0 < a.length ? a : l;
    a != i.Ca() && i.oa(a)
  };
  return i
}, da:j}, {N:"editHtml", aa:Th, caption:Wh, $:"tr-editHtml", factory:Kg}];
for(var Xh = 0, Yh;Yh = bh.wh[Xh];Xh++) {
  qh[Yh.N] = Yh
}
delete bh.wh;
var Zh;
function L(a) {
  return a != l && a !== o
}
function M(a, b) {
  return a[w.call(l, b)] ? j : a._ ? j : o
}
function N(a, b) {
  return Error("No protocol method " + a + " defined for type " + w.call(l, b) + ": " + b)
}
function $h(a) {
  return Array.prototype.slice.call(a)
}
var ai = function() {
  function a(a, d) {
    return b.call(l, d)
  }
  var b = l, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return Array(b);
      case 2:
        return a.call(this, 0, d)
    }
    e("Invalid arity: " + arguments.length)
  };
  b.M = function(a) {
    return Array(a)
  };
  b.f = a;
  return b
}(), bi = {};
function ci(a) {
  if(a ? a.lb : a) {
    a = a.lb(a)
  }else {
    var b;
    var c = ci[w.call(l, a)];
    c ? b = c : (c = ci._) ? b = c : e(N("ICounted.-count", a));
    a = b.call(l, a)
  }
  return a
}
function di(a, b) {
  var c;
  if(a ? a.Va : a) {
    c = a.Va(a, b)
  }else {
    var d = di[w.call(l, a)];
    d ? c = d : (d = di._) ? c = d : e(N("ICollection.-conj", a));
    c = c.call(l, a, b)
  }
  return c
}
var ei = {}, O = function() {
  function a(a, b, c) {
    if(a ? a.ud : a) {
      a = a.ud(a, b, c)
    }else {
      var i;
      var k = O[w.call(l, a)];
      k ? i = k : (k = O._) ? i = k : e(N("IIndexed.-nth", a));
      a = i.call(l, a, b, c)
    }
    return a
  }
  function b(a, b) {
    var c;
    if(a ? a.td : a) {
      c = a.td(a, b)
    }else {
      var i = O[w.call(l, a)];
      i ? c = i : (i = O._) ? c = i : e(N("IIndexed.-nth", a));
      c = c.call(l, a, b)
    }
    return c
  }
  var c = l, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.f = b;
  c.k = a;
  return c
}(), fi = {}, gi = {};
function hi(a) {
  if(a ? a.Yb : a) {
    a = a.Yb(a)
  }else {
    var b;
    var c = hi[w.call(l, a)];
    c ? b = c : (c = hi._) ? b = c : e(N("ISeq.-first", a));
    a = b.call(l, a)
  }
  return a
}
function P(a) {
  if(a ? a.Zb : a) {
    a = a.Zb(a)
  }else {
    var b;
    var c = P[w.call(l, a)];
    c ? b = c : (c = P._) ? b = c : e(N("ISeq.-rest", a));
    a = b.call(l, a)
  }
  return a
}
var Q = function() {
  function a(a, b, c) {
    if(a ? a.kc : a) {
      a = a.kc(a, b, c)
    }else {
      var i;
      var k = Q[w.call(l, a)];
      k ? i = k : (k = Q._) ? i = k : e(N("ILookup.-lookup", a));
      a = i.call(l, a, b, c)
    }
    return a
  }
  function b(a, b) {
    var c;
    if(a ? a.jc : a) {
      c = a.jc(a, b)
    }else {
      var i = Q[w.call(l, a)];
      i ? c = i : (i = Q._) ? c = i : e(N("ILookup.-lookup", a));
      c = c.call(l, a, b)
    }
    return c
  }
  var c = l, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.f = b;
  c.k = a;
  return c
}();
function ii(a, b, c) {
  if(a ? a.Zc : a) {
    a = a.Zc(a, b, c)
  }else {
    var d;
    var f = ii[w.call(l, a)];
    f ? d = f : (f = ii._) ? d = f : e(N("IAssociative.-assoc", a));
    a = d.call(l, a, b, c)
  }
  return a
}
var ji = {}, ki = {};
function li(a) {
  if(a ? a.Xe : a) {
    a = a.Xe(a)
  }else {
    var b;
    var c = li[w.call(l, a)];
    c ? b = c : (c = li._) ? b = c : e(N("IMapEntry.-key", a));
    a = b.call(l, a)
  }
  return a
}
function mi(a) {
  if(a ? a.Ye : a) {
    a = a.Ye(a)
  }else {
    var b;
    var c = mi[w.call(l, a)];
    c ? b = c : (c = mi._) ? b = c : e(N("IMapEntry.-val", a));
    a = b.call(l, a)
  }
  return a
}
function ni(a) {
  if(a ? a.vd : a) {
    a = a.vd(a)
  }else {
    var b;
    var c = ni[w.call(l, a)];
    c ? b = c : (c = ni._) ? b = c : e(N("IStack.-peek", a));
    a = b.call(l, a)
  }
  return a
}
function oi(a) {
  if(a ? a.wd : a) {
    a = a.wd(a)
  }else {
    var b;
    var c = oi[w.call(l, a)];
    c ? b = c : (c = oi._) ? b = c : e(N("IStack.-pop", a));
    a = b.call(l, a)
  }
  return a
}
var pi = {};
function qi(a) {
  if(a ? a.jg : a) {
    a = a.jg(a)
  }else {
    var b;
    var c = qi[w.call(l, a)];
    c ? b = c : (c = qi._) ? b = c : e(N("IDeref.-deref", a));
    a = b.call(l, a)
  }
  return a
}
var ri = {};
function si(a) {
  if(a ? a.Oa : a) {
    a = a.Oa(a)
  }else {
    var b;
    var c = si[w.call(l, a)];
    c ? b = c : (c = si._) ? b = c : e(N("IMeta.-meta", a));
    a = b.call(l, a)
  }
  return a
}
function ti(a, b) {
  var c;
  if(a ? a.Wa : a) {
    c = a.Wa(a, b)
  }else {
    var d = ti[w.call(l, a)];
    d ? c = d : (d = ti._) ? c = d : e(N("IWithMeta.-with-meta", a));
    c = c.call(l, a, b)
  }
  return c
}
var ui = {}, vi = function() {
  function a(a, b, c) {
    if(a ? a.je : a) {
      a = a.je(a, b, c)
    }else {
      var i;
      var k = vi[w.call(l, a)];
      k ? i = k : (k = vi._) ? i = k : e(N("IReduce.-reduce", a));
      a = i.call(l, a, b, c)
    }
    return a
  }
  function b(a, b) {
    var c;
    if(a ? a.ie : a) {
      c = a.ie(a, b)
    }else {
      var i = vi[w.call(l, a)];
      i ? c = i : (i = vi._) ? c = i : e(N("IReduce.-reduce", a));
      c = c.call(l, a, b)
    }
    return c
  }
  var c = l, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.f = b;
  c.k = a;
  return c
}();
function wi(a, b) {
  var c;
  if(a ? a.ra : a) {
    c = a.ra(a, b)
  }else {
    var d = wi[w.call(l, a)];
    d ? c = d : (d = wi._) ? c = d : e(N("IEquiv.-equiv", a));
    c = c.call(l, a, b)
  }
  return c
}
function xi(a) {
  if(a ? a.Ma : a) {
    a = a.Ma(a)
  }else {
    var b;
    var c = xi[w.call(l, a)];
    c ? b = c : (c = xi._) ? b = c : e(N("IHash.-hash", a));
    a = b.call(l, a)
  }
  return a
}
function yi(a) {
  if(a ? a.Qa : a) {
    a = a.Qa(a)
  }else {
    var b;
    var c = yi[w.call(l, a)];
    c ? b = c : (c = yi._) ? b = c : e(N("ISeqable.-seq", a));
    a = b.call(l, a)
  }
  return a
}
var zi = {}, Ai = {};
function Bi(a, b) {
  var c;
  if(a ? a.Ha : a) {
    c = a.Ha(a, b)
  }else {
    var d = Bi[w.call(l, a)];
    d ? c = d : (d = Bi._) ? c = d : e(N("IPrintable.-pr-seq", a));
    c = c.call(l, a, b)
  }
  return c
}
function Ci(a, b, c) {
  if(a ? a.Lh : a) {
    a = a.Lh(a, b, c)
  }else {
    var d;
    var f = Ci[w.call(l, a)];
    f ? d = f : (f = Ci._) ? d = f : e(N("IWatchable.-notify-watches", a));
    a = d.call(l, a, b, c)
  }
  return a
}
var Di = {};
function Ei(a) {
  if(a ? a.We : a) {
    a = a.We(a)
  }else {
    var b;
    var c = Ei[w.call(l, a)];
    c ? b = c : (c = Ei._) ? b = c : e(N("IEditableCollection.-as-transient", a));
    a = b.call(l, a)
  }
  return a
}
function Fi(a, b) {
  var c;
  if(a ? a.og : a) {
    c = a.og(a, b)
  }else {
    var d = Fi[w.call(l, a)];
    d ? c = d : (d = Fi._) ? c = d : e(N("ITransientCollection.-conj!", a));
    c = c.call(l, a, b)
  }
  return c
}
function Gi(a) {
  if(a ? a.pg : a) {
    a = a.pg(a)
  }else {
    var b;
    var c = Gi[w.call(l, a)];
    c ? b = c : (c = Gi._) ? b = c : e(N("ITransientCollection.-persistent!", a));
    a = b.call(l, a)
  }
  return a
}
function Hi(a, b, c) {
  if(a ? a.ng : a) {
    a = a.ng(a, b, c)
  }else {
    var d;
    var f = Hi[w.call(l, a)];
    f ? d = f : (f = Hi._) ? d = f : e(N("ITransientAssociative.-assoc!", a));
    a = d.call(l, a, b, c)
  }
  return a
}
function Ii(a, b, c) {
  if(a ? a.Kh : a) {
    a = a.Kh(a, b, c)
  }else {
    var d;
    var f = Ii[w.call(l, a)];
    f ? d = f : (f = Ii._) ? d = f : e(N("ITransientVector.-assoc-n!", a));
    a = d.call(l, a, b, c)
  }
  return a
}
var Ji = function() {
  function a(a, b) {
    var c = a === b;
    return c ? c : wi(a, b)
  }
  var b = l, c = function() {
    function a(b, d, k) {
      var m = l;
      fa(k) && (m = R(Array.prototype.slice.call(arguments, 2)));
      return c.call(this, b, d, m)
    }
    function c(a, d, f) {
      for(;;) {
        if(L(b.call(l, a, d))) {
          if(L(S(f))) {
            a = d, d = T(f), f = S(f)
          }else {
            return b.call(l, d, T(f))
          }
        }else {
          return o
        }
      }
    }
    a.O = 2;
    a.r = function(a) {
      var b = T(a), d = T(S(a)), a = U(S(a));
      return c(b, d, a)
    };
    a.h = c;
    return a
  }(), b = function(b, f, h) {
    switch(arguments.length) {
      case 1:
        return j;
      case 2:
        return a.call(this, b, f);
      default:
        return c.h(b, f, W(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.O = 2;
  b.r = c.r;
  b.M = s(j);
  b.f = a;
  b.h = c.h;
  return b
}();
function Ki(a) {
  var b = a == l;
  return(b ? b : g === a) ? l : a.constructor
}
xi["null"] = s(0);
Q["null"] = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return l;
      case 3:
        return c
    }
    e("Invalid arity: " + arguments.length)
  }
}();
ii["null"] = function(a, b, c) {
  return Li.h(W([b, c], 0))
};
di["null"] = function(a, b) {
  return Mi.h(W([b], 0))
};
ui["null"] = j;
vi["null"] = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return b.call(l);
      case 3:
        return c
    }
    e("Invalid arity: " + arguments.length)
  }
}();
Ai["null"] = j;
Bi["null"] = function() {
  return Mi.h(W(["nil"], 0))
};
bi["null"] = j;
ci["null"] = s(0);
ni["null"] = s(l);
oi["null"] = s(l);
gi["null"] = j;
hi["null"] = s(l);
P["null"] = function() {
  return Mi()
};
wi["null"] = function(a, b) {
  return b == l
};
ti["null"] = s(l);
ri["null"] = j;
si["null"] = s(l);
ei["null"] = j;
O["null"] = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return l;
      case 3:
        return c
    }
    e("Invalid arity: " + arguments.length)
  }
}();
ji["null"] = j;
Date.prototype.ra = function(a, b) {
  return a.toString() === b.toString()
};
xi.number = aa();
wi.number = function(a, b) {
  return a === b
};
xi["boolean"] = function(a) {
  return a === j ? 1 : 0
};
xi["function"] = function(a) {
  return pa.call(l, a)
};
var Pi = function() {
  function a(a, b, c, d) {
    for(;;) {
      if(d < ci(a)) {
        c = b.call(l, c, O.f(a, d));
        if(Ni(Oi, c)) {
          return qi(c)
        }
        d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = 0;;) {
      if(d < ci(a)) {
        c = b.call(l, c, O.f(a, d));
        if(Ni(Oi, c)) {
          return qi(c)
        }
        d += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    if(0 === ci(a)) {
      return b.call(l)
    }
    for(var c = O.f(a, 0), d = 1;;) {
      if(d < ci(a)) {
        c = b.call(l, c, O.f(a, d));
        if(Ni(Oi, c)) {
          return qi(c)
        }
        d += 1
      }else {
        return c
      }
    }
  }
  var d = l, d = function(d, h, i, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, i);
      case 4:
        return a.call(this, d, h, i, k)
    }
    e("Invalid arity: " + arguments.length)
  };
  d.f = c;
  d.k = b;
  d.ia = a;
  return d
}();
function Qi(a, b) {
  this.cb = a;
  this.va = b;
  this.sa = 0;
  this.o = 15990906
}
t = Qi.prototype;
t.Ma = function(a) {
  return Ri(a)
};
t.xb = j;
t.Va = function(a, b) {
  return X(b, a)
};
t.ge = j;
t.toString = function() {
  return Si.h(W([this], 0))
};
t.he = j;
t.ie = function(a, b) {
  return Ti(this.cb) ? Pi.ia(this.cb, b, this.cb[this.va], this.va + 1) : Pi.ia(a, b, this.cb[this.va], 0)
};
t.je = function(a, b, c) {
  return Ti(this.cb) ? Pi.ia(this.cb, b, c, this.va) : Pi.ia(a, b, c, 0)
};
t.Qa = aa();
t.wb = j;
t.lb = function() {
  return this.cb.length - this.va
};
t.mb = j;
t.Yb = function() {
  return this.cb[this.va]
};
t.Zb = function() {
  return this.va + 1 < this.cb.length ? new Qi(this.cb, this.va + 1) : Mi()
};
t.ra = function(a, b) {
  return Ui(a, b)
};
t.$c = j;
t.td = function(a, b) {
  var c = b + this.va;
  return c < this.cb.length ? this.cb[c] : l
};
t.ud = function(a, b, c) {
  a = b + this.va;
  return a < this.cb.length ? this.cb[a] : c
};
function W(a, b) {
  return 0 === a.length ? l : new Qi(a, b)
}
function R(a) {
  return W(a, 0)
}
ui.array = j;
vi.array = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return Pi.f(a, b);
      case 3:
        return Pi.k(a, b, c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
Q.array = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return a[b];
      case 3:
        return O.k(a, b, c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
ei.array = j;
O.array = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return b < a.length ? a[b] : l;
      case 3:
        return b < a.length ? a[b] : c
    }
    e("Invalid arity: " + arguments.length)
  }
}();
bi.array = j;
ci.array = function(a) {
  return a.length
};
yi.array = function(a) {
  return W(a, 0)
};
function Y(a) {
  if(a != l) {
    var b;
    b = a != l ? ((b = a.o & 32) ? b : a.ge) ? j : a.o ? o : M(fi, a) : M(fi, a);
    a = b ? a : yi(a)
  }else {
    a = l
  }
  return a
}
function T(a) {
  if(a != l) {
    var b;
    b = a != l ? ((b = a.o & 64) ? b : a.mb) ? j : a.o ? o : M(gi, a) : M(gi, a);
    if(b) {
      return hi(a)
    }
    a = Y(a);
    return a != l ? hi(a) : l
  }
  return l
}
function U(a) {
  if(a != l) {
    var b;
    b = a != l ? ((b = a.o & 64) ? b : a.mb) ? j : a.o ? o : M(gi, a) : M(gi, a);
    if(b) {
      return P(a)
    }
    a = Y(a);
    return a != l ? P(a) : Vi
  }
  return Vi
}
function S(a) {
  if(a != l) {
    if(function() {
      var b;
      b = a != l ? ((b = a.o & 64) ? b : a.mb) ? j : a.o ? o : M(gi, a) : M(gi, a);
      return b
    }()) {
      var b = P(a);
      return b != l ? function() {
        var a;
        a = b != l ? ((a = b.o & 32) ? a : b.ge) ? j : b.o ? o : M(fi, b) : M(fi, b);
        return a
      }() ? b : yi(b) : l
    }
    return Y(U(a))
  }
  return l
}
wi._ = function(a, b) {
  return a === b
};
var Wi = function() {
  var a = l, b = function() {
    function b(a, c, i) {
      var k = l;
      fa(i) && (k = R(Array.prototype.slice.call(arguments, 2)));
      return d.call(this, a, c, k)
    }
    function d(b, c, d) {
      for(;;) {
        if(L(d)) {
          b = a.call(l, b, c), c = T(d), d = S(d)
        }else {
          return a.call(l, b, c)
        }
      }
    }
    b.O = 2;
    b.r = function(a) {
      var b = T(a), c = T(S(a)), a = U(S(a));
      return d(b, c, a)
    };
    b.h = d;
    return b
  }(), a = function(a, d, f) {
    switch(arguments.length) {
      case 2:
        return di(a, d);
      default:
        return b.h(a, d, W(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  a.O = 2;
  a.r = b.r;
  a.f = function(a, b) {
    return di(a, b)
  };
  a.h = b.h;
  return a
}();
function Xi(a) {
  if(Ti(a)) {
    a = ci(a)
  }else {
    a: {
      for(var b = 0;;) {
        if(Ti(a)) {
          a = b + ci(a);
          break a
        }
        a = S(a);
        b += 1
      }
      a = g
    }
  }
  return a
}
var Zi = function() {
  function a(a, b, h) {
    return 0 === b ? L(Y(a)) ? T(a) : h : Yi(a) ? O.k(a, b, h) : L(Y(a)) ? c.call(l, S(a), b - 1) : h
  }
  function b(a, b) {
    if(0 === b) {
      if(L(Y(a))) {
        return T(a)
      }
      e(Error("Index out of bounds"))
    }
    if(Yi(a)) {
      return O.f(a, b)
    }
    if(L(Y(a))) {
      return c.call(l, S(a), b - 1)
    }
    e(Error("Index out of bounds"))
  }
  var c = l, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.f = b;
  c.k = a;
  return c
}(), $i = function() {
  function a(a, b, c) {
    var i;
    i = a != l ? ((i = a.o & 16) ? i : a.$c) ? j : a.o ? o : M(ei, a) : M(ei, a);
    return i ? O.k(a, Math.floor(b), c) : Zi.k(a, Math.floor(b), c)
  }
  function b(a, b) {
    var c;
    c = a != l ? ((c = a.o & 16) ? c : a.$c) ? j : a.o ? o : M(ei, a) : M(ei, a);
    return c ? O.f(a, Math.floor(b)) : Zi.f(a, Math.floor(b))
  }
  var c = l, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.f = b;
  c.k = a;
  return c
}(), aj = function() {
  function a(a, b, c) {
    return Q.k(a, b, c)
  }
  function b(a, b) {
    return Q.f(a, b)
  }
  var c = l, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.f = b;
  c.k = a;
  return c
}(), bj = function() {
  var a = l, b = function() {
    function b(a, c, i, k) {
      var m = l;
      fa(k) && (m = R(Array.prototype.slice.call(arguments, 3)));
      return d.call(this, a, c, i, m)
    }
    function d(b, c, d, k) {
      for(;;) {
        if(b = a.call(l, b, c, d), L(k)) {
          c = T(k), d = T(S(k)), k = S(S(k))
        }else {
          return b
        }
      }
    }
    b.O = 3;
    b.r = function(a) {
      var b = T(a), c = T(S(a)), k = T(S(S(a))), a = U(S(S(a)));
      return d(b, c, k, a)
    };
    b.h = d;
    return b
  }(), a = function(a, d, f, h) {
    switch(arguments.length) {
      case 3:
        return ii(a, d, f);
      default:
        return b.h(a, d, f, W(arguments, 3))
    }
    e("Invalid arity: " + arguments.length)
  };
  a.O = 3;
  a.r = b.r;
  a.k = function(a, b, f) {
    return ii(a, b, f)
  };
  a.h = b.h;
  return a
}();
function cj(a, b) {
  return ti(a, b)
}
function dj(a) {
  var b;
  b = a != l ? ((b = a.o & 65536) ? b : a.Na) ? j : a.o ? o : M(ri, a) : M(ri, a);
  return b ? si(a) : l
}
function ej(a) {
  return xi(a)
}
function Ti(a) {
  if(a != l) {
    var b = a.o & 2, a = (b ? b : a.wb) ? j : a.o ? o : M(bi, a)
  }else {
    a = M(bi, a)
  }
  return a
}
function Yi(a) {
  if(a != l) {
    var b = a.o & 16, a = (b ? b : a.$c) ? j : a.o ? o : M(ei, a)
  }else {
    a = M(ei, a)
  }
  return a
}
function fj(a) {
  if(a == l) {
    a = o
  }else {
    if(a != l) {
      var b = a.o & 512, a = (b ? b : a.lg) ? j : a.o ? o : M(ji, a)
    }else {
      a = M(ji, a)
    }
  }
  return a
}
function gj(a) {
  if(a != l) {
    var b = a.o & 8192, a = (b ? b : a.qg) ? j : a.o ? o : M(pi, a)
  }else {
    a = M(pi, a)
  }
  return a
}
function hj(a, b, c, d, f) {
  for(;!(0 === f);) {
    c[d] = a[b];
    d += 1;
    f -= 1;
    b += 1
  }
}
function Ni(a, b) {
  return b != l && (b instanceof a || b.constructor === a || a === Object)
}
function ij(a) {
  return L(a) ? j : o
}
function jj(a) {
  var b = y.call(l, a);
  return L(b) ? "\ufdd0" === a.charAt(0) : b
}
function kj(a) {
  var b = y.call(l, a);
  return L(b) ? "\ufdd1" === a.charAt(0) : b
}
var mj = function() {
  function a(a, b, c) {
    for(c = Y(c);;) {
      if(L(c)) {
        b = a.call(l, b, T(c));
        if(Ni(Oi, b)) {
          return qi(b)
        }
        c = S(c)
      }else {
        return b
      }
    }
  }
  function b(a, b) {
    var c = Y(b);
    return L(c) ? lj.k(a, T(c), S(c)) : a.call(l)
  }
  var c = l, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.f = b;
  c.k = a;
  return c
}(), lj = function() {
  function a(a, b, c) {
    var i;
    i = c != l ? ((i = c.o & 262144) ? i : c.he) ? j : c.o ? o : M(ui, c) : M(ui, c);
    return i ? vi.k(c, a, b) : mj.k(a, b, c)
  }
  function b(a, b) {
    var c;
    c = b != l ? ((c = b.o & 262144) ? c : b.he) ? j : b.o ? o : M(ui, b) : M(ui, b);
    return c ? vi.f(b, a) : mj.f(a, b)
  }
  var c = l, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.f = b;
  c.k = a;
  return c
}();
function Oi(a) {
  this.F = a;
  this.sa = 0;
  this.o = 16384
}
Oi.prototype.jg = q("F");
function nj(a) {
  for(var b = 0;;) {
    if(0 === a) {
      return b
    }
    a &= a - 1;
    b += 1
  }
}
var oj = function() {
  function a(a) {
    return a == l ? "" : a.toString()
  }
  var b = l, c = function() {
    function a(b, d) {
      var k = l;
      fa(d) && (k = R(Array.prototype.slice.call(arguments, 1)));
      return c.call(this, b, k)
    }
    function c(a, d) {
      return function(a, c) {
        for(;;) {
          if(L(c)) {
            var d = a.append(b.call(l, T(c))), f = S(c), a = d, c = f
          }else {
            return b.call(l, a)
          }
        }
      }.call(l, new Uc(b.call(l, a)), d)
    }
    a.O = 1;
    a.r = function(a) {
      var b = T(a), a = U(a);
      return c(b, a)
    };
    a.h = c;
    return a
  }(), b = function(b, f) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return a.call(this, b);
      default:
        return c.h(b, W(arguments, 1))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.O = 1;
  b.r = c.r;
  b.Mh = s("");
  b.M = a;
  b.h = c.h;
  return b
}(), Z = function() {
  function a(a) {
    return kj(a) ? a.substring(2, a.length) : jj(a) ? oj.h(":", W([a.substring(2, a.length)], 0)) : a == l ? "" : a.toString()
  }
  var b = l, c = function() {
    function a(b, d) {
      var k = l;
      fa(d) && (k = R(Array.prototype.slice.call(arguments, 1)));
      return c.call(this, b, k)
    }
    function c(a, d) {
      return function(a, c) {
        for(;;) {
          if(L(c)) {
            var d = a.append(b.call(l, T(c))), f = S(c), a = d, c = f
          }else {
            return oj.M(a)
          }
        }
      }.call(l, new Uc(b.call(l, a)), d)
    }
    a.O = 1;
    a.r = function(a) {
      var b = T(a), a = U(a);
      return c(b, a)
    };
    a.h = c;
    return a
  }(), b = function(b, f) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return a.call(this, b);
      default:
        return c.h(b, W(arguments, 1))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.O = 1;
  b.r = c.r;
  b.Mh = s("");
  b.M = a;
  b.h = c.h;
  return b
}(), pj = function() {
  var a = l, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return a.substring(c);
      case 3:
        return a.substring(c, d)
    }
    e("Invalid arity: " + arguments.length)
  };
  a.f = function(a, c) {
    return a.substring(c)
  };
  a.k = function(a, c, d) {
    return a.substring(c, d)
  };
  return a
}();
function Ui(a, b) {
  var c;
  c = b != l ? ((c = b.o & 8388608) ? c : b.xb) ? j : b.o ? o : M(zi, b) : M(zi, b);
  if(c) {
    a: {
      c = Y(a);
      for(var d = Y(b);;) {
        if(c == l) {
          c = d == l;
          break a
        }
        if(d != l && Ji.f(T(c), T(d))) {
          c = S(c), d = S(d)
        }else {
          c = o;
          break a
        }
      }
      c = g
    }
  }else {
    c = l
  }
  return ij(c)
}
function Ri(a) {
  return lj.k(function(a, c) {
    var d = xi(c);
    return a ^ d + 2654435769 + (a << 6) + (a >> 2)
  }, ej(T(a)), S(a))
}
function qj(a) {
  for(var b = 0, a = Y(a);;) {
    if(L(a)) {
      var c = T(a), b = (b + (ej(li(c)) ^ ej(mi(c)))) % 4503599627370496, a = S(a)
    }else {
      return b
    }
  }
}
function rj(a, b, c, d, f) {
  this.H = a;
  this.Hd = b;
  this.Ud = c;
  this.$b = d;
  this.t = f;
  this.sa = 0;
  this.o = 32706670
}
t = rj.prototype;
t.Ma = function(a) {
  var b = this.t;
  return b != l ? b : this.t = a = Ri(a)
};
t.xb = j;
t.Va = function(a, b) {
  return new rj(this.H, b, a, this.$b + 1, l)
};
t.ge = j;
t.toString = function() {
  return Si.h(W([this], 0))
};
t.Qa = aa();
t.wb = j;
t.lb = q("$b");
t.vd = q("Hd");
t.wd = function(a) {
  return P(a)
};
t.mb = j;
t.Yb = q("Hd");
t.Zb = q("Ud");
t.ra = function(a, b) {
  return Ui(a, b)
};
t.Wa = function(a, b) {
  return new rj(b, this.Hd, this.Ud, this.$b, this.t)
};
t.Na = j;
t.Oa = q("H");
function sj(a) {
  this.H = a;
  this.sa = 0;
  this.o = 32706638
}
t = sj.prototype;
t.Ma = s(0);
t.xb = j;
t.Va = function(a, b) {
  return new rj(this.H, b, l, 1, l)
};
t.toString = function() {
  return Si.h(W([this], 0))
};
t.Qa = s(l);
t.wb = j;
t.lb = s(0);
t.vd = s(l);
t.wd = s(l);
t.mb = j;
t.Yb = s(l);
t.Zb = s(l);
t.ra = function(a, b) {
  return Ui(a, b)
};
t.Wa = function(a, b) {
  return new sj(b)
};
t.Na = j;
t.Oa = q("H");
var Vi = new sj(l), Mi = function() {
  function a(a) {
    var d = l;
    fa(a) && (d = R(Array.prototype.slice.call(arguments, 0)));
    return b.call(this, d)
  }
  function b(a) {
    return lj.k(Wi, Vi, lj.k(Wi, Vi, a))
  }
  a.O = 0;
  a.r = function(a) {
    a = Y(a);
    return b(a)
  };
  a.h = b;
  return a
}();
function tj(a, b, c, d) {
  this.H = a;
  this.Hd = b;
  this.Ud = c;
  this.t = d;
  this.sa = 0;
  this.o = 32702572
}
t = tj.prototype;
t.Ma = function(a) {
  var b = this.t;
  return b != l ? b : this.t = a = Ri(a)
};
t.xb = j;
t.Va = function(a, b) {
  return new tj(l, b, a, this.t)
};
t.ge = j;
t.toString = function() {
  return Si.h(W([this], 0))
};
t.Qa = aa();
t.mb = j;
t.Yb = q("Hd");
t.Zb = function() {
  return this.Ud == l ? Vi : this.Ud
};
t.ra = function(a, b) {
  return Ui(a, b)
};
t.Wa = function(a, b) {
  return new tj(b, this.Hd, this.Ud, this.t)
};
t.Na = j;
t.Oa = q("H");
function X(a, b) {
  var c = b == l;
  c || (c = b != l ? ((c = b.o & 64) ? c : b.mb) ? j : b.o ? o : M(gi, b) : M(gi, b));
  return c ? new tj(l, a, b, l) : new tj(l, a, Y(b), l)
}
ui.string = j;
vi.string = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return Pi.f(a, b);
      case 3:
        return Pi.k(a, b, c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
Q.string = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return O.f(a, b);
      case 3:
        return O.k(a, b, c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
ei.string = j;
O.string = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return b < ci(a) ? a.charAt(b) : l;
      case 3:
        return b < ci(a) ? a.charAt(b) : c
    }
    e("Invalid arity: " + arguments.length)
  }
}();
bi.string = j;
ci.string = function(a) {
  return a.length
};
yi.string = function(a) {
  return W(a, 0)
};
xi.string = function(a) {
  return Pa.call(l, a)
};
String.prototype.call = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return aj.f(b, this.toString());
      case 3:
        return aj.k(b, this.toString(), c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
String.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat($h(b)))
};
String.prototype.apply = function(a, b) {
  return 2 > Xi(b) ? aj.f(b[0], a) : aj.k(b[0], a, b[1])
};
function uj(a) {
  var b = a.x;
  if(L(a.dh)) {
    return b
  }
  a.x = b.call(l);
  a.dh = j;
  return a.x
}
function vj(a, b, c, d) {
  this.H = a;
  this.dh = b;
  this.x = c;
  this.t = d;
  this.sa = 0;
  this.o = 15925324
}
t = vj.prototype;
t.Ma = function(a) {
  var b = this.t;
  return b != l ? b : this.t = a = Ri(a)
};
t.xb = j;
t.Va = function(a, b) {
  return X(b, a)
};
t.toString = function() {
  return Si.h(W([this], 0))
};
t.Qa = function(a) {
  return Y(uj(a))
};
t.mb = j;
t.Yb = function(a) {
  return T(uj(a))
};
t.Zb = function(a) {
  return U(uj(a))
};
t.ra = function(a, b) {
  return Ui(a, b)
};
t.Wa = function(a, b) {
  return new vj(b, this.dh, this.x, this.t)
};
t.Na = j;
t.Oa = q("H");
function wj(a) {
  for(var b = [];;) {
    if(L(Y(a))) {
      b.push(T(a)), a = S(a)
    }else {
      return b
    }
  }
}
function xj(a, b) {
  if(Ti(a)) {
    return Xi(a)
  }
  for(var c = a, d = b, f = 0;;) {
    var h;
    h = (h = 0 < d) ? Y(c) : h;
    if(L(h)) {
      c = S(c), d -= 1, f += 1
    }else {
      return f
    }
  }
}
var zj = function yj(b) {
  return b == l ? l : S(b) == l ? Y(T(b)) : X(T(b), yj.call(l, S(b)))
}, Aj = function() {
  function a(a, b) {
    return new vj(l, o, function() {
      var c = Y(a);
      return L(c) ? X(T(c), d.call(l, U(c), b)) : b
    })
  }
  function b(a) {
    return new vj(l, o, function() {
      return a
    })
  }
  function c() {
    return new vj(l, o, s(l))
  }
  var d = l, f = function() {
    function a(c, d, f) {
      var h = l;
      fa(f) && (h = R(Array.prototype.slice.call(arguments, 2)));
      return b.call(this, c, d, h)
    }
    function b(a, c, f) {
      return function r(a, b) {
        return new vj(l, o, function() {
          var c = Y(a);
          return L(c) ? X(T(c), r.call(l, U(c), b)) : L(b) ? r.call(l, T(b), S(b)) : l
        })
      }.call(l, d.call(l, a, c), f)
    }
    a.O = 2;
    a.r = function(a) {
      var c = T(a), d = T(S(a)), a = U(S(a));
      return b(c, d, a)
    };
    a.h = b;
    return a
  }(), d = function(d, i, k) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, i);
      default:
        return f.h(d, i, W(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  d.O = 2;
  d.r = f.r;
  d.Mh = c;
  d.M = b;
  d.f = a;
  d.h = f.h;
  return d
}(), Bj = function() {
  function a(a, b, c, d) {
    return X(a, X(b, X(c, d)))
  }
  function b(a, b, c) {
    return X(a, X(b, c))
  }
  var c = l, d = function() {
    function a(c, d, f, n, p) {
      var r = l;
      fa(p) && (r = R(Array.prototype.slice.call(arguments, 4)));
      return b.call(this, c, d, f, n, r)
    }
    function b(a, c, d, f, h) {
      return X(a, X(c, X(d, X(f, zj(h)))))
    }
    a.O = 4;
    a.r = function(a) {
      var c = T(a), d = T(S(a)), f = T(S(S(a))), p = T(S(S(S(a)))), a = U(S(S(S(a))));
      return b(c, d, f, p, a)
    };
    a.h = b;
    return a
  }(), c = function(c, h, i, k, m) {
    switch(arguments.length) {
      case 1:
        return Y(c);
      case 2:
        return X(c, h);
      case 3:
        return b.call(this, c, h, i);
      case 4:
        return a.call(this, c, h, i, k);
      default:
        return d.h(c, h, i, k, W(arguments, 4))
    }
    e("Invalid arity: " + arguments.length)
  };
  c.O = 4;
  c.r = d.r;
  c.M = function(a) {
    return Y(a)
  };
  c.f = function(a, b) {
    return X(a, b)
  };
  c.k = b;
  c.ia = a;
  c.h = d.h;
  return c
}();
function Cj(a) {
  return Ei(a)
}
function Dj(a) {
  return Gi(a)
}
function Ej(a, b, c) {
  var d = Y(c);
  if(0 === b) {
    return a.call(l)
  }
  var c = hi(d), f = P(d);
  if(1 === b) {
    return a.M ? a.M(c) : a.call(l, c)
  }
  var d = hi(f), h = P(f);
  if(2 === b) {
    return a.f ? a.f(c, d) : a.call(l, c, d)
  }
  var f = hi(h), i = P(h);
  if(3 === b) {
    return a.k ? a.k(c, d, f) : a.call(l, c, d, f)
  }
  var h = hi(i), k = P(i);
  if(4 === b) {
    return a.ia ? a.ia(c, d, f, h) : a.call(l, c, d, f, h)
  }
  i = hi(k);
  k = P(k);
  if(5 === b) {
    return a.Ze ? a.Ze(c, d, f, h, i) : a.call(l, c, d, f, h, i)
  }
  var a = hi(k), m = P(k);
  if(6 === b) {
    return a.xd ? a.xd(c, d, f, h, i, a) : a.call(l, c, d, f, h, i, a)
  }
  var k = hi(m), n = P(m);
  if(7 === b) {
    return a.rg ? a.rg(c, d, f, h, i, a, k) : a.call(l, c, d, f, h, i, a, k)
  }
  var m = hi(n), p = P(n);
  if(8 === b) {
    return a.Dj ? a.Dj(c, d, f, h, i, a, k, m) : a.call(l, c, d, f, h, i, a, k, m)
  }
  var n = hi(p), r = P(p);
  if(9 === b) {
    return a.Ej ? a.Ej(c, d, f, h, i, a, k, m, n) : a.call(l, c, d, f, h, i, a, k, m, n)
  }
  var p = hi(r), x = P(r);
  if(10 === b) {
    return a.sj ? a.sj(c, d, f, h, i, a, k, m, n, p) : a.call(l, c, d, f, h, i, a, k, m, n, p)
  }
  var r = hi(x), v = P(x);
  if(11 === b) {
    return a.tj ? a.tj(c, d, f, h, i, a, k, m, n, p, r) : a.call(l, c, d, f, h, i, a, k, m, n, p, r)
  }
  var x = hi(v), F = P(v);
  if(12 === b) {
    return a.uj ? a.uj(c, d, f, h, i, a, k, m, n, p, r, x) : a.call(l, c, d, f, h, i, a, k, m, n, p, r, x)
  }
  var v = hi(F), na = P(F);
  if(13 === b) {
    return a.vj ? a.vj(c, d, f, h, i, a, k, m, n, p, r, x, v) : a.call(l, c, d, f, h, i, a, k, m, n, p, r, x, v)
  }
  var F = hi(na), ea = P(na);
  if(14 === b) {
    return a.wj ? a.wj(c, d, f, h, i, a, k, m, n, p, r, x, v, F) : a.call(l, c, d, f, h, i, a, k, m, n, p, r, x, v, F)
  }
  var na = hi(ea), V = P(ea);
  if(15 === b) {
    return a.xj ? a.xj(c, d, f, h, i, a, k, m, n, p, r, x, v, F, na) : a.call(l, c, d, f, h, i, a, k, m, n, p, r, x, v, F, na)
  }
  var ea = hi(V), Qa = P(V);
  if(16 === b) {
    return a.yj ? a.yj(c, d, f, h, i, a, k, m, n, p, r, x, v, F, na, ea) : a.call(l, c, d, f, h, i, a, k, m, n, p, r, x, v, F, na, ea)
  }
  var V = hi(Qa), gb = P(Qa);
  if(17 === b) {
    return a.zj ? a.zj(c, d, f, h, i, a, k, m, n, p, r, x, v, F, na, ea, V) : a.call(l, c, d, f, h, i, a, k, m, n, p, r, x, v, F, na, ea, V)
  }
  var Qa = hi(gb), K = P(gb);
  if(18 === b) {
    return a.Aj ? a.Aj(c, d, f, h, i, a, k, m, n, p, r, x, v, F, na, ea, V, Qa) : a.call(l, c, d, f, h, i, a, k, m, n, p, r, x, v, F, na, ea, V, Qa)
  }
  gb = hi(K);
  K = P(K);
  if(19 === b) {
    return a.Bj ? a.Bj(c, d, f, h, i, a, k, m, n, p, r, x, v, F, na, ea, V, Qa, gb) : a.call(l, c, d, f, h, i, a, k, m, n, p, r, x, v, F, na, ea, V, Qa, gb)
  }
  var Il = hi(K);
  P(K);
  if(20 === b) {
    return a.Cj ? a.Cj(c, d, f, h, i, a, k, m, n, p, r, x, v, F, na, ea, V, Qa, gb, Il) : a.call(l, c, d, f, h, i, a, k, m, n, p, r, x, v, F, na, ea, V, Qa, gb, Il)
  }
  e(Error("Only up to 20 arguments supported on functions"))
}
var Fj = function() {
  function a(a, b, c, d, f) {
    b = Bj.ia(b, c, d, f);
    c = a.O;
    return L(a.r) ? (d = xj(b, c + 1), d <= c ? Ej(a, d, b) : a.r(b)) : a.apply(a, wj(b))
  }
  function b(a, b, c, d) {
    b = Bj.k(b, c, d);
    c = a.O;
    return L(a.r) ? (d = xj(b, c + 1), d <= c ? Ej(a, d, b) : a.r(b)) : a.apply(a, wj(b))
  }
  function c(a, b, c) {
    b = Bj.f(b, c);
    c = a.O;
    if(L(a.r)) {
      var d = xj(b, c + 1);
      return d <= c ? Ej(a, d, b) : a.r(b)
    }
    return a.apply(a, wj(b))
  }
  function d(a, b) {
    var c = a.O;
    if(L(a.r)) {
      var d = xj(b, c + 1);
      return d <= c ? Ej(a, d, b) : a.r(b)
    }
    return a.apply(a, wj(b))
  }
  var f = l, h = function() {
    function a(c, d, f, h, i, v) {
      var F = l;
      fa(v) && (F = R(Array.prototype.slice.call(arguments, 5)));
      return b.call(this, c, d, f, h, i, F)
    }
    function b(a, c, d, f, h, i) {
      c = X(c, X(d, X(f, X(h, zj(i)))));
      d = a.O;
      return L(a.r) ? (f = xj(c, d + 1), f <= d ? Ej(a, f, c) : a.r(c)) : a.apply(a, wj(c))
    }
    a.O = 5;
    a.r = function(a) {
      var c = T(a), d = T(S(a)), f = T(S(S(a))), h = T(S(S(S(a)))), i = T(S(S(S(S(a))))), a = U(S(S(S(S(a)))));
      return b(c, d, f, h, i, a)
    };
    a.h = b;
    return a
  }(), f = function(f, k, m, n, p, r) {
    switch(arguments.length) {
      case 2:
        return d.call(this, f, k);
      case 3:
        return c.call(this, f, k, m);
      case 4:
        return b.call(this, f, k, m, n);
      case 5:
        return a.call(this, f, k, m, n, p);
      default:
        return h.h(f, k, m, n, p, W(arguments, 5))
    }
    e("Invalid arity: " + arguments.length)
  };
  f.O = 5;
  f.r = h.r;
  f.f = d;
  f.k = c;
  f.ia = b;
  f.Ze = a;
  f.h = h.h;
  return f
}();
function Gj(a, b) {
  for(;;) {
    if(Y(b) == l) {
      return j
    }
    if(L(a.call(l, T(b)))) {
      var c = a, d = S(b), a = c, b = d
    }else {
      return o
    }
  }
}
function Hj(a) {
  return a
}
var Ij = function() {
  function a(a, b, c, f) {
    return new vj(l, o, function() {
      var n = Y(b), p = Y(c), r = Y(f);
      return L(L(n) ? L(p) ? r : p : n) ? X(a.call(l, T(n), T(p), T(r)), d.call(l, a, U(n), U(p), U(r))) : l
    })
  }
  function b(a, b, c) {
    return new vj(l, o, function() {
      var f = Y(b), n = Y(c);
      return L(L(f) ? n : f) ? X(a.call(l, T(f), T(n)), d.call(l, a, U(f), U(n))) : l
    })
  }
  function c(a, b) {
    return new vj(l, o, function() {
      var c = Y(b);
      return L(c) ? X(a.call(l, T(c)), d.call(l, a, U(c))) : l
    })
  }
  var d = l, f = function() {
    function a(c, d, f, h, r) {
      var x = l;
      fa(r) && (x = R(Array.prototype.slice.call(arguments, 4)));
      return b.call(this, c, d, f, h, x)
    }
    function b(a, c, f, h, i) {
      return d.call(l, function(b) {
        return Fj.f(a, b)
      }, function v(a) {
        return new vj(l, o, function() {
          var b = d.call(l, Y, a);
          return Gj(Hj, b) ? X(d.call(l, T, b), v.call(l, d.call(l, U, b))) : l
        })
      }.call(l, Wi.h(i, h, W([f, c], 0))))
    }
    a.O = 4;
    a.r = function(a) {
      var c = T(a), d = T(S(a)), f = T(S(S(a))), h = T(S(S(S(a)))), a = U(S(S(S(a))));
      return b(c, d, f, h, a)
    };
    a.h = b;
    return a
  }(), d = function(d, i, k, m, n) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, i);
      case 3:
        return b.call(this, d, i, k);
      case 4:
        return a.call(this, d, i, k, m);
      default:
        return f.h(d, i, k, m, W(arguments, 4))
    }
    e("Invalid arity: " + arguments.length)
  };
  d.O = 4;
  d.r = f.r;
  d.f = c;
  d.k = b;
  d.ia = a;
  d.h = f.h;
  return d
}(), Kj = function Jj(b, c) {
  return new vj(l, o, function() {
    if(0 < b) {
      var d = Y(c);
      return L(d) ? X(T(d), Jj.call(l, b - 1, U(d))) : l
    }
    return l
  })
};
function Lj(a) {
  function b(a, b) {
    for(;;) {
      var f = Y(b), h = 0 < a;
      if(L(h ? f : h)) {
        h = a - 1, f = U(f), a = h, b = f
      }else {
        return f
      }
    }
  }
  return new vj(l, o, function() {
    return b.call(l, 1, a)
  })
}
var Mj = function() {
  function a(a, b) {
    return Kj(a, c.call(l, b))
  }
  function b(a) {
    return new vj(l, o, function() {
      return X(a, c.call(l, a))
    })
  }
  var c = l, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.M = b;
  c.f = a;
  return c
}(), Nj = function() {
  function a(a, c) {
    return new vj(l, o, function() {
      var h = Y(a), i = Y(c);
      return L(L(h) ? i : h) ? X(T(h), X(T(i), b.call(l, U(h), U(i)))) : l
    })
  }
  var b = l, c = function() {
    function a(b, d, k) {
      var m = l;
      fa(k) && (m = R(Array.prototype.slice.call(arguments, 2)));
      return c.call(this, b, d, m)
    }
    function c(a, d, f) {
      return new vj(l, o, function() {
        var c = Ij.f(Y, Wi.h(f, d, W([a], 0)));
        return Gj(Hj, c) ? Aj.f(Ij.f(T, c), Fj.f(b, Ij.f(U, c))) : l
      })
    }
    a.O = 2;
    a.r = function(a) {
      var b = T(a), d = T(S(a)), a = U(S(a));
      return c(b, d, a)
    };
    a.h = c;
    return a
  }(), b = function(b, f, h) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, f);
      default:
        return c.h(b, f, W(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.O = 2;
  b.r = c.r;
  b.f = a;
  b.h = c.h;
  return b
}();
function Oj(a, b) {
  return Lj(Nj.f(Mj.M(a), b))
}
function Pj(a) {
  return function c(a, f) {
    return new vj(l, o, function() {
      var h = Y(a);
      return L(h) ? X(T(h), c.call(l, U(h), f)) : L(Y(f)) ? c.call(l, T(f), U(f)) : l
    })
  }.call(l, l, a)
}
function Qj(a, b) {
  var c;
  c = a != l ? ((c = a.o & 2147483648) ? c : a.kg) ? j : a.o ? o : M(Di, a) : M(Di, a);
  return c ? Dj(lj.k(Fi, Ei(a), b)) : lj.k(di, a, b)
}
var Sj = function() {
  function a(a, b, c, d) {
    return Qj(Rj([]), Ij.ia(a, b, c, d))
  }
  function b(a, b, c) {
    return Qj(Rj([]), Ij.k(a, b, c))
  }
  function c(a, b) {
    return Dj(lj.k(function(b, c) {
      var d = a.call(l, c);
      return Fi(b, d)
    }, Cj(Rj([])), b))
  }
  var d = l, f = function() {
    function a(c, d, f, h, r) {
      var x = l;
      fa(r) && (x = R(Array.prototype.slice.call(arguments, 4)));
      return b.call(this, c, d, f, h, x)
    }
    function b(a, c, d, f, h) {
      return Qj(Rj([]), Fj.h(Ij, a, c, d, f, W([h], 0)))
    }
    a.O = 4;
    a.r = function(a) {
      var c = T(a), d = T(S(a)), f = T(S(S(a))), h = T(S(S(S(a)))), a = U(S(S(S(a))));
      return b(c, d, f, h, a)
    };
    a.h = b;
    return a
  }(), d = function(d, i, k, m, n) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, i);
      case 3:
        return b.call(this, d, i, k);
      case 4:
        return a.call(this, d, i, k, m);
      default:
        return f.h(d, i, k, m, W(arguments, 4))
    }
    e("Invalid arity: " + arguments.length)
  };
  d.O = 4;
  d.r = f.r;
  d.f = c;
  d.k = b;
  d.ia = a;
  d.h = f.h;
  return d
}();
function Tj(a, b) {
  this.Q = a;
  this.g = b
}
function Uj(a) {
  return new Tj(a.Q, $h(a.g))
}
function Vj(a) {
  a = a.j;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function Wj(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new Tj(a, ai.M(32));
    d.g[0] = c;
    c = d;
    b -= 5
  }
}
var Yj = function Xj(b, c, d, f) {
  var h = Uj(d), i = b.j - 1 >>> c & 31;
  5 === c ? h.g[i] = f : (d = d.g[i], b = L(d) ? Xj.call(l, b, c - 5, d, f) : Wj(l, c - 5, f), h.g[i] = b);
  return h
};
function Zj(a, b) {
  var c = 0 <= b;
  if(c ? b < a.j : c) {
    if(b >= Vj(a)) {
      return a.ab
    }
    for(var c = a.root, d = a.shift;;) {
      if(0 < d) {
        var f = d - 5, c = c.g[b >>> d & 31], d = f
      }else {
        return c.g
      }
    }
  }else {
    e(Error([Z("No item "), Z(b), Z(" in vector of length "), Z(a.j)].join("")))
  }
}
var ak = function $j(b, c, d, f, h) {
  var i = Uj(d);
  if(0 === c) {
    i.g[f & 31] = h
  }else {
    var k = f >>> c & 31, b = $j.call(l, b, c - 5, d.g[k], f, h);
    i.g[k] = b
  }
  return i
}, ck = function bk(b, c, d) {
  var f = b.j - 2 >>> c & 31;
  if(5 < c) {
    b = bk.call(l, b, c - 5, d.g[f]);
    if((c = b == l) ? 0 === f : c) {
      return l
    }
    d = Uj(d);
    d.g[f] = b;
    return d
  }
  if(0 === f) {
    return l
  }
  d = Uj(d);
  d.g[f] = l;
  return d
}, gk = function dk(b, c) {
  var d = ci(b);
  if(0 < d) {
    if(g === Zh) {
      Zh = function(b, c, d, k, m) {
        this.Fh = b;
        this.qc = c;
        this.th = d;
        this.dj = k;
        this.fj = m;
        this.sa = 0;
        this.o = 282263648
      }, Zh.Gj = j, Zh.Fj = function() {
        return Mi.h(W(["cljs.core.t9616"], 0))
      }, Zh.prototype.Qa = aa(), Zh.prototype.mb = j, Zh.prototype.Yb = function() {
        return O.f(this.th, this.qc)
      }, Zh.prototype.Zb = function() {
        var b = this.qc + 1;
        return b < this.Fh ? this.dj.call(l, this.th, b) : Vi
      }, Zh.prototype.ge = j, Zh.prototype.ra = function(b, c) {
        return Ui(b, c)
      }, Zh.prototype.xb = j, Zh.prototype.Pa = j, Zh.prototype.Ha = function(b, c) {
        return ek(fk, "(", " ", ")", c, b)
      }, Zh.prototype.Na = j, Zh.prototype.Oa = q("fj"), Zh.prototype.Wa = function(b, c) {
        return new Zh(this.Fh, this.qc, this.th, this.dj, c)
      }
    }
    return new Zh(d, c, b, dk, l)
  }
  return l
};
function hk(a, b, c, d, f, h) {
  this.H = a;
  this.j = b;
  this.shift = c;
  this.root = d;
  this.ab = f;
  this.t = h;
  this.sa = 0;
  this.o = 2164209055
}
t = hk.prototype;
t.kg = j;
t.We = function() {
  var a = this.j, b = this.shift, c = new Tj({}, $h(this.root.g)), d = this.ab, f = ai.M(32);
  hj(d, 0, f, 0, d.length);
  return new ik(a, b, c, f)
};
t.Ma = function(a) {
  var b = this.t;
  return b != l ? b : this.t = a = Ri(a)
};
t.jc = function(a, b) {
  return O.k(a, b, l)
};
t.kc = function(a, b, c) {
  return O.k(a, b, c)
};
t.Zc = function(a, b, c) {
  var d = 0 <= b;
  if(d ? b < this.j : d) {
    return Vj(a) <= b ? (a = $h(this.ab), a[b & 31] = c, new hk(this.H, this.j, this.shift, this.root, a, l)) : new hk(this.H, this.j, this.shift, ak(a, this.shift, this.root, b, c), this.ab, l)
  }
  if(b === this.j) {
    return di(a, c)
  }
  e(Error([Z("Index "), Z(b), Z(" out of bounds  [0,"), Z(this.j), Z("]")].join("")))
};
t.call = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return Q.f(this, b);
      case 3:
        return Q.k(this, b, c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
t.apply = function(a, b) {
  return a.call.apply(a, [a].concat($h(b)))
};
t.xb = j;
t.Va = function(a, b) {
  if(32 > this.j - Vj(a)) {
    var c = $h(this.ab);
    c.push(b);
    return new hk(this.H, this.j + 1, this.shift, this.root, c, l)
  }
  var d = this.j >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  if(d) {
    d = new Tj(l, ai.M(32));
    d.g[0] = this.root;
    var f = Wj(l, this.shift, new Tj(l, this.ab));
    d.g[1] = f
  }else {
    d = Yj(a, this.shift, this.root, new Tj(l, this.ab))
  }
  return new hk(this.H, this.j + 1, c, d, [b], l)
};
t.mg = j;
t.Xe = function(a) {
  return O.f(a, 0)
};
t.Ye = function(a) {
  return O.f(a, 1)
};
t.toString = function() {
  return Si.h(W([this], 0))
};
t.he = j;
t.ie = function(a, b) {
  return Pi.f(a, b)
};
t.je = function(a, b, c) {
  return Pi.k(a, b, c)
};
t.Qa = function(a) {
  return gk(a, 0)
};
t.wb = j;
t.lb = q("j");
t.vd = function(a) {
  return 0 < this.j ? O.f(a, this.j - 1) : l
};
t.wd = function(a) {
  0 === this.j && e(Error("Can't pop empty vector"));
  if(1 === this.j) {
    return ti(jk, this.H)
  }
  if(1 < this.j - Vj(a)) {
    return new hk(this.H, this.j - 1, this.shift, this.root, this.ab.slice(0, -1), l)
  }
  var b = Zj(a, this.j - 2), a = ck(a, this.shift, this.root), a = a == l ? kk : a, c = this.j - 1, d = 5 < this.shift;
  return(d ? a.g[1] == l : d) ? new hk(this.H, c, this.shift - 5, a.g[0], b, l) : new hk(this.H, c, this.shift, a, b, l)
};
t.qg = j;
t.ra = function(a, b) {
  return Ui(a, b)
};
t.Wa = function(a, b) {
  return new hk(b, this.j, this.shift, this.root, this.ab, this.t)
};
t.Na = j;
t.Oa = q("H");
t.$c = j;
t.td = function(a, b) {
  return Zj(a, b)[b & 31]
};
t.ud = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.j : d) ? O.f(a, b) : c
};
var kk = new Tj(l, ai.M(32)), jk = new hk(l, 0, 5, kk, [], 0);
function Rj(a) {
  for(var b = Y(a), c = Ei(jk);;) {
    if(L(b)) {
      a = S(b), b = T(b), c = Fi(c, b), b = a
    }else {
      return Gi(c)
    }
  }
}
var lk = function() {
  function a(a) {
    var c = l;
    fa(a) && (c = R(Array.prototype.slice.call(arguments, 0)));
    return lj.k(Wi, jk, c)
  }
  a.O = 0;
  a.r = function(a) {
    a = Y(a);
    return lj.k(Wi, jk, a)
  };
  a.h = function(a) {
    return lj.k(Wi, jk, a)
  };
  return a
}(), nk = function mk(b, c, d, f) {
  var d = b.root.Q === d.Q ? d : new Tj(b.root.Q, $h(d.g)), h = b.j - 1 >>> c & 31;
  if(5 === c) {
    b = f
  }else {
    var i = d.g[h], b = i != l ? mk.call(l, b, c - 5, i, f) : Wj(b.root.Q, c - 5, f)
  }
  d.g[h] = b;
  return d
};
function ik(a, b, c, d) {
  this.j = a;
  this.shift = b;
  this.root = c;
  this.ab = d;
  this.o = 147;
  this.sa = 11
}
t = ik.prototype;
t.call = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return Q.f(this, b);
      case 3:
        return Q.k(this, b, c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
t.apply = function(a, b) {
  return a.call.apply(a, [a].concat($h(b)))
};
t.jc = function(a, b) {
  return O.k(a, b, l)
};
t.kc = function(a, b, c) {
  return O.k(a, b, c)
};
t.$c = j;
t.td = function(a, b) {
  if(L(this.root.Q)) {
    return Zj(a, b)[b & 31]
  }
  e(Error("nth after persistent!"))
};
t.ud = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.j : d) ? O.f(a, b) : c
};
t.wb = j;
t.lb = function() {
  if(L(this.root.Q)) {
    return this.j
  }
  e(Error("count after persistent!"))
};
t.Kh = function(a, b, c) {
  var d = this;
  if(L(d.root.Q)) {
    if(function() {
      var a = 0 <= b;
      return a ? b < d.j : a
    }()) {
      if(Vj(a) <= b) {
        d.ab[b & 31] = c
      }else {
        var f = function i(a, f) {
          var n = d.root.Q === f.Q ? f : new Tj(d.root.Q, $h(f.g));
          if(0 === a) {
            n.g[b & 31] = c
          }else {
            var p = b >>> a & 31, r = i.call(l, a - 5, n.g[p]);
            n.g[p] = r
          }
          return n
        }.call(l, d.shift, d.root);
        d.root = f
      }
      return a
    }
    if(b === d.j) {
      return Fi(a, c)
    }
    e(Error([Z("Index "), Z(b), Z(" out of bounds for TransientVector of length"), Z(d.j)].join("")))
  }
  e(Error("assoc! after persistent!"))
};
t.ng = function(a, b, c) {
  return Ii(a, b, c)
};
t.og = function(a, b) {
  if(L(this.root.Q)) {
    if(32 > this.j - Vj(a)) {
      this.ab[this.j & 31] = b
    }else {
      var c = new Tj(this.root.Q, this.ab), d = ai.M(32);
      d[0] = b;
      this.ab = d;
      if(this.j >>> 5 > 1 << this.shift) {
        var d = ai.M(32), f = this.shift + 5;
        d[0] = this.root;
        d[1] = Wj(this.root.Q, this.shift, c);
        this.root = new Tj(this.root.Q, d);
        this.shift = f
      }else {
        this.root = nk(a, this.shift, this.root, c)
      }
    }
    this.j += 1;
    return a
  }
  e(Error("conj! after persistent!"))
};
t.pg = function(a) {
  if(L(this.root.Q)) {
    this.root.Q = l;
    var a = this.j - Vj(a), b = ai.M(a);
    hj(this.ab, 0, b, 0, a);
    return new hk(l, this.j, this.shift, this.root, b, l)
  }
  e(Error("persistent! called twice"))
};
Rj([]);
function ok() {
  this.sa = 0;
  this.o = 1048576
}
ok.prototype.ra = s(o);
var pk = new ok;
function qk(a, b) {
  return ij(fj(b) ? Xi(a) === Xi(b) ? Gj(Hj, Ij.f(function(a) {
    return Ji.f(aj.k(b, T(a), pk), T(S(a)))
  }, a)) : l : l)
}
var rk = function() {
  function a(a, b, c, i) {
    var k = y.call(l, a);
    return L(L(k) ? b.hasOwnProperty(a) : k) ? c : i
  }
  function b(a, b) {
    return c.call(l, a, b, j, o)
  }
  var c = l, c = function(c, f, h, i) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 4:
        return a.call(this, c, f, h, i)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.f = b;
  c.ia = a;
  return c
}();
function sk(a, b) {
  var c = xi(a), d = xi(b);
  return c < d ? -1 : c > d ? 1 : 0
}
function tk(a, b, c, d, f) {
  this.H = a;
  this.keys = b;
  this.Sc = c;
  this.Vf = d;
  this.t = f;
  this.sa = 0;
  this.o = 2155021199
}
t = tk.prototype;
t.kg = j;
t.We = function(a) {
  return Cj(Qj(Li(), a))
};
t.Ma = function(a) {
  var b = this.t;
  return b != l ? b : this.t = a = qj(a)
};
t.jc = function(a, b) {
  return Q.k(a, b, l)
};
t.kc = function(a, b, c) {
  return rk.ia(b, this.Sc, this.Sc[b], c)
};
t.Zc = function(a, b, c) {
  if(L(y.call(l, b))) {
    if(L(this.Sc.hasOwnProperty(b))) {
      var d = ec.call(l, this.Sc);
      d[b] = c;
      return new tk(this.H, this.keys, d, this.Vf + 1, l)
    }
    if(this.Vf < uk) {
      var d = ec.call(l, this.Sc), f = $h(this.keys);
      d[b] = c;
      f.push(b);
      return new tk(this.H, f, d, this.Vf + 1, l)
    }
  }
  a: {
    for(var f = a.keys, h = f.length, i = a.Sc, k = cj(vk, dj(a)), a = 0, k = Ei(k);;) {
      if(a < h) {
        var m = f[a], a = a + 1, k = Hi(k, m, i[m])
      }else {
        d = Dj(Hi(k, b, c));
        break a
      }
    }
  }
  return d
};
t.call = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return Q.f(this, b);
      case 3:
        return Q.k(this, b, c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
t.apply = function(a, b) {
  return a.call.apply(a, [a].concat($h(b)))
};
t.Va = function(a, b) {
  return gj(b) ? ii(a, O.f(b, 0), O.f(b, 1)) : lj.k(di, a, b)
};
t.toString = function() {
  return Si.h(W([this], 0))
};
t.Qa = function() {
  var a = this;
  return 0 < a.keys.length ? Ij.f(function(b) {
    return lk.h(W([b, a.Sc[b]], 0))
  }, a.keys.sort(sk)) : l
};
t.wb = j;
t.lb = function() {
  return this.keys.length
};
t.ra = function(a, b) {
  return qk(a, b)
};
t.Wa = function(a, b) {
  return new tk(b, this.keys, this.Sc, this.Vf, this.t)
};
t.Na = j;
t.Oa = q("H");
t.lg = j;
var uk = 32;
function wk(a, b) {
  return new tk(l, a, b, 0, l)
}
var xk = function() {
  function a(a, b, c, i, k) {
    a = $h(a);
    a[b] = c;
    a[i] = k;
    return a
  }
  function b(a, b, c) {
    a = $h(a);
    a[b] = c;
    return a
  }
  var c = l, c = function(c, f, h, i, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, f, h);
      case 5:
        return a.call(this, c, f, h, i, k)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.k = b;
  c.Ze = a;
  return c
}(), yk = function() {
  function a(a, b, c, i, k, m) {
    a = a.bd(b);
    a.g[c] = i;
    a.g[k] = m;
    return a
  }
  function b(a, b, c, i) {
    a = a.bd(b);
    a.g[c] = i;
    return a
  }
  var c = l, c = function(c, f, h, i, k, m) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, f, h, i);
      case 6:
        return a.call(this, c, f, h, i, k, m)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.ia = b;
  c.xd = a;
  return c
}();
function zk(a, b, c) {
  this.Q = a;
  this.ha = b;
  this.g = c
}
t = zk.prototype;
t.Pb = function(a, b, c, d, f, h) {
  var i = 1 << (c >>> b & 31), k = nj(this.ha & i - 1);
  if(0 === (this.ha & i)) {
    var m = nj(this.ha);
    if(2 * m < this.g.length) {
      a = this.bd(a);
      b = a.g;
      h[0] = j;
      a: {
        c = 2 * (m - k);
        h = 2 * k + (c - 1);
        for(m = 2 * (k + 1) + (c - 1);;) {
          if(0 === c) {
            break a
          }
          b[m] = b[h];
          m -= 1;
          c -= 1;
          h -= 1
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = f;
      a.ha |= i;
      return a
    }
    if(16 <= m) {
      k = ai.M(32);
      k[c >>> b & 31] = Ak.Pb(a, b + 5, c, d, f, h);
      for(f = d = 0;;) {
        if(32 > d) {
          0 !== (this.ha >>> d & 1) && (k[d] = l != this.g[f] ? Ak.Pb(a, b + 5, xi(this.g[f]), this.g[f], this.g[f + 1], h) : this.g[f + 1], f += 2), d += 1
        }else {
          break
        }
      }
      return new Bk(a, m + 1, k)
    }
    b = ai.M(2 * (m + 4));
    hj(this.g, 0, b, 0, 2 * k);
    b[2 * k] = d;
    h[0] = j;
    b[2 * k + 1] = f;
    hj(this.g, 2 * k, b, 2 * (k + 1), 2 * (m - k));
    d = this.bd(a);
    d.g = b;
    d.ha |= i;
    return d
  }
  m = this.g[2 * k];
  i = this.g[2 * k + 1];
  if(l == m) {
    return d = i.Pb(a, b + 5, c, d, f, h), d === i ? this : yk.ia(this, a, 2 * k + 1, d)
  }
  if(Ji.f(d, m)) {
    return f === i ? this : yk.ia(this, a, 2 * k + 1, f)
  }
  h[0] = j;
  return yk.xd(this, a, 2 * k, l, 2 * k + 1, Ck.rg(a, b + 5, m, i, c, d, f))
};
t.te = function() {
  return Dk.M(this.g)
};
t.bd = function(a) {
  if(a === this.Q) {
    return this
  }
  var b = nj(this.ha), c = ai.M(0 > b ? 4 : 2 * (b + 1));
  hj(this.g, 0, c, 0, 2 * b);
  return new zk(a, this.ha, c)
};
t.oc = function() {
  return function(a, b, c, d) {
    switch(arguments.length) {
      case 3:
        var f;
        f = 1 << (b >>> a & 31);
        if(0 === (this.ha & f)) {
          f = l
        }else {
          var h = nj(this.ha & f - 1);
          f = this.g[2 * h];
          h = this.g[2 * h + 1];
          f = l == f ? h.oc(a + 5, b, c) : Ji.f(c, f) ? Rj([f, h]) : l
        }
        return f;
      case 4:
        return f = 1 << (b >>> a & 31), 0 === (this.ha & f) ? f = d : (h = nj(this.ha & f - 1), f = this.g[2 * h], h = this.g[2 * h + 1], f = l == f ? h.oc(a + 5, b, c, d) : Ji.f(c, f) ? Rj([f, h]) : d), f
    }
    e("Invalid arity: " + arguments.length)
  }
}();
t.Ob = function(a, b, c, d, f) {
  var h = 1 << (b >>> a & 31), i = nj(this.ha & h - 1);
  if(0 === (this.ha & h)) {
    var k = nj(this.ha);
    if(16 <= k) {
      i = ai.M(32);
      i[b >>> a & 31] = Ak.Ob(a + 5, b, c, d, f);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.ha >>> c & 1) && (i[c] = l != this.g[d] ? Ak.Ob(a + 5, xi(this.g[d]), this.g[d], this.g[d + 1], f) : this.g[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new Bk(l, k + 1, i)
    }
    a = ai.M(2 * (k + 1));
    hj(this.g, 0, a, 0, 2 * i);
    a[2 * i] = c;
    f[0] = j;
    a[2 * i + 1] = d;
    hj(this.g, 2 * i, a, 2 * (i + 1), 2 * (k - i));
    return new zk(l, this.ha | h, a)
  }
  h = this.g[2 * i];
  k = this.g[2 * i + 1];
  if(l == h) {
    return f = k.Ob(a + 5, b, c, d, f), f === k ? this : new zk(l, this.ha, xk.k(this.g, 2 * i + 1, f))
  }
  if(Ji.f(c, h)) {
    return d === k ? this : new zk(l, this.ha, xk.k(this.g, 2 * i + 1, d))
  }
  f[0] = j;
  return new zk(l, this.ha, xk.Ze(this.g, 2 * i, l, 2 * i + 1, Ck.xd(a + 5, h, k, b, c, d)))
};
var Ak = new zk(l, 0, ai.M(0));
function Bk(a, b, c) {
  this.Q = a;
  this.j = b;
  this.g = c
}
t = Bk.prototype;
t.Ob = function(a, b, c, d, f) {
  var h = b >>> a & 31, i = this.g[h];
  if(l == i) {
    return new Bk(l, this.j + 1, xk.k(this.g, h, Ak.Ob(a + 5, b, c, d, f)))
  }
  a = i.Ob(a + 5, b, c, d, f);
  return a === i ? this : new Bk(l, this.j, xk.k(this.g, h, a))
};
t.oc = function() {
  return function(a, b, c, d) {
    switch(arguments.length) {
      case 3:
        var f = this.g[b >>> a & 31];
        return l != f ? f.oc(a + 5, b, c) : l;
      case 4:
        return f = this.g[b >>> a & 31], l != f ? f.oc(a + 5, b, c, d) : d
    }
    e("Invalid arity: " + arguments.length)
  }
}();
t.te = function() {
  return Ek.M(this.g)
};
t.bd = function(a) {
  return a === this.Q ? this : new Bk(a, this.j, $h(this.g))
};
t.Pb = function(a, b, c, d, f, h) {
  var i = c >>> b & 31, k = this.g[i];
  if(l == k) {
    return a = yk.ia(this, a, i, Ak.Pb(a, b + 5, c, d, f, h)), a.j += 1, a
  }
  b = k.Pb(a, b + 5, c, d, f, h);
  return b === k ? this : yk.ia(this, a, i, b)
};
function Fk(a, b, c) {
  for(var b = 2 * b, d = 0;;) {
    if(d < b) {
      if(Ji.f(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function Gk(a, b, c, d) {
  this.Q = a;
  this.vc = b;
  this.j = c;
  this.g = d
}
t = Gk.prototype;
t.Ob = function(a, b, c, d, f) {
  if(b === this.vc) {
    a = Fk(this.g, this.j, c);
    return-1 === a ? (a = this.g.length, b = ai.M(a + 2), hj(this.g, 0, b, 0, a), b[a] = c, b[a + 1] = d, f[0] = j, new Gk(l, this.vc, this.j + 1, b)) : Ji.f(this.g[a], d) ? this : new Gk(l, this.vc, this.j, xk.k(this.g, a + 1, d))
  }
  return(new zk(l, 1 << (this.vc >>> a & 31), [l, this])).Ob(a, b, c, d, f)
};
t.oc = function() {
  return function(a, b, c, d) {
    switch(arguments.length) {
      case 3:
        var f = Fk(this.g, this.j, c);
        return 0 > f ? l : Ji.f(c, this.g[f]) ? Rj([this.g[f], this.g[f + 1]]) : l;
      case 4:
        return f = Fk(this.g, this.j, c), 0 > f ? d : Ji.f(c, this.g[f]) ? Rj([this.g[f], this.g[f + 1]]) : d
    }
    e("Invalid arity: " + arguments.length)
  }
}();
t.te = function() {
  return Dk.M(this.g)
};
t.bd = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 1:
        var d;
        a === this.Q ? d = this : (d = ai.M(2 * (this.j + 1)), hj(this.g, 0, d, 0, 2 * this.j), d = new Gk(a, this.vc, this.j, d));
        return d;
      case 3:
        return a === this.Q ? (this.g = c, this.j = b, d = this) : d = new Gk(this.Q, this.vc, b, c), d
    }
    e("Invalid arity: " + arguments.length)
  }
}();
t.Pb = function(a, b, c, d, f, h) {
  if(c === this.vc) {
    b = Fk(this.g, this.j, d);
    if(-1 === b) {
      if(this.g.length > 2 * this.j) {
        return a = yk.xd(this, a, 2 * this.j, d, 2 * this.j + 1, f), h[0] = j, a.j += 1, a
      }
      b = this.g.length;
      c = ai.M(b + 2);
      hj(this.g, 0, c, 0, b);
      c[b] = d;
      c[b + 1] = f;
      h[0] = j;
      return this.bd(a, this.j + 1, c)
    }
    return this.g[b + 1] === f ? this : yk.ia(this, a, b + 1, f)
  }
  return(new zk(a, 1 << (this.vc >>> b & 31), [l, this, l, l])).Pb(a, b, c, d, f, h)
};
var Ck = function() {
  function a(a, b, c, i, k, m, n) {
    var p = xi(c);
    if(p === k) {
      return new Gk(l, p, 2, [c, i, m, n])
    }
    var r = [o];
    return Ak.Pb(a, b, p, c, i, r).Pb(a, b, k, m, n, r)
  }
  function b(a, b, c, i, k, m) {
    var n = xi(b);
    if(n === i) {
      return new Gk(l, n, 2, [b, c, k, m])
    }
    var p = [o];
    return Ak.Ob(a, n, b, c, p).Ob(a, i, k, m, p)
  }
  var c = l, c = function(c, f, h, i, k, m, n) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, f, h, i, k, m);
      case 7:
        return a.call(this, c, f, h, i, k, m, n)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.xd = b;
  c.rg = a;
  return c
}();
function Hk(a, b, c, d, f) {
  this.H = a;
  this.Mc = b;
  this.va = c;
  this.tc = d;
  this.t = f;
  this.sa = 0;
  this.o = 15925324
}
t = Hk.prototype;
t.Ma = function(a) {
  var b = this.t;
  return b != l ? b : this.t = a = Ri(a)
};
t.xb = j;
t.Va = function(a, b) {
  return X(b, a)
};
t.toString = function() {
  return Si.h(W([this], 0))
};
t.Qa = aa();
t.mb = j;
t.Yb = function() {
  return this.tc == l ? Rj([this.Mc[this.va], this.Mc[this.va + 1]]) : T(this.tc)
};
t.Zb = function() {
  return this.tc == l ? Dk.k(this.Mc, this.va + 2, l) : Dk.k(this.Mc, this.va, S(this.tc))
};
t.ra = function(a, b) {
  return Ui(a, b)
};
t.Wa = function(a, b) {
  return new Hk(b, this.Mc, this.va, this.tc, this.t)
};
t.Na = j;
t.Oa = q("H");
var Dk = function() {
  function a(a, b, c) {
    if(c == l) {
      for(c = a.length;;) {
        if(b < c) {
          if(l != a[b]) {
            return new Hk(l, a, b, l, l)
          }
          var i = a[b + 1];
          if(L(i) && (i = i.te(), L(i))) {
            return new Hk(l, a, b + 2, i, l)
          }
          b += 2
        }else {
          return l
        }
      }
    }else {
      return new Hk(l, a, b, c, l)
    }
  }
  function b(a) {
    return c.call(l, a, 0, l)
  }
  var c = l, c = function(c, f, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.M = b;
  c.k = a;
  return c
}();
function Ik(a, b, c, d, f) {
  this.H = a;
  this.Mc = b;
  this.va = c;
  this.tc = d;
  this.t = f;
  this.sa = 0;
  this.o = 15925324
}
t = Ik.prototype;
t.Ma = function(a) {
  var b = this.t;
  return b != l ? b : this.t = a = Ri(a)
};
t.xb = j;
t.Va = function(a, b) {
  return X(b, a)
};
t.toString = function() {
  return Si.h(W([this], 0))
};
t.Qa = aa();
t.mb = j;
t.Yb = function() {
  return T(this.tc)
};
t.Zb = function() {
  return Ek.ia(l, this.Mc, this.va, S(this.tc))
};
t.ra = function(a, b) {
  return Ui(a, b)
};
t.Wa = function(a, b) {
  return new Ik(b, this.Mc, this.va, this.tc, this.t)
};
t.Na = j;
t.Oa = q("H");
var Ek = function() {
  function a(a, b, c, i) {
    if(i == l) {
      for(i = b.length;;) {
        if(c < i) {
          var k = b[c];
          if(L(k) && (k = k.te(), L(k))) {
            return new Ik(a, b, c + 1, k, l)
          }
          c += 1
        }else {
          return l
        }
      }
    }else {
      return new Ik(a, b, c, i, l)
    }
  }
  function b(a) {
    return c.call(l, l, a, 0, l)
  }
  var c = l, c = function(c, f, h, i) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, f, h, i)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.M = b;
  c.ia = a;
  return c
}();
function Jk(a, b, c, d, f, h) {
  this.H = a;
  this.j = b;
  this.root = c;
  this.ob = d;
  this.Fb = f;
  this.t = h;
  this.sa = 0;
  this.o = 2155545487
}
t = Jk.prototype;
t.kg = j;
t.We = function() {
  return new Kk({}, this.root, this.j, this.ob, this.Fb)
};
t.Ma = function(a) {
  var b = this.t;
  return b != l ? b : this.t = a = qj(a)
};
t.jc = function(a, b) {
  return Q.k(a, b, l)
};
t.kc = function(a, b, c) {
  return b == l ? L(this.ob) ? this.Fb : c : this.root == l ? c : $i.f(this.root.oc(0, xi(b), b, [l, c]), 1)
};
t.Zc = function(a, b, c) {
  if(b == l) {
    var d = this.ob;
    return L(L(d) ? c === this.Fb : d) ? a : new Jk(this.H, L(this.ob) ? this.j : this.j + 1, this.root, j, c, l)
  }
  d = [o];
  c = (this.root == l ? Ak : this.root).Ob(0, xi(b), b, c, d);
  return c === this.root ? a : new Jk(this.H, L(d[0]) ? this.j + 1 : this.j, c, this.ob, this.Fb, l)
};
t.call = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return Q.f(this, b);
      case 3:
        return Q.k(this, b, c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
t.apply = function(a, b) {
  return a.call.apply(a, [a].concat($h(b)))
};
t.Va = function(a, b) {
  return gj(b) ? ii(a, O.f(b, 0), O.f(b, 1)) : lj.k(di, a, b)
};
t.toString = function() {
  return Si.h(W([this], 0))
};
t.Qa = function() {
  if(0 < this.j) {
    var a = l != this.root ? this.root.te() : l;
    return L(this.ob) ? X(Rj([l, this.Fb]), a) : a
  }
  return l
};
t.wb = j;
t.lb = q("j");
t.ra = function(a, b) {
  return qk(a, b)
};
t.Wa = function(a, b) {
  return new Jk(b, this.j, this.root, this.ob, this.Fb, this.t)
};
t.Na = j;
t.Oa = q("H");
t.lg = j;
var vk = new Jk(l, 0, l, o, l, 0);
function Kk(a, b, c, d, f) {
  this.Q = a;
  this.root = b;
  this.$b = c;
  this.ob = d;
  this.Fb = f;
  this.sa = 7;
  this.o = 130
}
t = Kk.prototype;
t.ng = function(a, b, c) {
  return Lk(a, b, c)
};
t.og = function(a, b) {
  var c;
  a: {
    if(L(a.Q)) {
      var d;
      d = b != l ? ((d = b.o & 1024) ? d : b.mg) ? j : b.o ? o : M(ki, b) : M(ki, b);
      if(d) {
        c = Lk(a, li(b), mi(b))
      }else {
        d = Y(b);
        for(var f = a;;) {
          var h = T(d);
          if(L(h)) {
            d = S(d), f = Lk(f, li(h), mi(h))
          }else {
            c = f;
            break a
          }
        }
      }
    }else {
      e(Error("conj! after persistent"))
    }
  }
  return c
};
t.pg = function(a) {
  var b;
  L(a.Q) ? (a.Q = l, b = new Jk(l, a.$b, a.root, a.ob, a.Fb, l)) : e(Error("persistent! called twice"));
  return b
};
t.jc = function(a, b) {
  return b == l ? L(this.ob) ? this.Fb : l : this.root == l ? l : $i.f(this.root.oc(0, xi(b), b), 1)
};
t.kc = function(a, b, c) {
  return b == l ? L(this.ob) ? this.Fb : c : this.root == l ? c : $i.f(this.root.oc(0, xi(b), b, [l, c]), 1)
};
t.wb = j;
t.lb = function() {
  if(L(this.Q)) {
    return this.$b
  }
  e(Error("count after persistent!"))
};
function Lk(a, b, c) {
  if(L(a.Q)) {
    if(b == l) {
      if(a.Fb !== c) {
        a.Fb = c
      }
      if(!L(a.ob)) {
        a.$b += 1, a.ob = j
      }
    }else {
      var d = [o], b = (a.root == l ? Ak : a.root).Pb(a.Q, 0, xi(b), b, c, d);
      if(b !== a.root) {
        a.root = b
      }
      L(d[0]) && (a.$b += 1)
    }
    return a
  }
  e(Error("assoc! after persistent!"))
}
function Mk(a, b, c) {
  for(var d = b;;) {
    if(a != l) {
      b = L(c) ? a.left : a.right, d = Wi.f(d, a), a = b
    }else {
      return d
    }
  }
}
function Nk(a, b, c, d, f) {
  this.H = a;
  this.stack = b;
  this.Ue = c;
  this.j = d;
  this.t = f;
  this.sa = 0;
  this.o = 15925322
}
t = Nk.prototype;
t.Ma = function(a) {
  var b = this.t;
  return b != l ? b : this.t = a = Ri(a)
};
t.xb = j;
t.Va = function(a, b) {
  return X(b, a)
};
t.toString = function() {
  return Si.h(W([this], 0))
};
t.Qa = aa();
t.wb = j;
t.lb = function(a) {
  return 0 > this.j ? Xi(S(a)) + 1 : this.j
};
t.mb = j;
t.Yb = function() {
  return ni(this.stack)
};
t.Zb = function() {
  var a = ni(this.stack), a = Mk(L(this.Ue) ? a.right : a.left, oi(this.stack), this.Ue);
  return a != l ? new Nk(l, a, this.Ue, this.j - 1, l) : l
};
t.ra = function(a, b) {
  return Ui(a, b)
};
t.Wa = function(a, b) {
  return new Nk(b, this.stack, this.Ue, this.j, this.t)
};
t.Na = j;
t.Oa = q("H");
function Ok(a, b, c, d, f) {
  this.key = a;
  this.F = b;
  this.left = c;
  this.right = d;
  this.t = f;
  this.sa = 0;
  this.o = 16201119
}
t = Ok.prototype;
t.Ma = function(a) {
  var b = this.t;
  return b != l ? b : this.t = a = Ri(a)
};
t.jc = function(a, b) {
  return O.k(a, b, l)
};
t.kc = function(a, b, c) {
  return O.k(a, b, c)
};
t.Zc = function(a, b, c) {
  return bj.k(Rj([this.key, this.F]), b, c)
};
t.call = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return Q.f(this, b);
      case 3:
        return Q.k(this, b, c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
t.apply = function(a, b) {
  return a.call.apply(a, [a].concat($h(b)))
};
t.xb = j;
t.Va = function(a, b) {
  return Rj([this.key, this.F, b])
};
t.mg = j;
t.Xe = q("key");
t.Ye = q("F");
t.yh = function(a) {
  return a.Eh(this)
};
t.replace = function(a, b, c, d) {
  return new Ok(a, b, c, d, l)
};
t.xh = function(a) {
  return a.Dh(this)
};
t.Dh = function(a) {
  return new Ok(a.key, a.F, this, a.right, l)
};
t.toString = function() {
  return function() {
    switch(arguments.length) {
      case 0:
        return Si.h(R([this]))
    }
    e("Invalid arity: " + arguments.length)
  }
}();
t.Eh = function(a) {
  return new Ok(a.key, a.F, a.left, this, l)
};
t.Ve = function() {
  return this
};
t.he = j;
t.ie = function(a, b) {
  return Pi.f(a, b)
};
t.je = function(a, b, c) {
  return Pi.k(a, b, c)
};
t.Qa = function() {
  return Mi.h(W([this.key, this.F], 0))
};
t.wb = j;
t.lb = s(2);
t.vd = q("F");
t.wd = function() {
  return Rj([this.key])
};
t.qg = j;
t.ra = function(a, b) {
  return Ui(a, b)
};
t.Wa = function(a, b) {
  return cj(Rj([this.key, this.F]), b)
};
t.Na = j;
t.Oa = s(l);
t.$c = j;
t.td = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.F : l
};
t.ud = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.F : c
};
function Pk(a, b, c, d, f) {
  this.key = a;
  this.F = b;
  this.left = c;
  this.right = d;
  this.t = f;
  this.sa = 0;
  this.o = 16201119
}
t = Pk.prototype;
t.Ma = function(a) {
  var b = this.t;
  return b != l ? b : this.t = a = Ri(a)
};
t.jc = function(a, b) {
  return O.k(a, b, l)
};
t.kc = function(a, b, c) {
  return O.k(a, b, c)
};
t.Zc = function(a, b, c) {
  return bj.k(Rj([this.key, this.F]), b, c)
};
t.call = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return Q.f(this, b);
      case 3:
        return Q.k(this, b, c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
t.apply = function(a, b) {
  return a.call.apply(a, [a].concat($h(b)))
};
t.xb = j;
t.Va = function(a, b) {
  return Rj([this.key, this.F, b])
};
t.mg = j;
t.Xe = q("key");
t.Ye = q("F");
t.yh = function(a) {
  return new Pk(this.key, this.F, this.left, a, l)
};
t.replace = function(a, b, c, d) {
  return new Pk(a, b, c, d, l)
};
t.xh = function(a) {
  return new Pk(this.key, this.F, a, this.right, l)
};
t.Dh = function(a) {
  return Ni(Pk, this.left) ? new Pk(this.key, this.F, this.left.Ve(), new Ok(a.key, a.F, this.right, a.right, l), l) : Ni(Pk, this.right) ? new Pk(this.right.key, this.right.F, new Ok(this.key, this.F, this.left, this.right.left, l), new Ok(a.key, a.F, this.right.right, a.right, l), l) : new Ok(a.key, a.F, this, a.right, l)
};
t.toString = function() {
  return function() {
    switch(arguments.length) {
      case 0:
        return Si.h(R([this]))
    }
    e("Invalid arity: " + arguments.length)
  }
}();
t.Eh = function(a) {
  return Ni(Pk, this.right) ? new Pk(this.key, this.F, new Ok(a.key, a.F, a.left, this.left, l), this.right.Ve(), l) : Ni(Pk, this.left) ? new Pk(this.left.key, this.left.F, new Ok(a.key, a.F, a.left, this.left.left, l), new Ok(this.key, this.F, this.left.right, this.right, l), l) : new Ok(a.key, a.F, a.left, this, l)
};
t.Ve = function() {
  return new Ok(this.key, this.F, this.left, this.right, l)
};
t.he = j;
t.ie = function(a, b) {
  return Pi.f(a, b)
};
t.je = function(a, b, c) {
  return Pi.k(a, b, c)
};
t.Qa = function() {
  return Mi.h(W([this.key, this.F], 0))
};
t.wb = j;
t.lb = s(2);
t.vd = q("F");
t.wd = function() {
  return Rj([this.key])
};
t.qg = j;
t.ra = function(a, b) {
  return Ui(a, b)
};
t.Wa = function(a, b) {
  return cj(Rj([this.key, this.F]), b)
};
t.Na = j;
t.Oa = s(l);
t.$c = j;
t.td = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.F : l
};
t.ud = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.F : c
};
var Rk = function Qk(b, c, d, f, h) {
  if(c == l) {
    return new Pk(d, f, l, l, l)
  }
  var i = b.call(l, d, c.key);
  if(0 === i) {
    return h[0] = c, l
  }
  if(0 > i) {
    return b = Qk.call(l, b, c.left, d, f, h), b != l ? c.xh(b) : l
  }
  b = Qk.call(l, b, c.right, d, f, h);
  return b != l ? c.yh(b) : l
}, Tk = function Sk(b, c, d, f) {
  var h = c.key, i = b.call(l, d, h);
  return 0 === i ? c.replace(h, f, c.left, c.right) : 0 > i ? c.replace(h, c.F, Sk.call(l, b, c.left, d, f), c.right) : c.replace(h, c.F, c.left, Sk.call(l, b, c.right, d, f))
};
function Uk(a, b, c, d, f) {
  this.yd = a;
  this.Pe = b;
  this.j = c;
  this.H = d;
  this.t = f;
  this.sa = 0;
  this.o = 209388431
}
t = Uk.prototype;
t.Ma = function(a) {
  var b = this.t;
  return b != l ? b : this.t = a = qj(a)
};
t.jc = function(a, b) {
  return Q.k(a, b, l)
};
t.kc = function(a, b, c) {
  a: {
    for(var d = a.Pe;;) {
      if(d != l) {
        var f = a.yd.call(l, b, d.key);
        if(0 === f) {
          a = d;
          break a
        }
        d = 0 > f ? d.left : d.right
      }else {
        a = l;
        break a
      }
    }
    a = g
  }
  return a != l ? a.F : c
};
t.Zc = function(a, b, c) {
  var d = [l], f = Rk(this.yd, this.Pe, b, c, d);
  return f == l ? (d = $i.f(d, 0), Ji.f(c, d.F) ? a : new Uk(this.yd, Tk(this.yd, this.Pe, b, c), this.j, this.H, l)) : new Uk(this.yd, f.Ve(), this.j + 1, this.H, l)
};
t.call = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return Q.f(this, b);
      case 3:
        return Q.k(this, b, c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
t.apply = function(a, b) {
  return a.call.apply(a, [a].concat($h(b)))
};
t.Va = function(a, b) {
  return gj(b) ? ii(a, O.f(b, 0), O.f(b, 1)) : lj.k(di, a, b)
};
t.toString = function() {
  return Si.h(W([this], 0))
};
t.Qa = function() {
  return 0 < this.j ? new Nk(l, Mk(this.Pe, l, j), j, this.j, l) : l
};
t.wb = j;
t.lb = q("j");
t.ra = function(a, b) {
  return qk(a, b)
};
t.Wa = function(a, b) {
  return new Uk(this.yd, this.Pe, this.j, b, this.t)
};
t.Na = j;
t.Oa = q("H");
t.lg = j;
var Vk = new Uk(function(a, b) {
  if(Ki(a) === Ki(b)) {
    return pb.call(l, a, b)
  }
  if(a == l) {
    return-1
  }
  if(b == l) {
    return 1
  }
  e(Error("compare on non-nil objects of different types"))
}, l, 0, l, 0), Li = function() {
  function a(a) {
    var d = l;
    fa(a) && (d = R(Array.prototype.slice.call(arguments, 0)));
    return b.call(this, d)
  }
  function b(a) {
    for(var b = Y(a), f = Ei(vk);;) {
      if(L(b)) {
        var a = S(S(b)), h = T(b), b = T(S(b)), f = Hi(f, h, b), b = a
      }else {
        return Gi(f)
      }
    }
  }
  a.O = 0;
  a.r = function(a) {
    a = Y(a);
    return b(a)
  };
  a.h = b;
  return a
}(), Wk = function() {
  function a(a) {
    var d = l;
    fa(a) && (d = R(Array.prototype.slice.call(arguments, 0)));
    return b.call(this, d)
  }
  function b(a) {
    for(var a = Y(a), b = Vk;;) {
      if(L(a)) {
        var f = S(S(a)), b = bj.k(b, T(a), T(S(a))), a = f
      }else {
        return b
      }
    }
  }
  a.O = 0;
  a.r = function(a) {
    a = Y(a);
    return b(a)
  };
  a.h = b;
  return a
}();
Li();
Wk();
function Xk(a) {
  var b = y.call(l, a);
  L(b) && (b = "\ufdd0" === a.charAt(0), b = L(b ? b : "\ufdd1" === a.charAt(0)) ? o : j);
  if(b) {
    return a
  }
  if((b = jj(a)) ? b : kj(a)) {
    return b = a.lastIndexOf("/"), 0 > b ? pj.f(a, 2) : pj.f(a, b + 1)
  }
  e(Error([Z("Doesn't support name: "), Z(a)].join("")))
}
function Yk(a) {
  var b = jj(a);
  if(b ? b : kj(a)) {
    return b = a.lastIndexOf("/"), -1 < b ? pj.k(a, 2, b) : l
  }
  e(Error([Z("Doesn't support namespace: "), Z(a)].join("")))
}
function ek(a, b, c, d, f, h) {
  return Aj.h(Rj([b]), Pj(Oj(Rj([c]), Ij.f(function(b) {
    return a.call(l, b, f)
  }, h))), R([Rj([d])]))
}
var fk = function Zk(b, c) {
  return b == l ? Mi.h(W(["nil"], 0)) : g === b ? Mi.h(W(["#<undefined>"], 0)) : Aj.f(L(function() {
    var d = aj.f(c, "\ufdd0'meta");
    return L(d) ? (d = b != l ? ((d = b.o & 65536) ? d : b.Na) ? j : b.o ? o : M(ri, b) : M(ri, b), L(d) ? dj(b) : d) : d
  }()) ? Aj.h(Rj(["^"]), Zk.call(l, dj(b), c), R([Rj([" "])])) : l, L(function() {
    var c = b != l;
    return c ? b.Gj : c
  }()) ? b.Fj() : function() {
    var c;
    c = b != l ? ((c = b.o & 268435456) ? c : b.Pa) ? j : b.o ? o : M(Ai, b) : M(Ai, b);
    return c
  }() ? Bi(b, c) : Mi.h(R(["#<", "" + Z(b), ">"])))
}, Si = function() {
  function a(a) {
    var d = l;
    fa(a) && (d = R(Array.prototype.slice.call(arguments, 0)));
    return b.call(this, d)
  }
  function b(a) {
    var b = wk(["\ufdd0'flush-on-newline", "\ufdd0'readably", "\ufdd0'meta", "\ufdd0'dup"], {"\ufdd0'flush-on-newline":j, "\ufdd0'readably":j, "\ufdd0'meta":o, "\ufdd0'dup":o}), f = T(a), h = new Uc, a = Y(a);
    if(L(a)) {
      for(var i = T(a);;) {
        i !== f && h.append(" ");
        var k = Y(fk(i, b));
        if(L(k)) {
          for(i = T(k);;) {
            if(h.append(i), i = S(k), L(i)) {
              k = i, i = T(k)
            }else {
              break
            }
          }
        }
        a = S(a);
        if(L(a)) {
          i = a, a = T(i), k = i, i = a, a = k
        }else {
          break
        }
      }
    }
    return"" + Z(h)
  }
  a.O = 0;
  a.r = function(a) {
    a = Y(a);
    return b(a)
  };
  a.h = b;
  return a
}();
Ai.number = j;
Bi.number = function(a) {
  return Mi.h(R(["" + Z(a)]))
};
Qi.prototype.Pa = j;
Qi.prototype.Ha = function(a, b) {
  return ek(fk, "(", " ", ")", b, a)
};
Uk.prototype.Pa = j;
Uk.prototype.Ha = function(a, b) {
  return ek(function(a) {
    return ek(fk, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
vj.prototype.Pa = j;
vj.prototype.Ha = function(a, b) {
  return ek(fk, "(", " ", ")", b, a)
};
Ai["boolean"] = j;
Bi["boolean"] = function(a) {
  return Mi.h(R(["" + Z(a)]))
};
Ai.string = j;
Bi.string = function(a, b) {
  return jj(a) ? Mi.h(R([[Z(":"), Z(function() {
    var b = Yk(a);
    return L(b) ? [Z(b), Z("/")].join("") : l
  }()), Z(Xk(a))].join("")])) : kj(a) ? Mi.h(R([[Z(function() {
    var b = Yk(a);
    return L(b) ? [Z(b), Z("/")].join("") : l
  }()), Z(Xk(a))].join("")])) : Mi.h(R([L("\ufdd0'readably".call(l, b)) ? Na.call(l, a) : a]))
};
Hk.prototype.Pa = j;
Hk.prototype.Ha = function(a, b) {
  return ek(fk, "(", " ", ")", b, a)
};
Pk.prototype.Pa = j;
Pk.prototype.Ha = function(a, b) {
  return ek(fk, "[", " ", "]", b, a)
};
Jk.prototype.Pa = j;
Jk.prototype.Ha = function(a, b) {
  return ek(function(a) {
    return ek(fk, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
hk.prototype.Pa = j;
hk.prototype.Ha = function(a, b) {
  return ek(fk, "[", " ", "]", b, a)
};
rj.prototype.Pa = j;
rj.prototype.Ha = function(a, b) {
  return ek(fk, "(", " ", ")", b, a)
};
Ai.array = j;
Bi.array = function(a, b) {
  return ek(fk, "#<Array [", ", ", "]>", b, a)
};
Ai["function"] = j;
Bi["function"] = function(a) {
  return Mi.h(R(["#<", "" + Z(a), ">"]))
};
sj.prototype.Pa = j;
sj.prototype.Ha = function() {
  return Mi.h(W(["()"], 0))
};
Ok.prototype.Pa = j;
Ok.prototype.Ha = function(a, b) {
  return ek(fk, "[", " ", "]", b, a)
};
tj.prototype.Pa = j;
tj.prototype.Ha = function(a, b) {
  return ek(fk, "(", " ", ")", b, a)
};
Ik.prototype.Pa = j;
Ik.prototype.Ha = function(a, b) {
  return ek(fk, "(", " ", ")", b, a)
};
tk.prototype.Pa = j;
tk.prototype.Ha = function(a, b) {
  return ek(function(a) {
    return ek(fk, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
Nk.prototype.Pa = j;
Nk.prototype.Ha = function(a, b) {
  return ek(fk, "(", " ", ")", b, a)
};
function $k(a, b, c, d) {
  this.state = a;
  this.H = b;
  this.tl = c;
  this.vl = d;
  this.sa = 0;
  this.o = 1345404928
}
t = $k.prototype;
t.Ma = function(a) {
  return pa.call(l, a)
};
t.Lh = function(a, b, c) {
  var d = Y(this.vl);
  if(L(d)) {
    var f = T(d);
    $i.k(f, 0, l);
    for($i.k(f, 1, l);;) {
      var h = f, f = $i.k(h, 0, l), h = $i.k(h, 1, l);
      h.call(l, f, a, b, c);
      d = S(d);
      if(L(d)) {
        f = d, d = T(f), h = f, f = d, d = h
      }else {
        return l
      }
    }
  }else {
    return l
  }
};
t.Pa = j;
t.Ha = function(a, b) {
  return Aj.h(Rj(["#<Atom: "]), Bi(this.state, b), W([">"], 0))
};
t.Na = j;
t.Oa = q("H");
t.jg = q("state");
t.ra = function(a, b) {
  return a === b
};
var al = function() {
  function a(a) {
    return new $k(a, l, l, l)
  }
  var b = l, c = function() {
    function a(c, d) {
      var k = l;
      fa(d) && (k = R(Array.prototype.slice.call(arguments, 1)));
      return b.call(this, c, k)
    }
    function b(a, c) {
      var d;
      d = c == l ? o : c != l ? ((d = c.o & 64) ? d : c.mb) ? j : c.o ? o : M(gi, c) : M(gi, c);
      var f = d ? Fj.f(Li, c) : c;
      d = aj.f(f, "\ufdd0'validator");
      f = aj.f(f, "\ufdd0'meta");
      return new $k(a, f, d, l)
    }
    a.O = 1;
    a.r = function(a) {
      var c = T(a), a = U(a);
      return b(c, a)
    };
    a.h = b;
    return a
  }(), b = function(b, f) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.h(b, W(arguments, 1))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.O = 1;
  b.r = c.r;
  b.M = a;
  b.h = c.h;
  return b
}();
al.M(wk(["\ufdd0'parents", "\ufdd0'descendants", "\ufdd0'ancestors"], {"\ufdd0'parents":wk([], {}), "\ufdd0'descendants":wk([], {}), "\ufdd0'ancestors":wk([], {})}));
function bl(a) {
  if("function" == typeof a.sf) {
    return a.sf()
  }
  if(y(a)) {
    return a.split("")
  }
  if(ka(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return ac(a)
}
function cl(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(ka(a) || y(a)) {
      ab(a, b, c)
    }else {
      var d;
      if("function" == typeof a.Dg) {
        d = a.Dg()
      }else {
        if("function" != typeof a.sf) {
          if(ka(a) || y(a)) {
            d = [];
            for(var f = a.length, h = 0;h < f;h++) {
              d.push(h)
            }
          }else {
            d = bc(a)
          }
        }else {
          d = g
        }
      }
      for(var f = bl(a), h = f.length, i = 0;i < h;i++) {
        b.call(c, f[i], d && d[i], a)
      }
    }
  }
}
;var dl = "StopIteration" in u ? u.StopIteration : Error("StopIteration");
function el() {
}
el.prototype.next = function() {
  e(dl)
};
el.prototype.Vc = function() {
  return this
};
function fl(a) {
  if(a instanceof el) {
    return a
  }
  if("function" == typeof a.Vc) {
    return a.Vc(o)
  }
  if(ka(a)) {
    var b = 0, c = new el;
    c.next = function() {
      for(;;) {
        b >= a.length && e(dl);
        if(b in a) {
          return a[b++]
        }
        b++
      }
    };
    return c
  }
  e(Error("Not implemented"))
}
function gl(a, b) {
  if(ka(a)) {
    try {
      ab(a, b, g)
    }catch(c) {
      c !== dl && e(c)
    }
  }else {
    a = fl(a);
    try {
      for(;;) {
        b.call(g, a.next(), g, a)
      }
    }catch(d) {
      d !== dl && e(d)
    }
  }
}
function hl(a, b) {
  var a = fl(a), c = new el;
  c.next = function() {
    for(;;) {
      var c = a.next();
      if(b.call(g, c, g, a)) {
        return c
      }
    }
  };
  return c
}
function il(a, b) {
  a = fl(a);
  try {
    for(;;) {
      if(b.call(g, a.next(), g, a)) {
        return j
      }
    }
  }catch(c) {
    c !== dl && e(c)
  }
  return o
}
function jl(a) {
  var b = arguments, c = b.length, d = 0, f = new el;
  f.next = function() {
    try {
      return d >= c && e(dl), fl(b[d]).next()
    }catch(a) {
      return(a !== dl || d >= c) && e(a), d++, this.next()
    }
  };
  return f
}
;function kl(a, b) {
  this.Lc = {};
  this.Y = [];
  var c = arguments.length;
  if(1 < c) {
    c % 2 && e(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    if(a) {
      a instanceof kl ? (c = a.Dg(), d = a.sf()) : (c = bc(a), d = ac(a));
      for(var f = 0;f < c.length;f++) {
        this.set(c[f], d[f])
      }
    }
  }
}
t = kl.prototype;
t.Sa = 0;
t.Wf = 0;
t.sf = function() {
  ll(this);
  for(var a = [], b = 0;b < this.Y.length;b++) {
    a.push(this.Lc[this.Y[b]])
  }
  return a
};
t.Dg = function() {
  ll(this);
  return this.Y.concat()
};
t.vi = function() {
  return 0 == this.Sa
};
t.clear = function() {
  this.Lc = {};
  this.Wf = this.Sa = this.Y.length = 0
};
function ll(a) {
  if(a.Sa != a.Y.length) {
    for(var b = 0, c = 0;b < a.Y.length;) {
      var d = a.Y[b];
      Object.prototype.hasOwnProperty.call(a.Lc, d) && (a.Y[c++] = d);
      b++
    }
    a.Y.length = c
  }
  if(a.Sa != a.Y.length) {
    for(var f = {}, c = b = 0;b < a.Y.length;) {
      d = a.Y[b], Object.prototype.hasOwnProperty.call(f, d) || (a.Y[c++] = d, f[d] = 1), b++
    }
    a.Y.length = c
  }
}
t.get = function(a, b) {
  return Object.prototype.hasOwnProperty.call(this.Lc, a) ? this.Lc[a] : b
};
t.set = function(a, b) {
  Object.prototype.hasOwnProperty.call(this.Lc, a) || (this.Sa++, this.Y.push(a), this.Wf++);
  this.Lc[a] = b
};
t.Ra = function() {
  return new kl(this)
};
t.Vc = function(a) {
  ll(this);
  var b = 0, c = this.Y, d = this.Lc, f = this.Wf, h = this, i = new el;
  i.next = function() {
    for(;;) {
      f != h.Wf && e(Error("The map has changed since the iterator was created"));
      b >= c.length && e(dl);
      var i = c[b++];
      return a ? i : d[i]
    }
  };
  return i
};
function ml(a) {
  return nl(a || arguments.callee.caller, [])
}
function nl(a, b) {
  var c = [];
  if(hb(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(ol(a) + "(");
      for(var d = a.arguments, f = 0;f < d.length;f++) {
        0 < f && c.push(", ");
        var h;
        h = d[f];
        switch(typeof h) {
          case "object":
            h = h ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            h = "" + h;
            break;
          case "boolean":
            h = h ? "true" : "false";
            break;
          case "function":
            h = (h = ol(h)) ? h : "[fn]";
            break;
          default:
            h = typeof h
        }
        40 < h.length && (h = h.substr(0, 40) + "...");
        c.push(h)
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(nl(a.caller, b))
      }catch(i) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function ol(a) {
  a = "" + a;
  if(!pl[a]) {
    var b = /function ([^\(]+)/.exec(a);
    pl[a] = b ? b[1] : "[Anonymous]"
  }
  return pl[a]
}
var pl = {};
function ql(a, b, c, d, f) {
  this.reset(a, b, c, d, f)
}
ql.prototype.jl = 0;
ql.prototype.ai = l;
ql.prototype.$h = l;
var rl = 0;
ql.prototype.reset = function(a, b, c, d, f) {
  this.jl = "number" == typeof f ? f : rl++;
  this.xm = d || wa();
  this.ze = a;
  this.Nk = b;
  this.sm = c;
  delete this.ai;
  delete this.$h
};
ql.prototype.Si = ca("ze");
function sl(a) {
  this.Ok = a
}
sl.prototype.xa = l;
sl.prototype.ze = l;
sl.prototype.za = l;
sl.prototype.oi = l;
function tl(a, b) {
  this.name = a;
  this.value = b
}
tl.prototype.toString = q("name");
var ul = new tl("SHOUT", 1200), vl = new tl("SEVERE", 1E3), wl = new tl("WARNING", 900), xl = new tl("INFO", 800), yl = new tl("CONFIG", 700);
t = sl.prototype;
t.getParent = q("xa");
t.Si = ca("ze");
function zl(a) {
  if(a.ze) {
    return a.ze
  }
  if(a.xa) {
    return zl(a.xa)
  }
  Wa("Root logger has no level set.");
  return l
}
t.log = function(a, b, c) {
  if(a.value >= zl(this).value) {
    a = this.Tj(a, b, c);
    u.console && u.console.markTimeline && u.console.markTimeline("log:" + a.Nk);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.oi) {
        for(var f = 0, h = g;h = c.oi[f];f++) {
          h(d)
        }
      }
      b = b.getParent()
    }
  }
};
t.Tj = function(a, b, c) {
  var d = new ql(a, "" + b, this.Ok);
  if(c) {
    d.ai = c;
    var f;
    var h = arguments.callee.caller;
    try {
      var i;
      var k = ga("window.location.href");
      if(y(c)) {
        i = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:k, stack:"Not available"}
      }else {
        var m, n, p = o;
        try {
          m = c.lineNumber || c.qm || "Not available"
        }catch(r) {
          m = "Not available", p = j
        }
        try {
          n = c.fileName || c.filename || c.sourceURL || k
        }catch(x) {
          n = "Not available", p = j
        }
        i = p || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:m, fileName:n, stack:c.stack || "Not available"} : c
      }
      f = "Message: " + Ea(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + Ea(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + Ea(ml(h) + "-> ")
    }catch(v) {
      f = "Exception trying to expose exception! You win, we lose. " + v
    }
    d.$h = f
  }
  return d
};
function Al(a, b) {
  a.log(vl, b, g)
}
t.info = function(a, b) {
  this.log(xl, a, b)
};
var Bl = {}, Cl = l;
function Dl(a) {
  Cl || (Cl = new sl(""), Bl[""] = Cl, Cl.Si(yl));
  var b;
  if(!(b = Bl[a])) {
    b = new sl(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Dl(a.substr(0, c));
    if(!c.za) {
      c.za = {}
    }
    c.za[d] = b;
    b.xa = c;
    Bl[a] = b
  }
  return b
}
;function El() {
}
A(El, td);
var Fl = Dl("goog.dom.SavedRange");
El.prototype.restore = function(a) {
  this.hf && Al(Fl, "Disposed SavedRange objects cannot be restored.");
  var b = this.Mf();
  a || this.C();
  return b
};
function Gl(a) {
  this.Ui = Sa();
  this.Zh = Sa();
  this.z = H(a.ba());
  a.Je(this.z.e("SPAN", {id:this.Ui}), this.z.e("SPAN", {id:this.Zh}))
}
A(Gl, El);
function Hl(a, b) {
  return a.z.b(b ? a.Ui : a.Zh)
}
Gl.prototype.De = function(a) {
  J(Hl(this, j));
  J(Hl(this, o));
  return a
};
Gl.prototype.Mf = function() {
  var a = l, b = Hl(this, j), c = Hl(this, o);
  if(b && c) {
    var a = b.parentNode, b = Za(a.childNodes, b), d = c.parentNode, c = Za(d.childNodes, c);
    d == a && (c -= 1);
    a = Jl(a, b, d, c);
    a = this.De(a);
    a.select()
  }else {
    this.De()
  }
  return a
};
Gl.prototype.l = function() {
  this.De();
  this.z = l
};
function Kl(a, b, c, d, f) {
  this.Ka = !!b;
  a && this.Qc(a, d);
  this.depth = f != g ? f : this.Ga || 0;
  this.Ka && (this.depth *= -1);
  this.af = !c
}
A(Kl, el);
t = Kl.prototype;
t.B = l;
t.Ga = 0;
t.ph = o;
t.Qc = function(a, b, c) {
  if(this.B = a) {
    this.Ga = la(b) ? b : 1 != this.B.nodeType ? 0 : this.Ka ? -1 : 1
  }
  if(la(c)) {
    this.depth = c
  }
};
t.lc = function(a) {
  this.B = a.B;
  this.Ga = a.Ga;
  this.depth = a.depth;
  this.Ka = a.Ka;
  this.af = a.af
};
t.Ra = function() {
  return new Kl(this.B, this.Ka, !this.af, this.Ga, this.depth)
};
t.Sf = function() {
  var a = this.Ka ? -1 : 1;
  if(this.Ga == a) {
    this.Ga = -1 * a, this.depth += this.Ga * (this.Ka ? -1 : 1)
  }
};
t.next = function() {
  var a;
  if(this.ph) {
    (!this.B || this.af && 0 == this.depth) && e(dl);
    a = this.B;
    var b = this.Ka ? -1 : 1;
    if(this.Ga == b) {
      var c = this.Ka ? a.lastChild : a.firstChild;
      c ? this.Qc(c) : this.Qc(a, -1 * b)
    }else {
      (c = this.Ka ? a.previousSibling : a.nextSibling) ? this.Qc(c) : this.Qc(a.parentNode, -1 * b)
    }
    this.depth += this.Ga * (this.Ka ? -1 : 1)
  }else {
    this.ph = j
  }
  (a = this.B) || e(dl);
  return a
};
t.splice = function(a) {
  var b = this.B, c = this.Ka ? 1 : -1;
  if(this.Ga == c) {
    this.Ga = -1 * c, this.depth += this.Ga * (this.Ka ? -1 : 1)
  }
  this.Ka = !this.Ka;
  Kl.prototype.next.call(this);
  this.Ka = !this.Ka;
  for(var c = ka(arguments[0]) ? arguments[0] : arguments, d = c.length - 1;0 <= d;d--) {
    xc(c[d], b)
  }
  J(b)
};
function Ll() {
}
function Ml(a) {
  if(a.getSelection) {
    return a.getSelection()
  }
  var a = a.document, b = a.selection;
  if(b) {
    try {
      var c = b.createRange();
      if(c.parentElement) {
        if(c.parentElement().document != a) {
          return l
        }
      }else {
        if(!c.length || c.item(0).document != a) {
          return l
        }
      }
    }catch(d) {
      return l
    }
    return b
  }
  return l
}
function Nl(a) {
  for(var b = [], c = 0, d = a.ed();c < d;c++) {
    b.push(a.Nb(c))
  }
  return b
}
t = Ll.prototype;
t.Ia = function() {
  var a = this.Ab();
  return 1 == a.nodeType ? a : a.parentNode
};
t.Gc = s(o);
t.ba = function() {
  return I(C ? this.Ab() : this.q())
};
t.Da = function() {
  return rc(this.ba())
};
t.containsNode = function(a, b) {
  return this.wc(Ol(Pl(a), g), b)
};
t.Ni = function(a) {
  this.isCollapsed() || this.sc();
  return this.insertNode(a, j)
};
function Ql(a, b) {
  Kl.call(this, a, b, j)
}
A(Ql, Kl);
function Rl() {
}
A(Rl, Ll);
Rl.prototype.wc = function(a, b) {
  var c = Nl(this), d = Nl(a);
  return(b ? db : eb)(d, function(a) {
    return db(c, function(c) {
      return c.wc(a, b)
    })
  })
};
Rl.prototype.insertNode = function(a, b) {
  b ? wc(a, this.q()) : xc(a, this.D());
  return a
};
Rl.prototype.Je = function(a, b) {
  this.insertNode(a, j);
  this.insertNode(b, o)
};
function Sl(a, b, c, d, f) {
  var h;
  if(a) {
    this.J = a;
    this.U = b;
    this.G = c;
    this.S = d;
    if(1 == a.nodeType && "BR" != a.tagName) {
      if(a = a.childNodes, b = a[b]) {
        this.J = b, this.U = 0
      }else {
        if(a.length) {
          this.J = Xa(a)
        }
        h = j
      }
    }
    if(1 == c.nodeType) {
      (this.G = c.childNodes[d]) ? this.S = 0 : this.G = c
    }
  }
  Ql.call(this, f ? this.G : this.J, f);
  if(h) {
    try {
      this.next()
    }catch(i) {
      i != dl && e(i)
    }
  }
}
A(Sl, Ql);
t = Sl.prototype;
t.J = l;
t.G = l;
t.U = 0;
t.S = 0;
t.q = q("J");
t.D = q("G");
t.ve = function() {
  return this.ph && this.B == this.G && (!this.S || 1 != this.Ga)
};
t.next = function() {
  this.ve() && e(dl);
  return Sl.c.next.call(this)
};
t.Sf = function() {
  Sl.c.Sf.apply(this);
  Bc(this.B, this.G) && e(dl)
};
t.lc = function(a) {
  this.J = a.J;
  this.G = a.G;
  this.U = a.U;
  this.S = a.S;
  this.Qb = a.Qb;
  Sl.c.lc.call(this, a)
};
t.Ra = function() {
  var a = new Sl(this.J, this.U, this.G, this.S, this.Qb);
  a.lc(this);
  return a
};
function Tl() {
}
Tl.prototype.wc = function(a, b) {
  var c = b && !a.isCollapsed(), d = a.n;
  try {
    return c ? 0 <= this.yb(d, 0, 1) && 0 >= this.yb(d, 1, 0) : 0 <= this.yb(d, 0, 0) && 0 >= this.yb(d, 1, 1)
  }catch(f) {
    return C || e(f), o
  }
};
Tl.prototype.containsNode = function(a, b) {
  return this.wc(Pl(a), b)
};
Tl.prototype.Vc = function() {
  return new Sl(this.q(), this.L(), this.D(), this.X())
};
function Ul(a) {
  this.n = a
}
A(Ul, Tl);
function Vl(a) {
  var b = I(a).createRange();
  if(3 == a.nodeType) {
    b.setStart(a, 0), b.setEnd(a, a.length)
  }else {
    if(Wl(a)) {
      for(var c, d = a;(c = d.firstChild) && Wl(c);) {
        d = c
      }
      b.setStart(d, 0);
      for(d = a;(c = d.lastChild) && Wl(c);) {
        d = c
      }
      b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length)
    }else {
      c = a.parentNode, a = Za(c.childNodes, a), b.setStart(c, a), b.setEnd(c, a + 1)
    }
  }
  return b
}
function Xl(a, b, c, d) {
  var f = I(a).createRange();
  f.setStart(a, b);
  f.setEnd(c, d);
  return f
}
t = Ul.prototype;
t.Ra = function() {
  return new this.constructor(this.n.cloneRange())
};
t.Ab = function() {
  return this.n.commonAncestorContainer
};
t.q = function() {
  return this.n.startContainer
};
t.L = function() {
  return this.n.startOffset
};
t.D = function() {
  return this.n.endContainer
};
t.X = function() {
  return this.n.endOffset
};
t.yb = function(a, b, c) {
  return this.n.compareBoundaryPoints(1 == c ? 1 == b ? u.Range.START_TO_START : u.Range.START_TO_END : 1 == b ? u.Range.END_TO_START : u.Range.END_TO_END, a)
};
t.isCollapsed = function() {
  return this.n.collapsed
};
t.dd = function() {
  return this.n.toString()
};
t.select = function(a) {
  this.Nf(rc(I(this.q())).getSelection(), a)
};
t.Nf = function(a) {
  a.removeAllRanges();
  a.addRange(this.n)
};
t.sc = function() {
  var a = this.n;
  a.extractContents();
  if(a.startContainer.hasChildNodes() && (a = a.startContainer.childNodes[a.startOffset])) {
    var b = a.previousSibling;
    "" == Nc(a) && J(a);
    b && "" == Nc(b) && J(b)
  }
};
t.insertNode = function(a, b) {
  var c = this.n.cloneRange();
  c.collapse(b);
  c.insertNode(a);
  c.detach();
  return a
};
t.Je = function(a, b) {
  var c = rc(I(this.q()));
  if(c = Yl(c)) {
    var d = c.q(), f = c.D(), h = c.L(), i = c.X()
  }
  var k = this.n.cloneRange(), m = this.n.cloneRange();
  k.collapse(o);
  m.collapse(j);
  k.insertNode(b);
  m.insertNode(a);
  k.detach();
  m.detach();
  if(c) {
    if(3 == d.nodeType) {
      for(;h > d.length;) {
        h -= d.length;
        do {
          d = d.nextSibling
        }while(d == a || d == b)
      }
    }
    if(3 == f.nodeType) {
      for(;i > f.length;) {
        i -= f.length;
        do {
          f = f.nextSibling
        }while(f == a || f == b)
      }
    }
    Jl(d, h, f, i).select()
  }
};
t.collapse = function(a) {
  this.n.collapse(a)
};
function Zl(a) {
  this.n = a
}
A(Zl, Ul);
Zl.prototype.Nf = function(a, b) {
  var c = b ? this.D() : this.q(), d = b ? this.X() : this.L(), f = b ? this.q() : this.D(), h = b ? this.L() : this.X();
  a.collapse(c, d);
  (c != f || d != h) && a.extend(f, h)
};
function $l(a, b, c, d) {
  Kl.call(this, a, b, c, l, d)
}
A($l, Kl);
$l.prototype.next = function() {
  do {
    $l.c.next.call(this)
  }while(-1 == this.Ga);
  return this.B
};
function am(a, b) {
  this.n = a;
  this.Lj = b
}
A(am, Tl);
var bm = Dl("goog.dom.browserrange.IeRange");
function cm(a) {
  var b = I(a).body.createTextRange();
  if(1 == a.nodeType) {
    b.moveToElementText(a), Wl(a) && !a.childNodes.length && b.collapse(o)
  }else {
    for(var c = 0, d = a;d = d.previousSibling;) {
      var f = d.nodeType;
      if(3 == f) {
        c += d.length
      }else {
        if(1 == f) {
          b.moveToElementText(d);
          break
        }
      }
    }
    d || b.moveToElementText(a.parentNode);
    b.collapse(!d);
    c && b.move("character", c);
    b.moveEnd("character", a.length)
  }
  return b
}
t = am.prototype;
t.ec = l;
t.J = l;
t.G = l;
t.U = -1;
t.S = -1;
t.Ra = function() {
  var a = new am(this.n.duplicate(), this.Lj);
  a.ec = this.ec;
  a.J = this.J;
  a.G = this.G;
  return a
};
t.kb = function() {
  this.ec = this.J = this.G = l;
  this.U = this.S = -1
};
t.Ab = function() {
  if(!this.ec) {
    var a = this.n.text, b = this.n.duplicate(), c = a.replace(/ +$/, "");
    (c = a.length - c.length) && b.moveEnd("character", -c);
    c = b.parentElement();
    b = Ba(b.htmlText).length;
    if(this.isCollapsed() && 0 < b) {
      return this.ec = c
    }
    for(;b > Ba(c.outerHTML).length;) {
      c = c.parentNode
    }
    for(;1 == c.childNodes.length && c.innerText == (3 == c.firstChild.nodeType ? c.firstChild.nodeValue : c.firstChild.innerText) && Wl(c.firstChild);) {
      c = c.firstChild
    }
    0 == a.length && (c = dm(this, c));
    this.ec = c
  }
  return this.ec
};
function dm(a, b) {
  for(var c = b.childNodes, d = 0, f = c.length;d < f;d++) {
    var h = c[d];
    if(Wl(h)) {
      var i = cm(h), k = i.htmlText != h.outerHTML;
      if(a.isCollapsed() && k ? 0 <= a.yb(i, 1, 1) && 0 >= a.yb(i, 1, 0) : a.n.inRange(i)) {
        return dm(a, h)
      }
    }
  }
  return b
}
t.q = function() {
  if(!this.J && (this.J = em(this, 1), this.isCollapsed())) {
    this.G = this.J
  }
  return this.J
};
t.L = function() {
  if(0 > this.U && (this.U = fm(this, 1), this.isCollapsed())) {
    this.S = this.U
  }
  return this.U
};
t.D = function() {
  if(this.isCollapsed()) {
    return this.q()
  }
  if(!this.G) {
    this.G = em(this, 0)
  }
  return this.G
};
t.X = function() {
  if(this.isCollapsed()) {
    return this.L()
  }
  if(0 > this.S && (this.S = fm(this, 0), this.isCollapsed())) {
    this.U = this.S
  }
  return this.S
};
t.yb = function(a, b, c) {
  return this.n.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == c ? "Start" : "End"), a)
};
function em(a, b, c) {
  c = c || a.Ab();
  if(!c || !c.firstChild) {
    return c
  }
  for(var d = 1 == b, f = 0, h = c.childNodes.length;f < h;f++) {
    var i = d ? f : h - f - 1, k = c.childNodes[i], m;
    try {
      m = Pl(k)
    }catch(n) {
      continue
    }
    var p = m.n;
    if(a.isCollapsed()) {
      if(Wl(k)) {
        if(m.wc(a)) {
          return em(a, b, k)
        }
      }else {
        if(0 == a.yb(p, 1, 1)) {
          a.U = a.S = i;
          break
        }
      }
    }else {
      if(a.wc(m)) {
        if(!Wl(k)) {
          d ? a.U = i : a.S = i + 1;
          break
        }
        return em(a, b, k)
      }
      if(0 > a.yb(p, 1, 0) && 0 < a.yb(p, 0, 1)) {
        return em(a, b, k)
      }
    }
  }
  return c
}
function fm(a, b) {
  var c = 1 == b, d = c ? a.q() : a.D();
  if(1 == d.nodeType) {
    for(var d = d.childNodes, f = d.length, h = c ? 1 : -1, i = c ? 0 : f - 1;0 <= i && i < f;i += h) {
      var k = d[i];
      if(!Wl(k) && 0 == a.n.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == b ? "Start" : "End"), Pl(k).n)) {
        return c ? i : i + 1
      }
    }
    return-1 == i ? 0 : i
  }
  f = a.n.duplicate();
  h = cm(d);
  f.setEndPoint(c ? "EndToEnd" : "StartToStart", h);
  f = f.text.length;
  return c ? d.length - f : f
}
t.isCollapsed = function() {
  return 0 == this.n.compareEndPoints("StartToEnd", this.n)
};
t.dd = function() {
  return this.n.text
};
t.select = function() {
  this.n.select()
};
t.sc = function() {
  if(this.n.htmlText) {
    var a = this.q(), b = this.D(), c = this.n.text, d = this.n.duplicate();
    d.moveStart("character", 1);
    d.moveStart("character", -1);
    if(d.text != c) {
      var f = new $l(a, o, j), h = [];
      gl(f, function(a) {
        3 != a.nodeType && this.containsNode(a) && (h.push(a), f.Sf());
        a == b && e(dl)
      });
      this.collapse(j);
      ab(h, J);
      this.kb()
    }else {
      this.n = d;
      this.n.text = "";
      this.kb();
      c = this.q();
      d = this.L();
      try {
        var i = a.nextSibling;
        if(a == b && a.parentNode && 3 == a.nodeType && i && 3 == i.nodeType) {
          a.nodeValue += i.nodeValue, J(i), this.n = cm(c), this.n.move("character", d), this.kb()
        }
      }catch(k) {
      }
    }
  }
};
function gm(a, b, c) {
  var d;
  d = d || H(a.parentElement());
  var f;
  1 != b.nodeType && (f = j, b = d.e("DIV", l, b));
  a.collapse(c);
  var c = d || H(a.parentElement()), h, i = h = b.id;
  if(!h) {
    h = b.id = Sa()
  }
  a.pasteHTML(b.outerHTML);
  (b = c.b(h)) && (i || b.removeAttribute("id"));
  if(f) {
    a = b.firstChild, d.Qj(b), b = a
  }
  return b
}
t.insertNode = function(a, b) {
  var c = gm(this.n.duplicate(), a, b);
  this.kb();
  return c
};
t.Je = function(a, b) {
  var c = this.n.duplicate(), d = this.n.duplicate();
  gm(c, a, j);
  gm(d, b, o);
  this.kb()
};
t.collapse = function(a) {
  this.n.collapse(a);
  a ? (this.G = this.J, this.S = this.U) : (this.J = this.G, this.U = this.S)
};
function hm(a) {
  this.n = a
}
A(hm, Ul);
hm.prototype.Nf = function(a) {
  a.collapse(this.q(), this.L());
  (this.D() != this.q() || this.X() != this.L()) && a.extend(this.D(), this.X());
  0 == a.rangeCount && a.addRange(this.n)
};
function im(a) {
  this.n = a
}
A(im, Ul);
im.prototype.yb = function(a, b, c) {
  return G("528") ? im.c.yb.call(this, a, b, c) : this.n.compareBoundaryPoints(1 == c ? 1 == b ? u.Range.START_TO_START : u.Range.END_TO_START : 1 == b ? u.Range.START_TO_END : u.Range.END_TO_END, a)
};
im.prototype.Nf = function(a, b) {
  a.removeAllRanges();
  b ? a.setBaseAndExtent(this.D(), this.X(), this.q(), this.L()) : a.setBaseAndExtent(this.q(), this.L(), this.D(), this.X())
};
function jm(a) {
  return C && !G("9") ? new am(a, I(a.parentElement())) : E ? new im(a) : D ? new Zl(a) : B ? new hm(a) : new Ul(a)
}
function Pl(a) {
  if(C && !G("9")) {
    var b = new am(cm(a), I(a));
    if(Wl(a)) {
      for(var c, d = a;(c = d.firstChild) && Wl(c);) {
        d = c
      }
      b.J = d;
      b.U = 0;
      for(d = a;(c = d.lastChild) && Wl(c);) {
        d = c
      }
      b.G = d;
      b.S = 1 == d.nodeType ? d.childNodes.length : d.length;
      b.ec = a
    }else {
      b.J = b.G = b.ec = a.parentNode, b.U = Za(b.ec.childNodes, a), b.S = b.U + 1
    }
    a = b
  }else {
    a = E ? new im(Vl(a)) : D ? new Zl(Vl(a)) : B ? new hm(Vl(a)) : new Ul(Vl(a))
  }
  return a
}
function Wl(a) {
  var b;
  a: {
    if(1 != a.nodeType) {
      b = o
    }else {
      switch(a.tagName) {
        case "APPLET":
        ;
        case "AREA":
        ;
        case "BASE":
        ;
        case "BR":
        ;
        case "COL":
        ;
        case "FRAME":
        ;
        case "HR":
        ;
        case "IMG":
        ;
        case "INPUT":
        ;
        case "IFRAME":
        ;
        case "ISINDEX":
        ;
        case "LINK":
        ;
        case "NOFRAMES":
        ;
        case "NOSCRIPT":
        ;
        case "META":
        ;
        case "OBJECT":
        ;
        case "PARAM":
        ;
        case "SCRIPT":
        ;
        case "STYLE":
          b = o;
          break a
      }
      b = j
    }
  }
  return b || 3 == a.nodeType
}
;function km() {
}
A(km, Ll);
function Ol(a, b) {
  var c = new km;
  c.Xc = a;
  c.Qb = !!b;
  return c
}
function Jl(a, b, c, d) {
  var f = new km;
  f.Qb = lm(a, b, c, d);
  if("BR" == a.tagName) {
    var h = a.parentNode, b = Za(h.childNodes, a), a = h
  }
  if("BR" == c.tagName) {
    h = c.parentNode, d = Za(h.childNodes, c), c = h
  }
  f.Qb ? (f.J = c, f.U = d, f.G = a, f.S = b) : (f.J = a, f.U = b, f.G = c, f.S = d);
  return f
}
t = km.prototype;
t.Xc = l;
t.J = l;
t.U = l;
t.G = l;
t.S = l;
t.Qb = o;
t.Ra = function() {
  var a = new km;
  a.Xc = this.Xc;
  a.J = this.J;
  a.U = this.U;
  a.G = this.G;
  a.S = this.S;
  a.Qb = this.Qb;
  return a
};
t.rf = s("text");
t.Mb = function() {
  return mm(this).n
};
t.kb = function() {
  this.J = this.U = this.G = this.S = l
};
t.ed = s(1);
t.Nb = function() {
  return this
};
function mm(a) {
  var r;
  var b;
  if(!(b = a.Xc)) {
    b = a.q();
    var c = a.L(), d = a.D(), f = a.X();
    if(C && !G("9")) {
      var h = b, i = c, k = d, m = f, n = o;
      1 == h.nodeType && (i > h.childNodes.length && Al(bm, "Cannot have startOffset > startNode child count"), i = h.childNodes[i], n = !i, h = i || h.lastChild || h, i = 0);
      var p = cm(h);
      i && p.move("character", i);
      h == k && i == m ? p.collapse(j) : (n && p.collapse(o), n = o, 1 == k.nodeType && (m > k.childNodes.length && Al(bm, "Cannot have endOffset > endNode child count"), r = (i = k.childNodes[m]) || k.lastChild || k, k = r, m = 0, n = !i), h = cm(k), h.collapse(!n), m && h.moveEnd("character", m), p.setEndPoint("EndToEnd", h));
      m = new am(p, I(b));
      m.J = b;
      m.U = c;
      m.G = d;
      m.S = f;
      b = m
    }else {
      b = E ? new im(Xl(b, c, d, f)) : D ? new Zl(Xl(b, c, d, f)) : B ? new hm(Xl(b, c, d, f)) : new Ul(Xl(b, c, d, f))
    }
    b = a.Xc = b
  }
  return b
}
t.Ab = function() {
  return mm(this).Ab()
};
t.q = function() {
  return this.J || (this.J = mm(this).q())
};
t.L = function() {
  return this.U != l ? this.U : this.U = mm(this).L()
};
t.D = function() {
  return this.G || (this.G = mm(this).D())
};
t.X = function() {
  return this.S != l ? this.S : this.S = mm(this).X()
};
t.Gc = q("Qb");
t.wc = function(a, b) {
  var c = a.rf();
  if("text" == c) {
    return mm(this).wc(mm(a), b)
  }
  return"control" == c ? (c = nm(a), (b ? db : eb)(c, function(a) {
    return this.containsNode(a, b)
  }, this)) : o
};
t.isCollapsed = function() {
  return mm(this).isCollapsed()
};
t.dd = function() {
  return mm(this).dd()
};
t.Vc = function() {
  return new Sl(this.q(), this.L(), this.D(), this.X())
};
t.select = function() {
  mm(this).select(this.Qb)
};
t.sc = function() {
  mm(this).sc();
  this.kb()
};
t.insertNode = function(a, b) {
  var c = mm(this).insertNode(a, b);
  this.kb();
  return c
};
t.Je = function(a, b) {
  mm(this).Je(a, b);
  this.kb()
};
t.fh = function() {
  return new om(this)
};
t.collapse = function(a) {
  a = this.Gc() ? !a : a;
  this.Xc && this.Xc.collapse(a);
  a ? (this.G = this.J, this.S = this.U) : (this.J = this.G, this.U = this.S);
  this.Qb = o
};
function om(a) {
  this.Bh = a.Gc() ? a.D() : a.q();
  this.jj = a.Gc() ? a.X() : a.L();
  this.di = a.Gc() ? a.q() : a.D();
  this.Sj = a.Gc() ? a.L() : a.X()
}
A(om, El);
om.prototype.Mf = function() {
  return Jl(this.Bh, this.jj, this.di, this.Sj)
};
om.prototype.l = function() {
  om.c.l.call(this);
  this.di = this.Bh = l
};
function pm() {
}
A(pm, Rl);
function qm(a) {
  var b = new pm;
  b.n = a;
  return b
}
function rm(a) {
  for(var b = I(arguments[0]).body.createControlRange(), c = 0, d = arguments.length;c < d;c++) {
    b.addElement(arguments[c])
  }
  return qm(b)
}
t = pm.prototype;
t.n = l;
t.ua = l;
t.Ie = l;
t.kb = function() {
  this.Ie = this.ua = l
};
t.Ra = function() {
  return rm.apply(this, nm(this))
};
t.rf = s("control");
t.Mb = function() {
  return this.n || document.body.createControlRange()
};
t.ed = function() {
  return this.n ? this.n.length : 0
};
t.Nb = function(a) {
  a = this.n.item(a);
  return Ol(Pl(a), g)
};
t.Ab = function() {
  return Fc.apply(l, nm(this))
};
t.q = function() {
  return sm(this)[0]
};
t.L = s(0);
t.D = function() {
  var a = sm(this), b = Xa(a);
  return fb(a, function(a) {
    return Bc(a, b)
  })
};
t.X = function() {
  return this.D().childNodes.length
};
function nm(a) {
  if(!a.ua && (a.ua = [], a.n)) {
    for(var b = 0;b < a.n.length;b++) {
      a.ua.push(a.n.item(b))
    }
  }
  return a.ua
}
function sm(a) {
  if(!a.Ie) {
    a.Ie = nm(a).concat(), a.Ie.sort(function(a, c) {
      return a.sourceIndex - c.sourceIndex
    })
  }
  return a.Ie
}
t.isCollapsed = function() {
  return!this.n || !this.n.length
};
t.dd = s("");
t.Vc = function() {
  return new tm(this)
};
t.select = function() {
  this.n && this.n.select()
};
t.sc = function() {
  if(this.n) {
    for(var a = [], b = 0, c = this.n.length;b < c;b++) {
      a.push(this.n.item(b))
    }
    ab(a, J);
    this.collapse(o)
  }
};
t.Ni = function(a) {
  a = this.insertNode(a, j);
  this.isCollapsed() || this.sc();
  return a
};
t.fh = function() {
  return new um(this)
};
t.collapse = function() {
  this.n = l;
  this.kb()
};
function um(a) {
  this.ua = nm(a)
}
A(um, El);
um.prototype.Mf = function() {
  for(var a = (this.ua.length ? I(this.ua[0]) : document).body.createControlRange(), b = 0, c = this.ua.length;b < c;b++) {
    a.addElement(this.ua[b])
  }
  return qm(a)
};
um.prototype.l = function() {
  um.c.l.call(this);
  delete this.ua
};
function tm(a) {
  if(a) {
    this.ua = sm(a), this.J = this.ua.shift(), this.G = Xa(this.ua) || this.J
  }
  Ql.call(this, this.J, o)
}
A(tm, Ql);
t = tm.prototype;
t.J = l;
t.G = l;
t.ua = l;
t.q = q("J");
t.D = q("G");
t.ve = function() {
  return!this.depth && !this.ua.length
};
t.next = function() {
  this.ve() && e(dl);
  if(!this.depth) {
    var a = this.ua.shift();
    this.Qc(a, 1, 1);
    return a
  }
  return tm.c.next.call(this)
};
t.lc = function(a) {
  this.ua = a.ua;
  this.J = a.J;
  this.G = a.G;
  tm.c.lc.call(this, a)
};
t.Ra = function() {
  var a = new tm(l);
  a.lc(this);
  return a
};
function vm() {
  this.Ib = [];
  this.Sd = [];
  this.bf = this.Zd = l
}
A(vm, Rl);
function wm(a) {
  var b = new vm;
  b.Sd = a;
  b.Ib = cb(a, function(a) {
    return a.Mb()
  });
  return b
}
t = vm.prototype;
t.Lk = Dl("goog.dom.MultiRange");
t.kb = function() {
  this.Sd = [];
  this.bf = this.Zd = l
};
t.Ra = function() {
  var a = new vm;
  a.Ib = kb(this.Ib);
  return a
};
t.rf = s("mutli");
t.Mb = function() {
  1 < this.Ib.length && this.Lk.log(wl, "getBrowserRangeObject called on MultiRange with more than 1 range", g);
  return this.Ib[0]
};
t.ed = function() {
  return this.Ib.length
};
t.Nb = function(a) {
  this.Sd[a] || (this.Sd[a] = Ol(jm(this.Ib[a]), g));
  return this.Sd[a]
};
t.Ab = function() {
  if(!this.bf) {
    for(var a = [], b = 0, c = this.ed();b < c;b++) {
      a.push(this.Nb(b).Ab())
    }
    this.bf = Fc.apply(l, a)
  }
  return this.bf
};
function xm(a) {
  if(!a.Zd) {
    a.Zd = Nl(a), a.Zd.sort(function(a, c) {
      var d = a.q(), f = a.L(), h = c.q(), i = c.L();
      return d == h && f == i ? 0 : lm(d, f, h, i) ? 1 : -1
    })
  }
  return a.Zd
}
t.q = function() {
  return xm(this)[0].q()
};
t.L = function() {
  return xm(this)[0].L()
};
t.D = function() {
  return Xa(xm(this)).D()
};
t.X = function() {
  return Xa(xm(this)).X()
};
t.isCollapsed = function() {
  return 0 == this.Ib.length || 1 == this.Ib.length && this.Nb(0).isCollapsed()
};
t.dd = function() {
  return cb(Nl(this), function(a) {
    return a.dd()
  }).join("")
};
t.Vc = function() {
  return new ym(this)
};
t.select = function() {
  var a = Ml(this.Da());
  a.removeAllRanges();
  for(var b = 0, c = this.ed();b < c;b++) {
    a.addRange(this.Nb(b).Mb())
  }
};
t.sc = function() {
  ab(Nl(this), function(a) {
    a.sc()
  })
};
t.fh = function() {
  return new zm(this)
};
t.collapse = function(a) {
  if(!this.isCollapsed()) {
    var b = a ? this.Nb(0) : this.Nb(this.ed() - 1);
    this.kb();
    b.collapse(a);
    this.Sd = [b];
    this.Zd = [b];
    this.Ib = [b.Mb()]
  }
};
function zm(a) {
  this.gh = cb(Nl(a), function(a) {
    return a.fh()
  })
}
A(zm, El);
zm.prototype.Mf = function() {
  var a = cb(this.gh, function(a) {
    return a.restore()
  });
  return wm(a)
};
zm.prototype.l = function() {
  zm.c.l.call(this);
  ab(this.gh, function(a) {
    a.C()
  });
  delete this.gh
};
function ym(a) {
  if(a) {
    this.Hc = cb(xm(a), function(a) {
      return fl(a)
    })
  }
  Ql.call(this, a ? this.q() : l, o)
}
A(ym, Ql);
t = ym.prototype;
t.Hc = l;
t.df = 0;
t.q = function() {
  return this.Hc[0].q()
};
t.D = function() {
  return Xa(this.Hc).D()
};
t.ve = function() {
  return this.Hc[this.df].ve()
};
t.next = function() {
  try {
    var a = this.Hc[this.df], b = a.next();
    this.Qc(a.B, a.Ga, a.depth);
    return b
  }catch(c) {
    return(c !== dl || this.Hc.length - 1 == this.df) && e(c), this.df++, this.next()
  }
};
t.lc = function(a) {
  this.Hc = kb(a.Hc);
  ym.c.lc.call(this, a)
};
t.Ra = function() {
  var a = new ym(l);
  a.lc(this);
  return a
};
function Yl(a) {
  return(a = Ml(a || window)) && Am(a)
}
function Am(a) {
  var b, c = o;
  if(a.createRange) {
    try {
      b = a.createRange()
    }catch(d) {
      return l
    }
  }else {
    if(a.rangeCount) {
      if(1 < a.rangeCount) {
        b = new vm;
        for(var c = 0, f = a.rangeCount;c < f;c++) {
          b.Ib.push(a.getRangeAt(c))
        }
        return b
      }
      b = a.getRangeAt(0);
      c = lm(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
    }else {
      return l
    }
  }
  return b && b.addElement ? qm(b) : Ol(jm(b), c)
}
function Bm(a, b) {
  return Jl(a, b, a, b)
}
function Cm(a) {
  if(a = Ml(a || window)) {
    if(a.empty) {
      try {
        a.empty()
      }catch(b) {
      }
    }else {
      a.removeAllRanges()
    }
  }
}
function lm(a, b, c, d) {
  if(a == c) {
    return d < b
  }
  var f;
  if(1 == a.nodeType && b) {
    if(f = a.childNodes[b]) {
      a = f, b = 0
    }else {
      if(Bc(a, c)) {
        return j
      }
    }
  }
  if(1 == c.nodeType && d) {
    if(f = c.childNodes[d]) {
      c = f, d = 0
    }else {
      if(Bc(c, a)) {
        return o
      }
    }
  }
  return 0 < (Cc(a, c) || b - d)
}
;function Dm(a, b, c) {
  this.Zg = a;
  this.jd = b || 0;
  this.na = c;
  this.pj = ua(this.Xh, this)
}
A(Dm, td);
t = Dm.prototype;
t.Cb = 0;
t.l = function() {
  Dm.c.l.call(this);
  this.stop();
  delete this.Zg;
  delete this.na
};
t.start = function(a) {
  this.stop();
  this.Cb = gg(this.pj, fa(a) ? a : this.jd)
};
t.stop = function() {
  this.Ec() && eg.clearTimeout(this.Cb);
  this.Cb = 0
};
function Em(a) {
  a.Ec() && (a.stop(), a.Xh())
}
t.Ec = function() {
  return 0 != this.Cb
};
t.Xh = function() {
  this.Cb = 0;
  this.Zg && this.Zg.call(this.na)
};
var Fm, Gm, Hm, Im, Jm, Km, Lm;
Lm = Km = Jm = Im = Hm = Gm = Fm = o;
var Mm = xb();
Mm && (-1 != Mm.indexOf("Firefox") ? Fm = j : -1 != Mm.indexOf("Camino") ? Gm = j : -1 != Mm.indexOf("iPhone") || -1 != Mm.indexOf("iPod") ? Hm = j : -1 != Mm.indexOf("iPad") ? Im = j : -1 != Mm.indexOf("Android") ? Jm = j : -1 != Mm.indexOf("Chrome") ? Km = j : -1 != Mm.indexOf("Safari") && (Lm = j));
var Nm = Gm, Om = Hm, Pm = Im, Qm = Jm, Rm = Km, Sm = Lm;
var Tm;
a: {
  var Um = "", Vm, Wm;
  if(Fm) {
    Vm = /Firefox\/([0-9.]+)/
  }else {
    if(C || B) {
      Tm = Fb;
      break a
    }
    Rm ? Vm = /Chrome\/([0-9.]+)/ : Sm ? Vm = /Version\/([0-9.]+)/ : Om || Pm ? (Vm = /Version\/(\S+).*Mobile\/(\S+)/, Wm = j) : Qm ? Vm = /Android\s+([0-9.]+)(?:.*Version\/([0-9.]+))?/ : Nm && (Vm = /Camino\/([0-9.]+)/)
  }
  if(Vm) {
    var Xm = Vm.exec(xb()), Um = Xm ? Wm ? Xm[1] + "." + Xm[2] : Xm[2] || Xm[1] : ""
  }
  Tm = Um
}
;var Ym = C && !G("9"), Zm = D || E || B || C && G("9"), $m = C || E || B || o, an = E || o, bn = C || E || B, cn = D || E, dn = D && j, en = D || E || B, fn = D || B;
C && G("7.0");
var gn = D && G("1.8") || E || B;
C || B || D && G("1.9");
var hn = D || E, jn = C || B, kn = C || E && G("525"), ln = E && !G("531"), mn = E && !G("528");
D && G("1.9") || C || B || E && G("531");
var nn = C || D || B, on = D || E && !G("526"), pn = C || B, qn = !C && !B, rn = !E;
Rm && 0 <= Oa(Tm, "4") || Sm && G("533");
function sn(a) {
  return function() {
    return a
  }
}
var tn = sn(o), un = sn(j);
function vn() {
  this.Ya = this.Te()
}
A(vn, ie);
t = vn.prototype;
t.d = l;
function wn(a) {
  return a.d && a.d.Xa
}
t.kj = j;
t.Rb = Dl("goog.editor.Plugin");
t.enable = function(a) {
  this.d == a ? this.Ya = j : Al(this.Rb, "Trying to enable an unregistered field with this plugin.")
};
t.disable = function(a) {
  this.d == a ? this.Ya = o : Al(this.Rb, "Trying to disable an unregistered field with this plugin.")
};
t.isEnabled = function(a) {
  return this.d == a ? this.Ya : o
};
t.Te = tn;
t.Gk = tn;
t.l = function() {
  if(this.d && this.d) {
    this.disable(this.d), this.d = l
  }
  vn.c.l.call(this)
};
var xn = fc({om:1, fk:2, li:3, Md:4, tf:5, execCommand:6, queryCommandValue:7, Ki:8, rj:10, qj:11}), yn = jc(8, 10, 11);
vn.prototype.execCommand = function(a, b) {
  var c = this.Gk(a);
  c || (D && zn(this.d, j), this.d.Dd());
  try {
    var d = this.Gd.apply(this, arguments)
  }finally {
    c || (this.d.xc(), "+link" != a && An(this.d))
  }
  return d
};
vn.prototype.Od = s(o);
function Bn(a, b, c) {
  this.bi = a;
  this.nh = b;
  this.ci = this.bg = o;
  this.Ag = c || {}
}
function Cn(a, b) {
  this.zm = a;
  this.Qh = b
}
;function Dn(a, b, c) {
  this.Ci = a;
  this.hl = !!c;
  a && !b && this.next()
}
A(Dn, el);
Dn.prototype.next = function() {
  var a = this.Ci;
  a || e(dl);
  this.Ci = this.hl ? a.previousSibling : a.nextSibling;
  return a
};
function En(a, b, c) {
  fa(c) || (c = b && a.childNodes.length ? a.childNodes.length - 1 : 0);
  Dn.call(this, a.childNodes[c], j, b)
}
A(En, Dn);
var Fn = jc("ADDRESS", "BLOCKQUOTE", "BODY", "CAPTION", "CENTER", "COL", "COLGROUP", "DIR", "DIV", "DL", "DD", "DT", "FIELDSET", "FORM", "H1", "H2", "H3", "H4", "H5", "H6", "HR", "ISINDEX", "OL", "LI", "MAP", "MENU", "OPTGROUP", "OPTION", "P", "PRE", "TABLE", "TBODY", "TD", "TFOOT", "TH", "THEAD", "TR", "TL", "UL"), Gn = jc("IMG", "IFRAME", "EMBED");
function Hn(a) {
  for(var b;b = !a || 1 != a.nodeType ? l : In(hl(new En(a, o), Jn));) {
    a = b
  }
  return a
}
function In(a) {
  try {
    return a.next()
  }catch(b) {
    return l
  }
}
function Jn(a) {
  return 1 == a.nodeType || 3 == a.nodeType && !Aa(a.nodeValue)
}
function Kn(a, b) {
  var c = Nc(a);
  if(a.getElementsByTagName) {
    for(var d in Gn) {
      if(a.tagName == d || 0 < a.getElementsByTagName(d).length) {
        return o
      }
    }
  }
  return!b && "\u00a0" == c || Aa(c)
}
function Ln(a) {
  return a.length || a.childNodes.length
}
function Mn(a) {
  return a.getAttribute && "true" == a.getAttribute("g_editable")
}
;function Nn(a) {
  var b = a && a.nodeName.toLowerCase();
  return!(!a || "block" != (1 != a.nodeType ? l : C ? a.currentStyle ? a.currentStyle.display : l : Zc(a, "display")) && !("td" == b || "table" == b || "li" == b))
}
function On(a) {
  return Pc(a, Nn, j)
}
var Pn = jc("text", "file", "url");
function Qn(a) {
  var b = a.target.tagName;
  "TEXTAREA" != b && "INPUT" != b && a.preventDefault()
}
function Rn(a, b) {
  cn && b.m(a, "mousedown", Qn, j);
  od(a, j);
  for(var c = a.getElementsByTagName("INPUT"), d = 0, f = c.length;d < f;d++) {
    var h = c[d];
    h.type in Pn && Sn(h)
  }
  ab(a.getElementsByTagName("TEXTAREA"), Sn)
}
function Sn(a) {
  od(a, o);
  if(cn) {
    for(var b = a, a = a.parentNode;a && "HTML" != a.tagName;) {
      if(nd ? "none" == a.style[nd].toLowerCase() : (C || B) && "on" == a.getAttribute("unselectable")) {
        od(a, o, j);
        for(var c = 0, d = a.childNodes.length;c < d;c++) {
          var f = a.childNodes[c];
          f != b && 1 == f.nodeType && od(a.childNodes[c], j)
        }
      }
      b = a;
      a = a.parentNode
    }
  }
}
;function Tn(a, b) {
  var c = Un(a, 1, b), c = Un(c, 0, b), d = c.q(), f = c.D(), h = c.L(), c = c.X();
  if(d == f) {
    for(;f != b && 0 == h && c == Ln(f);) {
      d = f.parentNode, h = Za(d.childNodes, f), c = h + 1, f = d
    }
    d = f
  }
  return Jl(d, h, f, c)
}
function Un(a, b, c) {
  for(var d = (b = 1 == b) ? a.q() : a.D(), f = b ? a.L() : a.X(), h = a.Ia();d != h && d != c && !(b && 0 != f || !b && f != Ln(d));) {
    var i = d.parentNode, f = Za(i.childNodes, d), f = b ? f : f + 1, d = i
  }
  c = b ? d : a.q();
  h = b ? f : a.L();
  d = b ? a.D() : d;
  a = b ? a.X() : f;
  return Jl(c, h, d, a)
}
function Vn(a, b) {
  var c = a.parentNode, d = Za(c.childNodes, a) + (b ? 0 : 1), c = Wn(c, d, b);
  Bm(c.B, c.qc).select()
}
function Xn(a) {
  for(var b = l, c = a.firstChild;c;) {
    var d = c.nextSibling;
    3 == c.nodeType ? "" == c.nodeValue ? a.removeChild(c) : b ? (b.nodeValue += c.nodeValue, a.removeChild(c)) : b = c : (Xn(c), b = l);
    c = d
  }
}
function Yn(a, b) {
  if(b) {
    var c = Zn(b), d = On(b.Ia())
  }
  d ? (d = Fc(d, a), C ? Xn(d) : d.normalize()) : a && (C ? Xn(a) : a.normalize());
  return c ? c() : l
}
function $n(a, b) {
  return b ? Wn(a.q(), a.L()) : Wn(a.D(), a.X())
}
function Zn(a) {
  var b = ao($n(a, j)), c = bo(b), d = b.B.previousSibling;
  if(3 == b.B.nodeType) {
    b.B = l
  }
  var f = ao($n(a, o)), h = bo(f), i = f.B.previousSibling;
  if(3 == f.B.nodeType) {
    f.B = l
  }
  return function() {
    if(!b.B && d) {
      b.B = d.nextSibling, b.B || (b = new co(d, Ln(d)))
    }
    if(!f.B && i) {
      f.B = i.nextSibling, f.B || (f = new co(i, Ln(i)))
    }
    return Jl(b.B || c.B.firstChild || c.B, b.qc, f.B || h.B.firstChild || h.B, f.qc)
  }
}
function ao(a) {
  var b;
  if(3 == a.B.nodeType) {
    for(b = a.B.previousSibling;b && 3 == b.nodeType;b = b.previousSibling) {
      a.qc += Ln(b)
    }
  }else {
    b = a.B.previousSibling
  }
  var c = a.B.parentNode;
  a.B = b ? b.nextSibling : c.firstChild;
  return a
}
function eo(a) {
  return Oc(a.Ia(), "LI") ? j : il(a, function(a) {
    return"LI" == a.tagName
  })
}
function co(a, b) {
  this.B = a;
  this.qc = b
}
function bo(a) {
  var b = a.B.parentNode;
  return new co(b, Za(b.childNodes, a.B))
}
function Wn(a, b, c) {
  for(;1 == a.nodeType;) {
    var d = a.childNodes[b];
    if(!d && !a.lastChild) {
      break
    }
    d ? (a = d.previousSibling, c && a ? b = Ln(a) : (a = d, b = 0)) : (a = a.lastChild, b = Ln(a))
  }
  return new co(a, b)
}
function fo(a) {
  Gl.call(this, a)
}
A(fo, Gl);
fo.prototype.De = function(a) {
  var b = Hl(this, j), c = Hl(this, o), b = b && c ? Fc(b, c) : b || c;
  fo.c.De.call(this);
  if(a) {
    return Yn(b, a)
  }
  b && (a = Yl(rc(I(b))), (a = Yn(b, a)) && a.select())
};
function go(a, b) {
  this.pm = this.id = a;
  this.Xa = l;
  this.Tb = {};
  this.gd = {};
  for(var c in xn) {
    this.gd[c] = []
  }
  this.cf = "";
  if(E && G("525.13") && 0 >= Oa(Fb, "525.18")) {
    this.vh = "tr-webkit-workaround", this.cf = "." + this.vh + ">*{padding-right:1}"
  }
  this.nd = {};
  this.nd[ho] = 1;
  this.nd[io] = 1;
  this.Rg = this.wf = o;
  this.gf = new Dm(this.Uh, jo, this);
  this.ef = {};
  for(var d in ko) {
    this.ef[ko[d]] = 0
  }
  if(D) {
    this.ub = new Dm(this.Ig, lo, this)
  }
  this.fb = new ee(this);
  this.wl = [];
  this.Eb = mo;
  this.Rd = H(b || document);
  this.Sb = this.Rd.b(this.id);
  this.Wc = this.Rd.Da()
}
A(go, ie);
go.prototype.field = l;
go.prototype.Sb = l;
go.prototype.Rb = Dl("goog.editor.Field");
var ho = "change", io = "delayedchange", ko = {El:"cvc", Ul:"load", dm:"unload", yl:"beforechange", Dl:ho, Fl:io, zl:"beforefocus", Gl:"focus", Bl:"blur", Al:"beforetab", Yl:"selectionchange"}, mo = 0, no = l;
go.prototype.Dc = o;
go.prototype.b = q("field");
function oo(a, b, c, d) {
  var f = a.b();
  if(f && dn) {
    f = f.ownerDocument
  }
  a.fb.m(f, b, c, d, g)
}
function po(a, b) {
  var c = b.cc();
  a.Tb[c] && Al(a.Rb, "Cannot register the same class of plugin twice.");
  a.Tb[c] = b;
  for(var d in xn) {
    b[xn[d]] && a.gd[d].push(b)
  }
  b.d = a;
  2 == a.Eb && b.enable(a)
}
var lo = 15, jo = 250;
go.prototype.be = un;
var qo = {46:j, 8:j};
C || (qo[9] = j);
var ro = {86:j, 88:j};
C && (qo[229] = j);
function so(a) {
  var b = !(a.ctrlKey || a.metaKey) && a.keyCode in qo;
  return(a.ctrlKey || a.metaKey) && a.keyCode in ro || b
}
go.prototype.l = function() {
  (1 == this.Eb || 2 == this.Eb) && this.Rb.log(wl, "Disposing a field that is in use.", g);
  this.Sb && this.execCommand("clearlorem");
  this.Eb = mo;
  for(var a in this.Tb) {
    var b = this.Tb[a];
    b.Te() || b.disable(this)
  }
  this.Xa = this.field = l;
  this.fb && he(this.fb);
  if(B && this.be()) {
    try {
      var c = this.Xa.Da();
      c.removeEventListener("focus", this.dg, o);
      c.removeEventListener("blur", this.cg, o)
    }catch(d) {
    }
    delete this.dg;
    delete this.cg
  }
  this.ub && this.ub.stop();
  this.gf.stop();
  this.Rd = l;
  if(this.fb) {
    this.fb.C(), this.fb = l
  }
  for(;a = this.wl.pop();) {
    a.C()
  }
  no == this.id && (no = l);
  for(var f in this.Tb) {
    a = this.Tb[f], a.kj && a.C()
  }
  delete this.Tb;
  go.c.l.call(this)
};
var to = ["DOMNodeInserted", "DOMNodeRemoved", "DOMNodeRemovedFromDocument", "DOMNodeInsertedIntoDocument", "DOMCharacterDataModified"];
function uo(a, b) {
  if(9 == b.keyCode && !a.dispatchEvent({type:"beforetab", shiftKey:b.shiftKey, altKey:b.altKey, ctrlKey:b.ctrlKey}) || D && b.metaKey && (37 == b.keyCode || 39 == b.keyCode)) {
    return b.preventDefault(), o
  }
  a.Gg = b.charCode || (so(b) ? j : !(!D || b.ctrlKey || b.metaKey || D && !b.charCode));
  a.Gg && a.Dd();
  return j
}
var vo = {8:1, 9:1, 13:1, 33:1, 34:1, 35:1, 36:1, 37:1, 38:1, 39:1, 40:1, 46:1}, wo = {65:j, 86:j, 88:j}, xo = {8:1, 9:1, 13:1, 27:1, 33:1, 34:1, 37:1, 38:1, 39:1, 40:1};
t = go.prototype;
t.ue = function(a, b) {
  for(var c = this.gd[a], d = ob(arguments, 1), f = 0;f < c.length;++f) {
    var h = c[f];
    if((h.isEnabled(this) || yn[a]) && h[xn[a]].apply(h, d)) {
      return j
    }
  }
  return o
};
t.Ek = function(a, b) {
  for(var c = this.gd[a], d = ob(arguments, 1), f = 0;f < c.length;++f) {
    var h = c[f];
    (h.isEnabled(this) || yn[a]) && h[xn[a]].apply(h, d)
  }
};
t.eh = function(a, b, c) {
  for(var d = this.gd[a], f = ob(arguments, 1), h = 0;h < d.length;++h) {
    var i = d[h];
    if(i.isEnabled(this) || yn[a]) {
      f[0] = i[xn[a]].apply(i, f)
    }
  }
  return f[0]
};
t.Lg = function(a) {
  (D || uo(this, a)) && !this.ue(1, a) && kn && yo(this, a)
};
t.gk = function(a) {
  if(D) {
    if(!uo(this, a)) {
      return
    }
  }else {
    this.Gg = j, this.Dd()
  }
  !this.ue(2, a) && !kn && yo(this, a)
};
t.hk = function(a) {
  !D && (this.Gg || so(a)) && this.Ig();
  this.ue(3, a);
  zo(this, "selectionchange") || (vo[a.keyCode] || (a.ctrlKey || a.metaKey) && wo[a.keyCode]) && this.Qi.start()
};
function yo(a, b) {
  if(!b.altKey) {
    var c = vb ? b.metaKey : b.ctrlKey;
    if(c || xo[b.keyCode]) {
      var d = b.charCode || b.keyCode;
      17 != d && a.ue(5, b, String.fromCharCode(d).toLowerCase(), c) && b.preventDefault()
    }
  }
}
t.execCommand = function(a, b) {
  for(var c = arguments, d, f = this.gd[6], h = 0;h < f.length;++h) {
    var i = f[h];
    if(i.isEnabled(this) && i.Od(a)) {
      d = i.execCommand.apply(i, c);
      break
    }
  }
  return d
};
t.queryCommandValue = function(a) {
  var b = 2 == this.Eb && this.yf;
  if(y(a)) {
    return this.Lf(a, b)
  }
  for(var c = {}, d = 0;d < a.length;d++) {
    c[a[d]] = this.Lf(a[d], b)
  }
  return c
};
t.Lf = function(a, b) {
  for(var c = this.gd[7], d = 0;d < c.length;++d) {
    var f = c[d];
    if(f.isEnabled(this) && f.Od(a) && (b || f.Te())) {
      return f.queryCommandValue(a)
    }
  }
  return b ? l : o
};
t.ck = function(a, b) {
  if(!zo(this, ho)) {
    b = b.Aa;
    try {
      if(b.originalTarget.prefix || "scrollbar" == b.originalTarget.nodeName) {
        return
      }
    }catch(c) {
      return
    }
    b.prevValue != b.newValue && a.call(this, b)
  }
};
t.Ng = function(a) {
  if(!zo(this, ho) && (a = a.ei ? a.Aa : a, !a.target.firebugIgnore)) {
    this.Rg = this.wf = j, this.ub.start()
  }
};
t.ji = function() {
  C && this.execCommand("clearlorem", j);
  D && this.xg();
  this.xc()
};
function $(a) {
  return(a = a.Xa && a.Xa.Da()) && Yl(a)
}
function An(a, b, c) {
  if(!zo(a, "selectionchange")) {
    var d = $(a), d = d && d.Ia();
    a.yf = !!d && Bc(a.b(), d);
    a.dispatchEvent("cvc");
    a.dispatchEvent({type:"selectionchange", um:b && b.type});
    a.ue(4, b, c)
  }
}
t.tk = function() {
  var a = this.Pi;
  this.Pi = l;
  An(this, g, a)
};
t.Dd = function() {
  zo(this, "beforechange") || this.dispatchEvent("beforechange")
};
function zn(a, b) {
  b && (a.ub && Em(a.ub), a.nd[ho] = 1);
  a.ub && Em(a.ub);
  Em(a.gf);
  a.nd[io] = 1
}
function Ao(a, b, c) {
  !b && a.ub && Em(a.ub);
  a.nd[ho] = 0;
  a.nd[io] = 0;
  b && a.Ig();
  c && a.Uh()
}
function zo(a, b) {
  return!!a.nd[b] || a.ef[b] && 500 >= wa() - a.ef[b]
}
t.xc = function(a) {
  Ao(this, j, a)
};
t.Ig = function() {
  if(!zo(this, ho)) {
    this.ub && this.ub.stop(), this.Rg = this.wf = j, zo(this, io) || this.gf.start()
  }
};
t.Uh = function() {
  if(!zo(this, io)) {
    this.gf.stop(), this.wf = o, this.dispatchEvent(io)
  }
};
t.xg = function() {
  this.Sh();
  this.Vh()
};
t.Sh = function() {
  zo(this, "beforefocus") || (this.execCommand("clearlorem", j), this.dispatchEvent("beforefocus"))
};
t.Vh = function() {
  if(!zo(this, "focus")) {
    no = this.id;
    this.yf = j;
    this.dispatchEvent("focus");
    if(D) {
      var a = this.b(), b = $(this);
      if(b) {
        var c = b.Gc() ? b.q() : b.D();
        0 == (b.Gc() ? b.L() : b.X()) && (!c || c == a || "BODY" == c.tagName) && Bm(Hn(a), 0).select()
      }
    }
    !bn && this.be() && this.Xa.Da().parent.getSelection().removeAllRanges()
  }
};
t.Th = function() {
  if(!zo(this, "blur")) {
    no == this.id && (no = l), this.yf = o, this.dispatchEvent("blur")
  }
};
function Bo(a) {
  Oc(a.target, "A") && a.preventDefault()
}
t.kk = function(a) {
  if(!no) {
    no = this.id
  }
  if(C) {
    var b = a.target;
    b && "A" == b.tagName && a.ctrlKey && this.Rd.Da().open(b.href)
  }
};
t.lk = function(a) {
  An(this, a);
  if(C) {
    this.Pi = a.target, this.Qi.start()
  }
};
function Co() {
  var a = qi(Do);
  if(a.queryCommandValue("usinglorem")) {
    return"\u00a0"
  }
  if(2 != a.Eb) {
    var b = a.Sb;
    b || a.Rb.log(ul, "Couldn't get the field element to read the contents", g);
    return b.innerHTML
  }
  var c = a.b(), b = c.cloneNode(o), c = c.innerHTML;
  C && c.match(/^\s*<script/i) && (c = "\u00a0" + c);
  b.innerHTML = c;
  a.Ek(11, b);
  return a.eh(10, b.innerHTML)
}
function Eo(a, b) {
  if(1 == a.Eb) {
    Al(a.Rb, "Can't set html while loading Trogedit")
  }else {
    b && (b = "<p>" + b + "</p>");
    zn(a, o);
    var c = b, d = a.b();
    if(d) {
      if(a.be() && E) {
        for(var f = d.ownerDocument.getElementsByTagName("HEAD"), h = f.length - 1;1 <= h;--h) {
          f[h].parentNode.removeChild(f[h])
        }
      }
    }else {
      d = a.Sb
    }
    if(d) {
      f = {}, c = a.eh(8, c || "", f), Xc(d, f), d.innerHTML = c
    }
    2 == a.Eb && (D && Em(a.ub), Ao(a))
  }
}
t.focus = function() {
  if(!$m || E) {
    this.Xa.Da().focus()
  }else {
    if(B) {
      var a = this.Wc.pageXOffset, b = this.Wc.pageYOffset
    }
    this.b().focus();
    B && this.Wc.scrollTo(a, b)
  }
};
function Fo(a) {
  var b = a.b();
  if(b) {
    var c = Hn(b);
    b == c ? Bm(b, 0).select() : Vn(c, j);
    An(a)
  }
}
function Go(a) {
  if(!fa(a.Tg) && (a.Tg = o, C && a.be())) {
    for(var b = a.Rd.Da();b != b.parent;) {
      try {
        b = b.parent
      }catch(c) {
        break
      }
    }
    b = b.location;
    a.Tg = "https:" == b.protocol && -1 == b.search.indexOf("nocheckhttps")
  }
  return a.Tg
}
t.si = function(a, b, c) {
  if(this.Bg) {
    $d(this.Bg), this.Bg = l
  }
  a.gm = "true";
  var d = Qc(H(this.Sb)), c = new Bn(this.id, d, c);
  if(Go(this)) {
    var f = Gc(a).body;
    if($m) {
      f.contentEditable = j
    }
    f.className = "editable";
    f.setAttribute("g_editable", j);
    f.hideFocus = j;
    f.id = c.bi;
    Xc(f, c.Ag);
    f.innerHTML = b
  }else {
    var d = new Cn(this.b(), this.cf), h = [];
    c.bg && c.nh && h.push("<!DOCTYPE HTML>");
    h.push('<html style="background:none transparent;');
    c.bg && h.push("height:", c.ci ? "100%" : "auto");
    h.push('">');
    h.push("<head><style>");
    d && d.Qh && h.push(d.Qh);
    D && c.nh && h.push(" img {-moz-force-broken-image-icon: 1;}");
    h.push("</style></head>");
    h.push('<body g_editable="true" hidefocus="true" ');
    $m && h.push("contentEditable ");
    h.push('class="editable ');
    h.push('" id="', c.bi, '" style="');
    D && c.bg && (h.push(";width:100%;border:0;margin:0;background:none transparent;", ";height:", c.nh ? "100%" : "auto"), c.ci ? h.push(";overflow:auto") : h.push(";overflow-y:hidden;overflow-x:auto"));
    B && h.push(";outline:hidden");
    for(f in c.Ag) {
      h.push(";" + f + ":" + c.Ag[f])
    }
    h.push('">', b, "</body></html>");
    b = h.join("");
    f = Gc(a);
    f.open();
    f.write(b);
    f.close()
  }
  a = Gc(a).body;
  this.Eb = 2;
  this.field = a;
  this.Xa = H(a);
  this.Rg = this.wf = o;
  a.setAttribute("g_editable", "true");
  if(!$m) {
    a = this.Xa.ba(), a.designMode = "on", gn && a.execCommand("styleWithCSS", o, o)
  }
  C && Cm(this.Xa.Da());
  no != this.id && this.execCommand("updatelorem");
  B && this.be() ? (this.dg = ua(this.xg, this), this.cg = ua(this.Th, this), a = this.Xa.Da(), a.addEventListener("focus", this.dg, o), a.addEventListener("blur", this.cg, o)) : (jn ? (oo(this, "focus", this.Vh), oo(this, wd, this.Sh)) : oo(this, "focus", this.xg), oo(this, "blur", this.Th, D));
  D ? an ? this.fb.m(this.b(), "DOMSubtreeModified", this.Ng) : (a = this.Xa.ba(), this.fb.m(a, to, this.Ng, j), this.fb.m(a, "DOMAttrModified", ua(this.ck, this, this.Ng), j)) : (oo(this, ["beforecut", "beforepaste", "drop", "dragend"], this.Dd), oo(this, ["cut", "paste"], this.xc), oo(this, "drop", this.ji));
  oo(this, E ? "dragend" : "dragdrop", this.ji);
  oo(this, "keydown", this.Lg);
  oo(this, "keypress", this.gk);
  oo(this, "keyup", this.hk);
  this.Qi = new Dm(this.tk, 250, this);
  E && oo(this, "click", Bo);
  oo(this, "mousedown", this.kk);
  oo(this, "mouseup", this.lk);
  a = this.b();
  this.vh && Rb(a, this.vh);
  if(this.cf && Go(this)) {
    a = this.cf, b = H(this.b()), c = l, C ? (c = b.ba().createStyleSheet(), md(c, a)) : (f = mc(b.la, "head", g, g)[0], f || (c = mc(b.la, "body", g, g)[0], f = b.e("head"), c.parentNode.insertBefore(f, c)), c = b.e("style"), md(c, a), b.appendChild(f, c))
  }
  Ao(this);
  this.Rb.info("Dispatching load " + this.id);
  this.dispatchEvent("load");
  for(var i in this.Tb) {
    this.Tb[i].enable(this)
  }
};
function Ho(a) {
  this.p = a;
  a = C ? "focusout" : "blur";
  this.Ik = Wd(this.p, C ? "focusin" : "focus", this, !C);
  this.Jk = Wd(this.p, a, this, !C)
}
A(Ho, ie);
Ho.prototype.handleEvent = function(a) {
  var b = new yd(a.Aa);
  b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
  try {
    this.dispatchEvent(b)
  }finally {
    b.C()
  }
};
Ho.prototype.l = function() {
  Ho.c.l.call(this);
  $d(this.Ik);
  $d(this.Jk);
  delete this.p
};
function Io(a, b, c) {
  this.target = a;
  this.handle = b || a;
  this.Yg = c || new Wc(NaN, NaN, NaN, NaN);
  this.la = I(a);
  this.K = new ee(this);
  Wd(this.handle, ["touchstart", "mousedown"], this.Vi, o, this)
}
A(Io, ie);
var Jo = C || D && G("1.9.3");
t = Io.prototype;
t.clientX = 0;
t.clientY = 0;
t.screenX = 0;
t.screenY = 0;
t.Wi = 0;
t.Xi = 0;
t.Ad = 0;
t.Bd = 0;
t.Ya = j;
t.yc = o;
t.ri = 0;
t.Mk = 0;
t.Ck = o;
t.Ba = q("K");
t.fc = ca("Ya");
t.l = function() {
  Io.c.l.call(this);
  Yd(this.handle, ["touchstart", "mousedown"], this.Vi, o, this);
  this.K.C();
  delete this.target;
  delete this.handle;
  delete this.K
};
t.Vi = function(a) {
  var b = "mousedown" == a.type;
  if(this.Ya && !this.yc && (!b || Ad(a))) {
    Ko(a);
    if(0 == this.ri) {
      if(Lo(this, a), this.yc) {
        a.preventDefault()
      }else {
        return
      }
    }else {
      a.preventDefault()
    }
    var b = this.la, c = b.documentElement, d = !Jo;
    this.K.m(b, ["touchmove", "mousemove"], this.mk, d);
    this.K.m(b, ["touchend", "mouseup"], this.jf, d);
    Jo ? (c.setCapture(o), this.K.m(c, "losecapture", this.jf)) : this.K.m(rc(b), "blur", this.jf);
    C && this.Ck && this.K.m(b, "dragstart", vd);
    this.il && this.K.m(this.il, "scroll", this.Vk, d);
    this.clientX = this.Wi = a.clientX;
    this.clientY = this.Xi = a.clientY;
    this.screenX = a.screenX;
    this.screenY = a.screenY;
    this.Ad = this.target.offsetLeft;
    this.Bd = this.target.offsetTop;
    this.Ce = Rc(H(this.la));
    this.Mk = wa()
  }
};
function Lo(a, b) {
  if(a.dispatchEvent(new Mo("start", a, b.clientX, b.clientY, b)) !== o) {
    a.yc = j
  }
}
t.jf = function(a, b) {
  he(this.K);
  Jo && this.la.releaseCapture();
  if(this.yc) {
    Ko(a);
    this.yc = o;
    var c = No(this, this.Ad), d = Oo(this, this.Bd);
    this.dispatchEvent(new Mo("end", this, a.clientX, a.clientY, a, c, d, b || "touchcancel" == a.type))
  }
  ("touchend" == a.type || "touchcancel" == a.type) && a.preventDefault()
};
function Ko(a) {
  var b = a.type;
  "touchstart" == b || "touchmove" == b ? a.hd(a.Aa.targetTouches[0], a.currentTarget) : ("touchend" == b || "touchcancel" == b) && a.hd(a.Aa.changedTouches[0], a.currentTarget)
}
t.mk = function(a) {
  if(this.Ya) {
    Ko(a);
    var b = a.clientX - this.clientX, c = a.clientY - this.clientY;
    this.clientX = a.clientX;
    this.clientY = a.clientY;
    this.screenX = a.screenX;
    this.screenY = a.screenY;
    if(!this.yc) {
      var d = this.Wi - this.clientX, f = this.Xi - this.clientY;
      if(d * d + f * f > this.ri && (Lo(this, a), !this.yc)) {
        this.jf(a);
        return
      }
    }
    c = Po(this, b, c);
    b = c.x;
    c = c.y;
    this.yc && this.dispatchEvent(new Mo("beforedrag", this, a.clientX, a.clientY, a, b, c)) !== o && (Qo(this, a, b, c), a.preventDefault())
  }
};
function Po(a, b, c) {
  var d = Rc(H(a.la)), b = b + (d.x - a.Ce.x), c = c + (d.y - a.Ce.y);
  a.Ce = d;
  a.Ad += b;
  a.Bd += c;
  b = No(a, a.Ad);
  a = Oo(a, a.Bd);
  return new Ub(b, a)
}
t.Vk = function(a) {
  var b = Po(this, 0, 0);
  a.clientX = this.Ce.x - this.clientX;
  a.clientY = this.Ce.y - this.clientY;
  Qo(this, a, b.x, b.y)
};
function Qo(a, b, c, d) {
  a.target.style.left = c + "px";
  a.target.style.top = d + "px";
  a.dispatchEvent(new Mo("drag", a, b.clientX, b.clientY, b, c, d))
}
function No(a, b) {
  var c = a.Yg, d = !isNaN(c.left) ? c.left : l, c = !isNaN(c.width) ? c.width : 0;
  return Math.min(d != l ? d + c : Infinity, Math.max(d != l ? d : -Infinity, b))
}
function Oo(a, b) {
  var c = a.Yg, d = !isNaN(c.top) ? c.top : l, c = !isNaN(c.height) ? c.height : 0;
  return Math.min(d != l ? d + c : Infinity, Math.max(d != l ? d : -Infinity, b))
}
function Mo(a, b, c, d, f, h, i, k) {
  ud.call(this, a);
  this.clientX = c;
  this.clientY = d;
  this.im = f;
  this.left = fa(h) ? h : b.Ad;
  this.top = fa(i) ? i : b.Bd;
  this.mm = b;
  this.lm = !!k
}
A(Mo, ud);
function Ro(a, b, c) {
  ke.call(this, c);
  this.Kb = a || "modal-dialog";
  this.sh = !!b;
  this.tb = So()
}
A(Ro, ke);
t = Ro.prototype;
t.nf = l;
t.Nj = j;
t.pi = j;
t.sh = o;
t.Be = j;
t.Yh = j;
t.oj = 0.5;
t.aj = "";
t.ta = "";
t.tb = l;
t.Ed = l;
t.Ua = o;
t.Kj = o;
t.ka = l;
t.ga = l;
t.Uf = l;
t.Ne = l;
t.$i = l;
t.Tf = l;
t.ke = l;
t.Jb = l;
t.mh = function(a) {
  this.aj = a;
  this.Ne && Hc(this.Ne, a)
};
t.hb = function(a) {
  this.ta = a;
  if(this.ke) {
    this.ke.innerHTML = a
  }
};
t.T = function() {
  this.b() || this.$a();
  return this.ke
};
t.gi = function() {
  this.b() || this.$a();
  return this.Jb
};
function To(a) {
  a.Be = j;
  Uo(a);
  var b = a.R();
  a.V && a.W() && (a.ga && b.ui(a.ga, a.b()), a.ka && b.ui(a.ka, a.b()), Vo(a))
}
t.e = function() {
  Uo(this);
  var a = this.R();
  this.p = a.e("div", {className:this.Kb, tabIndex:0}, this.Uf = a.e("div", {className:this.Kb + "-title", id:ne(this)}, this.Ne = a.e("span", this.Kb + "-title-text", this.aj), this.Tf = a.e("span", this.Kb + "-title-close")), this.ke = a.e("div", this.Kb + "-content"), this.Jb = a.e("div", this.Kb + "-buttons"), this.Yi = a.e("span", {tabIndex:0}));
  this.$i = this.Uf.id;
  xe(this.b(), "dialog");
  ye(this.b(), "labelledby", this.$i || "");
  if(this.ta) {
    this.ke.innerHTML = this.ta
  }
  ld(this.Tf, this.pi);
  ld(this.b(), o);
  if(this.tb) {
    a = this.tb, a.p = this.Jb, a.$a()
  }
};
function Uo(a) {
  if(a.sh && a.Be && !a.ga) {
    var b;
    b = a.R().e("iframe", {frameborder:0, style:"border:0;vertical-align:bottom;", src:'javascript:""'});
    a.ga = b;
    a.ga.className = a.Kb + "-bg";
    ld(a.ga, o);
    kd(a.ga, 0)
  }else {
    if((!a.sh || !a.Be) && a.ga) {
      J(a.ga), a.ga = l
    }
  }
  if(a.Be && !a.ka) {
    a.ka = a.R().e("div", a.Kb + "-bg"), kd(a.ka, a.oj), ld(a.ka, o)
  }else {
    if(!a.Be && a.ka) {
      J(a.ka), a.ka = l
    }
  }
}
t.$a = function(a) {
  this.V && e(Error("Component already rendered"));
  this.b() || this.e();
  a = a || this.R().ba().body;
  this.ga && a.appendChild(this.ga);
  this.ka && a.appendChild(this.ka);
  Ro.c.$a.call(this, a)
};
t.ea = function() {
  Ro.c.ea.call(this);
  this.nf = new Ho(this.R().ba());
  if(this.Yh && !this.Ed) {
    var a = new Io(this.b(), this.Uf);
    Rb(this.Uf, this.Kb + "-title-draggable");
    this.Ed = a
  }
  this.Ba().m(this.Tf, "click", this.Yk).m(this.nf, "focusin", this.Uk);
  xe(this.b(), "dialog");
  "" !== this.Ne.id && ye(this.b(), "labelledby", this.Ne.id)
};
t.zb = function() {
  this.W() && this.Z(o);
  this.nf.C();
  this.nf = l;
  if(this.Ed) {
    this.Ed.C(), this.Ed = l
  }
  Ro.c.zb.call(this)
};
t.Z = function(a) {
  if(a != this.Ua) {
    var b = this.R().ba(), c = rc(b) || window;
    this.V || this.$a(b.body);
    a ? (Vo(this), this.Ja(), this.Ba().m(this.b(), "keydown", this.Hf).m(this.b(), "keypress", this.Hf).m(c, "resize", this.Hi)) : this.Ba().bb(this.b(), "keydown", this.Hf).bb(this.b(), "keypress", this.Hf).bb(c, "resize", this.Hi);
    this.ga && ld(this.ga, a);
    this.ka && ld(this.ka, a);
    ld(this.b(), a);
    a && this.focus();
    (this.Ua = a) ? this.Ba().m(this.Jb, "click", this.Di) : (this.Ba().bb(this.Jb, "click", this.Di), this.dispatchEvent(Wo), this.Kj && this.C())
  }
};
t.W = q("Ua");
t.focus = function() {
  try {
    this.b().focus()
  }catch(a) {
  }
  if(this.tb) {
    var b = this.tb.ff;
    if(b) {
      for(var c = this.R().ba(), d = this.Jb.getElementsByTagName("button"), f = 0, h;h = d[f];f++) {
        if(h.name == b) {
          try {
            if(E || B) {
              var i = c.createElement("input");
              i.style.cssText = "position:fixed;width:0;height:0;left:0;top:0;";
              this.b().appendChild(i);
              i.focus();
              this.b().removeChild(i)
            }
            h.focus()
          }catch(k) {
          }
          break
        }
      }
    }
  }
};
function Vo(a) {
  a.ga && ld(a.ga, o);
  a.ka && ld(a.ka, o);
  var b = a.R().ba(), c = qc(rc(b) || window), d = Math.max(b.body.scrollWidth, c.width), b = Math.max(b.body.scrollHeight, c.height);
  a.ga && (ld(a.ga, j), hd(a.ga, d, b));
  a.ka && (ld(a.ka, j), hd(a.ka, d, b));
  if(a.Yh) {
    c = id(a.b()), a.Ed.Yg = new Wc(0, 0, d - c.width, b - c.height)
  }
}
t.Ja = function() {
  var a = this.R().ba(), b = rc(a) || window;
  if("fixed" == $c(this.b(), "position")) {
    var c = a = 0
  }else {
    c = Rc(this.R()), a = c.x, c = c.y
  }
  var d = id(this.b()), b = qc(b), a = Math.max(a + b.width / 2 - d.width / 2, 0), c = Math.max(c + b.height / 2 - d.height / 2, 0);
  ad(this.b(), a, c)
};
t.Yk = function() {
  if(this.pi) {
    var a = this.tb, b = a && a.hg;
    b ? (a = a.get(b), this.dispatchEvent(new Xo(b, a)) && this.Z(o)) : this.Z(o)
  }
};
t.l = function() {
  Ro.c.l.call(this);
  if(this.ka) {
    J(this.ka), this.ka = l
  }
  if(this.ga) {
    J(this.ga), this.ga = l
  }
  this.Yi = this.Jb = this.Tf = l
};
function Yo(a, b) {
  a.tb = b;
  if(a.Jb) {
    if(a.tb) {
      var c = a.tb;
      c.p = a.Jb;
      c.$a()
    }else {
      a.Jb.innerHTML = ""
    }
  }
}
t.Di = function(a) {
  a: {
    for(a = a.target;a != l && a != this.Jb;) {
      if("BUTTON" == a.tagName) {
        break a
      }
      a = a.parentNode
    }
    a = l
  }
  if(a && !a.disabled) {
    var a = a.name, b = this.tb.get(a);
    this.dispatchEvent(new Xo(a, b)) && this.Z(o)
  }
};
t.Hf = function(a) {
  var b = o, c = o, d = this.tb, f = a.target;
  if("keydown" == a.type) {
    if(this.Nj && 27 == a.keyCode) {
      var h = d && d.hg, f = "SELECT" == f.tagName && !f.disabled;
      h && !f ? (c = j, b = d.get(h), b = this.dispatchEvent(new Xo(h, b))) : f || (b = j)
    }else {
      9 == a.keyCode && a.shiftKey && f == this.b() && (c = j)
    }
  }else {
    if(13 == a.keyCode) {
      if("BUTTON" == f.tagName) {
        h = f.name
      }else {
        if(d) {
          var i = d.ff, k = i && Zo(d, i), f = ("TEXTAREA" == f.tagName || "SELECT" == f.tagName) && !f.disabled;
          k && !k.disabled && !f && (h = i)
        }
      }
      h && (c = j, b = this.dispatchEvent(new Xo(h, "" + d.get(h))))
    }
  }
  if(b || c) {
    a.stopPropagation(), a.preventDefault()
  }
  b && this.Z(o)
};
t.Hi = function() {
  Vo(this)
};
t.Uk = function(a) {
  this.Yi == a.target && gg(this.Rj, 0, this)
};
t.Rj = function() {
  C && this.R().ba().body.focus();
  this.b().focus()
};
function Xo(a, b) {
  this.type = $o;
  this.key = a;
  this.caption = b
}
A(Xo, ud);
var $o = "dialogselect", Wo = "afterhide";
function ap(a) {
  this.z = a || H();
  kl.call(this)
}
A(ap, kl);
t = ap.prototype;
t.Kb = "goog-buttonset";
t.ff = l;
t.p = l;
t.hg = l;
t.set = function(a, b, c, d) {
  kl.prototype.set.call(this, a, b);
  if(c) {
    this.ff = a
  }
  if(d) {
    this.hg = a
  }
  return this
};
t.rb = function(a, b, c) {
  return this.set(a.key, a.caption, b, c)
};
t.$a = function() {
  if(this.p) {
    this.p.innerHTML = "";
    var a = H(this.p);
    cl(this, function(b, c) {
      var d = a.e("button", {name:c}, b);
      if(c == this.ff) {
        d.className = this.Kb + "-default"
      }
      this.p.appendChild(d)
    }, this)
  }
};
function Zo(a, b) {
  for(var c = a.p.getElementsByTagName("BUTTON"), d = 0, f;f = c[d];d++) {
    if(f.name == b || f.id == b) {
      return f
    }
  }
  return l
}
var bp = z("OK"), cp = z("Cancel"), dp = z("Yes"), ep = z("No"), fp = z("Save"), gp = z("Continue"), hp = {key:"ok", caption:bp}, ip = {key:"cancel", caption:cp}, jp = {key:"yes", caption:dp}, kp = {key:"no", caption:ep}, lp = {key:"save", caption:fp}, mp = {key:"continue", caption:gp};
function So() {
  return(new ap).rb(hp, j).rb(ip, o, j)
}
(new ap).rb(hp, j, j);
So();
(new ap).rb(jp, j).rb(kp, o, j);
(new ap).rb(jp).rb(kp, j).rb(ip, o, j);
(new ap).rb(mp).rb(lp).rb(ip, j, j);
function np(a) {
  this.P = a
}
A(np, ie);
np.prototype.show = function() {
  if(!this.Lb) {
    var a = this.P.tg(1, 2);
    a.cellSpacing = "0";
    a.cellPadding = "0";
    a.style.fontSize = "10pt";
    var b = this.P.e("DIV");
    a.rows[0].cells[0].innerHTML = '<span style="position: relative; bottom: 2px; padding-right: 1px; white-space: nowrap;">' + Rg + "&nbsp;</span>";
    var c = this.od = this.P.e("INPUT", {id:op});
    Xc(c, "width", "98%");
    Xc(a.rows[0].cells[1], "width", "100%");
    a.rows[0].cells[1].appendChild(c);
    c.value = pp(this.Le);
    this.K.m(c, "keyup", ua(this.Wk, this));
    b.appendChild(a);
    this.ql = b;
    a = this.P.e("DIV", l, this.ql);
    b = new qp(this);
    b.mh(Qg).hb(a);
    var c = this.jb = new rp(this.P, Sg), d = sp, f = this.P.createElement("DIV"), h = this.P.e("DIV", {innerHTML:"<b>" + Xg + "</b>"}), i = this.P.e("INPUT", {id:tp, className:up});
    if(!C) {
      i.type = "url"
    }
    if(C && Qc(H(i))) {
      i.style.width = "99%"
    }
    var k = this.P.e("DIV", l, i);
    this.rh = new vp(i);
    this.K.m(this.rh, "input", this.Ii);
    i = new vf(Vg, wp.ca(), this.P);
    i.$a(k);
    i.b().style.marginTop = "1em";
    this.K.m(i, "action", this.Zk);
    i = this.P.e("DIV", {className:xp, innerHTML:Wg});
    f.appendChild(h);
    f.appendChild(k);
    f.appendChild(i);
    yp(c, d, Tg, Ug, f);
    c = this.jb;
    d = zp;
    f = this.P.e("DIV");
    h = this.P.e("DIV", {innerHTML:"<b>" + ah + "</b>"});
    f.appendChild(h);
    h = this.P.e("INPUT", {id:Ap, className:up});
    if(C && Qc(H(h))) {
      h.style.width = "99%"
    }
    f.appendChild(h);
    this.yg = new vp(h);
    this.K.m(this.yg, "input", this.Ii);
    h = this.P.e("DIV", {id:Bp, className:Cp, style:"visibility:hidden"}, $g);
    f.appendChild(h);
    this.me && (h = this.P.e("DIV", {className:xp, innerHTML:this.me}), f.appendChild(h));
    yp(c, d, Yg, Zg, f);
    this.jb.$a(a);
    this.K.m(this.jb, "select", this.Sk);
    this.Lb = Dp(b);
    this.Lb.addEventListener(Wo, this.Wj, o, this)
  }
  this.Lb.Z(j)
};
np.prototype.Pg = function() {
  this.Lb && this.Lb.Z(o)
};
np.prototype.we = function() {
  return!!this.Lb && this.Lb.W()
};
function qp(a) {
  this.Fd = a;
  this.Uc = new Ro("", j, this.Fd.P);
  this.fe = new ap(this.Fd.P);
  this.ee = {};
  this.rd("tr-dialog")
}
qp.prototype.mh = function(a) {
  this.Uc.mh(a);
  return this
};
function Ep(a) {
  var b = z("OK");
  a.fe.set("ok", b, j);
  a.ee.ok = ua(a.Fd.nk, a.Fd)
}
function Fp(a) {
  var b = z("Cancel");
  a.fe.set("cancel", b, o, j);
  a.ee.cancel = ua(a.Fd.Xj, a.Fd)
}
qp.prototype.rb = function(a, b, c) {
  c = c || Sa();
  this.fe.set(c, a);
  this.ee[c] = b;
  return this
};
qp.prototype.rd = function(a) {
  var b = this.Uc;
  b.b() || b.$a();
  Rb(b.b(), a);
  return this
};
qp.prototype.hb = function(a) {
  this.Uc.T().appendChild(a);
  return this
};
function Dp(a) {
  a.fe.vi() && (Ep(a), Fp(a));
  Yo(a.Uc, a.fe);
  var b = a.ee;
  a.ee = l;
  a.Uc.addEventListener($o, function(a) {
    if(b[a.key]) {
      return b[a.key](a)
    }
  });
  To(a.Uc);
  var c = a.Uc;
  a.Uc = l;
  return c
}
t = np.prototype;
t.gi = function(a) {
  return Zo(this.Lb.tb, a)
};
t.nk = function() {
  var a;
  ne(this.jb.ib.Ta) == zp ? a = Gp(this) : (a = this.P.b(tp).value, Hp.test(a) ? a = Gp(this, tp) : (0 > a.search(/:/) && (a = "http://" + Da(a)), a = Ip(this, a)));
  return a ? this.dispatchEvent(a) : o
};
t.Xj = function() {
  return this.dispatchEvent("cancel")
};
t.l = function() {
  if(this.Lb) {
    this.Pg(), this.Lb.C(), this.Lb = l
  }
  np.c.l.call(this)
};
t.Wj = function() {
  this.dispatchEvent("afterhide")
};
function Jp(a) {
  vn.call(this);
  this.Hj = a
}
A(Jp, vn);
t = Jp.prototype;
t.Od = function(a) {
  return a == this.Hj
};
t.execCommand = function(a, b) {
  return this.Gd.apply(this, arguments)
};
t.Gd = function(a, b) {
  this.Oi || Kp(this);
  if(!this.Cd) {
    var c = H(this.d.Wc), c = new Lp(c, b);
    this.me && c.Ri(this.me);
    c.$d = this.$d;
    this.K.m(c, "ok", this.pk).m(c, "cancel", this.Yj);
    this.Cd = c
  }
  this.Vd = (c = $(this.d)) && new fo(c);
  Cm(this.d.Xa.Da());
  Xd(this.Cd, "afterhide", this.Hg, o, this);
  this.d.Dc = j;
  this.Cd.show();
  this.dispatchEvent("dialogOpened");
  An(this.d);
  return j
};
t.Hg = function() {
  this.d.Dc = o;
  this.d.focus();
  if(this.Vd) {
    this.Vd.restore(), this.Vd = l
  }
  this.Oi || Kp(this);
  this.dispatchEvent("dialogClosed");
  An(this.d);
  this.d.ef.selectionchange = wa()
};
t.l = function() {
  Kp(this);
  Jp.c.l.call(this)
};
t.Oi = o;
t.Qg = o;
function Kp(a) {
  if(a.Cd && !a.Qg) {
    a.Qg = j, a.Cd.C(), a.Cd = l, a.Qg = o
  }
}
;var Mp = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Np(a, b) {
  this.hc = a;
  this.xf = b
}
function pp(a) {
  if(!a.ug) {
    a.ug = Nc(a.hc)
  }
  return a.ug
}
function Op(a, b, c) {
  var d = a.hc;
  d.href = c;
  var f = pp(a);
  if(b != f) {
    c = Hn(d);
    if(3 == c.nodeType) {
      c = c.parentNode
    }
    Nc(c) != f && (c = d);
    vc(c);
    d = H(c);
    c.appendChild(d.createTextNode(b));
    a.ug = l
  }
  a.xf = o
}
function Pp(a) {
  a = a.hc;
  if(mn) {
    var b;
    b = a.nextSibling;
    if(!b || !(3 == b.nodeType && (0 == b.data.lastIndexOf("\u00a0", 0) || 0 == b.data.lastIndexOf(" ", 0)))) {
      b = H(a).createTextNode("\u00a0"), xc(b, a)
    }
    Bm(b, 1).select()
  }else {
    Vn(a, o)
  }
}
function Qp(a, b) {
  var c = new Np(a, j);
  c.hc.href = "/";
  if(b) {
    a.target = b
  }
  return c
}
function Rp(a) {
  if(/\s/.test(a) || Hp.test(a)) {
    return o
  }
  var b = o;
  /^[^:\/?#.]+:/.test(a) || (a = "http://" + a, b = j);
  a = a.match(Mp);
  if(-1 != Za(["mailto", "aim"], a[1])) {
    return j
  }
  var c = a[3];
  if(!c || b && -1 == c.indexOf(".")) {
    return o
  }
  b = a[5];
  return!b || 0 == b.indexOf("/")
}
var Hp = /^[\w-]+(\.[\w-]+)*\@([\w-]+\.)+(\d+|\w\w+)$/i;
function vp(a) {
  this.p = a;
  this.ti = C || E && !G("531") && "TEXTAREA" == a.tagName;
  this.K = new ee;
  this.K.m(this.p, this.ti ? ["keydown", "paste", "cut", "drop"] : "input", this)
}
A(vp, ie);
vp.prototype.qa = l;
vp.prototype.handleEvent = function(a) {
  if(this.ti) {
    var b;
    if(!(b = "keydown" != a.type)) {
      a: {
        if(a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          b = o
        }else {
          switch(a.keyCode) {
            case 18:
            ;
            case 20:
            ;
            case 93:
            ;
            case 17:
            ;
            case 40:
            ;
            case 35:
            ;
            case 27:
            ;
            case 36:
            ;
            case 45:
            ;
            case 37:
            ;
            case 224:
            ;
            case 91:
            ;
            case 144:
            ;
            case 12:
            ;
            case 34:
            ;
            case 33:
            ;
            case 19:
            ;
            case 255:
            ;
            case 44:
            ;
            case 39:
            ;
            case 16:
            ;
            case 38:
            ;
            case 224:
              b = o;
              break a;
            default:
              b = j
          }
        }
      }
    }
    if(b) {
      var c = "keydown" == a.type ? this.p.value : l;
      C && 229 == a.keyCode && (c = l);
      var d = Sp(a);
      Tp(this);
      this.qa = gg(function() {
        this.qa = l;
        this.p.value != c && Up(this, d)
      }, 0, this)
    }
  }else {
    (!B || this.p == I(this.p).activeElement) && Up(this, Sp(a))
  }
};
function Tp(a) {
  if(a.qa != l) {
    eg.clearTimeout(a.qa), a.qa = l
  }
}
function Sp(a) {
  a = new yd(a.Aa);
  a.type = "input";
  return a
}
function Up(a, b) {
  try {
    a.dispatchEvent(b)
  }finally {
    b.C()
  }
}
vp.prototype.l = function() {
  vp.c.l.call(this);
  this.K.C();
  Tp(this);
  delete this.p
};
function Vp() {
}
A(Vp, tf);
ia(Vp);
Vp.prototype.e = function(a) {
  var b = {"class":"goog-inline-block " + this.bc(a).join(" "), title:a.Bc() || ""};
  return a.R().e("div", b, a.ta)
};
Vp.prototype.nb = s("button");
Vp.prototype.Ca = s(l);
Vp.prototype.s = s("goog-flat-button");
Le("goog-flat-button", function() {
  return new vf(l, Vp.ca())
});
function wp() {
}
A(wp, Vp);
ia(wp);
wp.prototype.s = s("goog-link-button");
Le("goog-link-button", function() {
  return new vf(l, wp.ca())
});
function Wp() {
}
A(Wp, Ie);
ia(Wp);
t = Wp.prototype;
t.s = s("goog-tab");
t.nb = s("tab");
t.e = function(a) {
  var b = Wp.c.e.call(this, a);
  (a = a.Bc()) && this.Xb(b, a);
  return b
};
t.Bc = function(a) {
  return a.title || ""
};
t.Xb = function(a, b) {
  if(a) {
    a.title = b || ""
  }
};
function Xp(a, b, c) {
  Ne.call(this, a, b || Wp.ca(), c);
  Se(this, 8, j);
  this.md |= 9
}
A(Xp, Ne);
Xp.prototype.Bc = q("Oe");
Xp.prototype.Xb = function(a) {
  this.w.Xb(this.b(), a);
  this.Ti(a)
};
Xp.prototype.Ti = ca("Oe");
Le("goog-tab", function() {
  return new Xp(l)
});
function Yp() {
}
A(Yp, Xe);
ia(Yp);
Yp.prototype.s = s("goog-tab-bar");
Yp.prototype.nb = s("tablist");
Yp.prototype.bc = function(a) {
  var b = Yp.c.bc.call(this, a);
  if(!this.Ih) {
    var c = this.s();
    this.Ih = ic(Zp, c + "-top", $p, c + "-bottom", aq, c + "-start", bq, c + "-end")
  }
  b.push(this.Ih[a.Kk]);
  return b
};
function cq(a, b, c) {
  a = a || Zp;
  this.b() && e(Error("Component already rendered"));
  this.Nc = a == aq || a == bq ? $e : Ze;
  this.Kk = a;
  af.call(this, this.Nc, b || Yp.ca(), c);
  dq(this)
}
A(cq, af);
var Zp = "top", $p = "bottom", aq = "start", bq = "end";
t = cq.prototype;
t.mj = j;
t.Ta = l;
t.ea = function() {
  cq.c.ea.call(this);
  dq(this)
};
t.l = function() {
  cq.c.l.call(this);
  this.Ta = l
};
t.removeChild = function(a, b) {
  eq(this, a);
  return cq.c.removeChild.call(this, a, b)
};
t.jh = function(a) {
  cq.c.jh.call(this, a);
  this.mj && this.Yd(ue(this, a))
};
t.Yd = function(a) {
  a ? a.Xd(j) : this.Ta && this.Ta.Xd(o)
};
function eq(a, b) {
  if(b && b == a.Ta) {
    for(var c = we(a, b), d = c - 1;b = ue(a, d);d--) {
      if(b.W() && b.isEnabled()) {
        a.Yd(b);
        return
      }
    }
    for(c += 1;b = ue(a, c);c++) {
      if(b.W() && b.isEnabled()) {
        a.Yd(b);
        return
      }
    }
    a.Yd(l)
  }
}
t.wk = function(a) {
  this.Ta && this.Ta != a.target && this.Ta.Xd(o);
  this.Ta = a.target
};
t.yk = function(a) {
  if(a.target == this.Ta) {
    this.Ta = l
  }
};
t.uk = function(a) {
  eq(this, a.target)
};
t.vk = function(a) {
  eq(this, a.target)
};
t.pe = function() {
  df(this) || this.Vb(this.Ta || ue(this, 0))
};
function dq(a) {
  a.Ba().m(a, "select", a.wk).m(a, "unselect", a.yk).m(a, "disable", a.uk).m(a, "hide", a.vk)
}
Le("goog-tab-bar", function() {
  return new cq
});
function rp(a, b) {
  ke.call(this, a);
  this.K = new ee(this);
  this.ib = new cq(aq, g, this.z);
  this.ib.Gb(o);
  this.Zi = this.z.e("DIV", {className:"goog-tab-content"});
  this.Xf = this.Of = l;
  if(b) {
    var c = new Ne(b, g, this.z);
    c.rd("tr-tabpane-caption");
    c.fc(o);
    this.ib.gc(c, j)
  }
}
A(rp, ke);
function fq(a, b) {
  a.ib.Yd(qe(a.ib, b))
}
function yp(a, b, c, d, f) {
  var h = a.z.e("INPUT", {type:"radio"}), c = new Xp([h, a.z.createTextNode(c)], g, a.z);
  oe(c, b);
  c.Xb(d);
  a.ib.gc(c, j);
  a.K.m(h, "select", ua(a.ib.Yd, a.ib, c));
  f.id = b + "-tab";
  a.Zi.appendChild(f);
  ld(f, o)
}
rp.prototype.ea = function() {
  rp.c.ea.call(this);
  var a = this.b();
  Rb(a, "tr-tabpane");
  this.gc(this.ib, j);
  this.K.m(this.ib, "select", this.xk);
  a.appendChild(this.Zi);
  a.appendChild(this.z.e("DIV", {className:"goog-tab-bar-clear"}))
};
rp.prototype.xk = function(a) {
  a = a.target;
  this.Xf && ld(this.Xf, o);
  this.Xf = this.z.b(ne(a) + "-tab");
  ld(this.Xf, j);
  if(this.Of) {
    this.Of.checked = o
  }
  this.Of = a.b().getElementsByTagName("INPUT")[0];
  this.Of.checked = j
};
function gq(a, b, c) {
  b || (b = {});
  var d = c || window, c = "undefined" != typeof a.href ? a.href : "" + a, a = b.target || a.target, f = [], h;
  for(h in b) {
    switch(h) {
      case "width":
      ;
      case "height":
      ;
      case "top":
      ;
      case "left":
        f.push(h + "=" + b[h]);
        break;
      case "target":
      ;
      case "noreferrer":
        break;
      default:
        f.push(h + "=" + (b[h] ? 1 : 0))
    }
  }
  h = f.join(",");
  if(b.noreferrer) {
    if(b = d.open("", a, h)) {
      C && -1 != c.indexOf(";") && (c = "'" + c.replace(/'/g, "%27") + "'"), c = Ea(c), b.document.write('<META HTTP-EQUIV="refresh" content="0; url=' + c + '">'), b.document.close()
    }
  }else {
    d.open(c, a, h)
  }
}
;function Lp(a, b) {
  this.P = a;
  this.Le = b;
  this.K = new ee(this)
}
A(Lp, np);
function hq(a, b) {
  ud.call(this, "ok");
  this.Ae = a;
  this.Hk = b
}
A(hq, ud);
function iq(a) {
  ud.call(this, "beforetestlink");
  this.url = a
}
A(iq, ud);
t = Lp.prototype;
t.Ri = ca("me");
t.show = function() {
  Lp.c.show.call(this);
  var a = this.Le.hc.getAttribute("href") || "";
  if(this.Le.xf) {
    if(a = this.od.value, Hp.test(a)) {
      fq(this.jb, zp), this.P.b(Ap).value = a, this.ic = j, this.ic = o, this.wg = j
    }else {
      if(Rp(a)) {
        fq(this.jb, sp), this.P.b(tp).value = a, this.ic = j, this.ic = o, this.wg = j
      }else {
        if(!pp(this.Le)) {
          this.ic = j
        }
        fq(this.jb, sp)
      }
    }
  }else {
    a && 0 == a.lastIndexOf("mailto:", 0) ? (fq(this.jb, zp), this.P.b(Ap).value = a.substring(a.indexOf(":") + 1)) : (fq(this.jb, sp), this.P.b(tp).value = this.Le.xf ? "http://" : a), jq(this)
  }
  kq(this)
};
t.Pg = function() {
  this.ic = j;
  this.wg = o;
  Lp.c.Pg.call(this)
};
t.l = function() {
  this.K.C();
  this.K = l;
  this.rh.C();
  this.rh = l;
  this.yg.C();
  this.yg = l;
  Lp.c.l.call(this)
};
t.nj = j;
t.$d = o;
function kq(a) {
  var b;
  if(ne(a.jb.ib.Ta) == zp) {
    b = a.P.b(Ap).value;
    var c = "" != b && !Hp.test(b);
    a.P.b(Bp).style.visibility = c ? "visible" : "hidden"
  }else {
    if(ne(a.jb.ib.Ta) == sp) {
      b = a.P.b(tp).value
    }else {
      return
    }
  }
  a.gi("ok").disabled = /^[\s\xa0]*$/.test(b)
}
t.Wk = function() {
  "" == this.od.value ? this.ic = j : jq(this)
};
function Gp(a, b) {
  var c = a.P.b(b || Ap).value;
  return Ip(a, "mailto:" + c)
}
t.Zk = function() {
  var a = this.P.b(tp).value;
  0 > a.search(/:/) && (a = "http://" + Da(a));
  if(this.dispatchEvent(new iq(a))) {
    var b = this.P.Da(), c = qc(b), c = {target:"_blank", width:Math.max(c.width - 50, 50), height:Math.max(c.height - 50, 50), toolbar:j, scrollbars:j, location:j, statusbar:o, menubar:j, resizable:j, noreferrer:this.$d};
    gq(a, c, b)
  }
};
t.Ii = function() {
  this.ic ? lq(this) : "" == this.od.value && jq(this);
  kq(this)
};
t.Sk = function(a) {
  a = this.P.b(ne(a.target) + mq);
  a.focus();
  var b = a.value.length, c;
  try {
    c = "number" == typeof a.selectionStart
  }catch(d) {
    c = o
  }
  if(c) {
    a.selectionStart = b, a.selectionEnd = b
  }else {
    if(C) {
      if("textarea" == a.type) {
        b = a.value.substring(0, b).replace(/(\r\n|\r|\n)/g, "\n").length
      }
      c = a.createTextRange();
      c.collapse(j);
      c.move("character", b);
      c.select()
    }
  }
  a.style.width = "";
  a.style.width = a.offsetWidth + "px";
  kq(this);
  lq(this)
};
function lq(a) {
  if(a.nj && a.ic) {
    a.od.value = a.P.b(ne(a.jb.ib.Ta) + mq).value
  }
}
function Ip(a, b) {
  lq(a);
  return new hq(a.od.value, b)
}
function jq(a) {
  var b = o;
  a.wg || (b = a.P.b(ne(a.jb.ib.Ta) + mq).value == a.od.value);
  a.ic = b
}
var op = "linkdialog-text", sp = "linkdialog-onweb", tp = "linkdialog-onweb-tab-input", zp = "linkdialog-email", Ap = "linkdialog-email-tab-input", Bp = "linkdialog-email-warning", mq = "-tab-input", up = "tr-link-dialog-target-input", Cp = "tr-link-dialog-email-warning", xp = "tr-link-dialog-explanation-text";
function nq() {
  Jp.call(this, "link");
  this.K = new ee(this)
}
A(nq, Jp);
t = nq.prototype;
t.$d = o;
t.cc = sn("LinkDialogPlugin");
t.Ri = ca("me");
t.Gd = function(a, b) {
  this.le = b;
  return nq.c.Gd.call(this, a, b)
};
t.Hg = function(a) {
  nq.c.Hg.call(this, a);
  this.le = l
};
t.l = function() {
  nq.c.l.call(this);
  this.K.C()
};
t.pk = function(a) {
  if(this.Vd) {
    this.Vd.C(), this.Vd = l
  }
  Op(this.le, a.Ae, a.Hk);
  Pp(this.le);
  An(this.d);
  this.d.xc();
  he(this.K)
};
t.Yj = function() {
  this.le.xf && (zc(this.le.hc), this.d.xc());
  he(this.K)
};
function oq(a) {
  this.qd = a || window;
  this.Bf = Wd(this.qd, "resize", this.sk, o, this);
  this.ya = qc(this.qd);
  if(E && wb || B && this.qd.self != this.qd.top) {
    this.Yf = window.setInterval(ua(this.Hh, this), pq)
  }
}
A(oq, ie);
var pq = 500;
t = oq.prototype;
t.Bf = l;
t.qd = l;
t.ya = l;
t.Yf = l;
t.Fg = function() {
  return this.ya ? this.ya.Ra() : l
};
t.l = function() {
  oq.c.l.call(this);
  if(this.Bf) {
    $d(this.Bf), this.Bf = l
  }
  if(this.Yf) {
    window.clearInterval(this.Yf), this.Yf = l
  }
  this.ya = this.qd = l
};
t.sk = function() {
  this.Hh()
};
t.Hh = function() {
  var a = qc(this.qd);
  if(!Xb(a, this.ya)) {
    this.ya = a, this.dispatchEvent("resize")
  }
};
function qq(a, b) {
  this.na = new ee(this);
  this.Pd && e(Error("Can not change this state of the popup while showing."));
  this.p = a || l;
  if(b) {
    this.ae = b
  }
}
A(qq, ie);
t = qq.prototype;
t.p = l;
t.lj = j;
t.Ch = l;
t.Pd = o;
t.kl = o;
t.Wg = -1;
t.xi = -1;
t.Ak = o;
t.Mj = j;
t.ae = "toggle_display";
t.rf = q("ae");
t.b = q("p");
t.W = q("Pd");
t.Z = function(a) {
  if(a) {
    if(!this.Pd && this.dispatchEvent("beforeshow")) {
      this.p || e(Error("Caller must call setElement before trying to show the popup"));
      this.Ja();
      a = I(this.p);
      this.Ak && this.na.m(a, "keydown", this.Tk, j);
      if(this.lj) {
        if(this.na.m(a, "mousedown", this.Fi, j), C) {
          for(var b = a.activeElement;b && "IFRAME" == b.nodeName;) {
            try {
              var c = Gc(b)
            }catch(d) {
              break
            }
            a = c;
            b = a.activeElement
          }
          this.na.m(a, "mousedown", this.Fi, j);
          this.na.m(a, "deactivate", this.Ei)
        }else {
          this.na.m(a, "blur", this.Ei)
        }
      }
      "toggle_display" == this.ae ? (this.p.style.visibility = "visible", ld(this.p, j)) : "move_offscreen" == this.ae && this.Ja();
      this.Pd = j;
      this.Wg = wa();
      this.xi = -1;
      this.dispatchEvent("show")
    }
  }else {
    rq(this)
  }
};
t.Ja = ha;
function rq(a, b) {
  if(!a.Pd || !a.dispatchEvent({type:"beforehide", target:b})) {
    return o
  }
  a.na && he(a.na);
  if("toggle_display" == a.ae) {
    a.kl ? gg(a.qi, 0, a) : a.qi()
  }else {
    if("move_offscreen" == a.ae) {
      a.p.style.left = "-200px", a.p.style.top = "-200px"
    }
  }
  a.Pd = o;
  a.xi = wa();
  a.dispatchEvent({type:"hide", target:b});
  return j
}
t.qi = function() {
  this.p.style.visibility = "hidden";
  ld(this.p, o)
};
t.Fi = function(a) {
  a = a.target;
  !Bc(this.p, a) && (!this.Ch || Bc(this.Ch, a)) && !(150 > wa() - this.Wg) && rq(this, a)
};
t.Tk = function(a) {
  27 == a.keyCode && rq(this, a.target) && (a.preventDefault(), a.stopPropagation())
};
t.Ei = function(a) {
  if(this.Mj) {
    var b = I(this.p);
    if(C || B) {
      if((a = b.activeElement) && Bc(this.p, a)) {
        return
      }
    }else {
      if(a.target != b) {
        return
      }
    }
    150 > wa() - this.Wg || rq(this)
  }
};
t.l = function() {
  qq.c.l.call(this);
  this.na.C();
  delete this.p;
  delete this.na
};
function sq(a, b) {
  this.z = new H(a);
  this.K = new ee(this);
  this.uh = new oq(this.z.Da());
  this.Za = {};
  this.eb = this.z.e("DIV", {className:tq});
  ld(this.eb, o);
  a.appendChild(this.eb);
  Xc(this.eb, "zIndex", b);
  this.de = this.eb;
  this.Nh = this.z.e("DIV", {className:"tr_bubble_closebox", innerHTML:"&nbsp;"});
  this.de.appendChild(this.Nh);
  Rn(this.eb, this.K);
  this.Kf = new qq(this.eb)
}
A(sq, ie);
var tq = "tr_bubble";
t = sq.prototype;
t.Rb = Dl("goog.ui.editor.Bubble");
t.l = function() {
  sq.c.l.call(this);
  J(this.eb);
  this.eb = l;
  this.K.C();
  this.K = l;
  this.uh.C();
  this.uh = l
};
t.T = q("de");
t.Ia = q("eb");
t.zk = function() {
  this.W() && this.Ja()
};
function uq(a, b) {
  return Zb(a.Za, function(a) {
    return a.type == b
  })
}
t.Oh = function() {
  this.Kf.Z(o)
};
t.rk = function() {
  for(var a in this.Za) {
    J(this.Za[a].element)
  }
  this.Za = {};
  Sb(this.eb, "tr_multi_bubble");
  he(this.K);
  this.dispatchEvent("hide")
};
t.W = function() {
  return this.Kf.W()
};
var vq = C ? 4 : 2, wq = new Vc(vq, 0, vq, 0);
sq.prototype.Ja = function() {
  var a = l, b = j, c;
  for(c in this.Za) {
    var d = this.Za[c], a = d.qh, b = b && d.el
  }
  c = 496;
  a = gd(this.eb) != gd(a);
  b && (c = xq(this, a ? 7 : 5, 4, 9));
  c & 496 && (c = xq(this, a ? 6 : 4, 5, 9));
  c & 496 && (c = xq(this, a ? 7 : 5, 4, 5), c & 496 && this.Rb.log(wl, "reposition(): positionAtAnchor() failed with " + c, g))
};
function xq(a, b, c, d) {
  var f = l, h;
  for(h in a.Za) {
    var i = a.Za[h].qh;
    if(!f || Bc(i, f)) {
      f = a.Za[h].qh
    }
  }
  return hg(f, b, a.eb, c, l, wq, d)
}
function yq(a, b, c, d, f, h) {
  this.type = c;
  this.qh = f;
  this.el = h;
  this.element = a.e("DIV", {className:"tr_bubble_panel", id:b}, a.e("DIV", {className:"tr_bubble_panel_title"}, d + ":"), a.e("DIV", {className:"tr_bubble_panel_content"}))
}
yq.prototype.T = function() {
  return this.element.lastChild
};
function zq() {
  vn.call(this);
  this.fb = new ee(this)
}
A(zq, vn);
function Aq(a, b) {
  return new sq(a, b)
}
var Bq = {};
t = zq.prototype;
t.Oc = l;
t.cc = sn("AbstractBubblePlugin");
t.li = function() {
  this.W() && this.Md();
  return o
};
t.Md = function(a, b) {
  var c;
  if(a) {
    c = a.target
  }else {
    if(b) {
      c = b
    }else {
      var d = $(this.d);
      if(d) {
        var f = d.q(), h = d.D(), i = d.L(), k = d.X();
        C && d.isCollapsed() && f != h && (d = Bm(f, i));
        1 == f.nodeType && f == h && i == k - 1 && (f = f.childNodes[i], 1 == f.nodeType && (c = f))
      }
      c = c || d && d.Ia()
    }
  }
  var m;
  a: {
    if(c) {
      c = Oc(c, "A");
      if(!c && (d = $(this.d)) && d.isCollapsed() && 0 == d.L()) {
        (d = d.q().previousSibling) && "A" == d.tagName && (c = d)
      }
      if(i = c) {
        if(i != this.Ke || !this.Oc) {
          if(this.Oc && Cq(this), c = Dq(this), !uq(c, this.Cg())) {
            this.Ke = i;
            var f = this.Cg(), k = this.fi(), h = ua(this.Ij, this), n = this.ll(), d = Sa(), i = new yq(c.z, d, f, k, i, !n);
            c.Za[d] = i;
            k = 0;
            for(n = c.de.childNodes.length - 1;k < n;k++) {
              var p = c.de.childNodes[k];
              if(c.Za[p.id].type > f) {
                m = p;
                break
              }
            }
            wc(i.element, m || c.de.lastChild);
            h(i.T());
            Rn(i.element, c.K);
            m = $b(c.Za);
            1 == m ? (c.K.m(c.Nh, "click", c.Oh).m(c.uh, "resize", c.zk).m(c.Kf, "hide", c.rk), c.Kf.Z(j), c.Ja()) : 2 == m && Rb(c.eb, "tr_multi_bubble");
            c.Ja();
            this.Oc = d;
            this.fb.m(c, "hide", this.mi);
            this.ah()
          }
        }
        m = o;
        break a
      }
    }
    this.Oc && Cq(this);
    m = o
  }
  return m
};
t.disable = function(a) {
  if(a.Eb == mo) {
    var b = Bq[a.id];
    b && (b.C(), delete Bq[a.id])
  }
};
function Dq(a) {
  var b = a.jm || a.d.Wc.document.body;
  a.z = new H(b);
  var c = Bq[a.d.id];
  c || (c = Aq.call(l, b, a.d.hm || 0), Bq[a.d.id] = c);
  return c
}
t.Cg = s("");
t.fi = s("");
t.ll = tn;
function Cq(a) {
  if(a.Oc) {
    var b = Dq(a), c = a.Oc;
    J(b.Za[c].element);
    delete b.Za[c];
    c = $b(b.Za);
    1 >= c && Sb(b.eb, "tr_multi_bubble");
    0 == c ? b.Oh() : b.Ja();
    a.mi()
  }
}
t.ah = ha;
t.mi = function() {
  this.Oc = this.Ke = l;
  he(this.fb)
};
t.W = function() {
  return!!this.Oc
};
t.Ja = function() {
  var a = Dq(this);
  a && a.Ja()
};
function Eq(a, b) {
  return a.z.e("SPAN", {id:b, className:"tr_option-link"}, a.z.createTextNode("\u00a0-\u00a0"))
}
function Fq(a, b, c, d, f) {
  c = a.z.e("SPAN", {className:"tr_bubble_link"}, c);
  f ? f.appendChild(c) : (f = a.z.b(b)) && yc(c, f);
  c.id = b;
  Rn(c, a.fb);
  d && a.fb.m(c, "click", d)
}
;function Gq(a) {
  zq.call(this);
  this.lf = lb(arguments);
  this.Se = []
}
A(Gq, zq);
var Hq = z("Go to link: "), Iq = z("Change"), Jq = z("Remove");
t = Gq.prototype;
t.$d = o;
t.cc = s("LinkBubble");
function Kq(a) {
  return a.Ke.getAttribute("href") || ""
}
t.Cg = s("A");
t.fi = function() {
  return Pg
};
t.Ij = function(a) {
  var b = Lq(this), c = b.bj ? "black" : "red";
  if(Hp.test(b.Ae) || !b.bj) {
    c = this.z.e("SPAN", {id:"tr_link-text", style:"color:" + c}, this.z.createTextNode(b.Ae))
  }else {
    var d = this.z.e("SPAN", {id:"tr_test-link-span"}, Hq), c = this.z.e("SPAN", {id:"tr_link-text", style:"color:" + c}, "");
    Fq(this, "tr_test-link", this.z.createTextNode(Ka(b.Ae)).data, this.ol, c)
  }
  var f = Eq(this, "tr_change-link-span");
  Fq(this, "tr_change-link", Iq, this.ml, f);
  this.Se = [];
  for(b = 0;b < this.lf.length;b++) {
    var h = this.lf[b], i = Eq(this, h.nl);
    this.Se.push(i);
    Fq(this, h.rm, h.Ai, function() {
      h.fm(Kq(this))
    }, i)
  }
  i = Eq(this, "tr_delete-link-span");
  Fq(this, "tr_delete-link", Jq, this.Jj, i);
  this.ah();
  d = this.z.e("DIV", {id:"tr_link-div"}, d || "", c, f);
  for(b = 0;b < this.Se.length;b++) {
    d.appendChild(this.Se[b])
  }
  d.appendChild(i);
  a.appendChild(d)
};
t.ol = function() {
  var a;
  a = Kq(this);
  a = this.pl ? this.pl(a) : a;
  gq(a, {target:"_blank", noreferrer:this.$d}, this.d.Wc)
};
t.Fk = tn;
function Lq(a) {
  var b, c = Kq(a);
  a.Fk(c) ? (c = z("invalid url"), b = j) : c && 0 == c.lastIndexOf("mailto:", 0) && (c = c.substring(7));
  return{Ae:c, bj:!b}
}
t.ml = function() {
  this.d.execCommand("link", new Np(this.Ke, o));
  Cq(this)
};
t.Jj = function() {
  this.d.Dd();
  var a = this.Ke, b = a.lastChild;
  zc(a);
  Vn(b, o);
  Cq(this);
  this.d.xc()
};
t.ah = function() {
  if(this.z.b("tr_link-div")) {
    var a = this.z.b("tr_test-link-span");
    if(a) {
      var b = Kq(this);
      ld(a, !(b && 0 == b.lastIndexOf("mailto:", 0)))
    }
    for(a = 0;a < this.lf.length;a++) {
      var b = this.lf[a], c = this.z.b(b.nl);
      c && ld(c, b.ym(Kq(this)))
    }
  }
};
function Mq() {
  vn.call(this)
}
A(Mq, vn);
Mq.prototype.tf = function(a) {
  return D && this.d.Dc ? o : 9 == a.keyCode && !a.metaKey && !a.ctrlKey ? this.ni(a) : o
};
function Nq() {
  vn.call(this)
}
A(Nq, Mq);
Nq.prototype.cc = s("SpacesTabHandler");
Nq.prototype.ni = function(a) {
  var b = wn(this), c = $(this.d);
  return!eo(c) ? (a.shiftKey || (zn(this.d, j), c.isCollapsed() || (b.ba().execCommand("delete", o, l), c = $(this.d)), b = b.e("span", l, "\u00a0\u00a0 \u00a0"), b = c.insertNode(b, o), this.d.xc(), Vn(b, o), An(this.d)), a.preventDefault(), j) : o
};
function Oq(a, b) {
  this.Gf = [];
  for(this.Df = [];a && "BODY" != a.nodeName && a != b;) {
    for(var c = 0, d = a.previousSibling;d;) {
      d = d.previousSibling, ++c
    }
    this.Gf.unshift(c);
    this.Df.unshift(a.nodeName);
    a = a.parentNode
  }
}
A(Oq, td);
Oq.prototype.toString = function() {
  for(var a = [], b, c = 0;b = this.Df[c];c++) {
    a.push(this.Gf[c] + "," + b)
  }
  return a.join("\n")
};
function Pq(a, b) {
  for(var c, d = b, f = 0;c = a.Df[f];++f) {
    if(d = d.childNodes[a.Gf[f]], !d || d.nodeName != c) {
      return l
    }
  }
  return d
}
Oq.prototype.l = function() {
  delete this.Gf;
  delete this.Df
};
function Qq() {
  vn.call(this)
}
A(Qq, vn);
Qq.prototype.cc = s("HeaderFormatter");
Qq.prototype.tf = function(a, b, c) {
  if(!c) {
    return o
  }
  c = l;
  switch(b) {
    case "1":
      c = "H1";
      break;
    case "2":
      c = "H2";
      break;
    case "3":
      c = "H3";
      break;
    case "4":
      c = "H4"
  }
  return c ? (this.d.execCommand("+formatBlock", c), D && a.stopPropagation(), j) : o
};
function Rq() {
  vn.call(this)
}
A(Rq, vn);
Rq.prototype.cc = s("BTF");
Rq.prototype.Rb = Dl("goog.editor.plugins.BasicTextFormatter");
var Sq = fc({Tl:"+link", Kl:"+formatBlock", Nl:"+indent", Wl:"+outdent", $l:"+strikeThrough", Ml:"+insertHorizontalRule", am:"+subscript", bm:"+superscript", cm:"+underline", Cl:"+bold", Ol:"+italic", Jl:"+fontSize", Il:"+fontName", Hl:"+foreColor", xl:"+backColor", Vl:"+insertOrderedList", em:"+insertUnorderedList", Pl:"+justifyCenter", Ql:"+justifyFull", Sl:"+justifyRight", Rl:"+justifyLeft"});
t = Rq.prototype;
t.Od = function(a) {
  return a in Sq
};
function Tq(a) {
  return wn(a).ba()
}
t.Gd = function(a, b) {
  var c, d, f, h, i, k = b;
  switch(a) {
    case "+backColor":
      if(k !== l) {
        if(hn) {
          d = k;
          f = $(this.d);
          var m, n;
          if(f && f.isCollapsed()) {
            m = wn(this).createTextNode(D ? " " : ""), k = f.q(), n = 1 == k.nodeType ? k : k.parentNode, "" == n.innerHTML ? (n.style.textIndent = "-10000px", n.appendChild(m)) : (n = wn(this).e("span", {style:"text-indent:-10000px"}, m), f.Ni(n)), Ol(Pl(m), g).select()
          }
          Uq(this, "hiliteColor", d, o, j);
          if(m) {
            if(D) {
              m.data = ""
            }
            n.style.textIndent = ""
          }
        }else {
          B ? Uq(this, "hiliteColor", k) : Uq(this, a, k)
        }
      }
      break;
    case "+link":
      a: {
        i = k;
        this.d.yf || wn(this).Da().focus();
        f = (d = $(this.d)) && d.Ia();
        if((f = Oc(f, "A")) && Pc(f, Mn)) {
          zc(f)
        }else {
          if(i = Vq(this, d, i)) {
            if(!this.d.execCommand("link", i)) {
              if(d = this.d.Wc.prompt(Sg, "http://")) {
                Op(i, pp(i) || d, d), Pp(i)
              }else {
                d = Ol(Pl(i.hc), g);
                d = new fo(d);
                zc(i.hc);
                i.hc = l;
                d.restore().select();
                i = l;
                break a
              }
            }
            break a
          }
        }
        i = l
      }
      break;
    case "+justifyCenter":
    ;
    case "+justifyFull":
    ;
    case "+justifyRight":
    ;
    case "+justifyLeft":
      Uq(this, a, l, o, j);
      D && Uq(this, a, l, o, j);
      (!gn || !D) && gl($(this.d), Wq);
      break;
    default:
      C && "+formatBlock" == a && k && (k = "<" + k + ">");
      if("+foreColor" == a && k === l) {
        break
      }
      switch(a) {
        case "+indent":
        ;
        case "+outdent":
          gn && (D && (d = j), B && (d = "+outdent" == a ? !Tq(this).queryCommandEnabled("outdent") : j));
        case "+insertOrderedList":
        ;
        case "+insertUnorderedList":
          if(m = pn) {
            m = Tq(this), m = Xq(this, j, m, a, g)
          }
          m ? f = "P" != this.d.queryCommandValue("+defaultTag") : qn || Yq(this);
          D && on && !this.queryCommandValue(a) && (m = this.d.queryCommandValue("+defaultTag"), "P" == m || "DIV" == m ? m = o : (m = $(this.d), m.isCollapsed() && 3 != m.Ab().nodeType ? (c = wn(this).createTextNode("\u00a0"), m.insertNode(c, o), Ol(Pl(c), g).select(), m = j) : m = o), h |= m);
        case "+formatBlock":
          c = !!this.d.Tb.Bidi;
          break;
        case "+subscript":
        ;
        case "+superscript":
          nn && !this.queryCommandValue(a) && (m = "+subscript" == a ? "+superscript" : "+subscript", n = Zq(m), this.queryCommandValue(m) || Tq(this).execCommand(n, o, l), Tq(this).execCommand(n, o, l));
          break;
        case "+underline":
        ;
        case "+bold":
        ;
        case "+italic":
          d = D && gn && this.queryCommandValue(a);
          break;
        case "+foreColor":
        ;
        case "+fontName":
          d = gn && D
      }
      Uq(this, a, k, c, d);
      h && Tq(this).execCommand("Delete", o, j);
      f && Tq(this).execCommand("FormatBlock", o, "<div>")
  }
  D && !this.d.Dc && wn(this).Da().focus();
  return i
};
t.queryCommandValue = function(a) {
  var b;
  switch(a) {
    case "+link":
      return a = (a = $(this.d)) && a.Ia(), a = Oc(a, "A"), !!a && !!Pc(a, Mn);
    case "+justifyCenter":
    ;
    case "+justifyFull":
    ;
    case "+justifyRight":
    ;
    case "+justifyLeft":
      return $q(this, a);
    case "+formatBlock":
      return ar($(this.d));
    case "+indent":
    ;
    case "+outdent":
    ;
    case "+insertHorizontalRule":
      return o;
    case "+fontSize":
    ;
    case "+fontName":
    ;
    case "+foreColor":
    ;
    case "+backColor":
      return this.Lf(Tq(this), a, gn && D);
    case "+underline":
    ;
    case "+bold":
    ;
    case "+italic":
      b = gn && D;
    default:
      var c = Tq(this);
      return Xq(this, j, c, a, b)
  }
};
t.Ki = function(a) {
  en && a.match(/^\s*<script/i) && (a = "&nbsp;" + a);
  fn && (a = a.replace(/<(\/?)strong([^\w])/gi, "<$1b$2"), a = a.replace(/<(\/?)em([^\w])/gi, "<$1i$2"));
  return a
};
t.qj = function(a) {
  for(var a = a.getElementsByTagName("IMG"), b = 0, c;c = a[b];b++) {
    if(C) {
      c.removeAttribute("tabIndex");
      c.removeAttribute("tabIndexSet");
      var d = c;
      "removeAttribute" in d && d.removeAttribute(qa);
      try {
        delete d[qa]
      }catch(f) {
      }
      if(c.Rk) {
        c.tabIndex = c.Rk
      }
    }
  }
};
t.rj = function(a) {
  if(E) {
    for(var b = mc(this.d.Xa.la, "HEAD", g, g), c = [], d = b.length, f = 1;f < d;++f) {
      for(var h = b[f].getElementsByTagName("STYLE"), i = h.length, k = 0;k < i;++k) {
        c.push(h[k].outerHTML)
      }
    }
    return c.join("") + a
  }
  return a
};
t.tf = function(a, b, c) {
  if(!c) {
    return o
  }
  var d;
  switch(b) {
    case "b":
      d = "+bold";
      break;
    case "i":
      d = "+italic";
      break;
    case "u":
      d = "+underline";
      break;
    case "s":
      return j
  }
  return d ? (this.d.execCommand(d), j) : o
};
var br = C ? /<br([^\/>]*)\/?>/gi : /<br([^\/>]*)\/?>(?!<\/(div|p)>)/gi;
function Yq(a) {
  if(C || B) {
    var b = $(a.d), c = b.Ia(), d = Tq(a);
    br.lastIndex = 0;
    if(br.test(c.innerHTML)) {
      a = b.q() && b.D() ? new Gl(b) : l, "P" == c.tagName ? cr(c, j) : (c.innerHTML = c.innerHTML.replace(br, '<p$1 trtempbr="temp_br">'), c = lb(c.getElementsByTagName("P")), gl(c, function(a) {
        if("temp_br" == a.getAttribute("trtempbr")) {
          a.removeAttribute("trtempbr");
          if(Aa(Lc(a))) {
            var b = C ? d.createTextNode("\u00a0") : d.createElement("BR");
            a.appendChild(b)
          }
          cr(a)
        }
      })), a.restore()
    }
  }
}
function cr(a, b) {
  if(C || B) {
    var c = a.outerHTML.replace(/<(\/?)p/gi, "<$1div");
    b && (c = c.replace(br, "</div><div$1>"));
    B && !/<\/div>$/i.test(c) && (c += "</div>");
    a.outerHTML = c
  }
}
function Zq(a) {
  return 0 == a.indexOf("+") ? a.substring(1) : a
}
function Wq(a) {
  a = On(a);
  if(a.align) {
    a.style.textAlign = a.align, a.removeAttribute("align")
  }
}
function Uq(a, b, c, d, f) {
  var h = l;
  d && (h = a.d.queryCommandValue("rtl") ? "rtl" : a.d.queryCommandValue("ltr") ? "ltr" : l);
  var b = Zq(b), i, k;
  if(C) {
    var m = b;
    k = [];
    var d = l, n = $(a.d);
    i = wn(a);
    if(m in dr) {
      var p = n && n.Ia();
      if(p) {
        for(var r = mc(document, "BLOCKQUOTE", l, p), x, v = 0;v < r.length;v++) {
          if(n.containsNode(r[v])) {
            x = r[v];
            break
          }
        }
        if(p = x || Oc(p, "BLOCKQUOTE")) {
          d = i.e("div", {style:"height:0"}), p.appendChild(d), k.push(d), x ? n = Jl(x, 0, d, 0) : n.containsNode(d) && (x = n.q(), n = n.L(), n = Jl(x, n, d, 0)), n.select()
        }
      }
    }
    x = a.d;
    if(!x.be() && !d && m in er) {
      m = x.b();
      if(n && n.isCollapsed() && !(m.firstElementChild != g ? m.firstElementChild : Ac(m.firstChild, j))) {
        d = n.Nb(0).Mb(), n = d.duplicate(), n.moveToElementText(m), n.collapse(o), n.isEqual(d) && (n = i.createTextNode("\u00a0"), m.appendChild(n), d.move("character", 1), d.move("character", -1), d.select(), k.push(n))
      }
      d = i.e("div", {style:"height:0"});
      m.appendChild(d);
      k.push(d)
    }
    i = k[0];
    k = k[1]
  }
  if(E) {
    i = b;
    var F;
    fr[i] && (F = wn(a).e("div", {style:"height: 0"}, "x"), a.d.b().appendChild(F));
    gr[i] && (i = a.d.b(), F = wn(a).e("div", {style:"height: 0"}, "x"), i.insertBefore(F, i.firstChild));
    i = F
  }
  if(D && (F = b, G("1.9") && "formatblock" == F.toLowerCase() && (F = $(a.d), d = F.q(), F.isCollapsed() && d && "BODY" == d.tagName && (m = F.L(), (d = d.childNodes[m]) && "BR" == d.tagName)))) {
    F = F.Mb(), F.setStart(d, 0), F.setEnd(d, 0)
  }
  rn && "fontsize" == b.toLowerCase() && hr(a);
  F = Tq(a);
  f && gn && (F.execCommand("styleWithCSS", o, j), B && ir(a));
  F.execCommand(b, o, c);
  f && gn && F.execCommand("styleWithCSS", o, o);
  E && !G("526") && "formatblock" == b.toLowerCase() && c && /^[<]?h\d[>]?$/i.test(c) && jr(a);
  /insert(un)?orderedlist/i.test(b) && (E && kr(a), C && (lr(a), k && J(k)));
  i && J(i);
  h && a.d.execCommand(h)
}
function Vq(a, b, c) {
  var d = l, f = b && b.Ia();
  if(f && "IMG" == f.tagName) {
    return l
  }
  if(b && b.isCollapsed()) {
    b = b.Nb(0).Mb(), Zm ? (d = wn(a).createElement("A"), b.insertNode(d)) : Ym && (b.pasteHTML("<a id='newLink'></a>"), d = wn(a).b("newLink"), d.removeAttribute("id"))
  }else {
    var h = Sa();
    Uq(a, "CreateLink", h);
    ab(a.d.b().getElementsByTagName("A"), function(a) {
      ya(a.href, h) && (d = a)
    })
  }
  return Qp(d, c)
}
var er = {indent:1, outdent:1, insertOrderedList:1, insertUnorderedList:1, justifyCenter:1, justifyFull:1, justifyRight:1, justifyLeft:1, ltr:1, rtl:1}, dr = {insertOrderedList:1, insertUnorderedList:1};
function hr(a) {
  var b = Tn($(a.d), a.d.b());
  gl(hl(b, function(a, d, f) {
    return 1 == f.Ga && b.containsNode(a)
  }), function(a) {
    Xc(a, "font-size", "");
    D && 0 == a.style.length && a.getAttribute("style") != l && a.removeAttribute("style")
  })
}
function jr(a) {
  gl($(a.d), function(a) {
    if("Apple-style-span" == a.className) {
      a.style.fontSize = "", a.style.fontWeight = ""
    }
  })
}
function kr(a) {
  var b = o;
  gl($(a.d), function(a) {
    var d = a.tagName;
    if("UL" == d || "OL" == d) {
      if(b) {
        if(d = a.previousElementSibling != g ? a.previousElementSibling : Ac(a.previousSibling, o)) {
          var f = a.ownerDocument.createRange();
          f.setStartAfter(d);
          f.setEndBefore(a);
          if(/^[\s\xa0]*$/.test(f.toString()) && d.nodeName == a.nodeName) {
            for(;d.lastChild;) {
              a.insertBefore(d.lastChild, a.firstChild)
            }
            d.parentNode.removeChild(d)
          }
        }
      }else {
        b = j
      }
    }
  })
}
var mr = {1:1, a:1, A:1, i:1, I:1}, nr = {disc:1, circle:1, square:1};
function lr(a) {
  var c;
  for(c = (a = $(a.d)) && a.Ab(), a = c;a && "UL" != a.tagName && "OL" != a.tagName;) {
    a = a.parentNode
  }
  if(a) {
    a = a.parentNode
  }
  if(a) {
    var b = lb(a.getElementsByTagName("UL"));
    mb(b, lb(a.getElementsByTagName("OL")));
    ab(b, function(a) {
      var b = a.type;
      if(b && !("UL" == a.tagName ? nr : mr)[b]) {
        a.type = ""
      }
    })
  }
}
var fr = {justifyCenter:1, justifyFull:1, justifyRight:1, justifyLeft:1, formatBlock:1}, gr = {insertOrderedList:1, insertUnorderedList:1};
function ir(a) {
  var b = [], c = $(a.d).Ia();
  do {
    b.push(c)
  }while(c = c.parentNode);
  a = jl(fl($(a.d)), fl(b));
  a = hl(a, Nn);
  gl(a, function(a) {
    var b = a.style.outline;
    a.style.outline = "0px solid red";
    a.style.outline = b
  })
}
function ar(a) {
  var b = l;
  gl(a, function(a, d, f) {
    if(-1 != f.Ga) {
      a = On(a).tagName, b = b || a, b != a && (b = l, e(dl)), f.Sf()
    }
  });
  return b
}
var or = {center:1, justify:1, right:1, left:1};
function $q(a, b) {
  var c = b.replace("+justify", "").toLowerCase();
  "full" == c && (c = "justify");
  var d = a.d.Tb.Bidi;
  if(d) {
    return c == d.nm()
  }
  var f = $(a.d);
  if(!f) {
    return o
  }
  for(var h = f.Ia(), d = bb(h.childNodes, function(a) {
    return Jn(a) && f.containsNode(a, j)
  }), d = d.length ? d : [h], h = 0;h < d.length;h++) {
    var i = On(d[h]);
    if(c != pr(i)) {
      return o
    }
  }
  return j
}
function pr(a) {
  var b = $c(a, "textAlign"), b = b.replace(/^-(moz|webkit)-/, "");
  or[b] || (b = a.align || "left");
  return b
}
Rq.prototype.Lf = function(a, b, c) {
  return Xq(this, o, a, b, c)
};
function Xq(a, b, c, d, f) {
  d = Zq(d);
  if(f) {
    var h = Tq(a);
    h.execCommand("styleWithCSS", o, j)
  }
  a = b ? c.queryCommandState(d) : c.queryCommandValue(d);
  f && h.execCommand("styleWithCSS", o, o);
  return a
}
;Dl("goog.editor.plugins.Blockquote");
function qr() {
  vn.call(this)
}
A(qr, vn);
t = qr.prototype;
t.cc = s("EnterHandler");
t.Ki = function(a) {
  return!a || Aa(a) ? en ? this.Uj() : "" : a
};
t.Uj = sn("<br>");
t.fk = function(a) {
  if(D && this.d.Dc) {
    return o
  }
  if(8 == a.keyCode) {
    var b = $(this.d), c = this.d.b(), b = b && b.q();
    c.firstChild == b && Kn(b) && (a.preventDefault(), a.stopPropagation())
  }else {
    if(13 == a.keyCode) {
      if(D) {
        if(!a.shiftKey) {
          var c = $(this.d), b = !c || c.isCollapsed(), d = Zm ? rr(this) : sr(this), f = this.d.execCommand("+splitBlockquote", d);
          f && (a.preventDefault(), a.stopPropagation());
          Zm || d.removeNode(j);
          f || this.dk(a, b, c)
        }
      }else {
        this.d.Dd();
        c = Zm ? rr(this) : sr(this);
        if(b = !!this.d.execCommand("+splitBlockquote", c)) {
          a.preventDefault(), a.stopPropagation()
        }
        Zm || c.removeNode(j);
        E && this.ek(a);
        if(C || B) {
          tr(this)
        }else {
          if(!b && E) {
            if(b = c = $(this.d)) {
              a: {
                for(b = c.Ia();b;b = b.parentNode) {
                  if(Fn[b.tagName]) {
                    b = "BLOCKQUOTE" == b.tagName;
                    break a
                  }
                }
                b = o
              }
            }
            if(b) {
              b = wn(this);
              d = b.createElement("BR");
              c.insertNode(d, j);
              if(c = !!Fn[d.parentNode.tagName]) {
                for(c = d.nextSibling;c && 3 == c.nodeType && !c.nodeValue;) {
                  c = c.nextSibling
                }
                c = !c
              }
              c && wc(b.createElement("BR"), d);
              Vn(d, o);
              a.preventDefault()
            }
          }
        }
        this.d.xc()
      }
    }else {
      if(D && 46 == a.keyCode && (b = $(this.d), b.isCollapsed() && (c = b.D(), 1 == c.nodeType && (b = c.childNodes[b.X()]) && "BR" == b.tagName))) {
        d = In(hl(new Dn(b, o, j), Jn)), f = b.nextSibling, c.removeChild(b), a.preventDefault(), f && Fn[f.tagName] && (d && !("BR" == d.tagName || Fn[d.tagName]) ? Bm(d, Ln(d)).select() : (a = Hn(f), Bm(a, 0).select()))
      }
    }
  }
  return o
};
t.li = function(a) {
  if(D && this.d.Dc) {
    return o
  }
  (C || B) && 13 == a.keyCode && tr(this, j);
  return o
};
t.ek = ha;
t.dk = ha;
var ur = jc("LI", "DIV", "H1", "H2", "H3", "H4", "H5", "H6");
function tr(a, b) {
  for(var c = $(a.d), d = c.Ab(), f = a.d.b(), h;d && d != f;) {
    var i = d.nodeName;
    if("DIV" == i || ur[i] && (!b || !(Kn(d) && 1 == d.getElementsByTagName("BR").length))) {
      if(B && h) {
        "DIV" == i && h == d.lastChild && Kn(h) && (xc(h, d), Ol(Pl(h), g).select());
        break
      }
      return
    }
    B && b && "P" == i && "DIV" != i && (h = d);
    d = d.parentNode
  }
  if(C && !G(9)) {
    var k = o, c = c.Mb(), d = c.duplicate();
    d.moveEnd("character", 1);
    if(d.text.length && (k = d.parentElement(), d = d.duplicate(), d.collapse(o), d = d.parentElement(), k = k != d && d != c.parentElement())) {
      c.move("character", -1), c.select()
    }
  }
  a.d.Xa.ba().execCommand("FormatBlock", o, "<DIV>");
  k && (c.move("character", 1), c.select())
}
function sr(a) {
  var a = wn(a).ba(), b = a.selection.createRange(), c = Sa();
  b.pasteHTML('<span id="' + c + '"></span>');
  a = a.getElementById(c);
  a.id = "";
  return a
}
function rr(a) {
  a = $(a.d);
  if(!a.isCollapsed()) {
    var b = j;
    if(B) {
      var c = a.q(), d = a.L();
      c == a.D() && c.lastChild && "BR" == c.lastChild.tagName && d == c.childNodes.length - 1 && (b = o)
    }
    if(b) {
      var f = a;
      if(f && !f.isCollapsed()) {
        var h = j, b = f.Ia(), c = new Oq(f.q(), b), d = f.L(), i;
        i = f;
        var k = i.q();
        Nn(k) && (k = k.childNodes[i.L()] || k);
        var k = On(k), m = i.D();
        Nn(m) && (m = m.childNodes[i.X()] || m);
        m = On(m);
        i = k == m;
        if(k = !i) {
          a: {
            var m = f, k = m.D(), m = m.X(), n = k;
            if(Nn(n)) {
              var p = n.childNodes[m];
              if(!p || 1 == p.nodeType && Nn(p)) {
                k = o;
                break a
              }
            }
            for(p = On(n);p != n;) {
              if(In(hl(new Dn(n), Jn))) {
                k = j;
                break a
              }
              n = n.parentNode
            }
            k = m != Ln(k)
          }
        }
        f.sc();
        f = Bm(Pq(c, b), d);
        f.select();
        if(i && (i = On(f.q()), Kn(i, j))) {
          h = "&nbsp;", B && "LI" == i.tagName && (h = "<br>"), i.innerHTML = h, Bm(Hn(i.firstChild), 0).select(), h = o
        }
        k && (f = On(f.q()), i = In(hl(new Dn(f), Jn)), f && i && (uc(f, i.childNodes), J(i)));
        h && (f = Bm(Pq(c, b), d), f.select())
      }
    }
  }
  return $n(a, j)
}
;function vr() {
  vn.call(this);
  this.al = l
}
A(vr, vn);
var wr = /^(DIV|TR|LI|BLOCKQUOTE|H\d|PRE|XMP)/;
function xr(a) {
  a.push("<br>")
}
t = vr.prototype;
t.cc = s("RemoveFormatting");
t.Od = function(a) {
  return"+removeFormat" == a
};
t.Gd = function(a) {
  "+removeFormat" == a && yr(this)
};
t.tf = function(a, b, c) {
  if(!c) {
    return o
  }
  return" " == b ? (this.d.execCommand("+removeFormat"), j) : o
};
function yr(a) {
  $(a.d).isCollapsed() || (zr(a, a.al || ua(a.Mi, a)), wn(a).ba().execCommand("RemoveFormat", o, g), ln && zr(a, function(a) {
    var c = G("528") ? /&nbsp;/g : /\u00A0/g;
    return a.replace(c, " ")
  }))
}
function Ar(a) {
  return Pc(a, function(a) {
    return"TABLE" == a.tagName
  }, j)
}
function zr(a, b) {
  var c = $(a.d);
  if(!(1 < c.ed())) {
    if(D) {
      var d = Tn(c, a.d.b()), f = Ar(d.q()), h = Ar(d.D());
      if(f || h) {
        if(f == h) {
          return
        }
        var i, k = c;
        i = f;
        var c = h, d = new fo(k), m = k.q(), n = k.L(), p = k.D(), k = k.X(), r = wn(a);
        if(i) {
          var x = r.createTextNode("");
          xc(x, i);
          m = x;
          n = 0
        }
        c && (x = r.createTextNode(""), wc(x, c), p = x, k = 0);
        Jl(m, n, p, k).select();
        i = d;
        if(!f) {
          c = J(Hl(i, j)), a.oh = c
        }
        if(!h) {
          c = J(Hl(i, o)), a.zg = c
        }
        c = $(a.d);
        d = Tn(c, a.d.b())
      }
      d.select();
      c = d
    }
    m = c;
    c = wn(a).e("div");
    d = m.Mb();
    if(Zm) {
      c.appendChild(d.cloneContents())
    }else {
      if(Ym) {
        n = m.dd(), n = n.replace(/\r\n/g, "\r"), p = n.length, m = p - Da(n).length, n = p - n.replace(/[\s\xa0]+$/, "").length, d.moveStart("character", m), d.moveEnd("character", -n), m = d.htmlText, "Formatted" == d.queryCommandValue("formatBlock") && (m = d.htmlText.replace(/(\r\n|\r|\n)/g, "<br>")), c.innerHTML = m
      }
    }
    m = b(c.innerHTML);
    r = $(a.d);
    c = wn(a);
    n = Sa();
    d = Sa();
    m = '<span id="' + n + '"></span>' + m + '<span id="' + d + '"></span>';
    k = Sa();
    p = '<span id="' + k + '"></span>';
    if(Ym) {
      x = r.Nb(0).Mb();
      x.pasteHTML(p);
      for(var v;(v = x.parentElement()) && Kn(v) && !Mn(v);) {
        r = v.nodeName;
        if("TD" == r || "TR" == r || "TH" == r) {
          break
        }
        J(v)
      }
      x.pasteHTML(m);
      (k = c.b(k)) && J(k)
    }else {
      if(Zm) {
        c.ba().execCommand("insertImage", o, k);
        r = RegExp("<[^<]*" + k + "[^>]*>");
        v = $(a.d).Ia();
        if(3 == v.nodeType) {
          v = v.parentNode
        }
        for(;!r.test(v.innerHTML);) {
          v = v.parentNode
        }
        if(D) {
          v.innerHTML = v.innerHTML.replace(r, m)
        }else {
          v.innerHTML = v.innerHTML.replace(r, p);
          for(v = k = c.b(k);(v = k.parentNode) && Kn(v) && !Mn(v);) {
            r = v.nodeName;
            if("TD" == r || "TR" == r || "TH" == r) {
              break
            }
            xc(k, v);
            J(v)
          }
          v.innerHTML = v.innerHTML.replace(RegExp(p, "i"), m)
        }
      }
    }
    v = c.b(n);
    c = c.b(d);
    Jl(v, 0, c, c.childNodes.length).select();
    J(v);
    J(c);
    if(D && i) {
      c = $(a.d);
      v = a.d.b();
      if(a.oh) {
        v.insertBefore(a.oh, v.firstChild), a.oh = l
      }
      if(a.zg) {
        v.appendChild(a.zg), a.zg = l
      }
      v = l;
      d = Hl(i, j);
      m = Hl(i, o);
      d && m && (v = Jl(d, 0, m, 0));
      d = v;
      v = (f ? d : c).q();
      f = (f ? d : c).L();
      m = (h ? d : c).D();
      h = (h ? d : c).X();
      Jl(v, f, m, h).select();
      i.C()
    }
  }
}
t.Mi = function(a) {
  var b = document.createElement("div");
  b.innerHTML = a;
  for(var a = [], b = [b.childNodes, 0], c = [], d = 0, f = [], h = 0, i = 0;0 <= i;i -= 2) {
    for(var k = o;0 < h && i <= f[h - 1];) {
      h--, k = j
    }
    k && xr(a);
    for(k = o;0 < d && i <= c[d - 1];) {
      d--, k = j
    }
    k && xr(a);
    for(var k = b[i], m = b[i + 1];m < k.length;) {
      var n = k[m++], p = n.nodeName;
      switch(p) {
        case "#text":
          n = 0 < d ? n.nodeValue : Ba(n.nodeValue);
          n = Ea(n);
          a.push(n);
          continue;
        case "P":
          xr(a);
          xr(a);
          break;
        case "BR":
          xr(a);
          continue;
        case "TABLE":
          xr(a);
          f[h++] = i;
          break;
        case "PRE":
        ;
        case "XMP":
          c[d++] = i;
          break;
        case "STYLE":
        ;
        case "SCRIPT":
        ;
        case "SELECT":
          continue;
        case "A":
          if(n.href && "" != n.href) {
            a.push("<a href='");
            a.push(n.href);
            a.push("'>");
            a.push(this.Mi(n.innerHTML));
            a.push("</a>");
            continue
          }else {
            break
          }
        ;
        case "IMG":
          a.push("<img src='");
          a.push(n.src);
          a.push("'");
          "0" == n.border && a.push(" border='0'");
          a.push(">");
          continue;
        case "TD":
          n.previousSibling && a.push(" ");
          break;
        case "TR":
          n.previousSibling && xr(a);
          break;
        case "DIV":
          var r = n.parentNode;
          if(r.firstChild == n && wr.test(r.tagName)) {
            break
          }
        ;
        default:
          wr.test(p) && xr(a)
      }
      n = n.childNodes;
      0 < n.length && (b[i++] = k, b[i++] = m, k = n, m = 0)
    }
  }
  return a.join("").replace(/\xa0|[ \t]+/g, " ")
};
function Br(a) {
  vn.call(this);
  this.Ai = a
}
A(Br, vn);
t = Br.prototype;
t.cc = sn("LoremIpsum");
t.Te = un;
t.Re = o;
t.queryCommandValue = function(a) {
  return"usinglorem" == a && this.Re
};
t.execCommand = function(a, b) {
  if("clearlorem" == a) {
    var c = this.d;
    if(this.Re && !c.Dc) {
      var d = c.b();
      d || (d = c.Sb);
      this.Re = o;
      d.style.fontStyle = this.Qk;
      Eo(c, l);
      b && 2 == c.Eb && (E ? (I(c.b()).body.focus(), (Ym || E) && Fo(c), c.focus()) : B && Fo(c))
    }
  }else {
    if("updatelorem" == a && (c = this.d, !this.Re && !c.Dc && no != c.id && ((d = c.b()) || (d = c.Sb), Kn(d)))) {
      this.Re = j, this.Qk = d.style.fontStyle, d.style.fontStyle = "italic", Eo(c, this.Ai)
    }
  }
};
t.Od = function(a) {
  return"clearlorem" == a || "updatelorem" == a || "usinglorem" == a
};
function Cr() {
  vn.call(this)
}
A(Cr, Mq);
Cr.prototype.cc = s("ListTabHandler");
Cr.prototype.ni = function(a) {
  var b = $(this.d);
  return Oc(b.Ia(), "LI") || il(b, function(a) {
    return"LI" == a.tagName
  }) ? (this.d.execCommand(a.shiftKey ? "+outdent" : "+indent"), a.preventDefault(), j) : o
};
function Dr(a, b) {
  this.na = new ee(this);
  this.mf = a;
  this.qb = b;
  this.bh = [];
  se(this.qb, function(a) {
    a.da && this.bh.push(Er(ne(a)))
  }, this);
  this.qb.Gb(o);
  this.na.m(this.mf, "cvc", this.sl).m(this.qb, "action", this.Vj)
}
A(Dr, ie);
function Er(a) {
  return a
}
function Fr(a) {
  return a
}
t = Dr.prototype;
t.Ba = q("na");
t.W = function() {
  return this.qb.W()
};
t.Z = function(a) {
  this.qb.Z(a)
};
t.isEnabled = function() {
  return this.qb.isEnabled()
};
t.fc = function(a) {
  this.qb.fc(a)
};
t.blur = function() {
  this.qb.Cc(l)
};
t.l = function() {
  Dr.c.l.call(this);
  this.na && (this.na.C(), delete this.na);
  this.qb && (this.qb.C(), delete this.qb);
  delete this.mf;
  delete this.bh
};
t.sl = function(a) {
  if(this.qb.isEnabled() && this.dispatchEvent("change")) {
    var b;
    try {
      b = this.mf.queryCommandValue(a.km || this.bh)
    }catch(c) {
      b = {}
    }
    var a = b, d;
    for(d in a) {
      if(b = qe(this.qb, d)) {
        var f = a[d];
        b.Tc ? b.Tc(f) : Re(b, !!f)
      }
    }
  }
};
t.Vj = function(a) {
  this.mf.execCommand(Fr(ne(a.target)), a.target.Ca())
};
var Gr = "+bold,+italic,+underline,+fontSize,+link,+insertUnorderedList,+insertOrderedList,+indent,+outdent,+removeFormat".split(","), Do = al.M(l);
function Hr() {
  return lc.call(l, "fieldContents").value = Co()
}
da("hello.updateFieldContents", Hr);
da("hello.setupEditor", function() {
  var a = Do, b = new go("editMe"), c = a.tl;
  L(c) && !L(c.call(l, b)) && e(Error([Z("Assert failed: "), Z("Validator rejected reference state"), Z("\n"), Z(Si.h(R([cj(Mi("\ufdd1'validate", "\ufdd1'new-value"), Li("\ufdd0'line", 5905))])))].join("")));
  c = a.state;
  a.state = b;
  Ci(a, c, b);
  a = qi(Do);
  po(a, new Rq);
  po(a, new vr);
  po(a, new Cr);
  po(a, new Nq);
  po(a, new qr);
  po(a, new Qq);
  po(a, new Br("Click here to edit"));
  po(a, new nq);
  po(a, new Gq);
  a = ph.call(l, Gr, lc.call(l, "toolbar"));
  new Dr(qi(Do), a);
  Wd.call(l, qi(Do), io, Hr);
  a = qi(Do);
  a.Eb = 1;
  b = a.Sb;
  a.nodeName = b.nodeName;
  a.wm = b.className;
  a.cssText = b.style.cssText;
  b.className += " editable";
  if(b = a.Sb) {
    var b = b.innerHTML, c = {}, b = a.eh(8, b, c), d = "padding:0;" + a.Sb.style.cssText;
    ya(d, ";") || (d += ";");
    d += "background-color:white;";
    C && (d += "overflow:visible;");
    d = a.Rd.e("IFRAME", {frameBorder:0, style:d});
    if(Go(a)) {
      var f = ua(a.si, a, d, b, c);
      a.Bg = Wd(d, "load", f, j)
    }
    f = a.Sb;
    d.className = f.className;
    d.id = f.id;
    yc(d, f);
    Go(a) || a.si(d, b, c)
  }
  return Hr()
});
function Ir() {
  this.ig = []
}
A(Ir, kf);
ia(Ir);
Ir.prototype.s = s("goog-filterobsmenuitem");
function Jr(a, b, c, d) {
  pf.call(this, a, b, c, d || new Ir)
}
A(Jr, pf);
Jr.prototype.Ff = l;
Jr.prototype.ea = function() {
  Jr.c.ea.call(this);
  this.Ff && this.Ff(this, "")
};
Le("goog-filterobsmenuitem", function() {
  return new Jr(l)
});
function Kr(a, b) {
  Jf.call(this, b, a)
}
A(Kr, Jf);
t = Kr.prototype;
t.zi = 0;
t.Vg = "";
t.Ah = o;
t.Oj = 0;
t.e = function() {
  Kr.c.e.call(this);
  var a = this.R(), b = a.e("div", this.w.s() + "-filter", this.ye = a.e("div", l, this.Vg), this.gb = a.e("input", {type:"text"})), c = this.b();
  a.appendChild(c, b);
  this.Ph = a.e("div", this.w.s() + "-content");
  a.appendChild(c, this.Ph);
  this.Gb(j);
  a = this.gb;
  if(this.of) {
    b = this.ma();
    c = this.V;
    this.xe = a;
    var d = this.ma();
    if(c) {
      this.xe = b, cf(this, o), this.xe = a, Ce(this.oe(), d), cf(this, j)
    }
  }else {
    e(Error("Can't set key event target for container that doesn't support keyboard focus!"))
  }
  D && this.gb.setAttribute("autocomplete", "off");
  if(this.zi) {
    this.gb.maxLength = this.zi
  }
};
function Lr(a) {
  if(a.Nd) {
    Yd(a.Nd, "input", a.ki, o, a), Yd(a.gb.parentNode, "click", a.Gi, o, a), a.Nd.C(), a.Nd = g, a.kf = g
  }
}
t.Z = function(a, b, c) {
  if((b = Kr.c.Z.call(this, a, b, c)) && a && this.V) {
    if(this.gb) {
      this.gb.value = "", Mr(this, "")
    }
    if(!this.Nd && this.gb && (this.Nd = new vp(this.gb), od(this.gb, o), Wd(this.Nd, "input", this.ki, o, this), Wd(this.gb.parentNode, "click", this.Gi, o, this), this.Ah)) {
      this.kf = []
    }
  }else {
    b && !a && Lr(this)
  }
  return b
};
t.l = function() {
  Lr(this);
  this.ye = this.gb = g;
  Kr.c.l.call(this)
};
function Nr(a) {
  a.Vg = "Find or create parent";
  a.ye && Hc(a.ye, a.Vg)
}
t.ki = function() {
  Mr(this, this.gb.value);
  var a = df(this);
  (!a || !a.W()) && ef(this);
  this.dispatchEvent("filterchange")
};
function Mr(a, b) {
  if(a.Pj != b) {
    if(a.ye) {
      a.ye.style.visibility = "" == b ? "visible" : "hidden"
    }
    if(a.Ah && a.kf) {
      var c = b.match(/^(.+),[ ]*([^,]*)$/), d = c && c[1] ? c[1].split(",") : [];
      if("," == b.substr(b.length - 1, 1) || d.length != a.kf.length) {
        var f = d[d.length - 1] || "";
        if(df(a) && "" != f) {
          var h = df(a).zc();
          if(0 == h.toLowerCase().indexOf(f.toLowerCase())) {
            d[d.length - 1] = h, a.gb.value = d.join(",") + ","
          }
        }
        a.kf = d;
        a.dispatchEvent("change");
        a.Ea(-1)
      }
      c && (b = 2 < c.length ? Ca(c[2]) : "")
    }
    c = RegExp("(^|[- ,_/.:])" + ("" + b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "i");
    for(f = a.Oj;d = ue(a, f);f++) {
      if(d instanceof Jr) {
        d.Ff && d.Ff(d, b || "")
      }else {
        if(!a.bl || !a.bl[ne(d)]) {
          if(h = d.zc()) {
            var i = h.match(c);
            "" == b || i ? (d.Z(j), (i = h.indexOf(i[0])) && i++, "" == b ? d.hb(h) : d.hb(a.R().e("span", l, h.substr(0, i), a.R().e("b", l, h.substr(i, b.length)), h.substr(i + b.length, h.length - b.length - i)))) : d.Z(o)
          }else {
            d.Z("" == b)
          }
        }
      }
    }
    a.Pj = b
  }
}
t.Bb = function(a) {
  if(a.shiftKey || a.ctrlKey || a.altKey || 36 == a.keyCode || 35 == a.keyCode) {
    return o
  }
  return 27 == a.keyCode ? (this.dispatchEvent("blur"), j) : Kr.c.Bb.call(this, a)
};
t.Ea = function(a) {
  Kr.c.Ea.call(this, a);
  var a = this.T(), b = df(this) ? df(this).b() : l;
  if(b && Bc(a, b)) {
    var c = C ? 0 : a.offsetTop, d = b.offsetTop + b.offsetHeight - c - (a.clientHeight + a.scrollTop);
    a.scrollTop += Math.max(d, 0);
    d = a.scrollTop - (b.offsetTop - c);
    a.scrollTop -= Math.max(d, 0)
  }
};
t.Gi = function() {
  this.gb.focus()
};
t.T = function() {
  return this.Ph || this.b()
};
var Or = Rj(["Foo", "Bar", "Baz"]);
da("filteredmenu.setupMenu", function() {
  var a = lc.call(l, "menu"), b = new Kr;
  Nr(b);
  Sj.f(function(a) {
    return b.Hb(new pf(a))
  }, Or);
  return b.$a(a)
});
