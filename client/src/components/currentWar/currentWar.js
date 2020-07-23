import React from "react";
import "./currentWar.css";

import Hero from "../../images/current-war-hero.png";

const currentWar = (props) => {
  let title = "";
  let previousResult = 'Victory';
  let bgColor = 'bgVictory';

  if (props.currentWar.state === "preparation") {
    title = "Preparation Day";
  } else if (props.currentWar.state === "inWar") {
    title = "Battle Day";
  } else {
    title = "No War - Peace";
  }

  if (props.warlog.items[0].result !== "win") {
    previousResult = "Defeat";
    bgColor = 'bgDefeat';
  }

  return (
    <div>
      <img
        src={Hero}
        alt="hero"
        className="position-absolute hero-image d-none d-sm-block"
      />
      <div className="jumbotron jumbotronSelf overflow-hidden">
        <div className="text-white py-2 text-center bgPreparation fontSemiBold">
          {title}
        </div>

        <div className="row m-0 mt-4">
          <div className="col-6 d-flex p-0 justify-content-end">
            <div className="align-self-center textSmall">
              {(
                (props.currentWar.clan.destructionPercentage / 100) *
                100
              ).toFixed(2)}
              %
            </div>
            <div className="mx-4 scoreSelf">{props.currentWar.clan.stars}</div>
          </div>

          <div className="col-6 d-flex p-0">
            <div className="mx-4 scoreSelf">
              {props.currentWar.opponent.stars}
            </div>
            <div className="align-self-center textSmall">
              {(
                (props.currentWar.opponent.destructionPercentage / 100) *
                100
              ).toFixed(2)}
              %
            </div>
          </div>
        </div>

        <div className="row m-0 my-3">
          <div className="col-6 d-flex p-0 justify-content-end">
            <img
              src={props.currentWar.clan.badgeUrls.small}
              className="imageSelf"
              alt="badge icon"
            />
            <div className="align-self-center mr-4 ml-3 fontSemiBold">
              {props.currentWar.clan.name}
            </div>
          </div>

          <div className="col-6 d-flex p-0">
            <div className="align-self-center ml-4 mr-3 fontSemiBold">
              {props.currentWar.opponent.name}
            </div>
            <img
              src={props.currentWar.opponent.badgeUrls.small}
              className="imageSelf"
              alt="badge icon"
            />
          </div>
        </div>

        {/* <hr className="my-2 mx-5" /> */}

        <div className="text-center">
          <button
            type="button"
            className="btn btn-link fontColorVictory mx-auto my-5 "
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            Previous War
          </button>
        </div>

        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content modalSelf">
              <div className="heading text-white m-0 h-auto">
                Previous War
                <button
                  type="button"
                  className="close px-3 py-2 btn text-light"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="jumbotron jumbotronSelf overflow-hidden">
                <div className={`text-white py-2 text-center ${bgColor} fontSemiBold`}>
                  {previousResult}
                </div>

                <div className="row m-0 mt-4">
                  <div className="col-6 d-flex p-0 justify-content-end">
                    <div className="align-self-center textSmall">
                      {(
                        (props.warlog.items[0].clan.destructionPercentage /
                          100) *
                        100
                      ).toFixed(2)}
                      %
                    </div>
                    <div className="mx-4 scoreSelf">
                      {props.warlog.items[0].clan.stars}
                    </div>
                  </div>

                  <div className="col-6 d-flex p-0">
                    <div className="mx-4 scoreSelf">
                      {props.warlog.items[0].opponent.stars}
                    </div>
                    <div className="align-self-center textSmall">
                      {(
                        (props.warlog.items[0].opponent.destructionPercentage /
                          100) *
                        100
                      ).toFixed(2)}
                      %
                    </div>
                  </div>
                </div>

                <div className="row m-0 my-3">
                  <div className="col-6 d-flex p-0 justify-content-end">
                    <img
                      src={props.warlog.items[0].clan.badgeUrls.small}
                      className="imageSelf"
                      alt="badge icon"
                    />
                    <div className="align-self-center mr-4 ml-3 fontMedium">
                      {props.warlog.items[0].clan.name}
                    </div>
                  </div>

                  <div className="col-6 d-flex p-0">
                    <div className="align-self-center ml-4 mr-3 fontMedium">
                      {props.warlog.items[0].opponent.name}
                    </div>
                    <img
                      src={props.warlog.items[0].opponent.badgeUrls.small}
                      className="imageSelf"
                      alt="badge icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default currentWar;
