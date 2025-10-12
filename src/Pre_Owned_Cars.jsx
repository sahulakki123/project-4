import React from "react";
import Card from "./Card";
import "./Card.css"
import bmw1 from './assets/BMW1.jpeg';

const Pre_Owned_Cars = () => {
  return (
    <>
      <div className="con">


        <Card pimg={bmw1} Carname={"BMW 5 Series 520d"} price={999} des={"21,911 km Diesel 2016"} but={"Buy Now"} />
        <Card pimg={bmw1} Carname={"BMW 5 Series 520d"} price={999} des={"21,911 km Diesel 2016"} but={"Buy Now"} />
        <Card pimg={bmw1} Carname={"BMW 5 Series 520d"} price={999} des={"21,911 km Diesel 2016"} but={"Buy Now"} />
        <Card pimg={bmw1} Carname={"BMW 5 Series 520d"} price={999} des={"21,911 km Diesel 2016"} but={"Buy Now"} />
        <Card pimg={bmw1} Carname={"BMW 5 Series 520d"} price={999} des={"21,911 km Diesel 2016"} but={"Buy Now"} />
        <Card pimg={bmw1} Carname={"BMW 5 Series 520d"} price={999} des={"21,911 km Diesel 2016"} but={"Buy Now"} />
      
      </div>
    </>
  );
};

export default Pre_Owned_Cars;
