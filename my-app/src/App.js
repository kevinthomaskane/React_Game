import React, { Component } from 'react';
import './App.css';
import Header from "./components/header";
import Images from "./components/images";
import Players from "./images.json";



class App extends Component {

  state = {
    players: Players,
    points: 0,
    message: "",
    highScore: 0
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
      var player = this.state.players.filter(function(element){
        return element.name === choice
      });
      var newArray = this.state.players.filter(function(element){
        return element.name !== choice
      }).map(function(element, i){
        return element
      })

      player[0].selected === false ? (player[0].selected = true, newArray.push(player[0]), score++, this.setState({players: newArray, points: score, message: "Keep Going!"}), this.getHighScore(), this.checkWin()) : this.reset();
      this.shuffleArray(this.state.players);
    };

    checkWin = () => {
      console.log(this.state.points)
      this.state.points === 11 ? (alert("you win"), this.reset(), console.log('you win')) : console.log("keep playing")
    };

    getHighScore = () => {
      var points = this.state.points
      points >= this.state.highScore ? this.setState({highScore: points + 1}) : console.log('not high score')
    };

    reset = () => {
      for (let i = 0; i < Players.length; i++){
        Players[i].selected = false;
      }
      this.setState({players: Players, points: 0, message: "You Guessed Incorrectly"});
    };


  render() {
    return (
      <div>
        <Header score={this.state.points} message={this.state.message} highScore={this.state.highScore} />
        <Images players={this.state.players} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
