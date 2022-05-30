import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
  }
  state = { amount: 0 }

  incrementCount = () => {
    this.setState( (prevState) => {
      return {amount: prevState.amount + 1}
    })
  }
  render() { 
    return ( 
      <> 
        {this.props.render(this.state.amount, this.incrementCount)}
        {/* {this.props.children(this.state.amount, this.incrementCount)} */}
      </>
     );
  }
}
 
export default Counter;