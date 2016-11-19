import React from 'react';

class Keys extends React.Component{

constructor(){
    super();

    this.state ={
        data :[
            {
                component:'first',
                id:1
            },
            {
                component:'second',
                id:2
            },
            {
                component:'third',
                id:3
            }
        ]
    }
}

render(){
    return(
        <div>
        <div>
        { 
            this.state.data.map((dynamicComponent,i) => 
            <Content key={i} componentData ={dynamicComponent} />)
        }
        </div>
        </div>
    );
}

}

class Content extends React.Component{
    render(){
        return(
            <div>
            <div> {this.props.componentData.component} </div>
            <div> {this.props.componentData.id}</div>
            </div>
        );
    }
}

export default Keys;

//Let's dynamically create Content elements with unique index (i). 
//The map function will create three elements from our data array. 
//Since key value needs to be unique for every element,
// we will assign i as a key for each created element.