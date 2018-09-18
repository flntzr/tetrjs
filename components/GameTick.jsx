import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {downAction, lockAction, spawnAction} from '../actions/Actions.jsx';

class GameTick extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            intervalID: null
        };
    }

    render() {
        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps == this.props) {
            // Condition necessary because the state gets changed during each execution of this method (intervalID is updated).
            // If we don't do this we will get stuck in an infinite loop.
            // Only prop changes interest us.
            return;
        }

        // remove old interval
        window.clearInterval(this.state.intervalID);

        if (this.props.hasGameStarted && !this.props.isGamePaused) {
            const interval = getInterval(this.props.level);
            const intervalID = window.setInterval(this.tick.bind(this), interval);
            this.setState((prevState) => {
                return {
                    intervalID: intervalID
                };
            });
            return;
        }
    }

    tick() {
        if (this.props.isActiveShapeDown) {
            this.props.lockAction();
            this.props.spawnAction();
        } else {
            this.props.downAction();
        }
    }
}

const getInterval = (level) => {
    const startingTime = 800;
    const minInterval = 100; // minimum interval
    return Math.max(startingTime - 80 * level, minInterval);
}

const mapStateToProps = (state) => {
    return {
        hasGameStarted: state.hasGameStarted,
        isGamePaused: state.isGamePaused,
        level: state.level,
        isActiveShapeDown: state.activeShape.down
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({downAction, lockAction, spawnAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GameTick);