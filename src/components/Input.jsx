import React from "react";
import "./styles/Input.css";
import { price } from "../helper/mask";

class Input extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      value: "",
      error: false,
      errorMessage: ""
    };
    this.checkError = this.checkError.bind(this);
    this.applyPipes = this.applyPipes.bind(this);
  }

  checkError() {
    if (this.props.hasErrors) {
      const errors = this.props.hasErrors();
      this.setState({ error: false });
      errors.forEach(error => {
        const message = error[this.props.field];
        if (message) {
          this.setState({ errorMessage: message, error: true });
        }
      });
    }
  }

  applyPipes(value) {
    const pipes = this.props.pipes;
    if (pipes && pipes.length) {
      pipes.forEach(pipe => {
        if (pipe === "currency") {
          value = price(value);
          if (value === 'R$ 0,00') {
            value = '';
          }
        }
      });
      
    }
    this.props.updateValue(value, this.props.field);
    this.setState({ value });
  }

  handleChange(event) {
    const value = event.target.value;
    this.applyPipes(value);
    this.checkError();
  }

  handleBlur() {
    this.checkError();
  }

  render() {
    return (
      <div className="input-container">
        <div className="form-group">
          <label>
            {this.props.label} {this.props.required && <span>*</span>}
          </label>
          <input
            type={this.props.type}
            className={`form-control ${
              this.state.error ? "input-error" : "remove-border"
            }`}
            placeholder={this.props.placeholder}
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
            onBlur={this.handleBlur.bind(this)}
          />

          {this.state.errorMessage && this.state.error && (
            <small className="form-text ">{this.state.errorMessage}</small>
          )}
        </div>
      </div>
    );
  }
}

export default Input;
