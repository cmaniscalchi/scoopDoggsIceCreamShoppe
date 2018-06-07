import React from 'react';
import { Card, Button } from 'semantic-ui-react';

const IceCreamDetail = props => {
  const meta = "Would Vanilla Ice think this cone is icy???";
  const description = props.iceCream.wouldVanillaIceLikeIt.toString().replace(/(\b\w)/gi, (m) => m.toUpperCase());

  const triggerClick = () => {
    props.handleClick(props.iceCream.id)
  }

  return (
    <div>
      <Card
        image={props.iceCream.imgSrc}
        header={props.iceCream.name}
        meta={meta}
        description={description}
        />
      <div className="clicker">
        <Button basic inverted color='red' onClick={triggerClick}>
          Click Me!!!
        </Button>
      </div>
    </div>
  )
}

export default IceCreamDetail;
