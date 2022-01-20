import styled from "styled-components";
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  gridArea,
  GridAreaProps,
  flexBasis,
  FlexBasisProps,
} from "styled-system";

const Box = styled.div<
  SpaceProps | LayoutProps | GridAreaProps | FlexBasisProps
>(
  {
    boxSizing: "border-box",
    minWidth: 0,
  },
  space,
  layout,
  gridArea,
  flexBasis
);

export default Box;
