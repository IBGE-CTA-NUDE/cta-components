/// <reference types="react" />
import { PropertyDeclarations } from 'lit';
import { BaseComponent } from '../../utils/BaseComponent';
declare const TAG_NAME = "cta-accordion-group";
declare global {
    interface HTMLElementTagNameMap {
        [TAG_NAME]: AccordionGroupElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            [TAG_NAME]: AccordionGroupElementAttributes;
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
export declare class AccordionGroup extends BaseComponent {
    static tagName: string;
    static styles: import("lit").CSSResult;
    static properties: PropertyDeclarations;
    multipleOpen: boolean;
    private removeListener;
    private currentlyOpen;
    connectedCallback(): void;
    disconnectedCallback(): void;
    onClick(event: Event): void;
    render(): import("lit-html").TemplateResult<1>;
}
export {};
