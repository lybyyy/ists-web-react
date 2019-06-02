import React from 'react';
import style from './style/solution.module.css';
import Footer from './commponents/Footer';

function Solution() {
  return (
    <div className = {style.solution}>
      <div className = {style.business}></div>
      <div className = {style.s1}></div>
      <div className = {style.s1_1}></div>
      <div className = {style.s1_2}></div>
      <div className = {style.s1_3}></div>
      <div className = {style.s2}></div>
      <div className = {style.s2_1}></div>
      <div className = {style.s2_2}></div>
      <div className = {style.s2_3}></div>
      <div className = {style.s3}></div>
      <div className = {style.s3_1}></div>
      <div className = {style.s3_2}></div>
      <div className = {style.s3_3}></div>
      <Footer/>
    </div>
  )
}

export default Solution;
