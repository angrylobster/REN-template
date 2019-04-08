import React, { Component } from 'react';
import './App.css';

class App extends Component {

	constructor(){
		super();
		this.state = {
			someState: null,
		}
	}

	componentDidMount(){
		fetch('/somenonsense')
		.then(res => {
			return res.json();
		})
		.then(json => {
			this.setState({
				someState: json[0]
			})
		})
	}

	render() {
		return (
			<div>
				{JSON.stringify(this.state.someState)}
			</div>
		);
	}
}

export default App;
