import React, { Fragment, FunctionComponent } from 'react';
import { Exemplets } from './components/Exemplets';
import { Header } from './components/Header';
import { Home } from './components/Home';
import GlobalStyles from './styles/globalStyle';

export const App: FunctionComponent = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Home />
        <Exemplets />
      </main>
      <GlobalStyles />
    </Fragment>
  );
};
