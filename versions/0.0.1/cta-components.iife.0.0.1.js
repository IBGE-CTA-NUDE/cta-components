var me=Object.defineProperty,Ae=Object.defineProperties;var ye=Object.getOwnPropertyDescriptors;var xt=Object.getOwnPropertySymbols;var be=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable;var Tt=(v,$,g)=>$ in v?me(v,$,{enumerable:!0,configurable:!0,writable:!0,value:g}):v[$]=g,lt=(v,$)=>{for(var g in $||($={}))be.call($,g)&&Tt(v,g,$[g]);if(xt)for(var g of xt($))Ee.call($,g)&&Tt(v,g,$[g]);return v},at=(v,$)=>Ae(v,ye($));this.cta=this.cta||{};this.cta.components=function(v){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,g=Symbol(),ht=new Map;class dt{constructor(t,e){if(this._$cssResult$=!0,e!==g)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=ht.get(this.cssText);return $&&t===void 0&&(ht.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const Ut=i=>new dt(typeof i=="string"?i:i+"",g),m=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((s,n,o)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[o+1],i[0]);return new dt(e,g)},Nt=(i,t)=>{$?i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const s=document.createElement("style"),n=window.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)})},ct=$?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return Ut(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var q;const ut=window.trustedTypes,Mt=ut?ut.emptyScript:"",pt=window.reactiveElementPolyfillSupport,G={toAttribute(i,t){switch(t){case Boolean:i=i?Mt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},$t=(i,t)=>t!==i&&(t==t||i==i),F={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:$t};class E extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,s)=>{const n=this._$Eh(s,e);n!==void 0&&(this._$Eu.set(n,s),t.push(n))}),t}static createProperty(t,e=F){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,s,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(n){const o=this[t];this[e]=n,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||F}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of s)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const n of s)e.unshift(ct(n))}else t!==void 0&&e.push(ct(t));return e}static _$Eh(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Nt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ES(t,e,s=F){var n,o;const r=this.constructor._$Eh(t,s);if(r!==void 0&&s.reflect===!0){const d=((o=(n=s.converter)===null||n===void 0?void 0:n.toAttribute)!==null&&o!==void 0?o:G.toAttribute)(e,s.type);this._$Ei=t,d==null?this.removeAttribute(r):this.setAttribute(r,d),this._$Ei=null}}_$AK(t,e){var s,n,o;const r=this.constructor,d=r._$Eu.get(t);if(d!==void 0&&this._$Ei!==d){const l=r.getPropertyOptions(d),a=l.converter,f=(o=(n=(s=a)===null||s===void 0?void 0:s.fromAttribute)!==null&&n!==void 0?n:typeof a=="function"?a:null)!==null&&o!==void 0?o:G.fromAttribute;this._$Ei=d,this[d]=f(e,l.type),this._$Ei=null}}requestUpdate(t,e,s){let n=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||$t)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Ei!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((n,o)=>this[o]=n),this._$Et=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$Eg)===null||t===void 0||t.forEach(n=>{var o;return(o=n.hostUpdate)===null||o===void 0?void 0:o.call(n)}),this.update(s)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(s=>{var n;return(n=s.hostUpdated)===null||n===void 0?void 0:n.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$ES(s,this[s],e)),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}E.finalized=!0,E.elementProperties=new Map,E.elementStyles=[],E.shadowRootOptions={mode:"open"},pt==null||pt({ReactiveElement:E}),((q=globalThis.reactiveElementVersions)!==null&&q!==void 0?q:globalThis.reactiveElementVersions=[]).push("1.3.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var J;const w=globalThis.trustedTypes,vt=w?w.createPolicy("lit-html",{createHTML:i=>i}):void 0,A=`lit$${(Math.random()+"").slice(9)}$`,gt="?"+A,Pt=`<${gt}>`,C=document,P=(i="")=>C.createComment(i),H=i=>i===null||typeof i!="object"&&typeof i!="function",ft=Array.isArray,Ht=i=>{var t;return ft(i)||typeof((t=i)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_t=/-->/g,mt=/>/g,b=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,At=/'/g,yt=/"/g,bt=/^(?:script|style|textarea|title)$/i,Rt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),I=Rt(1),y=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),Et=new WeakMap,Ot=(i,t,e)=>{var s,n;const o=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t;let r=o._$litPart$;if(r===void 0){const d=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:null;o._$litPart$=r=new k(t.insertBefore(P(),d),d,void 0,e!=null?e:{})}return r._$AI(i),r},S=C.createTreeWalker(C,129,null,!1),kt=(i,t)=>{const e=i.length-1,s=[];let n,o=t===2?"<svg>":"",r=R;for(let l=0;l<e;l++){const a=i[l];let f,h,u=-1,_=0;for(;_<a.length&&(r.lastIndex=_,h=r.exec(a),h!==null);)_=r.lastIndex,r===R?h[1]==="!--"?r=_t:h[1]!==void 0?r=mt:h[2]!==void 0?(bt.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=b):h[3]!==void 0&&(r=b):r===b?h[0]===">"?(r=n!=null?n:R,u=-1):h[1]===void 0?u=-2:(u=r.lastIndex-h[2].length,f=h[1],r=h[3]===void 0?b:h[3]==='"'?yt:At):r===yt||r===At?r=b:r===_t||r===mt?r=R:(r=b,n=void 0);const j=r===b&&i[l+1].startsWith("/>")?" ":"";o+=r===R?a+Pt:u>=0?(s.push(f),a.slice(0,u)+"$lit$"+a.slice(u)+A+j):a+A+(u===-2?(s.push(void 0),l):j)}const d=o+(i[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[vt!==void 0?vt.createHTML(d):d,s]};class O{constructor({strings:t,_$litType$:e},s){let n;this.parts=[];let o=0,r=0;const d=t.length-1,l=this.parts,[a,f]=kt(t,e);if(this.el=O.createElement(a,s),S.currentNode=this.el.content,e===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(n=S.nextNode())!==null&&l.length<d;){if(n.nodeType===1){if(n.hasAttributes()){const h=[];for(const u of n.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(A)){const _=f[r++];if(h.push(u),_!==void 0){const j=n.getAttribute(_.toLowerCase()+"$lit$").split(A),W=/([.?@])?(.*)/.exec(_);l.push({type:1,index:o,name:W[2],strings:j,ctor:W[1]==="."?It:W[1]==="?"?zt:W[1]==="@"?Dt:B})}else l.push({type:6,index:o})}for(const u of h)n.removeAttribute(u)}if(bt.test(n.tagName)){const h=n.textContent.split(A),u=h.length-1;if(u>0){n.textContent=w?w.emptyScript:"";for(let _=0;_<u;_++)n.append(h[_],P()),S.nextNode(),l.push({type:2,index:++o});n.append(h[u],P())}}}else if(n.nodeType===8)if(n.data===gt)l.push({type:2,index:o});else{let h=-1;for(;(h=n.data.indexOf(A,h+1))!==-1;)l.push({type:7,index:o}),h+=A.length-1}o++}}static createElement(t,e){const s=C.createElement("template");return s.innerHTML=t,s}}function x(i,t,e=i,s){var n,o,r,d;if(t===y)return t;let l=s!==void 0?(n=e._$Cl)===null||n===void 0?void 0:n[s]:e._$Cu;const a=H(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(i),l._$AT(i,e,s)),s!==void 0?((r=(d=e)._$Cl)!==null&&r!==void 0?r:d._$Cl=[])[s]=l:e._$Cu=l),l!==void 0&&(t=x(i,l._$AS(i,t.values),l,s)),t}class Lt{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:n}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:C).importNode(s,!0);S.currentNode=o;let r=S.nextNode(),d=0,l=0,a=n[0];for(;a!==void 0;){if(d===a.index){let f;a.type===2?f=new k(r,r.nextSibling,this,t):a.type===1?f=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(f=new Vt(r,this,t)),this.v.push(f),a=n[++l]}d!==(a==null?void 0:a.index)&&(r=S.nextNode(),d++)}return o}m(t){let e=0;for(const s of this.v)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class k{constructor(t,e,s,n){var o;this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=n,this._$Cg=(o=n==null?void 0:n.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=x(this,t,e),H(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==y&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):Ht(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==c&&H(this._$AH)?this._$AA.nextSibling.data=t:this.k(C.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=O.createElement(n.h,this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.m(s);else{const r=new Lt(o,this),d=r.p(this.options);r.m(s),this.k(d),this._$AH=r}}_$AC(t){let e=Et.get(t.strings);return e===void 0&&Et.set(t.strings,e=new O(t)),e}S(t){ft(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,n=0;for(const o of t)n===e.length?e.push(s=new k(this.M(P()),this.M(P()),this,this.options)):s=e[n],s._$AI(o),n++;n<e.length&&(this._$AR(s&&s._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class B{constructor(t,e,s,n,o){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=c}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,n){const o=this.strings;let r=!1;if(o===void 0)t=x(this,t,e,0),r=!H(t)||t!==this._$AH&&t!==y,r&&(this._$AH=t);else{const d=t;let l,a;for(t=o[0],l=0;l<o.length-1;l++)a=x(this,d[s+l],e,l),a===y&&(a=this._$AH[l]),r||(r=!H(a)||a!==this._$AH[l]),a===c?t=c:t!==c&&(t+=(a!=null?a:"")+o[l+1]),this._$AH[l]=a}r&&!n&&this.C(t)}C(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class It extends B{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===c?void 0:t}}const Bt=w?w.emptyScript:"";class zt extends B{constructor(){super(...arguments),this.type=4}C(t){t&&t!==c?this.element.setAttribute(this.name,Bt):this.element.removeAttribute(this.name)}}class Dt extends B{constructor(t,e,s,n,o){super(t,e,s,n,o),this.type=5}_$AI(t,e=this){var s;if((t=(s=x(this,t,e,0))!==null&&s!==void 0?s:c)===y)return;const n=this._$AH,o=t===c&&n!==c||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==c&&(n===c||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class Vt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){x(this,t)}}const wt=window.litHtmlPolyfillSupport;wt==null||wt(O,k),((J=globalThis.litHtmlVersions)!==null&&J!==void 0?J:globalThis.litHtmlVersions=[]).push("2.2.5");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var K,Q;class T extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Ot(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return y}}T.finalized=!0,T._$litElement$=!0,(K=globalThis.litElementHydrateSupport)===null||K===void 0||K.call(globalThis,{LitElement:T});const Ct=globalThis.litElementPolyfillSupport;Ct==null||Ct({LitElement:T}),((Q=globalThis.litElementVersions)!==null&&Q!==void 0?Q:globalThis.litElementVersions=[]).push("3.2.0");class U extends T{constructor(){super(...arguments),this.__off__=!1}}U.shadowRootOptions=at(lt({},T.shadowRootOptions),{mode:"open",delegatesFocus:!0}),U.properties={__off__:{attribute:!0,type:Boolean,reflect:!0}};const jt=m`
  :root {
    --neutral-0: #000000; /* 0 */
    --neutral-26: #3d3d3d;  /* 25.8 */
    --neutral-50: #767676;  /* 49.6 */
    --neutral-80: #c5c5c5;  /* 79.5 */
    --neutral-88: #dddddd;  /* 88.1 */
    --neutral-94: #eeeeee;  /* 94.1 */
    --neutral-100: #ffffff; /* 100 */
  }
`,Wt=m`
  ${jt}
`;function Z(i,t,e){if(typeof window!="undefined")try{window.customElements.define(i,t,e)}catch(s){if(s instanceof DOMException){const n="Failed to execute 'define' on 'CustomElementRegistry'",o="has already been used with this registry";if(s.message.includes(n)&&s.message.includes(o))return}throw s}}const qt=m`
:root {
  --text-normal-color: var(--neutral-26);
  --text-heading-color: var(--neutral-0);
}
`,Gt=m`
  ${qt}
`,Ft=m`
:root .dark-mode {
  --text-normal-color: var(--neutral-88);
  --text-heading-color: var(--neutral-100);
}
`,Jt=m`
  ${Ft}
`,Kt=m`
  :root {
    --accordion-trigger-border-color: var(--neutral-50);
    --accordion-trigger-open-background-color: var(--neutral-100);
  }
  :root .dark-mode {
    --accordion-trigger-border-color: var(--neutral-50);
    --accordion-trigger-open-background-color: var(--neutral-26);
  }
`,Qt=m`
  ${Kt}
`,Zt="cta-theme";class z extends U{createRenderRoot(){return this}render(){return I`
        <style>
          .cta-theme {
            display: none;
          }
          ${Wt}
          ${Gt}
          ${Jt}
          ${Qt}
        </style>
      `}}z.tagName=Zt,Z(z.tagName,z);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Y=i=>(...t)=>({_$litDirective$:i,values:t});class tt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=(i,t)=>{var e,s;const n=i._$AN;if(n===void 0)return!1;for(const o of n)(s=(e=o)._$AO)===null||s===void 0||s.call(e,t,!1),L(o,t);return!0},D=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while((e==null?void 0:e.size)===0)},St=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),ee(t)}};function Yt(i){this._$AN!==void 0?(D(this),this._$AM=i,St(this)):this._$AM=i}function te(i,t=!1,e=0){const s=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(s))for(let o=e;o<s.length;o++)L(s[o],!1),D(s[o]);else s!=null&&(L(s,!1),D(s));else L(this,i)}const ee=i=>{var t,e,s,n;i.type==X.CHILD&&((t=(s=i)._$AP)!==null&&t!==void 0||(s._$AP=te),(e=(n=i)._$AQ)!==null&&e!==void 0||(n._$AQ=Yt))};class se extends tt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),St(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,n;t!==this.isConnected&&(this.isConnected=t,t?(s=this.reconnected)===null||s===void 0||s.call(this):(n=this.disconnected)===null||n===void 0||n.call(this)),e&&(L(this,t),D(this))}setValue(t){if(Xt(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie=()=>new ne;class ne{}const et=new WeakMap,oe=Y(class extends se{render(i){return c}update(i,[t]){var e;const s=t!==this.U;return s&&this.U!==void 0&&this.ot(void 0),(s||this.rt!==this.lt)&&(this.U=t,this.ht=(e=i.options)===null||e===void 0?void 0:e.host,this.ot(this.lt=i.element)),c}ot(i){var t;if(typeof this.U=="function"){const e=(t=this.ht)!==null&&t!==void 0?t:globalThis;let s=et.get(e);s===void 0&&(s=new WeakMap,et.set(e,s)),s.get(this.U)!==void 0&&this.U.call(this.ht,void 0),s.set(this.U,i),i!==void 0&&this.U.call(this.ht,i)}else this.U.value=i}get rt(){var i,t,e;return typeof this.U=="function"?(t=et.get((i=this.ht)!==null&&i!==void 0?i:globalThis))===null||t===void 0?void 0:t.get(this.U):(e=this.U)===null||e===void 0?void 0:e.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re=Y(class extends tt{constructor(i){var t;if(super(i),i.type!==X.ATTRIBUTE||i.name!=="class"||((t=i.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var e,s;if(this.et===void 0){this.et=new Set,i.strings!==void 0&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!(!((e=this.st)===null||e===void 0)&&e.has(o))&&this.et.add(o);return this.render(t)}const n=i.element.classList;this.et.forEach(o=>{o in t||(n.remove(o),this.et.delete(o))});for(const o in t){const r=!!t[o];r===this.et.has(o)||((s=this.st)===null||s===void 0?void 0:s.has(o))||(r?(n.add(o),this.et.add(o)):(n.remove(o),this.et.delete(o)))}return y}});var V,le=new Uint8Array(16);function ae(){if(!V&&(V=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!V))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return V(le)}var he=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function de(i){return typeof i=="string"&&he.test(i)}for(var p=[],st=0;st<256;++st)p.push((st+256).toString(16).substr(1));function ce(i){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,e=(p[i[t+0]]+p[i[t+1]]+p[i[t+2]]+p[i[t+3]]+"-"+p[i[t+4]]+p[i[t+5]]+"-"+p[i[t+6]]+p[i[t+7]]+"-"+p[i[t+8]]+p[i[t+9]]+"-"+p[i[t+10]]+p[i[t+11]]+p[i[t+12]]+p[i[t+13]]+p[i[t+14]]+p[i[t+15]]).toLowerCase();if(!de(e))throw TypeError("Stringified UUID is invalid");return e}function ue(i,t,e){i=i||{};var s=i.random||(i.rng||ae)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,t){e=e||0;for(var n=0;n<16;++n)t[e+n]=s[n];return t}return ce(s)}const pe=m`
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
`,$e="cta-accordion";class N extends U{constructor(){super(),this.open=!1,this.name="",this.uuid="",this.panelRef=ie(),this.uuid=ue()}firstUpdated(){if(this.name.trim()==="")throw new Error("Accordion name attribute is required.")}updated(t){t.has("open")&&(this.handleIsOpenClass(),this.togglePanel())}handleIsOpenClass(){const t="is-open",{open:e}=this;e?this.classList.add(t):this.classList.remove(t)}togglePanel(){const t=this.panelRef.value;!t||(this.open?this.expandPanel(t):this.collapsePanel(t))}collapsePanel(t){var e=t.scrollHeight,s=t.style.transition;t.style.transition="",requestAnimationFrame(function(){t.style.height=`${e}px`,t.style.transition=s,requestAnimationFrame(function(){t.classList.remove("panel-open"),t.style.height="0px"})}),t.setAttribute("data-collapsed","true")}expandPanel(t){var e=t.scrollHeight;t.style.height=e+"px",t.classList.add("panel-open"),t.setAttribute("data-collapsed","false")}onClick(){this.open=!this.open}render(){const t={open:this.open};return this.__off__?I`${this.innerHTML}`:I`
      <div data-name="accordion-trigger" @click=${this.onClick} aria-controls=${this.uuid} aria-expanded=${this.open}
        class=${re(t)}>
        <div data-name="accordion-trigger-content">
          ${this.name}
        </div>
        <cta-icon data-name="accordion-trigger-icon" name="chevron-down" width="24" height="24"></cta-icon>
      </div>
      
      <div data-name="accordion-panel" id=${this.uuid} ${oe(this.panelRef)} aria-labelledby=${this.name}>
        <slot></slot>
      </div>
    `}}N.tagName=$e,N.styles=[pe],N.properties=at(lt({},U.properties),{open:{attribute:!0,type:Boolean,reflect:!0},name:{attribute:!0,type:String,reflect:!0}}),Z(N.tagName,N);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class it extends tt{constructor(t){if(super(t),this.it=c,t.type!==X.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===c||t==null)return this.ft=void 0,this.it=t;if(t===y)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.ft;this.it=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}it.directiveName="unsafeHTML",it.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class nt extends it{}nt.directiveName="unsafeSVG",nt.resultType=2;const ve=Y(nt);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot=i=>i!=null?i:c,rt=new Map;rt.set("chevron-down",Object.freeze({id:"chevron-down",viewBox:"0 0 24 24",markup:`
  <path fill="currentcolor" d="M16.6 8.6 12 13.2 7.4 8.6 6 10l6 6 6-6z"></path>
`})),rt.set("close-circle",Object.freeze({id:"null",viewBox:"0 0 252 252",markup:`
  <path d="M126 0a126 126 0 1 0 0 252 126 126 0 0 0 0-252zm0 234a108 108 0 1 1 0-216 108 108 0 0 1 0 216z"></path>
  <path d="M165 87c-4-3-10-3-13 0l-26 26-26-26a9 9 0 1 0-13 13l26 26-26 26a9 9 0 1 0 13 13l26-26 26 26a9 9 0 0 0 13 0c3-4 3-10 0-13l-26-26 26-26c3-3 3-9 0-13z"></path>
`}));const ge={get(i){return rt.get(i)}},fe="cta-icon",_e=i=>ge.get(i);class M extends U{constructor(){super(...arguments),this.name="",this.inline=!1}getIcon(){return _e(this.name)}render(){const t=this.getIcon();return I`
      <svg id=${t==null?void 0:t.id} viewBox=${t==null?void 0:t.viewBox} class=${ot(this.class)} width=${ot(this.width)} height=${ot(this.height)}>
        ${ve(t==null?void 0:t.markup)}
      </svg>
    `}}return M.tagName=fe,M.styles=m`
    :host {
      display: flex;
    }
    :host([inline]) {
      display: inline-flex;
    }
  `,M.properties={name:{attribute:!0,type:String,reflect:!0},inline:{attribute:!0,type:Boolean,reflect:!0},class:{attribute:!0,type:String,reflect:!0},width:{attribute:!0,type:Number,reflect:!0},height:{attribute:!0,type:Number,reflect:!0}},Z(M.tagName,M),(i=>{if(typeof i.document=="undefined")return;const{body:t}=i.document,e=i.document.createElement(z.tagName);t.prepend(e),t.classList.add("cta-components-loaded")})(globalThis),v.Accordion=N,v.Icon=M,Object.defineProperties(v,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),v}({});
