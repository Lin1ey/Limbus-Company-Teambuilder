import React from "react";
import "@css/sinner_board/Modal.css";

type ModalProps = {
  sinnerID: number;
  onClose: Function;
  Content: React.ComponentType;
};
function Modal({ sinnerID, onClose, Content }: ModalProps) {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <button className="modal-close-btn" onClick={(event) => onClose()}>
          X
        </button>
        <div className="modal-content">
          {Content && <Content sinnerID={sinnerID} />}
        </div>
      </div>
    </div>
  );
}

export default Modal;
