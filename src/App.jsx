import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import Banner from './Components/Banner/Banner';
import Skills from './Components/Skills/Skills';
import AboutMe from './Components/AboutMe/AboutMe';
import Header from './Components/Header/Header';
import MyProjects from './Components/Portfolio/Portfolio';
import ContactMe from './Components/ContactMe/ContactMe';
import Footer from './Components/Footer/Footer';
import './App.css';

const App = () => {
  useEffect(() => {
    ReactGA.initialize('UA-181281293-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
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
