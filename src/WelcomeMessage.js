import React, { Component } from 'react'

export default class WelcomeMessage extends Component {
    render() {
        return (
            <div className="d-inline">
                Welcome, {this.props.username}! {' '}
            </div>
        )
    }
}
