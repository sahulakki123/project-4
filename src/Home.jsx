import React from "react";

import bmw1 from './assets/1.jpg'
import bmw2 from './assets/2.jpg'
import bmw3 from './assets/3.jpg'
import bmw4 from './assets/4.jpg'
import bmw5 from './assets/5.jpg'

const Home=()=>{
    return(
        <>
        <img src={bmw1} alt="" height="580px" width="100%"/>
        <img src={bmw2} alt="" height="580px" width="100%"/>
        <img src={bmw3} alt="" height="580px" width="100%"/>
        <img src={bmw4} alt="" height="580px" width="100%"/>
        <img src={bmw5} alt="" height="580px" width="100%"/>
        </>
    )
}

export default Home