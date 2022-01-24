import styled from "styled-components";
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  GridProps,
  FlexProps,
  FlexboxProps,
  border,
  BorderProps,
  flex,
  grid,
  flexbox,
} from "styled-system";

const Box = styled.div<
  SpaceProps | LayoutProps | GridProps | FlexProps | FlexboxProps | BorderProps
>(
  {
    boxSizing: "border-box",
    minWidth: 0,
  },
  space,
  layout,
  border,
  flex,
  flexbox,
  grid
);

export default Box;
