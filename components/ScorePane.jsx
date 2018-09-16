import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

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

const mapStateToProps = (state) => {
    return {
        score: state.score
    }
}

export default connect(mapStateToProps, null)(ScorePane);