import React, { useEffect, useState } from "react";
import axios from "../../node_modules/axios";
import useSWR from 'swr';
import useInterval from './utils/useInterval';

// import components
import ClanInfo from "./components/clanInfo/clanInfo";
import FeatureBox from "./components/featureBox";
import CurrentWar from "./components/currentWar/currentWar";
import TopDonators from "./components/topDonators/topDonators";
import ComingSoon from "./components/comingSoon/comingSoon";

const App = () => {
  // const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [delay, setDelay] = useState(7000);

  // const reFetchData = () => {
  //   const timer = setTimeout(() => {
  //     setDelay(prevDelay => {
  //       if (prevDelay === 7000) {
  //         console.log("run if");
  //         return prevDelay + 5;
  //       } else {
  //         console.log('run else');
  //         return prevDelay - 5;
  //       }
  //     })
  //   }, delay);

  //   return timer;
  // }

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000")
  //     .then((result) => {
  //       const { data } = result;
  //       setData(data);
  //       setIsLoaded(true);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
    
  //   const timer = reFetchData();

  //   return () => clearTimeout(timer);

  // }, []);

  // useInterval(() => {
  //   axios
  //     .get("http://localhost:5000")
  //     .then((result) => {
  //       const { data } = result;
  //       setData(data);
  //       setIsLoading(false);
  //       setError(null);
  //     })
  //     .catch((err) => {
  //       setError(err);
  //       console.log(err);
  //     });
  // }, 10000);

  const { data, error } = useSWR('http://localhost:5000',
    url => axios.get(url).then(res => res.data),
    { revalidateOnFocus: true }
  );

  console.log('---------- Rendered -------------');

  console.log('data outside swr: ', data);

  let rootApp;

  if (error) {
    rootApp = <div>There is an Error! Reload again.</div>;
  } else if (!data) { 
    rootApp = (<div className="spinner-border mx-auto" role="status">
    <span className="sr-only">Loading...</span>
  </div>);
  } else {
    if (data.status === 'error') {
      return <div>Check your internet connection</div>;
    }
    // console.log(data);
    rootApp = (
      <div className="row">
        <div className="col-xl-3 pr-xl-4 fixed-border">
          <ClanInfo clanInfo={data.clanInfo} />{" "}
        </div>{" "}
        <div className="col-xl-9 pl-xl-4">
          <div className="row">
            <FeatureBox
              heading="Current War"
              component={
                <CurrentWar
                  currentWar={data.currentWar}
                  warlog={data.warlog}
                />
              }
            />{" "}
            <FeatureBox
              heading="Top Donators"
              component={
                <TopDonators
                  memberList={data.clanInfo.memberList}
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

  return rootApp;
  
}

export default App;
