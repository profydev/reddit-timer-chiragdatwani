import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        App Placeholder
      </div>
    </ThemeProvider>
  );
}

export default App;
