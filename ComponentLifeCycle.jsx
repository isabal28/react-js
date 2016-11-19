import  React from 'react';

class ComponentLifeCycle extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            data:0
        }

        this.setNewNumber = this.setNewNumber.bind(this)
 
    }

    setNewNumber (){
        this.setState({data:this.state.data + 1})
    }

    render(){
        return(
            <div>
                <button onClick={this.setNewNumber}> INCREMENT </button>
                <Content myNumber={this.state.data} />
            </div>
        );
    }
}

class Content extends React.Component{
    componentWillMount(){
        console.log('Componen WILL MOUNT')
    }
   
   componentDidMount(){
       console.log('component Did Mount')
   }
  
   componentWillReceiveProps(newProps){
       console.log('component will recieve props!')
   }

   shouldComponentUpdate(newProps,newState){
       return true;
   }   

    componentWillUpdate(nextProps,nextState){
        console.log('component will Update!')
    }

   componentDidUpdate(prevProps,prevState){
       console.log('Component did update')
   }

   componentWillUnmount(){
       console.log('component will unmount')
   }

   render(){
       return(
           <div>
           <h3> {this.props.myNumber} </h3>
           </div>
       );
   }
}


export default ComponentLifeCycle;

//componentWillMount : is executed before rendering on both server and client side

//componentDidMount : is executed after first render only on the client side. this is where ajax requests
// and DOM  or state updates should occur. this method is also user for integration with other javascript
//frameworks and any functions with delayed  execution like setTimeout or setInterval . 
//We are using it to update the state so we can trigger the other lifecycle methods.

//componentWillReceiveProps : is invoked as soon as the props are updated before another render is called.
//We triggered is from setNewNumber  when we updated the state.


//ShouldComponentUpdate : should return true or false value. this will determine if component will be 
//updated or not. this is set to true by default. if you are sure that component doesnt need to 
//render after state or props are updated, you can return false value.

//ComponentWillUpdate : is called just before rendering.

//ComponentDidUpdate : is called just after rendering.

//componentWillUnmount : is called after the component is unmounted from the dom.
//we are unmounting our component is main.js

//****Only componentWillMount and componentDidMount will be logged in console 
//since we didn't update anything yet.

//****When we click INCREMENT button, the update will occur and other
// lifecycle methods will be triggered.

//***After ten seconds, the component will unmount and the last event will be logged in console.

