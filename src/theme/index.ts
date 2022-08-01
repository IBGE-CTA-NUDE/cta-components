import {html} from 'lit';

import {BaseComponent} from '../utils/BaseComponent';
import {baseVariables} from './base-variables';
import {define} from '../utils/define';
import {lightTheme} from './light-theme';
import {darkTheme} from './dark-theme';
import {components} from './components';

const TAG_NAME = 'cta-theme';

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME]: CtaTheme
  }
}

export class CtaTheme extends BaseComponent {
  static tagName = TAG_NAME;

  protected override createRenderRoot(): Element | ShadowRoot {
    return this;
  }

  protected override render() {
    return html`
        <style>
          .cta-theme {
            display: none;
          }
          ${baseVariables}
          ${lightTheme}
          ${darkTheme}
          ${components}
        </style>
      `;
  }
}

define(CtaTheme.tagName, CtaTheme);
