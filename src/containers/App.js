import React, {Component} from 'react';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({searchfield : event.target.value});
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then( response => response.json())
		.then(users => this.setState({robots: users}));
		
	}

	render(){
		const {robots, searchfield} = this.state;
		const filtRobots = robots.filter( r => {
			return r.name.toLowerCase()
					.includes(searchfield.toLowerCase());
		});
		return !robots.length ?
			 <h1>Loading...</h1> :
				( 
					<div className="tc">
						<h1 className="f1">Robot Friends</h1>
						<SearchBox searchChange={this.onSearchChange} />
						<Scroll>
							<CardList robots={filtRobots} />
						</Scroll>
					</div>
				);
	}
	
}

export default App;