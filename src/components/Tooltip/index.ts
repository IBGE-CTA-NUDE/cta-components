import {html, PropertyDeclarations} from 'lit';
import {ref, createRef} from 'lit/directives/ref.js';
import React from 'react';
import tippy from 'tippy.js';

import {KeyAttribute} from '../../extra-types';
import {BaseComponent} from '../../utils/BaseComponent';
import {define} from '../../utils/define';
import {contentStyles} from './contentStyles';

const TAG_NAME = 'cta-tooltip';

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME]: TooltipElement
  }

  namespace JSX {
    interface IntrinsicElements {
      [TAG_NAME]: TooltipElementAttributes & KeyAttribute
    }
  }
}

export interface TooltipElementAttributes extends React.HTMLAttributes<HTMLDivElement> {}

export interface TooltipElement extends HTMLElement, BaseComponent {}

export class Tooltip extends BaseComponent {
  static tagName = TAG_NAME;

  static styles = [contentStyles];

  static override properties: PropertyDeclarations = {
    text: {attribute: true, type: String, reflect: true},
  };

  text = '';
  private contentRef = createRef<HTMLSlotElement>();

  private createTooltip() {
    if (!this.contentRef.value) {
      return;
    }

    tippy(this, {
      arrow: true,
      content: this.text,
    });
  }


  private onSlotChange(event: Event) {
    const slot = event.target instanceof HTMLSlotElement ? event.target : null;

    if (!slot) {
      return;
    }

    this.createTooltip();
  }

  protected override render() {
    return html`
      <slot ${ref(this.contentRef)} @slotchange=${this.onSlotChange}></slot>
    `;
  }
}

define(Tooltip.tagName, Tooltip);
