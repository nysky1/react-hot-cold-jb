
export const SET_GAME_OVER = 'SET_GAME_OVER';
export const setGameOver = (guessOutput,gameStatus,inputDisabled) => ({
    type: SET_GAME_OVER,
    guessOutput,
    gameStatus,
    inputDisabled
});
export const SET_FEEDBACK = 'SET_FEEDBACK';
export const setFeedback = guessOutput => ({
    type: SET_FEEDBACK,
    guessOutput
});
export const SET_GUESS_HISTORY = 'SET_GUESS_HISTORY';
export const setGuessHistory = (userCurrentGuess,guessOutput) => ({
    type: SET_GUESS_HISTORY,
    userCurrentGuess,
    guessOutput
});