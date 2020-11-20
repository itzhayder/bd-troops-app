import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../card/card';
import './topDonators.css';

const TopDonators = () => {
  const donators = useSelector(state => state.data.data.clanInfo.memberList.slice(0, 5));

  return (
    <Card title='Top Donators' cardStyle='ml-lg-3' >
      <div className='rounded overflow-hidden topDonators__table'> 
        <table className='table borderless'>
          <tbody>
            {donators.map((donator, i) => 
              <tr key={i}>
                <td className='font-weight-bold'>{i+1}.</td>
                <td className='font-weight-bold'>{donator.name}</td>
                <td className='font-weight-bold'>{donator.donations}</td>
              </tr>
            )}
          </tbody>
       </table>
      </div>
    </Card>
  )
}

export default TopDonators;