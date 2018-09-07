import React from 'react';
import GridBlock from './Block.jsx';

export default class MainPane extends React.Component {
    render() {
        const blocks = [];
        let i = 0;
        for (const typeNum of this.props.grid) {
            blocks.push(<GridBlock key={i} typeNum={typeNum}/>);
            i++;
        }
        return (
            <div id="main-pane" className="pane">
                {blocks}
            </div>
        );
    }
}