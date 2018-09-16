import {ActionCodes} from '../reducers/constants.js'

export const downAction = () => {
    {
        type: ActionCodes.DOWN
    }
}

export const rotateAction = () => {
    {
        type: ActionCodes.ROTATE
        // TODO: target rotation
    }
}

export const leftAction = () => {
    {
        type: ActionCodes.LEFT
    }
}

export const rightAction = () => {
    {
        type: ActionCodes.RIGHT
    }
}
export const dropAction = () => {
    {
        type: ActionCodes.DROP
    }
}

export const spawnAction = () => {
    {
        type: ActionCodes.SPAWN
        // TODO: shape
    }
}

export const popAction = () => {
    {
        type: ActionCodes.POP
        // TODO: row indices
    }
}

export const gameStartAction = () => (
    {
        type: ActionCodes.GAME_START
    }
)

export const gameOverAction = () => {
    {
        type: ActionCodes.GAME_OVER
    }
}

export const pauseAction = () => (
    {
        type: ActionCodes.PAUSE
    }
)