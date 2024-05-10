import { useState } from "react";
import { Identity, SinnerSelectedState } from "../../types/data";
import "@css/sinner_board/SinnerCard.css";
import { getSinnerFromID, getSinnerImgPath } from "@helpers/parseData";

type PrivateProps = {
  id: Identity;
  Content: React.ComponentType;
};

export type SinnerCardContentProps = {
  sinnerID: number;
  cardState: SinnerSelectedState;
  setSelectedState: Function;
};

function SinnerCard({ id, Content }: PrivateProps) {
  const [sinnerId, setSinnerId] = useState(id.sinnerID);
  const [name, setName] = useState(id.name);
  const [selectedState, setSelectedState] = useState<SinnerSelectedState>("Support");
  const [imagePath, setImagePath] = useState(getSinnerImgPath(getSinnerFromID(sinnerId), name));


  return (
    <div className="sinner-card">
      <img className={`sinner-card-img ${selectedState}`} src={`${imagePath}`}></img>
      <div className={`sinner-card-content`}>
        <Content sinnerID={sinnerId} cardState={selectedState} setSelectedState={setSelectedState} />
        <div className="sinner-card-name"><b>{name}</b></div>
      </div>
    </div>
  );
}

export default SinnerCard;
