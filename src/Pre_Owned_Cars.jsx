import React from "react";
import Card from "./Card";
// import './Card.css'
import bmw1 from './assets/BMW1.jpeg'
// import bmw2 from './assets/BMW2.jpg'
// import bmw1 from './assets/BMW1.jpg'
// import bmw1 from './assets/BMW1.jpg'
// import bmw1 from './assets/BMW1.jpg'


const Pre_Owned_Cars=()=>{
    return(
        <>
        
        <div className="flex">
        <Card pimg={bmw1} Carname={BMW5Series520d} price={999} des={"21,911 km Diesel 2016"} but={"Buy Now"}/>
        {/* <Card pimg={img2} price={999} des={"Good"} but={"Buy Now"}/>
        <Card pimg={img3} price={999} des={"Good"} but={"Buy Now"}/>
        <Card pimg={img3} price={999} des={"Good"} but={"Buy Now"}/>
        <Card pimg={img3} price={999} des={"Good"} but={"Buy Now"}/> */}
        </div>
        </>
    )
}

export default Pre_Owned_Cars