import styled from "styled-components";
import { space, SpaceProps, layout, LayoutProps } from "styled-system";

const Header4 = styled.h4<SpaceProps | LayoutProps>`
  ${space}
  ${layout}
  text-align: center;
`;

export default Header4;
