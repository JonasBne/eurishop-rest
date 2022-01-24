import styled from "styled-components";
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  GridProps,
  FlexProps,
  border,
  BorderProps,
  flex,
  grid,
} from "styled-system";

const Box = styled.div<
  SpaceProps | LayoutProps | GridProps | FlexProps | BorderProps
>(
  {
    boxSizing: "border-box",
    minWidth: 0,
  },
  space,
  layout,
  border,
  flex,
  grid
);

export default Box;
