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
      var player = Players.filter(function(element){
        return element.name === choice
      });
      for (let i = 0; i < this.state.players.length; i++){
        let selected = this.state.players[i].selected
        console.log(selected)
        this.state.players[i].name === (choice && !selected) ? (Players[i].selected = true, score++, this.checkWin()) : console.log("hey there");
        this.state.players[i].name === (choice && selected) ? (this.reset()) : console.log("keep playing");
      }
      this.setState({players: Players, points: score});
      this.shuffleArray(this.state.players);
    };

    checkWin = () => {
      this.state.points === 12 ? (alert("you win"), this.reset()) : console.log("keep playing")
    };

    reset = () => {
      console.log("in reset")
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
