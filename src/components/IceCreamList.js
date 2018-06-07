import React from 'react';
import IceCreamDetail from './IceCreamDetail.js';

const IceCreamList = props => {
  const iceCreams = props.iceCreams.map(iceCream => <IceCreamDetail key={iceCream.id} iceCream={iceCream} handleClick={props.handleClick} />)
  return (
    <div className="list">
      {iceCreams}
    </div>
  )
}

export default IceCreamList;
