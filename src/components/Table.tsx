/* eslint-disable react/no-array-index-key */
import React from "react";
import {
  faPenSquare,
  faTrash,
  faSortDown,
  faSortUp,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import FaIcon from "../assets/FaIcon";
import FlexBox from "./FlexBox";
import { StyledTable, TableRow, TableHead, TableData } from "./Table.styles";

interface TableProps {
  data: any[];
  onSort: (sortByField: string) => void;
  sortExpression: string;
}

function Table({ data, onSort, sortExpression }: TableProps) {
  return (
    <FlexBox m="1rem" p="1rem">
      <StyledTable>
        <thead>
          <TableRow>
            {Object.keys(data[0]).map((title, index) => (
              <TableHead key={`header${index}`} onClick={() => onSort(title)}>
                <FlexBox flexDirection="row">
                  {title}
                  <FaIcon
                    icon={
                      // eslint-disable-next-line no-nested-ternary
                      sortExpression.includes("+")
                        ? faSortDown
                        : sortExpression.includes("-")
                        ? faSortUp
                        : faSort
                    }
                    px="1rem"
                  />
                </FlexBox>
              </TableHead>
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
                    <TableData key={`item${index}${dataIndex}`}>
                      {item[title]}
                    </TableData>
                  );
                })}
                <TableData>
                  <FaIcon icon={faPenSquare} px="0.25rem" />
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

export default Table;
