import styled from 'styled-components';

export const SideWrapper = styled.div`
  position: absolute;
  z-index: 1;
  right: 10%;
  background: #fff;
  margin: 10px;

  /* regular phones and below */
  @media (max-width: 480px) {
    right: 5%;
  }
`;
