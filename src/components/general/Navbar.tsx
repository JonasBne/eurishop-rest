import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import Header1 from "./header/Header1";

const Nav = styled.nav`
  background-color: #012a4a;
  display: flex;
  align-items: center;
`;

const NavList = styled.ul`
  list-style-type: none;
`;

const NavListItem = styled.li<SpaceProps>`
  text-transform: uppercase;
  display: inline-flex;
  justify-content: space-around;
  ${space}
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

function Navbar() {
  return (
    <Nav>
      <Header1 ml="1rem" mr="2rem">
        EURISHOP
      </Header1>
      <NavList>
        <NavListItem mx="2rem">
          <NavLink to="/home">Home</NavLink>
        </NavListItem>
        <NavListItem mx="2rem">
          <NavLink to="/products">Products</NavLink>
        </NavListItem>
        <NavListItem mx="2rem">
          <NavLink to="/products/admin">Products (admin)</NavLink>
        </NavListItem>
      </NavList>
    </Nav>
  );
}

export default Navbar;
