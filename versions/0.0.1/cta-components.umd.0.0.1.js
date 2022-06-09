(function(u,p){typeof exports=="object"&&typeof module!="undefined"?p(exports):typeof define=="function"&&define.amd?define(["exports"],p):(u=typeof globalThis!="undefined"?globalThis:u||self,p((u.cta=u.cta||{},u.cta.components={})))})(this,function(u){"use strict";var we=Object.defineProperty,Ce=Object.defineProperties;var Se=Object.getOwnPropertyDescriptors;var Tt=Object.getOwnPropertySymbols;var xe=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable;var Ut=(u,p,f)=>p in u?we(u,p,{enumerable:!0,configurable:!0,writable:!0,value:f}):u[p]=f,F=(u,p)=>{for(var f in p||(p={}))xe.call(p,f)&&Ut(u,f,p[f]);if(Tt)for(var f of Tt(p))Te.call(p,f)&&Ut(u,f,p[f]);return u},J=(u,p)=>Ce(u,Se(p));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,f=Symbol(),ct=new Map;class dt{constructor(t,e){if(this._$cssResult$=!0,e!==f)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=ct.get(this.cssText);return p&&t===void 0&&(ct.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const Nt=i=>new dt(typeof i=="string"?i:i+"",f),g=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((s,n,o)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[o+1],i[0]);return new dt(e,f)},Mt=(i,t)=>{p?i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const s=document.createElement("style"),n=window.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)})},ut=p?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return Nt(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var K;const pt=window.trustedTypes,Pt=pt?pt.emptyScript:"",$t=window.reactiveElementPolyfillSupport,Q={toAttribute(i,t){switch(t){case Boolean:i=i?Pt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},vt=(i,t)=>t!==i&&(t==t||i==i),Z={attribute:!0,type:String,converter:Q,reflect:!1,hasChanged:vt};class w extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,s)=>{const n=this._$Eh(s,e);n!==void 0&&(this._$Eu.set(n,s),t.push(n))}),t}static createProperty(t,e=Z){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,s,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(n){const o=this[t];this[e]=n,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Z}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of s)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const n of s)e.unshift(ut(n))}else t!==void 0&&e.push(ut(t));return e}static _$Eh(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Mt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ES(t,e,s=Z){var n,o;const r=this.constructor._$Eh(t,s);if(r!==void 0&&s.reflect===!0){const c=((o=(n=s.converter)===null||n===void 0?void 0:n.toAttribute)!==null&&o!==void 0?o:Q.toAttribute)(e,s.type);this._$Ei=t,c==null?this.removeAttribute(r):this.setAttribute(r,c),this._$Ei=null}}_$AK(t,e){var s,n,o;const r=this.constructor,c=r._$Eu.get(t);if(c!==void 0&&this._$Ei!==c){const l=r.getPropertyOptions(c),a=l.converter,_=(o=(n=(s=a)===null||s===void 0?void 0:s.fromAttribute)!==null&&n!==void 0?n:typeof a=="function"?a:null)!==null&&o!==void 0?o:Q.fromAttribute;this._$Ei=c,this[c]=_(e,l.type),this._$Ei=null}}requestUpdate(t,e,s){let n=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||vt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Ei!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((n,o)=>this[o]=n),this._$Et=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$Eg)===null||t===void 0||t.forEach(n=>{var o;return(o=n.hostUpdate)===null||o===void 0?void 0:o.call(n)}),this.update(s)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(s=>{var n;return(n=s.hostUpdated)===null||n===void 0?void 0:n.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$ES(s,this[s],e)),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}w.finalized=!0,w.elementProperties=new Map,w.elementStyles=[],w.shadowRootOptions={mode:"open"},$t==null||$t({ReactiveElement:w}),((K=globalThis.reactiveElementVersions)!==null&&K!==void 0?K:globalThis.reactiveElementVersions=[]).push("1.3.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var X;const C=globalThis.trustedTypes,ft=C?C.createPolicy("lit-html",{createHTML:i=>i}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,gt="?"+y,Ot=`<${gt}>`,S=document,H=(i="")=>S.createComment(i),R=i=>i===null||typeof i!="object"&&typeof i!="function",_t=Array.isArray,Ht=i=>{var t;return _t(i)||typeof((t=i)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,mt=/-->/g,yt=/>/g,E=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,At=/'/g,bt=/"/g,Et=/^(?:script|style|textarea|title)$/i,Rt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),x=Rt(1),A=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),wt=new WeakMap,kt=(i,t,e)=>{var s,n;const o=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t;let r=o._$litPart$;if(r===void 0){const c=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:null;o._$litPart$=r=new I(t.insertBefore(H(),c),c,void 0,e!=null?e:{})}return r._$AI(i),r},T=S.createTreeWalker(S,129,null,!1),Lt=(i,t)=>{const e=i.length-1,s=[];let n,o=t===2?"<svg>":"",r=k;for(let l=0;l<e;l++){const a=i[l];let _,h,$=-1,m=0;for(;m<a.length&&(r.lastIndex=m,h=r.exec(a),h!==null);)m=r.lastIndex,r===k?h[1]==="!--"?r=mt:h[1]!==void 0?r=yt:h[2]!==void 0?(Et.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=E):h[3]!==void 0&&(r=E):r===E?h[0]===">"?(r=n!=null?n:k,$=-1):h[1]===void 0?$=-2:($=r.lastIndex-h[2].length,_=h[1],r=h[3]===void 0?E:h[3]==='"'?bt:At):r===bt||r===At?r=E:r===mt||r===yt?r=k:(r=E,n=void 0);const W=r===E&&i[l+1].startsWith("/>")?" ":"";o+=r===k?a+Ot:$>=0?(s.push(_),a.slice(0,$)+"$lit$"+a.slice($)+y+W):a+y+($===-2?(s.push(void 0),l):W)}const c=o+(i[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ft!==void 0?ft.createHTML(c):c,s]};class L{constructor({strings:t,_$litType$:e},s){let n;this.parts=[];let o=0,r=0;const c=t.length-1,l=this.parts,[a,_]=Lt(t,e);if(this.el=L.createElement(a,s),T.currentNode=this.el.content,e===2){const h=this.el.content,$=h.firstChild;$.remove(),h.append(...$.childNodes)}for(;(n=T.nextNode())!==null&&l.length<c;){if(n.nodeType===1){if(n.hasAttributes()){const h=[];for(const $ of n.getAttributeNames())if($.endsWith("$lit$")||$.startsWith(y)){const m=_[r++];if(h.push($),m!==void 0){const W=n.getAttribute(m.toLowerCase()+"$lit$").split(y),q=/([.?@])?(.*)/.exec(m);l.push({type:1,index:o,name:q[2],strings:W,ctor:q[1]==="."?Bt:q[1]==="?"?jt:q[1]==="@"?Dt:z})}else l.push({type:6,index:o})}for(const $ of h)n.removeAttribute($)}if(Et.test(n.tagName)){const h=n.textContent.split(y),$=h.length-1;if($>0){n.textContent=C?C.emptyScript:"";for(let m=0;m<$;m++)n.append(h[m],H()),T.nextNode(),l.push({type:2,index:++o});n.append(h[$],H())}}}else if(n.nodeType===8)if(n.data===gt)l.push({type:2,index:o});else{let h=-1;for(;(h=n.data.indexOf(y,h+1))!==-1;)l.push({type:7,index:o}),h+=y.length-1}o++}}static createElement(t,e){const s=S.createElement("template");return s.innerHTML=t,s}}function U(i,t,e=i,s){var n,o,r,c;if(t===A)return t;let l=s!==void 0?(n=e._$Cl)===null||n===void 0?void 0:n[s]:e._$Cu;const a=R(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(i),l._$AT(i,e,s)),s!==void 0?((r=(c=e)._$Cl)!==null&&r!==void 0?r:c._$Cl=[])[s]=l:e._$Cu=l),l!==void 0&&(t=U(i,l._$AS(i,t.values),l,s)),t}class It{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:n}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:S).importNode(s,!0);T.currentNode=o;let r=T.nextNode(),c=0,l=0,a=n[0];for(;a!==void 0;){if(c===a.index){let _;a.type===2?_=new I(r,r.nextSibling,this,t):a.type===1?_=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(_=new Vt(r,this,t)),this.v.push(_),a=n[++l]}c!==(a==null?void 0:a.index)&&(r=T.nextNode(),c++)}return o}m(t){let e=0;for(const s of this.v)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class I{constructor(t,e,s,n){var o;this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=n,this._$Cg=(o=n==null?void 0:n.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=U(this,t,e),R(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==A&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):Ht(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==d&&R(this._$AH)?this._$AA.nextSibling.data=t:this.k(S.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=L.createElement(n.h,this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.m(s);else{const r=new It(o,this),c=r.p(this.options);r.m(s),this.k(c),this._$AH=r}}_$AC(t){let e=wt.get(t.strings);return e===void 0&&wt.set(t.strings,e=new L(t)),e}S(t){_t(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,n=0;for(const o of t)n===e.length?e.push(s=new I(this.M(H()),this.M(H()),this,this.options)):s=e[n],s._$AI(o),n++;n<e.length&&(this._$AR(s&&s._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class z{constructor(t,e,s,n,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,n){const o=this.strings;let r=!1;if(o===void 0)t=U(this,t,e,0),r=!R(t)||t!==this._$AH&&t!==A,r&&(this._$AH=t);else{const c=t;let l,a;for(t=o[0],l=0;l<o.length-1;l++)a=U(this,c[s+l],e,l),a===A&&(a=this._$AH[l]),r||(r=!R(a)||a!==this._$AH[l]),a===d?t=d:t!==d&&(t+=(a!=null?a:"")+o[l+1]),this._$AH[l]=a}r&&!n&&this.C(t)}C(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Bt extends z{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===d?void 0:t}}const zt=C?C.emptyScript:"";class jt extends z{constructor(){super(...arguments),this.type=4}C(t){t&&t!==d?this.element.setAttribute(this.name,zt):this.element.removeAttribute(this.name)}}class Dt extends z{constructor(t,e,s,n,o){super(t,e,s,n,o),this.type=5}_$AI(t,e=this){var s;if((t=(s=U(this,t,e,0))!==null&&s!==void 0?s:d)===A)return;const n=this._$AH,o=t===d&&n!==d||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==d&&(n===d||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class Vt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){U(this,t)}}const Ct=window.litHtmlPolyfillSupport;Ct==null||Ct(L,I),((X=globalThis.litHtmlVersions)!==null&&X!==void 0?X:globalThis.litHtmlVersions=[]).push("2.2.5");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Y,tt;class N extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=kt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return A}}N.finalized=!0,N._$litElement$=!0,(Y=globalThis.litElementHydrateSupport)===null||Y===void 0||Y.call(globalThis,{LitElement:N});const St=globalThis.litElementPolyfillSupport;St==null||St({LitElement:N}),((tt=globalThis.litElementVersions)!==null&&tt!==void 0?tt:globalThis.litElementVersions=[]).push("3.2.0");class b extends N{constructor(){super(...arguments),this.__off__=!1}}b.shadowRootOptions=J(F({},N.shadowRootOptions),{mode:"open",delegatesFocus:!0}),b.properties={__off__:{attribute:!0,type:Boolean,reflect:!0}};const Gt=g`
  :root {
    --neutral-0: #000000; /* 0 */
    --neutral-26: #3d3d3d;  /* 25.8 */
    --neutral-50: #767676;  /* 49.6 */
    --neutral-80: #c5c5c5;  /* 79.5 */
    --neutral-88: #dddddd;  /* 88.1 */
    --neutral-94: #eeeeee;  /* 94.1 */
    --neutral-100: #ffffff; /* 100 */
  }
`,Wt=g`
  ${Gt}
`;function j(i,t,e){if(typeof window!="undefined")try{window.customElements.define(i,t,e)}catch(s){if(s instanceof DOMException){const n="Failed to execute 'define' on 'CustomElementRegistry'",o="has already been used with this registry";if(s.message.includes(n)&&s.message.includes(o))return}throw s}}const qt=g`
:root {
  --text-normal-color: var(--neutral-26);
  --text-heading-color: var(--neutral-0);
}
`,Ft=g`
  ${qt}
`,Jt=g`
:root .dark-mode {
  --text-normal-color: var(--neutral-88);
  --text-heading-color: var(--neutral-100);
}
`,Kt=g`
  ${Jt}
`,Qt=g`
  :root {
    --accordion-trigger-border-color: var(--neutral-50);
    --accordion-trigger-open-background-color: var(--neutral-100);
  }
  :root .dark-mode {
    --accordion-trigger-border-color: var(--neutral-50);
    --accordion-trigger-open-background-color: var(--neutral-26);
  }
`,Zt=g`
  ${Qt}
`,Xt="cta-theme";class D extends b{createRenderRoot(){return this}render(){return x`
        <style>
          .cta-theme {
            display: none;
          }
          ${Wt}
          ${Ft}
          ${Kt}
          ${Zt}
        </style>
      `}}D.tagName=Xt,j(D.tagName,D);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},st=i=>(...t)=>({_$litDirective$:i,values:t});class it{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=(i,t)=>{var e,s;const n=i._$AN;if(n===void 0)return!1;for(const o of n)(s=(e=o)._$AO)===null||s===void 0||s.call(e,t,!1),B(o,t);return!0},V=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while((e==null?void 0:e.size)===0)},xt=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),se(t)}};function te(i){this._$AN!==void 0?(V(this),this._$AM=i,xt(this)):this._$AM=i}function ee(i,t=!1,e=0){const s=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(s))for(let o=e;o<s.length;o++)B(s[o],!1),V(s[o]);else s!=null&&(B(s,!1),V(s));else B(this,i)}const se=i=>{var t,e,s,n;i.type==et.CHILD&&((t=(s=i)._$AP)!==null&&t!==void 0||(s._$AP=ee),(e=(n=i)._$AQ)!==null&&e!==void 0||(n._$AQ=te))};class ie extends it{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),xt(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,n;t!==this.isConnected&&(this.isConnected=t,t?(s=this.reconnected)===null||s===void 0||s.call(this):(n=this.disconnected)===null||n===void 0||n.call(this)),e&&(B(this,t),V(this))}setValue(t){if(Yt(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne=()=>new oe;class oe{}const nt=new WeakMap,re=st(class extends ie{render(i){return d}update(i,[t]){var e;const s=t!==this.U;return s&&this.U!==void 0&&this.ot(void 0),(s||this.rt!==this.lt)&&(this.U=t,this.ht=(e=i.options)===null||e===void 0?void 0:e.host,this.ot(this.lt=i.element)),d}ot(i){var t;if(typeof this.U=="function"){const e=(t=this.ht)!==null&&t!==void 0?t:globalThis;let s=nt.get(e);s===void 0&&(s=new WeakMap,nt.set(e,s)),s.get(this.U)!==void 0&&this.U.call(this.ht,void 0),s.set(this.U,i),i!==void 0&&this.U.call(this.ht,i)}else this.U.value=i}get rt(){var i,t,e;return typeof this.U=="function"?(t=nt.get((i=this.ht)!==null&&i!==void 0?i:globalThis))===null||t===void 0?void 0:t.get(this.U):(e=this.U)===null||e===void 0?void 0:e.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const le=st(class extends it{constructor(i){var t;if(super(i),i.type!==et.ATTRIBUTE||i.name!=="class"||((t=i.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var e,s;if(this.et===void 0){this.et=new Set,i.strings!==void 0&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!(!((e=this.st)===null||e===void 0)&&e.has(o))&&this.et.add(o);return this.render(t)}const n=i.element.classList;this.et.forEach(o=>{o in t||(n.remove(o),this.et.delete(o))});for(const o in t){const r=!!t[o];r===this.et.has(o)||((s=this.st)===null||s===void 0?void 0:s.has(o))||(r?(n.add(o),this.et.add(o)):(n.remove(o),this.et.delete(o)))}return A}});var G,ae=new Uint8Array(16);function he(){if(!G&&(G=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!G))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return G(ae)}var ce=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function de(i){return typeof i=="string"&&ce.test(i)}for(var v=[],ot=0;ot<256;++ot)v.push((ot+256).toString(16).substr(1));function ue(i){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,e=(v[i[t+0]]+v[i[t+1]]+v[i[t+2]]+v[i[t+3]]+"-"+v[i[t+4]]+v[i[t+5]]+"-"+v[i[t+6]]+v[i[t+7]]+"-"+v[i[t+8]]+v[i[t+9]]+"-"+v[i[t+10]]+v[i[t+11]]+v[i[t+12]]+v[i[t+13]]+v[i[t+14]]+v[i[t+15]]).toLowerCase();if(!de(e))throw TypeError("Stringified UUID is invalid");return e}function pe(i,t,e){i=i||{};var s=i.random||(i.rng||he)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,t){e=e||0;for(var n=0;n<16;++n)t[e+n]=s[n];return t}return ue(s)}const $e=g`
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
`,ve="cta-accordion";class M extends b{constructor(){super(),this.open=!1,this.name="",this.uuid="",this.panelRef=ne(),this.uuid=pe()}firstUpdated(){if(this.name.trim()==="")throw new Error("Accordion name attribute is required.")}updated(t){t.has("open")&&(this.handleIsOpenClass(),this.togglePanel())}handleIsOpenClass(){const t="is-open",{open:e}=this;e?this.classList.add(t):this.classList.remove(t)}togglePanel(){const t=this.panelRef.value;!t||(this.open?this.expandPanel(t):this.collapsePanel(t))}collapsePanel(t){var e=t.scrollHeight,s=t.style.transition;t.style.transition="",requestAnimationFrame(function(){t.style.height=`${e}px`,t.style.transition=s,requestAnimationFrame(function(){t.classList.remove("panel-open"),t.style.height="0px"})}),t.setAttribute("data-collapsed","true")}expandPanel(t){var e=t.scrollHeight;t.style.height=e+"px",t.classList.add("panel-open"),t.setAttribute("data-collapsed","false")}onClick(){this.open=!this.open}render(){const t={open:this.open};return this.__off__?x`${this.innerHTML}`:x`
      <div data-name="accordion-trigger" @click=${this.onClick} aria-controls=${this.uuid} aria-expanded=${this.open}
        class=${le(t)}>
        <div data-name="accordion-trigger-content">
          ${this.name}
        </div>
        <cta-icon data-name="accordion-trigger-icon" name="chevron-down" width="24" height="24"></cta-icon>
      </div>
      
      <div data-name="accordion-panel" id=${this.uuid} ${re(this.panelRef)} aria-labelledby=${this.name}>
        <slot></slot>
      </div>
    `}}M.tagName=ve,M.styles=[$e],M.properties=J(F({},b.properties),{open:{attribute:!0,type:Boolean,reflect:!0},name:{attribute:!0,type:String,reflect:!0}}),j(M.tagName,M);function fe(i,t,e,s={}){return i.addEventListener(t,e,s),()=>{i.removeEventListener(t,e,s)}}function ge(i){const t=typeof i;return i!=null&&t==="object"}function _e(i,t){return ge(t)&&i in t}const me="cta-accordion-group";class P extends b{constructor(){super(...arguments),this.multipleOpen=!1,this.removeListener=null,this.currentlyOpen=null}connectedCallback(){this.removeListener=fe(this,"click",this.onClick.bind(this))}disconnectedCallback(){var t;super.disconnectedCallback(),this.currentlyOpen=null,(t=this.removeListener)==null||t.call(this)}onClick(t){if(this.multipleOpen)return;const e=t.target instanceof HTMLElement?t.target:null;!e||e!==this.currentlyOpen&&(this.currentlyOpen&&_e("open",this.currentlyOpen)&&(this.currentlyOpen.open=!1),this.currentlyOpen=e)}render(){return this.__off__?x`${this.innerHTML}`:x`
      <slot></slot>
    `}}P.tagName=me,P.styles=g`
    :host {
      display: contents;
    }
  `,P.properties=J(F({},b.properties),{multipleOpen:{attribute:!0,type:Boolean,reflect:!0}}),j(P.tagName,P);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class rt extends it{constructor(t){if(super(t),this.it=d,t.type!==et.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===d||t==null)return this.ft=void 0,this.it=t;if(t===A)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.ft;this.it=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}rt.directiveName="unsafeHTML",rt.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class lt extends rt{}lt.directiveName="unsafeSVG",lt.resultType=2;const ye=st(lt);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=i=>i!=null?i:d,ht=new Map;ht.set("chevron-down",Object.freeze({id:"chevron-down",viewBox:"0 0 24 24",markup:`
  <path fill="currentcolor" d="M16.6 8.6 12 13.2 7.4 8.6 6 10l6 6 6-6z"></path>
`})),ht.set("close-circle",Object.freeze({id:"null",viewBox:"0 0 252 252",markup:`
  <path d="M126 0a126 126 0 1 0 0 252 126 126 0 0 0 0-252zm0 234a108 108 0 1 1 0-216 108 108 0 0 1 0 216z"></path>
  <path d="M165 87c-4-3-10-3-13 0l-26 26-26-26a9 9 0 1 0-13 13l26 26-26 26a9 9 0 1 0 13 13l26-26 26 26a9 9 0 0 0 13 0c3-4 3-10 0-13l-26-26 26-26c3-3 3-9 0-13z"></path>
`}));const Ae={get(i){return ht.get(i)}},be="cta-icon",Ee=i=>Ae.get(i);class O extends b{constructor(){super(...arguments),this.name="",this.inline=!1}getIcon(){return Ee(this.name)}render(){const t=this.getIcon();return x`
      <svg id=${t==null?void 0:t.id} viewBox=${t==null?void 0:t.viewBox} class=${at(this.class)} width=${at(this.width)} height=${at(this.height)}>
        ${ye(t==null?void 0:t.markup)}
      </svg>
    `}}O.tagName=be,O.styles=g`
    :host {
      display: flex;
    }
    :host([inline]) {
      display: inline-flex;
    }
  `,O.properties={name:{attribute:!0,type:String,reflect:!0},inline:{attribute:!0,type:Boolean,reflect:!0},class:{attribute:!0,type:String,reflect:!0},width:{attribute:!0,type:Number,reflect:!0},height:{attribute:!0,type:Number,reflect:!0}},j(O.tagName,O),(i=>{if(typeof i.document=="undefined")return;const{body:t}=i.document,e=i.document.createElement(D.tagName);t.prepend(e),t.classList.add("cta-components-loaded")})(globalThis),u.Accordion=M,u.AccordionGroup=P,u.Icon=O,Object.defineProperties(u,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
