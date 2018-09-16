import {ActionCodes} from '../actions/Constants.jsx';
import {SHAPES, GRID_WIDTH, GRID_HEIGHT, SHAPE_SIZE} from '../components/Constants.jsx';

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

const isActiveShapeValid = (state) => {
    const grid = Object.assign([], state.grid);
    if (state.activeShape.num == -1) {
        return true;
    }
    const shapeGrid = SHAPES[state.activeShape.num][state.activeShape.rotation];
    const minX = state.activeShape.posX;
    const minY = state.activeShape.posY;
    const maxX = Math.min(state.activeShape.posX + SHAPE_SIZE, GRID_WIDTH) - 1;
    const maxY = Math.min(state.activeShape.posY + SHAPE_SIZE, GRID_HEIGHT) - 1;

    // check if existing grid blocks collide with active shape
    let isInvalid = false;
    for (let y = minY; y <= maxY; y++) {
        for (let x = minX; x <= maxX; x++) {
            isInvalid = isInvalid || (shapeGrid[(y - minY) * SHAPE_SIZE + (x - minX)] && grid[y * GRID_WIDTH + x]);
        }
    }
    
    // check if active shape overflows
    const isPixelValid = (x, y) => {
        const shapeX = x - minX;
        const shapeY = y - minY;
        return !shapeGrid[shapeY * SHAPE_SIZE + shapeX];
    }

    // overflows top
    for (let y = minY; y < 0; y++) {
        for (let x = 0; x < SHAPE_SIZE; x++) {
            isInvalid = isInvalid || !isPixelValid(x + minX, y);
        }
    }
    // overflows left
    for (let x = minX; x < 0; x++) {
        for (let y = 0; y < SHAPE_SIZE; y++) {
            isInvalid = isInvalid || !isPixelValid(x, y + minY);
        }
    }
    // overflows right
    for (let x = state.activeShape.posX + SHAPE_SIZE - 1; x >= GRID_WIDTH; x--) {
        for (let y = 0; y < SHAPE_SIZE; y++) {
            isInvalid = isInvalid || !isPixelValid(x, y + minY);
        }
    }
    // overflows bottom
    for (let y = state.activeShape.posY + SHAPE_SIZE - 1; y >= GRID_HEIGHT; y--) {
        for (let x = 0; x < SHAPE_SIZE; x++) {
            isInvalid = isInvalid || !isPixelValid(x + minX, y);
        }
    }
    return !isInvalid;
}

const downReducer = (state) => {
    const newState = {
        ...state,
        activeShape: {
            ...state.activeShape,
            posY: state.activeShape.posY + 1
        }
    }
    const isValid = isActiveShapeValid(newState);
    return isValid ? newState : state;
}

const rotateReducer = (state) => {
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