import React, { Component } from "react";
import Banner from "./Components/Banner/Banner";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <div style={{height:'100vh'}}></div>
      </div>
    );
  }
}

export default App;
