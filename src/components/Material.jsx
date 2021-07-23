import React from 'react';
import { NavLink } from 'react-router-dom';

export const Material = (props) => {
    return (
       <>
        <div className="card " data-value={props.title} data-value2={props.title} id="image1" data-aos="fade-right"
                data-aos-duration="1200">
                    <img src={props.imgsrc} className="card-img-top" alt={props.title}/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.des}</p>
                   <button className="btn btn-primary"><NavLink to={props.links} style={{ color:"#fff",textDecoration:"none"}}>click here</NavLink></button>
                </div>
            </div>
       </>
    )
}
