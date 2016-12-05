import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';



const listCards = ["blah", "blah2", "blah3"];

export default function Board(props) {
	return (
		<div className="board-list">
			<List title="Listy" cards={listCards} />
		</div>
	);

}