import {ActionCodes} from './constants.js'

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
    example: 99
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case 'EXAMPLE':
            return {
                ...state,
                example: 101
            }
        case ActionCodes.GAME_START:
            return {
                ...state,
                hasGameStarted: true,
                isGamePaused: false
            }
        default:
            return state;
    }
}

export default reducers;