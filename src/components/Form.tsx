/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import styled from "styled-components";
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  gridArea,
  GridAreaProps,
} from "styled-system";
import GridContainer from "./GridContainer";

// TODO: move to Form.styles.ts
const StyledForm = styled.form<SpaceProps | LayoutProps>`
  border: 1px solid black;
  ${space}
  ${layout}
`;

const Label = styled.label<SpaceProps | GridAreaProps>`
  ${space}
  ${gridArea}
`;

// TODO: extract as a separate component
const Input = styled.input`
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  outline: none;
  display: block;
  border: none;
  border-bottom: 1px solid #ddd;
  background: transparent;
  height: 2rem;
`;

// TODO: move outside to components
const Header4 = styled.h4<SpaceProps | LayoutProps>`
  ${space}
  ${layout}
  text-align: center;
`;

interface FormProps {
  title: string;
  data: any[] | Object;
  width: string;
  margin: string;
  gridTemplateAreas: string;
  gridRowGap: string;
}

function Form({
  title,
  width,
  margin,
  data,
  gridTemplateAreas,
  gridRowGap,
}: FormProps) {
  const handleChange = () => {
    console.log("changing...");
  };

  return (
    <StyledForm m={margin} width={width}>
      <Header4
        m="1rem auto 2rem auto"
        p="0.25rem"
        width="10rem"
        minWidth="fit-content"
      >
        {title}
      </Header4>
      <GridContainer
        gridTemplateAreas={gridTemplateAreas}
        gridRowGap={gridRowGap}
      >
        {Object.entries(data).map(([key, value]) => {
          return (
            <Label htmlFor={key} m="1rem" gridArea={key}>
              {key}
              <Input
                id={key}
                type="text"
                value={value}
                onChange={handleChange}
                readOnly
              />
            </Label>
          );
        })}
      </GridContainer>
    </StyledForm>
  );
}

export default Form;
