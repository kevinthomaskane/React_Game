
import React from "react";
import "./images.css";

const Images = props => (
 
  <div className="container">
    <div className="row">
      <div className="col-md-3">
      <img onClick={() => props.handlePageChange("Home")} className={props.currentPage === "Home" ? "nav-link active" : "nav-link"} src="images/butler.webp" alt="Jimmy Butler" />
      </div>
      <div className="col-md-3">
      <img onClick={() => props.handlePageChange("Home")} className={props.currentPage === "Home" ? "nav-link active" : "nav-link"} src="images/butler.webp" alt="Jimmy Butler" />
      </div>
      <div className="col-md-3">
      <img onClick={() => props.handlePageChange("Home")} className={props.currentPage === "Home" ? "nav-link active" : "nav-link"} src="images/butler.webp" alt="Jimmy Butler" />
      </div>
      <div className="col-md-3">
      <img onClick={() => props.handlePageChange("Home")} className={props.currentPage === "Home" ? "nav-link active" : "nav-link"} src="images/butler.webp" alt="Jimmy Butler" />
      </div>
    </div>
  </div>
);

export default Images;