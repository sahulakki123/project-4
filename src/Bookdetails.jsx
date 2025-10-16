import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Bookdetails=()=>{

        const navigate=useNavigate()


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
    
        let handlesubmit=(e)=>{
            e.preventDefault()

            axios.post("http://localhost:3000/Carbook",formData).then(()=>{
                alert("car book")

                navigate('/home')
            })
        }
        const changeinp=(e)=>{
            setformData({
                ...formData,
                [e.target.name]:e.target.value
    
            }
        )
        }
    

    return(
        <>
        <form onSubmit={handlesubmit}>
        enter name <input type="text"  name='name' value={formData.name} onChange={changeinp} /><br /> <br />
        enter number <input type="num" name='number' value={formData.number} onChange={changeinp} /><br /> <br />

        enter email <input type="text"  name='emailid' value={formData.emailid} onChange={changeinp} /><br /> <br />


        enter city name
        <select name="city" id=""  onChange={changeinp}>
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
        <select name="color" id="" onChange={changeinp}>
            <option value=""></option>
            <option value="Black">Black</option>
            <option value="Blue">Blue</option>
            <option value="Gray">Gray</option>
            <option value="Red">Red</option>
            <option value="White">White</option>
        </select><br /> <br />


        enter fuel type
        <select name="fuel" id="" onChange={changeinp}>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Ev">Ev</option>
        </select><br /> <br />

        enter Delivery-location <input type="text" name='dlocation' value={formData.dlocation} onChange={changeinp} />
        <br /> <br />
        

        <button type="submit">Book Now</button>
        </form>
        </>
    )
}

export default Bookdetails