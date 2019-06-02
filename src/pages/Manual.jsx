import React from 'react';
import { Menu, Icon, Divider, Tag  } from 'antd';
import CodeBlock from './commponents/CodeBlock';
import DataTable from './commponents/DataTable'
const { SubMenu }  = Menu;

const codeString = '.test{\n display: flex;xxxxxxxxxxxxxxxaa\n color: #ccc\n}'
const language = 'css'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="http://www.baidu.com">{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="http://www.baidu.com">Invite {record.name}</a>
        <Divider type="vertical" />
        <a href="http://www.baidu.com">Delete</a>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

class Manual extends React.Component {
  state = {
    theme: 'dark',
    current: '1',
  };
  content() {

    switch (this.state.current) {
      case '1': return (
        <div>
          <h1>Manual</h1>
          <CodeBlock codeString={codeString} language={language}/>
        </div>
      );
      case '2': return (
        <h2>sth</h2>
      );
      case '3': return (
        <div>
          <DataTable data={data} columns={columns} />
        </div>
      )
      default: return (
        <h1> nothing here</h1>
      )
    }
  };
  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
  render() {
    const contentWidth = document.body.clientWidth - 256 + 'px'
    const contentHeight = document.body.clientHeight - 48 + 'px'
    
    return (
      <div style={{display: 'flex', height: contentHeight, backgroundColor: '#001529'}}>
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>Navigtion Two</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="setting" />
                <span>Navigation Three</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
        <div style={{padding: '20px', backgroundColor: '#fff', width: contentWidth}}>
          {this.content()}
        </div>
      </div>
    );
  }
}

export default Manual;
