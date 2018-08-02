import {hotColdReducer} from './index';
import {setFeedback, setGameOver, setGuessHistory} from '../actions';

describe('holdColdReducer', () => {
    it('should set feedback', () => {
        let state = {
            inputDisabled: false,
            gameStatus: 'Make a Guess:',
            guessOutput: '', 
            guessHistory: [],
            guessIteration: 1,
            answerToGuess: 15, 
            userCurrentGuess: undefined
        };
        let guessOutput = "You are cold";
        
        state = hotColdReducer(state, setFeedback(guessOutput));
        expect(state).toEqual( {
            inputDisabled: false,
            gameStatus: 'Make a Guess:',
            guessOutput: guessOutput, //TESTING HERE
            guessHistory: [],
            guessIteration: 1,
            answerToGuess: 15, 
            userCurrentGuess: undefined
        });
    });
    it('should set Game Over', () => {
        let state = {
            inputDisabled: false,
            gameStatus: 'Make a Guess:',
            guessOutput: '', 
            guessHistory: [],
            guessIteration: 1,
            answerToGuess: 15, 
            userCurrentGuess: undefined
        };
        let guessOutput = "You won. The number was 15";
        let gameStatus = "Click here to begin";
        let inputDisabled = true;
        state = hotColdReducer(state, setGameOver(guessOutput, gameStatus, inputDisabled));
        expect(state).toEqual( {
            guessOutput: guessOutput,       //Testing Here
            gameStatus: gameStatus,         //Testing Here
            inputDisabled: inputDisabled,   //Testing Here
            guessHistory: [],
            guessIteration: 1,
            answerToGuess: 15, 
            userCurrentGuess: undefined
        });
    });
    it('should set Advance the Guess History', () => {
        let state = {
            inputDisabled: false,
            gameStatus: 'Make a Guess:',
            guessOutput: '', 
            guessHistory: [],
            guessIteration: 1,
            answerToGuess: 15, 
            userCurrentGuess: undefined
        };
        let guessIteration = 2;
        let userCurrentGuess = "12";
        let guessHistory = ["12"];
        let guessOutput = 'You are hot'
        state = hotColdReducer(state, setGuessHistory(userCurrentGuess, guessOutput));
        expect(state).toEqual( {
            guessOutput: guessOutput,       //Testing Here
            gameStatus: 'Make a Guess:',         
            inputDisabled: false,  
            guessHistory: guessHistory,     //Testing Here
            guessIteration: guessIteration, //Testing Here
            answerToGuess: 15, 
            userCurrentGuess: userCurrentGuess //Testing Here
        });
    });
});

// const initialState = {
//     inputDisabled: false,
//     gameStatus: 'Make a Guess:',
//     guessOutput: '', //hot cold, warm
//     guessHistory: [],
//     guessIteration: 1,
//     answerToGuess: Math.floor(Math.random() * 100), //follow-up - can I call a function during the constructor
//     userCurrentGuess: undefined
// };

// export const hotColdReducer = (state = initialState, action) => {
//         if (action.type === actions.SET_GAME_OVER) {
//             return Object.assign({}, state, {
//                 guessOutput: action.guessOutput,
//                 gameStatus: action.gameStatus,
//                 inputDisabled: action.inputDisabled
//             });
//         }
//         else {
//             if (action.type === actions.SET_FEEDBACK) {
//                 return Object.assign({}, state, {
//                     guessOutput: action.guessOutput
//                 });
//             }
//             else {
//                 if (action.type === actions.SET_GUESS_HISTORY) {
//                     return Object.assign({}, state, {
//                         guessIteration: state.guessIteration + 1,
//                         userCurrentGuess: action.userCurrentGuess,
//                         guessHistory: [...state.guessHistory, action.userCurrentGuess],
//                         guessOutput: action.guessOutput
//                     });
//                 }
//             }
//         }
    
//     return state;
// };