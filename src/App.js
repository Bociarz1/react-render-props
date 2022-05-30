import { Component } from "react";

import Counter from "./components/Counter";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {  }
  render() { 
    return ( 
      <>
        <Counter render={(count, incrementCount) => 
          <ClickCounter count={count} incrementCount={incrementCount}/>
        }/>
        <Counter render={(count, incrementCount) => 
          <HoverCounter count={count} incrementCount={incrementCount}/>
        }/>
        {/* <Counter>
          {(count, incrementCount) => 
          <ClickCounter count={count} incrementCount={incrementCount}/>}
        </Counter> 
        <Counter>
          {(count, incrementCount) => 
          <HoverCounter count={count} incrementCount={incrementCount}/>}
        </Counter>    */}
        
      </>
     );
  }
}
 
export default App;
