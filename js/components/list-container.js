import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';

export default class ListContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			text: "",
			cards: ["Dummy Data"]
		};
		this.onAddInputChanged = this.onAddInputChanged.bind(this);
		this.onAddSubmit = this.onAddSubmit.bind(this);
	}

	onAddInputChanged(event) {
		console.log("on text input changed");
	}

	onAddSubmit(event) {
		event.preventDefault();
		console.log("on submit form");
	}

	render() {
		return (
        <div className="list-container">
            <List title={this.props.title} onSubmit={this.onAddSubmit} onChange={this.onAddInputChanged} cards={this.state.cards} />
        </div>
    );
	}
}

