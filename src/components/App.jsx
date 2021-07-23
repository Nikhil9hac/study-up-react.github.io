// this is the home page for Studyup website
import React from 'react';
import Nav from "./Nav.jsx";
import { Material } from './Material';
import studyData from "../Data.js";

export const Header = () => {
    return (
        <>
      <header id="header">
      <Nav/>
  <div className="container-fluid2" data-aos="zoom-in" data-aos-duration="1500">
  <div className="leftside">
      <p id="header-word" className="up">Study-high</p>
      <p id="header-word" className="platform">one platform for all Study Material</p>
      <p id="header-word" className="word text-center">get free notes book solution previous year question and many more</p>
      <div className="btn-group">
        <button id="btn1" className="button">Get Started</button>
        <button id="btn2"className="button">
           <a href="https://t.me/joinchat/AM0lqnRrUhc1YjFl" >Instant Pdf</a>
          <i className="fab fa-telegram"></i></button></div>
  </div>
  <div className="rightside">
    <img src="https://gdurl.com/JQzx" alt="img"/></div>
</div>
      </header>
        </>
    )
}



export const Footer = () => {
  return (
      <>
              <div className="study-animation">
          <div className="study-animation-image text-center"><img src="https://gdurl.com/ef_Z" alt=""/></div>
          <p id="hub-animation" className="text-center">Study-high</p>
      </div>
      <div className="quick-link">
          <div id="widget1" className="widget">
              <p className="text-center">reference book</p>
              <ul className="widgetlink-2">
                  <li><a href="foundation.html" target="_blank"rel="noreferrer">Rs aggarwal book</a></li>
                  <li><a href="foundation.html" target="_blank"rel="noreferrer">Rd sharma book</a></li>
                  <li><a href="foundation.html" target="_blank"rel="noreferrer">Brain mapping academy</a></li>
                  <li><a href="foundation.html" target="_blank"rel="noreferrer">Pearson IIT Foundation</a></li>
                  <li><a href="foundation.html" target="_blank"rel="noreferrer">S Chand Book</a></li>
              </ul>
          </div>
          <div id="widget2" className="widget">
              <p className="text-center">competitive exam</p>
              <ul className="widgetlink-3">
                  <li><a href="sof_math.html" target="_blank" rel="noreferrer">sof math olymiad</a></li>
                  <li><a href="sof_science.html" target="_blank" rel="noreferrer">SOF science olymiad</a></li>
                  <li><a href="ijso.html" target="_blank" rel="noreferrer">NSEJS IJSO</a></li>
                  <li><a href="img/ntse.jpg" target="_blank" rel="noreferrer">ntse stage 1 and 2</a></li>
                  <li><a href="technothlon.html" target="_blank" rel="noreferrer">technothlon</a></li>
              </ul>
          </div>
      </div>
      <p className="disclaimer text-center">copyright ©2021<span>Study-high</span>all right reserved</p>
      </>
  )
}

export const StudyMaterial=()=>{
 

    return(
        <>
       <section id="study-material">
       <div className="separator text-center" id="separator1">Study Material</div>
    <div className="search text-center" id="containerSearcher">
      <input className="form-control me-2" type="search" placeholder="Search"  aria-label="Search" id="searcherBar"/>
      </div>
        <main className="text-center cardContainer">
        <div className="hide">
                <p className="text-center hidepara">Nothing to See here</p>
            </div>
{studyData.map((val)=>{
  return(
    <Material key={val.name} title={val.name} imgsrc={val.imgSrc} des="get free iit foundation,prmo book nsejs book and many more" links={val.links}/>
  )
})}
</main>
       </section>
</>
    )
}

// searcher vanilla javascript

let hideList=0// no of card which display is none
setInterval(()=>{
  // targeting all card element
  const cardArray=document.querySelectorAll('.card');
  // targeting search bar
  const searcherVal=document.getElementById('searcherBar').value;
  // writing code for search bar to display card
 cardArray.forEach((element)=>{
  if (searcherVal==="") {
    element.style.display="block";
  }
  else if(searcherVal===element.getAttribute('data-value')){
    element.style.display="block";
  }
  else{
    element.style.display="none"
  }
   // writing the code to increase hidelist for none style element to style hidden para
  let cardStyle=window.getComputedStyle(element).display;
  if(cardStyle==="block"){
    hideList=0;
  }
  else{
    hideList=hideList+1
  }
});
// writing the code to display hidePara
const hidePara=document.querySelector(".hide");
  if(hideList>7){
    hidePara.style.display="block"
  }
  else{
    hidePara.style.display="none"
  }
},1000)

