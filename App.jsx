import React from 'react';
import GridBlock from './Block.jsx';
import PropTypes from 'prop-types';
import {Shapes} from './Shape.jsx';

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
            nextShape: 0,
            rotation: 0
        };
    }

    render() {
        return (
            <div id="tetrjs-container">
                <MainPane grid={this.state.grid}/>
                <div id="info-group">
                    <ScorePane score={this.state.score}/>
                    <NextPane nextShape={this.state.nextShape}/>
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
            <div id="test-pane" className="pane">
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
        let blocks = [];
        let i = 0;
        for (let typeNum of this.props.grid) {
            blocks.push(<GridBlock key={i} typeNum={typeNum}/>);
            i++;
        }
        return (
            <div id="main-pane" className="pane">
                {blocks}
            </div>
        );
    }
}

class ScorePane extends React.Component {
    render() {
        return (
            <div id="score-pane" className="pane">
                <b>SCORE</b><br/>
                { this.props.score }
            </div>
        );
    }
}

ScorePane.propTypes = {
    score: PropTypes.number.isRequired
}

class NextPane extends React.Component {
    render() {
        let grid = this.props.nextShape != null ? Shapes[this.props.nextShape][0]: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        let blocks = [];
        let i = 0;
        for (let typeNum of grid) {
            blocks.push(<GridBlock key={i} typeNum={typeNum}/>);
            i++;
        }
        return (
            <div id="next-pane" className="pane">
                <b>NEXT</b><br/>
                <div id='next-block-preview'>
                    {blocks}
                </div>
            </div>
        );
    }
}

class LevelPane extends React.Component {
    render() {
        return (
            <div id="level-pane" className="pane">
                <b>LEVEL</b><br/>
                { this.props.level }
            </div>
        );
    }
}

LevelPane.propTypes = {
    level: PropTypes.number.isRequired
}

export default App;
