import React from "react";
import { Routes, Route, Link,  } from "react-router-dom";
import Home from "./Home"
import New_Cars from "./New_Cars"
import Pre_Owned_Cars from "./Pre_Owned_Cars"
import Services from "./Services"
import Finance from "./Finance"
import Explore from "./Explore"
import Contact from "./Contact"
import Buy_Nov from "./Buy_Nov"
import Layout from "./Layout"


const Routing=()=>{

    return(
        <>
            <Routes>
                
                <Route path="/" element={<Layout/>}>
                <Route path="/home" element={<Home/>}/>
                <Route path="/NewCars" element={<New_Cars/>}/>
                <Route path="/Pre_Owned_Carserves" element={<Pre_Owned_Cars/>}/>
                <Route path="/Services" element={<Services/>}/>
                <Route path="/Finance&Offers" element={<Finance/>}/>
                <Route path="/Explore" element={<Explore/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/Buy_Nov" element={<Buy_Nov/>}/>
                <Route path="*" element={<h1>Error</h1>}/>
            </Route>
            </Routes>
        </>
    )
}
export default Routing