import React from 'react';

var KEY_COMMANDS = Object.freeze([
    "ArrowUp",
    "ArrowRight",
    "ArrowDown",
    "ArrowLeft",
    "Space",
    "Escape"
]);

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
        if (KEY_COMMANDS.indexOf(e.code) != -1) {
            this.onCommandPress(e.code);
        }
    };

    onCommandPress(command) {
        this.props.onCommandPressFun(command);
    }
}