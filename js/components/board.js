import React from 'react';
import ReactDOM from 'react-dom';
import ListContainer from './list-container';


export default function Board(props) {
	
	let listData = props.lists;
	let listOfLists = listData.map(list =>{
		return (
			<ListContainer title={list} />
			)
	});
	return (
		<div className="board-list">
			<h1>{props.title}</h1>
			{listOfLists}
		</div>
	);
}

