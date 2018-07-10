import React from 'react';
//follow up: other funcs need a class?
export default class GuessHistory extends React.Component {
    constructor(props) {
        super(props);
    }
    formatGuesses(guesses) {
        return guesses.map((item, index) => {
            return <div key={index}>{item}</div>;
        });
    }
    render() {
        return (
            <div>{this.formatGuesses(this.props.guessHistory)}</div>
        );
    }
}