import React from 'react';
import { Link }  from 'react-router';
import axios from 'axios';
import './App.css';

class VisualDisplay extends React.Component {

  constructor(props){
  	super(props);
  	this.state = {
  		'visualizers':[]
  	};

  	let self = this;

  	axios.get('http://localhost:3001/api/visualizers')
  	  .then(function (response) {
  	    console.log(response);
  	    self.setState({visualizers:response.data});
  	  })
  	  .catch(function (error) {
  	    console.log(error);
  	  });
  	// fetch api call to '/api/visualizer/'+this.params.id
  }

  render(){

  	var visualizers = [];
  	this.state.visualizers.forEach(function(visualizer, i){
  	  visualizers.push(<Link to={"/visualizer/" + visualizer._id} key={"visualizer-"+ i } ><div className="visualizer-item" style={{backgroundColor:visualizer.colors.z}}  > <span>{visualizer.title}</span> </div></Link>);
  	});

	  return (
	    <div className="hello">
	    	<hr/>
	      <h3>Existing Visualizers:</h3>
	        <div className="links">
	        	{visualizers}
	        </div>
	    </div>
	  );
	}
}


export default VisualDisplay;

