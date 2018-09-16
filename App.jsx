import React from 'react';
import MainPane from './components/MainPane.jsx';
import LevelPane from './components/LevelPane.jsx'
import ScorePane from './components/ScorePane.jsx';
import NextPane from './components/NextPane.jsx';
import StartGamePane from './components/StartGamePane.jsx';
import KeyPressListeners from './components/CommandPressHandler.jsx';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {exampleAction} from './actions/Actions.jsx';

class App extends React.Component {
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

const mapStateToProps = (state) => {
    return {
        example: state.example
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({exampleAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);