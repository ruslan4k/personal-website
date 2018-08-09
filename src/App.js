import React, { Component } from "react";
import Banner from "./Components/Banner/Banner";
import SkillIcons from "./Components/Skills/Skills";
import Header from "./Components/Header/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <div style={{ height: "100vh", backgroundColor: "white" }}>
          <SkillIcons />
        </div>
      </div>
    );
  }
}

export default App;
