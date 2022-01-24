import styled from "styled-components";
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  color,
  ColorProps,
  textAlign,
  TextAlignProps,
} from "styled-system";

// TODO: provide variants (later stage)

const Header = styled.h1<
  SpaceProps | LayoutProps | ColorProps | TextAlignProps
>`
  ${space}
  ${layout}
  ${color}
  ${textAlign}
`;

export default Header;
