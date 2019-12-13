import React from "react";
import Input from "../components/Input";
import { FormValidate } from "../helper/FormValidate";
import Button from "../components/Button";
import Card from "../components/Card";
import "./styles/Wish.css";

class Wish extends React.Component {
  constructor() {
    super();
    this.formSchema = [
      {
        field: "wish",
        rules: ["required", "max", "min"],
        min: 5,
        max: 10
      },
      {
        field: "value",
        rules: ["required"]
      }
    ];
    this.state = {
      validForm: false,
      errors: [],
      form: {
        wish: null,
        value: null
      }
    };
    this.validator = new FormValidate();
  }

  checkErrors() {
    const { validForm, errors } = this.validator.run(
      this.formSchema,
      this.state
    );
    this.setState({ validForm, errors });
    return this.state.errors;
  }

  handleUpdate(value, field) {
    this.setState({ form: { ...this.state.form, [field]: value } });
  }

  render() {
    return (
      <div className="mt-5 screen wish">
        <Card>
          <h2 className="mb-4 ml-3">New Whish</h2>
          <form>
            <Input
              placeholder="Inform yout wish"
              label="Wish"
              type="text"
              required={true}
              field="wish"
              updateValue={this.handleUpdate.bind(this)}
              min={5}
              max={10}
              hasErrors={this.checkErrors.bind(this)}
            />
            <Input
              placeholder="Inform value of your wish"
              label="Wish value"
              required={true}
              field="value"
              updateValue={this.handleUpdate.bind(this)}
              hasErrors={this.checkErrors.bind(this)}
              pipes={["currency"]}
            />
            <Button
              type="button-primary"
              value="Add"
              disabled={!this.state.validForm}
            />
          </form>
        </Card>
      </div>
    );
  }
}

export default Wish;
