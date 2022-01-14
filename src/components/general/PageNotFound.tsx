import React from "react";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import { Link } from "react-router-dom";
import AstronautSvg from "./AstronautSvg";

const Container = styled.div`
  margin: auto;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ReturnBtn = styled(Link)<SpaceProps>`
  width: 10rem;
  height: 1.5rem;
  background: #4e9caf;
  text-align: center;
  border-radius: 5px;
  color: white;
  text-transform: uppercase;
  line-height: 25px;
  text-decoration: none;
  font-size: 1rem;
  ${space};
`;

function PageNotFound() {
  return (
    <Container>
      <AstronautSvg />
      <HeaderContainer>
        <h1>Houston, we have a problem.</h1>
        <ReturnBtn to="/home" p="0.5rem">
          Return home
        </ReturnBtn>
      </HeaderContainer>
    </Container>
  );
}

export default PageNotFound;
