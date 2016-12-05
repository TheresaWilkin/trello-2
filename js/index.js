require('babel-polyfill');

import React from 'react';
import ReactDOM  from 'react-dom';

import Board from './components/board';

const input = [
				{title: "list1", listCards:["blah", "blah2", "blah3"]}, 
				{title: "list2", listCards:["bleh", "bleh2", "bleh3"]},
				{title: "list3", listCards:["bluh", "bluh2", "bluh3"]}
				];

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Board title='My Board' lists={input} />, document.getElementById('app'))
);

