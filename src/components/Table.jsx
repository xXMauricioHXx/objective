import React from "react";
import ProgressBar from '../components/ProgressBar';
import "./styles/Table.css";

class Table extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Wish</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-divider"></tr>
          {this.props.columns.map(column => (
            <tr>
              <td>
                <img src={column.img} alt="" />
              </td>
              <td>{column.wish}</td>
              <td>{column.price}</td>
              <td className="column-bar-progress">
                {this.props.percent}
                <ProgressBar percent={column.percent}/>
              </td>
              <td>
                <i class="material-icons">edit</i>
                <i class="material-icons">delete</i>
              </td>              
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
