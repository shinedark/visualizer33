import React from 'react';
import keydown, {Keys} from 'react-keydown';
import '../shapes.css';



const{ Q,W,E,R,T,Y,U,I,O,P  } = Keys;

class Shapes extends React.Component {

	constructor(props){
		super(props);
		this.state = {
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

	  				}
				};
	}

	componentWillMount(){
		if(this.props.shapes){
			this.setState({shapes:this.props.shapes});
		}
	}


	@keydown(Q,W,E,R,T,Y,U,I,O,P)
		submit(event){
			event.preventDefault();
			var key = event.key;
			console.log(key);
			var shapes = {
				'q':'shape-1',
				'w':'shape-2',
				'e':'shape-3',
				'r':'shape-4',
				't':'shape-5',
				'y':'shape-6',
				'u':'shape-7',
				'i':'shape-8',
				'o':'shape-9',
				'p':'shape-10',
			};

			var r = Math.floor((Math.random() * 255) + 1);
			var g = Math.floor((Math.random() * 255) + 1);
			var b = Math.floor((Math.random() * 255) + 1);

			var shape = document.getElementsByClassName(shapes[key])[0];
			shape.classList.add('show');
			var left = Math.floor((Math.random() * screen.availWidth) + 1);
			var top = Math.floor((Math.random() * screen.availHeight) + 1);
			shape.style.left = left + 'px';
			shape.style.top = top + 'px';
			shape.style.color = 'rgb('+r+','+g+','+b+')';

			setTimeout(function(){
				shape.classList.remove('show');
			},750);
		}
	

	render(){
		return(
			<div className="shapeParent " onKeyDown={(e) => this.onKeyDown(e)}>
			
			 		<div aria-hidden="true" className={"shape-1 fa " +this.props.shapes.q + " fa-5x"}></div>
			 		<div aria-hidden="true" className={"shape-2 fa " +this.props.shapes.w + " fa-5x"}></div>
			 		<div aria-hidden="true" className={"shape-3 fa " +this.props.shapes.e + " fa-5x"}></div>
			 		<div aria-hidden="true" className={"shape-4 fa " +this.props.shapes.r + " fa-5x"}></div>
			 		<div aria-hidden="true" className={"shape-5 fa " +this.props.shapes.t + " fa-5x"}></div>
			 		<div aria-hidden="true" className={"shape-6 fa " +this.props.shapes.y +" fa-5x"}></div>
			 		<div aria-hidden="true" className={"shape-7 fa " +this.props.shapes.u + " fa-5x"}></div>
			 		<div aria-hidden="true" className={"shape-8 fa " +this.props.shapes.i + " fa-5x"}></div>
			 		<div aria-hidden="true" className={"shape-9 fa " +this.props.shapes.o + " fa-5x"}></div>
			 		<div aria-hidden="true" className={"shape-10 fa " +this.props.shapes.p + " fa-5x"}></div>
			 	
			</div>

		);
	}

	
}

export default Shapes;