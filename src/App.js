import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          Home
        </Route>
        <Route path="/search">
          Search
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
