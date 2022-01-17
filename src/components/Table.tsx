/* eslint-disable react/no-array-index-key */
import React from "react";

interface TableProps {
  data: any[];
}

function Table({ data }: TableProps) {
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(data[0]).map((title, index) => (
            <th key={`header${index}`}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item: any, dataIndex) => {
          return (
            <tr key={`row${dataIndex}`}>
              {Object.keys(data[0]).map((title: any, index) => {
                return <td key={`item${index}${dataIndex}`}>{item[title]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
