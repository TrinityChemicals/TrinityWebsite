import React from 'react'; 
import { Tabs, Tab } from 'react-bootstrap'; 
import { browserHistory, Link } from 'react-router';


class Head extends React.Component{  

	render(){
		console.log("the values from App", this.props.value);
		return(

			<div> Helloo Head page</div>


			)
	}



} 

module.exports = Head;