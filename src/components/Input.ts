import styled from "styled-components";

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

// TODO:
// het kan ook interessant zijn om de Label & Input te combineren tot een nieuw component
// <InputField label="Label" value={value} onChange={...}/>
// omdat die toch altijd samen gebruikt worden.

export default Input;
