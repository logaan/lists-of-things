function e(a) {
  throw a;
}
var g = void 0, j = !0, k = null, o = !1;
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
function p(a) {
  return function() {
    return this[a]
  }
}
function s(a) {
  return function() {
    return a
  }
}
var t, da = da || {}, u = this;
function ea(a, b) {
  var c = a.split("."), d = u;
  !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
  for(var f;c.length && (f = c.shift());) {
    !c.length && fa(b) ? d[f] = b : d = d[f] ? d[f] : d[f] = {}
  }
}
function ha(a) {
  for(var a = a.split("."), b = u, c;c = a.shift();) {
    if(b[c] != k) {
      b = b[c]
    }else {
      return k
    }
  }
  return b
}
function ia() {
}
function ja(a) {
  a.fa = function() {
    return a.lm || (a.lm = new a)
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
function ka(a) {
  return"array" == w(a)
}
function la(a) {
  var b = w(a);
  return"array" == b || "object" == b && "number" == typeof a.length
}
function y(a) {
  return"string" == typeof a
}
function ma(a) {
  return"number" == typeof a
}
function na(a) {
  return"function" == w(a)
}
function oa(a) {
  a = w(a);
  return"object" == a || "array" == a || "function" == a
}
function pa(a) {
  return a[ra] || (a[ra] = ++sa)
}
var ra = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), sa = 0;
function ta(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function ua(a, b, c) {
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
function va(a, b, c) {
  va = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ta : ua;
  return va.apply(k, arguments)
}
function wa(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b)
  }
}
var xa = Date.now || function() {
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
;function ya(a, b) {
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
  return/^[\s\xa0]*$/.test(a)
}
function Ba(a) {
  return!/[^\t\n\r ]/.test(a)
}
function Ca(a) {
  return a.replace(/(\r\n|\r|\n)+/g, " ")
}
function Da(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
function Ea(a) {
  return a.replace(/^[\s\xa0]+/, "")
}
var Fa = /^[a-zA-Z0-9\-_.!~*'()]*$/;
function Ga(a) {
  a = "" + a;
  return!Fa.test(a) ? encodeURIComponent(a) : a
}
function Ha(a) {
  if(!Ia.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(Ja, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(Ka, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(La, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Ma, "&quot;"));
  return a
}
var Ja = /&/g, Ka = /</g, La = />/g, Ma = /\"/g, Ia = /[&<>\"]/;
function Na(a) {
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
var Oa = {"\x00":"\\0", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\u000b":"\\x0B", '"':'\\"', "\\":"\\\\"}, Pa = {"'":"\\'"};
function Qa(a) {
  var m;
  a = "" + a;
  if(a.quote) {
    return a.quote()
  }
  for(var b = ['"'], c = 0;c < a.length;c++) {
    var d = a.charAt(c), f = d.charCodeAt(0), h = b, i = c + 1, l;
    if(!(l = Oa[d])) {
      if(!(31 < f && 127 > f)) {
        if(d in Pa) {
          d = Pa[d]
        }else {
          if(d in Oa) {
            m = Pa[d] = Oa[d], d = m
          }else {
            f = d;
            l = d.charCodeAt(0);
            if(31 < l && 127 > l) {
              f = d
            }else {
              if(256 > l) {
                if(f = "\\x", 16 > l || 256 < l) {
                  f += "0"
                }
              }else {
                f = "\\u", 4096 > l && (f += "0")
              }
              f += l.toString(16).toUpperCase()
            }
            d = Pa[d] = f
          }
        }
      }
      l = d
    }
    h[i] = l
  }
  b.push('"');
  return b.join("")
}
function Ra(a) {
  return("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
}
function Ta(a, b) {
  for(var c = 0, d = Da("" + a).split("."), f = Da("" + b).split("."), h = Math.max(d.length, f.length), i = 0;0 == c && i < h;i++) {
    var l = d[i] || "", m = f[i] || "", n = RegExp("(\\d*)(\\D*)", "g"), q = RegExp("(\\d*)(\\D*)", "g");
    do {
      var r = n.exec(l) || ["", "", ""], x = q.exec(m) || ["", "", ""];
      if(0 == r[0].length && 0 == x[0].length) {
        break
      }
      c = ((0 == r[1].length ? 0 : parseInt(r[1], 10)) < (0 == x[1].length ? 0 : parseInt(x[1], 10)) ? -1 : (0 == r[1].length ? 0 : parseInt(r[1], 10)) > (0 == x[1].length ? 0 : parseInt(x[1], 10)) ? 1 : 0) || ((0 == r[2].length) < (0 == x[2].length) ? -1 : (0 == r[2].length) > (0 == x[2].length) ? 1 : 0) || (r[2] < x[2] ? -1 : r[2] > x[2] ? 1 : 0)
    }while(0 == c)
  }
  return c
}
function Ua(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296
  }
  return b
}
var Va = 2147483648 * Math.random() | 0;
function Wa() {
  return"goog_" + Va++
}
var Xa = {};
function Ya(a) {
  return Xa[a] || (Xa[a] = ("" + a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  }))
}
;function Za(a) {
  this.stack = Error().stack || "";
  if(a) {
    this.message = "" + a
  }
}
A(Za, Error);
Za.prototype.name = "CustomError";
function $a(a, b) {
  b.unshift(a);
  Za.call(this, za.apply(k, b));
  b.shift();
  this.yo = a
}
A($a, Za);
$a.prototype.name = "AssertionError";
function ab(a, b) {
  e(new $a("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;function bb(a) {
  return a[a.length - 1]
}
var cb = Array.prototype, db = cb.indexOf ? function(a, b, c) {
  return cb.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == k ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(y(a)) {
    return!y(b) || 1 != b.length ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, eb = cb.lastIndexOf ? function(a, b, c) {
  return cb.lastIndexOf.call(a, b, c == k ? a.length - 1 : c)
} : function(a, b, c) {
  c = c == k ? a.length - 1 : c;
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
}, fb = cb.forEach ? function(a, b, c) {
  cb.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = y(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in f && b.call(c, f[h], h, a)
  }
}, gb = cb.filter ? function(a, b, c) {
  return cb.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = [], h = 0, i = y(a) ? a.split("") : a, l = 0;l < d;l++) {
    if(l in i) {
      var m = i[l];
      b.call(c, m, l, a) && (f[h++] = m)
    }
  }
  return f
}, ib = cb.map ? function(a, b, c) {
  return cb.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = Array(d), h = y(a) ? a.split("") : a, i = 0;i < d;i++) {
    i in h && (f[i] = b.call(c, h[i], i, a))
  }
  return f
}, jb = cb.some ? function(a, b, c) {
  return cb.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = y(a) ? a.split("") : a, h = 0;h < d;h++) {
    if(h in f && b.call(c, f[h], h, a)) {
      return j
    }
  }
  return o
}, kb = cb.every ? function(a, b, c) {
  return cb.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = y(a) ? a.split("") : a, h = 0;h < d;h++) {
    if(h in f && !b.call(c, f[h], h, a)) {
      return o
    }
  }
  return j
};
function lb(a, b) {
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
  return 0 > c ? k : y(a) ? a.charAt(c) : a[c]
}
function mb(a, b) {
  return 0 <= db(a, b)
}
function nb(a, b) {
  var c = db(a, b);
  0 <= c && cb.splice.call(a, c, 1)
}
function ob(a) {
  return cb.concat.apply(cb, arguments)
}
function pb(a) {
  if(ka(a)) {
    return ob(a)
  }
  for(var b = [], c = 0, d = a.length;c < d;c++) {
    b[c] = a[c]
  }
  return b
}
function qb(a) {
  return ka(a) ? ob(a) : pb(a)
}
function rb(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = arguments[c], f;
    if(ka(d) || (f = la(d)) && d.hasOwnProperty("callee")) {
      a.push.apply(a, d)
    }else {
      if(f) {
        for(var h = a.length, i = d.length, l = 0;l < i;l++) {
          a[h + l] = d[l]
        }
      }else {
        a.push(d)
      }
    }
  }
}
function sb(a, b, c, d) {
  cb.splice.apply(a, tb(arguments, 1))
}
function tb(a, b, c) {
  return 2 >= arguments.length ? cb.slice.call(a, b) : cb.slice.call(a, b, c)
}
function ub(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function vb(a, b) {
  for(var c in a) {
    b.call(g, a[c], c, a)
  }
}
function wb(a, b) {
  for(var c in a) {
    if(b.call(g, a[c], c, a)) {
      return j
    }
  }
  return o
}
function xb(a) {
  var b = 0, c;
  for(c in a) {
    b++
  }
  return b
}
function yb(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function zb(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
function Ab(a, b) {
  b in a && delete a[b]
}
function Bb(a, b, c) {
  b in a && e(Error('The object already contains the key "' + b + '"'));
  a[b] = c
}
function Cb(a) {
  var b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  return b
}
function Db(a) {
  var b = {}, c;
  for(c in a) {
    b[a[c]] = c
  }
  return b
}
var Eb = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
function Fb(a, b) {
  for(var c, d, f = 1;f < arguments.length;f++) {
    d = arguments[f];
    for(c in d) {
      a[c] = d[c]
    }
    for(var h = 0;h < Eb.length;h++) {
      c = Eb[h], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
function Gb(a) {
  var b = arguments.length;
  if(1 == b && ka(arguments[0])) {
    return Gb.apply(k, arguments[0])
  }
  b % 2 && e(Error("Uneven number of arguments"));
  for(var c = {}, d = 0;d < b;d += 2) {
    c[arguments[d]] = arguments[d + 1]
  }
  return c
}
function Hb(a) {
  var b = arguments.length;
  if(1 == b && ka(arguments[0])) {
    return Hb.apply(k, arguments[0])
  }
  for(var c = {}, d = 0;d < b;d++) {
    c[arguments[d]] = j
  }
  return c
}
;var Ib, Jb, Kb, Lb, Mb, Nb, Ob, Pb, Qb = (Pb = "ScriptEngine" in u && "JScript" == u.ScriptEngine()) ? u.ScriptEngineMajorVersion() + "." + u.ScriptEngineMinorVersion() + "." + u.ScriptEngineBuildVersion() : "0";
function Rb(a, b) {
  this.Eb = Pb ? [] : "";
  a != k && this.append.apply(this, arguments)
}
Rb.prototype.set = function(a) {
  this.clear();
  this.append(a)
};
Pb ? (Rb.prototype.ih = 0, Rb.prototype.append = function(a, b, c) {
  b == k ? this.Eb[this.ih++] = a : (this.Eb.push.apply(this.Eb, arguments), this.ih = this.Eb.length);
  return this
}) : Rb.prototype.append = function(a, b, c) {
  this.Eb += a;
  if(b != k) {
    for(var d = 1;d < arguments.length;d++) {
      this.Eb += arguments[d]
    }
  }
  return this
};
Rb.prototype.clear = function() {
  Pb ? this.ih = this.Eb.length = 0 : this.Eb = ""
};
Rb.prototype.toString = function() {
  if(Pb) {
    var a = this.Eb.join("");
    this.clear();
    a && this.append(a);
    return a
  }
  return this.Eb
};
var Sb;
function B(a) {
  return a != k && a !== o
}
function C(a, b) {
  return a[w.call(k, b)] ? j : a._ ? j : o
}
function D(a, b) {
  return Error("No protocol method " + a + " defined for type " + w.call(k, b) + ": " + b)
}
function Tb(a) {
  return Array.prototype.slice.call(a)
}
var Ub = function() {
  function a(a, d) {
    return b.call(k, d)
  }
  var b = k, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return Array(b);
      case 2:
        return a.call(this, 0, d)
    }
    e("Invalid arity: " + arguments.length)
  };
  b.N = function(a) {
    return Array(a)
  };
  b.f = a;
  return b
}(), Vb = {};
function Wb(a) {
  if(a ? a.xb : a) {
    a = a.xb(a)
  }else {
    var b;
    var c = Wb[w.call(k, a)];
    c ? b = c : (c = Wb._) ? b = c : e(D("ICounted.-count", a));
    a = b.call(k, a)
  }
  return a
}
function Xb(a, b) {
  var c;
  if(a ? a.hb : a) {
    c = a.hb(a, b)
  }else {
    var d = Xb[w.call(k, a)];
    d ? c = d : (d = Xb._) ? c = d : e(D("ICollection.-conj", a));
    c = c.call(k, a, b)
  }
  return c
}
var Yb = {}, E = function() {
  function a(a, b, c) {
    if(a ? a.Zd : a) {
      a = a.Zd(a, b, c)
    }else {
      var i;
      var l = E[w.call(k, a)];
      l ? i = l : (l = E._) ? i = l : e(D("IIndexed.-nth", a));
      a = i.call(k, a, b, c)
    }
    return a
  }
  function b(a, b) {
    var c;
    if(a ? a.Yd : a) {
      c = a.Yd(a, b)
    }else {
      var i = E[w.call(k, a)];
      i ? c = i : (i = E._) ? c = i : e(D("IIndexed.-nth", a));
      c = c.call(k, a, b)
    }
    return c
  }
  var c = k, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.f = b;
  c.l = a;
  return c
}(), Zb = {}, $b = {};
function ac(a) {
  if(a ? a.nc : a) {
    a = a.nc(a)
  }else {
    var b;
    var c = ac[w.call(k, a)];
    c ? b = c : (c = ac._) ? b = c : e(D("ISeq.-first", a));
    a = b.call(k, a)
  }
  return a
}
function G(a) {
  if(a ? a.oc : a) {
    a = a.oc(a)
  }else {
    var b;
    var c = G[w.call(k, a)];
    c ? b = c : (c = G._) ? b = c : e(D("ISeq.-rest", a));
    a = b.call(k, a)
  }
  return a
}
var bc = function() {
  function a(a, b, c) {
    if(a ? a.Dc : a) {
      a = a.Dc(a, b, c)
    }else {
      var i;
      var l = bc[w.call(k, a)];
      l ? i = l : (l = bc._) ? i = l : e(D("ILookup.-lookup", a));
      a = i.call(k, a, b, c)
    }
    return a
  }
  function b(a, b) {
    var c;
    if(a ? a.Cc : a) {
      c = a.Cc(a, b)
    }else {
      var i = bc[w.call(k, a)];
      i ? c = i : (i = bc._) ? c = i : e(D("ILookup.-lookup", a));
      c = c.call(k, a, b)
    }
    return c
  }
  var c = k, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.f = b;
  c.l = a;
  return c
}();
function cc(a, b, c) {
  if(a ? a.xd : a) {
    a = a.xd(a, b, c)
  }else {
    var d;
    var f = cc[w.call(k, a)];
    f ? d = f : (f = cc._) ? d = f : e(D("IAssociative.-assoc", a));
    a = d.call(k, a, b, c)
  }
  return a
}
var dc = {}, ec = {};
function fc(a) {
  if(a ? a.Of : a) {
    a = a.Of(a)
  }else {
    var b;
    var c = fc[w.call(k, a)];
    c ? b = c : (c = fc._) ? b = c : e(D("IMapEntry.-key", a));
    a = b.call(k, a)
  }
  return a
}
function gc(a) {
  if(a ? a.Pf : a) {
    a = a.Pf(a)
  }else {
    var b;
    var c = gc[w.call(k, a)];
    c ? b = c : (c = gc._) ? b = c : e(D("IMapEntry.-val", a));
    a = b.call(k, a)
  }
  return a
}
function hc(a) {
  if(a ? a.$d : a) {
    a = a.$d(a)
  }else {
    var b;
    var c = hc[w.call(k, a)];
    c ? b = c : (c = hc._) ? b = c : e(D("IStack.-peek", a));
    a = b.call(k, a)
  }
  return a
}
function ic(a) {
  if(a ? a.ae : a) {
    a = a.ae(a)
  }else {
    var b;
    var c = ic[w.call(k, a)];
    c ? b = c : (c = ic._) ? b = c : e(D("IStack.-pop", a));
    a = b.call(k, a)
  }
  return a
}
var jc = {};
function kc(a) {
  if(a ? a.mh : a) {
    a = a.mh(a)
  }else {
    var b;
    var c = kc[w.call(k, a)];
    c ? b = c : (c = kc._) ? b = c : e(D("IDeref.-deref", a));
    a = b.call(k, a)
  }
  return a
}
var lc = {};
function mc(a) {
  if(a ? a.bb : a) {
    a = a.bb(a)
  }else {
    var b;
    var c = mc[w.call(k, a)];
    c ? b = c : (c = mc._) ? b = c : e(D("IMeta.-meta", a));
    a = b.call(k, a)
  }
  return a
}
function nc(a, b) {
  var c;
  if(a ? a.ib : a) {
    c = a.ib(a, b)
  }else {
    var d = nc[w.call(k, a)];
    d ? c = d : (d = nc._) ? c = d : e(D("IWithMeta.-with-meta", a));
    c = c.call(k, a, b)
  }
  return c
}
var oc = {}, pc = function() {
  function a(a, b, c) {
    if(a ? a.Te : a) {
      a = a.Te(a, b, c)
    }else {
      var i;
      var l = pc[w.call(k, a)];
      l ? i = l : (l = pc._) ? i = l : e(D("IReduce.-reduce", a));
      a = i.call(k, a, b, c)
    }
    return a
  }
  function b(a, b) {
    var c;
    if(a ? a.Se : a) {
      c = a.Se(a, b)
    }else {
      var i = pc[w.call(k, a)];
      i ? c = i : (i = pc._) ? c = i : e(D("IReduce.-reduce", a));
      c = c.call(k, a, b)
    }
    return c
  }
  var c = k, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.f = b;
  c.l = a;
  return c
}();
function qc(a, b) {
  var c;
  if(a ? a.Fa : a) {
    c = a.Fa(a, b)
  }else {
    var d = qc[w.call(k, a)];
    d ? c = d : (d = qc._) ? c = d : e(D("IEquiv.-equiv", a));
    c = c.call(k, a, b)
  }
  return c
}
function rc(a) {
  if(a ? a.$a : a) {
    a = a.$a(a)
  }else {
    var b;
    var c = rc[w.call(k, a)];
    c ? b = c : (c = rc._) ? b = c : e(D("IHash.-hash", a));
    a = b.call(k, a)
  }
  return a
}
function sc(a) {
  if(a ? a.eb : a) {
    a = a.eb(a)
  }else {
    var b;
    var c = sc[w.call(k, a)];
    c ? b = c : (c = sc._) ? b = c : e(D("ISeqable.-seq", a));
    a = b.call(k, a)
  }
  return a
}
var tc = {}, uc = {};
function vc(a, b) {
  var c;
  if(a ? a.Ta : a) {
    c = a.Ta(a, b)
  }else {
    var d = vc[w.call(k, a)];
    d ? c = d : (d = vc._) ? c = d : e(D("IPrintable.-pr-seq", a));
    c = c.call(k, a, b)
  }
  return c
}
function wc(a, b, c) {
  if(a ? a.aj : a) {
    a = a.aj(a, b, c)
  }else {
    var d;
    var f = wc[w.call(k, a)];
    f ? d = f : (f = wc._) ? d = f : e(D("IWatchable.-notify-watches", a));
    a = d.call(k, a, b, c)
  }
  return a
}
var xc = {};
function yc(a) {
  if(a ? a.Nf : a) {
    a = a.Nf(a)
  }else {
    var b;
    var c = yc[w.call(k, a)];
    c ? b = c : (c = yc._) ? b = c : e(D("IEditableCollection.-as-transient", a));
    a = b.call(k, a)
  }
  return a
}
function zc(a, b) {
  var c;
  if(a ? a.rh : a) {
    c = a.rh(a, b)
  }else {
    var d = zc[w.call(k, a)];
    d ? c = d : (d = zc._) ? c = d : e(D("ITransientCollection.-conj!", a));
    c = c.call(k, a, b)
  }
  return c
}
function Ac(a) {
  if(a ? a.sh : a) {
    a = a.sh(a)
  }else {
    var b;
    var c = Ac[w.call(k, a)];
    c ? b = c : (c = Ac._) ? b = c : e(D("ITransientCollection.-persistent!", a));
    a = b.call(k, a)
  }
  return a
}
function Bc(a, b, c) {
  if(a ? a.qh : a) {
    a = a.qh(a, b, c)
  }else {
    var d;
    var f = Bc[w.call(k, a)];
    f ? d = f : (f = Bc._) ? d = f : e(D("ITransientAssociative.-assoc!", a));
    a = d.call(k, a, b, c)
  }
  return a
}
function Cc(a, b, c) {
  if(a ? a.$i : a) {
    a = a.$i(a, b, c)
  }else {
    var d;
    var f = Cc[w.call(k, a)];
    f ? d = f : (f = Cc._) ? d = f : e(D("ITransientVector.-assoc-n!", a));
    a = d.call(k, a, b, c)
  }
  return a
}
var Dc = function() {
  function a(a, b) {
    var c = a === b;
    return c ? c : qc(a, b)
  }
  var b = k, c = function() {
    function a(b, d, l) {
      var m = k;
      fa(l) && (m = H(Array.prototype.slice.call(arguments, 2)));
      return c.call(this, b, d, m)
    }
    function c(a, d, f) {
      for(;;) {
        if(B(b.call(k, a, d))) {
          if(B(I(f))) {
            a = d, d = K(f), f = I(f)
          }else {
            return b.call(k, d, K(f))
          }
        }else {
          return o
        }
      }
    }
    a.P = 2;
    a.s = function(a) {
      var b = K(a), d = K(I(a)), a = L(I(a));
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
        return c.h(b, f, M(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.P = 2;
  b.s = c.s;
  b.N = s(j);
  b.f = a;
  b.h = c.h;
  return b
}();
function Ec(a) {
  var b = a == k;
  return(b ? b : g === a) ? k : a.constructor
}
rc["null"] = s(0);
bc["null"] = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return k;
      case 3:
        return c
    }
    e("Invalid arity: " + arguments.length)
  }
}();
cc["null"] = function(a, b, c) {
  return Fc.h(M([b, c], 0))
};
Xb["null"] = function(a, b) {
  return Gc.h(M([b], 0))
};
oc["null"] = j;
pc["null"] = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return b.call(k);
      case 3:
        return c
    }
    e("Invalid arity: " + arguments.length)
  }
}();
uc["null"] = j;
vc["null"] = function() {
  return Gc.h(M(["nil"], 0))
};
Vb["null"] = j;
Wb["null"] = s(0);
hc["null"] = s(k);
ic["null"] = s(k);
$b["null"] = j;
ac["null"] = s(k);
G["null"] = function() {
  return Gc()
};
qc["null"] = function(a, b) {
  return b == k
};
nc["null"] = s(k);
lc["null"] = j;
mc["null"] = s(k);
Yb["null"] = j;
E["null"] = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return k;
      case 3:
        return c
    }
    e("Invalid arity: " + arguments.length)
  }
}();
dc["null"] = j;
Date.prototype.Fa = function(a, b) {
  return a.toString() === b.toString()
};
rc.number = aa();
qc.number = function(a, b) {
  return a === b
};
rc["boolean"] = function(a) {
  return a === j ? 1 : 0
};
rc["function"] = function(a) {
  return pa.call(k, a)
};
var Jc = function() {
  function a(a, b, c, d) {
    for(;;) {
      if(d < Wb(a)) {
        c = b.call(k, c, E.f(a, d));
        if(Hc(Ic, c)) {
          return kc(c)
        }
        d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = 0;;) {
      if(d < Wb(a)) {
        c = b.call(k, c, E.f(a, d));
        if(Hc(Ic, c)) {
          return kc(c)
        }
        d += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    if(0 === Wb(a)) {
      return b.call(k)
    }
    for(var c = E.f(a, 0), d = 1;;) {
      if(d < Wb(a)) {
        c = b.call(k, c, E.f(a, d));
        if(Hc(Ic, c)) {
          return kc(c)
        }
        d += 1
      }else {
        return c
      }
    }
  }
  var d = k, d = function(d, h, i, l) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, i);
      case 4:
        return a.call(this, d, h, i, l)
    }
    e("Invalid arity: " + arguments.length)
  };
  d.f = c;
  d.l = b;
  d.ta = a;
  return d
}();
function Kc(a, b) {
  this.pb = a;
  this.Ia = b;
  this.Ga = 0;
  this.p = 15990906
}
t = Kc.prototype;
t.$a = function(a) {
  return Lc(a)
};
t.Jb = j;
t.hb = function(a, b) {
  return N(b, a)
};
t.Qe = j;
t.toString = function() {
  return Mc.h(M([this], 0))
};
t.Re = j;
t.Se = function(a, b) {
  return Nc(this.pb) ? Jc.ta(this.pb, b, this.pb[this.Ia], this.Ia + 1) : Jc.ta(a, b, this.pb[this.Ia], 0)
};
t.Te = function(a, b, c) {
  return Nc(this.pb) ? Jc.ta(this.pb, b, c, this.Ia) : Jc.ta(a, b, c, 0)
};
t.eb = aa();
t.Ib = j;
t.xb = function() {
  return this.pb.length - this.Ia
};
t.yb = j;
t.nc = function() {
  return this.pb[this.Ia]
};
t.oc = function() {
  return this.Ia + 1 < this.pb.length ? new Kc(this.pb, this.Ia + 1) : Gc()
};
t.Fa = function(a, b) {
  return Oc(a, b)
};
t.yd = j;
t.Yd = function(a, b) {
  var c = b + this.Ia;
  return c < this.pb.length ? this.pb[c] : k
};
t.Zd = function(a, b, c) {
  a = b + this.Ia;
  return a < this.pb.length ? this.pb[a] : c
};
function M(a, b) {
  return 0 === a.length ? k : new Kc(a, b)
}
function H(a) {
  return M(a, 0)
}
oc.array = j;
pc.array = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return Jc.f(a, b);
      case 3:
        return Jc.l(a, b, c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
bc.array = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return a[b];
      case 3:
        return E.l(a, b, c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
Yb.array = j;
E.array = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return b < a.length ? a[b] : k;
      case 3:
        return b < a.length ? a[b] : c
    }
    e("Invalid arity: " + arguments.length)
  }
}();
Vb.array = j;
Wb.array = function(a) {
  return a.length
};
sc.array = function(a) {
  return M(a, 0)
};
function O(a) {
  if(a != k) {
    var b;
    b = a != k ? ((b = a.p & 32) ? b : a.Qe) ? j : a.p ? o : C(Zb, a) : C(Zb, a);
    a = b ? a : sc(a)
  }else {
    a = k
  }
  return a
}
function K(a) {
  if(a != k) {
    var b;
    b = a != k ? ((b = a.p & 64) ? b : a.yb) ? j : a.p ? o : C($b, a) : C($b, a);
    if(b) {
      return ac(a)
    }
    a = O(a);
    return a != k ? ac(a) : k
  }
  return k
}
function L(a) {
  if(a != k) {
    var b;
    b = a != k ? ((b = a.p & 64) ? b : a.yb) ? j : a.p ? o : C($b, a) : C($b, a);
    if(b) {
      return G(a)
    }
    a = O(a);
    return a != k ? G(a) : Pc
  }
  return Pc
}
function I(a) {
  if(a != k) {
    if(function() {
      var b;
      b = a != k ? ((b = a.p & 64) ? b : a.yb) ? j : a.p ? o : C($b, a) : C($b, a);
      return b
    }()) {
      var b = G(a);
      return b != k ? function() {
        var a;
        a = b != k ? ((a = b.p & 32) ? a : b.Qe) ? j : b.p ? o : C(Zb, b) : C(Zb, b);
        return a
      }() ? b : sc(b) : k
    }
    return O(L(a))
  }
  return k
}
qc._ = function(a, b) {
  return a === b
};
var Qc = function() {
  var a = k, b = function() {
    function b(a, c, i) {
      var l = k;
      fa(i) && (l = H(Array.prototype.slice.call(arguments, 2)));
      return d.call(this, a, c, l)
    }
    function d(b, c, d) {
      for(;;) {
        if(B(d)) {
          b = a.call(k, b, c), c = K(d), d = I(d)
        }else {
          return a.call(k, b, c)
        }
      }
    }
    b.P = 2;
    b.s = function(a) {
      var b = K(a), c = K(I(a)), a = L(I(a));
      return d(b, c, a)
    };
    b.h = d;
    return b
  }(), a = function(a, d, f) {
    switch(arguments.length) {
      case 2:
        return Xb(a, d);
      default:
        return b.h(a, d, M(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  a.P = 2;
  a.s = b.s;
  a.f = function(a, b) {
    return Xb(a, b)
  };
  a.h = b.h;
  return a
}();
function Rc(a) {
  if(Nc(a)) {
    a = Wb(a)
  }else {
    a: {
      for(var b = 0;;) {
        if(Nc(a)) {
          a = b + Wb(a);
          break a
        }
        a = I(a);
        b += 1
      }
      a = g
    }
  }
  return a
}
var Tc = function() {
  function a(a, b, h) {
    return 0 === b ? B(O(a)) ? K(a) : h : Sc(a) ? E.l(a, b, h) : B(O(a)) ? c.call(k, I(a), b - 1) : h
  }
  function b(a, b) {
    if(0 === b) {
      if(B(O(a))) {
        return K(a)
      }
      e(Error("Index out of bounds"))
    }
    if(Sc(a)) {
      return E.f(a, b)
    }
    if(B(O(a))) {
      return c.call(k, I(a), b - 1)
    }
    e(Error("Index out of bounds"))
  }
  var c = k, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.f = b;
  c.l = a;
  return c
}(), Uc = function() {
  function a(a, b, c) {
    var i;
    i = a != k ? ((i = a.p & 16) ? i : a.yd) ? j : a.p ? o : C(Yb, a) : C(Yb, a);
    return i ? E.l(a, Math.floor(b), c) : Tc.l(a, Math.floor(b), c)
  }
  function b(a, b) {
    var c;
    c = a != k ? ((c = a.p & 16) ? c : a.yd) ? j : a.p ? o : C(Yb, a) : C(Yb, a);
    return c ? E.f(a, Math.floor(b)) : Tc.f(a, Math.floor(b))
  }
  var c = k, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.f = b;
  c.l = a;
  return c
}(), Vc = function() {
  function a(a, b, c) {
    return bc.l(a, b, c)
  }
  function b(a, b) {
    return bc.f(a, b)
  }
  var c = k, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.f = b;
  c.l = a;
  return c
}(), Wc = function() {
  var a = k, b = function() {
    function b(a, c, i, l) {
      var m = k;
      fa(l) && (m = H(Array.prototype.slice.call(arguments, 3)));
      return d.call(this, a, c, i, m)
    }
    function d(b, c, d, l) {
      for(;;) {
        if(b = a.call(k, b, c, d), B(l)) {
          c = K(l), d = K(I(l)), l = I(I(l))
        }else {
          return b
        }
      }
    }
    b.P = 3;
    b.s = function(a) {
      var b = K(a), c = K(I(a)), l = K(I(I(a))), a = L(I(I(a)));
      return d(b, c, l, a)
    };
    b.h = d;
    return b
  }(), a = function(a, d, f, h) {
    switch(arguments.length) {
      case 3:
        return cc(a, d, f);
      default:
        return b.h(a, d, f, M(arguments, 3))
    }
    e("Invalid arity: " + arguments.length)
  };
  a.P = 3;
  a.s = b.s;
  a.l = function(a, b, f) {
    return cc(a, b, f)
  };
  a.h = b.h;
  return a
}();
function Xc(a, b) {
  return nc(a, b)
}
function Yc(a) {
  var b;
  b = a != k ? ((b = a.p & 65536) ? b : a.ab) ? j : a.p ? o : C(lc, a) : C(lc, a);
  return b ? mc(a) : k
}
function Zc(a) {
  return rc(a)
}
function Nc(a) {
  if(a != k) {
    var b = a.p & 2, a = (b ? b : a.Ib) ? j : a.p ? o : C(Vb, a)
  }else {
    a = C(Vb, a)
  }
  return a
}
function Sc(a) {
  if(a != k) {
    var b = a.p & 16, a = (b ? b : a.yd) ? j : a.p ? o : C(Yb, a)
  }else {
    a = C(Yb, a)
  }
  return a
}
function $c(a) {
  if(a == k) {
    a = o
  }else {
    if(a != k) {
      var b = a.p & 512, a = (b ? b : a.oh) ? j : a.p ? o : C(dc, a)
    }else {
      a = C(dc, a)
    }
  }
  return a
}
function ad(a) {
  if(a != k) {
    var b = a.p & 8192, a = (b ? b : a.th) ? j : a.p ? o : C(jc, a)
  }else {
    a = C(jc, a)
  }
  return a
}
function bd(a, b, c, d, f) {
  for(;!(0 === f);) {
    c[d] = a[b];
    d += 1;
    f -= 1;
    b += 1
  }
}
function Hc(a, b) {
  return b != k && (b instanceof a || b.constructor === a || a === Object)
}
function cd(a) {
  return B(a) ? j : o
}
function dd(a) {
  var b = y.call(k, a);
  return B(b) ? "\ufdd0" === a.charAt(0) : b
}
function ed(a) {
  var b = y.call(k, a);
  return B(b) ? "\ufdd1" === a.charAt(0) : b
}
var gd = function() {
  function a(a, b, c) {
    for(c = O(c);;) {
      if(B(c)) {
        b = a.call(k, b, K(c));
        if(Hc(Ic, b)) {
          return kc(b)
        }
        c = I(c)
      }else {
        return b
      }
    }
  }
  function b(a, b) {
    var c = O(b);
    return B(c) ? fd.l(a, K(c), I(c)) : a.call(k)
  }
  var c = k, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.f = b;
  c.l = a;
  return c
}(), fd = function() {
  function a(a, b, c) {
    var i;
    i = c != k ? ((i = c.p & 262144) ? i : c.Re) ? j : c.p ? o : C(oc, c) : C(oc, c);
    return i ? pc.l(c, a, b) : gd.l(a, b, c)
  }
  function b(a, b) {
    var c;
    c = b != k ? ((c = b.p & 262144) ? c : b.Re) ? j : b.p ? o : C(oc, b) : C(oc, b);
    return c ? pc.f(b, a) : gd.f(a, b)
  }
  var c = k, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.f = b;
  c.l = a;
  return c
}();
function Ic(a) {
  this.F = a;
  this.Ga = 0;
  this.p = 16384
}
Ic.prototype.mh = p("F");
function hd(a) {
  for(var b = 0;;) {
    if(0 === a) {
      return b
    }
    a &= a - 1;
    b += 1
  }
}
var id = function() {
  function a(a) {
    return a == k ? "" : a.toString()
  }
  var b = k, c = function() {
    function a(b, d) {
      var l = k;
      fa(d) && (l = H(Array.prototype.slice.call(arguments, 1)));
      return c.call(this, b, l)
    }
    function c(a, d) {
      return function(a, c) {
        for(;;) {
          if(B(c)) {
            var d = a.append(b.call(k, K(c))), f = I(c), a = d, c = f
          }else {
            return b.call(k, a)
          }
        }
      }.call(k, new Rb(b.call(k, a)), d)
    }
    a.P = 1;
    a.s = function(a) {
      var b = K(a), a = L(a);
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
        return c.h(b, M(arguments, 1))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.P = 1;
  b.s = c.s;
  b.bj = s("");
  b.N = a;
  b.h = c.h;
  return b
}(), P = function() {
  function a(a) {
    return ed(a) ? a.substring(2, a.length) : dd(a) ? id.h(":", M([a.substring(2, a.length)], 0)) : a == k ? "" : a.toString()
  }
  var b = k, c = function() {
    function a(b, d) {
      var l = k;
      fa(d) && (l = H(Array.prototype.slice.call(arguments, 1)));
      return c.call(this, b, l)
    }
    function c(a, d) {
      return function(a, c) {
        for(;;) {
          if(B(c)) {
            var d = a.append(b.call(k, K(c))), f = I(c), a = d, c = f
          }else {
            return id.N(a)
          }
        }
      }.call(k, new Rb(b.call(k, a)), d)
    }
    a.P = 1;
    a.s = function(a) {
      var b = K(a), a = L(a);
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
        return c.h(b, M(arguments, 1))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.P = 1;
  b.s = c.s;
  b.bj = s("");
  b.N = a;
  b.h = c.h;
  return b
}(), jd = function() {
  var a = k, a = function(a, c, d) {
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
  a.l = function(a, c, d) {
    return a.substring(c, d)
  };
  return a
}();
function Oc(a, b) {
  var c;
  c = b != k ? ((c = b.p & 8388608) ? c : b.Jb) ? j : b.p ? o : C(tc, b) : C(tc, b);
  if(c) {
    a: {
      c = O(a);
      for(var d = O(b);;) {
        if(c == k) {
          c = d == k;
          break a
        }
        if(d != k && Dc.f(K(c), K(d))) {
          c = I(c), d = I(d)
        }else {
          c = o;
          break a
        }
      }
      c = g
    }
  }else {
    c = k
  }
  return cd(c)
}
function Lc(a) {
  return fd.l(function(a, c) {
    var d = rc(c);
    return a ^ d + 2654435769 + (a << 6) + (a >> 2)
  }, Zc(K(a)), I(a))
}
function kd(a) {
  for(var b = 0, a = O(a);;) {
    if(B(a)) {
      var c = K(a), b = (b + (Zc(fc(c)) ^ Zc(gc(c)))) % 4503599627370496, a = I(a)
    }else {
      return b
    }
  }
}
function ld(a, b, c, d, f) {
  this.H = a;
  this.le = b;
  this.Ce = c;
  this.pc = d;
  this.v = f;
  this.Ga = 0;
  this.p = 32706670
}
t = ld.prototype;
t.$a = function(a) {
  var b = this.v;
  return b != k ? b : this.v = a = Lc(a)
};
t.Jb = j;
t.hb = function(a, b) {
  return new ld(this.H, b, a, this.pc + 1, k)
};
t.Qe = j;
t.toString = function() {
  return Mc.h(M([this], 0))
};
t.eb = aa();
t.Ib = j;
t.xb = p("pc");
t.$d = p("le");
t.ae = function(a) {
  return G(a)
};
t.yb = j;
t.nc = p("le");
t.oc = p("Ce");
t.Fa = function(a, b) {
  return Oc(a, b)
};
t.ib = function(a, b) {
  return new ld(b, this.le, this.Ce, this.pc, this.v)
};
t.ab = j;
t.bb = p("H");
function md(a) {
  this.H = a;
  this.Ga = 0;
  this.p = 32706638
}
t = md.prototype;
t.$a = s(0);
t.Jb = j;
t.hb = function(a, b) {
  return new ld(this.H, b, k, 1, k)
};
t.toString = function() {
  return Mc.h(M([this], 0))
};
t.eb = s(k);
t.Ib = j;
t.xb = s(0);
t.$d = s(k);
t.ae = s(k);
t.yb = j;
t.nc = s(k);
t.oc = s(k);
t.Fa = function(a, b) {
  return Oc(a, b)
};
t.ib = function(a, b) {
  return new md(b)
};
t.ab = j;
t.bb = p("H");
var Pc = new md(k), Gc = function() {
  function a(a) {
    var d = k;
    fa(a) && (d = H(Array.prototype.slice.call(arguments, 0)));
    return b.call(this, d)
  }
  function b(a) {
    return fd.l(Qc, Pc, fd.l(Qc, Pc, a))
  }
  a.P = 0;
  a.s = function(a) {
    a = O(a);
    return b(a)
  };
  a.h = b;
  return a
}();
function nd(a, b, c, d) {
  this.H = a;
  this.le = b;
  this.Ce = c;
  this.v = d;
  this.Ga = 0;
  this.p = 32702572
}
t = nd.prototype;
t.$a = function(a) {
  var b = this.v;
  return b != k ? b : this.v = a = Lc(a)
};
t.Jb = j;
t.hb = function(a, b) {
  return new nd(k, b, a, this.v)
};
t.Qe = j;
t.toString = function() {
  return Mc.h(M([this], 0))
};
t.eb = aa();
t.yb = j;
t.nc = p("le");
t.oc = function() {
  return this.Ce == k ? Pc : this.Ce
};
t.Fa = function(a, b) {
  return Oc(a, b)
};
t.ib = function(a, b) {
  return new nd(b, this.le, this.Ce, this.v)
};
t.ab = j;
t.bb = p("H");
function N(a, b) {
  var c = b == k;
  c || (c = b != k ? ((c = b.p & 64) ? c : b.yb) ? j : b.p ? o : C($b, b) : C($b, b));
  return c ? new nd(k, a, b, k) : new nd(k, a, O(b), k)
}
oc.string = j;
pc.string = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return Jc.f(a, b);
      case 3:
        return Jc.l(a, b, c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
bc.string = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return E.f(a, b);
      case 3:
        return E.l(a, b, c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
Yb.string = j;
E.string = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return b < Wb(a) ? a.charAt(b) : k;
      case 3:
        return b < Wb(a) ? a.charAt(b) : c
    }
    e("Invalid arity: " + arguments.length)
  }
}();
Vb.string = j;
Wb.string = function(a) {
  return a.length
};
sc.string = function(a) {
  return M(a, 0)
};
rc.string = function(a) {
  return Ua.call(k, a)
};
String.prototype.call = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return Vc.f(b, this.toString());
      case 3:
        return Vc.l(b, this.toString(), c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
String.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(Tb(b)))
};
String.prototype.apply = function(a, b) {
  return 2 > Rc(b) ? Vc.f(b[0], a) : Vc.l(b[0], a, b[1])
};
function od(a) {
  var b = a.x;
  if(B(a.ni)) {
    return b
  }
  a.x = b.call(k);
  a.ni = j;
  return a.x
}
function pd(a, b, c, d) {
  this.H = a;
  this.ni = b;
  this.x = c;
  this.v = d;
  this.Ga = 0;
  this.p = 15925324
}
t = pd.prototype;
t.$a = function(a) {
  var b = this.v;
  return b != k ? b : this.v = a = Lc(a)
};
t.Jb = j;
t.hb = function(a, b) {
  return N(b, a)
};
t.toString = function() {
  return Mc.h(M([this], 0))
};
t.eb = function(a) {
  return O(od(a))
};
t.yb = j;
t.nc = function(a) {
  return K(od(a))
};
t.oc = function(a) {
  return L(od(a))
};
t.Fa = function(a, b) {
  return Oc(a, b)
};
t.ib = function(a, b) {
  return new pd(b, this.ni, this.x, this.v)
};
t.ab = j;
t.bb = p("H");
function qd(a) {
  for(var b = [];;) {
    if(B(O(a))) {
      b.push(K(a)), a = I(a)
    }else {
      return b
    }
  }
}
function rd(a, b) {
  if(Nc(a)) {
    return Rc(a)
  }
  for(var c = a, d = b, f = 0;;) {
    var h;
    h = (h = 0 < d) ? O(c) : h;
    if(B(h)) {
      c = I(c), d -= 1, f += 1
    }else {
      return f
    }
  }
}
var td = function sd(b) {
  return b == k ? k : I(b) == k ? O(K(b)) : N(K(b), sd.call(k, I(b)))
}, ud = function() {
  function a(a, b) {
    return new pd(k, o, function() {
      var c = O(a);
      return B(c) ? N(K(c), d.call(k, L(c), b)) : b
    })
  }
  function b(a) {
    return new pd(k, o, function() {
      return a
    })
  }
  function c() {
    return new pd(k, o, s(k))
  }
  var d = k, f = function() {
    function a(c, d, f) {
      var h = k;
      fa(f) && (h = H(Array.prototype.slice.call(arguments, 2)));
      return b.call(this, c, d, h)
    }
    function b(a, c, f) {
      return function r(a, b) {
        return new pd(k, o, function() {
          var c = O(a);
          return B(c) ? N(K(c), r.call(k, L(c), b)) : B(b) ? r.call(k, K(b), I(b)) : k
        })
      }.call(k, d.call(k, a, c), f)
    }
    a.P = 2;
    a.s = function(a) {
      var c = K(a), d = K(I(a)), a = L(I(a));
      return b(c, d, a)
    };
    a.h = b;
    return a
  }(), d = function(d, i, l) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, i);
      default:
        return f.h(d, i, M(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  d.P = 2;
  d.s = f.s;
  d.bj = c;
  d.N = b;
  d.f = a;
  d.h = f.h;
  return d
}(), vd = function() {
  function a(a, b, c, d) {
    return N(a, N(b, N(c, d)))
  }
  function b(a, b, c) {
    return N(a, N(b, c))
  }
  var c = k, d = function() {
    function a(c, d, f, n, q) {
      var r = k;
      fa(q) && (r = H(Array.prototype.slice.call(arguments, 4)));
      return b.call(this, c, d, f, n, r)
    }
    function b(a, c, d, f, h) {
      return N(a, N(c, N(d, N(f, td(h)))))
    }
    a.P = 4;
    a.s = function(a) {
      var c = K(a), d = K(I(a)), f = K(I(I(a))), q = K(I(I(I(a)))), a = L(I(I(I(a))));
      return b(c, d, f, q, a)
    };
    a.h = b;
    return a
  }(), c = function(c, h, i, l, m) {
    switch(arguments.length) {
      case 1:
        return O(c);
      case 2:
        return N(c, h);
      case 3:
        return b.call(this, c, h, i);
      case 4:
        return a.call(this, c, h, i, l);
      default:
        return d.h(c, h, i, l, M(arguments, 4))
    }
    e("Invalid arity: " + arguments.length)
  };
  c.P = 4;
  c.s = d.s;
  c.N = function(a) {
    return O(a)
  };
  c.f = function(a, b) {
    return N(a, b)
  };
  c.l = b;
  c.ta = a;
  c.h = d.h;
  return c
}();
function wd(a) {
  return yc(a)
}
function xd(a) {
  return Ac(a)
}
function yd(a, b, c) {
  var d = O(c);
  if(0 === b) {
    return a.call(k)
  }
  var c = ac(d), f = G(d);
  if(1 === b) {
    return a.N ? a.N(c) : a.call(k, c)
  }
  var d = ac(f), h = G(f);
  if(2 === b) {
    return a.f ? a.f(c, d) : a.call(k, c, d)
  }
  var f = ac(h), i = G(h);
  if(3 === b) {
    return a.l ? a.l(c, d, f) : a.call(k, c, d, f)
  }
  var h = ac(i), l = G(i);
  if(4 === b) {
    return a.ta ? a.ta(c, d, f, h) : a.call(k, c, d, f, h)
  }
  i = ac(l);
  l = G(l);
  if(5 === b) {
    return a.Qf ? a.Qf(c, d, f, h, i) : a.call(k, c, d, f, h, i)
  }
  var a = ac(l), m = G(l);
  if(6 === b) {
    return a.be ? a.be(c, d, f, h, i, a) : a.call(k, c, d, f, h, i, a)
  }
  var l = ac(m), n = G(m);
  if(7 === b) {
    return a.uh ? a.uh(c, d, f, h, i, a, l) : a.call(k, c, d, f, h, i, a, l)
  }
  var m = ac(n), q = G(n);
  if(8 === b) {
    return a.jl ? a.jl(c, d, f, h, i, a, l, m) : a.call(k, c, d, f, h, i, a, l, m)
  }
  var n = ac(q), r = G(q);
  if(9 === b) {
    return a.kl ? a.kl(c, d, f, h, i, a, l, m, n) : a.call(k, c, d, f, h, i, a, l, m, n)
  }
  var q = ac(r), x = G(r);
  if(10 === b) {
    return a.Zk ? a.Zk(c, d, f, h, i, a, l, m, n, q) : a.call(k, c, d, f, h, i, a, l, m, n, q)
  }
  var r = ac(x), v = G(x);
  if(11 === b) {
    return a.$k ? a.$k(c, d, f, h, i, a, l, m, n, q, r) : a.call(k, c, d, f, h, i, a, l, m, n, q, r)
  }
  var x = ac(v), F = G(v);
  if(12 === b) {
    return a.al ? a.al(c, d, f, h, i, a, l, m, n, q, r, x) : a.call(k, c, d, f, h, i, a, l, m, n, q, r, x)
  }
  var v = ac(F), qa = G(F);
  if(13 === b) {
    return a.bl ? a.bl(c, d, f, h, i, a, l, m, n, q, r, x, v) : a.call(k, c, d, f, h, i, a, l, m, n, q, r, x, v)
  }
  var F = ac(qa), ga = G(qa);
  if(14 === b) {
    return a.cl ? a.cl(c, d, f, h, i, a, l, m, n, q, r, x, v, F) : a.call(k, c, d, f, h, i, a, l, m, n, q, r, x, v, F)
  }
  var qa = ac(ga), W = G(ga);
  if(15 === b) {
    return a.dl ? a.dl(c, d, f, h, i, a, l, m, n, q, r, x, v, F, qa) : a.call(k, c, d, f, h, i, a, l, m, n, q, r, x, v, F, qa)
  }
  var ga = ac(W), Sa = G(W);
  if(16 === b) {
    return a.el ? a.el(c, d, f, h, i, a, l, m, n, q, r, x, v, F, qa, ga) : a.call(k, c, d, f, h, i, a, l, m, n, q, r, x, v, F, qa, ga)
  }
  var W = ac(Sa), hb = G(Sa);
  if(17 === b) {
    return a.fl ? a.fl(c, d, f, h, i, a, l, m, n, q, r, x, v, F, qa, ga, W) : a.call(k, c, d, f, h, i, a, l, m, n, q, r, x, v, F, qa, ga, W)
  }
  var Sa = ac(hb), J = G(hb);
  if(18 === b) {
    return a.gl ? a.gl(c, d, f, h, i, a, l, m, n, q, r, x, v, F, qa, ga, W, Sa) : a.call(k, c, d, f, h, i, a, l, m, n, q, r, x, v, F, qa, ga, W, Sa)
  }
  hb = ac(J);
  J = G(J);
  if(19 === b) {
    return a.hl ? a.hl(c, d, f, h, i, a, l, m, n, q, r, x, v, F, qa, ga, W, Sa, hb) : a.call(k, c, d, f, h, i, a, l, m, n, q, r, x, v, F, qa, ga, W, Sa, hb)
  }
  var wl = ac(J);
  G(J);
  if(20 === b) {
    return a.il ? a.il(c, d, f, h, i, a, l, m, n, q, r, x, v, F, qa, ga, W, Sa, hb, wl) : a.call(k, c, d, f, h, i, a, l, m, n, q, r, x, v, F, qa, ga, W, Sa, hb, wl)
  }
  e(Error("Only up to 20 arguments supported on functions"))
}
var zd = function() {
  function a(a, b, c, d, f) {
    b = vd.ta(b, c, d, f);
    c = a.P;
    return B(a.s) ? (d = rd(b, c + 1), d <= c ? yd(a, d, b) : a.s(b)) : a.apply(a, qd(b))
  }
  function b(a, b, c, d) {
    b = vd.l(b, c, d);
    c = a.P;
    return B(a.s) ? (d = rd(b, c + 1), d <= c ? yd(a, d, b) : a.s(b)) : a.apply(a, qd(b))
  }
  function c(a, b, c) {
    b = vd.f(b, c);
    c = a.P;
    if(B(a.s)) {
      var d = rd(b, c + 1);
      return d <= c ? yd(a, d, b) : a.s(b)
    }
    return a.apply(a, qd(b))
  }
  function d(a, b) {
    var c = a.P;
    if(B(a.s)) {
      var d = rd(b, c + 1);
      return d <= c ? yd(a, d, b) : a.s(b)
    }
    return a.apply(a, qd(b))
  }
  var f = k, h = function() {
    function a(c, d, f, h, i, v) {
      var F = k;
      fa(v) && (F = H(Array.prototype.slice.call(arguments, 5)));
      return b.call(this, c, d, f, h, i, F)
    }
    function b(a, c, d, f, h, i) {
      c = N(c, N(d, N(f, N(h, td(i)))));
      d = a.P;
      return B(a.s) ? (f = rd(c, d + 1), f <= d ? yd(a, f, c) : a.s(c)) : a.apply(a, qd(c))
    }
    a.P = 5;
    a.s = function(a) {
      var c = K(a), d = K(I(a)), f = K(I(I(a))), h = K(I(I(I(a)))), i = K(I(I(I(I(a))))), a = L(I(I(I(I(a)))));
      return b(c, d, f, h, i, a)
    };
    a.h = b;
    return a
  }(), f = function(f, l, m, n, q, r) {
    switch(arguments.length) {
      case 2:
        return d.call(this, f, l);
      case 3:
        return c.call(this, f, l, m);
      case 4:
        return b.call(this, f, l, m, n);
      case 5:
        return a.call(this, f, l, m, n, q);
      default:
        return h.h(f, l, m, n, q, M(arguments, 5))
    }
    e("Invalid arity: " + arguments.length)
  };
  f.P = 5;
  f.s = h.s;
  f.f = d;
  f.l = c;
  f.ta = b;
  f.Qf = a;
  f.h = h.h;
  return f
}();
function Ad(a, b) {
  for(;;) {
    if(O(b) == k) {
      return j
    }
    if(B(a.call(k, K(b)))) {
      var c = a, d = I(b), a = c, b = d
    }else {
      return o
    }
  }
}
function Bd(a) {
  return a
}
var Cd = function() {
  function a(a, b, c, f) {
    return new pd(k, o, function() {
      var n = O(b), q = O(c), r = O(f);
      return B(B(n) ? B(q) ? r : q : n) ? N(a.call(k, K(n), K(q), K(r)), d.call(k, a, L(n), L(q), L(r))) : k
    })
  }
  function b(a, b, c) {
    return new pd(k, o, function() {
      var f = O(b), n = O(c);
      return B(B(f) ? n : f) ? N(a.call(k, K(f), K(n)), d.call(k, a, L(f), L(n))) : k
    })
  }
  function c(a, b) {
    return new pd(k, o, function() {
      var c = O(b);
      return B(c) ? N(a.call(k, K(c)), d.call(k, a, L(c))) : k
    })
  }
  var d = k, f = function() {
    function a(c, d, f, h, r) {
      var x = k;
      fa(r) && (x = H(Array.prototype.slice.call(arguments, 4)));
      return b.call(this, c, d, f, h, x)
    }
    function b(a, c, f, h, i) {
      return d.call(k, function(b) {
        return zd.f(a, b)
      }, function v(a) {
        return new pd(k, o, function() {
          var b = d.call(k, O, a);
          return Ad(Bd, b) ? N(d.call(k, K, b), v.call(k, d.call(k, L, b))) : k
        })
      }.call(k, Qc.h(i, h, M([f, c], 0))))
    }
    a.P = 4;
    a.s = function(a) {
      var c = K(a), d = K(I(a)), f = K(I(I(a))), h = K(I(I(I(a)))), a = L(I(I(I(a))));
      return b(c, d, f, h, a)
    };
    a.h = b;
    return a
  }(), d = function(d, i, l, m, n) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, i);
      case 3:
        return b.call(this, d, i, l);
      case 4:
        return a.call(this, d, i, l, m);
      default:
        return f.h(d, i, l, m, M(arguments, 4))
    }
    e("Invalid arity: " + arguments.length)
  };
  d.P = 4;
  d.s = f.s;
  d.f = c;
  d.l = b;
  d.ta = a;
  d.h = f.h;
  return d
}(), Ed = function Dd(b, c) {
  return new pd(k, o, function() {
    if(0 < b) {
      var d = O(c);
      return B(d) ? N(K(d), Dd.call(k, b - 1, L(d))) : k
    }
    return k
  })
};
function Fd(a) {
  function b(a, b) {
    for(;;) {
      var f = O(b), h = 0 < a;
      if(B(h ? f : h)) {
        h = a - 1, f = L(f), a = h, b = f
      }else {
        return f
      }
    }
  }
  return new pd(k, o, function() {
    return b.call(k, 1, a)
  })
}
var Gd = function() {
  function a(a, b) {
    return Ed(a, c.call(k, b))
  }
  function b(a) {
    return new pd(k, o, function() {
      return N(a, c.call(k, a))
    })
  }
  var c = k, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.N = b;
  c.f = a;
  return c
}(), Hd = function() {
  function a(a, c) {
    return new pd(k, o, function() {
      var h = O(a), i = O(c);
      return B(B(h) ? i : h) ? N(K(h), N(K(i), b.call(k, L(h), L(i)))) : k
    })
  }
  var b = k, c = function() {
    function a(b, d, l) {
      var m = k;
      fa(l) && (m = H(Array.prototype.slice.call(arguments, 2)));
      return c.call(this, b, d, m)
    }
    function c(a, d, f) {
      return new pd(k, o, function() {
        var c = Cd.f(O, Qc.h(f, d, M([a], 0)));
        return Ad(Bd, c) ? ud.f(Cd.f(K, c), zd.f(b, Cd.f(L, c))) : k
      })
    }
    a.P = 2;
    a.s = function(a) {
      var b = K(a), d = K(I(a)), a = L(I(a));
      return c(b, d, a)
    };
    a.h = c;
    return a
  }(), b = function(b, f, h) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, f);
      default:
        return c.h(b, f, M(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.P = 2;
  b.s = c.s;
  b.f = a;
  b.h = c.h;
  return b
}();
function Id(a, b) {
  return Fd(Hd.f(Gd.N(a), b))
}
function Jd(a) {
  return function c(a, f) {
    return new pd(k, o, function() {
      var h = O(a);
      return B(h) ? N(K(h), c.call(k, L(h), f)) : B(O(f)) ? c.call(k, K(f), L(f)) : k
    })
  }.call(k, k, a)
}
function Kd(a, b) {
  var c;
  c = a != k ? ((c = a.p & 2147483648) ? c : a.nh) ? j : a.p ? o : C(xc, a) : C(xc, a);
  return c ? xd(fd.l(zc, yc(a), b)) : fd.l(Xb, a, b)
}
var Md = function() {
  function a(a, b, c, d) {
    return Kd(Ld([]), Cd.ta(a, b, c, d))
  }
  function b(a, b, c) {
    return Kd(Ld([]), Cd.l(a, b, c))
  }
  function c(a, b) {
    return xd(fd.l(function(b, c) {
      var d = a.call(k, c);
      return zc(b, d)
    }, wd(Ld([])), b))
  }
  var d = k, f = function() {
    function a(c, d, f, h, r) {
      var x = k;
      fa(r) && (x = H(Array.prototype.slice.call(arguments, 4)));
      return b.call(this, c, d, f, h, x)
    }
    function b(a, c, d, f, h) {
      return Kd(Ld([]), zd.h(Cd, a, c, d, f, M([h], 0)))
    }
    a.P = 4;
    a.s = function(a) {
      var c = K(a), d = K(I(a)), f = K(I(I(a))), h = K(I(I(I(a)))), a = L(I(I(I(a))));
      return b(c, d, f, h, a)
    };
    a.h = b;
    return a
  }(), d = function(d, i, l, m, n) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, i);
      case 3:
        return b.call(this, d, i, l);
      case 4:
        return a.call(this, d, i, l, m);
      default:
        return f.h(d, i, l, m, M(arguments, 4))
    }
    e("Invalid arity: " + arguments.length)
  };
  d.P = 4;
  d.s = f.s;
  d.f = c;
  d.l = b;
  d.ta = a;
  d.h = f.h;
  return d
}();
function Nd(a, b) {
  this.R = a;
  this.g = b
}
function Od(a) {
  return new Nd(a.R, Tb(a.g))
}
function Pd(a) {
  a = a.j;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function Qd(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new Nd(a, Ub.N(32));
    d.g[0] = c;
    c = d;
    b -= 5
  }
}
var Sd = function Rd(b, c, d, f) {
  var h = Od(d), i = b.j - 1 >>> c & 31;
  5 === c ? h.g[i] = f : (d = d.g[i], b = B(d) ? Rd.call(k, b, c - 5, d, f) : Qd(k, c - 5, f), h.g[i] = b);
  return h
};
function Td(a, b) {
  var c = 0 <= b;
  if(c ? b < a.j : c) {
    if(b >= Pd(a)) {
      return a.nb
    }
    for(var c = a.root, d = a.shift;;) {
      if(0 < d) {
        var f = d - 5, c = c.g[b >>> d & 31], d = f
      }else {
        return c.g
      }
    }
  }else {
    e(Error([P("No item "), P(b), P(" in vector of length "), P(a.j)].join("")))
  }
}
var Vd = function Ud(b, c, d, f, h) {
  var i = Od(d);
  if(0 === c) {
    i.g[f & 31] = h
  }else {
    var l = f >>> c & 31, b = Ud.call(k, b, c - 5, d.g[l], f, h);
    i.g[l] = b
  }
  return i
}, Xd = function Wd(b, c, d) {
  var f = b.j - 2 >>> c & 31;
  if(5 < c) {
    b = Wd.call(k, b, c - 5, d.g[f]);
    if((c = b == k) ? 0 === f : c) {
      return k
    }
    d = Od(d);
    d.g[f] = b;
    return d
  }
  if(0 === f) {
    return k
  }
  d = Od(d);
  d.g[f] = k;
  return d
}, ae = function Yd(b, c) {
  var d = Wb(b);
  if(0 < d) {
    if(g === Sb) {
      Sb = function(b, c, d, l, m) {
        this.Ui = b;
        this.Lc = c;
        this.Gi = d;
        this.Ik = l;
        this.Lk = m;
        this.Ga = 0;
        this.p = 282263648
      }, Sb.ml = j, Sb.ll = function() {
        return Gc.h(M(["cljs.core.t104746"], 0))
      }, Sb.prototype.eb = aa(), Sb.prototype.yb = j, Sb.prototype.nc = function() {
        return E.f(this.Gi, this.Lc)
      }, Sb.prototype.oc = function() {
        var b = this.Lc + 1;
        return b < this.Ui ? this.Ik.call(k, this.Gi, b) : Pc
      }, Sb.prototype.Qe = j, Sb.prototype.Fa = function(b, c) {
        return Oc(b, c)
      }, Sb.prototype.Jb = j, Sb.prototype.cb = j, Sb.prototype.Ta = function(b, c) {
        return Zd($d, "(", " ", ")", c, b)
      }, Sb.prototype.ab = j, Sb.prototype.bb = p("Lk"), Sb.prototype.ib = function(b, c) {
        return new Sb(this.Ui, this.Lc, this.Gi, this.Ik, c)
      }
    }
    return new Sb(d, c, b, Yd, k)
  }
  return k
};
function be(a, b, c, d, f, h) {
  this.H = a;
  this.j = b;
  this.shift = c;
  this.root = d;
  this.nb = f;
  this.v = h;
  this.Ga = 0;
  this.p = 2164209055
}
t = be.prototype;
t.nh = j;
t.Nf = function() {
  var a = this.j, b = this.shift, c = new Nd({}, Tb(this.root.g)), d = this.nb, f = Ub.N(32);
  bd(d, 0, f, 0, d.length);
  return new ce(a, b, c, f)
};
t.$a = function(a) {
  var b = this.v;
  return b != k ? b : this.v = a = Lc(a)
};
t.Cc = function(a, b) {
  return E.l(a, b, k)
};
t.Dc = function(a, b, c) {
  return E.l(a, b, c)
};
t.xd = function(a, b, c) {
  var d = 0 <= b;
  if(d ? b < this.j : d) {
    return Pd(a) <= b ? (a = Tb(this.nb), a[b & 31] = c, new be(this.H, this.j, this.shift, this.root, a, k)) : new be(this.H, this.j, this.shift, Vd(a, this.shift, this.root, b, c), this.nb, k)
  }
  if(b === this.j) {
    return Xb(a, c)
  }
  e(Error([P("Index "), P(b), P(" out of bounds  [0,"), P(this.j), P("]")].join("")))
};
t.call = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return bc.f(this, b);
      case 3:
        return bc.l(this, b, c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
t.apply = function(a, b) {
  return a.call.apply(a, [a].concat(Tb(b)))
};
t.Jb = j;
t.hb = function(a, b) {
  if(32 > this.j - Pd(a)) {
    var c = Tb(this.nb);
    c.push(b);
    return new be(this.H, this.j + 1, this.shift, this.root, c, k)
  }
  var d = this.j >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  if(d) {
    d = new Nd(k, Ub.N(32));
    d.g[0] = this.root;
    var f = Qd(k, this.shift, new Nd(k, this.nb));
    d.g[1] = f
  }else {
    d = Sd(a, this.shift, this.root, new Nd(k, this.nb))
  }
  return new be(this.H, this.j + 1, c, d, [b], k)
};
t.ph = j;
t.Of = function(a) {
  return E.f(a, 0)
};
t.Pf = function(a) {
  return E.f(a, 1)
};
t.toString = function() {
  return Mc.h(M([this], 0))
};
t.Re = j;
t.Se = function(a, b) {
  return Jc.f(a, b)
};
t.Te = function(a, b, c) {
  return Jc.l(a, b, c)
};
t.eb = function(a) {
  return ae(a, 0)
};
t.Ib = j;
t.xb = p("j");
t.$d = function(a) {
  return 0 < this.j ? E.f(a, this.j - 1) : k
};
t.ae = function(a) {
  0 === this.j && e(Error("Can't pop empty vector"));
  if(1 === this.j) {
    return nc(de, this.H)
  }
  if(1 < this.j - Pd(a)) {
    return new be(this.H, this.j - 1, this.shift, this.root, this.nb.slice(0, -1), k)
  }
  var b = Td(a, this.j - 2), a = Xd(a, this.shift, this.root), a = a == k ? ee : a, c = this.j - 1, d = 5 < this.shift;
  return(d ? a.g[1] == k : d) ? new be(this.H, c, this.shift - 5, a.g[0], b, k) : new be(this.H, c, this.shift, a, b, k)
};
t.th = j;
t.Fa = function(a, b) {
  return Oc(a, b)
};
t.ib = function(a, b) {
  return new be(b, this.j, this.shift, this.root, this.nb, this.v)
};
t.ab = j;
t.bb = p("H");
t.yd = j;
t.Yd = function(a, b) {
  return Td(a, b)[b & 31]
};
t.Zd = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.j : d) ? E.f(a, b) : c
};
var ee = new Nd(k, Ub.N(32)), de = new be(k, 0, 5, ee, [], 0);
function Ld(a) {
  for(var b = O(a), c = yc(de);;) {
    if(B(b)) {
      a = I(b), b = K(b), c = zc(c, b), b = a
    }else {
      return Ac(c)
    }
  }
}
var fe = function() {
  function a(a) {
    var c = k;
    fa(a) && (c = H(Array.prototype.slice.call(arguments, 0)));
    return fd.l(Qc, de, c)
  }
  a.P = 0;
  a.s = function(a) {
    a = O(a);
    return fd.l(Qc, de, a)
  };
  a.h = function(a) {
    return fd.l(Qc, de, a)
  };
  return a
}(), he = function ge(b, c, d, f) {
  var d = b.root.R === d.R ? d : new Nd(b.root.R, Tb(d.g)), h = b.j - 1 >>> c & 31;
  if(5 === c) {
    b = f
  }else {
    var i = d.g[h], b = i != k ? ge.call(k, b, c - 5, i, f) : Qd(b.root.R, c - 5, f)
  }
  d.g[h] = b;
  return d
};
function ce(a, b, c, d) {
  this.j = a;
  this.shift = b;
  this.root = c;
  this.nb = d;
  this.p = 147;
  this.Ga = 11
}
t = ce.prototype;
t.call = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return bc.f(this, b);
      case 3:
        return bc.l(this, b, c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
t.apply = function(a, b) {
  return a.call.apply(a, [a].concat(Tb(b)))
};
t.Cc = function(a, b) {
  return E.l(a, b, k)
};
t.Dc = function(a, b, c) {
  return E.l(a, b, c)
};
t.yd = j;
t.Yd = function(a, b) {
  if(B(this.root.R)) {
    return Td(a, b)[b & 31]
  }
  e(Error("nth after persistent!"))
};
t.Zd = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.j : d) ? E.f(a, b) : c
};
t.Ib = j;
t.xb = function() {
  if(B(this.root.R)) {
    return this.j
  }
  e(Error("count after persistent!"))
};
t.$i = function(a, b, c) {
  var d = this;
  if(B(d.root.R)) {
    if(function() {
      var a = 0 <= b;
      return a ? b < d.j : a
    }()) {
      if(Pd(a) <= b) {
        d.nb[b & 31] = c
      }else {
        var f = function i(a, f) {
          var n = d.root.R === f.R ? f : new Nd(d.root.R, Tb(f.g));
          if(0 === a) {
            n.g[b & 31] = c
          }else {
            var q = b >>> a & 31, r = i.call(k, a - 5, n.g[q]);
            n.g[q] = r
          }
          return n
        }.call(k, d.shift, d.root);
        d.root = f
      }
      return a
    }
    if(b === d.j) {
      return zc(a, c)
    }
    e(Error([P("Index "), P(b), P(" out of bounds for TransientVector of length"), P(d.j)].join("")))
  }
  e(Error("assoc! after persistent!"))
};
t.qh = function(a, b, c) {
  return Cc(a, b, c)
};
t.rh = function(a, b) {
  if(B(this.root.R)) {
    if(32 > this.j - Pd(a)) {
      this.nb[this.j & 31] = b
    }else {
      var c = new Nd(this.root.R, this.nb), d = Ub.N(32);
      d[0] = b;
      this.nb = d;
      if(this.j >>> 5 > 1 << this.shift) {
        var d = Ub.N(32), f = this.shift + 5;
        d[0] = this.root;
        d[1] = Qd(this.root.R, this.shift, c);
        this.root = new Nd(this.root.R, d);
        this.shift = f
      }else {
        this.root = he(a, this.shift, this.root, c)
      }
    }
    this.j += 1;
    return a
  }
  e(Error("conj! after persistent!"))
};
t.sh = function(a) {
  if(B(this.root.R)) {
    this.root.R = k;
    var a = this.j - Pd(a), b = Ub.N(a);
    bd(this.nb, 0, b, 0, a);
    return new be(k, this.j, this.shift, this.root, b, k)
  }
  e(Error("persistent! called twice"))
};
Ld([]);
function ie() {
  this.Ga = 0;
  this.p = 1048576
}
ie.prototype.Fa = s(o);
var je = new ie;
function ke(a, b) {
  return cd($c(b) ? Rc(a) === Rc(b) ? Ad(Bd, Cd.f(function(a) {
    return Dc.f(Vc.l(b, K(a), je), K(I(a)))
  }, a)) : k : k)
}
var le = function() {
  function a(a, b, c, i) {
    var l = y.call(k, a);
    return B(B(l) ? b.hasOwnProperty(a) : l) ? c : i
  }
  function b(a, b) {
    return c.call(k, a, b, j, o)
  }
  var c = k, c = function(c, f, h, i) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 4:
        return a.call(this, c, f, h, i)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.f = b;
  c.ta = a;
  return c
}();
function me(a, b) {
  var c = rc(a), d = rc(b);
  return c < d ? -1 : c > d ? 1 : 0
}
function ne(a, b, c, d, f) {
  this.H = a;
  this.keys = b;
  this.pd = c;
  this.Tg = d;
  this.v = f;
  this.Ga = 0;
  this.p = 2155021199
}
t = ne.prototype;
t.nh = j;
t.Nf = function(a) {
  return wd(Kd(Fc(), a))
};
t.$a = function(a) {
  var b = this.v;
  return b != k ? b : this.v = a = kd(a)
};
t.Cc = function(a, b) {
  return bc.l(a, b, k)
};
t.Dc = function(a, b, c) {
  return le.ta(b, this.pd, this.pd[b], c)
};
t.xd = function(a, b, c) {
  if(B(y.call(k, b))) {
    if(B(this.pd.hasOwnProperty(b))) {
      var d = Cb.call(k, this.pd);
      d[b] = c;
      return new ne(this.H, this.keys, d, this.Tg + 1, k)
    }
    if(this.Tg < oe) {
      var d = Cb.call(k, this.pd), f = Tb(this.keys);
      d[b] = c;
      f.push(b);
      return new ne(this.H, f, d, this.Tg + 1, k)
    }
  }
  a: {
    for(var f = a.keys, h = f.length, i = a.pd, l = Xc(pe, Yc(a)), a = 0, l = yc(l);;) {
      if(a < h) {
        var m = f[a], a = a + 1, l = Bc(l, m, i[m])
      }else {
        d = xd(Bc(l, b, c));
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
        return bc.f(this, b);
      case 3:
        return bc.l(this, b, c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
t.apply = function(a, b) {
  return a.call.apply(a, [a].concat(Tb(b)))
};
t.hb = function(a, b) {
  return ad(b) ? cc(a, E.f(b, 0), E.f(b, 1)) : fd.l(Xb, a, b)
};
t.toString = function() {
  return Mc.h(M([this], 0))
};
t.eb = function() {
  var a = this;
  return 0 < a.keys.length ? Cd.f(function(b) {
    return fe.h(M([b, a.pd[b]], 0))
  }, a.keys.sort(me)) : k
};
t.Ib = j;
t.xb = function() {
  return this.keys.length
};
t.Fa = function(a, b) {
  return ke(a, b)
};
t.ib = function(a, b) {
  return new ne(b, this.keys, this.pd, this.Tg, this.v)
};
t.ab = j;
t.bb = p("H");
t.oh = j;
var oe = 32;
function qe(a, b) {
  return new ne(k, a, b, 0, k)
}
var re = function() {
  function a(a, b, c, i, l) {
    a = Tb(a);
    a[b] = c;
    a[i] = l;
    return a
  }
  function b(a, b, c) {
    a = Tb(a);
    a[b] = c;
    return a
  }
  var c = k, c = function(c, f, h, i, l) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, f, h);
      case 5:
        return a.call(this, c, f, h, i, l)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.l = b;
  c.Qf = a;
  return c
}(), se = function() {
  function a(a, b, c, i, l, m) {
    a = a.Dd(b);
    a.g[c] = i;
    a.g[l] = m;
    return a
  }
  function b(a, b, c, i) {
    a = a.Dd(b);
    a.g[c] = i;
    return a
  }
  var c = k, c = function(c, f, h, i, l, m) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, f, h, i);
      case 6:
        return a.call(this, c, f, h, i, l, m)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.ta = b;
  c.be = a;
  return c
}();
function te(a, b, c) {
  this.R = a;
  this.sa = b;
  this.g = c
}
t = te.prototype;
t.ac = function(a, b, c, d, f, h) {
  var i = 1 << (c >>> b & 31), l = hd(this.sa & i - 1);
  if(0 === (this.sa & i)) {
    var m = hd(this.sa);
    if(2 * m < this.g.length) {
      a = this.Dd(a);
      b = a.g;
      h[0] = j;
      a: {
        c = 2 * (m - l);
        h = 2 * l + (c - 1);
        for(m = 2 * (l + 1) + (c - 1);;) {
          if(0 === c) {
            break a
          }
          b[m] = b[h];
          m -= 1;
          c -= 1;
          h -= 1
        }
      }
      b[2 * l] = d;
      b[2 * l + 1] = f;
      a.sa |= i;
      return a
    }
    if(16 <= m) {
      l = Ub.N(32);
      l[c >>> b & 31] = ue.ac(a, b + 5, c, d, f, h);
      for(f = d = 0;;) {
        if(32 > d) {
          0 !== (this.sa >>> d & 1) && (l[d] = k != this.g[f] ? ue.ac(a, b + 5, rc(this.g[f]), this.g[f], this.g[f + 1], h) : this.g[f + 1], f += 2), d += 1
        }else {
          break
        }
      }
      return new ve(a, m + 1, l)
    }
    b = Ub.N(2 * (m + 4));
    bd(this.g, 0, b, 0, 2 * l);
    b[2 * l] = d;
    h[0] = j;
    b[2 * l + 1] = f;
    bd(this.g, 2 * l, b, 2 * (l + 1), 2 * (m - l));
    d = this.Dd(a);
    d.g = b;
    d.sa |= i;
    return d
  }
  m = this.g[2 * l];
  i = this.g[2 * l + 1];
  if(k == m) {
    return d = i.ac(a, b + 5, c, d, f, h), d === i ? this : se.ta(this, a, 2 * l + 1, d)
  }
  if(Dc.f(d, m)) {
    return f === i ? this : se.ta(this, a, 2 * l + 1, f)
  }
  h[0] = j;
  return se.be(this, a, 2 * l, k, 2 * l + 1, we.uh(a, b + 5, m, i, c, d, f))
};
t.df = function() {
  return xe.N(this.g)
};
t.Dd = function(a) {
  if(a === this.R) {
    return this
  }
  var b = hd(this.sa), c = Ub.N(0 > b ? 4 : 2 * (b + 1));
  bd(this.g, 0, c, 0, 2 * b);
  return new te(a, this.sa, c)
};
t.Jc = function() {
  return function(a, b, c, d) {
    switch(arguments.length) {
      case 3:
        var f;
        f = 1 << (b >>> a & 31);
        if(0 === (this.sa & f)) {
          f = k
        }else {
          var h = hd(this.sa & f - 1);
          f = this.g[2 * h];
          h = this.g[2 * h + 1];
          f = k == f ? h.Jc(a + 5, b, c) : Dc.f(c, f) ? Ld([f, h]) : k
        }
        return f;
      case 4:
        return f = 1 << (b >>> a & 31), 0 === (this.sa & f) ? f = d : (h = hd(this.sa & f - 1), f = this.g[2 * h], h = this.g[2 * h + 1], f = k == f ? h.Jc(a + 5, b, c, d) : Dc.f(c, f) ? Ld([f, h]) : d), f
    }
    e("Invalid arity: " + arguments.length)
  }
}();
t.$b = function(a, b, c, d, f) {
  var h = 1 << (b >>> a & 31), i = hd(this.sa & h - 1);
  if(0 === (this.sa & h)) {
    var l = hd(this.sa);
    if(16 <= l) {
      i = Ub.N(32);
      i[b >>> a & 31] = ue.$b(a + 5, b, c, d, f);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.sa >>> c & 1) && (i[c] = k != this.g[d] ? ue.$b(a + 5, rc(this.g[d]), this.g[d], this.g[d + 1], f) : this.g[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new ve(k, l + 1, i)
    }
    a = Ub.N(2 * (l + 1));
    bd(this.g, 0, a, 0, 2 * i);
    a[2 * i] = c;
    f[0] = j;
    a[2 * i + 1] = d;
    bd(this.g, 2 * i, a, 2 * (i + 1), 2 * (l - i));
    return new te(k, this.sa | h, a)
  }
  h = this.g[2 * i];
  l = this.g[2 * i + 1];
  if(k == h) {
    return f = l.$b(a + 5, b, c, d, f), f === l ? this : new te(k, this.sa, re.l(this.g, 2 * i + 1, f))
  }
  if(Dc.f(c, h)) {
    return d === l ? this : new te(k, this.sa, re.l(this.g, 2 * i + 1, d))
  }
  f[0] = j;
  return new te(k, this.sa, re.Qf(this.g, 2 * i, k, 2 * i + 1, we.be(a + 5, h, l, b, c, d)))
};
var ue = new te(k, 0, Ub.N(0));
function ve(a, b, c) {
  this.R = a;
  this.j = b;
  this.g = c
}
t = ve.prototype;
t.$b = function(a, b, c, d, f) {
  var h = b >>> a & 31, i = this.g[h];
  if(k == i) {
    return new ve(k, this.j + 1, re.l(this.g, h, ue.$b(a + 5, b, c, d, f)))
  }
  a = i.$b(a + 5, b, c, d, f);
  return a === i ? this : new ve(k, this.j, re.l(this.g, h, a))
};
t.Jc = function() {
  return function(a, b, c, d) {
    switch(arguments.length) {
      case 3:
        var f = this.g[b >>> a & 31];
        return k != f ? f.Jc(a + 5, b, c) : k;
      case 4:
        return f = this.g[b >>> a & 31], k != f ? f.Jc(a + 5, b, c, d) : d
    }
    e("Invalid arity: " + arguments.length)
  }
}();
t.df = function() {
  return ye.N(this.g)
};
t.Dd = function(a) {
  return a === this.R ? this : new ve(a, this.j, Tb(this.g))
};
t.ac = function(a, b, c, d, f, h) {
  var i = c >>> b & 31, l = this.g[i];
  if(k == l) {
    return a = se.ta(this, a, i, ue.ac(a, b + 5, c, d, f, h)), a.j += 1, a
  }
  b = l.ac(a, b + 5, c, d, f, h);
  return b === l ? this : se.ta(this, a, i, b)
};
function ze(a, b, c) {
  for(var b = 2 * b, d = 0;;) {
    if(d < b) {
      if(Dc.f(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function Ae(a, b, c, d) {
  this.R = a;
  this.Sc = b;
  this.j = c;
  this.g = d
}
t = Ae.prototype;
t.$b = function(a, b, c, d, f) {
  if(b === this.Sc) {
    a = ze(this.g, this.j, c);
    return-1 === a ? (a = this.g.length, b = Ub.N(a + 2), bd(this.g, 0, b, 0, a), b[a] = c, b[a + 1] = d, f[0] = j, new Ae(k, this.Sc, this.j + 1, b)) : Dc.f(this.g[a], d) ? this : new Ae(k, this.Sc, this.j, re.l(this.g, a + 1, d))
  }
  return(new te(k, 1 << (this.Sc >>> a & 31), [k, this])).$b(a, b, c, d, f)
};
t.Jc = function() {
  return function(a, b, c, d) {
    switch(arguments.length) {
      case 3:
        var f = ze(this.g, this.j, c);
        return 0 > f ? k : Dc.f(c, this.g[f]) ? Ld([this.g[f], this.g[f + 1]]) : k;
      case 4:
        return f = ze(this.g, this.j, c), 0 > f ? d : Dc.f(c, this.g[f]) ? Ld([this.g[f], this.g[f + 1]]) : d
    }
    e("Invalid arity: " + arguments.length)
  }
}();
t.df = function() {
  return xe.N(this.g)
};
t.Dd = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 1:
        var d;
        a === this.R ? d = this : (d = Ub.N(2 * (this.j + 1)), bd(this.g, 0, d, 0, 2 * this.j), d = new Ae(a, this.Sc, this.j, d));
        return d;
      case 3:
        return a === this.R ? (this.g = c, this.j = b, d = this) : d = new Ae(this.R, this.Sc, b, c), d
    }
    e("Invalid arity: " + arguments.length)
  }
}();
t.ac = function(a, b, c, d, f, h) {
  if(c === this.Sc) {
    b = ze(this.g, this.j, d);
    if(-1 === b) {
      if(this.g.length > 2 * this.j) {
        return a = se.be(this, a, 2 * this.j, d, 2 * this.j + 1, f), h[0] = j, a.j += 1, a
      }
      b = this.g.length;
      c = Ub.N(b + 2);
      bd(this.g, 0, c, 0, b);
      c[b] = d;
      c[b + 1] = f;
      h[0] = j;
      return this.Dd(a, this.j + 1, c)
    }
    return this.g[b + 1] === f ? this : se.ta(this, a, b + 1, f)
  }
  return(new te(a, 1 << (this.Sc >>> b & 31), [k, this, k, k])).ac(a, b, c, d, f, h)
};
var we = function() {
  function a(a, b, c, i, l, m, n) {
    var q = rc(c);
    if(q === l) {
      return new Ae(k, q, 2, [c, i, m, n])
    }
    var r = [o];
    return ue.ac(a, b, q, c, i, r).ac(a, b, l, m, n, r)
  }
  function b(a, b, c, i, l, m) {
    var n = rc(b);
    if(n === i) {
      return new Ae(k, n, 2, [b, c, l, m])
    }
    var q = [o];
    return ue.$b(a, n, b, c, q).$b(a, i, l, m, q)
  }
  var c = k, c = function(c, f, h, i, l, m, n) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, f, h, i, l, m);
      case 7:
        return a.call(this, c, f, h, i, l, m, n)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.be = b;
  c.uh = a;
  return c
}();
function Be(a, b, c, d, f) {
  this.H = a;
  this.hd = b;
  this.Ia = c;
  this.Oc = d;
  this.v = f;
  this.Ga = 0;
  this.p = 15925324
}
t = Be.prototype;
t.$a = function(a) {
  var b = this.v;
  return b != k ? b : this.v = a = Lc(a)
};
t.Jb = j;
t.hb = function(a, b) {
  return N(b, a)
};
t.toString = function() {
  return Mc.h(M([this], 0))
};
t.eb = aa();
t.yb = j;
t.nc = function() {
  return this.Oc == k ? Ld([this.hd[this.Ia], this.hd[this.Ia + 1]]) : K(this.Oc)
};
t.oc = function() {
  return this.Oc == k ? xe.l(this.hd, this.Ia + 2, k) : xe.l(this.hd, this.Ia, I(this.Oc))
};
t.Fa = function(a, b) {
  return Oc(a, b)
};
t.ib = function(a, b) {
  return new Be(b, this.hd, this.Ia, this.Oc, this.v)
};
t.ab = j;
t.bb = p("H");
var xe = function() {
  function a(a, b, c) {
    if(c == k) {
      for(c = a.length;;) {
        if(b < c) {
          if(k != a[b]) {
            return new Be(k, a, b, k, k)
          }
          var i = a[b + 1];
          if(B(i) && (i = i.df(), B(i))) {
            return new Be(k, a, b + 2, i, k)
          }
          b += 2
        }else {
          return k
        }
      }
    }else {
      return new Be(k, a, b, c, k)
    }
  }
  function b(a) {
    return c.call(k, a, 0, k)
  }
  var c = k, c = function(c, f, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.N = b;
  c.l = a;
  return c
}();
function Ce(a, b, c, d, f) {
  this.H = a;
  this.hd = b;
  this.Ia = c;
  this.Oc = d;
  this.v = f;
  this.Ga = 0;
  this.p = 15925324
}
t = Ce.prototype;
t.$a = function(a) {
  var b = this.v;
  return b != k ? b : this.v = a = Lc(a)
};
t.Jb = j;
t.hb = function(a, b) {
  return N(b, a)
};
t.toString = function() {
  return Mc.h(M([this], 0))
};
t.eb = aa();
t.yb = j;
t.nc = function() {
  return K(this.Oc)
};
t.oc = function() {
  return ye.ta(k, this.hd, this.Ia, I(this.Oc))
};
t.Fa = function(a, b) {
  return Oc(a, b)
};
t.ib = function(a, b) {
  return new Ce(b, this.hd, this.Ia, this.Oc, this.v)
};
t.ab = j;
t.bb = p("H");
var ye = function() {
  function a(a, b, c, i) {
    if(i == k) {
      for(i = b.length;;) {
        if(c < i) {
          var l = b[c];
          if(B(l) && (l = l.df(), B(l))) {
            return new Ce(a, b, c + 1, l, k)
          }
          c += 1
        }else {
          return k
        }
      }
    }else {
      return new Ce(a, b, c, i, k)
    }
  }
  function b(a) {
    return c.call(k, k, a, 0, k)
  }
  var c = k, c = function(c, f, h, i) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, f, h, i)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.N = b;
  c.ta = a;
  return c
}();
function De(a, b, c, d, f, h) {
  this.H = a;
  this.j = b;
  this.root = c;
  this.Ab = d;
  this.Pb = f;
  this.v = h;
  this.Ga = 0;
  this.p = 2155545487
}
t = De.prototype;
t.nh = j;
t.Nf = function() {
  return new Ee({}, this.root, this.j, this.Ab, this.Pb)
};
t.$a = function(a) {
  var b = this.v;
  return b != k ? b : this.v = a = kd(a)
};
t.Cc = function(a, b) {
  return bc.l(a, b, k)
};
t.Dc = function(a, b, c) {
  return b == k ? B(this.Ab) ? this.Pb : c : this.root == k ? c : Uc.f(this.root.Jc(0, rc(b), b, [k, c]), 1)
};
t.xd = function(a, b, c) {
  if(b == k) {
    var d = this.Ab;
    return B(B(d) ? c === this.Pb : d) ? a : new De(this.H, B(this.Ab) ? this.j : this.j + 1, this.root, j, c, k)
  }
  d = [o];
  c = (this.root == k ? ue : this.root).$b(0, rc(b), b, c, d);
  return c === this.root ? a : new De(this.H, B(d[0]) ? this.j + 1 : this.j, c, this.Ab, this.Pb, k)
};
t.call = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return bc.f(this, b);
      case 3:
        return bc.l(this, b, c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
t.apply = function(a, b) {
  return a.call.apply(a, [a].concat(Tb(b)))
};
t.hb = function(a, b) {
  return ad(b) ? cc(a, E.f(b, 0), E.f(b, 1)) : fd.l(Xb, a, b)
};
t.toString = function() {
  return Mc.h(M([this], 0))
};
t.eb = function() {
  if(0 < this.j) {
    var a = k != this.root ? this.root.df() : k;
    return B(this.Ab) ? N(Ld([k, this.Pb]), a) : a
  }
  return k
};
t.Ib = j;
t.xb = p("j");
t.Fa = function(a, b) {
  return ke(a, b)
};
t.ib = function(a, b) {
  return new De(b, this.j, this.root, this.Ab, this.Pb, this.v)
};
t.ab = j;
t.bb = p("H");
t.oh = j;
var pe = new De(k, 0, k, o, k, 0);
function Ee(a, b, c, d, f) {
  this.R = a;
  this.root = b;
  this.pc = c;
  this.Ab = d;
  this.Pb = f;
  this.Ga = 7;
  this.p = 130
}
t = Ee.prototype;
t.qh = function(a, b, c) {
  return Fe(a, b, c)
};
t.rh = function(a, b) {
  var c;
  a: {
    if(B(a.R)) {
      var d;
      d = b != k ? ((d = b.p & 1024) ? d : b.ph) ? j : b.p ? o : C(ec, b) : C(ec, b);
      if(d) {
        c = Fe(a, fc(b), gc(b))
      }else {
        d = O(b);
        for(var f = a;;) {
          var h = K(d);
          if(B(h)) {
            d = I(d), f = Fe(f, fc(h), gc(h))
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
t.sh = function(a) {
  var b;
  B(a.R) ? (a.R = k, b = new De(k, a.pc, a.root, a.Ab, a.Pb, k)) : e(Error("persistent! called twice"));
  return b
};
t.Cc = function(a, b) {
  return b == k ? B(this.Ab) ? this.Pb : k : this.root == k ? k : Uc.f(this.root.Jc(0, rc(b), b), 1)
};
t.Dc = function(a, b, c) {
  return b == k ? B(this.Ab) ? this.Pb : c : this.root == k ? c : Uc.f(this.root.Jc(0, rc(b), b, [k, c]), 1)
};
t.Ib = j;
t.xb = function() {
  if(B(this.R)) {
    return this.pc
  }
  e(Error("count after persistent!"))
};
function Fe(a, b, c) {
  if(B(a.R)) {
    if(b == k) {
      if(a.Pb !== c) {
        a.Pb = c
      }
      if(!B(a.Ab)) {
        a.pc += 1, a.Ab = j
      }
    }else {
      var d = [o], b = (a.root == k ? ue : a.root).ac(a.R, 0, rc(b), b, c, d);
      if(b !== a.root) {
        a.root = b
      }
      B(d[0]) && (a.pc += 1)
    }
    return a
  }
  e(Error("assoc! after persistent!"))
}
function Ge(a, b, c) {
  for(var d = b;;) {
    if(a != k) {
      b = B(c) ? a.left : a.right, d = Qc.f(d, a), a = b
    }else {
      return d
    }
  }
}
function He(a, b, c, d, f) {
  this.H = a;
  this.stack = b;
  this.Lf = c;
  this.j = d;
  this.v = f;
  this.Ga = 0;
  this.p = 15925322
}
t = He.prototype;
t.$a = function(a) {
  var b = this.v;
  return b != k ? b : this.v = a = Lc(a)
};
t.Jb = j;
t.hb = function(a, b) {
  return N(b, a)
};
t.toString = function() {
  return Mc.h(M([this], 0))
};
t.eb = aa();
t.Ib = j;
t.xb = function(a) {
  return 0 > this.j ? Rc(I(a)) + 1 : this.j
};
t.yb = j;
t.nc = function() {
  return hc(this.stack)
};
t.oc = function() {
  var a = hc(this.stack), a = Ge(B(this.Lf) ? a.right : a.left, ic(this.stack), this.Lf);
  return a != k ? new He(k, a, this.Lf, this.j - 1, k) : k
};
t.Fa = function(a, b) {
  return Oc(a, b)
};
t.ib = function(a, b) {
  return new He(b, this.stack, this.Lf, this.j, this.v)
};
t.ab = j;
t.bb = p("H");
function Ie(a, b, c, d, f) {
  this.key = a;
  this.F = b;
  this.left = c;
  this.right = d;
  this.v = f;
  this.Ga = 0;
  this.p = 16201119
}
t = Ie.prototype;
t.$a = function(a) {
  var b = this.v;
  return b != k ? b : this.v = a = Lc(a)
};
t.Cc = function(a, b) {
  return E.l(a, b, k)
};
t.Dc = function(a, b, c) {
  return E.l(a, b, c)
};
t.xd = function(a, b, c) {
  return Wc.l(Ld([this.key, this.F]), b, c)
};
t.call = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return bc.f(this, b);
      case 3:
        return bc.l(this, b, c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
t.apply = function(a, b) {
  return a.call.apply(a, [a].concat(Tb(b)))
};
t.Jb = j;
t.hb = function(a, b) {
  return Ld([this.key, this.F, b])
};
t.ph = j;
t.Of = p("key");
t.Pf = p("F");
t.Mi = function(a) {
  return a.Ti(this)
};
t.replace = function(a, b, c, d) {
  return new Ie(a, b, c, d, k)
};
t.Li = function(a) {
  return a.Si(this)
};
t.Si = function(a) {
  return new Ie(a.key, a.F, this, a.right, k)
};
t.toString = function() {
  return function() {
    switch(arguments.length) {
      case 0:
        return Mc.h(H([this]))
    }
    e("Invalid arity: " + arguments.length)
  }
}();
t.Ti = function(a) {
  return new Ie(a.key, a.F, a.left, this, k)
};
t.Mf = function() {
  return this
};
t.Re = j;
t.Se = function(a, b) {
  return Jc.f(a, b)
};
t.Te = function(a, b, c) {
  return Jc.l(a, b, c)
};
t.eb = function() {
  return Gc.h(M([this.key, this.F], 0))
};
t.Ib = j;
t.xb = s(2);
t.$d = p("F");
t.ae = function() {
  return Ld([this.key])
};
t.th = j;
t.Fa = function(a, b) {
  return Oc(a, b)
};
t.ib = function(a, b) {
  return Xc(Ld([this.key, this.F]), b)
};
t.ab = j;
t.bb = s(k);
t.yd = j;
t.Yd = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.F : k
};
t.Zd = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.F : c
};
function Je(a, b, c, d, f) {
  this.key = a;
  this.F = b;
  this.left = c;
  this.right = d;
  this.v = f;
  this.Ga = 0;
  this.p = 16201119
}
t = Je.prototype;
t.$a = function(a) {
  var b = this.v;
  return b != k ? b : this.v = a = Lc(a)
};
t.Cc = function(a, b) {
  return E.l(a, b, k)
};
t.Dc = function(a, b, c) {
  return E.l(a, b, c)
};
t.xd = function(a, b, c) {
  return Wc.l(Ld([this.key, this.F]), b, c)
};
t.call = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return bc.f(this, b);
      case 3:
        return bc.l(this, b, c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
t.apply = function(a, b) {
  return a.call.apply(a, [a].concat(Tb(b)))
};
t.Jb = j;
t.hb = function(a, b) {
  return Ld([this.key, this.F, b])
};
t.ph = j;
t.Of = p("key");
t.Pf = p("F");
t.Mi = function(a) {
  return new Je(this.key, this.F, this.left, a, k)
};
t.replace = function(a, b, c, d) {
  return new Je(a, b, c, d, k)
};
t.Li = function(a) {
  return new Je(this.key, this.F, a, this.right, k)
};
t.Si = function(a) {
  return Hc(Je, this.left) ? new Je(this.key, this.F, this.left.Mf(), new Ie(a.key, a.F, this.right, a.right, k), k) : Hc(Je, this.right) ? new Je(this.right.key, this.right.F, new Ie(this.key, this.F, this.left, this.right.left, k), new Ie(a.key, a.F, this.right.right, a.right, k), k) : new Ie(a.key, a.F, this, a.right, k)
};
t.toString = function() {
  return function() {
    switch(arguments.length) {
      case 0:
        return Mc.h(H([this]))
    }
    e("Invalid arity: " + arguments.length)
  }
}();
t.Ti = function(a) {
  return Hc(Je, this.right) ? new Je(this.key, this.F, new Ie(a.key, a.F, a.left, this.left, k), this.right.Mf(), k) : Hc(Je, this.left) ? new Je(this.left.key, this.left.F, new Ie(a.key, a.F, a.left, this.left.left, k), new Ie(this.key, this.F, this.left.right, this.right, k), k) : new Ie(a.key, a.F, a.left, this, k)
};
t.Mf = function() {
  return new Ie(this.key, this.F, this.left, this.right, k)
};
t.Re = j;
t.Se = function(a, b) {
  return Jc.f(a, b)
};
t.Te = function(a, b, c) {
  return Jc.l(a, b, c)
};
t.eb = function() {
  return Gc.h(M([this.key, this.F], 0))
};
t.Ib = j;
t.xb = s(2);
t.$d = p("F");
t.ae = function() {
  return Ld([this.key])
};
t.th = j;
t.Fa = function(a, b) {
  return Oc(a, b)
};
t.ib = function(a, b) {
  return Xc(Ld([this.key, this.F]), b)
};
t.ab = j;
t.bb = s(k);
t.yd = j;
t.Yd = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.F : k
};
t.Zd = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.F : c
};
var Le = function Ke(b, c, d, f, h) {
  if(c == k) {
    return new Je(d, f, k, k, k)
  }
  var i = b.call(k, d, c.key);
  if(0 === i) {
    return h[0] = c, k
  }
  if(0 > i) {
    return b = Ke.call(k, b, c.left, d, f, h), b != k ? c.Li(b) : k
  }
  b = Ke.call(k, b, c.right, d, f, h);
  return b != k ? c.Mi(b) : k
}, Ne = function Me(b, c, d, f) {
  var h = c.key, i = b.call(k, d, h);
  return 0 === i ? c.replace(h, f, c.left, c.right) : 0 > i ? c.replace(h, c.F, Me.call(k, b, c.left, d, f), c.right) : c.replace(h, c.F, c.left, Me.call(k, b, c.right, d, f))
};
function Oe(a, b, c, d, f) {
  this.ce = a;
  this.Ef = b;
  this.j = c;
  this.H = d;
  this.v = f;
  this.Ga = 0;
  this.p = 209388431
}
t = Oe.prototype;
t.$a = function(a) {
  var b = this.v;
  return b != k ? b : this.v = a = kd(a)
};
t.Cc = function(a, b) {
  return bc.l(a, b, k)
};
t.Dc = function(a, b, c) {
  a: {
    for(var d = a.Ef;;) {
      if(d != k) {
        var f = a.ce.call(k, b, d.key);
        if(0 === f) {
          a = d;
          break a
        }
        d = 0 > f ? d.left : d.right
      }else {
        a = k;
        break a
      }
    }
    a = g
  }
  return a != k ? a.F : c
};
t.xd = function(a, b, c) {
  var d = [k], f = Le(this.ce, this.Ef, b, c, d);
  return f == k ? (d = Uc.f(d, 0), Dc.f(c, d.F) ? a : new Oe(this.ce, Ne(this.ce, this.Ef, b, c), this.j, this.H, k)) : new Oe(this.ce, f.Mf(), this.j + 1, this.H, k)
};
t.call = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return bc.f(this, b);
      case 3:
        return bc.l(this, b, c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
t.apply = function(a, b) {
  return a.call.apply(a, [a].concat(Tb(b)))
};
t.hb = function(a, b) {
  return ad(b) ? cc(a, E.f(b, 0), E.f(b, 1)) : fd.l(Xb, a, b)
};
t.toString = function() {
  return Mc.h(M([this], 0))
};
t.eb = function() {
  return 0 < this.j ? new He(k, Ge(this.Ef, k, j), j, this.j, k) : k
};
t.Ib = j;
t.xb = p("j");
t.Fa = function(a, b) {
  return ke(a, b)
};
t.ib = function(a, b) {
  return new Oe(this.ce, this.Ef, this.j, b, this.v)
};
t.ab = j;
t.bb = p("H");
t.oh = j;
var Pe = new Oe(function(a, b) {
  if(Ec(a) === Ec(b)) {
    return ub.call(k, a, b)
  }
  if(a == k) {
    return-1
  }
  if(b == k) {
    return 1
  }
  e(Error("compare on non-nil objects of different types"))
}, k, 0, k, 0), Fc = function() {
  function a(a) {
    var d = k;
    fa(a) && (d = H(Array.prototype.slice.call(arguments, 0)));
    return b.call(this, d)
  }
  function b(a) {
    for(var b = O(a), f = yc(pe);;) {
      if(B(b)) {
        var a = I(I(b)), h = K(b), b = K(I(b)), f = Bc(f, h, b), b = a
      }else {
        return Ac(f)
      }
    }
  }
  a.P = 0;
  a.s = function(a) {
    a = O(a);
    return b(a)
  };
  a.h = b;
  return a
}(), Qe = function() {
  function a(a) {
    var d = k;
    fa(a) && (d = H(Array.prototype.slice.call(arguments, 0)));
    return b.call(this, d)
  }
  function b(a) {
    for(var a = O(a), b = Pe;;) {
      if(B(a)) {
        var f = I(I(a)), b = Wc.l(b, K(a), K(I(a))), a = f
      }else {
        return b
      }
    }
  }
  a.P = 0;
  a.s = function(a) {
    a = O(a);
    return b(a)
  };
  a.h = b;
  return a
}();
Fc();
Qe();
function Re(a) {
  var b = y.call(k, a);
  B(b) && (b = "\ufdd0" === a.charAt(0), b = B(b ? b : "\ufdd1" === a.charAt(0)) ? o : j);
  if(b) {
    return a
  }
  if((b = dd(a)) ? b : ed(a)) {
    return b = a.lastIndexOf("/"), 0 > b ? jd.f(a, 2) : jd.f(a, b + 1)
  }
  e(Error([P("Doesn't support name: "), P(a)].join("")))
}
function Se(a) {
  var b = dd(a);
  if(b ? b : ed(a)) {
    return b = a.lastIndexOf("/"), -1 < b ? jd.l(a, 2, b) : k
  }
  e(Error([P("Doesn't support namespace: "), P(a)].join("")))
}
function Zd(a, b, c, d, f, h) {
  return ud.h(Ld([b]), Jd(Id(Ld([c]), Cd.f(function(b) {
    return a.call(k, b, f)
  }, h))), H([Ld([d])]))
}
var $d = function Te(b, c) {
  return b == k ? Gc.h(M(["nil"], 0)) : g === b ? Gc.h(M(["#<undefined>"], 0)) : ud.f(B(function() {
    var d = Vc.f(c, "\ufdd0'meta");
    return B(d) ? (d = b != k ? ((d = b.p & 65536) ? d : b.ab) ? j : b.p ? o : C(lc, b) : C(lc, b), B(d) ? Yc(b) : d) : d
  }()) ? ud.h(Ld(["^"]), Te.call(k, Yc(b), c), H([Ld([" "])])) : k, B(function() {
    var c = b != k;
    return c ? b.ml : c
  }()) ? b.ll() : function() {
    var c;
    c = b != k ? ((c = b.p & 268435456) ? c : b.cb) ? j : b.p ? o : C(uc, b) : C(uc, b);
    return c
  }() ? vc(b, c) : Gc.h(H(["#<", "" + P(b), ">"])))
}, Mc = function() {
  function a(a) {
    var d = k;
    fa(a) && (d = H(Array.prototype.slice.call(arguments, 0)));
    return b.call(this, d)
  }
  function b(a) {
    var b = qe(["\ufdd0'flush-on-newline", "\ufdd0'readably", "\ufdd0'meta", "\ufdd0'dup"], {"\ufdd0'flush-on-newline":j, "\ufdd0'readably":j, "\ufdd0'meta":o, "\ufdd0'dup":o}), f = K(a), h = new Rb, a = O(a);
    if(B(a)) {
      for(var i = K(a);;) {
        i !== f && h.append(" ");
        var l = O($d(i, b));
        if(B(l)) {
          for(i = K(l);;) {
            if(h.append(i), i = I(l), B(i)) {
              l = i, i = K(l)
            }else {
              break
            }
          }
        }
        a = I(a);
        if(B(a)) {
          i = a, a = K(i), l = i, i = a, a = l
        }else {
          break
        }
      }
    }
    return"" + P(h)
  }
  a.P = 0;
  a.s = function(a) {
    a = O(a);
    return b(a)
  };
  a.h = b;
  return a
}();
uc.number = j;
vc.number = function(a) {
  return Gc.h(H(["" + P(a)]))
};
Kc.prototype.cb = j;
Kc.prototype.Ta = function(a, b) {
  return Zd($d, "(", " ", ")", b, a)
};
Oe.prototype.cb = j;
Oe.prototype.Ta = function(a, b) {
  return Zd(function(a) {
    return Zd($d, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
pd.prototype.cb = j;
pd.prototype.Ta = function(a, b) {
  return Zd($d, "(", " ", ")", b, a)
};
uc["boolean"] = j;
vc["boolean"] = function(a) {
  return Gc.h(H(["" + P(a)]))
};
uc.string = j;
vc.string = function(a, b) {
  return dd(a) ? Gc.h(H([[P(":"), P(function() {
    var b = Se(a);
    return B(b) ? [P(b), P("/")].join("") : k
  }()), P(Re(a))].join("")])) : ed(a) ? Gc.h(H([[P(function() {
    var b = Se(a);
    return B(b) ? [P(b), P("/")].join("") : k
  }()), P(Re(a))].join("")])) : Gc.h(H([B("\ufdd0'readably".call(k, b)) ? Qa.call(k, a) : a]))
};
Be.prototype.cb = j;
Be.prototype.Ta = function(a, b) {
  return Zd($d, "(", " ", ")", b, a)
};
Je.prototype.cb = j;
Je.prototype.Ta = function(a, b) {
  return Zd($d, "[", " ", "]", b, a)
};
De.prototype.cb = j;
De.prototype.Ta = function(a, b) {
  return Zd(function(a) {
    return Zd($d, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
be.prototype.cb = j;
be.prototype.Ta = function(a, b) {
  return Zd($d, "[", " ", "]", b, a)
};
ld.prototype.cb = j;
ld.prototype.Ta = function(a, b) {
  return Zd($d, "(", " ", ")", b, a)
};
uc.array = j;
vc.array = function(a, b) {
  return Zd($d, "#<Array [", ", ", "]>", b, a)
};
uc["function"] = j;
vc["function"] = function(a) {
  return Gc.h(H(["#<", "" + P(a), ">"]))
};
md.prototype.cb = j;
md.prototype.Ta = function() {
  return Gc.h(M(["()"], 0))
};
Ie.prototype.cb = j;
Ie.prototype.Ta = function(a, b) {
  return Zd($d, "[", " ", "]", b, a)
};
nd.prototype.cb = j;
nd.prototype.Ta = function(a, b) {
  return Zd($d, "(", " ", ")", b, a)
};
Ce.prototype.cb = j;
Ce.prototype.Ta = function(a, b) {
  return Zd($d, "(", " ", ")", b, a)
};
ne.prototype.cb = j;
ne.prototype.Ta = function(a, b) {
  return Zd(function(a) {
    return Zd($d, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
He.prototype.cb = j;
He.prototype.Ta = function(a, b) {
  return Zd($d, "(", " ", ")", b, a)
};
function Ue(a, b, c, d) {
  this.state = a;
  this.H = b;
  this.sn = c;
  this.un = d;
  this.Ga = 0;
  this.p = 1345404928
}
t = Ue.prototype;
t.$a = function(a) {
  return pa.call(k, a)
};
t.aj = function(a, b, c) {
  var d = O(this.un);
  if(B(d)) {
    var f = K(d);
    Uc.l(f, 0, k);
    for(Uc.l(f, 1, k);;) {
      var h = f, f = Uc.l(h, 0, k), h = Uc.l(h, 1, k);
      h.call(k, f, a, b, c);
      d = I(d);
      if(B(d)) {
        f = d, d = K(f), h = f, f = d, d = h
      }else {
        return k
      }
    }
  }else {
    return k
  }
};
t.cb = j;
t.Ta = function(a, b) {
  return ud.h(Ld(["#<Atom: "]), vc(this.state, b), M([">"], 0))
};
t.ab = j;
t.bb = p("H");
t.mh = p("state");
t.Fa = function(a, b) {
  return a === b
};
var Ve = function() {
  function a(a) {
    return new Ue(a, k, k, k)
  }
  var b = k, c = function() {
    function a(c, d) {
      var l = k;
      fa(d) && (l = H(Array.prototype.slice.call(arguments, 1)));
      return b.call(this, c, l)
    }
    function b(a, c) {
      var d;
      d = c == k ? o : c != k ? ((d = c.p & 64) ? d : c.yb) ? j : c.p ? o : C($b, c) : C($b, c);
      var f = d ? zd.f(Fc, c) : c;
      d = Vc.f(f, "\ufdd0'validator");
      f = Vc.f(f, "\ufdd0'meta");
      return new Ue(a, f, d, k)
    }
    a.P = 1;
    a.s = function(a) {
      var c = K(a), a = L(a);
      return b(c, a)
    };
    a.h = b;
    return a
  }(), b = function(b, f) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.h(b, M(arguments, 1))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.P = 1;
  b.s = c.s;
  b.N = a;
  b.h = c.h;
  return b
}();
Ve.N(qe(["\ufdd0'parents", "\ufdd0'descendants", "\ufdd0'ancestors"], {"\ufdd0'parents":qe([], {}), "\ufdd0'descendants":qe([], {}), "\ufdd0'ancestors":qe([], {})}));
function We() {
  return u.navigator ? u.navigator.userAgent : k
}
function Xe() {
  return u.navigator
}
Mb = Lb = Kb = Jb = Ib = o;
var Ye;
if(Ye = We()) {
  var Ze = Xe();
  Ib = 0 == Ye.indexOf("Opera");
  Jb = !Ib && -1 != Ye.indexOf("MSIE");
  Lb = (Kb = !Ib && -1 != Ye.indexOf("WebKit")) && -1 != Ye.indexOf("Mobile");
  Mb = !Ib && !Kb && "Gecko" == Ze.product
}
var Q = Ib, R = Jb, S = Mb, T = Kb, $e = Lb, af, bf = Xe();
af = bf && bf.platform || "";
Nb = -1 != af.indexOf("Mac");
Ob = -1 != af.indexOf("Win");
var cf = !!Xe() && -1 != (Xe().appVersion || "").indexOf("X11"), df;
a: {
  var ef = "", ff;
  if(Q && u.opera) {
    var gf = u.opera.version, ef = "function" == typeof gf ? gf() : gf
  }else {
    if(S ? ff = /rv\:([^\);]+)(\)|;)/ : R ? ff = /MSIE\s+([^\);]+)(\)|;)/ : T && (ff = /WebKit\/(\S+)/), ff) {
      var hf = ff.exec(We()), ef = hf ? hf[1] : ""
    }
  }
  if(R) {
    var jf, kf = u.document;
    jf = kf ? kf.documentMode : g;
    if(jf > parseFloat(ef)) {
      df = "" + jf;
      break a
    }
  }
  df = ef
}
var lf = {};
function U(a) {
  return lf[a] || (lf[a] = 0 <= Ta(df, a))
}
;var mf, nf = !R || U("9");
!S && !R || R && U("9") || S && U("1.9.1");
var of = R && !U("9");
function pf(a) {
  return(a = a.className) && "function" == typeof a.split ? a.split(/\s+/) : []
}
function qf(a, b) {
  var c = pf(a), d = tb(arguments, 1), f;
  f = c;
  for(var h = 0, i = 0;i < d.length;i++) {
    mb(f, d[i]) || (f.push(d[i]), h++)
  }
  f = h == d.length;
  a.className = c.join(" ");
  return f
}
function rf(a, b) {
  var c = pf(a), d = tb(arguments, 1), f;
  f = c;
  for(var h = 0, i = 0;i < f.length;i++) {
    mb(d, f[i]) && (sb(f, i--, 1), h++)
  }
  f = h == d.length;
  a.className = c.join(" ");
  return f
}
function sf(a, b, c) {
  c ? qf(a, b) : rf(a, b)
}
;function tf(a, b) {
  this.x = fa(a) ? a : 0;
  this.y = fa(b) ? b : 0
}
tf.prototype.ua = function() {
  return new tf(this.x, this.y)
};
tf.prototype.toString = function() {
  return"(" + this.x + ", " + this.y + ")"
};
function uf(a, b) {
  return new tf(a.x - b.x, a.y - b.y)
}
;function vf(a, b) {
  this.width = a;
  this.height = b
}
function wf(a, b) {
  return a == b ? j : !a || !b ? o : a.width == b.width && a.height == b.height
}
t = vf.prototype;
t.ua = function() {
  return new vf(this.width, this.height)
};
t.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
t.Yh = function() {
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
function V(a) {
  return a ? new xf(X(a)) : mf || (mf = new xf)
}
function yf(a) {
  return y(a) ? document.getElementById(a) : a
}
function zf(a, b, c, d) {
  a = d || a;
  b = b && "*" != b ? b.toUpperCase() : "";
  if(a.querySelectorAll && a.querySelector && (!T || Af(document) || U("528")) && (b || c)) {
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
      b = i.className, "function" == typeof b.split && mb(b.split(/\s+/), c) && (d[f++] = i)
    }
    d.length = f;
    return d
  }
  return a
}
function Bf(a, b) {
  vb(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Cf ? a.setAttribute(Cf[d], b) : a[d] = b
  })
}
var Cf = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function Df(a) {
  var a = a || window, b = a.document;
  if(T && !U("500") && !$e) {
    "undefined" == typeof a.innerHeight && (a = window);
    var b = a.innerHeight, c = a.document.documentElement.scrollHeight;
    a == a.top && c < b && (b -= 15);
    a = new vf(a.innerWidth, b)
  }else {
    a = Af(b) ? b.documentElement : b.body, a = new vf(a.clientWidth, a.clientHeight)
  }
  return a
}
function Ef(a) {
  return a ? a.parentWindow || a.defaultView : window
}
function Ff(a, b, c, d) {
  function f(c) {
    c && b.appendChild(y(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var h = c[d];
    la(h) && !(oa(h) && 0 < h.nodeType) ? fb(Gf(h) ? pb(h) : h, f) : f(h)
  }
}
function Af(a) {
  return"CSS1Compat" == a.compatMode
}
function Hf(a, b) {
  Ff(X(a), a, arguments, 1)
}
function If(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
}
function Jf(a, b) {
  b.parentNode && b.parentNode.insertBefore(a, b)
}
function Kf(a, b) {
  b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
}
function Y(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : k
}
function Lf(a, b) {
  var c = b.parentNode;
  c && c.replaceChild(a, b)
}
function Mf(a) {
  var b, c = a.parentNode;
  if(c && 11 != c.nodeType) {
    if(a.removeNode) {
      return a.removeNode(o)
    }
    for(;b = a.firstChild;) {
      c.insertBefore(b, a)
    }
    return Y(a)
  }
}
function Nf(a, b) {
  for(;a && 1 != a.nodeType;) {
    a = b ? a.nextSibling : a.previousSibling
  }
  return a
}
function Of(a, b) {
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
function Pf(a, b) {
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
    return f == h ? Qf(a, b) : !c && Of(f, b) ? -1 * Rf(a, b) : !d && Of(h, a) ? Rf(b, a) : (c ? a.sourceIndex : f.sourceIndex) - (d ? b.sourceIndex : h.sourceIndex)
  }
  d = X(a);
  c = d.createRange();
  c.selectNode(a);
  c.collapse(j);
  d = d.createRange();
  d.selectNode(b);
  d.collapse(j);
  return c.compareBoundaryPoints(u.Range.START_TO_END, d)
}
function Rf(a, b) {
  var c = a.parentNode;
  if(c == b) {
    return-1
  }
  for(var d = b;d.parentNode != c;) {
    d = d.parentNode
  }
  return Qf(d, a)
}
function Qf(a, b) {
  for(var c = b;c = c.previousSibling;) {
    if(c == a) {
      return-1
    }
  }
  return 1
}
function Sf(a) {
  var b, c = arguments.length;
  if(c) {
    if(1 == c) {
      return arguments[0]
    }
  }else {
    return k
  }
  var d = [], f = Infinity;
  for(b = 0;b < c;b++) {
    for(var h = [], i = arguments[b];i;) {
      h.unshift(i), i = i.parentNode
    }
    d.push(h);
    f = Math.min(f, h.length)
  }
  h = k;
  for(b = 0;b < f;b++) {
    for(var i = d[0][b], l = 1;l < c;l++) {
      if(i != d[l][b]) {
        return h
      }
    }
    h = i
  }
  return h
}
function X(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function Tf(a) {
  return T ? a.document || a.contentWindow.document : a.contentDocument || a.contentWindow.document
}
function Uf(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && 3 == a.firstChild.nodeType) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      If(a), a.appendChild(X(a).createTextNode(b))
    }
  }
}
var Vf = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Wf = {IMG:" ", BR:"\n"};
function Xf(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, ma(a) && 0 <= a) : o
}
function Yf(a) {
  if(of && "innerText" in a) {
    a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
  }else {
    var b = [];
    Zf(a, b, j);
    a = b.join("")
  }
  a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  a = a.replace(/\u200B/g, "");
  R || (a = a.replace(/ +/g, " "));
  " " != a && (a = a.replace(/^\s*/, ""));
  return a
}
function $f(a) {
  var b = [];
  Zf(a, b, o);
  return b.join("")
}
function Zf(a, b, c) {
  if(!(a.nodeName in Vf)) {
    if(3 == a.nodeType) {
      c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in Wf) {
        b.push(Wf[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          Zf(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function Gf(a) {
  if(a && "number" == typeof a.length) {
    if(oa(a)) {
      return"function" == typeof a.item || "string" == typeof a.item
    }
    if(na(a)) {
      return"function" == typeof a.item
    }
  }
  return o
}
function ag(a, b) {
  var c = b ? b.toUpperCase() : k;
  return bg(a, function(a) {
    return(!c || a.nodeName == c) && j
  }, j)
}
function bg(a, b, c) {
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
  return k
}
function xf(a) {
  this.xa = a || u.document || document
}
t = xf.prototype;
t.S = V;
t.da = p("xa");
t.b = function(a) {
  return y(a) ? this.xa.getElementById(a) : a
};
t.e = function(a, b, c) {
  var d = this.xa, f = arguments, h = f[0], i = f[1];
  if(!nf && i && (i.name || i.type)) {
    h = ["<", h];
    i.name && h.push(' name="', Ha(i.name), '"');
    if(i.type) {
      h.push(' type="', Ha(i.type), '"');
      var l = {};
      Fb(l, i);
      i = l;
      delete i.type
    }
    h.push(">");
    h = h.join("")
  }
  h = d.createElement(h);
  if(i) {
    y(i) ? h.className = i : ka(i) ? qf.apply(k, [h].concat(i)) : Bf(h, i)
  }
  2 < f.length && Ff(d, h, f, 2);
  return h
};
t.createElement = function(a) {
  return this.xa.createElement(a)
};
t.createTextNode = function(a) {
  return this.xa.createTextNode(a)
};
t.wh = function(a, b, c) {
  for(var d = this.xa, f = !!c, c = ["<tr>"], h = 0;h < b;h++) {
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
function cg(a) {
  return Af(a.xa)
}
t.Oa = function() {
  return this.xa.parentWindow || this.xa.defaultView
};
function dg(a) {
  var b = a.xa, a = !T && Af(b) ? b.documentElement : b.body, b = b.parentWindow || b.defaultView;
  return new tf(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
}
t.appendChild = function(a, b) {
  a.appendChild(b)
};
t.append = Hf;
t.kk = If;
t.Mj = Jf;
t.removeNode = Y;
t.xl = Mf;
t.contains = Of;
var eg, fg = !R || U("9"), gg = R && !U("8");
function hg() {
}
hg.prototype.Zf = o;
hg.prototype.w = function() {
  if(!this.Zf) {
    this.Zf = j, this.m()
  }
};
hg.prototype.m = ba();
function ig(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
A(ig, hg);
t = ig.prototype;
t.m = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
t.Pd = o;
t.rf = j;
t.stopPropagation = function() {
  this.Pd = j
};
t.preventDefault = function() {
  this.rf = o
};
function jg(a) {
  a.preventDefault()
}
;var kg = R ? "focusin" : "DOMFocusIn";
var lg = new Function("a", "return a");
function mg(a, b) {
  a && this.Ld(a, b)
}
A(mg, ig);
var ng = [1, 4, 2];
t = mg.prototype;
t.target = k;
t.relatedTarget = k;
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
t.Pm = o;
t.Ma = k;
t.Ld = function(a, b) {
  var c = this.type = a.type;
  ig.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(S) {
      try {
        lg(d.nodeName)
      }catch(f) {
        d = k
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
  this.Pm = Nb ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Ma = a;
  delete this.rf;
  delete this.Pd
};
function og(a) {
  return(fg ? 0 == a.Ma.button : "click" == a.type ? j : !!(a.Ma.button & ng[0])) && !(T && Nb && a.ctrlKey)
}
t.stopPropagation = function() {
  mg.c.stopPropagation.call(this);
  this.Ma.stopPropagation ? this.Ma.stopPropagation() : this.Ma.cancelBubble = j
};
t.preventDefault = function() {
  mg.c.preventDefault.call(this);
  var a = this.Ma;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = o, gg) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
t.uj = p("Ma");
t.m = function() {
  mg.c.m.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.Ma = k
};
function pg() {
}
var qg = 0;
t = pg.prototype;
t.key = 0;
t.Be = o;
t.jh = o;
t.Ld = function(a, b, c, d, f, h) {
  na(a) ? this.Nj = j : a && a.handleEvent && na(a.handleEvent) ? this.Nj = o : e(Error("Invalid listener argument"));
  this.ve = a;
  this.jk = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.lg = h;
  this.jh = o;
  this.key = ++qg;
  this.Be = o
};
t.handleEvent = function(a) {
  return this.Nj ? this.ve.call(this.lg || this.src, a) : this.ve.handleEvent.call(this.ve, a)
};
function rg(a, b) {
  this.Tj = b;
  this.Ed = [];
  a > this.Tj && e(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.Ed.push(this.Fc ? this.Fc() : {})
  }
}
A(rg, hg);
rg.prototype.Fc = k;
rg.prototype.lj = k;
function sg(a) {
  return a.Ed.length ? a.Ed.pop() : a.Fc ? a.Fc() : {}
}
function tg(a, b) {
  a.Ed.length < a.Tj ? a.Ed.push(b) : ug(a, b)
}
function ug(a, b) {
  if(a.lj) {
    a.lj(b)
  }else {
    if(oa(b)) {
      if(na(b.w)) {
        b.w()
      }else {
        for(var c in b) {
          delete b[c]
        }
      }
    }
  }
}
rg.prototype.m = function() {
  rg.c.m.call(this);
  for(var a = this.Ed;a.length;) {
    ug(this, a.pop())
  }
  delete this.Ed
};
var vg, wg, xg, yg, zg, Ag, Bg, Cg, Dg, Eg, Fg;
(function() {
  function a() {
    return{$:0, hc:0}
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
    return new pg
  }
  function f() {
    return new mg
  }
  var h = Pb && !(0 <= Ta(Qb, "5.7")), i;
  Ag = function(a) {
    i = a
  };
  if(h) {
    vg = function() {
      return sg(l)
    };
    wg = function(a) {
      tg(l, a)
    };
    xg = function() {
      return sg(m)
    };
    yg = function(a) {
      tg(m, a)
    };
    zg = function() {
      return sg(n)
    };
    Bg = function() {
      tg(n, c())
    };
    Cg = function() {
      return sg(q)
    };
    Dg = function(a) {
      tg(q, a)
    };
    Eg = function() {
      return sg(r)
    };
    Fg = function(a) {
      tg(r, a)
    };
    var l = new rg(0, 600);
    l.Fc = a;
    var m = new rg(0, 600);
    m.Fc = b;
    var n = new rg(0, 600);
    n.Fc = c;
    var q = new rg(0, 600);
    q.Fc = d;
    var r = new rg(0, 600);
    r.Fc = f
  }else {
    vg = a, wg = ia, xg = b, yg = ia, zg = c, Bg = ia, Cg = d, Dg = ia, Eg = f, Fg = ia
  }
})();
var Gg = {}, Hg = {}, Ig = {}, Jg = {};
function Kg(a, b, c, d, f) {
  if(b) {
    if(ka(b)) {
      for(var h = 0;h < b.length;h++) {
        Kg(a, b[h], c, d, f)
      }
      return k
    }
    var d = !!d, i = Hg;
    b in i || (i[b] = vg());
    i = i[b];
    d in i || (i[d] = vg(), i.$++);
    var i = i[d], l = pa(a), m;
    i.hc++;
    if(i[l]) {
      m = i[l];
      for(h = 0;h < m.length;h++) {
        if(i = m[h], i.ve == c && i.lg == f) {
          if(i.Be) {
            break
          }
          return m[h].key
        }
      }
    }else {
      m = i[l] = xg(), i.$++
    }
    h = zg();
    h.src = a;
    i = Cg();
    i.Ld(c, h, a, b, d, f);
    c = i.key;
    h.key = c;
    m.push(i);
    Gg[c] = i;
    Ig[l] || (Ig[l] = xg());
    Ig[l].push(i);
    a.addEventListener ? (a == u || !a.gj) && a.addEventListener(b, h, d) : a.attachEvent(b in Jg ? Jg[b] : Jg[b] = "on" + b, h);
    return c
  }
  e(Error("Invalid event type"))
}
function Lg(a, b, c, d, f) {
  if(ka(b)) {
    for(var h = 0;h < b.length;h++) {
      Lg(a, b[h], c, d, f)
    }
    return k
  }
  a = Kg(a, b, c, d, f);
  Gg[a].jh = j;
  return a
}
function Mg(a, b, c, d, f) {
  if(ka(b)) {
    for(var h = 0;h < b.length;h++) {
      Mg(a, b[h], c, d, f)
    }
  }else {
    if(d = !!d, a = Ng(a, b, d)) {
      for(h = 0;h < a.length;h++) {
        if(a[h].ve == c && a[h].capture == d && a[h].lg == f) {
          Og(a[h].key);
          break
        }
      }
    }
  }
}
function Og(a) {
  if(Gg[a]) {
    var b = Gg[a];
    if(!b.Be) {
      var c = b.src, d = b.type, f = b.jk, h = b.capture;
      c.removeEventListener ? (c == u || !c.gj) && c.removeEventListener(d, f, h) : c.detachEvent && c.detachEvent(d in Jg ? Jg[d] : Jg[d] = "on" + d, f);
      c = pa(c);
      f = Hg[d][h][c];
      if(Ig[c]) {
        var i = Ig[c];
        nb(i, b);
        0 == i.length && delete Ig[c]
      }
      b.Be = j;
      f.Wj = j;
      Pg(d, h, c, f);
      delete Gg[a]
    }
  }
}
function Pg(a, b, c, d) {
  if(!d.vg && d.Wj) {
    for(var f = 0, h = 0;f < d.length;f++) {
      if(d[f].Be) {
        var i = d[f].jk;
        i.src = k;
        Bg(i);
        Dg(d[f])
      }else {
        f != h && (d[h] = d[f]), h++
      }
    }
    d.length = h;
    d.Wj = o;
    0 == h && (yg(d), delete Hg[a][b][c], Hg[a][b].$--, 0 == Hg[a][b].$ && (wg(Hg[a][b]), delete Hg[a][b], Hg[a].$--), 0 == Hg[a].$ && (wg(Hg[a]), delete Hg[a]))
  }
}
function Qg(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    vb(Ig, function(a) {
      for(var f = a.length - 1;0 <= f;f--) {
        var h = a[f];
        if(d || b == h.capture) {
          Og(h.key), c++
        }
      }
    })
  }else {
    if(a = pa(a), Ig[a]) {
      for(var a = Ig[a], f = a.length - 1;0 <= f;f--) {
        var h = a[f];
        if(d || b == h.capture) {
          Og(h.key), c++
        }
      }
    }
  }
}
function Ng(a, b, c) {
  var d = Hg;
  return b in d && (d = d[b], c in d && (d = d[c], a = pa(a), d[a])) ? d[a] : k
}
function Rg(a, b, c, d, f) {
  var h = 1, b = pa(b);
  if(a[b]) {
    a.hc--;
    a = a[b];
    a.vg ? a.vg++ : a.vg = 1;
    try {
      for(var i = a.length, l = 0;l < i;l++) {
        var m = a[l];
        m && !m.Be && (h &= Sg(m, f) !== o)
      }
    }finally {
      a.vg--, Pg(c, d, b, a)
    }
  }
  return Boolean(h)
}
function Sg(a, b) {
  var c = a.handleEvent(b);
  a.jh && Og(a.key);
  return c
}
Ag(function(a, b) {
  if(!Gg[a]) {
    return j
  }
  var c = Gg[a], d = c.type, f = Hg;
  if(!(d in f)) {
    return j
  }
  var f = f[d], h, i;
  eg === g && (eg = R && !u.addEventListener);
  if(eg) {
    h = b || ha("window.event");
    var l = j in f, m = o in f;
    if(l) {
      if(0 > h.keyCode || h.returnValue != g) {
        return j
      }
      a: {
        var n = o;
        if(0 == h.keyCode) {
          try {
            h.keyCode = -1;
            break a
          }catch(q) {
            n = j
          }
        }
        if(n || h.returnValue == g) {
          h.returnValue = j
        }
      }
    }
    n = Eg();
    n.Ld(h, this);
    h = j;
    try {
      if(l) {
        for(var r = xg(), x = n.currentTarget;x;x = x.parentNode) {
          r.push(x)
        }
        i = f[j];
        i.hc = i.$;
        for(var v = r.length - 1;!n.Pd && 0 <= v && i.hc;v--) {
          n.currentTarget = r[v], h &= Rg(i, r[v], d, j, n)
        }
        if(m) {
          i = f[o];
          i.hc = i.$;
          for(v = 0;!n.Pd && v < r.length && i.hc;v++) {
            n.currentTarget = r[v], h &= Rg(i, r[v], d, o, n)
          }
        }
      }else {
        h = Sg(c, n)
      }
    }finally {
      if(r) {
        r.length = 0, yg(r)
      }
      n.w();
      Fg(n)
    }
    return h
  }
  d = new mg(b, this);
  try {
    h = Sg(c, d)
  }finally {
    d.w()
  }
  return h
});
function Tg() {
}
A(Tg, hg);
t = Tg.prototype;
t.gj = j;
t.Dg = k;
t.wi = ca("Dg");
t.addEventListener = function(a, b, c, d) {
  Kg(this, a, b, c, d)
};
t.removeEventListener = function(a, b, c, d) {
  Mg(this, a, b, c, d)
};
t.dispatchEvent = function(a) {
  var b = a.type || a, c = Hg;
  if(b in c) {
    if(y(a)) {
      a = new ig(a, this)
    }else {
      if(a instanceof ig) {
        a.target = a.target || this
      }else {
        var d = a, a = new ig(b, this);
        Fb(a, d)
      }
    }
    var d = 1, f, c = c[b], b = j in c, h;
    if(b) {
      f = [];
      for(h = this;h;h = h.Dg) {
        f.push(h)
      }
      h = c[j];
      h.hc = h.$;
      for(var i = f.length - 1;!a.Pd && 0 <= i && h.hc;i--) {
        a.currentTarget = f[i], d &= Rg(h, f[i], a.type, j, a) && a.rf != o
      }
    }
    if(o in c) {
      if(h = c[o], h.hc = h.$, b) {
        for(i = 0;!a.Pd && i < f.length && h.hc;i++) {
          a.currentTarget = f[i], d &= Rg(h, f[i], a.type, o, a) && a.rf != o
        }
      }else {
        for(f = this;!a.Pd && f && h.hc;f = f.Dg) {
          a.currentTarget = f, d &= Rg(h, f, a.type, o, a) && a.rf != o
        }
      }
    }
    a = Boolean(d)
  }else {
    a = j
  }
  return a
};
t.m = function() {
  Tg.c.m.call(this);
  Qg(this);
  this.Dg = k
};
function Ug(a, b, c) {
  this.wg = a;
  this.md = c;
  this.t = b;
  Kg(b, [Vg, Wg, Xg, Yg], this);
  this.mc = k;
  this.Xa = [];
  this.lb = -1;
  this.fb = 0;
  this.Bd = this.ob = k
}
A(Ug, Tg);
t = Ug.prototype;
t.vm = 10;
t.Sk = j;
t.Oi = o;
t.Kk = o;
t.mn = o;
var Vg = "hilite", Wg = "select", Yg = "dismiss", Xg = "canceldismiss";
t = Ug.prototype;
t.handleEvent = function(a) {
  if(a.target == this.t) {
    switch(a.type) {
      case Vg:
        this.Zb(a.Hg);
        break;
      case Wg:
        Zg(this);
        break;
      case Xg:
        $g(this);
        break;
      case Yg:
        ah(this)
    }
  }
};
t.bc = function() {
  return this.t.T()
};
function bh(a) {
  var b = a.fb + a.Xa.length - 1;
  a.lb >= a.fb && a.lb < b ? a.Zb(a.lb + 1) : -1 == a.lb ? a.Zb(a.fb) : a.lb == b && (a.Oi ? a.Zb(-1) : a.Kk && a.Zb(a.fb))
}
function ch(a) {
  a.lb > a.fb ? a.Zb(a.lb - 1) : a.Oi && a.lb == a.fb ? a.Zb(-1) : a.Kk && (-1 == a.lb || a.lb == a.fb) && a.Zb(a.fb + a.Xa.length - 1)
}
t.Zb = function(a) {
  this.lb = a;
  this.t.Zb(a);
  return-1 != dh(this, a)
};
function Zg(a) {
  var b = dh(a, a.lb);
  if(-1 != b) {
    var b = a.Xa[b], c = a.md, d = b.toString();
    if(fa(g) ? 0 : c.we) {
      var f = eh(c, c.ga(), fh(c.qa)), h = gh(c, c.ga());
      c.Zm.test(d) || (d = d.replace(/[\s\xa0]+$/, "") + c.pl);
      c.vn && (0 != f && !Aa(h[f - 1]) && (d = " " + d), f == h.length - 1 && (d += " "));
      if(d != h[f]) {
        h[f] = d;
        d = c.qa;
        S && d.blur();
        d.value = h.join("");
        for(var i = 0, l = 0;l <= f;l++) {
          i += h[l].length
        }
        d.focus();
        f = i;
        h = c.qa;
        d = f;
        hh(h) ? h.selectionStart = d : R && (i = ih(h), l = i[0], l.inRange(i[1]) && (d = jh(h, d), l.collapse(j), l.move("character", d), l.select()));
        h = c.qa;
        hh(h) ? h.selectionEnd = f : R && (i = ih(h), d = i[1], i[0].inRange(d) && (f = jh(h, f), h = jh(h, fh(h)), d.collapse(j), d.moveEnd("character", f - h), d.select()))
      }
    }else {
      c.oa(d)
    }
    c.ri = j;
    a.Gc();
    a.dispatchEvent({type:"update", Hg:b});
    a.mn && a.md.update(j);
    return j
  }
  a.Gc();
  a.dispatchEvent({type:"update", Hg:k});
  return o
}
t.Gc = function() {
  this.lb = -1;
  this.mc = k;
  this.fb += this.Xa.length;
  this.Xa = [];
  window.clearTimeout(this.Bd);
  this.Bd = k;
  this.t.Gc()
};
function ah(a) {
  if(!a.Bd) {
    a.Bd = window.setTimeout(va(a.Gc, a), 100)
  }
}
function $g(a) {
  window.setTimeout(va(function() {
    if(this.Bd) {
      window.clearTimeout(this.Bd), this.Bd = k
    }
  }, a), 10)
}
t.m = function() {
  Ug.c.m.call(this);
  this.t.w();
  this.md.w();
  this.wg = k
};
t.um = function(a, b, c) {
  this.mc == a && this.pi(b, c)
};
t.pi = function(a, b) {
  var c = b ? dh(this, this.lb) : k;
  this.fb += this.Xa.length;
  this.Xa = a;
  for(var d = [], f = 0;f < a.length;++f) {
    d.push({id:this.fb + f, data:a[f]})
  }
  this.t.pi(d, this.mc, this.ob);
  this.Sk && 0 != d.length && this.mc ? this.Zb(c != k ? this.fb + c : this.fb) : this.lb = -1;
  this.dispatchEvent("suggestionsupdate")
};
function dh(a, b) {
  var c = b - a.fb;
  return 0 > c || c >= a.Xa.length ? -1 : c
}
t.bh = function(a) {
  var b = this.md;
  b.bh.apply(b, arguments)
};
function kh(a, b) {
  this.Md = a || 1;
  this.Bf = b || lh;
  this.hh = va(this.kn, this);
  this.hi = xa()
}
A(kh, Tg);
kh.prototype.enabled = o;
var lh = u.window;
t = kh.prototype;
t.Z = k;
t.setInterval = function(a) {
  this.Md = a;
  this.Z && this.enabled ? (this.stop(), this.start()) : this.Z && this.stop()
};
t.kn = function() {
  if(this.enabled) {
    var a = xa() - this.hi;
    if(0 < a && a < 0.8 * this.Md) {
      this.Z = this.Bf.setTimeout(this.hh, this.Md - a)
    }else {
      if(this.dispatchEvent(mh), this.enabled) {
        this.Z = this.Bf.setTimeout(this.hh, this.Md), this.hi = xa()
      }
    }
  }
};
t.start = function() {
  this.enabled = j;
  if(!this.Z) {
    this.Z = this.Bf.setTimeout(this.hh, this.Md), this.hi = xa()
  }
};
t.stop = function() {
  this.enabled = o;
  if(this.Z) {
    this.Bf.clearTimeout(this.Z), this.Z = k
  }
};
t.m = function() {
  kh.c.m.call(this);
  this.stop();
  delete this.Bf
};
var mh = "tick";
function nh(a, b, c) {
  na(a) ? c && (a = va(a, c)) : a && "function" == typeof a.handleEvent ? a = va(a.handleEvent, a) : e(Error("Invalid listener argument"));
  return 2147483647 < b ? -1 : lh.setTimeout(a, b || 0)
}
;function oh(a, b) {
  a.setAttribute("role", b);
  a.Bo = b
}
function ph(a, b, c) {
  a.setAttribute("aria-" + b, c)
}
;function fh(a) {
  var b;
  a: {
    var c = 0, d = 0;
    if(hh(a)) {
      c = a.selectionStart, d = -1
    }else {
      if(R) {
        var f = ih(a);
        b = f[0];
        f = f[1];
        if(b.inRange(f)) {
          b.setEndPoint("EndToStart", f);
          if("textarea" == a.type) {
            f.duplicate();
            c = a = b.text;
            for(d = o;!d;) {
              0 == b.compareEndPoints("StartToEnd", b) ? d = j : (b.moveEnd("character", -1), b.text == a ? c += "\r\n" : d = j)
            }
            b = [c.length, -1];
            break a
          }
          c = b.text.length;
          d = -1
        }
      }
    }
    b = [c, d]
  }
  return b[0]
}
function ih(a) {
  var b = a.ownerDocument || a.document, c = b.selection.createRange();
  "textarea" == a.type ? (b = b.body.createTextRange(), b.moveToElementText(a)) : b = a.createTextRange();
  return[b, c]
}
function jh(a, b) {
  if("textarea" == a.type) {
    b = a.value.substring(0, b).replace(/(\r\n|\r|\n)/g, "\n").length
  }
  return b
}
function hh(a) {
  try {
    return"number" == typeof a.selectionStart
  }catch(b) {
    return o
  }
}
;function qh(a) {
  this.Aa = a
}
A(qh, hg);
var rh = new rg(0, 100), sh = [];
qh.prototype.n = function(a, b, c, d, f) {
  ka(b) || (sh[0] = b, b = sh);
  for(var h = 0;h < b.length;h++) {
    var i = Kg(a, b[h], c || this, d || o, f || this.Aa || this);
    this.Y ? this.Y[i] = j : this.fd ? (this.Y = sg(rh), this.Y[this.fd] = j, this.fd = k, this.Y[i] = j) : this.fd = i
  }
  return this
};
qh.prototype.Ca = function(a, b, c, d, f) {
  if(this.fd || this.Y) {
    if(ka(b)) {
      for(var h = 0;h < b.length;h++) {
        this.Ca(a, b[h], c, d, f)
      }
    }else {
      a: {
        c = c || this;
        f = f || this.Aa || this;
        d = !!d;
        if(a = Ng(a, b, d)) {
          for(b = 0;b < a.length;b++) {
            if(a[b].ve == c && a[b].capture == d && a[b].lg == f) {
              a = a[b];
              break a
            }
          }
        }
        a = k
      }
      if(a) {
        if(a = a.key, Og(a), this.Y) {
          Ab(this.Y, a)
        }else {
          if(this.fd == a) {
            this.fd = k
          }
        }
      }
    }
  }
  return this
};
function th(a) {
  if(a.Y) {
    for(var b in a.Y) {
      Og(b), delete a.Y[b]
    }
    tg(rh, a.Y);
    a.Y = k
  }else {
    a.fd && Og(a.fd)
  }
}
qh.prototype.m = function() {
  qh.c.m.call(this);
  th(this)
};
qh.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function uh(a, b, c, d, f) {
  if(!R && (!T || !U("525"))) {
    return j
  }
  if(Nb && f) {
    return vh(a)
  }
  if(f && !d || !c && (17 == b || 18 == b) || R && d && b == a) {
    return o
  }
  switch(a) {
    case 13:
      return j;
    case 27:
      return!T
  }
  return vh(a)
}
function vh(a) {
  if(48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || T && 0 == a) {
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
;function wh(a, b) {
  a && xh(this, a, b)
}
A(wh, Tg);
t = wh.prototype;
t.k = k;
t.sg = k;
t.ci = k;
t.tg = k;
t.gd = -1;
t.ed = -1;
var yh = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, zh = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Ah = {61:187, 
59:186}, Bh = R || T && U("525");
t = wh.prototype;
t.Ph = function(a) {
  if(T && (17 == this.gd && !a.ctrlKey || 18 == this.gd && !a.altKey)) {
    this.ed = this.gd = -1
  }
  Bh && !uh(a.keyCode, this.gd, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.ed = S && a.keyCode in Ah ? Ah[a.keyCode] : a.keyCode
};
t.Rl = function() {
  this.ed = this.gd = -1
};
t.handleEvent = function(a) {
  var b = a.Ma, c, d;
  R && "keypress" == a.type ? (c = this.ed, d = 13 != c && 27 != c ? b.keyCode : 0) : T && "keypress" == a.type ? (c = this.ed, d = 0 <= b.charCode && 63232 > b.charCode && vh(c) ? b.charCode : 0) : Q ? (c = this.ed, d = vh(c) ? b.keyCode : 0) : (c = b.keyCode || this.ed, d = b.charCode || 0, Nb && 63 == d && !c && (c = 191));
  var f = c, h = b.keyIdentifier;
  c ? 63232 <= c && c in yh ? f = yh[c] : 25 == c && a.shiftKey && (f = 9) : h && h in zh && (f = zh[h]);
  a = f == this.gd;
  this.gd = f;
  b = new Ch(f, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.w()
  }
};
t.b = p("k");
function xh(a, b, c) {
  a.tg && a.detach();
  a.k = b;
  a.sg = Kg(a.k, "keypress", a, c);
  a.ci = Kg(a.k, "keydown", a.Ph, c, a);
  a.tg = Kg(a.k, "keyup", a.Rl, c, a)
}
t.detach = function() {
  if(this.sg) {
    Og(this.sg), Og(this.ci), Og(this.tg), this.tg = this.ci = this.sg = k
  }
  this.k = k;
  this.ed = this.gd = -1
};
t.m = function() {
  wh.c.m.call(this);
  this.detach()
};
function Ch(a, b, c, d) {
  d && this.Ld(d, g);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
A(Ch, mg);
function Dh(a, b, c, d) {
  d = d || 150;
  this.uf = a != k ? a : Eh;
  this.pl = this.uf.substring(0, 1);
  a = this.we ? "[\\s" + this.uf + "]+" : "[\\s]+";
  this.Ek = RegExp("^" + a + "|" + a + "$", "g");
  this.Zm = RegExp("\\s*[" + this.uf + "]$");
  this.Sj = b || "";
  this.Sm = this.we = c != k ? c : j;
  this.Z = 0 < d ? new kh(d) : k;
  this.kb = new qh(this);
  this.Zg = new qh(this);
  this.Pa = new wh;
  this.Pj = -1
}
A(Dh, hg);
var Eh = ",;";
t = Dh.prototype;
t.vn = j;
t.Al = j;
t.Fk = o;
t.an = j;
t.$m = j;
t.qa = k;
t.gi = "";
t.rd = o;
t.ri = o;
t.nn = j;
t.ga = function() {
  return this.qa.value
};
t.oa = function(a) {
  this.qa.value = a
};
t.bh = function(a) {
  for(var b = 0;b < arguments.length;b++) {
    var c = arguments[b];
    ph(c, "haspopup", j);
    this.kb.n(c, "focus", this.$c);
    this.kb.n(c, "blur", this.tc);
    this.qa || this.Zg.n(c, "keydown", this.Gm)
  }
};
t.m = function() {
  Dh.c.m.call(this);
  this.kb.w();
  delete this.kb;
  this.Zg.w();
  this.Pa.w()
};
t.tb = function(a) {
  switch(a.keyCode) {
    case 40:
      if(this.ka.bc()) {
        return this.Fk ? ch(this.ka) : bh(this.ka), a.preventDefault(), j
      }
      if(!this.we) {
        return this.update(j), a.preventDefault(), j
      }
      break;
    case 38:
      if(this.ka.bc()) {
        return this.Fk ? bh(this.ka) : ch(this.ka), a.preventDefault(), j
      }
      break;
    case 9:
      if(this.ka.bc() && !a.shiftKey) {
        if(this.update(), Zg(this.ka) && this.Sm) {
          return a.preventDefault(), j
        }
      }else {
        this.ka.Gc()
      }
      break;
    case 13:
      if(this.ka.bc()) {
        if(this.update(), Zg(this.ka)) {
          return a.preventDefault(), a.stopPropagation(), j
        }
      }else {
        this.ka.Gc()
      }
      break;
    case 27:
      if(this.ka.bc()) {
        return this.ka.Gc(), a.preventDefault(), a.stopPropagation(), j
      }
      break;
    case 229:
      if(!this.rd) {
        if(!this.rd) {
          this.kb.n(this.qa, "keyup", this.dk), this.kb.n(this.qa, "keypress", this.ck), this.rd = j
        }
        return j
      }
      break;
    default:
      this.Z && !this.nn && (this.Z.stop(), this.Z.start())
  }
  return Fh(this, a)
};
function Fh(a, b) {
  var c = a.we && b.charCode && -1 != a.uf.indexOf(String.fromCharCode(b.charCode));
  a.an && c && a.update();
  return a.$m && c && Zg(a.ka) ? (b.preventDefault(), j) : o
}
t.ig = s(o);
t.$c = function(a) {
  th(this.Zg);
  this.ka && $g(this.ka);
  if(a.target != this.qa) {
    this.qa = a.target || k, this.Z && (this.Z.start(), this.kb.n(this.Z, mh, this.Bg)), this.gi = this.ga(), xh(this.Pa, this.qa), this.kb.n(this.Pa, "key", this.Od), R && this.kb.n(this.qa, "keypress", this.bk)
  }
};
t.tc = function() {
  if(this.qa) {
    this.kb.Ca(this.Pa, "key", this.Od), this.Pa.detach(), this.kb.Ca(this.qa, "keyup", this.ig), R && this.kb.Ca(this.qa, "keypress", this.bk), this.rd && Gh(this), this.qa = k, this.Z && (this.Z.stop(), this.kb.Ca(this.Z, mh, this.Bg)), this.ka && ah(this.ka)
  }
};
t.Bg = function() {
  this.update()
};
t.Gm = function(a) {
  this.$c(a)
};
t.Od = function(a) {
  this.Pj = a.keyCode;
  this.ka && this.tb(a)
};
t.ck = function() {
  this.rd && 229 != this.Pj && Gh(this)
};
t.dk = function(a) {
  this.rd && (13 == a.keyCode || 77 == a.keyCode && a.ctrlKey) && Gh(this)
};
function Gh(a) {
  if(a.rd) {
    a.rd = o, a.kb.Ca(a.qa, "keypress", a.ck), a.kb.Ca(a.qa, "keyup", a.dk)
  }
}
t.bk = function(a) {
  Fh(this, a)
};
t.update = function(a) {
  if(a || this.qa && this.ga() != this.gi) {
    if(a || !this.ri) {
      var b, a = fh(this.qa);
      b = this.ga();
      a = gh(this, b)[eh(this, b, a)];
      b = this.Ek ? ("" + a).replace(this.Ek, "") : a;
      if(this.ka && (this.ka.ob = this.qa, a = this.ka, this.ga(), a.mc != b)) {
        a.mc = b;
        b = a.wg;
        var c = a.mc, d = a.vm, f = va(a.um, a), h = b.qn, i = new Hh(b.pn);
        Ih(i, "token", c);
        Ih(i, "max_matches", "" + d);
        Ih(i, "use_similar", "" + Number(h));
        if(d = i.toString()) {
          c = va(b.yn, b, c, f), b.M.wc() && b.M.abort(), b.ei && Og(b.ei), b.ei = Lg(b.M, "success", c), b.M.send(d, b.wm, b.va, b.gm)
        }
        $g(a)
      }
    }
    this.gi = this.ga()
  }
  this.ri = o
};
function eh(a, b, c) {
  a = gh(a, b);
  if(c == b.length) {
    return a.length - 1
  }
  for(var d = b = 0, f = 0;d < a.length && f < c;d++) {
    f += a[d].length, b = d
  }
  return b
}
function gh(a, b) {
  if(!a.we) {
    return[b]
  }
  for(var c = ("" + b).split(""), d = [], f = [], h = 0, i = o;h < c.length;h++) {
    if(a.Sj && -1 != a.Sj.indexOf(c[h])) {
      if(a.Al && !i) {
        d.push(f.join("")), f.length = 0
      }
      f.push(c[h]);
      i = !i
    }else {
      !i && -1 != a.uf.indexOf(c[h]) ? (f.push(c[h]), d.push(f.join("")), f.length = 0) : f.push(c[h])
    }
  }
  d.push(f.join(""));
  return d
}
;function Jh(a) {
  if("function" == typeof a.Hd) {
    return a.Hd()
  }
  if(y(a)) {
    return a.split("")
  }
  if(la(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return yb(a)
}
function Kh(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(la(a) || y(a)) {
      fb(a, b, c)
    }else {
      var d;
      if("function" == typeof a.ne) {
        d = a.ne()
      }else {
        if("function" != typeof a.Hd) {
          if(la(a) || y(a)) {
            d = [];
            for(var f = a.length, h = 0;h < f;h++) {
              d.push(h)
            }
          }else {
            d = zb(a)
          }
        }else {
          d = g
        }
      }
      for(var f = Jh(a), h = f.length, i = 0;i < h;i++) {
        b.call(c, f[i], d && d[i], a)
      }
    }
  }
}
;var Lh = "StopIteration" in u ? u.StopIteration : Error("StopIteration");
function Mh() {
}
Mh.prototype.next = function() {
  e(Lh)
};
Mh.prototype.td = function() {
  return this
};
function Nh(a) {
  if(a instanceof Mh) {
    return a
  }
  if("function" == typeof a.td) {
    return a.td(o)
  }
  if(la(a)) {
    var b = 0, c = new Mh;
    c.next = function() {
      for(;;) {
        b >= a.length && e(Lh);
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
function Oh(a, b, c) {
  if(la(a)) {
    try {
      fb(a, b, c)
    }catch(d) {
      d !== Lh && e(d)
    }
  }else {
    a = Nh(a);
    try {
      for(;;) {
        b.call(c, a.next(), g, a)
      }
    }catch(f) {
      f !== Lh && e(f)
    }
  }
}
function Ph(a, b) {
  var a = Nh(a), c = new Mh;
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
function Qh(a, b) {
  a = Nh(a);
  try {
    for(;;) {
      if(b.call(g, a.next(), g, a)) {
        return j
      }
    }
  }catch(c) {
    c !== Lh && e(c)
  }
  return o
}
function Rh(a) {
  var b = arguments, c = b.length, d = 0, f = new Mh;
  f.next = function() {
    try {
      return d >= c && e(Lh), Nh(b[d]).next()
    }catch(a) {
      return(a !== Lh || d >= c) && e(a), d++, this.next()
    }
  };
  return f
}
;function Sh(a, b) {
  this.ec = {};
  this.Y = [];
  var c = arguments.length;
  if(1 < c) {
    c % 2 && e(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    if(a) {
      a instanceof Sh ? (c = a.ne(), d = a.Hd()) : (c = zb(a), d = yb(a));
      for(var f = 0;f < c.length;f++) {
        this.set(c[f], d[f])
      }
    }
  }
}
t = Sh.prototype;
t.$ = 0;
t.If = 0;
t.Hd = function() {
  Th(this);
  for(var a = [], b = 0;b < this.Y.length;b++) {
    a.push(this.ec[this.Y[b]])
  }
  return a
};
t.ne = function() {
  Th(this);
  return this.Y.concat()
};
t.Tc = function(a) {
  return Uh(this.ec, a)
};
t.Yh = function() {
  return 0 == this.$
};
t.clear = function() {
  this.ec = {};
  this.If = this.$ = this.Y.length = 0
};
t.remove = function(a) {
  return Uh(this.ec, a) ? (delete this.ec[a], this.$--, this.If++, this.Y.length > 2 * this.$ && Th(this), j) : o
};
function Th(a) {
  if(a.$ != a.Y.length) {
    for(var b = 0, c = 0;b < a.Y.length;) {
      var d = a.Y[b];
      Uh(a.ec, d) && (a.Y[c++] = d);
      b++
    }
    a.Y.length = c
  }
  if(a.$ != a.Y.length) {
    for(var f = {}, c = b = 0;b < a.Y.length;) {
      d = a.Y[b], Uh(f, d) || (a.Y[c++] = d, f[d] = 1), b++
    }
    a.Y.length = c
  }
}
t.get = function(a, b) {
  return Uh(this.ec, a) ? this.ec[a] : b
};
t.set = function(a, b) {
  Uh(this.ec, a) || (this.$++, this.Y.push(a), this.If++);
  this.ec[a] = b
};
t.ua = function() {
  return new Sh(this)
};
t.td = function(a) {
  Th(this);
  var b = 0, c = this.Y, d = this.ec, f = this.If, h = this, i = new Mh;
  i.next = function() {
    for(;;) {
      f != h.If && e(Error("The map has changed since the iterator was created"));
      b >= c.length && e(Lh);
      var i = c[b++];
      return a ? i : d[i]
    }
  };
  return i
};
function Uh(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;var Vh = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Hh(a, b) {
  var c;
  a instanceof Hh ? (this.Fe(b == k ? a.uc : b), Wh(this, a.Pc), Xh(this, a.Gf), Yh(this, a.Cd), Zh(this, a.ze), $h(this, a.ye), ai(this, a.yc.ua()), bi(this, a.Ze)) : a && (c = ("" + a).match(Vh)) ? (this.Fe(!!b), Wh(this, c[1] || "", j), Xh(this, c[2] || "", j), Yh(this, c[3] || "", j), Zh(this, c[4]), $h(this, c[5] || "", j), ai(this, c[6] || "", j), bi(this, c[7] || "", j)) : (this.Fe(!!b), this.yc = new ci(k, this, this.uc))
}
t = Hh.prototype;
t.Pc = "";
t.Gf = "";
t.Cd = "";
t.ze = k;
t.ye = "";
t.Ze = "";
t.om = o;
t.uc = o;
t.toString = function() {
  if(this.Ub) {
    return this.Ub
  }
  var a = [];
  this.Pc && a.push(di(this.Pc, ei), ":");
  this.Cd && (a.push("//"), this.Gf && a.push(di(this.Gf, ei), "@"), a.push(y(this.Cd) ? encodeURIComponent(this.Cd) : k), this.ze != k && a.push(":", "" + this.ze));
  this.ye && (this.Cd && "/" != this.ye.charAt(0) && a.push("/"), a.push(di(this.ye, fi)));
  var b = "" + this.yc;
  b && a.push("?", b);
  this.Ze && a.push("#", di(this.Ze, gi));
  return this.Ub = a.join("")
};
t.ua = function() {
  var a = this.Pc, b = this.Gf, c = this.Cd, d = this.ze, f = this.ye, h = this.yc.ua(), i = this.Ze, l = new Hh(k, this.uc);
  a && Wh(l, a);
  b && Xh(l, b);
  c && Yh(l, c);
  d && Zh(l, d);
  f && $h(l, f);
  h && ai(l, h);
  i && bi(l, i);
  return l
};
function Wh(a, b, c) {
  hi(a);
  delete a.Ub;
  a.Pc = c ? b ? decodeURIComponent(b) : "" : b;
  if(a.Pc) {
    a.Pc = a.Pc.replace(/:$/, "")
  }
}
function Xh(a, b, c) {
  hi(a);
  delete a.Ub;
  a.Gf = c ? b ? decodeURIComponent(b) : "" : b
}
function Yh(a, b, c) {
  hi(a);
  delete a.Ub;
  a.Cd = c ? b ? decodeURIComponent(b) : "" : b
}
function Zh(a, b) {
  hi(a);
  delete a.Ub;
  b ? (b = Number(b), (isNaN(b) || 0 > b) && e(Error("Bad port number " + b)), a.ze = b) : a.ze = k
}
function $h(a, b, c) {
  hi(a);
  delete a.Ub;
  a.ye = c ? b ? decodeURIComponent(b) : "" : b
}
function ai(a, b, c) {
  hi(a);
  delete a.Ub;
  b instanceof ci ? (a.yc = b, a.yc.Di = a, a.yc.Fe(a.uc)) : (c || (b = di(b, ii)), a.yc = new ci(b, a, a.uc))
}
function Ih(a, b, c) {
  hi(a);
  delete a.Ub;
  a.yc.set(b, c)
}
function bi(a, b, c) {
  hi(a);
  delete a.Ub;
  a.Ze = c ? b ? decodeURIComponent(b) : "" : b
}
function hi(a) {
  a.om && e(Error("Tried to modify a read-only Uri"))
}
t.Fe = function(a) {
  this.uc = a;
  this.yc && this.yc.Fe(a);
  return this
};
var ji = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function di(a, b) {
  var c = k;
  y(a) && (c = a, ji.test(c) || (c = encodeURI(a)), 0 <= c.search(b) && (c = c.replace(b, ki)));
  return c
}
function ki(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var ei = /[#\/\?@]/g, fi = /[\#\?]/g, ii = /[\#\?@]/g, gi = /#/g;
function ci(a, b, c) {
  this.Hc = a || k;
  this.Di = b || k;
  this.uc = !!c
}
function li(a) {
  if(!a.ha && (a.ha = new Sh, a.Hc)) {
    for(var b = a.Hc.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), f = k, h = k;
      0 <= d ? (f = b[c].substring(0, d), h = b[c].substring(d + 1)) : f = b[c];
      f = decodeURIComponent(f.replace(/\+/g, " "));
      f = mi(a, f);
      a.add(f, h ? decodeURIComponent(h.replace(/\+/g, " ")) : "")
    }
  }
}
t = ci.prototype;
t.ha = k;
t.$ = k;
t.add = function(a, b) {
  li(this);
  ni(this);
  a = mi(this, a);
  if(this.Tc(a)) {
    var c = this.ha.get(a);
    ka(c) ? c.push(b) : this.ha.set(a, [c, b])
  }else {
    this.ha.set(a, b)
  }
  this.$++;
  return this
};
t.remove = function(a) {
  li(this);
  a = mi(this, a);
  if(this.ha.Tc(a)) {
    ni(this);
    var b = this.ha.get(a);
    ka(b) ? this.$ -= b.length : this.$--;
    return this.ha.remove(a)
  }
  return o
};
t.clear = function() {
  ni(this);
  this.ha && this.ha.clear();
  this.$ = 0
};
t.Yh = function() {
  li(this);
  return 0 == this.$
};
t.Tc = function(a) {
  li(this);
  a = mi(this, a);
  return this.ha.Tc(a)
};
t.ne = function() {
  li(this);
  for(var a = this.ha.Hd(), b = this.ha.ne(), c = [], d = 0;d < b.length;d++) {
    var f = a[d];
    if(ka(f)) {
      for(var h = 0;h < f.length;h++) {
        c.push(b[d])
      }
    }else {
      c.push(b[d])
    }
  }
  return c
};
t.Hd = function(a) {
  li(this);
  if(a) {
    if(a = mi(this, a), this.Tc(a)) {
      var b = this.ha.get(a);
      if(ka(b)) {
        return b
      }
      a = [];
      a.push(b)
    }else {
      a = []
    }
  }else {
    for(var b = this.ha.Hd(), a = [], c = 0;c < b.length;c++) {
      var d = b[c];
      ka(d) ? rb(a, d) : a.push(d)
    }
  }
  return a
};
t.set = function(a, b) {
  li(this);
  ni(this);
  a = mi(this, a);
  if(this.Tc(a)) {
    var c = this.ha.get(a);
    ka(c) ? this.$ -= c.length : this.$--
  }
  this.ha.set(a, b);
  this.$++;
  return this
};
t.get = function(a, b) {
  li(this);
  a = mi(this, a);
  if(this.Tc(a)) {
    var c = this.ha.get(a);
    return ka(c) ? c[0] : c
  }
  return b
};
t.toString = function() {
  if(this.Hc) {
    return this.Hc
  }
  if(!this.ha) {
    return""
  }
  for(var a = [], b = 0, c = this.ha.ne(), d = 0;d < c.length;d++) {
    var f = c[d], h = Ga(f), f = this.ha.get(f);
    if(ka(f)) {
      for(var i = 0;i < f.length;i++) {
        0 < b && a.push("&"), a.push(h), "" !== f[i] && a.push("=", Ga(f[i])), b++
      }
    }else {
      0 < b && a.push("&"), a.push(h), "" !== f && a.push("=", Ga(f)), b++
    }
  }
  return this.Hc = a.join("")
};
function ni(a) {
  delete a.yh;
  delete a.Hc;
  a.Di && delete a.Di.Ub
}
t.ua = function() {
  var a = new ci;
  if(this.yh) {
    a.yh = this.yh
  }
  if(this.Hc) {
    a.Hc = this.Hc
  }
  if(this.ha) {
    a.ha = this.ha.ua()
  }
  return a
};
function mi(a, b) {
  var c = "" + b;
  a.uc && (c = c.toLowerCase());
  return c
}
t.Fe = function(a) {
  a && !this.uc && (li(this), ni(this), Kh(this.ha, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.uc = a
};
t.extend = function(a) {
  for(var b = 0;b < arguments.length;b++) {
    Kh(arguments[b], function(a, b) {
      this.add(b, a)
    }, this)
  }
};
function oi(a) {
  return eval("(" + a + ")")
}
;function pi(a) {
  return qi(a || arguments.callee.caller, [])
}
function qi(a, b) {
  var c = [];
  if(mb(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(ri(a) + "(");
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
            h = (h = ri(h)) ? h : "[fn]";
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
        c.push(qi(a.caller, b))
      }catch(i) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function ri(a) {
  a = "" + a;
  if(!si[a]) {
    var b = /function ([^\(]+)/.exec(a);
    si[a] = b ? b[1] : "[Anonymous]"
  }
  return si[a]
}
var si = {};
function ti(a, b, c, d, f) {
  this.reset(a, b, c, d, f)
}
ti.prototype.bn = 0;
ti.prototype.qj = k;
ti.prototype.pj = k;
var ui = 0;
ti.prototype.reset = function(a, b, c, d, f) {
  this.bn = "number" == typeof f ? f : ui++;
  this.Do = d || xa();
  this.mf = a;
  this.ym = b;
  this.xo = c;
  delete this.qj;
  delete this.pj
};
ti.prototype.tk = ca("mf");
function vi(a) {
  this.zm = a
}
vi.prototype.ma = k;
vi.prototype.mf = k;
vi.prototype.Da = k;
vi.prototype.Gj = k;
function wi(a, b) {
  this.name = a;
  this.value = b
}
wi.prototype.toString = p("name");
var xi = new wi("SHOUT", 1200), yi = new wi("SEVERE", 1E3), zi = new wi("WARNING", 900), Ai = new wi("INFO", 800), Bi = new wi("CONFIG", 700), Ci = new wi("FINE", 500), Di = new wi("FINEST", 300);
t = vi.prototype;
t.getParent = p("ma");
t.tk = ca("mf");
function Ei(a) {
  if(a.mf) {
    return a.mf
  }
  if(a.ma) {
    return Ei(a.ma)
  }
  ab("Root logger has no level set.");
  return k
}
t.log = function(a, b, c) {
  if(a.value >= Ei(this).value) {
    a = this.Bl(a, b, c);
    u.console && u.console.markTimeline && u.console.markTimeline("log:" + a.ym);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.Gj) {
        for(var f = 0, h = g;h = c.Gj[f];f++) {
          h(d)
        }
      }
      b = b.getParent()
    }
  }
};
t.Bl = function(a, b, c) {
  var d = new ti(a, "" + b, this.zm);
  if(c) {
    d.qj = c;
    var f;
    var h = arguments.callee.caller;
    try {
      var i;
      var l = ha("window.location.href");
      if(y(c)) {
        i = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:l, stack:"Not available"}
      }else {
        var m, n, q = o;
        try {
          m = c.lineNumber || c.vo || "Not available"
        }catch(r) {
          m = "Not available", q = j
        }
        try {
          n = c.fileName || c.filename || c.sourceURL || l
        }catch(x) {
          n = "Not available", q = j
        }
        i = q || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:m, fileName:n, stack:c.stack || "Not available"} : c
      }
      f = "Message: " + Ha(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + Ha(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + Ha(pi(h) + "-> ")
    }catch(v) {
      f = "Exception trying to expose exception! You win, we lose. " + v
    }
    d.pj = f
  }
  return d
};
function Fi(a, b) {
  a.log(yi, b, g)
}
function Gi(a, b) {
  a.log(zi, b, g)
}
t.info = function(a, b) {
  this.log(Ai, a, b)
};
function Hi(a, b) {
  a.log(Ci, b, g)
}
var Ii = {}, Ji = k;
function Ki(a) {
  Ji || (Ji = new vi(""), Ii[""] = Ji, Ji.tk(Bi));
  var b;
  if(!(b = Ii[a])) {
    b = new vi(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Ki(a.substr(0, c));
    if(!c.Da) {
      c.Da = {}
    }
    c.Da[d] = b;
    b.ma = c;
    Ii[a] = b
  }
  return b
}
;function Li() {
}
Li.prototype.Vi = k;
function Mi(a) {
  var b;
  if(!(b = a.Vi)) {
    b = {}, Ni(a) && (b[0] = j, b[1] = j), b = a.Vi = b
  }
  return b
}
;function Oi() {
  return Pi(Qi)
}
var Qi;
function Ri() {
}
A(Ri, Li);
function Pi(a) {
  return(a = Ni(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
Ri.prototype.Vh = k;
function Ni(a) {
  if(!a.Vh && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.Vh = d
      }catch(f) {
      }
    }
    e(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.Vh
}
Qi = new Ri;
function Si() {
  if(S) {
    this.Ad = {}, this.Xg = {}, this.Og = []
  }
}
Si.prototype.Ba = Ki("goog.net.xhrMonitor");
Si.prototype.ya = S;
Si.prototype.ic = function(a) {
  this.ya = S && a
};
function Ti(a) {
  var b = Ui;
  if(b.ya) {
    var c = y(a) ? a : oa(a) ? pa(a) : "";
    b.Ba.log(Di, "Pushing context: " + a + " (" + c + ")", g);
    b.Og.push(c)
  }
}
function Vi() {
  var a = Ui;
  if(a.ya) {
    var b = a.Og.pop();
    a.Ba.log(Di, "Popping context: " + b, g);
    Wi(a, b)
  }
}
function Xi(a) {
  var b = Ui;
  if(b.ya) {
    a = pa(a);
    Hi(b.Ba, "Opening XHR : " + a);
    for(var c = 0;c < b.Og.length;c++) {
      var d = b.Og[c];
      Yi(b.Ad, d, a);
      Yi(b.Xg, a, d)
    }
  }
}
function Wi(a, b) {
  var c = a.Xg[b], d = a.Ad[b];
  c && d && (a.Ba.log(Di, "Updating dependent contexts", g), fb(c, function(a) {
    fb(d, function(b) {
      Yi(this.Ad, a, b);
      Yi(this.Xg, b, a)
    }, this)
  }, a))
}
function Yi(a, b, c) {
  a[b] || (a[b] = []);
  mb(a[b], c) || a[b].push(c)
}
var Ui = new Si;
function Zi(a) {
  this.headers = new Sh;
  this.Yg = a || k
}
A(Zi, Tg);
Zi.prototype.Ba = Ki("goog.net.XhrIo");
var $i = /^https?:?$/i;
t = Zi.prototype;
t.Qc = o;
t.M = k;
t.Wg = k;
t.lf = "";
t.Qj = "";
t.jf = 0;
t.kf = "";
t.Eh = o;
t.og = o;
t.Wh = o;
t.Jd = o;
t.Pg = 0;
t.Td = k;
t.nk = "";
t.wn = o;
t.send = function(a, b, c, d) {
  this.M && e(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b || "GET";
  this.lf = a;
  this.kf = "";
  this.jf = 0;
  this.Qj = b;
  this.Eh = o;
  this.Qc = j;
  this.M = this.Yg ? Pi(this.Yg) : new Oi;
  this.Wg = this.Yg ? Mi(this.Yg) : Mi(Qi);
  Xi(this.M);
  this.M.onreadystatechange = va(this.ek, this);
  try {
    Hi(this.Ba, aj(this, "Opening Xhr")), this.Wh = j, this.M.open(b, a, j), this.Wh = o
  }catch(f) {
    Hi(this.Ba, aj(this, "Error opening Xhr: " + f.message));
    bj(this, f);
    return
  }
  var a = c || "", h = this.headers.ua();
  d && Kh(d, function(a, b) {
    h.set(b, a)
  });
  "POST" == b && !h.Tc("Content-Type") && h.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  Kh(h, function(a, b) {
    this.M.setRequestHeader(b, a)
  }, this);
  if(this.nk) {
    this.M.responseType = this.nk
  }
  if("withCredentials" in this.M) {
    this.M.withCredentials = this.wn
  }
  try {
    if(this.Td) {
      lh.clearTimeout(this.Td), this.Td = k
    }
    if(0 < this.Pg) {
      Hi(this.Ba, aj(this, "Will abort after " + this.Pg + "ms if incomplete")), this.Td = lh.setTimeout(va(this.ln, this), this.Pg)
    }
    Hi(this.Ba, aj(this, "Sending request"));
    this.og = j;
    this.M.send(a);
    this.og = o
  }catch(i) {
    Hi(this.Ba, aj(this, "Send error: " + i.message)), bj(this, i)
  }
};
t.dispatchEvent = function(a) {
  if(this.M) {
    Ti(this.M);
    try {
      return Zi.c.dispatchEvent.call(this, a)
    }finally {
      Vi()
    }
  }else {
    return Zi.c.dispatchEvent.call(this, a)
  }
};
t.ln = function() {
  if("undefined" != typeof da && this.M) {
    this.kf = "Timed out after " + this.Pg + "ms, aborting", this.jf = 8, Hi(this.Ba, aj(this, this.kf)), this.dispatchEvent("timeout"), this.abort(8)
  }
};
function bj(a, b) {
  a.Qc = o;
  if(a.M) {
    a.Jd = j, a.M.abort(), a.Jd = o
  }
  a.kf = b;
  a.jf = 5;
  cj(a);
  dj(a)
}
function cj(a) {
  if(!a.Eh) {
    a.Eh = j, a.dispatchEvent("complete"), a.dispatchEvent("error")
  }
}
t.abort = function(a) {
  if(this.M && this.Qc) {
    Hi(this.Ba, aj(this, "Aborting")), this.Qc = o, this.Jd = j, this.M.abort(), this.Jd = o, this.jf = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), dj(this)
  }
};
t.m = function() {
  if(this.M) {
    if(this.Qc) {
      this.Qc = o, this.Jd = j, this.M.abort(), this.Jd = o
    }
    dj(this, j)
  }
  Zi.c.m.call(this)
};
t.ek = function() {
  !this.Wh && !this.og && !this.Jd ? this.Hm() : ej(this)
};
t.Hm = function() {
  ej(this)
};
function ej(a) {
  if(a.Qc && "undefined" != typeof da) {
    if(a.Wg[1] && 4 == fj(a) && 2 == gj(a)) {
      Hi(a.Ba, aj(a, "Local request error detected and ignored"))
    }else {
      if(a.og && 4 == fj(a)) {
        lh.setTimeout(va(a.ek, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == fj(a)) {
          Hi(a.Ba, aj(a, "Request complete"));
          a.Qc = o;
          var b;
          a: {
            switch(gj(a)) {
              case 0:
                b = y(a.lf) ? a.lf.match(Vh)[1] || k : a.lf.Pc;
                b = !(b ? $i.test(b) : self.location ? $i.test(self.location.protocol) : 1);
                break a;
              case 200:
              ;
              case 204:
              ;
              case 304:
                b = j;
                break a;
              default:
                b = o
            }
          }
          if(b) {
            a.dispatchEvent("complete"), a.dispatchEvent("success")
          }else {
            a.jf = 6;
            var c;
            try {
              c = 2 < fj(a) ? a.M.statusText : ""
            }catch(d) {
              Hi(a.Ba, "Can not get status: " + d.message), c = ""
            }
            a.kf = c + " [" + gj(a) + "]";
            cj(a)
          }
          dj(a)
        }
      }
    }
  }
}
function dj(a, b) {
  if(a.M) {
    var c = a.M, d = a.Wg[0] ? ia : k;
    a.M = k;
    a.Wg = k;
    if(a.Td) {
      lh.clearTimeout(a.Td), a.Td = k
    }
    b || (Ti(c), a.dispatchEvent("ready"), Vi());
    var f = Ui;
    if(f.ya) {
      var h = pa(c);
      Hi(f.Ba, "Closing XHR : " + h);
      delete f.Xg[h];
      for(var i in f.Ad) {
        nb(f.Ad[i], h), 0 == f.Ad[i].length && delete f.Ad[i]
      }
    }
    try {
      c.onreadystatechange = d
    }catch(l) {
      Fi(a.Ba, "Problem encountered resetting onreadystatechange: " + l.message)
    }
  }
}
t.wc = function() {
  return!!this.M
};
function fj(a) {
  return a.M ? a.M.readyState : 0
}
function gj(a) {
  try {
    return 2 < fj(a) ? a.M.status : -1
  }catch(b) {
    return Gi(a.Ba, "Can not get status: " + b.message), -1
  }
}
function aj(a, b) {
  return b + " [" + a.Qj + " " + a.lf + " " + gj(a) + "]"
}
;function hj(a, b) {
  this.pn = a;
  this.qn = !b;
  this.M = new Zi
}
A(hj, hg);
t = hj.prototype;
t.wm = "GET";
t.va = g;
t.gm = k;
t.ei = k;
t.Ya = ca("va");
t.yn = function(a, b, c) {
  var d;
  c = c.target;
  try {
    d = c.M ? c.M.responseText : ""
  }catch(f) {
    Hi(c.Ba, "Can not get responseText: " + f.message), d = ""
  }
  c = [];
  if(d) {
    try {
      c = oi(d)
    }catch(h) {
    }
  }
  b(a, c)
};
t.m = function() {
  this.M.w();
  hj.c.m.call(this)
};
function ij(a, b, c, d) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = d
}
ij.prototype.ua = function() {
  return new ij(this.top, this.right, this.bottom, this.left)
};
ij.prototype.toString = function() {
  return"(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
};
ij.prototype.contains = function(a) {
  return!this || !a ? o : a instanceof ij ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom
};
function jj(a, b, c, d) {
  this.left = a;
  this.top = b;
  this.width = c;
  this.height = d
}
jj.prototype.ua = function() {
  return new jj(this.left, this.top, this.width, this.height)
};
jj.prototype.toString = function() {
  return"(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
};
jj.prototype.contains = function(a) {
  return a instanceof jj ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
jj.prototype.Jh = function() {
  return new vf(this.width, this.height)
};
function kj(a, b, c) {
  y(b) ? lj(a, c, b) : vb(b, wa(lj, a))
}
function lj(a, b, c) {
  a.style[Ya(c)] = b
}
function mj(a, b) {
  var c = X(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k)) ? c[b] || c.getPropertyValue(b) : ""
}
function nj(a, b) {
  return mj(a, b) || (a.currentStyle ? a.currentStyle[b] : k) || a.style[b]
}
function oj(a, b, c) {
  var d, f = S && (Nb || cf) && U("1.9");
  b instanceof tf ? (d = b.x, b = b.y) : (d = b, b = c);
  a.style.left = pj(d, f);
  a.style.top = pj(b, f)
}
function qj(a) {
  a = a ? 9 == a.nodeType ? a : X(a) : document;
  return R && !U(9) && !cg(V(a)) ? a.body : a.documentElement
}
function rj(a) {
  var b = a.getBoundingClientRect();
  if(R) {
    a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop
  }
  return b
}
function sj(a) {
  if(R) {
    return a.offsetParent
  }
  for(var b = X(a), c = nj(a, "position"), d = "fixed" == c || "absolute" == c, a = a.parentNode;a && a != b;a = a.parentNode) {
    if(c = nj(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c)) {
      return a
    }
  }
  return k
}
function tj(a) {
  for(var b = new ij(0, Infinity, Infinity, 0), c = V(a), d = c.da().body, f = !T && Af(c.xa) ? c.xa.documentElement : c.xa.body, h;a = sj(a);) {
    if((!R || 0 != a.clientWidth) && (!T || 0 != a.clientHeight || a != d) && (a.scrollWidth != a.clientWidth || a.scrollHeight != a.clientHeight) && "visible" != nj(a, "overflow")) {
      var i = uj(a), l;
      l = a;
      if(S && !U("1.9")) {
        var m = parseFloat(mj(l, "borderLeftWidth"));
        if(vj(l)) {
          var n = l.offsetWidth - l.clientWidth - m - parseFloat(mj(l, "borderRightWidth")), m = m + n
        }
        l = new tf(m, parseFloat(mj(l, "borderTopWidth")))
      }else {
        l = new tf(l.clientLeft, l.clientTop)
      }
      i.x += l.x;
      i.y += l.y;
      b.top = Math.max(b.top, i.y);
      b.right = Math.min(b.right, i.x + a.clientWidth);
      b.bottom = Math.min(b.bottom, i.y + a.clientHeight);
      b.left = Math.max(b.left, i.x);
      h = h || a != f
    }
  }
  d = f.scrollLeft;
  f = f.scrollTop;
  T ? (b.left += d, b.top += f) : (b.left = Math.max(b.left, d), b.top = Math.max(b.top, f));
  if(!h || T) {
    b.right += d, b.bottom += f
  }
  c = Df(c.Oa());
  b.right = Math.min(b.right, d + c.width);
  b.bottom = Math.min(b.bottom, f + c.height);
  return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : k
}
function uj(a) {
  var b, c = X(a), d = nj(a, "position"), f = S && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY), h = new tf(0, 0), i = qj(c);
  if(a == i) {
    return h
  }
  if(a.getBoundingClientRect) {
    b = rj(a), a = dg(V(c)), h.x = b.left + a.x, h.y = b.top + a.y
  }else {
    if(c.getBoxObjectFor && !f) {
      b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(i), h.x = b.screenX - a.screenX, h.y = b.screenY - a.screenY
    }else {
      b = a;
      do {
        h.x += b.offsetLeft;
        h.y += b.offsetTop;
        b != a && (h.x += b.clientLeft || 0, h.y += b.clientTop || 0);
        if(T && "fixed" == nj(b, "position")) {
          h.x += c.body.scrollLeft;
          h.y += c.body.scrollTop;
          break
        }
        b = b.offsetParent
      }while(b && b != a);
      if(Q || T && "absolute" == d) {
        h.y -= c.body.offsetTop
      }
      for(b = a;(b = sj(b)) && b != c.body && b != i;) {
        if(h.x -= b.scrollLeft, !Q || "TR" != b.tagName) {
          h.y -= b.scrollTop
        }
      }
    }
  }
  return h
}
function wj(a, b, c) {
  var d = uj(a);
  if(b instanceof tf) {
    c = b.y, b = b.x
  }
  oj(a, a.offsetLeft + (b - d.x), a.offsetTop + (c - d.y))
}
function xj(a, b, c) {
  b instanceof vf ? (c = b.height, b = b.width) : c == g && e(Error("missing height argument"));
  a.style.width = pj(b, j);
  a.style.height = pj(c, j)
}
function pj(a, b) {
  "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
  return a
}
function yj(a) {
  if("none" != nj(a, "display")) {
    return new vf(a.offsetWidth, a.offsetHeight)
  }
  var b = a.style, c = b.display, d = b.visibility, f = b.position;
  b.visibility = "hidden";
  b.position = "absolute";
  b.display = "inline";
  var h = a.offsetWidth, a = a.offsetHeight;
  b.display = c;
  b.position = f;
  b.visibility = d;
  return new vf(h, a)
}
function zj(a) {
  var b = uj(a), a = yj(a);
  return new jj(b.x, b.y, a.width, a.height)
}
function Aj(a, b) {
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
function Z(a, b) {
  a.style.display = b ? "" : "none"
}
function Bj(a, b) {
  R ? a.cssText = b : a[T ? "innerText" : "innerHTML"] = b
}
function vj(a) {
  return"rtl" == nj(a, "direction")
}
var Cj = S ? "MozUserSelect" : T ? "WebkitUserSelect" : k;
function Dj(a, b, c) {
  c = !c ? a.getElementsByTagName("*") : k;
  if(Cj) {
    if(b = b ? "none" : "", a.style[Cj] = b, c) {
      for(var a = 0, d;d = c[a];a++) {
        d.style[Cj] = b
      }
    }
  }else {
    if(R || Q) {
      if(b = b ? "on" : "", a.setAttribute("unselectable", b), c) {
        for(a = 0;d = c[a];a++) {
          d.setAttribute("unselectable", b)
        }
      }
    }
  }
}
var Ej = {thin:2, medium:4, thick:6};
function Fj(a, b) {
  if("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : k)) {
    return 0
  }
  var c = a.currentStyle ? a.currentStyle[b + "Width"] : k, d;
  if(c in Ej) {
    d = Ej[c]
  }else {
    if(/^\d+px?$/.test(c)) {
      d = parseInt(c, 10)
    }else {
      d = a.style.left;
      var f = a.runtimeStyle.left;
      a.runtimeStyle.left = a.currentStyle.left;
      a.style.left = c;
      c = a.style.pixelLeft;
      a.style.left = d;
      a.runtimeStyle.left = f;
      d = c
    }
  }
  return d
}
var Gj = /[^\d]+$/;
function Hj() {
}
ja(Hj);
Hj.prototype.Am = 0;
function Ij(a) {
  return":" + (a.Am++).toString(36)
}
Hj.fa();
function Jj(a, b, c, d) {
  this.ma = a || document.body;
  this.q = V(this.ma);
  this.Um = !a;
  this.k = k;
  this.mc = "";
  this.Xa = [];
  this.xk = this.ng = -1;
  this.pa = o;
  this.className = "ac-renderer";
  this.qi = "ac-row";
  this.Rj = "active";
  this.Ki = "ac-active";
  this.im = "ac-highlighted";
  this.We = b || k;
  this.rn = d != k ? d : j;
  this.Uh = o;
  this.Xm = c != k ? c : o;
  this.bi = k;
  this.Sg = o
}
A(Jj, Tg);
t = Jj.prototype;
t.b = p("k");
t.pi = function(a, b, c) {
  this.mc = b;
  this.Xa = a;
  this.ng = -1;
  this.xk = xa();
  this.ob = c;
  this.tf = [];
  Kj(this)
};
t.Gc = function() {
  this.ob && ph(this.ob, "activedescendant", "");
  if(this.pa) {
    this.pa = o, Z(this.k, o)
  }
};
t.show = function() {
  if(!this.pa) {
    this.pa = j, Z(this.k, j)
  }
};
t.T = p("pa");
function Lj(a, b) {
  0 <= a.ng && rf(a.tf[a.ng], a.Ki, a.Rj);
  a.ng = b;
  if(0 <= b && b < a.k.childNodes.length) {
    var c = a.tf[b];
    qf(c, a.Ki, a.Rj);
    a.ob && ph(a.ob, "activedescendant", c ? c.id : "");
    var d = a.k, f = uj(c), h = uj(d), i;
    if(R) {
      var l = Fj(d, "borderLeft");
      i = Fj(d, "borderRight");
      var m = Fj(d, "borderTop"), n = Fj(d, "borderBottom");
      i = new ij(m, i, n, l)
    }else {
      l = mj(d, "borderLeftWidth"), i = mj(d, "borderRightWidth"), m = mj(d, "borderTopWidth"), n = mj(d, "borderBottomWidth"), i = new ij(parseFloat(m), parseFloat(i), parseFloat(n), parseFloat(l))
    }
    l = f.x - h.x - i.left;
    f = f.y - h.y - i.top;
    h = d.clientHeight - c.offsetHeight;
    d.scrollLeft += Math.min(l, Math.max(l - (d.clientWidth - c.offsetWidth), 0));
    d.scrollTop += Math.min(f, Math.max(f - h, 0))
  }
}
t.Zb = function(a) {
  if(-1 == a) {
    Lj(this, -1)
  }else {
    for(var b = 0;b < this.Xa.length;b++) {
      if(this.Xa[b].id == a) {
        Lj(this, b);
        break
      }
    }
  }
};
function Mj(a) {
  if(!a.k) {
    var b = a.q.e("div", {style:"display:none"});
    a.k = b;
    qf(b, a.className);
    oh(b, "listbox");
    b.id = Ij(Hj.fa());
    a.ob && (oh(a.ob, "combobox"), ph(a.ob, "autocomplete", "list"), ph(a.ob, "haspopup", j));
    a.q.appendChild(a.ma, b);
    Kg(b, "click", a.yj, o, a);
    Kg(b, "mousedown", a.kg, o, a);
    Kg(a.q.da(), "mousedown", a.Aj, o, a);
    Kg(b, "mouseover", a.Dj, o, a)
  }
}
function Kj(a) {
  Mj(a);
  if(a.Sg) {
    a.k.style.visibility = "hidden"
  }
  a.tf.length = 0;
  a.q.kk(a.k);
  if(a.We && a.We.Va) {
    a.We.Va(a, a.k, a.Xa, a.mc)
  }else {
    var b = k;
    Oh(a.Xa, function(a) {
      var d = this.mc, f = this.q.e("div", {className:this.qi, id:Ij(Hj.fa())});
      oh(f, "option");
      if(!this.We || !this.We.Ao) {
        f.innerHTML = Ha(a.data.toString())
      }
      d && this.rn && Nj(this, f, d);
      qf(f, this.qi);
      this.tf.push(f);
      a = f;
      this.Sg ? this.k.insertBefore(a, b) : this.q.appendChild(this.k, a);
      b = a
    }, a)
  }
  0 == a.Xa.length ? a.Gc() : (a.show(), Oj(a.k), a.Ka(), Dj(a.k, j))
}
t.Ka = function() {
  if(this.ob && this.Um) {
    var a = uj(this.ob), b = yj(this.ob), c = yj(qj(this.ob)), d = yj(this.k);
    a.y = this.Sg ? a.y - d.height : a.y + b.height;
    (this.Xm || a.x + d.width > c.width) && "LEFT" != this.bi ? (a.x = a.x + b.width - d.width, this.bi = "RIGHT") : this.bi = "LEFT";
    wj(this.k, a);
    if(this.Sg) {
      this.k.style.visibility = "visible"
    }
  }
};
t.m = function() {
  Jj.c.m.call(this);
  if(this.k) {
    Mg(this.k, "click", this.yj, o, this), Mg(this.k, "mousedown", this.kg, o, this), Mg(this.q.da(), "mousedown", this.Aj, o, this), Mg(this.k, "mouseover", this.Dj, o, this), this.q.removeNode(this.k), this.k = k, this.pa = o
  }
  delete this.ma
};
function Oj(a) {
  if(S && Nb) {
    a.style.width = "", a.style.overflow = "visible", a.style.width = a.offsetWidth, a.style.overflow = "auto"
  }
}
function Nj(a, b, c) {
  if(3 == b.nodeType) {
    var d = k;
    ka(c) && 1 < c.length && !a.Uh && (d = tb(c, 1));
    c = Pj(a, c);
    if(0 != c.length) {
      for(var f = b.nodeValue, h = RegExp("(.*?)(^|\\W+)(" + c + ")", "gi"), c = [], i = 0, l = h.exec(f), m = 0;l;) {
        m++, c.push(l[1]), c.push(l[2]), c.push(l[3]), i = h.lastIndex, l = h.exec(f)
      }
      c.push(f.substring(i));
      if(1 < c.length) {
        d = !a.Uh ? 1 : m;
        for(f = 0;f < d;f++) {
          h = 3 * f, b.nodeValue = c[h] + c[h + 1], i = a.q.createElement("b"), i.className = a.im, a.q.appendChild(i, a.q.createTextNode(c[h + 2])), i = b.parentNode.insertBefore(i, b.nextSibling), b.parentNode.insertBefore(a.q.createTextNode(""), i.nextSibling), b = i.nextSibling
        }
        a = tb(c, 3 * d);
        b.nodeValue = a.join("")
      }else {
        d && Nj(a, b, d)
      }
    }
  }else {
    for(b = b.firstChild;b;) {
      d = b.nextSibling, Nj(a, b, c), b = d
    }
  }
}
function Pj(a, b) {
  var c = "";
  if(!b) {
    return c
  }
  a.Uh ? ka(b) ? (c = gb(b, function(a) {
    return!Aa(a == k ? "" : "" + a)
  }), c = ib(c, Ra), c = c.join("|")) : (c = b.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, ""), c = Ra(c), c = c.replace(/ /g, "|")) : c = ka(b) ? 0 < b.length ? Ra(b[0]) : "" : Ra(b);
  return c
}
function Qj(a, b) {
  for(;b && b != a.k && !mb(pf(b), a.qi);) {
    b = b.parentNode
  }
  return b ? db(a.tf, b) : -1
}
t.yj = function(a) {
  var b = Qj(this, a.target);
  0 <= b && this.dispatchEvent({type:Wg, Hg:this.Xa[b].id});
  a.stopPropagation()
};
t.kg = function(a) {
  this.dispatchEvent(Xg);
  a.stopPropagation();
  a.preventDefault()
};
t.Aj = function() {
  this.dispatchEvent(Yg)
};
t.Dj = function(a) {
  a = Qj(this, a.target);
  0 <= a && !(300 > xa() - this.xk) && this.dispatchEvent({type:Vg, Hg:this.Xa[a].id})
};
function Rj(a, b, c, d) {
  this.wg = a = new hj(a, !d);
  d = new Jj;
  c = new Dh(k, k, !!c, 300);
  Ug.call(this, a, d, c);
  c.ka = this;
  c.bh(b)
}
A(Rj, Ug);
Rj.prototype.Ya = function(a) {
  this.wg.Ya(a)
};
ea("parentadd.setupAddParentInput", function() {
  return new Rj("/js/parent-data.js", yf.call(k, "parent-name"))
});
function Sj(a) {
  this.q = a || V();
  this.sf = Tj
}
A(Sj, Tg);
Sj.prototype.jm = Hj.fa();
var Tj = k;
function Uj(a, b) {
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
t = Sj.prototype;
t.Nb = k;
t.X = o;
t.k = k;
t.sf = k;
t.ki = k;
t.ma = k;
t.Da = k;
t.Hb = k;
t.tn = o;
function Vj(a) {
  return a.Nb || (a.Nb = Ij(a.jm))
}
function Wj(a, b) {
  a.ma && a.ma.Hb && (Ab(a.ma.Hb, a.Nb), Bb(a.ma.Hb, b, a));
  a.Nb = b
}
t.b = p("k");
t.Na = function() {
  return this.pe || (this.pe = new qh(this))
};
function Xj(a, b) {
  a == b && e(Error("Unable to set parent component"));
  b && a.ma && a.Nb && Yj(a.ma, a.Nb) && a.ma != b && e(Error("Unable to set parent component"));
  a.ma = b;
  Sj.c.wi.call(a, b)
}
t.getParent = p("ma");
t.wi = function(a) {
  this.ma && this.ma != a && e(Error("Method not supported"));
  Sj.c.wi.call(this, a)
};
t.S = p("q");
t.e = function() {
  this.k = this.q.createElement("div")
};
t.Va = function(a) {
  Zj(this, a)
};
function Zj(a, b, c) {
  a.X && e(Error("Component already rendered"));
  a.k || a.e();
  b ? b.insertBefore(a.k, c || k) : a.q.da().body.appendChild(a.k);
  (!a.ma || a.ma.X) && a.la()
}
t.la = function() {
  this.X = j;
  $j(this, function(a) {
    !a.X && a.b() && a.la()
  })
};
t.Lb = function() {
  $j(this, function(a) {
    a.X && a.Lb()
  });
  this.pe && th(this.pe);
  this.X = o
};
t.m = function() {
  Sj.c.m.call(this);
  this.X && this.Lb();
  this.pe && (this.pe.w(), delete this.pe);
  $j(this, function(a) {
    a.w()
  });
  !this.tn && this.k && Y(this.k);
  this.ma = this.ki = this.k = this.Hb = this.Da = k
};
t.zc = function(a, b) {
  this.Me(a, ak(this), b)
};
t.Me = function(a, b, c) {
  a.X && (c || !this.X) && e(Error("Component already rendered"));
  (0 > b || b > ak(this)) && e(Error("Child component index out of bounds"));
  if(!this.Hb || !this.Da) {
    this.Hb = {}, this.Da = []
  }
  a.getParent() == this ? (this.Hb[Vj(a)] = a, nb(this.Da, a)) : Bb(this.Hb, Vj(a), a);
  Xj(a, this);
  sb(this.Da, b, 0, a);
  a.X && this.X && a.getParent() == this ? (c = this.V(), c.insertBefore(a.b(), c.childNodes[b] || k)) : c ? (this.k || this.e(), b = bk(this, b + 1), Zj(a, this.V(), b ? b.k : k)) : this.X && !a.X && a.k && a.la()
};
t.V = p("k");
function ck(a) {
  if(a.sf == k) {
    a.sf = vj(a.X ? a.k : a.q.da().body)
  }
  return a.sf
}
t.od = function(a) {
  this.X && e(Error("Component already rendered"));
  this.sf = a
};
function ak(a) {
  return a.Da ? a.Da.length : 0
}
function Yj(a, b) {
  return a.Hb && b ? (b in a.Hb ? a.Hb[b] : g) || k : k
}
function bk(a, b) {
  return a.Da ? a.Da[b] || k : k
}
function $j(a, b, c) {
  a.Da && fb(a.Da, b, c)
}
function dk(a, b) {
  return a.Da && b ? db(a.Da, b) : -1
}
t.removeChild = function(a, b) {
  if(a) {
    var c = y(a) ? a : Vj(a), a = Yj(this, c);
    c && a && (Ab(this.Hb, c), nb(this.Da, a), b && (a.Lb(), a.k && Y(a.k)), Xj(a, k))
  }
  a || e(Error("Child is not in parent component"));
  return a
};
t.kk = function(a) {
  for(;this.Da && 0 != this.Da.length;) {
    this.removeChild(bk(this, 0), a)
  }
};
function ek() {
}
var fk;
ja(ek);
t = ek.prototype;
t.zb = ba();
t.e = function(a) {
  return a.S().e("div", this.rc(a).join(" "), a.va)
};
t.V = aa();
t.Ye = function(a, b, c) {
  if(a = a.b ? a.b() : a) {
    if(R && !U("7")) {
      var d = gk(pf(a), b);
      d.push(b);
      wa(c ? qf : rf, a).apply(k, d)
    }else {
      sf(a, b, c)
    }
  }
};
t.vc = function(a) {
  ck(a) && this.od(a.b(), j);
  a.isEnabled() && this.Qb(a, a.T())
};
t.Kg = function(a, b) {
  Dj(a, !b, !R && !Q)
};
t.od = function(a, b) {
  this.Ye(a, this.u() + "-rtl", b)
};
t.bd = function(a) {
  var b;
  return a.Za & 32 && (b = a.za()) ? Xf(b) : o
};
t.Qb = function(a, b) {
  var c;
  if(a.Za & 32 && (c = a.za())) {
    if(!b && a.Ra & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.Ra & 32 && a.tc(k)
    }
    if(Xf(c) != b) {
      b ? c.tabIndex = 0 : c.removeAttribute("tabIndex")
    }
  }
};
t.ba = function(a, b) {
  Z(a, b)
};
t.Bb = function(a, b, c) {
  var d = a.b();
  if(d) {
    var f = this.fg(b);
    f && this.Ye(a, f, c);
    this.Ff(d, b, c)
  }
};
t.Ff = function(a, b, c) {
  fk || (fk = {1:"disabled", 4:"pressed", 8:"selected", 16:"checked", 64:"expanded"});
  (b = fk[b]) && ph(a, b, c)
};
t.Ya = function(a, b) {
  var c = this.V(a);
  if(c && (If(c), b)) {
    if(y(b)) {
      Uf(c, b)
    }else {
      var d = function(a) {
        if(a) {
          var b = X(c);
          c.appendChild(y(a) ? b.createTextNode(a) : a)
        }
      };
      ka(b) ? fb(b, d) : la(b) && !("nodeType" in b) ? fb(pb(b), d) : d(b)
    }
  }
};
t.za = function(a) {
  return a.b()
};
t.u = s("goog-control");
t.rc = function(a) {
  var b = this.u(), c = [b], d = this.u();
  d != b && c.push(d);
  b = a.Ra;
  for(d = [];b;) {
    var f = b & -b;
    d.push(this.fg(f));
    b &= ~f
  }
  c.push.apply(c, d);
  (a = a.qc) && c.push.apply(c, a);
  R && !U("7") && c.push.apply(c, gk(c));
  return c
};
function gk(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  fb([], function(d) {
    kb(d, wa(mb, a)) && (!b || mb(d, b)) && c.push(d.join("_"))
  });
  return c
}
t.fg = function(a) {
  if(!this.Zi) {
    var b = this.u();
    this.Zi = {1:b + "-disabled", 2:b + "-hover", 4:b + "-active", 8:b + "-selected", 16:b + "-checked", 32:b + "-focused", 64:b + "-open"}
  }
  return this.Zi[a]
};
function hk() {
}
A(hk, ek);
ja(hk);
t = hk.prototype;
t.zb = s("button");
t.Ff = function(a, b, c) {
  16 == b ? ph(a, "pressed", c) : hk.c.Ff.call(this, a, b, c)
};
t.e = function(a) {
  var b = hk.c.e.call(this, a), c = a.Zc();
  c && this.lc(b, c);
  (c = a.ga()) && this.oa(b, c);
  a.Za & 16 && this.Ff(b, 16, o);
  return b
};
t.ga = ia;
t.oa = ia;
t.Zc = function(a) {
  return a.title
};
t.lc = function(a, b) {
  if(a) {
    a.title = b || ""
  }
};
t.u = s("goog-button");
function ik() {
}
A(ik, hk);
ja(ik);
t = ik.prototype;
t.e = function(a) {
  var b = {"class":"goog-inline-block " + this.rc(a).join(" "), title:a.Zc() || ""};
  return a.S().e("div", b, this.vh(a.va, a.S()))
};
t.zb = s("button");
t.V = function(a) {
  return a && a.firstChild.firstChild
};
t.vh = function(a, b) {
  return b.e("div", "goog-inline-block " + (this.u() + "-outer-box"), b.e("div", "goog-inline-block " + (this.u() + "-inner-box"), a))
};
t.u = s("goog-custom-button");
function jk(a, b) {
  a || e(Error("Invalid class name " + a));
  na(b) || e(Error("Invalid decorator function " + b))
}
var kk = {};
function lk(a, b, c) {
  Sj.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = pa(b);
      if(d = kk[d]) {
        break
      }
      b = b.c ? b.c.constructor : k
    }
    b = d ? na(d.fa) ? d.fa() : new d : k
  }
  this.t = b;
  this.Lg(a)
}
A(lk, Sj);
t = lk.prototype;
t.va = k;
t.Ra = 0;
t.Za = 39;
t.dh = 255;
t.Qd = 0;
t.pa = j;
t.qc = k;
t.Qh = j;
t.ah = o;
function mk(a, b) {
  a.X && b != a.Qh && nk(a, b);
  a.Qh = b
}
t.za = function() {
  return this.t.za(this)
};
t.$e = function() {
  return this.Pa || (this.Pa = new wh)
};
t.Wd = function(a) {
  if(a) {
    this.qc ? mb(this.qc, a) || this.qc.push(a) : this.qc = [a], this.t.Ye(this, a, j)
  }
};
t.Ye = function(a, b) {
  if(b) {
    this.Wd(a)
  }else {
    if(a && this.qc) {
      nb(this.qc, a);
      if(0 == this.qc.length) {
        this.qc = k
      }
      this.t.Ye(this, a, o)
    }
  }
};
t.e = function() {
  var a = this.t.e(this);
  this.k = a;
  var b = this.t.zb();
  b && oh(a, b);
  this.ah || this.t.Kg(a, o);
  this.T() || this.t.ba(a, o)
};
t.V = function() {
  return this.t.V(this.b())
};
t.la = function() {
  lk.c.la.call(this);
  this.t.vc(this);
  if(this.Za & -2 && (this.Qh && nk(this, j), this.Za & 32)) {
    var a = this.za();
    if(a) {
      var b = this.$e();
      xh(b, a);
      this.Na().n(b, "key", this.tb).n(a, "focus", this.$c).n(a, "blur", this.tc)
    }
  }
};
function nk(a, b) {
  var c = a.Na(), d = a.b();
  b ? (c.n(d, "mouseover", a.cf).n(d, "mousedown", a.Ic).n(d, "mouseup", a.Id).n(d, "mouseout", a.bf), R && c.n(d, "dblclick", a.zj)) : (c.Ca(d, "mouseover", a.cf).Ca(d, "mousedown", a.Ic).Ca(d, "mouseup", a.Id).Ca(d, "mouseout", a.bf), R && c.Ca(d, "dblclick", a.zj))
}
t.Lb = function() {
  lk.c.Lb.call(this);
  this.Pa && this.Pa.detach();
  this.T() && this.isEnabled() && this.t.Qb(this, o)
};
t.m = function() {
  lk.c.m.call(this);
  this.Pa && (this.Pa.w(), delete this.Pa);
  delete this.t;
  this.qc = this.va = k
};
t.Ya = function(a) {
  this.t.Ya(this.b(), a);
  this.Lg(a)
};
t.Lg = ca("va");
t.Xc = function() {
  var a = this.va;
  if(!a) {
    return""
  }
  if(y(a)) {
    return a
  }
  a = ka(a) ? ib(a, Yf).join("") : Yf(a);
  return Da(a)
};
t.od = function(a) {
  lk.c.od.call(this, a);
  var b = this.b();
  b && this.t.od(b, a)
};
t.Kg = function(a) {
  this.ah = a;
  var b = this.b();
  b && this.t.Kg(b, a)
};
t.T = p("pa");
t.ba = function(a, b) {
  if(b || this.pa != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.b();
    c && this.t.ba(c, a);
    this.isEnabled() && this.t.Qb(this, a);
    this.pa = a;
    return j
  }
  return o
};
t.isEnabled = function() {
  return!(this.Ra & 1)
};
t.ic = function(a) {
  var b = this.getParent();
  if((!b || "function" != typeof b.isEnabled || b.isEnabled()) && ok(this, 1, !a)) {
    a || (this.setActive(o), this.jc(o)), this.T() && this.t.Qb(this, a), this.Bb(1, !a)
  }
};
t.jc = function(a) {
  ok(this, 2, a) && this.Bb(2, a)
};
t.wc = function() {
  return!!(this.Ra & 4)
};
t.setActive = function(a) {
  ok(this, 4, a) && this.Bb(4, a)
};
t.Ge = function(a) {
  ok(this, 8, a) && this.Bb(8, a)
};
function pk(a, b) {
  ok(a, 16, b) && a.Bb(16, b)
}
t.bc = function() {
  return!!(this.Ra & 64)
};
t.na = function(a) {
  ok(this, 64, a) && this.Bb(64, a)
};
t.Bb = function(a, b) {
  if(this.Za & a && b != !!(this.Ra & a)) {
    this.t.Bb(this, a, b), this.Ra = b ? this.Ra | a : this.Ra & ~a
  }
};
function qk(a, b, c) {
  a.X && a.Ra & b && !c && e(Error("Component already rendered"));
  !c && a.Ra & b && a.Bb(b, o);
  a.Za = c ? a.Za | b : a.Za & ~b
}
function rk(a, b) {
  return!!(a.dh & b) && !!(a.Za & b)
}
function ok(a, b, c) {
  return!!(a.Za & b) && !!(a.Ra & b) != c && (!(a.Qd & b) || a.dispatchEvent(Uj(b, c))) && !a.Zf
}
t.cf = function(a) {
  (!a.relatedTarget || !Of(this.b(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && rk(this, 2) && this.jc(j)
};
t.bf = function(a) {
  if((!a.relatedTarget || !Of(this.b(), a.relatedTarget)) && this.dispatchEvent("leave")) {
    rk(this, 4) && this.setActive(o), rk(this, 2) && this.jc(o)
  }
};
t.Ic = function(a) {
  this.isEnabled() && (rk(this, 2) && this.jc(j), og(a) && (rk(this, 4) && this.setActive(j), this.t.bd(this) && this.za().focus()));
  !this.ah && og(a) && a.preventDefault()
};
t.Id = function(a) {
  this.isEnabled() && (rk(this, 2) && this.jc(j), this.wc() && this.Mc(a) && rk(this, 4) && this.setActive(o))
};
t.zj = function(a) {
  this.isEnabled() && this.Mc(a)
};
t.Mc = function(a) {
  rk(this, 16) && pk(this, !(this.Ra & 16));
  rk(this, 8) && this.Ge(j);
  rk(this, 64) && this.na(!this.bc());
  var b = new ig("action", this);
  if(a) {
    for(var c = ["altKey", "ctrlKey", "metaKey", "shiftKey", "platformModifierKey"], d, f = 0;d = c[f];f++) {
      b[d] = a[d]
    }
  }
  return this.dispatchEvent(b)
};
t.$c = function() {
  rk(this, 32) && ok(this, 32, j) && this.Bb(32, j)
};
t.tc = function() {
  rk(this, 4) && this.setActive(o);
  rk(this, 32) && ok(this, 32, o) && this.Bb(32, o)
};
t.tb = function(a) {
  return this.T() && this.isEnabled() && this.qe(a) ? (a.preventDefault(), a.stopPropagation(), j) : o
};
t.qe = function(a) {
  return 13 == a.keyCode && this.Mc(a)
};
na(lk) || e(Error("Invalid component class " + lk));
na(ek) || e(Error("Invalid renderer class " + ek));
var sk = pa(lk);
kk[sk] = ek;
jk("goog-control", function() {
  return new lk(k)
});
function tk() {
}
A(tk, ek);
ja(tk);
tk.prototype.e = function(a) {
  return a.S().e("div", this.u())
};
tk.prototype.Ya = ba();
tk.prototype.u = s("goog-menuseparator");
function uk(a, b) {
  lk.call(this, k, a || tk.fa(), b);
  qk(this, 1, o);
  qk(this, 2, o);
  qk(this, 4, o);
  qk(this, 32, o);
  this.Ra = 1
}
A(uk, lk);
uk.prototype.la = function() {
  uk.c.la.call(this);
  oh(this.b(), "separator")
};
jk("goog-menuseparator", function() {
  return new uk
});
function vk() {
}
ja(vk);
t = vk.prototype;
t.zb = ba();
function wk(a, b) {
  if(a) {
    a.tabIndex = b ? 0 : -1
  }
}
t.e = function(a) {
  return a.S().e("div", this.rc(a).join(" "))
};
t.V = aa();
t.vc = function(a) {
  a = a.b();
  Dj(a, j, S);
  if(R) {
    a.hideFocus = j
  }
  var b = this.zb();
  b && oh(a, b)
};
t.za = function(a) {
  return a.b()
};
t.u = s("goog-container");
t.rc = function(a) {
  var b = this.u(), c = [b, a.jd == xk ? b + "-horizontal" : b + "-vertical"];
  a.isEnabled() || c.push(b + "-disabled");
  return c
};
t.xj = function() {
  return yk
};
function zk(a, b, c) {
  Sj.call(this, c);
  this.t = b || vk.fa();
  this.jd = a || this.t.xj()
}
A(zk, Sj);
var xk = "horizontal", yk = "vertical";
t = zk.prototype;
t.gf = k;
t.Pa = k;
t.t = k;
t.jd = k;
t.pa = j;
t.ya = j;
t.eg = j;
t.Ea = -1;
t.Ja = k;
t.Kc = o;
t.Nk = o;
t.Mm = j;
t.Rc = k;
t.za = function() {
  return this.gf || this.t.za(this)
};
t.$e = function() {
  return this.Pa || (this.Pa = new wh(this.za()))
};
t.e = function() {
  this.k = this.t.e(this)
};
t.V = function() {
  return this.t.V(this.b())
};
t.la = function() {
  zk.c.la.call(this);
  $j(this, function(a) {
    a.X && Ak(this, a)
  }, this);
  var a = this.b();
  this.t.vc(this);
  this.ba(this.pa, j);
  this.Na().n(this, "enter", this.Nh).n(this, "highlight", this.Oh).n(this, "unhighlight", this.Sh).n(this, "open", this.Xl).n(this, "close", this.Il).n(a, "mousedown", this.Ic).n(X(a), "mouseup", this.Kl).n(a, ["mousedown", "mouseup", "mouseover", "mouseout"], this.Hl);
  this.bd() && Bk(this, j)
};
function Bk(a, b) {
  var c = a.Na(), d = a.za();
  b ? c.n(d, "focus", a.$c).n(d, "blur", a.tc).n(a.$e(), "key", a.tb) : c.Ca(d, "focus", a.$c).Ca(d, "blur", a.tc).Ca(a.$e(), "key", a.tb)
}
t.Lb = function() {
  this.Qa(-1);
  this.Ja && this.Ja.na(o);
  this.Kc = o;
  zk.c.Lb.call(this)
};
t.m = function() {
  zk.c.m.call(this);
  if(this.Pa) {
    this.Pa.w(), this.Pa = k
  }
  this.t = this.Ja = this.Rc = k
};
t.Nh = s(j);
t.Oh = function(a) {
  var b = dk(this, a.target);
  if(-1 < b && b != this.Ea) {
    var c = Ck(this);
    c && c.jc(o);
    this.Ea = b;
    c = Ck(this);
    this.Kc && c.setActive(j);
    this.Mm && this.Ja && c != this.Ja && (c.Za & 64 ? c.na(j) : this.Ja.na(o))
  }
  ph(this.b(), "activedescendant", a.target.b().id)
};
t.Sh = function(a) {
  if(a.target == Ck(this)) {
    this.Ea = -1
  }
  ph(this.b(), "activedescendant", "")
};
t.Xl = function(a) {
  if((a = a.target) && a != this.Ja && a.getParent() == this) {
    this.Ja && this.Ja.na(o), this.Ja = a
  }
};
t.Il = function(a) {
  if(a.target == this.Ja) {
    this.Ja = k
  }
};
t.Ic = function(a) {
  if(this.ya) {
    this.Kc = j
  }
  var b = this.za();
  b && Xf(b) ? b.focus() : a.preventDefault()
};
t.Kl = function() {
  this.Kc = o
};
t.Hl = function(a) {
  var b;
  a: {
    b = a.target;
    if(this.Rc) {
      for(var c = this.b();b && b !== c;) {
        var d = b.id;
        if(d in this.Rc) {
          b = this.Rc[d];
          break a
        }
        b = b.parentNode
      }
    }
    b = k
  }
  if(b) {
    switch(a.type) {
      case "mousedown":
        b.Ic(a);
        break;
      case "mouseup":
        b.Id(a);
        break;
      case "mouseover":
        b.cf(a);
        break;
      case "mouseout":
        b.bf(a)
    }
  }
};
t.$c = ba();
t.tc = function() {
  this.Qa(-1);
  this.Kc = o;
  this.Ja && this.Ja.na(o)
};
t.tb = function(a) {
  return this.isEnabled() && this.T() && (0 != ak(this) || this.gf) && this.qe(a) ? (a.preventDefault(), a.stopPropagation(), j) : o
};
t.qe = function(a) {
  var b = Ck(this);
  if(b && "function" == typeof b.tb && b.tb(a) || this.Ja && this.Ja != b && "function" == typeof this.Ja.tb && this.Ja.tb(a)) {
    return j
  }
  if(a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) {
    return o
  }
  switch(a.keyCode) {
    case 27:
      if(this.bd()) {
        this.za().blur()
      }else {
        return o
      }
      break;
    case 36:
      Dk(this);
      break;
    case 35:
      Ek(this);
      break;
    case 38:
      if(this.jd == yk) {
        Fk(this)
      }else {
        return o
      }
      break;
    case 37:
      if(this.jd == xk) {
        ck(this) ? Gk(this) : Fk(this)
      }else {
        return o
      }
      break;
    case 40:
      if(this.jd == yk) {
        Gk(this)
      }else {
        return o
      }
      break;
    case 39:
      if(this.jd == xk) {
        ck(this) ? Fk(this) : Gk(this)
      }else {
        return o
      }
      break;
    default:
      return o
  }
  return j
};
function Ak(a, b) {
  var c = b.b(), c = c.id || (c.id = Vj(b));
  if(!a.Rc) {
    a.Rc = {}
  }
  a.Rc[c] = b
}
t.zc = function(a, b) {
  zk.c.zc.call(this, a, b)
};
t.Me = function(a, b, c) {
  a.Qd |= 2;
  a.Qd |= 64;
  (this.bd() || !this.Nk) && qk(a, 32, o);
  mk(a, o);
  zk.c.Me.call(this, a, b, c);
  c && this.X && Ak(this, a);
  b <= this.Ea && this.Ea++
};
t.removeChild = function(a, b) {
  if(a = y(a) ? Yj(this, a) : a) {
    var c = dk(this, a);
    -1 != c && (c == this.Ea ? a.jc(o) : c < this.Ea && this.Ea--);
    (c = a.b()) && c.id && Ab(this.Rc, c.id)
  }
  a = zk.c.removeChild.call(this, a, b);
  mk(a, j);
  return a
};
t.T = p("pa");
t.ba = function(a, b) {
  if(b || this.pa != a && this.dispatchEvent(a ? "show" : "hide")) {
    this.pa = a;
    var c = this.b();
    c && (Z(c, a), this.bd() && wk(this.za(), this.ya && this.pa), b || this.dispatchEvent(this.pa ? "aftershow" : "afterhide"));
    return j
  }
  return o
};
t.isEnabled = p("ya");
t.ic = function(a) {
  if(this.ya != a && this.dispatchEvent(a ? "enable" : "disable")) {
    a ? (this.ya = j, $j(this, function(a) {
      a.Jk ? delete a.Jk : a.ic(j)
    })) : ($j(this, function(a) {
      a.isEnabled() ? a.ic(o) : a.Jk = j
    }), this.Kc = this.ya = o), this.bd() && wk(this.za(), a && this.pa)
  }
};
t.bd = p("eg");
t.Qb = function(a) {
  a != this.eg && this.X && Bk(this, a);
  this.eg = a;
  this.ya && this.pa && wk(this.za(), a)
};
t.Qa = function(a) {
  (a = bk(this, a)) ? a.jc(j) : -1 < this.Ea && Ck(this).jc(o)
};
t.jc = function(a) {
  this.Qa(dk(this, a))
};
function Ck(a) {
  return bk(a, a.Ea)
}
function Dk(a) {
  Hk(a, function(a, c) {
    return(a + 1) % c
  }, ak(a) - 1)
}
function Ek(a) {
  Hk(a, function(a, c) {
    a--;
    return 0 > a ? c - 1 : a
  }, 0)
}
function Gk(a) {
  Hk(a, function(a, c) {
    return(a + 1) % c
  }, a.Ea)
}
function Fk(a) {
  Hk(a, function(a, c) {
    a--;
    return 0 > a ? c - 1 : a
  }, a.Ea)
}
function Hk(a, b, c) {
  for(var c = 0 > c ? dk(a, a.Ja) : c, d = ak(a), c = b.call(a, c, d), f = 0;f <= d;) {
    var h = bk(a, c);
    if(h && a.Wi(h)) {
      a.vi(c);
      break
    }
    f++;
    c = b.call(a, c, d)
  }
}
t.Wi = function(a) {
  return a.T() && a.isEnabled() && !!(a.Za & 2)
};
t.vi = function(a) {
  this.Qa(a)
};
function Ik() {
}
A(Ik, ek);
ja(Ik);
Ik.prototype.u = s("goog-menuheader");
function Jk(a, b, c) {
  lk.call(this, a, c || Ik.fa(), b);
  qk(this, 1, o);
  qk(this, 2, o);
  qk(this, 4, o);
  qk(this, 32, o);
  this.Ra = 1
}
A(Jk, lk);
jk("goog-menuheader", function() {
  return new Jk(k)
});
function Kk() {
  this.lh = []
}
A(Kk, ek);
ja(Kk);
function Lk(a, b) {
  var c = a.lh[b];
  if(!c) {
    switch(b) {
      case 0:
        c = a.u() + "-highlight";
        break;
      case 1:
        c = a.u() + "-checkbox";
        break;
      case 2:
        c = a.u() + "-content"
    }
    a.lh[b] = c
  }
  return c
}
t = Kk.prototype;
t.zb = s("menuitem");
t.e = function(a) {
  var b = a.S().e("div", this.rc(a).join(" "), Mk(this, a.va, a.S()));
  Nk(this, a, b, !!(a.Za & 8) || !!(a.Za & 16));
  return b
};
t.V = function(a) {
  return a && a.firstChild
};
t.Ya = function(a, b) {
  var c = this.V(a), d = Ok(this, a) ? c.firstChild : k;
  Kk.c.Ya.call(this, a, b);
  d && !Ok(this, a) && c.insertBefore(d, c.firstChild || k)
};
function Mk(a, b, c) {
  a = Lk(a, 2);
  return c.e("div", a, b)
}
t.xi = function(a, b, c) {
  b && (oh(b, c ? "menuitemradio" : this.zb()), Nk(this, a, b, c))
};
function Ok(a, b) {
  var c = a.V(b);
  if(c) {
    var c = c.firstChild, d = Lk(a, 1);
    return!!c && !!c.className && -1 != c.className.indexOf(d)
  }
  return o
}
function Nk(a, b, c, d) {
  d != Ok(a, c) && (sf(c, "goog-option", d), c = a.V(c), d ? (a = Lk(a, 1), c.insertBefore(b.S().e("div", a), c.firstChild || k)) : c.removeChild(c.firstChild))
}
t.fg = function(a) {
  switch(a) {
    case 2:
      return Lk(this, 0);
    case 16:
    ;
    case 8:
      return"goog-option-selected";
    default:
      return Kk.c.fg.call(this, a)
  }
};
t.u = s("goog-menuitem");
function Pk(a, b, c, d) {
  lk.call(this, a, d || Kk.fa(), c);
  this.oa(b)
}
A(Pk, lk);
t = Pk.prototype;
t.ga = function() {
  var a = this.ki;
  return a != k ? a : this.Xc()
};
t.oa = ca("ki");
t.xi = function(a) {
  qk(this, 8, a);
  this.Ra & 16 && !a && pk(this, o);
  var b = this.b();
  b && this.t.xi(this, b, a)
};
t.Xc = function() {
  var a = this.va;
  return ka(a) ? ib(a, function(a) {
    return mb(pf(a), "goog-menuitem-accel") ? "" : Yf(a)
  }).join("") : Pk.c.Xc.call(this)
};
t.Id = function(a) {
  var b = this.getParent();
  if(b) {
    var c = b.hk;
    b.hk = k;
    if(b = c && ma(a.clientX)) {
      b = new tf(a.clientX, a.clientY), b = c == b ? j : !c || !b ? o : c.x == b.x && c.y == b.y
    }
    if(b) {
      return
    }
  }
  Pk.c.Id.call(this, a)
};
jk("goog-menuitem", function() {
  return new Pk(k)
});
function Qk() {
}
A(Qk, vk);
ja(Qk);
Qk.prototype.zb = s("menu");
Qk.prototype.zd = function(a, b) {
  return Of(a.b(), b)
};
Qk.prototype.u = s("goog-menu");
Qk.prototype.vc = function(a) {
  Qk.c.vc.call(this, a);
  ph(a.b(), "haspopup", "true")
};
jk("goog-menuseparator", function() {
  return new uk
});
function Rk(a, b) {
  zk.call(this, yk, b || Qk.fa(), a);
  this.Qb(o)
}
A(Rk, zk);
t = Rk.prototype;
t.$g = j;
t.Ok = o;
t.u = function() {
  return this.t.u()
};
t.zd = function(a) {
  if(this.t.zd(this, a)) {
    return j
  }
  for(var b = 0, c = ak(this);b < c;b++) {
    var d = bk(this, b);
    if("function" == typeof d.zd && d.zd(a)) {
      return j
    }
  }
  return o
};
t.Rb = function(a) {
  this.zc(a, j)
};
t.Xd = function(a, b) {
  this.Me(a, b, j)
};
t.me = function(a) {
  return bk(this, a)
};
t.gg = function() {
  return ak(this)
};
t.nd = function(a, b) {
  var c = this.T();
  c || Z(this.b(), j);
  wj(this.b(), a, b);
  c || Z(this.b(), o)
};
t.ba = function(a, b, c) {
  (b = Rk.c.ba.call(this, a, b)) && a && this.X && this.$g && this.za().focus();
  this.hk = a && c && ma(c.clientX) ? new tf(c.clientX, c.clientY) : k;
  return b
};
t.Nh = function(a) {
  this.$g && this.za().focus();
  return Rk.c.Nh.call(this, a)
};
t.Wi = function(a) {
  return(this.Ok || a.isEnabled()) && a.T() && !!(a.Za & 2)
};
function Sk() {
}
A(Sk, ik);
ja(Sk);
if(S) {
  Sk.prototype.Ya = function(a, b) {
    var c = Sk.c.V.call(this, a && a.firstChild);
    c && Lf(this.createCaption(b, V(a)), c)
  }
}
Sk.prototype.V = function(a) {
  a = Sk.c.V.call(this, a && a.firstChild);
  if(S && a && a.__goog_wrapper_div) {
    a = a.firstChild
  }
  return a
};
Sk.prototype.vh = function(a, b) {
  return Sk.c.vh.call(this, [this.createCaption(a, b), b.e("div", "goog-inline-block " + (this.u() + "-dropdown"), "\u00a0")], b)
};
Sk.prototype.createCaption = function(a, b) {
  return Tk(a, this.u(), b)
};
function Tk(a, b, c) {
  return c.e("div", "goog-inline-block " + (b + "-caption"), a)
}
Sk.prototype.u = s("goog-menu-button");
function Uk(a, b, c, d, f, h, i, l) {
  var m, n = c.offsetParent;
  if(n) {
    var q = "HTML" == n.tagName || "BODY" == n.tagName;
    if(!q || "static" != nj(n, "position")) {
      m = uj(n), q || (m = uf(m, new tf(n.scrollLeft, n.scrollTop)))
    }
  }
  n = zj(a);
  if(q = tj(a)) {
    var r = new jj(q.left, q.top, q.right - q.left, q.bottom - q.top), q = Math.max(n.left, r.left), x = Math.min(n.left + n.width, r.left + r.width);
    if(q <= x) {
      var v = Math.max(n.top, r.top), r = Math.min(n.top + n.height, r.top + r.height);
      if(v <= r) {
        n.left = q, n.top = v, n.width = x - q, n.height = r - v
      }
    }
  }
  q = V(a);
  v = V(c);
  if(q.da() != v.da()) {
    var x = q.da().body, v = v.Oa(), r = new tf(0, 0), F = Ef(X(x)), qa = x;
    do {
      var ga;
      if(F == v) {
        ga = uj(qa)
      }else {
        var W = qa;
        ga = new tf;
        if(1 == W.nodeType) {
          if(W.getBoundingClientRect) {
            W = rj(W), ga.x = W.left, ga.y = W.top
          }else {
            var Sa = dg(V(W)), W = uj(W);
            ga.x = W.x - Sa.x;
            ga.y = W.y - Sa.y
          }
        }else {
          var Sa = na(W.uj), hb = W;
          W.targetTouches ? hb = W.targetTouches[0] : Sa && W.Ma.targetTouches && (hb = W.Ma.targetTouches[0]);
          ga.x = hb.clientX;
          ga.y = hb.clientY
        }
      }
      r.x += ga.x;
      r.y += ga.y
    }while(F && F != v && (qa = F.frameElement) && (F = F.parent));
    x = uf(r, uj(x));
    R && !cg(q) && (x = uf(x, dg(q)));
    n.left += x.x;
    n.top += x.y
  }
  a = (b & 4 && vj(a) ? b ^ 2 : b) & -5;
  b = new tf(a & 2 ? n.left + n.width : n.left, a & 1 ? n.top + n.height : n.top);
  m && (b = uf(b, m));
  f && (b.x += (a & 2 ? -1 : 1) * f.x, b.y += (a & 1 ? -1 : 1) * f.y);
  var J;
  if(i && (J = tj(c)) && m) {
    J.top = Math.max(0, J.top - m.y), J.right -= m.x, J.bottom -= m.y, J.left = Math.max(0, J.left - m.x)
  }
  a: {
    m = J;
    f = b.ua();
    J = 0;
    a = (d & 4 && vj(c) ? d ^ 2 : d) & -5;
    d = yj(c);
    l = l ? l.ua() : d;
    if(h || 0 != a) {
      a & 2 ? f.x -= l.width + (h ? h.right : 0) : h && (f.x += h.left), a & 1 ? f.y -= l.height + (h ? h.bottom : 0) : h && (f.y += h.top)
    }
    if(i) {
      if(m) {
        h = f;
        J = 0;
        if(h.x < m.left && i & 1) {
          h.x = m.left, J |= 1
        }
        h.x < m.left && h.x + l.width > m.right && i & 16 && (l.width -= h.x + l.width - m.right, J |= 4);
        if(h.x + l.width > m.right && i & 1) {
          h.x = Math.max(m.right - l.width, m.left), J |= 1
        }
        i & 2 && (J |= (h.x < m.left ? 16 : 0) | (h.x + l.width > m.right ? 32 : 0));
        if(h.y < m.top && i & 4) {
          h.y = m.top, J |= 2
        }
        h.y >= m.top && h.y + l.height > m.bottom && i & 32 && (l.height -= h.y + l.height - m.bottom, J |= 8);
        if(h.y + l.height > m.bottom && i & 4) {
          h.y = Math.max(m.bottom - l.height, m.top), J |= 2
        }
        i & 8 && (J |= (h.y < m.top ? 64 : 0) | (h.y + l.height > m.bottom ? 128 : 0));
        i = J
      }else {
        i = 256
      }
      J = i;
      if(J & 496) {
        c = J;
        break a
      }
    }
    oj(c, f);
    wf(d, l) || xj(c, l);
    c = J
  }
  return c
}
;function Vk() {
}
Vk.prototype.Ka = ba();
function Wk(a, b) {
  this.element = a;
  this.de = b
}
A(Wk, Vk);
Wk.prototype.Ka = function(a, b, c) {
  Uk(this.element, this.de, a, b, g, c)
};
function Xk(a) {
  this.k = a;
  a = R ? "focusout" : "blur";
  this.rm = Kg(this.k, R ? "focusin" : "focus", this, !R);
  this.sm = Kg(this.k, a, this, !R)
}
A(Xk, Tg);
Xk.prototype.handleEvent = function(a) {
  var b = new mg(a.Ma);
  b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
  try {
    this.dispatchEvent(b)
  }finally {
    b.w()
  }
};
Xk.prototype.m = function() {
  Xk.c.m.call(this);
  Og(this.rm);
  Og(this.sm);
  delete this.k
};
function Yk(a, b, c) {
  this.target = a;
  this.handle = b || a;
  this.ii = c || new jj(NaN, NaN, NaN, NaN);
  this.xa = X(a);
  this.K = new qh(this);
  Kg(this.handle, ["touchstart", "mousedown"], this.wk, o, this)
}
A(Yk, Tg);
var Zk = R || S && U("1.9.3");
t = Yk.prototype;
t.clientX = 0;
t.clientY = 0;
t.screenX = 0;
t.screenY = 0;
t.yk = 0;
t.zk = 0;
t.ee = 0;
t.fe = 0;
t.ya = j;
t.Wc = o;
t.Jj = 0;
t.xm = 0;
t.km = o;
t.Na = p("K");
t.ic = ca("ya");
t.m = function() {
  Yk.c.m.call(this);
  Mg(this.handle, ["touchstart", "mousedown"], this.wk, o, this);
  this.K.w();
  delete this.target;
  delete this.handle;
  delete this.K
};
t.wk = function(a) {
  var b = "mousedown" == a.type;
  if(this.ya && !this.Wc && (!b || og(a))) {
    $k(a);
    if(0 == this.Jj) {
      if(al(this, a), this.Wc) {
        a.preventDefault()
      }else {
        return
      }
    }else {
      a.preventDefault()
    }
    var b = this.xa, c = b.documentElement, d = !Zk;
    this.K.n(b, ["touchmove", "mousemove"], this.Ul, d);
    this.K.n(b, ["touchend", "mouseup"], this.$f, d);
    Zk ? (c.setCapture(o), this.K.n(c, "losecapture", this.$f)) : this.K.n(Ef(b), "blur", this.$f);
    R && this.km && this.K.n(b, "dragstart", jg);
    this.Ym && this.K.n(this.Ym, "scroll", this.Im, d);
    this.clientX = this.yk = a.clientX;
    this.clientY = this.zk = a.clientY;
    this.screenX = a.screenX;
    this.screenY = a.screenY;
    this.ee = this.target.offsetLeft;
    this.fe = this.target.offsetTop;
    this.pf = dg(V(this.xa));
    this.xm = xa()
  }
};
function al(a, b) {
  if(a.dispatchEvent(new bl("start", a, b.clientX, b.clientY, b)) !== o) {
    a.Wc = j
  }
}
t.$f = function(a, b) {
  th(this.K);
  Zk && this.xa.releaseCapture();
  if(this.Wc) {
    $k(a);
    this.Wc = o;
    var c = cl(this, this.ee), d = dl(this, this.fe);
    this.dispatchEvent(new bl("end", this, a.clientX, a.clientY, a, c, d, b || "touchcancel" == a.type))
  }
  ("touchend" == a.type || "touchcancel" == a.type) && a.preventDefault()
};
function $k(a) {
  var b = a.type;
  "touchstart" == b || "touchmove" == b ? a.Ld(a.Ma.targetTouches[0], a.currentTarget) : ("touchend" == b || "touchcancel" == b) && a.Ld(a.Ma.changedTouches[0], a.currentTarget)
}
t.Ul = function(a) {
  if(this.ya) {
    $k(a);
    var b = a.clientX - this.clientX, c = a.clientY - this.clientY;
    this.clientX = a.clientX;
    this.clientY = a.clientY;
    this.screenX = a.screenX;
    this.screenY = a.screenY;
    if(!this.Wc) {
      var d = this.yk - this.clientX, f = this.zk - this.clientY;
      if(d * d + f * f > this.Jj && (al(this, a), !this.Wc)) {
        this.$f(a);
        return
      }
    }
    c = el(this, b, c);
    b = c.x;
    c = c.y;
    this.Wc && this.dispatchEvent(new bl("beforedrag", this, a.clientX, a.clientY, a, b, c)) !== o && (fl(this, a, b, c), a.preventDefault())
  }
};
function el(a, b, c) {
  var d = dg(V(a.xa)), b = b + (d.x - a.pf.x), c = c + (d.y - a.pf.y);
  a.pf = d;
  a.ee += b;
  a.fe += c;
  b = cl(a, a.ee);
  a = dl(a, a.fe);
  return new tf(b, a)
}
t.Im = function(a) {
  var b = el(this, 0, 0);
  a.clientX = this.pf.x - this.clientX;
  a.clientY = this.pf.y - this.clientY;
  fl(this, a, b.x, b.y)
};
function fl(a, b, c, d) {
  a.target.style.left = c + "px";
  a.target.style.top = d + "px";
  a.dispatchEvent(new bl("drag", a, b.clientX, b.clientY, b, c, d))
}
function cl(a, b) {
  var c = a.ii, d = !isNaN(c.left) ? c.left : k, c = !isNaN(c.width) ? c.width : 0;
  return Math.min(d != k ? d + c : Infinity, Math.max(d != k ? d : -Infinity, b))
}
function dl(a, b) {
  var c = a.ii, d = !isNaN(c.top) ? c.top : k, c = !isNaN(c.height) ? c.height : 0;
  return Math.min(d != k ? d + c : Infinity, Math.max(d != k ? d : -Infinity, b))
}
function bl(a, b, c, d, f, h, i, l) {
  ig.call(this, a);
  this.clientX = c;
  this.clientY = d;
  this.no = f;
  this.left = fa(h) ? h : b.ee;
  this.top = fa(i) ? i : b.fe;
  this.ro = b;
  this.qo = !!l
}
A(bl, ig);
function gl(a, b, c) {
  Sj.call(this, c);
  this.Vb = a || "modal-dialog";
  this.Fi = !!b;
  this.Fb = hl()
}
A(gl, Sj);
t = gl.prototype;
t.dg = k;
t.ul = j;
t.Hj = j;
t.Fi = o;
t.of = j;
t.nj = j;
t.Vk = 0.5;
t.Dk = "";
t.va = "";
t.Fb = k;
t.ie = k;
t.pa = o;
t.rl = o;
t.wa = k;
t.ra = k;
t.Rg = k;
t.Cf = k;
t.Ck = k;
t.Qg = k;
t.Ue = k;
t.Tb = k;
t.yi = function(a) {
  this.Dk = a;
  this.Cf && Uf(this.Cf, a)
};
t.Ya = function(a) {
  this.va = a;
  if(this.Ue) {
    this.Ue.innerHTML = a
  }
};
t.V = function() {
  this.b() || this.Va();
  return this.Ue
};
t.wj = function() {
  this.b() || this.Va();
  return this.Tb
};
function il(a) {
  a.of = j;
  jl(a);
  var b = a.S();
  a.X && a.T() && (a.ra && b.Mj(a.ra, a.b()), a.wa && b.Mj(a.wa, a.b()), kl(a))
}
t.e = function() {
  jl(this);
  var a = this.S();
  this.k = a.e("div", {className:this.Vb, tabIndex:0}, this.Rg = a.e("div", {className:this.Vb + "-title", id:Vj(this)}, this.Cf = a.e("span", this.Vb + "-title-text", this.Dk), this.Qg = a.e("span", this.Vb + "-title-close")), this.Ue = a.e("div", this.Vb + "-content"), this.Tb = a.e("div", this.Vb + "-buttons"), this.Ak = a.e("span", {tabIndex:0}));
  this.Ck = this.Rg.id;
  oh(this.b(), "dialog");
  ph(this.b(), "labelledby", this.Ck || "");
  if(this.va) {
    this.Ue.innerHTML = this.va
  }
  Z(this.Qg, this.Hj);
  Z(this.b(), o);
  if(this.Fb) {
    a = this.Fb, a.k = this.Tb, a.Va()
  }
};
function jl(a) {
  if(a.Fi && a.of && !a.ra) {
    var b;
    b = a.S().e("iframe", {frameborder:0, style:"border:0;vertical-align:bottom;", src:'javascript:""'});
    a.ra = b;
    a.ra.className = a.Vb + "-bg";
    Z(a.ra, o);
    Aj(a.ra, 0)
  }else {
    if((!a.Fi || !a.of) && a.ra) {
      Y(a.ra), a.ra = k
    }
  }
  if(a.of && !a.wa) {
    a.wa = a.S().e("div", a.Vb + "-bg"), Aj(a.wa, a.Vk), Z(a.wa, o)
  }else {
    if(!a.of && a.wa) {
      Y(a.wa), a.wa = k
    }
  }
}
t.Va = function(a) {
  this.X && e(Error("Component already rendered"));
  this.b() || this.e();
  a = a || this.S().da().body;
  this.ra && a.appendChild(this.ra);
  this.wa && a.appendChild(this.wa);
  gl.c.Va.call(this, a)
};
t.la = function() {
  gl.c.la.call(this);
  this.dg = new Xk(this.S().da());
  if(this.nj && !this.ie) {
    var a = new Yk(this.b(), this.Rg);
    qf(this.Rg, this.Vb + "-title-draggable");
    this.ie = a
  }
  this.Na().n(this.Qg, "click", this.Km).n(this.dg, "focusin", this.Fm);
  oh(this.b(), "dialog");
  "" !== this.Cf.id && ph(this.b(), "labelledby", this.Cf.id)
};
t.Lb = function() {
  this.T() && this.ba(o);
  this.dg.w();
  this.dg = k;
  if(this.ie) {
    this.ie.w(), this.ie = k
  }
  gl.c.Lb.call(this)
};
t.ba = function(a) {
  if(a != this.pa) {
    var b = this.S().da(), c = Ef(b) || window;
    this.X || this.Va(b.body);
    a ? (kl(this), this.Ka(), this.Na().n(this.b(), "keydown", this.Od).n(this.b(), "keypress", this.Od).n(c, "resize", this.fk)) : this.Na().Ca(this.b(), "keydown", this.Od).Ca(this.b(), "keypress", this.Od).Ca(c, "resize", this.fk);
    this.ra && Z(this.ra, a);
    this.wa && Z(this.wa, a);
    Z(this.b(), a);
    a && this.focus();
    (this.pa = a) ? this.Na().n(this.Tb, "click", this.Yj) : (this.Na().Ca(this.Tb, "click", this.Yj), this.dispatchEvent(ll), this.rl && this.w())
  }
};
t.T = p("pa");
t.focus = function() {
  try {
    this.b().focus()
  }catch(a) {
  }
  if(this.Fb) {
    var b = this.Fb.Xf;
    if(b) {
      for(var c = this.S().da(), d = this.Tb.getElementsByTagName("button"), f = 0, h;h = d[f];f++) {
        if(h.name == b) {
          try {
            if(T || Q) {
              var i = c.createElement("input");
              i.style.cssText = "position:fixed;width:0;height:0;left:0;top:0;";
              this.b().appendChild(i);
              i.focus();
              this.b().removeChild(i)
            }
            h.focus()
          }catch(l) {
          }
          break
        }
      }
    }
  }
};
function kl(a) {
  a.ra && Z(a.ra, o);
  a.wa && Z(a.wa, o);
  var b = a.S().da(), c = Df(Ef(b) || window), d = Math.max(b.body.scrollWidth, c.width), b = Math.max(b.body.scrollHeight, c.height);
  a.ra && (Z(a.ra, j), xj(a.ra, d, b));
  a.wa && (Z(a.wa, j), xj(a.wa, d, b));
  if(a.nj) {
    c = yj(a.b()), a.ie.ii = new jj(0, 0, d - c.width, b - c.height)
  }
}
t.Ka = function() {
  var a = this.S().da(), b = Ef(a) || window;
  if("fixed" == nj(this.b(), "position")) {
    var c = a = 0
  }else {
    c = dg(this.S()), a = c.x, c = c.y
  }
  var d = yj(this.b()), b = Df(b), a = Math.max(a + b.width / 2 - d.width / 2, 0), c = Math.max(c + b.height / 2 - d.height / 2, 0);
  oj(this.b(), a, c)
};
t.Km = function() {
  if(this.Hj) {
    var a = this.Fb, b = a && a.kh;
    b ? (a = a.get(b), this.dispatchEvent(new ml(b, a)) && this.ba(o)) : this.ba(o)
  }
};
t.m = function() {
  gl.c.m.call(this);
  if(this.wa) {
    Y(this.wa), this.wa = k
  }
  if(this.ra) {
    Y(this.ra), this.ra = k
  }
  this.Ak = this.Tb = this.Qg = k
};
function nl(a, b) {
  a.Fb = b;
  if(a.Tb) {
    if(a.Fb) {
      var c = a.Fb;
      c.k = a.Tb;
      c.Va()
    }else {
      a.Tb.innerHTML = ""
    }
  }
}
t.Yj = function(a) {
  a: {
    for(a = a.target;a != k && a != this.Tb;) {
      if("BUTTON" == a.tagName) {
        break a
      }
      a = a.parentNode
    }
    a = k
  }
  if(a && !a.disabled) {
    var a = a.name, b = this.Fb.get(a);
    this.dispatchEvent(new ml(a, b)) && this.ba(o)
  }
};
t.Od = function(a) {
  var b = o, c = o, d = this.Fb, f = a.target;
  if("keydown" == a.type) {
    if(this.ul && 27 == a.keyCode) {
      var h = d && d.kh, f = "SELECT" == f.tagName && !f.disabled;
      h && !f ? (c = j, b = d.get(h), b = this.dispatchEvent(new ml(h, b))) : f || (b = j)
    }else {
      9 == a.keyCode && a.shiftKey && f == this.b() && (c = j)
    }
  }else {
    if(13 == a.keyCode) {
      if("BUTTON" == f.tagName) {
        h = f.name
      }else {
        if(d) {
          var i = d.Xf, l = i && ol(d, i), f = ("TEXTAREA" == f.tagName || "SELECT" == f.tagName) && !f.disabled;
          l && !l.disabled && !f && (h = i)
        }
      }
      h && (c = j, b = this.dispatchEvent(new ml(h, "" + d.get(h))))
    }
  }
  if(b || c) {
    a.stopPropagation(), a.preventDefault()
  }
  b && this.ba(o)
};
t.fk = function() {
  kl(this)
};
t.Fm = function(a) {
  this.Ak == a.target && nh(this.yl, 0, this)
};
t.yl = function() {
  R && this.S().da().body.focus();
  this.b().focus()
};
function ml(a, b) {
  this.type = pl;
  this.key = a;
  this.caption = b
}
A(ml, ig);
var pl = "dialogselect", ll = "afterhide";
function ql(a) {
  this.q = a || V();
  Sh.call(this)
}
A(ql, Sh);
t = ql.prototype;
t.Vb = "goog-buttonset";
t.Xf = k;
t.k = k;
t.kh = k;
t.set = function(a, b, c, d) {
  Sh.prototype.set.call(this, a, b);
  if(c) {
    this.Xf = a
  }
  if(d) {
    this.kh = a
  }
  return this
};
t.Db = function(a, b, c) {
  return this.set(a.key, a.caption, b, c)
};
t.Va = function() {
  if(this.k) {
    this.k.innerHTML = "";
    var a = V(this.k);
    Kh(this, function(b, c) {
      var d = a.e("button", {name:c}, b);
      if(c == this.Xf) {
        d.className = this.Vb + "-default"
      }
      this.k.appendChild(d)
    }, this)
  }
};
function ol(a, b) {
  for(var c = a.k.getElementsByTagName("BUTTON"), d = 0, f;f = c[d];d++) {
    if(f.name == b || f.id == b) {
      return f
    }
  }
  return k
}
var rl = z("OK"), sl = z("Cancel"), tl = z("Yes"), ul = z("No"), vl = z("Save"), xl = z("Continue"), yl = {key:"ok", caption:rl}, zl = {key:"cancel", caption:sl}, Al = {key:"yes", caption:tl}, Bl = {key:"no", caption:ul}, Cl = {key:"save", caption:vl}, Dl = {key:"continue", caption:xl};
function hl() {
  return(new ql).Db(yl, j).Db(zl, o, j)
}
(new ql).Db(yl, j, j);
hl();
(new ql).Db(Al, j).Db(Bl, o, j);
(new ql).Db(Al).Db(Bl, j).Db(zl, o, j);
(new ql).Db(Dl).Db(Cl).Db(zl, j, j);
function El() {
}
A(El, hg);
var Fl = Ki("goog.dom.SavedRange");
El.prototype.restore = function(a) {
  this.Zf && Fi(Fl, "Disposed SavedRange objects cannot be restored.");
  var b = this.Gg();
  a || this.w();
  return b
};
function Gl(a) {
  this.vk = Wa();
  this.oj = Wa();
  this.q = V(a.da());
  a.yf(this.q.e("SPAN", {id:this.vk}), this.q.e("SPAN", {id:this.oj}))
}
A(Gl, El);
function Hl(a, b) {
  return a.q.b(b ? a.vk : a.oj)
}
Gl.prototype.qf = function(a) {
  Y(Hl(this, j));
  Y(Hl(this, o));
  return a
};
Gl.prototype.Gg = function() {
  var a = k, b = Hl(this, j), c = Hl(this, o);
  if(b && c) {
    var a = b.parentNode, b = db(a.childNodes, b), d = c.parentNode, c = db(d.childNodes, c);
    d == a && (c -= 1);
    a = Il(a, b, d, c);
    a = this.qf(a);
    a.select()
  }else {
    this.qf()
  }
  return a
};
Gl.prototype.m = function() {
  this.qf();
  this.q = k
};
function Jl(a, b, c, d, f) {
  this.Wa = !!b;
  a && this.nd(a, d);
  this.depth = f != g ? f : this.Sa || 0;
  this.Wa && (this.depth *= -1);
  this.Sf = !c
}
A(Jl, Mh);
t = Jl.prototype;
t.C = k;
t.Sa = 0;
t.Bi = o;
t.nd = function(a, b, c) {
  if(this.C = a) {
    this.Sa = ma(b) ? b : 1 != this.C.nodeType ? 0 : this.Wa ? -1 : 1
  }
  if(ma(c)) {
    this.depth = c
  }
};
t.Ec = function(a) {
  this.C = a.C;
  this.Sa = a.Sa;
  this.depth = a.depth;
  this.Wa = a.Wa;
  this.Sf = a.Sf
};
t.ua = function() {
  return new Jl(this.C, this.Wa, !this.Sf, this.Sa, this.depth)
};
t.Ng = function() {
  var a = this.Wa ? -1 : 1;
  if(this.Sa == a) {
    this.Sa = -1 * a, this.depth += this.Sa * (this.Wa ? -1 : 1)
  }
};
t.next = function() {
  var a;
  if(this.Bi) {
    (!this.C || this.Sf && 0 == this.depth) && e(Lh);
    a = this.C;
    var b = this.Wa ? -1 : 1;
    if(this.Sa == b) {
      var c = this.Wa ? a.lastChild : a.firstChild;
      c ? this.nd(c) : this.nd(a, -1 * b)
    }else {
      (c = this.Wa ? a.previousSibling : a.nextSibling) ? this.nd(c) : this.nd(a.parentNode, -1 * b)
    }
    this.depth += this.Sa * (this.Wa ? -1 : 1)
  }else {
    this.Bi = j
  }
  (a = this.C) || e(Lh);
  return a
};
t.splice = function(a) {
  var b = this.C, c = this.Wa ? 1 : -1;
  if(this.Sa == c) {
    this.Sa = -1 * c, this.depth += this.Sa * (this.Wa ? -1 : 1)
  }
  this.Wa = !this.Wa;
  Jl.prototype.next.call(this);
  this.Wa = !this.Wa;
  for(var c = la(arguments[0]) ? arguments[0] : arguments, d = c.length - 1;0 <= d;d--) {
    Kf(c[d], b)
  }
  Y(b)
};
function Kl() {
}
function Ll(a) {
  if(a.getSelection) {
    return a.getSelection()
  }
  var a = a.document, b = a.selection;
  if(b) {
    try {
      var c = b.createRange();
      if(c.parentElement) {
        if(c.parentElement().document != a) {
          return k
        }
      }else {
        if(!c.length || c.item(0).document != a) {
          return k
        }
      }
    }catch(d) {
      return k
    }
    return b
  }
  return k
}
function Ml(a) {
  for(var b = [], c = 0, d = a.Gd();c < d;c++) {
    b.push(a.Yb(c))
  }
  return b
}
t = Kl.prototype;
t.Ua = function() {
  var a = this.Mb();
  return 1 == a.nodeType ? a : a.parentNode
};
t.cd = s(o);
t.da = function() {
  return X(R ? this.Mb() : this.r())
};
t.Oa = function() {
  return Ef(this.da())
};
t.containsNode = function(a, b) {
  return this.Uc(Nl(a), b)
};
t.mk = function(a) {
  this.isCollapsed() || this.Nc();
  return this.insertNode(a, j)
};
function Ol(a, b) {
  Jl.call(this, a, b, j)
}
A(Ol, Jl);
function Pl() {
}
A(Pl, Kl);
Pl.prototype.Uc = function(a, b) {
  var c = Ml(this), d = Ml(a);
  return(b ? jb : kb)(d, function(a) {
    return jb(c, function(c) {
      return c.Uc(a, b)
    })
  })
};
Pl.prototype.insertNode = function(a, b) {
  b ? Jf(a, this.r()) : Kf(a, this.D());
  return a
};
Pl.prototype.yf = function(a, b) {
  this.insertNode(a, j);
  this.insertNode(b, o)
};
function Ql(a, b, c) {
  Wk.call(this, a, b);
  this.Mk = c
}
A(Ql, Wk);
Ql.prototype.Ka = function(a, b, c, d) {
  var f = Uk(this.element, this.de, a, b, k, c, 10, d);
  if(f & 496) {
    var h = this.de, i = b;
    f & 48 && (h ^= 2, i ^= 2);
    f & 192 && (h ^= 1, i ^= 1);
    f = Uk(this.element, h, a, i, k, c, 10, d);
    f & 496 && (this.Mk ? Uk(this.element, this.de, a, b, k, c, 5, d) : Uk(this.element, this.de, a, b, k, c, 0, d))
  }
};
function Rl(a, b, c, d) {
  Ql.call(this, a, b, c);
  this.Vm = d
}
A(Rl, Ql);
Rl.prototype.Ka = function(a, b, c, d) {
  this.Vm ? Uk(this.element, this.de, a, b, k, c, 33, d) : Rl.c.Ka.call(this, a, b, c, d)
};
function Sl() {
}
A(Sl, hk);
ja(Sl);
t = Sl.prototype;
t.zb = ba();
t.e = function(a) {
  mk(a, o);
  a.dh &= -256;
  qk(a, 32, o);
  return a.S().e("button", {"class":this.rc(a).join(" "), disabled:!a.isEnabled(), title:a.Zc() || "", value:a.ga() || ""}, a.Xc() || "")
};
t.vc = function(a) {
  a.Na().n(a.b(), "click", a.Mc)
};
t.Kg = ia;
t.od = ia;
t.bd = function(a) {
  return a.isEnabled()
};
t.Qb = ia;
t.Bb = function(a, b, c) {
  Sl.c.Bb.call(this, a, b, c);
  if((a = a.b()) && 1 == b) {
    a.disabled = c
  }
};
t.ga = function(a) {
  return a.value
};
t.oa = function(a, b) {
  if(a) {
    a.value = b
  }
};
t.Ff = ia;
function Tl(a, b, c) {
  lk.call(this, a, b || Sl.fa(), c)
}
A(Tl, lk);
t = Tl.prototype;
t.ga = p("Hk");
t.oa = function(a) {
  this.Hk = a;
  this.t.oa(this.b(), a)
};
t.Zc = p("Df");
t.lc = function(a) {
  this.Df = a;
  this.t.lc(this.b(), a)
};
t.uk = ca("Df");
t.m = function() {
  Tl.c.m.call(this);
  delete this.Hk;
  delete this.Df
};
t.la = function() {
  Tl.c.la.call(this);
  if(this.Za & 32) {
    var a = this.za();
    a && this.Na().n(a, "keyup", this.qe)
  }
};
t.qe = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.Mc(a) : 32 == a.keyCode
};
jk("goog-button", function() {
  return new Tl(k)
});
function Ul(a, b, c, d) {
  Tl.call(this, a, c || Sk.fa(), d);
  qk(this, 64, j);
  b && this.vf(b);
  this.Z = new kh(500)
}
A(Ul, Tl);
t = Ul.prototype;
t.Ni = j;
t.ui = o;
t.$h = o;
t.Tm = o;
t.la = function() {
  Ul.c.la.call(this);
  this.B && Vl(this, this.B, j);
  ph(this.b(), "haspopup", "true")
};
t.Lb = function() {
  Ul.c.Lb.call(this);
  if(this.B) {
    this.na(o);
    this.B.Lb();
    Vl(this, this.B, o);
    var a = this.B.b();
    a && Y(a)
  }
};
t.m = function() {
  Ul.c.m.call(this);
  this.B && (this.B.w(), delete this.B);
  delete this.Qm;
  this.Z.w()
};
t.Ic = function(a) {
  Ul.c.Ic.call(this, a);
  if(this.wc() && (this.na(!this.bc(), a), this.B)) {
    this.B.Kc = this.bc()
  }
};
t.Id = function(a) {
  Ul.c.Id.call(this, a);
  if(this.B && !this.wc()) {
    this.B.Kc = o
  }
};
t.Mc = function() {
  this.setActive(o);
  return j
};
t.Jl = function(a) {
  this.B && this.B.T() && !this.zd(a.target) && this.na(o)
};
t.zd = function(a) {
  return a && Of(this.b(), a) || this.B && this.B.zd(a) || o
};
t.qe = function(a) {
  if(32 == a.keyCode) {
    if(a.preventDefault(), "keyup" != a.type) {
      return o
    }
  }else {
    if("key" != a.type) {
      return o
    }
  }
  if(this.B && this.B.T()) {
    var b = this.B.tb(a);
    return 27 == a.keyCode ? (this.na(o), j) : b
  }
  return 40 == a.keyCode || 38 == a.keyCode || 32 == a.keyCode ? (this.na(j), j) : o
};
t.af = function() {
  this.na(o)
};
t.Sl = function() {
  this.wc() || this.na(o)
};
t.tc = function(a) {
  this.$h || this.na(o);
  Ul.c.tc.call(this, a)
};
function Wl(a) {
  a.B || a.vf(new Rk(a.S()));
  return a.B || k
}
t.vf = function(a) {
  var b = this.B;
  if(a != b && (b && (this.na(o), this.X && Vl(this, b, o), delete this.B), a)) {
    this.B = a;
    Xj(a, this);
    a.ba(o);
    var c = this.$h;
    (a.$g = c) && a.Qb(j);
    this.X && Vl(this, a, j)
  }
  return b
};
t.Rb = function(a) {
  Wl(this).zc(a, j)
};
t.Xd = function(a, b) {
  Wl(this).Me(a, b, j)
};
t.me = function(a) {
  return this.B ? bk(this.B, a) : k
};
t.gg = function() {
  return this.B ? ak(this.B) : 0
};
t.ba = function(a, b) {
  var c = Ul.c.ba.call(this, a, b);
  c && !this.T() && this.na(o);
  return c
};
t.ic = function(a) {
  Ul.c.ic.call(this, a);
  this.isEnabled() || this.na(o)
};
t.na = function(a, b) {
  Ul.c.na.call(this, a);
  if(this.B && !!(this.Ra & 64) == a) {
    if(a) {
      this.B.X || (this.Tm ? this.B.Va(this.b().parentNode) : this.B.Va()), this.Ud = tj(this.b()), this.wd = zj(this.b()), Xl(this), this.B.Qa(-1)
    }else {
      if(this.setActive(o), this.B.Kc = o, this.b() && ph(this.b(), "activedescendant", ""), this.Cg != k) {
        this.Cg = g;
        var c = this.B.b();
        c && xj(c, "", "")
      }
    }
    this.B.ba(a, o, b);
    var c = this.Na(), d = a ? c.n : c.Ca;
    d.call(c, this.S().da(), "mousedown", this.Jl, j);
    this.$h && d.call(c, this.B, "blur", this.Sl);
    d.call(c, this.Z, mh, this.Bg);
    a ? this.Z.start() : this.Z.stop()
  }
};
function Xl(a) {
  if(a.B.X) {
    var b = new Rl(a.Qm || a.b(), a.Ni ? 5 : 7, !a.ui, a.ui), c = a.B.b();
    if(!a.B.T()) {
      c.style.visibility = "hidden", Z(c, j)
    }
    if(!a.Cg && a.ui) {
      a.Cg = yj(c)
    }
    b.Ka(c, a.Ni ? 4 : 6, k, a.Cg);
    if(!a.B.T()) {
      Z(c, o), c.style.visibility = "visible"
    }
  }
}
t.Bg = function() {
  var a = zj(this.b()), b = tj(this.b());
  if(!(this.wd == a || (!this.wd || !a ? 0 : this.wd.left == a.left && this.wd.width == a.width && this.wd.top == a.top && this.wd.height == a.height)) || !(this.Ud == b || (!this.Ud || !b ? 0 : this.Ud.top == b.top && this.Ud.right == b.right && this.Ud.bottom == b.bottom && this.Ud.left == b.left))) {
    this.wd = a, this.Ud = b, Xl(this)
  }
};
function Vl(a, b, c) {
  var d = a.Na(), c = c ? d.n : d.Ca;
  c.call(d, b, "action", a.af);
  c.call(d, b, "highlight", a.Oh);
  c.call(d, b, "unhighlight", a.Sh)
}
t.Oh = function(a) {
  ph(this.b(), "activedescendant", a.target.b().id)
};
t.Sh = function() {
  Ck(this.B) || ph(this.b(), "activedescendant", "")
};
jk("goog-menu-button", function() {
  return new Ul(k)
});
function Yl() {
}
A(Yl, Sk);
ja(Yl);
Yl.prototype.u = s("goog-toolbar-menu-button");
function Zl(a, b, c, d) {
  Ul.call(this, a, b, c || Yl.fa(), d)
}
A(Zl, Ul);
jk("goog-toolbar-menu-button", function() {
  return new Zl(k)
});
function $l() {
}
A($l, ik);
ja($l);
$l.prototype.u = s("goog-toolbar-button");
function am(a, b, c) {
  Tl.call(this, a, b || $l.fa(), c)
}
A(am, Tl);
jk("goog-toolbar-button", function() {
  return new am(k)
});
var bm = z("Link"), cm = z("Edit Link"), dm = z("Text to display:"), em = z("Link to:"), fm = z("Web address"), gm = z("Link to a page or file somewhere else on the web"), hm = z("Test this link"), im = z("{$startBold}Not sure what to put in the box?{$endBold} First, find the page on the web that you want to link to. (A {$searchEngineLink}search engine{$endLink} might be useful.) Then, copy the web address from the box in your browser's address bar, and paste it into the box above.", {startBold:"<b>", 
endBold:"</b>", searchEngineLink:"<a href='http://www.google.com/' target='_new'>", endLink:"</a>"}), jm = z("To what URL should this link go?"), km = z("Email address"), lm = z("Link to an email address"), mm = z("Invalid email address"), nm = z("To what email address should this link?");
z("{$preb}Be careful.{$postb} Remember that any time you include an email address on a web page, nasty spammers can find it too.", {preb:"<b>", postb:"</b>"});
z("Image");
function om(a, b, c) {
  Pk.call(this, a, b, c);
  this.xi(j)
}
A(om, Pk);
om.prototype.Mc = function() {
  return this.dispatchEvent("action")
};
jk("goog-option", function() {
  return new om(k)
});
function pm(a) {
  this.Vd = a || window;
  this.ug = Kg(this.Vd, "resize", this.Zl, o, this);
  this.La = Df(this.Vd);
  if(T && Ob || Q && this.Vd.self != this.Vd.top) {
    this.Vg = window.setInterval(va(this.Xi, this), qm)
  }
}
A(pm, Tg);
var qm = 500;
t = pm.prototype;
t.ug = k;
t.Vd = k;
t.La = k;
t.Vg = k;
t.Jh = function() {
  return this.La ? this.La.ua() : k
};
t.m = function() {
  pm.c.m.call(this);
  if(this.ug) {
    Og(this.ug), this.ug = k
  }
  if(this.Vg) {
    window.clearInterval(this.Vg), this.Vg = k
  }
  this.La = this.Vd = k
};
t.Zl = function() {
  this.Xi()
};
t.Xi = function() {
  var a = Df(this.Vd);
  if(!wf(a, this.La)) {
    this.La = a, this.dispatchEvent("resize")
  }
};
var rm, sm, tm, um, vm, wm, xm;
xm = wm = vm = um = tm = sm = rm = o;
var ym = We();
ym && (-1 != ym.indexOf("Firefox") ? rm = j : -1 != ym.indexOf("Camino") ? sm = j : -1 != ym.indexOf("iPhone") || -1 != ym.indexOf("iPod") ? tm = j : -1 != ym.indexOf("iPad") ? um = j : -1 != ym.indexOf("Android") ? vm = j : -1 != ym.indexOf("Chrome") ? wm = j : -1 != ym.indexOf("Safari") && (xm = j));
var zm = sm, Am = tm, Bm = um, Cm = vm, Dm = wm, Em = xm;
var Fm;
a: {
  var Gm = "", Hm, Im;
  if(rm) {
    Hm = /Firefox\/([0-9.]+)/
  }else {
    if(R || Q) {
      Fm = df;
      break a
    }
    Dm ? Hm = /Chrome\/([0-9.]+)/ : Em ? Hm = /Version\/([0-9.]+)/ : Am || Bm ? (Hm = /Version\/(\S+).*Mobile\/(\S+)/, Im = j) : Cm ? Hm = /Android\s+([0-9.]+)(?:.*Version\/([0-9.]+))?/ : zm && (Hm = /Camino\/([0-9.]+)/)
  }
  if(Hm) {
    var Jm = Hm.exec(We()), Gm = Jm ? Im ? Jm[1] + "." + Jm[2] : Jm[2] || Jm[1] : ""
  }
  Fm = Gm
}
;var Km = R && !U("9"), Lm = S || T || Q || R && U("9"), Mm = R || T || Q || o, Nm = T || o, Om = R || T || Q, Pm = S || T, Qm = S && j, Rm = S || T || Q, Sm = S || Q;
R && U("7.0");
var Tm = S && U("1.8") || T || Q;
R || Q || S && U("1.9");
var Um = S || T, Vm = R || Q, Wm = R || T && U("525"), Xm = T && !U("531"), Ym = T && !U("528");
S && U("1.9") || R || Q || T && U("531");
var Zm = R || S || Q, $m = S || T && !U("526"), an = R || Q, bn = !R && !Q, cn = !T;
Dm && 0 <= Ta(Fm, "4") || Em && U("533");
function dn(a) {
  var b = a && a.nodeName.toLowerCase();
  return!(!a || "block" != (1 != a.nodeType ? k : R ? a.currentStyle ? a.currentStyle.display : k : mj(a, "display")) && !("td" == b || "table" == b || "li" == b))
}
function en(a) {
  return bg(a, dn, j)
}
var fn = Hb("text", "file", "url");
function gn(a) {
  var b = a.target.tagName;
  "TEXTAREA" != b && "INPUT" != b && a.preventDefault()
}
function hn(a, b) {
  Pm && b.n(a, "mousedown", gn, j);
  Dj(a, j);
  for(var c = a.getElementsByTagName("INPUT"), d = 0, f = c.length;d < f;d++) {
    var h = c[d];
    h.type in fn && jn(h)
  }
  fb(a.getElementsByTagName("TEXTAREA"), jn)
}
function jn(a) {
  Dj(a, o);
  if(Pm) {
    for(var b = a, a = a.parentNode;a && "HTML" != a.tagName;) {
      if(Cj ? "none" == a.style[Cj].toLowerCase() : (R || Q) && "on" == a.getAttribute("unselectable")) {
        Dj(a, o, j);
        for(var c = 0, d = a.childNodes.length;c < d;c++) {
          var f = a.childNodes[c];
          f != b && 1 == f.nodeType && Dj(a.childNodes[c], j)
        }
      }
      b = a;
      a = a.parentNode
    }
  }
}
;function kn(a, b) {
  this.Aa = new qh(this);
  this.ue && e(Error("Can not change this state of the popup while showing."));
  this.k = a || k;
  if(b) {
    this.Ke = b
  }
}
A(kn, Tg);
t = kn.prototype;
t.k = k;
t.Rk = j;
t.Ri = k;
t.ue = o;
t.cn = o;
t.fi = -1;
t.Oj = -1;
t.hm = o;
t.tl = j;
t.Ke = "toggle_display";
t.hg = p("Ke");
t.b = p("k");
t.T = p("ue");
t.ba = function(a) {
  if(a) {
    if(!this.ue && this.dispatchEvent("beforeshow")) {
      this.k || e(Error("Caller must call setElement before trying to show the popup"));
      this.Ka();
      a = X(this.k);
      this.hm && this.Aa.n(a, "keydown", this.Em, j);
      if(this.Rk) {
        if(this.Aa.n(a, "mousedown", this.$j, j), R) {
          for(var b = a.activeElement;b && "IFRAME" == b.nodeName;) {
            try {
              var c = Tf(b)
            }catch(d) {
              break
            }
            a = c;
            b = a.activeElement
          }
          this.Aa.n(a, "mousedown", this.$j, j);
          this.Aa.n(a, "deactivate", this.Zj)
        }else {
          this.Aa.n(a, "blur", this.Zj)
        }
      }
      "toggle_display" == this.Ke ? (this.k.style.visibility = "visible", Z(this.k, j)) : "move_offscreen" == this.Ke && this.Ka();
      this.ue = j;
      this.fi = xa();
      this.Oj = -1;
      this.dispatchEvent("show")
    }
  }else {
    ln(this)
  }
};
t.Ka = ia;
function ln(a, b) {
  if(!a.ue || !a.dispatchEvent({type:"beforehide", target:b})) {
    return o
  }
  a.Aa && th(a.Aa);
  if("toggle_display" == a.Ke) {
    a.cn ? nh(a.Ij, 0, a) : a.Ij()
  }else {
    if("move_offscreen" == a.Ke) {
      a.k.style.left = "-200px", a.k.style.top = "-200px"
    }
  }
  a.ue = o;
  a.Oj = xa();
  a.dispatchEvent({type:"hide", target:b});
  return j
}
t.Ij = function() {
  this.k.style.visibility = "hidden";
  Z(this.k, o)
};
t.$j = function(a) {
  a = a.target;
  !Of(this.k, a) && (!this.Ri || Of(this.Ri, a)) && !(150 > xa() - this.fi) && ln(this, a)
};
t.Em = function(a) {
  27 == a.keyCode && ln(this, a.target) && (a.preventDefault(), a.stopPropagation())
};
t.Zj = function(a) {
  if(this.tl) {
    var b = X(this.k);
    if(R || Q) {
      if((a = b.activeElement) && Of(this.k, a)) {
        return
      }
    }else {
      if(a.target != b) {
        return
      }
    }
    150 > xa() - this.fi || ln(this)
  }
};
t.m = function() {
  kn.c.m.call(this);
  this.Aa.w();
  delete this.k;
  delete this.Aa
};
function mn(a, b) {
  this.q = new V(a);
  this.K = new qh(this);
  this.Hi = new pm(this.q.Oa());
  this.mb = {};
  this.qb = this.q.e("DIV", {className:nn});
  Z(this.qb, o);
  a.appendChild(this.qb);
  kj(this.qb, "zIndex", b);
  this.Ne = this.qb;
  this.cj = this.q.e("DIV", {className:"tr_bubble_closebox", innerHTML:"&nbsp;"});
  this.Ne.appendChild(this.cj);
  hn(this.qb, this.K);
  this.Eg = new kn(this.qb)
}
A(mn, Tg);
var nn = "tr_bubble";
t = mn.prototype;
t.dc = Ki("goog.ui.editor.Bubble");
t.m = function() {
  mn.c.m.call(this);
  Y(this.qb);
  this.qb = k;
  this.K.w();
  this.K = k;
  this.Hi.w();
  this.Hi = k
};
t.V = p("Ne");
t.Ua = p("qb");
t.fm = function() {
  this.T() && this.Ka()
};
function on(a, b) {
  return wb(a.mb, function(a) {
    return a.type == b
  })
}
t.dj = function() {
  this.Eg.ba(o)
};
t.Yl = function() {
  for(var a in this.mb) {
    Y(this.mb[a].element)
  }
  this.mb = {};
  rf(this.qb, "tr_multi_bubble");
  th(this.K);
  this.dispatchEvent("hide")
};
t.T = function() {
  return this.Eg.T()
};
var pn = R ? 4 : 2, qn = new ij(pn, 0, pn, 0);
mn.prototype.Ka = function() {
  var a = k, b = j, c;
  for(c in this.mb) {
    var d = this.mb[c], a = d.Ci, b = b && d.Rm
  }
  c = 496;
  a = vj(this.qb) != vj(a);
  b && (c = rn(this, a ? 7 : 5, 4, 9));
  c & 496 && (c = rn(this, a ? 6 : 4, 5, 9));
  c & 496 && (c = rn(this, a ? 7 : 5, 4, 5), c & 496 && Gi(this.dc, "reposition(): positionAtAnchor() failed with " + c))
};
function rn(a, b, c, d) {
  var f = k, h;
  for(h in a.mb) {
    var i = a.mb[h].Ci;
    if(!f || Of(i, f)) {
      f = a.mb[h].Ci
    }
  }
  return Uk(f, b, a.qb, c, k, qn, d)
}
function sn(a, b, c, d, f, h) {
  this.type = c;
  this.Ci = f;
  this.Rm = h;
  this.element = a.e("DIV", {className:"tr_bubble_panel", id:b}, a.e("DIV", {className:"tr_bubble_panel_title"}, d + ":"), a.e("DIV", {className:"tr_bubble_panel_content"}))
}
sn.prototype.V = function() {
  return this.element.lastChild
};
function tn(a) {
  this.k = a;
  this.Lj = R || T && !U("531") && "TEXTAREA" == a.tagName;
  this.K = new qh;
  this.K.n(this.k, this.Lj ? ["keydown", "paste", "cut", "drop"] : "input", this)
}
A(tn, Tg);
tn.prototype.Z = k;
tn.prototype.handleEvent = function(a) {
  if(this.Lj) {
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
      var c = "keydown" == a.type ? this.k.value : k;
      R && 229 == a.keyCode && (c = k);
      var d = un(a);
      vn(this);
      this.Z = nh(function() {
        this.Z = k;
        this.k.value != c && wn(this, d)
      }, 0, this)
    }
  }else {
    (!Q || this.k == X(this.k).activeElement) && wn(this, un(a))
  }
};
function vn(a) {
  if(a.Z != k) {
    lh.clearTimeout(a.Z), a.Z = k
  }
}
function un(a) {
  a = new mg(a.Ma);
  a.type = "input";
  return a
}
function wn(a, b) {
  try {
    a.dispatchEvent(b)
  }finally {
    b.w()
  }
}
tn.prototype.m = function() {
  tn.c.m.call(this);
  this.K.w();
  vn(this);
  delete this.k
};
function xn() {
  this.lh = []
}
A(xn, Kk);
ja(xn);
xn.prototype.u = s("goog-filterobsmenuitem");
function yn(a, b, c, d) {
  Pk.call(this, a, b, c, d || new xn)
}
A(yn, Pk);
yn.prototype.zg = k;
yn.prototype.la = function() {
  yn.c.la.call(this);
  this.zg && this.zg(this, "")
};
jk("goog-filterobsmenuitem", function() {
  return new yn(k)
});
function zn(a, b) {
  Rk.call(this, b, a)
}
A(zn, Rk);
t = zn.prototype;
t.Uj = 0;
t.di = "";
t.Pi = o;
t.vl = 0;
t.e = function() {
  zn.c.e.call(this);
  var a = this.S(), b = a.e("div", this.t.u() + "-filter", this.hf = a.e("div", k, this.di), this.sb = a.e("input", {type:"text"})), c = this.b();
  a.appendChild(c, b);
  this.ej = a.e("div", this.t.u() + "-content");
  a.appendChild(c, this.ej);
  this.Qb(j);
  a = this.sb;
  if(this.eg) {
    b = this.za();
    c = this.X;
    this.gf = a;
    var d = this.za();
    if(c) {
      this.gf = b, Bk(this, o), this.gf = a, xh(this.$e(), d), Bk(this, j)
    }
  }else {
    e(Error("Can't set key event target for container that doesn't support keyboard focus!"))
  }
  S && this.sb.setAttribute("autocomplete", "off");
  if(this.Uj) {
    this.sb.maxLength = this.Uj
  }
};
function An(a) {
  if(a.se) {
    Mg(a.se, "input", a.Cj, o, a), Mg(a.sb.parentNode, "click", a.ak, o, a), a.se.w(), a.se = g, a.ag = g
  }
}
t.ba = function(a, b, c) {
  if((b = zn.c.ba.call(this, a, b, c)) && a && this.X) {
    if(this.sb) {
      this.sb.value = "", Bn(this, "")
    }
    if(!this.se && this.sb && (this.se = new tn(this.sb), Dj(this.sb, o), Kg(this.se, "input", this.Cj, o, this), Kg(this.sb.parentNode, "click", this.ak, o, this), this.Pi)) {
      this.ag = []
    }
  }else {
    b && !a && An(this)
  }
  return b
};
t.m = function() {
  An(this);
  this.hf = this.sb = g;
  zn.c.m.call(this)
};
function Cn(a) {
  a.di = "Find or create parent";
  a.hf && Uf(a.hf, a.di)
}
t.Cj = function() {
  Bn(this, this.sb.value);
  var a = Ck(this);
  (!a || !a.T()) && Dk(this);
  this.dispatchEvent("filterchange")
};
function Bn(a, b) {
  if(a.wl != b) {
    if(a.hf) {
      a.hf.style.visibility = "" == b ? "visible" : "hidden"
    }
    if(a.Pi && a.ag) {
      var c = b.match(/^(.+),[ ]*([^,]*)$/), d = c && c[1] ? c[1].split(",") : [];
      if("," == b.substr(b.length - 1, 1) || d.length != a.ag.length) {
        var f = d[d.length - 1] || "";
        if(Ck(a) && "" != f) {
          var h = Ck(a).Xc();
          if(0 == h.toLowerCase().indexOf(f.toLowerCase())) {
            d[d.length - 1] = h, a.sb.value = d.join(",") + ","
          }
        }
        a.ag = d;
        a.dispatchEvent("change");
        a.Qa(-1)
      }
      c && (b = 2 < c.length ? Da(c[2]) : "")
    }
    c = RegExp("(^|[- ,_/.:])" + Ra(b), "i");
    for(f = a.vl;d = bk(a, f);f++) {
      if(d instanceof yn) {
        d.zg && d.zg(d, b || "")
      }else {
        if(!a.Om || !a.Om[Vj(d)]) {
          if(h = d.Xc()) {
            var i = h.match(c);
            "" == b || i ? (d.ba(j), (i = h.indexOf(i[0])) && i++, "" == b ? d.Ya(h) : d.Ya(a.S().e("span", k, h.substr(0, i), a.S().e("b", k, h.substr(i, b.length)), h.substr(i + b.length, h.length - b.length - i)))) : d.ba(o)
          }else {
            d.ba("" == b)
          }
        }
      }
    }
    a.wl = b
  }
}
t.tb = function(a) {
  if(a.shiftKey || a.ctrlKey || a.altKey || 36 == a.keyCode || 35 == a.keyCode) {
    return o
  }
  return 27 == a.keyCode ? (this.dispatchEvent("blur"), j) : zn.c.tb.call(this, a)
};
t.Qa = function(a) {
  zn.c.Qa.call(this, a);
  var a = this.V(), b = Ck(this) ? Ck(this).b() : k;
  if(b && Of(a, b)) {
    var c = R ? 0 : a.offsetTop, d = b.offsetTop + b.offsetHeight - c - (a.clientHeight + a.scrollTop);
    a.scrollTop += Math.max(d, 0);
    d = a.scrollTop - (b.offsetTop - c);
    a.scrollTop -= Math.max(d, 0)
  }
};
t.ak = function() {
  this.sb.focus()
};
t.V = function() {
  return this.ej || this.b()
};
function Dn(a, b, c, d, f) {
  var h;
  if(a) {
    this.J = a;
    this.W = b;
    this.G = c;
    this.U = d;
    if(1 == a.nodeType && "BR" != a.tagName) {
      if(a = a.childNodes, b = a[b]) {
        this.J = b, this.W = 0
      }else {
        if(a.length) {
          this.J = bb(a)
        }
        h = j
      }
    }
    if(1 == c.nodeType) {
      (this.G = c.childNodes[d]) ? this.U = 0 : this.G = c
    }
  }
  Ol.call(this, f ? this.G : this.J, f);
  if(h) {
    try {
      this.next()
    }catch(i) {
      i != Lh && e(i)
    }
  }
}
A(Dn, Ol);
t = Dn.prototype;
t.J = k;
t.G = k;
t.W = 0;
t.U = 0;
t.r = p("J");
t.D = p("G");
t.ff = function() {
  return this.Bi && this.C == this.G && (!this.U || 1 != this.Sa)
};
t.next = function() {
  this.ff() && e(Lh);
  return Dn.c.next.call(this)
};
t.Ng = function() {
  Dn.c.Ng.apply(this);
  Of(this.C, this.G) && e(Lh)
};
t.Ec = function(a) {
  this.J = a.J;
  this.G = a.G;
  this.W = a.W;
  this.U = a.U;
  this.cc = a.cc;
  Dn.c.Ec.call(this, a)
};
t.ua = function() {
  var a = new Dn(this.J, this.W, this.G, this.U, this.cc);
  a.Ec(this);
  return a
};
function En() {
}
En.prototype.Uc = function(a, b) {
  var c = b && !a.isCollapsed(), d = a.o;
  try {
    return c ? 0 <= this.Kb(d, 0, 1) && 0 >= this.Kb(d, 1, 0) : 0 <= this.Kb(d, 0, 0) && 0 >= this.Kb(d, 1, 1)
  }catch(f) {
    return R || e(f), o
  }
};
En.prototype.containsNode = function(a, b) {
  return this.Uc(Fn(a), b)
};
En.prototype.td = function() {
  return new Dn(this.r(), this.L(), this.D(), this.aa())
};
function Gn(a) {
  this.o = a
}
A(Gn, En);
function Hn(a) {
  var b = X(a).createRange();
  if(3 == a.nodeType) {
    b.setStart(a, 0), b.setEnd(a, a.length)
  }else {
    if(In(a)) {
      for(var c, d = a;(c = d.firstChild) && In(c);) {
        d = c
      }
      b.setStart(d, 0);
      for(d = a;(c = d.lastChild) && In(c);) {
        d = c
      }
      b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length)
    }else {
      c = a.parentNode, a = db(c.childNodes, a), b.setStart(c, a), b.setEnd(c, a + 1)
    }
  }
  return b
}
function Jn(a, b, c, d) {
  var f = X(a).createRange();
  f.setStart(a, b);
  f.setEnd(c, d);
  return f
}
t = Gn.prototype;
t.ua = function() {
  return new this.constructor(this.o.cloneRange())
};
t.Mb = function() {
  return this.o.commonAncestorContainer
};
t.r = function() {
  return this.o.startContainer
};
t.L = function() {
  return this.o.startOffset
};
t.D = function() {
  return this.o.endContainer
};
t.aa = function() {
  return this.o.endOffset
};
t.Kb = function(a, b, c) {
  return this.o.compareBoundaryPoints(1 == c ? 1 == b ? u.Range.START_TO_START : u.Range.START_TO_END : 1 == b ? u.Range.END_TO_START : u.Range.END_TO_END, a)
};
t.isCollapsed = function() {
  return this.o.collapsed
};
t.Fd = function() {
  return this.o.toString()
};
t.select = function(a) {
  this.Ig(Ef(X(this.r())).getSelection(), a)
};
t.Ig = function(a) {
  a.removeAllRanges();
  a.addRange(this.o)
};
t.Nc = function() {
  var a = this.o;
  a.extractContents();
  if(a.startContainer.hasChildNodes() && (a = a.startContainer.childNodes[a.startOffset])) {
    var b = a.previousSibling;
    "" == $f(a) && Y(a);
    b && "" == $f(b) && Y(b)
  }
};
t.insertNode = function(a, b) {
  var c = this.o.cloneRange();
  c.collapse(b);
  c.insertNode(a);
  c.detach();
  return a
};
t.yf = function(a, b) {
  var c = Ef(X(this.r()));
  if(c = Kn(c)) {
    var d = c.r(), f = c.D(), h = c.L(), i = c.aa()
  }
  var l = this.o.cloneRange(), m = this.o.cloneRange();
  l.collapse(o);
  m.collapse(j);
  l.insertNode(b);
  m.insertNode(a);
  l.detach();
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
    Il(d, h, f, i).select()
  }
};
t.collapse = function(a) {
  this.o.collapse(a)
};
function Ln(a) {
  this.o = a
}
A(Ln, Gn);
Ln.prototype.Ig = function(a, b) {
  var c = b ? this.D() : this.r(), d = b ? this.aa() : this.L(), f = b ? this.r() : this.D(), h = b ? this.L() : this.aa();
  a.collapse(c, d);
  (c != f || d != h) && a.extend(f, h)
};
function Mn(a, b, c, d) {
  Jl.call(this, a, b, c, k, d)
}
A(Mn, Jl);
Mn.prototype.next = function() {
  do {
    Mn.c.next.call(this)
  }while(-1 == this.Sa);
  return this.C
};
function Nn(a, b) {
  this.o = a;
  this.sl = b
}
A(Nn, En);
var On = Ki("goog.dom.browserrange.IeRange");
function Pn(a) {
  var b = X(a).body.createTextRange();
  if(1 == a.nodeType) {
    b.moveToElementText(a), In(a) && !a.childNodes.length && b.collapse(o)
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
t = Nn.prototype;
t.xc = k;
t.J = k;
t.G = k;
t.W = -1;
t.U = -1;
t.ua = function() {
  var a = new Nn(this.o.duplicate(), this.sl);
  a.xc = this.xc;
  a.J = this.J;
  a.G = this.G;
  return a
};
t.wb = function() {
  this.xc = this.J = this.G = k;
  this.W = this.U = -1
};
t.Mb = function() {
  if(!this.xc) {
    var a = this.o.text, b = this.o.duplicate(), c = a.replace(/ +$/, "");
    (c = a.length - c.length) && b.moveEnd("character", -c);
    c = b.parentElement();
    b = Ca(b.htmlText).length;
    if(this.isCollapsed() && 0 < b) {
      return this.xc = c
    }
    for(;b > Ca(c.outerHTML).length;) {
      c = c.parentNode
    }
    for(;1 == c.childNodes.length && c.innerText == (3 == c.firstChild.nodeType ? c.firstChild.nodeValue : c.firstChild.innerText) && In(c.firstChild);) {
      c = c.firstChild
    }
    0 == a.length && (c = Qn(this, c));
    this.xc = c
  }
  return this.xc
};
function Qn(a, b) {
  for(var c = b.childNodes, d = 0, f = c.length;d < f;d++) {
    var h = c[d];
    if(In(h)) {
      var i = Pn(h), l = i.htmlText != h.outerHTML;
      if(a.isCollapsed() && l ? 0 <= a.Kb(i, 1, 1) && 0 >= a.Kb(i, 1, 0) : a.o.inRange(i)) {
        return Qn(a, h)
      }
    }
  }
  return b
}
t.r = function() {
  if(!this.J && (this.J = Rn(this, 1), this.isCollapsed())) {
    this.G = this.J
  }
  return this.J
};
t.L = function() {
  if(0 > this.W && (this.W = Sn(this, 1), this.isCollapsed())) {
    this.U = this.W
  }
  return this.W
};
t.D = function() {
  if(this.isCollapsed()) {
    return this.r()
  }
  if(!this.G) {
    this.G = Rn(this, 0)
  }
  return this.G
};
t.aa = function() {
  if(this.isCollapsed()) {
    return this.L()
  }
  if(0 > this.U && (this.U = Sn(this, 0), this.isCollapsed())) {
    this.W = this.U
  }
  return this.U
};
t.Kb = function(a, b, c) {
  return this.o.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == c ? "Start" : "End"), a)
};
function Rn(a, b, c) {
  c = c || a.Mb();
  if(!c || !c.firstChild) {
    return c
  }
  for(var d = 1 == b, f = 0, h = c.childNodes.length;f < h;f++) {
    var i = d ? f : h - f - 1, l = c.childNodes[i], m;
    try {
      m = Fn(l)
    }catch(n) {
      continue
    }
    var q = m.o;
    if(a.isCollapsed()) {
      if(In(l)) {
        if(m.Uc(a)) {
          return Rn(a, b, l)
        }
      }else {
        if(0 == a.Kb(q, 1, 1)) {
          a.W = a.U = i;
          break
        }
      }
    }else {
      if(a.Uc(m)) {
        if(!In(l)) {
          d ? a.W = i : a.U = i + 1;
          break
        }
        return Rn(a, b, l)
      }
      if(0 > a.Kb(q, 1, 0) && 0 < a.Kb(q, 0, 1)) {
        return Rn(a, b, l)
      }
    }
  }
  return c
}
function Sn(a, b) {
  var c = 1 == b, d = c ? a.r() : a.D();
  if(1 == d.nodeType) {
    for(var d = d.childNodes, f = d.length, h = c ? 1 : -1, i = c ? 0 : f - 1;0 <= i && i < f;i += h) {
      var l = d[i];
      if(!In(l) && 0 == a.o.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == b ? "Start" : "End"), Fn(l).o)) {
        return c ? i : i + 1
      }
    }
    return-1 == i ? 0 : i
  }
  f = a.o.duplicate();
  h = Pn(d);
  f.setEndPoint(c ? "EndToEnd" : "StartToStart", h);
  f = f.text.length;
  return c ? d.length - f : f
}
t.isCollapsed = function() {
  return 0 == this.o.compareEndPoints("StartToEnd", this.o)
};
t.Fd = function() {
  return this.o.text
};
t.select = function() {
  this.o.select()
};
t.Nc = function() {
  if(this.o.htmlText) {
    var a = this.r(), b = this.D(), c = this.o.text, d = this.o.duplicate();
    d.moveStart("character", 1);
    d.moveStart("character", -1);
    if(d.text != c) {
      var f = new Mn(a, o, j), h = [];
      Oh(f, function(a) {
        3 != a.nodeType && this.containsNode(a) && (h.push(a), f.Ng());
        a == b && e(Lh)
      });
      this.collapse(j);
      fb(h, Y);
      this.wb()
    }else {
      this.o = d;
      this.o.text = "";
      this.wb();
      c = this.r();
      d = this.L();
      try {
        var i = a.nextSibling;
        if(a == b && a.parentNode && 3 == a.nodeType && i && 3 == i.nodeType) {
          a.nodeValue += i.nodeValue, Y(i), this.o = Pn(c), this.o.move("character", d), this.wb()
        }
      }catch(l) {
      }
    }
  }
};
function Tn(a, b, c) {
  var d;
  d = d || V(a.parentElement());
  var f;
  1 != b.nodeType && (f = j, b = d.e("DIV", k, b));
  a.collapse(c);
  var c = d || V(a.parentElement()), h, i = h = b.id;
  if(!h) {
    h = b.id = Wa()
  }
  a.pasteHTML(b.outerHTML);
  (b = c.b(h)) && (i || b.removeAttribute("id"));
  if(f) {
    a = b.firstChild, d.xl(b), b = a
  }
  return b
}
t.insertNode = function(a, b) {
  var c = Tn(this.o.duplicate(), a, b);
  this.wb();
  return c
};
t.yf = function(a, b) {
  var c = this.o.duplicate(), d = this.o.duplicate();
  Tn(c, a, j);
  Tn(d, b, o);
  this.wb()
};
t.collapse = function(a) {
  this.o.collapse(a);
  a ? (this.G = this.J, this.U = this.W) : (this.J = this.G, this.W = this.U)
};
function Un(a) {
  this.o = a
}
A(Un, Gn);
Un.prototype.Ig = function(a) {
  a.collapse(this.r(), this.L());
  (this.D() != this.r() || this.aa() != this.L()) && a.extend(this.D(), this.aa());
  0 == a.rangeCount && a.addRange(this.o)
};
function Vn(a) {
  this.o = a
}
A(Vn, Gn);
Vn.prototype.Kb = function(a, b, c) {
  return U("528") ? Vn.c.Kb.call(this, a, b, c) : this.o.compareBoundaryPoints(1 == c ? 1 == b ? u.Range.START_TO_START : u.Range.END_TO_START : 1 == b ? u.Range.START_TO_END : u.Range.END_TO_END, a)
};
Vn.prototype.Ig = function(a, b) {
  a.removeAllRanges();
  b ? a.setBaseAndExtent(this.D(), this.aa(), this.r(), this.L()) : a.setBaseAndExtent(this.r(), this.L(), this.D(), this.aa())
};
function Wn(a) {
  return R && !U("9") ? new Nn(a, X(a.parentElement())) : T ? new Vn(a) : S ? new Ln(a) : Q ? new Un(a) : new Gn(a)
}
function Fn(a) {
  if(R && !U("9")) {
    var b = new Nn(Pn(a), X(a));
    if(In(a)) {
      for(var c, d = a;(c = d.firstChild) && In(c);) {
        d = c
      }
      b.J = d;
      b.W = 0;
      for(d = a;(c = d.lastChild) && In(c);) {
        d = c
      }
      b.G = d;
      b.U = 1 == d.nodeType ? d.childNodes.length : d.length;
      b.xc = a
    }else {
      b.J = b.G = b.xc = a.parentNode, b.W = db(b.xc.childNodes, a), b.U = b.W + 1
    }
    a = b
  }else {
    a = T ? new Vn(Hn(a)) : S ? new Ln(Hn(a)) : Q ? new Un(Hn(a)) : new Gn(Hn(a))
  }
  return a
}
function In(a) {
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
;function Xn() {
}
A(Xn, Kl);
function Yn(a, b) {
  var c = new Xn;
  c.vd = a;
  c.cc = !!b;
  return c
}
function Il(a, b, c, d) {
  var f = new Xn;
  f.cc = Zn(a, b, c, d);
  if("BR" == a.tagName) {
    var h = a.parentNode, b = db(h.childNodes, a), a = h
  }
  if("BR" == c.tagName) {
    h = c.parentNode, d = db(h.childNodes, c), c = h
  }
  f.cc ? (f.J = c, f.W = d, f.G = a, f.U = b) : (f.J = a, f.W = b, f.G = c, f.U = d);
  return f
}
t = Xn.prototype;
t.vd = k;
t.J = k;
t.W = k;
t.G = k;
t.U = k;
t.cc = o;
t.ua = function() {
  var a = new Xn;
  a.vd = this.vd;
  a.J = this.J;
  a.W = this.W;
  a.G = this.G;
  a.U = this.U;
  a.cc = this.cc;
  return a
};
t.hg = s("text");
t.Xb = function() {
  return $n(this).o
};
t.wb = function() {
  this.J = this.W = this.G = this.U = k
};
t.Gd = s(1);
t.Yb = function() {
  return this
};
function $n(a) {
  var r;
  var b;
  if(!(b = a.vd)) {
    b = a.r();
    var c = a.L(), d = a.D(), f = a.aa();
    if(R && !U("9")) {
      var h = b, i = c, l = d, m = f, n = o;
      1 == h.nodeType && (i > h.childNodes.length && Fi(On, "Cannot have startOffset > startNode child count"), i = h.childNodes[i], n = !i, h = i || h.lastChild || h, i = 0);
      var q = Pn(h);
      i && q.move("character", i);
      h == l && i == m ? q.collapse(j) : (n && q.collapse(o), n = o, 1 == l.nodeType && (m > l.childNodes.length && Fi(On, "Cannot have endOffset > endNode child count"), r = (i = l.childNodes[m]) || l.lastChild || l, l = r, m = 0, n = !i), h = Pn(l), h.collapse(!n), m && h.moveEnd("character", m), q.setEndPoint("EndToEnd", h));
      m = new Nn(q, X(b));
      m.J = b;
      m.W = c;
      m.G = d;
      m.U = f;
      b = m
    }else {
      b = T ? new Vn(Jn(b, c, d, f)) : S ? new Ln(Jn(b, c, d, f)) : Q ? new Un(Jn(b, c, d, f)) : new Gn(Jn(b, c, d, f))
    }
    b = a.vd = b
  }
  return b
}
t.Mb = function() {
  return $n(this).Mb()
};
t.r = function() {
  return this.J || (this.J = $n(this).r())
};
t.L = function() {
  return this.W != k ? this.W : this.W = $n(this).L()
};
t.D = function() {
  return this.G || (this.G = $n(this).D())
};
t.aa = function() {
  return this.U != k ? this.U : this.U = $n(this).aa()
};
t.cd = p("cc");
t.Uc = function(a, b) {
  var c = a.hg();
  if("text" == c) {
    return $n(this).Uc($n(a), b)
  }
  return"control" == c ? (c = ao(a), (b ? jb : kb)(c, function(a) {
    return this.containsNode(a, b)
  }, this)) : o
};
t.isCollapsed = function() {
  return $n(this).isCollapsed()
};
t.Fd = function() {
  return $n(this).Fd()
};
t.td = function() {
  return new Dn(this.r(), this.L(), this.D(), this.aa())
};
t.select = function() {
  $n(this).select(this.cc)
};
t.Nc = function() {
  $n(this).Nc();
  this.wb()
};
t.insertNode = function(a, b) {
  var c = $n(this).insertNode(a, b);
  this.wb();
  return c
};
t.yf = function(a, b) {
  $n(this).yf(a, b);
  this.wb()
};
t.si = function() {
  return new bo(this)
};
t.collapse = function(a) {
  a = this.cd() ? !a : a;
  this.vd && this.vd.collapse(a);
  a ? (this.G = this.J, this.U = this.W) : (this.J = this.G, this.W = this.U);
  this.cc = o
};
function bo(a) {
  this.Qi = a.cd() ? a.D() : a.r();
  this.Pk = a.cd() ? a.aa() : a.L();
  this.tj = a.cd() ? a.r() : a.D();
  this.zl = a.cd() ? a.L() : a.aa()
}
A(bo, El);
bo.prototype.Gg = function() {
  return Il(this.Qi, this.Pk, this.tj, this.zl)
};
bo.prototype.m = function() {
  bo.c.m.call(this);
  this.tj = this.Qi = k
};
function co() {
}
A(co, Pl);
function eo(a) {
  var b = new co;
  b.o = a;
  return b
}
function fo(a) {
  for(var b = X(arguments[0]).body.createControlRange(), c = 0, d = arguments.length;c < d;c++) {
    b.addElement(arguments[c])
  }
  return eo(b)
}
t = co.prototype;
t.o = k;
t.Ha = k;
t.xf = k;
t.wb = function() {
  this.xf = this.Ha = k
};
t.ua = function() {
  return fo.apply(this, ao(this))
};
t.hg = s("control");
t.Xb = function() {
  return this.o || document.body.createControlRange()
};
t.Gd = function() {
  return this.o ? this.o.length : 0
};
t.Yb = function(a) {
  a = this.o.item(a);
  return Yn(Fn(a), g)
};
t.Mb = function() {
  return Sf.apply(k, ao(this))
};
t.r = function() {
  return go(this)[0]
};
t.L = s(0);
t.D = function() {
  var a = go(this), b = bb(a);
  return lb(a, function(a) {
    return Of(a, b)
  })
};
t.aa = function() {
  return this.D().childNodes.length
};
function ao(a) {
  if(!a.Ha && (a.Ha = [], a.o)) {
    for(var b = 0;b < a.o.length;b++) {
      a.Ha.push(a.o.item(b))
    }
  }
  return a.Ha
}
function go(a) {
  if(!a.xf) {
    a.xf = ao(a).concat(), a.xf.sort(function(a, c) {
      return a.sourceIndex - c.sourceIndex
    })
  }
  return a.xf
}
t.isCollapsed = function() {
  return!this.o || !this.o.length
};
t.Fd = s("");
t.td = function() {
  return new ho(this)
};
t.select = function() {
  this.o && this.o.select()
};
t.Nc = function() {
  if(this.o) {
    for(var a = [], b = 0, c = this.o.length;b < c;b++) {
      a.push(this.o.item(b))
    }
    fb(a, Y);
    this.collapse(o)
  }
};
t.mk = function(a) {
  a = this.insertNode(a, j);
  this.isCollapsed() || this.Nc();
  return a
};
t.si = function() {
  return new io(this)
};
t.collapse = function() {
  this.o = k;
  this.wb()
};
function io(a) {
  this.Ha = ao(a)
}
A(io, El);
io.prototype.Gg = function() {
  for(var a = (this.Ha.length ? X(this.Ha[0]) : document).body.createControlRange(), b = 0, c = this.Ha.length;b < c;b++) {
    a.addElement(this.Ha[b])
  }
  return eo(a)
};
io.prototype.m = function() {
  io.c.m.call(this);
  delete this.Ha
};
function ho(a) {
  if(a) {
    this.Ha = go(a), this.J = this.Ha.shift(), this.G = bb(this.Ha) || this.J
  }
  Ol.call(this, this.J, o)
}
A(ho, Ol);
t = ho.prototype;
t.J = k;
t.G = k;
t.Ha = k;
t.r = p("J");
t.D = p("G");
t.ff = function() {
  return!this.depth && !this.Ha.length
};
t.next = function() {
  this.ff() && e(Lh);
  if(!this.depth) {
    var a = this.Ha.shift();
    this.nd(a, 1, 1);
    return a
  }
  return ho.c.next.call(this)
};
t.Ec = function(a) {
  this.Ha = a.Ha;
  this.J = a.J;
  this.G = a.G;
  ho.c.Ec.call(this, a)
};
t.ua = function() {
  var a = new ho(k);
  a.Ec(this);
  return a
};
function jo() {
  this.Sb = [];
  this.Ae = [];
  this.Tf = this.Ie = k
}
A(jo, Pl);
function ko(a) {
  var b = new jo;
  b.Ae = a;
  b.Sb = ib(a, function(a) {
    return a.Xb()
  });
  return b
}
t = jo.prototype;
t.Ba = Ki("goog.dom.MultiRange");
t.wb = function() {
  this.Ae = [];
  this.Tf = this.Ie = k
};
t.ua = function() {
  var a = new jo;
  a.Sb = pb(this.Sb);
  return a
};
t.hg = s("mutli");
t.Xb = function() {
  1 < this.Sb.length && Gi(this.Ba, "getBrowserRangeObject called on MultiRange with more than 1 range");
  return this.Sb[0]
};
t.Gd = function() {
  return this.Sb.length
};
t.Yb = function(a) {
  this.Ae[a] || (this.Ae[a] = Yn(Wn(this.Sb[a]), g));
  return this.Ae[a]
};
t.Mb = function() {
  if(!this.Tf) {
    for(var a = [], b = 0, c = this.Gd();b < c;b++) {
      a.push(this.Yb(b).Mb())
    }
    this.Tf = Sf.apply(k, a)
  }
  return this.Tf
};
function lo(a) {
  if(!a.Ie) {
    a.Ie = Ml(a), a.Ie.sort(function(a, c) {
      var d = a.r(), f = a.L(), h = c.r(), i = c.L();
      return d == h && f == i ? 0 : Zn(d, f, h, i) ? 1 : -1
    })
  }
  return a.Ie
}
t.r = function() {
  return lo(this)[0].r()
};
t.L = function() {
  return lo(this)[0].L()
};
t.D = function() {
  return bb(lo(this)).D()
};
t.aa = function() {
  return bb(lo(this)).aa()
};
t.isCollapsed = function() {
  return 0 == this.Sb.length || 1 == this.Sb.length && this.Yb(0).isCollapsed()
};
t.Fd = function() {
  return ib(Ml(this), function(a) {
    return a.Fd()
  }).join("")
};
t.td = function() {
  return new mo(this)
};
t.select = function() {
  var a = Ll(this.Oa());
  a.removeAllRanges();
  for(var b = 0, c = this.Gd();b < c;b++) {
    a.addRange(this.Yb(b).Xb())
  }
};
t.Nc = function() {
  fb(Ml(this), function(a) {
    a.Nc()
  })
};
t.si = function() {
  return new no(this)
};
t.collapse = function(a) {
  if(!this.isCollapsed()) {
    var b = a ? this.Yb(0) : this.Yb(this.Gd() - 1);
    this.wb();
    b.collapse(a);
    this.Ae = [b];
    this.Ie = [b];
    this.Sb = [b.Xb()]
  }
};
function no(a) {
  this.ti = ib(Ml(a), function(a) {
    return a.si()
  })
}
A(no, El);
no.prototype.Gg = function() {
  var a = ib(this.ti, function(a) {
    return a.restore()
  });
  return ko(a)
};
no.prototype.m = function() {
  no.c.m.call(this);
  fb(this.ti, function(a) {
    a.w()
  });
  delete this.ti
};
function mo(a) {
  if(a) {
    this.dd = ib(lo(a), function(a) {
      return Nh(a)
    })
  }
  Ol.call(this, a ? this.r() : k, o)
}
A(mo, Ol);
t = mo.prototype;
t.dd = k;
t.Vf = 0;
t.r = function() {
  return this.dd[0].r()
};
t.D = function() {
  return bb(this.dd).D()
};
t.ff = function() {
  return this.dd[this.Vf].ff()
};
t.next = function() {
  try {
    var a = this.dd[this.Vf], b = a.next();
    this.nd(a.C, a.Sa, a.depth);
    return b
  }catch(c) {
    return(c !== Lh || this.dd.length - 1 == this.Vf) && e(c), this.Vf++, this.next()
  }
};
t.Ec = function(a) {
  this.dd = pb(a.dd);
  mo.c.Ec.call(this, a)
};
t.ua = function() {
  var a = new mo(k);
  a.Ec(this);
  return a
};
function Kn(a) {
  return(a = Ll(a || window)) && oo(a)
}
function oo(a) {
  var b, c = o;
  if(a.createRange) {
    try {
      b = a.createRange()
    }catch(d) {
      return k
    }
  }else {
    if(a.rangeCount) {
      if(1 < a.rangeCount) {
        b = new jo;
        for(var c = 0, f = a.rangeCount;c < f;c++) {
          b.Sb.push(a.getRangeAt(c))
        }
        return b
      }
      b = a.getRangeAt(0);
      c = Zn(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
    }else {
      return k
    }
  }
  return b && b.addElement ? eo(b) : Yn(Wn(b), c)
}
function Nl(a) {
  return Yn(Fn(a), g)
}
function po(a, b) {
  return Il(a, b, a, b)
}
function qo(a) {
  if(a = Ll(a || window)) {
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
function Zn(a, b, c, d) {
  if(a == c) {
    return d < b
  }
  var f;
  if(1 == a.nodeType && b) {
    if(f = a.childNodes[b]) {
      a = f, b = 0
    }else {
      if(Of(a, c)) {
        return j
      }
    }
  }
  if(1 == c.nodeType && d) {
    if(f = c.childNodes[d]) {
      c = f, d = 0
    }else {
      if(Of(c, a)) {
        return o
      }
    }
  }
  return 0 < (Pf(a, c) || b - d)
}
;function ro(a) {
  return function() {
    return a
  }
}
var so = ro(o), to = ro(j);
function uo() {
  this.ya = this.Kf()
}
A(uo, Tg);
t = uo.prototype;
t.d = k;
function vo(a) {
  return a.d && a.d.jb
}
t.Qk = j;
t.dc = Ki("goog.editor.Plugin");
t.enable = function(a) {
  this.d == a ? this.ya = j : Fi(this.dc, "Trying to enable an unregistered field with this plugin.")
};
t.disable = function(a) {
  this.d == a ? this.ya = o : Fi(this.dc, "Trying to disable an unregistered field with this plugin.")
};
t.isEnabled = function(a) {
  return this.d == a ? this.ya : o
};
t.Kf = so;
t.pm = so;
t.m = function() {
  if(this.d && this.d) {
    this.disable(this.d), this.d = k
  }
  uo.c.m.call(this)
};
var wo = Db({to:1, Ol:2, ig:3, re:4, jg:5, execCommand:6, queryCommandValue:7, ik:8, Yk:10, Xk:11}), xo = Hb(8, 10, 11);
uo.prototype.execCommand = function(a, b) {
  var c = this.pm(a);
  c || (S && yo(this.d, j), this.d.he());
  try {
    var d = this.ke.apply(this, arguments)
  }finally {
    c || (this.d.Vc(), "+link" != a && zo(this.d))
  }
  return d
};
uo.prototype.te = s(o);
function Ao() {
  uo.call(this);
  this.rb = new qh(this)
}
A(Ao, uo);
function Bo(a, b) {
  return new mn(a, b)
}
var Co = {};
t = Ao.prototype;
t.kd = k;
t.sc = ro("AbstractBubblePlugin");
t.ig = function() {
  this.T() && this.re();
  return o
};
t.re = function(a, b) {
  var c;
  if(a) {
    c = a.target
  }else {
    if(b) {
      c = b
    }else {
      var d = $(this.d);
      if(d) {
        var f = d.r(), h = d.D(), i = d.L(), l = d.aa();
        R && d.isCollapsed() && f != h && (d = po(f, i));
        1 == f.nodeType && f == h && i == l - 1 && (f = f.childNodes[i], 1 == f.nodeType && (c = f))
      }
      c = c || d && d.Ua()
    }
  }
  var m;
  a: {
    if(c) {
      c = ag(c, "A");
      if(!c && (d = $(this.d)) && d.isCollapsed() && 0 == d.L()) {
        (d = d.r().previousSibling) && "A" == d.tagName && (c = d)
      }
      if(i = c) {
        if(i != this.zf || !this.kd) {
          if(this.kd && Do(this), c = Eo(this), !on(c, this.Hh())) {
            this.zf = i;
            var f = this.Hh(), l = this.vj(), h = va(this.ol, this), n = this.dn(), d = Wa(), i = new sn(c.q, d, f, l, i, !n);
            c.mb[d] = i;
            l = 0;
            for(n = c.Ne.childNodes.length - 1;l < n;l++) {
              var q = c.Ne.childNodes[l];
              if(c.mb[q.id].type > f) {
                m = q;
                break
              }
            }
            Jf(i.element, m || c.Ne.lastChild);
            h(i.V());
            hn(i.element, c.K);
            m = xb(c.mb);
            1 == m ? (c.K.n(c.cj, "click", c.dj).n(c.Hi, "resize", c.fm).n(c.Eg, "hide", c.Yl), c.Eg.ba(j), c.Ka()) : 2 == m && qf(c.qb, "tr_multi_bubble");
            c.Ka();
            this.kd = d;
            this.rb.n(c, "hide", this.Ej);
            this.li()
          }
        }
        m = o;
        break a
      }
    }
    this.kd && Do(this);
    m = o
  }
  return m
};
t.disable = function(a) {
  if(a.Ob == Fo) {
    var b = Co[a.id];
    b && (b.w(), delete Co[a.id])
  }
};
function Eo(a) {
  var b = a.oo || a.d.ud.document.body;
  a.q = new V(b);
  var c = Co[a.d.id];
  c || (c = Bo.call(k, b, a.d.mo || 0), Co[a.d.id] = c);
  return c
}
t.Hh = s("");
t.vj = s("");
t.dn = so;
function Do(a) {
  if(a.kd) {
    var b = Eo(a), c = a.kd;
    Y(b.mb[c].element);
    delete b.mb[c];
    c = xb(b.mb);
    1 >= c && rf(b.qb, "tr_multi_bubble");
    0 == c ? b.dj() : b.Ka();
    a.Ej()
  }
}
t.li = ia;
t.Ej = function() {
  this.kd = this.zf = k;
  th(this.rb)
};
t.T = function() {
  return!!this.kd
};
t.Ka = function() {
  var a = Eo(this);
  a && a.Ka()
};
function Go(a, b) {
  return a.q.e("SPAN", {id:b, className:"tr_option-link"}, a.q.createTextNode("\u00a0-\u00a0"))
}
function Ho(a, b, c, d, f) {
  c = a.q.e("SPAN", {className:"tr_bubble_link"}, c);
  f ? f.appendChild(c) : (f = a.q.b(b)) && Lf(c, f);
  c.id = b;
  hn(c, a.rb);
  d && a.rb.n(c, "click", d)
}
;function Io(a, b, c) {
  this.ji = a;
  this.Md = b || 0;
  this.Aa = c;
  this.Wk = va(this.mj, this)
}
A(Io, hg);
t = Io.prototype;
t.Nb = 0;
t.m = function() {
  Io.c.m.call(this);
  this.stop();
  delete this.ji;
  delete this.Aa
};
t.start = function(a) {
  this.stop();
  this.Nb = nh(this.Wk, fa(a) ? a : this.Md)
};
t.stop = function() {
  this.wc() && lh.clearTimeout(this.Nb);
  this.Nb = 0
};
function Jo(a) {
  a.wc() && (a.stop(), a.mj())
}
t.wc = function() {
  return 0 != this.Nb
};
t.mj = function() {
  this.Nb = 0;
  this.ji && this.ji.call(this.Aa)
};
function Ko(a, b, c) {
  this.rj = a;
  this.zi = b;
  this.sj = this.eh = o;
  this.Fh = c || {}
}
function Lo(a, b) {
  this.Fo = a;
  this.fj = b
}
;function Mo(a, b, c) {
  this.Xj = a;
  this.Wm = !!c;
  a && !b && this.next()
}
A(Mo, Mh);
Mo.prototype.next = function() {
  var a = this.Xj;
  a || e(Lh);
  this.Xj = this.Wm ? a.previousSibling : a.nextSibling;
  return a
};
function No(a, b, c) {
  fa(c) || (c = b && a.childNodes.length ? a.childNodes.length - 1 : 0);
  Mo.call(this, a.childNodes[c], j, b)
}
A(No, Mo);
var Oo = Hb("ADDRESS", "BLOCKQUOTE", "BODY", "CAPTION", "CENTER", "COL", "COLGROUP", "DIR", "DIV", "DL", "DD", "DT", "FIELDSET", "FORM", "H1", "H2", "H3", "H4", "H5", "H6", "HR", "ISINDEX", "OL", "LI", "MAP", "MENU", "OPTGROUP", "OPTION", "P", "PRE", "TABLE", "TBODY", "TD", "TFOOT", "TH", "THEAD", "TR", "TL", "UL"), Po = Hb("IMG", "IFRAME", "EMBED");
function Qo(a) {
  for(var b;b = !a || 1 != a.nodeType ? k : Ro(Ph(new No(a, o), So));) {
    a = b
  }
  return a
}
function Ro(a) {
  try {
    return a.next()
  }catch(b) {
    return k
  }
}
function So(a) {
  return 1 == a.nodeType || 3 == a.nodeType && !Ba(a.nodeValue)
}
function To(a, b) {
  var c = $f(a);
  if(a.getElementsByTagName) {
    for(var d in Po) {
      if(a.tagName == d || 0 < a.getElementsByTagName(d).length) {
        return o
      }
    }
  }
  return!b && "\u00a0" == c || Ba(c)
}
function Uo(a) {
  return a.length || a.childNodes.length
}
function Vo(a) {
  return a.getAttribute && "true" == a.getAttribute("g_editable")
}
;function Wo(a, b) {
  var c = Xo(a, 1, b), c = Xo(c, 0, b), d = c.r(), f = c.D(), h = c.L(), c = c.aa();
  if(d == f) {
    for(;f != b && 0 == h && c == Uo(f);) {
      d = f.parentNode, h = db(d.childNodes, f), c = h + 1, f = d
    }
    d = f
  }
  return Il(d, h, f, c)
}
function Xo(a, b, c) {
  for(var d = (b = 1 == b) ? a.r() : a.D(), f = b ? a.L() : a.aa(), h = a.Ua();d != h && d != c && !(b && 0 != f || !b && f != Uo(d));) {
    var i = d.parentNode, f = db(i.childNodes, d), f = b ? f : f + 1, d = i
  }
  c = b ? d : a.r();
  h = b ? f : a.L();
  d = b ? a.D() : d;
  a = b ? a.aa() : f;
  return Il(c, h, d, a)
}
function Yo(a, b) {
  var c = a.parentNode, d = db(c.childNodes, a) + (b ? 0 : 1), c = Zo(c, d, b);
  po(c.C, c.Lc).select()
}
function $o(a) {
  for(var b = k, c = a.firstChild;c;) {
    var d = c.nextSibling;
    3 == c.nodeType ? "" == c.nodeValue ? a.removeChild(c) : b ? (b.nodeValue += c.nodeValue, a.removeChild(c)) : b = c : ($o(c), b = k);
    c = d
  }
}
function ap(a, b) {
  if(b) {
    var c = bp(b), d = en(b.Ua())
  }
  d ? (d = Sf(d, a), R ? $o(d) : d.normalize()) : a && (R ? $o(a) : a.normalize());
  return c ? c() : k
}
function cp(a, b) {
  return b ? Zo(a.r(), a.L()) : Zo(a.D(), a.aa())
}
function bp(a) {
  var b = dp(cp(a, j)), c = ep(b), d = b.C.previousSibling;
  if(3 == b.C.nodeType) {
    b.C = k
  }
  var f = dp(cp(a, o)), h = ep(f), i = f.C.previousSibling;
  if(3 == f.C.nodeType) {
    f.C = k
  }
  return function() {
    if(!b.C && d) {
      b.C = d.nextSibling, b.C || (b = new fp(d, Uo(d)))
    }
    if(!f.C && i) {
      f.C = i.nextSibling, f.C || (f = new fp(i, Uo(i)))
    }
    return Il(b.C || c.C.firstChild || c.C, b.Lc, f.C || h.C.firstChild || h.C, f.Lc)
  }
}
function dp(a) {
  var b;
  if(3 == a.C.nodeType) {
    for(b = a.C.previousSibling;b && 3 == b.nodeType;b = b.previousSibling) {
      a.Lc += Uo(b)
    }
  }else {
    b = a.C.previousSibling
  }
  var c = a.C.parentNode;
  a.C = b ? b.nextSibling : c.firstChild;
  return a
}
function gp(a) {
  return ag(a.Ua(), "LI") ? j : Qh(a, function(a) {
    return"LI" == a.tagName
  })
}
function fp(a, b) {
  this.C = a;
  this.Lc = b
}
function ep(a) {
  var b = a.C.parentNode;
  return new fp(b, db(b.childNodes, a.C))
}
function Zo(a, b, c) {
  for(;1 == a.nodeType;) {
    var d = a.childNodes[b];
    if(!d && !a.lastChild) {
      break
    }
    d ? (a = d.previousSibling, c && a ? b = Uo(a) : (a = d, b = 0)) : (a = a.lastChild, b = Uo(a))
  }
  return new fp(a, b)
}
function hp(a) {
  Gl.call(this, a)
}
A(hp, Gl);
hp.prototype.qf = function(a) {
  var b = Hl(this, j), c = Hl(this, o), b = b && c ? Sf(b, c) : b || c;
  hp.c.qf.call(this);
  if(a) {
    return ap(b, a)
  }
  b && (a = Kn(Ef(X(b))), (a = ap(b, a)) && a.select())
};
function ip(a, b) {
  this.uo = this.id = a;
  this.jb = k;
  this.gc = {};
  this.Kd = {};
  for(var c in wo) {
    this.Kd[c] = []
  }
  this.Uf = "";
  if(T && U("525.13") && 0 >= Ta(df, "525.18")) {
    this.Ii = "tr-webkit-workaround", this.Uf = "." + this.Ii + ">*{padding-right:1}"
  }
  this.Rd = {};
  this.Rd[jp] = 1;
  this.Rd[kp] = 1;
  this.Zh = this.pg = o;
  this.Yf = new Io(this.jj, lp, this);
  this.Wf = {};
  for(var d in mp) {
    this.Wf[mp[d]] = 0
  }
  if(S) {
    this.Gb = new Io(this.Mh, np, this)
  }
  this.rb = new qh(this);
  this.xn = [];
  this.Ob = Fo;
  this.xe = V(b || document);
  this.fc = this.xe.b(this.id);
  this.ud = this.xe.Oa()
}
A(ip, Tg);
ip.prototype.field = k;
ip.prototype.fc = k;
ip.prototype.dc = Ki("goog.editor.Field");
var jp = "change", kp = "delayedchange", mp = {Gn:"cvc", Wn:"load", ho:"unload", An:"beforechange", Fn:jp, Hn:kp, Bn:"beforefocus", In:"focus", Dn:"blur", Cn:"beforetab", $n:"selectionchange"}, Fo = 0, op = k;
ip.prototype.ad = o;
ip.prototype.b = p("field");
function pp(a, b, c, d) {
  var f = a.b();
  if(f && Qm) {
    f = f.ownerDocument
  }
  a.rb.n(f, b, c, d, g)
}
function qp(a, b) {
  var c = b.sc();
  a.gc[c] && Fi(a.dc, "Cannot register the same class of plugin twice.");
  a.gc[c] = b;
  for(var d in wo) {
    b[wo[d]] && a.Kd[d].push(b)
  }
  b.d = a;
  2 == a.Ob && b.enable(a)
}
var np = 15, lp = 250;
ip.prototype.Le = to;
var rp = {46:j, 8:j};
R || (rp[9] = j);
var sp = {86:j, 88:j};
R && (rp[229] = j);
function tp(a) {
  var b = !(a.ctrlKey || a.metaKey) && a.keyCode in rp;
  return(a.ctrlKey || a.metaKey) && a.keyCode in sp || b
}
ip.prototype.m = function() {
  (1 == this.Ob || 2 == this.Ob) && Gi(this.dc, "Disposing a field that is in use.");
  this.fc && this.execCommand("clearlorem");
  this.Ob = Fo;
  for(var a in this.gc) {
    var b = this.gc[a];
    b.Kf() || b.disable(this)
  }
  this.jb = this.field = k;
  this.rb && th(this.rb);
  if(Q && this.Le()) {
    try {
      var c = this.jb.Oa();
      c.removeEventListener("focus", this.gh, o);
      c.removeEventListener("blur", this.fh, o)
    }catch(d) {
    }
    delete this.gh;
    delete this.fh
  }
  this.Gb && this.Gb.stop();
  this.Yf.stop();
  this.xe = k;
  if(this.rb) {
    this.rb.w(), this.rb = k
  }
  for(;a = this.xn.pop();) {
    a.w()
  }
  op == this.id && (op = k);
  for(var f in this.gc) {
    a = this.gc[f], a.Qk && a.w()
  }
  delete this.gc;
  ip.c.m.call(this)
};
var up = ["DOMNodeInserted", "DOMNodeRemoved", "DOMNodeRemovedFromDocument", "DOMNodeInsertedIntoDocument", "DOMCharacterDataModified"];
function vp(a, b) {
  if(9 == b.keyCode && !a.dispatchEvent({type:"beforetab", shiftKey:b.shiftKey, altKey:b.altKey, ctrlKey:b.ctrlKey}) || S && b.metaKey && (37 == b.keyCode || 39 == b.keyCode)) {
    return b.preventDefault(), o
  }
  a.Kh = b.charCode || (tp(b) ? j : !(!S || b.ctrlKey || b.metaKey || S && !b.charCode));
  a.Kh && a.he();
  return j
}
var wp = {8:1, 9:1, 13:1, 33:1, 34:1, 35:1, 36:1, 37:1, 38:1, 39:1, 40:1, 46:1}, xp = {65:j, 86:j, 88:j}, yp = {8:1, 9:1, 13:1, 27:1, 33:1, 34:1, 37:1, 38:1, 39:1, 40:1};
t = ip.prototype;
t.ef = function(a, b) {
  for(var c = this.Kd[a], d = tb(arguments, 1), f = 0;f < c.length;++f) {
    var h = c[f];
    if((h.isEnabled(this) || xo[a]) && h[wo[a]].apply(h, d)) {
      return j
    }
  }
  return o
};
t.mm = function(a, b) {
  for(var c = this.Kd[a], d = tb(arguments, 1), f = 0;f < c.length;++f) {
    var h = c[f];
    (h.isEnabled(this) || xo[a]) && h[wo[a]].apply(h, d)
  }
};
t.oi = function(a, b, c) {
  for(var d = this.Kd[a], f = tb(arguments, 1), h = 0;h < d.length;++h) {
    var i = d[h];
    if(i.isEnabled(this) || xo[a]) {
      f[0] = i[wo[a]].apply(i, f)
    }
  }
  return f[0]
};
t.Ph = function(a) {
  (S || vp(this, a)) && !this.ef(1, a) && Wm && zp(this, a)
};
t.Pl = function(a) {
  if(S) {
    if(!vp(this, a)) {
      return
    }
  }else {
    this.Kh = j, this.he()
  }
  !this.ef(2, a) && !Wm && zp(this, a)
};
t.Ql = function(a) {
  !S && (this.Kh || tp(a)) && this.Mh();
  this.ef(3, a);
  Ap(this, "selectionchange") || (wp[a.keyCode] || (a.ctrlKey || a.metaKey) && xp[a.keyCode]) && this.rk.start()
};
function zp(a, b) {
  if(!b.altKey) {
    var c = Nb ? b.metaKey : b.ctrlKey;
    if(c || yp[b.keyCode]) {
      var d = b.charCode || b.keyCode;
      17 != d && a.ef(5, b, String.fromCharCode(d).toLowerCase(), c) && b.preventDefault()
    }
  }
}
t.execCommand = function(a, b) {
  for(var c = arguments, d, f = this.Kd[6], h = 0;h < f.length;++h) {
    var i = f[h];
    if(i.isEnabled(this) && i.te(a)) {
      d = i.execCommand.apply(i, c);
      break
    }
  }
  return d
};
t.queryCommandValue = function(a) {
  var b = 2 == this.Ob && this.rg;
  if(y(a)) {
    return this.Fg(a, b)
  }
  for(var c = {}, d = 0;d < a.length;d++) {
    c[a[d]] = this.Fg(a[d], b)
  }
  return c
};
t.Fg = function(a, b) {
  for(var c = this.Kd[7], d = 0;d < c.length;++d) {
    var f = c[d];
    if(f.isEnabled(this) && f.te(a) && (b || f.Kf())) {
      return f.queryCommandValue(a)
    }
  }
  return b ? k : o
};
t.Ll = function(a, b) {
  if(!Ap(this, jp)) {
    b = b.Ma;
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
t.Rh = function(a) {
  if(!Ap(this, jp) && (a = a.uj ? a.Ma : a, !a.target.firebugIgnore)) {
    this.Zh = this.pg = j, this.Gb.start()
  }
};
t.Bj = function() {
  R && this.execCommand("clearlorem", j);
  S && this.Bh();
  this.Vc()
};
function $(a) {
  return(a = a.jb && a.jb.Oa()) && Kn(a)
}
function zo(a, b, c) {
  if(!Ap(a, "selectionchange")) {
    var d = $(a), d = d && d.Ua();
    a.rg = !!d && Of(a.b(), d);
    a.dispatchEvent("cvc");
    a.dispatchEvent({type:"selectionchange", zo:b && b.type});
    a.ef(4, b, c)
  }
}
t.$l = function() {
  var a = this.qk;
  this.qk = k;
  zo(this, g, a)
};
t.he = function() {
  Ap(this, "beforechange") || this.dispatchEvent("beforechange")
};
function yo(a, b) {
  b && (a.Gb && Jo(a.Gb), a.Rd[jp] = 1);
  a.Gb && Jo(a.Gb);
  Jo(a.Yf);
  a.Rd[kp] = 1
}
function Bp(a, b, c) {
  !b && a.Gb && Jo(a.Gb);
  a.Rd[jp] = 0;
  a.Rd[kp] = 0;
  b && a.Mh();
  c && a.jj()
}
function Ap(a, b) {
  return!!a.Rd[b] || a.Wf[b] && 500 >= xa() - a.Wf[b]
}
t.Vc = function(a) {
  Bp(this, j, a)
};
t.Mh = function() {
  if(!Ap(this, jp)) {
    this.Gb && this.Gb.stop(), this.Zh = this.pg = j, Ap(this, kp) || this.Yf.start()
  }
};
t.jj = function() {
  if(!Ap(this, kp)) {
    this.Yf.stop(), this.pg = o, this.dispatchEvent(kp)
  }
};
t.Bh = function() {
  this.hj();
  this.kj()
};
t.hj = function() {
  Ap(this, "beforefocus") || (this.execCommand("clearlorem", j), this.dispatchEvent("beforefocus"))
};
t.kj = function() {
  if(!Ap(this, "focus")) {
    op = this.id;
    this.rg = j;
    this.dispatchEvent("focus");
    if(S) {
      var a = this.b(), b = $(this);
      if(b) {
        var c = b.cd() ? b.r() : b.D();
        0 == (b.cd() ? b.L() : b.aa()) && (!c || c == a || "BODY" == c.tagName) && po(Qo(a), 0).select()
      }
    }
    !Om && this.Le() && this.jb.Oa().parent.getSelection().removeAllRanges()
  }
};
t.ij = function() {
  if(!Ap(this, "blur")) {
    op == this.id && (op = k), this.rg = o, this.dispatchEvent("blur")
  }
};
function Cp(a) {
  ag(a.target, "A") && a.preventDefault()
}
t.kg = function(a) {
  if(!op) {
    op = this.id
  }
  if(R) {
    var b = a.target;
    b && "A" == b.tagName && a.ctrlKey && this.xe.Oa().open(b.href)
  }
};
t.Tl = function(a) {
  zo(this, a);
  if(R) {
    this.qk = a.target, this.rk.start()
  }
};
function Dp() {
  var a = kc(Ep);
  if(a.queryCommandValue("usinglorem")) {
    return"\u00a0"
  }
  if(2 != a.Ob) {
    var b = a.fc;
    b || a.dc.log(xi, "Couldn't get the field element to read the contents", g);
    return b.innerHTML
  }
  var c = a.b(), b = c.cloneNode(o), c = c.innerHTML;
  R && c.match(/^\s*<script/i) && (c = "\u00a0" + c);
  b.innerHTML = c;
  a.mm(11, b);
  return a.oi(10, b.innerHTML)
}
function Fp(a, b) {
  if(1 == a.Ob) {
    Fi(a.dc, "Can't set html while loading Trogedit")
  }else {
    b && (b = "<p>" + b + "</p>");
    yo(a, o);
    var c = b, d = a.b();
    if(d) {
      if(a.Le() && T) {
        for(var f = d.ownerDocument.getElementsByTagName("HEAD"), h = f.length - 1;1 <= h;--h) {
          f[h].parentNode.removeChild(f[h])
        }
      }
    }else {
      d = a.fc
    }
    if(d) {
      f = {}, c = a.oi(8, c || "", f), kj(d, f), d.innerHTML = c
    }
    2 == a.Ob && (S && Jo(a.Gb), Bp(a))
  }
}
t.focus = function() {
  if(!Mm || T) {
    this.jb.Oa().focus()
  }else {
    if(Q) {
      var a = this.ud.pageXOffset, b = this.ud.pageYOffset
    }
    this.b().focus();
    Q && this.ud.scrollTo(a, b)
  }
};
function Gp(a) {
  var b = a.b();
  if(b) {
    var c = Qo(b);
    b == c ? po(b, 0).select() : Yo(c, j);
    zo(a)
  }
}
function Hp(a) {
  if(!fa(a.ai) && (a.ai = o, R && a.Le())) {
    for(var b = a.xe.Oa();b != b.parent;) {
      try {
        b = b.parent
      }catch(c) {
        break
      }
    }
    b = b.location;
    a.ai = "https:" == b.protocol && -1 == b.search.indexOf("nocheckhttps")
  }
  return a.ai
}
t.Kj = function(a, b, c) {
  if(this.Gh) {
    Og(this.Gh), this.Gh = k
  }
  a.lo = "true";
  var d = cg(V(this.fc)), c = new Ko(this.id, d, c);
  if(Hp(this)) {
    var f = Tf(a).body;
    if(Mm) {
      f.contentEditable = j
    }
    f.className = "editable";
    f.setAttribute("g_editable", j);
    f.hideFocus = j;
    f.id = c.rj;
    kj(f, c.Fh);
    f.innerHTML = b
  }else {
    var d = new Lo(this.b(), this.Uf), h = [];
    c.eh && c.zi && h.push("<!DOCTYPE HTML>");
    h.push('<html style="background:none transparent;');
    c.eh && h.push("height:", c.sj ? "100%" : "auto");
    h.push('">');
    h.push("<head><style>");
    d && d.fj && h.push(d.fj);
    S && c.zi && h.push(" img {-moz-force-broken-image-icon: 1;}");
    h.push("</style></head>");
    h.push('<body g_editable="true" hidefocus="true" ');
    Mm && h.push("contentEditable ");
    h.push('class="editable ');
    h.push('" id="', c.rj, '" style="');
    S && c.eh && (h.push(";width:100%;border:0;margin:0;background:none transparent;", ";height:", c.zi ? "100%" : "auto"), c.sj ? h.push(";overflow:auto") : h.push(";overflow-y:hidden;overflow-x:auto"));
    Q && h.push(";outline:hidden");
    for(f in c.Fh) {
      h.push(";" + f + ":" + c.Fh[f])
    }
    h.push('">', b, "</body></html>");
    b = h.join("");
    f = Tf(a);
    f.open();
    f.write(b);
    f.close()
  }
  a = Tf(a).body;
  this.Ob = 2;
  this.field = a;
  this.jb = V(a);
  this.Zh = this.pg = o;
  a.setAttribute("g_editable", "true");
  if(!Mm) {
    a = this.jb.da(), a.designMode = "on", Tm && a.execCommand("styleWithCSS", o, o)
  }
  R && qo(this.jb.Oa());
  op != this.id && this.execCommand("updatelorem");
  Q && this.Le() ? (this.gh = va(this.Bh, this), this.fh = va(this.ij, this), a = this.jb.Oa(), a.addEventListener("focus", this.gh, o), a.addEventListener("blur", this.fh, o)) : (Vm ? (pp(this, "focus", this.kj), pp(this, kg, this.hj)) : pp(this, "focus", this.Bh), pp(this, "blur", this.ij, S));
  S ? Nm ? this.rb.n(this.b(), "DOMSubtreeModified", this.Rh) : (a = this.jb.da(), this.rb.n(a, up, this.Rh, j), this.rb.n(a, "DOMAttrModified", va(this.Ll, this, this.Rh), j)) : (pp(this, ["beforecut", "beforepaste", "drop", "dragend"], this.he), pp(this, ["cut", "paste"], this.Vc), pp(this, "drop", this.Bj));
  pp(this, T ? "dragend" : "dragdrop", this.Bj);
  pp(this, "keydown", this.Ph);
  pp(this, "keypress", this.Pl);
  pp(this, "keyup", this.Ql);
  this.rk = new Io(this.$l, 250, this);
  T && pp(this, "click", Cp);
  pp(this, "mousedown", this.kg);
  pp(this, "mouseup", this.Tl);
  a = this.b();
  this.Ii && qf(a, this.Ii);
  if(this.Uf && Hp(this)) {
    a = this.Uf, b = V(this.b()), c = k, R ? (c = b.da().createStyleSheet(), Bj(c, a)) : (f = zf(b.xa, "head", g, g)[0], f || (c = zf(b.xa, "body", g, g)[0], f = b.e("head"), c.parentNode.insertBefore(f, c)), c = b.e("style"), Bj(c, a), b.appendChild(f, c))
  }
  Bp(this);
  this.dc.info("Dispatching load " + this.id);
  this.dispatchEvent("load");
  for(var i in this.gc) {
    this.gc[i].enable(this)
  }
};
function Ip(a, b) {
  this.Aa = new qh(this);
  this.cg = a;
  this.Cb = b;
  this.mi = [];
  $j(this.Cb, function(a) {
    a.ia && this.mi.push(Jp(Vj(a)))
  }, this);
  this.Cb.Qb(o);
  this.Aa.n(this.cg, "cvc", this.on).n(this.Cb, "action", this.Dl)
}
A(Ip, Tg);
function Jp(a) {
  return a
}
function Kp(a) {
  return a
}
t = Ip.prototype;
t.Na = p("Aa");
t.T = function() {
  return this.Cb.T()
};
t.ba = function(a) {
  this.Cb.ba(a)
};
t.isEnabled = function() {
  return this.Cb.isEnabled()
};
t.ic = function(a) {
  this.Cb.ic(a)
};
t.blur = function() {
  this.Cb.tc(k)
};
t.m = function() {
  Ip.c.m.call(this);
  this.Aa && (this.Aa.w(), delete this.Aa);
  this.Cb && (this.Cb.w(), delete this.Cb);
  delete this.cg;
  delete this.mi
};
t.on = function(a) {
  if(this.Cb.isEnabled() && this.dispatchEvent("change")) {
    var b;
    try {
      b = this.cg.queryCommandValue(a.po || this.mi)
    }catch(c) {
      b = {}
    }
    var a = b, d;
    for(d in a) {
      if(b = Yj(this.Cb, d)) {
        var f = a[d];
        b.qd ? b.qd(f) : pk(b, !!f)
      }
    }
  }
};
t.Dl = function(a) {
  this.cg.execCommand(Kp(Vj(a.target)), a.target.ga())
};
function Lp(a, b) {
  this.Ag = [];
  for(this.xg = [];a && "BODY" != a.nodeName && a != b;) {
    for(var c = 0, d = a.previousSibling;d;) {
      d = d.previousSibling, ++c
    }
    this.Ag.unshift(c);
    this.xg.unshift(a.nodeName);
    a = a.parentNode
  }
}
A(Lp, hg);
Lp.prototype.toString = function() {
  for(var a = [], b, c = 0;b = this.xg[c];c++) {
    a.push(this.Ag[c] + "," + b)
  }
  return a.join("\n")
};
function Mp(a, b) {
  for(var c, d = b, f = 0;c = a.xg[f];++f) {
    if(d = d.childNodes[a.Ag[f]], !d || d.nodeName != c) {
      return k
    }
  }
  return d
}
Lp.prototype.m = function() {
  delete this.Ag;
  delete this.xg
};
function Np() {
  uo.call(this)
}
A(Np, uo);
Np.prototype.jg = function(a) {
  return S && this.d.ad ? o : 9 == a.keyCode && !a.metaKey && !a.ctrlKey ? this.Fj(a) : o
};
function Op() {
  uo.call(this)
}
A(Op, Np);
Op.prototype.sc = s("SpacesTabHandler");
Op.prototype.Fj = function(a) {
  var b = vo(this), c = $(this.d);
  return!gp(c) ? (a.shiftKey || (yo(this.d, j), c.isCollapsed() || (b.da().execCommand("delete", o, k), c = $(this.d)), b = b.e("span", k, "\u00a0\u00a0 \u00a0"), b = c.insertNode(b, o), this.d.Vc(), Yo(b, o), zo(this.d)), a.preventDefault(), j) : o
};
function Pp() {
}
A(Pp, vk);
ja(Pp);
Pp.prototype.zb = s("toolbar");
Pp.prototype.u = s("goog-toolbar");
Pp.prototype.xj = function() {
  return xk
};
function Qp(a, b, c) {
  zk.call(this, b, a || Pp.fa(), c)
}
A(Qp, zk);
var Rp = {aliceblue:"#f0f8ff", antiquewhite:"#faebd7", aqua:"#00ffff", aquamarine:"#7fffd4", azure:"#f0ffff", beige:"#f5f5dc", bisque:"#ffe4c4", black:"#000000", blanchedalmond:"#ffebcd", blue:"#0000ff", blueviolet:"#8a2be2", brown:"#a52a2a", burlywood:"#deb887", cadetblue:"#5f9ea0", chartreuse:"#7fff00", chocolate:"#d2691e", coral:"#ff7f50", cornflowerblue:"#6495ed", cornsilk:"#fff8dc", crimson:"#dc143c", cyan:"#00ffff", darkblue:"#00008b", darkcyan:"#008b8b", darkgoldenrod:"#b8860b", darkgray:"#a9a9a9", 
darkgreen:"#006400", darkgrey:"#a9a9a9", darkkhaki:"#bdb76b", darkmagenta:"#8b008b", darkolivegreen:"#556b2f", darkorange:"#ff8c00", darkorchid:"#9932cc", darkred:"#8b0000", darksalmon:"#e9967a", darkseagreen:"#8fbc8f", darkslateblue:"#483d8b", darkslategray:"#2f4f4f", darkslategrey:"#2f4f4f", darkturquoise:"#00ced1", darkviolet:"#9400d3", deeppink:"#ff1493", deepskyblue:"#00bfff", dimgray:"#696969", dimgrey:"#696969", dodgerblue:"#1e90ff", firebrick:"#b22222", floralwhite:"#fffaf0", forestgreen:"#228b22", 
fuchsia:"#ff00ff", gainsboro:"#dcdcdc", ghostwhite:"#f8f8ff", gold:"#ffd700", goldenrod:"#daa520", gray:"#808080", green:"#008000", greenyellow:"#adff2f", grey:"#808080", honeydew:"#f0fff0", hotpink:"#ff69b4", indianred:"#cd5c5c", indigo:"#4b0082", ivory:"#fffff0", khaki:"#f0e68c", lavender:"#e6e6fa", lavenderblush:"#fff0f5", lawngreen:"#7cfc00", lemonchiffon:"#fffacd", lightblue:"#add8e6", lightcoral:"#f08080", lightcyan:"#e0ffff", lightgoldenrodyellow:"#fafad2", lightgray:"#d3d3d3", lightgreen:"#90ee90", 
lightgrey:"#d3d3d3", lightpink:"#ffb6c1", lightsalmon:"#ffa07a", lightseagreen:"#20b2aa", lightskyblue:"#87cefa", lightslategray:"#778899", lightslategrey:"#778899", lightsteelblue:"#b0c4de", lightyellow:"#ffffe0", lime:"#00ff00", limegreen:"#32cd32", linen:"#faf0e6", magenta:"#ff00ff", maroon:"#800000", mediumaquamarine:"#66cdaa", mediumblue:"#0000cd", mediumorchid:"#ba55d3", mediumpurple:"#9370d8", mediumseagreen:"#3cb371", mediumslateblue:"#7b68ee", mediumspringgreen:"#00fa9a", mediumturquoise:"#48d1cc", 
mediumvioletred:"#c71585", midnightblue:"#191970", mintcream:"#f5fffa", mistyrose:"#ffe4e1", moccasin:"#ffe4b5", navajowhite:"#ffdead", navy:"#000080", oldlace:"#fdf5e6", olive:"#808000", olivedrab:"#6b8e23", orange:"#ffa500", orangered:"#ff4500", orchid:"#da70d6", palegoldenrod:"#eee8aa", palegreen:"#98fb98", paleturquoise:"#afeeee", palevioletred:"#d87093", papayawhip:"#ffefd5", peachpuff:"#ffdab9", peru:"#cd853f", pink:"#ffc0cb", plum:"#dda0dd", powderblue:"#b0e0e6", purple:"#800080", red:"#ff0000", 
rosybrown:"#bc8f8f", royalblue:"#4169e1", saddlebrown:"#8b4513", salmon:"#fa8072", sandybrown:"#f4a460", seagreen:"#2e8b57", seashell:"#fff5ee", sienna:"#a0522d", silver:"#c0c0c0", skyblue:"#87ceeb", slateblue:"#6a5acd", slategray:"#708090", slategrey:"#708090", snow:"#fffafa", springgreen:"#00ff7f", steelblue:"#4682b4", tan:"#d2b48c", teal:"#008080", thistle:"#d8bfd8", tomato:"#ff6347", turquoise:"#40e0d0", violet:"#ee82ee", wheat:"#f5deb3", white:"#ffffff", whitesmoke:"#f5f5f5", yellow:"#ffff00", 
yellowgreen:"#9acd32"};
function Sp(a) {
  var b = {}, a = "" + a, c = "#" == a.charAt(0) ? a : "#" + a;
  if(Tp.test(c)) {
    return b.mg = Up(c), b.type = "hex", b
  }
  a: {
    var d = a.match(Vp);
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
    return f = c[0], a = c[1], c = c[2], f = Number(f), a = Number(a), c = Number(c), (isNaN(f) || 0 > f || 255 < f || isNaN(a) || 0 > a || 255 < a || isNaN(c) || 0 > c || 255 < c) && e(Error('"(' + f + "," + a + "," + c + '") is not a valid RGB color')), f = Wp(f.toString(16)), a = Wp(a.toString(16)), c = Wp(c.toString(16)), b.mg = "#" + f + a + c, b.type = "rgb", b
  }
  if(Rp && (c = Rp[a.toLowerCase()])) {
    return b.mg = c, b.type = "named", b
  }
  e(Error(a + " is not a valid color string"))
}
var Xp = /#(.)(.)(.)/;
function Up(a) {
  Tp.test(a) || e(Error("'" + a + "' is not a valid hex color"));
  4 == a.length && (a = a.replace(Xp, "#$1$1$2$2$3$3"));
  return a.toLowerCase()
}
var Tp = /^#(?:[0-9a-f]{3}){1,2}$/i, Vp = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
function Wp(a) {
  return 1 == a.length ? "0" + a : a
}
;function Yp() {
}
A(Yp, Sk);
ja(Yp);
Yp.prototype.createCaption = function(a, b) {
  return Yp.c.createCaption.call(this, Zp(a, b), b)
};
function Zp(a, b) {
  return b.e("div", "goog-color-menu-button-indicator", a)
}
Yp.prototype.oa = function(a, b) {
  a && $p(this.V(a), b)
};
function $p(a, b) {
  if(a && a.firstChild) {
    var c;
    try {
      c = Sp(b).mg
    }catch(d) {
      c = k
    }
    a.firstChild.style.borderBottomColor = c || (R ? "" : "transparent")
  }
}
Yp.prototype.vc = function(a) {
  this.oa(a.b(), a.ga());
  qf(a.b(), "goog-color-menu-button");
  Yp.c.vc.call(this, a)
};
function aq() {
}
A(aq, ek);
ja(aq);
var bq = 0;
aq.prototype.e = function(a) {
  var b = this.rc(a);
  return a.S().e("div", b ? b.join(" ") : k, cq(this, a.va, a.Jh(), a.S()))
};
function cq(a, b, c, d) {
  for(var f = [], h = 0, i = 0;h < c.height;h++) {
    for(var l = [], m = 0;m < c.width;m++) {
      var n = b && b[i++];
      l.push(dq(a, n, d))
    }
    f.push(d.e("tr", a.u() + "-row", l))
  }
  return a.wh(f, d)
}
aq.prototype.wh = function(a, b) {
  var c = b.e("table", this.u() + "-table", b.e("tbody", this.u() + "-body", a));
  c.cellSpacing = 0;
  c.cellPadding = 0;
  oh(c, "grid");
  return c
};
function dq(a, b, c) {
  a = c.e("td", {"class":a.u() + "-cell", id:a.u() + "-cell-" + bq++}, b);
  oh(a, "gridcell");
  return a
}
aq.prototype.Ya = function(a, b) {
  if(a) {
    var c = zf(document, "tbody", this.u() + "-body", a)[0];
    if(c) {
      var d = 0;
      fb(c.rows, function(a) {
        fb(a.cells, function(a) {
          If(a);
          if(b) {
            var c = b[d++];
            c && a.appendChild(c)
          }
        })
      });
      if(d < b.length) {
        for(var f = [], h = V(a), i = c.rows[0].cells.length;d < b.length;) {
          var l = b[d++];
          f.push(dq(this, l, h));
          if(f.length == i) {
            l = h.e("tr", this.u() + "-row", f), c.appendChild(l), f.length = 0
          }
        }
        if(0 < f.length) {
          for(;f.length < i;) {
            f.push(dq(this, "", h))
          }
          l = h.e("tr", this.u() + "-row", f);
          c.appendChild(l)
        }
      }
    }
    Dj(a, j, S)
  }
};
function eq(a, b, c) {
  for(b = b.b();c && 1 == c.nodeType && c != b;) {
    if("TD" == c.tagName && mb(pf(c), a.u() + "-cell")) {
      return c.firstChild
    }
    c = c.parentNode
  }
  return k
}
function fq(a, b, c, d) {
  if(c) {
    c = c.parentNode, sf(c, a.u() + "-cell-hover", d), ph(b.b().firstChild, "activedescendent", c.id)
  }
}
aq.prototype.u = s("goog-palette");
function gq(a) {
  this.Nd = [];
  hq(this, a)
}
A(gq, Tg);
t = gq.prototype;
t.ld = k;
t.md = k;
t.gg = function() {
  return this.Nd.length
};
t.me = function(a) {
  return this.Nd[a] || k
};
function hq(a, b) {
  b && (fb(b, function(a) {
    this.Ee(a, o)
  }, a), rb(a.Nd, b))
}
t.Rb = function(a) {
  this.Xd(a, this.gg())
};
t.Xd = function(a, b) {
  a && (this.Ee(a, o), sb(this.Nd, b, 0, a))
};
t.Yc = p("ld");
t.kc = function(a) {
  if(a != this.ld) {
    this.Ee(this.ld, o), this.ld = a, this.Ee(a, j)
  }
  this.dispatchEvent("select")
};
t.oe = function() {
  return this.ld ? db(this.Nd, this.ld) : -1
};
t.Mg = function(a) {
  this.kc(this.me(a))
};
t.clear = function() {
  var a = this.Nd;
  if(!ka(a)) {
    for(var b = a.length - 1;0 <= b;b--) {
      delete a[b]
    }
  }
  a.length = 0;
  this.ld = k
};
t.m = function() {
  gq.c.m.call(this);
  delete this.Nd;
  this.ld = k
};
t.Ee = function(a, b) {
  a && ("function" == typeof this.md ? this.md(a, b) : "function" == typeof a.Ge && a.Ge(b))
};
function iq(a, b, c) {
  lk.call(this, a, b || aq.fa(), c)
}
A(iq, lk);
t = iq.prototype;
t.La = k;
t.Ea = -1;
t.z = k;
t.m = function() {
  iq.c.m.call(this);
  if(this.z) {
    this.z.w(), this.z = k
  }
  this.La = k
};
t.Lg = function(a) {
  iq.c.Lg.call(this, a);
  jq(this);
  this.z ? (this.z.clear(), hq(this.z, a)) : (this.z = new gq(a), this.z.md = va(this.Ee, this), this.Na().n(this.z, "select", this.re));
  this.Ea = -1
};
t.Xc = s(k);
t.cf = function(a) {
  iq.c.cf.call(this, a);
  var b = eq(this.t, this, a.target);
  if((!b || !a.relatedTarget || !Of(b, a.relatedTarget)) && b != kq(this)) {
    a = this.va, this.Qa(a ? db(a, b) : -1)
  }
};
t.bf = function(a) {
  iq.c.bf.call(this, a);
  var b = eq(this.t, this, a.target);
  (!b || !a.relatedTarget || !Of(b, a.relatedTarget)) && b == kq(this) && fq(this.t, this, b, o)
};
t.Ic = function(a) {
  iq.c.Ic.call(this, a);
  if(this.wc() && (a = eq(this.t, this, a.target), a != kq(this))) {
    var b = this.va;
    this.Qa(b ? db(b, a) : -1)
  }
};
t.Mc = function() {
  var a = kq(this);
  return a ? (this.kc(a), this.dispatchEvent("action")) : o
};
t.tb = function(a) {
  var b = this.va, b = b ? b.length : 0, c = this.La.width;
  if(0 == b || !this.isEnabled()) {
    return o
  }
  if(13 == a.keyCode || 32 == a.keyCode) {
    return this.Mc(a)
  }
  if(36 == a.keyCode) {
    return this.Qa(0), j
  }
  if(35 == a.keyCode) {
    return this.Qa(b - 1), j
  }
  var d = 0 > this.Ea ? this.oe() : this.Ea;
  switch(a.keyCode) {
    case 37:
      -1 == d && (d = b);
      if(0 < d) {
        return this.Qa(d - 1), a.preventDefault(), j
      }
      break;
    case 39:
      if(d < b - 1) {
        return this.Qa(d + 1), a.preventDefault(), j
      }
      break;
    case 38:
      -1 == d && (d = b + c - 1);
      if(d >= c) {
        return this.Qa(d - c), a.preventDefault(), j
      }
      break;
    case 40:
      if(-1 == d && (d = -c), d < b - c) {
        return this.Qa(d + c), a.preventDefault(), j
      }
  }
  return o
};
t.re = ba();
t.Jh = p("La");
function kq(a) {
  var b = a.va;
  return b && b[a.Ea]
}
t.Qa = function(a) {
  if(a != this.Ea) {
    lq(this, this.Ea, o), this.Ea = a, lq(this, a, j)
  }
};
t.oe = function() {
  return this.z ? this.z.oe() : -1
};
t.Yc = function() {
  return this.z ? this.z.Yc() : k
};
t.Mg = function(a) {
  this.z && this.z.Mg(a)
};
t.kc = function(a) {
  this.z && this.z.kc(a)
};
function lq(a, b, c) {
  if(a.b()) {
    var d = a.va;
    d && 0 <= b && b < d.length && fq(a.t, a, d[b], c)
  }
}
t.Ee = function(a, b) {
  this.b() && a && sf(a.parentNode, this.t.u() + "-cell-selected", b)
};
function jq(a) {
  var b = a.va;
  if(b) {
    if(a.La && a.La.width) {
      if(b = Math.ceil(b.length / a.La.width), !ma(a.La.height) || a.La.height < b) {
        a.La.height = b
      }
    }else {
      b = Math.ceil(Math.sqrt(b.length)), a.La = new vf(b, b)
    }
  }else {
    a.La = new vf(0, 0)
  }
}
;function mq(a, b, c) {
  this.Rf = a || [];
  iq.call(this, k, b || aq.fa(), c);
  this.Rf = this.Rf;
  this.yg = k;
  this.Ya(nq(this))
}
A(mq, iq);
mq.prototype.yg = k;
mq.prototype.Ih = function() {
  var a = this.Yc();
  return a ? (a = a.style[Ya("background-color")] || "", oq(a)) : k
};
mq.prototype.wf = function(a) {
  a = oq(a);
  if(!this.yg) {
    this.yg = ib(this.Rf, function(a) {
      return oq(a)
    })
  }
  this.Mg(a ? db(this.yg, a) : -1)
};
function nq(a) {
  return ib(a.Rf, function(a) {
    var c = this.S().e("div", {"class":this.t.u() + "-colorswatch", style:"background-color:" + a});
    "#" == a.charAt(0) && (a = Up(a), a = "RGB (" + [parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)].join(", ") + ")");
    c.title = a;
    return c
  }, a)
}
function oq(a) {
  if(a) {
    try {
      return Sp(a).mg
    }catch(b) {
    }
  }
  return k
}
;function pq(a, b, c, d) {
  Ul.call(this, a, b, c || Yp.fa(), d)
}
A(pq, Ul);
var qq = {Nn:"#000,#444,#666,#999,#ccc,#eee,#f3f3f3,#fff".split(","), ao:"#f00,#f90,#ff0,#0f0,#0ff,#00f,#90f,#f0f".split(","), Zn:"#f4cccc,#fce5cd,#fff2cc,#d9ead3,#d0e0e3,#cfe2f3,#d9d2e9,#ead1dc,#ea9999,#f9cb9c,#ffe599,#b6d7a8,#a2c4c9,#9fc5e8,#b4a7d6,#d5a6bd,#e06666,#f6b26b,#ffd966,#93c47d,#76a5af,#6fa8dc,#8e7cc3,#c27ba0,#cc0000,#e69138,#f1c232,#6aa84f,#45818e,#3d85c6,#674ea7,#a64d79,#990000,#b45f06,#bf9000,#38761d,#134f5c,#0b5394,#351c75,#741b47,#660000,#783f04,#7f6000,#274e13,#0c343d,#073763,#20124d,#4c1130".split(",")};
function rq(a) {
  var b = new Rk(a);
  vb(qq, function(c) {
    c = new mq(c, k, a);
    c.b() && e(Error("Component already rendered"));
    c.La = ma(8) ? new vf(8, g) : 8;
    jq(c);
    b.zc(c, j)
  });
  return b
}
t = pq.prototype;
t.Ih = function() {
  return this.ga()
};
t.wf = function(a) {
  this.oa(a)
};
t.oa = function(a) {
  for(var b = 0, c;c = this.me(b);b++) {
    "function" == typeof c.wf && c.wf(a)
  }
  pq.c.oa.call(this, a)
};
t.af = function(a) {
  "function" == typeof a.target.Ih ? this.oa(a.target.Ih()) : "none" == a.target.ga() && this.oa(k);
  pq.c.af.call(this, a);
  a.stopPropagation();
  this.dispatchEvent("action")
};
t.na = function(a, b) {
  a && 0 == this.gg() && (this.vf(rq(this.S())), this.oa(this.ga()));
  pq.c.na.call(this, a, b)
};
jk("goog-color-menu-button", function() {
  return new pq(k)
});
function sq() {
}
A(sq, Yl);
ja(sq);
sq.prototype.createCaption = function(a, b) {
  return Tk(Zp(a, b), this.u(), b)
};
sq.prototype.oa = function(a, b) {
  a && $p(this.V(a), b)
};
sq.prototype.vc = function(a) {
  this.oa(a.b(), a.ga());
  qf(a.b(), "goog-toolbar-color-menu-button");
  sq.c.vc.call(this, a)
};
function tq(a, b, c, d) {
  pq.call(this, a, b, c || sq.fa(), d)
}
A(tq, pq);
jk("goog-toolbar-color-menu-button", function() {
  return new tq(k)
});
function uq(a, b, c, d) {
  Ul.call(this, a, b, c, d);
  vq(this, a)
}
A(uq, Ul);
t = uq.prototype;
t.z = k;
t.zh = k;
t.la = function() {
  uq.c.la.call(this);
  wq(this);
  xq(this)
};
t.m = function() {
  uq.c.m.call(this);
  if(this.z) {
    this.z.w(), this.z = k
  }
  this.zh = k
};
t.af = function(a) {
  this.kc(a.target);
  uq.c.af.call(this, a);
  a.stopPropagation();
  this.dispatchEvent("action")
};
t.re = function() {
  var a = this.Yc();
  uq.c.oa.call(this, a && a.ga());
  wq(this)
};
t.vf = function(a) {
  var b = uq.c.vf.call(this, a);
  a != b && (this.z && this.z.clear(), a && (this.z ? $j(a, function(a) {
    this.z.Rb(a)
  }, this) : yq(this, a)));
  return b
};
function vq(a, b) {
  a.zh = b;
  wq(a)
}
t.Rb = function(a) {
  uq.c.Rb.call(this, a);
  this.z ? this.z.Rb(a) : yq(this, Wl(this))
};
t.Xd = function(a, b) {
  uq.c.Xd.call(this, a, b);
  this.z ? this.z.Xd(a, b) : yq(this, Wl(this))
};
t.kc = function(a) {
  this.z && this.z.kc(a)
};
t.Mg = function(a) {
  this.z && this.kc(this.z.me(a))
};
t.oa = function(a) {
  if(a != k && this.z) {
    for(var b = 0, c;c = this.z.me(b);b++) {
      if(c && "function" == typeof c.ga && c.ga() == a) {
        this.kc(c);
        return
      }
    }
  }
  this.kc(k)
};
t.Yc = function() {
  return this.z ? this.z.Yc() : k
};
t.oe = function() {
  return this.z ? this.z.oe() : -1
};
function yq(a, b) {
  a.z = new gq;
  b && $j(b, function(a) {
    this.z.Rb(a)
  }, a);
  xq(a)
}
function xq(a) {
  a.z && a.Na().n(a.z, "select", a.re)
}
function wq(a) {
  var b = a.Yc();
  a.Ya(b ? b.Xc() : a.zh)
}
t.na = function(a, b) {
  uq.c.na.call(this, a, b);
  this.bc() && Wl(this).Qa(this.oe())
};
jk("goog-select", function() {
  return new uq(k)
});
function zq(a, b, c, d) {
  uq.call(this, a, b, c || Yl.fa(), d)
}
A(zq, uq);
jk("goog-toolbar-select", function() {
  return new zq(k)
});
function Aq(a) {
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
function Bq(a, b) {
  fb(b, function(b) {
    var d = b.value, f = Aq(d), b = new om(b.caption, d, a.q);
    Wj(b, f);
    a.Rb(b);
    b.V().style.fontFamily = d
  })
}
function Cq(a) {
  fb(Dq, function(b) {
    var c = b.value, b = new om(b.caption, c, a.q);
    a.Rb(b);
    b = b.V();
    b.style.fontSize = (Eq[c] || 10) + "px";
    b.firstChild.style.height = "1.1em"
  })
}
var Eq = [10, 10, 13, 16, 18, 24, 32, 48];
function Fq(a) {
  fb(Gq, function(b) {
    var c = b.O, b = new om(a.q.e("DIV", k, b.caption), c, a.q);
    Wj(b, c);
    a.Rb(b)
  })
}
function Hq(a, b, c, d, f, h) {
  c = new am(Iq(c, d, h), f, h);
  Wj(c, a);
  c.lc(b);
  return c
}
function Jq(a, b, c, d, f, h) {
  a = Hq(a, b, c, d, f, h);
  qk(a, 16, j);
  return a
}
function Kq(a, b, c, d, f, h) {
  f = new zq(k, k, f, h);
  d && fb(d.split(/\s+/), f.Wd, f);
  f.Wd("goog-toolbar-select");
  vq(f, c);
  Wj(f, a);
  f.lc(b);
  return f
}
function Lq(a, b, c, d, f, h) {
  c = new tq(Iq(c, d, h), k, f, h);
  Wj(c, a);
  c.lc(b);
  return c
}
function Iq(a, b, c) {
  if((!a || "" == a) && S && !U("1.9a")) {
    a = "\u00a0"
  }
  return(c || V()).e("DIV", b ? {"class":b} : k, a)
}
;function Mq(a) {
  this.Q = a
}
A(Mq, Tg);
Mq.prototype.show = function() {
  if(!this.Wb) {
    var a = this.Q.wh(1, 2);
    a.cellSpacing = "0";
    a.cellPadding = "0";
    a.style.fontSize = "10pt";
    var b = this.Q.e("DIV");
    a.rows[0].cells[0].innerHTML = '<span style="position: relative; bottom: 2px; padding-right: 1px; white-space: nowrap;">' + dm + "&nbsp;</span>";
    var c = this.Sd = this.Q.e("INPUT", {id:Nq});
    kj(c, "width", "98%");
    kj(a.rows[0].cells[1], "width", "100%");
    a.rows[0].cells[1].appendChild(c);
    c.value = Oq(this.Af);
    this.K.n(c, "keyup", va(this.Jm, this));
    b.appendChild(a);
    this.jn = b;
    a = this.Q.e("DIV", k, this.jn);
    b = new Pq(this);
    b.yi(cm).Ya(a);
    var c = this.vb = new Qq(this.Q, em), d = Rq, f = this.Q.createElement("DIV"), h = this.Q.e("DIV", {innerHTML:"<b>" + jm + "</b>"}), i = this.Q.e("INPUT", {id:Sq, className:Tq});
    if(!R) {
      i.type = "url"
    }
    if(R && cg(V(i))) {
      i.style.width = "99%"
    }
    var l = this.Q.e("DIV", k, i);
    this.Ei = new tn(i);
    this.K.n(this.Ei, "input", this.gk);
    i = new Tl(hm, Uq.fa(), this.Q);
    i.Va(l);
    i.b().style.marginTop = "1em";
    this.K.n(i, "action", this.Lm);
    i = this.Q.e("DIV", {className:Vq, innerHTML:im});
    f.appendChild(h);
    f.appendChild(l);
    f.appendChild(i);
    Wq(c, d, fm, gm, f);
    c = this.vb;
    d = Xq;
    f = this.Q.e("DIV");
    h = this.Q.e("DIV", {innerHTML:"<b>" + nm + "</b>"});
    f.appendChild(h);
    h = this.Q.e("INPUT", {id:Yq, className:Tq});
    if(R && cg(V(h))) {
      h.style.width = "99%"
    }
    f.appendChild(h);
    this.Ch = new tn(h);
    this.K.n(this.Ch, "input", this.gk);
    h = this.Q.e("DIV", {id:Zq, className:$q, style:"visibility:hidden"}, mm);
    f.appendChild(h);
    this.Xe && (h = this.Q.e("DIV", {className:Vq, innerHTML:this.Xe}), f.appendChild(h));
    Wq(c, d, km, lm, f);
    this.vb.Va(a);
    this.K.n(this.vb, "select", this.Dm);
    this.Wb = ar(b);
    this.Wb.addEventListener(ll, this.El, o, this)
  }
  this.Wb.ba(j)
};
Mq.prototype.Th = function() {
  this.Wb && this.Wb.ba(o)
};
Mq.prototype.bc = function() {
  return!!this.Wb && this.Wb.T()
};
function Pq(a) {
  this.je = a;
  this.sd = new gl("", j, this.je.Q);
  this.Pe = new ql(this.je.Q);
  this.Oe = {};
  this.Wd("tr-dialog")
}
Pq.prototype.yi = function(a) {
  this.sd.yi(a);
  return this
};
function br(a) {
  var b = z("OK");
  a.Pe.set("ok", b, j);
  a.Oe.ok = va(a.je.Vl, a.je)
}
function cr(a) {
  var b = z("Cancel");
  a.Pe.set("cancel", b, o, j);
  a.Oe.cancel = va(a.je.Fl, a.je)
}
Pq.prototype.Db = function(a, b, c) {
  c = c || Wa();
  this.Pe.set(c, a);
  this.Oe[c] = b;
  return this
};
Pq.prototype.Wd = function(a) {
  var b = this.sd;
  b.b() || b.Va();
  qf(b.b(), a);
  return this
};
Pq.prototype.Ya = function(a) {
  this.sd.V().appendChild(a);
  return this
};
function ar(a) {
  a.Pe.Yh() && (br(a), cr(a));
  nl(a.sd, a.Pe);
  var b = a.Oe;
  a.Oe = k;
  a.sd.addEventListener(pl, function(a) {
    if(b[a.key]) {
      return b[a.key](a)
    }
  });
  il(a.sd);
  var c = a.sd;
  a.sd = k;
  return c
}
t = Mq.prototype;
t.wj = function(a) {
  return ol(this.Wb.Fb, a)
};
t.Vl = function() {
  var a;
  Vj(this.vb.ub.gb) == Xq ? a = dr(this) : (a = this.Q.b(Sq).value, er.test(a) ? a = dr(this, Sq) : (0 > a.search(/:/) && (a = "http://" + Ea(a)), a = fr(this, a)));
  return a ? this.dispatchEvent(a) : o
};
t.Fl = function() {
  return this.dispatchEvent("cancel")
};
t.m = function() {
  if(this.Wb) {
    this.Th(), this.Wb.w(), this.Wb = k
  }
  Mq.c.m.call(this)
};
t.El = function() {
  this.dispatchEvent("afterhide")
};
function gr(a) {
  uo.call(this);
  this.nl = a
}
A(gr, uo);
t = gr.prototype;
t.te = function(a) {
  return a == this.nl
};
t.execCommand = function(a, b) {
  return this.ke.apply(this, arguments)
};
t.ke = function(a, b) {
  this.pk || hr(this);
  if(!this.ge) {
    var c = V(this.d.ud), c = new ir(c, b);
    this.Xe && c.sk(this.Xe);
    c.Je = this.Je;
    this.K.n(c, "ok", this.Wl).n(c, "cancel", this.Gl);
    this.ge = c
  }
  this.De = (c = $(this.d)) && new hp(c);
  qo(this.d.jb.Oa());
  Lg(this.ge, "afterhide", this.Lh, o, this);
  this.d.ad = j;
  this.ge.show();
  this.dispatchEvent("dialogOpened");
  zo(this.d);
  return j
};
t.Lh = function() {
  this.d.ad = o;
  this.d.focus();
  if(this.De) {
    this.De.restore(), this.De = k
  }
  this.pk || hr(this);
  this.dispatchEvent("dialogClosed");
  zo(this.d);
  this.d.Wf.selectionchange = xa()
};
t.m = function() {
  hr(this);
  gr.c.m.call(this)
};
t.pk = o;
t.Xh = o;
function hr(a) {
  if(a.ge && !a.Xh) {
    a.Xh = j, a.ge.w(), a.ge = k, a.Xh = o
  }
}
;function jr(a, b) {
  this.Ac = a;
  this.qg = b
}
function Oq(a) {
  if(!a.xh) {
    a.xh = $f(a.Ac)
  }
  return a.xh
}
function kr(a, b, c) {
  var d = a.Ac;
  d.href = c;
  var f = Oq(a);
  if(b != f) {
    c = Qo(d);
    if(3 == c.nodeType) {
      c = c.parentNode
    }
    $f(c) != f && (c = d);
    If(c);
    d = V(c);
    c.appendChild(d.createTextNode(b));
    a.xh = k
  }
  a.qg = o
}
function lr(a) {
  a = a.Ac;
  if(Ym) {
    var b;
    b = a.nextSibling;
    if(!b || !(3 == b.nodeType && (0 == b.data.lastIndexOf("\u00a0", 0) || 0 == b.data.lastIndexOf(" ", 0)))) {
      b = V(a).createTextNode("\u00a0"), Kf(b, a)
    }
    po(b, 1).select()
  }else {
    Yo(a, o)
  }
}
function mr(a, b) {
  var c = new jr(a, j);
  c.Ac.href = "/";
  if(b) {
    a.target = b
  }
  return c
}
function nr(a) {
  if(/\s/.test(a) || er.test(a)) {
    return o
  }
  var b = o;
  /^[^:\/?#.]+:/.test(a) || (a = "http://" + a, b = j);
  a = a.match(Vh);
  if(-1 != db(["mailto", "aim"], a[1])) {
    return j
  }
  var c = a[3];
  if(!c || b && -1 == c.indexOf(".")) {
    return o
  }
  b = a[5];
  return!b || 0 == b.indexOf("/")
}
var er = /^[\w-]+(\.[\w-]+)*\@([\w-]+\.)+(\d+|\w\w+)$/i;
function or(a, b, c) {
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
      R && -1 != c.indexOf(";") && (c = "'" + c.replace(/'/g, "%27") + "'"), c = Ha(c), b.document.write('<META HTTP-EQUIV="refresh" content="0; url=' + c + '">'), b.document.close()
    }
  }else {
    d.open(c, a, h)
  }
}
;function pr(a) {
  Ao.call(this);
  this.bg = qb(arguments);
  this.Jf = []
}
A(pr, Ao);
var qr = z("Go to link: "), rr = z("Change"), sr = z("Remove");
t = pr.prototype;
t.Je = o;
t.sc = s("LinkBubble");
function tr(a) {
  return a.zf.getAttribute("href") || ""
}
t.Hh = s("A");
t.vj = function() {
  return bm
};
t.ol = function(a) {
  var b = ur(this), c = b.Gk ? "black" : "red";
  if(er.test(b.nf) || !b.Gk) {
    c = this.q.e("SPAN", {id:"tr_link-text", style:"color:" + c}, this.q.createTextNode(b.nf))
  }else {
    var d = this.q.e("SPAN", {id:"tr_test-link-span"}, qr), c = this.q.e("SPAN", {id:"tr_link-text", style:"color:" + c}, "");
    Ho(this, "tr_test-link", this.q.createTextNode(Na(b.nf)).data, this.gn, c)
  }
  var f = Go(this, "tr_change-link-span");
  Ho(this, "tr_change-link", rr, this.en, f);
  this.Jf = [];
  for(b = 0;b < this.bg.length;b++) {
    var h = this.bg[b], i = Go(this, h.fn);
    this.Jf.push(i);
    Ho(this, h.wo, h.Vj, function() {
      h.jo(tr(this))
    }, i)
  }
  i = Go(this, "tr_delete-link-span");
  Ho(this, "tr_delete-link", sr, this.ql, i);
  this.li();
  d = this.q.e("DIV", {id:"tr_link-div"}, d || "", c, f);
  for(b = 0;b < this.Jf.length;b++) {
    d.appendChild(this.Jf[b])
  }
  d.appendChild(i);
  a.appendChild(d)
};
t.gn = function() {
  var a;
  a = tr(this);
  a = this.hn ? this.hn(a) : a;
  or(a, {target:"_blank", noreferrer:this.Je}, this.d.ud)
};
t.nm = so;
function ur(a) {
  var b, c = tr(a);
  a.nm(c) ? (c = z("invalid url"), b = j) : c && 0 == c.lastIndexOf("mailto:", 0) && (c = c.substring(7));
  return{nf:c, Gk:!b}
}
t.en = function() {
  this.d.execCommand("link", new jr(this.zf, o));
  Do(this)
};
t.ql = function() {
  this.d.he();
  var a = this.zf, b = a.lastChild;
  Mf(a);
  Yo(b, o);
  Do(this);
  this.d.Vc()
};
t.li = function() {
  if(this.q.b("tr_link-div")) {
    var a = this.q.b("tr_test-link-span");
    if(a) {
      var b = tr(this);
      Z(a, !(b && 0 == b.lastIndexOf("mailto:", 0)))
    }
    for(a = 0;a < this.bg.length;a++) {
      var b = this.bg[a], c = this.q.b(b.fn);
      c && Z(c, b.Eo(tr(this)))
    }
  }
};
function vr() {
}
A(vr, hk);
ja(vr);
vr.prototype.e = function(a) {
  var b = {"class":"goog-inline-block " + this.rc(a).join(" "), title:a.Zc() || ""};
  return a.S().e("div", b, a.va)
};
vr.prototype.zb = s("button");
vr.prototype.ga = s(k);
vr.prototype.u = s("goog-flat-button");
jk("goog-flat-button", function() {
  return new Tl(k, vr.fa())
});
function Uq() {
}
A(Uq, vr);
ja(Uq);
Uq.prototype.u = s("goog-link-button");
jk("goog-link-button", function() {
  return new Tl(k, Uq.fa())
});
function wr() {
}
A(wr, ek);
ja(wr);
t = wr.prototype;
t.u = s("goog-tab");
t.zb = s("tab");
t.e = function(a) {
  var b = wr.c.e.call(this, a);
  (a = a.Zc()) && this.lc(b, a);
  return b
};
t.Zc = function(a) {
  return a.title || ""
};
t.lc = function(a, b) {
  if(a) {
    a.title = b || ""
  }
};
function xr(a, b, c) {
  lk.call(this, a, b || wr.fa(), c);
  qk(this, 8, j);
  this.Qd |= 9
}
A(xr, lk);
xr.prototype.Zc = p("Df");
xr.prototype.lc = function(a) {
  this.t.lc(this.b(), a);
  this.uk(a)
};
xr.prototype.uk = ca("Df");
jk("goog-tab", function() {
  return new xr(k)
});
function yr() {
}
A(yr, vk);
ja(yr);
yr.prototype.u = s("goog-tab-bar");
yr.prototype.zb = s("tablist");
yr.prototype.rc = function(a) {
  var b = yr.c.rc.call(this, a);
  if(!this.Yi) {
    var c = this.u();
    this.Yi = Gb(zr, c + "-top", Ar, c + "-bottom", Br, c + "-start", Cr, c + "-end")
  }
  b.push(this.Yi[a.tm]);
  return b
};
function Dr(a, b, c) {
  a = a || zr;
  this.b() && e(Error("Component already rendered"));
  this.jd = a == Br || a == Cr ? yk : xk;
  this.tm = a;
  zk.call(this, this.jd, b || yr.fa(), c);
  Er(this)
}
A(Dr, zk);
var zr = "top", Ar = "bottom", Br = "start", Cr = "end";
t = Dr.prototype;
t.Tk = j;
t.gb = k;
t.la = function() {
  Dr.c.la.call(this);
  Er(this)
};
t.m = function() {
  Dr.c.m.call(this);
  this.gb = k
};
t.removeChild = function(a, b) {
  Fr(this, a);
  return Dr.c.removeChild.call(this, a, b)
};
t.vi = function(a) {
  Dr.c.vi.call(this, a);
  this.Tk && this.He(bk(this, a))
};
t.He = function(a) {
  a ? a.Ge(j) : this.gb && this.gb.Ge(o)
};
function Fr(a, b) {
  if(b && b == a.gb) {
    for(var c = dk(a, b), d = c - 1;b = bk(a, d);d--) {
      if(b.T() && b.isEnabled()) {
        a.He(b);
        return
      }
    }
    for(c += 1;b = bk(a, c);c++) {
      if(b.T() && b.isEnabled()) {
        a.He(b);
        return
      }
    }
    a.He(k)
  }
}
t.cm = function(a) {
  this.gb && this.gb != a.target && this.gb.Ge(o);
  this.gb = a.target
};
t.em = function(a) {
  if(a.target == this.gb) {
    this.gb = k
  }
};
t.am = function(a) {
  Fr(this, a.target)
};
t.bm = function(a) {
  Fr(this, a.target)
};
t.$c = function() {
  Ck(this) || this.jc(this.gb || bk(this, 0))
};
function Er(a) {
  a.Na().n(a, "select", a.cm).n(a, "unselect", a.em).n(a, "disable", a.am).n(a, "hide", a.bm)
}
jk("goog-tab-bar", function() {
  return new Dr
});
function Qq(a, b) {
  Sj.call(this, a);
  this.K = new qh(this);
  this.ub = new Dr(Br, g, this.q);
  this.ub.Qb(o);
  this.Bk = this.q.e("DIV", {className:"goog-tab-content"});
  this.Ug = this.Jg = k;
  if(b) {
    var c = new lk(b, g, this.q);
    c.Wd("tr-tabpane-caption");
    c.ic(o);
    this.ub.zc(c, j)
  }
}
A(Qq, Sj);
function Gr(a, b) {
  a.ub.He(Yj(a.ub, b))
}
function Wq(a, b, c, d, f) {
  var h = a.q.e("INPUT", {type:"radio"}), c = new xr([h, a.q.createTextNode(c)], g, a.q);
  Wj(c, b);
  c.lc(d);
  a.ub.zc(c, j);
  a.K.n(h, "select", va(a.ub.He, a.ub, c));
  f.id = b + "-tab";
  a.Bk.appendChild(f);
  Z(f, o)
}
Qq.prototype.la = function() {
  Qq.c.la.call(this);
  var a = this.b();
  qf(a, "tr-tabpane");
  this.zc(this.ub, j);
  this.K.n(this.ub, "select", this.dm);
  a.appendChild(this.Bk);
  a.appendChild(this.q.e("DIV", {className:"goog-tab-bar-clear"}))
};
Qq.prototype.dm = function(a) {
  a = a.target;
  this.Ug && Z(this.Ug, o);
  this.Ug = this.q.b(Vj(a) + "-tab");
  Z(this.Ug, j);
  if(this.Jg) {
    this.Jg.checked = o
  }
  this.Jg = a.b().getElementsByTagName("INPUT")[0];
  this.Jg.checked = j
};
function ir(a, b) {
  this.Q = a;
  this.Af = b;
  this.K = new qh(this)
}
A(ir, Mq);
function Hr(a, b) {
  ig.call(this, "ok");
  this.nf = a;
  this.qm = b
}
A(Hr, ig);
function Ir(a) {
  ig.call(this, "beforetestlink");
  this.url = a
}
A(Ir, ig);
t = ir.prototype;
t.sk = ca("Xe");
t.show = function() {
  ir.c.show.call(this);
  var a = this.Af.Ac.getAttribute("href") || "";
  if(this.Af.qg) {
    if(a = this.Sd.value, er.test(a)) {
      Gr(this.vb, Xq), this.Q.b(Yq).value = a, this.Bc = j, this.Bc = o, this.Ah = j
    }else {
      if(nr(a)) {
        Gr(this.vb, Rq), this.Q.b(Sq).value = a, this.Bc = j, this.Bc = o, this.Ah = j
      }else {
        if(!Oq(this.Af)) {
          this.Bc = j
        }
        Gr(this.vb, Rq)
      }
    }
  }else {
    a && 0 == a.lastIndexOf("mailto:", 0) ? (Gr(this.vb, Xq), this.Q.b(Yq).value = a.substring(a.indexOf(":") + 1)) : (Gr(this.vb, Rq), this.Q.b(Sq).value = this.Af.qg ? "http://" : a), Jr(this)
  }
  Kr(this)
};
t.Th = function() {
  this.Bc = j;
  this.Ah = o;
  ir.c.Th.call(this)
};
t.m = function() {
  this.K.w();
  this.K = k;
  this.Ei.w();
  this.Ei = k;
  this.Ch.w();
  this.Ch = k;
  ir.c.m.call(this)
};
t.Uk = j;
t.Je = o;
function Kr(a) {
  var b;
  if(Vj(a.vb.ub.gb) == Xq) {
    b = a.Q.b(Yq).value;
    var c = "" != b && !er.test(b);
    a.Q.b(Zq).style.visibility = c ? "visible" : "hidden"
  }else {
    if(Vj(a.vb.ub.gb) == Rq) {
      b = a.Q.b(Sq).value
    }else {
      return
    }
  }
  a.wj("ok").disabled = Aa(b)
}
t.Jm = function() {
  "" == this.Sd.value ? this.Bc = j : Jr(this)
};
function dr(a, b) {
  var c = a.Q.b(b || Yq).value;
  return fr(a, "mailto:" + c)
}
t.Lm = function() {
  var a = this.Q.b(Sq).value;
  0 > a.search(/:/) && (a = "http://" + Ea(a));
  if(this.dispatchEvent(new Ir(a))) {
    var b = this.Q.Oa(), c = Df(b), c = {target:"_blank", width:Math.max(c.width - 50, 50), height:Math.max(c.height - 50, 50), toolbar:j, scrollbars:j, location:j, statusbar:o, menubar:j, resizable:j, noreferrer:this.Je};
    or(a, c, b)
  }
};
t.gk = function() {
  this.Bc ? Lr(this) : "" == this.Sd.value && Jr(this);
  Kr(this)
};
t.Dm = function(a) {
  a = this.Q.b(Vj(a.target) + Mr);
  a.focus();
  var b = a.value.length;
  if(hh(a)) {
    a.selectionStart = b, a.selectionEnd = b
  }else {
    if(R) {
      var b = jh(a, b), c = a.createTextRange();
      c.collapse(j);
      c.move("character", b);
      c.select()
    }
  }
  a.style.width = "";
  a.style.width = a.offsetWidth + "px";
  Kr(this);
  Lr(this)
};
function Lr(a) {
  if(a.Uk && a.Bc) {
    a.Sd.value = a.Q.b(Vj(a.vb.ub.gb) + Mr).value
  }
}
function fr(a, b) {
  Lr(a);
  return new Hr(a.Sd.value, b)
}
function Jr(a) {
  var b = o;
  a.Ah || (b = a.Q.b(Vj(a.vb.ub.gb) + Mr).value == a.Sd.value);
  a.Bc = b
}
var Nq = "linkdialog-text", Rq = "linkdialog-onweb", Sq = "linkdialog-onweb-tab-input", Xq = "linkdialog-email", Yq = "linkdialog-email-tab-input", Zq = "linkdialog-email-warning", Mr = "-tab-input", Tq = "tr-link-dialog-target-input", $q = "tr-link-dialog-email-warning", Vq = "tr-link-dialog-explanation-text";
function Nr() {
  uo.call(this);
  this.Nm = k
}
A(Nr, uo);
var Or = /^(DIV|TR|LI|BLOCKQUOTE|H\d|PRE|XMP)/;
function Pr(a) {
  a.push("<br>")
}
t = Nr.prototype;
t.sc = s("RemoveFormatting");
t.te = function(a) {
  return"+removeFormat" == a
};
t.ke = function(a) {
  "+removeFormat" == a && Qr(this)
};
t.jg = function(a, b, c) {
  if(!c) {
    return o
  }
  return" " == b ? (this.d.execCommand("+removeFormat"), j) : o
};
function Qr(a) {
  $(a.d).isCollapsed() || (Rr(a, a.Nm || va(a.lk, a)), vo(a).da().execCommand("RemoveFormat", o, g), Xm && Rr(a, function(a) {
    var c = U("528") ? /&nbsp;/g : /\u00A0/g;
    return a.replace(c, " ")
  }))
}
function Sr(a) {
  return bg(a, function(a) {
    return"TABLE" == a.tagName
  }, j)
}
function Rr(a, b) {
  var c = $(a.d);
  if(!(1 < c.Gd())) {
    if(S) {
      var d = Wo(c, a.d.b()), f = Sr(d.r()), h = Sr(d.D());
      if(f || h) {
        if(f == h) {
          return
        }
        var i, l = c;
        i = f;
        var c = h, d = new hp(l), m = l.r(), n = l.L(), q = l.D(), l = l.aa(), r = vo(a);
        if(i) {
          var x = r.createTextNode("");
          Kf(x, i);
          m = x;
          n = 0
        }
        c && (x = r.createTextNode(""), Jf(x, c), q = x, l = 0);
        Il(m, n, q, l).select();
        i = d;
        if(!f) {
          c = Y(Hl(i, j)), a.Ai = c
        }
        if(!h) {
          c = Y(Hl(i, o)), a.Dh = c
        }
        c = $(a.d);
        d = Wo(c, a.d.b())
      }
      d.select();
      c = d
    }
    m = c;
    c = vo(a).e("div");
    d = m.Xb();
    if(Lm) {
      c.appendChild(d.cloneContents())
    }else {
      if(Km) {
        n = m.Fd(), n = n.replace(/\r\n/g, "\r"), q = n.length, m = q - Ea(n).length, n = q - n.replace(/[\s\xa0]+$/, "").length, d.moveStart("character", m), d.moveEnd("character", -n), m = d.htmlText, "Formatted" == d.queryCommandValue("formatBlock") && (m = d.htmlText.replace(/(\r\n|\r|\n)/g, "<br>")), c.innerHTML = m
      }
    }
    m = b(c.innerHTML);
    r = $(a.d);
    c = vo(a);
    n = Wa();
    d = Wa();
    m = '<span id="' + n + '"></span>' + m + '<span id="' + d + '"></span>';
    l = Wa();
    q = '<span id="' + l + '"></span>';
    if(Km) {
      x = r.Yb(0).Xb();
      x.pasteHTML(q);
      for(var v;(v = x.parentElement()) && To(v) && !Vo(v);) {
        r = v.nodeName;
        if("TD" == r || "TR" == r || "TH" == r) {
          break
        }
        Y(v)
      }
      x.pasteHTML(m);
      (l = c.b(l)) && Y(l)
    }else {
      if(Lm) {
        c.da().execCommand("insertImage", o, l);
        r = RegExp("<[^<]*" + l + "[^>]*>");
        v = $(a.d).Ua();
        if(3 == v.nodeType) {
          v = v.parentNode
        }
        for(;!r.test(v.innerHTML);) {
          v = v.parentNode
        }
        if(S) {
          v.innerHTML = v.innerHTML.replace(r, m)
        }else {
          v.innerHTML = v.innerHTML.replace(r, q);
          for(v = l = c.b(l);(v = l.parentNode) && To(v) && !Vo(v);) {
            r = v.nodeName;
            if("TD" == r || "TR" == r || "TH" == r) {
              break
            }
            Kf(l, v);
            Y(v)
          }
          v.innerHTML = v.innerHTML.replace(RegExp(q, "i"), m)
        }
      }
    }
    v = c.b(n);
    c = c.b(d);
    Il(v, 0, c, c.childNodes.length).select();
    Y(v);
    Y(c);
    if(S && i) {
      c = $(a.d);
      v = a.d.b();
      if(a.Ai) {
        v.insertBefore(a.Ai, v.firstChild), a.Ai = k
      }
      if(a.Dh) {
        v.appendChild(a.Dh), a.Dh = k
      }
      v = k;
      d = Hl(i, j);
      m = Hl(i, o);
      d && m && (v = Il(d, 0, m, 0));
      d = v;
      v = (f ? d : c).r();
      f = (f ? d : c).L();
      m = (h ? d : c).D();
      h = (h ? d : c).aa();
      Il(v, f, m, h).select();
      i.w()
    }
  }
}
t.lk = function(a) {
  var b = document.createElement("div");
  b.innerHTML = a;
  for(var a = [], b = [b.childNodes, 0], c = [], d = 0, f = [], h = 0, i = 0;0 <= i;i -= 2) {
    for(var l = o;0 < h && i <= f[h - 1];) {
      h--, l = j
    }
    l && Pr(a);
    for(l = o;0 < d && i <= c[d - 1];) {
      d--, l = j
    }
    l && Pr(a);
    for(var l = b[i], m = b[i + 1];m < l.length;) {
      var n = l[m++], q = n.nodeName;
      switch(q) {
        case "#text":
          n = 0 < d ? n.nodeValue : Ca(n.nodeValue);
          n = Ha(n);
          a.push(n);
          continue;
        case "P":
          Pr(a);
          Pr(a);
          break;
        case "BR":
          Pr(a);
          continue;
        case "TABLE":
          Pr(a);
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
            a.push(this.lk(n.innerHTML));
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
          n.previousSibling && Pr(a);
          break;
        case "DIV":
          var r = n.parentNode;
          if(r.firstChild == n && Or.test(r.tagName)) {
            break
          }
        ;
        default:
          Or.test(q) && Pr(a)
      }
      n = n.childNodes;
      0 < n.length && (b[i++] = l, b[i++] = m, l = n, m = 0)
    }
  }
  return a.join("").replace(/\xa0|[ \t]+/g, " ")
};
function Tr() {
  uo.call(this)
}
A(Tr, uo);
Tr.prototype.sc = s("BTF");
Tr.prototype.dc = Ki("goog.editor.plugins.BasicTextFormatter");
var Ur = Db({Vn:"+link", Mn:"+formatBlock", Pn:"+indent", Yn:"+outdent", bo:"+strikeThrough", On:"+insertHorizontalRule", co:"+subscript", eo:"+superscript", fo:"+underline", En:"+bold", Qn:"+italic", Ln:"+fontSize", Kn:"+fontName", Jn:"+foreColor", zn:"+backColor", Xn:"+insertOrderedList", io:"+insertUnorderedList", Rn:"+justifyCenter", Sn:"+justifyFull", Un:"+justifyRight", Tn:"+justifyLeft"});
t = Tr.prototype;
t.te = function(a) {
  return a in Ur
};
function Vr(a) {
  return vo(a).da()
}
t.ke = function(a, b) {
  var c, d, f, h, i, l = b;
  switch(a) {
    case "+backColor":
      if(l !== k) {
        if(Um) {
          d = l;
          f = $(this.d);
          var m, n;
          if(f && f.isCollapsed()) {
            m = vo(this).createTextNode(S ? " " : ""), l = f.r(), n = 1 == l.nodeType ? l : l.parentNode, "" == n.innerHTML ? (n.style.textIndent = "-10000px", n.appendChild(m)) : (n = vo(this).e("span", {style:"text-indent:-10000px"}, m), f.mk(n)), Nl(m).select()
          }
          Wr(this, "hiliteColor", d, o, j);
          if(m) {
            if(S) {
              m.data = ""
            }
            n.style.textIndent = ""
          }
        }else {
          Q ? Wr(this, "hiliteColor", l) : Wr(this, a, l)
        }
      }
      break;
    case "+link":
      a: {
        i = l;
        this.d.rg || vo(this).Oa().focus();
        f = (d = $(this.d)) && d.Ua();
        if((f = ag(f, "A")) && bg(f, Vo)) {
          Mf(f)
        }else {
          if(i = Xr(this, d, i)) {
            if(!this.d.execCommand("link", i)) {
              if(d = this.d.ud.prompt(em, "http://")) {
                kr(i, Oq(i) || d, d), lr(i)
              }else {
                d = Nl(i.Ac);
                d = new hp(d);
                Mf(i.Ac);
                i.Ac = k;
                d.restore().select();
                i = k;
                break a
              }
            }
            break a
          }
        }
        i = k
      }
      break;
    case "+justifyCenter":
    ;
    case "+justifyFull":
    ;
    case "+justifyRight":
    ;
    case "+justifyLeft":
      Wr(this, a, k, o, j);
      S && Wr(this, a, k, o, j);
      (!Tm || !S) && Oh($(this.d), Yr);
      break;
    default:
      R && "+formatBlock" == a && l && (l = "<" + l + ">");
      if("+foreColor" == a && l === k) {
        break
      }
      switch(a) {
        case "+indent":
        ;
        case "+outdent":
          Tm && (S && (d = j), Q && (d = "+outdent" == a ? !Vr(this).queryCommandEnabled("outdent") : j));
        case "+insertOrderedList":
        ;
        case "+insertUnorderedList":
          if(m = an) {
            m = Vr(this), m = Zr(this, j, m, a, g)
          }
          m ? f = "P" != this.d.queryCommandValue("+defaultTag") : bn || $r(this);
          S && $m && !this.queryCommandValue(a) && (m = this.d.queryCommandValue("+defaultTag"), "P" == m || "DIV" == m ? m = o : (m = $(this.d), m.isCollapsed() && 3 != m.Mb().nodeType ? (c = vo(this).createTextNode("\u00a0"), m.insertNode(c, o), Nl(c).select(), m = j) : m = o), h |= m);
        case "+formatBlock":
          c = !!this.d.gc.Bidi;
          break;
        case "+subscript":
        ;
        case "+superscript":
          Zm && !this.queryCommandValue(a) && (m = "+subscript" == a ? "+superscript" : "+subscript", n = as(m), this.queryCommandValue(m) || Vr(this).execCommand(n, o, k), Vr(this).execCommand(n, o, k));
          break;
        case "+underline":
        ;
        case "+bold":
        ;
        case "+italic":
          d = S && Tm && this.queryCommandValue(a);
          break;
        case "+foreColor":
        ;
        case "+fontName":
          d = Tm && S
      }
      Wr(this, a, l, c, d);
      h && Vr(this).execCommand("Delete", o, j);
      f && Vr(this).execCommand("FormatBlock", o, "<div>")
  }
  S && !this.d.ad && vo(this).Oa().focus();
  return i
};
t.queryCommandValue = function(a) {
  var b;
  switch(a) {
    case "+link":
      return a = (a = $(this.d)) && a.Ua(), a = ag(a, "A"), !!a && !!bg(a, Vo);
    case "+justifyCenter":
    ;
    case "+justifyFull":
    ;
    case "+justifyRight":
    ;
    case "+justifyLeft":
      return bs(this, a);
    case "+formatBlock":
      return cs($(this.d));
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
      return this.Fg(Vr(this), a, Tm && S);
    case "+underline":
    ;
    case "+bold":
    ;
    case "+italic":
      b = Tm && S;
    default:
      var c = Vr(this);
      return Zr(this, j, c, a, b)
  }
};
t.ik = function(a) {
  Rm && a.match(/^\s*<script/i) && (a = "&nbsp;" + a);
  Sm && (a = a.replace(/<(\/?)strong([^\w])/gi, "<$1b$2"), a = a.replace(/<(\/?)em([^\w])/gi, "<$1i$2"));
  return a
};
t.Xk = function(a) {
  for(var a = a.getElementsByTagName("IMG"), b = 0, c;c = a[b];b++) {
    if(R) {
      c.removeAttribute("tabIndex");
      c.removeAttribute("tabIndexSet");
      var d = c;
      "removeAttribute" in d && d.removeAttribute(ra);
      try {
        delete d[ra]
      }catch(f) {
      }
      if(c.Cm) {
        c.tabIndex = c.Cm
      }
    }
  }
};
t.Yk = function(a) {
  if(T) {
    for(var b = zf(this.d.jb.xa, "HEAD", g, g), c = [], d = b.length, f = 1;f < d;++f) {
      for(var h = b[f].getElementsByTagName("STYLE"), i = h.length, l = 0;l < i;++l) {
        c.push(h[l].outerHTML)
      }
    }
    return c.join("") + a
  }
  return a
};
t.jg = function(a, b, c) {
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
var ds = R ? /<br([^\/>]*)\/?>/gi : /<br([^\/>]*)\/?>(?!<\/(div|p)>)/gi;
function $r(a) {
  if(R || Q) {
    var b = $(a.d), c = b.Ua(), d = Vr(a);
    ds.lastIndex = 0;
    if(ds.test(c.innerHTML)) {
      a = b.r() && b.D() ? new Gl(b) : k, "P" == c.tagName ? es(c, j) : (c.innerHTML = c.innerHTML.replace(ds, '<p$1 trtempbr="temp_br">'), c = qb(c.getElementsByTagName("P")), Oh(c, function(a) {
        if("temp_br" == a.getAttribute("trtempbr")) {
          a.removeAttribute("trtempbr");
          if(Ba(Yf(a))) {
            var b = R ? d.createTextNode("\u00a0") : d.createElement("BR");
            a.appendChild(b)
          }
          es(a)
        }
      })), a.restore()
    }
  }
}
function es(a, b) {
  if(R || Q) {
    var c = a.outerHTML.replace(/<(\/?)p/gi, "<$1div");
    b && (c = c.replace(ds, "</div><div$1>"));
    Q && !/<\/div>$/i.test(c) && (c += "</div>");
    a.outerHTML = c
  }
}
function as(a) {
  return 0 == a.indexOf("+") ? a.substring(1) : a
}
function Yr(a) {
  a = en(a);
  if(a.align) {
    a.style.textAlign = a.align, a.removeAttribute("align")
  }
}
function Wr(a, b, c, d, f) {
  var h = k;
  d && (h = a.d.queryCommandValue("rtl") ? "rtl" : a.d.queryCommandValue("ltr") ? "ltr" : k);
  var b = as(b), i, l;
  if(R) {
    var m = b;
    l = [];
    var d = k, n = $(a.d);
    i = vo(a);
    if(m in fs) {
      var q = n && n.Ua();
      if(q) {
        for(var r = zf(document, "BLOCKQUOTE", k, q), x, v = 0;v < r.length;v++) {
          if(n.containsNode(r[v])) {
            x = r[v];
            break
          }
        }
        if(q = x || ag(q, "BLOCKQUOTE")) {
          d = i.e("div", {style:"height:0"}), q.appendChild(d), l.push(d), x ? n = Il(x, 0, d, 0) : n.containsNode(d) && (x = n.r(), n = n.L(), n = Il(x, n, d, 0)), n.select()
        }
      }
    }
    x = a.d;
    if(!x.Le() && !d && m in gs) {
      m = x.b();
      if(n && n.isCollapsed() && !(m.firstElementChild != g ? m.firstElementChild : Nf(m.firstChild, j))) {
        d = n.Yb(0).Xb(), n = d.duplicate(), n.moveToElementText(m), n.collapse(o), n.isEqual(d) && (n = i.createTextNode("\u00a0"), m.appendChild(n), d.move("character", 1), d.move("character", -1), d.select(), l.push(n))
      }
      d = i.e("div", {style:"height:0"});
      m.appendChild(d);
      l.push(d)
    }
    i = l[0];
    l = l[1]
  }
  if(T) {
    i = b;
    var F;
    hs[i] && (F = vo(a).e("div", {style:"height: 0"}, "x"), a.d.b().appendChild(F));
    is[i] && (i = a.d.b(), F = vo(a).e("div", {style:"height: 0"}, "x"), i.insertBefore(F, i.firstChild));
    i = F
  }
  if(S && (F = b, U("1.9") && "formatblock" == F.toLowerCase() && (F = $(a.d), d = F.r(), F.isCollapsed() && d && "BODY" == d.tagName && (m = F.L(), (d = d.childNodes[m]) && "BR" == d.tagName)))) {
    F = F.Xb(), F.setStart(d, 0), F.setEnd(d, 0)
  }
  cn && "fontsize" == b.toLowerCase() && js(a);
  F = Vr(a);
  f && Tm && (F.execCommand("styleWithCSS", o, j), Q && ks(a));
  F.execCommand(b, o, c);
  f && Tm && F.execCommand("styleWithCSS", o, o);
  T && !U("526") && "formatblock" == b.toLowerCase() && c && /^[<]?h\d[>]?$/i.test(c) && ls(a);
  /insert(un)?orderedlist/i.test(b) && (T && ms(a), R && (ns(a), l && Y(l)));
  i && Y(i);
  h && a.d.execCommand(h)
}
function Xr(a, b, c) {
  var d = k, f = b && b.Ua();
  if(f && "IMG" == f.tagName) {
    return k
  }
  if(b && b.isCollapsed()) {
    b = b.Yb(0).Xb(), Lm ? (d = vo(a).createElement("A"), b.insertNode(d)) : Km && (b.pasteHTML("<a id='newLink'></a>"), d = vo(a).b("newLink"), d.removeAttribute("id"))
  }else {
    var h = Wa();
    Wr(a, "CreateLink", h);
    fb(a.d.b().getElementsByTagName("A"), function(a) {
      ya(a.href, h) && (d = a)
    })
  }
  return mr(d, c)
}
var gs = {indent:1, outdent:1, insertOrderedList:1, insertUnorderedList:1, justifyCenter:1, justifyFull:1, justifyRight:1, justifyLeft:1, ltr:1, rtl:1}, fs = {insertOrderedList:1, insertUnorderedList:1};
function js(a) {
  var b = Wo($(a.d), a.d.b());
  Oh(Ph(b, function(a, d, f) {
    return 1 == f.Sa && b.containsNode(a)
  }), function(a) {
    kj(a, "font-size", "");
    S && 0 == a.style.length && a.getAttribute("style") != k && a.removeAttribute("style")
  })
}
function ls(a) {
  Oh($(a.d), function(a) {
    if("Apple-style-span" == a.className) {
      a.style.fontSize = "", a.style.fontWeight = ""
    }
  })
}
function ms(a) {
  var b = o;
  Oh($(a.d), function(a) {
    var d = a.tagName;
    if("UL" == d || "OL" == d) {
      if(b) {
        if(d = a.previousElementSibling != g ? a.previousElementSibling : Nf(a.previousSibling, o)) {
          var f = a.ownerDocument.createRange();
          f.setStartAfter(d);
          f.setEndBefore(a);
          if(Aa(f.toString()) && d.nodeName == a.nodeName) {
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
var os = {1:1, a:1, A:1, i:1, I:1}, ps = {disc:1, circle:1, square:1};
function ns(a) {
  var c;
  for(c = (a = $(a.d)) && a.Mb(), a = c;a && "UL" != a.tagName && "OL" != a.tagName;) {
    a = a.parentNode
  }
  if(a) {
    a = a.parentNode
  }
  if(a) {
    var b = qb(a.getElementsByTagName("UL"));
    rb(b, qb(a.getElementsByTagName("OL")));
    fb(b, function(a) {
      var b = a.type;
      if(b && !("UL" == a.tagName ? ps : os)[b]) {
        a.type = ""
      }
    })
  }
}
var hs = {justifyCenter:1, justifyFull:1, justifyRight:1, justifyLeft:1, formatBlock:1}, is = {insertOrderedList:1, insertUnorderedList:1};
function ks(a) {
  var b = [], c = $(a.d).Ua();
  do {
    b.push(c)
  }while(c = c.parentNode);
  a = Rh(Nh($(a.d)), Nh(b));
  a = Ph(a, dn);
  Oh(a, function(a) {
    var b = a.style.outline;
    a.style.outline = "0px solid red";
    a.style.outline = b
  })
}
function cs(a) {
  var b = k;
  Oh(a, function(a, d, f) {
    if(-1 != f.Sa) {
      a = en(a).tagName, b = b || a, b != a && (b = k, e(Lh)), f.Ng()
    }
  });
  return b
}
var qs = {center:1, justify:1, right:1, left:1};
function bs(a, b) {
  var c = b.replace("+justify", "").toLowerCase();
  "full" == c && (c = "justify");
  var d = a.d.gc.Bidi;
  if(d) {
    return c == d.so()
  }
  var f = $(a.d);
  if(!f) {
    return o
  }
  for(var h = f.Ua(), d = gb(h.childNodes, function(a) {
    return So(a) && f.containsNode(a, j)
  }), d = d.length ? d : [h], h = 0;h < d.length;h++) {
    var i = en(d[h]);
    if(c != rs(i)) {
      return o
    }
  }
  return j
}
function rs(a) {
  var b = nj(a, "textAlign"), b = b.replace(/^-(moz|webkit)-/, "");
  qs[b] || (b = a.align || "left");
  return b
}
Tr.prototype.Fg = function(a, b, c) {
  return Zr(this, o, a, b, c)
};
function Zr(a, b, c, d, f) {
  d = as(d);
  if(f) {
    var h = Vr(a);
    h.execCommand("styleWithCSS", o, j)
  }
  a = b ? c.queryCommandState(d) : c.queryCommandValue(d);
  f && h.execCommand("styleWithCSS", o, o);
  return a
}
;function ss(a) {
  uo.call(this);
  this.Vj = a
}
A(ss, uo);
t = ss.prototype;
t.sc = ro("LoremIpsum");
t.Kf = to;
t.Hf = o;
t.queryCommandValue = function(a) {
  return"usinglorem" == a && this.Hf
};
t.execCommand = function(a, b) {
  if("clearlorem" == a) {
    var c = this.d;
    if(this.Hf && !c.ad) {
      var d = c.b();
      d || (d = c.fc);
      this.Hf = o;
      d.style.fontStyle = this.Bm;
      Fp(c, k);
      b && 2 == c.Ob && (T ? (X(c.b()).body.focus(), (Km || T) && Gp(c), c.focus()) : Q && Gp(c))
    }
  }else {
    if("updatelorem" == a && (c = this.d, !this.Hf && !c.ad && op != c.id && ((d = c.b()) || (d = c.fc), To(d)))) {
      this.Hf = j, this.Bm = d.style.fontStyle, d.style.fontStyle = "italic", Fp(c, this.Vj)
    }
  }
};
t.te = function(a) {
  return"clearlorem" == a || "updatelorem" == a || "usinglorem" == a
};
var ts = {}, us = z("Normal"), vs = z("Normal / serif"), ws = [{caption:us, value:"arial,sans-serif"}, {caption:vs, value:"times new roman,serif"}, {caption:"Courier New", value:"courier new,monospace"}, {caption:"Georgia", value:"georgia,serif"}, {caption:"Trebuchet", value:"trebuchet ms,sans-serif"}, {caption:"Verdana", value:"verdana,sans-serif"}], xs = {ja:[{caption:"\uff2d\uff33 \uff30\u30b4\u30b7\u30c3\u30af", value:"ms pgothic,sans-serif"}, {caption:"\uff2d\uff33 \uff30\u660e\u671d", value:"ms pmincho,serif"}, 
{caption:"\uff2d\uff33 \u30b4\u30b7\u30c3\u30af", value:"ms gothic,monospace"}], ko:[{caption:"\uad74\ub9bc", value:"gulim,sans-serif"}, {caption:"\ubc14\ud0d5", value:"batang,serif"}, {caption:"\uad74\ub9bc\uccb4", value:"gulimche,monospace"}], "zh-tw":[{caption:"\u65b0\u7d30\u660e\u9ad4", value:"pmingliu,serif"}, {caption:"\u7d30\u660e\u9ad4", value:"mingliu,serif"}], "zh-cn":[{caption:"\u5b8b\u4f53", value:"simsun,serif"}, {caption:"\u9ed1\u4f53", value:"simhei,sans-serif"}, {caption:"MS Song", 
value:"ms song,monospace"}]};
function ys(a) {
  var b = "en-us".replace(/_/, "-").toLowerCase(), c = [];
  b in xs && (c = xs[b]);
  c.length && Bq(a, c);
  Bq(a, ws)
}
var zs = z("Small"), As = z("Normal"), Bs = z("Large"), Cs = z("Huge"), Dq = [{caption:zs, value:1}, {caption:As, value:2}, {caption:Bs, value:4}, {caption:Cs, value:6}], Ds = z("Heading"), Es = z("Subheading"), Fs = z("Minor heading"), Gs = z("Normal"), Gq = [{caption:Ds, O:"H2"}, {caption:Es, O:"H3"}, {caption:Fs, O:"H4"}, {caption:Gs, O:"P"}];
function Hs(a, b, c) {
  for(var d = V(b), f = [], h = 0, i;i = a[h];h++) {
    if(y(i)) {
      var l = g;
      if(i = Is[i]) {
        var l = i.factory || Jq, m = i.O, n = i.ea, q = i.caption, r = i.ca, x = d || V(), l = l(m, n, q, r, k, x);
        if(i.ia) {
          l.ia = j
        }
      }
      i = l
    }
    i && f.push(i)
  }
  a = V(b);
  a = new Qp(Pp.fa(), xk, a);
  c = c || vj(b);
  a.od(c);
  a.Qb(o);
  for(d = 0;h = f[d];d++) {
    qk(h, 32, o), h.od(c), a.zc(h, j)
  }
  a.Va(b);
  return a
}
function Js(a, b, c, d, f, h) {
  var i = Hq(a, b, c, d, f, h);
  i.qd = function(a) {
    i.ic(a)
  };
  return i
}
function Ks(a, b) {
  try {
    if(R) {
      var c = "000000" + b.toString(16), d = c.substr(c.length - 6, 6), b = (new Rb("#", d.substring(4, 6), d.substring(2, 4), d.substring(0, 2))).toString()
    }
    b != a.ga() && a.oa(b)
  }catch(f) {
  }
}
var Ls = z("Format"), Ms = z("Format"), Ns = z("Undo"), Os = z("Redo"), Ps = z("Font"), Qs = z("Font size"), Rs = z("Text color"), Ss = z("Bold"), Ts = z("Italic"), Us = z("Underline"), Vs = z("Text background color"), Ws = z("Add or remove link"), Xs = z("Numbered list"), Ys = z("Bullet list"), Zs = z("Decrease indent"), $s = z("Increase indent"), at = z("Align left"), bt = z("Align center"), ct = z("Align right"), dt = z("Justify"), et = z("Remove formatting"), ft = z("Insert image"), gt = z("Strikethrough"), 
ht = z("Left-to-right"), it = z("Right-to-left"), jt = z("Quote"), kt = z("Edit HTML source"), lt = z("Subscript"), mt = z("Superscript"), nt = z("Edit HTML"), Is = {};
ts.Ji = [{O:"+undo", ea:Ns, ca:"tr-icon tr-undo", factory:Js, ia:j}, {O:"+redo", ea:Os, ca:"tr-icon tr-redo", factory:Js, ia:j}, {O:"+fontName", ea:Ps, ca:"tr-fontName", factory:function(a, b, c, d, f, h) {
  var i = Kq(a, b, c, d, f, h);
  ys(i);
  vq(i, us);
  qf(Wl(i).V(), "goog-menu-noaccel");
  i.qd = function(a) {
    var b = k;
    a && 0 < a.length && (b = Yj(Wl(i), Aq(a)));
    b != i.Yc() && i.kc(b)
  };
  return i
}, ia:j}, {O:"+fontSize", ea:Qs, ca:"tr-fontSize", factory:function(a, b, c, d, f, h) {
  var i = Kq(a, b, c, d, f, h);
  Cq(i);
  vq(i, As);
  qf(Wl(i).V(), "goog-menu-noaccel");
  i.qd = function(a) {
    var b;
    if(b = y(a)) {
      b = a.match(Gj), b = "px" == (b && b[0] || k)
    }
    b && (a = eb(Eq, parseInt(a, 10)));
    a = 0 < a ? a : k;
    a != i.ga() && i.oa(a)
  };
  return i
}, ia:j}, {O:"+bold", ea:Ss, ca:"tr-icon tr-bold", ia:j}, {O:"+italic", ea:Ts, ca:"tr-icon tr-italic", ia:j}, {O:"+underline", ea:Us, ca:"tr-icon tr-underline", ia:j}, {O:"+foreColor", ea:Rs, ca:"tr-icon tr-foreColor", factory:function(a, b, c, d, f, h) {
  a = Lq(a, b, c, d, f, h);
  a.wf("#000");
  a.qd = wa(Ks, a);
  return a
}, ia:j}, {O:"+backColor", ea:Vs, ca:"tr-icon tr-backColor", factory:function(a, b, c, d, f, h) {
  a = Lq(a, b, c, d, f, h);
  a.wf("#FFF");
  a.qd = wa(Ks, a);
  return a
}, ia:j}, {O:"+link", ea:Ws, caption:bm, ca:"tr-link", ia:j}, {O:"+insertOrderedList", ea:Xs, ca:"tr-icon tr-insertOrderedList", ia:j}, {O:"+insertUnorderedList", ea:Ys, ca:"tr-icon tr-insertUnorderedList", ia:j}, {O:"+outdent", ea:Zs, ca:"tr-icon tr-outdent", factory:Hq}, {O:"+indent", ea:$s, ca:"tr-icon tr-indent", factory:Hq}, {O:"+justifyLeft", ea:at, ca:"tr-icon tr-justifyLeft", ia:j}, {O:"+justifyCenter", ea:bt, ca:"tr-icon tr-justifyCenter", ia:j}, {O:"+justifyRight", ea:ct, ca:"tr-icon tr-justifyRight", 
ia:j}, {O:"+justifyFull", ea:dt, ca:"tr-icon tr-justifyFull", ia:j}, {O:"+removeFormat", ea:et, ca:"tr-icon tr-removeFormat", factory:Hq}, {O:"image", ea:ft, ca:"tr-icon tr-image", factory:Hq}, {O:"+strikeThrough", ea:gt, ca:"tr-icon tr-strikeThrough", ia:j}, {O:"+subscript", ea:lt, ca:"tr-icon tr-subscript", ia:j}, {O:"+superscript", ea:mt, ca:"tr-icon tr-superscript", ia:j}, {O:"ltr", ea:ht, ca:"tr-icon tr-ltr", ia:j}, {O:"rtl", ea:it, ca:"tr-icon tr-rtl", factory:function(a, b, c, d, f, h) {
  var i = Jq(a, b, c, d, f, h);
  i.qd = function(a) {
    a = !!a;
    sf(i.getParent().b(), "tr-rtl-mode", a);
    pk(i, a)
  };
  return i
}, ia:j}, {O:"+BLOCKQUOTE", ea:jt, ca:"tr-icon tr-BLOCKQUOTE", ia:j}, {O:"+formatBlock", ea:Ls, caption:Ms, ca:"tr-formatBlock", factory:function(a, b, c, d, f, h) {
  var i = Kq(a, b, c, d, f, h);
  Fq(i);
  vq(i, Gs);
  qf(Wl(i).V(), "goog-menu-noaccel");
  i.qd = function(a) {
    a = a && 0 < a.length ? a : k;
    a != i.ga() && i.oa(a)
  };
  return i
}, ia:j}, {O:"editHtml", ea:kt, caption:nt, ca:"tr-editHtml", factory:Hq}];
for(var ot = 0, pt;pt = ts.Ji[ot];ot++) {
  Is[pt.O] = pt
}
delete ts.Ji;
Ki("goog.editor.plugins.Blockquote");
function qt() {
  gr.call(this, "link");
  this.K = new qh(this)
}
A(qt, gr);
t = qt.prototype;
t.Je = o;
t.sc = ro("LinkDialogPlugin");
t.sk = ca("Xe");
t.ke = function(a, b) {
  this.Ve = b;
  return qt.c.ke.call(this, a, b)
};
t.Lh = function(a) {
  qt.c.Lh.call(this, a);
  this.Ve = k
};
t.m = function() {
  qt.c.m.call(this);
  this.K.w()
};
t.Wl = function(a) {
  if(this.De) {
    this.De.w(), this.De = k
  }
  kr(this.Ve, a.nf, a.qm);
  lr(this.Ve);
  zo(this.d);
  this.d.Vc();
  th(this.K)
};
t.Gl = function() {
  this.Ve.qg && (Mf(this.Ve.Ac), this.d.Vc());
  th(this.K)
};
function rt() {
  uo.call(this)
}
A(rt, uo);
rt.prototype.sc = s("HeaderFormatter");
rt.prototype.jg = function(a, b, c) {
  if(!c) {
    return o
  }
  c = k;
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
  return c ? (this.d.execCommand("+formatBlock", c), S && a.stopPropagation(), j) : o
};
function st() {
  uo.call(this)
}
A(st, uo);
t = st.prototype;
t.sc = s("EnterHandler");
t.ik = function(a) {
  return!a || Ba(a) ? Rm ? this.Cl() : "" : a
};
t.Cl = ro("<br>");
t.Ol = function(a) {
  if(S && this.d.ad) {
    return o
  }
  if(8 == a.keyCode) {
    var b = $(this.d), c = this.d.b(), b = b && b.r();
    c.firstChild == b && To(b) && (a.preventDefault(), a.stopPropagation())
  }else {
    if(13 == a.keyCode) {
      if(S) {
        if(!a.shiftKey) {
          var c = $(this.d), b = !c || c.isCollapsed(), d = Lm ? tt(this) : ut(this), f = this.d.execCommand("+splitBlockquote", d);
          f && (a.preventDefault(), a.stopPropagation());
          Lm || d.removeNode(j);
          f || this.Ml(a, b, c)
        }
      }else {
        this.d.he();
        c = Lm ? tt(this) : ut(this);
        if(b = !!this.d.execCommand("+splitBlockquote", c)) {
          a.preventDefault(), a.stopPropagation()
        }
        Lm || c.removeNode(j);
        T && this.Nl(a);
        if(R || Q) {
          vt(this)
        }else {
          if(!b && T) {
            if(b = c = $(this.d)) {
              a: {
                for(b = c.Ua();b;b = b.parentNode) {
                  if(Oo[b.tagName]) {
                    b = "BLOCKQUOTE" == b.tagName;
                    break a
                  }
                }
                b = o
              }
            }
            if(b) {
              b = vo(this);
              d = b.createElement("BR");
              c.insertNode(d, j);
              if(c = !!Oo[d.parentNode.tagName]) {
                for(c = d.nextSibling;c && 3 == c.nodeType && !c.nodeValue;) {
                  c = c.nextSibling
                }
                c = !c
              }
              c && Jf(b.createElement("BR"), d);
              Yo(d, o);
              a.preventDefault()
            }
          }
        }
        this.d.Vc()
      }
    }else {
      if(S && 46 == a.keyCode && (b = $(this.d), b.isCollapsed() && (c = b.D(), 1 == c.nodeType && (b = c.childNodes[b.aa()]) && "BR" == b.tagName))) {
        d = Ro(Ph(new Mo(b, o, j), So)), f = b.nextSibling, c.removeChild(b), a.preventDefault(), f && Oo[f.tagName] && (d && !("BR" == d.tagName || Oo[d.tagName]) ? po(d, Uo(d)).select() : (a = Qo(f), po(a, 0).select()))
      }
    }
  }
  return o
};
t.ig = function(a) {
  if(S && this.d.ad) {
    return o
  }
  (R || Q) && 13 == a.keyCode && vt(this, j);
  return o
};
t.Nl = ia;
t.Ml = ia;
var wt = Hb("LI", "DIV", "H1", "H2", "H3", "H4", "H5", "H6");
function vt(a, b) {
  for(var c = $(a.d), d = c.Mb(), f = a.d.b(), h;d && d != f;) {
    var i = d.nodeName;
    if("DIV" == i || wt[i] && (!b || !(To(d) && 1 == d.getElementsByTagName("BR").length))) {
      if(Q && h) {
        "DIV" == i && h == d.lastChild && To(h) && (Kf(h, d), Nl(h).select());
        break
      }
      return
    }
    Q && b && "P" == i && "DIV" != i && (h = d);
    d = d.parentNode
  }
  if(R && !U(9)) {
    var l = o, c = c.Xb(), d = c.duplicate();
    d.moveEnd("character", 1);
    if(d.text.length && (l = d.parentElement(), d = d.duplicate(), d.collapse(o), d = d.parentElement(), l = l != d && d != c.parentElement())) {
      c.move("character", -1), c.select()
    }
  }
  a.d.jb.da().execCommand("FormatBlock", o, "<DIV>");
  l && (c.move("character", 1), c.select())
}
function ut(a) {
  var a = vo(a).da(), b = a.selection.createRange(), c = Wa();
  b.pasteHTML('<span id="' + c + '"></span>');
  a = a.getElementById(c);
  a.id = "";
  return a
}
function tt(a) {
  a = $(a.d);
  if(!a.isCollapsed()) {
    var b = j;
    if(Q) {
      var c = a.r(), d = a.L();
      c == a.D() && c.lastChild && "BR" == c.lastChild.tagName && d == c.childNodes.length - 1 && (b = o)
    }
    if(b) {
      var f = a;
      if(f && !f.isCollapsed()) {
        var h = j, b = f.Ua(), c = new Lp(f.r(), b), d = f.L(), i;
        i = f;
        var l = i.r();
        dn(l) && (l = l.childNodes[i.L()] || l);
        var l = en(l), m = i.D();
        dn(m) && (m = m.childNodes[i.aa()] || m);
        m = en(m);
        i = l == m;
        if(l = !i) {
          a: {
            var m = f, l = m.D(), m = m.aa(), n = l;
            if(dn(n)) {
              var q = n.childNodes[m];
              if(!q || 1 == q.nodeType && dn(q)) {
                l = o;
                break a
              }
            }
            for(q = en(n);q != n;) {
              if(Ro(Ph(new Mo(n), So))) {
                l = j;
                break a
              }
              n = n.parentNode
            }
            l = m != Uo(l)
          }
        }
        f.Nc();
        f = po(Mp(c, b), d);
        f.select();
        if(i && (i = en(f.r()), To(i, j))) {
          h = "&nbsp;", Q && "LI" == i.tagName && (h = "<br>"), i.innerHTML = h, po(Qo(i.firstChild), 0).select(), h = o
        }
        l && (f = en(f.r()), i = Ro(Ph(new Mo(f), So)), f && i && (Hf(f, i.childNodes), Y(i)));
        h && (f = po(Mp(c, b), d), f.select())
      }
    }
  }
  return cp(a, j)
}
;function xt() {
  uo.call(this)
}
A(xt, Np);
xt.prototype.sc = s("ListTabHandler");
xt.prototype.Fj = function(a) {
  var b = $(this.d);
  return ag(b.Ua(), "LI") || Qh(b, function(a) {
    return"LI" == a.tagName
  }) ? (this.d.execCommand(a.shiftKey ? "+outdent" : "+indent"), a.preventDefault(), j) : o
};
var yt = "+bold,+italic,+underline,+fontSize,+link,+insertUnorderedList,+insertOrderedList,+indent,+outdent,+removeFormat".split(","), Ep = Ve.N(k);
function zt() {
  return yf.call(k, "fieldContents").value = Dp()
}
ea("hello.updateFieldContents", zt);
ea("hello.setupEditor", function() {
  var a = Ep, b = new ip("editMe"), c = a.sn;
  B(c) && !B(c.call(k, b)) && e(Error([P("Assert failed: "), P("Validator rejected reference state"), P("\n"), P(Mc.h(H([Xc(Gc("\ufdd1'validate", "\ufdd1'new-value"), Fc("\ufdd0'line", 5905))])))].join("")));
  c = a.state;
  a.state = b;
  wc(a, c, b);
  a = kc(Ep);
  qp(a, new Tr);
  qp(a, new Nr);
  qp(a, new xt);
  qp(a, new Op);
  qp(a, new st);
  qp(a, new rt);
  qp(a, new ss("Click here to edit"));
  qp(a, new qt);
  qp(a, new pr);
  a = Hs.call(k, yt, yf.call(k, "toolbar"));
  new Ip(kc(Ep), a);
  Kg.call(k, kc(Ep), kp, zt);
  a = kc(Ep);
  a.Ob = 1;
  b = a.fc;
  a.nodeName = b.nodeName;
  a.Co = b.className;
  a.cssText = b.style.cssText;
  b.className += " editable";
  if(b = a.fc) {
    var b = b.innerHTML, c = {}, b = a.oi(8, b, c), d = "padding:0;" + a.fc.style.cssText;
    ya(d, ";") || (d += ";");
    d += "background-color:white;";
    R && (d += "overflow:visible;");
    d = a.xe.e("IFRAME", {frameBorder:0, style:d});
    if(Hp(a)) {
      var f = va(a.Kj, a, d, b, c);
      a.Gh = Kg(d, "load", f, j)
    }
    f = a.fc;
    d.className = f.className;
    d.id = f.id;
    Lf(d, f);
    Hp(a) || a.Kj(d, b, c)
  }
  return zt()
});
var At = Ld(["Foo", "Bar", "Baz"]);
ea("filteredmenu.setupMenu", function() {
  var a = yf.call(k, "menu"), b = new zn;
  Cn(b);
  Md.f(function(a) {
    return b.Rb(new Pk(a))
  }, At);
  return b.Va(a)
});
