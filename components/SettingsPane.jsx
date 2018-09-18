import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {gameStartAction, gamePauseAction} from '../actions/Actions.jsx';

class SettingsPane extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        const startButton = 
            <button onClick={this.startGame.bind(this)} disabled={this.props.hasGameStarted}>
                <i className="fas fa-play"></i>
            </button>;

        const pauseIcon = this.props.isGamePaused ? "far fa-pause-circle" : "fas fa-pause-circle";
        const pauseButton = 
            <button onClick={this.pauseGame.bind(this)} disabled={!this.props.hasGameStarted}>
                <i className={pauseIcon}></i>
            </button>;

        return (
            <div id="settings-pane" className="pane">
                {startButton}
                {pauseButton}
            </div>
        );
    }
    
    startGame() {
        this.props.gameStartAction();
    }

    pauseGame() {
        this.props.gamePauseAction();
    }
}

const mapStateToProps = (state) => {
    return {
        hasGameStarted: state.hasGameStarted,
        isGamePaused: state.isGamePaused,
        isGameOver: state.isGameOver
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({gameStartAction, gamePauseAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPane);