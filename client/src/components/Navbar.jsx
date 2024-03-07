import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { API_BASE_URL } from '../helper/constant';


const Navbar = () => {
    const [addCount, setAddCount] = useState(0);
    const [updateCount, setUpdateCount] = useState(0);
    useEffect(() => {
        fetchCount()
    },[])
    const fetchCount = async () => {
        try {
          const response = await axios.get(`${API_BASE_URL}/count`);
          const { addCount, updateCount } = response.data;
          setAddCount(addCount);
          setUpdateCount(updateCount);
        } catch (error) {
          console.error("Error fetching count:", error);
        }
      };
  return (
    <div className="navbar"> {/* Apply the 'navbar' class */}
    <NavLink to="/"><h2>Home</h2></NavLink>
    <div className='navbar-list'>
        <NavLink to="/addEntry"><h2>AddEntry</h2></NavLink>
        <h2>Add Count: {addCount}</h2>
        <h2>Update Count: {updateCount}</h2>
    </div>
</div>
  )
}

export default Navbar