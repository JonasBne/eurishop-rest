import React from "react";
import {
  faSortDown,
  faSortUp,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import { TableHead } from "./Table.styles";
import FaIcon from "../assets/FaIcon";
import FlexBox from "./FlexBox";

interface SortableTableHeadProps {
  index: number;
  title: string;
  onSort: (sortByField: string) => void;
  sortExpression: string;
}

function SortableTableHead({
  index,
  title,
  onSort,
  sortExpression,
}: SortableTableHeadProps) {
  return (
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
  );
}

export default SortableTableHead;
