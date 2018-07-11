import React from 'react';

import GameStatus from './game-status'
import GuessInput from './guess-input'
import GuessHistory from './guess-history'

export default class HotCold extends React.Component {

    constructor() {
        super();
        this.state =
            {
                inputDisabled: false,
                gameStatus: 'Make a Guess:',
                guessOutput: '', //hot cold, warm
                guessHistory: [],
                guessIteration: 1,
                answerToGuess: undefined, //follow-up - can I call a function during the constructor
                userCurrentGuess: '',
            }
        this.winMessage = `You Won in ____guesses_____ guesses!` //how do we share constants?
        this.newGameMessage = 'Click New Game to begin a new game.';
    }
    componentDidMount() {
        this.setAnswerToGuess();
    }
    setAnswerToGuess() {
        this.setState({ answerToGuess: Math.floor(Math.random() * 100) })
    }
    setGameOver() { //endGame was reserved
        this.setState({ guessOutput: `The number was ${this.state.answerToGuess}. ` + this.winMessage.replace('____guesses_____', this.state.guessIteration), 
        gameStatus: this.newGameMessage, 
        inputDisabled: true })
    }
    isSolution(guess) { //follow-up comparing state and paramater
        return (guess == this.state.answerToGuess);
    }
    isAlreadyGuessed(guess) {
        return this.state.guessHistory.includes(guess)
    }
    handleFeedback(guess) {
        let guessDiff = Math.abs(this.state.answerToGuess - guess);
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
    onGuess(guess) {
        if (this.isSolution(guess)) {
            this.setGameOver();
        }
        else {
            if (this.isAlreadyGuessed(guess)) {
                let feedback = 'Already guessed';
                this.setState({ guessOutput: feedback });
                return false;
            };

            const guesses = this.state.guessHistory;
            guesses.push(guess);

            let feedback = this.handleFeedback(guess);

            //set guesses and add to counter
            this.setState({
                userCurrentGuess: 'Previous Guess: ' + guess,
                guessHistory: guesses,
                guessIteration: this.state.guessIteration + 1,
                guessOutput: `You are ${feedback}`
            })
        }
    }
    render() {
        return (
            <div> 
                <div hidden>Answer: {this.state.answerToGuess}</div>
               
                <div className="guessOutput">{this.state.guessOutput}</div>
                <GameStatus gameStatus={this.state.gameStatus} />
                <GuessInput isDisabled={this.state.inputDisabled} onGuess={guess => this.onGuess(guess)} />
                <GuessHistory guessHistory={this.state.guessHistory} />
            </div>
        )
    }
}