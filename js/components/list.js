import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';




class List extends React.Component {

	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit() => {
		event.preventDefault();
		console.log("running");
		// props.onAddSubmit();
	}

	cardsData = props.cards;
	cardsList = cardsData.map(card =>{
		return (
			<Card text={card} />
		);
	});
	render() {
		<div className="card-list">
			<h3>{props.title}</h3>
			{cardsList}
			<form>
			<input type="text" onChange={props.onAddInputChanged} />
			<button type="Submit" onSubmit={event.preventDefault}/>
			</form>
		</div>
	};
}