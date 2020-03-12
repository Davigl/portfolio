import React from 'react';

import NavItem from '~/components/NavItem';
import NavMenu from '~/components/NavMenu';

import { SideWrapper } from './styles';

export default function SideMenu() {
  return (
    <SideWrapper>
      <NavMenu side="true">
        <NavItem name="home" path="/" side="true" />
        <NavItem name="projetos" path="/projects" side="true" />
        <NavItem name="sobre mim" path="/about" side="true" />
      </NavMenu>
    </SideWrapper>
  );
}
