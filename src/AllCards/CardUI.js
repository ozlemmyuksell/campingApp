import React from "react";
import "./card-style.css";

const Card = props => {
  return (
    <div class="text-center shadow card-container row">
      <div className="overflow image-container">
        <img src={props.imgsrc} alt={props.imgsrc} className="card-img-top" />
      </div>
      <div className="card-body text">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">{props.content}</p>
        <a href="#" className="btn btn-outline-dark">
          Detaylar için...
        </a>
      </div>
    </div>
  );
};

export default Card;
