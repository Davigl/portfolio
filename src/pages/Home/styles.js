import styled from 'styled-components';

import { device } from '~/assets/styles/partials/_variables';

export const Footer = styled.footer`
  line-height: 56px;
  text-align: center;

  @media ${device.tablet} {
    text-align: center;
    margin-left: 0;
  }
`;

export const FooterText = styled.p`
  font-family: 'NeurialGrotesk-Regular';
  color: #999;
  height: 56px;
  font-size: 12px;
  font-weight: bold;
`;
