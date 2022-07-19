import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Pincode.css";
import {Link} from 'react-router-dom'

export const Pincode = () => {
  const [apiData, setApiData] = useState([]);
  const [currCode, setCurrCode] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (currCode.length === 6) {
      setLoading(true);
      axios
        .get(`https://api.postalpincode.in/pincode/${currCode}`)
        .then((getData) => {
          setApiData(getData?.data[0]?.PostOffice);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      alert("Enter valid Pincode");
    }
  };

  return (
    <div className="p">
      <div className="p-wrapper">
        <h1 className="p-head">Search by Pincode</h1>
        <form className="p-form">
          <input
            onChange={(e) => {
              setCurrCode(e.target.value);
            }}
            type="number"
            placeholder="Enter Pincode"
          />
        </form>
        <div className="h-button">
        <button onClick={handleSubmit} className="p-button">
          Get Details
        </button>
        <Link to='/'>
          <button className='h-location'>Back</button>
        </Link>
        </div>
      </div>
      {loading ? (
        <div className="PostCard">Loading.....</div>
      ) : (
        <div className="p-data">
          <div className="p-pre">
            {apiData && apiData.length > 0
              ? apiData.map((data) => {
                  return (
                    <div key={data?.Name} className="PostCard">
                      <p>Name : {data?.Name}</p>
                      <p>Description : {data?.Description}</p>
                      <p>BranchType : {data?.BranchType} </p>
                      <p>DeliveryStatus : {data?.DeliveryStatus} </p>
                      <p>Circle : {data?.Circle} </p>
                      <p>District : {data?.District} </p>
                      <p>Division : {data?.Division} </p>
                      <p>Region : {data?.Region} </p>
                      <p>State : {data?.State} </p>
                      <p>Country : {data?.Country} </p>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      )}
    </div>
  );
};
