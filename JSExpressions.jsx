import React from 'react';

class JSExpression extends React.Component{
    render(){
        var i = 1;
        return (
            <div>
            <h1>{1+5} </h1>
            <h2>{i == 1 ? ' i equals 1 ' : 'i is different'}</h2>
         </div>
        );
    }
}

export default JSExpression;
//JavaScript expressions can be used inside of JSX. You just need to wrap it with curly brackets {}
//You else statements inside JSX but you can use conditional (ternary) expressions instead.