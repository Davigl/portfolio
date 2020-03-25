import React from 'react';

import {
  BadgeWrapper, BadgeIcon, BadgeLanguage, BadgeText, TopText
} from './styles';

export default function Badge({ name, ranking }) {
  return (
    <BadgeWrapper>
      <TopText> Top {ranking} </TopText>
      <BadgeLanguage>
        <BadgeIcon />
        <BadgeText>{name}</BadgeText>
      </BadgeLanguage>
    </BadgeWrapper>
  );
}
