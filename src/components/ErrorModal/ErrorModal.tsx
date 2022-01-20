import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import Overlay from "./Overlay";

const portalElement = document.getElementById("overlays")!;

interface ErrorModalProps {
  children: ReactNode;
}

function ErrorModal({ children }: ErrorModalProps) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<Overlay>{children}</Overlay>, portalElement)}
    </>
  );
}

export default ErrorModal;
