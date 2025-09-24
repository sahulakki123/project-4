import React from "react";
import Logo from './assets/BMW_Logo.svg'
import bmw from './assets/bmw.jpg'
import { CiUser } from "react-icons/ci";
import { Link, Outlet } from "react-router-dom";

import bmw1 from './assets/500_542.jpg'
import bmw2 from './assets/500x542_0.jpg'
import bmw3 from './assets/5001.jpg'
import bmw4 from './assets/500.jpg'
import bmw5 from './assets/5002.png'
import bmw6 from './assets/50.jpg'

import { FaShoppingCart } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { TbSteeringWheel } from "react-icons/tb";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { IoCarSport } from "react-icons/io5";

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
                    <CiUser />
                </ul>
            </div>
        </div>
        </header>
        <Outlet/>
            <div className="img1">
            <img src={bmw} alt="" height="580px" width="100%"/>
        </div>
                            <img src={bmw1} alt=""  width="33.3%"/>
                            <img src={bmw2} alt="" width="33.3%" />
                            <img src={bmw3} alt="" width="33.3%" />
                            <img src={bmw4} alt="" width="33.3%" />
                            <img src={bmw5} alt="" width="33.3%" />
                            <img src={bmw6} alt=""  width="33.3%"/>

                            
            <div class="container">
                <h2>Shopping Tools</h2>
                <div class="underline"></div>

                <div class="cards">
                <div class="card">
                    <i class="fas fa-shopping-cart"><FaShoppingCart /></i>
                    <p>Shop Online</p>
                </div>
                <div class="card">
                    <i class="fas fa-tag"><MdLocalOffer /></i>
                    <p>Retail Offers</p>
                </div>
                <div class="card">
                    <i class="fas fa-car"><TbSteeringWheel /></i>
                    <p>Book Test Drive</p>
                </div>
                <div class="card">
                    <i class="fas fa-hand-holding-usd"><FaHandHoldingDollar /></i>
                    <p>Finance Plan</p>
                </div>
                <div class="card">
                    <i class="fas fa-car-side"><IoCarSport /></i>
                    <p>Pre-Owned BMW</p>
                </div>
                </div>
            </div>

        </>
    )

}

export default Layout