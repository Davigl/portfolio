import styled from 'styled-components';

import { device } from '~/assets/styles/partials/_variables';

export const Menu = styled.ul`
  width: 100%;
  display: inline-flex;
  justify-content: flex-end;
  flex-direction: ${(props) => (props.side ? 'column' : 'row')};

  @media ${device.tablet} {
    align-items: flex-start;
  }
`;
