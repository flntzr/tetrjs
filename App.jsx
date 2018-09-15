import React from 'react';
import MainPane from './components/MainPane.jsx';
import LevelPane from './components/LevelPane.jsx'
import ScorePane from './components/ScorePane.jsx';
import NextPane from './components/NextPane.jsx';
import StartGamePane from './components/StartGamePane.jsx';
import KeyPressListeners from './components/CommandPressHandler.jsx';
import {ARROW_COMMANDS, SPECIAL_COMMANDS, PLAYING_FIELD_BOUNDS} from './components/Constants.jsx';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {exampleAction} from './actions/actions.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            score: 0,
            level: 0,
            grid: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            ],
            // nextShapeNum: 0,
            hasGameStarted: false,
            isGamePaused: false,
            example: 99
        };
    }

    render() {
        return (
            <div id="tetrjs-container">
                <MainPane grid={this.state.grid}/>
                <div id="info-group">
                    <ScorePane score={this.state.score}/>
                    <NextPane nextShape={this.state.nextShapeNum}/>
                    <LevelPane level={this.state.level}/>
                    <KeyPressListeners onArrowCommandPressFun={this.onArrowCommandPress.bind(this)} onSpecialCommandPressFun={this.onSpecialCommandPress.bind(this)}/>
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

    onArrowCommandPress(command) {
        let xModifier = 0;
        let yModifier = 0;
        switch(command) {
            case ARROW_COMMANDS.ArrowUp:
                this.turnActiveBlock();
                return;
            case ARROW_COMMANDS.ArrowRight:
                xModifier = 1;
                this.repositionActiveBlock(xModifier, yModifier);
                return;
            case ARROW_COMMANDS.ArrowDown:
                yModifier = 1;
                this.repositionActiveBlock(xModifier, yModifier);
                return;
            case ARROW_COMMANDS.ArrowLeft:
                xModifier = -1;
                this.repositionActiveBlock(xModifier, yModifier);
                return;
        }
    }

    onSpecialCommandPress(command) {
        if (command === SPECIAL_COMMANDS.Space) {
            this.repositionActiveBlock(0, 1000);
        } else if (command === SPECIAL_COMMANDS.Escape) {
            // TODO: pause/unpause game
        }
    }

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

// const mapStateToProps = (state) => {
//     return {
//         nextShapeNum: state.nextShapeNum
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({exampleAction}, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;