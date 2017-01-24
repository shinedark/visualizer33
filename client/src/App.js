import React from 'react';
import { Link }  from 'react-router';
import VisualDisplay from './VisualDisplay';
import './App.css';

const App = React.createClass({

  render: function () {
    return (
      <div className='App'>
        <h1>Visualizer</h1>
        <div>
          <Link to="/editor" className='new-visualizer-btn'>New Visualizer</Link>
            <VisualDisplay/>
        </div>
      </div>
    );
  },
});

export default App;
