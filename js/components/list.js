import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';

export default function List(props) {
	let cardsData = props.cards;
	let cardsList = cardsData.map(card =>{
		return (
			<Card text={card} />
		);
	});
		return (
        <div className="card-list">
            <h3>{props.title}</h3>
            {cardsList}
            <form onSubmit={props.onSubmit}>
            	<input type="text" onChange={props.onChange} />
            	<button type="submit">Submit</button>
            </form>
        </div>
    );
}

