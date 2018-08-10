import React, { Component } from "react";
import Banner from "./Components/Banner/Banner";
import Skills from "./Components/Skills/Skills";
import Header from "./Components/Header/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Skills />
      </div>
    );
  }
}

export default App;
