import React from "react";
import './Card.css'
import { useNavigate } from "react-router-dom";


const Card=({pimg,Carname, price,des,Add,but})=>{

        const navigate=useNavigate()

          const NextPage = () => {
        navigate("/Bookdetails");
  };



    return(
        <>
            <div className="bo">
                <img src={pimg} alt="" />
                <h2>{Carname}</h2>
                <h2 className="justify-around items-center">{price}</h2>
                <p>{des}</p>
                <button>{Add}</button>
                <button onClick={NextPage}>{but}</button>
            </div>
        </>
    )
}

export default Card