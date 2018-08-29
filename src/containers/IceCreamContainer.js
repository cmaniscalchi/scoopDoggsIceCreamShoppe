import React, { Component } from 'react';
import IceCreamList from '../components/IceCreamList.js';

// These are just abstracted URLs of the image source for each ice cream object
// You can ignore these!
// It just made my state much longer than I preferred for a lecture...
// ...so I defined it in variables outside
const iceCreamOneURL = 'http://clubgiggle.com/wp-content/uploads/2017/04/weird-ice-cream.jpg';
const iceCreamTwoURL = 'https://c1.staticflickr.com/7/6158/6170039945_57f5a35abb_b.jpg';
const iceCreamThreeURL = 'https://media.giphy.com/media/3o85xsaT3q7jC801wY/giphy.gif';
const iceCreamFourURL = 'http://www.helengraves.co.uk/wp-content/uploads/2017/10/Snoop-Ice-Cream.jpg';


// We decided that our <IceCreamContainer /> will have state because...
// ...the <IceCreamList /> and <IceCreamDetail /> both need access to the...
// ...data and the last thing we want is duplicate state in multiple components...
// ...especially if I am going to be updating and manipulating that state
class IceCreamContainer extends Component {
  constructor(props) {
    super(props)

    // I've constructed state so that it has one key inside called iceCreams...
    // ...which points to an array of ice cream objects
    // Each of these objects have an id, a name, and image source...
    // ...and a boolean value that we toggle between true and false...
    // ...when we click a button in the <IceCreamDetail /> component
    this.state = {
        iceCreams: [
          {id: 1, name: "Good Morning", imgSrc: iceCreamOneURL, wouldSnoopApprove: false},
          {id: 2, name: "Ice Quack", imgSrc: iceCreamTwoURL, wouldSnoopApprove: false},
          {id: 3, name: "JSON", imgSrc: iceCreamThreeURL, wouldSnoopApprove: true},
          {id: 4, name: "Scoop Dogg", imgSrc: iceCreamFourURL, wouldSnoopApprove: true}
        ]
      }
    }

  // This function is passed down as a prop from the <IceCreamContainer />...
  // ...all the way to <IceCreamDetail /> so that we can update state for...
  // ...a specific iceCream when the button in <IceCreamDetail /> is clicked

  handleClick = iceCreamId => {
    // Its important to console.log to keep a short feedback loop
    // console.log("handle click has been triggered!!");
    // console.log("iceCreamId is", iceCreamId);
    // console.log("------------");

    let iceCreams = this.state.iceCreams.map(iceCream => {
      // I am iterating over each ice cream object defined in state
      // I want to find the ice cream object that has the SAME EXACT ID
      // of the iceCreamId being passed in on line 23 as an argument
      if (iceCream.id === iceCreamId) {
        // oooh they match!!
        // I'm going to spread the iceCream object because I want to make a copy of it
        // but also, I want to change some of the data inside that object

        // This is one option for updating state...
        // iceCream.wouldSnoopApprove = !iceCream.wouldSnoopApprove
        // return iceCream

        // ...and here's another fancier way to update state using the spread operator
        return {
          ...iceCream,
          // the only thing that I am changing is the boolean value
          // of whether or not Scoop Dogg would approve
          // initially, wouldSnoopApprove points to false
          // overwrite that key
          // and set its value, to the opposite of what it originally was
          //
          wouldSnoopApprove: !iceCream.wouldSnoopApprove
        }
      } else {
        return iceCream
      }
    })

    // console.log("iceCreams is", iceCreams);
    // Here, we're updating our state to replace the original iceCreams array inside state...
    // ...with the new array that contains the updated boolean value of whether or not...
    // ...Snoop would approve of this iceCream object

    // NOTE: setState is asynchronous just like fetches in JavaScript are. So if you'd like to...
    // ...keep a short feedback loop, add a console.log to verify what the new state is...
    // ...after the setState is complete
    this.setState({
      iceCreams: iceCreams
    }, console.log("new state is", this.state))
  }

  render() {
    // We are going to render the <IceCreamList /> component and pass down the entire...
    // ...iceCreams array from our state as well as the handleClick function
    
    // console.log("state is", this.state)
    // console.log("---------------");
    return (
      <div>
        <h1>JOOSE</h1>
        <IceCreamList iceCreams={this.state.iceCreams} handleClick={this.handleClick} />
      </div>
    )
  }
}

export default IceCreamContainer;
