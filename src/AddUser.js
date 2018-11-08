import React, { Component } from 'react'
import AddUserBox from './AddUserBox';
import AddUserResult from './AddUserResult';
import ServiceProvider from './ServiceProvider';

export default class AddUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            rePassword: '',
            errorMessage: 'The password is too short!',
            successful: false
        }

        this.onUsernameChanged = this.onUsernameChanged.bind(this);
        this.onPasswordChanged = this.onPasswordChanged.bind(this);
        this.onRePasswordChanged = this.onRePasswordChanged.bind(this);
        this.checkPassword = this.checkPassword.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.addUserCallback = this.addUserCallback.bind(this);
    }

    onUsernameChanged(e) {
        this.setState({ username: e.target.value });
    }

    onPasswordChanged(e) {
        this.setState({ password: e.target.value }, this.checkPassword);
    }

    onRePasswordChanged(e) {
        this.setState({ rePassword: e.target.value }, this.checkPassword);
    }

    checkPassword() {
        let password = this.state.password;
        let rePassword = this.state.rePassword;

        this.setState({successful: false});

        if (password.length < 6) {
            this.setState({ errorMessage: 'The password is too short!' });
        } else if (password !== rePassword) {
            this.setState({ errorMessage: 'The passwords do not match!' });
        } else {
            this.setState({ errorMessage: '' });
        }
    }

    onSubmitHandler(e) {
        e.preventDefault();
        var service = new ServiceProvider();
        service.addUserMock(this.state.username, this.state.password, this.addUserCallback);
        
    }

    addUserCallback(result) {
        if (result) {
            this.setState(
                {
                    username: '',
                    password: '',
                    rePassword: '',
                    errorMessage: 'The user saved successfully',
                    successful: true
                }
            );
        } else {
            this.setState(
                {
                    username: '',
                    password: '',
                    rePassword: '',
                    errorMessage: 'The user cannot be saved!',
                    successful: false
                }
            );
        }
    }


    render() {
        let state = this.state;
        return (
            <div>
                <AddUserBox
                    username={state.username}
                    password={state.password}
                    rePassword={state.rePassword}
                    onUsernameChanged={this.onUsernameChanged}
                    onPasswordChanged={this.onPasswordChanged}
                    onRePasswordChanged={this.onRePasswordChanged}
                    errorMessage={state.errorMessage}
                    onSubmitHandler={this.onSubmitHandler} />
                <AddUserResult
                    errorMessage={state.errorMessage}
                    successful={state.successful} />
            </div>
        )
    }
}
