import React from 'react';
import Footer from './commponents/Footer.jsx';
import style from './style/home.module.css';
import logo from './asset/2.jpg'
const nodes = [
  {name: '数字资产', color: '#23e2d3'},
  {name: '交易验证', color: '#e2f133'},
  {name: '共享账本', color: '#11ff32'},
  {name: '知识产权', color: '#f231a1'}
]

const random = (phase) => {
  const n = nodes.length
  let result = []
  for (let i = 0; i < n; i ++) {
    let percentage = (360 / (n+1)) * i + phase;
    result.push([Math.cos(percentage) * 0.4 + 0.5, - Math.sin(percentage) * 0.34 + 0.5])
  }
  return result
}
const renderNode = (node, index, phase) => {
  const { name, color } = node
  const [x, y] = random(phase)[index]
  return (
    <div className={style.node} key={index} style={{position: 'absolute', top: y * 100 + '%', left: x * 100 + '%'}}>
      <div className={style.dot} style={{backgroundColor: color}}></div>
      <div className={style.text}>{name}</div>
    </div>
  )
}
class Home extends React.Component {
  render(){
    const phase = Math.random() * 360
    return (
      <div className={style.Home}>
        <div className={style.banner}>
          <div className={style.title}>国家重点研发专项<br/>智能服务交易与监管技术基础平台</div>
          <div className={style.background} style={{position: 'relative'}}>
            {/* <img src={background} alt="background" width="100%"/> */}
            {nodes.map((node, index) =>renderNode(node, index, phase))}
          </div>
          <div className={style.slogan}>打造数字经济时代信任基石</div>
          <div>&nbsp;</div>
          <div className={style.detail}>数字资产 / 交易验证 / 共享账本 / 知识产权</div>
          <div>&nbsp;</div>
        </div>
        <div className={style.asset}>
          <div>
            <div style={{fontSize: '40px', color: '#111'}}>我们的主张</div>
            <div style={{fontSize: '20px', color: '#333'}}>
              以自主可控的区块链基础设施，<br/>
              基于场景，构建安全高效的解决方案。<br/>
              为企业及机构搭建价值连接器，共同推动价值互联网发展。
            </div>
            <div className={style.button}><button onClick={()=>this.props.emit('Solution')}>了解更多></button></div>
          </div>
          <div>
            <img src={logo} alt="logo" style={{margin: '0 auto'}}/>
          </div>
        </div>
        <div className={style.advance}>
          <div className={style.title}>我们的优势</div>
          <ul className={style.feature}>
            <li><div className={style.performance}></div><h2>性能领先</h2><p>高吞吐</p></li>
            <li><div className={style.effective}></div><h2>灵活高效</h2><p>可插拔模块</p></li>
            <li><div className={style.swift}></div><h2>快速接入</h2><p>一键部署</p></li>
            <li><div className={style.safe}></div><h2>实用安全</h2><p>新型密码</p></li>
          </ul>
        </div>
        <div className={style.platform}>
          <h2>智能服务交易与监管技术基础平台</h2>

          <div className={style.business}>
            <p>交易验证</p>
            <p>知识产权</p>
            <p>共识机制</p>
            <p>新型密码</p>
            <p>性能测试</p>
          </div>
          <div className={style.bdetail}>
            <h3>基于主客体交易基础信息验证方案</h3>
            <h3>高新技术企业在监管机构下参与区块链知识产权交易系统</h3>
            <h3>基于Fabric架构的网络，支持课题组自研共识的多种可插拔共识机制</h3>
            <h3>支持国密标准的加密算法</h3>
            <h3>支持即插即用的区块链系统基准性能测试</h3>
          </div>
          
          
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Home;
