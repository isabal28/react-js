import React from 'react';

class FirstComponent extends React.Component{
    constructor() {
      super();
		
      this.state = {
         data: 
         [
            {
               "id":1,
               "name":"Foo",
               "age":"100"
            },
				
            {
               "id":2,
               "name":"Bar",
               "age":"300"
            },
				
            {
               "id":3,
               "name":"Baz",
               "age":"400"
            }
         ]
      }
   }
    render(){
        return(
            <div>
            <Header/>
            <table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
               </tbody>
            </table>
         </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return(
            <div>
            <h1>Component denemesi Header</h1>
            </div>
        );
    }
}

class Content extends React.Component{
    Render(){
        return(
              <div>
              <h2>Content</h2>
              <p>Component denemesi Content</p>
              </div>
        );
    }
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}


export default FirstComponent;

// Only App Component needs to be exported