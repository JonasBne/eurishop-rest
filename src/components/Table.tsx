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
  // eslint-disable-next-line react/require-default-props
  // TODO: think about a way to pass this function optionally
  onRedirect: (productId: string) => void;
  sortExpression: string;
}

function Table({ data, onSort, sortExpression, onRedirect }: TableProps) {
  return (
    <FlexBox m="1rem" p="1rem">
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
              <TableRow
                key={`row${dataIndex}`}
                onClick={() => onRedirect(item.id)}
              >
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
