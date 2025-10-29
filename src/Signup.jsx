import React, { useState } from "react";



const Rform=()=>{

    let [formData,setformdata]=useState({
        name:"",
        num:"",
        email:"",
        pass:"",
        cpass:""
    })

    let handlchange=(e)=>{
       setformdata ({...formData, [e.target.name]:e.target.value})

    }

    let submitform=(e)=>{
        e.preventdefault(
        alert(`name is ${formData.name} and number ${formData.num}, email ${formData.email}`)
        )
    }


    return(
        <>

        <form onSubmit={submitform}>
         enter name <input type="text"  name="name" value={formData.name} onChange={handlchange}/><br /> <br />
         enter number <input type="text" name="num" value={formData.num} onChange={handlchange} /><br /> <br />
         enter email <input type="text" name="email" value={formData.email} onChange={handlchange} /><br /> <br />
         enter pass <input type="text" name="pass" value={formData.pass} onChange={handlchange} /><br /> <br />
         enter confirm pass <input type="text" name="cpass" value={formData.cpass} onChange={handlchange} /><br /> <br />

         <button type="submit">submit</button>
         </form>
        </>
    )
}

export default Rform