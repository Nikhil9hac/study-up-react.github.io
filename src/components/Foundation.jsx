import React from 'react';
import studyData from "../Data.js"

export const Foundation = () => {
    let foundation=studyData.filter((val)=>{
        return val.name==="foundation-book";
    })
    const material_link=foundation[0].material_link;
    return (
        <>
        <ul className="material-widget">
        {Object.keys(material_link).map((val)=>{
            return(
                <li className="material-link-link"><a
                href={val}
                target="_blank" rel="noreferrer">{material_link[val]}</a></li>
            )
        })}
        </ul>
        </>
    )
}
