import React from 'react';
import './navigation.css';

const Navigation = () => {
  return (
    <nav className='d-flex justify-content-between align-items-center mt-3 navigation__container'>
      <i className="fa fa-bars fa-lg" aria-hidden="true" style={{ cursor: 'pointer' }}></i>
      <h4 className='font-weight-bold m-0'>BD.troops</h4>
      <i className="fa fa-user fa-lg" aria-hidden="true" style={{ cursor: 'pointer' }}></i>
    </nav>
  )
}

export default Navigation;
