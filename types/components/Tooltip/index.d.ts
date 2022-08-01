import { PropertyDeclarations } from "lit";
import React from "react";
import { KeyAttribute } from "../../extra-types";
import { BaseComponent } from "../../utils/BaseComponent";
declare const TAG_NAME = "cta-tooltip";
declare global {
    interface HTMLElementTagNameMap {
        [TAG_NAME]: TooltipElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            [TAG_NAME]: TooltipElementAttributes & KeyAttribute;
        }
    }
}
export interface TooltipElementAttributes extends React.HTMLAttributes<HTMLDivElement> {
}
export interface TooltipElement extends HTMLElement, BaseComponent {
}
export declare class Tooltip extends BaseComponent {
    static tagName: string;
    static styles: import("lit").CSSResult[];
    static properties: PropertyDeclarations;
    text: string;
    private contentRef;
    private createTooltip;
    private onSlotChange;
    protected render(): import("lit-html").TemplateResult<1>;
}
export {};
