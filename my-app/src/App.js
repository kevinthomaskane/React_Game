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
      var player = this.state.players.filter(function(element){
        return element.name === choice
      });
      var newArray = this.state.players.filter(function(element){
        return element.name !== choice
      }).map(function(element, i){
        return element
      })
      console.log(player);

      player[0].selected === false ? (player[0].selected = true, newArray.push(player[0]), score++, this.checkWin()) : (alert("you lose"), this.reset());

      this.setState({players: newArray, points: score});
      this.shuffleArray(this.state.players);
    };

    checkWin = () => {
      this.state.points === 12 ? (alert("you win"), this.reset()) : console.log("keep playing")
    };

    reset = () => {
      console.log("in reset")
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
