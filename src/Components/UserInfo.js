import React, { Component } from 'react';
import './UserInfo.css';


class UserInfo extends Component {
    render() {
        return (
            <div className="UserInfo">
                <img className="img" src={this.props.avatar}  />
                <p id="name">{this.props.name}</p>
                <p id="login">{this.props.login}</p>
                <p id="bio">{this.props.bio}</p>
            </div>
        );
    }
}

export default UserInfo;