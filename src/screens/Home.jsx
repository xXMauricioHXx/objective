import React from "react";
import Card from "../components/Card";
import Table from "../components/Table";
import "./styles/Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="mt-5 screen home">
        <Card>
          <Table
            columns={[
              {
                img: "./assets/imgs/travel.png",
                wish: "Travel",
                price: "R$ 5.000,00",
                percent: 10
              },
              {
                img: "./assets/imgs/meat.png",
                wish: "Food",
                price: "R$ 120,00",
                percent: 57
              }
            ]}
          />         
        </Card>
      </div>
    );
  }
}

export default Home;
