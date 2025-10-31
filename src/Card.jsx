import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ pimg, Carname, price, des, Add, but }) => {
  const navigate = useNavigate();

  const NextPage = () => {
    navigate("/Bookdetails");
  };

  return (
    <>
      <div className="card-box">
        <img src={pimg} alt="car" className="car-img" />

        <h2>{Carname}</h2>
        <h3>{price}</h3>

        <p>{des}</p>

        <div className="btn-area">
          <button className="btn1">{Add}</button>
          <button className="btn2" onClick={NextPage}>{but}</button>
        </div>
      </div>
    </>
  );
};

export default Card;
