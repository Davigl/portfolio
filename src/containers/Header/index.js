import React from 'react';

import Socials from '~/containers/Socials';

import {
  HeaderWrapper, DescriptionWrapper, CodersContainer,
  DescriptionTitle, DescriptionText, TypeWritter,
  TypeWritterText, Photo, Introduction
} from './styles';

export default function Header() {
  return (
    <HeaderWrapper>
      <DescriptionWrapper>
        <Introduction>
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
        </Introduction>
        <CodersContainer>
          <codersrank-widget username="davigl" layout="horizontal" style={{ '--badge-text-color': '#fff', '--badge-bg-color': '#F47A65' }} />
        </CodersContainer>
      </DescriptionWrapper>
      <DescriptionWrapper>
        <Photo src="https://i.imgur.com/VNYWwGb.png" />
        <Socials />
      </DescriptionWrapper>
    </HeaderWrapper>
  );
}
