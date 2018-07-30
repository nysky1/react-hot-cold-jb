import * as actions from '../actions';

const initialState = {
    inputDisabled: false,
    gameStatus: 'Make a Guess:',
    guessOutput: '', //hot cold, warm
    guessHistory: [],
    guessIteration: 1,
    answerToGuess: Math.floor(Math.random() * 100), //follow-up - can I call a function during the constructor
    userCurrentGuess: undefined
};

export const hotColdReducer = (state = initialState, action) => {
        if (action.type === actions.SET_GAME_OVER) {
            return Object.assign({}, state, {
                guessOutput: action.guessOutput,
                gameStatus: action.gameStatus,
                inputDisabled: action.inputDisabled
            });
        }
        else {
            if (action.type === actions.SET_FEEDBACK) {
                return Object.assign({}, state, {
                    guessOutput: action.guessOutput
                });
            }
            else {
                if (action.type === actions.SET_GUESS_HISTORY) {
                    return Object.assign({}, state, {
                        guessIteration: state.guessIteration + 1,
                        userCurrentGuess: action.userCurrentGuess,
                        guessHistory: [...state.guessHistory, action.userCurrentGuess],
                        guessOutput: action.guessOutput
                    });
                }
            }
        }
    
    return state;
};