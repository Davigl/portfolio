import React from 'react';

import { Item, MenuLink } from './styles';

export default function NavItem({ path, name, side }) {
  return (
    <Item side={side}>
      <MenuLink path={path}> {name} </MenuLink>
    </Item>
  );
}
