import React from "react";

import bmw1 from './assets/1.jpg'
import bmw2 from './assets/2.jpg'
import bmw3 from './assets/3.jpg'
import bmw4 from './assets/4.jpg'
import bmw5 from './assets/5.jpg'
import bmw from './assets/bmw.jpg'


import bmw6 from './assets/500_542.jpg'
import bmw7 from './assets/500x542_0.jpg'
import bmw8 from './assets/5001.jpg'
import bmw9 from './assets/500.jpg'
import bmw10 from './assets/5002.png'
import bmw11 from './assets/50.jpg'

import { FaShoppingCart } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { TbSteeringWheel } from "react-icons/tb";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { IoCarSport } from "react-icons/io5";

const Home=()=>{
    return(
        <>
        <img src={bmw1} alt="" height="580px" width="100%"/>
        <img src={bmw2} alt="" height="580px" width="100%"/>
        <img src={bmw3} alt="" height="580px" width="100%"/>
        <img src={bmw4} alt="" height="580px" width="100%"/>
        <img src={bmw5} alt="" height="580px" width="100%"/>

        <div className="img1">
            <img src={bmw} alt="" height="580px" width="100%"/>
        </div>

        <div>
            <img src={bmw6} alt="" width="33.3%"/>
            <img src={bmw7} alt="" width="33.3%" />
            <img src={bmw8} alt="" width="33.3%" />
            <img src={bmw9} alt="" width="33.3%" />
            <img src={bmw10} alt="" width="33.3%" />
            <img src={bmw11} alt=""  width="33.3%"/>

        </div>

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

export default Home