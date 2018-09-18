import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {gameStartAction} from '../actions/Actions.jsx';

class SettingsPane extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        if (this.props.hasGameStarted) {
            return null;
        }
        return (
            <div id="settings-pane" className="pane">
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

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPane);