import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Body from './Body.jsx';
import './App.css';

import { Menu, Icon } from 'antd';
import logo from './logo.svg';
const { SubMenu }  = Menu;

class App extends React.Component {
  state = {
    current: 'Home'
  };
  emit = value => {
    this.setState({
      current: value
    })
  }
  handleClick = e => {
    this.setState({
      current: e.key
    })
  };
  render() {
    return (
      <div>
      <div style={{ display: 'flex', backgroundColor: '#001529' }}>
      <img src={logo} alt="logo" width="60px" height="48px" /><span style={{color: '#fff', fontSize: '28px'}}>智能服务交易与监管技术基础平台</span>
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" theme="dark">
        <Menu.Item key="Home">
          <Icon type="home" />
          首页
        </Menu.Item>
        <Menu.Item key="Solution">
          <Icon type="bulb" />
          方案
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="cloud-server" />
              开放平台
              <Icon type="caret-down" />
            </span>
          }
        >
          <Menu.ItemGroup>
            <Menu.Item key="Operator">
              管理员入口
            </Menu.Item>
            <Menu.Item key="User">用户入口</Menu.Item>
            <Menu.Item key="Document">开发文档</Menu.Item>
            <Menu.Item key="Manual">用户手册</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="Tech">
          {/* <a href="https://ant.design" target="_blank" rel="noopener noreferrer"> */}
          <Icon type="rocket" />
            技术
          {/* </a> */}
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="switcher" />
              案例
              <Icon type="caret-down" />
            </span>
          }
        >
          <Menu.ItemGroup>
            <Menu.Item key="case1">主客体交易</Menu.Item>
            <Menu.Item key="case2">知识产权交易</Menu.Item>
            <Menu.Item key="case3">溯源与供应链金融</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </div>
    {/* 页面内容插槽 */}
    <Body name={this.state.current} emit={this.emit.bind(this)}/>
    </div>
    );
  }
}
export default App;
