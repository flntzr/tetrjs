import React from 'react';

export default class StartGamePane extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        if (this.props.hasGameStarted) {
            return null;
        }
        return (
            <div id="start-game-pane" className="pane">
                START-GAME-PANE<br/>
                <button onClick={this.startGame.bind(this)}>Start Game</button>
            </div>
        );
    }

    startGame() {
        this.props.startGameFun();
    }
}