import React from 'react';

import { Menu } from './styles';

export default function NavMenu({ children, side }) {
  return (
    <Menu side={side}>
      {children}
    </Menu>
  );
}
