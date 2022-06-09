var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3 = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, e$6 = Symbol(), n$5 = /* @__PURE__ */ new Map();
class s$3 {
  constructor(t2, n2) {
    if (this._$cssResult$ = true, n2 !== e$6)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t2;
  }
  get styleSheet() {
    let e2 = n$5.get(this.cssText);
    return t$3 && e2 === void 0 && (n$5.set(this.cssText, e2 = new CSSStyleSheet()), e2.replaceSync(this.cssText)), e2;
  }
  toString() {
    return this.cssText;
  }
}
const o$7 = (t2) => new s$3(typeof t2 == "string" ? t2 : t2 + "", e$6), r$4 = (t2, ...n2) => {
  const o2 = t2.length === 1 ? t2[0] : n2.reduce((e2, n3, s2) => e2 + ((t3) => {
    if (t3._$cssResult$ === true)
      return t3.cssText;
    if (typeof t3 == "number")
      return t3;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t3 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n3) + t2[s2 + 1], t2[0]);
  return new s$3(o2, e$6);
}, i$3 = (e2, n2) => {
  t$3 ? e2.adoptedStyleSheets = n2.map((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet) : n2.forEach((t2) => {
    const n3 = document.createElement("style"), s2 = window.litNonce;
    s2 !== void 0 && n3.setAttribute("nonce", s2), n3.textContent = t2.cssText, e2.appendChild(n3);
  });
}, S$1 = t$3 ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
  let e2 = "";
  for (const n2 of t3.cssRules)
    e2 += n2.cssText;
  return o$7(e2);
})(t2) : t2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var s$2;
const e$5 = window.trustedTypes, r$3 = e$5 ? e$5.emptyScript : "", h$3 = window.reactiveElementPolyfillSupport, o$6 = { toAttribute(t2, i) {
  switch (i) {
    case Boolean:
      t2 = t2 ? r$3 : null;
      break;
    case Object:
    case Array:
      t2 = t2 == null ? t2 : JSON.stringify(t2);
  }
  return t2;
}, fromAttribute(t2, i) {
  let s2 = t2;
  switch (i) {
    case Boolean:
      s2 = t2 !== null;
      break;
    case Number:
      s2 = t2 === null ? null : Number(t2);
      break;
    case Object:
    case Array:
      try {
        s2 = JSON.parse(t2);
      } catch (t3) {
        s2 = null;
      }
  }
  return s2;
} }, n$4 = (t2, i) => i !== t2 && (i == i || t2 == t2), l$4 = { attribute: true, type: String, converter: o$6, reflect: false, hasChanged: n$4 };
class a$1 extends HTMLElement {
  constructor() {
    super(), this._$Et = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$Ei = null, this.o();
  }
  static addInitializer(t2) {
    var i;
    (i = this.l) !== null && i !== void 0 || (this.l = []), this.l.push(t2);
  }
  static get observedAttributes() {
    this.finalize();
    const t2 = [];
    return this.elementProperties.forEach((i, s2) => {
      const e2 = this._$Eh(s2, i);
      e2 !== void 0 && (this._$Eu.set(e2, s2), t2.push(e2));
    }), t2;
  }
  static createProperty(t2, i = l$4) {
    if (i.state && (i.attribute = false), this.finalize(), this.elementProperties.set(t2, i), !i.noAccessor && !this.prototype.hasOwnProperty(t2)) {
      const s2 = typeof t2 == "symbol" ? Symbol() : "__" + t2, e2 = this.getPropertyDescriptor(t2, s2, i);
      e2 !== void 0 && Object.defineProperty(this.prototype, t2, e2);
    }
  }
  static getPropertyDescriptor(t2, i, s2) {
    return { get() {
      return this[i];
    }, set(e2) {
      const r2 = this[t2];
      this[i] = e2, this.requestUpdate(t2, r2, s2);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t2) {
    return this.elementProperties.get(t2) || l$4;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized"))
      return false;
    this.finalized = true;
    const t2 = Object.getPrototypeOf(this);
    if (t2.finalize(), this.elementProperties = new Map(t2.elementProperties), this._$Eu = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const t3 = this.properties, i = [...Object.getOwnPropertyNames(t3), ...Object.getOwnPropertySymbols(t3)];
      for (const s2 of i)
        this.createProperty(s2, t3[s2]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(i) {
    const s2 = [];
    if (Array.isArray(i)) {
      const e2 = new Set(i.flat(1 / 0).reverse());
      for (const i2 of e2)
        s2.unshift(S$1(i2));
    } else
      i !== void 0 && s2.push(S$1(i));
    return s2;
  }
  static _$Eh(t2, i) {
    const s2 = i.attribute;
    return s2 === false ? void 0 : typeof s2 == "string" ? s2 : typeof t2 == "string" ? t2.toLowerCase() : void 0;
  }
  o() {
    var t2;
    this._$Ep = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$Em(), this.requestUpdate(), (t2 = this.constructor.l) === null || t2 === void 0 || t2.forEach((t3) => t3(this));
  }
  addController(t2) {
    var i, s2;
    ((i = this._$Eg) !== null && i !== void 0 ? i : this._$Eg = []).push(t2), this.renderRoot !== void 0 && this.isConnected && ((s2 = t2.hostConnected) === null || s2 === void 0 || s2.call(t2));
  }
  removeController(t2) {
    var i;
    (i = this._$Eg) === null || i === void 0 || i.splice(this._$Eg.indexOf(t2) >>> 0, 1);
  }
  _$Em() {
    this.constructor.elementProperties.forEach((t2, i) => {
      this.hasOwnProperty(i) && (this._$Et.set(i, this[i]), delete this[i]);
    });
  }
  createRenderRoot() {
    var t2;
    const s2 = (t2 = this.shadowRoot) !== null && t2 !== void 0 ? t2 : this.attachShadow(this.constructor.shadowRootOptions);
    return i$3(s2, this.constructor.elementStyles), s2;
  }
  connectedCallback() {
    var t2;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t2 = this._$Eg) === null || t2 === void 0 || t2.forEach((t3) => {
      var i;
      return (i = t3.hostConnected) === null || i === void 0 ? void 0 : i.call(t3);
    });
  }
  enableUpdating(t2) {
  }
  disconnectedCallback() {
    var t2;
    (t2 = this._$Eg) === null || t2 === void 0 || t2.forEach((t3) => {
      var i;
      return (i = t3.hostDisconnected) === null || i === void 0 ? void 0 : i.call(t3);
    });
  }
  attributeChangedCallback(t2, i, s2) {
    this._$AK(t2, s2);
  }
  _$ES(t2, i, s2 = l$4) {
    var e2, r2;
    const h2 = this.constructor._$Eh(t2, s2);
    if (h2 !== void 0 && s2.reflect === true) {
      const n2 = ((r2 = (e2 = s2.converter) === null || e2 === void 0 ? void 0 : e2.toAttribute) !== null && r2 !== void 0 ? r2 : o$6.toAttribute)(i, s2.type);
      this._$Ei = t2, n2 == null ? this.removeAttribute(h2) : this.setAttribute(h2, n2), this._$Ei = null;
    }
  }
  _$AK(t2, i) {
    var s2, e2, r2;
    const h2 = this.constructor, n2 = h2._$Eu.get(t2);
    if (n2 !== void 0 && this._$Ei !== n2) {
      const t3 = h2.getPropertyOptions(n2), l2 = t3.converter, a2 = (r2 = (e2 = (s2 = l2) === null || s2 === void 0 ? void 0 : s2.fromAttribute) !== null && e2 !== void 0 ? e2 : typeof l2 == "function" ? l2 : null) !== null && r2 !== void 0 ? r2 : o$6.fromAttribute;
      this._$Ei = n2, this[n2] = a2(i, t3.type), this._$Ei = null;
    }
  }
  requestUpdate(t2, i, s2) {
    let e2 = true;
    t2 !== void 0 && (((s2 = s2 || this.constructor.getPropertyOptions(t2)).hasChanged || n$4)(this[t2], i) ? (this._$AL.has(t2) || this._$AL.set(t2, i), s2.reflect === true && this._$Ei !== t2 && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t2, s2))) : e2 = false), !this.isUpdatePending && e2 && (this._$Ep = this._$E_());
  }
  async _$E_() {
    this.isUpdatePending = true;
    try {
      await this._$Ep;
    } catch (t3) {
      Promise.reject(t3);
    }
    const t2 = this.scheduleUpdate();
    return t2 != null && await t2, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t2;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Et && (this._$Et.forEach((t3, i2) => this[i2] = t3), this._$Et = void 0);
    let i = false;
    const s2 = this._$AL;
    try {
      i = this.shouldUpdate(s2), i ? (this.willUpdate(s2), (t2 = this._$Eg) === null || t2 === void 0 || t2.forEach((t3) => {
        var i2;
        return (i2 = t3.hostUpdate) === null || i2 === void 0 ? void 0 : i2.call(t3);
      }), this.update(s2)) : this._$EU();
    } catch (t3) {
      throw i = false, this._$EU(), t3;
    }
    i && this._$AE(s2);
  }
  willUpdate(t2) {
  }
  _$AE(t2) {
    var i;
    (i = this._$Eg) === null || i === void 0 || i.forEach((t3) => {
      var i2;
      return (i2 = t3.hostUpdated) === null || i2 === void 0 ? void 0 : i2.call(t3);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$Ep;
  }
  shouldUpdate(t2) {
    return true;
  }
  update(t2) {
    this._$EC !== void 0 && (this._$EC.forEach((t3, i) => this._$ES(i, this[i], t3)), this._$EC = void 0), this._$EU();
  }
  updated(t2) {
  }
  firstUpdated(t2) {
  }
}
a$1.finalized = true, a$1.elementProperties = /* @__PURE__ */ new Map(), a$1.elementStyles = [], a$1.shadowRootOptions = { mode: "open" }, h$3 == null || h$3({ ReactiveElement: a$1 }), ((s$2 = globalThis.reactiveElementVersions) !== null && s$2 !== void 0 ? s$2 : globalThis.reactiveElementVersions = []).push("1.3.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$2;
const i$2 = globalThis.trustedTypes, s$1 = i$2 ? i$2.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, e$4 = `lit$${(Math.random() + "").slice(9)}$`, o$5 = "?" + e$4, n$3 = `<${o$5}>`, l$3 = document, h$2 = (t2 = "") => l$3.createComment(t2), r$2 = (t2) => t2 === null || typeof t2 != "object" && typeof t2 != "function", d$1 = Array.isArray, u = (t2) => {
  var i;
  return d$1(t2) || typeof ((i = t2) === null || i === void 0 ? void 0 : i[Symbol.iterator]) == "function";
}, c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, a = />/g, f = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g, _ = /'/g, m = /"/g, g = /^(?:script|style|textarea|title)$/i, p = (t2) => (i, ...s2) => ({ _$litType$: t2, strings: i, values: s2 }), $ = p(1), b = Symbol.for("lit-noChange"), w = Symbol.for("lit-nothing"), T = /* @__PURE__ */ new WeakMap(), x = (t2, i, s2) => {
  var e2, o2;
  const n2 = (e2 = s2 == null ? void 0 : s2.renderBefore) !== null && e2 !== void 0 ? e2 : i;
  let l2 = n2._$litPart$;
  if (l2 === void 0) {
    const t3 = (o2 = s2 == null ? void 0 : s2.renderBefore) !== null && o2 !== void 0 ? o2 : null;
    n2._$litPart$ = l2 = new N(i.insertBefore(h$2(), t3), t3, void 0, s2 != null ? s2 : {});
  }
  return l2._$AI(t2), l2;
}, A = l$3.createTreeWalker(l$3, 129, null, false), C = (t2, i) => {
  const o2 = t2.length - 1, l2 = [];
  let h2, r2 = i === 2 ? "<svg>" : "", d2 = c;
  for (let i2 = 0; i2 < o2; i2++) {
    const s2 = t2[i2];
    let o3, u3, p2 = -1, $2 = 0;
    for (; $2 < s2.length && (d2.lastIndex = $2, u3 = d2.exec(s2), u3 !== null); )
      $2 = d2.lastIndex, d2 === c ? u3[1] === "!--" ? d2 = v : u3[1] !== void 0 ? d2 = a : u3[2] !== void 0 ? (g.test(u3[2]) && (h2 = RegExp("</" + u3[2], "g")), d2 = f) : u3[3] !== void 0 && (d2 = f) : d2 === f ? u3[0] === ">" ? (d2 = h2 != null ? h2 : c, p2 = -1) : u3[1] === void 0 ? p2 = -2 : (p2 = d2.lastIndex - u3[2].length, o3 = u3[1], d2 = u3[3] === void 0 ? f : u3[3] === '"' ? m : _) : d2 === m || d2 === _ ? d2 = f : d2 === v || d2 === a ? d2 = c : (d2 = f, h2 = void 0);
    const y = d2 === f && t2[i2 + 1].startsWith("/>") ? " " : "";
    r2 += d2 === c ? s2 + n$3 : p2 >= 0 ? (l2.push(o3), s2.slice(0, p2) + "$lit$" + s2.slice(p2) + e$4 + y) : s2 + e$4 + (p2 === -2 ? (l2.push(void 0), i2) : y);
  }
  const u2 = r2 + (t2[o2] || "<?>") + (i === 2 ? "</svg>" : "");
  if (!Array.isArray(t2) || !t2.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [s$1 !== void 0 ? s$1.createHTML(u2) : u2, l2];
};
class E {
  constructor({ strings: t2, _$litType$: s2 }, n2) {
    let l2;
    this.parts = [];
    let r2 = 0, d2 = 0;
    const u2 = t2.length - 1, c2 = this.parts, [v2, a2] = C(t2, s2);
    if (this.el = E.createElement(v2, n2), A.currentNode = this.el.content, s2 === 2) {
      const t3 = this.el.content, i = t3.firstChild;
      i.remove(), t3.append(...i.childNodes);
    }
    for (; (l2 = A.nextNode()) !== null && c2.length < u2; ) {
      if (l2.nodeType === 1) {
        if (l2.hasAttributes()) {
          const t3 = [];
          for (const i of l2.getAttributeNames())
            if (i.endsWith("$lit$") || i.startsWith(e$4)) {
              const s3 = a2[d2++];
              if (t3.push(i), s3 !== void 0) {
                const t4 = l2.getAttribute(s3.toLowerCase() + "$lit$").split(e$4), i2 = /([.?@])?(.*)/.exec(s3);
                c2.push({ type: 1, index: r2, name: i2[2], strings: t4, ctor: i2[1] === "." ? M : i2[1] === "?" ? H : i2[1] === "@" ? I : S });
              } else
                c2.push({ type: 6, index: r2 });
            }
          for (const i of t3)
            l2.removeAttribute(i);
        }
        if (g.test(l2.tagName)) {
          const t3 = l2.textContent.split(e$4), s3 = t3.length - 1;
          if (s3 > 0) {
            l2.textContent = i$2 ? i$2.emptyScript : "";
            for (let i = 0; i < s3; i++)
              l2.append(t3[i], h$2()), A.nextNode(), c2.push({ type: 2, index: ++r2 });
            l2.append(t3[s3], h$2());
          }
        }
      } else if (l2.nodeType === 8)
        if (l2.data === o$5)
          c2.push({ type: 2, index: r2 });
        else {
          let t3 = -1;
          for (; (t3 = l2.data.indexOf(e$4, t3 + 1)) !== -1; )
            c2.push({ type: 7, index: r2 }), t3 += e$4.length - 1;
        }
      r2++;
    }
  }
  static createElement(t2, i) {
    const s2 = l$3.createElement("template");
    return s2.innerHTML = t2, s2;
  }
}
function P(t2, i, s2 = t2, e2) {
  var o2, n2, l2, h2;
  if (i === b)
    return i;
  let d2 = e2 !== void 0 ? (o2 = s2._$Cl) === null || o2 === void 0 ? void 0 : o2[e2] : s2._$Cu;
  const u2 = r$2(i) ? void 0 : i._$litDirective$;
  return (d2 == null ? void 0 : d2.constructor) !== u2 && ((n2 = d2 == null ? void 0 : d2._$AO) === null || n2 === void 0 || n2.call(d2, false), u2 === void 0 ? d2 = void 0 : (d2 = new u2(t2), d2._$AT(t2, s2, e2)), e2 !== void 0 ? ((l2 = (h2 = s2)._$Cl) !== null && l2 !== void 0 ? l2 : h2._$Cl = [])[e2] = d2 : s2._$Cu = d2), d2 !== void 0 && (i = P(t2, d2._$AS(t2, i.values), d2, e2)), i;
}
class V {
  constructor(t2, i) {
    this.v = [], this._$AN = void 0, this._$AD = t2, this._$AM = i;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  p(t2) {
    var i;
    const { el: { content: s2 }, parts: e2 } = this._$AD, o2 = ((i = t2 == null ? void 0 : t2.creationScope) !== null && i !== void 0 ? i : l$3).importNode(s2, true);
    A.currentNode = o2;
    let n2 = A.nextNode(), h2 = 0, r2 = 0, d2 = e2[0];
    for (; d2 !== void 0; ) {
      if (h2 === d2.index) {
        let i2;
        d2.type === 2 ? i2 = new N(n2, n2.nextSibling, this, t2) : d2.type === 1 ? i2 = new d2.ctor(n2, d2.name, d2.strings, this, t2) : d2.type === 6 && (i2 = new L(n2, this, t2)), this.v.push(i2), d2 = e2[++r2];
      }
      h2 !== (d2 == null ? void 0 : d2.index) && (n2 = A.nextNode(), h2++);
    }
    return o2;
  }
  m(t2) {
    let i = 0;
    for (const s2 of this.v)
      s2 !== void 0 && (s2.strings !== void 0 ? (s2._$AI(t2, s2, i), i += s2.strings.length - 2) : s2._$AI(t2[i])), i++;
  }
}
class N {
  constructor(t2, i, s2, e2) {
    var o2;
    this.type = 2, this._$AH = w, this._$AN = void 0, this._$AA = t2, this._$AB = i, this._$AM = s2, this.options = e2, this._$Cg = (o2 = e2 == null ? void 0 : e2.isConnected) === null || o2 === void 0 || o2;
  }
  get _$AU() {
    var t2, i;
    return (i = (t2 = this._$AM) === null || t2 === void 0 ? void 0 : t2._$AU) !== null && i !== void 0 ? i : this._$Cg;
  }
  get parentNode() {
    let t2 = this._$AA.parentNode;
    const i = this._$AM;
    return i !== void 0 && t2.nodeType === 11 && (t2 = i.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, i = this) {
    t2 = P(this, t2, i), r$2(t2) ? t2 === w || t2 == null || t2 === "" ? (this._$AH !== w && this._$AR(), this._$AH = w) : t2 !== this._$AH && t2 !== b && this.$(t2) : t2._$litType$ !== void 0 ? this.T(t2) : t2.nodeType !== void 0 ? this.k(t2) : u(t2) ? this.S(t2) : this.$(t2);
  }
  M(t2, i = this._$AB) {
    return this._$AA.parentNode.insertBefore(t2, i);
  }
  k(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.M(t2));
  }
  $(t2) {
    this._$AH !== w && r$2(this._$AH) ? this._$AA.nextSibling.data = t2 : this.k(l$3.createTextNode(t2)), this._$AH = t2;
  }
  T(t2) {
    var i;
    const { values: s2, _$litType$: e2 } = t2, o2 = typeof e2 == "number" ? this._$AC(t2) : (e2.el === void 0 && (e2.el = E.createElement(e2.h, this.options)), e2);
    if (((i = this._$AH) === null || i === void 0 ? void 0 : i._$AD) === o2)
      this._$AH.m(s2);
    else {
      const t3 = new V(o2, this), i2 = t3.p(this.options);
      t3.m(s2), this.k(i2), this._$AH = t3;
    }
  }
  _$AC(t2) {
    let i = T.get(t2.strings);
    return i === void 0 && T.set(t2.strings, i = new E(t2)), i;
  }
  S(t2) {
    d$1(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let s2, e2 = 0;
    for (const o2 of t2)
      e2 === i.length ? i.push(s2 = new N(this.M(h$2()), this.M(h$2()), this, this.options)) : s2 = i[e2], s2._$AI(o2), e2++;
    e2 < i.length && (this._$AR(s2 && s2._$AB.nextSibling, e2), i.length = e2);
  }
  _$AR(t2 = this._$AA.nextSibling, i) {
    var s2;
    for ((s2 = this._$AP) === null || s2 === void 0 || s2.call(this, false, true, i); t2 && t2 !== this._$AB; ) {
      const i2 = t2.nextSibling;
      t2.remove(), t2 = i2;
    }
  }
  setConnected(t2) {
    var i;
    this._$AM === void 0 && (this._$Cg = t2, (i = this._$AP) === null || i === void 0 || i.call(this, t2));
  }
}
class S {
  constructor(t2, i, s2, e2, o2) {
    this.type = 1, this._$AH = w, this._$AN = void 0, this.element = t2, this.name = i, this._$AM = e2, this.options = o2, s2.length > 2 || s2[0] !== "" || s2[1] !== "" ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = w;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2, i = this, s2, e2) {
    const o2 = this.strings;
    let n2 = false;
    if (o2 === void 0)
      t2 = P(this, t2, i, 0), n2 = !r$2(t2) || t2 !== this._$AH && t2 !== b, n2 && (this._$AH = t2);
    else {
      const e3 = t2;
      let l2, h2;
      for (t2 = o2[0], l2 = 0; l2 < o2.length - 1; l2++)
        h2 = P(this, e3[s2 + l2], i, l2), h2 === b && (h2 = this._$AH[l2]), n2 || (n2 = !r$2(h2) || h2 !== this._$AH[l2]), h2 === w ? t2 = w : t2 !== w && (t2 += (h2 != null ? h2 : "") + o2[l2 + 1]), this._$AH[l2] = h2;
    }
    n2 && !e2 && this.C(t2);
  }
  C(t2) {
    t2 === w ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 != null ? t2 : "");
  }
}
class M extends S {
  constructor() {
    super(...arguments), this.type = 3;
  }
  C(t2) {
    this.element[this.name] = t2 === w ? void 0 : t2;
  }
}
const k = i$2 ? i$2.emptyScript : "";
class H extends S {
  constructor() {
    super(...arguments), this.type = 4;
  }
  C(t2) {
    t2 && t2 !== w ? this.element.setAttribute(this.name, k) : this.element.removeAttribute(this.name);
  }
}
class I extends S {
  constructor(t2, i, s2, e2, o2) {
    super(t2, i, s2, e2, o2), this.type = 5;
  }
  _$AI(t2, i = this) {
    var s2;
    if ((t2 = (s2 = P(this, t2, i, 0)) !== null && s2 !== void 0 ? s2 : w) === b)
      return;
    const e2 = this._$AH, o2 = t2 === w && e2 !== w || t2.capture !== e2.capture || t2.once !== e2.once || t2.passive !== e2.passive, n2 = t2 !== w && (e2 === w || o2);
    o2 && this.element.removeEventListener(this.name, this, e2), n2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    var i, s2;
    typeof this._$AH == "function" ? this._$AH.call((s2 = (i = this.options) === null || i === void 0 ? void 0 : i.host) !== null && s2 !== void 0 ? s2 : this.element, t2) : this._$AH.handleEvent(t2);
  }
}
class L {
  constructor(t2, i, s2) {
    this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s2;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    P(this, t2);
  }
}
const z = window.litHtmlPolyfillSupport;
z == null || z(E, N), ((t$2 = globalThis.litHtmlVersions) !== null && t$2 !== void 0 ? t$2 : globalThis.litHtmlVersions = []).push("2.2.5");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var l$2, o$4;
class s extends a$1 {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Dt = void 0;
  }
  createRenderRoot() {
    var t2, e2;
    const i = super.createRenderRoot();
    return (t2 = (e2 = this.renderOptions).renderBefore) !== null && t2 !== void 0 || (e2.renderBefore = i.firstChild), i;
  }
  update(t2) {
    const i = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Dt = x(i, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t2;
    super.connectedCallback(), (t2 = this._$Dt) === null || t2 === void 0 || t2.setConnected(true);
  }
  disconnectedCallback() {
    var t2;
    super.disconnectedCallback(), (t2 = this._$Dt) === null || t2 === void 0 || t2.setConnected(false);
  }
  render() {
    return b;
  }
}
s.finalized = true, s._$litElement$ = true, (l$2 = globalThis.litElementHydrateSupport) === null || l$2 === void 0 || l$2.call(globalThis, { LitElement: s });
const n$2 = globalThis.litElementPolyfillSupport;
n$2 == null || n$2({ LitElement: s });
((o$4 = globalThis.litElementVersions) !== null && o$4 !== void 0 ? o$4 : globalThis.litElementVersions = []).push("3.2.0");
class BaseComponent extends s {
  constructor() {
    super(...arguments);
    this.__off__ = false;
  }
}
BaseComponent.shadowRootOptions = __spreadProps(__spreadValues({}, s.shadowRootOptions), {
  mode: "open",
  delegatesFocus: true
});
BaseComponent.properties = {
  __off__: { attribute: true, type: Boolean, reflect: true }
};
const colors = r$4`
  :root {
    --neutral-0: #000000; /* 0 */
    --neutral-26: #3d3d3d;  /* 25.8 */
    --neutral-50: #767676;  /* 49.6 */
    --neutral-80: #c5c5c5;  /* 79.5 */
    --neutral-88: #dddddd;  /* 88.1 */
    --neutral-94: #eeeeee;  /* 94.1 */
    --neutral-100: #ffffff; /* 100 */
  }
`;
const baseVariables = r$4`
  ${colors}
`;
function define(name, constructor, options) {
  if (typeof window !== "undefined") {
    try {
      window.customElements.define(name, constructor, options);
    } catch (error) {
      if (error instanceof DOMException) {
        const errorGeneralMessage = `Failed to execute 'define' on 'CustomElementRegistry'`;
        const specificMessagePart = `has already been used with this registry`;
        if (error.message.includes(errorGeneralMessage) && error.message.includes(specificMessagePart)) {
          return;
        }
      }
      throw error;
    }
  }
}
const typography$1 = r$4`
:root {
  --text-normal-color: var(--neutral-26);
  --text-heading-color: var(--neutral-0);
}
`;
const lightTheme = r$4`
  ${typography$1}
`;
const typography = r$4`
:root .dark-mode {
  --text-normal-color: var(--neutral-88);
  --text-heading-color: var(--neutral-100);
}
`;
const darkTheme = r$4`
  ${typography}
`;
const theme = r$4`
  :root {
    --accordion-trigger-border-color: var(--neutral-50);
    --accordion-trigger-open-background-color: var(--neutral-100);
  }
  :root .dark-mode {
    --accordion-trigger-border-color: var(--neutral-50);
    --accordion-trigger-open-background-color: var(--neutral-26);
  }
`;
const components = r$4`
  ${theme}
`;
const TAG_NAME$3 = "cta-theme";
class CtaTheme extends BaseComponent {
  createRenderRoot() {
    return this;
  }
  render() {
    return $`
        <style>
          .cta-theme {
            display: none;
          }
          ${baseVariables}
          ${lightTheme}
          ${darkTheme}
          ${components}
        </style>
      `;
  }
}
CtaTheme.tagName = TAG_NAME$3;
define(CtaTheme.tagName, CtaTheme);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const r$1 = (o2) => o2.strings === void 0;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, e$3 = (t2) => (...e2) => ({ _$litDirective$: t2, values: e2 });
class i$1 {
  constructor(t2) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t2, e2, i) {
    this._$Ct = t2, this._$AM = e2, this._$Ci = i;
  }
  _$AS(t2, e2) {
    return this.update(t2, e2);
  }
  update(t2, e2) {
    return this.render(...e2);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$2 = (i, t2) => {
  var s2, o2;
  const n2 = i._$AN;
  if (n2 === void 0)
    return false;
  for (const i2 of n2)
    (o2 = (s2 = i2)._$AO) === null || o2 === void 0 || o2.call(s2, t2, false), e$2(i2, t2);
  return true;
}, o$3 = (i) => {
  let t2, s2;
  do {
    if ((t2 = i._$AM) === void 0)
      break;
    s2 = t2._$AN, s2.delete(i), i = t2;
  } while ((s2 == null ? void 0 : s2.size) === 0);
}, n$1 = (i) => {
  for (let t2; t2 = i._$AM; i = t2) {
    let s2 = t2._$AN;
    if (s2 === void 0)
      t2._$AN = s2 = /* @__PURE__ */ new Set();
    else if (s2.has(i))
      break;
    s2.add(i), l$1(t2);
  }
};
function r(i) {
  this._$AN !== void 0 ? (o$3(this), this._$AM = i, n$1(this)) : this._$AM = i;
}
function h$1(i, t2 = false, s2 = 0) {
  const n2 = this._$AH, r2 = this._$AN;
  if (r2 !== void 0 && r2.size !== 0)
    if (t2)
      if (Array.isArray(n2))
        for (let i2 = s2; i2 < n2.length; i2++)
          e$2(n2[i2], false), o$3(n2[i2]);
      else
        n2 != null && (e$2(n2, false), o$3(n2));
    else
      e$2(this, i);
}
const l$1 = (i) => {
  var t2, e2, o2, n2;
  i.type == t$1.CHILD && ((t2 = (o2 = i)._$AP) !== null && t2 !== void 0 || (o2._$AP = h$1), (e2 = (n2 = i)._$AQ) !== null && e2 !== void 0 || (n2._$AQ = r));
};
class d extends i$1 {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(i, t2, s2) {
    super._$AT(i, t2, s2), n$1(this), this.isConnected = i._$AU;
  }
  _$AO(i, t2 = true) {
    var s2, n2;
    i !== this.isConnected && (this.isConnected = i, i ? (s2 = this.reconnected) === null || s2 === void 0 || s2.call(this) : (n2 = this.disconnected) === null || n2 === void 0 || n2.call(this)), t2 && (e$2(this, i), o$3(this));
  }
  setValue(t2) {
    if (r$1(this._$Ct))
      this._$Ct._$AI(t2, this);
    else {
      const i = [...this._$Ct._$AH];
      i[this._$Ci] = t2, this._$Ct._$AI(i, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$1 = () => new o$2();
class o$2 {
}
const h = /* @__PURE__ */ new WeakMap(), n = e$3(class extends d {
  render(t2) {
    return w;
  }
  update(t2, [s2]) {
    var e2;
    const o2 = s2 !== this.U;
    return o2 && this.U !== void 0 && this.ot(void 0), (o2 || this.rt !== this.lt) && (this.U = s2, this.ht = (e2 = t2.options) === null || e2 === void 0 ? void 0 : e2.host, this.ot(this.lt = t2.element)), w;
  }
  ot(i) {
    var t2;
    if (typeof this.U == "function") {
      const s2 = (t2 = this.ht) !== null && t2 !== void 0 ? t2 : globalThis;
      let e2 = h.get(s2);
      e2 === void 0 && (e2 = /* @__PURE__ */ new WeakMap(), h.set(s2, e2)), e2.get(this.U) !== void 0 && this.U.call(this.ht, void 0), e2.set(this.U, i), i !== void 0 && this.U.call(this.ht, i);
    } else
      this.U.value = i;
  }
  get rt() {
    var i, t2, s2;
    return typeof this.U == "function" ? (t2 = h.get((i = this.ht) !== null && i !== void 0 ? i : globalThis)) === null || t2 === void 0 ? void 0 : t2.get(this.U) : (s2 = this.U) === null || s2 === void 0 ? void 0 : s2.value;
  }
  disconnected() {
    this.rt === this.lt && this.ot(void 0);
  }
  reconnected() {
    this.ot(this.lt);
  }
});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o$1 = e$3(class extends i$1 {
  constructor(t2) {
    var i;
    if (super(t2), t2.type !== t$1.ATTRIBUTE || t2.name !== "class" || ((i = t2.strings) === null || i === void 0 ? void 0 : i.length) > 2)
      throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t2) {
    return " " + Object.keys(t2).filter((i) => t2[i]).join(" ") + " ";
  }
  update(i, [s2]) {
    var r2, o2;
    if (this.et === void 0) {
      this.et = /* @__PURE__ */ new Set(), i.strings !== void 0 && (this.st = new Set(i.strings.join(" ").split(/\s/).filter((t2) => t2 !== "")));
      for (const t2 in s2)
        s2[t2] && !((r2 = this.st) === null || r2 === void 0 ? void 0 : r2.has(t2)) && this.et.add(t2);
      return this.render(s2);
    }
    const e2 = i.element.classList;
    this.et.forEach((t2) => {
      t2 in s2 || (e2.remove(t2), this.et.delete(t2));
    });
    for (const t2 in s2) {
      const i2 = !!s2[t2];
      i2 === this.et.has(t2) || ((o2 = this.st) === null || o2 === void 0 ? void 0 : o2.has(t2)) || (i2 ? (e2.add(t2), this.et.add(t2)) : (e2.remove(t2), this.et.delete(t2)));
    }
    return b;
  }
});
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}
var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function validate(uuid) {
  return typeof uuid === "string" && REGEX.test(uuid);
}
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).substr(1));
}
function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  if (!validate(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return stringify(rnds);
}
const accordionStyles = r$4`
  :host:not([__off__]) {
    display: contents;
    box-sizing: border-box;
  }

  :host * {
    box-sizing: border-box;
  }

  :host [data-name="accordion-trigger"] {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 0.63rem 0;
    padding: 1rem;
    background: transparent;
    border: solid 1px var(--accordion-trigger-border-color);
    border-radius: 5px;
    transition: all 300ms;
    cursor: pointer;
  }

  [data-name="accordion-trigger"].open {
    background-color: var(--accordion-trigger-open-background-color);
  }
  
  :host [data-name="accordion-panel"] {
    height: 0;
    margin: 0;
    padding: 0 1rem;
    height: auto;
    overflow: hidden;
    transition: all 300ms;
  }

  :host [data-name="accordion-panel"].panel-open {
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }

  :host [data-name="accordion-trigger-icon"] {
    transition: all 300ms;
    transform: rotate(0deg);
  }

  :host(.is-open) [data-name="accordion-trigger-icon"] {
    transform: rotate(180deg);
  }
`;
const TAG_NAME$2 = "cta-accordion";
class Accordion extends BaseComponent {
  constructor() {
    super();
    this.open = false;
    this.name = "";
    this.uuid = "";
    this.panelRef = e$1();
    this.uuid = v4();
  }
  firstUpdated() {
    if (this.name.trim() === "") {
      throw new Error(`Accordion name attribute is required.`);
    }
  }
  updated(changedProperties) {
    if (changedProperties.has("open")) {
      this.handleIsOpenClass();
      this.togglePanel();
    }
  }
  handleIsOpenClass() {
    const className = "is-open";
    const { open } = this;
    if (open) {
      this.classList.add(className);
    } else {
      this.classList.remove(className);
    }
  }
  togglePanel() {
    const element = this.panelRef.value;
    if (!element) {
      return;
    }
    if (this.open) {
      this.expandPanel(element);
    } else {
      this.collapsePanel(element);
    }
  }
  collapsePanel(element) {
    var sectionHeight = element.scrollHeight;
    var elementTransition = element.style.transition;
    element.style.transition = "";
    requestAnimationFrame(function() {
      element.style.height = `${sectionHeight}px`;
      element.style.transition = elementTransition;
      requestAnimationFrame(function() {
        element.classList.remove("panel-open");
        element.style.height = "0px";
      });
    });
    element.setAttribute("data-collapsed", "true");
  }
  expandPanel(element) {
    var sectionHeight = element.scrollHeight;
    element.style.height = sectionHeight + "px";
    element.classList.add("panel-open");
    element.setAttribute("data-collapsed", "false");
  }
  onClick() {
    this.open = !this.open;
  }
  render() {
    const classes = { open: this.open };
    if (this.__off__) {
      return $`${this.innerHTML}`;
    }
    return $`
      <div data-name="accordion-trigger" @click=${this.onClick} aria-controls=${this.uuid} aria-expanded=${this.open}
        class=${o$1(classes)}>
        <div data-name="accordion-trigger-content">
          ${this.name}
        </div>
        <cta-icon data-name="accordion-trigger-icon" name="chevron-down" width="24" height="24"></cta-icon>
      </div>
      
      <div data-name="accordion-panel" id=${this.uuid} ${n(this.panelRef)} aria-labelledby=${this.name}>
        <slot></slot>
      </div>
    `;
  }
}
Accordion.tagName = TAG_NAME$2;
Accordion.styles = [accordionStyles];
Accordion.properties = __spreadProps(__spreadValues({}, BaseComponent.properties), {
  open: { attribute: true, type: Boolean, reflect: true },
  name: { attribute: true, type: String, reflect: true }
});
define(Accordion.tagName, Accordion);
function addEventListener(element, event, callback, options = {}) {
  element.addEventListener(event, callback, options);
  return () => {
    element.removeEventListener(event, callback, options);
  };
}
function isObjectLike(value) {
  const type = typeof value;
  return value != null && type === "object";
}
function hasProperty(property, value) {
  return isObjectLike(value) && property in value;
}
const TAG_NAME$1 = "cta-accordion-group";
class AccordionGroup extends BaseComponent {
  constructor() {
    super(...arguments);
    this.multipleOpen = false;
    this.removeListener = null;
    this.currentlyOpen = null;
  }
  connectedCallback() {
    this.removeListener = addEventListener(this, "click", this.onClick.bind(this));
  }
  disconnectedCallback() {
    var _a;
    super.disconnectedCallback();
    this.currentlyOpen = null;
    (_a = this.removeListener) == null ? void 0 : _a.call(this);
  }
  onClick(event) {
    if (this.multipleOpen) {
      return;
    }
    const target = event.target instanceof HTMLElement ? event.target : null;
    if (!target) {
      return;
    }
    if (target === this.currentlyOpen) {
      return;
    }
    if (this.currentlyOpen && hasProperty("open", this.currentlyOpen)) {
      this.currentlyOpen.open = false;
    }
    this.currentlyOpen = target;
  }
  render() {
    if (this.__off__) {
      return $`${this.innerHTML}`;
    }
    return $`
      <slot></slot>
    `;
  }
}
AccordionGroup.tagName = TAG_NAME$1;
AccordionGroup.styles = r$4`
    :host {
      display: contents;
    }
  `;
AccordionGroup.properties = __spreadProps(__spreadValues({}, BaseComponent.properties), {
  multipleOpen: { attribute: true, type: Boolean, reflect: true }
});
define(AccordionGroup.tagName, AccordionGroup);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class e extends i$1 {
  constructor(i) {
    if (super(i), this.it = w, i.type !== t$1.CHILD)
      throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(r2) {
    if (r2 === w || r2 == null)
      return this.ft = void 0, this.it = r2;
    if (r2 === b)
      return r2;
    if (typeof r2 != "string")
      throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (r2 === this.it)
      return this.ft;
    this.it = r2;
    const s2 = [r2];
    return s2.raw = s2, this.ft = { _$litType$: this.constructor.resultType, strings: s2, values: [] };
  }
}
e.directiveName = "unsafeHTML", e.resultType = 1;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class t extends e {
}
t.directiveName = "unsafeSVG", t.resultType = 2;
const o = e$3(t);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const l = (l2) => l2 != null ? l2 : w;
const map = /* @__PURE__ */ new Map();
map.set("chevron-down", Object.freeze({
  id: "chevron-down",
  viewBox: "0 0 24 24",
  markup: `
  <path fill="currentcolor" d="M16.6 8.6 12 13.2 7.4 8.6 6 10l6 6 6-6z"></path>
`
}));
map.set("close-circle", Object.freeze({
  id: "null",
  viewBox: "0 0 252 252",
  markup: `
  <path d="M126 0a126 126 0 1 0 0 252 126 126 0 0 0 0-252zm0 234a108 108 0 1 1 0-216 108 108 0 0 1 0 216z"></path>
  <path d="M165 87c-4-3-10-3-13 0l-26 26-26-26a9 9 0 1 0-13 13l26 26-26 26a9 9 0 1 0 13 13l26-26 26 26a9 9 0 0 0 13 0c3-4 3-10 0-13l-26-26 26-26c3-3 3-9 0-13z"></path>
`
}));
const iconsMap = {
  get(key) {
    return map.get(key);
  }
};
const TAG_NAME = "cta-icon";
const getIconProps = (name) => iconsMap.get(name);
class Icon extends BaseComponent {
  constructor() {
    super(...arguments);
    this.name = "";
    this.inline = false;
  }
  getIcon() {
    return getIconProps(this.name);
  }
  render() {
    const icon = this.getIcon();
    return $`
      <svg id=${icon == null ? void 0 : icon.id} viewBox=${icon == null ? void 0 : icon.viewBox} class=${l(this.class)} width=${l(this.width)} height=${l(this.height)}>
        ${o(icon == null ? void 0 : icon.markup)}
      </svg>
    `;
  }
}
Icon.tagName = TAG_NAME;
Icon.styles = r$4`
    :host {
      display: flex;
    }
    :host([inline]) {
      display: inline-flex;
    }
  `;
Icon.properties = {
  name: { attribute: true, type: String, reflect: true },
  inline: { attribute: true, type: Boolean, reflect: true },
  class: { attribute: true, type: String, reflect: true },
  width: { attribute: true, type: Number, reflect: true },
  height: { attribute: true, type: Number, reflect: true }
};
define(Icon.tagName, Icon);
((window2) => {
  if (typeof window2.document === "undefined") {
    return;
  }
  const { body } = window2.document;
  const theme2 = window2.document.createElement(CtaTheme.tagName);
  body.prepend(theme2);
  body.classList.add("cta-components-loaded");
})(globalThis);
export { Accordion, AccordionGroup, Icon };
