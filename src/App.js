import React, { Component } from 'react';
import './App.css';
import UserInfo from './Components/UserInfo.js';
import {Tabs,Tab,TabList,TabPanel,TabPanels} from './Components/Tabs.js';
import IconText from "./Components/IconText";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar:'',
            name:'',
            login:'',
            bio:'',
            company:'',
            location:'',
            email:'',
            blog:''
        }
    }

    componentDidMount() {
        return fetch('https://api.github.com/users/kirillzykov')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    avatar:responseJson.avatar_url,
                    name:responseJson.name,
                    login:responseJson.login,
                    bio:responseJson.bio,
                    company:responseJson.company,
                    location:responseJson.location,
                    email:responseJson.email,
                    blog:responseJson.blog
                }, function() {

                });
            })
    }

    render() {
        return (
            <div className="App">
                <div className={"UserInfoContainer"}>
                    <UserInfo
                        avatar={this.state.avatar}
                        name={this.state.name}
                        login={this.state.login}
                        bio={this.state.bio}
                    />
                    <IconText icon={"users"} text={this.state.company}/>
                    <IconText icon={"map-marker"} text={this.state.location}/>
                    <IconText icon={"envelope"} text={this.state.email} link={this.state.email}/>
                    <IconText icon={"link"} text={this.state.blog} link={this.state.blog}/>
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

export default App;
