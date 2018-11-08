import React, { Component } from 'react'
import WelcomeBar from './WelcomeBar';
import NavigationBar from './NavigationBar';
import AddUser from './AddUser';
import UsersList from './UsersList';

const ADD_USER = 0;
const USERS_LIST = 1;

export default class HomePage extends Component {
    
    

    constructor(props) {
        super(props);

        this.state = {
            tab: ADD_USER
        };
        
        this.onAddUserClicked = this.onAddUserClicked.bind(this);
        this.onUsersListClicked = this.onUsersListClicked.bind(this);
    }

    onAddUserClicked(e) {
        e.preventDefault();
        this.setState({tab: ADD_USER});
    }

    onUsersListClicked(e) {
        e.preventDefault();
        this.setState({tab: USERS_LIST});
    }

    render() {

        var navigationItems;
        var mainPane;

        //must be improved
        if(this.state.tab === ADD_USER) {
            navigationItems = [
                {name: 'Add User', handler: this.onAddUserClicked, active: true},
                {name: 'List Users', handler: this.onUsersListClicked}
            ];
            mainPane = <AddUser 
                onAddUserClicked={this.onAddUserClicked}
                onUsersListClicked={this.onUsersListClicked} />
        } else {
            navigationItems = [
                {name: 'Add User', handler: this.onAddUserClicked},
                {name: 'List Users', handler: this.onUsersListClicked, active: true}
            ];
            mainPane = <UsersList 
            onAddUserClicked={this.onAddUserClicked}
            onUsersListClicked={this.onUsersListClicked} />
        }
        
        return (
            <div>
                <WelcomeBar 
                    username={this.props.username} 
                    logoutHandler={this.props.logoutHandler} />
                <NavigationBar 
                    navigationItems={navigationItems}
                    onAddUserClicked={this.onAddUserClicked}
                    onUsersListClicked={this.onUsersListClicked} />
                {mainPane}
            </div>
        );
    }

}


