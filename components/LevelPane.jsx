import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class LevelPane extends React.Component {
    render() {
        return (
            <div id="level-pane" className="pane">
                <b>LEVEL</b><br/>
                { this.props.level + 1 }
            </div>
        );
    }
}

LevelPane.propTypes = {
    level: PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
    return {
        level: state.level
    }
}

export default connect(mapStateToProps, null)(LevelPane);