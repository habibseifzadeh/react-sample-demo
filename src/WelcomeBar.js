import React, { Component } from 'react'
import WelcomeMessage from './WelcomeMessage';
import LogoutAction from './LogoutAction';

export default class WelcomeBar extends Component {
  render() {
    return (
      <div className="text-right">
        <WelcomeMessage username={this.props.username} />
        <LogoutAction />
      </div>
    )
  }
}
