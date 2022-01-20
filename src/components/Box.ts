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
  border,
  BorderProps,
} from "styled-system";

const Box = styled.div<
  SpaceProps | LayoutProps | GridAreaProps | FlexBasisProps | BorderProps
>(
  {
    boxSizing: "border-box",
    minWidth: 0,
  },
  space,
  layout,
  gridArea,
  flexBasis,
  border
);

export default Box;
