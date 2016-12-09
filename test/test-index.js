/*jshint esversion: 6 */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import List from '../js/components/list';

const should = chai.should();

import Card from '../js/components/card';

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
	})
})
