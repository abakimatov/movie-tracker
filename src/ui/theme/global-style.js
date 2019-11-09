import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize};
  
  html, body, #root {
    width: 100%;
    height: 100%;
  }
`;
