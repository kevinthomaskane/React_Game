import React, { Component } from 'react';
import './App.css';
import Header from "./components/header";
import Images from "./components/images";
import players from "./images.json";

class App extends Component {

  state = {
    players: [],
    points: 0
  };

  shuffleArray = array => {
      var currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      this.setState({players: array}) 
  };

    handleClick = event => {
      var choice = event.target.name;
      var score = this.state.points;
      for (let i = 0; i < players.length; i++){
        if (players[i].name === choice && players[i].selected === false){
          players[i].selected = true
          score++
        } else {
          console.log("you lose")
        }
      }
      this.setState({players: players, points: score})
    };

    checkWin = () => {
      this.state.points === 12 ? console.log("you win") : console.log("you lose")
    }


  render() {
    return (
      <div>
        <Header score={this.state.points}/>
        <Images players={this.state.players} checkWin={this.checkWin} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
