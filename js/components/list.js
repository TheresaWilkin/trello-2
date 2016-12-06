import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';

function Form(props) {
    return (<form onSubmit={props.onSubmit}>
            	<input type="text" />
            	<button type="submit">Submit</button>
            </form>);
}

export default class List extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			cards: props.cards
		};

		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(event) {
		event.preventDefault();
		console.log("on click log");
	}


	render() {
		return (
        <div className="card-list">
            <h3>{this.props.title}</h3>
            <Form onSubmit={this.onSubmit} />
        </div>
    );
	}
}



// export default class Person extends React.Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//            highlight: false
//        };
//        this.onClick = this.onClick.bind(this);
//    }

//    onClick() {
//        this.setState({
//            highlight: !this.state.highlight
//        });
//    }

//    render() {
//        const classes = `person ${this.state.highlight ? 'highlight' : ''}`;
//        return (
//            <div className={classes} onClick={this.onClick}>
//                <div className="person-name">{this.props.name}</div>
//                <img className="person-img" src={this.props.imageUrl} />
//                <div className="person-job">
//                    {this.props.job}
//                </div>
//            </div>
//        );
//    }
// }


