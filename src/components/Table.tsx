/* eslint-disable react/no-array-index-key */
import React from "react";
import styled from "styled-components";
import {
  faPenSquare,
  faTrash,
  faSortDown,
  faSortUp,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import FaIcon from "../assets/FaIcon";
import FlexBox from "./FlexBox";

const StyledTable = styled.table`
  border-spacing: 1;
  border-collapse: collapse;
  border-radius: 1rem;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

const TableHead = styled.th`
  background: ${({ theme }) => theme.secondaryDark};
  color: white;
  padding: 1rem;
  text-align: left;
`;

const TableRow = styled.tr`
  height: 3.5rem;
  color: #808080;
  line-height: 1.2;

  &:hover {
    cursor: pointer;
  }

  &:nth-child(even) {
    background-color: #f5f5f5;
  }
`;

const TableData = styled.td`
  width: fit-content;
  padding: 1rem;
  margin: 1rem;
  text-align: center;
`;

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
