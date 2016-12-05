require('babel-polyfill');

import React from 'react';
import ReactDOM  from 'react-dom';

import Board from './components/board';

const input = [
				{title: "Allen's List", listCards:["Go to Costco", "Do homework", "Get 8 hours of sleep"]}, 
				{title: "Theresa's List", listCards:["Do homework", "Keep children alive", "Get partner to make cookies"]},
				{title: "Chris' List", listCards:["Get colorful shirt", "Get new glasses", "Buy hi-def camera"]}
				];

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Board title='My Board' lists={input} />, document.getElementById('app'))
);

