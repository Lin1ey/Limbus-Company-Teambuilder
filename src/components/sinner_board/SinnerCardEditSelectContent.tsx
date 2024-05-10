import React, { useState } from "react";
import { SinnerCardContentProps } from "@components/sinner_board/SinnerCard";

import "@css/sinner_board/SinnerCardEditSelectContent.css";
import Modal from "./Modal";

function SinnerCardEditSelectContent({ sinnerID, cardState, setSelectedState }: SinnerCardContentProps) {
  const [modalOpen, setModalOpen] = useState(false);

  function onClickCloseModal() {
    setModalOpen(false);
  }

  function onClickEditIdentity() {
    setModalOpen(true);
  }

  function onClickSelectIdentity() {
    //shift unit selection state between support, active, inactive
    switch (cardState) {
      case "Support":
        setSelectedState("Active");
        break;
      case "Active":
        setSelectedState("Inactive");
        break;
      case "Inactive":
        setSelectedState("Support");
        break;
      default:
        setSelectedState("Support");
        break;
    }
  }
  return (
    <>
      <div className="edit-identity sinner-card-hover" onClick={onClickEditIdentity}>
        EDIT
      </div>
      <div className="select-identity sinner-card-hover" onClick={onClickSelectIdentity}>
        SELECT
      </div>
      <img className={`selected-tag ${cardState}`} src={"./assets/SelectedTag.png"}></img>
      {modalOpen && <Modal sinnerID={sinnerID} onClose={() => onClickCloseModal()} />}
    </>
  );
}

export default SinnerCardEditSelectContent;
