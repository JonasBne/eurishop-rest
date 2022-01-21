import React from "react";
import styled from "styled-components";
import { space, SpaceProps, gridArea, GridAreaProps } from "styled-system";

const StyledLabel = styled.label<SpaceProps | GridAreaProps>`
  ${space}
  ${gridArea}
`;

interface LabelProps {
  label: string;
}

function Label({ label }: LabelProps) {
  return <StyledLabel>{label}</StyledLabel>;
}

export default Label;
