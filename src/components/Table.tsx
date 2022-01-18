/* eslint-disable react/no-array-index-key */
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
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
`;

// TODO: is it ok to put styling of the icons here since it is table-specific?
const Icon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.secondaryDark};
  padding-inline: 0.25rem;
`;

interface TableProps {
  data: any[];
}

function Table({ data }: TableProps) {
  return (
    <FlexBox m="1rem" p="1rem">
      <StyledTable>
        <thead>
          <TableRow>
            {Object.keys(data[0]).map((title, index) => (
              <TableHead key={`header${index}`}>{title}</TableHead>
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
                  <Icon icon={faPenSquare} />
                  <Icon icon={faTrash} />
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
