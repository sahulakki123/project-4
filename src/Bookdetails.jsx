import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Crud.css"

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






<form onSubmit={handlesubmit} className="booking-form">

  <div>
    <label>Name</label>
    <input type="text" name="name" value={formData.name} onChange={changeinp} required />
  </div>

  <div>
    <label>Phone Number</label>
    <input type="number" name="number" value={formData.number} onChange={changeinp} required />
  </div>

  <div>
    <label>Email</label>
    <input type="email" name="emailid" value={formData.emailid} onChange={changeinp} required />
  </div>

  <div>
    <label>City</label>
    <select name="city" onChange={changeinp} required>
      <option value="">-- Select City --</option>
      <option value="Bhopal">Bhopal</option>
      <option value="Indore">Indore</option>
      <option value="Delhi">Delhi</option>
      <option value="Betul">Betul</option>
      <option value="Multai">Multai</option>
      <option value="Nagpur">Nagpur</option>
    </select>
  </div>

  <div>
    <label>Aadhaar Number</label>
    <input type="text" name="aadhaar" value={formData.aadhaar} onChange={changeinp} required />
  </div>

  <div>
    <label>Number of Cars</label>
    <input type="number" name="carcount" value={formData.carcount} onChange={changeinp} required />
  </div>

  {/* RIGHT SIDE */}
  <div>
    <label>Car Name</label>
    <input type="text" name="carname" value={formData.carname} onChange={changeinp} required />
  </div>

  <div>
    <label>Model</label>
    <select name="model" onChange={changeinp} required>
      <option value="">-- Select Model --</option>
      <option value="5000000">3 Series</option>
      <option value="7000000">5 Series</option>
      <option value="8000000">7 Series</option>
      <option value="9000000">9 Series iX</option>
      <option value="10000000">9 Series X3</option>
      <option value="12000000">9 Series X7</option>
    </select>
  </div>

  <div>
    <label>Color</label>
    <select name="color" onChange={changeinp} required>
      <option value="">-- Select Color --</option>
      <option value="Black">Black</option>
      <option value="Blue">Blue</option>
      <option value="Gray">Gray</option>
      <option value="Red">Red</option>
      <option value="White">White</option>
    </select>
  </div>

  <div>
    <label>Fuel Type</label>
    <select name="fuel" value={formData.fuel} onChange={changeinp} required>
      <option value="">-- Select Fuel Type --</option>
      <option value="Petrol">Petrol</option>
      <option value="Diesel">Diesel</option>
      <option value="Ev">Ev</option>
    </select>
  </div>

  <div>
    <label>Delivery Location</label>
    <input type="text" name="dlocation" value={formData.dlocation} onChange={changeinp} required />
  </div>

  <button type="submit" className="btn-submit">Book Now</button>
</form>











{/*         
      
      <h2>🚗 Car Booking Form</h2>
      <form onSubmit={handlesubmit} className="booking-form">
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={changeinp} required />

        <label>Phone Number</label>
        <input type="number" name="number" value={formData.number} onChange={changeinp} required />

        <label>Email</label>
        <input type="email" name="emailid" value={formData.emailid} onChange={changeinp} required />

        <label>City</label>
        <select name="city" onChange={changeinp} required>
          <option value="">-- Select City --</option>
          <option value="Bhopal">Bhopal</option>
          <option value="Indore">Indore</option>
          <option value="Delhi">Delhi</option>
          <option value="Betul">Betul</option>
          <option value="Multai">Multai</option>
          <option value="Nagpur">Nagpur</option>
        </select>

        <label>Aadhaar Number</label>
        <input type="text" name="aadhaar" value={formData.aadhaar} onChange={changeinp} required />

        <label>Number of Cars</label>
        <input type="number" name="carcount" value={formData.carcount} onChange={changeinp} required />

        <label>Car Name</label>
        <input type="text" name="carname" value={formData.carname} onChange={changeinp} required />

        <label>Model</label>
        <select name="model" onChange={changeinp} required>
          <option value="">-- Select Model --</option>
          <option value="5000000">3 Series</option>
          <option value="7000000">5 Series</option>
          <option value="8000000">7 Series</option>
          <option value="9000000">9 Series iX</option>
          <option value="10000000">9 Series X3</option>
          <option value="12000000">9 Series X7</option>
        </select>

        <label>Color</label>
        <select name="color" onChange={changeinp} required>
          <option value="">-- Select Color --</option>
          <option value="Black">Black</option>
          <option value="Blue">Blue</option>
          <option value="Gray">Gray</option>
          <option value="Red">Red</option>
          <option value="White">White</option>
        </select>

        <label>Fuel Type</label>
        <select name="fuel" value={formData.fuel} onChange={changeinp} required>
          <option value="">-- Select Fuel Type --</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Ev">Ev</option>
        </select>

        <label>Delivery Location</label>
        <input type="text" name="dlocation" value={formData.dlocation} onChange={changeinp} required />

        <button type="submit">Book Now</button>
      </form> */}
  
        </>
    )
}

export default Bookdetails