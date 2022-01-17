import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
`;

const StyledLink = styled(Link)`
  font-size: 2rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: ${({ theme }) => theme.primaryDark};
  text-decoration: none;
  transition: color 0.3s linear;

  &:hover {
    color: ${({ theme }) => theme.primaryLight};
  }
`;

function Menu() {
  return (
    <StyledMenu>
      <StyledLink to="/home">HOME</StyledLink>
      <StyledLink to="/products/admin">PRODUCTS (ADMIN)</StyledLink>
    </StyledMenu>
  );
}

export default Menu;
