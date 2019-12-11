import React from "react";
import "./styles/Input.css";

class Input extends React.Component {
  constructor(props) {
    super();
    this.state = {
      required: props.required,
      label: props.label,
      type: props.type,
      placeholder: props.placeholder,
      value: "",
      field: props.field,
      updateValue: props.updateValue,
      error: false,
    };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.state.updateValue(this.state.value, this.state.field);
  }

  handleValidate(event) {
    const value = event.target.value;
    console.log(value);
    if (!value) {
      this.setState({error: true})
    }
  }


  render() {
    return (
      <div className="input-container">
        <div className="form-group">
          <label>
            {this.state.label} {this.state.required && <span>*</span>}
          </label>
          <input
            type={this.state.type}
            className={`form-control ${this.state.error ? 'input-error' : 'remove-border'}`}
            placeholder={this.state.placeholder}
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
            onBlur={this.handleValidate.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default Input;
