import React, { useState, useEffect } from 'react';
import moment from 'moment'
import socketIoClient from 'socket.io-client';
import { useSelector, useDispatch } from 'react-redux'
import { updateClanInfo,updateCurrentWar } from '../../store/actions/updateData';
import { baseURL } from '../../config/config'

import Navigation from '../../components/navigation/navigation';
import CurrentWar from '../../components/currentWar/currentWar';
import TopDonators from '../../components/topDonators/topDonators';

const Home = () => {
  const [lastUpdated, setLastUpdated] = useState(0);
  const data = useSelector(state => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = socketIoClient(baseURL);

    // get updated push data from server
    socket.on('claninfos', newData => {
      dispatch(updateClanInfo(newData));
    });
    socket.on('currentwars', newData => {
      dispatch(updateCurrentWar(newData));
    });

    return () => socket.disconnect();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (data.loading) return;

    const clanInfoUpdatedTime = new Date(data.data.clanInfo.updatedAt).getTime();
    const currentWarUpdatedTime = new Date(data.data.currentWar.updatedAt).getTime();

    if (clanInfoUpdatedTime > currentWarUpdatedTime) {
      setLastUpdated(clanInfoUpdatedTime);
    } else {
      setLastUpdated(currentWarUpdatedTime);
    }
  }, [data]);

  return (
    <>
      <Navigation />
      <p className='text-center mb-lg-3 text-muted mb-0'>
        <small>last updated: {moment(lastUpdated).startOf('minutes').fromNow()}</small>
      </p>
      <div className='d-lg-flex justify-content-between'>
        <CurrentWar  />
        <TopDonators />
      </div>  
    </>
  )
}

export default Home
