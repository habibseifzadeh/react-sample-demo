import React, { Component } from 'react'

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                I am in the Home page!
            <ActionLink handler={this.props.logoutHandler} />
            </div>
        );
    }

}

export class ActionLink extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <a href="#" onClick={this.props.handler}>Log out</a>
        );
    }

}
