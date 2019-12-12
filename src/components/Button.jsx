import React from 'react';
import "../styles/DefaultButton.css";
import "../styles/PrimaryButton.css";

const Button = props => {
  return (
    <div>
      <button className={`btn btn-primary ${props.type}`}>{props.value}</button>
    </div>
  );
};

export default Button;
