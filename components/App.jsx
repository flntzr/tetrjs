import React from 'react';
import MainPane from './MainPane.jsx';
import LevelPane from './LevelPane.jsx'
import ScorePane from './ScorePane.jsx';
import NextPane from './NextPane.jsx';
import StartGamePane from './StartGamePane.jsx';
import KeyPressListeners from './CommandPressHandler.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id="tetrjs-container">
                <MainPane/>
                <div id="info-group">
                    <ScorePane/>
                    <NextPane/>
                    <LevelPane/>
                    <KeyPressListeners/>
                </div>
                <StartGamePane/>
            </div>
        );
    }
}