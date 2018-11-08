import React, { Component } from 'react'

export default class LogoutAction extends Component {
    render() {
        return (
            <div className="d-inline">
                <button 
                    className="btn btn-danger" 
                    onClick={this.props.logoutHandler}>Logout</button>
            </div>
        )
    }
}

/* export class ActionLink extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <a href="#" onClick={this.props.handler}>Log out</a>
        );
    }

} */