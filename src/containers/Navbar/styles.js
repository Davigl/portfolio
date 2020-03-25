import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { scaleUp } from '~/assets/styles/partials/_animations';
import { device } from '~/assets/styles/partials/_variables';

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  animation: ${scaleUp} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`;

export const Plus = styled(Link).attrs((p) => ({
  to: p.path
}))`
  display: none;
  padding: 20px;

  &:hover {
    color: #88c6dd;
  }

  @media ${device.tablet} {
    display: initial;
  }
`;
