import React from "react";
import Card from "./Card";
import "./Card.css"
import bmw1 from './assets/BMW1.jpeg';
import bmw2 from './assets/bmw 5s.jpeg';
import bmw3 from './assets/BMW 3.jpg';
import bmw4 from './assets/BMW3.jpeg';
import bmw5 from './assets/BMW M.jpeg';
import bmw6 from './assets/bmw33.jpeg';
import bmw7 from './assets/bmw 8.jpeg';
import bmw8 from './assets/bmw 9.jpeg';
import Home from "./Home";


const Pre_Owned_Cars = () => {
  return (
    <>
      <div className="con">


        <Card pimg={bmw1} Carname={"BMW 5 Series 520d"} price={7000000} des={"18,911 km Diesel 2016"} Add={"add card"} but={"Buy Now"} />
        <Card pimg={bmw2} Carname={"BMW 5 Series review"} price={7000000} des={"12,9122 km Diesel 2025"} Add={"add card"} but={"Buy Now"} />
        <Card pimg={bmw3} Carname={"BMW 3 Series Gran"} price={5000000} des={"25,981 km Diesel 2023"} Add={"add card"} but={"Buy Now"} />
        <Card pimg={bmw4} Carname={"BMW 7 Series iXDrive"} price={8000000} des={"22,911 km Diesel 2024"} Add={"add card"} but={"Buy Now"} />
        <Card pimg={bmw5} Carname={"BMW 5 Series 520d"} price={7000000} des={"31,851 km Diesel 2016"} Add={"add card"} but={"Buy Now"} />
        <Card pimg={bmw6} Carname={"BMW X3 Review "} price={5000000} des={"23,911 km Diesel 2025"} Add={"add card"} but={"Buy Now"} />
        <Card pimg={bmw7} Carname={"BMW N4 Series"} price={8000000} des={"25,831 km Diesel 2016"} Add={"add card"} but={"Buy Now"} />
        <Card pimg={bmw8} Carname={"BMW 44oi Coupe"} price={10000000} des={"29,911 km Diesel 2025"} Add={"add card"} but={"Buy Now"} />
      
      </div>
      <Home/>
    </>
  );
};

export default Pre_Owned_Cars;
