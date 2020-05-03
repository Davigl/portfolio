import React from 'react';

import Header from '~/containers/Header';
import Navbar from '~/containers/Navbar';

import { Footer, FooterText } from './styles';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Footer>
        <FooterText>
          Still building with <span role="img" aria-label="heart"> ❤️ </span> and <span role="img" aria-label="coffee"> ☕ </span>
        </FooterText>
      </Footer>
    </>
  );
}
