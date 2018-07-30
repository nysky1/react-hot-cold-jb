import React from 'react';
import {connect} from 'react-redux';

import GameStatus from './game-status'
import GuessInput from './guess-input'
import GuessHistory from './guess-history'

import {setGameOver,setFeedback,setGuessHistory} from '../actions'

var winMessage = `You Won in ____guesses_____ guesses!` //how do we share constants?
var newGameMessage = 'Click New Game to begin a new game.';

export class HotCold extends React.Component {

    setGameOver() { //endGame was reserved
        let guessOutput = `The number was ${this.props.answerToGuess}. ` + winMessage.replace('____guesses_____', this.props.guessIteration);
        this.props.dispatch(setGameOver(
            guessOutput, newGameMessage, true
        ));
    }
    setGuessHistory(userCurrentGuess,guessOutput) {
        this.props.dispatch(setGuessHistory(userCurrentGuess,guessOutput));
    }
    isSolution(guess) { //follow-up comparing state and paramater
        return (guess == this.props.answerToGuess);
    }
    isAlreadyGuessed(guess) {
        return this.props.guessHistory.includes(guess)
    }
    handleFeedback(guess) {
        let guessDiff = Math.abs(this.props.answerToGuess - guess);
        if (guessDiff < 5) {
            return "Very hot";
        } else
            if (guessDiff < 10) {
                return "Hot";
            } else
                if (guessDiff < 20) {
                    return "Warm";
                } else {
                    return "Cold";
                }
    }
    setFeedback(feedback) {
        this.props.dispatch(setFeedback(feedback));
    }
    onGuess(guess) {
        if (this.isSolution(guess)) {
            this.setGameOver();
        }
        else {
            if (this.isAlreadyGuessed(guess)) {
                let feedback = 'Already guessed';
                this.setFeedback(feedback);
                return false;
            };

            let feedback = this.handleFeedback(guess);

            //set guesses and add to counter
            this.setGuessHistory(guess,`You are ${feedback}`);
        }
    }
    render() {
        return (
            <div> 
                <div hidden>Answer: {this.props.answerToGuess}</div>
               
                <div className="guessOutput">{this.props.guessOutput}</div>
                <GameStatus gameStatus={this.props.gameStatus} />
                <GuessInput isDisabled={this.props.inputDisabled} onGuess={guess => this.onGuess(guess)} />
                <GuessHistory guessHistory={this.props.guessHistory} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    inputDisabled: state.inputDisabled,
    gameStatus: state.gameStatus,
    guessOutput: state.guessOutput,
    guessHistory: state.guessHistory,
    guessIteration: state.guessIteration,
    answerToGuess: state.answerToGuess, //follow-up - can I call a function during the constructor
    userCurrentGuess: state.userCurrentGuess
});

export default connect(mapStateToProps)(HotCold);