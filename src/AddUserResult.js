import React, { Component } from 'react'

export default class AddUserResult extends Component {


    render() {
        let response;
        const errorMessage = this.props.errorMessage;

        if (this.props.successful) {
            response = (<font color="green">{errorMessage}</font>);
        } else {
            response = (<font color="red">{errorMessage}</font>);
        }

        return (
            <div className="text-center">
                {response}
            </div>
        );
    }
}
