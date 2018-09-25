import React from 'react';

export default class InstructionsPane extends React.Component {
    render() {
        return (
            <div id="instructions-pane" className="pane">
                <h1>Instructions</h1>
                <br/>
                <table id="instructions-table">
                    <tr>
                        <td>
                            <i className="fas fa-arrow-up"/>
                        </td>
                        <td>
                            Press the <b>Up Arrow</b> to rotate.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <i className="fas fa-arrow-left"/> <i className="fas fa-arrow-right"/>
                        </td>
                        <td>
                            Press the <b>Left and Right Arrows</b> to move.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <i className="fas fa-arrow-down"/>
                        </td>
                        <td>
                            Press the <b>Down Arrow</b> to go down faster.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <i className="fas fa-caret-down"/>
                        </td>
                        <td>
                            Press the <b>Space Bar</b> to drop.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <i className="fas fa-pause-circle"/>
                        </td>
                        <td>
                            Press <b>Escape</b> to pause or click on the icon above.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <i className="fas fa-play"/>
                        </td>
                        <td>
                            Click on the icon above to start the game.
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}