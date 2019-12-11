import React from "react";
import Input from "../components/Input";

class Home extends React.Component {
  render() {
    return (
      <div className="mt-5">
        <h2>Whishes</h2>
        <Input placeholder="Inform yout wish" label="Wish" required="true"/>
      </div>
    );
  }
}

export default Home;
