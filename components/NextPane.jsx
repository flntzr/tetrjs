import React from 'react';
import GridBlock from './Block.jsx';
import {Shapes, EmptyShape} from './Shape.jsx';

export default class NextPane extends React.Component {
    render() {
        const grid = this.props.nextShape != null ? Shapes[this.props.nextShape][0]: EmptyShape;
        const blocks = [];
        let i = 0;
        for (const typeNum of grid) {
            blocks.push(<GridBlock key={i} typeNum={typeNum}/>);
            i++;
        }
        return (
            <div id="next-pane" className="pane">
                <b>NEXT</b><br/>
                <div id='next-block-preview'>
                    {blocks}
                </div>
            </div>
        );
    }
}