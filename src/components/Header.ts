import styled from "styled-components";
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  color,
  ColorProps,
} from "styled-system";

const Header = styled.h1<SpaceProps | LayoutProps | ColorProps>`
  ${space}
  ${layout}
  ${color}
`;

export default Header;
