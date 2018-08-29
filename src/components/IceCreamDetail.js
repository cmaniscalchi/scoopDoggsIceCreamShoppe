import React from 'react';
import { Card, Button } from 'semantic-ui-react';

const IceCreamDetail = props => {
  // console.log("props are", props);
  // console.log("---------");

  // React-Semantic-Ui cannot render boolean values so I converted it to a string...
  // ...and then used RegEx (Regular Expression) to capitalize the first letter in the word
  const description = props.iceCream.wouldSnoopApprove.toString().replace(/(\b\w)/gi, (m) => m.toUpperCase());

  // You cannot invoke functions inside of an onClick (unless you make it a callback...
  // ...like () => props.handleClick(props.iceCream.id) but this syntax read cleaner...
  // ...so we moved it up to its own function whose sole purpose is to invoke the handleClick...
  // ...function from our props and pass in the id of the iceCream we are rendering...
  // ...inside this <IceCreamDetail /> component
  const triggerClick = () => {
    props.handleClick(props.iceCream.id)
  }

  // Inside the return, we're using a Card component that we are importing...
  // ...from Semantic React UI to style the way our iceCream detail is displayed...
  // ...on the browser as well as a Button component that, when clicked, will...
  // ...invoke our triggerClick function
  return (
    <div>
      {/* <h1>OMG WE INNIIIIT</h1> */ }
      <Card
        image={props.iceCream.imgSrc}
        header={props.iceCream.name}
        meta="Scoop Approves?"
        description={description}
        />
      <div className="clicker">
        <Button inverted color='teal' onClick={triggerClick} >
          Teal
        </Button>
      </div>
    </div>
  )
}

export default IceCreamDetail;
