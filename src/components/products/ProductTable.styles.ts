import styled from "styled-components";
import { space, SpaceProps, layout, LayoutProps } from "styled-system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TableContainer = styled.table<SpaceProps>`
  ${space};
  font-size: 0.9rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

const TableRowHeader = styled.tr`
  color: white;
`;

const TableHead = styled.th<SpaceProps | LayoutProps>`
  background-color: #0077b6;
  ${space}
  ${layout}
  &:hover {
    cursor: pointer;
  }
`;

const TableData = styled.td<SpaceProps>`
  ${space}
`;

const IconsContainer = styled.td<SpaceProps>`
  display: flex;
  justify-content: space-around;
  ${space}
`;

const Icon = styled(FontAwesomeIcon)`
  &:hover {
    cursor: pointer;
  }
`;

const SortIcon = styled(FontAwesomeIcon)<SpaceProps>`
  &:hover {
    cursor: pointer;
  }
  ${space}
`;

export {
  TableContainer,
  TableHead,
  TableRowHeader,
  TableData,
  IconsContainer,
  SortIcon,
  Icon,
};
