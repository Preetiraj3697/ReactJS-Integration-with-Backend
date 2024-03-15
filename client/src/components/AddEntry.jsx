import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../helper/constant';
import './AddEntry.css'
const AddEntry = () => {
  const [name, setName] = useState('');
  const [data, setData] = useState('');

  const handleAddEntry = async () => {
    try {
      await axios.post(`${API_BASE_URL}/add`, { name, data });
      alert('Entry added successfully'); // Display pop-up message
      setName(''); // Clear input field for name
      setData(''); // Clear input field for data
    } catch (error) {
      console.error('Error adding entry:', error);
    }
  };

  return (
    <div className="container"> {/* Apply the 'container' class */}
      <h2 className="heading">Add New Entry</h2> {/* Apply the 'heading' class */}
      <div className="input-field"> {/* Apply the 'input-field' class */}
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="input-field"> {/* Apply the 'input-field' class */}
        <label htmlFor="data">Data:</label>
        <input type="text" id="data" value={data} onChange={(e) => setData(e.target.value)} />
      </div>
      <button onClick={handleAddEntry} className="submit-btn">Add Entry</button> {/* Apply the 'submit-btn' class */}
    </div>
  );
};

export default AddEntry;
