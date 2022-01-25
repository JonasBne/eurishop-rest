import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  border: 1px solid black;
  margin-right: 1rem;
  width: 100%;
  min-height: fit-content;
  height: 50rem;
`;

function ShoppingCart() {
  return <StyledDiv>BASKET</StyledDiv>;
}

export default ShoppingCart;
