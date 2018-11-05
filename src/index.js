import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginPage from './LoginPage';
import HomePage from './HomePage'
//import App from './App';
//import * as serviceWorker from './serviceWorker';


class MainPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.setState({ isLoggedIn: false });
  }

  login(e) {
    this.setState({ isLoggedIn: true });
  }

  render() {

    const isLoggedIn = this.state.isLoggedIn;
    let page;

    if (isLoggedIn) {
      page = <HomePage logoutHandler={this.logout} />;
    } else {
      page = <LoginPage loginHandler={this.login} />;
    }
    return (
      <div>{page}</div>
    );
  }

}

ReactDOM.render(<MainPage />, document.getElementById("root"));

