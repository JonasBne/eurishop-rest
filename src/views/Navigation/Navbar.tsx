import React, { useState } from "react";
import styled from "styled-components";
import Burger from "./Burger/Burger";
import Menu from "./Menu/Menu";
import Header1 from "../../components/general/header/Header1";

const StyledNav = styled.nav`
  background: ${({ theme }) => theme.secondaryDark};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <StyledNav>
      <Header1 mx="auto">EURISHOP</Header1>
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} />
      </div>
    </StyledNav>
  );
}

export default Navbar;
