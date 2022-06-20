import { css } from 'lit';
import { tooltipStyles } from './tooltipStyles'

const theme = css`
  :root {
    --tooltip-background-color: var(--green-80);
  }
  :root .dark-mode {
    --tooltip-background-color: var(--green-80);
  }

  ${tooltipStyles}
`;

export default theme;