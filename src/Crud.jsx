import React, { useEffect, useState } from "react";
import axios from 'axios'



const Crud=()=>{


 const [Data,setData]=useState([])

    useEffect( ()=>{
        axios.get("http://localhost:3000/Carbook").then( (res)=>{

            setData(res.data);
            
        }).catch((err)=>{

            console.log(err);
            
        })

    },[])

    let del=(id)=>{

        axios.delete(`http://localhost:3000/Carbook/${id}`).then(()=>{
            alert("Data Daleted")
            setData( Data.filter((e)=> e.id !== id))
        })


    }

    return(
        <>
        {/* npm i axios */}
        <h1>show data</h1>


        <table border={5}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Contact number</th>
                    <th>Email id</th>
                    <th>City</th>
                    <th>Aadhaar id</th>
                    <th>Car name</th>
                    <th>Model</th>
                    <th>color</th>
                    <th>Fuel-type</th>
                    <th>Delivery-location</th>
                    <th>Payment</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {Data.map((e) => (
                <tr key={e.id}>
                    <td>{e.name}</td>
                    <td>{e.number}</td>
                    <td>{e.emailid}</td>
                    <td>{e.city}</td>
                    <td>{e.aadhaar}</td>
                    <td>{e.carname}</td>
                    <td>{e.model}</td>
                    <td>{e.color}</td>
                    <td>{e.fuel}</td>
                    <td>{e.dlocation}</td>
                    <td>{e.price}</td>
                    <td onClick={()=>{del(e.id)}}>Delete</td>
                </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}
export default Crud