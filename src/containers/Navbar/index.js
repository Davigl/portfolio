import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

import Logo from '~/assets/images/my-logo.png';
import NavItem from '~/components/NavItem';
import NavMenu from '~/components/NavMenu';
import SideMenu from '~/containers/SideMenu';

import { NavWrapper, Plus } from './styles';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const plusComponent = () => (
    <Plus onClick={() => setShowMenu(!showMenu)} path="">
      <FiMenu />
    </Plus>
  );

  return (
    <>
      <NavWrapper>
        <NavMenu>
          <NavItem image={Logo} path="/" />
          <NavItem name="projects" path="/projects" />
          <NavItem name="about me" path="/about" />
          <NavItem name="curriculum" path="/about" />
          { plusComponent() }
        </NavMenu>
      </NavWrapper>
      { showMenu && <SideMenu />}
    </>
  );
}
