import { CtaTheme } from './theme';

export * from './components/Accordion';
export * from './components/Icon';

((window) => {
  if (typeof window.document === 'undefined') {
    return;
  }

  const { body } = window.document;
  const theme = window.document.createElement(CtaTheme.tagName);
  body.prepend(theme);
  body.classList.add('cta-components-loaded');
})(globalThis);