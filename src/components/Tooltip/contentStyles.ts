import {css} from 'lit';

export const contentStyles = css` 
  :host {
    cursor: help;
  }
  
  :host::before {
    position: relative;
    top: .3em;
    left: 0;
    vertical-align: bottom;
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="%23767676"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
    -webkit-animation: moveArrowLeft 1s linear infinite alternate;
    animation: moveArrowLeft 1s linear infinite alternate;
    white-space: nowrap;
}

:host::after {
    position: relative;
    top: .3em;
    right: 0;
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="%23767676"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
    -webkit-animation: moveArrowRight 1s linear infinite alternate;
    animation: moveArrowRight 1s linear infinite alternate;
    white-space: nowrap;
}

@-webkit-keyframes moveArrowLeft {
    0% {
        left: 0
    }

    50% {
        left: -5px
    }

    100% {
        left: 0
    }
}

@keyframes moveArrowLeft {
    0% {
        left: 0
    }

    50% {
        left: -5px
    }

    100% {
        left: 0
    }
}

@-webkit-keyframes moveArrowRight {
    0% {
        right: 0
    }

    50% {
        right: -5px
    }

    100% {
        right: 0
    }
}

@keyframes moveArrowRight {
    0% {
        right: 0
    }

    50% {
        right: -5px
    }

    100% {
        right: 0
    }
}
`;
