import React from 'react';
import MainPane from './components/MainPane.jsx';
import LevelPane from './components/LevelPane.jsx'
import ScorePane from './components/ScorePane.jsx';
import NextPane from './components/NextPane.jsx';
import TestPane from './components/TestPane.jsx';

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
            nextShapeNum: 0,
            rotation: 0
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
                </div>
                <TestPane fun={this.incLevel.bind(this)} startGameFun={this.startMainLoop.bind(this)}/>
            </div>
        );
    }

    incLevel() {
        this.setState((prevState, props) => {
            prevState.level++;
            return prevState;
        });
    }

    startMainLoop() {
        this.requestAnimationFrame(mainLoop);
    }
}

export default App;
