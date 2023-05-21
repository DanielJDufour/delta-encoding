const delta = {
  encode: function encode (a) {
    const l = a.length;
    if (l === 0) return [];
    const r = [a[0]];
    for (let i = 1; i < l; i++) r.push(a[i] - a[i - 1]);
    return r;
  },
  decode: function decode (a) {
    const l = a.length;
    if (l === 0) return [];
    let n = 0;
    const r = [];
    for (let i = 0; i < l; i++) r.push(n += a[i]);
    return r;
  }
}

if (typeof window === "object") window.delta = delta;
if (typeof self === "object") self.delta = delta;
if (typeof module === "object") module.exports = delta;
if (typeof define === "function" && define.amd) define(function() { return delta; });
