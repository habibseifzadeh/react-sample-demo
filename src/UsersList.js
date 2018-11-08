import React, { Component } from 'react'
import ServiceProvider from './ServiceProvider';

export default class UsersList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: []
    }

    this.findUsersCallback = this.findUsersCallback.bind(this);


  }

  componentDidMount() {
    var service = new ServiceProvider();
    service.findAllUsers(this.findUsersCallback);

  }

  findUsersCallback(users) {
    this.setState({ users: users });
  }

  render() {
      const tableRows = this.state.users.map((item) =>
      <tr key={item.email}>
        <td>{item.username}</td>
        <td>{item.password}</td>
        <td>{item.email}</td>
      </tr>
    );

    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>username</th>
              <th>password</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </table>
      </div>
    )
  }
}
