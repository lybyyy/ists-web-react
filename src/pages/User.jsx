import React from 'react';
import logo from './asset/2.jpg';
import Footer from './commponents/Footer.jsx';
import './style/home.module.css';
import style from './style/link.module.css';

function User() {
  return (
    <div className = {style.user}>
      <div className = {style.page}>
        <div style={{fontSize: '20px', color: '#333'}}>
            以自主可控的区块链基础设施，<br/>
            基于场景，构建安全高效的解决方案。<br/>
            为企业及机构搭建价值连接器，共同推动价值互联网发展。
        </div>
        <div>
          <img src={logo} alt="logo" style={{margin: '0 auto'}}/>
        </div>
      </div>
      <div className={style.button} align="center">
        <button><a href="http://10.11.252.44:8081"> 用户入口</a></button>
      </div>
      <Footer/>
    </div>
  )
}

export default User;
