import React from 'react';
import Colors from './colors';
import Shapes from './shapes';
import Backgrounds from './backgrounds';
import Name from './title';
import Home from './home';
import axios from 'axios';



class Visualizer extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			'title':'Default Visualizer',
			'shapes':{	q: 'fa-facebook',
	  					w: 'fa-facebook',
					  	e: 'fa-facebook',
					  	r: 'fa-facebook',
					  	t: 'fa-facebook',
					  	y: 'fa-facebook',
					  	u: 'fa-facebook',
					  	i: 'fa-facebook',
					  	o: 'fa-facebook',
					  	p: 'fa-facebook'},
			'colors':{ 
						z:'rgb(255,237,2)',
					  	x:'rgb(255,237,2)',
					  	c:'rgb(255,237,2)',
					  	v:'rgb(255,237,2)',
					  	b:'rgb(255,237,2)',
					  	n:'rgb(255,237,2)',
					  	m:'rgb(255,237,2)'
					  }
		};

		let self = this;

		axios.get('/api/visualizer/'+this.props.params.id)
		  .then(function (response) {
		    console.log(response);
		    self.setState({title:response.data.title, shapes:response.data.shapes, colors:response.data.colors});
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
		// fetch api call to '/api/visualizer/'+this.params.id
	}

	render(){
		return(
			<div>
				<Colors colors={this.state.colors}></Colors>
				<Shapes shapes={this.state.shapes}></Shapes>
				<Backgrounds></Backgrounds>
				<Name title={this.state.title}></Name>
				<Home></Home>
			</div>
		)
	}
}

export default Visualizer;