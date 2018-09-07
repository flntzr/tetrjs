import React from 'react';

export default class TestPane extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div id="test-pane" className="pane">
                TEST-PANE<br/>
                <button onClick={this.startMainLoop.bind(this)}>Start Game</button>
            </div>
        );
    }

    startMainLoop() {
        this.props.startGameFun();
    }
}