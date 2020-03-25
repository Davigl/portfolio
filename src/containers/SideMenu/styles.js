import styled from 'styled-components';

import { scaleUp } from '~/assets/styles/partials/_animations';

export const SideWrapper = styled.div`
  position: absolute;
  z-index: 1;
  right: 10%;
  background: #fff;
  margin: 10px;
  animation: ${scaleUp} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

  /* regular phones and below */
  @media (max-width: 480px) {
    right: 5%;
  }
`;
