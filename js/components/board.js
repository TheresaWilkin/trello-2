import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';

export default function Board(props) {
	return (
		<div className="board-list">
			<List />
			<List />
			<List />
		</div>
	);

}