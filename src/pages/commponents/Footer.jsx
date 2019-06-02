import React from 'react';
import style from '../style/footer.module.css';
function Footer() {
  return (
    <div className={style.footer}>
      <h4>智能服务交易与监管技术基础平台</h4>
      <div style={{display: 'flex', width: '70%', borderBottom: '1px solid #eee', padding: '10px'}}>
        <span>帮助与支持<br/>Q&A</span>
        <span>联系我们<br/>Email: ists@cufe.edu.cn</span>
      </div>
      <h5>Copyright @2019 国家重点研发专项“智能服务交易与监管技术”课题组</h5>
    </div>
  )
}
export default Footer;
