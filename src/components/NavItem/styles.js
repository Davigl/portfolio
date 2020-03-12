import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import { device } from '~/assets/styles/partials/_variables';

export const Item = styled.li`
  padding: 20px;

  &:first-child {
    margin-right: auto;
  }

  @media ${device.tablet} {
    &:not(:first-child) {
      display: ${(props) => (props.side ? 'initial' : 'none')};
    }
  }
`;

export const MenuLink = styled(NavLink).attrs((props) => ({
  to: props.path,
  activeStyle: { borderBottom: '4px solid #f47a65' },
}))`
  padding-bottom: 10px;

  &:hover {
    color: #f47a65;
  }
`;
