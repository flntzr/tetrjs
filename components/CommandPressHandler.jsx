import React from 'react';
import {USER_COMMANDS} from './Constants.jsx';
import {ActionCodes} from '../actions/Constants.jsx'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {downAction, rightAction, rotateAction, leftAction, dropAction, pauseAction} from '../actions/Actions.jsx';

class KeyPressListeners extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyDownFunction: this.onKeyDown.bind(this)
        };
    }

    render() {
        return null;
    }

    componentDidMount() {
        document.addEventListener("keydown", this.state.keyDownFunction);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.state.keyDownFunction);
    }

// DOWN: 0,
// ROTATE: 1,
// LEFT: 2,
// RIGHT: 3,
// DROP: 4,
// SPAWN: 5,
// POP: 6,
// GAME_START: 7,
// GAME_OVER: 8,
// PAUSE: 9
    onKeyDown(e) {
        const command = USER_COMMANDS[e.code];
        if (command !== undefined) {
            switch (command) {
                case USER_COMMANDS.ArrowDown:
                    this.props.downAction();
                    return;
                case USER_COMMANDS.ArrowUp:
                    this.props.rotateAction();
                    return;
                case USER_COMMANDS.ArrowLeft:
                    this.props.leftAction();
                    return;
                case USER_COMMANDS.ArrowRight:
                    this.props.rightAction();
                    return;
                case USER_COMMANDS.Space:
                    this.props.dropAction();
                    return;
                case USER_COMMANDS.Escape:
                    this.props.pauseAction();
                    return;
            }
        }
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({downAction, rightAction, leftAction, dropAction, pauseAction, rotateAction}, dispatch);
}

export default connect(null, mapDispatchToProps)(KeyPressListeners);