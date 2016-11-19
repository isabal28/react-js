import React from 'react'

class Attributes extends React.Component{

    render(){

        return  (
                <div>
                <h1> the Attribute value = {this.props.myAttribute}</h1>
                </div>
        );
    
}
}

export default Attributes;