import React from 'react';

class Events extends  React.Component{
    constructor (props){
        super(props);
        this.state ={
            data : 'Initial data'
        }

        this.updateState = this.updateState.bind(this);
    };

    updateState(){
        this.setState({data : 'data updates from the child component ...'})
    }

    render(){
        return(
            <div>
             <Content myDataProp ={this.state.data}
              updateStateProp={this.updateState} >
             </Content>
            </div>
        );

    }
}

class Content extends React.Component{
    render(){
        return(
            <div>
            <button  onClick ={this.props.updateStateProp}> CLİCK </button>
            <h3> {this.props.myDataProp} </h3>
            </div>
        );
    }
}

export default Events;