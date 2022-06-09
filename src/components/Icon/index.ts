import { css, html, PropertyDeclarations } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { BaseComponent } from '../../utils/BaseComponent';
import { define } from '../../utils/define';
import { iconsMap } from './sprite-map';

const TAG_NAME = 'cta-icon';

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME]: IconElement
  }

  namespace JSX {
    interface IntrinsicElements {
      [TAG_NAME]: IconElementAttributes
    }
  }
}

export interface IconElementAttributes extends React.HTMLAttributes<HTMLDivElement> {
  /** The svg icon id */
  name: string;
  /** 
   * The icon is used inline or as a block element 
   * @default false
  */
  inline?: boolean;
  /** CSS class to be applied directly on the svg element */
  class?: string;
  /** svg element width */
  width?: number;
  /** svg element height */
  height?: number;
}

export interface IconElement extends HTMLElement, BaseComponent {
  /** The svg icon id */
  name: string;
  /** 
   * The icon is used inline or as a block element 
   * @default false
  */
  inline?: boolean;
  /** CSS class to be applied directly on the svg element */
  class?: string;
  /** svg element width */
  width?: number;
  /** svg element height */
  height?: number;
}

const getIconProps = (name: string) => iconsMap.get(name);

export class Icon extends BaseComponent {
  static tagName = TAG_NAME;

  static styles = css`
    :host {
      display: flex;
    }
    :host([inline]) {
      display: inline-flex;
    }
  `

  static override properties: PropertyDeclarations = {
    name: { attribute: true, type: String, reflect: true },
    inline: { attribute: true, type: Boolean, reflect: true }, 
    class: { attribute: true, type: String, reflect: true },
    width: { attribute: true, type: Number, reflect: true },
    height: { attribute: true, type: Number, reflect: true },
  };

  name = '';
  inline = false;
  class: string | undefined;
  width: number | undefined;
  height: number | undefined;

  private getIcon() {
    return getIconProps(this.name);
  }

  override render() {
    const icon = this.getIcon();
    return html`
      <svg id=${icon?.id} viewBox=${icon?.viewBox} class=${ifDefined(this.class)} width=${ifDefined(this.width)} height=${ifDefined(this.height)}>
        ${unsafeSVG(icon?.markup)}
      </svg>
    `;
  }
}

define(Icon.tagName, Icon);
