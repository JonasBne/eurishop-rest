/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import styled from "styled-components";
import { space, SpaceProps, layout, LayoutProps } from "styled-system";
import GridContainer from "./GridContainer";

// TODO: move to Form.styles.ts
const StyledForm = styled.form<SpaceProps | LayoutProps>`
  border: 1px solid black;
  ${space}
  ${layout}
`;

// TODO: move outside to components
const Header4 = styled.h4<SpaceProps | LayoutProps>`
  ${space}
  ${layout}
  text-align: center;
`;

interface FormProps {
  formTitle: string;
  data: any[] | Object;
}

function Form({ formTitle, data }: FormProps) {
  console.log(Object.entries(data));

  const handleChange = () => {
    console.log("changing...");
  };

  return (
    <StyledForm m="2rem" width="40rem">
      <Header4 m="1rem auto" p="0.25rem" width="10rem" minWidth="fit-content">
        {formTitle}
      </Header4>
      <GridContainer>
        {Object.entries(data).map(([key, value]) => {
          return (
            <label htmlFor={key}>
              {key}
              <input
                id={key}
                type="text"
                value={value}
                onChange={handleChange}
              />
            </label>
          );
        })}
      </GridContainer>
    </StyledForm>
  );
}

export default Form;
