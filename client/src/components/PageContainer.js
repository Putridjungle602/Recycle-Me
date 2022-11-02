import React, { Component } from "react";
import Donate from "./Donate";
import Home from "./Home";
import Learn from "./Learn";
import Header from "./Header";
import Profile from "./Profile";

export default class PageContainer extends Component {
  state = {
    activeKey: "home",
  };
  handleTabChange = (key) => this.setState({ activeKey: key });
  render() {
    const { home } = this.state;
    return (
      <div className="pages-container">
        <Header />
        <Tabs
          // defaultActiveKey="home"
          // activeKey={activeKey}
          onChange={this.handleTabChange}
        >
          <TabPane tab="Home" key="home">
            <Home />
          </TabPane>
          <TabPane tab="Profile" key="profile">
            <Profile />
          </TabPane>
          <TabPane tab="Learn" key="learn">
            <Learn />
          </TabPane>
          <TabPane tab="Donate" key="donate">
            <Donate />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
