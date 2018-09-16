import React from 'react';
import GridBlock from './Block.jsx';
import {connect} from 'react-redux';

class MainPane extends React.Component {
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

const mapStateToProps = (state) => {
    return {
        grid: state.grid
    }
}

export default connect(mapStateToProps, null)(MainPane);