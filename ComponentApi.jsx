import React from 'react';
import ReactDOM from 'react-dom';

class ComponentApi extends  React.Component{
    constructor(){
        super();
        this.state ={
            data :[]
        }

        this.setStateFunc = this.setStateFunc.bind(this);
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
    };

    setStateFunc(){
        var item = " setState ... " + new Date().toLocaleString();
        var myArray = this.state.data;
        myArray.push(item);
        this.setState({data: myArray}) // setState fonksiyonu. 
    };

    forceUpdateHandler(){
        this.forceUpdate();
    }

    findDomNodeHandler(){
        var myDiv = document.getElementById('myDiv');
      ReactDOM.findDOMNode(myDiv).style.color = 'green';
    }

    render(){
        return(
            <div>
            <button onClick={this.setStateFunc}> SET STATE </button>
            <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
            <h4>Random number: {Math.random()}</h4>
            <h4> State Array : {this.state.data} </h4>

            <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
            <div id = "myDiv">NODE</div>
            </div>
        );
    }
}

export default ComponentApi;


//We will show you three methods: setState(), forceUpdate and ReactDOM.findDOMNode()

//In new ES6 classes we have to manually bind this. You will see in examples below 
//that we are using this.method.bind(this).

//setState() method is used for updating the state of the component.
//This method will not replace the state but only add changes to original state.


//Sometimes you want to update the component manually. 
//You can achieve this by using forceUpdate() method.

//For DOM manipulation, we can use ReactDOM.findDOMNode() method. 
//First we need to import react-dom.