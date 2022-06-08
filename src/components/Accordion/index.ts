import { html, PropertyDeclarations, PropertyValueMap, } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import { classMap } from 'lit/directives/class-map.js';
import { v4 as uuidv4 } from 'uuid';

import { BaseComponent } from '../../utils/BaseComponent';
import { define } from '../../utils/define';
import { accordionStyles } from './styles';

const TAG_NAME = 'cta-accordion';

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME]: AccordionElement
  }
}

export interface AccordionElement extends HTMLElement, BaseComponent {
  /** @default false */
  open?: boolean;
  /** The text to be shown in the trigger */
  name: string;
}

export class Accordion extends BaseComponent {
  static tagName = TAG_NAME;
  static styles = [accordionStyles];

  static override properties: PropertyDeclarations = {
    ...BaseComponent.properties,
    open: { attribute: true, type: Boolean, reflect: true },
    name: { attribute: true, type: String, reflect: true },
  };

  // Properties
  open = false;
  name = '';
  uuid = '';
  panelRef = createRef<HTMLElement>()

  constructor() {
    super();
    this.uuid = uuidv4();
  }

  // Lifecycle methods
  protected override firstUpdated(): void {
    if (this.name.trim() === '') {
      throw new Error(`Accordion name attribute is required.`);
    }
  }

  protected override updated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    if (changedProperties.has('open')) {
      this.handleIsOpenClass();
      this.togglePanel();
    }
  }

  // Component methods
  private handleIsOpenClass() {
    const className = 'is-open';
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

  collapsePanel(element: HTMLElement) {
    // get the height of the element's inner content, regardless of its actual size
    var sectionHeight = element.scrollHeight;

    // temporarily disable all css transitions
    var elementTransition = element.style.transition;
    element.style.transition = '';

    // on the next frame (as soon as the previous style change has taken effect),
    // explicitly set the element's height to its current pixel height, so we 
    // aren't transitioning out of 'auto'
    requestAnimationFrame(function () {
      element.style.height = `${sectionHeight}px`;
      element.style.transition = elementTransition;

      // on the next frame (as soon as the previous style change has taken effect),
      // have the element transition to height: 0
      requestAnimationFrame(function () {
        element.classList.remove('panel-open');
        element.style.height = '0px';
      });
    });

    // mark the section as "currently collapsed"
    element.setAttribute('data-collapsed', 'true');
  }

  expandPanel(element: HTMLElement) {
    // get the height of the element's inner content, regardless of its actual size
    var sectionHeight = element.scrollHeight;

    // have the element transition to the height of its inner content
    element.style.height = sectionHeight + 'px';
    element.classList.add('panel-open');

    // mark the section as "currently not collapsed"
    element.setAttribute('data-collapsed', 'false');
  }

  // EVENT LISTENERS
  onClick() {
    this.open = !this.open;
  }

  // RENDER 
  override render() {
    const classes = { open: this.open };

    if (this.__off__) {
      return html`${this.innerHTML}`;
    }

    return html`
      <div data-name="accordion-trigger" @click=${this.onClick} aria-controls=${this.uuid} aria-expanded=${this.open}
        class=${classMap(classes)}>
        <div data-name="accordion-trigger-content">
          ${this.name}
        </div>
        <cta-icon data-name="accordion-trigger-icon" name="chevron-down" width="24" height="24"></cta-icon>
      </div>
      
      <div data-name="accordion-panel" id=${this.uuid} ${ref(this.panelRef)} aria-labelledby=${this.name}>
        <slot></slot>
      </div>
    `;
  }
}

define(Accordion.tagName, Accordion);
