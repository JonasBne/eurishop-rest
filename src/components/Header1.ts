import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

const Header1 = styled.h1<SpaceProps>`
  color: white;
  ${space}
`;

// TODO: Header4 is niet nodig
// je kan volgende gebruiken:
// <Header as="h2">Heading 2</Header>
// <Header as="h1">Heading 1</Header>

export default Header1;
