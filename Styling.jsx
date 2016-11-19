import React from 'react';

class Styling extends React.Component{

    render(){

         var myStyle = {
         fontSize: 25,
         color: '#FF0000'
      }

        return(
            <div>
            <h1 style = {myStyle}>Header . New Style  </h1>
         </div>
        );
    }
}

export default Styling;