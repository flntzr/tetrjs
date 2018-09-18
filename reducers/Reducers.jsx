import {ActionCodes} from '../actions/Constants.jsx';
import {isActiveShapeValid, lockActiveShape, getRowsToPop, popRows, getPopScore} from './ReducerUtil.jsx';

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
        num: 4,
        posX: 3,
        posY: 0,
        rotation: 0,
        down: false
    },
    nextShapeNum: 0,
    score: 0,
    level: 0,
    subLevel: 0,
    hasGameStarted: false,
    isGamePaused: false,
    gameOver: false
}

// DOWN: 0,
// ROTATE: 1,
// LEFT: 2,
// RIGHT: 3,
// DROP: 4,
// SPAWN: 5,
// LOCK: 6,
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
        case ActionCodes.LOCK:
            return lockReducer(state);
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

const goDown = (state) => {
    return {
        ...state,
        activeShape: {
            ...state.activeShape,
            posY: state.activeShape.posY + 1
        }
    }
} 

const downReducer = (state) => {
    if (!state.hasGameStarted || state.isGamePaused) {
        return state;
    }
    const newState = goDown(state);
    const isValid = isActiveShapeValid(newState);
    const validState = isValid ? newState : state;
    // check if the shape is 'down', i.e. cannot go any further down
    const isDown = !isActiveShapeValid(validState);
    validState.activeShape.down = isDown;
    return validState;
}

const rotateReducer = (state) => {
    if (!state.hasGameStarted || state.isGamePaused || state.activeShape.down) {
        return state;
    }

    const newState = {
        ...state,
        activeShape: {
            ...state.activeShape,
            rotation: (state.activeShape.rotation + 1) % 4
        }
    }
    const isValid = isActiveShapeValid(newState);
    return isValid ? newState : state;
}

const leftReducer = (state) => {
    if (!state.hasGameStarted || state.isGamePaused || state.activeShape.down) {
        return state;
    }

    const newState = {
        ...state,
        activeShape: {
            ...state.activeShape,
            posX: state.activeShape.posX - 1
        }
    }
    const isValid = isActiveShapeValid(newState);
    return isValid ? newState : state;
}

const rightReducer = (state) => {
    if (!state.hasGameStarted || state.isGamePaused || state.activeShape.down) {
        return state;
    }
    const newState = {
        ...state,
        activeShape: {
            ...state.activeShape,
            posX: state.activeShape.posX + 1
        }
    }
    const isValid = isActiveShapeValid(newState);
    return isValid ? newState : state;
}

const dropReducer = (state) => {
    if (!state.hasGameStarted || state.isGamePaused) {
        return state;
    }

    let validState = state;
    let isValid = true;
    let posY = state.activeShape.posY;
    while (isValid) {
        const newState = {
            ...state,
            activeShape: {
                ...state.activeShape,
                posY: ++posY
            }
        }
        isValid = isActiveShapeValid(newState);
        if (isValid) {
            validState = newState;
        }
    }
    validState.activeShape.down = true;
    return validState;
}

const spawnReducer = (state) => {
    let subLevel = state.subLevel + 1;
    let level = state.level;
    if (subLevel === 15) {
        subLevel = 0;
        level++;
    }
    const newState = {
        ...state,
        nextShapeNum: Math.floor((Math.random() * 7)),
        level: level,
        subLevel: subLevel,
        activeShape: {
            num: state.nextShapeNum,
            posX: 3,
            posY: 0,
            rotation: 0,
            down: false
        }
    }
    const isValid = isActiveShapeValid(newState);
    if (isValid) {
        return newState;
    } else {
        // Game over
        state.hasGameStarted = false;
        state.gameOver = true;
        return state;
    }
}

const lockReducer = (state) => {
    // lock active shape in grid
    let newGrid = lockActiveShape(state);
    // take care of popping rows if necessary
    const rowsToPop = getRowsToPop(newGrid);
    if (rowsToPop.length > 0) {
        newGrid = popRows(newGrid, rowsToPop);
    }
    const scoreAddition = getPopScore(rowsToPop.length);

    return {
        ...state,
        score: state.score + scoreAddition,
        grid: newGrid
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