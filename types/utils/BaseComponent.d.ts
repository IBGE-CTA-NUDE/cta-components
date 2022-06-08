import { LitElement, PropertyDeclarations } from 'lit';
export interface BaseComponent {
    __off__: boolean;
}
export declare class BaseComponent extends LitElement {
    static shadowRootOptions: ShadowRootInit;
    static properties: PropertyDeclarations;
    __off__: boolean;
}
export declare const renderHtml: (strings: TemplateStringsArray, ...values: unknown[]) => import("lit-html").TemplateResult<1>;
