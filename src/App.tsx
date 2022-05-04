import React, { Fragment, FunctionComponent } from 'react';
import { About } from './components/About';
import { Exemplets } from './components/Exemplets';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Pricing } from './components/Pricing';
import GlobalStyles from './styles/globalStyle';

export const App: FunctionComponent = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Home />
        <Exemplets />
        <Pricing />
        <About />
      </main>
      <Footer />
      <GlobalStyles />
    </Fragment>
  );
};
