import React from 'react';
import axios from 'axios';
import ColPick from './colpick';
import IconPick from './iconpick';
import '../App.css';


class Editor extends React.Component{

	constructor(props) {
	  super(props);
	  
	  this.state = {
	  title: '',
	  shapes:{
	  	q: 'fa-facebook',
	  	w: 'fa-facebook',
	  	e: 'fa-facebook',
	  	r: 'fa-facebook',
	  	t: 'fa-facebook',
	  	y: 'fa-facebook',
	  	u: 'fa-facebook',
	  	i: 'fa-facebook',
	  	o: 'fa-facebook',
	  	p: 'fa-facebook'

	  },
	  colors:{
	  	z:'rgb(255,237,2)',
	  	x:'rgb(255,237,2)',
	  	c:'rgb(255,237,2)',
	  	v:'rgb(255,237,2)',
	  	b:'rgb(255,237,2)',
	  	n:'rgb(255,237,2)',
	  	m:'rgb(255,237,2)'
	  
	  }
	  };

	  this.handleChange = this.handleChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	  this.handleIconChange = this.handleIconChange.bind(this);
	  this.handleColorChange = this.handleColorChange.bind(this);
	 
	  
	}

	handleChange(event) {
	  this.setState({title: event.target.value});
	  
	}

	handleSubmit(event) {
	  //alert('visualizer submitted: ' + this.state.value );
	  axios.post('/api/createvisualizer', this.state)
	    .then(function (response) {
	      // console.log(response.data._id);
	      // redirect to /visualizer/response.data._id
	      window.location = '/visualizer/' + response.data._id;
	    })
	    .catch(function (error) {
	      console.log(error);
	    });
	  event.preventDefault();
	}

	handleIconChange(icon,key){
		var icons = this.state.shapes;
		icons[key] = icon;
		this.setState({shapes:icons});
	}

	handleColorChange(color,key){
		var colorss = this.state.colors;
		var rgb = 'rgb('+color.rgb.r+','+color.rgb.g+','+color.rgb.b+')';
		console.log(color);
		colorss[key] = rgb;
		this.setState({colors:colorss});
	}


	render(){
		return(
			<div>
				<h1> Visualizer </h1>
				<h2> Editor </h2>
				
					<div className="edit-grid">
						<h3> Shapes </h3>
						<div className="shapes-boxes">
							<IconPick ref="q" className="q" iconKey="q" changeIcon={this.handleIconChange} />
							<IconPick ref="w" className="w" iconKey="w" changeIcon={this.handleIconChange} />
							<IconPick ref="e" className="e" iconKey="e" changeIcon={this.handleIconChange} />
							<IconPick ref="r" className="r" iconKey="r" changeIcon={this.handleIconChange} />
							<IconPick ref="t" className="t" iconKey="t" changeIcon={this.handleIconChange} />
							<IconPick ref="y" className="y" iconKey="y" changeIcon={this.handleIconChange} />
							<IconPick ref="u" className="u" iconKey="u" changeIcon={this.handleIconChange} />
							<IconPick ref="i" className="i" iconKey="i" changeIcon={this.handleIconChange} />
							<IconPick ref="o" className="o" iconKey="o" changeIcon={this.handleIconChange} />
							<IconPick ref="p" className="p" iconKey="p" changeIcon={this.handleIconChange} />
						</div>
							<ul>
								<li>Q</li>	
								<li>W</li>	
								<li>E</li>	
								<li>R</li>	
								<li>T</li>	
								<li>Y</li>	
								<li>U</li>	
								<li>I</li>	
								<li>O</li>
								<li>P</li>	
							</ul>
						<h3> Transitions & Effects </h3>
							<p> None Editable. Check demo Visualizer To see them.</p>
							<ul>
								<li>A</li>	
								<li>S</li>	
								<li>D</li>	
								<li>F</li>	
								<li>G</li>	
								<li>H</li>	
								<li>J</li>
								<li>K</li>
								<li>L</li>		
							</ul>
						<h3> Colors </h3>
							<div className="color-boxes">
								<ColPick ref="z" className="z" colorKey="z"	changeCol={this.handleColorChange}/>
								<ColPick ref="x" className="x" colorKey="x" changeCol={this.handleColorChange}/>
								<ColPick ref="c" className="c" colorKey="c" changeCol={this.handleColorChange}/>	
								<ColPick ref="v" className="v" colorKey="v" changeCol={this.handleColorChange}/>	
								<ColPick ref="b" className="b" colorKey="b"	changeCol={this.handleColorChange}/>	
								<ColPick ref="n" className="n" colorKey="n" changeCol={this.handleColorChange}/>	
								<ColPick ref="m" className="m" colorKey="m" changeCol={this.handleColorChange}/>		
							</div>
							<ul>
								<li>Z</li>	
								<li>X</li>	
								<li>C</li>	
								<li>V</li>	
								<li>B</li>	
								<li>N</li>	
								<li>M</li>		
							</ul>

						<h3> Title </h3>
							<input className="title" placeholder="title" type="text" ref="space" value={this.state.value} onChange={this.handleChange}/>
							<br/>
							<ul>
								<li>Space Bar</li>
							</ul>			
					</div>
					<div className='aling'>
						<button className="bttn" type="submit"   onClick={this.handleSubmit}> Finalize </button>
					</div>
					<br/>
					<div className='aling'>
					<div className="ho">To Go Home In The Visualizer Hit TAB</div>
					</div>
			</div>
		)
	}
}



export default Editor;