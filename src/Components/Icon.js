import React, { Component } from 'react';

class Icon extends React.Component{
    render(){
        let icon = "fa "+"fa-" + this.props.icon;
        return <i className={icon} onClick={this.props.onclick}/>
    }

}
export default Icon;