import React from "react";
import Logo from './assets/BMW_Logo.svg'
import bmw from './assets/bmw.jpg'
import { CiUser } from "react-icons/ci";


function Header(){

    return(
        <>
        <div className="nav">
            <div className="nav-part-1">
                <img src={Logo} alt="logo"/>
                <ul>
                    <li>Home</li>
                    <li>New Cars</li>
                    <li>Pre-Owned Cars</li>
                    <li>Services</li>
                    <li>Finance & Offers</li>
                    <li>Explore</li>
                    <li>Contact Us</li>
                    <li>Buy Nov</li>
                    <CiUser />
                </ul>
            </div>
        </div>
            <div className="img1">
            <img src={bmw} alt="" height="580px" width="100%"/>
        </div>
        
        </>
    )

}

export default Header