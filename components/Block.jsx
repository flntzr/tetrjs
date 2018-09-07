import React from 'react';
import PropTypes from 'prop-types';

var ColorsEnum = Object.freeze([
    "block-blank",
    "block-a",
    "block-b",
    "block-c",
    "block-d",
    "block-e",
    "block-f",
    "block-g"

]);

export default class GridBlock extends React.Component {
    render() {
        let blockClass =  ColorsEnum[this.props.typeNum];
        return (
            <div className={"grid-block " + blockClass}>
            </div>
        );
    }
}

GridBlock.propTypes = {
    typeNum: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7])
}