import React, { useState, createRef } from "react";
import styled from "styled-components";
import Burger from "./Burger/Burger";
import Menu from "./Menu/Menu";
import Header1 from "../../components/Header1";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const StyledNav = styled.nav`
  background: ${({ theme }) => theme.primaryDark};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Navbar() {
  const [open, setOpen] = useState(false);
  const node = createRef<HTMLDivElement>();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <StyledNav>
      <Header1 mx="auto">EURISHOP</Header1>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} />
      </div>
    </StyledNav>
  );
}

export default Navbar;
