import React from "react";
import Logo from './assets/BMW_Logo.svg'
import bmw from './assets/bmw.jpg'
import { CiUser } from "react-icons/ci";
import { Link, Outlet } from "react-router-dom";


const Layout=()=>{

    return(
        <>
        <header>
        <div className="nav">
            <div className="nav-part-1">
                <img src={Logo} alt="logo"/>
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/NewCars">New Cars</Link></li>
                    <li> <Link to="/Pre_Owned_Carserves">Pre-Owned Cars</Link></li>
                    <li> <Link to="/Services">Services</Link></li>
                    <li> <Link to="/Finance&Offers">Finance & Offers</Link></li>
                    <li> <Link to="/Explore">Explore</Link></li>
                    <li> <Link to="/Contact">Contact Us</Link></li>
                    <li> <Link to="/Buy_Nov">Buy Nov</Link></li>
                    <CiUser />
                </ul>
            </div>
        </div>
        </header>
        <Outlet/>
            <div className="img1">
            <img src={bmw} alt="" height="580px" width="100%"/>
        </div>
        
        </>
    )

}

export default Layout