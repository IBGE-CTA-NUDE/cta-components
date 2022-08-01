const ea=Object.defineProperty; const ra=Object.defineProperties; const ia=Object.getOwnPropertyDescriptors; const wi=Object.getOwnPropertySymbols; const na=Object.prototype.hasOwnProperty; const oa=Object.prototype.propertyIsEnumerable; const $i=(H, q, V)=>q in H?ea(H, q, {enumerable: !0, configurable: !0, writable: !0, value: V}):H[q]=V; const Ue=(H, q)=>{
  for (var V in q||(q={}))na.call(q, V)&&$i(H, V, q[V]); if (wi) for (var V of wi(q))oa.call(q, V)&&$i(H, V, q[V]); return H;
}; const He=(H, q)=>ra(H, ia(q)); this.cta=this.cta||{}; this.cta.components=function(H) {
  'use strict'; const q=(()=>`.tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;white-space:normal;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:"";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}
`)();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&'adoptedStyleSheets'in Document.prototype&&'replace'in CSSStyleSheet.prototype; const Be=Symbol(); const yr=new Map; class br {
    constructor(t, r) {
      if (this._$cssResult$=!0, r!==Be) throw Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.'); this.cssText=t;
    } get styleSheet() {
      let t=yr.get(this.cssText); return V&&t===void 0&&(yr.set(this.cssText, t=new CSSStyleSheet), t.replaceSync(this.cssText)), t;
    }toString() {
      return this.cssText;
    }
  } const Ai=(e)=>new br(typeof e=='string'?e:e+'', Be); const z=(e, ...t)=>{
    const r=e.length===1?e[0]:t.reduce((i, n, o)=>i+((a)=>{
      if (a._$cssResult$===!0) return a.cssText; if (typeof a=='number') return a; throw Error('Value passed to \'css\' function must be a \'css\' function result: '+a+'. Use \'unsafeCSS\' to pass non-literal values, but take care to ensure page security.');
    })(n)+e[o+1], e[0]); return new br(r, Be);
  }; const xi=(e, t)=>{
V?e.adoptedStyleSheets=t.map((r)=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach((r)=>{
  const i=document.createElement('style'); const n=window.litNonce; n!==void 0&&i.setAttribute('nonce', n), i.textContent=r.cssText, e.appendChild(i);
});
  }; const wr=V?(e)=>e:(e)=>e instanceof CSSStyleSheet?((t)=>{
    let r=''; for (const i of t.cssRules)r+=i.cssText; return Ai(r);
  })(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ie; const $r=window.trustedTypes; const Ei=$r?$r.emptyScript:''; const Ar=window.reactiveElementPolyfillSupport; const je={toAttribute(e, t) {
    switch (t) {
      case Boolean: e=e?Ei:null; break; case Object: case Array: e=e==null?e:JSON.stringify(e);
    } return e;
  }, fromAttribute(e, t) {
    let r=e; switch (t) {
      case Boolean: r=e!==null; break; case Number: r=e===null?null:Number(e); break; case Object: case Array: try {
        r=JSON.parse(e);
      } catch {
        r=null;
      }
    } return r;
  }}; const xr=(e, t)=>t!==e&&(t==t||e==e); const Ve={attribute: !0, type: String, converter: je, reflect: !1, hasChanged: xr}; class Tt extends HTMLElement {
    constructor() {
      super(), this._$Et=new Map, this.isUpdatePending=!1, this.hasUpdated=!1, this._$Ei=null, this.o();
    } static addInitializer(t) {
      let r; (r=this.l)!==null&&r!==void 0||(this.l=[]), this.l.push(t);
    } static get observedAttributes() {
      this.finalize(); const t=[]; return this.elementProperties.forEach((r, i)=>{
        const n=this._$Eh(i, r); n!==void 0&&(this._$Eu.set(n, i), t.push(n));
      }), t;
    } static createProperty(t, r=Ve) {
      if (r.state&&(r.attribute=!1), this.finalize(), this.elementProperties.set(t, r), !r.noAccessor&&!this.prototype.hasOwnProperty(t)) {
        const i=typeof t=='symbol'?Symbol():'__'+t; const n=this.getPropertyDescriptor(t, i, r); n!==void 0&&Object.defineProperty(this.prototype, t, n);
      }
    } static getPropertyDescriptor(t, r, i) {
      return {get() {
        return this[r];
      }, set(n) {
        const o=this[t]; this[r]=n, this.requestUpdate(t, o, i);
      }, configurable: !0, enumerable: !0};
    } static getPropertyOptions(t) {
      return this.elementProperties.get(t)||Ve;
    } static finalize() {
      if (this.hasOwnProperty('finalized')) return !1; this.finalized=!0; const t=Object.getPrototypeOf(this); if (t.finalize(), this.elementProperties=new Map(t.elementProperties), this._$Eu=new Map, this.hasOwnProperty('properties')) {
        const r=this.properties; const i=[...Object.getOwnPropertyNames(r), ...Object.getOwnPropertySymbols(r)]; for (const n of i) this.createProperty(n, r[n]);
      } return this.elementStyles=this.finalizeStyles(this.styles), !0;
    } static finalizeStyles(t) {
      const r=[]; if (Array.isArray(t)) {
        const i=new Set(t.flat(1/0).reverse()); for (const n of i)r.unshift(wr(n));
      } else t!==void 0&&r.push(wr(t)); return r;
    } static _$Eh(t, r) {
      const i=r.attribute; return i===!1?void 0:typeof i=='string'?i:typeof t=='string'?t.toLowerCase():void 0;
    }o() {
      let t; this._$Ep=new Promise((r)=>this.enableUpdating=r), this._$AL=new Map, this._$Em(), this.requestUpdate(), (t=this.constructor.l)===null||t===void 0||t.forEach((r)=>r(this));
    }addController(t) {
      let r; let i; ((r=this._$Eg)!==null&&r!==void 0?r:this._$Eg=[]).push(t), this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t));
    }removeController(t) {
      let r; (r=this._$Eg)===null||r===void 0||r.splice(this._$Eg.indexOf(t)>>>0, 1);
    }_$Em() {
      this.constructor.elementProperties.forEach((t, r)=>{
        this.hasOwnProperty(r)&&(this._$Et.set(r, this[r]), delete this[r]);
      });
    }createRenderRoot() {
      let t; const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions); return xi(r, this.constructor.elementStyles), r;
    }connectedCallback() {
      let t; this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()), this.enableUpdating(!0), (t=this._$Eg)===null||t===void 0||t.forEach((r)=>{
        let i; return (i=r.hostConnected)===null||i===void 0?void 0:i.call(r);
      });
    }enableUpdating(t) {}disconnectedCallback() {
      let t; (t=this._$Eg)===null||t===void 0||t.forEach((r)=>{
        let i; return (i=r.hostDisconnected)===null||i===void 0?void 0:i.call(r);
      });
    }attributeChangedCallback(t, r, i) {
      this._$AK(t, i);
    }_$ES(t, r, i=Ve) {
      let n; let o; const a=this.constructor._$Eh(t, i); if (a!==void 0&&i.reflect===!0) {
        const u=((o=(n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==null&&o!==void 0?o:je.toAttribute)(r, i.type); this._$Ei=t, u==null?this.removeAttribute(a):this.setAttribute(a, u), this._$Ei=null;
      }
    }_$AK(t, r) {
      let i; let n; let o; const a=this.constructor; const u=a._$Eu.get(t); if (u!==void 0&&this._$Ei!==u) {
        const l=a.getPropertyOptions(u); const p=l.converter; const d=(o=(n=(i=p)===null||i===void 0?void 0:i.fromAttribute)!==null&&n!==void 0?n:typeof p=='function'?p:null)!==null&&o!==void 0?o:je.fromAttribute; this._$Ei=u, this[u]=d(r, l.type), this._$Ei=null;
      }
    }requestUpdate(t, r, i) {
      let n=!0; t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||xr)(this[t], r)?(this._$AL.has(t)||this._$AL.set(t, r), i.reflect===!0&&this._$Ei!==t&&(this._$EC===void 0&&(this._$EC=new Map), this._$EC.set(t, i))):n=!1), !this.isUpdatePending&&n&&(this._$Ep=this._$E_());
    } async _$E_() {
      this.isUpdatePending=!0; try {
        await this._$Ep;
      } catch (r) {
        Promise.reject(r);
      } const t=this.scheduleUpdate(); return t!=null&&await t, !this.isUpdatePending;
    }scheduleUpdate() {
      return this.performUpdate();
    }performUpdate() {
      let t; if (!this.isUpdatePending) return; this.hasUpdated, this._$Et&&(this._$Et.forEach((n, o)=>this[o]=n), this._$Et=void 0); let r=!1; const i=this._$AL; try {
        r=this.shouldUpdate(i), r?(this.willUpdate(i), (t=this._$Eg)===null||t===void 0||t.forEach((n)=>{
          let o; return (o=n.hostUpdate)===null||o===void 0?void 0:o.call(n);
        }), this.update(i)):this._$EU();
      } catch (n) {
        throw r=!1, this._$EU(), n;
      }r&&this._$AE(i);
    }willUpdate(t) {}_$AE(t) {
      let r; (r=this._$Eg)===null||r===void 0||r.forEach((i)=>{
        let n; return (n=i.hostUpdated)===null||n===void 0?void 0:n.call(i);
      }), this.hasUpdated||(this.hasUpdated=!0, this.firstUpdated(t)), this.updated(t);
    }_$EU() {
      this._$AL=new Map, this.isUpdatePending=!1;
    } get updateComplete() {
      return this.getUpdateComplete();
    }getUpdateComplete() {
      return this._$Ep;
    }shouldUpdate(t) {
      return !0;
    }update(t) {
      this._$EC!==void 0&&(this._$EC.forEach((r, i)=>this._$ES(i, this[i], r)), this._$EC=void 0), this._$EU();
    }updated(t) {}firstUpdated(t) {}
  }Tt.finalized=!0, Tt.elementProperties=new Map, Tt.elementStyles=[], Tt.shadowRootOptions={mode: 'open'}, Ar==null||Ar({ReactiveElement: Tt}), ((Ie=globalThis.reactiveElementVersions)!==null&&Ie!==void 0?Ie:globalThis.reactiveElementVersions=[]).push('1.3.2');/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ze; const Ct=globalThis.trustedTypes; const Er=Ct?Ct.createPolicy('lit-html', {createHTML: (e)=>e}):void 0; const ht=`lit$${(Math.random()+'').slice(9)}$`; const _r='?'+ht; const _i=`<${_r}>`; const St=document; const Xt=(e='')=>St.createComment(e); const Yt=(e)=>e===null||typeof e!='object'&&typeof e!='function'; const Or=Array.isArray; const Oi=(e)=>{
    let t; return Or(e)||typeof((t=e)===null||t===void 0?void 0:t[Symbol.iterator])=='function';
  }; const Kt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g; const Tr=/-->/g; const Cr=/>/g; const bt=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g; const Sr=/'/g; const Lr=/"/g; const Mr=/^(?:script|style|textarea|title)$/i; const Ti=(e)=>(t, ...r)=>({_$litType$: e, strings: t, values: r}); const wt=Ti(1); const vt=Symbol.for('lit-noChange'); const S=Symbol.for('lit-nothing'); const Dr=new WeakMap; const Ci=(e, t, r)=>{
    let i; let n; const o=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:t; let a=o._$litPart$; if (a===void 0) {
      const u=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:null; o._$litPart$=a=new Qt(t.insertBefore(Xt(), u), u, void 0, r!=null?r:{});
    } return a._$AI(e), a;
  }; const Lt=St.createTreeWalker(St, 129, null, !1); const Si=(e, t)=>{
    const r=e.length-1; const i=[]; let n; let o=t===2?'<svg>':''; let a=Kt; for (let l=0; l<r; l++) {
      const p=e[l]; let d; let f; let g=-1; let m=0; for (;m<p.length&&(a.lastIndex=m, f=a.exec(p), f!==null);)m=a.lastIndex, a===Kt?f[1]==='!--'?a=Tr:f[1]!==void 0?a=Cr:f[2]!==void 0?(Mr.test(f[2])&&(n=RegExp('</'+f[2], 'g')), a=bt):f[3]!==void 0&&(a=bt):a===bt?f[0]==='>'?(a=n!=null?n:Kt, g=-1):f[1]===void 0?g=-2:(g=a.lastIndex-f[2].length, d=f[1], a=f[3]===void 0?bt:f[3]==='"'?Lr:Sr):a===Lr||a===Sr?a=bt:a===Tr||a===Cr?a=Kt:(a=bt, n=void 0); const w=a===bt&&e[l+1].startsWith('/>')?' ':''; o+=a===Kt?p+_i:g>=0?(i.push(d), p.slice(0, g)+'$lit$'+p.slice(g)+ht+w):p+ht+(g===-2?(i.push(void 0), l):w);
    } const u=o+(e[r]||'<?>')+(t===2?'</svg>':''); if (!Array.isArray(e)||!e.hasOwnProperty('raw')) throw Error('invalid template strings array'); return [Er!==void 0?Er.createHTML(u):u, i];
  }; class Jt {
    constructor({strings: t, _$litType$: r}, i) {
      let n; this.parts=[]; let o=0; let a=0; const u=t.length-1; const l=this.parts; const [p, d]=Si(t, r); if (this.el=Jt.createElement(p, i), Lt.currentNode=this.el.content, r===2) {
        const f=this.el.content; const g=f.firstChild; g.remove(), f.append(...g.childNodes);
      } for (;(n=Lt.nextNode())!==null&&l.length<u;) {
        if (n.nodeType===1) {
          if (n.hasAttributes()) {
            const f=[]; for (const g of n.getAttributeNames()) {
              if (g.endsWith('$lit$')||g.startsWith(ht)) {
                const m=d[a++]; if (f.push(g), m!==void 0) {
                  const w=n.getAttribute(m.toLowerCase()+'$lit$').split(ht); const b=/([.?@])?(.*)/.exec(m); l.push({type: 1, index: o, name: b[2], strings: w, ctor: b[1]==='.'?Mi:b[1]==='?'?Ri:b[1]==='@'?Pi:ve});
                } else l.push({type: 6, index: o});
              }
            } for (const g of f)n.removeAttribute(g);
          } if (Mr.test(n.tagName)) {
            const f=n.textContent.split(ht); const g=f.length-1; if (g>0) {
              n.textContent=Ct?Ct.emptyScript:''; for (let m=0; m<g; m++)n.append(f[m], Xt()), Lt.nextNode(), l.push({type: 2, index: ++o}); n.append(f[g], Xt());
            }
          }
        } else if (n.nodeType===8) {
          if (n.data===_r)l.push({type: 2, index: o}); else {
            let f=-1; for (;(f=n.data.indexOf(ht, f+1))!==-1;)l.push({type: 7, index: o}), f+=ht.length-1;
          }
        }o++;
      }
    } static createElement(t, r) {
      const i=St.createElement('template'); return i.innerHTML=t, i;
    }
  } function Mt(e, t, r=e, i) {
    let n; let o; let a; let u; if (t===vt) return t; let l=i!==void 0?(n=r._$Cl)===null||n===void 0?void 0:n[i]:r._$Cu; const p=Yt(t)?void 0:t._$litDirective$; return (l==null?void 0:l.constructor)!==p&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l, !1), p===void 0?l=void 0:(l=new p(e), l._$AT(e, r, i)), i!==void 0?((a=(u=r)._$Cl)!==null&&a!==void 0?a:u._$Cl=[])[i]=l:r._$Cu=l), l!==void 0&&(t=Mt(e, l._$AS(e, t.values), l, i)), t;
  } class Li {
    constructor(t, r) {
      this.v=[], this._$AN=void 0, this._$AD=t, this._$AM=r;
    } get parentNode() {
      return this._$AM.parentNode;
    } get _$AU() {
      return this._$AM._$AU;
    }p(t) {
      let r; const {el: {content: i}, parts: n}=this._$AD; const o=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:St).importNode(i, !0); Lt.currentNode=o; let a=Lt.nextNode(); let u=0; let l=0; let p=n[0]; for (;p!==void 0;) {
        if (u===p.index) {
          let d; p.type===2?d=new Qt(a, a.nextSibling, this, t):p.type===1?d=new p.ctor(a, p.name, p.strings, this, t):p.type===6&&(d=new Ni(a, this, t)), this.v.push(d), p=n[++l];
        }u!==(p==null?void 0:p.index)&&(a=Lt.nextNode(), u++);
      } return o;
    }m(t) {
      let r=0; for (const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(t, i, r), r+=i.strings.length-2):i._$AI(t[r])), r++;
    }
  } class Qt {
    constructor(t, r, i, n) {
      let o; this.type=2, this._$AH=S, this._$AN=void 0, this._$AA=t, this._$AB=r, this._$AM=i, this.options=n, this._$Cg=(o=n==null?void 0:n.isConnected)===null||o===void 0||o;
    } get _$AU() {
      let t; let r; return (r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cg;
    } get parentNode() {
      let t=this._$AA.parentNode; const r=this._$AM; return r!==void 0&&t.nodeType===11&&(t=r.parentNode), t;
    } get startNode() {
      return this._$AA;
    } get endNode() {
      return this._$AB;
    }_$AI(t, r=this) {
      t=Mt(this, t, r), Yt(t)?t===S||t==null||t===''?(this._$AH!==S&&this._$AR(), this._$AH=S):t!==this._$AH&&t!==vt&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):Oi(t)?this.S(t):this.$(t);
    }M(t, r=this._$AB) {
      return this._$AA.parentNode.insertBefore(t, r);
    }k(t) {
      this._$AH!==t&&(this._$AR(), this._$AH=this.M(t));
    }$(t) {
this._$AH!==S&&Yt(this._$AH)?this._$AA.nextSibling.data=t:this.k(St.createTextNode(t)), this._$AH=t;
    }T(t) {
      let r; const {values: i, _$litType$: n}=t; const o=typeof n=='number'?this._$AC(t):(n.el===void 0&&(n.el=Jt.createElement(n.h, this.options)), n); if (((r=this._$AH)===null||r===void 0?void 0:r._$AD)===o) this._$AH.m(i); else {
        const a=new Li(o, this); const u=a.p(this.options); a.m(i), this.k(u), this._$AH=a;
      }
    }_$AC(t) {
      let r=Dr.get(t.strings); return r===void 0&&Dr.set(t.strings, r=new Jt(t)), r;
    }S(t) {
      Or(this._$AH)||(this._$AH=[], this._$AR()); const r=this._$AH; let i; let n=0; for (const o of t)n===r.length?r.push(i=new Qt(this.M(Xt()), this.M(Xt()), this, this.options)):i=r[n], i._$AI(o), n++; n<r.length&&(this._$AR(i&&i._$AB.nextSibling, n), r.length=n);
    }_$AR(t=this._$AA.nextSibling, r) {
      let i; for ((i=this._$AP)===null||i===void 0||i.call(this, !1, !0, r); t&&t!==this._$AB;) {
        const n=t.nextSibling; t.remove(), t=n;
      }
    }setConnected(t) {
      let r; this._$AM===void 0&&(this._$Cg=t, (r=this._$AP)===null||r===void 0||r.call(this, t));
    }
  } class ve {
    constructor(t, r, i, n, o) {
      this.type=1, this._$AH=S, this._$AN=void 0, this.element=t, this.name=r, this._$AM=n, this.options=o, i.length>2||i[0]!==''||i[1]!==''?(this._$AH=Array(i.length-1).fill(new String), this.strings=i):this._$AH=S;
    } get tagName() {
      return this.element.tagName;
    } get _$AU() {
      return this._$AM._$AU;
    }_$AI(t, r=this, i, n) {
      const o=this.strings; let a=!1; if (o===void 0)t=Mt(this, t, r, 0), a=!Yt(t)||t!==this._$AH&&t!==vt, a&&(this._$AH=t); else {
        const u=t; let l; let p; for (t=o[0], l=0; l<o.length-1; l++)p=Mt(this, u[i+l], r, l), p===vt&&(p=this._$AH[l]), a||(a=!Yt(p)||p!==this._$AH[l]), p===S?t=S:t!==S&&(t+=(p!=null?p:'')+o[l+1]), this._$AH[l]=p;
      }a&&!n&&this.C(t);
    }C(t) {
t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name, t!=null?t:'');
    }
  } class Mi extends ve {
    constructor() {
      super(...arguments), this.type=3;
    }C(t) {
      this.element[this.name]=t===S?void 0:t;
    }
  } const Di=Ct?Ct.emptyScript:''; class Ri extends ve {
    constructor() {
      super(...arguments), this.type=4;
    }C(t) {
t&&t!==S?this.element.setAttribute(this.name, Di):this.element.removeAttribute(this.name);
    }
  } class Pi extends ve {
    constructor(t, r, i, n, o) {
      super(t, r, i, n, o), this.type=5;
    }_$AI(t, r=this) {
      let i; if ((t=(i=Mt(this, t, r, 0))!==null&&i!==void 0?i:S)===vt) return; const n=this._$AH; const o=t===S&&n!==S||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive; const a=t!==S&&(n===S||o); o&&this.element.removeEventListener(this.name, this, n), a&&this.element.addEventListener(this.name, this, t), this._$AH=t;
    }handleEvent(t) {
      let r; let i; typeof this._$AH=='function'?this._$AH.call((i=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&i!==void 0?i:this.element, t):this._$AH.handleEvent(t);
    }
  } class Ni {
    constructor(t, r, i) {
      this.element=t, this.type=6, this._$AN=void 0, this._$AM=r, this.options=i;
    } get _$AU() {
      return this._$AM._$AU;
    }_$AI(t) {
      Mt(this, t);
    }
  } const Rr=window.litHtmlPolyfillSupport; Rr==null||Rr(Jt, Qt), ((ze=globalThis.litHtmlVersions)!==null&&ze!==void 0?ze:globalThis.litHtmlVersions=[]).push('2.2.5');/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let We; let Fe; class Dt extends Tt {
    constructor() {
      super(...arguments), this.renderOptions={host: this}, this._$Dt=void 0;
    }createRenderRoot() {
      let t; let r; const i=super.createRenderRoot(); return (t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=i.firstChild), i;
    }update(t) {
      const r=this.render(); this.hasUpdated||(this.renderOptions.isConnected=this.isConnected), super.update(t), this._$Dt=Ci(r, this.renderRoot, this.renderOptions);
    }connectedCallback() {
      let t; super.connectedCallback(), (t=this._$Dt)===null||t===void 0||t.setConnected(!0);
    }disconnectedCallback() {
      let t; super.disconnectedCallback(), (t=this._$Dt)===null||t===void 0||t.setConnected(!1);
    }render() {
      return vt;
    }
  }Dt.finalized=!0, Dt._$litElement$=!0, (We=globalThis.litElementHydrateSupport)===null||We===void 0||We.call(globalThis, {LitElement: Dt}); const Pr=globalThis.litElementPolyfillSupport; Pr==null||Pr({LitElement: Dt}), ((Fe=globalThis.litElementVersions)!==null&&Fe!==void 0?Fe:globalThis.litElementVersions=[]).push('3.2.0'); class lt extends Dt {
    constructor() {
      super(...arguments), this.__off__=!1;
    }
  }lt.shadowRootOptions=He(Ue({}, Dt.shadowRootOptions), {mode: 'open', delegatesFocus: !0}), lt.properties={__off__: {attribute: !0, type: Boolean, reflect: !0}}; const ki=z`
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
`; const Ui=z`
  ${ki}
`;function Zt(e, t, r) {
    if (typeof window!='undefined') {
      try {
        window.customElements.define(e, t, r);
      } catch (i) {
        if (i instanceof DOMException) {
          const n='Failed to execute \'define\' on \'CustomElementRegistry\''; const o='has already been used with this registry'; if (i.message.includes(n)&&i.message.includes(o)) return;
        } throw i;
      }
    }
  } const Hi=z`
:root {
  --text-normal-color: var(--neutral-26);
  --text-heading-color: var(--neutral-0);
}
`; const Bi=z`
  ${Hi}
`; const Ii=z`
:root .dark-mode {
  --text-normal-color: var(--neutral-88);
  --text-heading-color: var(--neutral-100);
}
`; const ji=z`
  ${Ii}
`; const Vi=z`
  :root {
    --accordion-trigger-border-color: var(--neutral-50);
    --accordion-trigger-open-background-color: var(--neutral-100);
  }
  :root .dark-mode {
    --accordion-trigger-border-color: var(--neutral-50);
    --accordion-trigger-open-background-color: var(--neutral-26);
  }
`; const zi=z` 
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
`; const Wi=z`
  :root {
    --tooltip-background-color: var(--green-80);
  }
  :root .dark-mode {
    --tooltip-background-color: var(--green-80);
  }

  ${zi}
`; const Fi=z`
  ${Vi}
  ${Wi}
`; const qi='cta-theme'; class me extends lt {
    createRenderRoot() {
      return this;
    }render() {
      return wt`
        <style>
          .cta-theme {
            display: none;
          }
          ${Ui}
          ${Bi}
          ${ji}
          ${Fi}
        </style>
      `;
    }
  }me.tagName=qi, Zt(me.tagName, me);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gi=(e)=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qe={ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6}; const Ge=(e)=>(...t)=>({_$litDirective$: e, values: t}); class Xe {
    constructor(t) {} get _$AU() {
      return this._$AM._$AU;
    }_$AT(t, r, i) {
      this._$Ct=t, this._$AM=r, this._$Ci=i;
    }_$AS(t, r) {
      return this.update(t, r);
    }update(t, r) {
      return this.render(...r);
    }
  }/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const te=(e, t)=>{
    let r; let i; const n=e._$AN; if (n===void 0) return !1; for (const o of n)(i=(r=o)._$AO)===null||i===void 0||i.call(r, t, !1), te(o, t); return !0;
  }; const ge=(e)=>{
    let t; let r; do {
      if ((t=e._$AM)===void 0) break; r=t._$AN, r.delete(e), e=t;
    } while ((r==null?void 0:r.size)===0);
  }; const Nr=(e)=>{
    for (let t; t=e._$AM; e=t) {
      let r=t._$AN; if (r===void 0)t._$AN=r=new Set; else if (r.has(e)) break; r.add(e), Ki(t);
    }
  }; function Xi(e) {
this._$AN!==void 0?(ge(this), this._$AM=e, Nr(this)):this._$AM=e;
  } function Yi(e, t=!1, r=0) {
    const i=this._$AH; const n=this._$AN; if (n!==void 0&&n.size!==0) if (t) if (Array.isArray(i)) for (let o=r; o<i.length; o++)te(i[o], !1), ge(i[o]); else i!=null&&(te(i, !1), ge(i)); else te(this, e);
  } const Ki=(e)=>{
    let t; let r; let i; let n; e.type==qe.CHILD&&((t=(i=e)._$AP)!==null&&t!==void 0||(i._$AP=Yi), (r=(n=e)._$AQ)!==null&&r!==void 0||(n._$AQ=Xi));
  }; class Ji extends Xe {
    constructor() {
      super(...arguments), this._$AN=void 0;
    }_$AT(t, r, i) {
      super._$AT(t, r, i), Nr(this), this.isConnected=t._$AU;
    }_$AO(t, r=!0) {
      let i; let n; t!==this.isConnected&&(this.isConnected=t, t?(i=this.reconnected)===null||i===void 0||i.call(this):(n=this.disconnected)===null||n===void 0||n.call(this)), r&&(te(this, t), ge(this));
    }setValue(t) {
      if (Gi(this._$Ct)) this._$Ct._$AI(t, this); else {
        const r=[...this._$Ct._$AH]; r[this._$Ci]=t, this._$Ct._$AI(r, this, 0);
      }
    }disconnected() {}reconnected() {}
  }/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kr=()=>new Qi; class Qi {} const Ye=new WeakMap; const Ur=Ge(class extends Ji {
    render(e) {
      return S;
    }update(e, [t]) {
      let r; const i=t!==this.U; return i&&this.U!==void 0&&this.ot(void 0), (i||this.rt!==this.lt)&&(this.U=t, this.ht=(r=e.options)===null||r===void 0?void 0:r.host, this.ot(this.lt=e.element)), S;
    }ot(e) {
      let t; if (typeof this.U=='function') {
        const r=(t=this.ht)!==null&&t!==void 0?t:globalThis; let i=Ye.get(r); i===void 0&&(i=new WeakMap, Ye.set(r, i)), i.get(this.U)!==void 0&&this.U.call(this.ht, void 0), i.set(this.U, e), e!==void 0&&this.U.call(this.ht, e);
      } else this.U.value=e;
    } get rt() {
      let e; let t; let r; return typeof this.U=='function'?(t=Ye.get((e=this.ht)!==null&&e!==void 0?e:globalThis))===null||t===void 0?void 0:t.get(this.U):(r=this.U)===null||r===void 0?void 0:r.value;
    }disconnected() {
      this.rt===this.lt&&this.ot(void 0);
    }reconnected() {
      this.ot(this.lt);
    }
  });/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zi=Ge(class extends Xe {
    constructor(e) {
      let t; if (super(e), e.type!==qe.ATTRIBUTE||e.name!=='class'||((t=e.strings)===null||t===void 0?void 0:t.length)>2) throw Error('`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.');
    }render(e) {
      return ' '+Object.keys(e).filter((t)=>e[t]).join(' ')+' ';
    }update(e, [t]) {
      let r; let i; if (this.et===void 0) {
        this.et=new Set, e.strings!==void 0&&(this.st=new Set(e.strings.join(' ').split(/\s/).filter((o)=>o!==''))); for (const o in t)t[o]&&!(!((r=this.st)===null||r===void 0)&&r.has(o))&&this.et.add(o); return this.render(t);
      } const n=e.element.classList; this.et.forEach((o)=>{
        o in t||(n.remove(o), this.et.delete(o));
      }); for (const o in t) {
        const a=!!t[o]; a===this.et.has(o)||((i=this.st)===null||i===void 0?void 0:i.has(o))||(a?(n.add(o), this.et.add(o)):(n.remove(o), this.et.delete(o)));
      } return vt;
    }
  }); let ye; const tn=new Uint8Array(16); function en() {
    if (!ye&&(ye=typeof crypto!='undefined'&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!='undefined'&&typeof msCrypto.getRandomValues=='function'&&msCrypto.getRandomValues.bind(msCrypto), !ye)) throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported'); return ye(tn);
  } const rn=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i; function nn(e) {
    return typeof e=='string'&&rn.test(e);
  } for (var k=[], Ke=0; Ke<256; ++Ke)k.push((Ke+256).toString(16).substr(1)); function on(e) {
    const t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0; const r=(k[e[t+0]]+k[e[t+1]]+k[e[t+2]]+k[e[t+3]]+'-'+k[e[t+4]]+k[e[t+5]]+'-'+k[e[t+6]]+k[e[t+7]]+'-'+k[e[t+8]]+k[e[t+9]]+'-'+k[e[t+10]]+k[e[t+11]]+k[e[t+12]]+k[e[t+13]]+k[e[t+14]]+k[e[t+15]]).toLowerCase(); if (!nn(r)) throw TypeError('Stringified UUID is invalid'); return r;
  } function an(e, t, r) {
    e=e||{}; const i=e.random||(e.rng||en)(); if (i[6]=i[6]&15|64, i[8]=i[8]&63|128, t) {
      r=r||0; for (let n=0; n<16; ++n)t[r+n]=i[n]; return t;
    } return on(i);
  } const sn=z`
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
`; const ln='cta-accordion'; class Rt extends lt {
    constructor() {
      super(), this.open=!1, this.name='', this.uuid='', this.panelRef=kr(), this.uuid=an();
    }firstUpdated() {
      if (this.name.trim()==='') throw new Error('Accordion name attribute is required.');
    }updated(t) {
      t.has('open')&&(this.handleIsOpenClass(), this.togglePanel());
    }handleIsOpenClass() {
      const t='is-open'; const {open: r}=this; r?this.classList.add(t):this.classList.remove(t);
    }togglePanel() {
      const t=this.panelRef.value; !t||(this.open?this.expandPanel(t):this.collapsePanel(t));
    }collapsePanel(t) {
      const r=t.scrollHeight; const i=t.style.transition; t.style.transition='', requestAnimationFrame(function() {
        t.style.height=`${r}px`, t.style.transition=i, requestAnimationFrame(function() {
          t.classList.remove('panel-open'), t.style.height='0px';
        });
      }), t.setAttribute('data-collapsed', 'true');
    }expandPanel(t) {
      const r=t.scrollHeight; t.style.height=r+'px', t.classList.add('panel-open'), t.setAttribute('data-collapsed', 'false');
    }onClick() {
      this.open=!this.open;
    }render() {
      const t={open: this.open}; return this.__off__?wt`${this.innerHTML}`:wt`
      <div data-name="accordion-trigger" @click=${this.onClick} aria-controls=${this.uuid} aria-expanded=${this.open}
        class=${Zi(t)}>
        <button type="button" data-name="accordion-trigger-content">
          ${this.name}
        </button>
        <cta-icon data-name="accordion-trigger-icon" name="chevron-down" width="24" height="24"></cta-icon>
      </div>
      
      <div data-name="accordion-panel" id=${this.uuid} ${Ur(this.panelRef)} aria-labelledby=${this.name}>
        <slot></slot>
      </div>
    `;
    }
  }Rt.tagName=ln, Rt.styles=[sn], Rt.properties=He(Ue({}, lt.properties), {open: {attribute: !0, type: Boolean, reflect: !0}, name: {attribute: !0, type: String, reflect: !0}}), Zt(Rt.tagName, Rt); function cn(e, t, r, i={}) {
    return e.addEventListener(t, r, i), ()=>{
      e.removeEventListener(t, r, i);
    };
  } function un(e) {
    const t=typeof e; return e!=null&&t==='object';
  } function pn(e, t) {
    return un(t)&&e in t;
  } const dn='cta-accordion-group'; class Pt extends lt {
    constructor() {
      super(...arguments), this.multipleOpen=!1, this.removeListener=null, this.currentlyOpen=null;
    }connectedCallback() {
      this.removeListener=cn(this, 'click', this.onClick.bind(this));
    }disconnectedCallback() {
      let t; super.disconnectedCallback(), this.currentlyOpen=null, (t=this.removeListener)==null||t.call(this);
    }onClick(t) {
      if (this.multipleOpen) return; const r=t.target instanceof HTMLElement?t.target:null; !r||r!==this.currentlyOpen&&(this.currentlyOpen&&pn('open', this.currentlyOpen)&&(this.currentlyOpen.open=!1), this.currentlyOpen=r);
    }render() {
      return this.__off__?wt`${this.innerHTML}`:wt`
      <slot></slot>
    `;
    }
  }Pt.tagName=dn, Pt.styles=z`
    :host {
      display: contents;
    }
  `, Pt.properties=He(Ue({}, lt.properties), {multipleOpen: {attribute: !0, type: Boolean, reflect: !0}}), Zt(Pt.tagName, Pt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Je extends Xe {
    constructor(t) {
      if (super(t), this.it=S, t.type!==qe.CHILD) throw Error(this.constructor.directiveName+'() can only be used in child bindings');
    }render(t) {
      if (t===S||t==null) return this.ft=void 0, this.it=t; if (t===vt) return t; if (typeof t!='string') throw Error(this.constructor.directiveName+'() called with a non-string value'); if (t===this.it) return this.ft; this.it=t; const r=[t]; return r.raw=r, this.ft={_$litType$: this.constructor.resultType, strings: r, values: []};
    }
  }Je.directiveName='unsafeHTML', Je.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Qe extends Je {}Qe.directiveName='unsafeSVG', Qe.resultType=2; const fn=Ge(Qe);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ze=(e)=>e!=null?e:S; const tr=new Map; tr.set('chevron-down', Object.freeze({id: 'chevron-down', viewBox: '0 0 24 24', markup: `
  <path fill="currentcolor" d="M16.6 8.6 12 13.2 7.4 8.6 6 10l6 6 6-6z"></path>
`})), tr.set('close-circle', Object.freeze({id: 'null', viewBox: '0 0 252 252', markup: `
  <path d="M126 0a126 126 0 1 0 0 252 126 126 0 0 0 0-252zm0 234a108 108 0 1 1 0-216 108 108 0 0 1 0 216z"></path>
  <path d="M165 87c-4-3-10-3-13 0l-26 26-26-26a9 9 0 1 0-13 13l26 26-26 26a9 9 0 1 0 13 13l26-26 26 26a9 9 0 0 0 13 0c3-4 3-10 0-13l-26-26 26-26c3-3 3-9 0-13z"></path>
`})); const hn={get(e) {
    return tr.get(e);
  }}; const vn='cta-icon'; const mn=(e)=>hn.get(e); class Nt extends lt {
    constructor() {
      super(...arguments), this.name='', this.inline=!1;
    }getIcon() {
      return mn(this.name);
    }render() {
      const t=this.getIcon(); return wt`
      <svg id=${t==null?void 0:t.id} viewBox=${t==null?void 0:t.viewBox} class=${Ze(this.class)} width=${Ze(this.width)} height=${Ze(this.height)}>
        ${fn(t==null?void 0:t.markup)}
      </svg>
    `;
    }
  }Nt.tagName=vn, Nt.styles=z`
    :host {
      display: flex;
    }
    :host([inline]) {
      display: inline-flex;
    }
  `, Nt.properties={name: {attribute: !0, type: String, reflect: !0}, inline: {attribute: !0, type: Boolean, reflect: !0}, class: {attribute: !0, type: String, reflect: !0}, width: {attribute: !0, type: Number, reflect: !0}, height: {attribute: !0, type: Number, reflect: !0}}, Zt(Nt.tagName, Nt); const W='top'; const G='bottom'; const X='right'; const F='left'; const er='auto'; const ee=[W, G, X, F]; const kt='start'; const re='end'; const gn='clippingParents'; const Hr='viewport'; const ie='popper'; const yn='reference'; const Br=ee.reduce(function(e, t) {
    return e.concat([t+'-'+kt, t+'-'+re]);
  }, []); const Ir=[].concat(ee, [er]).reduce(function(e, t) {
    return e.concat([t, t+'-'+kt, t+'-'+re]);
  }, []); const bn='beforeRead'; const wn='read'; const $n='afterRead'; const An='beforeMain'; const xn='main'; const En='afterMain'; const _n='beforeWrite'; const On='write'; const Tn='afterWrite'; const Cn=[bn, wn, $n, An, xn, En, _n, On, Tn]; function rt(e) {
    return e?(e.nodeName||'').toLowerCase():null;
  } function J(e) {
    if (e==null) return window; if (e.toString()!=='[object Window]') {
      const t=e.ownerDocument; return t&&t.defaultView||window;
    } return e;
  } function Ut(e) {
    const t=J(e).Element; return e instanceof t||e instanceof Element;
  } function Y(e) {
    const t=J(e).HTMLElement; return e instanceof t||e instanceof HTMLElement;
  } function rr(e) {
    if (typeof ShadowRoot=='undefined') return !1; const t=J(e).ShadowRoot; return e instanceof t||e instanceof ShadowRoot;
  } function Sn(e) {
    const t=e.state; Object.keys(t.elements).forEach(function(r) {
      const i=t.styles[r]||{}; const n=t.attributes[r]||{}; const o=t.elements[r]; !Y(o)||!rt(o)||(Object.assign(o.style, i), Object.keys(n).forEach(function(a) {
        const u=n[a]; u===!1?o.removeAttribute(a):o.setAttribute(a, u===!0?'':u);
      }));
    });
  } function Ln(e) {
    const t=e.state; const r={popper: {position: t.options.strategy, left: '0', top: '0', margin: '0'}, arrow: {position: 'absolute'}, reference: {}}; return Object.assign(t.elements.popper.style, r.popper), t.styles=r, t.elements.arrow&&Object.assign(t.elements.arrow.style, r.arrow), function() {
      Object.keys(t.elements).forEach(function(i) {
        const n=t.elements[i]; const o=t.attributes[i]||{}; const a=Object.keys(t.styles.hasOwnProperty(i)?t.styles[i]:r[i]); const u=a.reduce(function(l, p) {
          return l[p]='', l;
        }, {}); !Y(n)||!rt(n)||(Object.assign(n.style, u), Object.keys(o).forEach(function(l) {
          n.removeAttribute(l);
        }));
      });
    };
  } const jr={name: 'applyStyles', enabled: !0, phase: 'write', fn: Sn, effect: Ln, requires: ['computeStyles']}; function it(e) {
    return e.split('-')[0];
  } const $t=Math.max; const be=Math.min; const Ht=Math.round; function Bt(e, t) {
    t===void 0&&(t=!1); const r=e.getBoundingClientRect(); let i=1; let n=1; if (Y(e)&&t) {
      const o=e.offsetHeight; const a=e.offsetWidth; a>0&&(i=Ht(r.width)/a||1), o>0&&(n=Ht(r.height)/o||1);
    } return {width: r.width/i, height: r.height/n, top: r.top/n, right: r.right/i, bottom: r.bottom/n, left: r.left/i, x: r.left/i, y: r.top/n};
  } function ir(e) {
    const t=Bt(e); let r=e.offsetWidth; let i=e.offsetHeight; return Math.abs(t.width-r)<=1&&(r=t.width), Math.abs(t.height-i)<=1&&(i=t.height), {x: e.offsetLeft, y: e.offsetTop, width: r, height: i};
  } function Vr(e, t) {
    const r=t.getRootNode&&t.getRootNode(); if (e.contains(t)) return !0; if (r&&rr(r)) {
      let i=t; do {
        if (i&&e.isSameNode(i)) return !0; i=i.parentNode||i.host;
      } while (i);
    } return !1;
  } function ct(e) {
    return J(e).getComputedStyle(e);
  } function Mn(e) {
    return ['table', 'td', 'th'].indexOf(rt(e))>=0;
  } function mt(e) {
    return ((Ut(e)?e.ownerDocument:e.document)||window.document).documentElement;
  } function we(e) {
    return rt(e)==='html'?e:e.assignedSlot||e.parentNode||(rr(e)?e.host:null)||mt(e);
  } function zr(e) {
    return !Y(e)||ct(e).position==='fixed'?null:e.offsetParent;
  } function Dn(e) {
    const t=navigator.userAgent.toLowerCase().indexOf('firefox')!==-1; const r=navigator.userAgent.indexOf('Trident')!==-1; if (r&&Y(e)) {
      const i=ct(e); if (i.position==='fixed') return null;
    } let n=we(e); for (rr(n)&&(n=n.host); Y(n)&&['html', 'body'].indexOf(rt(n))<0;) {
      const o=ct(n); if (o.transform!=='none'||o.perspective!=='none'||o.contain==='paint'||['transform', 'perspective'].indexOf(o.willChange)!==-1||t&&o.willChange==='filter'||t&&o.filter&&o.filter!=='none') return n; n=n.parentNode;
    } return null;
  } function ne(e) {
    for (var t=J(e), r=zr(e); r&&Mn(r)&&ct(r).position==='static';)r=zr(r); return r&&(rt(r)==='html'||rt(r)==='body'&&ct(r).position==='static')?t:r||Dn(e)||t;
  } function nr(e) {
    return ['top', 'bottom'].indexOf(e)>=0?'x':'y';
  } function oe(e, t, r) {
    return $t(e, be(t, r));
  } function Rn(e, t, r) {
    const i=oe(e, t, r); return i>r?r:i;
  } function Wr() {
    return {top: 0, right: 0, bottom: 0, left: 0};
  } function Fr(e) {
    return Object.assign({}, Wr(), e);
  } function qr(e, t) {
    return t.reduce(function(r, i) {
      return r[i]=e, r;
    }, {});
  } const Pn=function(t, r) {
    return t=typeof t=='function'?t(Object.assign({}, r.rects, {placement: r.placement})):t, Fr(typeof t!='number'?t:qr(t, ee));
  }; function Nn(e) {
    let t; const r=e.state; const i=e.name; const n=e.options; const o=r.elements.arrow; const a=r.modifiersData.popperOffsets; const u=it(r.placement); const l=nr(u); const p=[F, X].indexOf(u)>=0; const d=p?'height':'width'; if (!(!o||!a)) {
      const f=Pn(n.padding, r); const g=ir(o); const m=l==='y'?W:F; const w=l==='y'?G:X; const b=r.rects.reference[d]+r.rects.reference[l]-a[l]-r.rects.popper[d]; const $=a[l]-r.rects.reference[l]; const T=ne(o); const E=T?l==='y'?T.clientHeight||0:T.clientWidth||0:0; const C=b/2-$/2; const s=f[m]; const _=E-g[d]-f[w]; const v=E/2-g[d]/2+C; const O=oe(s, v, _); const M=l; r.modifiersData[i]=(t={}, t[M]=O, t.centerOffset=O-v, t);
    }
  } function kn(e) {
    const t=e.state; const r=e.options; const i=r.element; let n=i===void 0?'[data-popper-arrow]':i; n!=null&&(typeof n=='string'&&(n=t.elements.popper.querySelector(n), !n)||!Vr(t.elements.popper, n)||(t.elements.arrow=n));
  } const Un={name: 'arrow', enabled: !0, phase: 'main', fn: Nn, effect: kn, requires: ['popperOffsets'], requiresIfExists: ['preventOverflow']}; function It(e) {
    return e.split('-')[1];
  } const Hn={top: 'auto', right: 'auto', bottom: 'auto', left: 'auto'}; function Bn(e) {
    const t=e.x; const r=e.y; const i=window; const n=i.devicePixelRatio||1; return {x: Ht(t*n)/n||0, y: Ht(r*n)/n||0};
  } function Gr(e) {
    let t; const r=e.popper; const i=e.popperRect; const n=e.placement; const o=e.variation; const a=e.offsets; const u=e.position; const l=e.gpuAcceleration; const p=e.adaptive; const d=e.roundOffsets; const f=e.isFixed; const g=a.x; let m=g===void 0?0:g; const w=a.y; let b=w===void 0?0:w; const $=typeof d=='function'?d({x: m, y: b}):{x: m, y: b}; m=$.x, b=$.y; const T=a.hasOwnProperty('x'); const E=a.hasOwnProperty('y'); let C=F; let s=W; const _=window; if (p) {
      let v=ne(r); let O='clientHeight'; let M='clientWidth'; if (v===J(r)&&(v=mt(r), ct(v).position!=='static'&&u==='absolute'&&(O='scrollHeight', M='scrollWidth')), v=v, n===W||(n===F||n===X)&&o===re) {
        s=G; const N=f&&v===_&&_.visualViewport?_.visualViewport.height:v[O]; b-=N-i.height, b*=l?1:-1;
      } if (n===F||(n===W||n===G)&&o===re) {
        C=X; const R=f&&v===_&&_.visualViewport?_.visualViewport.width:v[M]; m-=R-i.width, m*=l?1:-1;
      }
    } const P=Object.assign({position: u}, p&&Hn); const L=d===!0?Bn({x: m, y: b}):{x: m, y: b}; if (m=L.x, b=L.y, l) {
      let D; return Object.assign({}, P, (D={}, D[s]=E?'0':'', D[C]=T?'0':'', D.transform=(_.devicePixelRatio||1)<=1?'translate('+m+'px, '+b+'px)':'translate3d('+m+'px, '+b+'px, 0)', D));
    } return Object.assign({}, P, (t={}, t[s]=E?b+'px':'', t[C]=T?m+'px':'', t.transform='', t));
  } function In(e) {
    const t=e.state; const r=e.options; const i=r.gpuAcceleration; const n=i===void 0?!0:i; const o=r.adaptive; const a=o===void 0?!0:o; const u=r.roundOffsets; const l=u===void 0?!0:u; const p={placement: it(t.placement), variation: It(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: n, isFixed: t.options.strategy==='fixed'}; t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({}, t.styles.popper, Gr(Object.assign({}, p, {offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: a, roundOffsets: l})))), t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({}, t.styles.arrow, Gr(Object.assign({}, p, {offsets: t.modifiersData.arrow, position: 'absolute', adaptive: !1, roundOffsets: l})))), t.attributes.popper=Object.assign({}, t.attributes.popper, {'data-popper-placement': t.placement});
  } const jn={name: 'computeStyles', enabled: !0, phase: 'beforeWrite', fn: In, data: {}}; const $e={passive: !0}; function Vn(e) {
    const t=e.state; const r=e.instance; const i=e.options; const n=i.scroll; const o=n===void 0?!0:n; const a=i.resize; const u=a===void 0?!0:a; const l=J(t.elements.popper); const p=[].concat(t.scrollParents.reference, t.scrollParents.popper); return o&&p.forEach(function(d) {
      d.addEventListener('scroll', r.update, $e);
    }), u&&l.addEventListener('resize', r.update, $e), function() {
      o&&p.forEach(function(d) {
        d.removeEventListener('scroll', r.update, $e);
      }), u&&l.removeEventListener('resize', r.update, $e);
    };
  } const zn={name: 'eventListeners', enabled: !0, phase: 'write', fn: function() {}, effect: Vn, data: {}}; const Wn={left: 'right', right: 'left', bottom: 'top', top: 'bottom'}; function Ae(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
      return Wn[t];
    });
  } const Fn={start: 'end', end: 'start'}; function Xr(e) {
    return e.replace(/start|end/g, function(t) {
      return Fn[t];
    });
  } function or(e) {
    const t=J(e); const r=t.pageXOffset; const i=t.pageYOffset; return {scrollLeft: r, scrollTop: i};
  } function ar(e) {
    return Bt(mt(e)).left+or(e).scrollLeft;
  } function qn(e) {
    const t=J(e); const r=mt(e); const i=t.visualViewport; let n=r.clientWidth; let o=r.clientHeight; let a=0; let u=0; return i&&(n=i.width, o=i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=i.offsetLeft, u=i.offsetTop)), {width: n, height: o, x: a+ar(e), y: u};
  } function Gn(e) {
    let t; const r=mt(e); const i=or(e); const n=(t=e.ownerDocument)==null?void 0:t.body; const o=$t(r.scrollWidth, r.clientWidth, n?n.scrollWidth:0, n?n.clientWidth:0); const a=$t(r.scrollHeight, r.clientHeight, n?n.scrollHeight:0, n?n.clientHeight:0); let u=-i.scrollLeft+ar(e); const l=-i.scrollTop; return ct(n||r).direction==='rtl'&&(u+=$t(r.clientWidth, n?n.clientWidth:0)-o), {width: o, height: a, x: u, y: l};
  } function sr(e) {
    const t=ct(e); const r=t.overflow; const i=t.overflowX; const n=t.overflowY; return /auto|scroll|overlay|hidden/.test(r+n+i);
  } function Yr(e) {
    return ['html', 'body', '#document'].indexOf(rt(e))>=0?e.ownerDocument.body:Y(e)&&sr(e)?e:Yr(we(e));
  } function ae(e, t) {
    let r; t===void 0&&(t=[]); const i=Yr(e); const n=i===((r=e.ownerDocument)==null?void 0:r.body); const o=J(i); const a=n?[o].concat(o.visualViewport||[], sr(i)?i:[]):i; const u=t.concat(a); return n?u:u.concat(ae(we(a)));
  } function lr(e) {
    return Object.assign({}, e, {left: e.x, top: e.y, right: e.x+e.width, bottom: e.y+e.height});
  } function Xn(e) {
    const t=Bt(e); return t.top=t.top+e.clientTop, t.left=t.left+e.clientLeft, t.bottom=t.top+e.clientHeight, t.right=t.left+e.clientWidth, t.width=e.clientWidth, t.height=e.clientHeight, t.x=t.left, t.y=t.top, t;
  } function Kr(e, t) {
    return t===Hr?lr(qn(e)):Ut(t)?Xn(t):lr(Gn(mt(e)));
  } function Yn(e) {
    const t=ae(we(e)); const r=['absolute', 'fixed'].indexOf(ct(e).position)>=0; const i=r&&Y(e)?ne(e):e; return Ut(i)?t.filter(function(n) {
      return Ut(n)&&Vr(n, i)&&rt(n)!=='body';
    }):[];
  } function Kn(e, t, r) {
    const i=t==='clippingParents'?Yn(e):[].concat(t); const n=[].concat(i, [r]); const o=n[0]; const a=n.reduce(function(u, l) {
      const p=Kr(e, l); return u.top=$t(p.top, u.top), u.right=be(p.right, u.right), u.bottom=be(p.bottom, u.bottom), u.left=$t(p.left, u.left), u;
    }, Kr(e, o)); return a.width=a.right-a.left, a.height=a.bottom-a.top, a.x=a.left, a.y=a.top, a;
  } function Jr(e) {
    const t=e.reference; const r=e.element; const i=e.placement; const n=i?it(i):null; const o=i?It(i):null; const a=t.x+t.width/2-r.width/2; const u=t.y+t.height/2-r.height/2; let l; switch (n) {
      case W: l={x: a, y: t.y-r.height}; break; case G: l={x: a, y: t.y+t.height}; break; case X: l={x: t.x+t.width, y: u}; break; case F: l={x: t.x-r.width, y: u}; break; default: l={x: t.x, y: t.y};
    } const p=n?nr(n):null; if (p!=null) {
      const d=p==='y'?'height':'width'; switch (o) {
        case kt: l[p]=l[p]-(t[d]/2-r[d]/2); break; case re: l[p]=l[p]+(t[d]/2-r[d]/2); break;
      }
    } return l;
  } function se(e, t) {
    t===void 0&&(t={}); const r=t; const i=r.placement; const n=i===void 0?e.placement:i; const o=r.boundary; const a=o===void 0?gn:o; const u=r.rootBoundary; const l=u===void 0?Hr:u; const p=r.elementContext; const d=p===void 0?ie:p; const f=r.altBoundary; const g=f===void 0?!1:f; const m=r.padding; const w=m===void 0?0:m; const b=Fr(typeof w!='number'?w:qr(w, ee)); const $=d===ie?yn:ie; const T=e.rects.popper; const E=e.elements[g?$:d]; const C=Kn(Ut(E)?E:E.contextElement||mt(e.elements.popper), a, l); const s=Bt(e.elements.reference); const _=Jr({reference: s, element: T, strategy: 'absolute', placement: n}); const v=lr(Object.assign({}, T, _)); const O=d===ie?v:s; const M={top: C.top-O.top+b.top, bottom: O.bottom-C.bottom+b.bottom, left: C.left-O.left+b.left, right: O.right-C.right+b.right}; const N=e.modifiersData.offset; if (d===ie&&N) {
      const R=N[n]; Object.keys(M).forEach(function(P) {
        const L=[X, G].indexOf(P)>=0?1:-1; const D=[W, G].indexOf(P)>=0?'y':'x'; M[P]+=R[D]*L;
      });
    } return M;
  } function Jn(e, t) {
    t===void 0&&(t={}); const r=t; const i=r.placement; const n=r.boundary; const o=r.rootBoundary; const a=r.padding; const u=r.flipVariations; const l=r.allowedAutoPlacements; const p=l===void 0?Ir:l; const d=It(i); const f=d?u?Br:Br.filter(function(w) {
      return It(w)===d;
    }):ee; let g=f.filter(function(w) {
      return p.indexOf(w)>=0;
    }); g.length===0&&(g=f); const m=g.reduce(function(w, b) {
      return w[b]=se(e, {placement: b, boundary: n, rootBoundary: o, padding: a})[it(b)], w;
    }, {}); return Object.keys(m).sort(function(w, b) {
      return m[w]-m[b];
    });
  } function Qn(e) {
    if (it(e)===er) return []; const t=Ae(e); return [Xr(e), t, Xr(t)];
  } function Zn(e) {
    const t=e.state; const r=e.options; const i=e.name; if (!t.modifiersData[i]._skip) {
      for (var n=r.mainAxis, o=n===void 0?!0:n, a=r.altAxis, u=a===void 0?!0:a, l=r.fallbackPlacements, p=r.padding, d=r.boundary, f=r.rootBoundary, g=r.altBoundary, m=r.flipVariations, w=m===void 0?!0:m, b=r.allowedAutoPlacements, $=t.options.placement, T=it($), E=T===$, C=l||(E||!w?[Ae($)]:Qn($)), s=[$].concat(C).reduce(function(ut, et) {
          return ut.concat(it(et)===er?Jn(t, {placement: et, boundary: d, rootBoundary: f, padding: p, flipVariations: w, allowedAutoPlacements: b}):et);
        }, []), _=t.rects.reference, v=t.rects.popper, O=new Map, M=!0, N=s[0], R=0; R<s.length; R++) {
        const P=s[R]; const L=it(P); const D=It(P)===kt; const Z=[W, G].indexOf(L)>=0; const tt=Z?'width':'height'; const B=se(t, {placement: P, boundary: d, rootBoundary: f, altBoundary: g, padding: p}); let I=Z?D?X:F:D?G:W; _[tt]>v[tt]&&(I=Ae(I)); const U=Ae(I); const ot=[]; if (o&&ot.push(B[L]<=0), u&&ot.push(B[I]<=0, B[U]<=0), ot.every(function(ut) {
          return ut;
        })) {
          N=P, M=!1; break;
        }O.set(P, ot);
      } if (M) {
        for (let at=w?3:1, xt=function(et) {
            const pt=s.find(function(zt) {
              const dt=O.get(zt); if (dt) {
                return dt.slice(0, et).every(function(Wt) {
                  return Wt;
                });
              }
            }); if (pt) return N=pt, 'break';
          }, st=at; st>0; st--) {
          const Et=xt(st); if (Et==='break') break;
        }
      }t.placement!==N&&(t.modifiersData[i]._skip=!0, t.placement=N, t.reset=!0);
    }
  } const to={name: 'flip', enabled: !0, phase: 'main', fn: Zn, requiresIfExists: ['offset'], data: {_skip: !1}}; function Qr(e, t, r) {
    return r===void 0&&(r={x: 0, y: 0}), {top: e.top-t.height-r.y, right: e.right-t.width+r.x, bottom: e.bottom-t.height+r.y, left: e.left-t.width-r.x};
  } function Zr(e) {
    return [W, X, G, F].some(function(t) {
      return e[t]>=0;
    });
  } function eo(e) {
    const t=e.state; const r=e.name; const i=t.rects.reference; const n=t.rects.popper; const o=t.modifiersData.preventOverflow; const a=se(t, {elementContext: 'reference'}); const u=se(t, {altBoundary: !0}); const l=Qr(a, i); const p=Qr(u, n, o); const d=Zr(l); const f=Zr(p); t.modifiersData[r]={referenceClippingOffsets: l, popperEscapeOffsets: p, isReferenceHidden: d, hasPopperEscaped: f}, t.attributes.popper=Object.assign({}, t.attributes.popper, {'data-popper-reference-hidden': d, 'data-popper-escaped': f});
  } const ro={name: 'hide', enabled: !0, phase: 'main', requiresIfExists: ['preventOverflow'], fn: eo}; function io(e, t, r) {
    const i=it(e); const n=[F, W].indexOf(i)>=0?-1:1; const o=typeof r=='function'?r(Object.assign({}, t, {placement: e})):r; let a=o[0]; let u=o[1]; return a=a||0, u=(u||0)*n, [F, X].indexOf(i)>=0?{x: u, y: a}:{x: a, y: u};
  } function no(e) {
    const t=e.state; const r=e.options; const i=e.name; const n=r.offset; const o=n===void 0?[0, 0]:n; const a=Ir.reduce(function(d, f) {
      return d[f]=io(f, t.rects, o), d;
    }, {}); const u=a[t.placement]; const l=u.x; const p=u.y; t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l, t.modifiersData.popperOffsets.y+=p), t.modifiersData[i]=a;
  } const oo={name: 'offset', enabled: !0, phase: 'main', requires: ['popperOffsets'], fn: no}; function ao(e) {
    const t=e.state; const r=e.name; t.modifiersData[r]=Jr({reference: t.rects.reference, element: t.rects.popper, strategy: 'absolute', placement: t.placement});
  } const so={name: 'popperOffsets', enabled: !0, phase: 'read', fn: ao, data: {}}; function lo(e) {
    return e==='x'?'y':'x';
  } function co(e) {
    const t=e.state; const r=e.options; const i=e.name; const n=r.mainAxis; const o=n===void 0?!0:n; const a=r.altAxis; const u=a===void 0?!1:a; const l=r.boundary; const p=r.rootBoundary; const d=r.altBoundary; const f=r.padding; const g=r.tether; const m=g===void 0?!0:g; const w=r.tetherOffset; const b=w===void 0?0:w; const $=se(t, {boundary: l, rootBoundary: p, padding: f, altBoundary: d}); const T=it(t.placement); const E=It(t.placement); const C=!E; const s=nr(T); const _=lo(s); const v=t.modifiersData.popperOffsets; const O=t.rects.reference; const M=t.rects.popper; const N=typeof b=='function'?b(Object.assign({}, t.rects, {placement: t.placement})):b; const R=typeof N=='number'?{mainAxis: N, altAxis: N}:Object.assign({mainAxis: 0, altAxis: 0}, N); const P=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null; const L={x: 0, y: 0}; if (!!v) {
      if (o) {
        let D; const Z=s==='y'?W:F; const tt=s==='y'?G:X; const B=s==='y'?'height':'width'; const I=v[s]; const U=I+$[Z]; const ot=I-$[tt]; const at=m?-M[B]/2:0; const xt=E===kt?O[B]:M[B]; const st=E===kt?-M[B]:-O[B]; const Et=t.elements.arrow; const ut=m&&Et?ir(Et):{width: 0, height: 0}; const et=t.modifiersData['arrow#persistent']?t.modifiersData['arrow#persistent'].padding:Wr(); const pt=et[Z]; const zt=et[tt]; const dt=oe(0, O[B], ut[B]); const Wt=C?O[B]/2-at-dt-pt-R.mainAxis:xt-dt-pt-R.mainAxis; const gt=C?-O[B]/2+at+dt+zt+R.mainAxis:st+dt+zt+R.mainAxis; const Ft=t.elements.arrow&&ne(t.elements.arrow); const Oe=Ft?s==='y'?Ft.clientTop||0:Ft.clientLeft||0:0; const ue=(D=P==null?void 0:P[s])!=null?D:0; const Te=I+Wt-ue-Oe; const Ce=I+gt-ue; const pe=oe(m?be(U, Te):U, I, m?$t(ot, Ce):ot); v[s]=pe, L[s]=pe-I;
      } if (u) {
        let de; const Se=s==='x'?W:F; const Le=s==='x'?G:X; const ft=v[_]; const yt=_==='y'?'height':'width'; const fe=ft+$[Se]; const _t=ft-$[Le]; const he=[W, F].indexOf(T)!==-1; const Me=(de=P==null?void 0:P[_])!=null?de:0; const De=he?fe:ft-O[yt]-M[yt]-Me+R.altAxis; const Re=he?ft+O[yt]+M[yt]-Me-R.altAxis:_t; const Pe=m&&he?Rn(De, ft, Re):oe(m?De:fe, ft, m?Re:_t); v[_]=Pe, L[_]=Pe-ft;
      }t.modifiersData[i]=L;
    }
  } const uo={name: 'preventOverflow', enabled: !0, phase: 'main', fn: co, requiresIfExists: ['offset']}; function po(e) {
    return {scrollLeft: e.scrollLeft, scrollTop: e.scrollTop};
  } function fo(e) {
    return e===J(e)||!Y(e)?or(e):po(e);
  } function ho(e) {
    const t=e.getBoundingClientRect(); const r=Ht(t.width)/e.offsetWidth||1; const i=Ht(t.height)/e.offsetHeight||1; return r!==1||i!==1;
  } function vo(e, t, r) {
    r===void 0&&(r=!1); const i=Y(t); const n=Y(t)&&ho(t); const o=mt(t); const a=Bt(e, n); let u={scrollLeft: 0, scrollTop: 0}; let l={x: 0, y: 0}; return (i||!i&&!r)&&((rt(t)!=='body'||sr(o))&&(u=fo(t)), Y(t)?(l=Bt(t, !0), l.x+=t.clientLeft, l.y+=t.clientTop):o&&(l.x=ar(o))), {x: a.left+u.scrollLeft-l.x, y: a.top+u.scrollTop-l.y, width: a.width, height: a.height};
  } function mo(e) {
    const t=new Map; const r=new Set; const i=[]; e.forEach(function(o) {
      t.set(o.name, o);
    }); function n(o) {
      r.add(o.name); const a=[].concat(o.requires||[], o.requiresIfExists||[]); a.forEach(function(u) {
        if (!r.has(u)) {
          const l=t.get(u); l&&n(l);
        }
      }), i.push(o);
    } return e.forEach(function(o) {
      r.has(o.name)||n(o);
    }), i;
  } function go(e) {
    const t=mo(e); return Cn.reduce(function(r, i) {
      return r.concat(t.filter(function(n) {
        return n.phase===i;
      }));
    }, []);
  } function yo(e) {
    let t; return function() {
      return t||(t=new Promise(function(r) {
        Promise.resolve().then(function() {
          t=void 0, r(e());
        });
      })), t;
    };
  } function bo(e) {
    const t=e.reduce(function(r, i) {
      const n=r[i.name]; return r[i.name]=n?Object.assign({}, n, i, {options: Object.assign({}, n.options, i.options), data: Object.assign({}, n.data, i.data)}):i, r;
    }, {}); return Object.keys(t).map(function(r) {
      return t[r];
    });
  } const ti={placement: 'bottom', modifiers: [], strategy: 'absolute'}; function ei() {
    for (var e=arguments.length, t=new Array(e), r=0; r<e; r++)t[r]=arguments[r]; return !t.some(function(i) {
      return !(i&&typeof i.getBoundingClientRect=='function');
    });
  } function wo(e) {
    e===void 0&&(e={}); const t=e; const r=t.defaultModifiers; const i=r===void 0?[]:r; const n=t.defaultOptions; const o=n===void 0?ti:n; return function(u, l, p) {
      p===void 0&&(p=o); let d={placement: 'bottom', orderedModifiers: [], options: Object.assign({}, ti, o), modifiersData: {}, elements: {reference: u, popper: l}, attributes: {}, styles: {}}; let f=[]; let g=!1; var m={state: d, setOptions: function(T) {
        const E=typeof T=='function'?T(d.options):T; b(), d.options=Object.assign({}, o, d.options, E), d.scrollParents={reference: Ut(u)?ae(u):u.contextElement?ae(u.contextElement):[], popper: ae(l)}; const C=go(bo([].concat(i, d.options.modifiers))); return d.orderedModifiers=C.filter(function(s) {
          return s.enabled;
        }), w(), m.update();
      }, forceUpdate: function() {
        if (!g) {
          const T=d.elements; const E=T.reference; const C=T.popper; if (!!ei(E, C)) {
            d.rects={reference: vo(E, ne(C), d.options.strategy==='fixed'), popper: ir(C)}, d.reset=!1, d.placement=d.options.placement, d.orderedModifiers.forEach(function(R) {
              return d.modifiersData[R.name]=Object.assign({}, R.data);
            }); for (let s=0; s<d.orderedModifiers.length; s++) {
              if (d.reset===!0) {
                d.reset=!1, s=-1; continue;
              } const _=d.orderedModifiers[s]; const v=_.fn; const O=_.options; const M=O===void 0?{}:O; const N=_.name; typeof v=='function'&&(d=v({state: d, options: M, name: N, instance: m})||d);
            }
          }
        }
      }, update: yo(function() {
        return new Promise(function($) {
          m.forceUpdate(), $(d);
        });
      }), destroy: function() {
        b(), g=!0;
      }}; if (!ei(u, l)) return m; m.setOptions(p).then(function($) {
        !g&&p.onFirstUpdate&&p.onFirstUpdate($);
      }); function w() {
        d.orderedModifiers.forEach(function($) {
          const T=$.name; const E=$.options; const C=E===void 0?{}:E; const s=$.effect; if (typeof s=='function') {
            const _=s({state: d, name: T, instance: m, options: C}); const v=function() {}; f.push(_||v);
          }
        });
      } function b() {
        f.forEach(function($) {
          return $();
        }), f=[];
      } return m;
    };
  } const $o=[zn, so, jn, jr, oo, to, uo, Un, ro]; const Ao=wo({defaultModifiers: $o}); const xo='tippy-box'; const ri='tippy-content'; const Eo='tippy-backdrop'; const ii='tippy-arrow'; const ni='tippy-svg-arrow'; const At={passive: !0, capture: !0}; const oi=function() {
    return document.body;
  }; function cr(e, t, r) {
    if (Array.isArray(e)) {
      const i=e[t]; return i==null?Array.isArray(r)?r[t]:r:i;
    } return e;
  } function ur(e, t) {
    const r={}.toString.call(e); return r.indexOf('[object')===0&&r.indexOf(t+']')>-1;
  } function ai(e, t) {
    return typeof e=='function'?e.apply(void 0, t):e;
  } function si(e, t) {
    if (t===0) return e; let r; return function(i) {
      clearTimeout(r), r=setTimeout(function() {
        e(i);
      }, t);
    };
  } function _o(e) {
    return e.split(/\s+/).filter(Boolean);
  } function jt(e) {
    return [].concat(e);
  } function li(e, t) {
    e.indexOf(t)===-1&&e.push(t);
  } function Oo(e) {
    return e.filter(function(t, r) {
      return e.indexOf(t)===r;
    });
  } function To(e) {
    return e.split('-')[0];
  } function xe(e) {
    return [].slice.call(e);
  } function ci(e) {
    return Object.keys(e).reduce(function(t, r) {
      return e[r]!==void 0&&(t[r]=e[r]), t;
    }, {});
  } function le() {
    return document.createElement('div');
  } function Ee(e) {
    return ['Element', 'Fragment'].some(function(t) {
      return ur(e, t);
    });
  } function Co(e) {
    return ur(e, 'NodeList');
  } function So(e) {
    return ur(e, 'MouseEvent');
  } function Lo(e) {
    return !!(e&&e._tippy&&e._tippy.reference===e);
  } function Mo(e) {
    return Ee(e)?[e]:Co(e)?xe(e):Array.isArray(e)?e:xe(document.querySelectorAll(e));
  } function pr(e, t) {
    e.forEach(function(r) {
      r&&(r.style.transitionDuration=t+'ms');
    });
  } function ui(e, t) {
    e.forEach(function(r) {
      r&&r.setAttribute('data-state', t);
    });
  } function Do(e) {
    let t; const r=jt(e); const i=r[0]; return i!=null&&(t=i.ownerDocument)!=null&&t.body?i.ownerDocument:document;
  } function Ro(e, t) {
    const r=t.clientX; const i=t.clientY; return e.every(function(n) {
      const o=n.popperRect; const a=n.popperState; const u=n.props; const l=u.interactiveBorder; const p=To(a.placement); const d=a.modifiersData.offset; if (!d) return !0; const f=p==='bottom'?d.top.y:0; const g=p==='top'?d.bottom.y:0; const m=p==='right'?d.left.x:0; const w=p==='left'?d.right.x:0; const b=o.top-i+f>l; const $=i-o.bottom-g>l; const T=o.left-r+m>l; const E=r-o.right-w>l; return b||$||T||E;
    });
  } function dr(e, t, r) {
    const i=t+'EventListener'; ['transitionend', 'webkitTransitionEnd'].forEach(function(n) {
      e[i](n, r);
    });
  } function pi(e, t) {
    for (let r=t; r;) {
      var i; if (e.contains(r)) return !0; r=r.getRootNode==null||(i=r.getRootNode())==null?void 0:i.host;
    } return !1;
  } const nt={isTouch: !1}; let di=0; function Po() {
    nt.isTouch||(nt.isTouch=!0, window.performance&&document.addEventListener('mousemove', fi));
  } function fi() {
    const e=performance.now(); e-di<20&&(nt.isTouch=!1, document.removeEventListener('mousemove', fi)), di=e;
  } function No() {
    const e=document.activeElement; if (Lo(e)) {
      const t=e._tippy; e.blur&&!t.state.isVisible&&e.blur();
    }
  } function ko() {
    document.addEventListener('touchstart', Po, At), window.addEventListener('blur', No);
  } const Uo=typeof window!='undefined'&&typeof document!='undefined'; const Ho=Uo?!!window.msCrypto:!1; const Bo={animateFill: !1, followCursor: !1, inlinePositioning: !1, sticky: !1}; const Io={allowHTML: !1, animation: 'fade', arrow: !0, content: '', inertia: !1, maxWidth: 350, role: 'tooltip', theme: '', zIndex: 9999}; const Q=Object.assign({appendTo: oi, aria: {content: 'auto', expanded: 'auto'}, delay: 0, duration: [300, 250], getReferenceClientRect: null, hideOnClick: !0, ignoreAttributes: !1, interactive: !1, interactiveBorder: 2, interactiveDebounce: 0, moveTransition: '', offset: [0, 10], onAfterUpdate: function() {}, onBeforeUpdate: function() {}, onCreate: function() {}, onDestroy: function() {}, onHidden: function() {}, onHide: function() {}, onMount: function() {}, onShow: function() {}, onShown: function() {}, onTrigger: function() {}, onUntrigger: function() {}, onClickOutside: function() {}, placement: 'top', plugins: [], popperOptions: {}, render: null, showOnCreate: !1, touch: !0, trigger: 'mouseenter focus', triggerTarget: null}, Bo, Io); const jo=Object.keys(Q); const Vo=function(t) {
    const r=Object.keys(t); r.forEach(function(i) {
      Q[i]=t[i];
    });
  }; function hi(e) {
    const t=e.plugins||[]; const r=t.reduce(function(i, n) {
      const o=n.name; const a=n.defaultValue; if (o) {
        let u; i[o]=e[o]!==void 0?e[o]:(u=Q[o])!=null?u:a;
      } return i;
    }, {}); return Object.assign({}, e, r);
  } function zo(e, t) {
    const r=t?Object.keys(hi(Object.assign({}, Q, {plugins: t}))):jo; const i=r.reduce(function(n, o) {
      const a=(e.getAttribute('data-tippy-'+o)||'').trim(); if (!a) return n; if (o==='content')n[o]=a; else {
        try {
          n[o]=JSON.parse(a);
        } catch {
          n[o]=a;
        }
      } return n;
    }, {}); return i;
  } function vi(e, t) {
    const r=Object.assign({}, t, {content: ai(t.content, [e])}, t.ignoreAttributes?{}:zo(e, t.plugins)); return r.aria=Object.assign({}, Q.aria, r.aria), r.aria={expanded: r.aria.expanded==='auto'?t.interactive:r.aria.expanded, content: r.aria.content==='auto'?t.interactive?null:'describedby':r.aria.content}, r;
  } const Wo=function() {
    return 'innerHTML';
  }; function fr(e, t) {
    e[Wo()]=t;
  } function mi(e) {
    const t=le(); return e===!0?t.className=ii:(t.className=ni, Ee(e)?t.appendChild(e):fr(t, e)), t;
  } function gi(e, t) {
Ee(t.content)?(fr(e, ''), e.appendChild(t.content)):typeof t.content!='function'&&(t.allowHTML?fr(e, t.content):e.textContent=t.content);
  } function hr(e) {
    const t=e.firstElementChild; const r=xe(t.children); return {box: t, content: r.find(function(i) {
      return i.classList.contains(ri);
    }), arrow: r.find(function(i) {
      return i.classList.contains(ii)||i.classList.contains(ni);
    }), backdrop: r.find(function(i) {
      return i.classList.contains(Eo);
    })};
  } function yi(e) {
    const t=le(); const r=le(); r.className=xo, r.setAttribute('data-state', 'hidden'), r.setAttribute('tabindex', '-1'); const i=le(); i.className=ri, i.setAttribute('data-state', 'hidden'), gi(i, e.props), t.appendChild(r), r.appendChild(i), n(e.props, e.props); function n(o, a) {
      const u=hr(t); const l=u.box; const p=u.content; const d=u.arrow; a.theme?l.setAttribute('data-theme', a.theme):l.removeAttribute('data-theme'), typeof a.animation=='string'?l.setAttribute('data-animation', a.animation):l.removeAttribute('data-animation'), a.inertia?l.setAttribute('data-inertia', ''):l.removeAttribute('data-inertia'), l.style.maxWidth=typeof a.maxWidth=='number'?a.maxWidth+'px':a.maxWidth, a.role?l.setAttribute('role', a.role):l.removeAttribute('role'), (o.content!==a.content||o.allowHTML!==a.allowHTML)&&gi(p, e.props), a.arrow?d?o.arrow!==a.arrow&&(l.removeChild(d), l.appendChild(mi(a.arrow))):l.appendChild(mi(a.arrow)):d&&l.removeChild(d);
    } return {popper: t, onUpdate: n};
  }yi.$$tippy=!0; let Fo=1; let _e=[]; let vr=[]; function qo(e, t) {
    const r=vi(e, Object.assign({}, Q, hi(ci(t)))); let i; let n; let o; let a=!1; let u=!1; let l=!1; let p=!1; let d; let f; let g; let m=[]; let w=si(Te, r.interactiveDebounce); let b; const $=Fo++; const T=null; const E=Oo(r.plugins); const C={isEnabled: !0, isVisible: !1, isDestroyed: !1, isMounted: !1, isShown: !1}; const s={id: $, reference: e, popper: le(), popperInstance: T, props: r, state: C, plugins: E, clearDelayTimeouts: De, setProps: Re, setContent: Pe, show: Yo, hide: Ko, hideWithInteractivity: Jo, enable: he, disable: Me, unmount: Qo, destroy: Zo}; if (!r.render) return s; const _=r.render(s); const v=_.popper; const O=_.onUpdate; v.setAttribute('data-tippy-root', ''), v.id='tippy-'+s.id, s.popper=v, e._tippy=s, v._tippy=s; const M=E.map(function(c) {
      return c.fn(s);
    }); const N=e.hasAttribute('aria-expanded'); return Ft(), at(), I(), U('onCreate', [s]), r.showOnCreate&&fe(), v.addEventListener('mouseenter', function() {
      s.props.interactive&&s.state.isVisible&&s.clearDelayTimeouts();
    }), v.addEventListener('mouseleave', function() {
      s.props.interactive&&s.props.trigger.indexOf('mouseenter')>=0&&Z().addEventListener('mousemove', w);
    }), s; function R() {
      const c=s.props.touch; return Array.isArray(c)?c:[c, 0];
    } function P() {
      return R()[0]==='hold';
    } function L() {
      let c; return !!((c=s.props.render)!=null&&c.$$tippy);
    } function D() {
      return b||e;
    } function Z() {
      const c=D().parentNode; return c?Do(c):document;
    } function tt() {
      return hr(v);
    } function B(c) {
      return s.state.isMounted&&!s.state.isVisible||nt.isTouch||d&&d.type==='focus'?0:cr(s.props.delay, c?0:1, Q.delay);
    } function I(c) {
      c===void 0&&(c=!1), v.style.pointerEvents=s.props.interactive&&!c?'':'none', v.style.zIndex=''+s.props.zIndex;
    } function U(c, h, y) {
      if (y===void 0&&(y=!0), M.forEach(function(A) {
        A[c]&&A[c].apply(A, h);
      }), y) {
        let x; (x=s.props)[c].apply(x, h);
      }
    } function ot() {
      const c=s.props.aria; if (!!c.content) {
        const h='aria-'+c.content; const y=v.id; const x=jt(s.props.triggerTarget||e); x.forEach(function(A) {
          const j=A.getAttribute(h); if (s.state.isVisible)A.setAttribute(h, j?j+' '+y:y); else {
            const K=j&&j.replace(y, '').trim(); K?A.setAttribute(h, K):A.removeAttribute(h);
          }
        });
      }
    } function at() {
      if (!(N||!s.props.aria.expanded)) {
        const c=jt(s.props.triggerTarget||e); c.forEach(function(h) {
s.props.interactive?h.setAttribute('aria-expanded', s.state.isVisible&&h===D()?'true':'false'):h.removeAttribute('aria-expanded');
        });
      }
    } function xt() {
      Z().removeEventListener('mousemove', w), _e=_e.filter(function(c) {
        return c!==w;
      });
    } function st(c) {
      if (!(nt.isTouch&&(l||c.type==='mousedown'))) {
        const h=c.composedPath&&c.composedPath()[0]||c.target; if (!(s.props.interactive&&pi(v, h))) {
          if (jt(s.props.triggerTarget||e).some(function(y) {
            return pi(y, h);
          })) {
            if (nt.isTouch||s.state.isVisible&&s.props.trigger.indexOf('click')>=0) return;
          } else U('onClickOutside', [s, c]); s.props.hideOnClick===!0&&(s.clearDelayTimeouts(), s.hide(), u=!0, setTimeout(function() {
            u=!1;
          }), s.state.isMounted||pt());
        }
      }
    } function Et() {
      l=!0;
    } function ut() {
      l=!1;
    } function et() {
      const c=Z(); c.addEventListener('mousedown', st, !0), c.addEventListener('touchend', st, At), c.addEventListener('touchstart', ut, At), c.addEventListener('touchmove', Et, At);
    } function pt() {
      const c=Z(); c.removeEventListener('mousedown', st, !0), c.removeEventListener('touchend', st, At), c.removeEventListener('touchstart', ut, At), c.removeEventListener('touchmove', Et, At);
    } function zt(c, h) {
      Wt(c, function() {
        !s.state.isVisible&&v.parentNode&&v.parentNode.contains(v)&&h();
      });
    } function dt(c, h) {
      Wt(c, h);
    } function Wt(c, h) {
      const y=tt().box; function x(A) {
        A.target===y&&(dr(y, 'remove', x), h());
      } if (c===0) return h(); dr(y, 'remove', f), dr(y, 'add', x), f=x;
    } function gt(c, h, y) {
      y===void 0&&(y=!1); const x=jt(s.props.triggerTarget||e); x.forEach(function(A) {
        A.addEventListener(c, h, y), m.push({node: A, eventType: c, handler: h, options: y});
      });
    } function Ft() {
      P()&&(gt('touchstart', ue, {passive: !0}), gt('touchend', Ce, {passive: !0})), _o(s.props.trigger).forEach(function(c) {
        if (c!=='manual') {
          switch (gt(c, ue), c) {
            case 'mouseenter': gt('mouseleave', Ce); break; case 'focus': gt(Ho?'focusout':'blur', pe); break; case 'focusin': gt('focusout', pe); break;
          }
        }
      });
    } function Oe() {
      m.forEach(function(c) {
        const h=c.node; const y=c.eventType; const x=c.handler; const A=c.options; h.removeEventListener(y, x, A);
      }), m=[];
    } function ue(c) {
      let h; let y=!1; if (!(!s.state.isEnabled||de(c)||u)) {
        const x=((h=d)==null?void 0:h.type)==='focus'; d=c, b=c.currentTarget, at(), !s.state.isVisible&&So(c)&&_e.forEach(function(A) {
          return A(c);
        }), c.type==='click'&&(s.props.trigger.indexOf('mouseenter')<0||a)&&s.props.hideOnClick!==!1&&s.state.isVisible?y=!0:fe(c), c.type==='click'&&(a=!y), y&&!x&&_t(c);
      }
    } function Te(c) {
      const h=c.target; const y=D().contains(h)||v.contains(h); if (!(c.type==='mousemove'&&y)) {
        const x=yt().concat(v).map(function(A) {
          let j; const K=A._tippy; const qt=(j=K.popperInstance)==null?void 0:j.state; return qt?{popperRect: A.getBoundingClientRect(), popperState: qt, props: r}:null;
        }).filter(Boolean); Ro(x, c)&&(xt(), _t(c));
      }
    } function Ce(c) {
      const h=de(c)||s.props.trigger.indexOf('click')>=0&&a; if (!h) {
        if (s.props.interactive) {
          s.hideWithInteractivity(c); return;
        }_t(c);
      }
    } function pe(c) {
      s.props.trigger.indexOf('focusin')<0&&c.target!==D()||s.props.interactive&&c.relatedTarget&&v.contains(c.relatedTarget)||_t(c);
    } function de(c) {
      return nt.isTouch?P()!==c.type.indexOf('touch')>=0:!1;
    } function Se() {
      Le(); const c=s.props; const h=c.popperOptions; const y=c.placement; const x=c.offset; const A=c.getReferenceClientRect; const j=c.moveTransition; const K=L()?hr(v).arrow:null; const qt=A?{getBoundingClientRect: A, contextElement: A.contextElement||D()}:e; const bi={name: '$$tippy', enabled: !0, phase: 'beforeWrite', requires: ['computeStyles'], fn: function(Ne) {
        const Gt=Ne.state; if (L()) {
          const ta=tt(); const gr=ta.box; ['placement', 'reference-hidden', 'escaped'].forEach(function(ke) {
ke==='placement'?gr.setAttribute('data-placement', Gt.placement):Gt.attributes.popper['data-popper-'+ke]?gr.setAttribute('data-'+ke, ''):gr.removeAttribute('data-'+ke);
          }), Gt.attributes.popper={};
        }
      }}; const Ot=[{name: 'offset', options: {offset: x}}, {name: 'preventOverflow', options: {padding: {top: 2, bottom: 2, left: 5, right: 5}}}, {name: 'flip', options: {padding: 5}}, {name: 'computeStyles', options: {adaptive: !j}}, bi]; L()&&K&&Ot.push({name: 'arrow', options: {element: K, padding: 3}}), Ot.push.apply(Ot, (h==null?void 0:h.modifiers)||[]), s.popperInstance=Ao(qt, v, Object.assign({}, h, {placement: y, onFirstUpdate: g, modifiers: Ot}));
    } function Le() {
      s.popperInstance&&(s.popperInstance.destroy(), s.popperInstance=null);
    } function ft() {
      const c=s.props.appendTo; let h; const y=D(); s.props.interactive&&c===oi||c==='parent'?h=y.parentNode:h=ai(c, [y]), h.contains(v)||h.appendChild(v), s.state.isMounted=!0, Se();
    } function yt() {
      return xe(v.querySelectorAll('[data-tippy-root]'));
    } function fe(c) {
      s.clearDelayTimeouts(), c&&U('onTrigger', [s, c]), et(); let h=B(!0); const y=R(); const x=y[0]; const A=y[1]; nt.isTouch&&x==='hold'&&A&&(h=A), h?i=setTimeout(function() {
        s.show();
      }, h):s.show();
    } function _t(c) {
      if (s.clearDelayTimeouts(), U('onUntrigger', [s, c]), !s.state.isVisible) {
        pt(); return;
      } if (!(s.props.trigger.indexOf('mouseenter')>=0&&s.props.trigger.indexOf('click')>=0&&['mouseleave', 'mousemove'].indexOf(c.type)>=0&&a)) {
        const h=B(!1); h?n=setTimeout(function() {
          s.state.isVisible&&s.hide();
        }, h):o=requestAnimationFrame(function() {
          s.hide();
        });
      }
    } function he() {
      s.state.isEnabled=!0;
    } function Me() {
      s.hide(), s.state.isEnabled=!1;
    } function De() {
      clearTimeout(i), clearTimeout(n), cancelAnimationFrame(o);
    } function Re(c) {
      if (!s.state.isDestroyed) {
        U('onBeforeUpdate', [s, c]), Oe(); const h=s.props; const y=vi(e, Object.assign({}, h, ci(c), {ignoreAttributes: !0})); s.props=y, Ft(), h.interactiveDebounce!==y.interactiveDebounce&&(xt(), w=si(Te, y.interactiveDebounce)), h.triggerTarget&&!y.triggerTarget?jt(h.triggerTarget).forEach(function(x) {
          x.removeAttribute('aria-expanded');
        }):y.triggerTarget&&e.removeAttribute('aria-expanded'), at(), I(), O&&O(h, y), s.popperInstance&&(Se(), yt().forEach(function(x) {
          requestAnimationFrame(x._tippy.popperInstance.forceUpdate);
        })), U('onAfterUpdate', [s, c]);
      }
    } function Pe(c) {
      s.setProps({content: c});
    } function Yo() {
      const c=s.state.isVisible; const h=s.state.isDestroyed; const y=!s.state.isEnabled; const x=nt.isTouch&&!s.props.touch; const A=cr(s.props.duration, 0, Q.duration); if (!(c||h||y||x)&&!D().hasAttribute('disabled')&&(U('onShow', [s], !1), s.props.onShow(s)!==!1)) {
        if (s.state.isVisible=!0, L()&&(v.style.visibility='visible'), I(), et(), s.state.isMounted||(v.style.transition='none'), L()) {
          const j=tt(); const K=j.box; const qt=j.content; pr([K, qt], 0);
        }g=function() {
          let Ot; if (!(!s.state.isVisible||p)) {
            if (p=!0, v.offsetHeight, v.style.transition=s.props.moveTransition, L()&&s.props.animation) {
              const mr=tt(); const Ne=mr.box; const Gt=mr.content; pr([Ne, Gt], A), ui([Ne, Gt], 'visible');
            }ot(), at(), li(vr, s), (Ot=s.popperInstance)==null||Ot.forceUpdate(), U('onMount', [s]), s.props.animation&&L()&&dt(A, function() {
              s.state.isShown=!0, U('onShown', [s]);
            });
          }
        }, ft();
      }
    } function Ko() {
      const c=!s.state.isVisible; const h=s.state.isDestroyed; const y=!s.state.isEnabled; const x=cr(s.props.duration, 1, Q.duration); if (!(c||h||y)&&(U('onHide', [s], !1), s.props.onHide(s)!==!1)) {
        if (s.state.isVisible=!1, s.state.isShown=!1, p=!1, a=!1, L()&&(v.style.visibility='hidden'), xt(), pt(), I(!0), L()) {
          const A=tt(); const j=A.box; const K=A.content; s.props.animation&&(pr([j, K], x), ui([j, K], 'hidden'));
        }ot(), at(), s.props.animation?L()&&zt(x, s.unmount):s.unmount();
      }
    } function Jo(c) {
      Z().addEventListener('mousemove', w), li(_e, w), w(c);
    } function Qo() {
      s.state.isVisible&&s.hide(), s.state.isMounted&&(Le(), yt().forEach(function(c) {
        c._tippy.unmount();
      }), v.parentNode&&v.parentNode.removeChild(v), vr=vr.filter(function(c) {
        return c!==s;
      }), s.state.isMounted=!1, U('onHidden', [s]));
    } function Zo() {
      s.state.isDestroyed||(s.clearDelayTimeouts(), s.unmount(), Oe(), delete e._tippy, s.state.isDestroyed=!0, U('onDestroy', [s]));
    }
  } function ce(e, t) {
    t===void 0&&(t={}); const r=Q.plugins.concat(t.plugins||[]); ko(); const i=Object.assign({}, t, {plugins: r}); const n=Mo(e); const o=n.reduce(function(a, u) {
      const l=u&&qo(u, i); return l&&a.push(l), a;
    }, []); return Ee(e)?o[0]:o;
  }ce.defaultProps=Q, ce.setDefaultProps=Vo, ce.currentInput=nt, Object.assign({}, jr, {effect: function(t) {
    const r=t.state; const i={popper: {position: r.options.strategy, left: '0', top: '0', margin: '0'}, arrow: {position: 'absolute'}, reference: {}}; Object.assign(r.elements.popper.style, i.popper), r.styles=i, r.elements.arrow&&Object.assign(r.elements.arrow.style, i.arrow);
  }}), ce.setDefaultProps({render: yi}); const Go=z` 
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
`; const Xo='cta-tooltip'; class Vt extends lt {
    constructor() {
      super(...arguments), this.text='', this.contentRef=kr();
    }createTooltip() {
      !this.contentRef.value||ce(this, {arrow: !0, content: this.text});
    }onSlotChange(t) {
      !(t.target instanceof HTMLSlotElement&&t.target)||this.createTooltip();
    }render() {
      return wt`
      <slot ${Ur(this.contentRef)} @slotchange=${this.onSlotChange}></slot>
    `;
    }
  } return Vt.tagName=Xo, Vt.styles=[Go], Vt.properties={text: {attribute: !0, type: String, reflect: !0}}, Zt(Vt.tagName, Vt), ((e)=>{
    if (typeof e.document=='undefined') return; const {body: t}=e.document; const r=e.document.createElement(me.tagName); t.prepend(r), t.classList.add('cta-components-loaded');
  })(globalThis), H.Accordion=Rt, H.AccordionGroup=Pt, H.Icon=Nt, H.Tooltip=Vt, Object.defineProperties(H, {__esModule: {value: !0}, [Symbol.toStringTag]: {value: 'Module'}}), H;
}({});
