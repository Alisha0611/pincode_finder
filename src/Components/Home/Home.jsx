import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='h'>
        <div className="h-wrapper">
            <div className="h-head "><i className='fas fa-map-marker-alt'></i>  PINCODE FINDER</div>
            <div className="h-search-wrapper">
                <div className="h-static">Search by</div>
                <ul className="h-dynamic">
                    <li><span>Pincode</span></li>
                    <li><span>Location</span></li>
                    <li><span>State</span></li>
                    <li><span>District</span></li>
                </ul>
            </div>
            <div className="h-button">
                <Link to='/Pincode'>
                <button className='h-location'>Pincode</button>
                </Link>
                <Link to='/Location'>
                <button className='h-location'>Location</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home
