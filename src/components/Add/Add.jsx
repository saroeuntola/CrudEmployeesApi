import React, { useState} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  
  const [name ,setName] = useState('')
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const inputData = {
    name: name,
    address: address,
    mobile: mobile,
  };


  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/save", inputData);
      alert("Employee Registration Successful");
      navigate("/");
    } catch (err) {
      alert("Employee Registration Failed");
    }
  };



  return (
    <main className="container main-add">
      <h2>Add New</h2>
      <form onSubmit={handleSave}>
        <div className="form-group mb-3 mt-4">
          <label>Name</label>
          <input
            type="text"
            className="form-control shadow-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label>Address</label>
          <input
            type="text"
            className="form-control shadow-none"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group mb-4">
          <label>Mobile</label>
          <input
            type="text"
            className="form-control shadow-none"
            name="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary me-3">
          Save
        </button>
        <Link to="/">
          <button className="btn btn-danger">Back</button>
        </Link>
      </form>
    </main>
  );
};

export default Add;
