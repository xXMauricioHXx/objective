import React from "react";
import "./styles/Table.css";

const Table = props => {
  return (
    <table>
      <thead>
        <tr>
          {props.headers.forEach(header => (
            <th>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr className="table-divider"></tr>
        {props.columns.forEach(column => (
          <tr>
            <td>{column}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
