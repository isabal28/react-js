import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import NestedTags from './NestedTags.jsx';
import JSExpressions from './JSExpressions.jsx';
import Attributes from './Attributes.jsx';
import Styling from './Styling.jsx';
import FirstComponent from './FirstComponent.jsx';
import StateExample from './State.jsx';
import PropsOverview from './PropsOverview.jsx';
import PropsValidations from './PropsValidations.jsx';
import ComponentApi from './ComponentApi.jsx';
import ComponentLifeCycle from './ComponentLifeCycle.jsx';
import Forms from './Forms.jsx';
import Events from './Events.jsx';
import RefExample from './RefExample.jsx';
import Keys from './Keys.jsx';
import Routerjsx from './Router.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'

import {Router,Route,Link,browserHistory,IndexRoute} from 'react-router'

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<NestedTags/>,document.getElementById('nestedtags'));
ReactDOM.render(<JSExpressions/>,document.getElementById('jsExpressions'));
ReactDOM.render(<Attributes myAttribute="oh Yeah!"/>,document.getElementById('attributes'));
ReactDOM.render(<Styling />,document.getElementById('styling'));
ReactDOM.render(<FirstComponent />,document.getElementById('components'));
ReactDOM.render(<StateExample />,document.getElementById('stateexample'));
ReactDOM.render(<PropsOverview headerProp="header from props..." contentProp="Content from porps..." />,document.getElementById('propsoverview'));
ReactDOM.render(<PropsValidations />,document.getElementById('propsvalidations'));
ReactDOM.render(<ComponentApi />,document.getElementById('componentapi'));
ReactDOM.render(<ComponentLifeCycle/>,document.getElementById('componentlifecycle'));
ReactDOM.render(<Forms />,document.getElementById('forms'));
ReactDOM.render(<Events />,document.getElementById('events'));
ReactDOM.render(<Keys/>,document.getElementById('keys'));




//ReactDOM.render(<RefExample/>,document.getElementById('refexample'));
//ref ornegi hata veriyo. bakılmalı.
setTimeout(()=>{
    ReactDOM.unmountComponentAtNode(document.getElementById('componentlifecycle'));},
10000
); // 10 saniye sonra componentlifecycle componenti kaybolacak



ReactDOM.render((
    <Router history = {browserHistory}>
    <Route path="/" component={Routerjsx}>
      <IndexRoute component ={About}/>
      <Route path="home" component={Home} />
      <Route path="about"component ={About} />
      <Route path="contact"component={Contact} />
      </Route>
    </Router>
),document.getElementById('router'));



//to be able to render on the page , we need to import in in main.js file end call 
// reactDom.render(). 