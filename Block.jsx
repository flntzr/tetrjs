import React from 'react';

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
            <div class={"grid-block " + blockClass}>
            </div>
        );
    }
}