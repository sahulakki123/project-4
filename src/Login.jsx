import React, { useState } from "react";
import "./Log.css";
import { useNavigate } from "react-router-dom";



const Rform = () => {
  const [formData, setFormData] = useState({
    email: "",
    pass: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitform = (e) => {
    e.preventDefault();
    alert(`Email is ${formData.email} and Password is ${formData.pass}`);
  };


          const navigate=useNavigate()

          const NextPage = () => {
        navigate("/Signup");
  };


  return (
    <div className="form-container">
      <form className="rform" onSubmit={submitform}>
        <h2>Login & </h2><h2 onClick={NextPage}>Signup</h2>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" name="pass" value={formData.pass} onChange={handleChange} placeholder="Enter your password" required />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Rform;
