import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Nav from "./Nav";
import { Material } from './Material';
import "./font.css";
import "./header.css";
import studyData from "./Data.js";


ReactDOM.render(
 <>
   <Nav/>
  <div className="container-fluid2" data-aos="zoom-in" data-aos-duration="1500">
  <div className="leftside">
      <p id="header-word" className="up">Study-high</p>
      <p id="header-word" className="platform">one platform for all Study Material</p>
      <p id="header-word" className="word text-center">get free notes book solution previous year question and
          many more</p>
      <div className="btn-group">
        <button id="btn1" className="button">Get Started</button>
        <button id="btn2"className="button">
          <a href="https://t.me/joinchat/AM0lqnRrUhc1YjFl" target="_blank">
            Instant Pdf</a><i className="fab fa-telegram"></i></button></div>
  </div>
  <div className="rightside">
    <img src="https://gdurl.com/JQzx" alt="" srcset=""/></div>
</div>
{studyData.map((val)=>{
  console.log(val);
})}
 </>
 ,
  document.getElementById('header')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
