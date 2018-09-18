import {ActionCodes} from './Constants.jsx'

export const downAction = () => (
    {
        type: ActionCodes.DOWN
    }
)

export const rotateAction = () => (
    {
        type: ActionCodes.ROTATE
    }
)

export const leftAction = () => (
    {
        type: ActionCodes.LEFT
    }
)

export const rightAction = () => (
    {
        type: ActionCodes.RIGHT
    }
)

export const dropAction = () => (
    {
        type: ActionCodes.DROP
    }
)

export const spawnAction = (shapeNum) => (
    {
        type: ActionCodes.SPAWN,
        shapeNum: shapeNum
    }
)

export const lockAction = (rowIndices) => (
    {
        type: ActionCodes.LOCK,
        rowIndices: rowIndices
    }
)

export const gameStartAction = () => (
    {
        type: ActionCodes.GAME_START
    }
)

export const gameOverAction = () => (
    {
        type: ActionCodes.GAME_OVER
    }
)

export const pauseAction = () => (
    {
        type: ActionCodes.PAUSE
    }
)