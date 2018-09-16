import React from 'react';
import MainPane from './components/MainPane.jsx';
import LevelPane from './components/LevelPane.jsx'
import ScorePane from './components/ScorePane.jsx';
import NextPane from './components/NextPane.jsx';
import StartGamePane from './components/StartGamePane.jsx';
import KeyPressListeners from './components/CommandPressHandler.jsx';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {exampleAction} from './actions/actions.js';

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

    incLevel() {
        this.setState((prevState, props) => {
            prevState.level++;
            return prevState;
        });
    }

    startGame() {
        this.setState((prevState, props) => {
            prevState.isGamePaused = false;
            prevState.hasGameStarted = true;
            return prevState;
        });
    }

    // onArrowCommandPress(command) {
    //     let xModifier = 0;
    //     let yModifier = 0;
    //     switch(command) {
    //         case ARROW_COMMANDS.ArrowUp:
    //             this.turnActiveBlock();
    //             return;
    //         case ARROW_COMMANDS.ArrowRight:
    //             xModifier = 1;
    //             this.repositionActiveBlock(xModifier, yModifier);
    //             return;
    //         case ARROW_COMMANDS.ArrowDown:
    //             yModifier = 1;
    //             this.repositionActiveBlock(xModifier, yModifier);
    //             return;
    //         case ARROW_COMMANDS.ArrowLeft:
    //             xModifier = -1;
    //             this.repositionActiveBlock(xModifier, yModifier);
    //             return;
    //     }
    // }

    // onSpecialCommandPress(command) {
    //     if (command === SPECIAL_COMMANDS.Space) {
    //         this.repositionActiveBlock(0, 1000);
    //     } else if (command === SPECIAL_COMMANDS.Escape) {
    //         // TODO: pause/unpause game
    //     }
    // }

    // repositionActiveBlock(xModifier, yModifier) {
    //     this.props.exampleAction();
    //     this.setState((prevState, props) => {
    //         prevState.activeShapeX += xModifier;
    //         prevState.activeShapeY += yModifier;
    //         return prevState;
    //     });
    // }

    // turnActiveBlock() {
    //     this.setState((prevState, props) => {
    //         prevState.rotation++;
    //         prevState %= 4;
    //         return prevState;
    //     });
    // }
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
// export default App;