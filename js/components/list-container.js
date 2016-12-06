import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';

export default class ListContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			text: "",
			cards: []
		};
		this.onAddInputChanged = this.onAddInputChanged.bind(this);
		this.onAddSubmit = this.onAddSubmit.bind(this);
	}

	onAddInputChanged(event) {
		this.setState({text: event.target.value});
	}

	onAddSubmit(event) {
		event.preventDefault();
		var newCards = this.state.cards.slice();    
		newCards.push(this.state.text);   
		this.setState({cards:newCards});
		this.setState({text:""});

	}

	render() {
		return (
			<div className="list-container">
				<List title={this.props.title} onSubmit={this.onAddSubmit} onChange={this.onAddInputChanged} cards={this.state.cards} text={this.state.text}/>
			</div>
			);
	}
}

