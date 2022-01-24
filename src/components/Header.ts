import styled from "styled-components";
import { space, SpaceProps, layout, LayoutProps } from "styled-system";

const Header1 = styled.h1<SpaceProps | LayoutProps>`
  ${space}
  ${layout}
`;

export default Header1;
