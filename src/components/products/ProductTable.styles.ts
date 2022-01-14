import styled from "styled-components";
import { space, SpaceProps, layout, LayoutProps } from "styled-system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// TODO: move to Table component
// TODO: avoid styled system on custom styled components,
//       only provided it on top level shared components

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

// TODO: MOVE to Assets
const Icon = styled(FontAwesomeIcon)<SpaceProps>`
  &:hover {
    cursor: pointer;
  }
  ${space}
`;

// TODO: MOVE to Assets

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
