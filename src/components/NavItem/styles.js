import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import { device } from '~/assets/styles/partials/_variables';

export const Item = styled.li`
  height: 60px;
  padding: 21px 15px 21px 15px;
  font-size: 16px;
  color: #666;

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
  padding: 10px;
  border-radius: 3px;

  &:hover {
    color: #f47a65;
    background-color: #ebe1e1;
  }
`;

export const ItemImage = styled.img`
  width: 90px;
  height: auto;

  @media ${device.tablet} {
    width: 50px;
  }
`;
