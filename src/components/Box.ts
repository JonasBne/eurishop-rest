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
  typography,
  TypographyProps,
} from "styled-system";

const Box = styled.div<
  | SpaceProps
  | LayoutProps
  | GridProps
  | FlexProps
  | FlexboxProps
  | BorderProps
  | TypographyProps
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
  grid,
  typography
);

export default Box;
