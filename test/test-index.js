/*jshint esversion: 6 */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

import Card from '../js/components/card';
import List from '../js/components/list';
import ListContainer from '../js/components/list-container';
import Board from '../js/components/board';

const should = chai.should();

describe('Card component', function() {
	it('Renders a card', function() {

		const text = "I am a card";

		const renderer = TestUtils.createRenderer();
		renderer.render(<Card text={text} />);
		const result = renderer.getRenderOutput();

		result.props.className.should.equal("card");
		result.type.should.equal("div");
		result.props.children.should.equal(text);

	});
});

describe('List Component', function() {
	it('Renders list of cards', function(){
		//Props

		const onChange = function() {};
		const onSubmit = function() {};

		const title = 'Star Wars';
		const text = 'Luke I am your father!';
		const cards = ["I am a card", "I am not the drone you're looking for"];


		const renderer = TestUtils.createRenderer();
		renderer.render(<List onChange={onChange} onSubmit={onSubmit} title={title} text={text} cards={cards} />);
		const result = renderer.getRenderOutput()

		result.props.className.should.equal('card-list');
		result.type.should.equal('div');
		result.props.children.length.should.equal(3);

		const h3 = result.props.children[0];
		h3.type.should.equal('h3')
		h3.props.children.should.equal(title);

		const cardsList = result.props.children[1];
		cardsList.length.should.equal(2);
		cardsList[0].props.text.should.equal(cards[0]);
		cardsList[1].props.text.should.equal(cards[1]);

		const form = result.props.children[2];
		form.type.should.equal("form");
		const formChildren = form.props.children;
		formChildren.length.should.equal(2);

		const input = formChildren[0];
		input.type.should.equal("input");
		input.props.type.should.equal("text");
		input.props.onChange.should.equal(onChange);
		input.props.value.should.equal(text);

		const button = formChildren[1];
		button.type.should.equal("button");
		button.props.type.should.equal("submit");
		button.props.children.should.equal("Submit");
	});
});

describe('List Container Component', function() {
	it('Renders a list container', function() {
		const title = 'Star Wars';

		const renderer = TestUtils.createRenderer();
		renderer.render(<ListContainer title={title} />);
		const result = renderer.getRenderOutput()

		result.type.should.equal("div");
		result.props.className.should.equal("list-container");
		result.props.children.type.should.equal(List);

		const list = result.props.children;

		list.props.title.should.equal(title);
		list.props.cards.length.should.equal(0);
		list.props.text.should.equal("");

		list.props.onSubmit.should.not.equal(null);
		list.props.onChange.should.not.equal(null);
	});
});

describe('Board component', function(){
	it('Render board that has title and list of lists', function(){
		const title = 'Star Wars 2';
		const lists = ['cat', 'dog'];

		const renderer = TestUtils.createRenderer();
		renderer.render(<Board title={title} lists={lists}/>);
		const result = renderer.getRenderOutput();

		result.type.should.equal("div");
		result.props.className.should.equal("board-list");

		const boardList = result.props.children;
		boardList.length.should.equal(2);
		boardList[0].type.should.equal('h1');
		boardList[0].props.children.should.equal(title);

		const listOfLists = boardList[1];
		listOfLists.length.should.equal(2);
		listOfLists[0].props.title.should.equal(lists[0]);
		listOfLists[1].props.title.should.equal(lists[1]);
	})
})
