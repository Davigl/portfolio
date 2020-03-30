import styled from 'styled-components';

import { device } from '~/assets/styles/partials/_variables';

export const Footer = styled.footer`
  position: relative;
  bottom: 10px;
  margin-left: 20px;

  @media ${device.tablet} {
    text-align: center;
    margin-left: 0;
  }
`;

export const FooterText = styled.p`
  font-family: 'NeurialGrotesk-Regular';
  color: #999;
  font-size: 12px;
`;
