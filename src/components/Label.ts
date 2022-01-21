import styled from "styled-components";
import { space, SpaceProps, gridArea, GridAreaProps } from "styled-system";

const Label = styled.label<SpaceProps | GridAreaProps>`
  ${space}
  ${gridArea}
`;

export default Label;
