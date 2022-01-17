import styled from "styled-components";
import { space, SpaceProps, layout, LayoutProps } from "styled-system";

const Box = styled.div<SpaceProps | LayoutProps>(
  {
    boxSizing: "border-box",
    minWidth: 0,
  },
  space,
  layout
);

export default Box;
