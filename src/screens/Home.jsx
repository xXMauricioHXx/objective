import React from "react";
import Card from "../components/Card";
import Table from "../components/Table";
import "./styles/Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="mt-5 screen home">
        <Card>
          <h1 className="mb-5">Home</h1>

          <Table
            headers={["", "Wish", "Price", "", ""]}
            columns={[
              <img src={"./assets/imgs/travel.png"} alt="Travel" />,
              "Travel",
              "R$ 5.0000",
              <div class="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  25%
                </div>
              </div>,
              <i class="material-icons">edit</i>,
              <i class="material-icons">delete</i>
            ]}
          />          
        </Card>
      </div>
    );
  }
}

export default Home;
