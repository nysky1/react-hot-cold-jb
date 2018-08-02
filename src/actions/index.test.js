import {SET_GAME_OVER, setGameOver, SET_FEEDBACK, setFeedback, SET_GUESS_HISTORY, setGuessHistory} from './index';

describe('setFeedback', () => {
    it('Should return the action', () => {
        const guessOutput = 'You won';
        const action = setFeedback(guessOutput);
        expect(action.type).toEqual(SET_FEEDBACK);
        expect(action.guessOutput).toEqual(guessOutput);
    });
});
describe('setGameOver', () => {
    it('Should return the action', () => {
        const guessOutput = 'The number was 15';
        const gameStatus = 'Click here to begin a new game';
        const inputDisabled = 'true';
        const action = setGameOver(guessOutput,gameStatus,inputDisabled);
        expect(action.type).toEqual(SET_GAME_OVER);
        expect(action.guessOutput).toEqual(guessOutput);
        expect(action.gameStatus).toEqual(gameStatus);
        expect(action.inputDisabled).toEqual(inputDisabled);
    });
});
describe('setGuessHistory', () => {
    it('Should return the action', () => {
        const userCurrentGuess = '15';
        const guessOutput = 'You are Hot';
        const action = setGuessHistory(userCurrentGuess,guessOutput);
        expect(action.type).toEqual(SET_GUESS_HISTORY);
        expect(action.userCurrentGuess).toEqual(userCurrentGuess);
        expect(action.guessOutput).toEqual(guessOutput);
    });
});