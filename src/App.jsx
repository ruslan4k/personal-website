import React from 'react';
import Banner from './Components/Banner/Banner';
import Skills from './Components/Skills/Skills';
import AboutMe from './Components/AboutMe/AboutMe';
import Header from './Components/Header/Header';
import PortfolioOld from './Components/Portfolio/Portfolio';
import ContactMe from './Components/ContactMe/ContactMe';
import Footer from './Components/Footer/Footer';
import './App.css';

const App = () => (
  <div>
    <Header />
    <Banner />
    <AboutMe />
    <Skills />
    {/* <PortfolioOld /> */}
    <ContactMe />
    <Footer />
  </div>
);

export default App;
