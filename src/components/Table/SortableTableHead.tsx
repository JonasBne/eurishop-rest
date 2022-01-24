import React from "react";
import {
  faSortDown,
  faSortUp,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import { TableHead } from "./Table.styles";
import FaIcon from "../../assets/FaIcon";
import FlexBox from "../FlexBox";

interface SortableTableHeadProps {
  index: number;
  title: string;
  sortExpression: string;
  setSortExpression: (prevSortExp: any) => void;
}

function SortableTableHead({
  index,
  title,
  sortExpression,
  setSortExpression,
}: SortableTableHeadProps) {
  const handleSort = (sortByField: string) => {
    setSortExpression((prevSortExp: any) => {
      if (prevSortExp?.includes("+")) {
        return `-${sortByField}`;
      }
      if (prevSortExp?.includes("-")) {
        return ``;
      }
      return `+${sortByField}`;
    });
  };

  return (
    <TableHead key={`header${index}`} onClick={() => handleSort(title)}>
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
