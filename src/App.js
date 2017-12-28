import React, { Component } from "react";
import "./App.css";
import UserInfo from "./Components/UserInfo.js";
import {Tabs,Tab,TabList,TabPanel,TabPanels} from "./Components/Tabs.js";
import IconText from "./Components/IconText";
import {fetchData} from "./Actions/Action";
import { connect } from 'react-redux'
import propTypes from "prop-types"

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchData;
    }

    render() {
        const data = this.props.data;
        return (

            <div className="App">
                <div className={"UserInfoContainer"}>
                    <UserInfo
                        avatar={data.avatar_url}
                        name={data.name}
                        login={data.login}
                        bio={data.bio}
                    />
                    <IconText icon={"users"} text={data.company}/>
                    <IconText icon={"map-marker"} text={data.location}/>
                    <IconText icon={"envelope"} text={data.email} link={data.email}/>
                    <IconText icon={"link"} text={data.blog} link={data.blog}/>
                </div>
                <div className={"TabsContainer"}>
                    <Tabs>
                        <TabList>
                            <Tab>Основное</Tab>
                            <Tab>Образование</Tab>
                            <Tab>Контакты</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel><button className={"Button Edit"}>EDIT</button></TabPanel>
                            <TabPanel><button className={"Button Edit"}>EDIT</button></TabPanel>
                            <TabPanel><button className={"Button Edit"}>EDIT</button></TabPanel>
                        </TabPanels>
                    </Tabs>
                </div>
            </div>
        );
    }


}
App.propTypes = {
    data: propTypes.object.isRequired,
};
function mapStateToProps(state) {
    return {
        data: state.data,
    };
}
export default connect(mapStateToProps,fetchData())(App)