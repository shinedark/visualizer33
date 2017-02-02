import React from 'react';
import keydown, {Keys} from 'react-keydown';
import '../background.css';

const{ 	A,S,D,F,G,H,J,K,L } = Keys;

class Backgrounds extends React.Component {

	@keydown(A,S,D,F,G,H,J,K,L)
		submit(event){
			event.preventDefault();
			var key = event.key;
			console.log(key);
			var backgrounds = {
				'a':'bg1',
				's':'bg2',
				'd':'container',
				'f':'bg4',
				'g':'container2',
				'h':'container3',
				'j':'container4',
				'k':'bg8',
				'l':'bg9'
			};
			document.getElementsByClassName(backgrounds[key])[0].classList.toggle('show');
		}
	

	render(){
		return(
			<div className="bgParent" onKeyDown={(e) => this.onKeyDown(e)}>
			 	<div className="bg1"></div>
			 	<div className="bg2"></div>
			 	<div className="container">
			 	  <div className="bg3"></div>
			 	  <div className="bg3"></div>
			 	  <div className="bg3"></div>
			 	  <div className="bg3"></div>
			 	  <div className="bg3"></div>
			 	  <div className="bg3"></div>
			 	  <div className="bg3"></div>
			 	</div>
			 	<div className="container2">
			 		<div className="row1"> 
				 	  <div className="bg5"></div>
				 	  <div className="bg5"></div>
				 	  <div className="bg5"></div>
				 	  <div className="bg5"></div>
				 	  <div className="bg5"></div>
				 	  <div className="bg5"></div>
				 	  <div className="bg5"></div>
				 	</div>
				 	<div className="row2"> 
				 	  <div className="bg5"></div>
				 	  <div className="bg5"></div>
				 	  <div className="bg5"></div>
				 	  <div className="bg5"></div>
				 	  <div className="bg5"></div>
				 	  <div className="bg5"></div>
				 	  <div className="bg5"></div>
				 	</div>
				 	<div className="row3"> 
				 	  <div className="bg5"></div>
				 	  <div className="bg5"></div>
				 	  <div className="bg5"></div>
				 	  <div className="bg5"></div>
				 	  <div className="bg5"></div>
				 	  <div className="bg5"></div>
				 	  <div className="bg5"></div>
				 	</div>
			 	</div>
			 	<div className="bg4"></div>
			 	<div className="container3">
			 		<div className="row1"> 
				 	  <div className="bg6"></div>
				 	  <div className="bg6"></div>
				 	  <div className="bg6"></div>
				 	  <div className="bg6"></div>
				 	  <div className="bg6"></div>
				 	  <div className="bg6"></div>
				 	  <div className="bg6"></div>
				 	</div>
				 	<div className="row2"> 
				 	  <div className="bg6"></div>
				 	  <div className="bg6"></div>
				 	  <div className="bg6"></div>
				 	  <div className="bg6"></div>
				 	  <div className="bg6"></div>
				 	  <div className="bg6"></div>
				 	  <div className="bg6"></div>
				 	</div>
				 	<div className="row3"> 
				 	  <div className="bg6"></div>
				 	  <div className="bg6"></div>
				 	  <div className="bg6"></div>
				 	  <div className="bg6"></div>
				 	  <div className="bg6"></div>
				 	  <div className="bg6"></div>
				 	  <div className="bg6"></div>
				 	</div>
			 	</div>
			 	<div className="container4">
			 		<div className="row1"> 
				 	  <div className="bg7"></div>
				 	  <div className="bg7"></div>
				 	  <div className="bg7"></div>
				 	  <div className="bg7"></div>
				 	  <div className="bg7"></div>
				 	  <div className="bg7"></div>
				 	  <div className="bg7"></div>
				 	</div>
			 	</div>
			 	<div className="bg8"></div>
			 	<div className="bg9"></div>
			</div>

		);
	}

	
}

export default Backgrounds;