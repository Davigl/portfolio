import React from 'react';

import { Item, MenuLink, ItemImage } from './styles';

export default function NavItem({
  path, name, image, side
}) {
  return (
    <Item side={side}>
      <MenuLink path={path}>
        { image
          ? <ItemImage src={image} />
          : name }
      </MenuLink>
    </Item>
  );
}
