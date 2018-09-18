import React from 'react';
import MainPane from './MainPane.jsx';
import LevelPane from './LevelPane.jsx'
import ScorePane from './ScorePane.jsx';
import NextPane from './NextPane.jsx';
import SettingsPane from './SettingsPane.jsx';
import InstructionsPane from './InstructionsPane.jsx';
import GameOverPane from './GameOverPane.jsx';
import KeyPressListeners from './CommandPressHandler.jsx';
import GameTick from './GameTick.jsx';
import {connect} from 'react-redux';

class App extends React.Component {
    render() {
        let centerPane = <MainPane/>;
        if (!this.props.hasGameStarted || this.props.isGamePaused ) {
            if (this.props.gameOver) {
                centerPane = <GameOverPane/>;
            } else {
                centerPane = <InstructionsPane/>;
            }
        }
        return (
            <div id="tetrjs-container">
                <div>
                    <SettingsPane/>
                    <KeyPressListeners/>
                    <GameTick/>
                    {centerPane}
                </div>
                <div id="info-group">
                    <ScorePane/>
                    <NextPane/>
                    <LevelPane/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        hasGameStarted: state.hasGameStarted,
        isGamePaused: state.isGamePaused,
        gameOver: state.gameOver
    }
}

export default connect(mapStateToProps, null)(App);