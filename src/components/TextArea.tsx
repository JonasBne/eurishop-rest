/* eslint-disable react/jsx-props-no-spreading */
import React, { TextareaHTMLAttributes } from "react";
import { GridAreaProps } from "styled-system";
import Label from "./Label";

interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    GridAreaProps {
  label: string;
}

function TextArea({ label, ...textArea }: TextAreaProps) {
  return (
    <Label>
      {label}
      <textarea {...textArea} />
    </Label>
  );
}

export default TextArea;
