/// <reference types="react" />
import { PropertyDeclarations, PropertyValueMap } from 'lit';
import { KeyAttribute } from '../../extra-types';
import { BaseComponent } from '../../utils/BaseComponent';
declare const TAG_NAME = "cta-accordion";
declare global {
    interface HTMLElementTagNameMap {
        [TAG_NAME]: AccordionElement & KeyAttribute;
    }
    namespace JSX {
        interface IntrinsicElements {
            [TAG_NAME]: AccordionElementAttributes;
        }
    }
}
export interface AccordionElementAttributes extends React.HTMLAttributes<HTMLDivElement> {
    /** @default false */
    open?: boolean;
    /** The text to be shown in the trigger */
    name: string;
}
export interface AccordionElement extends HTMLElement, BaseComponent {
    /** @default false */
    open?: boolean;
    /** The text to be shown in the trigger */
    name: string;
}
export declare class Accordion extends BaseComponent {
    static tagName: string;
    static styles: import("lit").CSSResult[];
    static properties: PropertyDeclarations;
    open: boolean;
    name: string;
    uuid: string;
    panelRef: import("lit-html/directives/ref").Ref<HTMLElement>;
    constructor();
    protected firstUpdated(): void;
    protected updated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    private handleIsOpenClass;
    togglePanel(): void;
    collapsePanel(element: HTMLElement): void;
    expandPanel(element: HTMLElement): void;
    onClick(): void;
    render(): import("lit-html").TemplateResult<1>;
}
export {};
