/// <reference types="react" />
import { PropertyDeclarations } from 'lit';
import { BaseComponent } from '../../utils/BaseComponent';
declare const TAG_NAME = "cta-icon";
declare global {
    interface HTMLElementTagNameMap {
        [TAG_NAME]: IconElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            [TAG_NAME]: IconElementAttributes;
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
export declare class Icon extends BaseComponent {
    static tagName: string;
    static styles: import("lit").CSSResult;
    static properties: PropertyDeclarations;
    name: string;
    inline: boolean;
    class: string | undefined;
    width: number | undefined;
    height: number | undefined;
    private getIcon;
    render(): import("lit-html").TemplateResult<1>;
}
export {};
