import styled from "styled-components";
import { flexbox, FlexboxProps } from "styled-system";
import Box from "./Box";

// TODO: a flexbox should be a box
// now it's limited to flexbox only
/*
export const Flex = styled(Box)({
  display: 'flex',
});
*/

const FlexBox = styled(Box)<FlexboxProps>(
  {
    display: "flex",
  },
  flexbox
);

export default FlexBox;
