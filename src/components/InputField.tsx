/* eslint-disable react/jsx-props-no-spreading */
import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { space, SpaceProps, gridArea, GridAreaProps } from "styled-system";

const Label = styled.label<SpaceProps | GridAreaProps>`
  ${space}
  ${gridArea}
`;

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
  min-width: 10rem;
  word-wrap: break-word;
  word-break: break-all;
  width: 100%;
`;

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function InputField({ label, ...input }: InputFieldProps) {
  return (
    <Label>
      {label}
      <Input {...input} />
    </Label>
  );
}

export default InputField;
