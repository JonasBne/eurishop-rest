import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

const StyledTable = styled.table<SpaceProps>`
  ${space}
  border-collapse: collapse;
  border-radius: 1rem;
  overflow: hidden;
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
  background: #fff
  line-height: 1.2;

  &:hover {
    cursor: pointer;
  }
`;

const TableData = styled.td`
  width: fit-content;
  padding: 1rem;
  margin: 1rem;
  text-align: left;
`;

export { StyledTable, TableHead, TableRow, TableData };
