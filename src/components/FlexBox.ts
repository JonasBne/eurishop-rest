import styled from "styled-components";
import { flexbox, FlexboxProps } from "styled-system";
import Box from "./Box";

const FlexBox = styled(Box)<FlexboxProps>(
  {
    display: "flex",
  },
  flexbox
);

export default FlexBox;
