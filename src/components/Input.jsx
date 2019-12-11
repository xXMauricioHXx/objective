import React from "react";
import "./styles/Input.css";

const Input = props => {
  return (
    <div className="input-container">      
      <form>
        <div className="form-group">
          <label>
            {props.label} {props.required && <span>*</span>}
          </label>
          <input
            type={props.type}
            className="form-control"
            placeholder={props.placeholder}
          />
        </div>
      </form>
    </div>
  );
};

export default Input;
