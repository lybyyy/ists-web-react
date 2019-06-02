import React from 'react';
import style from './style/tech.module.css';
import Footer from './commponents/Footer';

function Tech() {
  return (
    <div className={style.tech}>
      <div className={style.frame}></div>
      <div className={style.bottom}></div>
      <div className={style.advantage}></div>
      <Footer/>
    </div>
  )
}

export default Tech;
