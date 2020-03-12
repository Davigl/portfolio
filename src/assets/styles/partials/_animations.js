import { keyframes } from 'styled-components';

export const typing = keyframes`
  from {
      width: 0%
  }
  to {
      width: 50%
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
