import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyle } from '@ui/theme';
import { App } from './app';

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);
