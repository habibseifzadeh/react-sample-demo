import React, { Component } from 'react'

export default class NavigationBar extends Component {
    render() {

        const buttons = [];
        
        //it must be improved 
        this.props.navigationItems.forEach((item) => {
            if (item.active) {
                buttons.push(
                    <a
                        className="nav-item nav-link active"
                        href="#"
                        key={item.name}
                        onClick={item.handler}>{item.name}</a>
                );
            } else {
                buttons.push(
                    <a
                        className="nav-item nav-link"
                        href="#"
                        key={item.name}
                        onClick={item.handler}>{item.name}</a>
                );
            }
        });


        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <div className="navbar-nav">
                        {buttons}
                    </div>

                </nav>
            </div>
        )
    }
}
