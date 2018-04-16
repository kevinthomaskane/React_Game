
import React from "react";
import "./images.css";

const Images = props => {

  const style = {
    marginBottom: 40,
    paddingLeft: 90,
    fontWeight: "bold"
  }
  return (
  <div className="container">
  <h5 style={style}>Click on a player to increase your score, but don't click the same player twice!</h5>
    <div className="row">
      <div className="col-md-12">
        {props.players.map(function(element, i){
           return <img onClick={props.handleClick} className={element.name} src={element.image} alt={element.name} />
        })}
      </div>
    </div>
  </div>
  )
};

export default Images;