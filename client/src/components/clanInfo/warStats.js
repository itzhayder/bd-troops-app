import React from "react";
import "./clanInfo.css";

const warStats = (props) => {
  return (
    <div className="row war-stats-wrapper fontSemiBold py-3 px-2 font-weight-bold">
      <div className="col-3 d-flex flex-column align-items-center">
        <div className="wins-color">Wins</div>
        <div>{props.warStats.warWins}</div>
      </div>
      <div className="col-3 d-flex flex-column align-items-center">
        <div className="losses-color">Losses</div>
        <div>{props.warStats.warLosses}</div>
      </div>
      <div className="col-3 d-flex flex-column align-items-center">
        <div className="draws-color">Draws</div>
        <div>{props.warStats.warTies}</div>
      </div>
      <div className="col-3 d-flex flex-column align-items-center">
        <div className="total-color">Total</div>
        <div>{props.warStats.warTotal}</div>
      </div>
    </div>
  );
};

export default warStats;
