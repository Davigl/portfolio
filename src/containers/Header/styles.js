import styled from 'styled-components';

import { typing, blink, textFocusIn } from '~/assets/styles/partials/_animations';
import { device } from '~/assets/styles/partials/_variables';

export const HeaderWrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  height: 85vh;
`;

export const CodersContainer = styled.div`
  width: 50%;

  @media ${device.tablet} {
    width: 95%;
    margin-top: 40px;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-evenly;
  flex-direction: column;
  margin-left: 20px;

  &:last-child {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 0.5fr;
    grid-template-rows: 1fr;
    width: 45%;
    margin-top: 5vh;
  }

  @media ${device.tablet} {
    width: 100%;
    margin-top: 30px;
    margin-bottom: 15px;

    &:last-child {
      grid-gap: 7%;
      width: 100%;
      margin-bottom: 50px;
    }
  }
`;

export const DescriptionTitle = styled.h3`
  font: 400 20px 'Poppins', sans-serif;
  font-style: normal;
  color: #666;
  letter-spacing: 1px;
  animation: ${textFocusIn} 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
`;

export const DescriptionText = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 35px;
  padding: 10px 0 10px;
  font-weight: 400;
  color: #666;
  letter-spacing: 5px;
  animation: ${textFocusIn} 2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;

  span {
    font-weight: 600;
    position: relative;
    display: inline-block;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px;
      height: 15px;
      width: 100%;
      z-index: -1;
      background: #f47a65;
      opacity: 0.5;
    }
  }

  @media ${device.tablet} {
    font-size: 27px;
  }
`;

export const TypeWritter = styled.div`
  margin-top: 10px;
`;

export const TypeWritterText = styled.p`
  color: #666;
  font-family: 'Poppins', sans-serif;
  display: inline-block;
  overflow: hidden;
  letter-spacing: 2px;
  animation: ${typing} 5s steps(50, end), ${blink} .75s normal infinite;
  white-space: nowrap;
  font-size: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-right: 4px solid #f47a65;
  box-sizing: border-box;

  @media ${device.mobileL} {
    font-size: 15px;
  }
`;

export const Photo = styled.img`
  max-width: 80%;
  height: auto;
  box-shadow: 10px 13px 0px 8px rgba(244,122,101,1);
  border-radius: 2px;

  &:hover {
    transition: 1s ease;
    transform: scale(1.1);
  }
`;
