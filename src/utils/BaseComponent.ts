import { html, LitElement, PropertyDeclarations } from 'lit';

export interface BaseComponent {
  __off__: boolean
}

export class BaseComponent extends LitElement {
  static override shadowRootOptions: ShadowRootInit = {
    ...LitElement.shadowRootOptions,
    mode: 'open',
    delegatesFocus: true,
  };

  static override properties: PropertyDeclarations = {
    __off__: { attribute: true, type: Boolean, reflect: true },
  };

  __off__ = false;
}

export const renderHtml = html;
