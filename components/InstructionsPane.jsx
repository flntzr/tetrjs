import React from 'react';

export default class InstructionsPane extends React.Component {
    render() {
        return (
            <div id="instructions-pane" className="pane">
                <h1>Instructions</h1>
                <br/>
                <p><i className="fas fa-arrows-alt"></i> Use the <b>Arrow Keys</b> to move.</p>
                <p><i className="fas fa-caret-down"></i> Use the <b>Space Bar</b> to drop.</p>
                <p><i className="fas fa-pause-circle"></i> Use <b>Escape</b> to pause or press the icon above.</p>
                <br/>
                Press <i className="fas fa-play"></i> above to start.
            </div>
        );
    }
}