import React, { useState, useEffect } from "react";
import axios from "../../node_modules/axios";
import useSWR from 'swr';
import socketIoClient from 'socket.io-client';

// import components
import ClanInfo from "./components/clanInfo/clanInfo";
import FeatureBox from "./components/featureBox";
import CurrentWar from "./components/currentWar/currentWar";
import TopDonators from "./components/topDonators/topDonators";
import ComingSoon from "./components/comingSoon/comingSoon";

const App = () => {
  const [isUpdated, setIsUpdated] = useState(false);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(null);

  const endpoint = 'http://localhost:5000';
  const socket = socketIoClient(endpoint);

  socket.on('msg', msg => {
    console.log(msg);
  });

  useEffect(() => {
    axios.get(endpoint)
      .then(data => {
        setData(data.data);
      })
  }, [isUpdated]);

  // useEffect(() => {
  //   const onFocus = () => {
  //     console.log('window is on focused');
  //   }

  //   window.addEventListener('focus', onFocus);

  //   return () => window.removeEventListener('focus', onFocus);
  // });

  // const [isDisconnected, setIsDisconnected] = useState(false);
  
  // const { data, error } = useSWR('http://localhost:5000',
  //   url => {
  //     return axios.get(url)
  //       .then(res => {
  //         if (res.data.status === 'error') {
  //           throw new Error('internet issue');
  //         }
  //         return res.data;
  //       })
  //   },
  //   { revalidateOnFocus: false }
  // );

  console.log('---------- Rendered -------------');

  console.log('data outside swr: ', data);
  console.log('Error in frontend: ',error);

  let rootApp;

  let networkAlert = null;

  if (error) {
    if (data) {
      networkAlert = (<div class="alert alert-warning" role="alert">
        Internet connection lost!
      </div>);
    } else {
      networkAlert = null;
      return (<div class="alert alert-danger" role="alert">
      No internet connection. Please fix your internet and try again.
    </div>)
    }
  } else if (!data) { 
    networkAlert = null;
    return (<div className="spinner-border mx-auto" role="status">
    <span className="sr-only">Loading...</span>
  </div>);
  } 
  
    if (data.status === 'error') {
      networkAlert = null;
      return <div>Check your internet connection</div>;
    }
    // console.log(data);
    rootApp = (
      <div className="row">
        {networkAlert}
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

  return rootApp;
  
}

export default App;
