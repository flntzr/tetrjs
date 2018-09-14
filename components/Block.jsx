import React from 'react';
import PropTypes from 'prop-types';
import {BLOCK_TYPES} from './Constants.jsx';

export default class GridBlock extends React.Component {
    render() {
        let blockClass = BLOCK_TYPES[this.props.typeNum];
        return (
            <div className={"grid-block " + blockClass}>
            </div>
        );
    }
}

GridBlock.propTypes = {
    typeNum: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7])
}