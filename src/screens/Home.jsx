import React from "react";
import Input from "../components/Input";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      form: {
        wish: ""
      }
    };
  }

  handleUpdate(value, field) {
    this.setState({ form: { [field]: value } });
  }

  render() {
    return (
      <div className="mt-5">
        <h2>Whishes</h2>
        <form>
          <Input
            placeholder="Inform yout wish"
            label="Wish"
            required="true"
            field="wish"
            updateValue={this.handleUpdate.bind(this)}
          />
        </form>
      </div>
    );
  }
}

export default Home;
