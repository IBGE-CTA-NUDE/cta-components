import { css, html, PropertyDeclarations } from 'lit';

import { BaseComponent } from '../../utils/BaseComponent';
import { define } from '../../utils/define';
import { addEventListener } from '../../utils/addEventListener';

const TAG_NAME = 'cta-accordion-group';

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME]: AccordionGroupElement
  }

  namespace JSX {
    interface IntrinsicElements {
      [TAG_NAME]: AccordionGroupElementAttributes
    }
  }
}

export interface AccordionGroupElementAttributes extends React.HTMLAttributes<HTMLDivElement> {
  /** @default false */
  multipleOpen?: boolean;
}

export interface AccordionGroupElement extends HTMLElement, BaseComponent {
  /** @default false */
  multipleOpen?: boolean;
}

export class AccordionGroup extends BaseComponent {
  static tagName = TAG_NAME;
  static styles = css`
    :host {
      display: contents;
    }
  `;

  static override properties: PropertyDeclarations = {
    ...BaseComponent.properties,
    multipleOpen: { attribute: true, type: Boolean, reflect: true },
  };

  // Properties
  multipleOpen = false;

  private removeListener = null;
  private currentlyOpen = null;

  // Lifecycle methods
  override connectedCallback(): void {
    this.removeListener = addEventListener(
      this,
      'click',
      this.onClick.bind(this)
    )
  }

  override disconnectedCallback() {
    super.disconnectedCallback()
    this.currentlyOpen = null;
    this.removeListener();
  }

  // Component methods

  // EVENT LISTENERS
  onClick(event: Event) {
    if (this.multipleOpen) {
      return;
    }

    const target = event.target instanceof HTMLElement ? event.target : null;

    if (!target) {
      return 
    }

    if (target === this.currentlyOpen) {
      return;
    }

    if (this.currentlyOpen) {
      this.currentlyOpen.open = false;
    }

    this.currentlyOpen = target;
  }

  // RENDER 
  override render() {
    if (this.__off__) {
      return html`${this.innerHTML}`;
    }

    return html`
      <slot></slot>
    `;
  }
}

define(AccordionGroup.tagName, AccordionGroup);
