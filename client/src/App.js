import React, { Component } from "react";
import axios from "../../node_modules/axios";

// import components
import ClanInfo from "./components/clanInfo/clanInfo";
import FeatureBox from "./components/featureBox";
import CurrentWar from "./components/currentWar/currentWar";
import TopDonators from "./components/topDonators/topDonators";
import ComingSoon from "./components/comingSoon/comingSoon";

class App extends Component {
  state = {
    data: {},
    isLoaded: false,
  };

  componentDidMount() {
    if (!this.state.isLoaded) {
      axios
        .get("http://localhost:5000")
        .then((result) => {
          const { data } = result;
          this.setState({
            data,
            isLoaded: true,
          });
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  render() {
    let rootApp = "Loading...";

    if (this.state.isLoaded) {
      console.log(this.state);
      rootApp = (
        <div className="row">
          <div className="col-xl-3 pr-xl-4 fixed-border">
            <ClanInfo clanInfo={this.state.data.clanInfo} />{" "}
          </div>{" "}
          <div className="col-xl-9 pl-xl-4">
            <div className="row">
              <FeatureBox
                heading="Current War"
                component={
                  <CurrentWar
                    currentWar={this.state.data.currentWar}
                    warlog={this.state.data.warlog}
                  />
                }
              />{" "}
              <FeatureBox
                heading="Top Donators"
                component={
                  <TopDonators
                    memberList={this.state.data.clanInfo.memberList}
                  />
                }
              />{" "}
            </div>{" "}
            <div className="row">
              <FeatureBox heading="Coming Soon" component={<ComingSoon />} />{" "}
              <FeatureBox heading="Coming Soon" component={<ComingSoon />} />{" "}
            </div>{" "}
          </div>{" "}
        </div>
      );
    }

    return <div> {rootApp} </div>;
  }
}

export default App;
