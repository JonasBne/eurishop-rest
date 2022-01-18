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

const StyledTableHead = styled.th`
  background: ${({ theme }) => theme.secondaryDark};
  color: white;
  padding: 1rem;
  text-align: left;
`;

const StyledTableRow = styled.tr`
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

const StyledTableData = styled.td`
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
          <StyledTableRow>
            {Object.keys(data[0]).map((title, index) => (
              <StyledTableHead key={`header${index}`}>{title}</StyledTableHead>
            ))}
            <StyledTableHead>actions</StyledTableHead>
          </StyledTableRow>
        </thead>
        <tbody>
          {data.map((item: any, dataIndex) => {
            return (
              <StyledTableRow key={`row${dataIndex}`}>
                {Object.keys(data[0]).map((title: any, index) => {
                  return (
                    <StyledTableData key={`item${index}${dataIndex}`}>
                      {item[title]}
                    </StyledTableData>
                  );
                })}
                <StyledTableData>
                  <Icon icon={faPenSquare} />
                  <Icon icon={faTrash} />
                </StyledTableData>
              </StyledTableRow>
            );
          })}
        </tbody>
      </StyledTable>
    </FlexBox>
  );
}

export default Table;
