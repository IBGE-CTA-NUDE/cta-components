import {css} from 'lit';

/**
 * Follow https://atomiks.github.io/tippyjs/v6/themes/
 * A tippy is essentially three nested divs.
    - [data-tippy-root] is the outermost node. 
          It is what Popper uses to position the tippy.
          You don't need to apply any styles to this element.
    - tippy-box is the actual box node.
    - tippy-content is the content node.

    Depending on the props supplied, there will exist other elements inside it:

    <div data-tippy-root>
      <div class="tippy-box" data-placement="top">
        <div class="tippy-backdrop"></div> <!-- animateFill: true -->
        <div class="tippy-arrow"></div> <!-- arrow: true -->
        <div class="tippy-content">
          My content
        </div>
      </div>
    </div>
 */


export const tooltipStyles = css` 
  .tippy-box {
    color: var(--neutral-0);
    background-color: var(--tooltip-background-color);
    padding: 0.5em;
    font-size: 0.63rem;
    font-weight: 400;
    line-height: 1.26;
  }

  .tippy-box .tippy-arrow {
    color: var(--tooltip-background-color);
  }
`;
