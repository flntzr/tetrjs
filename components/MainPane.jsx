import React from 'react';
import GridBlock from './Block.jsx';
import {connect} from 'react-redux';
import {SHAPES, EMPTY_SHAPE, GRID_WIDTH, GRID_HEIGHT, SHAPE_SIZE} from './Constants.jsx';

class MainPane extends React.Component {
    render() {
        const blocks = [];
        const grid = this.getActiveGrid();
        for (let i = 0; i < grid.length; i++) {
            blocks.push(<GridBlock key={i} typeNum={grid[i]}/>);
        }
        return (
            <div id="main-pane" className="pane">
                {blocks}
            </div>
        );
    }

    getActiveGrid() {
        const grid = Object.assign([], this.props.grid);
        if (this.props.activeShape.num == -1) {
            return grid;
        }
        const shapeGrid = SHAPES[this.props.activeShape.num][this.props.activeShape.rotation];
        const minX = this.props.activeShape.posX;
        const minY = this.props.activeShape.posY;
        const maxX = Math.min(this.props.activeShape.posX + SHAPE_SIZE, GRID_WIDTH) - 1;
        const maxY = Math.min(this.props.activeShape.posY + SHAPE_SIZE, GRID_HEIGHT) - 1;

        for (let y = minY; y <= maxY; y++) {
            for (let x = minX; x <= maxX; x++) {
                const shapeX = x - minX;
                const shapeY = y - minY;
                grid[y * GRID_WIDTH + x] = shapeGrid[shapeY * SHAPE_SIZE + shapeX] || grid[y * GRID_WIDTH + x];
            }
        }
        return grid;
    }
} 

const mapStateToProps = (state) => {
    return {
        grid: state.grid,
        activeShape: {
            ...state.activeShape
        }
    }
}

export default connect(mapStateToProps, null)(MainPane);