import React from 'react';
import MainPane from './MainPane.jsx';
import LevelPane from './LevelPane.jsx'
import ScorePane from './ScorePane.jsx';
import NextPane from './NextPane.jsx';
import SettingsPane from './SettingsPane.jsx';
import InstructionsPane from './InstructionsPane.jsx'
import KeyPressListeners from './CommandPressHandler.jsx';
import GameTick from './GameTick.jsx'
import {connect} from 'react-redux';

class App extends React.Component {
    render() {
        const centerPane = this.props.hasGameStarted && !this.props.isGamePaused ? <MainPane/> : <InstructionsPane/>
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
    }
}

export default connect(mapStateToProps, null)(App);