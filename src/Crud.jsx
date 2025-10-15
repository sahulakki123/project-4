import React, { useEffect, useState } from "react";
import axios from 'axios'



const Crud=()=>{


 const [Data,setData]=useState([])
 const [editid,seteditid]=useState(null)
const [formData, setformData]=useState({
     
             name:"",
             number:"",
             emailid:"",
             city:"",
             aadhaar:"",
             carcount:"",
             carname:"",
             model:"",
             color:"",
             fuel:"",
             dlocation:"",
             price:""
 
         })

    
    
 const changeinp=(e)=>{
            setformData({
                ...formData,
                [e.target.name]:e.target.value
    
            }
        )
        }
    


    const getData=()=>{

     axios.get("http://localhost:3000/Carbook").then( (res)=>{

            setData(res.data);
            
        }).catch((err)=>{

            console.log(err);
            
        })
   }

    useEffect( ()=>{
        getData()

    },[])

    let del=(id)=>{

        axios.delete(`http://localhost:3000/Carbook/${id}`).then(()=>{
            alert("Data Daleted")
            getData()
            // setData( Data.filter((e)=> e.id !== id))
        })


    }



    const openform=(user)=>{

      seteditid(user)
      setformData({
             name:user.name,
             number:user.number,
             emailid:user.emailid,
             city:user.city,
             aadhaar:user.aadhaar,
             carcount:user.carcount,
             carname:user.carname,
             model:user.model,
             color:user.color,
             fuel:user.fuel,
             dlocation:user.dlocation,
             price:user.price
      })

    }

    const handlupdata=(e)=>{
      e.preventDefault()
      axios.put(`http://localhost:3000/Carbook/${editid.id}`,formData)
      getData()
     seteditid(null)


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
                    <th>Car Count</th>
                    <th>Car name</th>
                    <th>Model</th>
                    <th>color</th>
                    <th>Fuel-type</th>
                    <th>Delivery-location</th>
                    <th>Payment</th>
                    <th>Total</th>
                    <th>Delete</th>
                    <th>Edit</th>
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
                    <td>{e.carcount}</td>
                    <td>{e.carname}</td>
                    <td>{e.model*e.carcount}</td>
                    <td>{e.color}</td>
                    <td>{e.fuel}</td>
                    <td>{e.dlocation}</td>
                    <td>{e.price}</td>
                    <td>{e.price}</td>
                    <td onClick={()=>{del(e.id)}}>Delete</td>
                    <td onClick={()=>{openform(e)}}>Edit</td>
                </tr>
                ))}
            </tbody>
        </table>




        { editid && (


            <form onSubmit={handlupdata}>
        enter name <input type="text"  name='name' value={formData.name} onChange={changeinp} /><br /> <br />
        enter number <input type="num" name='number' value={formData.number} onChange={changeinp} /><br /> <br />

        enter email <input type="text"  name='emailid' value={formData.emailid} onChange={changeinp} /><br /> <br />


        enter city name
        <select name="city" id="" value={formData.city} onChange={changeinp}>
            <option value="Bhopal">Bhopal</option>
            <option value="Indore">Indore</option>
            <option value="Delhi">Delhi</option>
            <option value="Betul">Betul</option>
            <option value="Multai">Multai</option>
            <option value="Nagpur">Nagpur</option>
        </select> <br /> <br />

        enter Aadhaar number <input type="text" name='aadhaar' value={formData.aadhaar} onChange={changeinp} /><br /> <br />

        enter car count <input type="text" name='carcount' value={formData.carcount} onChange={changeinp} /><br /> <br />
        enter car name <input type="text"  name='carname'value={formData.carname} onChange={changeinp} /><br /> <br />


        enter Model name
        <select name="model" id="" onChange={changeinp}>
            <option value="5000000">3 Series</option>
            <option value="7000000">5 Series</option>
            <option value="8000000">7 Series</option>
            <option value="9000000">9 Series iX</option>
            <option value="10000000">9 Series X3</option>
            <option value="12000000">9 Series X7</option>
        </select> <br /> <br />


        enter color type
        <select name="color" id="" value={formData.color} onChange={changeinp}>
            <option value="Black">Black</option>
            <option value="Blue">Blue</option>
            <option value="Gray">Gray</option>
            <option value="Red">Red</option>
            <option value="White">White</option>
        </select><br /> <br />


        enter fuel type
        <select name="fuel" id="" value={formData.fuel} onChange={changeinp}>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Ev">Ev</option>
        </select><br /> <br />

        enter Delivery-location <input type="text" name='dlocation' value={formData.dlocation} onChange={changeinp} />
        <br /> <br />



        <button type="submit">Updata</button>
        </form>

        )}

        </>
    )
}
export default Crud