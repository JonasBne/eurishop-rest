/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { SpaceProps } from "styled-system";
import FaIcon from "../../assets/FaIcon";
import SortableTableHead from "./SortableTableHead";
import { StyledTable, TableRow, TableData } from "./Table.styles";

interface Column {
  name: string;
  label: string;
  sortable: boolean;
  id: string;
}

interface TableProps extends SpaceProps {
  data: any[];
  onRowClick?: (productId: string) => void;
  onActionClick?: (productId: string) => void;
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
  onActionClick,
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
              key={col.id}
            />
          ))}
        </TableRow>
      </thead>
      <tbody>
        {data.map((item: any, dataIndex) => {
          return (
            <TableRow key={item.id}>
              {/* // TODO: aanpassen naar columns */}
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
                  icon={faTrash}
                  px="0.25rem"
                  color="red"
                  mx="1rem"
                  onClick={() => {
                    if (onActionClick !== undefined) {
                      onActionClick(item.id);
                    }
                  }}
                />
              </TableData>
            </TableRow>
          );
        })}
      </tbody>
    </StyledTable>
  );
}

export default Table;
