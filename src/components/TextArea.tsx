import styled from "styled-components";

const TextArea = styled.textarea`
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

export default TextArea;
