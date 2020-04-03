import { keyframes } from 'styled-components';

export const typing = keyframes`
  from {
      width: 0%
  }
  to {
      width: 100%
  }
`;

export const blink = keyframes`
  from, to {
      border-color: transparent
  }
  50% {
      border-color: #f47a65;
  }
`;

export const scaleUp = keyframes`
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
`;

export const textFocusIn = keyframes`
  0% {
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0px);
    opacity: 1;
  }
`;
