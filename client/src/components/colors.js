import React from 'react';
import keydown, {Keys} from 'react-keydown';
import '../col.css';

const{ Z,X,C,V,B,N,M  } = Keys;

class Colors extends React.Component {

	constructor(props){
		super(props);
		this.state = {
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
	}

	componentWillMount(){
		
		if(this.props.colors){
			this.setState({colors:this.props.colors});
		}
	}

	@keydown(Z,X,C,V,B,N,M)
		submit(event){
			event.preventDefault();
			var key = event.key;
			console.log(key);
			// var colors = {
			// 	'z': 'black',
			// 	'x':'honeydew',
			// 	'c':'lightblue',
			// 	'v':'lightgrey',
			// 	'b':'lightsteelblue',
			// 	'n':'gold',
			// 	'm':'aqua'
			// };
			document.getElementsByClassName('col1')[0].style.backgroundColor = this.props.colors[key];
		}
	

	render(){
		return(
			<div className="parent" onKeyDown={(e) => this.onKeyDown(e)}>
			 	<div className="col1 show" >
			 		
			 		
			 	</div>
			</div>

		);
	}

	
}

export default Colors;