import React from 'react';

import Socials from '~/containers/Socials';

import {
  HeaderWrapper, DescriptionWrapper, CodersContainer,
  DescriptionTitle, DescriptionText, TypeWritter,
  TypeWritterText, Photo
} from './styles';

export default function Header() {
  return (
    <HeaderWrapper>
      <DescriptionWrapper>
        <div>
          <DescriptionTitle>
            Hello,
          </DescriptionTitle>
          <DescriptionText>
            I am {' '}
            <span> Davi Guimarães </span>
          </DescriptionText>
          <TypeWritter>
            <TypeWritterText> A Full-Stack Developer </TypeWritterText>
          </TypeWritter>
        </div>
      </DescriptionWrapper>
      <DescriptionWrapper>
        <Photo src="https://i.imgur.com/VNYWwGb.png" />
        <Socials />
      </DescriptionWrapper>
    </HeaderWrapper>
  );
}
