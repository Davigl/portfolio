import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { device } from '~/assets/styles/partials/_variables';

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
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
