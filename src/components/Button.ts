import styled from "styled-components";
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  color,
  ColorProps,
} from "styled-system";

const Button = styled.button<SpaceProps | LayoutProps | ColorProps>`
  ${space}
  ${layout}
  ${color}
  border-radius: 0.25rem;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-size: 100%;
  height: 2rem;
  line-height: 1.15;
  outline: none;
  padding: 0 25px;
  text-align: center;
  text-transform: none;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
      rgba(50, 50, 93, 0.2) 0 6px 15px 0, rgba(0, 0, 0, 0.1) 0 2px 2px 0,
      rgba(50, 151, 211, 0.3) 0 0 0 4px;
  }
`;

export default Button;
