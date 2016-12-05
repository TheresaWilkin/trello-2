import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';


//in Board, provide (each) List with a prop.title and a prop.cards
//<List title="Listy"
//	cards="["blah", "blah2", "blah3"]" />
//MAP cards!!!!
//prop.cards.map({return <Card text=${card entered} />})

export default function List(props) {
	let cardsData = props.cards;
	// console.log(props.cards);
	let cardsList = cardsData.map(card =>{
		return (
			<Card text={card} />
		);
	});
	// console.log(cardsList);
	return (
		<div className="card-list">
			<h3>{props.title}</h3>
			{cardsList}
		</div>
	);
}