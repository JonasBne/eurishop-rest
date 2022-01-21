import styled from "styled-components";
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  gridArea,
  GridProps,
  flexBasis,
  FlexProps,
  border,
  BorderProps,
  flex,
  grid,
} from "styled-system";

// TODO: add flex, grid to box
// a box should be able to be be placed in flexbox and grid
const Box = styled.div<
  SpaceProps | LayoutProps | GridProps | FlexProps | BorderProps
>(
  {
    boxSizing: "border-box",
    minWidth: 0,
  },
  space,
  layout,
  gridArea,
  flexBasis,
  border,
  flex,
  grid
);

export default Box;
