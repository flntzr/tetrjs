import {ActionCodes} from '../actions/Constants.jsx'

const initialState = {
    grid: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    activeShape: {
        num: -1,
        posX: 3,
        posY: 0,
        rotation: 0
    },
    nextShapeNum: 0,
    score: 0,
    level: 0,
    hasGameStarted: false,
    isGamePaused: false,
}

// DOWN: 0,
// ROTATE: 1,
// LEFT: 2,
// RIGHT: 3,
// DROP: 4,
// SPAWN: 5,
// POP: 6,
// GAME_START: 7,
// GAME_OVER: 8,
// PAUSE: 9

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case ActionCodes.DOWN:
            return downReducer(state);
        case ActionCodes.ROTATE:
            return rotateReducer(state);
        case ActionCodes.LEFT:
            return leftReducer(state);
        case ActionCodes.RIGHT:
            return rightReducer(state);
        case ActionCodes.DROP:
            return dropReducer(state);
        case ActionCodes.SPAWN:
            return spawnReducer(state);
        case ActionCodes.POP:
            return popReducer(state);
        case ActionCodes.GAME_START:
            return gameStartReducer(state);
        case ActionCodes.GAME_OVER:
            return gameOverReducer(state);
        case ActionCodes.PAUSE:
            return pauseReducer(state);
        default:
            return state;
    }
}

const downReducer = (state) => {
    return {
        ...state,
    }
}
const rotateReducer = (state) => {
    return {
        ...state,
    }
}
const leftReducer = (state) => {
    return {
        ...state,
    }
}
const rightReducer = (state) => {
    return {
        ...state,
    }
}
const dropReducer = (state) => {
    return {
        ...state,
    }
}
const spawnReducer = (state) => {
    return {
        ...state,
    }
}
const popReducer = (state) => {
    return {
        ...state,
    }
}
const gameStartReducer = (state) => {
    return {
        ...state,
        hasGameStarted: true,
        isGamePaused: false
    }
}
const gameOverReducer = (state) => {
    return {
        ...state,
        hasGameStarted: false,
        isGamePaused: false
    }
}
const pauseReducer = (state) => {
    return {
        ...state,
        isGamePaused: !state.isGamePaused
    }
}

export default reducers;