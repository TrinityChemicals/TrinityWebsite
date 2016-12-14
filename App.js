import React from 'react'; 
import { Tabs, Tab } from 'react-bootstrap'; 
import { browserHistory, Link } from 'react-router';
import { Jumbotron, Button, Grid, Row, Col, Well } from 'react-bootstrap';
import Home from './Components/Home'; 
import About from './Components/About';
import Services from './Components/Services';
import Products from './Components/Products';
import Contact from './Components/Contact'; 
import Head from './Components/Head';
class App extends React.Component{

componentDidMount(){
    document.body.className=''
  }


  
render() {

    return (
     <div>
        <h1>Trinity Chemicals</h1>
           <nav>
              <ul>
                 <li><Link to="/Home">Home</Link></li>
                 <li><Link to="/About">About</Link></li>
                 <li><Link to="/Services">Services</Link></li>
                 <li><Link to="/Products">Products</Link></li>
                  <li><Link to="/Contact">Contact</Link></li>

              </ul>
           </nav>
        { this.props.children }
      </div>
          
    )
  }
}

module.exports = App;





  

  
  

