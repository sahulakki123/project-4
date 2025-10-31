import React from "react";
import "./index.css"

import Logo from './assets/BMW_Logo.svg'
import { Link, Outlet } from "react-router-dom";


import Footer from "./Footer";

const Layout=()=>{

    return(
        <>
        <header>
        <div className="nav">
            <div className="nav-part-1">
                <img src={Logo} alt="logo"/>
                <ul>
                    <li> <Link to="/home">Home</Link></li>
                    <li> <Link to="/NewCars">New Cars</Link></li>
                    <li> <Link to="/Pre_Owned_Carserves">Pre-Owned Cars</Link></li>
                    <li> <Link to="/Services">Services</Link></li>
                    <li> <Link to="/Finance&Offers">Finance & Offers</Link></li>
                    <li> <Link to="/Explore">Explore</Link></li>
                    <li> <Link to="/Contact">Contact Us</Link></li>
                    <li> <Link to="/Buy_Nov">Buy Nov</Link></li>
                    <li> <Link to="/Login">Log in</Link></li>        
                </ul>
            </div>
        </div>
        </header>
        <Outlet/>
          
        <Footer/>
        </>
    )

}

export default Layout