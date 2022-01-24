/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
import React from "react";
import { faPenSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { SpaceProps } from "styled-system";
import FaIcon from "../../assets/FaIcon";
import SortableTableHead from "./SortableTableHead";
import { StyledTable, TableRow, TableData } from "./Table.styles";

interface Column {
  name: string;
  label: string;
  sortable: boolean;
}

interface TableProps extends SpaceProps {
  data: any[];
  onRowClick?: (productId: string) => void;
  sortExpression: string;
  setSortExpression: (prevSortExp: any) => void;
  columns: Column[];
}

function Table({
  data,
  columns,
  sortExpression,
  setSortExpression,
  onRowClick,
  ...space
}: TableProps) {
  return (
    <StyledTable {...space}>
      <thead>
        <TableRow>
          {columns.map((col, index) => (
            <SortableTableHead
              title={col.label}
              index={index}
              name={col.name}
              sortable={col.sortable}
              sortExpression={sortExpression}
              setSortExpression={setSortExpression}
              key={`head${index}`}
            />
          ))}
        </TableRow>
      </thead>
      <tbody>
        {data.map((item: any, dataIndex) => {
          return (
            <TableRow key={`row${dataIndex}`}>
              {Object.keys(data[0]).map((title: any, index) => {
                return (
                  <TableData
                    key={`item${index}${dataIndex}`}
                    onClick={() => {
                      if (onRowClick !== undefined) {
                        onRowClick(item.id);
                      }
                    }}
                  >
                    {item[title]}
                  </TableData>
                );
              })}
              <TableData>
                <FaIcon
                  icon={faPenSquare}
                  px="0.25rem"
                  onClick={() => {
                    if (onRowClick !== undefined) {
                      onRowClick(item.id);
                    }
                  }}
                />
                <FaIcon icon={faTrash} px="0.25rem" />
              </TableData>
            </TableRow>
          );
        })}
      </tbody>
    </StyledTable>
  );
}

export default Table;
