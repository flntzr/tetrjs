import {SHAPES, GRID_WIDTH, GRID_HEIGHT, SHAPE_SIZE} from '../components/Constants.jsx';

/**
 * Returns if the active shape is valid in combination with the grid. 
 * More specifically it checks for collisions and overflows on any side of the grid.
 * @param {*} state 
 */
export const isActiveShapeValid = (state) => {
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

/**
 * Locks the active shape in the grid. Returns the resulting grid.
 * @param {*} state 
 */
export const lockActiveShape = (state) => {
    const grid = Object.assign([], state.grid);
    const shapeGrid = SHAPES[state.activeShape.num][state.activeShape.rotation];
    const minX = state.activeShape.posX;
    const minY = state.activeShape.posY;
    const maxX = Math.min(state.activeShape.posX + SHAPE_SIZE, GRID_WIDTH) - 1;
    const maxY = Math.min(state.activeShape.posY + SHAPE_SIZE, GRID_HEIGHT) - 1;
    for (let y = minY; y <= maxY; y++) {
        for (let x = minX; x <= maxX; x++) {
            grid[y * GRID_WIDTH + x] = shapeGrid[(y - minY) * SHAPE_SIZE + (x - minX)] || grid[y * GRID_WIDTH + x];
        }
    }
    return grid;
}

/**
 * Gets an array containing the indices of rows ready to be popped.
 * @param {number[]} grid 
 */
export const getRowsToPop = (grid) => {
    const rowIndices = [];
    for (let y = 0; y < GRID_HEIGHT; y++) {
        let popRow = true;
        for (let x = 0; x < GRID_WIDTH; x++) {
            popRow = popRow && grid[y * GRID_WIDTH + x];
        }
        if (popRow) {
            rowIndices.push(y);
        }
    }
    return rowIndices;
}

/**
 * Pop the rows at the rowIndices. Returns the modified grid.
 * @param {number[]} grid 
 * @param {number[]} rowIndices 
 */
export const popRows = (grid, rowIndices) => {
    let newGrid = Object.assign([], grid);
    // sort rowIndices in descending order so we always slice from the end and the index stays correct
    rowIndices = rowIndices.sort((i1,i2) => i1 < i2);
    for (const i of rowIndices) {
        const slicePos = i * GRID_WIDTH;
        newGrid.splice(slicePos, GRID_WIDTH);
    }
    // Prepend 0s to grid to compensate for popped rows
    const zeros = [...Array(rowIndices.length * GRID_WIDTH)].map(x => 0);
    return zeros.concat(newGrid);
}

/**
 * Returns the score awarded for the amount of popped rows.
 * @param {number} rowCount 
 */
export const getPopScore = (rowCount) => {
    return (20 + 20 * rowCount) * rowCount;
}