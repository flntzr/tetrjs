import React from 'react';
import MainPane from './components/MainPane.jsx';
import LevelPane from './components/LevelPane.jsx'
import ScorePane from './components/ScorePane.jsx';
import NextPane from './components/NextPane.jsx';
import StartGamePane from './components/StartGamePane.jsx';
import KeyPressListeners from './components/CommandPressHandler.jsx';

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