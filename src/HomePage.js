import React, { Component } from 'react'
import WelcomeBar from './WelcomeBar';
import NavigationBar from './NavigationBar';
import AddUser from './AddUser';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const navigationItems = [
            {name: 'Add User', active: true},
            {name: 'List Users'}
        ];

        return (
            <div>
                <WelcomeBar username={this.props.username} />
                <NavigationBar navigationItems={navigationItems} />
                <AddUser />
            </div>
        );
    }

}


