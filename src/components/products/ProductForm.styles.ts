import styled from "styled-components";
import {
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";

const Form = styled.form<SpaceProps | LayoutProps>`
  ${layout}
  ${space}
  display: grid;
  grid-template-areas:
    "number title . . "
    "stock basePrice . ."
    "unitPrice . . ."
    "desc desc desc desc"
    " . . btn .";
  grid-row-gap: 1rem;
  -webkit-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
`;

const NumberLabel = styled.label<SpaceProps>`
  ${space}
  grid-area: number
`;

const Label = styled.label<SpaceProps>`
  ${space}
  grid-area: number
`;

const TitleLabel = styled.label<SpaceProps>`
  ${space}
  grid-area: title
`;

const StockLabel = styled.label<SpaceProps>`
  ${space}
  grid-area: stock
`;

const BasePriceLabel = styled.label<SpaceProps>`
  ${space}
  grid-area: basePrice
`;

const UnitPriceLabel = styled.label<SpaceProps>`
  ${space}
  grid-area: unitPrice
`;

const DescriptionLabel = styled.label<SpaceProps>`
  ${space}
  grid-area: desc
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
`;

const TextArea = styled.textarea<SpaceProps | LayoutProps | TypographyProps>`
  ${layout}
  ${space}
  ${typography}
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  outline: none;
  display: block;
  border: none;
  border-bottom: 1px solid #ddd;
  background: transparent;
  resize: none;
`;

const EditBtn = styled.button<SpaceProps | LayoutProps>`
  ${layout};
  ${space};
  grid-area: btn;
  background-color: #457b9d;
  border-radius: 0.5rem;
  color: white;
`;

export {
  Form,
  NumberLabel,
  TitleLabel,
  StockLabel,
  BasePriceLabel,
  UnitPriceLabel,
  DescriptionLabel,
  EditBtn,
  Input,
  TextArea,
};
