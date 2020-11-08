import React, { useEffect } from 'react';
import * as Sentry from '@sentry/react';

import ReactGA from 'react-ga';
import Banner from './components/Banner/Banner';
import Skills from './components/Skills/Skills';
import AboutMe from './components/AboutMe/AboutMe';
import Header from './components/Header/Header';
import MyProjects from './components/Portfolio/Portfolio';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

const App = () => {
  useEffect(() => {
    ReactGA.initialize('UA-181281293-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    Sentry.captureMessage('Page Load', 'info');
    document.getElementsByClassName('fullscreen-loader')[0].classList.add('hidden');
    document.documentElement.classList.remove('bodyLocked');
  }, []);
  return (
    <div>
      <Header />
      <Banner />
      <AboutMe />
      <Skills />
      <MyProjects />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;
