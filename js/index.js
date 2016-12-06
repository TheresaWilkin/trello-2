require('babel-polyfill');

import React from 'react';
import ReactDOM  from 'react-dom';

import Board from './components/board';


//(declare stateful conainer, include state and a setState function)
const state = {
	title: "My Board",
	lists: ["Allen's List", "Theresa's List", "Chris' List"]
}


document.addEventListener('DOMContentLoaded', () => 
    ReactDOM.render(<Board title={state.title} lists={state.lists} />, document.getElementById('app'))

);

