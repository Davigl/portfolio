import { createGlobalStyle } from 'styled-components';

import NeurialGroteskMedium from '~/assets/fonts/NeurialGrotesk-Medium.otf';
import NeurialGroteskRegular from '~/assets/fonts/NeurialGrotesk-Regular.otf';
import PoppinsRegular from '~/assets/fonts/Poppins-Regular.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NeurialGrotesk-Regular';
    src: url(${NeurialGroteskRegular});
  }

  @font-face {
    font-family: 'NeurialGrotesk-Medium';
    src: url(${NeurialGroteskMedium});
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsRegular});
  }

  body {
    margin: 10px 15px 0 15px;

    li {
      list-style: none;
      font-family: 'NeurialGrotesk-Regular';
    }

    a {
      text-decoration: inherit;
      color: inherit;
    }
  }
`;

export default GlobalStyle;
