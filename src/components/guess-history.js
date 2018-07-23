import React from 'react';
import './guess-history.css';

//follow up: other funcs need a class?
export default class GuessHistory extends React.Component {

    formatGuesses(guesses) {
        return guesses.map((item, index) => {
            return <div key={index}>{item}</div>;
        });
    }
    render() {
        return (
            <div className="guessHistory">{this.formatGuesses(this.props.guessHistory)}</div>
        );
    }
}