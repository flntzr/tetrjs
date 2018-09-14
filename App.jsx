import React from 'react';
import MainPane from './components/MainPane.jsx';
import LevelPane from './components/LevelPane.jsx'
import ScorePane from './components/ScorePane.jsx';
import NextPane from './components/NextPane.jsx';
import StartGamePane from './components/StartGamePane.jsx';
import KeyPressListeners, {ARROW_COMMANDS} from './components/CommandPressHandler.jsx';

class App extends React.Component {
   render() {
      return <GameScene/>;
   }
}

class GameScene extends React.Component {
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
            activeShape: null,
            activeShapeX: 3,
            activeShapeY: 0,
            nextShapeNum: 0,
            rotation: 0,
            hasGameStarted: false,
            isGamePaused: false
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
                <StartGamePane hasGameStarted={this.state.hasGameStarted} /*fun={this.incLevel.bind(this)}*/ startGameFun={this.startGame.bind(this)}/>
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
                // TODO: implement turning  
                return;
            case ARROW_COMMANDS.ArrowRight:
                xModifier = 1;
                return this.onRepositionActiveBlock(xModifier, yModifier);
            case ARROW_COMMANDS.ArrowDown:
                yModifier = 1;
                return this.onRepositionActiveBlock(xModifier, yModifier);
            case ARROW_COMMANDS.ArrowLeft:
                xModifier = -1;
                return this.onRepositionActiveBlock(xModifier, yModifier);
        }
    }

    onRepositionActiveBlock(xModifier, yModifier) {
        this.setState((prevState, props) => {
            prevState.activeShapeX += xModifier;
            prevState.activeShapeY += yModifier;
            return prevState;
        });
    }

    onSpecialCommandPress(command) {
        this.incLevel();
    }
}

export default App;
