import React from 'react';
import {connect} from 'react-redux';

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
            console.log("START TICKING");
            const interval = getInterval(this.props.level);
            const intervalID = window.setInterval(this.tick, interval);
            this.setState((prevState) => {
                return {
                    intervalID: intervalID
                };
            });
            return;
        } else {
            console.log("STOP TICKING");
        }
    }

    tick() {
        // TODO: trigger drop, spawn and pop actions
        console.log("TICK!");
    }
}

const getInterval = (level) => {
    const startingTime = 1000;
    const minInterval = 100; // minimum interval
    return Math.max(startingTime / (level + 1), minInterval);
}

const mapStateToProps = (state) => {
    return {
        hasGameStarted: state.hasGameStarted,
        isGamePaused: state.isGamePaused,
        level: state.level
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({downAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GameTick);