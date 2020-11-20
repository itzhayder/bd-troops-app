import React from 'react';
import './card.css';

const Card = (props) => {
  return (
    <div className={`${props.cardStyle}  mb-3 card__container`}>
      <h3 className='font-weight-bold mt-5'>{props.title}</h3>
      <div className='shadow-sm bg-white rounded mt-3 card__children'>
        {props.children}
      </div>
    </div>
  )
}

export default Card;