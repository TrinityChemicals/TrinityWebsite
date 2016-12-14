import React from 'react'; 
import ReactDOM from 'react-dom'; 
import App from './App';  
import Home from './Components/Home'; 
import Products from './Components/Products';
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact';


import { Router, Route, browserHistory, IndexRoute } from 'react-router';


// ReactDOM.render(<App/>, document.getElementById('app'))




ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/Home" component={Home}/>
       <Route path="/Products" component={Products}/>
       <Route path="/Services" component={Services}/>
       <Route path="/About" component={About}/>
        <Route path="/Contact" component={Contact}/>
        
    </Route>
  </Router>
  ), document.getElementById('app')
);




