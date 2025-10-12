import React from "react";
import './Card.css'

const Card=({pimg,Carname, price,des,but})=>{
    return(
        <>
            <div className="bo">
                <img src={pimg} alt="" />
                <h2>{Carname}</h2>
                <h2 className="justify-around items-center">{price}</h2>
                <p>{des}</p>
                <button>{but}</button>
            </div>
        </>
    )
}

export default Card