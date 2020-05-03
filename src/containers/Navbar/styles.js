import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { scaleUp } from '~/assets/styles/partials/_animations';
import { device } from '~/assets/styles/partials/_variables';

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  animation: ${scaleUp} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  margin: 0 auto;
`;

export const Plus = styled(Link).attrs((p) => ({
  to: p.path
}))`
  display: none;
  padding: 30px;

  &:hover {
    color: #f47a65;
  }

  @media ${device.tablet} {
    display: initial;
  }
`;
