const __defProp = Object.defineProperty;
const __defProps = Object.defineProperties;
const __getOwnPropDescs = Object.getOwnPropertyDescriptors;
const __getOwnPropSymbols = Object.getOwnPropertySymbols;
const __hasOwnProp = Object.prototype.hasOwnProperty;
const __propIsEnum = Object.prototype.propertyIsEnumerable;
const __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
const __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {})) {
    if (__hasOwnProp.call(b2, prop)) {
      __defNormalProp(a2, prop, b2[prop]);
    }
  }
  if (__getOwnPropSymbols) {
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop)) {
        __defNormalProp(a2, prop, b2[prop]);
      }
    }
  }
  return a2;
};
const __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
const tippy$1 = /* @__PURE__ */ (() => '.tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;white-space:normal;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:"";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}\n')();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3 = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && 'adoptedStyleSheets' in Document.prototype && 'replace' in CSSStyleSheet.prototype; const e$6 = Symbol(); const n$5 = /* @__PURE__ */ new Map();
class s$3 {
  constructor(t2, n2) {
    if (this._$cssResult$ = true, n2 !== e$6) {
      throw Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
    }
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
const o$7 = (t2) => new s$3(typeof t2 == 'string' ? t2 : t2 + '', e$6); const r$4 = (t2, ...n2) => {
  const o2 = t2.length === 1 ? t2[0] : n2.reduce((e2, n3, s2) => e2 + ((t3) => {
    if (t3._$cssResult$ === true) {
      return t3.cssText;
    }
    if (typeof t3 == 'number') {
      return t3;
    }
    throw Error('Value passed to \'css\' function must be a \'css\' function result: ' + t3 + '. Use \'unsafeCSS\' to pass non-literal values, but take care to ensure page security.');
  })(n3) + t2[s2 + 1], t2[0]);
  return new s$3(o2, e$6);
}; const i$3 = (e2, n2) => {
  t$3 ? e2.adoptedStyleSheets = n2.map((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet) : n2.forEach((t2) => {
    const n3 = document.createElement('style'); const s2 = window.litNonce;
    s2 !== void 0 && n3.setAttribute('nonce', s2), n3.textContent = t2.cssText, e2.appendChild(n3);
  });
}; const S$1 = t$3 ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
  let e2 = '';
  for (const n2 of t3.cssRules) {
    e2 += n2.cssText;
  }
  return o$7(e2);
})(t2) : t2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let s$2;
const e$5 = window.trustedTypes; const r$3 = e$5 ? e$5.emptyScript : ''; const h$3 = window.reactiveElementPolyfillSupport; const o$6 = {toAttribute(t2, i) {
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
}}; const n$4 = (t2, i) => i !== t2 && (i == i || t2 == t2); const l$4 = {attribute: true, type: String, converter: o$6, reflect: false, hasChanged: n$4};
class a$1 extends HTMLElement {
  constructor() {
    super(), this._$Et = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$Ei = null, this.o();
  }
  static addInitializer(t2) {
    let i;
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
      const s2 = typeof t2 == 'symbol' ? Symbol() : '__' + t2; const e2 = this.getPropertyDescriptor(t2, s2, i);
      e2 !== void 0 && Object.defineProperty(this.prototype, t2, e2);
    }
  }
  static getPropertyDescriptor(t2, i, s2) {
    return {get() {
      return this[i];
    }, set(e2) {
      const r2 = this[t2];
      this[i] = e2, this.requestUpdate(t2, r2, s2);
    }, configurable: true, enumerable: true};
  }
  static getPropertyOptions(t2) {
    return this.elementProperties.get(t2) || l$4;
  }
  static finalize() {
    if (this.hasOwnProperty('finalized')) {
      return false;
    }
    this.finalized = true;
    const t2 = Object.getPrototypeOf(this);
    if (t2.finalize(), this.elementProperties = new Map(t2.elementProperties), this._$Eu = /* @__PURE__ */ new Map(), this.hasOwnProperty('properties')) {
      const t3 = this.properties; const i = [...Object.getOwnPropertyNames(t3), ...Object.getOwnPropertySymbols(t3)];
      for (const s2 of i) {
        this.createProperty(s2, t3[s2]);
      }
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(i) {
    const s2 = [];
    if (Array.isArray(i)) {
      const e2 = new Set(i.flat(1 / 0).reverse());
      for (const i2 of e2) {
        s2.unshift(S$1(i2));
      }
    } else {
      i !== void 0 && s2.push(S$1(i));
    }
    return s2;
  }
  static _$Eh(t2, i) {
    const s2 = i.attribute;
    return s2 === false ? void 0 : typeof s2 == 'string' ? s2 : typeof t2 == 'string' ? t2.toLowerCase() : void 0;
  }
  o() {
    let t2;
    this._$Ep = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$Em(), this.requestUpdate(), (t2 = this.constructor.l) === null || t2 === void 0 || t2.forEach((t3) => t3(this));
  }
  addController(t2) {
    let i; let s2;
    ((i = this._$Eg) !== null && i !== void 0 ? i : this._$Eg = []).push(t2), this.renderRoot !== void 0 && this.isConnected && ((s2 = t2.hostConnected) === null || s2 === void 0 || s2.call(t2));
  }
  removeController(t2) {
    let i;
    (i = this._$Eg) === null || i === void 0 || i.splice(this._$Eg.indexOf(t2) >>> 0, 1);
  }
  _$Em() {
    this.constructor.elementProperties.forEach((t2, i) => {
      this.hasOwnProperty(i) && (this._$Et.set(i, this[i]), delete this[i]);
    });
  }
  createRenderRoot() {
    let t2;
    const s2 = (t2 = this.shadowRoot) !== null && t2 !== void 0 ? t2 : this.attachShadow(this.constructor.shadowRootOptions);
    return i$3(s2, this.constructor.elementStyles), s2;
  }
  connectedCallback() {
    let t2;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t2 = this._$Eg) === null || t2 === void 0 || t2.forEach((t3) => {
      let i;
      return (i = t3.hostConnected) === null || i === void 0 ? void 0 : i.call(t3);
    });
  }
  enableUpdating(t2) {
  }
  disconnectedCallback() {
    let t2;
    (t2 = this._$Eg) === null || t2 === void 0 || t2.forEach((t3) => {
      let i;
      return (i = t3.hostDisconnected) === null || i === void 0 ? void 0 : i.call(t3);
    });
  }
  attributeChangedCallback(t2, i, s2) {
    this._$AK(t2, s2);
  }
  _$ES(t2, i, s2 = l$4) {
    let e2; let r2;
    const h2 = this.constructor._$Eh(t2, s2);
    if (h2 !== void 0 && s2.reflect === true) {
      const n2 = ((r2 = (e2 = s2.converter) === null || e2 === void 0 ? void 0 : e2.toAttribute) !== null && r2 !== void 0 ? r2 : o$6.toAttribute)(i, s2.type);
      this._$Ei = t2, n2 == null ? this.removeAttribute(h2) : this.setAttribute(h2, n2), this._$Ei = null;
    }
  }
  _$AK(t2, i) {
    let s2; let e2; let r2;
    const h2 = this.constructor; const n2 = h2._$Eu.get(t2);
    if (n2 !== void 0 && this._$Ei !== n2) {
      const t3 = h2.getPropertyOptions(n2); const l2 = t3.converter; const a2 = (r2 = (e2 = (s2 = l2) === null || s2 === void 0 ? void 0 : s2.fromAttribute) !== null && e2 !== void 0 ? e2 : typeof l2 == 'function' ? l2 : null) !== null && r2 !== void 0 ? r2 : o$6.fromAttribute;
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
    let t2;
    if (!this.isUpdatePending) {
      return;
    }
    this.hasUpdated, this._$Et && (this._$Et.forEach((t3, i2) => this[i2] = t3), this._$Et = void 0);
    let i = false;
    const s2 = this._$AL;
    try {
      i = this.shouldUpdate(s2), i ? (this.willUpdate(s2), (t2 = this._$Eg) === null || t2 === void 0 || t2.forEach((t3) => {
        let i2;
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
    let i;
    (i = this._$Eg) === null || i === void 0 || i.forEach((t3) => {
      let i2;
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
a$1.finalized = true, a$1.elementProperties = /* @__PURE__ */ new Map(), a$1.elementStyles = [], a$1.shadowRootOptions = {mode: 'open'}, h$3 == null || h$3({ReactiveElement: a$1}), ((s$2 = globalThis.reactiveElementVersions) !== null && s$2 !== void 0 ? s$2 : globalThis.reactiveElementVersions = []).push('1.3.2');
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let t$2;
const i$2 = globalThis.trustedTypes; const s$1 = i$2 ? i$2.createPolicy('lit-html', {createHTML: (t2) => t2}) : void 0; const e$4 = `lit$${(Math.random() + '').slice(9)}$`; const o$5 = '?' + e$4; const n$3 = `<${o$5}>`; const l$3 = document; const h$2 = (t2 = '') => l$3.createComment(t2); const r$2 = (t2) => t2 === null || typeof t2 != 'object' && typeof t2 != 'function'; const d$1 = Array.isArray; const u = (t2) => {
  let i;
  return d$1(t2) || typeof ((i = t2) === null || i === void 0 ? void 0 : i[Symbol.iterator]) == 'function';
}; const c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g; const v = /-->/g; const a = />/g; const f = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g; const _ = /'/g; const m = /"/g; const g = /^(?:script|style|textarea|title)$/i; const p = (t2) => (i, ...s2) => ({_$litType$: t2, strings: i, values: s2}); const $ = p(1); const b = Symbol.for('lit-noChange'); const w = Symbol.for('lit-nothing'); const T = /* @__PURE__ */ new WeakMap(); const x = (t2, i, s2) => {
  let e2; let o2;
  const n2 = (e2 = s2 == null ? void 0 : s2.renderBefore) !== null && e2 !== void 0 ? e2 : i;
  let l2 = n2._$litPart$;
  if (l2 === void 0) {
    const t3 = (o2 = s2 == null ? void 0 : s2.renderBefore) !== null && o2 !== void 0 ? o2 : null;
    n2._$litPart$ = l2 = new N(i.insertBefore(h$2(), t3), t3, void 0, s2 != null ? s2 : {});
  }
  return l2._$AI(t2), l2;
}; const A = l$3.createTreeWalker(l$3, 129, null, false); const C = (t2, i) => {
  const o2 = t2.length - 1; const l2 = [];
  let h2; let r2 = i === 2 ? '<svg>' : ''; let d2 = c;
  for (let i2 = 0; i2 < o2; i2++) {
    const s2 = t2[i2];
    let o3; let u3; let p2 = -1; let $2 = 0;
    for (; $2 < s2.length && (d2.lastIndex = $2, u3 = d2.exec(s2), u3 !== null); ) {
      $2 = d2.lastIndex, d2 === c ? u3[1] === '!--' ? d2 = v : u3[1] !== void 0 ? d2 = a : u3[2] !== void 0 ? (g.test(u3[2]) && (h2 = RegExp('</' + u3[2], 'g')), d2 = f) : u3[3] !== void 0 && (d2 = f) : d2 === f ? u3[0] === '>' ? (d2 = h2 != null ? h2 : c, p2 = -1) : u3[1] === void 0 ? p2 = -2 : (p2 = d2.lastIndex - u3[2].length, o3 = u3[1], d2 = u3[3] === void 0 ? f : u3[3] === '"' ? m : _) : d2 === m || d2 === _ ? d2 = f : d2 === v || d2 === a ? d2 = c : (d2 = f, h2 = void 0);
    }
    const y = d2 === f && t2[i2 + 1].startsWith('/>') ? ' ' : '';
    r2 += d2 === c ? s2 + n$3 : p2 >= 0 ? (l2.push(o3), s2.slice(0, p2) + '$lit$' + s2.slice(p2) + e$4 + y) : s2 + e$4 + (p2 === -2 ? (l2.push(void 0), i2) : y);
  }
  const u2 = r2 + (t2[o2] || '<?>') + (i === 2 ? '</svg>' : '');
  if (!Array.isArray(t2) || !t2.hasOwnProperty('raw')) {
    throw Error('invalid template strings array');
  }
  return [s$1 !== void 0 ? s$1.createHTML(u2) : u2, l2];
};
class E {
  constructor({strings: t2, _$litType$: s2}, n2) {
    let l2;
    this.parts = [];
    let r2 = 0; let d2 = 0;
    const u2 = t2.length - 1; const c2 = this.parts; const [v2, a2] = C(t2, s2);
    if (this.el = E.createElement(v2, n2), A.currentNode = this.el.content, s2 === 2) {
      const t3 = this.el.content; const i = t3.firstChild;
      i.remove(), t3.append(...i.childNodes);
    }
    for (; (l2 = A.nextNode()) !== null && c2.length < u2; ) {
      if (l2.nodeType === 1) {
        if (l2.hasAttributes()) {
          const t3 = [];
          for (const i of l2.getAttributeNames()) {
            if (i.endsWith('$lit$') || i.startsWith(e$4)) {
              const s3 = a2[d2++];
              if (t3.push(i), s3 !== void 0) {
                const t4 = l2.getAttribute(s3.toLowerCase() + '$lit$').split(e$4); const i2 = /([.?@])?(.*)/.exec(s3);
                c2.push({type: 1, index: r2, name: i2[2], strings: t4, ctor: i2[1] === '.' ? M : i2[1] === '?' ? H : i2[1] === '@' ? I : S});
              } else {
                c2.push({type: 6, index: r2});
              }
            }
          }
          for (const i of t3) {
            l2.removeAttribute(i);
          }
        }
        if (g.test(l2.tagName)) {
          const t3 = l2.textContent.split(e$4); const s3 = t3.length - 1;
          if (s3 > 0) {
            l2.textContent = i$2 ? i$2.emptyScript : '';
            for (let i = 0; i < s3; i++) {
              l2.append(t3[i], h$2()), A.nextNode(), c2.push({type: 2, index: ++r2});
            }
            l2.append(t3[s3], h$2());
          }
        }
      } else if (l2.nodeType === 8) {
        if (l2.data === o$5) {
          c2.push({type: 2, index: r2});
        } else {
          let t3 = -1;
          for (; (t3 = l2.data.indexOf(e$4, t3 + 1)) !== -1; ) {
            c2.push({type: 7, index: r2}), t3 += e$4.length - 1;
          }
        }
      }
      r2++;
    }
  }
  static createElement(t2, i) {
    const s2 = l$3.createElement('template');
    return s2.innerHTML = t2, s2;
  }
}
function P(t2, i, s2 = t2, e2) {
  let o2; let n2; let l2; let h2;
  if (i === b) {
    return i;
  }
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
    let i;
    const {el: {content: s2}, parts: e2} = this._$AD; const o2 = ((i = t2 == null ? void 0 : t2.creationScope) !== null && i !== void 0 ? i : l$3).importNode(s2, true);
    A.currentNode = o2;
    let n2 = A.nextNode(); let h2 = 0; let r2 = 0; let d2 = e2[0];
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
    for (const s2 of this.v) {
      s2 !== void 0 && (s2.strings !== void 0 ? (s2._$AI(t2, s2, i), i += s2.strings.length - 2) : s2._$AI(t2[i])), i++;
    }
  }
}
class N {
  constructor(t2, i, s2, e2) {
    let o2;
    this.type = 2, this._$AH = w, this._$AN = void 0, this._$AA = t2, this._$AB = i, this._$AM = s2, this.options = e2, this._$Cg = (o2 = e2 == null ? void 0 : e2.isConnected) === null || o2 === void 0 || o2;
  }
  get _$AU() {
    let t2; let i;
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
    t2 = P(this, t2, i), r$2(t2) ? t2 === w || t2 == null || t2 === '' ? (this._$AH !== w && this._$AR(), this._$AH = w) : t2 !== this._$AH && t2 !== b && this.$(t2) : t2._$litType$ !== void 0 ? this.T(t2) : t2.nodeType !== void 0 ? this.k(t2) : u(t2) ? this.S(t2) : this.$(t2);
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
    let i;
    const {values: s2, _$litType$: e2} = t2; const o2 = typeof e2 == 'number' ? this._$AC(t2) : (e2.el === void 0 && (e2.el = E.createElement(e2.h, this.options)), e2);
    if (((i = this._$AH) === null || i === void 0 ? void 0 : i._$AD) === o2) {
      this._$AH.m(s2);
    } else {
      const t3 = new V(o2, this); const i2 = t3.p(this.options);
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
    let s2; let e2 = 0;
    for (const o2 of t2) {
e2 === i.length ? i.push(s2 = new N(this.M(h$2()), this.M(h$2()), this, this.options)) : s2 = i[e2], s2._$AI(o2), e2++;
    }
    e2 < i.length && (this._$AR(s2 && s2._$AB.nextSibling, e2), i.length = e2);
  }
  _$AR(t2 = this._$AA.nextSibling, i) {
    let s2;
    for ((s2 = this._$AP) === null || s2 === void 0 || s2.call(this, false, true, i); t2 && t2 !== this._$AB; ) {
      const i2 = t2.nextSibling;
      t2.remove(), t2 = i2;
    }
  }
  setConnected(t2) {
    let i;
    this._$AM === void 0 && (this._$Cg = t2, (i = this._$AP) === null || i === void 0 || i.call(this, t2));
  }
}
class S {
  constructor(t2, i, s2, e2, o2) {
    this.type = 1, this._$AH = w, this._$AN = void 0, this.element = t2, this.name = i, this._$AM = e2, this.options = o2, s2.length > 2 || s2[0] !== '' || s2[1] !== '' ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = w;
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
    if (o2 === void 0) {
      t2 = P(this, t2, i, 0), n2 = !r$2(t2) || t2 !== this._$AH && t2 !== b, n2 && (this._$AH = t2);
    } else {
      const e3 = t2;
      let l2; let h2;
      for (t2 = o2[0], l2 = 0; l2 < o2.length - 1; l2++) {
        h2 = P(this, e3[s2 + l2], i, l2), h2 === b && (h2 = this._$AH[l2]), n2 || (n2 = !r$2(h2) || h2 !== this._$AH[l2]), h2 === w ? t2 = w : t2 !== w && (t2 += (h2 != null ? h2 : '') + o2[l2 + 1]), this._$AH[l2] = h2;
      }
    }
    n2 && !e2 && this.C(t2);
  }
  C(t2) {
    t2 === w ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 != null ? t2 : '');
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
const k = i$2 ? i$2.emptyScript : '';
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
    let s2;
    if ((t2 = (s2 = P(this, t2, i, 0)) !== null && s2 !== void 0 ? s2 : w) === b) {
      return;
    }
    const e2 = this._$AH; const o2 = t2 === w && e2 !== w || t2.capture !== e2.capture || t2.once !== e2.once || t2.passive !== e2.passive; const n2 = t2 !== w && (e2 === w || o2);
    o2 && this.element.removeEventListener(this.name, this, e2), n2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    let i; let s2;
    typeof this._$AH == 'function' ? this._$AH.call((s2 = (i = this.options) === null || i === void 0 ? void 0 : i.host) !== null && s2 !== void 0 ? s2 : this.element, t2) : this._$AH.handleEvent(t2);
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
z == null || z(E, N), ((t$2 = globalThis.litHtmlVersions) !== null && t$2 !== void 0 ? t$2 : globalThis.litHtmlVersions = []).push('2.2.5');
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let l$2; let o$4;
class s extends a$1 {
  constructor() {
    super(...arguments), this.renderOptions = {host: this}, this._$Dt = void 0;
  }
  createRenderRoot() {
    let t2; let e2;
    const i = super.createRenderRoot();
    return (t2 = (e2 = this.renderOptions).renderBefore) !== null && t2 !== void 0 || (e2.renderBefore = i.firstChild), i;
  }
  update(t2) {
    const i = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Dt = x(i, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    let t2;
    super.connectedCallback(), (t2 = this._$Dt) === null || t2 === void 0 || t2.setConnected(true);
  }
  disconnectedCallback() {
    let t2;
    super.disconnectedCallback(), (t2 = this._$Dt) === null || t2 === void 0 || t2.setConnected(false);
  }
  render() {
    return b;
  }
}
s.finalized = true, s._$litElement$ = true, (l$2 = globalThis.litElementHydrateSupport) === null || l$2 === void 0 || l$2.call(globalThis, {LitElement: s});
const n$2 = globalThis.litElementPolyfillSupport;
n$2 == null || n$2({LitElement: s});
((o$4 = globalThis.litElementVersions) !== null && o$4 !== void 0 ? o$4 : globalThis.litElementVersions = []).push('3.2.0');
class BaseComponent extends s {
  constructor() {
    super(...arguments);
    this.__off__ = false;
  }
}
BaseComponent.shadowRootOptions = __spreadProps(__spreadValues({}, s.shadowRootOptions), {
  mode: 'open',
  delegatesFocus: true,
});
BaseComponent.properties = {
  __off__: {attribute: true, type: Boolean, reflect: true},
};
const colors = r$4`
  :root {
    /* Neutrals */
    --neutral-0: #000000; /* 0 */
    --neutral-26: #3d3d3d;  /* 25.8 */
    --neutral-50: #767676;  /* 49.6 */
    --neutral-80: #c5c5c5;  /* 79.5 */
    --neutral-88: #dddddd;  /* 88.1 */
    --neutral-94: #eeeeee;  /* 94.1 */
    --neutral-100: #ffffff; /* 100 */

    
    /* Greens */
    --green-80: #87dc00; /* 79.8 */
  }
`;
const baseVariables = r$4`
  ${colors}
`;
function define(name, constructor, options) {
  if (typeof window !== 'undefined') {
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
const theme$1 = r$4`
  :root {
    --accordion-trigger-border-color: var(--neutral-50);
    --accordion-trigger-open-background-color: var(--neutral-100);
  }
  :root .dark-mode {
    --accordion-trigger-border-color: var(--neutral-50);
    --accordion-trigger-open-background-color: var(--neutral-26);
  }
`;
const tooltipStyles = r$4` 
  .tippy-box {
    color: var(--neutral-0);
    background-color: var(--tooltip-background-color);
    padding: 0.5em;
    font-size: 0.63rem;
    font-weight: 400;
    line-height: 1.26;
  }

  .tippy-box .tippy-arrow {
    color: var(--tooltip-background-color);
  }
`;
const theme = r$4`
  :root {
    --tooltip-background-color: var(--green-80);
  }
  :root .dark-mode {
    --tooltip-background-color: var(--green-80);
  }

  ${tooltipStyles}
`;
const components = r$4`
  ${theme$1}
  ${theme}
`;
const TAG_NAME$4 = 'cta-theme';
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
CtaTheme.tagName = TAG_NAME$4;
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
const t$1 = {ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6}; const e$3 = (t2) => (...e2) => ({_$litDirective$: t2, values: e2});
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
  let s2; let o2;
  const n2 = i._$AN;
  if (n2 === void 0) {
    return false;
  }
  for (const i2 of n2) {
    (o2 = (s2 = i2)._$AO) === null || o2 === void 0 || o2.call(s2, t2, false), e$2(i2, t2);
  }
  return true;
}; const o$3 = (i) => {
  let t2; let s2;
  do {
    if ((t2 = i._$AM) === void 0) {
      break;
    }
    s2 = t2._$AN, s2.delete(i), i = t2;
  } while ((s2 == null ? void 0 : s2.size) === 0);
}; const n$1 = (i) => {
  for (let t2; t2 = i._$AM; i = t2) {
    let s2 = t2._$AN;
    if (s2 === void 0) {
      t2._$AN = s2 = /* @__PURE__ */ new Set();
    } else if (s2.has(i)) {
      break;
    }
    s2.add(i), l$1(t2);
  }
};
function r(i) {
  this._$AN !== void 0 ? (o$3(this), this._$AM = i, n$1(this)) : this._$AM = i;
}
function h$1(i, t2 = false, s2 = 0) {
  const n2 = this._$AH; const r2 = this._$AN;
  if (r2 !== void 0 && r2.size !== 0) {
    if (t2) {
      if (Array.isArray(n2)) {
        for (let i2 = s2; i2 < n2.length; i2++)
          {e$2(n2[i2], false), o$3(n2[i2]);}
      } else {
        n2 != null && (e$2(n2, false), o$3(n2));
      }
    } else {
      e$2(this, i);
    }
  }
}
const l$1 = (i) => {
  let t2; let e2; let o2; let n2;
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
    let s2; let n2;
    i !== this.isConnected && (this.isConnected = i, i ? (s2 = this.reconnected) === null || s2 === void 0 || s2.call(this) : (n2 = this.disconnected) === null || n2 === void 0 || n2.call(this)), t2 && (e$2(this, i), o$3(this));
  }
  setValue(t2) {
    if (r$1(this._$Ct)) {
      this._$Ct._$AI(t2, this);
    } else {
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
const h = /* @__PURE__ */ new WeakMap(); const n = e$3(class extends d {
  render(t2) {
    return w;
  }
  update(t2, [s2]) {
    let e2;
    const o2 = s2 !== this.U;
    return o2 && this.U !== void 0 && this.ot(void 0), (o2 || this.rt !== this.lt) && (this.U = s2, this.ht = (e2 = t2.options) === null || e2 === void 0 ? void 0 : e2.host, this.ot(this.lt = t2.element)), w;
  }
  ot(i) {
    let t2;
    if (typeof this.U == 'function') {
      const s2 = (t2 = this.ht) !== null && t2 !== void 0 ? t2 : globalThis;
      let e2 = h.get(s2);
      e2 === void 0 && (e2 = /* @__PURE__ */ new WeakMap(), h.set(s2, e2)), e2.get(this.U) !== void 0 && this.U.call(this.ht, void 0), e2.set(this.U, i), i !== void 0 && this.U.call(this.ht, i);
    } else {
      this.U.value = i;
    }
  }
  get rt() {
    let i; let t2; let s2;
    return typeof this.U == 'function' ? (t2 = h.get((i = this.ht) !== null && i !== void 0 ? i : globalThis)) === null || t2 === void 0 ? void 0 : t2.get(this.U) : (s2 = this.U) === null || s2 === void 0 ? void 0 : s2.value;
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
    let i;
    if (super(t2), t2.type !== t$1.ATTRIBUTE || t2.name !== 'class' || ((i = t2.strings) === null || i === void 0 ? void 0 : i.length) > 2) {
      throw Error('`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.');
    }
  }
  render(t2) {
    return ' ' + Object.keys(t2).filter((i) => t2[i]).join(' ') + ' ';
  }
  update(i, [s2]) {
    let r2; let o2;
    if (this.et === void 0) {
      this.et = /* @__PURE__ */ new Set(), i.strings !== void 0 && (this.st = new Set(i.strings.join(' ').split(/\s/).filter((t2) => t2 !== '')));
      for (const t2 in s2) {
        s2[t2] && !((r2 = this.st) === null || r2 === void 0 ? void 0 : r2.has(t2)) && this.et.add(t2);
      }
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
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);
    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }
  return getRandomValues(rnds8);
}
const REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}
const byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).substr(1));
}
function stringify(arr) {
  const offset2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  const uuid = (byteToHex[arr[offset2 + 0]] + byteToHex[arr[offset2 + 1]] + byteToHex[arr[offset2 + 2]] + byteToHex[arr[offset2 + 3]] + '-' + byteToHex[arr[offset2 + 4]] + byteToHex[arr[offset2 + 5]] + '-' + byteToHex[arr[offset2 + 6]] + byteToHex[arr[offset2 + 7]] + '-' + byteToHex[arr[offset2 + 8]] + byteToHex[arr[offset2 + 9]] + '-' + byteToHex[arr[offset2 + 10]] + byteToHex[arr[offset2 + 11]] + byteToHex[arr[offset2 + 12]] + byteToHex[arr[offset2 + 13]] + byteToHex[arr[offset2 + 14]] + byteToHex[arr[offset2 + 15]]).toLowerCase();
  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }
  return uuid;
}
function v4(options, buf, offset2) {
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset2 = offset2 || 0;
    for (let i = 0; i < 16; ++i) {
      buf[offset2 + i] = rnds[i];
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
const TAG_NAME$3 = 'cta-accordion';
class Accordion extends BaseComponent {
  constructor() {
    super();
    this.open = false;
    this.name = '';
    this.uuid = '';
    this.panelRef = e$1();
    this.uuid = v4();
  }
  firstUpdated() {
    if (this.name.trim() === '') {
      throw new Error(`Accordion name attribute is required.`);
    }
  }
  updated(changedProperties) {
    if (changedProperties.has('open')) {
      this.handleIsOpenClass();
      this.togglePanel();
    }
  }
  handleIsOpenClass() {
    const className = 'is-open';
    const {open} = this;
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
    const sectionHeight = element.scrollHeight;
    const elementTransition = element.style.transition;
    element.style.transition = '';
    requestAnimationFrame(function() {
      element.style.height = `${sectionHeight}px`;
      element.style.transition = elementTransition;
      requestAnimationFrame(function() {
        element.classList.remove('panel-open');
        element.style.height = '0px';
      });
    });
    element.setAttribute('data-collapsed', 'true');
  }
  expandPanel(element) {
    const sectionHeight = element.scrollHeight;
    element.style.height = sectionHeight + 'px';
    element.classList.add('panel-open');
    element.setAttribute('data-collapsed', 'false');
  }
  onClick() {
    this.open = !this.open;
  }
  render() {
    const classes = {open: this.open};
    if (this.__off__) {
      return $`${this.innerHTML}`;
    }
    return $`
      <div data-name="accordion-trigger" @click=${this.onClick} aria-controls=${this.uuid} aria-expanded=${this.open}
        class=${o$1(classes)}>
        <button type="button" data-name="accordion-trigger-content">
          ${this.name}
        </button>
        <cta-icon data-name="accordion-trigger-icon" name="chevron-down" width="24" height="24"></cta-icon>
      </div>
      
      <div data-name="accordion-panel" id=${this.uuid} ${n(this.panelRef)} aria-labelledby=${this.name}>
        <slot></slot>
      </div>
    `;
  }
}
Accordion.tagName = TAG_NAME$3;
Accordion.styles = [accordionStyles];
Accordion.properties = __spreadProps(__spreadValues({}, BaseComponent.properties), {
  open: {attribute: true, type: Boolean, reflect: true},
  name: {attribute: true, type: String, reflect: true},
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
  return value != null && type === 'object';
}
function hasProperty(property, value) {
  return isObjectLike(value) && property in value;
}
const TAG_NAME$2 = 'cta-accordion-group';
class AccordionGroup extends BaseComponent {
  constructor() {
    super(...arguments);
    this.multipleOpen = false;
    this.removeListener = null;
    this.currentlyOpen = null;
  }
  connectedCallback() {
    this.removeListener = addEventListener(this, 'click', this.onClick.bind(this));
  }
  disconnectedCallback() {
    let _a;
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
    if (this.currentlyOpen && hasProperty('open', this.currentlyOpen)) {
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
AccordionGroup.tagName = TAG_NAME$2;
AccordionGroup.styles = r$4`
    :host {
      display: contents;
    }
  `;
AccordionGroup.properties = __spreadProps(__spreadValues({}, BaseComponent.properties), {
  multipleOpen: {attribute: true, type: Boolean, reflect: true},
});
define(AccordionGroup.tagName, AccordionGroup);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class e extends i$1 {
  constructor(i) {
    if (super(i), this.it = w, i.type !== t$1.CHILD) {
      throw Error(this.constructor.directiveName + '() can only be used in child bindings');
    }
  }
  render(r2) {
    if (r2 === w || r2 == null) {
      return this.ft = void 0, this.it = r2;
    }
    if (r2 === b) {
      return r2;
    }
    if (typeof r2 != 'string') {
      throw Error(this.constructor.directiveName + '() called with a non-string value');
    }
    if (r2 === this.it) {
      return this.ft;
    }
    this.it = r2;
    const s2 = [r2];
    return s2.raw = s2, this.ft = {_$litType$: this.constructor.resultType, strings: s2, values: []};
  }
}
e.directiveName = 'unsafeHTML', e.resultType = 1;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class t extends e {
}
t.directiveName = 'unsafeSVG', t.resultType = 2;
const o = e$3(t);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const l = (l2) => l2 != null ? l2 : w;
const map = /* @__PURE__ */ new Map();
map.set('chevron-down', Object.freeze({
  id: 'chevron-down',
  viewBox: '0 0 24 24',
  markup: `
  <path fill="currentcolor" d="M16.6 8.6 12 13.2 7.4 8.6 6 10l6 6 6-6z"></path>
`,
}));
map.set('close-circle', Object.freeze({
  id: 'null',
  viewBox: '0 0 252 252',
  markup: `
  <path d="M126 0a126 126 0 1 0 0 252 126 126 0 0 0 0-252zm0 234a108 108 0 1 1 0-216 108 108 0 0 1 0 216z"></path>
  <path d="M165 87c-4-3-10-3-13 0l-26 26-26-26a9 9 0 1 0-13 13l26 26-26 26a9 9 0 1 0 13 13l26-26 26 26a9 9 0 0 0 13 0c3-4 3-10 0-13l-26-26 26-26c3-3 3-9 0-13z"></path>
`,
}));
const iconsMap = {
  get(key) {
    return map.get(key);
  },
};
const TAG_NAME$1 = 'cta-icon';
const getIconProps = (name) => iconsMap.get(name);
class Icon extends BaseComponent {
  constructor() {
    super(...arguments);
    this.name = '';
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
Icon.tagName = TAG_NAME$1;
Icon.styles = r$4`
    :host {
      display: flex;
    }
    :host([inline]) {
      display: inline-flex;
    }
  `;
Icon.properties = {
  name: {attribute: true, type: String, reflect: true},
  inline: {attribute: true, type: Boolean, reflect: true},
  class: {attribute: true, type: String, reflect: true},
  width: {attribute: true, type: Number, reflect: true},
  height: {attribute: true, type: Number, reflect: true},
};
define(Icon.tagName, Icon);
const top = 'top';
const bottom = 'bottom';
const right = 'right';
const left = 'left';
const auto = 'auto';
const basePlacements = [top, bottom, right, left];
const start = 'start';
const end = 'end';
const clippingParents = 'clippingParents';
const viewport = 'viewport';
const popper = 'popper';
const reference = 'reference';
const variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + '-' + start, placement + '-' + end]);
}, []);
const placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + '-' + start, placement + '-' + end]);
}, []);
const beforeRead = 'beforeRead';
const read = 'read';
const afterRead = 'afterRead';
const beforeMain = 'beforeMain';
const main = 'main';
const afterMain = 'afterMain';
const beforeWrite = 'beforeWrite';
const write = 'write';
const afterWrite = 'afterWrite';
const modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== '[object Window]') {
    const ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function isElement$1(node) {
  const OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  const OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }
  const OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function applyStyles(_ref) {
  const state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    const style = state.styles[name] || {};
    const attributes = state.attributes[name] || {};
    const element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      const value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? '' : value);
      }
    });
  });
}
function effect$2(_ref2) {
  const state = _ref2.state;
  const initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0',
    },
    arrow: {
      position: 'absolute',
    },
    reference: {},
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      const element = state.elements[name];
      const attributes = state.attributes[name] || {};
      const styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      const style = styleProperties.reduce(function(style2, property) {
        style2[property] = '';
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
const applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$2,
  requires: ['computeStyles'],
};
function getBasePlacement$1(placement) {
  return placement.split('-')[0];
}
const max = Math.max;
const min = Math.min;
const round = Math.round;
function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  const rect = element.getBoundingClientRect();
  let scaleX = 1;
  let scaleY = 1;
  if (isHTMLElement(element) && includeScale) {
    const offsetHeight = element.offsetHeight;
    const offsetWidth = element.offsetWidth;
    if (offsetWidth > 0) {
      scaleX = round(rect.width) / offsetWidth || 1;
    }
    if (offsetHeight > 0) {
      scaleY = round(rect.height) / offsetHeight || 1;
    }
  }
  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY,
  };
}
function getLayoutRect(element) {
  const clientRect = getBoundingClientRect(element);
  let width = element.offsetWidth;
  let height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height,
  };
}
function contains(parent, child) {
  const rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    let next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement$1(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }
  return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === 'fixed') {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  const isIE = navigator.userAgent.indexOf('Trident') !== -1;
  if (isIE && isHTMLElement(element)) {
    const elementCss = getComputedStyle(element);
    if (elementCss.position === 'fixed') {
      return null;
    }
  }
  let currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    const css = getComputedStyle(currentNode);
    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  const window2 = getWindow(element);
  let offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min2, value, max2) {
  const v2 = within(min2, value, max2);
  return v2 > max2 ? max2 : v2;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
const toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement,
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  let _state$modifiersData$;
  const state = _ref.state; const name = _ref.name; const options = _ref.options;
  const arrowElement = state.elements.arrow;
  const popperOffsets2 = state.modifiersData.popperOffsets;
  const basePlacement = getBasePlacement$1(state.placement);
  const axis = getMainAxisFromPlacement(basePlacement);
  const isVertical = [left, right].indexOf(basePlacement) >= 0;
  const len = isVertical ? 'height' : 'width';
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  const paddingObject = toPaddingObject(options.padding, state);
  const arrowRect = getLayoutRect(arrowElement);
  const minProp = axis === 'y' ? top : left;
  const maxProp = axis === 'y' ? bottom : right;
  const endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  const startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  const arrowOffsetParent = getOffsetParent(arrowElement);
  const clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  const centerToReference = endDiff / 2 - startDiff / 2;
  const min2 = paddingObject[minProp];
  const max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  const center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  const offset2 = within(min2, center, max2);
  const axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect$1(_ref2) {
  const state = _ref2.state; const options = _ref2.options;
  const _options$element = options.element; let arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
const arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$1,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow'],
};
function getVariation(placement) {
  return placement.split('-')[1];
}
const unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto',
};
function roundOffsetsByDPR(_ref) {
  const x2 = _ref.x; const y = _ref.y;
  const win = window;
  const dpr = win.devicePixelRatio || 1;
  return {
    x: round(x2 * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0,
  };
}
function mapToStyles(_ref2) {
  let _Object$assign2;
  const popper2 = _ref2.popper; const popperRect = _ref2.popperRect; const placement = _ref2.placement; const variation = _ref2.variation; const offsets = _ref2.offsets; const position = _ref2.position; const gpuAcceleration = _ref2.gpuAcceleration; const adaptive = _ref2.adaptive; const roundOffsets = _ref2.roundOffsets; const isFixed = _ref2.isFixed;
  const _offsets$x = offsets.x; let x2 = _offsets$x === void 0 ? 0 : _offsets$x; const _offsets$y = offsets.y; let y = _offsets$y === void 0 ? 0 : _offsets$y;
  const _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x2,
    y,
  }) : {
    x: x2,
    y,
  };
  x2 = _ref3.x;
  y = _ref3.y;
  const hasX = offsets.hasOwnProperty('x');
  const hasY = offsets.hasOwnProperty('y');
  let sideX = left;
  let sideY = top;
  const win = window;
  if (adaptive) {
    let offsetParent = getOffsetParent(popper2);
    let heightProp = 'clientHeight';
    let widthProp = 'clientWidth';
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      const offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      const offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
      x2 -= offsetX - popperRect.width;
      x2 *= gpuAcceleration ? 1 : -1;
    }
  }
  const commonStyles = Object.assign({
    position,
  }, adaptive && unsetSides);
  const _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x2,
    y,
  }) : {
    x: x2,
    y,
  };
  x2 = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    let _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? 'translate(' + x2 + 'px, ' + y + 'px)' : 'translate3d(' + x2 + 'px, ' + y + 'px, 0)', _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + 'px' : '', _Object$assign2[sideX] = hasX ? x2 + 'px' : '', _Object$assign2.transform = '', _Object$assign2));
}
function computeStyles(_ref5) {
  const state = _ref5.state; const options = _ref5.options;
  const _options$gpuAccelerat = options.gpuAcceleration; const gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat; const _options$adaptive = options.adaptive; const adaptive = _options$adaptive === void 0 ? true : _options$adaptive; const _options$roundOffsets = options.roundOffsets; const roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  const commonStyles = {
    placement: getBasePlacement$1(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === 'fixed',
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets,
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets,
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement,
  });
}
const computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {},
};
const passive = {
  passive: true,
};
function effect(_ref) {
  const state = _ref.state; const instance = _ref.instance; const options = _ref.options;
  const _options$scroll = options.scroll; const scroll = _options$scroll === void 0 ? true : _options$scroll; const _options$resize = options.resize; const resize = _options$resize === void 0 ? true : _options$resize;
  const window2 = getWindow(state.elements.popper);
  const scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener('resize', instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener('resize', instance.update, passive);
    }
  };
}
const eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {
  },
  effect,
  data: {},
};
const hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom',
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
const hash = {
  start: 'end',
  end: 'start',
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function getWindowScroll(node) {
  const win = getWindow(node);
  const scrollLeft = win.pageXOffset;
  const scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop,
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x2 = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x2 = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x2 + getWindowScrollBarX(element),
    y,
  };
}
function getDocumentRect(element) {
  let _element$ownerDocumen;
  const html = getDocumentElement(element);
  const winScroll = getWindowScroll(element);
  const body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  const width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  const height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  let x2 = -winScroll.scrollLeft + getWindowScrollBarX(element);
  const y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === 'rtl') {
    x2 += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x: x2,
    y,
  };
}
function isScrollParent(element) {
  const _getComputedStyle = getComputedStyle(element); const overflow = _getComputedStyle.overflow; const overflowX = _getComputedStyle.overflowX; const overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  let _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  const scrollParent = getScrollParent(element);
  const isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  const win = getWindow(scrollParent);
  const target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  const updatedList = list.concat(target);
  return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height,
  });
}
function getInnerBoundingClientRect(element) {
  const rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement$1(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  const clippingParents2 = listScrollParents(getParentNode(element));
  const canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  const clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement$1(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement$1(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
}
function getClippingRect(element, boundary, rootBoundary) {
  const mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  const clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  const firstClippingParent = clippingParents2[0];
  const clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    const rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function computeOffsets(_ref) {
  const reference2 = _ref.reference; const element = _ref.element; const placement = _ref.placement;
  const basePlacement = placement ? getBasePlacement$1(placement) : null;
  const variation = placement ? getVariation(placement) : null;
  const commonX = reference2.x + reference2.width / 2 - element.width / 2;
  const commonY = reference2.y + reference2.height / 2 - element.height / 2;
  let offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height,
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height,
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY,
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY,
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y,
      };
  }
  const mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    const len = mainAxis === 'y' ? 'height' : 'width';
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  const _options = options; const _options$placement = _options.placement; const placement = _options$placement === void 0 ? state.placement : _options$placement; const _options$boundary = _options.boundary; const boundary = _options$boundary === void 0 ? clippingParents : _options$boundary; const _options$rootBoundary = _options.rootBoundary; const rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary; const _options$elementConte = _options.elementContext; const elementContext = _options$elementConte === void 0 ? popper : _options$elementConte; const _options$altBoundary = _options.altBoundary; const altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary; const _options$padding = _options.padding; const padding = _options$padding === void 0 ? 0 : _options$padding;
  const paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  const altContext = elementContext === popper ? reference : popper;
  const popperRect = state.rects.popper;
  const element = state.elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = getClippingRect(isElement$1(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  const referenceClientRect = getBoundingClientRect(state.elements.reference);
  const popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement,
  });
  const popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  const elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  const overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right,
  };
  const offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    const offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      const multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      const axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  const _options = options; const placement = _options.placement; const boundary = _options.boundary; const rootBoundary = _options.rootBoundary; const padding = _options.padding; const flipVariations = _options.flipVariations; const _options$allowedAutoP = _options.allowedAutoPlacements; const allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  const variation = getVariation(placement);
  const placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  let allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  const overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
    })[getBasePlacement$1(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a2, b2) {
    return overflows[a2] - overflows[b2];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement$1(placement) === auto) {
    return [];
  }
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  const state = _ref.state; const options = _ref.options; const name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  const _options$mainAxis = options.mainAxis; const checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis; const _options$altAxis = options.altAxis; const checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis; const specifiedFallbackPlacements = options.fallbackPlacements; const padding = options.padding; const boundary = options.boundary; const rootBoundary = options.rootBoundary; const altBoundary = options.altBoundary; const _options$flipVariatio = options.flipVariations; const flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio; const allowedAutoPlacements = options.allowedAutoPlacements;
  const preferredPlacement = state.options.placement;
  const basePlacement = getBasePlacement$1(preferredPlacement);
  const isBasePlacement = basePlacement === preferredPlacement;
  const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  const placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement$1(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements,
    }) : placement2);
  }, []);
  const referenceRect = state.rects.reference;
  const popperRect = state.rects.popper;
  const checksMap = /* @__PURE__ */ new Map();
  let makeFallbackChecks = true;
  let firstFittingPlacement = placements2[0];
  for (let i = 0; i < placements2.length; i++) {
    const placement = placements2[i];
    const _basePlacement = getBasePlacement$1(placement);
    const isStartVariation = getVariation(placement) === start;
    const isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    const len = isVertical ? 'width' : 'height';
    const overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding,
    });
    let mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    const altVariationSide = getOppositePlacement(mainVariationSide);
    const checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    const numberOfChecks = flipVariations ? 3 : 1;
    const _loop = function _loop2(_i2) {
      const fittingPlacement = placements2.find(function(placement2) {
        const checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return 'break';
      }
    };
    for (let _i = numberOfChecks; _i > 0; _i--) {
      const _ret = _loop(_i);
      if (_ret === 'break') {
        break;
      }
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
const flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false,
  },
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0,
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x,
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  const state = _ref.state; const name = _ref.name;
  const referenceRect = state.rects.reference;
  const popperRect = state.rects.popper;
  const preventedOffsets = state.modifiersData.preventOverflow;
  const referenceOverflow = detectOverflow(state, {
    elementContext: 'reference',
  });
  const popperAltOverflow = detectOverflow(state, {
    altBoundary: true,
  });
  const referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  const popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  const isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  const hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped,
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped,
  });
}
const hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide,
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  const basePlacement = getBasePlacement$1(placement);
  const invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  const _ref = typeof offset2 === 'function' ? offset2(Object.assign({}, rects, {
    placement,
  })) : offset2; let skidding = _ref[0]; let distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding,
  } : {
    x: skidding,
    y: distance,
  };
}
function offset(_ref2) {
  const state = _ref2.state; const options = _ref2.options; const name = _ref2.name;
  const _options$offset = options.offset; const offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  const data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  const _data$state$placement = data[state.placement]; const x2 = _data$state$placement.x; const y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x2;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
const offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset,
};
function popperOffsets(_ref) {
  const state = _ref.state; const name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement,
  });
}
const popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {},
};
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
function preventOverflow(_ref) {
  const state = _ref.state; const options = _ref.options; const name = _ref.name;
  const _options$mainAxis = options.mainAxis; const checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis; const _options$altAxis = options.altAxis; const checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis; const boundary = options.boundary; const rootBoundary = options.rootBoundary; const altBoundary = options.altBoundary; const padding = options.padding; const _options$tether = options.tether; const tether = _options$tether === void 0 ? true : _options$tether; const _options$tetherOffset = options.tetherOffset; const tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  const overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary,
  });
  const basePlacement = getBasePlacement$1(state.placement);
  const variation = getVariation(state.placement);
  const isBasePlacement = !variation;
  const mainAxis = getMainAxisFromPlacement(basePlacement);
  const altAxis = getAltAxis(mainAxis);
  const popperOffsets2 = state.modifiersData.popperOffsets;
  const referenceRect = state.rects.reference;
  const popperRect = state.rects.popper;
  const tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement,
  })) : tetherOffset;
  const normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue,
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0,
  }, tetherOffsetValue);
  const offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  const data = {
    x: 0,
    y: 0,
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    let _offsetModifierState$;
    const mainSide = mainAxis === 'y' ? top : left;
    const altSide = mainAxis === 'y' ? bottom : right;
    const len = mainAxis === 'y' ? 'height' : 'width';
    const offset2 = popperOffsets2[mainAxis];
    const min$1 = offset2 + overflow[mainSide];
    const max$1 = offset2 - overflow[altSide];
    const additive = tether ? -popperRect[len] / 2 : 0;
    const minLen = variation === start ? referenceRect[len] : popperRect[len];
    const maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    const arrowElement = state.elements.arrow;
    const arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0,
    };
    const arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    const arrowPaddingMin = arrowPaddingObject[mainSide];
    const arrowPaddingMax = arrowPaddingObject[altSide];
    const arrowLen = within(0, referenceRect[len], arrowRect[len]);
    const minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    const maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    const arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    const clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    const offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    const tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    const tetherMax = offset2 + maxOffset - offsetModifierValue;
    const preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    let _offsetModifierState$2;
    const _mainSide = mainAxis === 'x' ? top : left;
    const _altSide = mainAxis === 'x' ? bottom : right;
    const _offset = popperOffsets2[altAxis];
    const _len = altAxis === 'y' ? 'height' : 'width';
    const _min = _offset + overflow[_mainSide];
    const _max = _offset - overflow[_altSide];
    const isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    const _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    const _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    const _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    const _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
const preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset'],
};
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop,
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function isElementScaled(element) {
  const rect = element.getBoundingClientRect();
  const scaleX = round(rect.width) / element.offsetWidth || 1;
  const scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0,
  };
  let offsets = {
    x: 0,
    y: 0,
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height,
  };
}
function order(modifiers) {
  const map2 = /* @__PURE__ */ new Map();
  const visited = /* @__PURE__ */ new Set();
  const result = [];
  modifiers.forEach(function(modifier) {
    map2.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    const requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        const depModifier = map2.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  const orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce$1(fn2) {
  let pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  const merged = modifiers.reduce(function(merged2, current) {
    const existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data),
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
const DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute',
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  const _generatorOptions = generatorOptions; const _generatorOptions$def = _generatorOptions.defaultModifiers; const defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def; const _generatorOptions$def2 = _generatorOptions.defaultOptions; const defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    let state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2,
      },
      attributes: {},
      styles: {},
    };
    let effectCleanupFns = [];
    let isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        const options2 = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement$1(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2),
        };
        const orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m2) {
          return m2.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        const _state$elements = state.elements; const reference3 = _state$elements.reference; const popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper3),
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (let index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          const _state$orderedModifie = state.orderedModifiers[index]; const fn2 = _state$orderedModifie.fn; const _state$orderedModifie2 = _state$orderedModifie.options; const _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2; const name = _state$orderedModifie.name;
          if (typeof fn2 === 'function') {
            state = fn2({
              state,
              options: _options,
              name,
              instance,
            }) || state;
          }
        }
      },
      update: debounce$1(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      },
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        const name = _ref3.name; const _ref3$options = _ref3.options; const options2 = _ref3$options === void 0 ? {} : _ref3$options; const effect3 = _ref3.effect;
        if (typeof effect3 === 'function') {
          const cleanupFn = effect3({
            state,
            name,
            instance,
            options: options2,
          });
          const noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
const defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
const createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers,
});
const BOX_CLASS = 'tippy-box';
const CONTENT_CLASS = 'tippy-content';
const BACKDROP_CLASS = 'tippy-backdrop';
const ARROW_CLASS = 'tippy-arrow';
const SVG_ARROW_CLASS = 'tippy-svg-arrow';
const TOUCH_OPTIONS = {
  passive: true,
  capture: true,
};
const TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO2() {
  return document.body;
};
function getValueAtIndexOrReturn(value, index, defaultValue) {
  if (Array.isArray(value)) {
    const v2 = value[index];
    return v2 == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v2;
  }
  return value;
}
function isType(value, type) {
  const str = {}.toString.call(value);
  return str.indexOf('[object') === 0 && str.indexOf(type + ']') > -1;
}
function invokeWithArgsOrReturn(value, args) {
  return typeof value === 'function' ? value.apply(void 0, args) : value;
}
function debounce(fn2, ms) {
  if (ms === 0) {
    return fn2;
  }
  let timeout;
  return function(arg) {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      fn2(arg);
    }, ms);
  };
}
function splitBySpaces(value) {
  return value.split(/\s+/).filter(Boolean);
}
function normalizeToArray(value) {
  return [].concat(value);
}
function pushIfUnique(arr, value) {
  if (arr.indexOf(value) === -1) {
    arr.push(value);
  }
}
function unique(arr) {
  return arr.filter(function(item, index) {
    return arr.indexOf(item) === index;
  });
}
function getBasePlacement(placement) {
  return placement.split('-')[0];
}
function arrayFrom(value) {
  return [].slice.call(value);
}
function removeUndefinedProps(obj) {
  return Object.keys(obj).reduce(function(acc, key) {
    if (obj[key] !== void 0) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}
function div() {
  return document.createElement('div');
}
function isElement(value) {
  return ['Element', 'Fragment'].some(function(type) {
    return isType(value, type);
  });
}
function isNodeList(value) {
  return isType(value, 'NodeList');
}
function isMouseEvent(value) {
  return isType(value, 'MouseEvent');
}
function isReferenceElement(value) {
  return !!(value && value._tippy && value._tippy.reference === value);
}
function getArrayOfElements(value) {
  if (isElement(value)) {
    return [value];
  }
  if (isNodeList(value)) {
    return arrayFrom(value);
  }
  if (Array.isArray(value)) {
    return value;
  }
  return arrayFrom(document.querySelectorAll(value));
}
function setTransitionDuration(els, value) {
  els.forEach(function(el) {
    if (el) {
      el.style.transitionDuration = value + 'ms';
    }
  });
}
function setVisibilityState(els, state) {
  els.forEach(function(el) {
    if (el) {
      el.setAttribute('data-state', state);
    }
  });
}
function getOwnerDocument(elementOrElements) {
  let _element$ownerDocumen;
  const _normalizeToArray = normalizeToArray(elementOrElements); const element = _normalizeToArray[0];
  return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
}
function isCursorOutsideInteractiveBorder(popperTreeData, event) {
  const clientX = event.clientX; const clientY = event.clientY;
  return popperTreeData.every(function(_ref) {
    const popperRect = _ref.popperRect; const popperState = _ref.popperState; const props = _ref.props;
    const interactiveBorder = props.interactiveBorder;
    const basePlacement = getBasePlacement(popperState.placement);
    const offsetData = popperState.modifiersData.offset;
    if (!offsetData) {
      return true;
    }
    const topDistance = basePlacement === 'bottom' ? offsetData.top.y : 0;
    const bottomDistance = basePlacement === 'top' ? offsetData.bottom.y : 0;
    const leftDistance = basePlacement === 'right' ? offsetData.left.x : 0;
    const rightDistance = basePlacement === 'left' ? offsetData.right.x : 0;
    const exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
    const exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
    const exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
    const exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
    return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
  });
}
function updateTransitionEndListener(box, action, listener) {
  const method = action + 'EventListener';
  ['transitionend', 'webkitTransitionEnd'].forEach(function(event) {
    box[method](event, listener);
  });
}
function actualContains(parent, child) {
  let target = child;
  while (target) {
    var _target$getRootNode;
    if (parent.contains(target)) {
      return true;
    }
    target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
  }
  return false;
}
const currentInput = {
  isTouch: false,
};
let lastMouseMoveTime = 0;
function onDocumentTouchStart() {
  if (currentInput.isTouch) {
    return;
  }
  currentInput.isTouch = true;
  if (window.performance) {
    document.addEventListener('mousemove', onDocumentMouseMove);
  }
}
function onDocumentMouseMove() {
  const now = performance.now();
  if (now - lastMouseMoveTime < 20) {
    currentInput.isTouch = false;
    document.removeEventListener('mousemove', onDocumentMouseMove);
  }
  lastMouseMoveTime = now;
}
function onWindowBlur() {
  const activeElement = document.activeElement;
  if (isReferenceElement(activeElement)) {
    const instance = activeElement._tippy;
    if (activeElement.blur && !instance.state.isVisible) {
      activeElement.blur();
    }
  }
}
function bindGlobalEventListeners() {
  document.addEventListener('touchstart', onDocumentTouchStart, TOUCH_OPTIONS);
  window.addEventListener('blur', onWindowBlur);
}
const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
const isIE11 = isBrowser ? !!window.msCrypto : false;
const pluginProps = {
  animateFill: false,
  followCursor: false,
  inlinePositioning: false,
  sticky: false,
};
const renderProps = {
  allowHTML: false,
  animation: 'fade',
  arrow: true,
  content: '',
  inertia: false,
  maxWidth: 350,
  role: 'tooltip',
  theme: '',
  zIndex: 9999,
};
const defaultProps = Object.assign({
  appendTo: TIPPY_DEFAULT_APPEND_TO,
  aria: {
    content: 'auto',
    expanded: 'auto',
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: true,
  ignoreAttributes: false,
  interactive: false,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: '',
  offset: [0, 10],
  onAfterUpdate: function onAfterUpdate() {
  },
  onBeforeUpdate: function onBeforeUpdate() {
  },
  onCreate: function onCreate() {
  },
  onDestroy: function onDestroy() {
  },
  onHidden: function onHidden() {
  },
  onHide: function onHide() {
  },
  onMount: function onMount() {
  },
  onShow: function onShow() {
  },
  onShown: function onShown() {
  },
  onTrigger: function onTrigger() {
  },
  onUntrigger: function onUntrigger() {
  },
  onClickOutside: function onClickOutside() {
  },
  placement: 'top',
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: false,
  touch: true,
  trigger: 'mouseenter focus',
  triggerTarget: null,
}, pluginProps, renderProps);
const defaultKeys = Object.keys(defaultProps);
const setDefaultProps = function setDefaultProps2(partialProps) {
  const keys = Object.keys(partialProps);
  keys.forEach(function(key) {
    defaultProps[key] = partialProps[key];
  });
};
function getExtendedPassedProps(passedProps) {
  const plugins = passedProps.plugins || [];
  const pluginProps2 = plugins.reduce(function(acc, plugin) {
    const name = plugin.name; const defaultValue = plugin.defaultValue;
    if (name) {
      let _name;
      acc[name] = passedProps[name] !== void 0 ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
    }
    return acc;
  }, {});
  return Object.assign({}, passedProps, pluginProps2);
}
function getDataAttributeProps(reference2, plugins) {
  const propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
    plugins,
  }))) : defaultKeys;
  const props = propKeys.reduce(function(acc, key) {
    const valueAsString = (reference2.getAttribute('data-tippy-' + key) || '').trim();
    if (!valueAsString) {
      return acc;
    }
    if (key === 'content') {
      acc[key] = valueAsString;
    } else {
      try {
        acc[key] = JSON.parse(valueAsString);
      } catch (e2) {
        acc[key] = valueAsString;
      }
    }
    return acc;
  }, {});
  return props;
}
function evaluateProps(reference2, props) {
  const out = Object.assign({}, props, {
    content: invokeWithArgsOrReturn(props.content, [reference2]),
  }, props.ignoreAttributes ? {} : getDataAttributeProps(reference2, props.plugins));
  out.aria = Object.assign({}, defaultProps.aria, out.aria);
  out.aria = {
    expanded: out.aria.expanded === 'auto' ? props.interactive : out.aria.expanded,
    content: out.aria.content === 'auto' ? props.interactive ? null : 'describedby' : out.aria.content,
  };
  return out;
}
const innerHTML = function innerHTML2() {
  return 'innerHTML';
};
function dangerouslySetInnerHTML(element, html) {
  element[innerHTML()] = html;
}
function createArrowElement(value) {
  const arrow2 = div();
  if (value === true) {
    arrow2.className = ARROW_CLASS;
  } else {
    arrow2.className = SVG_ARROW_CLASS;
    if (isElement(value)) {
      arrow2.appendChild(value);
    } else {
      dangerouslySetInnerHTML(arrow2, value);
    }
  }
  return arrow2;
}
function setContent(content, props) {
  if (isElement(props.content)) {
    dangerouslySetInnerHTML(content, '');
    content.appendChild(props.content);
  } else if (typeof props.content !== 'function') {
    if (props.allowHTML) {
      dangerouslySetInnerHTML(content, props.content);
    } else {
      content.textContent = props.content;
    }
  }
}
function getChildren(popper2) {
  const box = popper2.firstElementChild;
  const boxChildren = arrayFrom(box.children);
  return {
    box,
    content: boxChildren.find(function(node) {
      return node.classList.contains(CONTENT_CLASS);
    }),
    arrow: boxChildren.find(function(node) {
      return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
    }),
    backdrop: boxChildren.find(function(node) {
      return node.classList.contains(BACKDROP_CLASS);
    }),
  };
}
function render(instance) {
  const popper2 = div();
  const box = div();
  box.className = BOX_CLASS;
  box.setAttribute('data-state', 'hidden');
  box.setAttribute('tabindex', '-1');
  const content = div();
  content.className = CONTENT_CLASS;
  content.setAttribute('data-state', 'hidden');
  setContent(content, instance.props);
  popper2.appendChild(box);
  box.appendChild(content);
  onUpdate(instance.props, instance.props);
  function onUpdate(prevProps, nextProps) {
    const _getChildren = getChildren(popper2); const box2 = _getChildren.box; const content2 = _getChildren.content; const arrow2 = _getChildren.arrow;
    if (nextProps.theme) {
      box2.setAttribute('data-theme', nextProps.theme);
    } else {
      box2.removeAttribute('data-theme');
    }
    if (typeof nextProps.animation === 'string') {
      box2.setAttribute('data-animation', nextProps.animation);
    } else {
      box2.removeAttribute('data-animation');
    }
    if (nextProps.inertia) {
      box2.setAttribute('data-inertia', '');
    } else {
      box2.removeAttribute('data-inertia');
    }
    box2.style.maxWidth = typeof nextProps.maxWidth === 'number' ? nextProps.maxWidth + 'px' : nextProps.maxWidth;
    if (nextProps.role) {
      box2.setAttribute('role', nextProps.role);
    } else {
      box2.removeAttribute('role');
    }
    if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) {
      setContent(content2, instance.props);
    }
    if (nextProps.arrow) {
      if (!arrow2) {
        box2.appendChild(createArrowElement(nextProps.arrow));
      } else if (prevProps.arrow !== nextProps.arrow) {
        box2.removeChild(arrow2);
        box2.appendChild(createArrowElement(nextProps.arrow));
      }
    } else if (arrow2) {
      box2.removeChild(arrow2);
    }
  }
  return {
    popper: popper2,
    onUpdate,
  };
}
render.$$tippy = true;
let idCounter = 1;
let mouseMoveListeners = [];
let mountedInstances = [];
function createTippy(reference2, passedProps) {
  const props = evaluateProps(reference2, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps))));
  let showTimeout;
  let hideTimeout;
  let scheduleHideAnimationFrame;
  let isVisibleFromClick = false;
  let didHideDueToDocumentMouseDown = false;
  let didTouchMove = false;
  let ignoreOnFirstUpdate = false;
  let lastTriggerEvent;
  let currentTransitionEndListener;
  let onFirstUpdate;
  let listeners = [];
  let debouncedOnMouseMove = debounce(onMouseMove, props.interactiveDebounce);
  let currentTarget;
  const id = idCounter++;
  const popperInstance = null;
  const plugins = unique(props.plugins);
  const state = {
    isEnabled: true,
    isVisible: false,
    isDestroyed: false,
    isMounted: false,
    isShown: false,
  };
  const instance = {
    id,
    reference: reference2,
    popper: div(),
    popperInstance,
    props,
    state,
    plugins,
    clearDelayTimeouts,
    setProps,
    setContent: setContent2,
    show,
    hide: hide2,
    hideWithInteractivity,
    enable,
    disable,
    unmount,
    destroy,
  };
  if (!props.render) {
    return instance;
  }
  const _props$render = props.render(instance); const popper2 = _props$render.popper; const onUpdate = _props$render.onUpdate;
  popper2.setAttribute('data-tippy-root', '');
  popper2.id = 'tippy-' + instance.id;
  instance.popper = popper2;
  reference2._tippy = instance;
  popper2._tippy = instance;
  const pluginsHooks = plugins.map(function(plugin) {
    return plugin.fn(instance);
  });
  const hasAriaExpanded = reference2.hasAttribute('aria-expanded');
  addListeners();
  handleAriaExpandedAttribute();
  handleStyles();
  invokeHook('onCreate', [instance]);
  if (props.showOnCreate) {
    scheduleShow();
  }
  popper2.addEventListener('mouseenter', function() {
    if (instance.props.interactive && instance.state.isVisible) {
      instance.clearDelayTimeouts();
    }
  });
  popper2.addEventListener('mouseleave', function() {
    if (instance.props.interactive && instance.props.trigger.indexOf('mouseenter') >= 0) {
      getDocument().addEventListener('mousemove', debouncedOnMouseMove);
    }
  });
  return instance;
  function getNormalizedTouchSettings() {
    const touch = instance.props.touch;
    return Array.isArray(touch) ? touch : [touch, 0];
  }
  function getIsCustomTouchBehavior() {
    return getNormalizedTouchSettings()[0] === 'hold';
  }
  function getIsDefaultRenderFn() {
    let _instance$props$rende;
    return !!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy);
  }
  function getCurrentTarget() {
    return currentTarget || reference2;
  }
  function getDocument() {
    const parent = getCurrentTarget().parentNode;
    return parent ? getOwnerDocument(parent) : document;
  }
  function getDefaultTemplateChildren() {
    return getChildren(popper2);
  }
  function getDelay(isShow) {
    if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === 'focus') {
      return 0;
    }
    return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
  }
  function handleStyles(fromHide) {
    if (fromHide === void 0) {
      fromHide = false;
    }
    popper2.style.pointerEvents = instance.props.interactive && !fromHide ? '' : 'none';
    popper2.style.zIndex = '' + instance.props.zIndex;
  }
  function invokeHook(hook, args, shouldInvokePropsHook) {
    if (shouldInvokePropsHook === void 0) {
      shouldInvokePropsHook = true;
    }
    pluginsHooks.forEach(function(pluginHooks) {
      if (pluginHooks[hook]) {
        pluginHooks[hook].apply(pluginHooks, args);
      }
    });
    if (shouldInvokePropsHook) {
      let _instance$props;
      (_instance$props = instance.props)[hook].apply(_instance$props, args);
    }
  }
  function handleAriaContentAttribute() {
    const aria = instance.props.aria;
    if (!aria.content) {
      return;
    }
    const attr = 'aria-' + aria.content;
    const id2 = popper2.id;
    const nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      const currentValue = node.getAttribute(attr);
      if (instance.state.isVisible) {
        node.setAttribute(attr, currentValue ? currentValue + ' ' + id2 : id2);
      } else {
        const nextValue = currentValue && currentValue.replace(id2, '').trim();
        if (nextValue) {
          node.setAttribute(attr, nextValue);
        } else {
          node.removeAttribute(attr);
        }
      }
    });
  }
  function handleAriaExpandedAttribute() {
    if (hasAriaExpanded || !instance.props.aria.expanded) {
      return;
    }
    const nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      if (instance.props.interactive) {
        node.setAttribute('aria-expanded', instance.state.isVisible && node === getCurrentTarget() ? 'true' : 'false');
      } else {
        node.removeAttribute('aria-expanded');
      }
    });
  }
  function cleanupInteractiveMouseListeners() {
    getDocument().removeEventListener('mousemove', debouncedOnMouseMove);
    mouseMoveListeners = mouseMoveListeners.filter(function(listener) {
      return listener !== debouncedOnMouseMove;
    });
  }
  function onDocumentPress(event) {
    if (currentInput.isTouch) {
      if (didTouchMove || event.type === 'mousedown') {
        return;
      }
    }
    const actualTarget = event.composedPath && event.composedPath()[0] || event.target;
    if (instance.props.interactive && actualContains(popper2, actualTarget)) {
      return;
    }
    if (normalizeToArray(instance.props.triggerTarget || reference2).some(function(el) {
      return actualContains(el, actualTarget);
    })) {
      if (currentInput.isTouch) {
        return;
      }
      if (instance.state.isVisible && instance.props.trigger.indexOf('click') >= 0) {
        return;
      }
    } else {
      invokeHook('onClickOutside', [instance, event]);
    }
    if (instance.props.hideOnClick === true) {
      instance.clearDelayTimeouts();
      instance.hide();
      didHideDueToDocumentMouseDown = true;
      setTimeout(function() {
        didHideDueToDocumentMouseDown = false;
      });
      if (!instance.state.isMounted) {
        removeDocumentPress();
      }
    }
  }
  function onTouchMove() {
    didTouchMove = true;
  }
  function onTouchStart() {
    didTouchMove = false;
  }
  function addDocumentPress() {
    const doc = getDocument();
    doc.addEventListener('mousedown', onDocumentPress, true);
    doc.addEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
    doc.addEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
    doc.addEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
  }
  function removeDocumentPress() {
    const doc = getDocument();
    doc.removeEventListener('mousedown', onDocumentPress, true);
    doc.removeEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
    doc.removeEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
    doc.removeEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
  }
  function onTransitionedOut(duration, callback) {
    onTransitionEnd(duration, function() {
      if (!instance.state.isVisible && popper2.parentNode && popper2.parentNode.contains(popper2)) {
        callback();
      }
    });
  }
  function onTransitionedIn(duration, callback) {
    onTransitionEnd(duration, callback);
  }
  function onTransitionEnd(duration, callback) {
    const box = getDefaultTemplateChildren().box;
    function listener(event) {
      if (event.target === box) {
        updateTransitionEndListener(box, 'remove', listener);
        callback();
      }
    }
    if (duration === 0) {
      return callback();
    }
    updateTransitionEndListener(box, 'remove', currentTransitionEndListener);
    updateTransitionEndListener(box, 'add', listener);
    currentTransitionEndListener = listener;
  }
  function on(eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }
    const nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      node.addEventListener(eventType, handler, options);
      listeners.push({
        node,
        eventType,
        handler,
        options,
      });
    });
  }
  function addListeners() {
    if (getIsCustomTouchBehavior()) {
      on('touchstart', onTrigger2, {
        passive: true,
      });
      on('touchend', onMouseLeave, {
        passive: true,
      });
    }
    splitBySpaces(instance.props.trigger).forEach(function(eventType) {
      if (eventType === 'manual') {
        return;
      }
      on(eventType, onTrigger2);
      switch (eventType) {
        case 'mouseenter':
          on('mouseleave', onMouseLeave);
          break;
        case 'focus':
          on(isIE11 ? 'focusout' : 'blur', onBlurOrFocusOut);
          break;
        case 'focusin':
          on('focusout', onBlurOrFocusOut);
          break;
      }
    });
  }
  function removeListeners() {
    listeners.forEach(function(_ref) {
      const node = _ref.node; const eventType = _ref.eventType; const handler = _ref.handler; const options = _ref.options;
      node.removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }
  function onTrigger2(event) {
    let _lastTriggerEvent;
    let shouldScheduleClickHide = false;
    if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
      return;
    }
    const wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === 'focus';
    lastTriggerEvent = event;
    currentTarget = event.currentTarget;
    handleAriaExpandedAttribute();
    if (!instance.state.isVisible && isMouseEvent(event)) {
      mouseMoveListeners.forEach(function(listener) {
        return listener(event);
      });
    }
    if (event.type === 'click' && (instance.props.trigger.indexOf('mouseenter') < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) {
      shouldScheduleClickHide = true;
    } else {
      scheduleShow(event);
    }
    if (event.type === 'click') {
      isVisibleFromClick = !shouldScheduleClickHide;
    }
    if (shouldScheduleClickHide && !wasFocused) {
      scheduleHide(event);
    }
  }
  function onMouseMove(event) {
    const target = event.target;
    const isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper2.contains(target);
    if (event.type === 'mousemove' && isCursorOverReferenceOrPopper) {
      return;
    }
    const popperTreeData = getNestedPopperTree().concat(popper2).map(function(popper3) {
      let _instance$popperInsta;
      const instance2 = popper3._tippy;
      const state2 = (_instance$popperInsta = instance2.popperInstance) == null ? void 0 : _instance$popperInsta.state;
      if (state2) {
        return {
          popperRect: popper3.getBoundingClientRect(),
          popperState: state2,
          props,
        };
      }
      return null;
    }).filter(Boolean);
    if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
      cleanupInteractiveMouseListeners();
      scheduleHide(event);
    }
  }
  function onMouseLeave(event) {
    const shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf('click') >= 0 && isVisibleFromClick;
    if (shouldBail) {
      return;
    }
    if (instance.props.interactive) {
      instance.hideWithInteractivity(event);
      return;
    }
    scheduleHide(event);
  }
  function onBlurOrFocusOut(event) {
    if (instance.props.trigger.indexOf('focusin') < 0 && event.target !== getCurrentTarget()) {
      return;
    }
    if (instance.props.interactive && event.relatedTarget && popper2.contains(event.relatedTarget)) {
      return;
    }
    scheduleHide(event);
  }
  function isEventListenerStopped(event) {
    return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf('touch') >= 0 : false;
  }
  function createPopperInstance() {
    destroyPopperInstance();
    const _instance$props2 = instance.props; const popperOptions = _instance$props2.popperOptions; const placement = _instance$props2.placement; const offset2 = _instance$props2.offset; const getReferenceClientRect = _instance$props2.getReferenceClientRect; const moveTransition = _instance$props2.moveTransition;
    const arrow2 = getIsDefaultRenderFn() ? getChildren(popper2).arrow : null;
    const computedReference = getReferenceClientRect ? {
      getBoundingClientRect: getReferenceClientRect,
      contextElement: getReferenceClientRect.contextElement || getCurrentTarget(),
    } : reference2;
    const tippyModifier = {
      name: '$$tippy',
      enabled: true,
      phase: 'beforeWrite',
      requires: ['computeStyles'],
      fn: function fn2(_ref2) {
        const state2 = _ref2.state;
        if (getIsDefaultRenderFn()) {
          const _getDefaultTemplateCh = getDefaultTemplateChildren(); const box = _getDefaultTemplateCh.box;
          ['placement', 'reference-hidden', 'escaped'].forEach(function(attr) {
            if (attr === 'placement') {
              box.setAttribute('data-placement', state2.placement);
            } else {
              if (state2.attributes.popper['data-popper-' + attr]) {
                box.setAttribute('data-' + attr, '');
              } else {
                box.removeAttribute('data-' + attr);
              }
            }
          });
          state2.attributes.popper = {};
        }
      },
    };
    const modifiers = [{
      name: 'offset',
      options: {
        offset: offset2,
      },
    }, {
      name: 'preventOverflow',
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5,
        },
      },
    }, {
      name: 'flip',
      options: {
        padding: 5,
      },
    }, {
      name: 'computeStyles',
      options: {
        adaptive: !moveTransition,
      },
    }, tippyModifier];
    if (getIsDefaultRenderFn() && arrow2) {
      modifiers.push({
        name: 'arrow',
        options: {
          element: arrow2,
          padding: 3,
        },
      });
    }
    modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
    instance.popperInstance = createPopper(computedReference, popper2, Object.assign({}, popperOptions, {
      placement,
      onFirstUpdate,
      modifiers,
    }));
  }
  function destroyPopperInstance() {
    if (instance.popperInstance) {
      instance.popperInstance.destroy();
      instance.popperInstance = null;
    }
  }
  function mount() {
    const appendTo = instance.props.appendTo;
    let parentNode;
    const node = getCurrentTarget();
    if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === 'parent') {
      parentNode = node.parentNode;
    } else {
      parentNode = invokeWithArgsOrReturn(appendTo, [node]);
    }
    if (!parentNode.contains(popper2)) {
      parentNode.appendChild(popper2);
    }
    instance.state.isMounted = true;
    createPopperInstance();
  }
  function getNestedPopperTree() {
    return arrayFrom(popper2.querySelectorAll('[data-tippy-root]'));
  }
  function scheduleShow(event) {
    instance.clearDelayTimeouts();
    if (event) {
      invokeHook('onTrigger', [instance, event]);
    }
    addDocumentPress();
    let delay = getDelay(true);
    const _getNormalizedTouchSe = getNormalizedTouchSettings(); const touchValue = _getNormalizedTouchSe[0]; const touchDelay = _getNormalizedTouchSe[1];
    if (currentInput.isTouch && touchValue === 'hold' && touchDelay) {
      delay = touchDelay;
    }
    if (delay) {
      showTimeout = setTimeout(function() {
        instance.show();
      }, delay);
    } else {
      instance.show();
    }
  }
  function scheduleHide(event) {
    instance.clearDelayTimeouts();
    invokeHook('onUntrigger', [instance, event]);
    if (!instance.state.isVisible) {
      removeDocumentPress();
      return;
    }
    if (instance.props.trigger.indexOf('mouseenter') >= 0 && instance.props.trigger.indexOf('click') >= 0 && ['mouseleave', 'mousemove'].indexOf(event.type) >= 0 && isVisibleFromClick) {
      return;
    }
    const delay = getDelay(false);
    if (delay) {
      hideTimeout = setTimeout(function() {
        if (instance.state.isVisible) {
          instance.hide();
        }
      }, delay);
    } else {
      scheduleHideAnimationFrame = requestAnimationFrame(function() {
        instance.hide();
      });
    }
  }
  function enable() {
    instance.state.isEnabled = true;
  }
  function disable() {
    instance.hide();
    instance.state.isEnabled = false;
  }
  function clearDelayTimeouts() {
    clearTimeout(showTimeout);
    clearTimeout(hideTimeout);
    cancelAnimationFrame(scheduleHideAnimationFrame);
  }
  function setProps(partialProps) {
    if (instance.state.isDestroyed) {
      return;
    }
    invokeHook('onBeforeUpdate', [instance, partialProps]);
    removeListeners();
    const prevProps = instance.props;
    const nextProps = evaluateProps(reference2, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
      ignoreAttributes: true,
    }));
    instance.props = nextProps;
    addListeners();
    if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
      cleanupInteractiveMouseListeners();
      debouncedOnMouseMove = debounce(onMouseMove, nextProps.interactiveDebounce);
    }
    if (prevProps.triggerTarget && !nextProps.triggerTarget) {
      normalizeToArray(prevProps.triggerTarget).forEach(function(node) {
        node.removeAttribute('aria-expanded');
      });
    } else if (nextProps.triggerTarget) {
      reference2.removeAttribute('aria-expanded');
    }
    handleAriaExpandedAttribute();
    handleStyles();
    if (onUpdate) {
      onUpdate(prevProps, nextProps);
    }
    if (instance.popperInstance) {
      createPopperInstance();
      getNestedPopperTree().forEach(function(nestedPopper) {
        requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
      });
    }
    invokeHook('onAfterUpdate', [instance, partialProps]);
  }
  function setContent2(content) {
    instance.setProps({
      content,
    });
  }
  function show() {
    const isAlreadyVisible = instance.state.isVisible;
    const isDestroyed = instance.state.isDestroyed;
    const isDisabled = !instance.state.isEnabled;
    const isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
    const duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);
    if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
      return;
    }
    if (getCurrentTarget().hasAttribute('disabled')) {
      return;
    }
    invokeHook('onShow', [instance], false);
    if (instance.props.onShow(instance) === false) {
      return;
    }
    instance.state.isVisible = true;
    if (getIsDefaultRenderFn()) {
      popper2.style.visibility = 'visible';
    }
    handleStyles();
    addDocumentPress();
    if (!instance.state.isMounted) {
      popper2.style.transition = 'none';
    }
    if (getIsDefaultRenderFn()) {
      const _getDefaultTemplateCh2 = getDefaultTemplateChildren(); const box = _getDefaultTemplateCh2.box; const content = _getDefaultTemplateCh2.content;
      setTransitionDuration([box, content], 0);
    }
    onFirstUpdate = function onFirstUpdate2() {
      let _instance$popperInsta2;
      if (!instance.state.isVisible || ignoreOnFirstUpdate) {
        return;
      }
      ignoreOnFirstUpdate = true;
      void popper2.offsetHeight;
      popper2.style.transition = instance.props.moveTransition;
      if (getIsDefaultRenderFn() && instance.props.animation) {
        const _getDefaultTemplateCh3 = getDefaultTemplateChildren(); const _box = _getDefaultTemplateCh3.box; const _content = _getDefaultTemplateCh3.content;
        setTransitionDuration([_box, _content], duration);
        setVisibilityState([_box, _content], 'visible');
      }
      handleAriaContentAttribute();
      handleAriaExpandedAttribute();
      pushIfUnique(mountedInstances, instance);
      (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
      invokeHook('onMount', [instance]);
      if (instance.props.animation && getIsDefaultRenderFn()) {
        onTransitionedIn(duration, function() {
          instance.state.isShown = true;
          invokeHook('onShown', [instance]);
        });
      }
    };
    mount();
  }
  function hide2() {
    const isAlreadyHidden = !instance.state.isVisible;
    const isDestroyed = instance.state.isDestroyed;
    const isDisabled = !instance.state.isEnabled;
    const duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);
    if (isAlreadyHidden || isDestroyed || isDisabled) {
      return;
    }
    invokeHook('onHide', [instance], false);
    if (instance.props.onHide(instance) === false) {
      return;
    }
    instance.state.isVisible = false;
    instance.state.isShown = false;
    ignoreOnFirstUpdate = false;
    isVisibleFromClick = false;
    if (getIsDefaultRenderFn()) {
      popper2.style.visibility = 'hidden';
    }
    cleanupInteractiveMouseListeners();
    removeDocumentPress();
    handleStyles(true);
    if (getIsDefaultRenderFn()) {
      const _getDefaultTemplateCh4 = getDefaultTemplateChildren(); const box = _getDefaultTemplateCh4.box; const content = _getDefaultTemplateCh4.content;
      if (instance.props.animation) {
        setTransitionDuration([box, content], duration);
        setVisibilityState([box, content], 'hidden');
      }
    }
    handleAriaContentAttribute();
    handleAriaExpandedAttribute();
    if (instance.props.animation) {
      if (getIsDefaultRenderFn()) {
        onTransitionedOut(duration, instance.unmount);
      }
    } else {
      instance.unmount();
    }
  }
  function hideWithInteractivity(event) {
    getDocument().addEventListener('mousemove', debouncedOnMouseMove);
    pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
    debouncedOnMouseMove(event);
  }
  function unmount() {
    if (instance.state.isVisible) {
      instance.hide();
    }
    if (!instance.state.isMounted) {
      return;
    }
    destroyPopperInstance();
    getNestedPopperTree().forEach(function(nestedPopper) {
      nestedPopper._tippy.unmount();
    });
    if (popper2.parentNode) {
      popper2.parentNode.removeChild(popper2);
    }
    mountedInstances = mountedInstances.filter(function(i) {
      return i !== instance;
    });
    instance.state.isMounted = false;
    invokeHook('onHidden', [instance]);
  }
  function destroy() {
    if (instance.state.isDestroyed) {
      return;
    }
    instance.clearDelayTimeouts();
    instance.unmount();
    removeListeners();
    delete reference2._tippy;
    instance.state.isDestroyed = true;
    invokeHook('onDestroy', [instance]);
  }
}
function tippy(targets, optionalProps) {
  if (optionalProps === void 0) {
    optionalProps = {};
  }
  const plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
  bindGlobalEventListeners();
  const passedProps = Object.assign({}, optionalProps, {
    plugins,
  });
  const elements = getArrayOfElements(targets);
  const instances = elements.reduce(function(acc, reference2) {
    const instance = reference2 && createTippy(reference2, passedProps);
    if (instance) {
      acc.push(instance);
    }
    return acc;
  }, []);
  return isElement(targets) ? instances[0] : instances;
}
tippy.defaultProps = defaultProps;
tippy.setDefaultProps = setDefaultProps;
tippy.currentInput = currentInput;
Object.assign({}, applyStyles$1, {
  effect: function effect2(_ref) {
    const state = _ref.state;
    const initialStyles = {
      popper: {
        position: state.options.strategy,
        left: '0',
        top: '0',
        margin: '0',
      },
      arrow: {
        position: 'absolute',
      },
      reference: {},
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
  },
});
tippy.setDefaultProps({
  render,
});
const contentStyles = r$4` 
  :host {
    cursor: help;
  }
  
  :host::before {
    position: relative;
    top: .3em;
    left: 0;
    vertical-align: bottom;
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="%23767676"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
    -webkit-animation: moveArrowLeft 1s linear infinite alternate;
    animation: moveArrowLeft 1s linear infinite alternate;
    white-space: nowrap;
}

:host::after {
    position: relative;
    top: .3em;
    right: 0;
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="%23767676"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
    -webkit-animation: moveArrowRight 1s linear infinite alternate;
    animation: moveArrowRight 1s linear infinite alternate;
    white-space: nowrap;
}

@-webkit-keyframes moveArrowLeft {
    0% {
        left: 0
    }

    50% {
        left: -5px
    }

    100% {
        left: 0
    }
}

@keyframes moveArrowLeft {
    0% {
        left: 0
    }

    50% {
        left: -5px
    }

    100% {
        left: 0
    }
}

@-webkit-keyframes moveArrowRight {
    0% {
        right: 0
    }

    50% {
        right: -5px
    }

    100% {
        right: 0
    }
}

@keyframes moveArrowRight {
    0% {
        right: 0
    }

    50% {
        right: -5px
    }

    100% {
        right: 0
    }
}
`;
const TAG_NAME = 'cta-tooltip';
class Tooltip extends BaseComponent {
  constructor() {
    super(...arguments);
    this.text = '';
    this.contentRef = e$1();
  }
  createTooltip() {
    if (!this.contentRef.value) {
      return;
    }
    tippy(this, {
      arrow: true,
      content: this.text,
    });
  }
  onSlotChange(event) {
    const slot = event.target instanceof HTMLSlotElement ? event.target : null;
    if (!slot) {
      return;
    }
    this.createTooltip();
  }
  render() {
    return $`
      <slot ${n(this.contentRef)} @slotchange=${this.onSlotChange}></slot>
    `;
  }
}
Tooltip.tagName = TAG_NAME;
Tooltip.styles = [contentStyles];
Tooltip.properties = {
  text: {attribute: true, type: String, reflect: true},
};
define(Tooltip.tagName, Tooltip);
((window2) => {
  if (typeof window2.document === 'undefined') {
    return;
  }
  const {body} = window2.document;
  const theme2 = window2.document.createElement(CtaTheme.tagName);
  body.prepend(theme2);
  body.classList.add('cta-components-loaded');
})(globalThis);
export {Accordion, AccordionGroup, Icon, Tooltip};
