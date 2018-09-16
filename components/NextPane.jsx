import React from 'react';
import GridBlock from './Block.jsx';
import {SHAPES, EMPTY_SHAPE} from './Constants.jsx';
import {connect} from 'react-redux';

class NextPane extends React.Component {
    render() {
        const grid = this.props.nextShapeNum != null ? SHAPES[this.props.nextShapeNum][0]: EMPTY_SHAPE;
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

const mapStateToProps = (state) => {
    return {
        nextShapeNum: state.nextShapeNum
    }
}

export default connect(mapStateToProps, null)(NextPane);