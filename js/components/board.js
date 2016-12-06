import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';


export default function Board(props) {

	
	
	let listData = props.lists;
	let listOfLists = listData.map(list =>{
		return (
			<List title={list.title} cards={list.listCards}/>
			)
	});
	return (
		<div className="board-list">
			<h1>{props.title}</h1>
			{listOfLists}
		</div>
	);
}

