import {
  FaGithub, FaLinkedin, FaEnvelope, FaFreeCodeCamp
} from 'react-icons/fa';

import styled, { css } from 'styled-components';

import { device } from '~/assets/styles/partials/_variables';

export const _icon = css`
  height: 100%;
  width: auto;
  color: #f47a65;

  &:hover {
    transform: scale(1.1);
  }

  @media ${device.desktop} {
    height: 80%;
  }

  @media ${device.mobileM} {
    height: 70%;
  }
`;

export const IconWrapper = styled.a.attrs((props) => ({
  href: props.path,
  target: '_blank'
}))`
  position: relative;
  cursor: pointer;
  border: transparent;
  height: 50px;
  background-color: transparent;
`;

export const SocialsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  height: 50%;
  justify-items: center;

  @media ${device.tablet} {
    margin-right: 20px;
    grid-template-columns: repeat(2, 1fr);
    align-items: flex-start;
  }
`;

export const GithubIcon = styled(FaGithub)`
  ${_icon};
`;

export const LinkedinIcon = styled(FaLinkedin)`
  ${_icon};
`;

export const FCCIcon = styled(FaFreeCodeCamp)`
  ${_icon};
`;

export const SourcererIcon = styled.object.attrs(({
  data: 'https://i.imgur.com/aQzwb9I.png',
  alt: 'Sourcerer'
}))`
  ${_icon};
`;

export const KattisIcon = styled.img.attrs(({
  src: 'https://i.imgur.com/4vS0nAb.png',
  alt: 'Open Kattis'
}))`
  ${_icon};
`;

export const MailIcon = styled(FaEnvelope).attrs(({
  alt: 'Mail me'
}))`
  ${_icon};
`;

export const TooltipText = styled.span`
  font-family: 'NeurialGrotesk-Regular';
  font-size: 14px;
  visibility: hidden;
  position: absolute;
  width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  z-index: 1;
  opacity: 0;

  bottom: 125%;
  left: 50%;
  margin-left: -60px;

  ${IconWrapper}:hover & {
    visibility: visible;
    transition: opacity 0.6s;
    opacity: 1;
  }

  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }
`;
