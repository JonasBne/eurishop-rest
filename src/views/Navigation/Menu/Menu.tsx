import React from "react";
import { StyledMenu, StyledLink } from "./Menu.styles";

interface MenuProps {
  open: boolean;
}

function Menu({ open }: MenuProps) {
  return (
    <StyledMenu open={open}>
      <StyledLink to="/home">HOME</StyledLink>
      <StyledLink to="/products/admin">PRODUCTS (ADMIN)</StyledLink>
    </StyledMenu>
  );
}

export default Menu;
