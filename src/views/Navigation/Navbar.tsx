import React, { useState } from "react";
import styled from "styled-components";
import Burger from "./Burger";
import Menu from "./Menu";
// import { Link } from "react-router-dom";
// import { space, SpaceProps } from "styled-system";
import Header1 from "../../components/general/header/Header1";

const StyledNav = styled.nav`
  background: ${({ theme }) => theme.primaryDark};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid red;
`;

// const NavList = styled.ul`
//   list-style-type: none;
// `;

// const NavListItem = styled.li<SpaceProps>`
//   text-transform: uppercase;
//   display: inline-flex;
//   justify-content: space-around;
//   ${space}
// `;

// const NavLink = styled(Link)`
//   text-decoration: none;
//   color: white;
// `;

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
