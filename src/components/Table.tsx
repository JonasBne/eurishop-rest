/* eslint-disable react/no-array-index-key */
import React from "react";
import { faPenSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import FaIcon from "../assets/FaIcon";
import FlexBox from "./FlexBox";
import SortableTableHead from "./SortableTableHead";
import { StyledTable, TableRow, TableHead, TableData } from "./Table.styles";

interface TableProps {
  data: any[];
  onSort: (sortByField: string) => void;
  // TODO: think about a way to pass this function optionally
  onRedirect: (productId: string) => void;
  sortExpression: string;
  margin?: string;
  padding?: string;
}

function Table({
  data,
  onSort,
  sortExpression,
  onRedirect,
  margin,
  padding,
}: TableProps) {
  return (
    <FlexBox m={margin} p={padding}>
      <StyledTable>
        <thead>
          <TableRow>
            {Object.keys(data[0]).map((title, index) => (
              <SortableTableHead
                title={title}
                index={index}
                onSort={onSort}
                sortExpression={sortExpression}
              />
            ))}
            <TableHead>actions</TableHead>
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
                      onClick={() => onRedirect(item.id)}
                    >
                      {item[title]}
                    </TableData>
                  );
                })}
                <TableData>
                  <FaIcon
                    icon={faPenSquare}
                    px="0.25rem"
                    onClick={() => onRedirect(item.id)}
                  />
                  <FaIcon icon={faTrash} px="0.25rem" />
                </TableData>
              </TableRow>
            );
          })}
        </tbody>
      </StyledTable>
    </FlexBox>
  );
}

Table.defaultProps = {
  margin: "auto",
  padding: "2rem",
};

export default Table;
