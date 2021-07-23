import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router.jsx";
// import { Header,StudyMaterial } from './components/App.jsx';
import "./font.css";
import "./header.css";
import "./material.css";
import "./foundation.css";
import "./footer.css";
import "./contact.css";
import "./olymiad.css"

ReactDOM.render(
 <>
<BrowserRouter>
<Router/>
</BrowserRouter>
{/* <Header/>
<StudyMaterial/> */}
 </>
 ,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
