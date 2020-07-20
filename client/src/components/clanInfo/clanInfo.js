import React from "react";
import "./clanInfo.css";

import WarStats from "./warStats";

const clanInfo = (props) => {
  const clanInfo = props.clanInfo;
  const warStats = {
    warWins: clanInfo.warWins,
    warLosses: clanInfo.warLosses,
    warTies: clanInfo.warTies,
    warTotal: clanInfo.warWins + clanInfo.warLosses + clanInfo.warTies,
  };

  return (
    <div className="d-flex flex-column align-items-center mt-xl-4">
      <img src={clanInfo.badgeUrls.medium} alt="badge" className="badge-self" />
      <h4 className="fontSemiBold mb-3">{clanInfo.name}</h4>
      <WarStats warStats={warStats} />
      <p className="description-self text-justify mt-3 mb-4 text-black-50">
        {clanInfo.description}
      </p>
    </div>
  );
};

export default clanInfo;
