import {css} from 'lit';

const theme = css`
  :root {
    --accordion-trigger-border-color: var(--neutral-50);
    --accordion-trigger-open-background-color: var(--neutral-100);
  }
  :root .dark-mode {
    --accordion-trigger-border-color: var(--neutral-50);
    --accordion-trigger-open-background-color: var(--neutral-26);
  }
`;

export default theme;
