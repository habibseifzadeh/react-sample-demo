import React, { Component } from 'react'

export default class AddUserBox extends Component {

  render() {

    let errorMessage = this.props.errorMessage;
    let submitButton;

    if (errorMessage === '') {
      submitButton = <input type="submit" className="btn btn-primary"></input>
    } else {
      submitButton = <input type="submit" disabled className="btn btn-primary"></input>
    }

    return (
      <div className="container">
        <form onSubmit={this.props.onSubmitHandler}>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              className="form-control"
              value={this.props.username}
              onChange={this.props.onUsernameChanged}></input>
            <label>Password: </label>
            <input
              type="password"
              className="form-control"
              value={this.props.password}
              onChange={this.props.onPasswordChanged}></input>
            <label>Re-type Password: </label>
            <input
              type="password"
              className="form-control"
              value={this.props.rePassword}
              onChange={this.props.onRePasswordChanged}></input>
            {submitButton}
          </div>
        </form>
      </div>
    )
  }
}
