/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import styled from "styled-components";
import { space, SpaceProps, layout, LayoutProps } from "styled-system";
import GridContainer from "./GridContainer";
import Input from "./Input";
import Label from "./Label";
import Header4 from "./Header4";
import Button from "./Button";

const StyledForm = styled.form<SpaceProps | LayoutProps>`
  border: 2px solid ${({ theme }) => theme.secondaryDark};
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  ${space}
  ${layout}
`;

interface FormProps {
  title: string;
  data: any[] | Object;
  width: string;
  margin: string;
  gridTemplateAreas: string;
  gridRowGap: string;
  buttonAction: string;
  buttonMargin: string;
}

// TODO: it would be cleaner if the description would be placed inside a textarea, but how do we determine this dynamically?

function Form({
  title,
  width,
  margin,
  buttonAction,
  buttonMargin,
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
                size={value.length + 1}
                onChange={handleChange}
                readOnly
              />
            </Label>
          );
        })}
      </GridContainer>
      <Button m={buttonMargin}>{buttonAction}</Button>
    </StyledForm>
  );
}

export default Form;
