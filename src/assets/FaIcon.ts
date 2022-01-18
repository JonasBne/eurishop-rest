import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { space, SpaceProps } from "styled-system";

const FaIcon = styled(FontAwesomeIcon)<SpaceProps>`
  // color: ${({ theme }) => theme.secondaryDark};
  color: red;
  ${space}
`;

export default FaIcon;
