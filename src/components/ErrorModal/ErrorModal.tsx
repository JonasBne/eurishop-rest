import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Button from "../Button";
import FlexBox from "../FlexBox";
import Backdrop from "./Backdrop";
import Overlay from "./Overlay";

const portalElement = document.getElementById("overlays")!;

const Span = styled.span`
  text-align: center;
`;

function ErrorModal() {
  const navigate = useNavigate();

  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <Overlay>
          <FlexBox flexDirection="column">
            <Span>It looks like something went wrong...</Span>
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
