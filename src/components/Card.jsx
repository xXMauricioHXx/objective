import React from "react";
import './styles/Card.css';

const Card = props => {
  return (
    <div className="card">
      <div className="card-body">{props.children}</div>
    </div>
  );
};

export default Card;
