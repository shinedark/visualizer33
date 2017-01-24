import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Match} from 'react-router';
import App from './App';
import Visualizer from './components/visualizer';
import Editor from './components/editor';
import './index.css';

class Root extends Component {
	render() {
		return (
			<BrowserRouter >
				<div>
					<Match exactly pattern="/" component={App} />
					<Match exactly pattern="/visualizerdemo" component={Visualizer} />
					<Match exactly pattern="/editor" component={Editor} />
					<Match pattern="/visualizer/:id" component={Visualizer} />
					
				</div>

			</BrowserRouter>
		);
	}
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);