import React from "react";
import { StyledMenu, StyledLink } from "./Menu.styles";

interface MenuProps {
  open: boolean;
  setOpen: (prevState: boolean) => void;
}

function Menu({ open, setOpen }: MenuProps) {
  return (
    <StyledMenu open={open}>
      <StyledLink to="/home" onClick={() => setOpen(!open)}>
        HOME
      </StyledLink>
      <StyledLink to="/products/admin" onClick={() => setOpen(!open)}>
        PRODUCTS (ADMIN)
      </StyledLink>
    </StyledMenu>
  );
}

export default Menu;
