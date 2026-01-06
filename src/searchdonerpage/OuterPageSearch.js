import React from 'react';
import { useNavigate } from 'react-router-dom';

const OuterPageSearch = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h2>Dashboard</h2>
      <button className="btn btn-primary me-2" onClick={() => navigate('/user-details')}>Your Details</button>
      <button className="btn btn-success" onClick={() => navigate('/search')}>Search for Donor</button>
    </div>
  );
};

export default OuterPageSearch;