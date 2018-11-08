import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage'

class MainPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: '' };
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.setState({ username: '' });
  }

  login(username) {
    this.setState({ username: username });
  }

  render() {

    const isLoggedIn = this.state.username !== '';
    let page;

    if (isLoggedIn) {
      page = <HomePage username={this.state.username} logoutHandler={this.logout} />;
    } else {
      page = <LoginPage loginHandler={this.login} />;
    }
    return (
      <div>{page}</div>
    );
  }

}

ReactDOM.render(<MainPage />, document.getElementById("root"));

