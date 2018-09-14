import React from 'react';
import {ARROW_COMMANDS, SPECIAL_COMMANDS} from './Constants.jsx';


export default class KeyPressListeners extends React.Component {
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

    onKeyDown(e) {
        if (ARROW_COMMANDS[e.code] !== undefined) {
            this.onArrowCommandPress(ARROW_COMMANDS[e.code]);
        } else if (SPECIAL_COMMANDS[e.code] !== undefined) {
            this.onSpecialCommandPress(SPECIAL_COMMANDS[e.code]);
        }
    };

    onArrowCommandPress(command) {
        this.props.onArrowCommandPressFun(command);
    }

    onSpecialCommandPress(command) {
        this.props.onSpecialCommandPressFun(command);
    }
}