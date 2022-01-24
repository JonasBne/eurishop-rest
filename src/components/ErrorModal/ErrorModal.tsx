import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Header from "../Header";
import Button from "../Button";
import FlexBox from "../FlexBox";
import Backdrop from "./Backdrop";
import Overlay from "./Overlay";

const portalElement = document.getElementById("overlays")!;

const Span = styled.span`
  text-align: center;
`;

interface ErrorModalProps {
  name: string;
  message: string;
}

function ErrorModal({ name, message }: ErrorModalProps) {
  const navigate = useNavigate();

  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <Overlay>
          <FlexBox flexDirection="column">
            <Header as="h4">{name}</Header>
            <Span>The following problem occured: {message}</Span>
            <Button
              width="fit-content"
              m="1rem auto 0 auto"
              onClick={() => navigate("/home")}
            >
              Return home
            </Button>
          </FlexBox>
        </Overlay>,
        portalElement
      )}
    </>
  );
}

export default ErrorModal;
