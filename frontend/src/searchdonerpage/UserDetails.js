import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  // Check if user data exists
  if (!user) {
    return (
      <div className="container mt-5">
        <h2>User Details</h2>
        <p>No user data found. Please log in.</p>
        <button className="btn btn-primary" onClick={() => navigate('/')}>Go to Login</button>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>User Details</h2>
      <p><strong>Full Name:</strong> {user.fullName}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Password:</strong> {user.password}</p>
      <p><strong>Mobile No:</strong> {user.mobileNo}</p>
      <p><strong>Aadhaar No:</strong> {user.aadhaarNo}</p>
      <p><strong>Blood Group:</strong> {user.bloodGroup}</p>
      <p><strong>Country:</strong> {user.country}</p>
      <p><strong>State:</strong> {user.state}</p>
      <p><strong>District:</strong> {user.district}</p>
      <p><strong>City/Village:</strong> {user.cityOrVillage}</p>
      <p><strong>Pin Code:</strong> {user.pinCode}</p>
      <button className="btn btn-warning" onClick={() => navigate('/edit-form')}>Edit</button>
    </div>
  );
};

export default UserDetails;