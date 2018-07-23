import React from 'react';

export default class GuessInput extends React.Component {
    onSubmit(event) {
        event.preventDefault();
        const guess = this.textInput.value.trim();
        this.props.onGuess(guess);
        this.textInput.value = ''
    }
    render() {
        return (
            <div>
                <form id="formGuess" onSubmit={e => this.onSubmit(e)}>
                    <input type="number" 
                    autoFocus 
                    disabled={this.props.isDisabled} 
                    autoComplete="off" 
                    name="guessInput"
                    id="guessInput"
                    className="text" 
                    ref={input => this.textInput = input} 
                    required />
                    <button type='submit' name='submit' />
                </form>
            </div>
        )
    }
}