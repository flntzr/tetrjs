import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {gameStartAction} from '../actions/Actions.jsx';

class StartGamePane extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        if (this.props.hasGameStarted) {
            return null;
        }
        return (
            <div id="start-game-pane" className="pane">
                START-GAME-PANE<br/>
                <button onClick={this.startGame.bind(this)}>Start Game</button>
            </div>
        );
    }
    
    startGame() {
        this.props.gameStartAction();
    }
}

const mapStateToProps = (state) => {
    return {
        hasGameStarted: state.hasGameStarted,
        isGamePaused: state.isGamePaused
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({gameStartAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StartGamePane);