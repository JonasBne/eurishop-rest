import React, { useState } from "react";
import styled from "styled-components";
import Burger from "./Burger";
import Menu from "./Menu";
import Header1 from "../../components/general/header/Header1";

const StyledNav = styled.nav`
  background: ${({ theme }) => theme.primaryDark};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <StyledNav>
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} />
      </div>
      <Header1 mx="auto">EURISHOP</Header1>
    </StyledNav>
  );
}

export default Navbar;
