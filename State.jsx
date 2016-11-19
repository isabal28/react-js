import React from 'react';

class StateExample extends React.Component{

    constructor(props){
      super(props);
      this.state = {
          header : "Header from state....",
          content:"Content from state"
      }
    }
    render(){
      return(
          <div>
          <h1>{this.state.header}</h1>
          <h2>{this.state.content}</h2>
          </div>
      );
    }
}

export default StateExample;

//State is the place where the data comes from

//If you have, for example, ten components that need data from the state, 
//you should create one container component that will keep the state for all of them.