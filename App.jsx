import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <GameScene/>
         </div>
      );
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
            ]
        };
    }

    render() {
        return (
            <div id="tetrjs-container">
                <MainPane/>
                <div id="info-group">
                    <ScorePane score={this.state.score}/>
                    <NextPane/>
                    <LevelPane level={this.state.level}/>
                </div>
                <TestPane fun={this.incLevel.bind(this)}/>
            </div>
        );
    }

    incLevel() {
        this.setState((prevState, props) => {
            prevState.level++;
            return prevState;
        });
    }
}

class TestPane extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div id="test-pane" class="pane">
                TEST-PANE<br/>
                <button onClick={this.handleClick.bind(this)}>CLICKME</button>
            </div>
        );
    }

    handleClick() {
        console.log("CLICK");
        this.props.fun();
    }
}

class MainPane extends React.Component {
    render() {
        return (
            <div id="main-pane" class="pane">
                MAIN-PANE
            </div>
        );
    }
}

class ScorePane extends React.Component {
    render() {
        return (
            <div id="score-pane" class="pane">
                SCORE-PANE: { this.props.score }
            </div>
        );
    }
}

class NextPane extends React.Component {
    render() {
        return (
            <div id="next-pane" class="pane">
                NEXT-PANE
            </div>
        );
    }
}

class LevelPane extends React.Component {
    render() {
        return (
            <div id="level-pane" class="pane">
                LEVEL-PANE: { this.props.level }
            </div>
        );
    }
}

export default App;
