import React, { Component } from 'react';
import './App.css';
import Header from "./components/header";
import Images from "./components/images";

class App extends Component {

  state = {
    images: [],
  };

  

  render() {
    return (
      <div>
        <Header />
        <Images />
      </div>
    );
  }
}

export default App;
