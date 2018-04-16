import React from "react";

const Header = props => {

  const styles = {
    marginLeft: 50
  }

  return (
  <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      
      <h3>Score: {props.score}</h3>
      <h3 style={styles}>{props.message}</h3>
      <h3 style={styles}>High Score: {props.highScore}</h3>
    </div>
  </div>
</nav>
</div>
)
};

export default Header;