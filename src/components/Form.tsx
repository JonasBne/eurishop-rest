import React from "react";
import styled from "styled-components";
import { space, SpaceProps, layout, LayoutProps } from "styled-system";
import GridContainer from "./GridContainer";
// import GridContainer from "./GridContainer";

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
  data: any | undefined;
}

function Form({ formTitle, data }: FormProps) {
  console.log(Object.keys(data));
  console.log(Object.values(data));
  return (
    <StyledForm m="2rem" width="40rem">
      <Header4 m="1rem auto" p="0.25rem" width="10rem" minWidth="fit-content">
        {formTitle}
      </Header4>
      <GridContainer>
        {Object.keys(data).map((key) => (
          <label htmlFor={key}>
            <input id={key} value={key} />
          </label>
        ))}
      </GridContainer>
    </StyledForm>
  );
}

export default Form;
