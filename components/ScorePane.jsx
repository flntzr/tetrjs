import React from 'react';
import PropTypes from 'prop-types';

export default class ScorePane extends React.Component {
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