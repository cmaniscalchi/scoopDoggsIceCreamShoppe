import React, { Component } from 'react';
import IceCreamList from '../components/IceCreamList.js';

// Ice Cream Image URLs
const iceCreamOneURL = 'https://i.pinimg.com/originals/93/49/b7/9349b73cab2ecece3bf3c6da719ee0f4.jpg';
const iceCreamTwoURL = 'https://cdn.drawception.com/images/panels/2017/4-5/Or8EOfNw68-14.png';
const iceCreamThreeURL = 'https://s-media-cache-ak0.pinimg.com/originals/82/5d/03/825d03a22cd7b211cfbf68732cea7d1f.png';
const iceCreamFourURL = 'http://www.thecolonyhotelbali.com/wp-content/uploads/2018/04/18579567_1897707497167203_9162293195269210112_n.jpg';

class IceCreamContainer extends Component {

  state = {
      iceCreams: [
        {id: 1, name: "Uni-Cone", imgSrc: iceCreamOneURL, wouldVanillaIceLikeIt: false},
        {id: 2, name: "Sprinklz", imgSrc: iceCreamTwoURL, wouldVanillaIceLikeIt: true},
        {id: 3, name: "Mintie", imgSrc: iceCreamThreeURL, wouldVanillaIceLikeIt: true},
        {id: 4, name: "Ice Ice Baby", imgSrc: iceCreamFourURL, wouldVanillaIceLikeIt: false}
      ]
    }

  handleClick = iceCreamId => {
    const iceCreams = this.state.iceCreams.map(iceCream => {
      if (iceCreamId === iceCream.id) {
        return {
          ...iceCream,
          wouldVanillaIceLikeIt: !iceCream.wouldVanillaIceLikeIt
        }
      }
      return iceCream
    })
    this.setState({ iceCreams })
  }


  render() {
    return (
      <div>
        <IceCreamList iceCreams={this.state.iceCreams} handleClick={this.handleClick} />
      </div>
    )
  }
}

export default IceCreamContainer;
