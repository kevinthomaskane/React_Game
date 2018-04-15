import React, { Component } from 'react';
import './App.css';
import Header from "./components/header";
import Images from "./components/images";
import Players from "./images.json";

class App extends Component {

  state = {
    players: Players,
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
      var choice = event.target.className;
      var score = this.state.points;
      for (let i = 0; i < this.state.players.length; i++){
        if (this.state.players[i].name === choice && this.state.players[i].selected === false){
          Players[i].selected = true
          score++
          this.checkWin();
          this.shuffleArray(this.state.players);
        } else {
          console.log("you lose")
        }
      }
      this.setState({players: Players, points: score})
    };

    checkWin = () => {
      this.state.points === 12 ? console.log("you win") : console.log("you lose")
    }

    reset = () => {
      
    }


  render() {
    console.log(this.state.players)
    return (
      <div>
        <Header score={this.state.points}/>
        <Images players={this.state.players} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
