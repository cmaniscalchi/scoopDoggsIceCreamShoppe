import React from 'react';
import IceCreamDetail from './IceCreamDetail.js';

const IceCreamList = (props) => {
  // We are going to iterate over each iceCream inside the array from our props...
  // ...and render a <IceCreamDetail /> component for each iceCream object.
  // Additionally, we are going to pass in the handleClick function from our props.
  let allIceCreams = props.iceCreams.map(iceCream => {
    return <IceCreamDetail key={iceCream.id} iceCream={iceCream} handleClick={props.handleClick} />
  })

  // console.log("props are", props);
  // console.log("---------");
  // console.log("allIceCreams are", allIceCreams);
  // console.log("----------");

  // The div that renders all the iceCreamDetails is styled a specific way...
  // ...which is why I rendered the allIceCreams variable inside of a div with...
  // ...a specific classname of "list"

  return (
    <div className="list">
      {/* <h3>Hey You Rendered the IceCreamList!!!!!!!</h3> */ }
      {allIceCreams}
    </div>
  )
}

export default IceCreamList;
