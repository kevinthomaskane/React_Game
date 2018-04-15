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
          console.log(this.state.players[i].selected)
          Players[i].selected = true
          score++ 
          this.checkWin();
        }
        if (this.state.players[i].name === choice && this.state.players[i].selected === true){
          console.log(this.state.players[i])
          this.reset();
        }
      }
      this.setState({players: Players, points: score});
      this.shuffleArray(this.state.players);
    };

    checkWin = () => {
      if (this.state.points === 12){
        alert("you win");
        this.reset();
      };
    };

    reset = () => {
      for (let i = 0; i < Players.length; i++){
        Players[i].selected = false;
      };
      this.setState({players: Players, points: 0});
    };


  render() {
    return (
      <div>
        <Header score={this.state.points}/>
        <Images players={this.state.players} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
