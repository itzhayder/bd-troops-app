import React, { useState, useEffect } from "react";
import axios from "../../node_modules/axios";
import socketIoClient from 'socket.io-client';

// import components
import ClanInfo from "./components/clanInfo/clanInfo";
import FeatureBox from "./components/featureBox";
import CurrentWar from "./components/currentWar/currentWar";
import TopDonators from "./components/topDonators/topDonators";
import ComingSoon from "./components/comingSoon/comingSoon";

const App = () => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(null);

  const endpoint = 'http://localhost:5000';

  useEffect(() => {
    console.log('useEffect run');
    axios.get(endpoint)
      .then(data => {
        setData(data.data);
      })
      .catch(err => {
        // network error or server down
        if (!err.status) {
          console.log('server down');
          setError({ status: 'error', code: 'SERVER_DOWN_ERROR' });
        } else {
          setError({ status: 'error', code: 'RESPONSE_WITH_ERROR' });
        }
      }
    );

    const socket = socketIoClient(endpoint);

    // get updated push data from server
    socket.on('data', newData => {
      console.log(' !!! data updated !!!');
      setData(newData);
      console.log(' ! newData set !');
      if (error) {
        setError(null);
      }
    });

    // socket.on('reconnecting', attempt => {
    //   console.log('trying to reconnect', attempt);
    // });

    // socket.on('reconnect', () => {
    //   setError(null);
    //   console.log('reconnected!');
    // })

    return () => socket.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  console.log('---------- Rendered -------------');

  console.log('data outside useEffect ', data);
  console.log('Error in frontend: ', error);

  let rootApp;

  let networkAlert = null;

  // handling error
  if (error) {
    // if server down
    if (error.code === 'SERVER_DOWN_ERROR' && (data || !data)) {
      return (<div className="alert alert-danger" role="alert">
        Server down. Try to reload the page. Please email me the problem: hayderaliovi@gmail.com
      </div>);
    } else if (error.code === 'RESPONSE_WITH_ERROR' || error.code === 'CONNECT_ERROR') {
      return (<div className="alert alert-danger" role="alert">
        Something goes wrong with the server response. Please email me the problem: hayderaliovi@gmail.com
      </div>);
    } else if (error.code === 'INTERNET_LOST_ERROR') {
      networkAlert = (<div className="alert alert-danger" role="alert">
        Internet connection lost!
      </div>);
    } else {
      networkAlert = null;
      return (<div className="alert alert-danger" role="alert">
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
        <ClanInfo clanInfo={data.clanInfo} />
      </div>
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
          />
          <FeatureBox
            heading="Top Donators"
            component={
              <TopDonators
                memberList={data.clanInfo.memberList}
              />
            }
          />
        </div>
        <div className="row">
          <FeatureBox heading="Coming Soon" component={<ComingSoon />} />
          <FeatureBox heading="Coming Soon" component={<ComingSoon />} />
        </div>
      </div>
    </div>
  );

  return rootApp;
  
}

export default App;
