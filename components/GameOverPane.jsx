import React from 'react';
import {connect} from 'react-redux';

class GameOverPane extends React.Component {
    render() {
        return (
            <div id="game-over-pane" className="pane">
                <h1><i className="fas fa-skull"></i> Game Over <i className="fas fa-skull"></i></h1>
                <br/>
                <p>Nice try I guess. You didn't make it past level <b>{this.props.level + 1}</b>.</p>
                <br/>
                <p>You have a total score of <b>{this.props.score}</b>.</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        level: state.level,
        score: state.score
    }
}

export default connect(mapStateToProps, null)(GameOverPane);