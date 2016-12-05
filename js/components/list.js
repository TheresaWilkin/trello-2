import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';

export default function List() {
	return (
		<div className="card-list">
			<h3>List Title</h3>
			<Card text="This is a card" />
			<Card text="This is a card" />
			<Card text="This is a card" />
		</div>
		);

}