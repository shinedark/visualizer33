import React from 'react';
import keydown, {Keys} from 'react-keydown';
import  '../App.css';

const{ TAB } = Keys;

class Home extends React.Component {



	@keydown(TAB)
		submit(event){
			event.preventDefault();
			var key = event.key;
			console.log(key);
			window.location = '/'
		}
	

	render(){
		return(
			<div className="Tparent" onKeyDown={(e) => this.onKeyDown(e)}>
			 

			</div>

		);
	}

	
}

export default Home;