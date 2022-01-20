import React from "react";
import ReactDOM from "react-dom";
import Button from "../Button";
import FlexBox from "../FlexBox";
import Backdrop from "./Backdrop";
import Overlay from "./Overlay";

const portalElement = document.getElementById("overlays")!;

function ErrorModal() {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <Overlay>
          <FlexBox flexDirection="column">
            <span>It looks like something went wrong...</span>
            <Button>Return home</Button>
          </FlexBox>
        </Overlay>,
        portalElement
      )}
    </>
  );
}

export default ErrorModal;
