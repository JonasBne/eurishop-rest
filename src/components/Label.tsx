import React from "react";
import styled from "styled-components";
import { space, SpaceProps, gridArea, GridAreaProps } from "styled-system";

const StyledLabel = styled.label<SpaceProps | GridAreaProps>`
  ${space}
  ${gridArea}
`;

interface LabelProps {
  label: string;
  area?: string;
}

function Label({ label, area }: LabelProps) {
  return <StyledLabel gridArea={area}>{label}</StyledLabel>;
}

Label.defaultProps = {
  area: "",
};

export default Label;
