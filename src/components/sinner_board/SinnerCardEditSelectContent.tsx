import React from "react";
import { SinnerCardContentProps } from "@components/sinner_board/SinnerCard";

import "@css/sinner_board/SinnerCardEditSelectContent.css"

function SinnerCardEditSelectContent({ cardState, setSelectedState }: SinnerCardContentProps) {
  function onClickEditIdentity() {
    console.log("clicked edit");
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
    </>
  );
}

export default SinnerCardEditSelectContent;
