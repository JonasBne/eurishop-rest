/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
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
  gridRowGap?: string;
  buttonMargin?: string;
  onEdit: () => void;
  editMode: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCancel: () => void;
  onSave: () => void;
}

// How can I make Form reusable (for example for adding the products)?

// TODO: it would be cleaner if the description would be placed inside a textarea instead of an input, but how do we determine this dynamically?

function Form({
  title,
  width,
  margin,
  buttonMargin,
  data,
  gridTemplateAreas,
  gridRowGap,
  onEdit,
  editMode,
  onChange,
  onCancel,
  onSave,
}: FormProps) {
  const handleEdit = (event: React.MouseEvent) => {
    event.preventDefault();
    onEdit();
  };

  const handleCancel = (event: React.MouseEvent) => {
    event.preventDefault();
    onCancel();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  const handleSave = (event: React.MouseEvent) => {
    event.preventDefault();
    onSave();
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
            <Label htmlFor={key} m="1rem" gridArea={key} key={key}>
              {key}
              <Input
                id={key}
                name={key}
                type="text"
                value={value}
                size={parseInt(value.toString().length + 1, 10)}
                onChange={handleChange}
                readOnly={!editMode}
              />
            </Label>
          );
        })}
      </GridContainer>
      {/* // TODO: find a way to pass this dynamically instead of hard coding the button actions? */}
      {editMode ? (
        <Button backgroundColor="red" m={buttonMargin} onClick={handleCancel}>
          Cancel
        </Button>
      ) : null}
      {editMode ? (
        <Button backgroundColor="#405cf5" m={buttonMargin} onClick={handleSave}>
          Save
        </Button>
      ) : (
        <Button backgroundColor="#405cf5" m={buttonMargin} onClick={handleEdit}>
          Edit
        </Button>
      )}
    </StyledForm>
  );
}

export default Form;
