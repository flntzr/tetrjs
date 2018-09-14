import React from 'react';

export var ARROW_COMMANDS = Object.freeze({
    ArrowUp: 0,
    ArrowRight: 1,
    ArrowDown: 2,
    ArrowLeft: 3
});

export var SPECIAL_COMMANDS = Object.freeze({
    Space: 4,
    Escape: 5
});

// export var KEY_COMMANDS = Object.freeze(
//     ARROW_COMMANDS.concat(SPECIAL_COMMANDS)
// );

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