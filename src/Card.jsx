import React from "react";


const Card=({pimg,Carname, price,des,but})=>{
    return(
        <>
            <div className="border w-70 h-65">
                <h1>Card</h1>
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