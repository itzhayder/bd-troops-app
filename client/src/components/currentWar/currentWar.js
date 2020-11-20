import React from 'react';
import moment from 'moment';
import Countdown from 'react-countdown';
import './currentWar.css';
import Hero from '../../assets/images/current-war-hero.png';
import Card from '../card/card';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';

const CurrentWar = (props) => {
  const data = useSelector(state => state.data.data.currentWar);
  const [countTime, setCountTime] = useState(0);
  const [refreshTime, setRefreshTime] = useState(false);
  const [status, setStatus] = useState({ timeStatus: '', battleStatus: '', key: 1 });

  useEffect(() => {
    const myTime = Date.now();
    // const time = 1605880380152;
    // const startTime = time;
    // const endTime = time + 10000;
    const startTime = new Date(moment(data.startTime).format('llll')).getTime();
    const endTime = new Date(moment(data.endTime).format('llll')).getTime();
    

    if (data.state === 'preparation' || data.state === 'inWar') {
      if (myTime < startTime) {
        setStatus(prevState => (
          { ...prevState, 
            timeStatus: 'remaining',
            battleStatus: 'Preparation',
            key: prevState.key + 1
          }
        ));
        setCountTime(startTime);
      } else if (myTime < endTime) {
        setStatus(prevState => (
          { ...prevState, 
            timeStatus: 'remaining',
            battleStatus: 'Battle Day',
            key: prevState.key + 1
          }
        ));
        setCountTime(endTime);
      } else {
        setStatus(prevState => (
          { ...prevState, 
            timeStatus: 'no cooldown',
            battleStatus: data.clan?.name ? 'End Battle' : 'No Battle',
            key: prevState.key + 1
          }
        ));
        setCountTime(new Date().getTime());
      }   
    } else {
      setStatus(prevState => (
        { ...prevState, 
          timeStatus: 'no cooldown',
          battleStatus: 'No Battle',
        }
      ));
      setCountTime(new Date().getTime());
    }
    // eslint-disable-next-line
  }, [refreshTime]);

  const renderer = ({ hours, minutes, seconds }) => {
    return <span>{hours}h {minutes}m</span>;
  };

  return (
    <Card title='Current War' cardStyle='mr-lg-3' >
      <div className='d-flex justify-content-between align-items-center bgPreparation p-3 rounded-top position-relative'>
        <img
          src={Hero}
          alt="hero"
          className="position-absolute hero-image"
        />
        <div className='currentWar__time d-flex flex-column'>
          <span className='text-white font-weight-bold'>
            {countTime && <Countdown key={status.key} date={countTime} renderer={renderer} onComplete={() => {
              setCountTime(0);
              setRefreshTime(!refreshTime);
            }} />}
          </span>
          <span className='text-white currentWar__remaining'>{status.timeStatus}</span>
        </div>

        <h6 className='text-white font-weight-bold m-0 position-absolute currentWar__battleStatus'>{status.battleStatus}</h6>

        <div style={{ width: '47px' }}></div>
      </div>

      {
        status.battleStatus === 'End Battle' ? 
        <div className='text-center py-3 px-3'>
          <h4>No battle right now!</h4>
          <p>Check last war details.</p>
          <p><u>link here</u></p>
        </div> : 
        <div className='px-3 py-4'>
          <div className='d-flex align-items-center my-2'>
            <img src={data.clan.badgeUrls.small} alt="clan-badge" className='currentWar__badge' />
            <h6 className='m-0 font-weight-bold mr-auto ml-1'>{data.clan.name}</h6>

            <div className='d-flex justify-content-between align-items-center p-3 currentWar__star-container rounded'>
              <h6 className='m-0 font-weight-bold'>{data.clan.stars}</h6>
              <span className='currentWar__percentage text-right'>{data.clan.destructionPercentage.toFixed(2)}</span>
            </div>
          </div>

          <div className='d-flex align-items-center my-2'>
            <img src={data.opponent.badgeUrls.small} alt="clan-badge" className='currentWar__badge' />
            <h6 className='m-0 font-weight-bold mr-auto ml-1'>{data.opponent.name}</h6>

            <div className='d-flex justify-content-between align-items-center p-3 currentWar__star-container rounded'>
              <h6 className='m-0 font-weight-bold'>{data.opponent.stars}</h6>
              <span className='currentWar__percentage text-right'>{data.opponent.destructionPercentage.toFixed(2)}</span>
            </div>
          </div>
        </div>
      }
    </Card>
  )
}

export default CurrentWar;