import React,{useState} from 'react';
// import {ChangeInp} from "./Request-Course.jsx";

export const Deadlink = () => {
    const [credential,setCredential]=useState({
        name:"",
        gmail:"",
        course:""
    })
    const ChangeInp=(event)=>{
        const {name,value}=event.target;
        setCredential((preValue)=>{
            return{
                ...preValue,
                [name]:value
            }
        })
    }
    return (
        <>
           <div className="request-container text-center">
         <div className="top ">
             <img src="https://i.ibb.co/MPbvX2V/sign-in.png" alt="" />
         </div>
                 <div className="alert-zone text-center"></div>
         <div className="input-container">
         <form action="/request-course" method="post" autoComplete="off">
             <input type="text" name="name" id="userName" placeholder="Username" onChange={ChangeInp} value={credential.name} required />
             <input type="email" name="gmail" id="userGmail" placeholder="Gmail" onChange={ChangeInp} value={credential.gmail} required />
             <input type="text" name="course" id="userCourse" placeholder="Enter Your Dead Course" value={credential.course} onChange={ChangeInp} required />
             <div>
                 <input type="submit" value="Submit" id="submitBtn" />
             </div>
             </form>
         </div>
     </div>
        </>
    )
}
