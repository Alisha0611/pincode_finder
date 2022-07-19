import React, { useState } from 'react'
import './Location.css'
import {Link} from 'react-router-dom';
import axios from 'axios';


export const Location = () => {
  const [apiData, setApiData] = useState([]);
  const[Location, setLocation] = useState(null);
  const[loading, setLoading] = useState(false);

  const handleClick = () => {
    if(Location.length !== 0){
      setLoading(true);
      axios.get(`https://api.postalpincode.in/postoffice/${Location}`)
  .then((getData) => {
    setApiData(getData?.data[0]?.PostOffice)
  })
  .finally(() => {
    setLoading(false);
  });
  }
    else{
      alert("Enter Location");
    }
  }

  return (
    <div className='l'>
        <div className="l-wrapper">
            <h1 className="l-head">Search by Location</h1>
            <form className='l-form'>
                <input 
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                type="text" placeholder='Enter Location'/>
            </form>
            <div className="h-button">
              <button onClick={handleClick} className="p-button">
                Get Details
              </button>
              <Link to='/'>
                <button className='h-location'>Back</button>
              </Link>
            </div>
        </div>
        {loading ? (
          <div className='PostCard'> Loading...</div>
          ) : (
            <div className="l-data">
          {apiData && apiData.length>0 ?
          apiData.map((data) => {
            return (
              <div key={data?.Name} className="PostCard">
                      <p>Name : {data?.Name}</p>
                      <p>Description : {data?.Description}</p>
                      <p>PINCode : {data?.PINCode}</p>
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
          )
        }
    </div>
  );
};
