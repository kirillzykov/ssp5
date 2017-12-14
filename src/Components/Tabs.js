import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import './Tabs.css';

class Tab extends Component{
    render(){
        const {isActive,isDisabled,onSelect} = this.props;
        return (
            <div
                className={isDisabled
                    ? 'tab disabled'
                    : isActive
                        ? 'tab active'
                        : 'tab'}
                onClick={isDisabled ? null : onSelect}>{this.props.children}
            </div>
        )
    }
}
class TabList extends Component{
    static contextTypes ={
        activeIndex: PropTypes.number.isRequired,
        onSelectTab: PropTypes.func.isRequired
    }
    render(){
        const  { activeIndex } = this.context
        const children = React.Children.map(
            this.props.children,
            (child, index)=>{
                return React.cloneElement(child, {
                    isActive: index === activeIndex,
                    onSelect: ()=> this.context.onSelectTab(index)
                })
            }
        )
        return(
            <div className={"tabs"}>
                {children}
            </div>
        )
    }
}
class Tabs extends Component {
    static childContextTypes ={
        activeIndex: PropTypes.number.isRequired,
        onSelectTab: PropTypes.func.isRequired
    }
    state = {
        activeIndex: 0
    }
    getChildContext(){
        return{
            activeIndex: this.state.activeIndex,
            onSelectTab: this.selectTabIndex
        }
    }
    selectTabIndex = (activeIndex)=>{
        this.setState({activeIndex});
    }
    render(){
        return(
            <div className={"Tabs"}>
                {this.props.children}
            </div>
        )
    }
}
class TabPanels extends Component{
    static  contextTypes = {
        activeIndex: PropTypes.number.isRequired
    }
    render(){
        const { children } = this.props
        const { activeIndex } = this.context
        return(
            <div className={"panels"}>
                {children[activeIndex]}
            </div>
        )
    }
}
class TabPanel extends Component{
    render(){
        return this.props.children
    }
}

export {Tabs,Tab,TabList,TabPanel,TabPanels};
