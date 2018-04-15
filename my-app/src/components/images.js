
import React from "react";
import "./images.css";

const Images = props => {
 console.log(props)
  return (
  <div className="container">
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