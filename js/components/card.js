/*jshint esversion: 6 */
import React from 'react';
import ReactDOM from 'react-dom';

export default function Card(props) {
	return (
		<div className="card">{props.text}</div>
		);
}
