import React from 'react';
import PropTypes from 'prop-types';

export default class LevelPane extends React.Component {
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