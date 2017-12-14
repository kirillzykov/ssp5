import React, { Component } from 'react';
import Icon from './Icon.js';

class IconText extends Component {
    render() {
        if(this.props.text === null){
            return(null);
        }
        if(this.props.link !== null) {
            return (
                <div className="IconText">
                    <Icon icon={this.props.icon}/>
                    <a href={this.props.link} style={{textDecoration: 'none'}}>{this.props.text}</a>
                </div>
            );
        }
        else {
            return (
                <div className="IconText">
                    <Icon icon={this.props.icon}/>{this.props.text}
                </div>
            );
        }
    }
}
export default IconText;

