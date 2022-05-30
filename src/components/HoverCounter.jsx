import { Component } from "react";

class HoverCounter extends Component {
  render() { 
    const {count, incrementCount} = this.props
    return ( 
      <>
        <h2 onMouseMove={incrementCount}>You hovered {count} times</h2>
      </>
     );
  }
}
 
export default HoverCounter;