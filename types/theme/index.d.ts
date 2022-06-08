import { BaseComponent } from "../utils/BaseComponent";
declare const TAG_NAME = "cta-theme";
declare global {
    interface HTMLElementTagNameMap {
        [TAG_NAME]: CtaTheme;
    }
}
export declare class CtaTheme extends BaseComponent {
    static tagName: string;
    protected createRenderRoot(): Element | ShadowRoot;
    protected render(): import("lit-html").TemplateResult<1>;
}
export {};
