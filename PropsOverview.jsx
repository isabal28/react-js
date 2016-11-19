import React from 'react';

class PropsOverview extends React.Component{
    render(){
        return(
        <div>
        <h1>
                {this.props.headerProp}
        </h1>
        <h2>
                {this.props.contentProp}
        </h2>
        </div>

        );
    }
 
}

PropsOverview.defaultProps ={
    headerProp: "Header from props2...",
   contentProp:"Content from props2..."
}

export default PropsOverview;

//The main difference between state and props is that props are immutable
// immutable : degismes, sabit.

//This is why container component should define state that can be updated and changed, 
//while the child components should only pass data from the state using props.

//When you need immutable data in your component you can just add props to reactDOM.render() 
//function in main.js and use it inside your component.

//You can also set default property values directly on the component constructor 
//instead of adding it to reactDom.render() element.