import React, { Component } from 'react';
import ServiceProvider from './ServiceProvider';
//import './LoginPage.css';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { userValue: "", passValue: "", passIncorrect: false };
        this.submitHandler = this.submitHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.loginResponseCallback = this.loginResponseCallback.bind(this);
    }

    changeHandler(e) {
        if (e.target.name == "name") {
            this.setState({ userValue: e.target.value });
        } else {
            this.setState({ passValue: e.target.value });
        }
    }

    submitHandler(e) {
        e.preventDefault();
        var service = new ServiceProvider();
        service.authenticate(this.state.userValue, this.state.passValue, this.loginResponseCallback);
    }

    loginResponseCallback(res) {
        if (res) {
            this.props.loginHandler();
        } else {
            this.setState({ userValue: '', passValue: '', passIncorrect: true });
        }
    }

    render() {
        return (
            <div>
                
                <div className='container'>
                    <form action="post" onSubmit={this.submitHandler}>
                       <div className="form-group">
                        <label>Username:</label>
                    <input
                            type="text"
                            className="form-control"
                            name="name"
                            onChange={this.changeHandler}
                            value={this.state.userValue}></input>
                            </div>
                            <div className="form-group">
                        <label>Password:</label>
                    <input
                            type="password"
                            className="form-control"
                            name="pass"
                            onChange={this.changeHandler}
                            value={this.state.passValue}></input>
</div>
                            {this.state.passIncorrect &&
                    <div><font color="red">The password is incorrect</font><br/><br/></div>
                    
                }
                        <input type="submit" className="btn btn-primary"></input>
                    </form>
                </div>
            </div>
        );
    }
}
