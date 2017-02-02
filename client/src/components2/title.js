import React from 'react';
import keydown, {Keys} from 'react-keydown';
import  '../App.css';

const{ SPACE } = Keys;

class Name extends React.Component {

	constructor(props){
		super(props);
		this.state = {title:'Shine Dark'};
	}

	componentWillMount(){
		if(this.props.title){
			this.setState({title:this.props.title});
		}
	}

	@keydown(SPACE)
		submit(event){
			event.preventDefault();
			var key = event.key;
			console.log(key);
			var titleEl = document.getElementsByClassName('title')[0];
			titleEl.classList.add('show');
			setTimeout(function(){
				titleEl.classList.remove('show');
			},750);
		}
	

	render(){
		return(
			<div className="Tparent" onKeyDown={(e) => this.onKeyDown(e)}>
			 	
			 		<h1 className="title">{this.props.title}</h1>
			</div>

		);
	}

	
}

export default Name;
