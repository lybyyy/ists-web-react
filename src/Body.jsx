import React from 'react';
import Tech from './pages/Tech.jsx';
import Solution from './pages/Solution.jsx';
import Home from './pages/Home.jsx';
import Baas from './pages/Baas.jsx';
import Case1 from './pages/Case1.jsx';
import Case2 from './pages/Case2.jsx';
import Case3 from './pages/Case3.jsx';
import Document from './pages/Document.jsx';
import Manual from './pages/Manual.jsx';
import Operator from './pages/Operator.jsx';
import User from './pages/User.jsx';

class Body extends React.Component {
  // 新增页面时，导入页面组件，在switch中增加映射即可
  getComponents(name) {
    switch (name) {
        case 'Tech':
          return <Tech />;
        case 'Solution':
          return <Solution />;
        case 'Baas':
          return <Baas />;
        case 'Document':
          return <Document />;
        case 'Manual':
          return <Manual />;
        case 'case1':
          return <Case1 />;
        case 'case2':
          return <Case2 />;
        case 'case3':
          return <Case3 />;
        case 'Operator':
          return <Operator />;
        case 'User':
          return <User />;
        default:
          return <Home emit={this.emit.bind(this)} />;
      }
  }
  emit(value) {
    this.props.emit(value)
  }
  getHeight() {
    const { clientHeight } = document.body
    return clientHeight - 48 + 'px'
  }
  render() {
    return <div style={{height: this.getHeight(), overflow: 'scroll'}}>{this.getComponents(this.props.name)}</div>
  }
}

export default Body;
